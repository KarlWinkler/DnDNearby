from rest_framework import routers
from django.urls import path
from . import views


router = routers.SimpleRouter()
router.register(r'community', views.CommunityViewSet)
router.register(r'post', views.PostViewSet)

urlpatterns = router.urls
