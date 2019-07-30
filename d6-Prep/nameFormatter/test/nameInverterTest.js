const chai = require('chai');
const assert = chai.assert;
const expect = chai.expect;

const nameInverter = require('../nameInverter.js');

describe('nameInverter', function() {

it('should return an empty string when passed an empty string', function() {
    const inputName = "";
    const expectedOutput = "";
    assert.equal(nameInverter(inputName), expectedOutput);
  });

it('should return a single name when passed a single name with extra spaces', function() {
  const inputName = "David ";
  const expectedOutput = "David";
  assert.equal(nameInverter(inputName), expectedOutput);
});
input: " name "
output: "name"

it('should return a single name when passed a single name with extra spaces before', function() {
  const inputName = " David";
  const expectedOutput = "David";
  assert.equal(nameInverter(inputName), expectedOutput);
});
input: " name "
output: "name"

it('should return a last-name, first-name when passed a first and last-name', function() {
  const inputName = "David Bowie";
  const expectedOutput = "Bowie, David";
  assert.equal(nameInverter(inputName), expectedOutput);
});
// input: "first last"
// output: "last, first"

it('should return a last-name, first-name when passed a first and last-name with extra spaces around the names (We may want to use regular expressions to detect the whitespace)', function() {
  const inputName = " David Bowie ";
  const expectedOutput = "Bowie, David";
  assert.equal(nameInverter(inputName), expectedOutput);
});
// input: " first last"
// output: "last, first"

it('should return an empty string when passed a single honorific', function() {
  const inputName = "Dr. ";
  const expectedOutput = "";
  assert.equal(nameInverter(inputName), expectedOutput);
});
// input: "Dr. "
// output: ""

it('should return honorific first-name when passed honorific first-name', function() {
  const inputName = "Dr. Seuss";
  const expectedOutput = "Dr. Seuss";
  assert.equal(nameInverter(inputName), expectedOutput);
});
// input: "Dr. first"
// output: "Dr. first"

it('should return a honorific last-name, first-name when passed honorific first-name last-name', function() {
  const inputName = "Dr. Susie Seuss";
  const expectedOutput = "Dr. Seuss, Susie";
  assert.equal(nameInverter(inputName), expectedOutput);
});
// input: "Dr. first-name last-name"
// output: "Dr. last-name, first-name"

it('should return a honorific last-name, first-name when passed honorific first-name last-name with extra spaces around the words', function() {
  const inputName = " Dr. Susie  Seuss ";
  const expectedOutput = "Dr. Seuss, Susie";
  assert.equal(nameInverter(inputName), expectedOutput);
});
// input: " Dr. first-name last-name "
// output: "Dr. last-name, first-name"

it('should return a honorific hypened last-name, first-name when passed honorific first-name last-name with extra spaces around the words', function() {
  const inputName = " Dr. Susie  Seuss-Sue ";
  const expectedOutput = "Dr. Seuss-Sue, Susie";
  assert.equal(nameInverter(inputName), expectedOutput);
});
// input: " Dr. first-name last-name "
// output: "Dr. last-name, first-name"

it('should return error with too many arguments', function() {
  const inputName = " Dr. Susie Sue Seuss ";

  expect((inputName) => nameInverter().to.throw());
});
// input: " Dr. first-name middle-name last-name "
// output: "Erro"

it('should throw an error when name is undefined', function() {

  expect((undefined) => nameInverter().to.throw());

  // const expectedOutput;
 //  assert.throws(nameInverter(inputName), expectedOutput);
});
// input: undefined
// output: throw 'Error'
});