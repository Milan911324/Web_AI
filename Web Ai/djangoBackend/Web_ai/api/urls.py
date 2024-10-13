from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import UserViewSet,ConvertionansViewSet,ConvertionqueViewSet,AIInformationViewSet

router = DefaultRouter()

# Register viewsets with unique basenames
router.register(r'users', UserViewSet, basename='user')  # Register UserViewSet with 'user' basename
router.register(r'aiconverstionque', ConvertionqueViewSet, basename='converctionque')  # Register ConverctionViewSet with 'converction' basename
router.register(r'aiconverstionans', ConvertionansViewSet, basename='converctionans')  # Register ConverctionViewSet with 'converction' basename
router.register(r'aiinformation', AIInformationViewSet, basename='aiinformation')  # Register ConverctionViewSet with 'converction' basename


urlpatterns = [
    path('', include(router.urls)),
]
