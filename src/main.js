const arrayA = [1, 3, 3, 6, 6, 7, 9];
const arrayB = [2, 3, 5, 7];

function excludeIfInBoth(arrA, arrB) {
  const result = [];
  const countA = new Map(); //Map() should help to have each number counted in the final array
  const countB = new Map(); //Because each value will be treated as a key-value pair in the map

  for (const num of arrA) {countA.set(num, (countA.get(num) || 0) + 1);}
  // count each number in arrA and add to map countA

  for (const num of arrB) {countB.set(num, (countB.get(num) || 0) + 1);}
  // count each number in arrB and add to map countB
    
  // Now we need to compare A to B and push (A-(A&&B)) into C
  for (const num of arrA) {
    if (!countB.has(num) || countB.get(num) === 0) {
      result.push(num);
    } else {
      countB.set(num, countB.get(num) - 1);
    } 
    countA.set(num, countA.get(num) - 1); //Needs to be moved around, maybe an if statement
  }
  //we still have an extra 3 from A. Need to subtract it
  // In this block we compare B to A and push (B-(B&&A)) into C. Hopefully.
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
