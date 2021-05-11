const printDiv = document.querySelector('.print');

/**
 * 1~n 사이의 소수의 개수를 반환
 */
function solution(n) {
  const primes = [];
  for (let j = 2; j <= n; j++) {
    let isPrime = true;
    const sqrt = Math.sqrt(j);
    for (let i = 0; primes[i] <= sqrt; i++) {
      if (j % primes[i] === 0) {
        isPrime = false;
        break;
      }
    }
    if (isPrime) {
      primes.push(j);
    }
  }
  console.log(primes);
  return primes.length;
}

const answer = solution(11);

console.log(answer);

printDiv.innerHTML = answer;

// 에라토스테네스의 접근
// 주어진 자연수 N이 소수이기 위한 필요충분 조건은 N이 N 제곱근 보다 크지 않은
// 어떤 소수로도 나눠지지 않는다.
// 수가 수를 나누면 몫이 발생하게 되는데
// 목과 나누는 수, 둘 중 하나는 반드시 N의 제곱근 이하이기 때문이다.
// 즉, 2부터 N의 제곱근 까지 나눠보면 됩니다.
