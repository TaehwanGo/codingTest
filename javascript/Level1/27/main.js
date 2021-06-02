const printDiv = document.querySelector('.print');

/**
 * 핸드폰 번호 가리기
 * 전화번호 뒷 4자리를 빼고 나머지를 전부 *로 바꾸기
 */
function solution(phone_number) {
  return '*'.repeat(phone_number.length - 4) + phone_number.slice(-4);
}
// function solution(s) {
//   return s.replace(/\d(?=\d{4})/g, '*');
// }
const answer = solution('010-1234-4567');

console.log(answer);

printDiv.innerHTML = answer;

//
