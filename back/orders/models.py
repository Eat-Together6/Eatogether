from django.db import models
from accounts.models import User

# Order는 주문정보를 저장하기 위한 목적
# Order인지 JoinOrder인지 구분하지 않고 Order로 통일
# View에서 Order와 JoinOrder에 대한 개별적인 함수 선언
class Order(models.Model):
    leader = models.ForeignKey(User, related_name='order_lead_user', on_delete=models.CASCADE)
    brand = models.CharField(max_length=40)
    time = models.DateTimeField()
    joined_user = models.ManyToManyField(User, related_name='order_joined_user')
    # 한 명의 follower는 여러 명의 User를 가진다
    # 한 명의 User는 여러 명의 follower를 가진다
    latitude = models.CharField(max_length=40)
    longitude = models.CharField(max_length=40)
    # 나의 위경도를 기준 150m 이내의 주문정보들을 sideBar에 띄울 orderList를 위한 필드
    
    
