import * as r from "./1393";
module.exports = function (e) {
  var t = new e.constructor(e.byteLength);
  new r(t).set(new r(e));
  return t;
};