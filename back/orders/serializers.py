from rest_framework import serializers
from orders.models import Order

class OrderSerializer(serializers.ModelSerializer):
    class Meta:
        model = Order
        fields = ['id', 'leader', 'brand', 'time', 'max_joined_user', 'order_status', 'latitude', 'longitude']