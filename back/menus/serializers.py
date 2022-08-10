from rest_framework import serializers

from menus.models import Menu


class MenuSerializer(serializers.ModelSerializer):
    user = serializers.SlugRelatedField(
        read_only=True,
        slug_field='email' # url을 필드의 pk이 아닌 필드 그 자체로 설정(사실 보여주기용)
    )

    class Meta:
        model = Menu
        fields = ['id', 'order', 'user', 'menu_name', 'menu_price', 'menu_quantity']