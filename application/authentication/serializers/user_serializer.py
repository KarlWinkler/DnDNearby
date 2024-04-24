from rest_framework.serializers import ModelSerializer
from rest_framework import serializers
from django.contrib.auth.models import User


class UserSerializer(ModelSerializer):
  class Meta:
    model = User
    fields = '__all__'
