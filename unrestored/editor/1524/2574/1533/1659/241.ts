import * as r from "../1626/231";
module.exports = function (e) {
  if (!r(e)) {
    throw TypeError(String(e) + " is not an object");
  }
  return e;
};