from django.db import models
from orders.models import JoinOrder

class Menu:
    join_order = models.ForeignKey(JoinOrder, on_delete=models.CASCADE, related_name ="menus") # 1:N
    menu_name = models.CharField(max_length=50)
    menu_price = models.PositiveIntegerField()
    menu_quantity = models.PositiveIntegerField()
    
    def total_amount(self):
        return self.menu_price * self.menu_quantity