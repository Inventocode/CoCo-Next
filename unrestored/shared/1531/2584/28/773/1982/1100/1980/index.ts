var r = require("../1304");
var i = require("./1981");
require("./1305");
function o(e) {
  return void 0 === e || null === e;
}
function a(e) {
  (e = function (e) {
    var t = {};
    for (var n in e) t[n] = e[n];
    return t;
  }(e || {})).whiteList = e.whiteList || r.whiteList;
  e.onAttr = e.onAttr || r.onAttr;
  e.onIgnoreAttr = e.onIgnoreAttr || r.onIgnoreAttr;
  e.safeAttrValue = e.safeAttrValue || r.safeAttrValue;
  this.options = e;
}
a.prototype.process = function (e) {
  if (!(e = (e = e || "").toString())) {
    return "";
  }
  var t = this.options;
  var n = t.whiteList;
  var r = t.onAttr;
  var a = t.onIgnoreAttr;
  var s = t.safeAttrValue;
  return i(e, function (e, t, i, c, u) {
    var l = n[i];
    var f = !1;
    if (!0 === l) {
      f = l;
    } else {
      if ("function" === typeof l) {
        f = l(c);
      } else {
        if (l instanceof RegExp) {
          f = l.test(c);
        }
      }
    }
    if (!0 !== f) {
      f = !1;
    }
    if (c = s(i, c)) {
      var d;
      var h = {
        position: t,
        sourcePosition: e,
        source: u,
        isWhite: f
      };
      return f ? o(d = r(i, c, h)) ? i + ":" + c : d : o(d = a(i, c, h)) ? void 0 : d;
    }
  });
};
module.exports = a;