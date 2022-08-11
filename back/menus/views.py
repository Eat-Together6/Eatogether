from django.http import Http404
from rest_framework.response import Response
from rest_framework.views import APIView


from menus.models import Menu
from menus.serializers import MenuSerializer


class MenuView(APIView):
    def get(self, request):
        order_id = request.GET.get('order_id', None) 
        if order_id is None:
            menus = Menu.objects.all()
            serializer = MenuSerializer(menus, many=True)
            return Response(serializer.data)
        else:
            menus = Menu.objects.filter(order_id=order_id)
            serializer = MenuSerializer(menus, many=True)
            return Response(serializer.data)

    def post(self, request):
        try:
            menu = Menu.objects.get(user=self.request.user, order_id=request.data['order_id'], menu_name=request.data['menu_name'],
                                    menu_price=request.data['menu_price'], menu_quantity=request.data['menu_quantity'])
        except Menu.DoesNotExist:
            menu = Menu.objects.create(user=self.request.user, order_id=request.data['order_id'], menu_name=request.data['menu_name'],
                                    menu_price=request.data['menu_price'], menu_quantity=request.data['menu_quantity'])
        serializer = MenuSerializer(menu)
        return Response(serializer.data)


class MenuDetail(APIView):
    def get_object(self, pk):
        try:
            return Menu.objects.filter(order_id=pk)
        except Menu.DoesNotExist:
            raise Http404

    def get(self, request, pk):
        menus = self.get_object(pk)
        serializer = MenuSerializer(menus, many=True)
        return Response(serializer.data)

