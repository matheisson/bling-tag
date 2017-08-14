from django.contrib import admin
from App_Profile.models import Profile


class ProfileAdmin(admin.ModelAdmin):

    search_fields = ('user_obj.name', 'is_paid')


admin.site.register(Profile, ProfileAdmin)
