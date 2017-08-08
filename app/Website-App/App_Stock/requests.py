import json


class CommodityRequest:

    auth_status = "public"
    request_method = "GET"

    def get_from_request(self, request):
        try:
            return request
        except:
            return None


class FirmRequest:

    auth_status = "public"
    request_method = "GET"

    def get_from_request(self, request):
        try:
            return request
        except:
            return None
