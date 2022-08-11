from django.http import Http404
from geopy.distance import distance
from rest_framework import status
from rest_framework.views import APIView
from rest_framework.response import Response

from orders.models import Order
from orders.serializers import OrderSerializer

# leader, follower 들의 모든 주문 get, post
class OrderList(APIView):
    def get(self, request):
        latitude = request.GET.get('latitude', None)
        longitude = request.GET.get('longitude', None)
        order_status = request.GET.get('order_status', None)
        
        orders = Order.objects.all()
        
        if order_status == 'ING':
            if latitude and longitude:
                order_list = []
                for order in orders:
                    current_location = (latitude, longitude,)
                    order_location = (order.latitude, order.longitude,)
                    if distance(current_location, order_location).m < 150:
                        order_list.append(order)
                serializer = OrderSerializer(order_list, many=True)
                return Response(serializer.data)
        else:
            serializer = OrderSerializer(orders, many=True)
            return Response(serializer.data)

    def post(self, request):
        order = Order.objects.create(leader=self.request.user, joined_user=self.request.user,
                                     brand=request.data['brand'], time=request.data['time'],
                                     max_joined_user=self.request.data['max_joined_user'], 
                                     latitude=request.data['latitude'], longitude=request.data['longitude'])
        serializer = OrderSerializer(order)
        return Response(serializer.data)

# leader, follower 들의 주문 상세 get, put, delete
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


# order에 참여하는 사람들 post
class OrderJoinView(APIView):
    def get_object(self, pk):
        try:
            return Order.objects.get(pk=pk)
        except Order.DoesNotExist:
            raise Http404

    def post(self, request, pk):
        order = self.get_object(pk)
        order.joined_user.add(self.request.user)
        serializer = OrderSerializer(order)
        return Response(serializer.data)
