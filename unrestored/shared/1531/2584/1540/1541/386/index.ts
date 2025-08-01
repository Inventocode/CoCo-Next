var r = require("../../1745/272");
var o = require("../931");
var i = require("../../1253/627");
var a = require("../../936/437");
var s = require("../628");
var c = require("../../1745/332");
var l = require("./1208");
var u = Object.getOwnPropertyDescriptor;
exports.f = r ? u : function (e, t) {
  if (e = a(e), t = s(t), l) {
    try {
      return u(e, t);
    } catch (n) {}
  }
  if (c(e, t)) {
    return i(!o.f.call(e, t), e[t]);
  }
};