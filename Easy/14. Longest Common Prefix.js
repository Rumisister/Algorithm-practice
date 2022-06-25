/**
 * @param {string[]} strs
 * @return {string}
 */

<하영>[o]
//한개씩 끊어서 비교하며 확인후 같으면 계속 진행 같은게 없으면 반환
//없으면 빈문자 반환

/*
var longestCommonPrefix = function(strs) {
    if(!strs.length) return '';
    
    for(let i=0; i<strs[0].length; i++){
        for(let s of strs){
            if(strs[0][i] !== s[i]){
                return s.slice(0,i)
            }
        }
    }
    return 
};
*/
