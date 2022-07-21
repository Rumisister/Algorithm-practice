// 시도[o] : for문으로 여러번 돌리긴했지만 이렇게 명시적으로 푸는 방법밖에 생각이 안났음..

function solution(n, lost, reserve) {
   let answer = 0;
    // 학생 수 만큼 배열만들고 유니폼 수를 1로 초기화시킴
    let nUniform = new Array(n).fill(1);
    
    for(let i=0; i<lost.length; i++){
        nUniform[lost[i]-1] --; // 잃어버린 학생한테 -1 해주고 
    }
    for(let i=0; i<reserve.length; i++){
        nUniform[reserve[i] -1] ++; // 여벌이 있으면 +1 해줌
    }
    for(let i=0; i<nUniform.length; i++){
        if(nUniform[i] === 0){
            if(nUniform[i - 1] === 2){
                nUniform[i]++;
                nUniform[i-1] --;
            }else if(nUniform[i+1] ===2){
                nUniform[i]++;
                nUniform[i+1] --
            }
        }
        if(nUniform[i] >= 1){
            answer++
        }
    }
    return answer;
}
