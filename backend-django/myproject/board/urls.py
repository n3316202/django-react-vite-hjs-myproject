from django.contrib import admin
from django.urls import include, path
from .views import BoardAPIView, BoardViewSet
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register("",BoardViewSet)

urlpatterns = [
    #path('', BoardsAPIView.as_view()),
    path('', include(router.urls)),
    path('<int:pk>/', BoardAPIView.as_view()),
    #path('reply_shape/', BoardViewSet.as_view({'get': 'reply_shape'})),
]
