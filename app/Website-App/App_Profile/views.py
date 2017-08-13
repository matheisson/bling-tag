from App_Profile.models import Profile
from App_Profile.requests import *
from _Middleware import API
from _Auth_Service import AuthService


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
    return request.user.profile
