// 시도[x] : needle 문자열 수만큼 잘라서 비교하면되는데 못함.. 구글링해보니깐 substring으로 사용하여 동일한기를 비교함

/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */

//strStr 함수는 문자열로 된 hayStack, needle 이라는 2개의 인자를 가진다.
//needle과 일치되는 문자열이 hayStack에 있을 경우 일치되는 문자열이 시작되는 index를 반환하고, 
//그렇지 않은 경우에는 -1을 반환한다. needle이 빈 문자열일 경우 0을 반환한다.

var strStr = function(haystack, needle) {
    if(needle.length === 0){
        return 0
    }
    
    for(let i=0; i<haystack.length; i++){
        const substr = haystack.substring(i,i+ needle.length)
        if(substr === needle){
            return i
        }
    }
    return -1
};
