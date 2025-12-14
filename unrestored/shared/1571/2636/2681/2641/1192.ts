/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：1192
 */

"use strict"

export { A as a }
import * as /* [auto-meaningful-name] */$_184 from "./184"
import * as /* [auto-meaningful-name] */$$_1481_252 from "../1481/252"
var o = /(?:[Eec]{1,6}|G{1,5}|[Qq]{1,5}|(?:[yYur]+|U{1,5})|[ML]{1,5}|d{1,2}|D{1,3}|F{1}|[abB]{1,5}|[hkHK]{1,2}|w{1,2}|W{1}|m{1,2}|s{1,2}|[zZOvVxX]{1,4})(?=([^']*'[^']*')*[^']*$)/g
function a(e) {
  var t = {}
  e.replace(o, function (e) {
    var /* [auto-meaningful-name] */e$length = e.length
    switch (e[0]) {
      case "G":
        t.era = 4 === e$length ? "long" : 5 === e$length ? "narrow" : "short"
        break
      case "y":
        t.year = 2 === e$length ? "2-digit" : "numeric"
        break
      case "Y":
      case "u":
      case "U":
      case "r":
        throw new RangeError("`Y/u/U/r` (year) patterns are not supported, use `y` instead")
      case "q":
      case "Q":
        throw new RangeError("`q/Q` (quarter) patterns are not supported")
      case "M":
      case "L":
        t.month = ["numeric", "2-digit", "short", "long", "narrow"][e$length - 1]
        break
      case "w":
      case "W":
        throw new RangeError("`w/W` (week) patterns are not supported")
      case "d":
        t.day = ["numeric", "2-digit"][e$length - 1]
        break
      case "D":
      case "F":
      case "g":
        throw new RangeError("`D/F/g` (day) patterns are not supported, use `d` instead")
      case "E":
        t.weekday = 4 === e$length ? "short" : 5 === e$length ? "narrow" : "short"
        break
      case "e":
        if (e$length < 4) {
          throw new RangeError("`e..eee` (weekday) patterns are not supported")
        }
        t.weekday = ["short", "long", "narrow", "short"][e$length - 4]
        break
      case "c":
        if (e$length < 4) {
          throw new RangeError("`c..ccc` (weekday) patterns are not supported")
        }
        t.weekday = ["short", "long", "narrow", "short"][e$length - 4]
        break
      case "a":
        t.hour12 = true
        break
      case "b":
      case "B":
        throw new RangeError("`b/B` (period) patterns are not supported, use `a` instead")
      case "h":
        t.hourCycle = "h12"
        t.hour = ["numeric", "2-digit"][e$length - 1]
        break
      case "H":
        t.hourCycle = "h23"
        t.hour = ["numeric", "2-digit"][e$length - 1]
        break
      case "K":
        t.hourCycle = "h11"
        t.hour = ["numeric", "2-digit"][e$length - 1]
        break
      case "k":
        t.hourCycle = "h24"
        t.hour = ["numeric", "2-digit"][e$length - 1]
        break
      case "j":
      case "J":
      case "C":
        throw new RangeError("`j/J/C` (hour) patterns are not supported, use `h/H/K/k` instead")
      case "m":
        t.minute = ["numeric", "2-digit"][e$length - 1]
        break
      case "s":
        t.second = ["numeric", "2-digit"][e$length - 1]
        break
      case "S":
      case "A":
        throw new RangeError("`S/A` (second) patterns are not supported, use `s` instead")
      case "z":
        t.timeZoneName = e$length < 4 ? "short" : "long"
        break
      case "Z":
      case "O":
      case "v":
      case "V":
      case "X":
      case "x":
        throw new RangeError("`Z/O/v/V/X/x` (timeZone) patterns are not supported, use `z` instead")
    }
    return ""
  })
  return t
}
var s = /^\.(?:(0+)(\*)?|(#+)|(0+)(#+))$/g
var c = /^(@+)?(\+|#+)?$/g
function u(e) {
  var t = {}
  e.replace(c, function (e, n, r) {
    if ("string" !== typeof r) {
      t.minimumSignificantDigits = n.length
      t.maximumSignificantDigits = n.length
    } else {
      if ("+" === r) {
        t.minimumSignificantDigits = n.length
      } else {
        if ("#" === n[0]) {
          t.maximumSignificantDigits = n.length
        } else {
          t.minimumSignificantDigits = n.length
          t.maximumSignificantDigits = n.length + ("string" === typeof r ? r.length : 0)
        }
      }
    }
    return ""
  })
  return t
}
function l(e) {
  switch (e) {
    case "sign-auto":
      return {
        signDisplay: "auto"
      }
    case "sign-accounting":
      return {
        currencySign: "accounting"
      }
    case "sign-always":
      return {
        signDisplay: "always"
      }
    case "sign-accounting-always":
      return {
        signDisplay: "always",
        currencySign: "accounting"
      }
    case "sign-except-zero":
      return {
        signDisplay: "exceptZero"
      }
    case "sign-accounting-except-zero":
      return {
        signDisplay: "exceptZero",
        currencySign: "accounting"
      }
    case "sign-never":
      return {
        signDisplay: "never"
      }
  }
}
function f(e) {
  var t = l(e)
  return t || {}
}
function d(e) {
  for (var t = {}, n = 0, i = e; n < i.length; n++) {
    var o = i[n]
    switch (o.stem) {
      case "percent":
        t.style = "percent"
        continue
      case "currency":
        t.style = "currency"
        t.currency = o.options[0]
        continue
      case "group-off":
        t.useGrouping = false
        continue
      case "precision-integer":
      case ".":
        t.maximumFractionDigits = 0
        continue
      case "measure-unit":
        t.style = "unit"
        t.unit = o.options[0].replace(/^(.*?)-/, "")
        continue
      case "compact-short":
        t.notation = "compact"
        t.compactDisplay = "short"
        continue
      case "compact-long":
        t.notation = "compact"
        t.compactDisplay = "long"
        continue
      case "scientific":
        t = $_184.a($_184.a($_184.a({}, t), {
          notation: "scientific"
        }), o.options.reduce(function (e, t) {
          return $_184.a($_184.a({}, e), f(t))
        }, {}))
        continue
      case "engineering":
        t = $_184.a($_184.a($_184.a({}, t), {
          notation: "engineering"
        }), o.options.reduce(function (e, t) {
          return $_184.a($_184.a({}, e), f(t))
        }, {}))
        continue
      case "notation-simple":
        t.notation = "standard"
        continue
      case "unit-width-narrow":
        t.currencyDisplay = "narrowSymbol"
        t.unitDisplay = "narrow"
        continue
      case "unit-width-short":
        t.currencyDisplay = "code"
        t.unitDisplay = "short"
        continue
      case "unit-width-full-name":
        t.currencyDisplay = "name"
        t.unitDisplay = "long"
        continue
      case "unit-width-iso-code":
        t.currencyDisplay = "symbol"
        continue
    }
    if (s.test(o.stem)) {
      if (o.options.length > 1) {
        throw new RangeError("Fraction-precision stems only accept a single optional option")
      }
      o.stem.replace(s, function (e, n, r, i, o, a) {
        if ("*" === r) {
          t.minimumFractionDigits = n.length
        } else {
          if (i && "#" === i[0]) {
            t.maximumFractionDigits = i.length
          } else {
            if (o && a) {
              t.minimumFractionDigits = o.length
              t.maximumFractionDigits = o.length + a.length
            } else {
              t.minimumFractionDigits = n.length
              t.maximumFractionDigits = n.length
            }
          }
        }
        return ""
      })
      if (o.options.length) {
        t = $_184.a($_184.a({}, t), u(o.options[0]))
      }
    } else if (c.test(o.stem)) {
      t = $_184.a($_184.a({}, t), u(o.stem))
    } else {
      var a = l(o.stem)
      if (a) {
        t = $_184.a($_184.a({}, t), a)
      }
    }
  }
  return t
}
var h = function (e) {
  function t(n, r, i, o) {
    var a = e.call(this) || this
    a.message = n
    a.expected = r
    a.found = i
    a.location = o
    a.name = "SyntaxError"
    if ("function" === typeof Error.captureStackTrace) {
      Error.captureStackTrace(a, t)
    }
    return a
  }
  $_184.b(t, e)
  t.buildMessage = function (e, t) {
    function n(e) {
      return e.charCodeAt(0).toString(16).toUpperCase()
    }
    function r(e) {
      return e.replace(/\\/g, "\\\\").replace(/"/g, "\\\"").replace(/\0/g, "\\0").replace(/\t/g, "\\t").replace(/\n/g, "\\n").replace(/\r/g, "\\r").replace(/[\x00-\x0F]/g, function (e) {
        return "\\x0" + n(e)
      }).replace(/[\x10-\x1F\x7F-\x9F]/g, function (e) {
        return "\\x" + n(e)
      })
    }
    function i(e) {
      return e.replace(/\\/g, "\\\\").replace(/\]/g, "\\]").replace(/\^/g, "\\^").replace(/-/g, "\\-").replace(/\0/g, "\\0").replace(/\t/g, "\\t").replace(/\n/g, "\\n").replace(/\r/g, "\\r").replace(/[\x00-\x0F]/g, function (e) {
        return "\\x0" + n(e)
      }).replace(/[\x10-\x1F\x7F-\x9F]/g, function (e) {
        return "\\x" + n(e)
      })
    }
    function o(e) {
      switch (e.type) {
        case "literal":
          return "\"" + r(e.text) + "\""
        case "class":
          var t = e.parts.map(function (e) {
            return Array.isArray(e) ? i(e[0]) + "-" + i(e[1]) : i(e)
          })
          return "[" + (e.inverted ? "^" : "") + t + "]"
        case "any":
          return "any character"
        case "end":
          return "end of input"
        case "other":
          return e.description
      }
    }
    return "Expected " + function (e) {
      var t
      var n
      var r = e.map(o)
      r.sort()
      if (r.length > 0) {
        for (t = 1, n = 1; t < r.length; t++) {
          if (r[t - 1] !== r[t]) {
            r[n] = r[t]
            n++
          }
        }
        r.length = n
      }
      switch (r.length) {
        case 1:
          return r[0]
        case 2:
          return r[0] + " or " + r[1]
        default:
          return r.slice(0, -1).join(", ") + ", or " + r[r.length - 1]
      }
    }(e) + " but " + (((a = t) ? "\"" + r(a) + "\"" : "end of input") + " found.")
    var a
  }
  return t
}(Error)
var p = function (e, t) {
  t = undefined !== t ? t : {}
  var n
  var o = {}
  var s = {
    start: Ie
  }
  var c = Ie
  var u = Ce("<", false)
  var l = function (e) {
    return e.join("")
  }
  var f = Ce("#", false)
  var p = ke("tagElement")
  var _ = Ce("/>", false)
  var A = Ce(">", false)
  var g = Ce("</", false)
  var v = ke("argumentElement")
  var m = Ce("{", false)
  var y = Ce("}", false)
  var b = ke("numberSkeletonId")
  var w = /^['\/{}]/
  var E = Oe(["'", "/", "{", "}"], false, false)
  var x = {
    type: "any"
  }
  var C = ke("numberSkeletonTokenOption")
  var O = Ce("/", false)
  var k = ke("numberSkeletonToken")
  var S = Ce("::", false)
  var T = function (e) {
    it.pop()
    return e.replace(/\s*$/, "")
  }
  var B = Ce(",", false)
  var D = Ce("number", false)
  var I = function (e, t, n) {
    return $_184.a({
      type: "number" === t ? $$_1481_252.a.number : "date" === t ? $$_1481_252.a.date : $$_1481_252.a.time,
      style: n && n[2],
      value: e
    }, at())
  }
  var R = Ce("'", false)
  var F = /^[^']/
  var P = Oe(["'"], true, false)
  var N = /^[^a-zA-Z'{}]/
  var M = Oe([["a", "z"], ["A", "Z"], "'", "{", "}"], true, false)
  var L = /^[a-zA-Z]/
  var j = Oe([["a", "z"], ["A", "Z"]], false, false)
  var U = Ce("date", false)
  var H = Ce("time", false)
  var V = Ce("plural", false)
  var G = Ce("selectordinal", false)
  var z = Ce("offset:", false)
  var Q = Ce("select", false)
  var W = Ce("=", false)
  var K = ke("whitespace")
  var X = /^[\t-\r \x85\xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000]/
  var Y = Oe([
    ["\t", "\r"], " ", "", " ", " ", [" ", " "], " ", " ", " ", " ", "　"
  ], false, false)
  var q = ke("syntax pattern")
  var $ = /^[!-\/:-@[-\^`{-~\xA1-\xA7\xA9\xAB\xAC\xAE\xB0\xB1\xB6\xBB\xBF\xD7\xF7\u2010-\u2027\u2030-\u203E\u2041-\u2053\u2055-\u205E\u2190-\u245F\u2500-\u2775\u2794-\u2BFF\u2E00-\u2E7F\u3001-\u3003\u3008-\u3020\u3030\uFD3E\uFD3F\uFE45\uFE46]/
  var J = Oe([["!", "/"], [":", "@"], ["[", "^"], "`", ["{", "~"], ["¡", "§"], "©", "«", "¬", "®", "°", "±", "¶", "»", "¿", "×", "÷", ["‐", "‧"], ["‰", "‾"], ["⁁", "⁓"], ["⁕", "⁞"], ["←", "⑟"], ["─", "❵"], ["➔", "⯿"], ["⸀", "⹿"], ["、", "〃"], ["〈", "〠"], "〰", "﴾", "﴿", "﹅", "﹆"], false, false)
  var Z = ke("optional whitespace")
  var ee = ke("number")
  var te = Ce("-", false)
  ke("apostrophe")
  var ne = ke("double apostrophes")
  var re = Ce("''", false)
  var ie = function (e) {
    return "<" !== e && "{" !== e && !(ot() && "#" === e) && !(it.length > 1 && "}" === e)
  }
  var oe = Ce("\n", false)
  var ae = ke("argNameOrNumber")
  var se = ke("validTag")
  var ce = ke("argNumber")
  var ue = Ce("0", false)
  var le = /^[1-9]/
  var fe = Oe([["1", "9"]], false, false)
  var de = /^[0-9]/
  var he = Oe([["0", "9"]], false, false)
  var pe = ke("argName")
  var _e = ke("tagName")
  var Ae = 0
  var ge = 0
  var ve = [
    {
      line: 1,
      column: 1
    }
  ]
  var me = 0
  var ye = []
  var be = 0
  if (undefined !== t.startRule) {
    if (!(t.startRule in s)) {
      throw new Error("Can't start parsing from rule \"" + t.startRule + "\".")
    }
    c = s[t.startRule]
  }
  function we() {
    return e.substring(ge, Ae)
  }
  function Ee() {
    return Te(ge, Ae)
  }
  function xe(e, t) {
    throw function (e, t) {
      return new h(e, [], "", t)
    }(e, t = undefined !== t ? t : Te(ge, Ae))
  }
  function Ce(e, t) {
    return {
      type: "literal",
      text: e,
      ignoreCase: t
    }
  }
  function Oe(e, t, n) {
    return {
      type: "class",
      parts: e,
      inverted: t,
      ignoreCase: n
    }
  }
  function ke(e) {
    return {
      type: "other",
      description: e
    }
  }
  function Se(t) {
    var n
    var r = ve[t]
    if (r) {
      return r
    }
    for (n = t - 1; !ve[n];) {
      n--
    }
    for (r = {
      line: (r = ve[n]).line,
      column: r.column
    }; n < t;) {
      if (10 === e.charCodeAt(n)) {
        r.line++
        r.column = 1
      } else {
        r.column++
      }
      n++
    }
    ve[t] = r
    return r
  }
  function Te(e, t) {
    var n = Se(e)
    var r = Se(t)
    return {
      start: {
        offset: e,
        line: n.line,
        column: n.column
      },
      end: {
        offset: t,
        line: r.line,
        column: r.column
      }
    }
  }
  function Be(e) {
    if (!(Ae < me)) {
      if (Ae > me) {
        me = Ae
        ye = []
      }
      ye.push(e)
    }
  }
  function De(e, t, n) {
    return new h(h.buildMessage(e, t), e, t, n)
  }
  function Ie() {
    return Re()
  }
  function Re() {
    var e
    var t
    for (e = [], t = Fe(); t !== o;) {
      e.push(t)
      t = Fe()
    }
    return e
  }
  function Fe() {
    var t
    var n
    t = Ae
    ge = Ae
    if ((!st ? undefined : o) !== o && (n = function () {
      var e
      var t
      var n
      var a
      be++
      if ((e = Me()) === o) {
        e = Ae
        if ((t = Le()) !== o && (n = Re()) !== o && (a = je()) !== o) {
          ge = e
          c = n
          if ((s = t) !== (u = a)) {
            xe("Mismatch tag \"" + s + "\" !== \"" + u + "\"", Ee())
          }
          t = $_184.a({
            type: $$_1481_252.a.tag,
            value: s,
            children: c
          }, at())
          e = t
        } else {
          Ae = e
          e = o
        }
      }
      var s
      var c
      var u
      be--
      if (e === o) {
        t = o
        if (0 === be) {
          Be(p)
        }
      }
      return e
    }()) !== o) {
      ge = t
      t = n
    } else {
      Ae = t
      t = o
    }
    if (t === o && (t = function () {
      var e
      var t
      e = Ae
      if ((t = Pe()) !== o) {
        ge = e
        n = t
        t = $_184.a({
          type: $$_1481_252.a.literal,
          value: n
        }, at())
      }
      var n
      return e = t
    }()) === o && (t = function () {
      var t
      var n
      var a
      var s
      be++
      t = Ae
      if (123 === e.charCodeAt(Ae)) {
        n = "{"
        Ae++
      } else {
        n = o
        if (0 === be) {
          Be(m)
        }
      }
      if (n !== o && Ye() !== o && (a = et()) !== o && Ye() !== o) {
        if (125 === e.charCodeAt(Ae)) {
          s = "}"
          Ae++
        } else {
          s = o
          if (0 === be) {
            Be(y)
          }
        }
        if (s !== o) {
          ge = t
          c = a
          n = $_184.a({
            type: $$_1481_252.a.argument,
            value: c
          }, at())
          t = n
        } else {
          Ae = t
          t = o
        }
      } else {
        Ae = t
        t = o
      }
      var c
      be--
      if (t === o) {
        n = o
        if (0 === be) {
          Be(v)
        }
      }
      return t
    }()) === o && (t = function () {
      var t
      if ((t = function () {
        var t
        var n
        var i
        var a
        var s
        var c
        var u
        var l
        var f
        t = Ae
        if (123 === e.charCodeAt(Ae)) {
          n = "{"
          Ae++
        } else {
          n = o
          if (0 === be) {
            Be(m)
          }
        }
        if (n !== o && Ye() !== o && (i = et()) !== o && Ye() !== o) {
          if (44 === e.charCodeAt(Ae)) {
            a = ","
            Ae++
          } else {
            a = o
            if (0 === be) {
              Be(B)
            }
          }
          if (a !== o && Ye() !== o) {
            if ("number" === e.substr(Ae, 6)) {
              s = "number"
              Ae += 6
            } else {
              s = o
              if (0 === be) {
                Be(D)
              }
            }
            if (s !== o && Ye() !== o) {
              c = Ae
              if (44 === e.charCodeAt(Ae)) {
                u = ","
                Ae++
              } else {
                u = o
                if (0 === be) {
                  Be(B)
                }
              }
              if (u !== o && (l = Ye()) !== o && (f = function () {
                var t
                var n
                var i
                t = Ae
                if ("::" === e.substr(Ae, 2)) {
                  n = "::"
                  Ae += 2
                } else {
                  n = o
                  if (0 === be) {
                    Be(S)
                  }
                }
                if (n !== o && (i = function () {
                  var e
                  var t
                  var n
                  e = Ae
                  t = []
                  if ((n = Ve()) !== o) {
                    for (; n !== o;) {
                      t.push(n)
                      n = Ve()
                    }
                  } else {
                    t = o
                  }
                  if (t !== o) {
                    ge = e
                    i = t
                    t = $_184.a({
                      type: 0,
                      tokens: i,
                      parsedOptions: ct ? d(i) : {}
                    }, at())
                  }
                  var i
                  return e = t
                }()) !== o) {
                  ge = t
                  t = n = i
                } else {
                  Ae = t
                  t = o
                }
                if (t === o) {
                  t = Ae
                  ge = Ae
                  it.push("numberArgStyle")
                  if ((n = (n = true) ? undefined : o) !== o && (i = Pe()) !== o) {
                    ge = t
                    n = T(i)
                    t = n
                  } else {
                    Ae = t
                    t = o
                  }
                }
                return t
              }()) !== o) {
                c = u = [u, l, f]
              } else {
                Ae = c
                c = o
              }
              if (c === o) {
                c = null
              }
              if (c !== o && (u = Ye()) !== o) {
                if (125 === e.charCodeAt(Ae)) {
                  l = "}"
                  Ae++
                } else {
                  l = o
                  if (0 === be) {
                    Be(y)
                  }
                }
                if (l !== o) {
                  ge = t
                  n = I(i, s, c)
                  t = n
                } else {
                  Ae = t
                  t = o
                }
              } else {
                Ae = t
                t = o
              }
            } else {
              Ae = t
              t = o
            }
          } else {
            Ae = t
            t = o
          }
        } else {
          Ae = t
          t = o
        }
        return t
      }()) === o) {
        t = function () {
          var t
          var n
          var i
          var s
          var c
          var u
          var l
          var f
          var d
          t = Ae
          if (123 === e.charCodeAt(Ae)) {
            n = "{"
            Ae++
          } else {
            n = o
            if (0 === be) {
              Be(m)
            }
          }
          if (n !== o && Ye() !== o && (i = et()) !== o && Ye() !== o) {
            if (44 === e.charCodeAt(Ae)) {
              s = ","
              Ae++
            } else {
              s = o
              if (0 === be) {
                Be(B)
              }
            }
            if (s !== o && Ye() !== o) {
              if ("date" === e.substr(Ae, 4)) {
                c = "date"
                Ae += 4
              } else {
                c = o
                if (0 === be) {
                  Be(U)
                }
              }
              if (c === o) {
                if ("time" === e.substr(Ae, 4)) {
                  c = "time"
                  Ae += 4
                } else {
                  c = o
                  if (0 === be) {
                    Be(H)
                  }
                }
              }
              if (c !== o && Ye() !== o) {
                u = Ae
                if (44 === e.charCodeAt(Ae)) {
                  l = ","
                  Ae++
                } else {
                  l = o
                  if (0 === be) {
                    Be(B)
                  }
                }
                if (l !== o && (f = Ye()) !== o && (d = function () {
                  var t
                  var n
                  var i
                  t = Ae
                  if ("::" === e.substr(Ae, 2)) {
                    n = "::"
                    Ae += 2
                  } else {
                    n = o
                    if (0 === be) {
                      Be(S)
                    }
                  }
                  if (n !== o && (i = function () {
                    var t
                    var n
                    var i
                    var s
                    t = Ae
                    n = Ae
                    i = []
                    if ((s = Ge()) === o) {
                      s = ze()
                    }
                    if (s !== o) {
                      for (; s !== o;) {
                        i.push(s)
                        if ((s = Ge()) === o) {
                          s = ze()
                        }
                      }
                    } else {
                      i = o
                    }
                    n = i !== o ? e.substring(n, Ae) : i
                    if (n !== o) {
                      ge = t
                      c = n
                      n = $_184.a({
                        type: 1,
                        pattern: c,
                        parsedOptions: ct ? a(c) : {}
                      }, at())
                    }
                    var c
                    return t = n
                  }()) !== o) {
                    ge = t
                    t = n = i
                  } else {
                    Ae = t
                    t = o
                  }
                  if (t === o) {
                    t = Ae
                    ge = Ae
                    it.push("dateOrTimeArgStyle")
                    if ((n = (n = true) ? undefined : o) !== o && (i = Pe()) !== o) {
                      ge = t
                      n = T(i)
                      t = n
                    } else {
                      Ae = t
                      t = o
                    }
                  }
                  return t
                }()) !== o) {
                  u = l = [l, f, d]
                } else {
                  Ae = u
                  u = o
                }
                if (u === o) {
                  u = null
                }
                if (u !== o && (l = Ye()) !== o) {
                  if (125 === e.charCodeAt(Ae)) {
                    f = "}"
                    Ae++
                  } else {
                    f = o
                    if (0 === be) {
                      Be(y)
                    }
                  }
                  if (f !== o) {
                    ge = t
                    n = I(i, c, u)
                    t = n
                  } else {
                    Ae = t
                    t = o
                  }
                } else {
                  Ae = t
                  t = o
                }
              } else {
                Ae = t
                t = o
              }
            } else {
              Ae = t
              t = o
            }
          } else {
            Ae = t
            t = o
          }
          return t
        }()
      }
      return t
    }()) === o && (t = function () {
      var t
      var n
      var a
      var s
      var c
      var u
      var l
      var f
      var d
      var h
      var p
      t = Ae
      if (123 === e.charCodeAt(Ae)) {
        n = "{"
        Ae++
      } else {
        n = o
        if (0 === be) {
          Be(m)
        }
      }
      if (n !== o) {
        if (Ye() !== o) {
          if ((a = et()) !== o) {
            if (Ye() !== o) {
              if (44 === e.charCodeAt(Ae)) {
                s = ","
                Ae++
              } else {
                s = o
                if (0 === be) {
                  Be(B)
                }
              }
              if (s !== o) {
                if (Ye() !== o) {
                  if ("plural" === e.substr(Ae, 6)) {
                    c = "plural"
                    Ae += 6
                  } else {
                    c = o
                    if (0 === be) {
                      Be(V)
                    }
                  }
                  if (c === o) {
                    if ("selectordinal" === e.substr(Ae, 13)) {
                      c = "selectordinal"
                      Ae += 13
                    } else {
                      c = o
                      if (0 === be) {
                        Be(G)
                      }
                    }
                  }
                  if (c !== o) {
                    if (Ye() !== o) {
                      if (44 === e.charCodeAt(Ae)) {
                        u = ","
                        Ae++
                      } else {
                        u = o
                        if (0 === be) {
                          Be(B)
                        }
                      }
                      if (u !== o) {
                        if (Ye() !== o) {
                          l = Ae
                          if ("offset:" === e.substr(Ae, 7)) {
                            f = "offset:"
                            Ae += 7
                          } else {
                            f = o
                            if (0 === be) {
                              Be(z)
                            }
                          }
                          if (f !== o && (d = Ye()) !== o && (h = qe()) !== o) {
                            l = f = [f, d, h]
                          } else {
                            Ae = l
                            l = o
                          }
                          if (l === o) {
                            l = null
                          }
                          if (l !== o) {
                            if ((f = Ye()) !== o) {
                              d = []
                              if ((h = We()) !== o) {
                                for (; h !== o;) {
                                  d.push(h)
                                  h = We()
                                }
                              } else {
                                d = o
                              }
                              if (d !== o && (h = Ye()) !== o) {
                                if (125 === e.charCodeAt(Ae)) {
                                  p = "}"
                                  Ae++
                                } else {
                                  p = o
                                  if (0 === be) {
                                    Be(y)
                                  }
                                }
                                if (p !== o) {
                                  ge = t
                                  n = function (e, t, n, o) {
                                    return $_184.a({
                                      type: $$_1481_252.a.plural,
                                      pluralType: "plural" === t ? "cardinal" : "ordinal",
                                      value: e,
                                      offset: n ? n[2] : 0,
                                      options: o.reduce(function (e, t) {
                                        var n = t.id
                                        var /* [auto-meaningful-name] */t$value = t.value
                                        var /* [auto-meaningful-name] */t$location = t.location
                                        if (n in e) {
                                          xe("Duplicate option \"" + n + "\" in plural element: \"" + we() + "\"", Ee())
                                        }
                                        e[n] = {
                                          value: t$value,
                                          location: t$location
                                        }
                                        return e
                                      }, {})
                                    }, at())
                                  }(a, c, l, d)
                                  t = n
                                } else {
                                  Ae = t
                                  t = o
                                }
                              } else {
                                Ae = t
                                t = o
                              }
                            } else {
                              Ae = t
                              t = o
                            }
                          } else {
                            Ae = t
                            t = o
                          }
                        } else {
                          Ae = t
                          t = o
                        }
                      } else {
                        Ae = t
                        t = o
                      }
                    } else {
                      Ae = t
                      t = o
                    }
                  } else {
                    Ae = t
                    t = o
                  }
                } else {
                  Ae = t
                  t = o
                }
              } else {
                Ae = t
                t = o
              }
            } else {
              Ae = t
              t = o
            }
          } else {
            Ae = t
            t = o
          }
        } else {
          Ae = t
          t = o
        }
      } else {
        Ae = t
        t = o
      }
      return t
    }()) === o && (t = function () {
      var t
      var n
      var a
      var s
      var c
      var u
      var l
      var f
      var d
      t = Ae
      if (123 === e.charCodeAt(Ae)) {
        n = "{"
        Ae++
      } else {
        n = o
        if (0 === be) {
          Be(m)
        }
      }
      if (n !== o) {
        if (Ye() !== o) {
          if ((a = et()) !== o) {
            if (Ye() !== o) {
              if (44 === e.charCodeAt(Ae)) {
                s = ","
                Ae++
              } else {
                s = o
                if (0 === be) {
                  Be(B)
                }
              }
              if (s !== o) {
                if (Ye() !== o) {
                  if ("select" === e.substr(Ae, 6)) {
                    c = "select"
                    Ae += 6
                  } else {
                    c = o
                    if (0 === be) {
                      Be(Q)
                    }
                  }
                  if (c !== o) {
                    if (Ye() !== o) {
                      if (44 === e.charCodeAt(Ae)) {
                        u = ","
                        Ae++
                      } else {
                        u = o
                        if (0 === be) {
                          Be(B)
                        }
                      }
                      if (u !== o) {
                        if (Ye() !== o) {
                          l = []
                          if ((f = Qe()) !== o) {
                            for (; f !== o;) {
                              l.push(f)
                              f = Qe()
                            }
                          } else {
                            l = o
                          }
                          if (l !== o && (f = Ye()) !== o) {
                            if (125 === e.charCodeAt(Ae)) {
                              d = "}"
                              Ae++
                            } else {
                              d = o
                              if (0 === be) {
                                Be(y)
                              }
                            }
                            if (d !== o) {
                              ge = t
                              n = function (e, t) {
                                return $_184.a({
                                  type: $$_1481_252.a.select,
                                  value: e,
                                  options: t.reduce(function (e, t) {
                                    var n = t.id
                                    var /* [auto-meaningful-name] */t$value = t.value
                                    var /* [auto-meaningful-name] */t$location = t.location
                                    if (n in e) {
                                      xe("Duplicate option \"" + n + "\" in select element: \"" + we() + "\"", Ee())
                                    }
                                    e[n] = {
                                      value: t$value,
                                      location: t$location
                                    }
                                    return e
                                  }, {})
                                }, at())
                              }(a, l)
                              t = n
                            } else {
                              Ae = t
                              t = o
                            }
                          } else {
                            Ae = t
                            t = o
                          }
                        } else {
                          Ae = t
                          t = o
                        }
                      } else {
                        Ae = t
                        t = o
                      }
                    } else {
                      Ae = t
                      t = o
                    }
                  } else {
                    Ae = t
                    t = o
                  }
                } else {
                  Ae = t
                  t = o
                }
              } else {
                Ae = t
                t = o
              }
            } else {
              Ae = t
              t = o
            }
          } else {
            Ae = t
            t = o
          }
        } else {
          Ae = t
          t = o
        }
      } else {
        Ae = t
        t = o
      }
      return t
    }()) === o) {
      t = function () {
        var t
        var n
        t = Ae
        if (35 === e.charCodeAt(Ae)) {
          n = "#"
          Ae++
        } else {
          n = o
          if (0 === be) {
            Be(f)
          }
        }
        if (n !== o) {
          ge = t
          n = $_184.a({
            type: $$_1481_252.a.pound
          }, at())
        }
        return t = n
      }()
    }
    return t
  }
  function Pe() {
    var t
    var n
    var r
    var i
    t = Ae
    ge = Ae
    if ((n = (n = st) ? undefined : o) !== o) {
      r = []
      if ((i = $e()) === o && (i = Je()) === o && (i = Ze()) === o) {
        if (60 === e.charCodeAt(Ae)) {
          i = "<"
          Ae++
        } else {
          i = o
          if (0 === be) {
            Be(u)
          }
        }
      }
      if (i !== o) {
        for (; i !== o;) {
          r.push(i)
          if ((i = $e()) === o && (i = Je()) === o && (i = Ze()) === o) {
            if (60 === e.charCodeAt(Ae)) {
              i = "<"
              Ae++
            } else {
              i = o
              if (0 === be) {
                Be(u)
              }
            }
          }
        }
      } else {
        r = o
      }
      if (r !== o) {
        ge = t
        t = n = l(r)
      } else {
        Ae = t
        t = o
      }
    } else {
      Ae = t
      t = o
    }
    if (t === o) {
      t = Ae
      n = []
      if ((r = $e()) === o && (r = Je()) === o && (r = Ze()) === o) {
        r = Ne()
      }
      if (r !== o) {
        for (; r !== o;) {
          n.push(r)
          if ((r = $e()) === o && (r = Je()) === o && (r = Ze()) === o) {
            r = Ne()
          }
        }
      } else {
        n = o
      }
      if (n !== o) {
        ge = t
        n = l(n)
      }
      t = n
    }
    return t
  }
  function Ne() {
    var t
    var n
    var r
    t = Ae
    n = Ae
    be++
    if ((r = Le()) === o && (r = je()) === o) {
      r = Me()
    }
    be--
    if (r === o) {
      n = undefined
    } else {
      Ae = n
      n = o
    }
    if (n !== o) {
      if (60 === e.charCodeAt(Ae)) {
        r = "<"
        Ae++
      } else {
        r = o
        if (0 === be) {
          Be(u)
        }
      }
      if (r !== o) {
        ge = t
        t = n = "<"
      } else {
        Ae = t
        t = o
      }
    } else {
      Ae = t
      t = o
    }
    return t
  }
  function Me() {
    var t
    var n
    var a
    var s
    var c
    var l
    var f
    t = Ae
    n = Ae
    if (60 === e.charCodeAt(Ae)) {
      a = "<"
      Ae++
    } else {
      a = o
      if (0 === be) {
        Be(u)
      }
    }
    if (a !== o && (s = tt()) !== o && (c = Ye()) !== o) {
      if ("/>" === e.substr(Ae, 2)) {
        l = "/>"
        Ae += 2
      } else {
        l = o
        if (0 === be) {
          Be(_)
        }
      }
      if (l !== o) {
        n = a = [a, s, c, l]
      } else {
        Ae = n
        n = o
      }
    } else {
      Ae = n
      n = o
    }
    if (n !== o) {
      ge = t
      f = n
      n = $_184.a({
        type: $$_1481_252.a.literal,
        value: f.join("")
      }, at())
    }
    return t = n
  }
  function Le() {
    var t
    var n
    var r
    var i
    t = Ae
    if (60 === e.charCodeAt(Ae)) {
      n = "<"
      Ae++
    } else {
      n = o
      if (0 === be) {
        Be(u)
      }
    }
    if (n !== o && (r = tt()) !== o) {
      if (62 === e.charCodeAt(Ae)) {
        i = ">"
        Ae++
      } else {
        i = o
        if (0 === be) {
          Be(A)
        }
      }
      if (i !== o) {
        ge = t
        t = n = r
      } else {
        Ae = t
        t = o
      }
    } else {
      Ae = t
      t = o
    }
    return t
  }
  function je() {
    var t
    var n
    var r
    var i
    t = Ae
    if ("</" === e.substr(Ae, 2)) {
      n = "</"
      Ae += 2
    } else {
      n = o
      if (0 === be) {
        Be(g)
      }
    }
    if (n !== o && (r = tt()) !== o) {
      if (62 === e.charCodeAt(Ae)) {
        i = ">"
        Ae++
      } else {
        i = o
        if (0 === be) {
          Be(A)
        }
      }
      if (i !== o) {
        ge = t
        t = n = r
      } else {
        Ae = t
        t = o
      }
    } else {
      Ae = t
      t = o
    }
    return t
  }
  function Ue() {
    var t
    var n
    var r
    var i
    var a
    be++
    t = Ae
    n = []
    r = Ae
    i = Ae
    be++
    if ((a = Ke()) === o) {
      if (w.test(e.charAt(Ae))) {
        a = e.charAt(Ae)
        Ae++
      } else {
        a = o
        if (0 === be) {
          Be(E)
        }
      }
    }
    be--
    if (a === o) {
      i = undefined
    } else {
      Ae = i
      i = o
    }
    if (i !== o) {
      if (e.length > Ae) {
        a = e.charAt(Ae)
        Ae++
      } else {
        a = o
        if (0 === be) {
          Be(x)
        }
      }
      if (a !== o) {
        r = i = [i, a]
      } else {
        Ae = r
        r = o
      }
    } else {
      Ae = r
      r = o
    }
    if (r !== o) {
      for (; r !== o;) {
        n.push(r)
        r = Ae
        i = Ae
        be++
        if ((a = Ke()) === o) {
          if (w.test(e.charAt(Ae))) {
            a = e.charAt(Ae)
            Ae++
          } else {
            a = o
            if (0 === be) {
              Be(E)
            }
          }
        }
        be--
        if (a === o) {
          i = undefined
        } else {
          Ae = i
          i = o
        }
        if (i !== o) {
          if (e.length > Ae) {
            a = e.charAt(Ae)
            Ae++
          } else {
            a = o
            if (0 === be) {
              Be(x)
            }
          }
          if (a !== o) {
            r = i = [i, a]
          } else {
            Ae = r
            r = o
          }
        } else {
          Ae = r
          r = o
        }
      }
    } else {
      n = o
    }
    t = n !== o ? e.substring(t, Ae) : n
    be--
    if (t === o) {
      n = o
      if (0 === be) {
        Be(b)
      }
    }
    return t
  }
  function He() {
    var t
    var n
    var r
    be++
    t = Ae
    if (47 === e.charCodeAt(Ae)) {
      n = "/"
      Ae++
    } else {
      n = o
      if (0 === be) {
        Be(O)
      }
    }
    if (n !== o && (r = Ue()) !== o) {
      ge = t
      t = n = r
    } else {
      Ae = t
      t = o
    }
    be--
    if (t === o) {
      n = o
      if (0 === be) {
        Be(C)
      }
    }
    return t
  }
  function Ve() {
    var e
    var t
    var n
    var r
    be++
    e = Ae
    if (Ye() !== o) {
      if ((t = Ue()) !== o) {
        for (n = [], r = He(); r !== o;) {
          n.push(r)
          r = He()
        }
        if (n !== o) {
          ge = e
          e = function (e, t) {
            return {
              stem: e,
              options: t
            }
          }(t, n)
        } else {
          Ae = e
          e = o
        }
      } else {
        Ae = e
        e = o
      }
    } else {
      Ae = e
      e = o
    }
    be--
    if (e === o) {
      o
      if (0 === be) {
        Be(k)
      }
    }
    return e
  }
  function Ge() {
    var t
    var n
    var r
    var i
    t = Ae
    if (39 === e.charCodeAt(Ae)) {
      n = "'"
      Ae++
    } else {
      n = o
      if (0 === be) {
        Be(R)
      }
    }
    if (n !== o) {
      r = []
      if ((i = $e()) === o) {
        if (F.test(e.charAt(Ae))) {
          i = e.charAt(Ae)
          Ae++
        } else {
          i = o
          if (0 === be) {
            Be(P)
          }
        }
      }
      if (i !== o) {
        for (; i !== o;) {
          r.push(i)
          if ((i = $e()) === o) {
            if (F.test(e.charAt(Ae))) {
              i = e.charAt(Ae)
              Ae++
            } else {
              i = o
              if (0 === be) {
                Be(P)
              }
            }
          }
        }
      } else {
        r = o
      }
      if (r !== o) {
        if (39 === e.charCodeAt(Ae)) {
          i = "'"
          Ae++
        } else {
          i = o
          if (0 === be) {
            Be(R)
          }
        }
        if (i !== o) {
          t = n = [n, r, i]
        } else {
          Ae = t
          t = o
        }
      } else {
        Ae = t
        t = o
      }
    } else {
      Ae = t
      t = o
    }
    if (t === o) {
      t = []
      if ((n = $e()) === o) {
        if (N.test(e.charAt(Ae))) {
          n = e.charAt(Ae)
          Ae++
        } else {
          n = o
          if (0 === be) {
            Be(M)
          }
        }
      }
      if (n !== o) {
        for (; n !== o;) {
          t.push(n)
          if ((n = $e()) === o) {
            if (N.test(e.charAt(Ae))) {
              n = e.charAt(Ae)
              Ae++
            } else {
              n = o
              if (0 === be) {
                Be(M)
              }
            }
          }
        }
      } else {
        t = o
      }
    }
    return t
  }
  function ze() {
    var t
    var n
    t = []
    if (L.test(e.charAt(Ae))) {
      n = e.charAt(Ae)
      Ae++
    } else {
      n = o
      if (0 === be) {
        Be(j)
      }
    }
    if (n !== o) {
      for (; n !== o;) {
        t.push(n)
        if (L.test(e.charAt(Ae))) {
          n = e.charAt(Ae)
          Ae++
        } else {
          n = o
          if (0 === be) {
            Be(j)
          }
        }
      }
    } else {
      t = o
    }
    return t
  }
  function Qe() {
    var t
    var n
    var i
    var a
    var s
    var c
    var u
    t = Ae
    if (Ye() !== o && (n = rt()) !== o && Ye() !== o) {
      if (123 === e.charCodeAt(Ae)) {
        i = "{"
        Ae++
      } else {
        i = o
        if (0 === be) {
          Be(m)
        }
      }
      if (i !== o) {
        ge = Ae
        it.push("select")
        if ((true ? undefined : o) !== o && (a = Re()) !== o) {
          if (125 === e.charCodeAt(Ae)) {
            s = "}"
            Ae++
          } else {
            s = o
            if (0 === be) {
              Be(y)
            }
          }
          if (s !== o) {
            ge = t
            c = n
            u = a
            it.pop()
            t = $_184.a({
              id: c,
              value: u
            }, at())
          } else {
            Ae = t
            t = o
          }
        } else {
          Ae = t
          t = o
        }
      } else {
        Ae = t
        t = o
      }
    } else {
      Ae = t
      t = o
    }
    return t
  }
  function We() {
    var t
    var n
    var i
    var a
    var s
    var c
    var u
    t = Ae
    if (Ye() !== o && (n = function () {
      var t
      var n
      var r
      var i
      t = Ae
      n = Ae
      if (61 === e.charCodeAt(Ae)) {
        r = "="
        Ae++
      } else {
        r = o
        if (0 === be) {
          Be(W)
        }
      }
      if (r !== o && (i = qe()) !== o) {
        n = r = [r, i]
      } else {
        Ae = n
        n = o
      }
      if ((t = n !== o ? e.substring(t, Ae) : n) === o) {
        t = rt()
      }
      return t
    }()) !== o && Ye() !== o) {
      if (123 === e.charCodeAt(Ae)) {
        i = "{"
        Ae++
      } else {
        i = o
        if (0 === be) {
          Be(m)
        }
      }
      if (i !== o) {
        ge = Ae
        it.push("plural")
        if ((true ? undefined : o) !== o && (a = Re()) !== o) {
          if (125 === e.charCodeAt(Ae)) {
            s = "}"
            Ae++
          } else {
            s = o
            if (0 === be) {
              Be(y)
            }
          }
          if (s !== o) {
            ge = t
            c = n
            u = a
            it.pop()
            t = $_184.a({
              id: c,
              value: u
            }, at())
          } else {
            Ae = t
            t = o
          }
        } else {
          Ae = t
          t = o
        }
      } else {
        Ae = t
        t = o
      }
    } else {
      Ae = t
      t = o
    }
    return t
  }
  function Ke() {
    var t
    be++
    if (X.test(e.charAt(Ae))) {
      t = e.charAt(Ae)
      Ae++
    } else {
      t = o
      if (0 === be) {
        Be(Y)
      }
    }
    be--
    if (t === o) {
      o
      if (0 === be) {
        Be(K)
      }
    }
    return t
  }
  function Xe() {
    var t
    be++
    if ($.test(e.charAt(Ae))) {
      t = e.charAt(Ae)
      Ae++
    } else {
      t = o
      if (0 === be) {
        Be(J)
      }
    }
    be--
    if (t === o) {
      o
      if (0 === be) {
        Be(q)
      }
    }
    return t
  }
  function Ye() {
    var t
    var n
    var r
    for (be++, t = Ae, n = [], r = Ke(); r !== o;) {
      n.push(r)
      r = Ke()
    }
    t = n !== o ? e.substring(t, Ae) : n
    be--
    if (t === o) {
      n = o
      if (0 === be) {
        Be(Z)
      }
    }
    return t
  }
  function qe() {
    var t
    var n
    var r
    var i
    var a
    be++
    t = Ae
    if (45 === e.charCodeAt(Ae)) {
      n = "-"
      Ae++
    } else {
      n = o
      if (0 === be) {
        Be(te)
      }
    }
    if (n === o) {
      n = null
    }
    if (n !== o && (r = nt()) !== o) {
      ge = t
      i = n
      t = n = (a = r) ? i ? -a : a : 0
    } else {
      Ae = t
      t = o
    }
    be--
    if (t === o) {
      n = o
      if (0 === be) {
        Be(ee)
      }
    }
    return t
  }
  function $e() {
    var t
    var n
    be++
    t = Ae
    if ("''" === e.substr(Ae, 2)) {
      n = "''"
      Ae += 2
    } else {
      n = o
      if (0 === be) {
        Be(re)
      }
    }
    if (n !== o) {
      ge = t
      n = "'"
    }
    be--
    if ((t = n) === o) {
      n = o
      if (0 === be) {
        Be(ne)
      }
    }
    return t
  }
  function Je() {
    var t
    var n
    var r
    var i
    var a
    var s
    t = Ae
    if (39 === e.charCodeAt(Ae)) {
      n = "'"
      Ae++
    } else {
      n = o
      if (0 === be) {
        Be(R)
      }
    }
    if (n !== o) {
      if ((r = function () {
        var t
        var n
        var r
        var i
        t = Ae
        n = Ae
        if (e.length > Ae) {
          r = e.charAt(Ae)
          Ae++
        } else {
          r = o
          if (0 === be) {
            Be(x)
          }
        }
        if (r !== o) {
          ge = Ae
          if ((i = (i = "<" === (a = r) || ">" === a || "{" === a || "}" === a || ot() && "#" === a) ? undefined : o) !== o) {
            n = r = [r, i]
          } else {
            Ae = n
            n = o
          }
        } else {
          Ae = n
          n = o
        }
        var a
        t = n !== o ? e.substring(t, Ae) : n
        return t
      }()) !== o) {
        for (i = Ae, a = [], "''" === e.substr(Ae, 2) ? (s = "''", Ae += 2) : (s = o, 0 === be && Be(re)), s === o && (F.test(e.charAt(Ae)) ? (s = e.charAt(Ae), Ae++) : (s = o, 0 === be && Be(P))); s !== o;) {
          a.push(s)
          if ("''" === e.substr(Ae, 2)) {
            s = "''"
            Ae += 2
          } else {
            s = o
            if (0 === be) {
              Be(re)
            }
          }
          if (s === o) {
            if (F.test(e.charAt(Ae))) {
              s = e.charAt(Ae)
              Ae++
            } else {
              s = o
              if (0 === be) {
                Be(P)
              }
            }
          }
        }
        if ((i = a !== o ? e.substring(i, Ae) : a) !== o) {
          if (39 === e.charCodeAt(Ae)) {
            a = "'"
            Ae++
          } else {
            a = o
            if (0 === be) {
              Be(R)
            }
          }
          if (a === o) {
            a = null
          }
          if (a !== o) {
            ge = t
            t = n = r + i.replace("''", "'")
          } else {
            Ae = t
            t = o
          }
        } else {
          Ae = t
          t = o
        }
      } else {
        Ae = t
        t = o
      }
    } else {
      Ae = t
      t = o
    }
    return t
  }
  function Ze() {
    var t
    var n
    var r
    var i
    t = Ae
    n = Ae
    if (e.length > Ae) {
      r = e.charAt(Ae)
      Ae++
    } else {
      r = o
      if (0 === be) {
        Be(x)
      }
    }
    if (r !== o) {
      ge = Ae
      if ((i = (i = ie(r)) ? undefined : o) !== o) {
        n = r = [r, i]
      } else {
        Ae = n
        n = o
      }
    } else {
      Ae = n
      n = o
    }
    if (n === o) {
      if (10 === e.charCodeAt(Ae)) {
        n = "\n"
        Ae++
      } else {
        n = o
        if (0 === be) {
          Be(oe)
        }
      }
    }
    return t = n !== o ? e.substring(t, Ae) : n
  }
  function et() {
    var t
    var n
    be++
    t = Ae
    if ((n = nt()) === o) {
      n = rt()
    }
    t = n !== o ? e.substring(t, Ae) : n
    be--
    if (t === o) {
      n = o
      if (0 === be) {
        Be(ae)
      }
    }
    return t
  }
  function tt() {
    var t
    var n
    be++
    t = Ae
    if ((n = nt()) === o) {
      n = function () {
        var t
        var n
        var r
        var i
        var a
        be++
        t = Ae
        n = []
        if (45 === e.charCodeAt(Ae)) {
          r = "-"
          Ae++
        } else {
          r = o
          if (0 === be) {
            Be(te)
          }
        }
        if (r === o) {
          r = Ae
          i = Ae
          be++
          if ((a = Ke()) === o) {
            a = Xe()
          }
          be--
          if (a === o) {
            i = undefined
          } else {
            Ae = i
            i = o
          }
          if (i !== o) {
            if (e.length > Ae) {
              a = e.charAt(Ae)
              Ae++
            } else {
              a = o
              if (0 === be) {
                Be(x)
              }
            }
            if (a !== o) {
              r = i = [i, a]
            } else {
              Ae = r
              r = o
            }
          } else {
            Ae = r
            r = o
          }
        }
        if (r !== o) {
          for (; r !== o;) {
            n.push(r)
            if (45 === e.charCodeAt(Ae)) {
              r = "-"
              Ae++
            } else {
              r = o
              if (0 === be) {
                Be(te)
              }
            }
            if (r === o) {
              r = Ae
              i = Ae
              be++
              if ((a = Ke()) === o) {
                a = Xe()
              }
              be--
              if (a === o) {
                i = undefined
              } else {
                Ae = i
                i = o
              }
              if (i !== o) {
                if (e.length > Ae) {
                  a = e.charAt(Ae)
                  Ae++
                } else {
                  a = o
                  if (0 === be) {
                    Be(x)
                  }
                }
                if (a !== o) {
                  r = i = [i, a]
                } else {
                  Ae = r
                  r = o
                }
              } else {
                Ae = r
                r = o
              }
            }
          }
        } else {
          n = o
        }
        t = n !== o ? e.substring(t, Ae) : n
        be--
        if (t === o) {
          n = o
          if (0 === be) {
            Be(_e)
          }
        }
        return t
      }()
    }
    t = n !== o ? e.substring(t, Ae) : n
    be--
    if (t === o) {
      n = o
      if (0 === be) {
        Be(se)
      }
    }
    return t
  }
  function nt() {
    var t
    var n
    var r
    var i
    var a
    be++
    t = Ae
    if (48 === e.charCodeAt(Ae)) {
      n = "0"
      Ae++
    } else {
      n = o
      if (0 === be) {
        Be(ue)
      }
    }
    if (n !== o) {
      ge = t
      n = 0
    }
    if ((t = n) === o) {
      t = Ae
      n = Ae
      if (le.test(e.charAt(Ae))) {
        r = e.charAt(Ae)
        Ae++
      } else {
        r = o
        if (0 === be) {
          Be(fe)
        }
      }
      if (r !== o) {
        for (i = [], de.test(e.charAt(Ae)) ? (a = e.charAt(Ae), Ae++) : (a = o, 0 === be && Be(he)); a !== o;) {
          i.push(a)
          if (de.test(e.charAt(Ae))) {
            a = e.charAt(Ae)
            Ae++
          } else {
            a = o
            if (0 === be) {
              Be(he)
            }
          }
        }
        if (i !== o) {
          n = r = [r, i]
        } else {
          Ae = n
          n = o
        }
      } else {
        Ae = n
        n = o
      }
      if (n !== o) {
        ge = t
        n = parseInt(n.join(""), 10)
      }
      t = n
    }
    be--
    if (t === o) {
      n = o
      if (0 === be) {
        Be(ce)
      }
    }
    return t
  }
  function rt() {
    var t
    var n
    var r
    var i
    var a
    be++
    t = Ae
    n = []
    r = Ae
    i = Ae
    be++
    if ((a = Ke()) === o) {
      a = Xe()
    }
    be--
    if (a === o) {
      i = undefined
    } else {
      Ae = i
      i = o
    }
    if (i !== o) {
      if (e.length > Ae) {
        a = e.charAt(Ae)
        Ae++
      } else {
        a = o
        if (0 === be) {
          Be(x)
        }
      }
      if (a !== o) {
        r = i = [i, a]
      } else {
        Ae = r
        r = o
      }
    } else {
      Ae = r
      r = o
    }
    if (r !== o) {
      for (; r !== o;) {
        n.push(r)
        r = Ae
        i = Ae
        be++
        if ((a = Ke()) === o) {
          a = Xe()
        }
        be--
        if (a === o) {
          i = undefined
        } else {
          Ae = i
          i = o
        }
        if (i !== o) {
          if (e.length > Ae) {
            a = e.charAt(Ae)
            Ae++
          } else {
            a = o
            if (0 === be) {
              Be(x)
            }
          }
          if (a !== o) {
            r = i = [i, a]
          } else {
            Ae = r
            r = o
          }
        } else {
          Ae = r
          r = o
        }
      }
    } else {
      n = o
    }
    t = n !== o ? e.substring(t, Ae) : n
    be--
    if (t === o) {
      n = o
      if (0 === be) {
        Be(pe)
      }
    }
    return t
  }
  var it = ["root"]
  function ot() {
    return "plural" === it[it.length - 1]
  }
  function at() {
    return t && t.captureLocation ? {
      location: Ee()
    } : {}
  }
  var st = t && t.ignoreTag
  var ct = t && t.shouldParseSkeleton
  if ((n = c()) !== o && Ae === e.length) {
    return n
  }
  if (n !== o && Ae < e.length) {
    Be({
      type: "end"
    })
  }
  throw De(ye, me < e.length ? e.charAt(me) : null, me < e.length ? Te(me, me + 1) : Te(me, me))
}
var _ = /(^|[^\\])#/g
function A(e, t) {
  t = $_184.a({
    normalizeHashtagInPlural: true,
    shouldParseSkeleton: true
  }, t || {})
  var n = p(e, t)
  if (t.normalizeHashtagInPlural) {
    (function e(t) {
      t.forEach(function (t) {
        if ($$_1481_252.h(t) || $$_1481_252.j(t)) {
          Object.keys(t.options).forEach(function (n) {
            for (var /* [auto-meaningful-name] */a$value, a = t.options[n], s = -1, c = undefined, u = 0; u < a.value.length; u++) {
              var l = a.value[u]
              if ($$_1481_252.e(l) && _.test(l.value)) {
                s = u
                c = l
                break
              }
            }
            if (c) {
              var f = c.value.replace(_, "$1{" + t.value + ", number}")
              var d = p(f);
              (a$value = a.value).splice.apply(a$value, $_184.c([s, 1], d))
            }
            e(a.value)
          })
        }
      })
    })(n)
  }
  return n
}
export default A
