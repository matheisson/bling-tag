#from App_Stock.models import Firm


def create_firms():
    file = open("sample_data.csv")
    i = 0

    for row in file:
        row = row.split(',')

        symbol = row[0]
        name = row[1].strip('"')

        print(symbol, name)
        i += 1
        if i == 10:
            return


create_firms()

