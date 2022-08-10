from django.db import models

from accounts.models import User
from orders.models import Order

# follower 주문 저장을 위한 모델
class Board(models.Model):
    order = models.ForeignKey(Order, on_delete=models.CASCADE)
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    ORDER_STATUS_CHOICE=('ING', 'FIN')
    order_status = models.CharField(max_length=3, choices=ORDER_STATUS_CHOICE, default='ING')
    content = models.TextField()
