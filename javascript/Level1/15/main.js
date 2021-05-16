const printDiv = document.querySelector('.print');

/**
 * 약수의 합
 * 12의 약수는 1, 2, 3, 4, 6, 12이고 모두 더하면 28 입니다.
 */
function solution(n) {
  return Array(n)
    .fill()
    .map((v, i) => i + 1)
    .reduce((a, c) => (n % c === 0 ? a + c : a), 0); // n % c ? a : a + c 으로 해도 됨
}

const answer = solution(12);

console.log(answer);

printDiv.innerHTML = answer;

// Array() : Create a new Array object
// Array.fill(a static value) : Fills all the elements of an array from a start index to an end index with a static value
