const printDiv = document.querySelector('.print');

/**
 * 최솟값
 * [1,4,2], [5,4,4]가 주어진다면 각 배열에서 두 수 씩 뽑아 곱한 후,
 * 그 것들을 더한 값이 최소가 되도록 하는 문제
 * e.g., 1*4 + 4*4 + 2*4 가 28로 최소가 됨
 */

function mySolution(arr1, arr2) {
  let tempArr = [];
  let minNumbers = [];
  arr1.forEach((numberOfArr1, index) => {
    arr2.forEach(numberOfArr2 => {
      tempArr.push(numberOfArr1 * numberOfArr2);
    });
    const minNumber = Math.min(...tempArr);
    minNumbers.push(minNumber);
    console.log('tempArr', tempArr);
    tempArr = [];
  });
  console.log('minNumbers', minNumbers);
  return minNumbers.reduce((accumulation, current) => accumulation + current);
}

function solution(A, B) {
  const b = B.sort((p, c) => c - p);
  return A.sort((p, c) => p - c)
    .map((v, i) => v * b[i])
    .reduce((a, c) => a + c, 0);
}

// const answer = mySolution([1, 4, 2], [5, 4, 4]);
const answer = solution([1, 4, 2], [5, 4, 4]);

console.log(answer);

printDiv.innerHTML = answer;

// 중복해서 선택이 안된다는 조건이 문제에 없어서 문제를 잘 못 이해했다.
