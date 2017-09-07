import json

from tastypie.exceptions import TastypieError
from tastypie.http import HttpBadRequest


class CustomBadRequest(TastypieError):
    def __init__(self, code="", message=""):
        self.response = {
            "error": {"code": code or "No error code was provided.",
                      "message": message or "No error message was provided."}}

    @property
    def response(self):
        return HttpBadRequest(
            json.dumps(self._response),
            content_type='application/json')
