import sys
from typing import Any
from django.core.management import BaseCommand
from board.models import Board


class Command(BaseCommand):
    def handle(self, *args, **options):
        print("make Board start :)")

        Board.objects.all().delete()

        for i in range(1, 376):
            board, created = Board.objects.get_or_create(name=f"테스트 board {i}",title=f"안녕하세요 {i}",group=i)
            if created:
                print(f"{i}번째 board 생성 완료")
            else:
                print(f"{i}번째 board 이미 존재")
        
        sys.stdout.write(self.style.SUCCESS("make board end :)"))
        print("id를 바꾸기")
        



        