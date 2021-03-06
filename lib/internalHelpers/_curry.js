"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = curry;


// eslint-disable-next-line no-unused-vars
function curried(f, length, acc) {
  return function fn() {
    // eslint-disable-next-line prefer-rest-params
    var combined = acc.concat(Array.prototype.slice.call(arguments));
    return combined.length >= length ? f.apply(this, combined) : curried(f, length, combined);
  };
}
// eslint-disable-next-line no-redeclare

// eslint-disable-next-line no-unused-vars


// Type definitions taken from https://github.com/gcanti/flow-static-land/blob/master/src/Fun.js
function curry(f) {
  // eslint-disable-line no-redeclare
  return curried(f, f.length, []);
}
module.exports = exports["default"];