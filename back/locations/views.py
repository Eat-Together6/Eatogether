from warnings import catch_warnings
from rest_framework import status
from rest_framework.views import APIView
from rest_framework.response import Response

from locations.models import Location
from locations.serializers import LocationSerializer

class LocationList(APIView):
    def get(self, request, format=None):
        if self.request.user.is_authenticated:
            locations = Location.objects.filter(user=self.request.user)
            serializer = LocationSerializer(locations, many=True)
            return Response(serializer.data, status=status.HTTP_200_OK)
        else:
            return Response(status=status.HTTP_403_FORBIDDEN)

    def post(self, request, format=None):
        data = request.data.copy()
        data['user'] = self.request.user.id
        serializer = LocationSerializer(data=data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
    def delete(self, request, pk):
        location = self.get_object(pk)
        location.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
    