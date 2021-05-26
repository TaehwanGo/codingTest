const printDiv = document.querySelector('.print');

/**
 * 짝수와 홀수
 */
function solution(n) {
  return num % 2 ? 'Odd' : 'Even';
}

const answer = solution(9);

console.log(answer);

printDiv.innerHTML = answer;

//
