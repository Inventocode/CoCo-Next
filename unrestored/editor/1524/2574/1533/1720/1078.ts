import * as r from "../1738/194";
import * as o from "../1626/167";
import * as i from "../1558/934";
var a = require("../1707/258/index").NATIVE_ARRAY_BUFFER_VIEWS;
var s = r.ArrayBuffer;
var c = r.Int8Array;
module.exports = !a || !o(function () {
  c(1);
}) || !o(function () {
  new c(-1);
}) || !i(function (e) {
  new c();
  new c(null);
  new c(1.5);
  new c(e);
}, !0) || o(function () {
  return 1 !== new c(new s(2), 1, void 0).length;
});