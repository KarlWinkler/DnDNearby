from rest_framework import serializers
from .models import Group, GroupMember

from authentication.serializers.user_serializer import UserSerializer


class GroupMemberSerializer(serializers.ModelSerializer):
    user = UserSerializer(read_only=True)

    class Meta:
        model = GroupMember
        fields = '__all__'


class GroupSerializer(serializers.ModelSerializer):
    owner = UserSerializer(read_only=True)
    members = GroupMemberSerializer(many=True, read_only=True)

    class Meta:
        model = Group
        fields = '__all__'
