const arrayA = [1, 3, 3, 6, 6, 7, 9];
const arrayB = [2, 3, 5, 7];

function excludeIfInBoth(arrA, arrB) {
  const result = [];
  const countA = new Map(); //Map() should help to have each number counted in the final array
  const countB = new Map(); //Because each value will be treated as a key-value pair in the map

  for (const num of arrA) {countA.set(num, (countA.get(num) || 0) + 1);}
  for (const num of arrB) {countB.set(num, (countB.get(num) || 0) + 1);}

  for (const num of arrA) {
    if (!countB.has(num) || countB.get(num) === 0) {
      result.push(num);
    } else {
      countB.set(num, countB.get(num) - 1);
      if (countA.get(num) > 0) {
        countA.set(num, countA.get(num) - 1);
      }
    } 
  }

  for (const num of arrB) {
    if (!countA.has(num) || countA.get(num) === 0) {
        result.push(num);
    } else {
        countA.set(num, countA.get(num) - 1);
    }
  }

  result.sort((a, b) => a - b); //Gotta be in order cause I can't read

  return result;
}

const expectedResult = excludeIfInBoth(arrayA, arrayB);
console.log(expectedResult); //ensure mathching with mocha test results

module.exports = excludeIfInBoth;
