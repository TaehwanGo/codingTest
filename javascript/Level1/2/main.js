const printDiv = document.querySelector('.print');

/**
 * 가운데 글자 가져오기
 * abcde에서는 c를 가져오고 qwer에서는 we 두 글자를 가져오는 문제
 */
function solution(s) {
  return s.substr(Math.ceil(s.length / 2) - 1, s.length % 2 === 0 ? 2 : 1);
}

const answer = solution('qwer');

console.log(answer);

printDiv.innerHTML = answer;

// Math.ceil은 올림, string.substr(a, b)은 string의 a번째에서 b 번째 까지
