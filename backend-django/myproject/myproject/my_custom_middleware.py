from django.http import HttpResponseForbidden
from django.utils.functional import SimpleLazyObject
from rest_framework_simplejwt.authentication import JWTAuthentication


class CustomMiddleware:
    def __init__(self, get_response):
        self.get_response = get_response
        
    def __call__(self, request):
        if not self._is_admin_api_authenticated(request):
            return HttpResponseForbidden()
        response = self.get_response(request)
        
        return response
    
    def _is_admin_api_authenticated(self, request) -> bool:
        """
        request path_info 에서 admin 만 접근 가능한 API 권한을 검증
        """
        user = request.user
        request.user = SimpleLazyObject(lambda: self._get_token_user(request, user))
        is_admin_api: bool = request.path_info.startswith("/api/admin/")
        is_not_admin: bool = not request.user.is_superuser
        return False if (is_admin_api and is_not_admin) else True

    @staticmethod
    def _get_token_user(request, user):
        """
        rest_framework_simplejwt 의 JWTAuthentication 으로 로그인 user 객체를 불러오는 메서드
        """
        try:
            authenticator = JWTAuthentication()
            user, token_obj = authenticator.authenticate(request)
            return user
        except Exception:
            return user