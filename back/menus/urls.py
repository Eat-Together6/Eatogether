from django.urls import path
from rest_framework.urlpatterns import format_suffix_patterns
from menus import views

urlpatterns = [
    path('', views.MenuView.as_view()),
    path('<int:pk>/', views.MenuDetail.as_view()),
]

urlpatterns = format_suffix_patterns(urlpatterns)
