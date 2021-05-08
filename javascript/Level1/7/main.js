const printDiv = document.querySelector('.print');

/**
 * 문자열 내 p와 y의 개수
 * 문자열 내의 p와 y의 개수가 같으면(대소문자 구분 없음) true 아니면 false
 */
// function solution1(s) {
//   const p = s.split('').filter(v => ['P', 'p'].includes(v));
//   console.log(p);
//   const y = s.split('').filter(v => ['Y', 'y'].includes(v));
//   console.log(y);
//   return p.length === y.length;
// }
function solution2(s) {
  return s.replace(/p/gi, '').length === s.replace(/y/gi, '').length;
}

const answer = solution2('Ppayy');

console.log(answer);

printDiv.innerHTML = answer;

// string.split('something')는 문자열을 something을 기준으로 나눠서 배열로 출력
// ''일 경우 모든 글자 단위위로 잘라서 출력

// solution2는 정규 표현식을 이용한 것이고 g는 모두 찾는 것, i는 대소문자 구분 안한다는 뜻
