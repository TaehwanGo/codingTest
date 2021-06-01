const printDiv = document.querySelector('.print');

/**
 * 하샤드 수
 * x의 자릿수의 합으로 x가 나눠 떨어지면 x는 하샤드 수 입니다.
 * 18의 자리수의 합은 1 + 8 = 9 이고, 19은 9로 나누어 떨어지므로 18은 하샤드 수입니다.
 */
function solution(x) {
  return !(
    x %
    String(x)
      .split('')
      .reduce((a, c) => a + c * 1, 0)
  );
}

const answer = solution(18);

console.log(answer);

printDiv.innerHTML = answer;

//
