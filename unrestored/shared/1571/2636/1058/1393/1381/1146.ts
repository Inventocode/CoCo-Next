/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：1146
 */

"use strict"

Object.defineProperty(exports, "__esModule", {
  value: true
})
exports.uniSlice = exports.dlen = exports.eachOp = undefined
var r = require("./1145")
var i = function (e) {
  if (!Array.isArray(e)) {
    throw Error("Op must be an array of components")
  }
  for (var n = null, r = 0; r < e.length; r++) {
    var i = e[r]
    switch (typeof i) {
      case "object":
        if ("number" !== typeof i.d && "string" !== typeof i.d) {
          throw Error("Delete must be number or string")
        }
        if (exports.dlen(i.d) <= 0) {
          throw Error("Deletes must not be empty")
        }
        break
      case "string":
        if (!(i.length > 0)) {
          throw Error("Inserts cannot be empty")
        }
        break
      case "number":
        if (!(i > 0)) {
          throw Error("Skip components must be >0")
        }
        if ("number" === typeof n) {
          throw Error("Adjacent skip components should be combined")
        }
    }
    n = i
  }
  if ("number" === typeof n) {
    throw Error("Op has a trailing skip")
  }
}
function o(e, n) {
  for (var i = 0, o = 0, a = 0; a < e.length; a++) {
    var s = e[a]
    switch (n(s, i, o), typeof s) {
      case "object":
        i += exports.dlen(s.d)
        break
      case "string":
        o += r.strPosToUni(s)
        break
      case "number":
        i += s
        o += s
    }
  }
}
function a(e, t) {
  var n = []
  var r = u(n)
  o(e, function (e, n, i) {
    r(t(e, n, i))
  })
  return h(n)
}
exports.eachOp = o
var s = function (e) {
  return e
}
var c = function (e) {
  return a(e, s)
}
exports.dlen = function (e) {
  return "number" === typeof e ? e : r.strPosToUni(e)
}
var u = function (e) {
  return function (n) {
    if (n && 0 !== n.d && "" !== n.d) {
      if (0 === e.length) {
        e.push(n)
      } else if (typeof n === typeof e[e.length - 1]) {
        if ("object" === typeof n) {
          var r = e[e.length - 1]
          r.d = "string" === typeof r.d && "string" === typeof n.d ? r.d + n.d : exports.dlen(r.d) + exports.dlen(n.d)
        } else {
          e[e.length - 1] += n
        }
      } else {
        e.push(n)
      }
    } else {
      ;
    }
  }
}
var l = function (e) {
  return "number" === typeof e ? e : "string" === typeof e ? r.strPosToUni(e) : "number" === typeof e.d ? e.d : r.strPosToUni(e.d)
}
exports.uniSlice = function (e, t, n) {
  var i = r.uniToStrPos(e, t)
  var o = null == n ? 1 / 0 : r.uniToStrPos(e, n)
  return e.slice(i, o)
}
var f = function (e, n, r) {
  return "number" === typeof e ? null == r ? e - n : Math.min(e, r) - n : exports.uniSlice(e, n, r)
}
var d = function (e) {
  var n = 0
  var i = 0
  return {
    take: function (o, a) {
      if (n === e.length) {
        return -1 === o ? null : o
      }
      var s
      var c = e[n]
      if ("number" === typeof c) {
        return -1 === o || c - i <= o ? (s = c - i, ++n, i = 0, s) : (i += o, o)
      }
      if ("string" === typeof c) {
        if (-1 === o || "i" === a || r.strPosToUni(c.slice(i)) <= o) {
          s = c.slice(i)
          ++n
          i = 0
          return s
        }
        var u = i + r.uniToStrPos(c.slice(i), o)
        s = c.slice(i, u)
        i = u
        return s
      }
      if (-1 === o || "d" === a || exports.dlen(c.d) - i <= o) {
        s = {
          d: f(c.d, i)
        }
        ++n
        i = 0
        return s
      }
      var l = f(c.d, i, i + o)
      i += o
      return {
        d: l
      }
    },
    peek: function () {
      return e[n]
    }
  }
}
var h = function (e) {
  if (e.length > 0 && "number" === typeof e[e.length - 1]) {
    e.pop()
  }
  return e
}
function p(e, n, o) {
  if ("left" !== o && "right" !== o) {
    throw Error("side (" + o + ") must be 'left' or 'right'")
  }
  i(e)
  i(n)
  for (var a, s = [], c = u(s), f = d(e), /* [auto-meaningful-name] */f$take = f.take, /* [auto-meaningful-name] */f$peek = f.peek, A = 0; A < n.length; A++) {
    var g = n[A]
    var v = undefined
    var m = undefined
    switch (typeof g) {
      case "number":
        for (v = g; v > 0;) {
          c(m = f$take(v, "i"))
          if ("string" !== typeof m) {
            v -= l(m)
          }
        }
        break
      case "string":
        if ("left" === o && "string" === typeof f$peek()) {
          c(f$take(-1))
        }
        c(r.strPosToUni(g))
        break
      case "object":
        for (v = exports.dlen(g.d); v > 0;) {
          switch (typeof (m = f$take(v, "i"))) {
            case "number":
              v -= m
              break
            case "string":
              c(m)
              break
            case "object":
              v -= exports.dlen(m.d)
          }
        }
    }
  }
  for (; a = f$take(-1);) {
    c(a)
  }
  return h(s)
}
function _(e, n) {
  i(e)
  i(n)
  for (var o, a = [], s = u(a), /* [auto-meaningful-name] */dE$take = d(e).take, p = 0; p < n.length; p++) {
    var _ = n[p]
    var A = undefined
    var g = undefined
    switch (typeof _) {
      case "number":
        for (A = _; A > 0;) {
          s(g = dE$take(A, "d"))
          if ("object" !== typeof g) {
            A -= l(g)
          }
        }
        break
      case "string":
        s(_)
        break
      case "object":
        A = exports.dlen(_.d)
        for (var v = 0; v < A;) {
          switch (typeof (g = dE$take(A - v, "d"))) {
            case "number":
              s({
                d: f(_.d, v, v + g)
              })
              v += g
              break
            case "string":
              v += r.strPosToUni(g)
              break
            case "object":
              s(g)
          }
        }
    }
  }
  for (; o = dE$take(-1);) {
    s(o)
  }
  return h(a)
}
var A = function (e, n) {
  for (var i = 0, o = 0; o < n.length && e > i; o++) {
    var a = n[o]
    switch (typeof a) {
      case "number":
        i += a
        break
      case "string":
        var s = r.strPosToUni(a)
        i += s
        e += s
        break
      case "object":
        e -= Math.min(exports.dlen(a.d), e - i)
    }
  }
  return e
}
var g = function (e, t) {
  return "number" === typeof e ? A(e, t) : e.map(function (e) {
    return A(e, t)
  })
}
function v(e, t, n) {
  return a(e, function (e, r) {
    return "object" === typeof e && "number" === typeof e.d ? {
      d: n.slice(t, r, r + e.d)
    } : e
  })
}
function m(e) {
  return a(e, function (e) {
    switch (typeof e) {
      case "object":
        if ("number" === typeof e.d) {
          throw Error("Cannot invert text op: Deleted characters missing from operation. makeInvertible must be called first.")
        }
        return e.d
      case "string":
        return {
          d: e
        }
      case "number":
        return e
    }
  })
}
function y(e) {
  return a(e, function (e) {
    return "object" === typeof e && "string" === typeof e.d ? {
      d: r.strPosToUni(e.d)
    } : e
  })
}
function b(e) {
  var t = true
  o(e, function (e) {
    if ("object" === typeof e && "number" === typeof e.d) {
      t = false
    }
  })
  return t
}
exports.default = function (e) {
  return {
    name: "text-unicode",
    uri: "http://sharejs.org/types/text-unicode",
    trim: h,
    normalize: c,
    checkOp: i,
    create: function () {
      var t = arguments.length > 0 && undefined !== arguments[0] ? arguments[0] : ""
      if ("string" !== typeof t) {
        throw Error("Initial data must be a string")
      }
      return e.create(t)
    },
    apply: function (n, r) {
      i(r)
      for (var o = e.builder(n), a = 0; a < r.length; a++) {
        var s = r[a]
        switch (typeof s) {
          case "number":
            o.skip(s)
            break
          case "string":
            o.append(s)
            break
          case "object":
            o.del(exports.dlen(s.d))
        }
      }
      return o.build()
    },
    transform: p,
    compose: _,
    transformPosition: A,
    transformSelection: g,
    isInvertible: b,
    makeInvertible: function (t, n) {
      return v(t, n, e)
    },
    stripInvertible: y,
    invert: m,
    invertWithDoc: function (t, n) {
      return m(v(t, n, e))
    },
    isNoop: function (e) {
      return 0 === e.length
    }
  }
}
