from django.conf.urls import url, include
from django.contrib import admin

urlpatterns = [

    url(r'^api/profile/', include('App_Profile.urls')),
    url(r'^api/stock/', include('App_Stock.urls')),
    url(r'^admin', admin.site.urls),

]
