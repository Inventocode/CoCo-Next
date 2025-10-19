/** 
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：1250
 */

"use strict";

var r = require("../1738/752");
var o = require("../1738/709").getWeakData;
var i = require("../1659/241");
var a = require("../1738/231");
var s = require("../1745/635");
var c = require("../1646/827/index");
var l = require("../1733/399");
var u = require("../1745/332");
var d = require("../1745/423/index");
var p = d.set;
var f = d.getterFor;
var h = l.find;
var m = l.findIndex;
var g = 0;
var _ = function (e) {
  return e.frozen || (e.frozen = new v());
};
var v = function () {
  this.entries = [];
};
var b = function (e, t) {
  return h(e.entries, function (e) {
    return e[0] === t;
  });
};
v.prototype = {
  get: function (e) {
    var t = b(this, e);
    if (t) {
      return t[1];
    }
  },
  has: function (e) {
    return !!b(this, e);
  },
  set: function (e, t) {
    var n = b(this, e);
    if (n) {
      n[1] = t;
    } else {
      this.entries.push([e, t]);
    }
  },
  delete: function (e) {
    var t = m(this.entries, function (t) {
      return t[0] === e;
    });
    if (~t) {
      this.entries.splice(t, 1);
    }
    return !!~t;
  }
};
module.exports = {
  getConstructor: function (e, t, n, l) {
    var d = e(function (e, r) {
      s(e, d, t);
      p(e, {
        type: t,
        id: g++,
        frozen: undefined
      });
      if (undefined != r) {
        c(r, e[l], {
          that: e,
          AS_ENTRIES: n
        });
      }
    });
    var h = f(t);
    var m = function (e, t, n) {
      var r = h(e);
      var a = o(i(t), true);
      if (true === a) {
        _(r).set(t, n);
      } else {
        a[r.id] = n;
      }
      return e;
    };
    r(d.prototype, {
      delete: function (e) {
        var t = h(this);
        if (!a(e)) {
          return false;
        }
        var n = o(e);
        return true === n ? _(t).delete(e) : n && u(n, t.id) && delete n[t.id];
      },
      has: function (e) {
        var t = h(this);
        if (!a(e)) {
          return false;
        }
        var n = o(e);
        return true === n ? _(t).has(e) : n && u(n, t.id);
      }
    });
    r(d.prototype, n ? {
      get: function (e) {
        var t = h(this);
        if (a(e)) {
          var n = o(e);
          return true === n ? _(t).get(e) : n ? n[t.id] : undefined;
        }
      },
      set: function (e, t) {
        return m(this, e, t);
      }
    } : {
      add: function (e) {
        return m(this, e, true);
      }
    });
    return d;
  }
};