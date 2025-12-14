/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：1074
 */

var r = function (e) {
  "use strict"

  var /* [auto-meaningful-name] */Object$prototype = Object.prototype
  var /* [auto-meaningful-name] */Object$prototype$hasOwnProperty = Object$prototype.hasOwnProperty
  var r = "function" === typeof Symbol ? Symbol : {}
  var i = r.iterator || "@@iterator"
  var o = r.asyncIterator || "@@asyncIterator"
  var a = r.toStringTag || "@@toStringTag"
  function s(e, t, n) {
    Object.defineProperty(e, t, {
      value: n,
      enumerable: true,
      configurable: true,
      writable: true
    })
    return e[t]
  }
  try {
    s({}, "")
  } catch (O) {
    s = function (e, t, n) {
      return e[t] = n
    }
  }
  function c(e, t, n, r) {
    var i = t && t.prototype instanceof f ? t : f
    var o = Object.create(i.prototype)
    var a = new E(r || [])
    o._invoke = function (e, t, n) {
      var /* [auto-meaningful-name] */SuspendedStart = "suspendedStart"
      return function (i, o) {
        if ("executing" === SuspendedStart) {
          throw new Error("Generator is already running")
        }
        if ("completed" === SuspendedStart) {
          if ("throw" === i) {
            throw o
          }
          return C()
        }
        for (n.method = i, n.arg = o;;) {
          var /* [auto-meaningful-name] */n$delegate = n.delegate
          if (n$delegate) {
            var s = y(n$delegate, n)
            if (s) {
              if (s === l) {
                continue
              }
              return s
            }
          }
          if ("next" === n.method) {
            n.sent = n._sent = n.arg
          } else if ("throw" === n.method) {
            if ("suspendedStart" === SuspendedStart) {
              SuspendedStart = "completed"
              throw n.arg
            }
            n.dispatchException(n.arg)
          } else if ("return" === n.method) {
            n.abrupt("return", n.arg)
          }
          SuspendedStart = "executing"
          var c = u(e, t, n)
          if ("normal" === c.type) {
            SuspendedStart = n.done ? "completed" : "suspendedYield"
            if (c.arg === l) {
              continue
            }
            return {
              value: c.arg,
              done: n.done
            }
          }
          if ("throw" === c.type) {
            SuspendedStart = "completed"
            n.method = "throw"
            n.arg = c.arg
          }
        }
      }
    }(e, n, a)
    return o
  }
  function u(e, t, n) {
    try {
      return {
        type: "normal",
        arg: e.call(t, n)
      }
    } catch (O) {
      return {
        type: "throw",
        arg: O
      }
    }
  }
  e.wrap = c
  var l = {}
  function f() {}
  function d() {}
  function h() {}
  var p = {}
  p[i] = function () {
    return this
  }
  var /* [auto-meaningful-name] */Object$getPrototypeOf = Object.getPrototypeOf
  var A = Object$getPrototypeOf && Object$getPrototypeOf(Object$getPrototypeOf(x([])))
  if (A && A !== Object$prototype && Object$prototype$hasOwnProperty.call(A, i)) {
    p = A
  }
  var g = h.prototype = f.prototype = Object.create(p)
  function v(e) {
    ["next", "throw", "return"].forEach(function (t) {
      s(e, t, function (e) {
        return this._invoke(t, e)
      })
    })
  }
  function m(e, t) {
    var r
    this._invoke = function (i, o) {
      function a() {
        return new t(function (r, a) {
          !function r(i, o, a, s) {
            var c = u(e[i], e, o)
            if ("throw" !== c.type) {
              var /* [auto-meaningful-name] */c$arg = c.arg
              var /* [auto-meaningful-name] */c$arg$value = c$arg.value
              return c$arg$value && "object" === typeof c$arg$value && Object$prototype$hasOwnProperty.call(c$arg$value, "__await") ? t.resolve(c$arg$value.__await).then(function (e) {
                r("next", e, a, s)
              }, function (e) {
                r("throw", e, a, s)
              }) : t.resolve(c$arg$value).then(function (e) {
                c$arg.value = e
                a(c$arg)
              }, function (e) {
                return r("throw", e, a, s)
              })
            }
            s(c.arg)
          }(i, o, r, a)
        })
      }
      return r = r ? r.then(a, a) : a()
    }
  }
  function y(e, t) {
    var n = e.iterator[t.method]
    if (undefined === n) {
      t.delegate = null
      if ("throw" === t.method) {
        if (e.iterator.return && (t.method = "return", t.arg = undefined, y(e, t), "throw" === t.method)) {
          return l
        }
        t.method = "throw"
        t.arg = new TypeError("The iterator does not provide a 'throw' method")
      }
      return l
    }
    var r = u(n, e.iterator, t.arg)
    if ("throw" === r.type) {
      t.method = "throw"
      t.arg = r.arg
      t.delegate = null
      return l
    }
    var /* [auto-meaningful-name] */r$arg = r.arg
    return r$arg ? r$arg.done ? (t[e.resultName] = r$arg.value, t.next = e.nextLoc, "return" !== t.method && (t.method = "next", t.arg = undefined), t.delegate = null, l) : r$arg : (t.method = "throw", t.arg = new TypeError("iterator result is not an object"), t.delegate = null, l)
  }
  function b(e) {
    var t = {
      tryLoc: e[0]
    }
    if (1 in e) {
      t.catchLoc = e[1]
    }
    if (2 in e) {
      t.finallyLoc = e[2]
      t.afterLoc = e[3]
    }
    this.tryEntries.push(t)
  }
  function w(e) {
    var t = e.completion || {}
    t.type = "normal"
    delete t.arg
    e.completion = t
  }
  function E(e) {
    this.tryEntries = [
      {
        tryLoc: "root"
      }
    ]
    e.forEach(b, this)
    this.reset(true)
  }
  function x(e) {
    if (e) {
      var t = e[i]
      if (t) {
        return t.call(e)
      }
      if ("function" === typeof e.next) {
        return e
      }
      if (!isNaN(e.length)) {
        var r = -1
        var o = function t() {
          for (; ++r < e.length;) {
            if (Object$prototype$hasOwnProperty.call(e, r)) {
              t.value = e[r]
              t.done = false
              return t
            }
          }
          t.value = undefined
          t.done = true
          return t
        }
        return o.next = o
      }
    }
    return {
      next: C
    }
  }
  function C() {
    return {
      value: undefined,
      done: true
    }
  }
  d.prototype = g.constructor = h
  h.constructor = d
  d.displayName = s(h, a, "GeneratorFunction")
  e.isGeneratorFunction = function (e) {
    var t = "function" === typeof e && e.constructor
    return !!t && (t === d || "GeneratorFunction" === (t.displayName || t.name))
  }
  e.mark = function (e) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(e, h)
    } else {
      e.__proto__ = h
      s(e, a, "GeneratorFunction")
    }
    e.prototype = Object.create(g)
    return e
  }
  e.awrap = function (e) {
    return {
      __await: e
    }
  }
  v(m.prototype)
  m.prototype[o] = function () {
    return this
  }
  e.AsyncIterator = m
  e.async = function (t, n, r, i, o) {
    if (undefined === o) {
      o = Promise
    }
    var a = new m(c(t, n, r, i), o)
    return e.isGeneratorFunction(n) ? a : a.next().then(function (e) {
      return e.done ? e.value : a.next()
    })
  }
  v(g)
  s(g, a, "Generator")
  g[i] = function () {
    return this
  }
  g.toString = function () {
    return "[object Generator]"
  }
  e.keys = function (e) {
    var t = []
    for (var n in e) t.push(n)
    t.reverse()
    return function n() {
      for (; t.length;) {
        var r = t.pop()
        if (r in e) {
          n.value = r
          n.done = false
          return n
        }
      }
      n.done = true
      return n
    }
  }
  e.values = x
  E.prototype = {
    constructor: E,
    reset: function (e) {
      this.prev = 0
      this.next = 0
      this.sent = this._sent = undefined
      this.done = false
      this.delegate = null
      this.method = "next"
      this.arg = undefined
      this.tryEntries.forEach(w)
      if (!e) {
        for (var t in this) if ("t" === t.charAt(0) && Object$prototype$hasOwnProperty.call(this, t) && !isNaN(+t.slice(1))) {
          this[t] = undefined
        }
      }
    },
    stop: function () {
      this.done = true
      var /* [auto-meaningful-name] */this$tryEntries0$completion = this.tryEntries[0].completion
      if ("throw" === this$tryEntries0$completion.type) {
        throw this$tryEntries0$completion.arg
      }
      return this.rval
    },
    dispatchException: function (e) {
      if (this.done) {
        throw e
      }
      var t = this
      function r(n, r) {
        o$completion.type = "throw"
        o$completion.arg = e
        t.next = n
        if (r) {
          t.method = "next"
          t.arg = undefined
        }
        return !!r
      }
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var o = this.tryEntries[i]
        var /* [auto-meaningful-name] */o$completion = o.completion
        if ("root" === o.tryLoc) {
          return r("end")
        }
        if (o.tryLoc <= this.prev) {
          var s = Object$prototype$hasOwnProperty.call(o, "catchLoc")
          var c = Object$prototype$hasOwnProperty.call(o, "finallyLoc")
          if (s && c) {
            if (this.prev < o.catchLoc) {
              return r(o.catchLoc, true)
            }
            if (this.prev < o.finallyLoc) {
              return r(o.finallyLoc)
            }
          } else if (s) {
            if (this.prev < o.catchLoc) {
              return r(o.catchLoc, true)
            }
          } else {
            if (!c) {
              throw new Error("try statement without catch or finally")
            }
            if (this.prev < o.finallyLoc) {
              return r(o.finallyLoc)
            }
          }
        }
      }
    },
    abrupt: function (e, t) {
      for (var r = this.tryEntries.length - 1; r >= 0; --r) {
        var i = this.tryEntries[r]
        if (i.tryLoc <= this.prev && Object$prototype$hasOwnProperty.call(i, "finallyLoc") && this.prev < i.finallyLoc) {
          var o = i
          break
        }
      }
      if (o && ("break" === e || "continue" === e) && o.tryLoc <= t && t <= o.finallyLoc) {
        o = null
      }
      var a = o ? o.completion : {}
      a.type = e
      a.arg = t
      return o ? (this.method = "next", this.next = o.finallyLoc, l) : this.complete(a)
    },
    complete: function (e, t) {
      if ("throw" === e.type) {
        throw e.arg
      }
      if ("break" === e.type || "continue" === e.type) {
        this.next = e.arg
      } else {
        if ("return" === e.type) {
          this.rval = this.arg = e.arg
          this.method = "return"
          this.next = "end"
        } else {
          if ("normal" === e.type && t) {
            this.next = t
          }
        }
      }
      return l
    },
    finish: function (e) {
      for (var t = this.tryEntries.length - 1; t >= 0; --t) {
        var n = this.tryEntries[t]
        if (n.finallyLoc === e) {
          this.complete(n.completion, n.afterLoc)
          w(n)
          return l
        }
      }
    },
    catch: function (e) {
      for (var t = this.tryEntries.length - 1; t >= 0; --t) {
        var n = this.tryEntries[t]
        if (n.tryLoc === e) {
          var /* [auto-meaningful-name] */n$completion = n.completion
          if ("throw" === n$completion.type) {
            var /* [auto-meaningful-name] */n$completion$arg = n$completion.arg
            w(n)
          }
          return n$completion$arg
        }
      }
      throw new Error("illegal catch attempt")
    },
    delegateYield: function (e, t, n) {
      this.delegate = {
        iterator: x(e),
        resultName: t,
        nextLoc: n
      }
      if ("next" === this.method) {
        this.arg = undefined
      }
      return l
    }
  }
  return e
}(module.exports)
try {
  regeneratorRuntime = r
} catch (i) {
  Function("r", "regeneratorRuntime = r")(r)
}
