from django.db import models

from joinorders.models import JoinOrder


class Menu(models.Model):
    join_order = models.ForeignKey(JoinOrder, on_delete=models.CASCADE)
    menu_name = models.CharField(max_length=50)
    menu_price = models.PositiveIntegerField()
    menu_quantity = models.PositiveIntegerField()

    def total_amount(self):
        return self.menu_price * self.menu_quantity
