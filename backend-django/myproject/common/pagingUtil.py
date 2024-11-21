# https://velog.io/@minjee98/Django-%ED%8E%98%EC%9D%B4%EC%A7%95

import math

def dictfetchall(cursor):
    columns = [col[0] for col in cursor.description]
    return [dict(zip(columns, row)) for row in cursor.fetchall()]

class CommonPage:
    
    def __init__(self, totalCnt=1, curPage=0, pageSize=10):
        # 
        self.curPage = curPage # 현재 페이지
        self.totalCnt = totalCnt # 전체 데이터 개수
        self.pageSize = pageSize # 한 페이지에 보여줄 데이터 개수
        self.totalPage = math.ceil(totalCnt/pageSize) - 1 # 전체 페이지 수

		# 10개씩 그룹을 나눔
        self.start = (self.curPage//self.pageSize) *10
        self.end = self.start + 10
        # 0~9 : self.start = 0, self.end = 10
        # 10~19 : self.start = 1, self.end = 20
        # 전체 페이지 수 보다 더 많은 페이징 되는 것을 막기 위해
        if self.end > self.totalPage: # 마지막 그룹에서 전체페이지수보다 end가 더 크면 
            self.end = self.totalPage + 1 # end를 전체페이지수 + 1로

        if self.curPage > 0: # 앞으로 이동가능
            self.isPrev = True
            self.prev_page = self.curPage - 1
        else: # 앞으로 이동 불가능
            self.isPrev = False
            self.prev_page = 0
            
        if self.curPage < self.totalPage: # 뒤로 이동가능
            self.isNext = True
            self.next_page = self.curPage + 1
        else: # 뒤로 이동 불가능
            self.isNext = False
            self.next_page = self.curPage

        self.page_range = range(self.start, self.end)