const printDiv = document.querySelector('.print');

/**
 * [2, 1, 3, 1, 4, 2, 1, 3]
 * The index of 1 are 1, 3, 6
 * The index of 2 are 0, 5
 * The index of 3 are 2, 7
 * The index of 4 are 4
 * https://stackoverflow.com/questions/69787054/is-there-an-on-way-to-find-all-indices-of-a-value-in-an-array
 */

const getIndices = (arr, num) => {
  let result = [];
  arr.forEach((item, index) => {
    if (item === num) {
      result.push(index);
    }
  });
  return result;
};

const arr = [2, 1, 3, 1, 4, 2, 1, 3];
const answer = getIndices(arr, 1);

console.log(answer);

printDiv.innerHTML = answer;
