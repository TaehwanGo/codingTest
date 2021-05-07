const printDiv = document.querySelector('.print');

/**
 * 나누어 떨어지는 숫자 배열
 * [5,9,7,10]과 5가 주어지면 [5, 10]을 리턴해야 합니다. 아무것도 없으면 [-1]을 리턴합니다.
 */
function solution(arr, divisor) {
  const output = arr.filter(el => el % divisor === 0);
  return output.length ? output.sort((p, c) => p - c) : [-1]; // array.sort((p,c) => p - c) 오름 차순 정렬
}

const answer = solution([5, 9, 7, 10], 5);

console.log(answer);

printDiv.innerHTML = answer;

// array.filter는 각 인자가 조건을 만족하는 것을 반환함
// array.map은 각 인자에 연산 또는 함수를 실행한 결과를 반환
// array.sort는 정렬
