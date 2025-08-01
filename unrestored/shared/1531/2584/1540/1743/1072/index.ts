var r;
var o;
var i;
var a;
var s = require("../../1745/194");
var c = require("../../1633/167");
var l = require("../../1253/632");
var u = require("./1213");
var d = require("./1057");
var p = require("../../1744/1238/1237");
var f = require("../../1744/750");
var h = s.setImmediate;
var m = s.clearImmediate;
var g = s.process;
var _ = s.MessageChannel;
var v = s.Dispatch;
var b = 0;
var y = {};
try {
  r = s.location;
} catch (T) {}
var E = function (e) {
  if (y.hasOwnProperty(e)) {
    var t = y[e];
    delete y[e];
    t();
  }
};
var O = function (e) {
  return function () {
    E(e);
  };
};
var w = function (e) {
  E(e.data);
};
var C = function (e) {
  s.postMessage(String(e), r.protocol + "//" + r.host);
};
if (!(h && m)) {
  h = function (e) {
    for (var t = [], n = arguments.length, r = 1; n > r;) {
      t.push(arguments[r++]);
    }
    y[++b] = function () {
      ("function" == typeof e ? e : Function(e)).apply(void 0, t);
    };
    o(b);
    return b;
  };
  m = function (e) {
    delete y[e];
  };
  if (f) {
    o = function (e) {
      g.nextTick(O(e));
    };
  } else {
    if (v && v.now) {
      o = function (e) {
        v.now(O(e));
      };
    } else {
      if (_ && !p) {
        a = (i = new _()).port2;
        i.port1.onmessage = w;
        o = l(a.postMessage, a, 1);
      } else {
        if (s.addEventListener && "function" == typeof postMessage && !s.importScripts && r && "file:" !== r.protocol && !c(C)) {
          o = C;
          s.addEventListener("message", w, !1);
        } else {
          o = "onreadystatechange" in d("script") ? function (e) {
            u.appendChild(d("script")).onreadystatechange = function () {
              u.removeChild(this);
              E(e);
            };
          } : function (e) {
            setTimeout(O(e), 0);
          };
        }
      }
    }
  }
}
module.exports = {
  set: h,
  clear: m
};