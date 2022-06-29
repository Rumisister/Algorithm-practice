/**
 * @param {number[]} nums
 * @return {number}
 */

// <하영> [o]: 이중 for문을 사용하다보니 런타임이 오래걸림...


/*
var removeDuplicates = function(nums) {
    for(let i=nums.length-1;i>0;i--){
        for(let j=i-1;j>=0;j--){
            if(nums[i]===nums[j]){
                nums.splice(j,1);
            }
        }
    }
};

*/
