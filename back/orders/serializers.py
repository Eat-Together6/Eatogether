from rest_framework import serializers
from orders.models import Order
from joinorders.models import JoinOrder
from locations.serializers import LocationSimpleSerializer,LocationSerializer
from joinorders.serializers import JoinOrderSerializer

class OrderSerializer(serializers.ModelSerializer): #location 필드의 pk만 전달하는게 아니라, location 데이터를 모두 전달하는 시리얼라이저로 변경.
    location_obj = LocationSimpleSerializer(source = 'location',read_only =True)
    class Meta:
        model = Order
        fields = ['id','store', 'time', 'description', 'location_obj']
        
class OrderDetailSerializer(serializers.ModelSerializer):
    location_obj = LocationSimpleSerializer(source = 'location',read_only =True)
    join_order_list = JoinOrderSerializer(source = 'joinOrders',many =True, read_only = True)
    class Meta:
        model = Order
        fields = '__all__'

class OrderTotalDataSerializer(serializers.ModelSerializer):
    join_order_list = JoinOrderSerializer(source = 'joinOrders',many =True, read_only = True)
    class Meta:
        model = Order
        fields = '__all__'