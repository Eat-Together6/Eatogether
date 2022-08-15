from django.shortcuts import render

# Create your views here.
from django.http import Http404
from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView

from joinorders.models import JoinOrder
from joinorders.serializers import JoinOrderSerializer

from accounts.models import User

class JoinOrderView(APIView):
    def get(self, request):
        order_id = request.GET.get('order_id', None)
        if order_id is None:
            join_order = JoinOrder.objects.all()
            serializer = JoinOrderSerializer(join_order, many=True)
            return Response(serializer.data)
        else:
            join_order = JoinOrder.objects.filter(order_id=order_id)
            serializer = JoinOrderSerializer(join_order, many=True)
            return Response(serializer.data)
    
    def post(self, request):
        user = User.objects.get(id=request.data['user'])
        try:
            join_order = JoinOrder.objects.get(order_id=request.data['order_id'])
            join_order.follower = request.data['follower']
            join_order.description = request.data['description']
        except JoinOrder.DoesNotExist:
            join_order = JoinOrder.objects.create(order_id=request.data['order_id'], 
                                                  follower=user, 
                                                  description=request.data['description'])
        serializer = JoinOrderSerializer(join_order)
        return Response(serializer.data)

class JoinOrderDetail(APIView):
    def get_object(self, pk):
        try:
            return JoinOrder.objects.filter(order_id=pk)
        except JoinOrder.DoesNotExist:
            raise Http404
    
    def get(self, request, pk):
        join_orders = self.get_object(pk)
        serializer = JoinOrderSerializer(join_orders, many=True)
        return Response(serializer.data)
