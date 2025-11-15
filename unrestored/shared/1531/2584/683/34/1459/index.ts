/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：1459
 */

"use strict"

var r = require("./1460")
var i = require("./1461")
var o = setTimeout
function a(e) {
  return Boolean(e && "undefined" !== typeof e.length)
}
function s() {}
function c(e) {
  if (!(this instanceof c)) {
    throw new TypeError("Promises must be constructed via new")
  }
  if ("function" !== typeof e) {
    throw new TypeError("not a function")
  }
  this._state = 0
  this._handled = false
  this._value = undefined
  this._deferreds = []
  p(e, this)
}
function u(e, t) {
  for (; 3 === e._state;) {
    e = e._value
  }
  if (0 !== e._state) {
    e._handled = true
    c._immediateFn(function () {
      var n = 1 === e._state ? t.onFulfilled : t.onRejected
      if (null !== n) {
        var r
        try {
          r = n(e._value)
        } catch (i) {
          return void f(t.promise, i)
        }
        l(t.promise, r)
      } else {
        (1 === e._state ? l : f)(t.promise, e._value)
      }
    })
  } else {
    e._deferreds.push(t)
  }
}
function l(e, t) {
  try {
    if (t === e) {
      throw new TypeError("A promise cannot be resolved with itself.")
    }
    if (t && ("object" === typeof t || "function" === typeof t)) {
      var /* [auto-meaningful-name] */t$then = t.then
      if (t instanceof c) {
        e._state = 3
        e._value = t
        return void d(e)
      }
      if ("function" === typeof t$then) {
        return void p((r = t$then, i = t, function () {
          r.apply(i, arguments)
        }), e)
      }
    }
    e._state = 1
    e._value = t
    d(e)
  } catch (o) {
    f(e, o)
  }
  var r
  var i
}
function f(e, t) {
  e._state = 2
  e._value = t
  d(e)
}
function d(e) {
  if (2 === e._state && 0 === e._deferreds.length) {
    c._immediateFn(function () {
      if (!e._handled) {
        c._unhandledRejectionFn(e._value)
      }
    })
  }
  for (var t = 0, /* [auto-meaningful-name] */e$_deferreds$length = e._deferreds.length; t < e$_deferreds$length; t++) {
    u(e, e._deferreds[t])
  }
  e._deferreds = null
}
function h(e, t, n) {
  this.onFulfilled = "function" === typeof e ? e : null
  this.onRejected = "function" === typeof t ? t : null
  this.promise = n
}
function p(e, t) {
  var n = false
  try {
    e(function (e) {
      if (!n) {
        n = true
        l(t, e)
      }
    }, function (e) {
      if (!n) {
        n = true
        f(t, e)
      }
    })
  } catch (r) {
    if (n) {
      return
    }
    n = true
    f(t, r)
  }
}
c.prototype.catch = function (e) {
  return this.then(null, e)
}
c.prototype.then = function (e, t) {
  var n = new this.constructor(s)
  u(this, new h(e, t, n))
  return n
}
c.prototype.finally = r.a
c.all = function (e) {
  return new c(function (t, n) {
    if (!a(e)) {
      return n(new TypeError("Promise.all accepts an array"))
    }
    var r = Array.prototype.slice.call(e)
    if (0 === r.length) {
      return t([])
    }
    var /* [auto-meaningful-name] */r$length = r.length
    function o(e, a) {
      try {
        if (a && ("object" === typeof a || "function" === typeof a)) {
          var /* [auto-meaningful-name] */a$then = a.then
          if ("function" === typeof a$then) {
            return void a$then.call(a, function (t) {
              o(e, t)
            }, n)
          }
        }
        r[e] = a
        if (0 === --r$length) {
          t(r)
        }
      } catch (c) {
        n(c)
      }
    }
    for (var s = 0; s < r.length; s++) {
      o(s, r[s])
    }
  })
}
c.allSettled = i.a
c.resolve = function (e) {
  return e && "object" === typeof e && e.constructor === c ? e : new c(function (t) {
    t(e)
  })
}
c.reject = function (e) {
  return new c(function (t, n) {
    n(e)
  })
}
c.race = function (e) {
  return new c(function (t, n) {
    if (!a(e)) {
      return n(new TypeError("Promise.race accepts an array"))
    }
    for (var r = 0, /* [auto-meaningful-name] */e$length = e.length; r < e$length; r++) {
      c.resolve(e[r]).then(t, n)
    }
  })
}
c._immediateFn = "function" === typeof setImmediate && function (t) {
  setImmediate(t)
} || function (e) {
  o(e, 0)
}
c._unhandledRejectionFn = function (e) {
  if ("undefined" !== typeof console && console) {
    console.warn("Possible Unhandled Promise Rejection:", e)
  }
}
exports.a = c
