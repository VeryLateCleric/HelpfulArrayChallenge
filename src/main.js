const arrayA = [1, 3, 3, 6, 6, 7, 9];
const arrayB = [2, 3, 5, 7];

function excludeIfInBoth(arrA, arrB) {
  const result = [];
  const commonNumbers = new Set();

  for (const num of arrA) if (arrB.includes(num)) {commonNumbers.add(num)} else {result.push(num)}

  for (const num of arrB) if (arrA.includes(num)) {commonNumbers.add(num)} else {result.push(num)}

  result.sort((a, b) => a - b); //Gotta be in order cause I can't read

  return result;
}

const expectedResult = excludeIfInBoth(arrayA, arrayB);
console.log(expectedResult); //ensure matchhing with mocha test results
module.exports = excludeIfInBoth;