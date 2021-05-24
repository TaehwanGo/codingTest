const printDiv = document.querySelector('.print');

/**
 * 제일 작은 수 제거하기
 * [4,3,2,1]이 있다면 가장 작은 1을 제거해서 [4,3,2]를 리턴하면 됩니다.
 */
function solution(n) {
  const min = Math.min(...arr);
  const r = arr.filter(v => v !== min);
  return r.length ? r : [-1];
}

const answer = solution(9);

console.log(answer);

printDiv.innerHTML = answer;

// ...arr : arr를 펴서 넣는 것
// Math.min(arr[0], arr[1], ...)
// Math.min(a, b, c, ...) : 최소값을 리턴
