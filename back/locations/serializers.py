from rest_framework import serializers

from locations.models import Location


class LocationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Location
        fields = ('id', 'user', 'location_nickname', 'latitude', 'longitude',)
        extra_kwargs = {
            'user': {'write_only': True}, # 쓰기전용으로 된 필드는 직렬화된 데이터에선 보여지지 않음
        }
