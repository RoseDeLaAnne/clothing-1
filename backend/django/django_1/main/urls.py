from django.urls import path

from .views import *

urlpatterns = [
    path('clothes/', get_clothes),
]
