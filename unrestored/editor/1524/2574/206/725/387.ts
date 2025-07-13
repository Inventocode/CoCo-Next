"use strict";

exports.assert = function (e, t) {
  if (!e) {
    throw new Error(t);
  }
};
exports.fail = function (e) {
  console.error(e);
};