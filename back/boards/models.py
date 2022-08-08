from django.db import models

from accounts.models import User
from orders.models import Order

class Board(models.Model):
    order = models.ForeignKey(Order, on_delete=models.CASCADE)
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    ORDER_STATUS_CHOICE=(('ING', 'Progressing'), ('FIN', 'Finish'))
    order_status = models.CharField(max_length=3, choices=ORDER_STATUS_CHOICE, default='ING')
    content = models.TextField()
