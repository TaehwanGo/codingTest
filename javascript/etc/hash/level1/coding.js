const participant = ["mislav", "stanko", "mislav", "ana"];
const completion = ["stanko", "ana", "mislav"];
/**
 *
 * @param {string[]} participant
 * @param {string[]} completion
 */
// function solution(participant, completion) {
//   var answer = "";
//   answer = completion.filter((completedPerson) => {
//     if (!participant.includes(completedPerson)) {
//       participant.shift();
//       return true;
//     }
//     return false;
//   });
//   return answer;
// }
// console.log(completion);

// console.log(solution(participant, completion));

const arr = [1, 2];
arr.shift();
console.log(arr);

var solution1 = (_, $) =>
  _.find(
    (_) => !$[_]--,
    $.map((_) => ($[_] = ($[_] | 0) + 1))
  );
var solutionEdited = (participant, completion) =>
  participant.find(
    (participant) => !completion[participant]--,
    completion.map(
      (participant) =>
        (completion[participant] = (completion[participant] | 0) + 1)
    )
  );

console.log(solutionEdited(participant, completion));

function solution12(participant, completion) {
  /*
    for(let i in participant) {
        if(completion.includes(participant[i]) == false) return participant[i];
        completion.splice(completion.indexOf(participant[i]), 1);
    }
    */

  participant.sort();
  completion.sort();

  for (let i in participant) {
    if (participant[i] !== completion[i]) return participant[i];
  }
}

function solution23(participant, completion) {
  const map = new Map();

  for (let i = 0; i < participant.length; i++) {
    let a = participant[i],
      b = completion[i];

    map.set(a, (map.get(a) || 0) + 1);
    map.set(b, (map.get(b) || 0) - 1);
  }

  for (let [k, v] of map) {
    if (v > 0) return k;
  }

  return "nothing";
}

function solution56(participant, completion) {
  var answer = "";
  participant.sort();
  completion.sort();
  for (var i = 0; i < participant.length; i++) {
    if (participant[i] !== completion[i]) {
      answer = participant[i];
      break;
    }
  }
  return answer;
}

// 고찰 : 정렬하면 쉽다
