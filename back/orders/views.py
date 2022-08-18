from django.http import Http404
from geopy.distance import distance
from rest_framework import status
from rest_framework.views import APIView
from rest_framework.response import Response
from orders import serializers

from orders.models import Order
from joinorders.models import JoinOrder
from orders.serializers import OrderSerializer, UserOrderListSerializer

from locations.models import Location


# leader의 모든 주문 get, post
class OrderList(APIView):
    def get(self, request): # POSTMAN TEST 완료
        latitude = request.GET.get('latitude', None) # 쿼리 스트링으로 요청할 것
        longitude = request.GET.get('longitude', None)
        order_status = request.GET.get('order_status', None)

        orders = Order.objects.all()
        
        if order_status == 'ING':
            if latitude and longitude:
                order_list = []
                for order in orders:
                    current_location = (latitude, longitude,)
                    order_location = (order.location.latitude, order.location.longitude)
                    if distance(current_location, order_location).m < 150:
                        order_list.append(order)
                serializer = OrderSerializer(order_list, many=True)
                return Response(serializer.data)
        else:
            serializer = OrderSerializer(orders, many=True)
            return Response(serializer.data)

    def post(self, request): # POSTMAN TEST 완료
        location =Location.objects.get(id=request.data['location'])
        order = Order.objects.create(leader=request.user,
                                     brand=request.data['brand'],
                                     time=request.data['time'],
                                     description=request.data['description'],
                                     max_joined_user=request.data['max_joined_user'], 
                                     location=location)
        serializer = OrderSerializer(order)
        return Response(serializer.data)

# leader의 주문 상세 get, put, delete
class OrderDetail(APIView): 
    def get_object(self, pk): 
        try:
            return Order.objects.filter(pk=pk)
        except Order.DoesNotExist:
            raise Http404

    def get(self, request, pk): # POSTMAN TEST 완료
        order = self.get_object(pk)
        serializer = OrderSerializer(order)
        return Response(serializer.data)

    def put(self, request, pk): # POSTMAN TEST 완료
        order = self.get_object(pk)
        serializer = OrderSerializer(order, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, pk): # POSTMAN TEST 완료
        order = self.get_object(pk)
        order.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)

class OrdersAndJoinOrders(APIView):
    def get(self, request):
        # order history를 가져온다는 것은 order, joinorder가 모두 이뤄졌다는 것을 의미
        # 따라서 follower를 기준으로 JoinOrder를 가져와서
        # OrderSerializer로 직렬화
        joinOrders = JoinOrder.objects.filter(follower=self.request.user)
        serializer = UserOrderListSerializer(joinOrders, many=True)
        return Response(serializer.data)


    
    

        

        