from ntpath import join
from django.shortcuts import render

# Create your views here.
from django.http import Http404
from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView

from joinorders.models import JoinOrder
from joinorders.serializers import JoinOrderSerializer

from orders.models import Order
from orders.serializers import OrderSerializer

from accounts.models import User

class JoinOrderView(APIView):
    def get(self, request): # POSTMAN TEST 완료
        order_id = request.GET.get('order_id', None)
        if order_id is None:
            join_orders = JoinOrder.objects.all()
            serializer = JoinOrderSerializer(join_orders, many=True)
            return Response(serializer.data)
        else:
            join_order = JoinOrder.objects.filter(order_id=order_id)
            serializer = JoinOrderSerializer(join_order, many=True)
            return Response(serializer.data)
    
    def post(self, request): # POSTMAN TEST 완료
        order = Order.objects.get(id=request.data['order'])
        join_order = JoinOrder.objects.create(order=order,
                                              follower=request.user,
                                              description=request.data['description']
                                             )
        serializer = JoinOrderSerializer(join_order)
        return Response(serializer.data)
    
class JoinOrderDetail(APIView):
    def get_object(self, pk): # POSTMAN TEST 완료
        try:
            return JoinOrder.objects.get(pk=pk)
        except JoinOrder.DoesNotExist:
            raise Http404
    
    def get(self, request, pk): # POSTMAN TEST 완료
        join_order = self.get_object(pk)
        serializer = JoinOrderSerializer(join_order)
        return Response(serializer.data)
        
    def put(self, request, pk): # POSTMAN TEST 완료
        join_order = self.get_object(pk)
        serializer = JoinOrderSerializer(join_order, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
    def delete(self, request, pk): # POSTMAN TEST 완료
        join_order = self.get_object(pk)
        join_order.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
