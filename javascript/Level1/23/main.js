const printDiv = document.querySelector('.print');

/**
 * 최대공약수와 최소공배수 구하기
 */
function solution(n, m) {
  function u(n, m) {
    return m % n ? u(m % n, n) : n;
  }
  const gcd = u(n, m);
  return [gcd, (n * m) / gcd];
}

const answer = solution(9);

console.log(answer);

printDiv.innerHTML = answer;

// 두 수의 곱은 최대공약수와 최소공배수의 곱과 같다
// 유클리드 호제법 : 최대 공약수를 구하는 알고리즘
//
