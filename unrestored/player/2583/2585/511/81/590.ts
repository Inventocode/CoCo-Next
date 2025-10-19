/** 
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：590
 */

"use strict";

var r = require("./124");
var i = require("./74");
var o = require("./405");
var a = require("./400");
var s = require("./349");
var u = require("./406");
var c = require("./37");
var l = require("./404/index");
var d = require("./507");
var f = function (t) {
  var e = "function" === typeof Symbol && Symbol.iterator;
  var n = e && t[e];
  var r = 0;
  if (n) {
    return n.call(t);
  }
  if (t && "number" === typeof t.length) {
    return {
      next: function () {
        if (t && r >= t.length) {
          t = undefined;
        }
        return {
          value: t && t[r++],
          done: !t
        };
      }
    };
  }
  throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
var h = function () {
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
    var e = null !== t && undefined !== t && undefined !== t.get(r.a.TRY_HARDER);
    var n = null === t || undefined === t ? null : t.get(r.a.POSSIBLE_FORMATS);
    var c = new Array();
    if (null !== n && undefined !== n) {
      var d = n.some(function (t) {
        return t === i.a.UPC_A || t === i.a.UPC_E || t === i.a.EAN_13 || t === i.a.EAN_8 || t === i.a.CODABAR || t === i.a.CODE_39 || t === i.a.CODE_93 || t === i.a.CODE_128 || t === i.a.ITF || t === i.a.RSS_14 || t === i.a.RSS_EXPANDED;
      });
      if (d && !e) {
        c.push(new s.a(t));
      }
      if (n.includes(i.a.QR_CODE)) {
        c.push(new o.a());
      }
      if (n.includes(i.a.DATA_MATRIX)) {
        c.push(new u.a());
      }
      if (n.includes(i.a.AZTEC)) {
        c.push(new a.a());
      }
      if (n.includes(i.a.PDF_417)) {
        c.push(new l.a());
      }
      if (d && e) {
        c.push(new s.a(t));
      }
    }
    if (0 === c.length) {
      if (!e) {
        c.push(new s.a(t));
      }
      c.push(new o.a());
      c.push(new u.a());
      c.push(new a.a());
      c.push(new l.a());
      if (e) {
        c.push(new s.a(t));
      }
    }
    this.readers = c;
  };
  t.prototype.reset = function () {
    var t;
    var e;
    if (null !== this.readers) {
      try {
        for (var n = f(this.readers), r = n.next(); !r.done; r = n.next()) {
          r.value.reset();
        }
      } catch (i) {
        t = {
          error: i
        };
      } finally {
        try {
          if (r && !r.done && (e = n.return)) {
            e.call(n);
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
    var n;
    if (null === this.readers) {
      throw new d.a("No readers where selected, nothing can be read.");
    }
    try {
      for (var r = f(this.readers), i = r.next(); !i.done; i = r.next()) {
        var o = i.value;
        try {
          return o.decode(t, this.hints);
        } catch (a) {
          if (a instanceof d.a) {
            continue;
          }
        }
      }
    } catch (s) {
      e = {
        error: s
      };
    } finally {
      try {
        if (i && !i.done && (n = r.return)) {
          n.call(r);
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
exports.a = h;