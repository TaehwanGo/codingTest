const printDiv = document.querySelector('.print');

/**
 * 문제 설명
과자를 바구니 단위로 파는 가게가 있습니다. 이 가게는 1번부터 N번까지 차례로 번호가 붙은 바구니 N개가 일렬로 나열해 놨습니다.

철수는 두 아들에게 줄 과자를 사려합니다. 첫째 아들에게는 l번 바구니부터 m번 바구니까지, 둘째 아들에게는 m+1번 바구니부터 r번 바구니까지를 주려합니다. 단, 두 아들이 받을 과자 수는 같아야 합니다(1 <= l <= m, m+1 <= r <= N). 즉, A[i] 를 i번 바구니에 들어있는 과자 수라고 했을 때, A[l]+..+A[m] = A[m+1]+..+A[r] 를 만족해야 합니다.

각 바구니 안에 들은 과자 수가 차례로 들은 배열 cookie가 주어질 때, 조건에 맞게 과자를 살 경우 한 명의 아들에게 줄 수 있는 가장 많은 과자 수를 return 하는 solution 함수를 완성해주세요. (단, 조건에 맞게 과자를 구매할 수 없다면 0을 return 합니다)

제한사항
cookie의 길이는 1 이상 2,000 이하입니다.
cookie의 각각의 원소는 1 이상 500 이하인 자연수입니다.
*/

/**
 * @param {number[]} baskets
 */
function solution(baskets) {
  let totalCookieForFirst = 0;
  let totalCookieForSecond = 0;
  let successCase = 0;
  // console.log('baskets.length', baskets.length);
  for (let i = 0; i < baskets.length - 1; i++) {
    // console.log('i', i);
    // console.log(`baskets[${i}]`, baskets[i]);
    totalCookieForSecond = 0; // 초기화
    // i 부터 m 까지 더 하기
    // m+1 ~ n 더 하기
    totalCookieForFirst += baskets[i];
    for (let j = i + 1; j < baskets.length; j++) {
      // console.log('j', j);
      // console.log(`baskets[${j}]`, baskets[j]);

      totalCookieForSecond += baskets[j];

      // console.log(
      //   `totalCookieForFirst: ${totalCookieForFirst}, totalCookieForSecond: ${totalCookieForSecond}`,
      // );

      compareCookie(baskets[i]);

      if (totalCookieForFirst < totalCookieForSecond) {
        break;
      }
    }
  }

  return successCase;

  function compareCookie(firstCookie) {
    if (totalCookieForFirst === totalCookieForSecond) {
      successCase++;
      // console.log('they are same : ', totalCookieForFirst);
      totalCookieForFirst = firstCookie;
    }
  }
}

const answer = solution([1, 1, 2, 3]);

console.log(answer);

printDiv.innerHTML = answer;
