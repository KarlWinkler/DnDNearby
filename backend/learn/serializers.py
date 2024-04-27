from rest_framework import serializers
from .models import Learn, Resource

class LearnSerializer(serializers.ModelSerializer):
    class Meta:
        model = Learn
        fields = '__all__'


class ResourceSerializer(serializers.ModelSerializer):
    class Meta:
        model = Resource
        fields = '__all__'
