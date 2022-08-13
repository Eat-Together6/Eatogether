import requests
from django.shortcuts import redirect
from django.conf import settings
from django.http import JsonResponse
from json.decoder import JSONDecodeError
from rest_framework import status, viewsets, permissions
from dj_rest_auth.registration.views import SocialLoginView
from allauth.socialaccount.providers.kakao import views as kakao_view
from allauth.socialaccount.providers.oauth2.client import OAuth2Client
from allauth.socialaccount.models import SocialAccount
from rest_framework.views import APIView

from .models import User
from .serializers import UserSerializer

BASE_URL = 'http://localhost:8000/'
