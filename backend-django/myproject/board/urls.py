from django.contrib import admin
from django.urls import include, path
from .views import BoardAPIView,BoardsAPIView

urlpatterns = [
    path('', BoardsAPIView.as_view()),
    path('<int:pk>/', BoardAPIView.as_view()),
]
