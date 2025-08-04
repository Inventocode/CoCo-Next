var r = require("./1084/index");
var i = require("./1808");
var o = require("../../1444/1088/index");
var a = require("./1809");
var s = require("./1816");
var c = require("./1268");
var u = require("./1269");
var l = require("./1819");
var f = require("./1821");
var d = require("./1273/index");
var h = require("./1822/index");
var p = require("./960/index");
var _ = require("./1827");
var A = require("./1828/index");
var g = require("./1277/index");
var v = require("./835");
var m = require("./958/index");
var y = require("./1833/index");
var b = require("./638");
var w = require("./1835/index");
var E = require("../../1444/834/index");
var x = require("./837/index");
var C = {};
C["[object Arguments]"] = C["[object Array]"] = C["[object ArrayBuffer]"] = C["[object DataView]"] = C["[object Boolean]"] = C["[object Date]"] = C["[object Float32Array]"] = C["[object Float64Array]"] = C["[object Int8Array]"] = C["[object Int16Array]"] = C["[object Int32Array]"] = C["[object Map]"] = C["[object Number]"] = C["[object Object]"] = C["[object RegExp]"] = C["[object Set]"] = C["[object String]"] = C["[object Symbol]"] = C["[object Uint8Array]"] = C["[object Uint8ClampedArray]"] = C["[object Uint16Array]"] = C["[object Uint32Array]"] = !0;
C["[object Error]"] = C["[object Function]"] = C["[object WeakMap]"] = !1;
module.exports = function e(t, n, O, k, S, T) {
  var B;
  var D = 1 & n;
  var I = 2 & n;
  var F = 4 & n;
  if (O) {
    B = S ? O(t, k, S, T) : O(t);
  }
  if (void 0 !== B) {
    return B;
  }
  if (!b(t)) {
    return t;
  }
  var R = v(t);
  if (R) {
    B = _(t);
    if (!D) {
      return u(t, B);
    }
  } else {
    var P = p(t);
    var N = "[object Function]" == P || "[object GeneratorFunction]" == P;
    if (m(t)) {
      return c(t, D);
    }
    if ("[object Object]" == P || "[object Arguments]" == P || N && !S) {
      B = I || N ? {} : g(t);
      if (!D) {
        return I ? f(t, s(B, t)) : l(t, a(B, t));
      }
    } else {
      if (!C[P]) {
        return S ? t : {};
      }
      B = A(t, P, D);
    }
  }
  if (!T) {
    T = new r();
  }
  var M = T.get(t);
  if (M) {
    return M;
  }
  T.set(t, B);
  if (w(t)) {
    t.forEach(function (r) {
      B.add(e(r, n, O, r, t, T));
    });
  } else {
    if (y(t)) {
      t.forEach(function (r, i) {
        B.set(i, e(r, n, O, i, t, T));
      });
    }
  }
  var j = R ? void 0 : (F ? I ? h : d : I ? x : E)(t);
  i(j || t, function (r, i) {
    if (j) {
      r = t[i = r];
    }
    o(B, i, e(r, n, O, i, t, T));
  });
  return B;
};