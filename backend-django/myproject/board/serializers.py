from django.db import models

from rest_framework import serializers
from board.models   import Board

class BoardCreateSerializer(serializers.ModelSerializer):

    class Meta:
        model   = Board 
        fields  = ['title', 'name', 'content'] 

class BoardSerializer(serializers.ModelSerializer):
    
    class Meta:
        model   = Board
        fields  = "__all__"         
         