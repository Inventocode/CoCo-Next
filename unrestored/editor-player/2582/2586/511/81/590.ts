/** 
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：590
 */

"use strict";

var n = require("./124");
var o = require("./74");
var i = require("./405");
var a = require("./400");
var u = require("./349/index");
var s = require("./406");
var c = require("./37");
var f = require("./404");
var h = require("./507");
var l = function (t) {
  var e = "function" === typeof Symbol && Symbol.iterator;
  var r = e && t[e];
  var n = 0;
  if (r) {
    return r.call(t);
  }
  if (t && "number" === typeof t.length) {
    return {
      next: function () {
        if (t && n >= t.length) {
          t = undefined;
        }
        return {
          value: t && t[n++],
          done: !t
        };
      }
    };
  }
  throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
var d = function () {
  function t() {}
  t.prototype.decode = function (t, e) {
    this.setHints(e);
    return this.decodeInternal(t);
  };
  t.prototype.decodeWithState = function (t) {
    if (!(null !== this.readers && undefined !== this.readers)) {
      this.setHints(null);
    }
    return this.decodeInternal(t);
  };
  t.prototype.setHints = function (t) {
    this.hints = t;
    var e = null !== t && undefined !== t && undefined !== t.get(n.a.TRY_HARDER);
    var r = null === t || undefined === t ? null : t.get(n.a.POSSIBLE_FORMATS);
    var c = new Array();
    if (null !== r && undefined !== r) {
      var h = r.some(function (t) {
        return t === o.a.UPC_A || t === o.a.UPC_E || t === o.a.EAN_13 || t === o.a.EAN_8 || t === o.a.CODABAR || t === o.a.CODE_39 || t === o.a.CODE_93 || t === o.a.CODE_128 || t === o.a.ITF || t === o.a.RSS_14 || t === o.a.RSS_EXPANDED;
      });
      if (h && !e) {
        c.push(new u.a(t));
      }
      if (r.includes(o.a.QR_CODE)) {
        c.push(new i.a());
      }
      if (r.includes(o.a.DATA_MATRIX)) {
        c.push(new s.a());
      }
      if (r.includes(o.a.AZTEC)) {
        c.push(new a.a());
      }
      if (r.includes(o.a.PDF_417)) {
        c.push(new f.a());
      }
      if (h && e) {
        c.push(new u.a(t));
      }
    }
    if (0 === c.length) {
      if (!e) {
        c.push(new u.a(t));
      }
      c.push(new i.a());
      c.push(new s.a());
      c.push(new a.a());
      c.push(new f.a());
      if (e) {
        c.push(new u.a(t));
      }
    }
    this.readers = c;
  };
  t.prototype.reset = function () {
    var t;
    var e;
    if (null !== this.readers) {
      try {
        for (var r = l(this.readers), n = r.next(); !n.done; n = r.next()) {
          n.value.reset();
        }
      } catch (o) {
        t = {
          error: o
        };
      } finally {
        try {
          if (n && !n.done && (e = r.return)) {
            e.call(r);
          }
        } finally {
          if (t) {
            throw t.error;
          }
        }
      }
    }
  };
  t.prototype.decodeInternal = function (t) {
    var e;
    var r;
    if (null === this.readers) {
      throw new h.a("No readers where selected, nothing can be read.");
    }
    try {
      for (var n = l(this.readers), o = n.next(); !o.done; o = n.next()) {
        var i = o.value;
        try {
          return i.decode(t, this.hints);
        } catch (a) {
          if (a instanceof h.a) {
            continue;
          }
        }
      }
    } catch (u) {
      e = {
        error: u
      };
    } finally {
      try {
        if (o && !o.done && (r = n.return)) {
          r.call(n);
        }
      } finally {
        if (e) {
          throw e.error;
        }
      }
    }
    throw new c.a("No MultiFormat Readers were able to detect the code.");
  };
  return t;
}();
exports.a = d;