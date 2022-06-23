/*
<하영> [o]

var isPalindrome = function(x) {
  //앞에서 읽으나 뒤에서 읽으나 동일하면 true, 아니면 false
    const palindrome = x.toString().split('').reverse().join('')
    const res = parseInt(palindrome)  
   return (x === res ? true : false)
};

// ===를 사용하려면 타입까지 같아야하기 때문에 parseInt를 사용하여 정수로 반환하여 비교
// 만약 정수로 반환하지 않고 한다면 == 로 비교해야한다
*/
