from rest_framework import serializers
from dj_rest_auth.registration.serializers import RegisterSerializer


class SignUpSerializer(RegisterSerializer):
    username = None
    name = serializers.CharField()
    phone_num = serializers.CharField()

    def get_cleaned_data(self):
        return {
            'username': self.validated_data.get('username', ''),
            'password1': self.validated_data.get('password1', ''),
            'email': self.validated_data.get('email', ''),
            'name': self.validated_data.get('name', ''),
            'phone_num': self.validated_data.get('phone_num', ''),
        }