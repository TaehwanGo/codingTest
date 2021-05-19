const printDiv = document.querySelector('.print');

/**
 * 자리수 더하기
 * 123이면 1+2+3을 해서 6을 리턴
 */
function solution(n) {
  return String(n)
    .split('')
    .reduce((acc, cur) => acc + +cur, 0);
}

const answer = solution(123);

console.log(answer);

printDiv.innerHTML = answer;

//
