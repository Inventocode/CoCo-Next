/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：1307
 */

"use strict"

var /* [auto-meaningful-name] */Object$prototype$hasOwnProperty = Object.prototype.hasOwnProperty
var i = "~"
function o() {}
function a(e, t, n) {
  this.fn = e
  this.context = t
  this.once = n || false
}
function s(e, t, n, r, o) {
  if ("function" !== typeof n) {
    throw new TypeError("The listener must be a function")
  }
  var s = new a(n, r || e, o)
  var c = i ? i + t : t
  if (e._events[c]) {
    if (e._events[c].fn) {
      e._events[c] = [e._events[c], s]
    } else {
      e._events[c].push(s)
    }
  } else {
    e._events[c] = s
    e._eventsCount++
  }
  return e
}
function c(e, t) {
  if (0 === --e._eventsCount) {
    e._events = new o()
  } else {
    delete e._events[t]
  }
}
function u() {
  this._events = new o()
  this._eventsCount = 0
}
if (Object.create) {
  o.prototype = Object.create(null)
  if (!new o().__proto__) {
    i = false
  }
}
u.prototype.eventNames = function () {
  var /* [auto-meaningful-name] */this$_events
  var t
  var n = []
  if (0 === this._eventsCount) {
    return n
  }
  for (t in this$_events = this._events) if (Object$prototype$hasOwnProperty.call(this$_events, t)) {
    n.push(i ? t.slice(1) : t)
  }
  return Object.getOwnPropertySymbols ? n.concat(Object.getOwnPropertySymbols(this$_events)) : n
}
u.prototype.listeners = function (e) {
  var t = i ? i + e : e
  var n = this._events[t]
  if (!n) {
    return []
  }
  if (n.fn) {
    return [n.fn]
  }
  for (var r = 0, /* [auto-meaningful-name] */n$length = n.length, a = new Array(n$length); r < n$length; r++) {
    a[r] = n[r].fn
  }
  return a
}
u.prototype.listenerCount = function (e) {
  var t = i ? i + e : e
  var n = this._events[t]
  return n ? n.fn ? 1 : n.length : 0
}
u.prototype.emit = function (e, t, n, r, o, a) {
  var s = i ? i + e : e
  if (!this._events[s]) {
    return false
  }
  var c
  var u
  var l = this._events[s]
  var /* [auto-meaningful-name] */arguments$length = arguments.length
  if (l.fn) {
    switch (l.once && this.removeListener(e, l.fn, undefined, true), arguments$length) {
      case 1:
        l.fn.call(l.context)
        return true
      case 2:
        l.fn.call(l.context, t)
        return true
      case 3:
        l.fn.call(l.context, t, n)
        return true
      case 4:
        l.fn.call(l.context, t, n, r)
        return true
      case 5:
        l.fn.call(l.context, t, n, r, o)
        return true
      case 6:
        l.fn.call(l.context, t, n, r, o, a)
        return true
    }
    for (u = 1, c = new Array(arguments$length - 1); u < arguments$length; u++) {
      c[u - 1] = arguments[u]
    }
    l.fn.apply(l.context, c)
  } else {
    var d
    var /* [auto-meaningful-name] */l$length = l.length
    for (u = 0; u < l$length; u++) {
      switch (l[u].once && this.removeListener(e, l[u].fn, undefined, true), arguments$length) {
        case 1:
          l[u].fn.call(l[u].context)
          break
        case 2:
          l[u].fn.call(l[u].context, t)
          break
        case 3:
          l[u].fn.call(l[u].context, t, n)
          break
        case 4:
          l[u].fn.call(l[u].context, t, n, r)
          break
        default:
          if (!c) {
            for (d = 1, c = new Array(arguments$length - 1); d < arguments$length; d++) {
              c[d - 1] = arguments[d]
            }
          }
          l[u].fn.apply(l[u].context, c)
      }
    }
  }
  return true
}
u.prototype.on = function (e, t, n) {
  return s(this, e, t, n, false)
}
u.prototype.once = function (e, t, n) {
  return s(this, e, t, n, true)
}
u.prototype.removeListener = function (e, t, n, r) {
  var o = i ? i + e : e
  if (!this._events[o]) {
    return this
  }
  if (!t) {
    c(this, o)
    return this
  }
  var a = this._events[o]
  if (a.fn) {
    if (!(a.fn !== t || r && !a.once || n && a.context !== n)) {
      c(this, o)
    }
  } else {
    for (var s = 0, u = [], /* [auto-meaningful-name] */a$length = a.length; s < a$length; s++) {
      if (a[s].fn !== t || r && !a[s].once || n && a[s].context !== n) {
        u.push(a[s])
      }
    }
    if (u.length) {
      this._events[o] = 1 === u.length ? u[0] : u
    } else {
      c(this, o)
    }
  }
  return this
}
u.prototype.removeAllListeners = function (e) {
  var t
  if (e) {
    t = i ? i + e : e
    if (this._events[t]) {
      c(this, t)
    }
  } else {
    this._events = new o()
    this._eventsCount = 0
  }
  return this
}
u.prototype.off = u.prototype.removeListener
u.prototype.addListener = u.prototype.on
u.prefixed = i
u.EventEmitter = u
module.exports = u
