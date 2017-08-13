from _Middleware import API
from App_Stock.requests import *
from App_Stock.models import Commodity, Firm
from django.http import JsonResponse
from App_Stock._Jobs.load_data import create_firms
from django.views.decorators.csrf import csrf_exempt
from django.http import HttpResponse
from django.core.mail import send_mail
from django.core import mail
from django.conf import settings
import json
# import time


@API.endpoint(CommodityRequest)
def get_commodities(request):
    return {'commodities': [commodity for commodity in Commodity.objects.get_all_for_user(request.user)]}

@API.endpoint(CommodityRequest)
def get_all_commodities(request):
    return {'all_commodities': [commodity for commodity in Commodity.objects.get_all(request)]}


@API.endpoint(FirmRequest)
def get_firms(request):
    return {'firms': [firms for firms in Firm.objects.get_all_firms_for_user(request.user)]}


def firms(self):
    create_firms()
    return JsonResponse({'success': True})


@API.endpoint(FirmRequest)
def get_5_firms(request):
    return {'baseFirms': list(Firm.objects.get_base_firms(request))}


@API.endpoint(OneFirm)
def find_by_name_and_symbol(request):
    return {'firm': Firm.objects.get_or_none(name=request.firm_name, short_name=request.symbol)}


@csrf_exempt
def send_email(request):

    if request.method == 'POST':
        try:
            body = json.loads(request.body.decode("utf-8"))
            message = body['username'] + " Sent this message to You from Bling tag: My " + str(body['piece']) + " pieces of " + body['short_name'] + " share(s) " \
                "worth " + str(body['value']) + " " + body['commodity'] + " I invite You to try it as well!"

            send_mail(
                "check it out",
                message,
                settings.DEFAULT_FROM_EMAIL,
                [body['email']],
            )

            return HttpResponse(200)
        except KeyError:
            HttpResponse(404)
    return HttpResponse(400)
