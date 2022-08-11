from django.db import models

from accounts.models import User
from orders.models import Order

# leader, follower 가 order 이후 실제 주문을 위한 모델
class Board(models.Model):
    order = models.ForeignKey(Order, on_delete=models.CASCADE)
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    ORDER_STATUS_CHOICE=('ING', 'FIN')
    order_status = models.CharField(max_length=3, choices=ORDER_STATUS_CHOICE, default='ING')
    content = models.TextField()
