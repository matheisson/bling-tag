from django.contrib import admin
from App_Stock.models import Firm, Commodity


class FirmAdmin(admin.ModelAdmin):

    search_fields = ('name', 'short_name', 'stock_price')


class CommodityAdmin(admin.ModelAdmin):

    search_fields = ('name', 'price')

admin.site.register(Firm, FirmAdmin)
admin.site.register(Commodity, CommodityAdmin)
