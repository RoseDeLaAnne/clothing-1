from rest_framework import serializers
from rest_framework.serializers import ModelSerializer

from rest_framework_simplejwt.tokens import RefreshToken

from .models import *


class UserSerializer(ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'avatar', 'username', 'email', 'phone_number', 'last_name',
                  'first_name', 'middle_name', 'is_active', 'is_staff', 'is_superuser', 'date_joined']
        # fields = '__all__'


class SignUpSerializer(ModelSerializer):
    class Meta:
        model = User
        fields = ['username', 'password']
        extra_kwargs = {
            'password': {'write_only': True}
        }

    def save(self):
        user = User(
            username=self.validated_data['username'])
        password = self.validated_data['password']
        user.set_password(password)
        user.save()

        return user
