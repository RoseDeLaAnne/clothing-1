from django.contrib.auth.models import BaseUserManager


class UserManager(BaseUserManager):
    def create_user(self, username, password, **extra_kwargs):
        user = self.model(
            username=username,
            **extra_kwargs,
        )
        user.set_password(password)
        user.save()

        return user

    def create_superuser(self, username, password, **extra_kwargs):
        extra_kwargs.setdefault('is_active', True)
        extra_kwargs.setdefault('is_staff', True)
        extra_kwargs.setdefault('is_superuser', True)

        return self.create_user(username, password, **extra_kwargs)
