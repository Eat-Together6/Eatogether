from rest_framework import serializers

from joinorders.models import JoinOrder
from orders.serializers import OrderSerializer


class JoinOrderSerializer(serializers.ModelSerializer):
    class Meta:
        model = JoinOrder
        fields = ['id', 'order', 'follower', "description", ]
