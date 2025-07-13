var r;
import * as o from "../1659/241";
import * as i from "../1738/1209";
import * as a from "../1534/819/1059";
import * as s from "../1534/815";
import * as c from "../1736/1071/1210";
import * as l from "../1736/1071/1056";
import * as u from "../1534/932";
var d = u("IE_PROTO");
var p = function () {};
var f = function (e) {
  return "<script>" + e + "<\/script>";
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
s[d] = !0;
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
  return void 0 === t ? n : i(n, t);
};