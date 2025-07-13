import * as r from "../1660/1072";
module.exports = function (e) {
  if (r(e)) {
    throw TypeError("The method doesn't accept regular expressions");
  }
  return e;
};