// 내 풀이

function solution(sizes){
  let big = 0;
  let small = 0;
  
  for(let len of sizes) {
  //len[0]이 가로길이, len[1]이 세로길이 이다.
    if(len[0] > len[1]){ // 가로가 더 긴 경우
      if(big < len[0]) big = len[0];
      if(small < len[1]) small = len[1];
    }
    else { // 세로가 더 긴 경우
      if(big < len[1]) big = len[1];
      if(small < len[0]) small = len[0];
    }
  };
  return big * small;
}


// 다른사람 풀이
function solution(sizes) {
    const rotated = sizes.map(([w, h]) => w < h ? [h, w] : [w, h]);

    let maxSize = [0, 0];
    rotated.forEach(([w, h]) => {
        if (w > maxSize[0]) maxSize[0] = w;
        if (h > maxSize[1]) maxSize[1] = h;
    })
    return maxSize[0]*maxSize[1];
}
