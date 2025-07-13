"use strict";

module.exports = function (e) {
  return function (t) {
    return e.apply(null, t);
  };
};