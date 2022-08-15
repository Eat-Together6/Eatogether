from django.urls import path
from rest_framework.urlpatterns import format_suffix_patterns
from joinorders import views

urlpatterns = [
    path('joinorders/', views.JoinOrderView.as_view()),
    path('joinorders/<int:pk>/', views.JoinOrderDetail.as_view()),
]

urlpatterns = format_suffix_patterns(urlpatterns)
