var r;
var o;
var i;
var a;
var s;
var c;
var l;
var u;
var d = require("../../1736/194");
var p = require("../../1659/386/index").f;
var f = require("../../1743/1072/index").set;
var h = require("./1237");
var m = require("./1647");
var g = require("./1648");
var _ = require("../750");
var v = d.MutationObserver || d.WebKitMutationObserver;
var b = d.document;
var y = d.process;
var E = d.Promise;
var O = p(d, "queueMicrotask");
var w = O && O.value;
if (!w) {
  r = function () {
    var e;
    var t;
    for (_ && (e = y.domain) && e.exit(); o;) {
      t = o.fn;
      o = o.next;
      try {
        t();
      } catch (n) {
        if (o) {
          a();
        } else {
          i = undefined;
        }
        throw n;
      }
    }
    i = undefined;
    if (e) {
      e.enter();
    }
  };
  if (h || _ || g || !v || !b) {
    if (!m && E && E.resolve) {
      (l = E.resolve(undefined)).constructor = E;
      u = l.then;
      a = function () {
        u.call(l, r);
      };
    } else {
      a = _ ? function () {
        y.nextTick(r);
      } : function () {
        f.call(d, r);
      };
    }
  } else {
    s = true;
    c = b.createTextNode("");
    new v(r).observe(c, {
      characterData: true
    });
    a = function () {
      c.data = s = !s;
    };
  }
}
module.exports = w || function (e) {
  var t = {
    fn: e,
    next: undefined
  };
  if (i) {
    i.next = t;
  }
  if (!o) {
    o = t;
    a();
  }
  i = t;
};