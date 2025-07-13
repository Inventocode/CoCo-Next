import * as r from "../1626/231";
module.exports = function (e) {
  if (!r(e) && null !== e) {
    throw TypeError("Can't set " + String(e) + " as a prototype");
  }
  return e;
};