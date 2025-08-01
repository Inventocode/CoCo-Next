var r = require("../1745/194");
var o = require("../1633/167");
var i = require("../1565/935");
var a = require("../1714/258/index").NATIVE_ARRAY_BUFFER_VIEWS;
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