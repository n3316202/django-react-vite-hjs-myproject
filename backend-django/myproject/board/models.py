from django.db import models

# Create your models here.

class Board(models.Model):
    name = models.CharField(max_length= 20)
    title   = models.CharField(max_length= 200,verbose_name='title')
    content = models.CharField(max_length=2000)
    hit = models.IntegerField(default= 0)
    group = models.IntegerField(default= 0)
    step = models.IntegerField(default= 0)
    indent = models.IntegerField(default= 0)
    created_at = models.DateTimeField(auto_now_add = True)
    updated_at = models.DateTimeField(auto_now = True)   



