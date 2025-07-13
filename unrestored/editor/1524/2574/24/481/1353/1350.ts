(function (t) {
  var r = require("../1123/758");
  var i = Object.prototype.toString;
  var o = "function" === typeof Blob || "undefined" !== typeof Blob && "[object BlobConstructor]" === i.call(Blob);
  var a = "function" === typeof File || "undefined" !== typeof File && "[object FileConstructor]" === i.call(File);
  module.exports = function e(n) {
    if (!n || "object" !== typeof n) {
      return !1;
    }
    if (r(n)) {
      for (var i = 0, s = n.length; i < s; i++) {
        if (e(n[i])) {
          return !0;
        }
      }
      return !1;
    }
    if ("function" === typeof t && t.isBuffer && t.isBuffer(n) || "function" === typeof ArrayBuffer && n instanceof ArrayBuffer || o && n instanceof Blob || a && n instanceof File) {
      return !0;
    }
    if (n.toJSON && "function" === typeof n.toJSON && 1 === arguments.length) {
      return e(n.toJSON(), !0);
    }
    for (var c in n) if (Object.prototype.hasOwnProperty.call(n, c) && e(n[c])) {
      return !0;
    }
    return !1;
  };
}).call(this, require("../../../616/570/index").Buffer);