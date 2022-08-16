from django.urls import path
from rest_framework.urlpatterns import format_suffix_patterns

from locations import views

urlpatterns = [
    path('', views.LocationList.as_view()),
]

urlpatterns = format_suffix_patterns(urlpatterns)