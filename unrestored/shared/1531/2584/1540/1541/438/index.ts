var r = require("./1542");
var o = require("../../1745/332");
var i = require("../1214");
var a = require("../../1623/300").f;
module.exports = function (e) {
  var t = r.Symbol || (r.Symbol = {});
  if (!o(t, e)) {
    a(t, e, {
      value: i.f(e)
    });
  }
};