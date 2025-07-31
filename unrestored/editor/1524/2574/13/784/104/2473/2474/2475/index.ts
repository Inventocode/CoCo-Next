var r = require("../../../../../254/2503/2504/2505/972/index");
var i = require("../../../../../254/2523/2524/2525/2526/1403");
var o = require("./1404");
var a = require("./2476");
var s = require("./2477");
var c = require("./1406");
var u = require("./1407");
var l = require("./2480/index");
var f = require("./2481/index");
var h = require("./1394");
var d = require("./2482/index");
var p = require("./977/index");
var _ = require("./2483");
var A = require("./2484/index");
var g = require("./1410/index");
var v = require("../../../2401/2412/446");
var m = require("./970/index");
var y = require("./2489/index");
var b = require("../../../../../254/2518/2519/475");
var w = require("./2491/index");
var E = require("../../../2401/1139/1383/849/index");
var x = require("../../../../../254/2503/2504/2505/852/index");
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