const printDiv = document.querySelector('.print');

/**
 * 문자열을 정수로 바꾸기
 */
function solution(s) {
  return parseInt(s);
}

const answer = solution('11');

console.log(answer);

printDiv.innerHTML = answer;

// +s 또는 s * 1 과 같은 방법으로도 바꿀 수 있고
// Number(s) 도 가능
