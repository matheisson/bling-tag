from django.conf.urls import url
from . import views

urlpatterns = [
    url(r'^commodities$', views.get_commodities, name='get_commodities'),
    url(r'^firms$', views.get_firms, name='get_firms'),
    url(r'^loader$', views.firms, name='create_firms'),
    url(r'basefirms', views.get_5_firms, name='get_basic'),
    url(r'^firm$', views.find_by_name_and_symbol, name='single_firm'),
    url(r'^allcommodities$', views.get_all_commodities, name='all_commodities'),
    url(r'^share$', views.send_email, name='send_mail'),
    url(r'^update$', views.update, name="update")
]
