from django.http import Http404
from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView
from back import joinorders

from joinorders.models import JoinOrder
from joinorders.serializers import JoinOrderSerializer


class JoinOrderView(APIView):
    def get(self, request, format=None):
        joinorders = JoinOrder.objects.all()
        serializer = JoinOrderSerializer(joinorders, many=True)
        return Response(serializer.data)

    def post(self, request, format=None):
        order_id = request.data['order_id']
        description = request.data['description']
        follower = self.request.user

        joinorder = JoinOrder.objects.create(order_id=order_id, description=description, follower=follower)
        serializer = JoinOrderSerializer(joinorder)
        return Response(serializer.data, status=status.HTTP_201_CREATED)


class JoinOrderDetail(APIView):
    def get_object(self, pk):
        try:
            return JoinOrder.objects.filter(order_id=pk)
        except JoinOrder.DoesNotExist:
            raise Http404

    def get(self, request, pk):
        joinorders = self.get_object(pk)
        serializer = JoinOrderSerializer(joinorders, many=True)
        return Response(serializer.data)
