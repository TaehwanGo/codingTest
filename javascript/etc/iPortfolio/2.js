{
  function solution(arrA, arrB) {
    let rotatingArrA = arrA;
    let result = false;
    for (let i = 0; i < arrA.length; i++) {
      if (rotatingArrA.join("") === arrB.join("")) {
        result = true;
        break;
      }
      const lastItem = rotatingArrA.pop();
      rotatingArrA = [lastItem, ...rotatingArrA];
    }

    return result;
  }

  console.log(solution([7, 8, 10], [10, 7, 8]));
  console.log(solution([4, 3, 2, 1], [5, 4, 1, 2]));
}
