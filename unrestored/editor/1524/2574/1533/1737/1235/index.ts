var r;
var o;
var i;
var a;
var s;
var c;
var l;
var u;
import * as d from "../../1738/194";
var p = require("../../1534/386").f;
var f = require("../../1736/1071/index").set;
import * as h from "./1234";
import * as m from "./1640";
import * as g from "./1641";
import * as _ from "../750";
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
        throw o ? a() : i = void 0, n;
      }
    }
    i = void 0;
    if (e) {
      e.enter();
    }
  };
  if (h || _ || g || !v || !b) {
    if (!m && E && E.resolve) {
      (l = E.resolve(void 0)).constructor = E;
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
    s = !0;
    c = b.createTextNode("");
    new v(r).observe(c, {
      characterData: !0
    });
    a = function () {
      c.data = s = !s;
    };
  }
}
module.exports = w || function (e) {
  var t = {
    fn: e,
    next: void 0
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