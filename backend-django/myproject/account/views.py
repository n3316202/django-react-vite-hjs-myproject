from django.shortcuts import render
from rest_framework import status
from rest_framework.generics import get_object_or_404
from rest_framework.response import Response
from rest_framework.views import APIView
from django.contrib.auth import authenticate, login, logout
from .serializers import UserSerializer
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer


# Create your views here.

# 로그인
class AuthView(APIView):
    
    def post(self, request):
        # django 내장 모듈 authenticate, login, logout
        # authenticate 함수는 클라이언트로 부터 입력받은 ID와 PASSWORD를 통해서 
        # 사용자 정보가 저장된 DB 내에서 해당하는 객체가 있는지 검사하고, 
        # 올바른 경우 해당 사용자 객체를 반환하고, 올바르지 않은경우에는 NONE을 반환한다.

        # login 함수는 user 를 로그인 상태로 만들어준다. 즉, authenticate 함수를 통해서 
        # DB 내에서 반환받은 객체를 받아와서 현제 session 데이터 내에 로그인 데이터를 저장한다. 
        # 또, 'request.user' 를 사용해서 현재 로그인된 사용자 정보를 가져올 수 있게 해준다.
        print()
        user = authenticate(
            username=request.data.get("username"), password=request.data.get("password")
        )

        if user is not None:
            serializer = UserSerializer(user)
            token = TokenObtainPairSerializer.get_token(user)
            refresh_token = str(token)
            access_token = str(token.access_token)
            repsonse = Response(
                {
                    "user": serializer.data,
                    "message": "login success",
                    "token": {
                        "access": access_token,
                        "refresh": refresh_token,
                    },
                },
                status=status.HTTP_200_OK,
            )
            return repsonse
        else:
            return Response(status=status.HTTP_400_BAD_REQUEST)