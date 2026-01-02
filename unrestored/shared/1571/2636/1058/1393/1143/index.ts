/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：1143
 */

"use strict"

var r = require("../../../207/787/711/index")
var i = require("./712/index")
var o = require("./532")
var a = require("../../../207/787/399")
var s = require("regenerator-runtime")
var c = require("./283/index")
var u = require("./284/index")
var l = require("../../../207/787/180")
var f = require("../../../207/787/204")
Object.defineProperty(exports, "__esModule", {
  value: true
})
exports.eachChildOf = exports.advancer = exports.readCursor = exports.writeCursor = exports.WriteCursor = exports.ReadCursor = exports.isValidPathItem = undefined
function d(e, t) {
  if (!e) {
    throw new Error(t)
  }
}
var h = function (e) {
  return null != e && "object" === typeof e && !Array.isArray(e)
}
var p = function (e, t) {
  return typeof e === typeof t ? e > t : "string" === typeof e && "number" === typeof t
}
function _(e, t) {
  for (var n in e) {
    var r = n
    t.write(r, e[r])
  }
}
exports.isValidPathItem = function (e) {
  return "number" === typeof e || "string" === typeof e && "__proto__" !== e
}
var A = function () {
  function e() {
    var t = arguments.length > 0 && undefined !== arguments[0] ? arguments[0] : null
    l(this, e)
    this.parents = []
    this.indexes = []
    this.lcIdx = -1
    this.idx = -1
    this.container = t
  }
  f(e, [
    {
      key: "ascend",
      value: function () {
        d(this.parents.length === this.indexes.length / 2)
        if (0 === this.idx) {
          if (this.parents.length) {
            this.lcIdx = this.indexes.pop()
            this.container = this.parents.pop()
            this.idx = this.indexes.pop()
          } else {
            this.lcIdx = 0
            this.idx = -1
          }
        } else {
          d(this.idx > 0)
          this.idx--
          if (h(this.container[this.idx])) {
            this.idx--
          }
        }
      }
    }, {
      key: "getPath",
      value: function () {
        for (var e = [], /* [auto-meaningful-name] */this$container = this.container, n = this.parents.length - 1, /* [auto-meaningful-name] */this$idx = this.idx; this$idx >= 0;) {
          e.unshift(this$container[this$idx])
          if (0 === this$idx) {
            this$idx = this.indexes[2 * n]
            this$container = this.parents[n--]
          } else {
            this$idx -= h(this$container[this$idx - 1]) ? 2 : 1
          }
        }
        return e
      }
    }
  ])
  return e
}()
var g = function (e) {
  c(n, e)
  var t = u(n)
  function n() {
    l(this, n)
    return t.apply(this, arguments)
  }
  f(n, [
    {
      key: "get",
      value: function () {
        return this.container ? this.container.slice(this.idx + 1) : null
      }
    }, {
      key: "getKey",
      value: function () {
        d(null != this.container, "Invalid call to getKey before cursor descended")
        return this.container[this.idx]
      }
    }, {
      key: "getComponent",
      value: function () {
        var e
        return this.container && this.container.length > this.idx + 1 && h(e = this.container[this.idx + 1]) ? e : null
      }
    }, {
      key: "descendFirst",
      value: function () {
        var e = this.idx + 1
        if (!this.container || e >= this.container.length || h(this.container[e]) && e + 1 >= this.container.length) {
          return false
        }
        if (h(this.container[e])) {
          e++
        }
        var t = this.container[e]
        if (Array.isArray(t)) {
          this.indexes.push(this.idx)
          this.parents.push(this.container)
          this.indexes.push(e)
          this.idx = 0
          this.container = t
        } else {
          this.idx = e
        }
        return true
      }
    }, {
      key: "nextSibling",
      value: function () {
        d(this.parents.length === this.indexes.length / 2)
        if (this.idx > 0 || 0 === this.parents.length) {
          return false
        }
        var e = this.indexes[this.indexes.length - 1] + 1
        var t = this.parents[this.parents.length - 1]
        return !(e >= t.length) && (d(!isNaN(e)), this.indexes[this.indexes.length - 1] = e, this.container = t[e], true)
      }
    }, {
      key: "_init",
      value: function (e, t, n, r) {
        this.container = e
        this.idx = t
        this.parents = n.slice()
        this.indexes = r.slice()
      }
    }, {
      key: "clone",
      value: function () {
        var e = new n()
        e._init(this.container, this.idx, this.parents, this.indexes)
        return e
      }
    }, {
      key: Symbol.iterator,
      value: s.mark(function e() {
        return s.wrap(function (e) {
          for (;;) {
            switch (e.prev = e.next) {
              case 0:
                if (this.descendFirst()) {
                  e.next = 2
                  break
                }
                return e.abrupt("return")
              case 2:
                e.next = 4
                return this.getKey()
              case 4:
                if (this.nextSibling()) {
                  e.next = 2
                  break
                }
              case 5:
                this.ascend()
              case 6:
              case "end":
                return e.stop()
            }
          }
        }, e, this)
      })
    }, {
      key: "traverse",
      value: function (e, t) {
        var n = this.getComponent()
        if (n) {
          t(n, e)
        }
        var r
        var i = a(this)
        try {
          for (i.s(); !(r = i.n()).done;) {
            var /* [auto-meaningful-name] */r$value = r.value
            if (e) {
              e.descend(r$value)
            }
            this.traverse(e, t)
            if (e) {
              e.ascend()
            }
          }
        } catch (s) {
          i.e(s)
        } finally {
          i.f()
        }
      }
    }, {
      key: "eachPick",
      value: function (e, t) {
        this.traverse(e, function (e, n) {
          if (null != e.p) {
            t(e.p, n)
          }
        })
      }
    }, {
      key: "eachDrop",
      value: function (e, t) {
        this.traverse(e, function (e, n) {
          if (null != e.d) {
            t(e.d, n)
          }
        })
      }
    }
  ])
  return n
}(A)
exports.ReadCursor = g
var v = function (e) {
  c(a, e)
  var n = u(a)
  function a() {
    var e
    var t = arguments.length > 0 && undefined !== arguments[0] ? arguments[0] : null
    l(this, a);
    (e = n.call(this, t)).pendingDescent = []
    e._op = t
    return e
  }
  f(a, [
    {
      key: "flushDescent",
      value: function () {
        d(this.parents.length === this.indexes.length / 2)
        if (null === this.container) {
          this._op = this.container = []
        }
        for (var e = 0; e < this.pendingDescent.length; e++) {
          var t = this.pendingDescent[e]
          var n = this.idx + 1
          if (n < this.container.length && h(this.container[n])) {
            n++
          }
          d(n === this.container.length || !h(this.container[n]))
          if (n === this.container.length) {
            this.container.push(t)
            this.idx = n
          } else if (this.container[n] === t) {
            this.idx = n
          } else {
            if (!Array.isArray(this.container[n])) {
              var r = this.container.splice(n, this.container.length - n)
              this.container.push(r)
              if (this.lcIdx > -1) {
                this.lcIdx = n
              }
            }
            for (this.indexes.push(this.idx), this.parents.push(this.container), -1 !== this.lcIdx && (d(p(t, this.container[this.lcIdx][0])), n = this.lcIdx + 1, this.lcIdx = -1); n < this.container.length && p(t, this.container[n][0]);) {
              n++
            }
            this.indexes.push(n)
            this.idx = 0
            if (n < this.container.length && this.container[n][0] === t) {
              this.container = this.container[n]
            } else {
              var i = [t]
              this.container.splice(n, 0, i)
              this.container = i
            }
          }
        }
        this.pendingDescent.length = 0
      }
    }, {
      key: "reset",
      value: function () {
        this.lcIdx = -1
      }
    }, {
      key: "getComponent",
      value: function () {
        this.flushDescent()
        var e = this.idx + 1
        if (e < this.container.length && h(this.container[e])) {
          return this.container[e]
        }
        var t = {}
        this.container.splice(e, 0, t)
        return t
      }
    }, {
      key: "write",
      value: function (e, t) {
        var n = this.getComponent()
        d(null == n[e] || n[e] === t, "Internal consistency error: Overwritten component. File a bug")
        n[e] = t
      }
    }, {
      key: "get",
      value: function () {
        return this._op
      }
    }, {
      key: "descend",
      value: function (e) {
        if (!exports.isValidPathItem(e)) {
          throw Error("Invalid JSON key")
        }
        this.pendingDescent.push(e)
      }
    }, {
      key: "descendPath",
      value: function (e) {
        var /* [auto-meaningful-name] */this$pendingDescent;
        (this$pendingDescent = this.pendingDescent).push.apply(this$pendingDescent, r(e))
        return this
      }
    }, {
      key: "ascend",
      value: function () {
        if (this.pendingDescent.length) {
          this.pendingDescent.pop()
        } else {
          i(o(a.prototype), "ascend", this).call(this)
        }
      }
    }, {
      key: "mergeTree",
      value: function (e) {
        var t = arguments.length > 1 && undefined !== arguments[1] ? arguments[1] : _
        if (null !== e) {
          d(Array.isArray(e))
          if (e === this._op) {
            throw Error("Cannot merge into my own tree")
          }
          for (var /* [auto-meaningful-name] */this$lcIdx = this.lcIdx, /* [auto-meaningful-name] */this$parents$length = this.parents.length, i = 0, o = 0; o < e.length; o++) {
            var a = e[o]
            if ("string" === typeof a || "number" === typeof a) {
              i++
              this.descend(a)
            } else {
              if (Array.isArray(a)) {
                this.mergeTree(a, t)
              } else {
                if ("object" === typeof a) {
                  t(a, this)
                }
              }
            }
          }
          for (; i--;) {
            this.ascend()
          }
          this.lcIdx = this.parents.length === this$parents$length ? this$lcIdx : -1
        }
      }
    }, {
      key: "at",
      value: function (e, t) {
        this.descendPath(e)
        t(this)
        for (var n = 0; n < e.length; n++) {
          this.ascend()
        }
        return this
      }
    }, {
      key: "writeAtPath",
      value: function (e, t, n) {
        var r = this
        this.at(e, function () {
          return r.write(t, n)
        })
        this.reset()
        return this
      }
    }, {
      key: "writeMove",
      value: function (e, t) {
        var n = arguments.length > 2 && undefined !== arguments[2] ? arguments[2] : 0
        return this.writeAtPath(e, "p", n).writeAtPath(t, "d", n)
      }
    }, {
      key: "getPath",
      value: function () {
        var e = i(o(a.prototype), "getPath", this).call(this)
        e.push.apply(e, r(this.pendingDescent))
        return e
      }
    }
  ])
  return a
}(A)
exports.WriteCursor = v
exports.writeCursor = function () {
  return new v()
}
exports.readCursor = function (e) {
  return new g(e)
}
exports.advancer = function (e, t, n) {
  var r
  var i
  function o(r) {
    for (var o; i;) {
      var a = o = e.getKey()
      if (null != r) {
        var s = false
        if (t && "number" === typeof a && (o = t(a, e.getComponent())) < 0) {
          o = ~o
          s = true
        }
        if (p(o, r)) {
          return null
        }
        if (o === r && !s) {
          return e
        }
      }
      if (n && "number" === typeof o) {
        n(o, e.getComponent())
      }
      i = e.nextSibling()
    }
    return null
  }
  i = r = !!e && e.descendFirst()
  o.end = function () {
    if (r) {
      e.ascend()
    }
  }
  return o
}
exports.eachChildOf = function (e, t, n) {
  var r
  var i
  var o
  var a
  for (r = i = e && e.descendFirst(), o = a = t && t.descendFirst(); r || o;) {
    var s = r ? e.getKey() : null
    var c = o ? t.getKey() : null
    if (null !== s && null !== c) {
      if (p(c, s)) {
        c = null
      } else {
        if (s !== c) {
          s = null
        }
      }
    }
    n(null == s ? c : s, null != s ? e : null, null != c ? t : null)
    if (null != s && r) {
      r = e.nextSibling()
    }
    if (null != c && o) {
      o = t.nextSibling()
    }
  }
  if (i) {
    e.ascend()
  }
  if (a) {
    t.ascend()
  }
}
