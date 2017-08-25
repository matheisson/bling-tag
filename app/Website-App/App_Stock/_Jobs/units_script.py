from App_Stock.models import *


def create_commodities():
    CommodityUnitRelation.objects.all().delete()
    Commodity.objects.all().delete()
    Units.objects.all().delete()

    beer = Commodity(name="Beer", price=5, picture_url='http://www.menshealth.com/sites/menshealth.com/files/beer-main_0.jpg/static/pics/beer.jpg')
    beer.save()
    coke = Commodity(name="Cocaine", price=120, picture_url='http://drugabuse.com/wp-content/uploads/drugabuse-shutterstock220086538-cocaine_feature_image-cocaine.jpg')
    coke.save()
    weed = Commodity(name="Weed", price=10, picture_url='http://canadianhempco.com/images/green-dragon-marijuana%20seeds.jpg/static/pics/weed.jpg')
    weed.save()
    bribe = Commodity(name="Bribing the Police", price=40, picture_url='http://www.onpointpreparedness.net/wp-content/uploads/2015/03/Police-Bribe-Credit-Potoscom-630x418.jpg')
    bribe.save()
    slave = Commodity(name="Roman slave", price=4500, picture_url='http://static.snopes.com/app/uploads/2016/08/slave-auction.jpg')
    slave.save()
    gold = Commodity(name="Gold", price=42.4, picture_url='http://s.marketwatch.com/public/resources/MWimages/MW-EZ870_gold_b_ZG_20161109130257.jpg')
    gold.save()
    silver = Commodity(name="Silver", price=5, picture_url='https://static1.seekingalpha.com/images/marketing_images/mining_minerals/silver_3.jpeg')
    silver.save()
    ho = Commodity(name="Window Girls in Amterdam", price=65, picture_url='https://bw-1651cf0d2f737d7adeab84d339dbabd3-gallery.s3.amazonaws.com/images/image_2184705/fe88cdd2d8c22c00b52d58769f929323_large.jpg')
    ho.save()
    champagne = Commodity(name="Champagne", price=13, picture_url='http://keyassets.timeincuk.net/inspirewp/live/wp-content/uploads/sites/34/2016/12/champagne-cork-popping-alamy-DNMH7J.jpg')
    champagne.save()
    tokyo = Commodity(name="Office Space in Tokyo", price=1209, picture_url='http://cdn-image.travelandleisure.com/sites/default/files/styles/1600x1000/public/tokyo-mud-bath-bar-mudbath0716.jpg?itok=dJ8lDXJh')
    tokyo.save()
    london = Commodity(name="Office Space in London", price=1715, picture_url='http://atom.mu/wp-content/uploads/2017/01/London-Expat-Explore-Xmas-2017.jpg')
    london.save()

    # units
    troy = Units(name="Troy Weights", list_of_units='[{"name": "Troy Pound", "multiplier": 373.2417616},{"name": "Troy Ounce",'
                                                    ' "multiplier": 31.10348013},{"name": "Troy Grain", "multiplier": 0.06479891}]')
    troy.save()

    metric = Units(name="Metric System", list_of_units='[{"name": "Kilogram", "multiplier": 1000},{"name": "Dekagram",'
                                                       ' "multiplier":10},{"name": "Gram", "multiplier": 1}]')
    metric.save()

    bottles = Units(name='Champagne Bottles', list_of_units='[{"name": "1/4", "multiplier": 0.25}, {"name": "1/2",'
                                                               ' "multiplier":0.5},{"name": "Bottle", "multiplier": 1},'
                                                               ' {"name": "Magnum", "multiplier": 2},{"name": "Jeroboam",'
                                                               ' "multiplier": 4}, {"name": "Rehoboam", "multiplier": 6},'
                                                               '{"name": "Methusela", "multiplier": 8}, {"name": "Salmanazar", "multiplier": 12}, {"name": "Balthazar", "multiplier": 16}, {"name": "Nebuchadnezzar", "multiplier": 20},{"name": "Solomon", "multiplier": 24}, {"name": "Sovereign", "multiplier": 35}, {"name": "Primat", "multiplier": 36}, {"name": "Melchizedek", "multiplier": 40}]')
    bottles.save()

    jap_area = Units(name='Japanese Area', list_of_units='[{"name": "Tsubo","multiplier":0.3025}, {"name": "Tatami", "multiplier": 0.6049972775122512}]')
    jap_area.save()

    english_area = Units(name='English Area Units', list_of_units='[{"name": "Square Feet", "multiplier": 10.763867316305},'
                                                                 '{"name": "Square Yard", "multiplier":1.1959900463011},{"name": "Acres", "multiplier": 0.00024710538146717}]')
    english_area.save()

    date = Units(name="D/M/Y", list_of_units='[{"name": "Day", "multiplier": 1}, {"name": "Month", "multiplier": 30},'
                                            ' {"name": "Year", "multiplier": 365}]')
    date.save()

    # only Silver!!
    tael = Units(name="Tael", list_of_units='[{"name": "Treasury Standard", "multiplier": 0.026659557451346308}]')
    tael.save()

    # multiply gram!!!
    tola = Units(name="Tola", list_of_units='[{"name": "Indian Tola", "multiplier": 0.085735260233307}]')
    tola.save()

    gold_troy = CommodityUnitRelation(commodity=gold, unit=troy)
    gold_troy.save()
    silver_tael = CommodityUnitRelation(commodity=silver, unit=tael)
    silver_tael.save()
    gold_tola = CommodityUnitRelation(commodity=gold, unit=tola)
    gold_tola.save()
    silver_troy = CommodityUnitRelation(commodity=silver, unit=troy)
    silver_troy.save()
    gold_metric = CommodityUnitRelation(commodity=gold, unit=metric)
    gold_metric.save()
    silver_metric = CommodityUnitRelation(commodity=silver, unit=metric)
    silver_metric.save()
    champagne_bottles = CommodityUnitRelation(commodity=champagne, unit=bottles)
    champagne_bottles.save()

    tokyo_tsubo = CommodityUnitRelation(commodity=tokyo, unit=jap_area)
    tokyo_tsubo.save()
    tokyo_eng = CommodityUnitRelation(commodity=tokyo, unit=english_area)
    tokyo_eng.save()

    london_tsubo = CommodityUnitRelation(commodity=london, unit=jap_area)
    london_tsubo.save()
    london_met = CommodityUnitRelation(commodity=london, unit=metric)
    london_met.save()
    london_eng = CommodityUnitRelation(commodity=london, unit=english_area)
    london_eng.save()








