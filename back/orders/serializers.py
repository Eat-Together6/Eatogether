from rest_framework import serializers
from orders.models import Order
from joinorders.models import JoinOrder
from locations.serializers import LocationSimpleSerializer,LocationSerializer
from joinorders.serializers import JoinOrderSerializer

class OrderSerializer(serializers.ModelSerializer):
    location_obj = LocationSimpleSerializer(source = 'location',read_only =True)
    class Meta:
        model = Order
        fields = ['id','store', 'time',  'location_obj']

class UserOrderListSerializer(serializers.ModelSerializer):
    leadOrder = OrderSerializer(source='order', read_only=True)
    class Meta:
        model = JoinOrder
        fields = '__all__'
        
class OrderDetailSerializer(serializers.ModelSerializer):
    join_order_list = JoinOrderSerializer(source = 'joinOrders',many =True, read_only = True)
    class Meta:
        model = Order
        fields = '__all__'