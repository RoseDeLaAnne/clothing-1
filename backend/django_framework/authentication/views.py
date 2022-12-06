from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response

from .models import *
from .serializers import *


@api_view(['GET'])
@permission_classes([IsAuthenticated])
def get_users(request):
    try:
        users = User.objects.all()

        serializer = UserSerializer(
            users, context={'request': request}, many=True)

        return Response(serializer.data)
    except:
        return Response(status=404)
