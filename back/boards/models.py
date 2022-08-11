from django.db import models

from accounts.models import User
from orders.models import Order

# Board는 order에서 주문했던 사람들의 주문 정보와 주문자 정보를 저장하기 위한 모델
class Board(models.Model):
    order = models.ForeignKey(Order, on_delete=models.CASCADE)
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    content = models.TextField()
