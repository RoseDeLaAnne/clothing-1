from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response

from .models import *
from .serializers import *


@api_view(['GET'])
@permission_classes([IsAuthenticated])
def get_clothes(request):
    try:
        clothes = Clothes.objects.all()

        serializer = ClothesSerializer(
            clothes, many=True)

        return Response(serializer.data)
    except:
        return Response(status=404)
