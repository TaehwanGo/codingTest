const printDiv = document.querySelector('.print');

/**
 * 자연수 뒤집어 배열로 만들기
 * 12345를 뒤집어 [5,4,3,2,1]로 만들기
 */
function solution(n) {
  return String(n)
    .split('')
    .reverse()
    .map(v => +v);
}

const answer = solution(12345);

console.log(answer);

printDiv.innerHTML = answer;

// Array.reverse() : [1,2,3] -> [3,2,1]
