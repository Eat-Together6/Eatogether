from django.http import Http404
from geopy.distance import distance
from rest_framework import status
from rest_framework.views import APIView
from rest_framework.response import Response

from orders.models import Order
from orders.serializers import OrderSerializer


class OrderList(APIView):
    def get(self, request): # 클라이언트에서 서버로 request객체가 들어오면
        latitude = request.GET.get('latitude', None) # 이를 사전형(GET)으로 표현한 후 key='latitude' 해당하는 value 가져와서(get) latitude 인스턴스에 대입(주문자의 위도)
        longitude = request.GET.get('longitude', None) # 이를 사전형(GET)으로 표현한 후 key='longitude' 해당하는 value 가져와서(get) longitude 인스턴스에 대입(주문자의 경도)
        # latitude 인스턴스: 주문자의 위도
        # longitude 인스턴스: 주문자의 경도
        
        orders = Order.objects.all() # 모든 Order객체 가져와서 orders 인스턴스에 대입
        
        if latitude and longitude: # latitude 인스턴스와 longitude 인스턴스가 존재한다면
            order_list1 = [] # 빈 리스트1
            for order in orders: # orders 인스턴스(모든 Order객체)를 훑어보면서
                current_location = (latitude, longitude,) # 주문자의 위치
                order_location = (order.latitude, order.longitude,) # 다른 모든 주문자의 위치
                if distance(current_location, order_location).m < 150: # 주문자와 다른 주문자의 거리가 150m 이내일 경우
                    order_list1.append(order) # order_list에 추가하고
            serializer = OrderSerializer(order_list1, many=True) # 이를 직렬화해서
            return Response(serializer.data) # serializer data를 반환
        else: # latitude 인스턴스와 longitude 인스턴스가 존재하지 않다면
            order_list2 = [] # 빈 리스트2
            for order in orders: # orders 인스턴스(모든 Order객체)를 훑어보면서
                current_location = (latitude, longitude,) # 주문자의 위치
                order_location = (order.latitude, order.longitude,) # 다른 모든 주문자의 위치
                if distance(current_location, order_location).m < 700: # 주문자와 다른 주문자의 거리가 700m 이내일 경우
                    order_list2.append(order) # order_list에 추가하고
            serializer = OrderSerializer(order_list2, many=True) # orders 인스턴스(모든 Order객체) 직렬화해서
            return Response(serializer.data) # serializer data를 반환

    def post(self, request): # 클라이언트에서 서버로 request객체가 들어오면
        order = Order.objects.create(leader=self.request.user, brand=request.data['brand'], time=request.data['time'],
                                     max_joined_user=self.request.data['max_joined_user'], 
                                     latitude=request.data['latitude'], longitude=request.data['longitude'])
        # request객체의 user를 Order객체의 key='leader'에 해당하는 value에 저장 
        # requset객체의 key='brand'에 해당하는 value를 Order객체의 key='brand'에 해당하는 value에 저장
        # ... 
        # requset객체의 key='time'에 해당하는 value를 Order객체의 key='time'에 해당하는 value에 저장
        # 이 Dictionary를 order 인스턴스에 대입
        
        order.joined_user.add(self.request.user) # request객체의 user를 order 인스턴스의 joined_user 필드에 추가(MTM 때문?)

        serializer = OrderSerializer(order) # 이를 직렬화해서 
        return Response(serializer.data) # serializer data를 반환

class OrderDetail(APIView): # 특정 주문
    def get_object(self, pk): # 헬퍼, get_object_or_404 직접 구현
        try: # 다음 코드 실행
            return Order.objects.get(pk=pk) # pk에 해당하는 Order객체 반환
        except Order.DoesNotExist: # 만약 코드에 예외 발생한다면
            raise Http404 # 404에러 발생

    def get(self, request, pk): # 클라이언트에서 서버로 request객체가 들어오면(get하고 끝)
        order = self.get_object(pk) # pk에 해당하는 Order객체를 반환받고 order인스턴스에 대입
        serializer = OrderSerializer(order) # 이를 직렬화해서
        return Response(serializer.data) # serializer data 반환

    def put(self, request, pk): # 클라이언트에서 서버로 request객체가 들어오면(put해야 함)
        order = self.get_object(pk) # pk에 해당하는 Order객체를 반환받고 order 인스턴스에 대입
        serializer = OrderSerializer(order, data=request.data) # 이를 직렬화하되 request객체 data에 대해 유효성 검사
        if serializer.is_valid(): # 만약 serializer 유효하면
            serializer.save() # 저장하고
            return Response(serializer.data) # serializer data를 반환
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST) # 유효하지 않다면 400에러

    def delete(self, request, pk): # 클라이언트에서 서버로 request객체가 들어오면(만져서 update해야 함)
        order = self.get_object(pk) # pk에 해당하는 Order객체를 반환받고
        order.delete() # 이를 삭제
        return Response(status=status.HTTP_204_NO_CONTENT) # 204에러 (?)



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
