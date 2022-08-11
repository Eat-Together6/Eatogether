from django.db import models

from accounts.models import User
from orders.models import Order

# Menu는 order에서 추가메뉴 작성을 위한 모델임
class Menu(models.Model):
    order = models.ForeignKey(Order, on_delete=models.CASCADE)
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    menu_name = models.CharField(max_length=50)
    menu_price = models.PositiveIntegerField()
    menu_quantity = models.PositiveIntegerField()
    
    def total_amount(self):
        return self.menu_price * self.menu_quantity