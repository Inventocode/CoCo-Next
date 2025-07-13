import * as r from "../1601/705";
module.exports = Array.isArray || function (e) {
  return "Array" == r(e);
};