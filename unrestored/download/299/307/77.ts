/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：77
 */

"use strict"

export { i as c }
export { o as b }
export { a }
import * as /* [auto-meaningful-name] */Module_11 from /* 11 */"./11"
function i(e) {
  return new a(function (t) {
    t(e)
  })
}
function o(e) {
  return new a(function (t, n) {
    n(e)
  })
}
var a = function () {
  function e(e) {
    var t = this
    this._state = 0
    this._handlers = []
    this._resolve = function (e) {
      t._setResult(1, e)
    }
    this._reject = function (e) {
      t._setResult(2, e)
    }
    this._setResult = function (e, n) {
      if (0 === t._state) {
        if (Module_11.n(n)) {
          n.then(t._resolve, t._reject)
        } else {
          t._state = e
          t._value = n
          t._executeHandlers()
        }
      }
    }
    this._executeHandlers = function () {
      if (0 !== t._state) {
        var e = t._handlers.slice()
        t._handlers = []
        e.forEach(function (e) {
          if (!e[0]) {
            if (1 === t._state) {
              e[1](t._value)
            }
            if (2 === t._state) {
              e[2](t._value)
            }
            e[0] = true
          }
        })
      }
    }
    try {
      e(this._resolve, this._reject)
    } catch (n) {
      this._reject(n)
    }
  }
  e.prototype.then = function (t, n) {
    var r = this
    return new e(function (e, i) {
      r._handlers.push([
        false, function (n) {
          if (t) {
            try {
              e(t(n))
            } catch (r) {
              i(r)
            }
          } else {
            e(n)
          }
        }, function (t) {
          if (n) {
            try {
              e(n(t))
            } catch (r) {
              i(r)
            }
          } else {
            i(t)
          }
        }
      ])
      r._executeHandlers()
    })
  }
  e.prototype.catch = function (e) {
    return this.then(function (e) {
      return e
    }, e)
  }
  e.prototype.finally = function (t) {
    var n = this
    return new e(function (e, r) {
      var i
      var o
      return n.then(function (e) {
        o = false
        i = e
        if (t) {
          t()
        }
      }, function (e) {
        o = true
        i = e
        if (t) {
          t()
        }
      }).then(function () {
        if (o) {
          r(i)
        } else {
          e(i)
        }
      })
    })
  }
  return e
}()
export default a
