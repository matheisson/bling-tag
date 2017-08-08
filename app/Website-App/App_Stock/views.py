from _Middleware import API
from App_Stock.requests import *
from App_Stock.models import Commodity, Firm
from _Jobs import run_updates
from django.http import JsonResponse
# import time


@API.endpoint(CommodityRequest)
def get_commodities(request):
    return {'commodities': [commodity for commodity in Commodity.objects.get_all_for_user(request.user)]}


@API.endpoint(FirmRequest)
def get_firms(request):
    return {'firms': [firms for firms in Firm.objects.get_all_firms_for_user(request.user)]}

