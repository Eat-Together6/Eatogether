from django.db import models

from accounts.models import User
from orders.models import Order

# 실제 주문은 Boards에서 진행 (Order인지 JoinOrder인지 구분할 필요없음)
class Board(models.Model):
    order = models.ForeignKey(Order, on_delete=models.CASCADE)
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    ORDER_STATUS_CHOICE=(('ING', 'Collecting'), ('FIN', 'Finished'))
    order_status = models.CharField(max_length=3, choices=ORDER_STATUS_CHOICE, default='ING')
    content = models.TextField()
