from django.contrib import admin
from django.urls import include, path
from .views import AuthView

from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)

urlpatterns = [
    path('login', AuthView.as_view()),
    #path('logout', TokenRefreshView.as_view(), name='token_refresh'),        
    path('api/token', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('api/token/refresh', TokenRefreshView.as_view(), name='token_refresh'),
]

