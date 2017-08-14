from App_Stock.models import Firm
from datetime import datetime


def create_firms():
    file = open("App_Stock/_Jobs/sample_data.csv")

    id = 1
    for row in file:
        row = row.split(',')

        symbol = row[0]
        name = row[1].strip('"')

        price = 0


        try:
            float(row[2])
            price = row[2]
        except ValueError:
            try:
                name+" " + row[2]
                float(row[3])
                price = row[3]
            except ValueError:
                try:
                    name + " " + row[3]
                    float(row[4])
                    price = row[4]
                except ValueError:
                    name + " " + row[4]
                    price = row[5]

        print(symbol + " " + name + " " + str(price))

        Firm(id=id, name=name, short_name=symbol, stock_price=price, is_basic=False).save()

        id += 1

    return "finished"
