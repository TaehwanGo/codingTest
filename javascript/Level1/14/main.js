const printDiv = document.querySelector('.print');

/**
 * 시저 암호
 * AB는 1만큼 밀면 BC가 되고, AB를 3만큼 밀면 DE가 됩니다.
 * z는 1만큼 밀면 a가 됩니다. 공백은 그대로 공백
 */
function solution(s, n) {
  return s
    .split('')
    .map(c => {
      return c === ' '
        ? c
        : c.charCodeAt() + n > 122 ||
          (c.charCodeAt() <= 90 && c.charCodeAt() + n > 90)
        ? String.fromCharCode(c.charCodeAt() + n - 26)
        : String.fromCharCode(c.charCodeAt() + n);
    })
    .join('');
}

const answer = solution('AB', 3);

console.log(answer);

printDiv.innerHTML = answer;

// String.fromCharCode가 charCodeAt의 반대 메서드
