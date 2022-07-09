# 시도[o]

def solution(array, commands):
    answer = []
    for k in commands:
        a = array[k[0]-1:k[1]]
        a.sort()
        answer.append(a[k[2]-1])
        
    return answer
