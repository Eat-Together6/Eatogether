from rest_framework import status
from rest_framework.views import APIView
from rest_framework.response import Response

from locations.models import Location
from locations.serializers import LocationSerializer

class LocationList(APIView):
    """
    List all snippets, or create a new snippet.
    """
    def get(self, request, format=None):
        locations = Location.objects.filter(user=self.request.user)
        serializer = LocationSerializer(locations, many=True)
        return Response(serializer.data)

    def post(self, request, format=None):
        data = request.data.copy()
        data['user'] = self.request.user.id
        serializer = LocationSerializer(data=data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)