import * as r from "./1626/86/index";
import * as o from "./1728/706";
var i = String.fromCharCode;
var a = String.fromCodePoint;
r({
  target: "String",
  stat: !0,
  forced: !!a && 1 != a.length
}, {
  fromCodePoint: function (e) {
    for (var t, n = [], r = arguments.length, a = 0; r > a;) {
      if (t = +arguments[a++], o(t, 1114111) !== t) {
        throw RangeError(t + " is not a valid code point");
      }
      n.push(t < 65536 ? i(t) : i(55296 + ((t -= 65536) >> 10), t % 1024 + 56320));
    }
    return n.join("");
  }
});