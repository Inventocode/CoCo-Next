import * as r from "../1623/309";
var o = {}.hasOwnProperty;
module.exports = Object.hasOwn || function (e, t) {
  return o.call(r(e), t);
};