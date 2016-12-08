from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework.reverse import reverse

from api.serializers import ArticleSerializer
from app.models import Article


@api_view(['GET'])
def get_root(request):
    return Response({
        'articles': reverse('articles', request=request),
    })


@api_view(['GET'])
def get_article_list(request):
    article = Article.objects.all()
    serializer = ArticleSerializer(article, many=True)
    return Response(serializer.data)
