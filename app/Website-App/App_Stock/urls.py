from django.conf.urls import url
from . import views

urlpatterns = [
    url(r'^commodities$', views.get_commodities, name='get_commodities'),
    url(r'^firm$', views.get_firms, name='get_firms'),

]
