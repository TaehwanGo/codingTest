function solution(s) {
  if (s === "") {
    return 1;
  }
  const sCharArr = s.split("");
  for (let i = 0; i < sCharArr.length - 1; i++) {
    if (sCharArr[i] === sCharArr[i + 1]) {
      sCharArr.splice(i, 2);
      return solution(sCharArr.join(""));
    }
  }
  return 0;
}

console.log(solution("baabaa"));
console.log(solution("cdcd"));
