const printDiv = document.querySelector('.print');

/**
 * 최대값과 최솟값
 * 문자열에서 최댓값과 최솟값을 찾기
 * "1 2 3 4" => 1, 4
 * 문자열을 배열로 만들어서 최댓값, 최솟값 찾는 메서드를 사용
 */

function solution(s) {
  const o = s.split(' ').map(v => +v);
  return [Math.min(...o), Math.max(...o)].join(' ');
}

const answer = solution('2 4 9 3');

console.log(answer);

printDiv.innerHTML = answer;

//
