const printDiv = document.querySelector('.print');

/**
 * x만큼 간격이 있는 n개의 숫자
 * x의 배수를 n개 나열하면 됩니다. 2와 5면 [2, 4, 6, 8, 10]
 */
function solution(x, n) {
  return Array(n)
    .fill(x)
    .map((v, i) => (i + 1) * v);
}

const answer = solution(2, 5);

console.log(answer);

printDiv.innerHTML = answer;

//
