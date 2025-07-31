var r = require("./1535");
var o = require("../../1738/332");
var i = require("../1211");
var a = require("../300/index").f;
module.exports = function (e) {
  var t = r.Symbol || (r.Symbol = {});
  if (!o(t, e)) {
    a(t, e, {
      value: i.f(e)
    });
  }
};