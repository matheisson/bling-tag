from _Middleware import API
from App_Stock.requests import *
from App_Stock.models import Commodity, Firm
from django.http import JsonResponse
from App_Stock._Jobs.load_data import create_firms
from App_Stock._Jobs.update_stocks import run_updates
from django.views.decorators.csrf import csrf_exempt
from django.http import HttpResponse
from django.core.mail import send_mail
from django.conf import settings
from django.core.mail import EmailMultiAlternatives
from django.template.loader import render_to_string
from django.utils.html import strip_tags
import json


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
    print(request.firm_name)
    return {'firm': list(Firm.objects.filter(name__icontains=request.firm_name))}


def update(request):
    run_updates()
    return HttpResponse(200)


@csrf_exempt
def send_email(request):

    if request.method == 'POST':
        try:
            body = json.loads(request.body.decode("utf-8"))
            html_content = render_to_string('template.html',
                                            {
                                                'name': body['username'],
                                                'short': body['short_name'],
                                                'piece': str(body['piece']),
                                                'value': str(body['value']),
                                                'commodity': body['commodity'],
                                            })


            text_content = strip_tags(html_content)
            msg = EmailMultiAlternatives("Check what I found!", text_content, settings.DEFAULT_FROM_EMAIL, [body['email']])
            msg.attach_alternative(html_content, "text/html")
            msg.send()

            return HttpResponse(200)
        except KeyError:
            HttpResponse(404)
    return HttpResponse(400)
