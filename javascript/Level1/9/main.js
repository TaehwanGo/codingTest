const printDiv = document.querySelector('.print');

/**
 * 문자열 다루기 기본
 * 문자열의 길이가 4 또는 6이고 숫자로만 구성되어 있는지 확인
 */
function solution(s) {
  return /^[0-9]+$/.test(s) && [4, 6].includes(s.length);
}

const answer = solution('4561');

console.log(answer);

printDiv.innerHTML = answer;

// 정규식을 공부하자
