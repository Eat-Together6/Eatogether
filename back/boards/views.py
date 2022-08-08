from django.http import Http404
from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView

from boards.models import Board
from boards.serializers import BoardSerializer


class BoardView(APIView):
    """
    List all snippets, or create a new snippet.
    """
    def get(self, request, format=None):
        boards = Board.objects.all()
        serializer = BoardSerializer(boards, many=True)
        return Response(serializer.data)

    def post(self, request, format=None):
        order_id = request.data['order_id']
        # <order_status 필드 관련 사항>
        # ORDER_STATUS_CHOICE 리스트 속 값을 사용하도록 if 문을 적용하는 방법도 있음.
        # 리스트를 사용하지 않아도 큰 문제가 없을 것 같아서 일단 아래와 같이 구현.
        order_status = request.data['order_status'] 
        content = request.data['content']
        user = self.request.user

        board = Board.objects.create(order_id=order_id, order_status=order_status, content=content, user=user)
        serializer = BoardSerializer(board)
        return Response(serializer.data, status=status.HTTP_201_CREATED)