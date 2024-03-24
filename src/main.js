const arrayA = [1, 3, 3, 6, 6, 7, 9];
const arrayB = [2, 3, 5, 7];

function excludeIfInBoth(array) {
  const result = [];

  for (let i = 0; i < arrayA.length; i++)
  return result;
}

module.exports = excludeIfInBoth;

//This attempt was only returning single unique values even if it appeared multiples times in the array
//   let foundNumbers = {};

//   for (let num of arrayA) {
//     if(foundNumbers[num])
//   }

//   for (let num of arrayB) {
//     if (foundNumbers.includes(num)) { //.has works on objects not arrays so switch to array
//         foundNumbers.splice();
//     } else {

//     }
//   }

//   return foundNumbers;
