const printDiv = document.querySelector('.print');

/**
 * 직사각형 별찍기
 * 5, 3 -> 5행 3열
 */
function solution(a, b) {
  return Array(b)
    .fill()
    .map(() => '*'.repeat(a))
    .join('\n');
}

const answer = solution(5, 3);

console.log(answer);

printDiv.innerHTML = answer;

//
