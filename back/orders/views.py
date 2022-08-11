from django.http import Http404
from geopy.distance import distance
from rest_framework import status
from rest_framework.views import APIView
from rest_framework.response import Response

from orders.models import Order
from orders.serializers import OrderSerializer


class OrderList(APIView):
    def get(self, request):
        latitude = request.GET.get('latitude', None)
        longitude = request.GET.get('longitude', None)
        
        orders = Order.objects.all()
        
        if latitude and longitude:
            order_list1 = []
            for order in orders:
                current_location = (latitude, longitude,)
                order_location = (order.latitude, order.longitude,)
                if distance(current_location, order_location).m < 150:
                    order_list1.append(order)
            serializer = OrderSerializer(order_list1, many=True)
            return Response(serializer.data)
        else:
            order_list2 = []
            for order in orders:
                current_location = (latitude, longitude,)
                order_location = (order.latitude, order.longitude,)
                if distance(current_location, order_location).m < 700:
                    order_list2.append(order)
            serializer = OrderSerializer(order_list2, many=True)
            return Response(serializer.data)

    def post(self, request):
        order = Order.objects.create(leader=self.request.user, brand=request.data['brand'], time=request.data['time'],
                                     max_joined_user=self.request.data['max_joined_user'], 
                                     latitude=request.data['latitude'], longitude=request.data['longitude'])
        
        order.joined_user.add(self.request.user)

        serializer = OrderSerializer(order)
        return Response(serializer.data)

class OrderDetail(APIView):
    def get_object(self, pk):
        try:
            return Order.objects.get(pk=pk)
        except Order.DoesNotExist:
            raise Http404

    def get(self, request, pk):
        order = self.get_object(pk)
        serializer = OrderSerializer(order)
        return Response(serializer.data)

    def put(self, request, pk):
        order = self.get_object(pk)
        serializer = OrderSerializer(order, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, pk):
        order = self.get_object(pk)
        order.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)



class OrderJoinView(APIView):
    def get_object(self, pk): # 헬퍼, get_object_or_404 직접 구현
        try: # 다음 코드 실행
            return Order.objects.get(pk=pk) # pk에 해당하는 Order객체를 반환
        except Order.DoesNotExist: # 만약 코드에 예외 발생한다면
            raise Http404 # 404에러 발생

    def post(self, request, pk): # 클라이언트에서 서버로 request객체가 들어오면(post해야 함)
        order = self.get_object(pk) # pk에 해당하는 Order객체를 반환받고
        order.joined_user.add(self.request.user) # request객체의 user를 order 인스턴스의 joined_user 필드에 추가(MTM 때문?)
        serializer = OrderSerializer(order) # 이를 직렬화해서
        return Response(serializer.data) # serializer data를 반환
