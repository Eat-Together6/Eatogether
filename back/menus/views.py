from django.http import Http404
from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView

from joinorders.models import JoinOrder

from menus.models import Menu
from menus.serializers import MenuSerializer

class MenuView(APIView):
    def get(self, request): #postman 테스트 완료
        join_order_id = request.GET.get('join_order_id', None) 
        if join_order_id is None:
            menus = Menu.objects.all()
            serializer = MenuSerializer(menus, many=True)
            return Response(serializer.data)
        else: #postman 테스트 실패 : join_order_id가 주어져도 모든 menus를 받아옴.
            menu = Menu.objects.filter(join_order_id=join_order_id)
            serializer = MenuSerializer(menu, many=True)
            return Response(serializer.data)

    def post(self, request):#postman 테스트 완료
        join_order = JoinOrder.objects.get(id=request.data['join_order'])
        menu = Menu.objects.create(join_order=join_order,
                                   menu_name=request.data['menu_name'],
                                   menu_price=request.data['menu_price'],
                                   menu_quantity=request.data['menu_quantity']
                                   )
        serializer = MenuSerializer(menu)
        return Response(serializer.data)
