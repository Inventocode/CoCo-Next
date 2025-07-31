var r = require("../1738/272");
var o = require("./930");
var i = require("../1250/627");
var a = require("../935/437");
var s = require("./628");
var c = require("../1738/332");
var l = require("./300/1205");
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