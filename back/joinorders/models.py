from django.db import models

from accounts.models import User
from orders.models import Order


class JoinOrder(models.Model):
    order = models.ForeignKey(Order, on_delete=models.CASCADE, related_name="joinOrders")
    follower = models.ForeignKey(User, on_delete=models.CASCADE, related_name="joinOrders")
    description = models.TextField()

