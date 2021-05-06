const printDiv = document.querySelector('.print');

/**
 * 같은 숫자 제거
 * [1, 1, 3, 3, 0, 1, 1] 이면 [1, 3, 0, 1]로 연속되는 중복을 제거하는 문제
 */
function solution(arr) {
  return arr.filter((value, index) => value !== arr[index + 1]);
}

const answer = solution([1, 1, 1, 3, 3, 0, 3, 1, 1]);

console.log(answer);

printDiv.innerHTML = answer;

// array.filter는 조건을 만족하는 것을 반환함
