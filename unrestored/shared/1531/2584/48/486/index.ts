/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：486
 */

"use strict"

var r = require("./229")
var i = require("../../19")
var o = require("../../337")
var a = require("./179")
var s = require("./92")
var c = require("redux")
function u() {
  var e = {}
  e.promise = new Promise(function (t, n) {
    e.resolve = t
    e.reject = n
  })
  return e
}
var l = u
require("./982")
var f = []
var d = 0
function h(e) {
  try {
    A()
    e()
  } finally {
    g()
  }
}
function p(e) {
  f.push(e)
  if (!d) {
    A()
    v()
  }
}
function _(e) {
  try {
    A()
    return e()
  } finally {
    v()
  }
}
function A() {
  d++
}
function g() {
  d--
}
function v() {
  var e
  for (g(); !d && undefined !== (e = f.shift());) {
    h(e)
  }
}
var m = function (e) {
  return function (t) {
    return e.some(function (e) {
      return x(e)(t)
    })
  }
}
var y = function (e) {
  return function (t) {
    return e(t)
  }
}
var b = function (e) {
  return function (t) {
    return t.type === String(e)
  }
}
var w = function (e) {
  return function (t) {
    return t.type === e
  }
}
var E = function () {
  return s.H
}
function x(e) {
  var t = "*" === e ? E : a.k(e) ? b : a.a(e) ? m : a.l(e) ? b : a.d(e) ? y : a.m(e) ? w : null
  if (null === t) {
    throw new Error("invalid pattern: " + e)
  }
  return t(e)
}
var C = {
  type: r.b
}
var O = function (e) {
  return e && e.type === r.b
}
function k(e) {
  if (undefined === e) {
    e = s.B()
  }
  var t = false
  var n = []
  return {
    take: function (r) {
      if (t && e.isEmpty()) {
        r(C)
      } else {
        if (e.isEmpty()) {
          n.push(r)
          r.cancel = function () {
            s.O(n, r)
          }
        } else {
          r(e.take())
        }
      }
    },
    put: function (r) {
      if (!t) {
        if (0 === n.length) {
          return e.put(r)
        }
        n.shift()(r)
      }
    },
    flush: function (n) {
      if (t && e.isEmpty()) {
        n(C)
      } else {
        n(e.flush())
      }
    },
    close: function () {
      if (!t) {
        t = true
        var e = n
        n = []
        for (var r = 0, /* [auto-meaningful-name] */e$length = e.length; r < e$length; r++) {
          (0, e[r])(C)
        }
      }
    }
  }
}
function S() {
  var e = function () {
    var e
    var t = false
    var n = []
    var i = n
    var o = function () {
      if (i === n) {
        i = n.slice()
      }
    }
    var a = function () {
      t = true
      var e = n = i
      i = []
      e.forEach(function (e) {
        e(C)
      })
    };
    (e = {})[r.e] = true
    e.put = function (e) {
      if (!t) {
        if (O(e)) {
          a()
        } else {
          for (var o = n = i, s = 0, /* [auto-meaningful-name] */o$length = o.length; s < o$length; s++) {
            var u = o[s]
            if (u[r.d](e)) {
              u.cancel()
              u(e)
            }
          }
        }
      }
    }
    e.take = function (e, n) {
      if (undefined === n) {
        n = E
      }
      if (t) {
        e(C)
      } else {
        e[r.d] = n
        o()
        i.push(e)
        e.cancel = s.L(function () {
          o()
          s.O(i, e)
        })
      }
    }
    e.close = a
    return e
  }()
  var /* [auto-meaningful-name] */e$put = e.put
  e.put = function (e) {
    if (e[r.f]) {
      e$put(e)
    } else {
      p(function () {
        e$put(e)
      })
    }
  }
  return e
}
function T(e, t) {
  var n = e[r.a]
  if (a.d(n)) {
    t.cancel = n
  }
  e.then(t, function (e) {
    t(e, true)
  })
}
var B
var D = 0
var I = function () {
  return ++D
}
function F(e) {
  if (e.isRunning()) {
    e.cancel()
  }
}
(B = {})[s.r] = function (e, t, n) {
  var /* [auto-meaningful-name] */t$channel = t.channel
  var o = undefined === t$channel ? e.channel : t$channel
  var /* [auto-meaningful-name] */t$pattern = t.pattern
  var /* [auto-meaningful-name] */t$maybe = t.maybe
  var u = function (e) {
    if (e instanceof Error) {
      n(e, true)
    } else {
      if (!O(e) || t$maybe) {
        n(e)
      } else {
        n(r.k)
      }
    }
  }
  try {
    o.take(u, a.g(t$pattern) ? x(t$pattern) : null)
  } catch (l) {
    return void n(l, true)
  }
  n.cancel = u.cancel
}
B[s.n] = function (e, t, n) {
  var /* [auto-meaningful-name] */t$channel = t.channel
  var /* [auto-meaningful-name] */t$action = t.action
  var /* [auto-meaningful-name] */t$resolve = t.resolve
  p(function () {
    var t
    try {
      t = (t$channel ? t$channel.put : e.dispatch)(t$action)
    } catch (s) {
      return void n(s, true)
    }
    if (t$resolve && a.j(t)) {
      T(t, n)
    } else {
      n(t)
    }
  })
}
B[s.a] = function (e, t, n, r) {
  var /* [auto-meaningful-name] */r$digestEffect = r.digestEffect
  var o = D
  var c = Object.keys(t)
  if (0 !== c.length) {
    var u = s.I(t, n)
    c.forEach(function (e) {
      r$digestEffect(t[e], o, u[e], e)
    })
  } else {
    n(a.a(t) ? [] : {})
  }
}
B[s.p] = function (e, t, n, r) {
  var /* [auto-meaningful-name] */r$digestEffect = r.digestEffect
  var o = D
  var c = Object.keys(t)
  var u = a.a(t) ? s.J(c.length) : {}
  var l = {}
  var f = false
  c.forEach(function (e) {
    var t = function (t, r) {
      if (!f) {
        if (r || s.P(t)) {
          n.cancel()
          n(t, r)
        } else {
          n.cancel()
          f = true
          u[e] = t
          n(u)
        }
      }
    }
    t.cancel = s.Q
    l[e] = t
  })
  n.cancel = function () {
    if (!f) {
      f = true
      c.forEach(function (e) {
        return l[e].cancel()
      })
    }
  }
  c.forEach(function (e) {
    if (!f) {
      r$digestEffect(t[e], o, l[e], e)
    }
  })
}
B[s.c] = function (e, t, n, r) {
  var /* [auto-meaningful-name] */t$context = t.context
  var o = t.fn
  var /* [auto-meaningful-name] */t$args = t.args
  var /* [auto-meaningful-name] */r$task = r.task
  try {
    var l = o.apply(t$context, t$args)
    if (a.j(l)) {
      return void T(l, n)
    }
    if (a.e(l)) {
      return void G(e, l, r$task.context, D, s.G(o), false, n)
    }
    n(l)
  } catch (f) {
    n(f, true)
  }
}
B[s.w] = function (e, t, n) {
  var /* [auto-meaningful-name] */t$context = t.context
  var i = t.fn
  var /* [auto-meaningful-name] */t$args = t.args
  try {
    var s = function (e, t) {
      if (a.n(e)) {
        n(t)
      } else {
        n(e, true)
      }
    }
    i.apply(t$context, t$args.concat(s))
    if (s.cancel) {
      n.cancel = s.cancel
    }
  } catch (c) {
    n(c, true)
  }
}
B[s.f] = function (e, t, n, r) {
  var /* [auto-meaningful-name] */t$context = t.context
  var o = t.fn
  var /* [auto-meaningful-name] */t$args = t.args
  var /* [auto-meaningful-name] */t$detached = t.detached
  var /* [auto-meaningful-name] */r$task = r.task
  var f = function (e) {
    var /* [auto-meaningful-name] */e$context = e.context
    var n = e.fn
    var /* [auto-meaningful-name] */e$args = e.args
    try {
      var i = n.apply(e$context, e$args)
      if (a.e(i)) {
        return i
      }
      var o = false
      return s.N(function (e) {
        return o ? {
          value: e,
          done: true
        } : (o = true, {
          value: i,
          done: !a.j(i)
        })
      })
    } catch (c) {
      return s.N(function () {
        throw c
      })
    }
  }({
    context: t$context,
    fn: o,
    args: t$args
  })
  var d = function (e, t) {
    return e.isSagaIterator ? {
      name: e.meta.name
    } : s.G(t)
  }(f, o)
  _(function () {
    var t = G(e, f, r$task.context, D, d, t$detached, undefined)
    if (t$detached) {
      n(t)
    } else {
      if (t.isRunning()) {
        r$task.queue.addTask(t)
        n(t)
      } else {
        if (t.isAborted()) {
          r$task.queue.abort(t.error())
        } else {
          n(t)
        }
      }
    }
  })
}
B[s.h] = function (e, t, n, r) {
  var /* [auto-meaningful-name] */r$task = r.task
  var o = function (e, t) {
    if (e.isRunning()) {
      var n = {
        task: r$task,
        cb: t
      }
      t.cancel = function () {
        if (e.isRunning()) {
          s.O(e.joiners, n)
        }
      }
      e.joiners.push(n)
    } else if (e.isAborted()) {
      t(e.error(), true)
    } else {
      t(e.result())
    }
  }
  if (a.a(t)) {
    if (0 === t.length) {
      return void n([])
    }
    var c = s.I(t, n)
    t.forEach(function (e, t) {
      o(e, c[t])
    })
  } else {
    o(t, n)
  }
}
B[s.y] = function (e, t, n, i) {
  var /* [auto-meaningful-name] */i$task = i.task
  if (t === r.h) {
    F(i$task)
  } else {
    if (a.a(t)) {
      t.forEach(F)
    } else {
      F(t)
    }
  }
  n()
}
B[s.q] = function (e, t, n) {
  var /* [auto-meaningful-name] */t$selector = t.selector
  var /* [auto-meaningful-name] */t$args = t.args
  try {
    n(t$selector.apply(undefined, [e.getState()].concat(t$args)))
  } catch (o) {
    n(o, true)
  }
}
B[s.A] = function (e, t, n) {
  var /* [auto-meaningful-name] */t$pattern = t.pattern
  var i = k(t.buffer)
  var o = x(t$pattern)
  var a = function t(n) {
    if (!O(n)) {
      e.channel.take(t, o)
    }
    i.put(n)
  }
  var /* [auto-meaningful-name] */i$close = i.close
  i.close = function () {
    a.cancel()
    i$close()
  }
  e.channel.take(a, o)
  n(i)
}
B[s.C] = function (e, t, n, r) {
  n(r.task.isCancelled())
}
B[s.D] = function (e, t, n) {
  t.flush(n)
}
B[s.g] = function (e, t, n, r) {
  n(r.task.context[t])
}
B[s.E] = function (e, t, n, r) {
  var /* [auto-meaningful-name] */r$task = r.task
  s.M(r$task.context, t)
  n()
}
var R = B
function P(e, t) {
  return e + "?" + t
}
function N(e) {
  var /* [auto-meaningful-name] */e$name = e.name
  var /* [auto-meaningful-name] */e$location = e.location
  return e$location ? e$name + "  " + P(e$location.fileName, e$location.lineNumber) : e$name
}
function M(e) {
  var t = s.R(function (e) {
    return e.cancelledTasks
  }, e)
  return t.length ? ["Tasks cancelled due to error:"].concat(t).join("\n") : ""
}
var j = null
var L = []
var U = function () {
  j = null
  L.length = 0
}
var H = function () {
  var e = L[0]
  var t = L.slice(1)
  var n = e.crashedEffect ? function (e) {
    var t = s.S(e)
    return t ? t.code + "  " + P(t.fileName, t.lineNumber) : ""
  }(e.crashedEffect) : null
  return ["The above error occurred in task " + N(e.meta) + (n ? " \n when executing effect " + n : "")].concat(t.map(function (e) {
    return "    created by " + N(e.meta)
  }), [M(L)]).join("\n")
}
function V(e, t, n, i, o, a, c) {
  var u
  if (undefined === c) {
    c = s.Q
  }
  var f
  var d
  var h = 0
  var p = null
  var _ = []
  var A = Object.create(n)
  var g = function (e, t, n) {
    var r
    var i = []
    var o = false
    function a(e) {
      t()
      u()
      n(e, true)
    }
    function c(t) {
      i.push(t)
      t.cont = function (c, u) {
        if (!o) {
          s.O(i, t)
          t.cont = s.Q
          if (u) {
            a(c)
          } else {
            if (t === e) {
              r = c
            }
            if (!i.length) {
              o = true
              n(r)
            }
          }
        }
      }
    }
    function u() {
      if (!o) {
        o = true
        i.forEach(function (e) {
          e.cont = s.Q
          e.cancel()
        })
        i = []
      }
    }
    c(e)
    return {
      addTask: c,
      cancelAll: u,
      abort: a,
      getTasks: function () {
        return i
      }
    }
  }(t, function () {
    _.push.apply(_, g.getTasks().map(function (e) {
      return e.meta.name
    }))
  }, v)
  function v(t, n) {
    if (n) {
      h = 2;
      (a = {
        meta: o,
        cancelledTasks: _
      }).crashedEffect = j
      L.push(a)
      if (m.isRoot) {
        var i = H()
        U()
        e.onError(t, {
          sagaStack: i
        })
      }
      d = t
      if (p) {
        p.reject(t)
      }
    } else {
      if (t === r.j) {
        h = 1
      } else {
        if (1 !== h) {
          h = 3
        }
      }
      f = t
      if (p) {
        p.resolve(t)
      }
    }
    var a
    m.cont(t, n)
    m.joiners.forEach(function (e) {
      e.cb(t, n)
    })
    m.joiners = null
  }
  (u = {})[r.i] = true
  u.id = i
  u.meta = o
  u.isRoot = a
  u.context = A
  u.joiners = []
  u.queue = g
  u.cancel = function () {
    if (0 === h) {
      h = 1
      g.cancelAll()
      v(r.j, false)
    }
  }
  u.cont = c
  u.end = v
  u.setContext = function (e) {
    s.M(A, e)
  }
  u.toPromise = function () {
    if (!p) {
      p = l()
      if (2 === h) {
        p.reject(d)
      } else {
        if (0 !== h) {
          p.resolve(f)
        }
      }
    }
    return p.promise
  }
  u.isRunning = function () {
    return 0 === h
  }
  u.isCancelled = function () {
    return 1 === h || 0 === h && 1 === t.status
  }
  u.isAborted = function () {
    return 2 === h
  }
  u.result = function () {
    return f
  }
  u.error = function () {
    return d
  }
  var m = u
  return m
}
function G(e, t, n, i, o, c, u) {
  var l = e.finalizeRunEffect(function (t, n, i) {
    if (a.j(t)) {
      T(t, i)
    } else if (a.e(t)) {
      G(e, t, d.context, n, o, false, i)
    } else if (t && t[r.c]) {
      (0, R[t.type])(e, t.payload, i, h)
    } else {
      i(t)
    }
  })
  p.cancel = s.Q
  var f = {
    meta: o,
    cancel: function () {
      if (0 === f.status) {
        f.status = 1
        p(r.j)
      }
    },
    status: 0
  }
  var d = V(e, f, n, i, o, c, u)
  var h = {
    task: d,
    digestEffect: _
  }
  if (u) {
    u.cancel = d.cancel
  }
  p()
  return d
  function p(e, n) {
    try {
      var o
      if (n) {
        o = t.throw(e)
        U()
      } else {
        if (s.T(e)) {
          f.status = 1
          p.cancel()
          o = a.d(t.return) ? t.return(r.j) : {
            done: true,
            value: r.j
          }
        } else {
          o = s.U(e) ? a.d(t.return) ? t.return() : {
            done: true
          } : t.next(e)
        }
      }
      if (o.done) {
        if (1 !== f.status) {
          f.status = 3
        }
        f.cont(o.value)
      } else {
        _(o.value, i, p)
      }
    } catch (c) {
      if (1 === f.status) {
        throw c
      }
      f.status = 2
      f.cont(c, true)
    }
  }
  function _(t, n, r, i) {
    if (undefined === i) {
      i = ""
    }
    var o
    var a = I()
    function c(n, i) {
      if (!o) {
        o = true
        r.cancel = s.Q
        if (e.sagaMonitor) {
          if (i) {
            e.sagaMonitor.effectRejected(a, n)
          } else {
            e.sagaMonitor.effectResolved(a, n)
          }
        }
        if (i) {
          (function (e) {
            j = e
          })(t)
        }
        r(n, i)
      }
    }
    if (e.sagaMonitor) {
      e.sagaMonitor.effectTriggered({
        effectId: a,
        parentEffectId: n,
        label: i,
        effect: t
      })
    }
    c.cancel = s.Q
    r.cancel = function () {
      if (!o) {
        o = true
        c.cancel()
        c.cancel = s.Q
        if (e.sagaMonitor) {
          e.sagaMonitor.effectCancelled(a)
        }
      }
    }
    l(t, a, c)
  }
}
function z(e, t) {
  var /* [auto-meaningful-name] */e$channel = e.channel
  var r = undefined === e$channel ? S() : e$channel
  var /* [auto-meaningful-name] */e$dispatch = e.dispatch
  var /* [auto-meaningful-name] */e$getState = e.getState
  var /* [auto-meaningful-name] */e$context = e.context
  var u = undefined === e$context ? {} : e$context
  var /* [auto-meaningful-name] */e$sagaMonitor = e.sagaMonitor
  var /* [auto-meaningful-name] */e$effectMiddlewares = e.effectMiddlewares
  var /* [auto-meaningful-name] */e$onError = e.onError
  var h = undefined === e$onError ? s.b : e$onError
  for (var /* [auto-meaningful-name] */arguments$length = arguments.length, A = new Array(arguments$length > 2 ? arguments$length - 2 : 0), g = 2; g < arguments$length; g++) {
    A[g - 2] = arguments[g]
  }
  var v = t.apply(undefined, A)
  var m
  var y = I()
  if (e$sagaMonitor) {
    e$sagaMonitor.rootSagaStarted = e$sagaMonitor.rootSagaStarted || s.Q
    e$sagaMonitor.effectTriggered = e$sagaMonitor.effectTriggered || s.Q
    e$sagaMonitor.effectResolved = e$sagaMonitor.effectResolved || s.Q
    e$sagaMonitor.effectRejected = e$sagaMonitor.effectRejected || s.Q
    e$sagaMonitor.effectCancelled = e$sagaMonitor.effectCancelled || s.Q
    e$sagaMonitor.actionDispatched = e$sagaMonitor.actionDispatched || s.Q
    e$sagaMonitor.rootSagaStarted({
      effectId: y,
      saga: t,
      args: A
    })
  }
  if (e$effectMiddlewares) {
    var b = c.compose.apply(undefined, e$effectMiddlewares)
    m = function (e) {
      return function (t, n, r) {
        return b(function (t) {
          return e(t, n, r)
        })(t)
      }
    }
  } else {
    m = s.e
  }
  var w = {
    channel: r,
    dispatch: s.d(e$dispatch),
    getState: e$getState,
    sagaMonitor: e$sagaMonitor,
    onError: h,
    finalizeRunEffect: m
  }
  return _(function () {
    var e = G(w, v, u, y, s.G(t), true, undefined)
    if (e$sagaMonitor) {
      e$sagaMonitor.effectResolved(y, e)
    }
    return e
  })
}
var Q = function (e) {
  var t
  var n = undefined === e ? {} : e
  var /* [auto-meaningful-name] */n$context = n.context
  var a = undefined === n$context ? {} : n$context
  var /* [auto-meaningful-name] */n$channel = n.channel
  var u = undefined === n$channel ? S() : n$channel
  var /* [auto-meaningful-name] */n$sagaMonitor = n.sagaMonitor
  var f = o.a(n, ["context", "channel", "sagaMonitor"])
  function d(e) {
    var /* [auto-meaningful-name] */e$getState = e.getState
    var /* [auto-meaningful-name] */e$dispatch = e.dispatch
    t = z.bind(null, i.a({}, f, {
      context: a,
      channel: u,
      dispatch: e$dispatch,
      getState: e$getState,
      sagaMonitor: n$sagaMonitor
    }))
    return function (e) {
      return function (t) {
        if (n$sagaMonitor && n$sagaMonitor.actionDispatched) {
          n$sagaMonitor.actionDispatched(t)
        }
        var n = e(t)
        u.put(t)
        return n
      }
    }
  }
  d.run = function () {
    return t.apply(undefined, arguments)
  }
  d.setContext = function (e) {
    s.M(a, e)
  }
  return d
}
exports.a = Q
