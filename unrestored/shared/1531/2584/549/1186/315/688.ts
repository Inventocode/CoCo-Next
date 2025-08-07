"use strict";

export { o as b };
import r = require("../../../54");
var i = {
  easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
  easeOut: "cubic-bezier(0.0, 0, 0.2, 1)",
  easeIn: "cubic-bezier(0.4, 0, 1, 1)",
  sharp: "cubic-bezier(0.4, 0, 0.6, 1)"
};
var o = {
  shortest: 150,
  shorter: 200,
  short: 250,
  standard: 300,
  complex: 375,
  enteringScreen: 225,
  leavingScreen: 195
};
function a(e) {
  return "".concat(Math.round(e), "ms");
}
var _a;
_a = {
  easing: i,
  duration: o,
  create: function () {
    var e = arguments.length > 0 && undefined !== arguments[0] ? arguments[0] : ["all"];
    var t = arguments.length > 1 && undefined !== arguments[1] ? arguments[1] : {};
    var n = t.duration;
    var s = undefined === n ? o.standard : n;
    var c = t.easing;
    var u = undefined === c ? i.easeInOut : c;
    var l = t.delay;
    var f = undefined === l ? 0 : l;
    r.a(t, ["duration", "easing", "delay"]);
    return (Array.isArray(e) ? e : [e]).map(function (e) {
      return "".concat(e, " ").concat("string" === typeof s ? s : a(s), " ").concat(u, " ").concat("string" === typeof f ? f : a(f));
    }).join(",");
  },
  getAutoHeightDuration: function (e) {
    if (!e) {
      return 0;
    }
    var t = e / 36;
    return Math.round(10 * (4 + 15 * Math.pow(t, .25) + t / 5));
  }
};
export { _a as a };
export default _a;