from rest_framework import serializers
from rest_framework_simplejwt.tokens import RefreshToken

from accounts.models import User



class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        # TODO: 주소 리스트 추가
        fields = ['id', 'username', 'email']
