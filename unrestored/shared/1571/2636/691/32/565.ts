/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：565
 */

"use strict"

Object.defineProperty(exports, "__esModule", {
  value: true
})
var r = function () {
  function e(e, t) {
    for (var n = 0; n < t.length; n++) {
      var r = t[n]
      r.enumerable = r.enumerable || false
      r.configurable = true
      if ("value" in r) {
        r.writable = true
      }
      Object.defineProperty(e, r.key, r)
    }
  }
  return function (t, n, r) {
    if (n) {
      e(t.prototype, n)
    }
    if (r) {
      e(t, r)
    }
    return t
  }
}()
function i(e, t) {
  if (!(e instanceof t)) {
    throw new TypeError("Cannot call a class as a function")
  }
}
var o = function () {
  function e(t, n, r) {
    if (undefined === n) {
      n = false
    }
    i(this, e)
    this._fn = t
    this._once = n
    this._thisArg = r
    this._next = this._prev = this._owner = null
  }
  r(e, [
    {
      key: "detach",
      value: function () {
        return null !== this._owner && (this._owner.detach(this), true)
      }
    }
  ])
  return e
}()
function a(e, t) {
  if (e._head) {
    e._tail._next = t
    t._prev = e._tail
    e._tail = t
  } else {
    e._head = t
    e._tail = t
  }
  t._owner = e
  return t
}
var s = function () {
  function e() {
    i(this, e)
    this._head = this._tail = undefined
  }
  r(e, [
    {
      key: "handlers",
      value: function () {
        var e = !(arguments.length <= 0 || undefined === arguments[0]) && arguments[0]
        var /* [auto-meaningful-name] */this$_head = this._head
        if (e) {
          return !!this$_head
        }
        for (var n = []; this$_head;) {
          n.push(this$_head)
          this$_head = this$_head._next
        }
        return n
      }
    }, {
      key: "has",
      value: function (e) {
        if (!(e instanceof o)) {
          throw new Error("MiniSignal#has(): First arg must be a MiniSignalBinding object.")
        }
        return e._owner === this
      }
    }, {
      key: "dispatch",
      value: function () {
        var /* [auto-meaningful-name] */this$_head = this._head
        if (!this$_head) {
          return false
        }
        for (; this$_head;) {
          if (this$_head._once) {
            this.detach(this$_head)
          }
          this$_head._fn.apply(this$_head._thisArg, arguments)
          this$_head = this$_head._next
        }
        return true
      }
    }, {
      key: "add",
      value: function (e) {
        var t = arguments.length <= 1 || undefined === arguments[1] ? null : arguments[1]
        if ("function" !== typeof e) {
          throw new Error("MiniSignal#add(): First arg must be a Function.")
        }
        return a(this, new o(e, false, t))
      }
    }, {
      key: "once",
      value: function (e) {
        var t = arguments.length <= 1 || undefined === arguments[1] ? null : arguments[1]
        if ("function" !== typeof e) {
          throw new Error("MiniSignal#once(): First arg must be a Function.")
        }
        return a(this, new o(e, true, t))
      }
    }, {
      key: "detach",
      value: function (e) {
        if (!(e instanceof o)) {
          throw new Error("MiniSignal#detach(): First arg must be a MiniSignalBinding object.")
        }
        if (!(e._owner !== this)) {
          if (e._prev) {
            e._prev._next = e._next
          }
          if (e._next) {
            e._next._prev = e._prev
          }
          if (e === this._head) {
            this._head = e._next
            if (null === e._next) {
              this._tail = null
            }
          } else {
            if (e === this._tail) {
              this._tail = e._prev
              this._tail._next = null
            }
          }
          e._owner = null
        }
        return this
      }
    }, {
      key: "detachAll",
      value: function () {
        var /* [auto-meaningful-name] */this$_head = this._head
        if (!this$_head) {
          return this
        }
        for (this._head = this._tail = null; this$_head;) {
          this$_head._owner = null
          this$_head = this$_head._next
        }
        return this
      }
    }
  ])
  return e
}()
s.MiniSignalBinding = o
exports.default = s
module.exports = exports.default
