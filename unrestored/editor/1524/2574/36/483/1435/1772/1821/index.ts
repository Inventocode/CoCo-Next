import * as r from "./1094";
import * as i from "./1822";
import * as o from "./1823";
import * as a from "./1824";
import * as s from "../../../1436/1830/1833/1273";
module.exports = function (e, t, n) {
  var c = e.constructor;
  switch (t) {
    case "[object ArrayBuffer]":
      return r(e);
    case "[object Boolean]":
    case "[object Date]":
      return new c(+e);
    case "[object DataView]":
      return i(e, n);
    case "[object Float32Array]":
    case "[object Float64Array]":
    case "[object Int8Array]":
    case "[object Int16Array]":
    case "[object Int32Array]":
    case "[object Uint8Array]":
    case "[object Uint8ClampedArray]":
    case "[object Uint16Array]":
    case "[object Uint32Array]":
      return s(e, n);
    case "[object Map]":
      return new c();
    case "[object Number]":
    case "[object String]":
      return new c(e);
    case "[object RegExp]":
      return o(e);
    case "[object Set]":
      return new c();
    case "[object Symbol]":
      return a(e);
  }
};