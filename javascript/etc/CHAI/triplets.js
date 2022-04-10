/**
 *
 * @param {number} t d인자의 최대값, d[a] + d[b] + d[c] <= t
 * @param {number[]} d [d[a], ... , d[b], ..., d[c]]
 * d[a] < d[b] < d[c]
 * 위 조건을 만족하는
 */

function triplets(t, d) {
  const arr = d.sort();
  let count = 0;
  for (let i = 0; i < arr.length - 2; i++) {
    for (let j = i + 1; j < arr.length - 1; j++) {
      for (let k = j + 1; k < arr.length; k++) {
        if (arr[i] + arr[j] + arr[k] <= t) {
          count++;
        } else {
          break;
        }
      }
    }
  }
  return count;
}

const result = triplets(8, [2, 1, 4, 3, 5]);
console.log(result);
