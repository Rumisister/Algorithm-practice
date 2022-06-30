시도[o] 

/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
     for(let i = 0; i < nums.length; i++){
        if(val == nums[i]){
            nums.splice(i, 1);
            i =- 1;
        }
    }
    return nums.length;
};

//배열 nums의 길이만큼 for문을 돌며 val과 같은 element를 만나면 배열에서 제거한다.
