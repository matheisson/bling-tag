import requests
import datetime
from App_Stock.models import Firm
import time

def run_updates():
    firms = Firm.objects.all()
    for f in firms:
        symbol = f.short_name
        time.sleep(1)
        r = requests.get('https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol='+symbol+'&interval=60min&apikey=F5BCEBV06CHGKOZO')
        stock = r.json()
        now = datetime.datetime.now()
        hour = now.hour
        if now.hour > 16 or now.hour < 9:
            hour = 16
        print("stock")
        new_stock_price = stock["Time Series (60min)"]["2017-08-07 "+str(hour)+":00:00"]["1. open"]
        firm = Firm.objects.get(short_name=symbol)
        firm.stock_price = new_stock_price
        firm.save()
