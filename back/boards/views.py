from django.http import Http404
from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView
from ..orders.serializers import OrderSerializer

from boards.models import Board
from boards.serializers import BoardSerializer

# order에서 주문했던 사람들의 모든 주문과 모든 주문자 get, post
class BoardView(APIView):
    def get(self, request, format=None):
        boards = Board.objects.all()
        serializer = BoardSerializer(boards, many=True)
        return Response(serializer.data)

    def post(self, request, format=None):
        user = self.request.user
        order_id = request.data['order_id']
        content = request.data['content']
        
        board = Board.objects.create(user=user, order_id=order_id, content=content)
        serializer = BoardSerializer(board)
        return Response(serializer.data, status=status.HTTP_201_CREATED)
    
# order에서 주문했던 사람들의 주문 상세와 모든 주문자 상세 get, put, delete
class BoardDetail(APIView):
    def get_object(self, pk):
        try:
            return Board.objects.filter(order_id=pk)
        except Board.DoesNotExist:
            raise Http404

    def get(self, request, pk):
        boards = self.get_object(pk)
        serializer = BoardSerializer(boards, many=True)
        return Response(serializer.data)
    
    def put(self, request, pk):
        boards = self.get_object(pk)
        serializer = OrderSerializer(boards, data=request.data)
        if serializer.is_vaild():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
    def delete(self, request, pk):
        boards = self.get_object(pk)
        boards.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)