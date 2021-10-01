const printDiv = document.querySelector('.print');

/**
 * 다음 큰 숫자
 * n보다 크면서 이진수로 변환했을 때 n의 이진수와 1의 개수가 같은 숫자를 찾습니다.
 * 78(1001110)의 다음 숫자는 83(101011)입니다.
 * 1. 10진수 숫자를 2진수로 변환
 * 2. n을 넣으면 그것을 2진수로 변환하여 1의 개수를 계산하고 n+1, ... 의 2진수와 비교하면서 같은 것이 있으면 리턴
 */

function mySolution(n) {
  function getBinarySum(num) {
    const binaryArray = [];
    while (true) {
      const quotient = Math.floor(num / 2);
      const remainder = num % 2;
      binaryArray.push(remainder);
      if (quotient < 2) {
        binaryArray.push(quotient);
        console.log('binaryArray', binaryArray);
        break;
      }
      num = quotient;
    }
    return binaryArray.reduce((sum, next) => sum + next);
  }
  const binarySumOfN = getBinarySum(n);
  let nextBinarySum = 0;
  let nextNum = n;
  while (true) {
    nextNum += 1;
    nextBinarySum = getBinarySum(nextNum);
    console.log('nextBinarySum', nextBinarySum);
    console.log('binarySumOfN', binarySumOfN);
    if (nextBinarySum === binarySumOfN) {
      break;
    }
  }
  return nextNum;
}

function solution(n) {
  const bin = n.toString(2).match(/1/g).length; // 1의 개수를 세는 것
  while (n++) {
    if (n.toString(2).match(/1/g).length === bin) return n;
  }
}

const answer = solution(78);

console.log(answer);

printDiv.innerHTML = answer;

//
