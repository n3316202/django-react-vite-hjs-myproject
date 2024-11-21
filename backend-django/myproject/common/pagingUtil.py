# https://velog.io/@minjee98/Django-%ED%8E%98%EC%9D%B4%EC%A7%95

import math

def dictfetchall(cursor):
    columns = [col[0] for col in cursor.description]
    return [dict(zip(columns, row)) for row in cursor.fetchall()]

class CommonPage:
    
    def __init__(self, totalCnt=1, curPage=0, pageSize=10):
        # 
        print(curPage)
        self.curPage = curPage # 현재 페이지
        self.totalCnt = totalCnt # 전체 데이터 개수
        
        self.pageSize = pageSize # 한 페이지에 보여줄 데이터 개수
        self.totalPage = math.ceil(totalCnt/pageSize) - 1 # 전체 페이지 수

		# 10개씩 그룹을 나눔
        #self.start = (self.curPage//self.pageSize) *10  + 1
        #self.end = self.start + 10
        
        self.endPage = int((math.ceil(curPage / 10.0)) * 10)
        self.startPage =self.endPage - 9 # 페이지 갯수 10개를 기준으로 했을때  


        # 전체 페이지 수 보다 더 많은 페이징 되는 것을 막기 위해
        self.realEnd =  int((math.ceil((totalCnt * 1.0) / pageSize)))
        
        if self.realEnd <= self.endPage:
            self.endPage = self.realEnd

        #시작번호가 1보다 큰경우 존재
        self.isPrev  = self.startPage > 1
	
		#realEnd가 끝번호(endPage)보다 큰 경우에만 존재
        self.isNext = self.endPage < self.realEnd
            
        self.page_range = range(self.startPage, self.endPage +1)

