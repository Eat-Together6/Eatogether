from django.http import Http404
from geopy.distance import distance
from rest_framework import status
from rest_framework.views import APIView
from rest_framework.response import Response

from orders.models import Order
from orders.serializers import OrderSerializer


class OrderList(APIView):
    def get(self, request): # 주문정보 READ
        latitude = request.GET.get('latitude', None) # 사전형(GET)으로 request객체 key='latitude' 해당하는 value 가져오기(get)
        longitude = request.GET.get('longitude', None) # 사전형(GET)으로 request객체 key='longitude' 해당하는 value 가져오기(get)
        # latitude, longitude : 현재 내가 주문하려고 하는 위치의 위경도
        
        orders = Order.objects.all() # 모든 Order객체 가져오기
        if latitude and longitude: # 모든 Order객체의 latitude필드와 longitude필드가 존재한다면
            order_list = []
            for order in orders: # 모든 Order객체를 한번씩 훑어보면서
                current_location = (latitude, longitude,) # 나의 위치
                order_location = (order.latitude, order.longitude,) # 다른 주문자의 위치
                if distance(current_location, order_location).m < 150: # 150m 거리 이내일 경우
                    order_list.append(order) # order_list에 추가하고
            serializer = OrderSerializer(order_list, many=True) # 이를 직렬화해서
            return Response(serializer.data) # serializer data를 반환
        else: # 만약 모든 Order객체의 latitude필드와 longitude필드가 존재하지 않다면
            serializer = OrderSerializer(orders, many=True) # 나의 주문만 직렬화
            return Response(serializer.data) # serializer data를 반환

    def post(self, request): # 주문정보 CREATE
        order = Order.objects.create(brand=request.data['brand'], leader=self.request.user, 
                                     latitude=request.data['latitude'], longitude=request.data['longitude'], 
                                     time=request.data['time']) 
        # 요청(request)온대로 Order객체 생성
        order.joined_user.add(self.request.user) # follower는 따로 Order객체의 joined_user 필드에 추가

        serializer = OrderSerializer(order) # 이를 직렬화해서 
        return Response(serializer.data) # serializer data를 반환

class OrderDetail(APIView): 
    def get_object(self, pk):
        try:
            return Order.objects.get(pk=pk) # pk에 해당하는 Order객체 반환
        except Order.DoesNotExist:
            raise Http404 # 만약 해당 객체가 없다면 404에러 발생

    def get(self, request, pk): # READ
        order = self.get_object(pk) # pk에 해당하는 Order객체를 반환받고
        serializer = OrderSerializer(order) # 이를 직렬화해서
        return Response(serializer.data) # serializer data를 반환

    def put(self, request, pk): # UPDATE
        order = self.get_object(pk) # pk에 해당하는 Order객체를 반환받고
        serializer = OrderSerializer(order, data=request.data) # 이를 요청받은 데이터로(put이니깐) 직렬화
        if serializer.is_valid(): # 만약 serializer 유효하면
            serializer.save() # 저장하고
            return Response(serializer.data) # serializer data를 반환
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST) # 유효하지 않다면 400에러

    def delete(self, request, pk): # DELETE
        order = self.get_object(pk) # pk에 해당하는 Order객체를 반환받고
        order.delete() # 이를 삭제
        return Response(status=status.HTTP_204_NO_CONTENT) # 204에러



class OrderJoinView(APIView):
    def get_object(self, pk): 
        try:
            return Order.objects.get(pk=pk) # pk에 해당하는 Order객체를 반환받고
        except Order.DoesNotExist:
            raise Http404 # 만약 해당 객체가 없다면 404에러 발생

    def post(self, request, pk): # CREATE
        order = self.get_object(pk) # pk에 해당하는 Order객체를 반환받고
        order.joined_user.add(self.request.user) # follower는 따로 Order객체의 joined_user 필드에 추가
        serializer = OrderSerializer(order) # 이를 직렬화
        return Response(serializer.data) # serializer data를 반환
