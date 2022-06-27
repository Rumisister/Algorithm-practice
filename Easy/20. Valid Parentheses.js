/**
 * @param {string} s
 * @return {boolean}
 */

//<하영> [o]

/*
var isValid = function(s) {
    let Parentheses = {
        ")" : "(",
        "}" : "{",
        "]" : "["
    }
    
    let arr = [];
    
    for(let i = 0; i<s.length; i++){
        if(s[i] === "(" || s[i] === "{" || s[i] === "["){
            arr.push(s[i])
        } else if(arr[arr.length-1] === Parentheses[s[i]]){
            arr.pop()
        }else {
            return false;
        }
    }
    return arr.length ? false:true;
};

*/
