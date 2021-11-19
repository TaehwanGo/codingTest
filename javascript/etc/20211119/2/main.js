const printDiv = document.querySelector('.print');

/**
 * 총 N개의 디렉토리가 다음과 같이 트리(tree) 형태의 간단한 구조를 이루고 있습니다.

모든 디렉토리에는 1부터 N까지 번호가 붙어있습니다.
모든 디렉토리에는 이름이 붙어있습니다.
최상위 디렉토리는 1개만 존재하며, 최상위 디렉토리의 번호는 1번입니다.
모든 디렉토리는 0개 이상의 하위 디렉토리를 가질 수 있습니다.
최상위 디렉토리를 제외한 나머지 디렉토리는 정확히 1개의 상위 디렉토리를 가집니다.
모든 디렉토리는 같은 이름의 하위 디렉토리를 2개 이상 가질 수 없습니다.
다음은 디렉토리 구조를 나타낸 예시입니다.
*/

// 최대 depth를 2라고 가정하자
/**
 *
 * @param {number} N
 * @param {[number, number][]} relationArr
 * @param {string[]} dirnameArr
 * @returns
 */
function solution(N, relationArr, dirnameArr) {
  const relationLongestObj = {
    combine: [1, 2],
    pathLength: firstRelationPathLength(relationArr, dirnameArr),
  };

  relationArr.forEach((relation, index) => {
    const relationPathLength = getRelationPathLength(
      relationArr,
      dirnameArr,
      index,
    );
    if (relationLongestObj.pathLength < relationPathLength) {
      relationLongestObj.pathLength = relationPathLength;
      relationLongestObj.combine = relation;
    }
  });

  return relationLongestObj.pathLength;
}

const answer = solution(
  7,
  [
    [1, 2],
    [2, 3],
    [3, 4],
    [4, 5],
    [1, 6],
    [6, 7],
  ],
  ['root', 'a', 'b', 'c', 'd', 'efghij', 'k'],
);

function firstRelationPathLength(relationArr, dirnameArr) {
  let firstRelationPathLength = 0;
  const firstRelation = relationArr[0];
  firstRelation.forEach(
    num => (firstRelationPathLength += dirnameArr[num - 1].length),
  );
  // console.log('firstRelationPathLength', firstRelationPathLength + 1);
  return firstRelationPathLength + 1; // root와 연결된 것은 중간에 '/' 가 한번 들어감
}

function getRelationPathLength(relationArr, dirnameArr, IndexOfRelation) {
  let relationPathLength = 0;
  const relation = relationArr[IndexOfRelation];
  relation.forEach(num => {
    // console.log('dirnameArr[num - 1].length', dirnameArr[num - 1].length);
    relationPathLength += dirnameArr[num - 1].length;
  });
  // console.log('firstRelationPathLength', firstRelationPathLength + 1);
  if (relation[0] === 1) {
    return relationPathLength + 1; // root와 연결된 것은 중간에 '/' 가 한번 들어감
  }
  // console.log(`${relationPathLength} + 2 + ${dirnameArr[0].length}`);
  return relationPathLength + 2 + dirnameArr[0].length; // 최대 depth가 2라는 가정
}

console.log(answer);

printDiv.innerHTML = answer;
