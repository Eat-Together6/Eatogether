from rest_framework import serializers

from joinorders.models import JoinOrder
from orders.serializers import OrderSerializer


class JoinOrderSerializer(serializers.ModelSerializer):
    follower = serializers.SlugRelatedField(
        read_only=True,
        slug_field='username'
    )

    order = OrderSerializer(read_only=True)

    class Meta:
        model = JoinOrder
        fields = ['id', 'order', 'follower', "description", ]
