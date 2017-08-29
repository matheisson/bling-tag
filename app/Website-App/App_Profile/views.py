from App_Profile.models import Profile
from App_Profile.requests import *
from _Middleware import API
from _Auth_Service import AuthService
import requests
import json


@API.endpoint(SignupRequest)
def signup_user(request):
    is_occupied = Profile.objects.check_if_occupied(request.username)
    if not is_occupied:
        Profile.objects.create_profile(request.username, request.password)
    return {'is_successful': is_occupied is False}


@API.endpoint(LoginRequest)
def login_user(request):
    user = Profile.objects.authenticate_user(request, request.username, request.password)
    if user is not None:
        token = AuthService.create_token(user.username)
    else:
        token = None
    return {"authToken": token}


@API.endpoint(LogoutRequest)
def logout_user(request):
    from django.contrib.auth import logout
    logout(request)
    return {'is_successful': True}


@API.endpoint(DetailsRequest)
def user_details(request):
    if request.user.profile.txn_hash and not request.user.profile.is_accepted:
        url = 'https://mainnet.infura.io/hTUKZ0pBlj0kC4aLduJ0'
        data = json.dumps({"jsonrpc": "2.0", "method": "eth_getTransactionByHash", "params": [str(request.user.profile.txn_hash)], "id": 1})
        response = requests.post(url, json=data)
        response_data = response.json()

        if not response_data:
            request.user.profile.is_accepted = False
        elif not response_data["result"]["blockHash"]:
            request.user.profile.is_accepted = None
        else:
            request.user.profile.is_accepted = True
        request.user.profile.save()

    return request.user.profile


@API.endpoint(PaymentDataRequest)
def payment_details(request):
    r = requests.get('https://min-api.cryptocompare.com/data/price?fsym=ETH&tsyms=CHF')
    res = r.json()
    chf = res['CHF']
    print(chf)
    price = 1/(float(chf)/0.25)
    request.user.profile.price = price
    request.user.profile.save()

    resp = {'price': price, 'wallet': 'someaddress'}
    return resp


@API.endpoint(PaymentRequest)
def get_hash(request):
    profile = request.user.profile
    profile.hash = request.hash
    profile.save()

    return {'success': True}
