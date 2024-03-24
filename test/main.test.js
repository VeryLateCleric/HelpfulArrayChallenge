const excludeIfInBoth = require('../src/main')

const testInputA = [ 1 , 3 , 3 , 6 , 6 , 7 , 9 ];
const testinputB = [ 2 , 3 , 5 , 7 ]
const expectedResult = [ 1, 2 , 5 , 6 , 6 , 9 ];

const result = excludeIfInBoth(testInputA, testinputB)

if (JSON.stringify(result) === JSON.stringify(expectedResult)) {
    console.log('Test Passed!');
  } else {
    console.error('Test Failed!');
    console.log('Expected: ', expectedResult);
    console.log('Actual: ', result);
  }