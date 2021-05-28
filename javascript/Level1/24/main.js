const printDiv = document.querySelector('.print');

/**
 * 콜라츠 추측
 * 입력된 수가 짝수면 2로 나누고, 홀수면 3을 곱한 후 1을 더합니다.
 * 이 작업을 반복해서 1까지 몇 번만에 나오는지 구해야 합니다.
 * 6의 경우 : 6-> 3 -> 10 -> 5 -> 16 -> 8 -> 4 -> 2 -> 1 (8 리턴)
 * 500회 반복회도 안되는 경우 -1을 리턴
 */
function solution(num, count) {
  return count === 500
    ? -1
    : num === 1
    ? count
    : solution(num % 2 ? num * 3 + 1 : num / 2, count + 1);
}

const answer = solution(6, 0);

console.log(answer);

printDiv.innerHTML = answer;

//
