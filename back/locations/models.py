from django.db import models
from accounts.models import User

class Location:
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name="locations")
    location_nickname = models.CharField(max_length=20)
    latitude = models.FloatField(max_length=40)
    longitude = models.FloatField(max_length=40)
