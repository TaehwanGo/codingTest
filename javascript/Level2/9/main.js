const printDiv = document.querySelector('.print');

/**
 * 피보나치 수
 * n번째 피보나치 수를 구합니다.
 * 바로 직전의 두 수를 더한 것이 다음 숫자가 됨
 * 1 1 2 3 5 8 13 ...
 */

function mySolution(n) {
  // 첫 번째는 1
  // 두번째는 0 + 1로 1
  // 세번째는 1 + 1로 2 // 세번째 부터 계산하면 됨
  // length-2, length-1번째를 더한 것 => n-3, n-2
  let piboArray = [1, 1];
  function getPiboNumber(n) {
    if (n <= 0) {
      return 0;
    } else if (n < 3) {
      return 1;
    }
    for (let i = 3; i <= n; i++) {
      piboArray.push(piboArray[i - 3] + piboArray[i - 2]);
    }
    console.log('piboArray', piboArray);
    return piboArray[piboArray.length - 1]; // 마지막 수
  }
  return getPiboNumber(n);
}

function solution(n) {
  if (n < 2) return n;
  // console.log(solution(n - 1), solution(n - 2));
  return solution(n - 1) + solution(n - 2);
}

// const answer = mySolution(8);
const answer = solution(8);

console.log(answer);

printDiv.innerHTML = answer;

// 굳이 재귀를 써야하나 하는 생각이 들긴하는데 실제로 어떤 것이 더 빠를지 궁금하다.
// https://myjamong.tistory.com/305
// 역시 재귀함수를 콘솔로그 찍어본 결과 너무 많이 호출되어서 느릴 것 같았다.
