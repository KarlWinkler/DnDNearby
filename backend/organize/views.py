from rest_framework import viewsets
from dndnearby.pagination import DefaultPagination

from .models import Character, Note
from .serializers import CharacterSerializer, NoteSerializer


class CharacterViewSet(viewsets.ModelViewSet):
    queryset = Character.objects.all()
    serializer_class = CharacterSerializer
    pagination_class = DefaultPagination


class NoteViewSet(viewsets.ModelViewSet):
    queryset = Note.objects.all()
    serializer_class = NoteSerializer
    pagination_class = DefaultPagination
