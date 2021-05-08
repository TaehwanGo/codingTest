const printDiv = document.querySelector('.print');

/**
 * 문자열 내림차순으로 배치하기
 * 문자열을 역순으로 정렬합니다.
 * 대문자는 소문자보다 뒤에 위치해야 합니다.(Zbcdefg 는 gfedcbZ)
 */

function solution(s) {
  return s
    .split('')
    .sort((prev, cur) => cur.charCodeAt() - prev.charCodeAt())
    .join('');
}

function solution1(s) {
  return s
    .split('')
    .sort((prev, cur) => {
      console.log(cur.charCodeAt(), prev.charCodeAt());
      return cur.charCodeAt() - prev.charCodeAt();
    })
    .join('');
}

function solution2(s) {
  return s
    .split('')
    .sort((prev, cur) => cur.localeCompare(prev))
    .join('');
}

const answer = solution1('Zbcdefg');

console.log(answer);

printDiv.innerHTML = answer;

// split, sort, join <- split - apply - combine 3단 콤보
// localeCompare로 비교하면 대소문자를 구분없이 정렬(Zgfedcb) - 필요에 따라 이게 더 좋을 수 도 있을 듯
