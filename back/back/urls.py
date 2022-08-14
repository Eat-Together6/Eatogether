from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('locations/', include('locations.urls')),
    path('joinorders/', include('orders.urls')),
    path('menus/', include('menus.urls')),
]

