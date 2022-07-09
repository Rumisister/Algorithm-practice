/**
 * @param {string} s
 * @return {number}
 */
//<하영>[o]

// 현재 글자보다 다음 글자가 값이 더 크다면 결과값에서 빼주고
// 현재 글자보다 다음 글자가 값이 더 작다면 결과값에서 더해주기

/*
var romanToInt = function(s) {
   let result = 0;
    const value = {
        'I' : 1,
        'V' : 5,
        "X" : 10,
        "L" : 50,
        "C" : 100,
        "D" : 500,
        "M" : 1000
    }
    
    for(let i = 0; i<s.length; i++){
        let currentValue = value[s[i]];
        let nextValue = value[s[i+1]]
        
        if(currentValue > nextValue){
            result -= currentValue
        }else{
            result += currentValue
        }
    }
    return result
};
*/
