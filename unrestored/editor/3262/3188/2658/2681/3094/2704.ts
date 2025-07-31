"use strict";

function r(e, t) {
  for (var n = 0, r = Object.keys(t); n < r.length; n++) {
    var i = r[n];
    var a = t[i];
    if (void 0 !== a) {
      e[i] = a;
    }
  }
}
Object.defineProperty(exports, "__esModule", {
  value: !0
});
exports.isIterableIterator = function (e) {
  return !!e && "function" === typeof e.next && "function" === typeof e[Symbol.iterator];
};
exports.mergeOptions = function (e, t) {
  for (var n = 0, i = Object.keys(t); n < i.length; n++) {
    var a = i[n];
    if ("parserOpts" !== a && "generatorOpts" !== a && "assumptions" !== a || !t[a]) {
      var s = t[a];
      if (void 0 !== s) {
        e[a] = s;
      }
    } else {
      var o = t[a];
      r(e[a] || (e[a] = {}), o);
    }
  }
};