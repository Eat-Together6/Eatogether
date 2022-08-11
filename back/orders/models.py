from django.db import models
from accounts.models import User

# leader 주문 저장을 위한 모델
class Order(models.Model):
    leader = models.ForeignKey(User, related_name='order_lead_user', on_delete=models.CASCADE)
    brand = models.CharField(max_length=40)
    time = models.DateTimeField()
    max_joined_user = models.PositiveIntegerField(default=0)
    joined_user = models.ManyToManyField(User, related_name='order_joined_user')
    # 한 명의 follower는 여러 명의 User를 가진다
    # 한 명의 User는 여러 명의 follower를 가진다
    latitude = models.CharField(max_length=40)
    longitude = models.CharField(max_length=40)
    # 나의 위경도를 기준 150m 이내의 주문정보들을 sideBar에 띄울 orderList를 위한 필드
