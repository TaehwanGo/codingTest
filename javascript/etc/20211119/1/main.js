const printDiv = document.querySelector('.print');

/**
 * 자연수 num이 주어질 때, num보다 크거나 같은 자연수 중에서 다음 조건을 만족하는 가장 작은 수를 구하려 합니다.
구하는 숫자의 자릿수는 짝수여야 합니다.
숫자가 2 x n 자릿수 일 때, 앞 n 자리의 각 자릿수 곱과 뒤 n 자리의 각 자릿수 곱이 같아야 합니다.
자연수 num이 매개변수로 주어질 때, num보다 크거나 같은 수 중에서 조건을 만족하는 가장 작은 수를 return 하도록 solution 함수를 완성해주세요.

*/

function solution(num) {
  if (num < 1 || num > 50000000) {
    throw new Error(`입력 값이 범위에 맞지 않습니다(num : ${num})`);
  }
  if (Math.floor(num) !== num) {
    throw new Error('입력 값이 자연수가 아닙니다');
  }
  let answer = num; // 조건에 맞는 가장 작은 수

  while (true) {
    let eachNumArr = answer.toString().split('');
    // console.log(eachNumArr);
    const eachNumArrHalfLength = eachNumArr.length / 2;
    let resultOfComplexFront = 1;
    for (let i = 0; i < eachNumArrHalfLength; i++) {
      resultOfComplexFront *= eachNumArr[i];
    }

    let resultOfComplexBack = 1;
    for (let i = eachNumArrHalfLength; i < eachNumArr.length; i++) {
      resultOfComplexBack *= eachNumArr[i];
    }

    if (resultOfComplexFront === resultOfComplexBack) {
      break;
    }
    answer++;
  }

  return answer;
}

const answer = solution(235386);

console.log(answer);

printDiv.innerHTML = answer;
