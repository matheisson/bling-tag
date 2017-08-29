from django.db import models
from django.contrib.auth.models import User
from django.contrib.auth import authenticate


class ProfileManager(models.Manager):

    def create_profile(self, username, password):
        user = User.objects.create_user(username=username, password=password)
        Profile(user_obj=user).save()
        return user

    def check_if_occupied(self, username):
        return self.filter(user_obj__username=username).exists()

    def authenticate_user(self, request, username, password):
        return authenticate(request, username=username, password=password)


class Profile(models.Model):

    user_obj = models.OneToOneField(User, on_delete=models.CASCADE)
    txn_hash = models.CharField(max_length=255)
    price = models.FloatField()
    is_accepted = models.BooleanField(default=None, null=True)

    objects = ProfileManager()

    def __str__(self):
        return self.user_obj.username + "'s profile'"
