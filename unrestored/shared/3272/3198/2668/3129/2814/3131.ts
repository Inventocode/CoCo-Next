"use strict";

var r = require("../../../../3200/494");
function i() {
  var e = require("../../2647/index");
  i = function () {
    return e;
  };
  return e;
}
Object.defineProperty(exports, "__esModule", {
  value: !0
});
exports.default = function () {
  if (!a) {
    a = new s.default(Object.assign({}, l, {
      visitor: i().default.explode(l.visitor)
    }), {});
  }
  return a;
};
var a;
var s = require("../../2691/2813/2692");
function o(e) {
  var t = null == e ? void 0 : e._blockHoist;
  return null == t ? 1 : !0 === t ? 2 : t;
}
var l = {
  name: "internal.blockHoist",
  visitor: {
    Block: {
      exit: function (e) {
        for (var t = e.node, n = t.body, i = Math.pow(2, 30) - 1, a = !1, s = 0; s < n.length; s++) {
          var l = o(n[s]);
          if (l > i) {
            a = !0;
            break;
          }
          i = l;
        }
        if (a) {
          t.body = function (e) {
            for (var t = Object.create(null), n = 0; n < e.length; n++) {
              var i = e[n];
              var a = o(i);
              (t[a] || (t[a] = [])).push(i);
            }
            var s;
            var l = Object.keys(t).map(function (e) {
              return +e;
            }).sort(function (e, t) {
              return t - e;
            });
            var u = 0;
            var c = r(l);
            try {
              for (c.s(); !(s = c.n()).done;) {
                var p;
                var f = t[s.value];
                var d = r(f);
                try {
                  for (d.s(); !(p = d.n()).done;) {
                    var h = p.value;
                    e[u++] = h;
                  }
                } catch (y) {
                  d.e(y);
                } finally {
                  d.f();
                }
              }
            } catch (y) {
              c.e(y);
            } finally {
              c.f();
            }
            return e;
          }(n.slice());
        }
      }
    }
  }
};