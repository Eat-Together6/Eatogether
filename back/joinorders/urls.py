from django.urls import path
from rest_framework.urlpatterns import format_suffix_patterns
from joinorders import views

urlpatterns = [
    path('', views.JoinOrderView.as_view()),
    path('<int:pk>/', views.JoinOrderDetail.as_view()),
]

urlpatterns = format_suffix_patterns(urlpatterns)
