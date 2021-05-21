const printDiv = document.querySelector('.print');

/**
 * 정수를 내림차순으로 배치하기
 * 118372면 내림차순으로 873211을 리턴
 */
function solution(n) {
  return +String(n)
    .split('')
    .sort((a, b) => b - a)
    .join('');
}

const answer = solution(118372);

console.log(answer);

printDiv.innerHTML = answer;

// array.sort((a, b) => b - a) : 내림차순
// array.sort((a, b) => a - b) : 오름차순
