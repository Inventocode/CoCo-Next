var r = require("./758");
var i = require("./1346");
var o = Object.prototype.toString;
var a = "function" === typeof Blob || "undefined" !== typeof Blob && "[object BlobConstructor]" === o.call(Blob);
var s = "function" === typeof File || "undefined" !== typeof File && "[object FileConstructor]" === o.call(File);
exports.deconstructPacket = function (e) {
  var t = [];
  var n = e.data;
  var o = e;
  o.data = function e(t, n) {
    if (!t) {
      return t;
    }
    if (i(t)) {
      var o = {
        _placeholder: !0,
        num: n.length
      };
      n.push(t);
      return o;
    }
    if (r(t)) {
      for (var a = new Array(t.length), s = 0; s < t.length; s++) {
        a[s] = e(t[s], n);
      }
      return a;
    }
    if ("object" === typeof t && !(t instanceof Date)) {
      a = {};
      for (var c in t) a[c] = e(t[c], n);
      return a;
    }
    return t;
  }(n, t);
  o.attachments = t.length;
  return {
    packet: o,
    buffers: t
  };
};
exports.reconstructPacket = function (e, t) {
  e.data = function e(t, n) {
    if (!t) {
      return t;
    }
    if (t && t._placeholder) {
      return n[t.num];
    }
    if (r(t)) {
      for (var i = 0; i < t.length; i++) {
        t[i] = e(t[i], n);
      }
    } else if ("object" === typeof t) {
      for (var o in t) t[o] = e(t[o], n);
    }
    return t;
  }(e.data, t);
  e.attachments = void 0;
  return e;
};
exports.removeBlobs = function (e, t) {
  var n = 0;
  var o = e;
  !function e(c, u, l) {
    if (!c) {
      return c;
    }
    if (a && c instanceof Blob || s && c instanceof File) {
      n++;
      var f = new FileReader();
      f.onload = function () {
        if (l) {
          l[u] = this.result;
        } else {
          o = this.result;
        }
        if (! --n) {
          t(o);
        }
      };
      f.readAsArrayBuffer(c);
    } else if (r(c)) {
      for (var h = 0; h < c.length; h++) {
        e(c[h], h, c);
      }
    } else if ("object" === typeof c && !i(c)) {
      for (var d in c) e(c[d], d, c);
    }
  }(o);
  if (!n) {
    t(o);
  }
};