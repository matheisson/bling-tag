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


class OneFirm:
    auth_status = "public"
    request_method = "GET"

    def get_from_request(self, request):
        try:
            # validate query param!
            request.firm_name = request.GET['name']

            return request
        except:
            return None


class RelatedUnitRequest:
    auth_status = "public"
    request_method = "GET"

    def get_from_request(self, request):
        try:
            request.commodity = request.GET['commodity']
            return request
        except:
            return None