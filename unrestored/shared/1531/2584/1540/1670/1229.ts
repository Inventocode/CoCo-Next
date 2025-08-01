"use strict";

var r = require("../1541/300").f;
var o = require("../1253/575");
var i = require("../1738/752");
var a = require("../1253/632");
var s = require("../1745/635");
var c = require("../1646/827/index");
var l = require("../936/1066/index");
var u = require("../1667/751");
var d = require("../1745/272");
var p = require("../1738/709").fastKey;
var f = require("../1745/423/index");
var h = f.set;
var m = f.getterFor;
module.exports = {
  getConstructor: function (e, t, n, l) {
    var u = e(function (e, r) {
      s(e, u, t);
      h(e, {
        type: t,
        index: o(null),
        first: void 0,
        last: void 0,
        size: 0
      });
      if (!d) {
        e.size = 0;
      }
      if (void 0 != r) {
        c(r, e[l], {
          that: e,
          AS_ENTRIES: n
        });
      }
    });
    var f = m(t);
    var g = function (e, t, n) {
      var r;
      var o;
      var i = f(e);
      var a = _(e, t);
      if (a) {
        a.value = n;
      } else {
        i.last = a = {
          index: o = p(t, !0),
          key: t,
          value: n,
          previous: r = i.last,
          next: void 0,
          removed: !1
        };
        if (!i.first) {
          i.first = a;
        }
        if (r) {
          r.next = a;
        }
        if (d) {
          i.size++;
        } else {
          e.size++;
        }
        if ("F" !== o) {
          i.index[o] = a;
        }
      }
      return e;
    };
    var _ = function (e, t) {
      var n;
      var r = f(e);
      var o = p(t);
      if ("F" !== o) {
        return r.index[o];
      }
      for (n = r.first; n; n = n.next) {
        if (n.key == t) {
          return n;
        }
      }
    };
    i(u.prototype, {
      clear: function () {
        for (var e = f(this), t = e.index, n = e.first; n;) {
          n.removed = !0;
          if (n.previous) {
            n.previous = n.previous.next = void 0;
          }
          delete t[n.index];
          n = n.next;
        }
        e.first = e.last = void 0;
        if (d) {
          e.size = 0;
        } else {
          this.size = 0;
        }
      },
      delete: function (e) {
        var t = f(this);
        var n = _(this, e);
        if (n) {
          var r = n.next;
          var o = n.previous;
          delete t.index[n.index];
          n.removed = !0;
          if (o) {
            o.next = r;
          }
          if (r) {
            r.previous = o;
          }
          if (t.first == n) {
            t.first = r;
          }
          if (t.last == n) {
            t.last = o;
          }
          if (d) {
            t.size--;
          } else {
            this.size--;
          }
        }
        return !!n;
      },
      forEach: function (e) {
        for (var t, n = f(this), r = a(e, arguments.length > 1 ? arguments[1] : void 0, 3); t = t ? t.next : n.first;) {
          for (r(t.value, t.key, this); t && t.removed;) {
            t = t.previous;
          }
        }
      },
      has: function (e) {
        return !!_(this, e);
      }
    });
    i(u.prototype, n ? {
      get: function (e) {
        var t = _(this, e);
        return t && t.value;
      },
      set: function (e, t) {
        return g(this, 0 === e ? 0 : e, t);
      }
    } : {
      add: function (e) {
        return g(this, e = 0 === e ? 0 : e, e);
      }
    });
    if (d) {
      r(u.prototype, "size", {
        get: function () {
          return f(this).size;
        }
      });
    }
    return u;
  },
  setStrong: function (e, t, n) {
    var r = t + " Iterator";
    var o = m(t);
    var i = m(r);
    l(e, t, function (e, t) {
      h(this, {
        type: r,
        target: e,
        state: o(e),
        kind: t,
        last: void 0
      });
    }, function () {
      for (var e = i(this), t = e.kind, n = e.last; n && n.removed;) {
        n = n.previous;
      }
      return e.target && (e.last = n = n ? n.next : e.state.first) ? "keys" == t ? {
        value: n.key,
        done: !1
      } : "values" == t ? {
        value: n.value,
        done: !1
      } : {
        value: [n.key, n.value],
        done: !1
      } : (e.target = void 0, {
        value: void 0,
        done: !0
      });
    }, n ? "entries" : "values", !n, !0);
    u(t);
  }
};