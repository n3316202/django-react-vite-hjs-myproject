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

from django.db.models.signals import post_save
from django.dispatch import receiver

@receiver(post_save, sender=Board)
def board_saved(sender, instance, created, **kwargs):
    # This block will be executed if the board was created
    if created:
        print(f"Board created: {instance.title}")
        
        if instance.group == 0:
            board = Board.objects.get(id=instance.id)
            board.group = board.id        
            board.save()
            
    else:
        # This block will be executed if the board was updated
        print(f"Board updated: {instance.title}")