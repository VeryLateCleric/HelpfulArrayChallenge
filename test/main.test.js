const assert = require('assert')
const excludeIfInBoth = require("../src/main");


describe("excludeIfInBoth function", function () {
  it(
    "should exclude elements if they are found in testInputA as well as testInputB"
  );
  const testInputA = [1, 3, 3, 6, 6, 7, 9];
  const testinputB = [2, 3, 5, 7];
  const expectedResult = [1, 2, 5, 6, 6, 9];

  const result = excludeIfInBoth(testInputA, testinputB);

  assert.deepStrictEqual(result, expectedResult);
});