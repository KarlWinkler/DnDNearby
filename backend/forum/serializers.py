from rest_framework import serializers
from .models import Community, Post, Comment, Moderator, Like

from authentication.serializers.user_serializer import UserSerializer

class LikeSerializer(serializers.ModelSerializer):
    user = UserSerializer(read_only=True)

    class Meta:
        model = Like
        fields = '__all__'


class ModeratorSerializer(serializers.ModelSerializer):
    user = UserSerializer(read_only=True)

    class Meta:
        model = Moderator
        fields = '__all__'


class CommentSerializer(serializers.ModelSerializer):
    user = UserSerializer(read_only=True)

    class Meta:
        model = Comment
        fields = '__all__'


class PostSerializer(serializers.ModelSerializer):
    user = UserSerializer(read_only=True)
    comment = CommentSerializer(many=True, read_only=True)
    likes = serializers.SerializerMethodField()

    class Meta:
        model = Post
        fields = '__all__'

    def get_likes(self, obj):
        return obj.likes.count()


class CommunitySerializer(serializers.ModelSerializer):
    moderators = ModeratorSerializer(many=True, read_only=True)
    posts = PostSerializer(many=True, read_only=True)

    class Meta:
        model = Community
        fields = '__all__'
