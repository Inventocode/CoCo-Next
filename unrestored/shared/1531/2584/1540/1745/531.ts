var r = require("../1623/300").f;
var o = require("./332");
var i = require("../1742/247/index")("toStringTag");
module.exports = function (e, t, n) {
  if (e && !o(e = n ? e : e.prototype, i)) {
    r(e, i, {
      configurable: !0,
      value: t
    });
  }
};