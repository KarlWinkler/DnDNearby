from django.shortcuts import render, get_object_or_404
from django.contrib.auth import authenticate
from django.contrib.auth import login as auth_login
from django.contrib.auth import logout as auth_logout
from django.contrib.auth.models import User

from rest_framework.decorators import api_view
from rest_framework.response import Response
from .serializers.user_serializer import UserSerializer
from rest_framework import viewsets
from drf_yasg.utils import swagger_auto_schema
from drf_yasg import openapi
from rest_framework import viewsets
from rest_framework.decorators import action


# Create your views here.
def get_user(request, id):
    pass

class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    ordering = ['username']


class AuthViewSet(viewsets.ViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer

    @swagger_auto_schema(
        method='post',
        request_body=openapi.Schema(
            type=openapi.TYPE_OBJECT,
            properties={
                'username': openapi.Schema(type=openapi.TYPE_STRING),
                'password': openapi.Schema(type=openapi.TYPE_STRING),
            }
        ),
    )
    @action(detail=False, methods=['post'])
    def login(self, request):
        username = request.data['username']
        password = request.data['password']
        user = authenticate(username=username, password=password)
        if user is not None:
            auth_login(request._request, user)
            serializer = UserSerializer(user, many=False)
            return Response(serializer.data, status=200)
        else:
            return Response({'message': 'invalid credentials'}, status=401)
            # No backend authenticated the credentials

    @action(detail=False, methods=['post'])
    def logout(self, request):
        auth_logout(request)
        return Response({'message': 'logged out'}, status=200)

    @action(detail=False, methods=['post'])
    def signup(self, request):
        username = request.data['username']
        password = request.data['password']
        email = request.data['email']

        user = User.objects.filter(username=username)
        if user.exists():
            serializer = UserSerializer(user.first(), many=False)
            return Response(serializer.data, status=200)

        user = User.objects.create_user(username, email, password)
        auth_login(request._request, user)
        serializer = UserSerializer(user, many=False)
        return Response(serializer.data, status=201)

    @action(detail=False, methods=['get'])
    def user(self, request):
        if request.user.id is None:
            return Response({'message': 'not logged in'}, status=401)
        else:
            serializer = UserSerializer(request.user, many=False)
            return Response(serializer.data, status=200)
