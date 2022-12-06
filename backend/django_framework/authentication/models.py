from django.db import models

from django.utils import timezone
from django.utils.translation import gettext_lazy as _

from django.contrib.auth.models import AbstractBaseUser, PermissionsMixin

from .managers import UserManager


class User(AbstractBaseUser, PermissionsMixin):
    avatar = models.ImageField(upload_to='avatars', blank=True, null=True)

    username = models.CharField(max_length=255, unique=True)
    email = models.EmailField(unique=True, blank=True, null=True)
    phone_number = models.CharField(
        max_length=255, unique=True, blank=True, null=True)

    last_name = models.CharField(max_length=255, blank=True, null=True)
    first_name = models.CharField(max_length=255, blank=True, null=True)
    middle_name = models.CharField(max_length=255, blank=True, null=True)

    is_active = models.BooleanField(verbose_name=_('Активный'), help_text=_(
        'Отметьте, если пользователь должен считаться активным. Уберите эту отметку вместо удаления учётной записи.'), default=True)
    is_staff = models.BooleanField(verbose_name=_('Статус персонала'), help_text=_(
        'Отметьте, если пользователь может входить в административную часть сайта.'), default=False)
    is_superuser = models.BooleanField(verbose_name=_('Статус суперпользователя'), help_text=_(
        'Указывает, что пользователь имеет все права без явного их назначения.'), default=False)

    date_joined = models.DateTimeField(verbose_name=_(
        'Дата регистрации'), default=timezone.now)

    USERNAME_FIELD = 'username'
    REQUIRED_FIELDS = []

    objects = UserManager()

    def __str__(self):
        return self.username
