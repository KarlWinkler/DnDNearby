from rest_framework import routers
from django.urls import path
from . import views


router = routers.SimpleRouter()
router.register(r'group', views.GroupViewSet)
router.register(r'groupmember', views.GroupMemberViewSet)

urlpatterns = router.urls
