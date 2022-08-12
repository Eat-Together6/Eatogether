from django.db import models
from accounts.models import User
from locations.models import Location

# order는 leader, follower 가 주문을 하고 이를 저장하기 위한 모델임
class Order(models.Model):
    leader = models.ForeignKey(User, related_name='order_lead_user', on_delete=models.CASCADE)
    brand = models.CharField(max_length=40)
    time = models.DateTimeField()
    description = models.TextField()
    
    max_joined_user = models.PositiveIntegerField(default=0)
    
    location = models.ForeignKey(Location, on_delete=models.CASCADE, null = True)
    latitude = models.CharField(max_length=40)
    longitude = models.CharField(max_length=40)
    
    ORDER_STATUS_CHOICE=(('ING', 'Collecting'), ('FIN', 'Finished'))
    order_status = models.CharField(max_length=3, choices=ORDER_STATUS_CHOICE, default='ING')
