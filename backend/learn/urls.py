from rest_framework import routers
from django.urls import path
from . import views


router = routers.SimpleRouter()
router.register(r'learn', views.LearnViewSet)
router.register(r'resource', views.ResourceViewSet)

urlpatterns = router.urls
