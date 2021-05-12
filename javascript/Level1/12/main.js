const printDiv = document.querySelector('.print');

/**
 * 수박수
 * 3이면 수박수, 4면 수박수박, 5면 수박수박수
 */
function solution(n) {
  return '수박'.repeat(Math.ceil(n / 2)).substr(0, n);
}

const answer = solution(11);

console.log(answer);

printDiv.innerHTML = answer;

// 'String'.repeat(n) : n만큼 String을 반복
// 'String'.substr(n, m) : 'String'에서 n번째 부터 m번째 문자까지 return
