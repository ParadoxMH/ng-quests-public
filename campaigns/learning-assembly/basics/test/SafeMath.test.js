const { ethers } = require("hardhat")
const { testSafeMath } = require("./testsuites/testSafeMath");

inputs = [
  {
    name: "Public Test 1",
    add: [0, 7777],
    sub: [ethers.constants.MaxInt256, -1],
    mul: [111, 222],
    div: [8, 2]
  },
  {
    name: "Public Test 2",
    add: [0, ethers.constants.MaxInt256],
    sub: [0, ethers.constants.MaxInt256],
    mul: [-1, ethers.constants.MaxInt256],
    div: [ethers.constants.MaxInt256, -1]
  },
  {
    name: "Public Test 3",
    add: [ethers.constants.MaxInt256, 1],
    sub: [ethers.constants.MaxInt256, -1],
    mul: [ethers.constants.MaxInt256, 2],
    div: [ethers.constants.MinInt256, 0]
  }
]

describe("SafeMath (Part 6)", function() {
  inputs.forEach(testSafeMath)
});