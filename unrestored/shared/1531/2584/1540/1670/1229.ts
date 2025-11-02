/** 
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：1229
 */

"use strict"

var require$$1623300$f = require("../1623/300").f
var o = require("../1654/575/index")
var i = require("../1738/752")
var a = require("../1253/632")
var s = require("../1745/635")
var c = require("../1646/827/index")
var l = require("../936/1066")
var u = require("../1667/751")
var d = require("../1623/272")
var require$$1738709$fastKey = require("../1738/709").fastKey
var f = require("../1745/423/index")
var f$set = f.set
var f$getterFor = f.getterFor
module.exports = {
  getConstructor: function (e, t, n, l) {
    var u = e(function (e, r) {
      s(e, u, t)
      f$set(e, {
        type: t,
        index: o(null),
        first: undefined,
        last: undefined,
        size: 0
      })
      if (!d) {
        e.size = 0
      }
      if (undefined != r) {
        c(r, e[l], {
          that: e,
          AS_ENTRIES: n
        })
      }
    })
    var f = f$getterFor(t)
    var g = function (e, t, n) {
      var /* [auto-meaningful-name] */i$last
      var o
      var i = f(e)
      var a = _(e, t)
      if (a) {
        a.value = n
      } else {
        i.last = a = {
          index: o = require$$1738709$fastKey(t, true),
          key: t,
          value: n,
          previous: i$last = i.last,
          next: undefined,
          removed: false
        }
        if (!i.first) {
          i.first = a
        }
        if (i$last) {
          i$last.next = a
        }
        if (d) {
          i.size++
        } else {
          e.size++
        }
        if ("F" !== o) {
          i.index[o] = a
        }
      }
      return e
    }
    var _ = function (e, t) {
      var n
      var r = f(e)
      var o = require$$1738709$fastKey(t)
      if ("F" !== o) {
        return r.index[o]
      }
      for (n = r.first; n; n = n.next) {
        if (n.key == t) {
          return n
        }
      }
    }
    i(u.prototype, {
      clear: function () {
        for (var e = f(this), e$index = e.index, e$first = e.first; e$first;) {
          e$first.removed = true
          if (e$first.previous) {
            e$first.previous = e$first.previous.next = undefined
          }
          delete e$index[e$first.index]
          e$first = e$first.next
        }
        e.first = e.last = undefined
        if (d) {
          e.size = 0
        } else {
          this.size = 0
        }
      },
      delete: function (e) {
        var t = f(this)
        var n = _(this, e)
        if (n) {
          var n$next = n.next
          var n$previous = n.previous
          delete t.index[n.index]
          n.removed = true
          if (n$previous) {
            n$previous.next = n$next
          }
          if (n$next) {
            n$next.previous = n$previous
          }
          if (t.first == n) {
            t.first = n$next
          }
          if (t.last == n) {
            t.last = n$previous
          }
          if (d) {
            t.size--
          } else {
            this.size--
          }
        }
        return !!n
      },
      forEach: function (e) {
        for (var t, n = f(this), r = a(e, arguments.length > 1 ? arguments[1] : undefined, 3); t = t ? t.next : n.first;) {
          for (r(t.value, t.key, this); t && t.removed;) {
            t = t.previous
          }
        }
      },
      has: function (e) {
        return !!_(this, e)
      }
    })
    i(u.prototype, n ? {
      get: function (e) {
        var t = _(this, e)
        return t && t.value
      },
      set: function (e, t) {
        return g(this, 0 === e ? 0 : e, t)
      }
    } : {
      add: function (e) {
        return g(this, e = 0 === e ? 0 : e, e)
      }
    })
    if (d) {
      require$$1623300$f(u.prototype, "size", {
        get: function () {
          return f(this).size
        }
      })
    }
    return u
  },
  setStrong: function (e, t, n) {
    var r = t + " Iterator"
    var o = f$getterFor(t)
    var i = f$getterFor(r)
    l(e, t, function (e, t) {
      f$set(this, {
        type: r,
        target: e,
        state: o(e),
        kind: t,
        last: undefined
      })
    }, function () {
      for (var e = i(this), e$kind = e.kind, e$last = e.last; e$last && e$last.removed;) {
        e$last = e$last.previous
      }
      return e.target && (e.last = e$last = e$last ? e$last.next : e.state.first) ? "keys" == e$kind ? {
        value: e$last.key,
        done: false
      } : "values" == e$kind ? {
        value: e$last.value,
        done: false
      } : {
        value: [e$last.key, e$last.value],
        done: false
      } : (e.target = undefined, {
        value: undefined,
        done: true
      })
    }, n ? "entries" : "values", !n, true)
    u(t)
  }
}
