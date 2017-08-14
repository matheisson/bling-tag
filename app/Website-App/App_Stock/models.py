from django.db import models
from datetime import datetime
from django.core.exceptions import ObjectDoesNotExist


class CommodityManager(models.Manager):

    def get_all(self, request):
        return self.all()


class Commodity(models.Model):

    name = models.CharField(max_length=255)
    price = models.FloatField()
    picture_url = models.CharField(max_length=1000)

    objects = CommodityManager()

    def __str__(self):
        return self.name


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

    def __str__(self):
        return self.name

    objects = FirmManager()
