시도[o]

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    let sArr = s.trim().split(' ');
    if(sArr.length === 0){
        return 0
    }else{
        return sArr[sArr.length -1].length
    }
};
