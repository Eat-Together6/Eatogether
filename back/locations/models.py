from django.db import models
from accounts.models import User

# Location은 User의 주소를 저장하기 위한 목적
class Location(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name="locations")
    location_nickname = models.CharField(max_length=20)
    latitude = models.FloatField(max_length=40)
    longitude = models.FloatField(max_length=40)
