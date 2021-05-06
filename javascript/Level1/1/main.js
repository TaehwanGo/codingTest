const printDiv = document.querySelector('.print');

/**
 * 2016년 a월 b일은 무슨 요일 일까요?
 */
function solution(a, b) {
  return ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'][
    new Date(2021, a - 1, b).getDay()
  ]; // [5,4,3,2][0] == 5, 배열의 몇 번째 것을 고를 것 인지
}

console.log(solution(3, 1));

printDiv.innerHTML = solution(3, 1);
