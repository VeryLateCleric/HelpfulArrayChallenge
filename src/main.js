const arrayA = [1, 3, 3, 6, 6, 7, 9];
const arrayB = [2, 3, 5, 7];

function excludeIfInBoth(firstArray, secondArray) {
  let foundNumbers = [];

  for (let num of arrayA) {
    foundNumbers.push(num);
  }
  // We have added in all the numbers of the first array
  // We want to compare arrayB to remove any numbers found in both A and B
  // So if found in A and B, exlude from C

  return foundNumbers; // Will need to change output from the array or set of foundNumbers
  //  Instead we will need to return arrayC
}

module.exports = excludeIfInBoth;
