from rest_framework import serializers
from orders.models import Order

class OrderSerializer(serializers.ModelSerializer):
    leader = serializers.SlugRelatedField(
        read_only=True, # leader -> FK(User), 필드값을 읽기 위해 read_only
        slug_field='email' # url을 필드의 pk이 아닌 필드 그 자체로 설정(사실 보여주기용)
    )
    
    class Meta:
        model = Order
        fields = ['id', 'leader', 'brand', 'time', 'max_joined_user', 'location', 'latitude', 'longitude', 'order_status']