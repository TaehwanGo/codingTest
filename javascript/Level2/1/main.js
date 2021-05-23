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

// later
