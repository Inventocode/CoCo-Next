import * as r from "../../../../../../784/104/2401/1388/718/index";
import * as i from "../../../../../../784/104/2401/2412/2471/762/1143";
import * as o from "../../../../../../784/104/2401/1388/535";
var a = {};
a["[object Float32Array]"] = a["[object Float64Array]"] = a["[object Int8Array]"] = a["[object Int16Array]"] = a["[object Int32Array]"] = a["[object Uint8Array]"] = a["[object Uint8ClampedArray]"] = a["[object Uint16Array]"] = a["[object Uint32Array]"] = !0;
a["[object Arguments]"] = a["[object Array]"] = a["[object ArrayBuffer]"] = a["[object Boolean]"] = a["[object DataView]"] = a["[object Date]"] = a["[object Error]"] = a["[object Function]"] = a["[object Map]"] = a["[object Number]"] = a["[object Object]"] = a["[object RegExp]"] = a["[object Set]"] = a["[object String]"] = a["[object WeakMap]"] = !1;
module.exports = function (e) {
  return o(e) && i(e.length) && !!a[r(e)];
};