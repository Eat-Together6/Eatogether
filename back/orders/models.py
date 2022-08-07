from django.db import models
from accounts.models import User
from locations.models import Location

class Order(models.Model):
    leader = models.ForeignKey(User, on_delete=models.CASCADE, related_name='users')
    brand = models.CharField(max_length=20, null=False, blank=False, unique=False)
    time = models.DateTimeField()
    description = models.TextField()
    max_joinOrder = models.PositiveIntegerField(default=0)
    ORDER_STATUS_CHOICE=(
    ('ING', 'Progressing'),
    ('FIN', 'Finish'))
    order_status=models.CharField(max_length=3, choices=ORDER_STATUS_CHOICE, default='ING')
    location = models.OneToOneField(Location, on_delete=models.CASCADE)
    created_at = models.DateTimeField(auto_now_add = True)
    updated_at = models.DateTimeField(auto_now = True)

class JoinOrder(models.Model):
    order = models.ForeignKey(Order, on_delete=models.CASCADE)
    follower = models.ForeignKey(User, on_delete=models.CASCADE)
    description = models.TextField()
    created_at = models.DateTimeField(auto_now_add = True)
    updated_at = models.DateTimeField(auto_now = True)
