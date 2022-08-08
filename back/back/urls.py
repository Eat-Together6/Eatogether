from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('locations/', include('locations.urls')),
    path('orders/', include('orders.urls')),
]

