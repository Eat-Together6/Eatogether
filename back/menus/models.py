from django.db import models

from accounts.models import User
from joinorders.models import JoinOrder

# Menu는 order에서 추가메뉴 작성을 위한 모델임
class Menu(models.Model):
    join_order = models.ForeignKey(JoinOrder, on_delete=models.CASCADE)
    menu_name = models.CharField(max_length=50)
    menu_price = models.PositiveIntegerField()
    menu_quantity = models.PositiveIntegerField()
    
    def total_amount(self):
        return self.menu_price * self.menu_quantity