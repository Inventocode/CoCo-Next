"use strict";

var r = require("../../../../../3200/624/index");
var i = require("../../../../../../1531/2584/1/index");
var a = i.mark(g);
function s() {
  var e = require("./3133");
  s = function () {
    return e;
  };
  return e;
}
function o() {
  var e = require("../../../../1187/index");
  o = function () {
    return e;
  };
  return e;
}
function l() {
  var e = require("../../../../../../1531/2584/206/776/807/index");
  l = function () {
    return e;
  };
  return e;
}
function u() {
  var e = require("../../../2633/index");
  u = function () {
    return e;
  };
  return e;
}
function c() {
  var e = require("./2816/index");
  c = function () {
    return e;
  };
  return e;
}
Object.defineProperty(exports, "__esModule", {
  value: !0
});
exports.default = g;
var p = require("../../../2701/index");
var f = require("../../../3141/2818/index");
var d = require("./3136");
var h = u();
var y = h.file;
var m = h.traverseFast;
var v = l()("babel:transform:file");
function g(e, t, n, r) {
  var l;
  var u;
  var h;
  var m;
  var g;
  return i.wrap(function (i) {
    for (;;) {
      switch (i.prev = i.next) {
        case 0:
          if (n = "".concat(n || ""), !r) {
            i.next = 11;
            break;
          }
          if ("Program" !== r.type) {
            i.next = 6;
            break;
          }
          r = y(r, [], []);
          i.next = 8;
          break;
        case 6:
          if ("File" === r.type) {
            i.next = 8;
            break;
          }
          throw new Error("AST root must be a Program or File node");
        case 8:
          if (t.cloneInputAst) {
            r = (0, d.default)(r);
          }
          i.next = 13;
          break;
        case 11:
          return i.delegateYield((0, f.default)(e, t, n), "t0", 12);
        case 12:
          r = i.t0;
        case 13:
          if (l = null, !1 !== t.inputSourceMap) {
            if ("object" === typeof t.inputSourceMap) {
              l = c().fromObject(t.inputSourceMap);
            }
            if (!l && (u = E(T, r))) {
              try {
                l = c().fromComment(u);
              } catch (a) {
                v("discarding unknown inline input sourcemap", a);
              }
            }
            if (!l) {
              h = E(b, r);
              if ("string" === typeof t.filename && h) {
                try {
                  m = b.exec(h);
                  if ((g = s().readFileSync(o().resolve(o().dirname(t.filename), m[1]))).length > 1e6) {
                    v("skip merging input map > 1 MB");
                  } else {
                    l = c().fromJSON(g);
                  }
                } catch (a) {
                  v("discarding unknown file input sourcemap", a);
                }
              } else if (h) {
                v("discarding un-loadable file input sourcemap");
              }
            }
          }
          return i.abrupt("return", new p.default(t, {
            code: n,
            ast: r,
            inputMap: l
          }));
        case 16:
        case "end":
          return i.stop();
      }
    }
  }, a);
}
var T = /^[@#]\s+sourceMappingURL=data:(?:application|text)\/json;(?:charset[:=]\S+?;)?base64,(?:.*)$/;
var b = /^[@#][ \t]+sourceMappingURL=([^\s'"`]+)[ \t]*$/;
function S(e, t, n) {
  if (t) {
    t = t.filter(function (t) {
      var r = t.value;
      return !e.test(r) || (n = r, !1);
    });
  }
  return [t, n];
}
function E(e, t) {
  var n = null;
  m(t, function (t) {
    var i = S(e, t.leadingComments, n);
    var a = r(i, 2);
    t.leadingComments = a[0];
    n = a[1];
    var s = S(e, t.innerComments, n);
    var o = r(s, 2);
    t.innerComments = o[0];
    n = o[1];
    var l = S(e, t.trailingComments, n);
    var u = r(l, 2);
    t.trailingComments = u[0];
    n = u[1];
  });
  return n;
}