"use strict";

var r;
var i = new Uint8Array(16);
function o() {
  if (!r && !(r = "undefined" !== typeof crypto && crypto.getRandomValues && crypto.getRandomValues.bind(crypto) || "undefined" !== typeof msCrypto && "function" === typeof msCrypto.getRandomValues && msCrypto.getRandomValues.bind(msCrypto))) {
    throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
  }
  return r(i);
}
var a = /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;
for (var s = function (e) {
    return "string" === typeof e && a.test(e);
  }, c = [], u = 0; u < 256; ++u) {
  c.push((u + 256).toString(16).substr(1));
}
var l = function (e) {
  var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
  var n = (c[e[t + 0]] + c[e[t + 1]] + c[e[t + 2]] + c[e[t + 3]] + "-" + c[e[t + 4]] + c[e[t + 5]] + "-" + c[e[t + 6]] + c[e[t + 7]] + "-" + c[e[t + 8]] + c[e[t + 9]] + "-" + c[e[t + 10]] + c[e[t + 11]] + c[e[t + 12]] + c[e[t + 13]] + c[e[t + 14]] + c[e[t + 15]]).toLowerCase();
  if (!s(n)) {
    throw TypeError("Stringified UUID is invalid");
  }
  return n;
};
exports.a = function (e, t, n) {
  var r = (e = e || {}).random || (e.rng || o)();
  if (r[6] = 15 & r[6] | 64, r[8] = 63 & r[8] | 128, t) {
    n = n || 0;
    for (var i = 0; i < 16; ++i) {
      t[n + i] = r[i];
    }
    return t;
  }
  return l(r);
};