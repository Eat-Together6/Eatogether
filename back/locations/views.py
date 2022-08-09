from rest_framework import status
from rest_framework.views import APIView
from rest_framework.response import Response

from locations.models import Location
from locations.serializers import LocationSerializer

class LocationList(APIView):
    """
    List all snippets, or create a new snippet.
    """
    def get(self, request, format=None): # 클라이언트에서 서버로 request객체가 들어오면(data format 상관없음)
        locations = Location.objects.filter(user=self.request.user) # request객체의 user를 Location객체의 key='user'에 해당하는 value에 저장
        serializer = LocationSerializer(locations, many=True) # 이를 직렬화해서
        return Response(serializer.data) # serializer data 반환

    def post(self, request, format=None): # 클라이언트에서 서버로 request객체가 들어오면(data format 상관없음)
        data = request.data.copy() # request.data 는 immutable 하기 때문에 이를 copy해서 data인스턴스에 저장
        data['user'] = self.request.user.id # request객체의 user의 id를 data인스턴스의 key='user'에 해당하는 value에 저장
        serializer = LocationSerializer(data=data) # data인스턴스에 대해 유효성 검사
        if serializer.is_valid(): # 만약 serializer 유효하면
            serializer.save() # 저장하고
            return Response(serializer.data, status=status.HTTP_201_CREATED) # serializer data 반환하고 201 상태코드
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST) # serializer 유효하지 않다면 serializer error 반환하고 400 상태코드 