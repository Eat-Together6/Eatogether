from django.db import models

class Order(models.Model):
    leader = models.ForeignKey(User, on_delete=models.CASCADE,related_name='orders')
    brand = models.CharField(max_length=20, null=False, blank=False, unique=False)
    time = models.DateTimeField()
    description = models.CharField(max_length=128, null=True, blank=True)
    max_joinOrder = models.PositiveIntegerField(default=0)
    ORDER_STATUS_CHOICE=(
    ('ING', 'Progressing'),
    ('FIN', 'Finish'))
    order_status=models.CharField(max_length=3, choices=ORDER_STATUS_CHOICE, default='ING')
    location = models.OneToOneField(Location, on_delete=models.CASCADE, related_name='')
    order=models.ForeignKey(Order, on_delete=models.CASCADE,related_name='join_orders')
    created_at = models.DateTimeField(auto_now_add = True)
    updated_at = models.DateTimeField(auto_now = True)

class JoinOrder:
    leader = models.ForeignKey(User, on_delete=models.CASCADE,related_name='orders')
    follower = models.ForeignKey(User, on_delete=models.CASCADE,related_name='orders')
    description = models.TextField()
    created_at = models.DateTimeField(auto_now_add = True)
    updated_at = models.DateTimeField(auto_now = True)
