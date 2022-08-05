from django.db import models
from accounts.models import User
from locations.models import Location

class Order(models.Model):
    leader = models.ForeignKey(User, on_delete=models.CASCADE, related_name='users') # 1:N
    brand = models.CharField(max_length=20, null=False, blank=False, unique=False)
    time = models.DateTimeField()
    description = models.TextField()
    max_joinOrder = models.PositiveIntegerField(default=0)
    ORDER_STATUS_CHOICE=(
    ('ING', 'Progressing'),
    ('FIN', 'Finish'))
    order_status=models.CharField(max_length=3, choices=ORDER_STATUS_CHOICE, default='ING')
    location = models.OneToOneField(User, on_delete=models.CASCADE, related_name='location') # 1:N
    created_at = models.DateTimeField(auto_now_add = True)
    updated_at = models.DateTimeField(auto_now = True)

class JoinOrder(models.Model):
    order = models.ForeignKey(Order, on_delete=models.CASCADE,related_name='join_orders') # 1:N
    follower = models.ForeignKey(User, on_delete=models.CASCADE, related_name='orders')
    description = models.TextField()
    created_at = models.DateTimeField(auto_now_add = True)
    updated_at = models.DateTimeField(auto_now = True)
