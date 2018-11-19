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
    expect(wrap("hello", 7).length <= 7).to.equal(true)
  });
  let argument;
  let loret;
  beforeEach(function() {
    argument = "hello world";
    loret = "Lorem ipsum dolor sit eu amet, elit na magna sem amet nulla vel purus ac ligula.";
  });


  it('Checks no line is longer than the column number', () => {
    expect(wrap(loret, 10).split('\n').every(line => line.length <= 10)).to.equal(true);
    expect(wrap(argument, 5).split('\n').every(line => line.length <= 5)).to.equal(true);
  })

});


