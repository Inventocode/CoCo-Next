/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：176
 */

"use strict"

require(/* 167 */"../../268/167/index")
require(/* 287 */"./287")
var r = require(/* 13 */"../../288/13/index")
var i = require(/* 6 */"../../275/6")
var o = require(/* 174 */"../../275/276/174")
var a = require(/* 54 */"../../228/54")
var s = require(/* 20 */"../../288/20/index")
var u = require(/* 10 */"../../208/10")
var c = require(/* 16 */"../../275/16")
var l = require(/* 175 */"../../280/281/175")
var f = require(/* 34 */"../../228/34/index")
var p = require(/* 48 */"../../236/48")
var d = require(/* 149 */"../../215/112/149")
var h = require(/* 65 */"../../268/65/index")
var g = require(/* 169 */"./169")
var m = require(/* 35 */"../../233/35/index")
var v = require(/* 85 */"../../280/281/85")
var y = require(/* 14 */"../../228/14")
var _ = require(/* 24 */"../../233/24")
var b = require(/* 43 */"../../204/142/43")
var w = require(/* 47 */"../../263/47/index")
var S = require(/* 27 */"../../225/27")
var k = require(/* 26 */"../../237/26")
var O = require(/* 36 */"../../209/36")
var E = require(/* 55 */"../../233/55/index")
var T = require(/* 60 */"../../226/153/60")
var x = require(/* 87 */"../../226/227/87")
var j = require(/* 74 */"../../226/227/74")
var P = require(/* 123 */"../../268/167/123")
var C = require(/* 75 */"../../275/75")
var I = require(/* 18 */"../../233/18/index")
var N = require(/* 110 */"../../209/110")
var A = I("iterator")
var /* [auto-meaningful-name] */_URLSearchParams = "URLSearchParams"
var L = _URLSearchParams + "Iterator"
var /* [auto-meaningful-name] */m$set = m.set
var M = m.getterFor(_URLSearchParams)
var U = m.getterFor(L)
var B = o("fetch")
var H = o("Request")
var F = o("Headers")
var $ = H && H.prototype
var z = F && F.prototype
var /* [auto-meaningful-name] */i$TypeError = i.TypeError
var /* [auto-meaningful-name] */i$encodeURIComponent = i.encodeURIComponent
var /* [auto-meaningful-name] */String$fromCharCode = String.fromCharCode
var W = a("String", "fromCodePoint")
var K = parseInt
var J = u("".charAt)
var Y = u([].join)
var X = u([].push)
var Q = u("".replace)
var Z = u([].shift)
var ee = u([].splice)
var te = u("".split)
var ne = u("".slice)
var re = u(/./.exec)
var ie = /\+/g
var oe = /^[0-9a-f]+$/i
var ae = function (e, t) {
  var n = ne(e, t, t + 2)
  return re(oe, n) ? K(n, 16) : NaN
}
var se = function (e) {
  for (var t = 0, n = 128; n > 0 && 0 !== (e & n); n >>= 1) {
    t++
  }
  return t
}
var ue = function (e) {
  var t = null
  switch (e.length) {
    case 1:
      t = e[0]
      break
    case 2:
      t = (31 & e[0]) << 6 | 63 & e[1]
      break
    case 3:
      t = (15 & e[0]) << 12 | (63 & e[1]) << 6 | 63 & e[2]
      break
    case 4:
      t = (7 & e[0]) << 18 | (63 & e[1]) << 12 | (63 & e[2]) << 6 | 63 & e[3]
  }
  return t > 1114111 ? null : t
}
var ce = function (e) {
  for (var /* [auto-meaningful-name] */EQEIe$length = (e = Q(e, ie, " ")).length, n = "", r = 0; r < EQEIe$length;) {
    var i = J(e, r)
    if ("%" === i) {
      if ("%" === J(e, r + 1) || r + 3 > EQEIe$length) {
        n += "%"
        r++
        continue
      }
      var o = ae(e, r + 1)
      if (o !== o) {
        n += i
        r++
        continue
      }
      r += 2
      var a = se(o)
      if (0 === a) {
        i = String$fromCharCode(o)
      } else {
        if (1 === a || a > 4) {
          n += "�"
          r++
          continue
        }
        for (var s = [o], u = 1; u < a && !(++r + 3 > EQEIe$length || "%" !== J(e, r));) {
          var c = ae(e, r + 1)
          if (c !== c) {
            r += 3
            break
          }
          if (c > 191 || c < 128) {
            break
          }
          X(s, c)
          r += 2
          u++
        }
        if (s.length !== a) {
          n += "�"
          continue
        }
        var l = ue(s)
        if (null === l) {
          n += "�"
        } else {
          i = W(l)
        }
      }
    }
    n += i
    r++
  }
  return n
}
var le = /[!'()~]|%20/g
var fe = {
  "!": "%21",
  "'": "%27",
  "(": "%28",
  ")": "%29",
  "~": "%7E",
  "%20": "+"
}
var pe = function (e) {
  return fe[e]
}
var de = function (e) {
  return Q(i$encodeURIComponent(e), le, pe)
}
var he = g(function (e, t) {
  m$set(this, {
    type: L,
    target: M(e).entries,
    index: 0,
    kind: t
  })
}, _URLSearchParams, function () {
  var e = U(this)
  var /* [auto-meaningful-name] */e$target = e.target
  var n = e.index++
  if (!e$target || n >= e$target.length) {
    e.target = null
    return P(undefined, true)
  }
  var r = e$target[n]
  switch (e.kind) {
    case "keys":
      return P(r.key, false)
    case "values":
      return P(r.value, false)
  }
  return P([r.key, r.value], false)
}, true)
var ge = function (e) {
  this.entries = []
  this.url = null
  if (undefined !== e) {
    if (k(e)) {
      this.parseObject(e)
    } else {
      this.parseQuery("string" == typeof e ? "?" === J(e, 0) ? ne(e, 1) : e : O(e))
    }
  }
}
ge.prototype = {
  type: _URLSearchParams,
  bindURL: function (e) {
    this.url = e
    this.update()
  },
  parseObject: function (e) {
    var t
    var /* [auto-meaningful-name] */TXEL$next
    var r
    var i
    var /* [auto-meaningful-name] */IXSR$value$next
    var a
    var u
    var /* [auto-meaningful-name] */this$entries = this.entries
    var l = j(e)
    if (l) {
      for (TXEL$next = (t = x(e, l)).next; !(r = s(TXEL$next, t)).done;) {
        IXSR$value$next = (i = x(S(r.value))).next
        if ((a = s(IXSR$value$next, i)).done || (u = s(IXSR$value$next, i)).done || !s(IXSR$value$next, i).done) {
          throw new i$TypeError("Expected sequence with length 2")
        }
        X(this$entries, {
          key: O(a.value),
          value: O(u.value)
        })
      }
    } else {
      for (var f in e) if (_(e, f)) {
        X(this$entries, {
          key: f,
          value: O(e[f])
        })
      }
    }
  },
  parseQuery: function (e) {
    if (e) {
      for (var t, n, /* [auto-meaningful-name] */this$entries = this.entries, i = te(e, "&"), o = 0; o < i.length;) {
        if ((t = i[o++]).length) {
          n = te(t, "=")
          X(this$entries, {
            key: ce(Z(n)),
            value: ce(Y(n, "="))
          })
        }
      }
    }
  },
  serialize: function () {
    for (var e, /* [auto-meaningful-name] */this$entries = this.entries, n = [], r = 0; r < this$entries.length;) {
      e = this$entries[r++]
      X(n, de(e.key) + "=" + de(e.value))
    }
    return Y(n, "&")
  },
  update: function () {
    this.entries.length = 0
    this.parseQuery(this.url.query)
  },
  updateURL: function () {
    if (this.url) {
      this.url.update()
    }
  }
}
var me = function () {
  v(this, me$prototype)
  var e = m$set(this, new ge(arguments.length > 0 ? arguments[0] : undefined))
  if (!c) {
    this.size = e.entries.length
  }
}
var /* [auto-meaningful-name] */me$prototype = me.prototype
d(me$prototype, {
  append: function (e, t) {
    var n = M(this)
    C(arguments.length, 2)
    X(n.entries, {
      key: O(e),
      value: O(t)
    })
    if (!c) {
      this.length++
    }
    n.updateURL()
  },
  delete: function (e) {
    for (var t = M(this), n = C(arguments.length, 1), /* [auto-meaningful-name] */t$entries = t.entries, i = O(e), o = n < 2 ? undefined : arguments[1], a = undefined === o ? o : O(o), s = 0; s < t$entries.length;) {
      var u = t$entries[s]
      if (u.key !== i || undefined !== a && u.value !== a) {
        s++
      } else if (ee(t$entries, s, 1), undefined !== a) {
        break
      }
    }
    if (!c) {
      this.size = t$entries.length
    }
    t.updateURL()
  },
  get: function (e) {
    var /* [auto-meaningful-name] */MThis$entries = M(this).entries
    C(arguments.length, 1)
    for (var n = O(e), r = 0; r < MThis$entries.length; r++) {
      if (MThis$entries[r].key === n) {
        return MThis$entries[r].value
      }
    }
    return null
  },
  getAll: function (e) {
    var /* [auto-meaningful-name] */MThis$entries = M(this).entries
    C(arguments.length, 1)
    for (var n = O(e), r = [], i = 0; i < MThis$entries.length; i++) {
      if (MThis$entries[i].key === n) {
        X(r, MThis$entries[i].value)
      }
    }
    return r
  },
  has: function (e) {
    for (var /* [auto-meaningful-name] */MThis$entries = M(this).entries, n = C(arguments.length, 1), r = O(e), i = n < 2 ? undefined : arguments[1], o = undefined === i ? i : O(i), a = 0; a < MThis$entries.length;) {
      var s = MThis$entries[a++]
      if (s.key === r && (undefined === o || s.value === o)) {
        return true
      }
    }
    return false
  },
  set: function (e, t) {
    var n = M(this)
    C(arguments.length, 1)
    for (var r, /* [auto-meaningful-name] */n$entries = n.entries, o = false, a = O(e), s = O(t), u = 0; u < n$entries.length; u++) {
      if ((r = n$entries[u]).key === a) {
        if (o) {
          ee(n$entries, u--, 1)
        } else {
          o = true
          r.value = s
        }
      }
    }
    if (!o) {
      X(n$entries, {
        key: a,
        value: s
      })
    }
    if (!c) {
      this.size = n$entries.length
    }
    n.updateURL()
  },
  sort: function () {
    var e = M(this)
    N(e.entries, function (e, t) {
      return e.key > t.key ? 1 : -1
    })
    e.updateURL()
  },
  forEach: function (e) {
    for (var t, /* [auto-meaningful-name] */MThis$entries = M(this).entries, r = b(e, arguments.length > 1 ? arguments[1] : undefined), i = 0; i < MThis$entries.length;) {
      r((t = MThis$entries[i++]).value, t.key, this)
    }
  },
  keys: function () {
    return new he(this, "keys")
  },
  values: function () {
    return new he(this, "values")
  },
  entries: function () {
    return new he(this, "entries")
  }
}, {
  enumerable: true
})
f(me$prototype, A, me$prototype.entries, {
  name: "entries"
})
f(me$prototype, "toString", function () {
  return M(this).serialize()
}, {
  enumerable: true
})
if (c) {
  p(me$prototype, "size", {
    get: function () {
      return M(this).entries.length
    },
    configurable: true,
    enumerable: true
  })
}
h(me, _URLSearchParams)
r({
  global: true,
  constructor: true,
  forced: !l
}, {
  URLSearchParams: me
})
if (!l && y(F)) {
  var ye = u(z.has)
  var _e = u(z.set)
  var be = function (e) {
    if (k(e)) {
      var t
      var /* [auto-meaningful-name] */e$body = e.body
      if (w(e$body) === _URLSearchParams) {
        t = e.headers ? new F(e.headers) : new F()
        if (!ye(t, "content-type")) {
          _e(t, "content-type", "application/x-www-form-urlencoded;charset=UTF-8")
        }
        return E(e, {
          body: T(0, O(e$body)),
          headers: T(0, t)
        })
      }
    }
    return e
  }
  if (y(B)) {
    r({
      global: true,
      enumerable: true,
      dontCallGetSet: true,
      forced: true
    }, {
      fetch: function (e) {
        return B(e, arguments.length > 1 ? be(arguments[1]) : {})
      }
    })
  }
  if (y(H)) {
    var we = function (e) {
      v(this, $)
      return new H(e, arguments.length > 1 ? be(arguments[1]) : {})
    }
    $.constructor = we
    we.prototype = $
    r({
      global: true,
      constructor: true,
      dontCallGetSet: true,
      forced: true
    }, {
      Request: we
    })
  }
}
module.exports = {
  URLSearchParams: me,
  getState: M
}
