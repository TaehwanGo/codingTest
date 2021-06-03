const printDiv = document.querySelector('.print');

/**
 * 행렬의 덧셈
 */
function solution(arr1, arr2) {
  return arr1.map((arr, i) => arr.map((v, j) => v + arr2[i][j]));
}

const answer = solution(
  [
    [1, 2],
    [2, 3],
  ],
  [
    [3, 4],
    [5, 6],
  ],
);

console.log(answer);

printDiv.innerHTML = answer;

//
