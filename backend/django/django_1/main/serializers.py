from rest_framework import serializers
from rest_framework.serializers import ModelSerializer

from .models import *


class ClothesSerializer(ModelSerializer):
    class Meta:
        model = Clothes
        fields = '__all__'
