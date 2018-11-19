const { expect } = require('chai');
const wrap = require('./wrap');

describe('wrap', () => {
  it('Returns empty string if empty string was provided', () => {
    expect(wrap("", 10)).to.equal("");
  });

  it('Returns string if string is provided',
  () => {
    expect(typeof wrap("hello world", 20)).to.equal("string");
  })

  it('Returns a string where no line is longer than column length', () => {
    expect(wrap("hello world", 5).length < 5).to.equal(true)
  })

});

