from django.http import Http404
from rest_framework.response import Response
from rest_framework.views import APIView


from menus.models import Menu
from menus.serializers import MenuSerializer

# order에서 주문하는 leader와 follwer의 모든 메뉴 get, post
class MenuView(APIView):
    def get(self, request):
        join_order_id = request.GET.get('join_order_id', None) 
        if join_order_id is None:
            menus = Menu.objects.all()
            serializer = MenuSerializer(menus, many=True)
            return Response(serializer.data)
        else:
            menus = Menu.objects.filter(join_order_id=join_order_id)
            serializer = MenuSerializer(menus, many=True)
            return Response(serializer.data)

    def post(self, request):
        try:
            menu = Menu.objects.get(join_order_id=request.data['join_order_id'])
            menu.menu_name = request.data['menu_name']
            menu.menu_price = request.data['menu_price']
            menu.menu_quantity = request.data['menu_quantity']         
        except Menu.DoesNotExist:
            menu = Menu.objects.create(join_order_id=request.data['join_order_id'], menu_name=request.data['menu_name'],
                                    menu_price=request.data['menu_price'], menu_quantity=request.data['menu_quantity'])
        serializer = MenuSerializer(menu)
        return Response(serializer.data)

# order에서 주문하는 leader와 follower의 메뉴 상세 get
class MenuDetail(APIView):
    def get_object(self, pk):
        try:
            return Menu.objects.filter(join_order_id=pk)
        except Menu.DoesNotExist:
            raise Http404

    def get(self, request, pk):
        menus = self.get_object(pk)
        serializer = MenuSerializer(menus, many=True)
        return Response(serializer.data)

