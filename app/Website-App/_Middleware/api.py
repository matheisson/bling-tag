from _Serializer.serializer import Serializer as S
from _Auth_Service import AuthService
from django.contrib.auth.models import User
from django.http import JsonResponse
import json
import time

class API:

    @classmethod
    def endpoint(cls, Expected):
        def decorate(view):
            def form_response(request):
                if request.method != Expected.request_method:
                    return JsonResponse({}, status=404)
                request = Expected().get_from_request(request)
                if not request:
                    return JsonResponse({}, status=403)
                cls.get_user(request)
                if not cls.is_authenticated(request.user, Expected.auth_status):
                    return JsonResponse({}, status=401)
                return JsonResponse(S.serialize(view(request)))
            return form_response
        return decorate

    @staticmethod
    def is_authenticated(user, auth_status):
        if auth_status == "user":
            return user is not None
        return True

    @staticmethod
    def get_user(request):
        if "HTTP_AUTH_TOKEN" not in request.META:
            request.user = None
        else:
            token = request.META["HTTP_AUTH_TOKEN"]
            username = AuthService.authenticate_token(token)
            if not username:
                request.user = None
            else:
                request.user = User.objects.get(username=username)
