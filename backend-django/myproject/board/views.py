from rest_framework import status
from rest_framework.generics import get_object_or_404
from rest_framework.response import Response
from rest_framework.views import APIView
from .models import Board
from .serializers import BoardSerializer

class BoardsAPIView(APIView):
    
    def get(self, request):
        boards = Board.objects.all()
        serializer = BoardSerializer(boards, many=True)           
        print(serializer.data)
        return Response(serializer.data, status=status.HTTP_200_OK)

class BoardAPIView(APIView):

    def get(self, request, pk):
        board = get_object_or_404(Board, id=pk)
        serializer = BoardSerializer(board)           
        print(serializer.data)
        return Response(serializer.data, status=status.HTTP_200_OK)

    def post(self, request):
        pass

    def delete(self, request):
        pass
    
    def update(self, request):
        pass


