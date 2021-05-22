const printDiv = document.querySelector('.print');

/**
 * 정수 제곱근 판별
 * n이 어떤 정수 x의 제곱이라면 x+1의 제곱을 리턴하고, 아니면 -1을 리턴
 */
function solution(n) {
  return Math.sqrt(n) === parseInt(Math.sqrt(n)) ? (Math.sqrt(n) + 1) ** 2 : -1;
}

const answer = solution(9);

console.log(answer);

printDiv.innerHTML = answer;

// ** : 제곱
// Math.sqrt(n) : n의 제곱근
