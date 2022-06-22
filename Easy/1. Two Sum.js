/*
// <하영>[o]
// 만약에 nums를 for문으로 돌면서 하나는 저장해놓고
// 또 그다음부터 for문을 돌면서 i와 j 더한 값이 target과 같다면 반환
var twoSum = function(nums, target) {
	for(let i =0; i < nums.length; i++){
    let num = nums[i];
    for(let j = 1; j < nums.length; i++){
      if( i !== j && num + nums[j] === target){
        return [i,j]
      }
    }
  }
};
*/
