var r;
var o = require("../../1659/241");
var i = require("../../1745/1212");
var a = require("./1060");
var s = require("../../1541/816");
var c = require("../../1743/1072/1213");
var l = require("../../1743/1072/1057");
var u = require("../../1541/933");
var d = u("IE_PROTO");
var p = function () {};
var f = function (e) {
  return "<script>" + e + "</script>";
};
var h = function (e) {
  e.write(f(""));
  e.close();
  var t = e.parentWindow.Object;
  e = null;
  return t;
};
var m = function () {
  try {
    r = new ActiveXObject("htmlfile");
  } catch (t) {}
  m = "undefined" != typeof document ? document.domain && r ? h(r) : function () {
    var e;
    var t = l("iframe");
    t.style.display = "none";
    c.appendChild(t);
    t.src = String("javascript:");
    (e = t.contentWindow.document).open();
    e.write(f("document.F=Object"));
    e.close();
    return e.F;
  }() : h(r);
  for (var e = a.length; e--;) {
    delete m.prototype[a[e]];
  }
  return m();
};
s[d] = true;
module.exports = Object.create || function (e, t) {
  var n;
  if (null !== e) {
    p.prototype = o(e);
    n = new p();
    p.prototype = null;
    n[d] = e;
  } else {
    n = m();
  }
  return undefined === t ? n : i(n, t);
};