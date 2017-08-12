from _Middleware import API
from App_Stock.requests import *
from App_Stock.models import Commodity, Firm
from django.http import JsonResponse
from App_Stock._Jobs.load_data import create_firms
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
