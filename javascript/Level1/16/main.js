const printDiv = document.querySelector('.print');

/**
 * 이상한 문자 만들기
 * 단어의 짝수번째 문자는 대문자로, 홀수번째 문자는 소문자로 바꿉니다.
 * hello -> hElLo
 */
function solution(s) {
  return s
    .split(' ')
    .map(word =>
      word
        .split('')
        .map((char, index) =>
          index % 2 === 0 ? char.toLowerCase() : char.toUpperCase(),
        )
        .join(''),
    )
    .join(' ');
}

const answer = solution('try hello world');

console.log(answer);

printDiv.innerHTML = answer;

//
