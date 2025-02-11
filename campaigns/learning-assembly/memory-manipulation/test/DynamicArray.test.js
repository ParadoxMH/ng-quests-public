const { cheating } = require("@ngquests/test-helpers");
const { testDynamicArray } = require("./testsuites/testDynamicArray");

inputs = [
  {
    name: "Public Test 1",
    push: [[1, 2, 3], 4],
    pop: [1, 5, 2],
    popAt: [[1, 5, 2, 1], 1]
  },
  {
    name: "Public Test 2",
    push: [[], 1],
    pop: [],
    popAt: [[1, 2, 3], 3]
  }
]

describe("Dynamic Array (Part 4)", function() {
  inputs.forEach(testDynamicArray);

  cheating.testAssemblyAll("contracts/DynamicArray.sol");
  cheating.testExternalCode("contracts/DynamicArray.sol");
});
