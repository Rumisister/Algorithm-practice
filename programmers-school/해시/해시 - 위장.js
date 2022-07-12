//시도[x] : for in 문으로 모든경우의수를 곱해준 다음에 아예입지않는 경우를 제외해줘야하는 생각을..못함

// 나의 풀이
function solution(clothes) {
    let answer = 1;
    let obj = {};
    
    for(let i=0; i<clothes.length; i++){
        obj[clothes[i][1]] = (obj[clothes[i][1]] || 1) +1
    }
}

// 다른 사람 풀이

function solution(clothes) {
    let answer = 1;
    let obj = {};
    
    for(let i=0; i<clothes.length; i++){
        obj[clothes[i][1]] = (obj[clothes[i][1]] || 1) +1
    }
    for(let j in obj){
        answer *= obj[j]
    }
    return answer -1
}
