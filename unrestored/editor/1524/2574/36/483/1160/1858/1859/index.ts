import * as r from "./1860";
var i = /^\s+/;
module.exports = function (e) {
  return e ? e.slice(0, r(e) + 1).replace(i, "") : e;
};