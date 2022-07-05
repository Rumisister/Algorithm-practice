// 시도[x] :[0,1]이라는 digits가 들어왔을 경우 [0,2]를 return하는 것이 아닌 [2]를 return 실패

var plusOne = function(digits) {
 
    let digitstring = String(Number(digits.join('')) + 1).split('');
    return digitstring.map((val)=>Number(val));

};

// 다른사람들의 풀이보고 품

var plusOne = function(digits) {

      for(var i = digits.length - 1; i >= 0; i--){
        if(++digits[i] > 9) digits[i] = 0;
        else return digits;
      }
      digits.unshift(1);
      return digits;

};


