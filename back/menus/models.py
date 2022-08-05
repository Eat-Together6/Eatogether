from django.db import models
from orders.models import JoinOrder


class Menu:
    join_order = models.ForeignKey(JoinOrder, on_delete=models.CASCADE, related_name = "menus")
    name = models.CharField()
    price = models.PositiveIntegerField()
    number = models.PositiveIntegerField()
    
    def total_amount(self):
        return self.price * self.number