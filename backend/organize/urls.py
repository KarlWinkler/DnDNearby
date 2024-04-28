from rest_framework import routers
from django.urls import path
from . import views


router = routers.SimpleRouter()
router.register(r'character', views.CharacterViewSet)
router.register(r'note', views.NoteViewSet)

urlpatterns = router.urls
