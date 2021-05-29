const printDiv = document.querySelector('.print');

/**
 * 평균 구하기
 */
function solution(arr) {
  return arr.reduce((a, c) => a + c) / arr.length;
}

const answer = solution([1, 2, 3]);

console.log(answer);

printDiv.innerHTML = answer;

// 쌓이는 것들은 reduce로 하면 편함
