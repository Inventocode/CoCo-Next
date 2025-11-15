/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：1667
 */

var r = require("../1541/272")
var o = require("../1541/194")
var i = require("../1608/818")
var a = require("../1608/939")
var s = require("../1541/422")
var /* [auto-meaningful-name] */require$$_1541_300_index$f = require("../1541/300/index").f
var /* [auto-meaningful-name] */require$$_1541_631_index$f = require("../1541/631/index").f
var u = require("./1073")
var d = require("../1684/310")
var p = require("./944")
var f = require("./1074")
var h = require("../1541/398")
var m = require("../1541/167")
var g = require("../1541/332")
var /* [auto-meaningful-name] */require$$_1541_423_index$enforce = require("../1541/423/index").enforce
var v = require("../1577/751")
var b = require("../1541/247/index")
var y = require("./1242")
var E = require("./1243")
var O = b("match")
var /* [auto-meaningful-name] */o$RegExp = o.RegExp
var /* [auto-meaningful-name] */o$RegExp$prototype = o$RegExp.prototype
var T = /^\?<[^\s\d!#%&*+<=>@^][^\s!#%&*+<=>@^]*>/
var S = /a/g
var I = /a/g
var A = new o$RegExp(S) !== S
var /* [auto-meaningful-name] */f$UNSUPPORTED_Y = f.UNSUPPORTED_Y
var N = r && (!A || f$UNSUPPORTED_Y || y || E || m(function () {
  I[O] = false
  return o$RegExp(S) != S || o$RegExp(I) == I || "/a/i" != o$RegExp(S, "i")
}))
if (i("RegExp", N)) {
  for (var R = function (e, t) {
      var n
      var r
      var o
      var i
      var c
      var l
      var f = this instanceof R
      var h = u(e)
      var m = undefined === t
      var v = []
      var b = e
      if (!f && h && m && e.constructor === R) {
        return e
      }
      if (h || e instanceof R) {
        e = e.source
        if (m) {
          t = "flags" in b ? b.flags : p.call(b)
        }
      }
      e = undefined === e ? "" : d(e)
      t = undefined === t ? "" : d(t)
      b = e
      if (y && "dotAll" in S && (r = !!t && t.indexOf("s") > -1)) {
        t = t.replace(/s/g, "")
      }
      n = t
      if (f$UNSUPPORTED_Y && "sticky" in S && (o = !!t && t.indexOf("y") > -1)) {
        t = t.replace(/y/g, "")
      }
      if (E) {
        e = (i = function (e) {
          for (var t, /* [auto-meaningful-name] */e$length = e.length, r = 0, o = "", i = [], a = {}, s = false, c = false, l = 0, u = ""; r <= e$length; r++) {
            if ("\\" === (t = e.charAt(r))) {
              t += e.charAt(++r)
            } else if ("]" === t) {
              s = false
            } else if (!s) {
              switch (true) {
                case "[" === t:
                  s = true
                  break
                case "(" === t:
                  if (T.test(e.slice(r + 1))) {
                    r += 2
                    c = true
                  }
                  o += t
                  l++
                  continue
                case ">" === t && c:
                  if ("" === u || g(a, u)) {
                    throw new SyntaxError("Invalid capture group name")
                  }
                  a[u] = true
                  i.push([u, l])
                  c = false
                  u = ""
                  continue
              }
            }
            if (c) {
              u += t
            } else {
              o += t
            }
          }
          return [o, i]
        }(e))[0]
        v = i[1]
      }
      c = a(o$RegExp(e, t), f ? this : o$RegExp$prototype, R)
      if (r || o || v.length) {
        l = require$$_1541_423_index$enforce(c)
        if (r) {
          l.dotAll = true
          l.raw = R(function (e) {
            for (var t, /* [auto-meaningful-name] */e$length = e.length, r = 0, o = "", i = false; r <= e$length; r++) {
              if ("\\" !== (t = e.charAt(r))) {
                if (i || "." !== t) {
                  if ("[" === t) {
                    i = true
                  } else {
                    if ("]" === t) {
                      i = false
                    }
                  }
                  o += t
                } else {
                  o += "[\\s\\S]"
                }
              } else {
                o += t + e.charAt(++r)
              }
            }
            return o
          }(e), n)
        }
        if (o) {
          l.sticky = true
        }
        if (v.length) {
          l.groups = v
        }
      }
      if (e !== b) {
        try {
          s(c, "source", "" === b ? "(?:)" : b)
        } catch (O) {}
      }
      return c
    }, k = function (e) {
      if (!(e in R)) {
        require$$_1541_300_index$f(R, e, {
          configurable: true,
          get: function () {
            return o$RegExp[e]
          },
          set: function (t) {
            o$RegExp[e] = t
          }
        })
      }
    }, x = require$$_1541_631_index$f(o$RegExp), D = 0; x.length > D;) {
    k(x[D++])
  }
  o$RegExp$prototype.constructor = R
  R.prototype = o$RegExp$prototype
  h(o, "RegExp", R)
}
v("RegExp")
