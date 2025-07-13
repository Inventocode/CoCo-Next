import * as r from "../../1436/1830/1083/index";
import * as i from "./1801";
import * as o from "../../1437/1087/index";
import * as a from "./1802";
import * as s from "./1809";
import * as c from "./1265/index";
import * as u from "./1266";
import * as l from "./1812/index";
import * as f from "./1814/index";
import * as h from "./1270";
import * as d from "./1815/index";
import * as p from "./959/index";
import * as _ from "./1820";
import * as A from "./1821/index";
import * as g from "./1274/index";
import * as v from "./834";
import * as m from "./957/index";
import * as y from "./1826/index";
import * as b from "../../1436/1830/638";
import * as w from "./1828/index";
import * as E from "../../1437/833/index";
import * as x from "../../1436/1830/836/index";
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