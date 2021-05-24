const printDiv = document.querySelector('.print');

/**
 * 124 나라의 숫자
 * 1, 2, 4만으로 숫자를 표현합니다.(변형된 3진법)
 * 1, 2, 4, 11, 12, 14, 21, 22, 24, 41, 42, 42, 44, 111 이런 순으로 숫자가 커집니다.
 */
function solution(n) {
  return n ? solution((n - (n % 3 || 3)) / 3) + (n % 3 || 4) : '';
}

const answer = solution(9);

console.log(answer);

printDiv.innerHTML = answer;

// n % 3 || 3 : n이 3으로 나누어 떨어지면 3을 반환하고 아니면 그 나머지를 반환함
// n ? x : y => n이 0이면 y를 실행(거짓) 0이 아니면 x를 실행(참)
// 10진수를 2진수로 바꾸는 알고리즘을 먼저 공부해야겠다.
