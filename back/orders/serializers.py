from rest_framework import serializers
from .models import Order, JoinOrder

class OrderSerializer(serializers.ModelSerializer):
    class Meta:
        model = Order
        fields = '__all__'

class JoinOrderSerializer(serializers.ModelSerializer):
    class Meta:
        model = JoinOrder
        fields = '__all__'