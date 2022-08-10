from rest_framework import serializers

from menus.models import Menu


class MenuSerializer(serializers.ModelSerializer):
    class Meta:
        model = Menu
        fields = ['id', 'order', 'menu_name', 'menu_price', 'menu_quantity']
