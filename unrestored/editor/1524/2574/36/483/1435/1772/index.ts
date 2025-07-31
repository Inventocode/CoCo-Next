var r = require("../../1436/1830/1083/index");
var i = require("./1801");
var o = require("../../1437/1087/index");
var a = require("./1802");
var s = require("./1809");
var c = require("./1265/index");
var u = require("./1266");
var l = require("./1812/index");
var f = require("./1814/index");
var h = require("./1270");
var d = require("./1815/index");
var p = require("./959/index");
var _ = require("./1820");
var A = require("./1821/index");
var g = require("./1274/index");
var v = require("./834");
var m = require("./957/index");
var y = require("./1826/index");
var b = require("../../1436/1830/638");
var w = require("./1828/index");
var E = require("../../1437/833/index");
var x = require("../../1436/1830/836/index");
var C = {};
C["[object Arguments]"] = C["[object Array]"] = C["[object ArrayBuffer]"] = C["[object DataView]"] = C["[object Boolean]"] = C["[object Date]"] = C["[object Float32Array]"] = C["[object Float64Array]"] = C["[object Int8Array]"] = C["[object Int16Array]"] = C["[object Int32Array]"] = C["[object Map]"] = C["[object Number]"] = C["[object Object]"] = C["[object RegExp]"] = C["[object Set]"] = C["[object String]"] = C["[object Symbol]"] = C["[object Uint8Array]"] = C["[object Uint8ClampedArray]"] = C["[object Uint16Array]"] = C["[object Uint32Array]"] = !0;
C["[object Error]"] = C["[object Function]"] = C["[object WeakMap]"] = !1;
module.exports = function e(t, n, O, S, k, T) {
  var B;
  var D = 1 & n;
  var I = 2 & n;
  var F = 4 & n;
  if (O && (B = k ? O(t, S, k, T) : O(t)), void 0 !== B) {
    return B;
  }
  if (!b(t)) {
    return t;
  }
  var R = v(t);
  if (R) {
    if (B = _(t), !D) {
      return u(t, B);
    }
  } else {
    var P = p(t);
    var N = "[object Function]" == P || "[object GeneratorFunction]" == P;
    if (m(t)) {
      return c(t, D);
    }
    if ("[object Object]" == P || "[object Arguments]" == P || N && !k) {
      if (B = I || N ? {} : g(t), !D) {
        return I ? f(t, s(B, t)) : l(t, a(B, t));
      }
    } else {
      if (!C[P]) {
        return k ? t : {};
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
  var j = R ? void 0 : (F ? I ? d : h : I ? x : E)(t);
  i(j || t, function (r, i) {
    if (j) {
      r = t[i = r];
    }
    o(B, i, e(r, n, O, i, t, T));
  });
  return B;
};