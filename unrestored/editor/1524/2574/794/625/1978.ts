(function (e, t) {
  !function (e, n) {
    "use strict";

    if (!e.setImmediate) {
      var r;
      var i = 1;
      var o = {};
      var a = !1;
      var s = e.document;
      var c = Object.getPrototypeOf && Object.getPrototypeOf(e);
      c = c && c.setTimeout ? c : e;
      if ("[object process]" === {}.toString.call(e.process)) {
        r = function (e) {
          t.nextTick(function () {
            l(e);
          });
        };
      } else {
        if (function () {
          if (e.postMessage && !e.importScripts) {
            var t = !0;
            var n = e.onmessage;
            e.onmessage = function () {
              t = !1;
            };
            e.postMessage("", "*");
            e.onmessage = n;
            return t;
          }
        }()) {
          (function () {
            var t = "setImmediate$" + Math.random() + "$";
            var n = function (n) {
              if (n.source === e && "string" === typeof n.data && 0 === n.data.indexOf(t)) {
                l(+n.data.slice(t.length));
              }
            };
            if (e.addEventListener) {
              e.addEventListener("message", n, !1);
            } else {
              e.attachEvent("onmessage", n);
            }
            r = function (n) {
              e.postMessage(t + n, "*");
            };
          })();
        } else {
          if (e.MessageChannel) {
            (function () {
              var e = new MessageChannel();
              e.port1.onmessage = function (e) {
                l(e.data);
              };
              r = function (t) {
                e.port2.postMessage(t);
              };
            })();
          } else {
            if (s && "onreadystatechange" in s.createElement("script")) {
              (function () {
                var e = s.documentElement;
                r = function (t) {
                  var n = s.createElement("script");
                  n.onreadystatechange = function () {
                    l(t);
                    n.onreadystatechange = null;
                    e.removeChild(n);
                    n = null;
                  };
                  e.appendChild(n);
                };
              })();
            } else {
              r = function (e) {
                setTimeout(l, 0, e);
              };
            }
          }
        }
      }
      c.setImmediate = function (e) {
        if ("function" !== typeof e) {
          e = new Function("" + e);
        }
        for (var t = new Array(arguments.length - 1), n = 0; n < t.length; n++) {
          t[n] = arguments[n + 1];
        }
        var a = {
          callback: e,
          args: t
        };
        o[i] = a;
        r(i);
        return i++;
      };
      c.clearImmediate = u;
    }
    function u(e) {
      delete o[e];
    }
    function l(e) {
      if (a) {
        setTimeout(l, 0, e);
      } else {
        var t = o[e];
        if (t) {
          a = !0;
          try {
            !function (e) {
              var t = e.callback;
              var n = e.args;
              switch (n.length) {
                case 0:
                  t();
                  break;
                case 1:
                  t(n[0]);
                  break;
                case 2:
                  t(n[0], n[1]);
                  break;
                case 3:
                  t(n[0], n[1], n[2]);
                  break;
                default:
                  t.apply(void 0, n);
              }
            }(t);
          } finally {
            u(e);
            a = !1;
          }
        }
      }
    }
  }("undefined" === typeof self ? "undefined" === typeof e ? this : e : self);
}).call(this, require("../../31/251"), require("../../../../3262/3188/1184/368"));