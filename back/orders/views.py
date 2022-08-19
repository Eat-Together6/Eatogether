from ast import Return
from django.http import Http404
from geopy.distance import distance
from rest_framework import status
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.decorators import api_view
from orders import serializers

from orders.models import Order
from joinorders.models import JoinOrder
from orders.serializers import OrderSerializer,OrderDetailSerializer,OrderTotalDataSerializer

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
                                     store=request.data['store'],
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
            return Order.objects.get(pk=pk)
        except Order.DoesNotExist:
            raise Http404

    def get(self, request, pk): # POSTMAN TEST 완료
        order = self.get_object(pk)
        serializer = OrderDetailSerializer(order)
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

class OrderListByUser(APIView):
    def get(self, request):
        orders = Order.objects.filter(leader=request.user)
        joinOrders = JoinOrder.objects.filter(follower=request.user)
        
        order_list = []

        for order in orders:
            if order.order_status =='ING':
                order_list.append(order)

        for joinOrder in joinOrders:
            if joinOrder.order.order_status == 'ING':
                order_list.append(joinOrder.order)

        serializer = OrderTotalDataSerializer(order_list, many=True)
        return Response(serializer.data)

@api_view(['POST']) 
def convert_order_status(request,pk):
    user = request.user
    order = Order.objects.get(id=pk)
    if order.leader == user:
        if order.status == 'FIN':
            order.status = 'FIN'
            order.save(update_fields=['status'])
            return Response(status=status.HTTP_200_OK)
        else:
            return Response({'message':'already Done'}, status=status.HTTP_208_ALREADY_REPORTED)
    else:
        return Response(status=status.HTTP_403_FORBIDDEN)
          