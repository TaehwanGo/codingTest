const printDiv = document.querySelector('.print');

/**
 * 올바른 괄호
 * 괄호 ( 와 ) 가 올바르게 짝지어져 있으면 true를 리턴
 * 예) ()(), (())()는 올바른 괄호이고, )()(나 (()(는 올바르지 않습니다.
 */
function mySolution(brackets) {
  let result;
  let arrEachBracket = brackets.split('');
  console.log(arrEachBracket);
  let count = 0;
  for (let i = 0; i < arrEachBracket.length; i++) {
    if (arrEachBracket[0] !== '(') {
      return (result = false);
    }

    if (arrEachBracket[i] === '(') {
      count++;
    } else if (arrEachBracket[i] === ')') {
      count--;
    } else {
      return (result = `${i}번째 입력된 문자가 올바르지 않습니다.`);
    }

    if (count < 0) {
      return (result = false);
    }
  }

  if (count !== 0) {
    return (result = false);
  }

  return (result = true);
}
// const answer = mySolution('(())()');

function solution(s) {
  let count = 0;
  for (let i = 0; i < s.length; i++) {
    s[i] === '(' ? count++ : count--;
    if (count < 0) return false;
  }
  if (count !== 0) return false;
  return true;
}

const answer = solution('(())()');

console.log(answer);

printDiv.innerHTML = answer;

// 마지막에 최종 올바른 결과물을 return 하고 그 중간에 안되는 모든 경우의 수를 쳐내는 방식으로 코딩하자
// return을 위해 result라는 변수를 만들었는데 굳이 안만들어도 된다.
