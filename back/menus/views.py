from django.http import Http404
from rest_framework.response import Response
from rest_framework.views import APIView

from menus.models import Menu
from menus.serializers import MenuSerializer


class MenuView(APIView):
    def get(self, request): # 클라이언트에서 서버로 request객체가 들어오면
        order_id = request.GET.get('order_id', None) 
        # 이를 사전형(GET)으로 표현한 후 key='order_id' 해당하는 value 가져와서(get) order_id 인스턴스에 대입
        # FK으로 연결된 객체를 가져올 때는 _id 를 붙여서 가져와야 함
        if order_id is None: # order_id 인스턴스가 없다면
            menus = Menu.objects.all() # 모든 Menu객체 가져와서 menus 인스턴스에 대입
            serializer = MenuSerializer(menus, many=True) # 이를 직렬화해서
            return Response(serializer.data) # serializer data 반환
        else: # order_id 인스턴스가 있다면
            menus = Menu.objects.filter(order_id=order_id) # Menu객체에서 order_id 인스턴스와 값이 동일한 order_id들만 걸러서 menus 인스턴스에 대입
            serializer = MenuSerializer(menus, many=True) # 이를 직렬화해서
            return Response(serializer.data) # serializer data 반환

    def post(self, request): # 클라이언트에서 서버로 request객체가 들어오면
        try: # 다음 코드 실행
            menu = Menu.objects.get(user=self.request.user, order_id=request.data['order_id'], menu_name=request.data['menu_name'],
                                    menu_price=request.data['menu_price'], menu_quantity=request.data['menu_quantity']) # (?)
            # request객체의 user를 Order객체의 key='user'에 해당하는 value에 저장
            # requset객체의 key='order_id'에 해당하는 value를 Order객체의 key='order_id'에 해당하는 value에 저장
            # ...
            # requset객체의 key='menu_quantity'에 해당하는 value를 Order객체의 key='menu_quantity'에 해당하는 value에 저장
            # 이 Dictionary를 menu 인스턴스에 대입 및 get
        except Menu.DoesNotExist: # 만약 코드에 예외 발생한다면(menu 인스턴스에 대입 및 get 못한다면)
            menu = Menu.objects.create(user=self.request.user, order_id=request.data['order_id'], menu_name=request.data['menu_name'],
                                    menu_price=request.data['menu_price'], menu_quantity=request.data['menu_quantity'])
            # 동일
            # 동일
            # ...
            # 동일
            # 이 Dictionary를 menu 인스턴스에 대입 및 create
        serializer = MenuSerializer(menu) # 이를 직렬화해서 
        return Response(serializer.data) # serializer data 반환


class MenuDetail(APIView):
    def get_object(self, pk): # 헬퍼, get_object_or_404 직접 구현
        try: # 다음 코드 실행
            return Menu.objects.filter(order_id=pk) # Menu객체에서 order_id 인스턴스와 값이 동일한 pk들만 걸러서 menus 인스턴스에 대입
        except Menu.DoesNotExist: # 만약 코드에 예외 발생한다면(menus 인스턴스에 대입못한다면)
            raise Http404 # 404 에러

    def get(self, request, pk): # 클라이언트에서 서버로 request객체가 들어오면(get하고 끝)
        menus = self.get_object(pk) # pk에 해당하는 객체를 반환받고 menus 인스턴스에 대입
        serializer = MenuSerializer(menus, many=True) # 이를 직렬화해서
        return Response(serializer.data) # serializer data 반환