from rest_framework import viewsets
from dndnearby.pagination import DefaultPagination

from .models import Learn, Resource
from .serializers import LearnSerializer, ResourceSerializer


class LearnViewSet(viewsets.ModelViewSet):
    queryset = Learn.objects.all()
    serializer_class = LearnSerializer


class ResourceViewSet(viewsets.ModelViewSet):
    queryset = Resource.objects.all()
    serializer_class = ResourceSerializer
    pagination_class = DefaultPagination
