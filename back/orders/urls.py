from django.urls import path
from rest_framework.urlpatterns import format_suffix_patterns

from orders import views

urlpatterns = [
    path('', views.OrderList.as_view()),
    path('user/', views.OrderListByUser.as_view()),
    path('<int:pk>', views.OrderDetail.as_view()),
]

urlpatterns = format_suffix_patterns(urlpatterns)