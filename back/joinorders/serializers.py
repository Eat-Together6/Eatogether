from rest_framework import serializers

from joinorders.models import JoinOrder

from menus.serializers import MenuSerializer

class JoinOrderSerializer(serializers.ModelSerializer):
    menu_list = MenuSerializer(source = 'menus',many=True,read_only=True)    
    class Meta:
        model = JoinOrder
        fields = ['id', 'order', 'follower', "description", 'menu_list']
