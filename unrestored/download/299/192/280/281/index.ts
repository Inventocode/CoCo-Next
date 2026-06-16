/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：281
 */

"use strict"

require(/* 282 */"./282")
var r
var i = require(/* 13 */"../../288/13/index")
var o = require(/* 16 */"../../275/16")
var a = require(/* 175 */"./175")
var s = require(/* 6 */"../../275/6")
var u = require(/* 43 */"../../204/142/43")
var c = require(/* 10 */"../../208/10")
var l = require(/* 34 */"../../228/34/index")
var f = require(/* 48 */"../../236/48")
var p = require(/* 85 */"./85")
var d = require(/* 24 */"../../233/24")
var h = require(/* 283 */"./283")
var g = require(/* 284 */"./284/index")
var m = require(/* 71 */"./71")
var /* [auto-meaningful-name] */require_119_$_119$codeAt = require(/* 119 */"./119").codeAt
var y = require(/* 286 */"./286")
var _ = require(/* 36 */"../../209/36")
var b = require(/* 65 */"../../268/65/index")
var w = require(/* 75 */"../../275/75")
var S = require(/* 176 */"../../289/176/index")
var k = require(/* 35 */"../../233/35/index")
var /* [auto-meaningful-name] */k$set = k.set
var E = k.getterFor("URL")
var /* [auto-meaningful-name] */S$URLSearchParams = S.URLSearchParams
var /* [auto-meaningful-name] */S$getState = S.getState
var /* [auto-meaningful-name] */s$URL = s.URL
var /* [auto-meaningful-name] */s$TypeError = s.TypeError
var /* [auto-meaningful-name] */s$parseInt = s.parseInt
var /* [auto-meaningful-name] */Math$floor = Math.floor
var /* [auto-meaningful-name] */Math$pow = Math.pow
var A = c("".charAt)
var R = c(/./.exec)
var L = c([].join)
var D = c(1.1.toString)
var M = c([].pop)
var U = c([].push)
var B = c("".replace)
var H = c([].shift)
var F = c("".split)
var $ = c("".slice)
var z = c("".toLowerCase)
var q = c([].unshift)
var /* [auto-meaningful-name] */InvalidScheme = "Invalid scheme"
var /* [auto-meaningful-name] */InvalidHost = "Invalid host"
var /* [auto-meaningful-name] */InvalidPort = "Invalid port"
var K = /[a-z]/i
var J = /[\d+-.a-z]/i
var Y = /\d/
var X = /^0x/i
var Q = /^[0-7]+$/
var Z = /^\d+$/
var ee = /^[\da-f]+$/i
var te = /[\0\t\n\r #%/:<>?@[\\\]^|]/
var ne = /[\0\t\n\r #/:<>?@[\\\]^|]/
var re = /^[\u0000-\u0020]+/
var ie = /(^|[^\u0000-\u0020])[\u0000-\u0020]+$/
var oe = /[\t\n\r]/g
var ae = function (e) {
  var t
  var n
  var r
  var i
  if ("number" == typeof e) {
    for (t = [], n = 0; n < 4; n++) {
      q(t, e % 256)
      e = Math$floor(e / 256)
    }
    return L(t, ".")
  }
  if ("object" == typeof e) {
    for (t = "", r = function (e) {
      for (var t = null, n = 1, r = null, i = 0, o = 0; o < 8; o++) {
        if (0 !== e[o]) {
          if (i > n) {
            t = r
            n = i
          }
          r = null
          i = 0
        } else {
          if (null === r) {
            r = o
          }
          ++i
        }
      }
      return i > n ? r : t
    }(e), n = 0; n < 8; n++) {
      if (!(i && 0 === e[n])) {
        if (i) {
          i = false
        }
        if (r === n) {
          t += n ? ":" : "::"
          i = true
        } else {
          t += D(e[n], 16)
          if (n < 7) {
            t += ":"
          }
        }
      }
    }
    return "[" + t + "]"
  }
  return e
}
var se = {}
var ue = h({}, se, {
  " ": 1,
  "\"": 1,
  "<": 1,
  ">": 1,
  "`": 1
})
var ce = h({}, ue, {
  "#": 1,
  "?": 1,
  "{": 1,
  "}": 1
})
var le = h({}, ce, {
  "/": 1,
  ":": 1,
  ";": 1,
  "=": 1,
  "@": 1,
  "[": 1,
  "\\": 1,
  "]": 1,
  "^": 1,
  "|": 1
})
var fe = function (e, t) {
  var n = require_119_$_119$codeAt(e, 0)
  return n > 32 && n < 127 && !d(t, e) ? e : encodeURIComponent(e)
}
var pe = {
  ftp: 21,
  file: null,
  http: 80,
  https: 443,
  ws: 80,
  wss: 443
}
var de = function (e, t) {
  var n
  return 2 === e.length && R(K, A(e, 0)) && (":" === (n = A(e, 1)) || !t && "|" === n)
}
var he = function (e) {
  var t
  return e.length > 1 && de($(e, 0, 2)) && (2 === e.length || "/" === (t = A(e, 2)) || "\\" === t || "?" === t || "#" === t)
}
var ge = function (e) {
  return "." === e || "%2e" === z(e)
}
var me = {}
var ve = {}
var ye = {}
var _e = {}
var be = {}
var we = {}
var Se = {}
var ke = {}
var Oe = {}
var Ee = {}
var Te = {}
var xe = {}
var je = {}
var Pe = {}
var Ce = {}
var Ie = {}
var Ne = {}
var Ae = {}
var Re = {}
var Le = {}
var De = {}
var Me = function (e, t, n) {
  var r
  var i
  var o
  var a = _(e)
  if (t) {
    if (i = this.parse(a)) {
      throw new s$TypeError(i)
    }
    this.searchParams = null
  } else {
    if (undefined !== n) {
      r = new Me(n, true)
    }
    if (i = this.parse(a, null, r)) {
      throw new s$TypeError(i)
    }
    (o = S$getState(new S$URLSearchParams())).bindURL(this)
    this.searchParams = o
  }
}
Me.prototype = {
  type: "URL",
  parse: function (e, t, n) {
    var i
    var o
    var a
    var s
    var u
    var c = this
    var l = t || me
    var f = 0
    var p = ""
    var h = false
    var v = false
    var y = false
    for (e = _(e), t || (c.scheme = "", c.username = "", c.password = "", c.host = null, c.port = null, c.path = [], c.query = null, c.fragment = null, c.cannotBeABaseURL = false, e = B(e, re, ""), e = B(e, ie, "$1")), e = B(e, oe, ""), i = g(e); f <= i.length;) {
      switch (o = i[f], l) {
        case me:
          if (!o || !R(K, o)) {
            if (t) {
              return InvalidScheme
            }
            l = ye
            continue
          }
          p += z(o)
          l = ve
          break
        case ve:
          if (o && (R(J, o) || "+" === o || "-" === o || "." === o)) {
            p += z(o)
          } else {
            if (":" !== o) {
              if (t) {
                return InvalidScheme
              }
              p = ""
              l = ye
              f = 0
              continue
            }
            if (t && (c.isSpecial() !== d(pe, p) || "file" === p && (c.includesCredentials() || null !== c.port) || "file" === c.scheme && !c.host)) {
              return
            }
            c.scheme = p
            if (t) {
              return void (c.isSpecial() && pe[c.scheme] === c.port && (c.port = null))
            }
            p = ""
            if ("file" === c.scheme) {
              l = Pe
            } else {
              if (c.isSpecial() && n && n.scheme === c.scheme) {
                l = _e
              } else {
                if (c.isSpecial()) {
                  l = ke
                } else {
                  if ("/" === i[f + 1]) {
                    l = be
                    f++
                  } else {
                    c.cannotBeABaseURL = true
                    U(c.path, "")
                    l = Re
                  }
                }
              }
            }
          }
          break
        case ye:
          if (!n || n.cannotBeABaseURL && "#" !== o) {
            return InvalidScheme
          }
          if (n.cannotBeABaseURL && "#" === o) {
            c.scheme = n.scheme
            c.path = m(n.path)
            c.query = n.query
            c.fragment = ""
            c.cannotBeABaseURL = true
            l = De
            break
          }
          l = "file" === n.scheme ? Pe : we
          continue
        case _e:
          if ("/" !== o || "/" !== i[f + 1]) {
            l = we
            continue
          }
          l = Oe
          f++
          break
        case be:
          if ("/" === o) {
            l = Ee
            break
          }
          l = Ae
          continue
        case we:
          if (c.scheme = n.scheme, o === r) {
            c.username = n.username
            c.password = n.password
            c.host = n.host
            c.port = n.port
            c.path = m(n.path)
            c.query = n.query
          } else if ("/" === o || "\\" === o && c.isSpecial()) {
            l = Se
          } else if ("?" === o) {
            c.username = n.username
            c.password = n.password
            c.host = n.host
            c.port = n.port
            c.path = m(n.path)
            c.query = ""
            l = Le
          } else {
            if ("#" !== o) {
              c.username = n.username
              c.password = n.password
              c.host = n.host
              c.port = n.port
              c.path = m(n.path)
              c.path.length--
              l = Ae
              continue
            }
            c.username = n.username
            c.password = n.password
            c.host = n.host
            c.port = n.port
            c.path = m(n.path)
            c.query = n.query
            c.fragment = ""
            l = De
          }
          break
        case Se:
          if (!c.isSpecial() || "/" !== o && "\\" !== o) {
            if ("/" !== o) {
              c.username = n.username
              c.password = n.password
              c.host = n.host
              c.port = n.port
              l = Ae
              continue
            }
            l = Ee
          } else {
            l = Oe
          }
          break
        case ke:
          if (l = Oe, "/" !== o || "/" !== A(p, f + 1)) {
            continue
          }
          f++
          break
        case Oe:
          if ("/" !== o && "\\" !== o) {
            l = Ee
            continue
          }
          break
        case Ee:
          if ("@" === o) {
            if (h) {
              p = "%40" + p
            }
            h = true
            a = g(p)
            for (var b = 0; b < a.length; b++) {
              var w = a[b]
              if (":" !== w || y) {
                var S = fe(w, le)
                if (y) {
                  c.password += S
                } else {
                  c.username += S
                }
              } else {
                y = true
              }
            }
            p = ""
          } else if (o === r || "/" === o || "?" === o || "#" === o || "\\" === o && c.isSpecial()) {
            if (h && "" === p) {
              return "Invalid authority"
            }
            f -= g(p).length + 1
            p = ""
            l = Te
          } else {
            p += o
          }
          break
        case Te:
        case xe:
          if (t && "file" === c.scheme) {
            l = Ie
            continue
          }
          if (":" !== o || v) {
            if (o === r || "/" === o || "?" === o || "#" === o || "\\" === o && c.isSpecial()) {
              if (c.isSpecial() && "" === p) {
                return InvalidHost
              }
              if (t && "" === p && (c.includesCredentials() || null !== c.port)) {
                return
              }
              if (s = c.parseHost(p)) {
                return s
              }
              p = ""
              l = Ne
              if (t) {
                return
              }
              continue
            }
            if ("[" === o) {
              v = true
            } else {
              if ("]" === o) {
                v = false
              }
            }
            p += o
          } else {
            if ("" === p) {
              return InvalidHost
            }
            if (s = c.parseHost(p)) {
              return s
            }
            p = ""
            l = je
            if (t === xe) {
              return
            }
          }
          break
        case je:
          if (!R(Y, o)) {
            if (o === r || "/" === o || "?" === o || "#" === o || "\\" === o && c.isSpecial() || t) {
              if ("" !== p) {
                var k = s$parseInt(p, 10)
                if (k > 65535) {
                  return InvalidPort
                }
                c.port = c.isSpecial() && k === pe[c.scheme] ? null : k
                p = ""
              }
              if (t) {
                return
              }
              l = Ne
              continue
            }
            return InvalidPort
          }
          p += o
          break
        case Pe:
          if (c.scheme = "file", "/" === o || "\\" === o) {
            l = Ce
          } else {
            if (!n || "file" !== n.scheme) {
              l = Ae
              continue
            }
            switch (o) {
              case r:
                c.host = n.host
                c.path = m(n.path)
                c.query = n.query
                break
              case "?":
                c.host = n.host
                c.path = m(n.path)
                c.query = ""
                l = Le
                break
              case "#":
                c.host = n.host
                c.path = m(n.path)
                c.query = n.query
                c.fragment = ""
                l = De
                break
              default:
                if (!he(L(m(i, f), ""))) {
                  c.host = n.host
                  c.path = m(n.path)
                  c.shortenPath()
                }
                l = Ae
                continue
            }
          }
          break
        case Ce:
          if ("/" === o || "\\" === o) {
            l = Ie
            break
          }
          if (n && "file" === n.scheme && !he(L(m(i, f), ""))) {
            if (de(n.path[0], true)) {
              U(c.path, n.path[0])
            } else {
              c.host = n.host
            }
          }
          l = Ae
          continue
        case Ie:
          if (o === r || "/" === o || "\\" === o || "?" === o || "#" === o) {
            if (!t && de(p)) {
              l = Ae
            } else if ("" === p) {
              c.host = ""
              if (t) {
                return
              }
              l = Ne
            } else {
              if (s = c.parseHost(p)) {
                return s
              }
              if ("localhost" === c.host) {
                c.host = ""
              }
              if (t) {
                return
              }
              p = ""
              l = Ne
            }
            continue
          }
          p += o
          break
        case Ne:
          if (c.isSpecial()) {
            l = Ae
            if ("/" !== o && "\\" !== o) {
              continue
            }
          } else if (t || "?" !== o) {
            if (t || "#" !== o) {
              if (o !== r && (l = Ae, "/" !== o)) {
                continue
              }
            } else {
              c.fragment = ""
              l = De
            }
          } else {
            c.query = ""
            l = Le
          }
          break
        case Ae:
          if (o === r || "/" === o || "\\" === o && c.isSpecial() || !t && ("?" === o || "#" === o)) {
            if (".." === (u = z(u = p)) || "%2e." === u || ".%2e" === u || "%2e%2e" === u) {
              c.shortenPath()
              if (!("/" === o || "\\" === o && c.isSpecial())) {
                U(c.path, "")
              }
            } else {
              if (ge(p)) {
                if (!("/" === o || "\\" === o && c.isSpecial())) {
                  U(c.path, "")
                }
              } else {
                if ("file" === c.scheme && !c.path.length && de(p)) {
                  if (c.host) {
                    c.host = ""
                  }
                  p = A(p, 0) + ":"
                }
                U(c.path, p)
              }
            }
            p = ""
            if ("file" === c.scheme && (o === r || "?" === o || "#" === o)) {
              for (; c.path.length > 1 && "" === c.path[0];) {
                H(c.path)
              }
            }
            if ("?" === o) {
              c.query = ""
              l = Le
            } else {
              if ("#" === o) {
                c.fragment = ""
                l = De
              }
            }
          } else {
            p += fe(o, ce)
          }
          break
        case Re:
          if ("?" === o) {
            c.query = ""
            l = Le
          } else {
            if ("#" === o) {
              c.fragment = ""
              l = De
            } else {
              if (o !== r) {
                c.path[0] += fe(o, se)
              }
            }
          }
          break
        case Le:
          if (t || "#" !== o) {
            if (o !== r) {
              if ("'" === o && c.isSpecial()) {
                c.query += "%27"
              } else {
                c.query += "#" === o ? "%23" : fe(o, se)
              }
            }
          } else {
            c.fragment = ""
            l = De
          }
          break
        case De:
          if (o !== r) {
            c.fragment += fe(o, ue)
          }
      }
      f++
    }
  },
  parseHost: function (e) {
    var t
    var n
    var r
    if ("[" === A(e, 0)) {
      if ("]" !== A(e, e.length - 1)) {
        return InvalidHost
      }
      t = function (e) {
        var t
        var n
        var r
        var i
        var o
        var a
        var s
        var u = [0, 0, 0, 0, 0, 0, 0, 0]
        var c = 0
        var l = null
        var f = 0
        var p = function () {
          return A(e, f)
        }
        if (":" === p()) {
          if (":" !== A(e, 1)) {
            return
          }
          f += 2
          l = ++c
        }
        for (; p();) {
          if (8 === c) {
            return
          }
          if (":" !== p()) {
            for (t = n = 0; n < 4 && R(ee, p());) {
              t = 16 * t + s$parseInt(p(), 16)
              f++
              n++
            }
            if ("." === p()) {
              if (0 === n) {
                return
              }
              f -= n
              if (c > 6) {
                return
              }
              for (r = 0; p();) {
                i = null
                if (r > 0) {
                  if (!("." === p() && r < 4)) {
                    return
                  }
                  f++
                }
                if (!R(Y, p())) {
                  return
                }
                for (; R(Y, p());) {
                  o = s$parseInt(p(), 10)
                  if (null === i) {
                    i = o
                  } else {
                    if (0 === i) {
                      return
                    }
                    i = 10 * i + o
                  }
                  if (i > 255) {
                    return
                  }
                  f++
                }
                u[c] = 256 * u[c] + i
                if (!(2 !== ++r && 4 !== r)) {
                  c++
                }
              }
              if (4 !== r) {
                return
              }
              break
            }
            if (":" === p()) {
              f++
              if (!p()) {
                return
              }
            } else if (p()) {
              return
            }
            u[c++] = t
          } else {
            if (null !== l) {
              return
            }
            f++
            l = ++c
          }
        }
        if (null !== l) {
          for (a = c - l, c = 7; 0 !== c && a > 0;) {
            s = u[c]
            u[c--] = u[l + a - 1]
            u[l + --a] = s
          }
        } else if (8 !== c) {
          return
        }
        return u
      }($(e, 1, -1))
      if (!t) {
        return InvalidHost
      }
      this.host = t
    } else if (this.isSpecial()) {
      e = y(e)
      if (R(te, e)) {
        return InvalidHost
      }
      t = function (e) {
        var /* [auto-meaningful-name] */u$length
        var n
        var r
        var i
        var o
        var a
        var s
        var u = F(e, ".")
        if (u.length && "" === u[u.length - 1]) {
          u.length--
        }
        if ((u$length = u.length) > 4) {
          return e
        }
        for (n = [], r = 0; r < u$length; r++) {
          if ("" === (i = u[r])) {
            return e
          }
          o = 10
          if (i.length > 1 && "0" === A(i, 0)) {
            o = R(X, i) ? 16 : 8
            i = $(i, 8 === o ? 1 : 2)
          }
          if ("" === i) {
            a = 0
          } else {
            if (!R(10 === o ? Z : 8 === o ? Q : ee, i)) {
              return e
            }
            a = s$parseInt(i, o)
          }
          U(n, a)
        }
        for (r = 0; r < u$length; r++) {
          a = n[r]
          if (r === u$length - 1) {
            if (a >= Math$pow(256, 5 - u$length)) {
              return null
            }
          } else if (a > 255) {
            return null
          }
        }
        for (s = M(n), r = 0; r < n.length; r++) {
          s += n[r] * Math$pow(256, 3 - r)
        }
        return s
      }(e)
      if (null === t) {
        return InvalidHost
      }
      this.host = t
    } else {
      if (R(ne, e)) {
        return InvalidHost
      }
      for (t = "", n = g(e), r = 0; r < n.length; r++) {
        t += fe(n[r], se)
      }
      this.host = t
    }
  },
  cannotHaveUsernamePasswordPort: function () {
    return !this.host || this.cannotBeABaseURL || "file" === this.scheme
  },
  includesCredentials: function () {
    return "" !== this.username || "" !== this.password
  },
  isSpecial: function () {
    return d(pe, this.scheme)
  },
  shortenPath: function () {
    var /* [auto-meaningful-name] */this$path = this.path
    var /* [auto-meaningful-name] */this$path$length = this$path.length
    if (!(!this$path$length || "file" === this.scheme && 1 === this$path$length && de(this$path[0], true))) {
      this$path.length--
    }
  },
  serialize: function () {
    var e = this
    var /* [auto-meaningful-name] */e$scheme = e.scheme
    var /* [auto-meaningful-name] */e$username = e.username
    var /* [auto-meaningful-name] */e$password = e.password
    var /* [auto-meaningful-name] */e$host = e.host
    var /* [auto-meaningful-name] */e$port = e.port
    var /* [auto-meaningful-name] */e$path = e.path
    var /* [auto-meaningful-name] */e$query = e.query
    var /* [auto-meaningful-name] */e$fragment = e.fragment
    var c = e$scheme + ":"
    if (null !== e$host) {
      c += "//"
      if (e.includesCredentials()) {
        c += e$username + (e$password ? ":" + e$password : "") + "@"
      }
      c += ae(e$host)
      if (null !== e$port) {
        c += ":" + e$port
      }
    } else {
      if ("file" === e$scheme) {
        c += "//"
      }
    }
    c += e.cannotBeABaseURL ? e$path[0] : e$path.length ? "/" + L(e$path, "/") : ""
    if (null !== e$query) {
      c += "?" + e$query
    }
    if (null !== e$fragment) {
      c += "#" + e$fragment
    }
    return c
  },
  setHref: function (e) {
    var t = this.parse(e)
    if (t) {
      throw new s$TypeError(t)
    }
    this.searchParams.update()
  },
  getOrigin: function () {
    var /* [auto-meaningful-name] */this$scheme = this.scheme
    var /* [auto-meaningful-name] */this$port = this.port
    if ("blob" === this$scheme) {
      try {
        return new Ue(this$scheme.path[0]).origin
      } catch (n) {
        return "null"
      }
    }
    return "file" !== this$scheme && this.isSpecial() ? this$scheme + "://" + ae(this.host) + (null !== this$port ? ":" + this$port : "") : "null"
  },
  getProtocol: function () {
    return this.scheme + ":"
  },
  setProtocol: function (e) {
    this.parse(_(e) + ":", me)
  },
  getUsername: function () {
    return this.username
  },
  setUsername: function (e) {
    var t = g(_(e))
    if (!this.cannotHaveUsernamePasswordPort()) {
      this.username = ""
      for (var n = 0; n < t.length; n++) {
        this.username += fe(t[n], le)
      }
    }
  },
  getPassword: function () {
    return this.password
  },
  setPassword: function (e) {
    var t = g(_(e))
    if (!this.cannotHaveUsernamePasswordPort()) {
      this.password = ""
      for (var n = 0; n < t.length; n++) {
        this.password += fe(t[n], le)
      }
    }
  },
  getHost: function () {
    var /* [auto-meaningful-name] */this$host = this.host
    var /* [auto-meaningful-name] */this$port = this.port
    return null === this$host ? "" : null === this$port ? ae(this$host) : ae(this$host) + ":" + this$port
  },
  setHost: function (e) {
    if (!this.cannotBeABaseURL) {
      this.parse(e, Te)
    }
  },
  getHostname: function () {
    var /* [auto-meaningful-name] */this$host = this.host
    return null === this$host ? "" : ae(this$host)
  },
  setHostname: function (e) {
    if (!this.cannotBeABaseURL) {
      this.parse(e, xe)
    }
  },
  getPort: function () {
    var /* [auto-meaningful-name] */this$port = this.port
    return null === this$port ? "" : _(this$port)
  },
  setPort: function (e) {
    if (!this.cannotHaveUsernamePasswordPort()) {
      if ("" === (e = _(e))) {
        this.port = null
      } else {
        this.parse(e, je)
      }
    }
  },
  getPathname: function () {
    var /* [auto-meaningful-name] */this$path = this.path
    return this.cannotBeABaseURL ? this$path[0] : this$path.length ? "/" + L(this$path, "/") : ""
  },
  setPathname: function (e) {
    if (!this.cannotBeABaseURL) {
      this.path = []
      this.parse(e, Ne)
    }
  },
  getSearch: function () {
    var /* [auto-meaningful-name] */this$query = this.query
    return this$query ? "?" + this$query : ""
  },
  setSearch: function (e) {
    if ("" === (e = _(e))) {
      this.query = null
    } else {
      if ("?" === A(e, 0)) {
        e = $(e, 1)
      }
      this.query = ""
      this.parse(e, Le)
    }
    this.searchParams.update()
  },
  getSearchParams: function () {
    return this.searchParams.facade
  },
  getHash: function () {
    var /* [auto-meaningful-name] */this$fragment = this.fragment
    return this$fragment ? "#" + this$fragment : ""
  },
  setHash: function (e) {
    if ("" !== (e = _(e))) {
      if ("#" === A(e, 0)) {
        e = $(e, 1)
      }
      this.fragment = ""
      this.parse(e, De)
    } else {
      this.fragment = null
    }
  },
  update: function () {
    this.query = this.searchParams.serialize() || null
  }
}
var Ue = function (e) {
  var t = p(this, Ue$prototype)
  var n = w(arguments.length, 1) > 1 ? arguments[1] : undefined
  var r = k$set(t, new Me(e, false, n))
  if (!o) {
    t.href = r.serialize()
    t.origin = r.getOrigin()
    t.protocol = r.getProtocol()
    t.username = r.getUsername()
    t.password = r.getPassword()
    t.host = r.getHost()
    t.hostname = r.getHostname()
    t.port = r.getPort()
    t.pathname = r.getPathname()
    t.search = r.getSearch()
    t.searchParams = r.getSearchParams()
    t.hash = r.getHash()
  }
}
var /* [auto-meaningful-name] */Ue$prototype = Ue.prototype
var He = function (e, t) {
  return {
    get: function () {
      return E(this)[e]()
    },
    set: t && function (e) {
      return E(this)[t](e)
    },
    configurable: true,
    enumerable: true
  }
}
if (o) {
  f(Ue$prototype, "href", He("serialize", "setHref"))
  f(Ue$prototype, "origin", He("getOrigin"))
  f(Ue$prototype, "protocol", He("getProtocol", "setProtocol"))
  f(Ue$prototype, "username", He("getUsername", "setUsername"))
  f(Ue$prototype, "password", He("getPassword", "setPassword"))
  f(Ue$prototype, "host", He("getHost", "setHost"))
  f(Ue$prototype, "hostname", He("getHostname", "setHostname"))
  f(Ue$prototype, "port", He("getPort", "setPort"))
  f(Ue$prototype, "pathname", He("getPathname", "setPathname"))
  f(Ue$prototype, "search", He("getSearch", "setSearch"))
  f(Ue$prototype, "searchParams", He("getSearchParams"))
  f(Ue$prototype, "hash", He("getHash", "setHash"))
}
l(Ue$prototype, "toJSON", function () {
  return E(this).serialize()
}, {
  enumerable: true
})
l(Ue$prototype, "toString", function () {
  return E(this).serialize()
}, {
  enumerable: true
})
if (s$URL) {
  var /* [auto-meaningful-name] */s$URL$createObjectURL = s$URL.createObjectURL
  var /* [auto-meaningful-name] */s$URL$revokeObjectURL = s$URL.revokeObjectURL
  if (s$URL$createObjectURL) {
    l(Ue, "createObjectURL", u(s$URL$createObjectURL, s$URL))
  }
  if (s$URL$revokeObjectURL) {
    l(Ue, "revokeObjectURL", u(s$URL$revokeObjectURL, s$URL))
  }
}
b(Ue, "URL")
i({
  global: true,
  constructor: true,
  forced: !a,
  sham: !o
}, {
  URL: Ue
})
