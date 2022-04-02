{
  function solution(plain) {
    const plainArr = plain.split("");
    const centerItemIdex = Math.floor(plainArr.length / 2);
    const forwardGroup = plainArr.slice(0, centerItemIdex);
    const backwardGroup =
      plainArr.length % 2 === 0
        ? plainArr.slice(centerItemIdex)
        : plainArr.slice(centerItemIdex + 1);

    const dupCount = forwardGroup.reduce((acc, cur, index) => {
      if (cur === backwardGroup[index]) {
        acc += 1;
      }
      return acc;
    }, 0);

    return plainArr.length * 2 - 1 - dupCount;
  }

  console.log(solution("abab"));
  console.log(solution("abcde"));
}
