from rest_framework import serializers

from boards.models import Board
from orders.serializers import OrderSerializer


class BoardSerializer(serializers.ModelSerializer):
    user = serializers.SlugRelatedField(
        read_only=True,
        slug_field='username'
    )

    order = OrderSerializer(read_only=True)

    class Meta:
        model = Board
        fields = ['id', 'user', 'order_status', "content", "order", ]
