const printDiv = document.querySelector('.print');

/**
 * 문자열 내 마음대로 정렬하기
 * ['abce', 'abcd', 'cdx']와 2가 주어지면 2번째 인덱스 글자 (c, c, x)를 기준으로 정렬합니다.
 * 만약 2번째 인덱스 글자가 서로 같다면 (c, c 처럼) 사전순으로 정렬합니다. abce와 abce를 사전순으로 정렬
 */
function solution(stringArray, n) {
  return stringArray.sort((p, c) => {
    console.log(p, c);
    p[n] === c[n] ? p.localeCompare(c) : p[n].localeCompare(c[n]);
  });
}

const answer = solution(['abce', 'abcd', 'cdx'], 2);

console.log(answer);

printDiv.innerHTML = answer;

// array.filter는 각 인자가 조건을 만족하는 것을 반환함
// array.map은 각 인자에 연산 또는 함수를 실행한 결과를 반환
// array.sort는 정렬
/** localeCompare는 문자열과 문자열을 비교
 * alert('a'.localeCompare('b')); // -1
alert('b'.localeCompare('a')); // 1
alert('b'.localeCompare('b')); // 0
 */
