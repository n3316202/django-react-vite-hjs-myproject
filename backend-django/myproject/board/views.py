from rest_framework import status
from rest_framework.generics import get_object_or_404
from rest_framework.response import Response
from rest_framework.views import APIView
from .models import Board
from .serializers import BoardSerializer
from rest_framework import generics,viewsets
from rest_framework.permissions import IsAuthenticated
from rest_framework_simplejwt.authentication import JWTAuthentication
from rest_framework.decorators import action

from django.db.models import F
from rest_framework.decorators import permission_classes
from rest_framework.permissions import IsAuthenticated

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


class BoardViewSet(viewsets.ModelViewSet):
    queryset = Board.objects.all().order_by('-group', 'step')
    serializer_class = BoardSerializer
    #permission_classes = [IsAuthenticated]
    #authentication_classes = [JWTAuthentication]

    #"select * from mvc_board order by bgroup desc, bstep asc";
    #insert into mvc_board (bId, bName, bTitle, bContent, bGroup, bStep, bIndent) values (mvc_board_seq.nextval, #{bName}, #{bTitle},#{bContent}, #{bGroup}, #{bStep}+1, #{bIndent}+1)
	#update mvc_board set bStep = bStep + 1 where bGroup = ? and bStep > ?
    
    @action(detail=False, methods=['PUT']) #특정한 게시판을 위한것이 아니므로 detail=False로
    def reply_shape(self, request):
        
        group = request.data.get('group')
        step = request.data.get('step')
        indent = request.data.get('indent')

        print(group, step, indent)
        
        #Python 메모리로 가져오지 않고, 모델 필드 값을 참조하고 이를 데이터베이스에서 사용하여 작업
        Board.objects.filter(group=group, step__gt=step).update(step=F('step') + 1)
       
        return Response("success", status=status.HTTP_200_OK)
    
    @action(detail=False, methods=['POST'], permission_classes = [IsAuthenticated],authentication_classes = [JWTAuthentication])
    def user_write(self, request):
        print('안녕하세요')
        return Response("success", status=status.HTTP_200_OK)


