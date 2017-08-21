from django.contrib import admin
from App_Stock.models import Firm, Commodity, Units, CommodityUnitRelation


class FirmAdmin(admin.ModelAdmin):

    search_fields = ('name', 'short_name', 'stock_price')


class CommodityAdmin(admin.ModelAdmin):

    search_fields = ('name', 'price')


class UnitsAdmin(admin.ModelAdmin):

    search_field = 'name'


class CommodityUnitAdmin(admin.ModelAdmin):

    search_fields = ('unit', 'commodity')


admin.site.register(Firm, FirmAdmin)
admin.site.register(Commodity, CommodityAdmin)
admin.site.register(Units, UnitsAdmin)
admin.site.register(CommodityUnitRelation, CommodityUnitAdmin)

