from django.db import models


class CommodityManager(models.Manager):

    def get_all_for_user(self, user):
        if not user.is_authenticated:
            return self.filter(visibility='for free')

        if user.profile.is_paid:
            return self.all()

        if user.profile.is_in_trial_time:
            return self.filter(visibility__in=['for registered', 'for free'])

        return self.filter(visibility='for free')


class Commodity(models.Model):

    name = models.CharField(max_length=255)
    price = models.FloatField()
    picture_url = models.CharField(max_length=1000)
    visibility = models.CharField(max_length=255)  # for free/ for registered/ for paid

    objects = CommodityManager()


class FirmManager(models.Manager):

    def get_all_firms_for_user(self, user):
        if not user.is_authenticated:
            return self.filter(visibility='for free')

        if user.profile.is_paid:
            return self.all()
            
        if user.profile.is_in_trial_time:
            return self.filter(visibility__in=['for registered', 'for free'])

        return self.filter(visibility='for free')


class Firm(models.Model):

    name = models.CharField(max_length=255)
    stock_price = models.FloatField()
    short_name = models.CharField(max_length=255)
    visibility = models.CharField(max_length=255)

    objects = FirmManager()