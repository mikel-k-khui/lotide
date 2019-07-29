// index.js
const head   = require('./header');
const tail   = require('./tail');
const middle = require('./middle');
const assertArraysEqual = require(''./assertArraysEqual');

module.exports = {
  head:   head,
  tail:   tail,
  middle: middle,
  assertArraysEqual: assertArraysEqual
};