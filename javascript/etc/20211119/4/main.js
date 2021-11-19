const printDiv = document.querySelector('.print');

/**
 * 자연수 n의 각 자리 숫자를 더하면 새로운 자연수 n' 을 만들 수 있습니다. 또 새로운 자연수 n'의 각 자릿수를 더하여 새로운 자연수 n''을 만들 수 있습니다. 이 과정을 계속 반복하면 최종적으로 한 자리 숫자를 만들 수 있습니다. 예를 들어

456789의 각 자리 숫자를 더하면 4 + 5 + 6 + 7 + 8 + 9 = 39
39는 3 + 9 = 12
12는 1 + 2 = 3
과 같이 반복하여 한 자리 숫자 3을 얻을 수 있습니다.

자연수 n이 주어졌을 때 각 자릿수를 더하는 과정을 반복하여 한 자리 숫자를 만들어 반환하는 함수를 완성해 주세요.
*/

/**
 *
 * @param {number} n
 * @returns number
 */
function solution(n) {
  let result = n
    .toString()
    .split('')
    .reduce((total, current) => total + +current, 0);
  return result >= 10 ? solution(result) : result;
}

const answer = solution(456789);

console.log(answer);

printDiv.innerHTML = answer;
