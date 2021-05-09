const printDiv = document.querySelector('.print');

/**
 * 서울에서 김서방 찾기
 * ['Jane', 'Kim'] 이란 배열이 있으면 Kim의 위치를 찾으면 됩니다.
 */
function solution(seoul) {
  return '김서방은 ' + seoul.indexOf('Kim') + '에 있다.';
}

const answer = solution(['Jane', 'Kim']);

console.log(answer);

printDiv.innerHTML = answer;

// array.indexOf('string') : 'string'이 array의 몇번째 인덱스에 있는지 확인하는 메소드
