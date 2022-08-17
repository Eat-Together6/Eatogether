from rest_framework import serializers
from orders.models import Order
from joinorders.models import JoinOrder

class OrderSerializer(serializers.ModelSerializer):
    class Meta:
        model = Order
        fields = ['id', 'leader', 'brand', 'time', 'max_joined_user', 'location', 'order_status']

class UserOrderListSerializer(serializers.ModelSerializer):
    leadOrder = OrderSerializer(source='order', read_only=True)
    class Meta:
        model = JoinOrder
        fields = '__all__'