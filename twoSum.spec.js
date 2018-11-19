const { expect } = require('chai');
const twoSum = require('./twoSum');

describe('twoSum', () => {
  it('Returns array', () => {
    expect(Array.isArray(twoSum([], 10))).to.equal(true);
  })
  it('Returns empty array if empty array is provided', () => {
    expect((twoSum([], 10)).length === 0).to.equal(true);
  })
})
