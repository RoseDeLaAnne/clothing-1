from rest_framework import serializers
from rest_framework.serializers import ModelSerializer

from .models import *


class UserSerializer(ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'avatar', 'username', 'email', 'phone_number', 'last_name', 'first_name', 'middle_name', 'is_active', 'is_staff', 'is_superuser', 'date_joined']
        # fields = '__all__'
