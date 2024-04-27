from rest_framework import viewsets
from dndnearby.pagination import DefaultPagination

from .models import Group, GroupMember
from .serializers import GroupSerializer, GroupMemberSerializer


class GroupViewSet(viewsets.ModelViewSet):
    queryset = Group.objects.all()
    serializer_class = GroupSerializer
    pagination_class = DefaultPagination


class GroupMemberViewSet(viewsets.ModelViewSet):
    queryset = GroupMember.objects.all()
    serializer_class = GroupMemberSerializer
