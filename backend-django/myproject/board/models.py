from django.db import models
from django.contrib.auth.models import User


# Create your models here.

class Board(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE) #추가
    name = models.CharField(max_length= 20)
    title   = models.CharField(max_length= 200,verbose_name='title')
    content = models.CharField(max_length=2000)
    hit = models.IntegerField(default= 0)
    group = models.IntegerField(default= 0)
    step = models.IntegerField(default= 0)
    indent = models.IntegerField(default= 0)
    created_at = models.DateTimeField(auto_now_add = True)
    updated_at = models.DateTimeField(auto_now = True)   

    def __str__(self) -> str:
        return self.title

