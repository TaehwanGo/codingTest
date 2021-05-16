const printDiv = document.querySelector('.print');

/**
 * 두 정수 사이의 합
 * 3과 5가 주어지면 3+4+5를 리턴
 */
// function solution1(a, b) {
//   a > b && ([a, b] = [b, a]);
//   return Array(b - a + 1)
//     .fill()
//     .map((v, i) => v + i)
//     .reduce((a, c) => a + c);
// }

// const answer = solution1(3, 5);

function solution2(a, b) {
  return ((a + b) * ((a > b ? a - b : b - a) + 1)) / 2;
}

const answer = solution2(3, 5);

console.log(answer);

printDiv.innerHTML = answer;

// array.map은 각 인자에 연산 또는 함수를 실행한 결과를 반환
// Array(b - a + 1).fill() 까지 하면 빈 사이 수 만큼의 빈 배열이(undefined) 생성 됨
// array.reduce((누적값, 현재값, 인덱스, 요소) => {return 결과}, 초기값); // 누산기 : Accumulator, 현재값 : Current Value
// array.reduce((a, c) => a + c) 는 array의 모든 값을 더한 결과를 출력
