from django.db import models
from django.core.exceptions import ObjectDoesNotExist


class CommodityManager(models.Manager):

    def get_all(self, request):
        return self.all()


class Commodity(models.Model):

    name = models.CharField(max_length=255)
    price = models.FloatField()
    picture_url = models.CharField(max_length=1000)
    visibility = models.CharField(max_length=255)  # for free/ for registered/ for paid

    objects = CommodityManager()


class FirmManager(models.Manager):

    def get_base_firms(self, request):
        return self.filter(is_basic=True)

    def get_or_none(self, **kwargs):

        try:
            return self.get(**kwargs)
        except Firm.DoesNotExist:
            return None


class Firm(models.Model):

    name = models.CharField(max_length=255)
    stock_price = models.FloatField(default=0)
    short_name = models.CharField(max_length=255)
    is_basic = models.BooleanField(default=False)

    objects = FirmManager()
