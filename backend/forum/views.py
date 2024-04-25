from rest_framework import viewsets
from dndnearby.pagination import DefaultPagination

from .models import Community, Post, Comment
from .serializers import CommunitySerializer, PostSerializer, CommentSerializer

class CommunityViewSet(viewsets.ModelViewSet):
    queryset = Community.objects.all()
    serializer_class = CommunitySerializer


class PostViewSet(viewsets.ModelViewSet):
    queryset = Post.objects.all()
    serializer_class = PostSerializer
    pagination_class = DefaultPagination
