import requests
import datetime
from App_Stock.models import Firm
import time


def date_formatter(n):
    length = len(str(n))
    if length < 2:
        return "0" + str(n)
    return str(n)


def run_updates():
    firms = Firm.objects.all()
    for f in firms:
        symbol = f.short_name
        time.sleep(0.31)
        r = requests.get('https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol='+symbol+'&interval=60min&apikey=F5BCEBV06CHGKOZO')
        stock = r.json()

        now = datetime.datetime.now()

        year = date_formatter(now.year)
        month = date_formatter(now.month)
        day = date_formatter(now.day)
        hour = date_formatter(now.hour)

        if int(hour) > 16 or int(hour) < 10:
            hour = str(16)

        print("stock")
        # new_stock_price = stock["Time Series (60min)"][""+year+"-"+month+"-"+day+" " + hour + ":00:00"]["1. open"]
        try:
            new_stock_price = stock["Time Series (60min)"][""+year+"-"+month+"-11 " + hour + ":00:00"]["1. open"]
            print(""+year+"-"+month+"-11 " + hour + ":00:00  ------ correct")
        except KeyError:
            try:
                print(f.name)
                print(""+year+"-"+month+"-11 " + hour + ":00:00")
                new_stock_price = stock["Time Series (60min)"]["" + year + "-" + month + "-11 10:00:00"]["1. open"]
            except KeyError:
                print(firm.name + " has its original price, something went wrong with the api data")
                new_stock_price = firm.stock_price


        try:
            firm = Firm.objects.get(short_name=symbol)
        except Firm.MultipleObjectsReturned:
            firm = Firm.objects.get(short_name=symbol).first()
            print(firm.name + "found more than 1 time")

        firm.stock_price = new_stock_price
        firm.save()
