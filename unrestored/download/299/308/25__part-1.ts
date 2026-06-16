/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：25__part-1
 */

"use strict"

var o
var i
var r
import * as /* [auto-meaningful-name] */Module_0 from /* 0 */"./0"
function s(e) {
  return e.type === i.literal
}
function u(e) {
  return e.type === i.argument
}
function c(e) {
  return e.type === i.number
}
function l(e) {
  return e.type === i.date
}
function f(e) {
  return e.type === i.time
}
function p(e) {
  return e.type === i.select
}
function d(e) {
  return e.type === i.plural
}
function h(e) {
  return e.type === i.pound
}
function g(e) {
  return e.type === i.tag
}
function m(e) {
  return !(!e || "object" !== typeof e || e.type !== o.number)
}
function v(e) {
  return !(!e || "object" !== typeof e || e.type !== o.dateTime)
}
!function (e) {
  e[e.EXPECT_ARGUMENT_CLOSING_BRACE = 1] = "EXPECT_ARGUMENT_CLOSING_BRACE"
  e[e.EMPTY_ARGUMENT = 2] = "EMPTY_ARGUMENT"
  e[e.MALFORMED_ARGUMENT = 3] = "MALFORMED_ARGUMENT"
  e[e.EXPECT_ARGUMENT_TYPE = 4] = "EXPECT_ARGUMENT_TYPE"
  e[e.INVALID_ARGUMENT_TYPE = 5] = "INVALID_ARGUMENT_TYPE"
  e[e.EXPECT_ARGUMENT_STYLE = 6] = "EXPECT_ARGUMENT_STYLE"
  e[e.INVALID_NUMBER_SKELETON = 7] = "INVALID_NUMBER_SKELETON"
  e[e.INVALID_DATE_TIME_SKELETON = 8] = "INVALID_DATE_TIME_SKELETON"
  e[e.EXPECT_NUMBER_SKELETON = 9] = "EXPECT_NUMBER_SKELETON"
  e[e.EXPECT_DATE_TIME_SKELETON = 10] = "EXPECT_DATE_TIME_SKELETON"
  e[e.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE = 11] = "UNCLOSED_QUOTE_IN_ARGUMENT_STYLE"
  e[e.EXPECT_SELECT_ARGUMENT_OPTIONS = 12] = "EXPECT_SELECT_ARGUMENT_OPTIONS"
  e[e.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE = 13] = "EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE"
  e[e.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE = 14] = "INVALID_PLURAL_ARGUMENT_OFFSET_VALUE"
  e[e.EXPECT_SELECT_ARGUMENT_SELECTOR = 15] = "EXPECT_SELECT_ARGUMENT_SELECTOR"
  e[e.EXPECT_PLURAL_ARGUMENT_SELECTOR = 16] = "EXPECT_PLURAL_ARGUMENT_SELECTOR"
  e[e.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT = 17] = "EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT"
  e[e.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT = 18] = "EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT"
  e[e.INVALID_PLURAL_ARGUMENT_SELECTOR = 19] = "INVALID_PLURAL_ARGUMENT_SELECTOR"
  e[e.DUPLICATE_PLURAL_ARGUMENT_SELECTOR = 20] = "DUPLICATE_PLURAL_ARGUMENT_SELECTOR"
  e[e.DUPLICATE_SELECT_ARGUMENT_SELECTOR = 21] = "DUPLICATE_SELECT_ARGUMENT_SELECTOR"
  e[e.MISSING_OTHER_CLAUSE = 22] = "MISSING_OTHER_CLAUSE"
  e[e.INVALID_TAG = 23] = "INVALID_TAG"
  e[e.INVALID_TAG_NAME = 25] = "INVALID_TAG_NAME"
  e[e.UNMATCHED_CLOSING_TAG = 26] = "UNMATCHED_CLOSING_TAG"
  e[e.UNCLOSED_TAG = 27] = "UNCLOSED_TAG"
}(r || (r = {}));
(function (e) {
  e[e.literal = 0] = "literal"
  e[e.argument = 1] = "argument"
  e[e.number = 2] = "number"
  e[e.date = 3] = "date"
  e[e.time = 4] = "time"
  e[e.select = 5] = "select"
  e[e.plural = 6] = "plural"
  e[e.pound = 7] = "pound"
  e[e.tag = 8] = "tag"
})(i || (i = {}));
(function (e) {
  e[e.number = 0] = "number"
  e[e.dateTime = 1] = "dateTime"
})(o || (o = {}))
var y = /[ \xA0\u1680\u2000-\u200A\u202F\u205F\u3000]/
var _ = /(?:[Eec]{1,6}|G{1,5}|[Qq]{1,5}|(?:[yYur]+|U{1,5})|[ML]{1,5}|d{1,2}|D{1,3}|F{1}|[abB]{1,5}|[hkHK]{1,2}|w{1,2}|W{1}|m{1,2}|s{1,2}|[zZOvVxX]{1,4})(?=([^']*'[^']*')*[^']*$)/g
function b(e) {
  var t = {}
  e.replace(_, function (e) {
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
var w = /[\t-\r \x85\u200E\u200F\u2028\u2029]/i
var S = /^\.(?:(0+)(\*)?|(#+)|(0+)(#+))$/g
var k = /^(@+)?(\+|#+)?[rs]?$/g
var O = /(\*)(0+)|(#+)(0+)|(0+)/g
var E = /^(0+)$/
function T(e) {
  var t = {}
  if ("r" === e[e.length - 1]) {
    t.roundingPriority = "morePrecision"
  } else {
    if ("s" === e[e.length - 1]) {
      t.roundingPriority = "lessPrecision"
    }
  }
  e.replace(k, function (e, n, r) {
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
function x(e) {
  switch (e) {
    case "sign-auto":
      return {
        signDisplay: "auto"
      }
    case "sign-accounting":
    case "()":
      return {
        currencySign: "accounting"
      }
    case "sign-always":
    case "+!":
      return {
        signDisplay: "always"
      }
    case "sign-accounting-always":
    case "()!":
      return {
        signDisplay: "always",
        currencySign: "accounting"
      }
    case "sign-except-zero":
    case "+?":
      return {
        signDisplay: "exceptZero"
      }
    case "sign-accounting-except-zero":
    case "()?":
      return {
        signDisplay: "exceptZero",
        currencySign: "accounting"
      }
    case "sign-never":
    case "+_":
      return {
        signDisplay: "never"
      }
  }
}
function j(e) {
  var t
  if ("E" === e[0] && "E" === e[1]) {
    t = {
      notation: "engineering"
    }
    e = e.slice(2)
  } else {
    if ("E" === e[0]) {
      t = {
        notation: "scientific"
      }
      e = e.slice(1)
    }
  }
  if (t) {
    var n = e.slice(0, 2)
    if ("+!" === n) {
      t.signDisplay = "always"
      e = e.slice(2)
    } else {
      if ("+?" === n) {
        t.signDisplay = "exceptZero"
        e = e.slice(2)
      }
    }
    if (!E.test(e)) {
      throw new Error("Malformed concise eng/scientific notation")
    }
    t.minimumIntegerDigits = e.length
  }
  return t
}
function P(e) {
  var t = x(e)
  return t || {}
}
function C(e) {
  for (var t = {}, n = 0, r = e; n < r.length; n++) {
    var i = r[n]
    switch (i.stem) {
      case "percent":
      case "%":
        t.style = "percent"
        continue
      case "%x100":
        t.style = "percent"
        t.scale = 100
        continue
      case "currency":
        t.style = "currency"
        t.currency = i.options[0]
        continue
      case "group-off":
      case ",_":
        t.useGrouping = false
        continue
      case "precision-integer":
      case ".":
        t.maximumFractionDigits = 0
        continue
      case "measure-unit":
      case "unit":
        t.style = "unit"
        t.unit = i.options[0].replace(/^(.*?)-/, "")
        continue
      case "compact-short":
      case "K":
        t.notation = "compact"
        t.compactDisplay = "short"
        continue
      case "compact-long":
      case "KK":
        t.notation = "compact"
        t.compactDisplay = "long"
        continue
      case "scientific":
        t = Module_0.a(Module_0.a(Module_0.a({}, t), {
          notation: "scientific"
        }), i.options.reduce(function (e, t) {
          return Module_0.a(Module_0.a({}, e), P(t))
        }, {}))
        continue
      case "engineering":
        t = Module_0.a(Module_0.a(Module_0.a({}, t), {
          notation: "engineering"
        }), i.options.reduce(function (e, t) {
          return Module_0.a(Module_0.a({}, e), P(t))
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
      case "scale":
        t.scale = parseFloat(i.options[0])
        continue
      case "integer-width":
        if (i.options.length > 1) {
          throw new RangeError("integer-width stems only accept a single optional option")
        }
        i.options[0].replace(O, function (e, n, r, i, o, a) {
          if (n) {
            t.minimumIntegerDigits = r.length
          } else {
            if (i && o) {
              throw new Error("We currently do not support maximum integer digits")
            }
            if (a) {
              throw new Error("We currently do not support exact integer digits")
            }
          }
          return ""
        })
        continue
    }
    if (E.test(i.stem)) {
      t.minimumIntegerDigits = i.stem.length
    } else if (S.test(i.stem)) {
      if (i.options.length > 1) {
        throw new RangeError("Fraction-precision stems only accept a single optional option")
      }
      i.stem.replace(S, function (e, n, r, i, o, a) {
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
      var o = i.options[0]
      if ("w" === o) {
        t = Module_0.a(Module_0.a({}, t), {
          trailingZeroDisplay: "stripIfInteger"
        })
      } else {
        if (o) {
          t = Module_0.a(Module_0.a({}, t), T(o))
        }
      }
    } else if (k.test(i.stem)) {
      t = Module_0.a(Module_0.a({}, t), T(i.stem))
    } else {
      var s = x(i.stem)
      if (s) {
        t = Module_0.a(Module_0.a({}, t), s)
      }
      var u = j(i.stem)
      if (u) {
        t = Module_0.a(Module_0.a({}, t), u)
      }
    }
  }
  return t
}
var I
var N = {
  AX: ["H"],
  BQ: ["H"],
  CP: ["H"],
  CZ: ["H"],
  DK: ["H"],
  FI: ["H"],
  ID: ["H"],
  IS: ["H"],
  ML: ["H"],
  NE: ["H"],
  RU: ["H"],
  SE: ["H"],
  SJ: ["H"],
  SK: ["H"],
  AS: ["h", "H"],
  BT: ["h", "H"],
  DJ: ["h", "H"],
  ER: ["h", "H"],
  GH: ["h", "H"],
  IN: ["h", "H"],
  LS: ["h", "H"],
  PG: ["h", "H"],
  PW: ["h", "H"],
  SO: ["h", "H"],
  TO: ["h", "H"],
  VU: ["h", "H"],
  WS: ["h", "H"],
  "001": ["H", "h"],
  AL: ["h", "H", "hB"],
  TD: ["h", "H", "hB"],
  "ca-ES": ["H", "h", "hB"],
  CF: ["H", "h", "hB"],
  CM: ["H", "h", "hB"],
  "fr-CA": ["H", "h", "hB"],
  "gl-ES": ["H", "h", "hB"],
  "it-CH": ["H", "h", "hB"],
  "it-IT": ["H", "h", "hB"],
  LU: ["H", "h", "hB"],
  NP: ["H", "h", "hB"],
  PF: ["H", "h", "hB"],
  SC: ["H", "h", "hB"],
  SM: ["H", "h", "hB"],
  SN: ["H", "h", "hB"],
  TF: ["H", "h", "hB"],
  VA: ["H", "h", "hB"],
  CY: ["h", "H", "hb", "hB"],
  GR: ["h", "H", "hb", "hB"],
  CO: ["h", "H", "hB", "hb"],
  DO: ["h", "H", "hB", "hb"],
  KP: ["h", "H", "hB", "hb"],
  KR: ["h", "H", "hB", "hb"],
  NA: ["h", "H", "hB", "hb"],
  PA: ["h", "H", "hB", "hb"],
  PR: ["h", "H", "hB", "hb"],
  VE: ["h", "H", "hB", "hb"],
  AC: ["H", "h", "hb", "hB"],
  AI: ["H", "h", "hb", "hB"],
  BW: ["H", "h", "hb", "hB"],
  BZ: ["H", "h", "hb", "hB"],
  CC: ["H", "h", "hb", "hB"],
  CK: ["H", "h", "hb", "hB"],
  CX: ["H", "h", "hb", "hB"],
  DG: ["H", "h", "hb", "hB"],
  FK: ["H", "h", "hb", "hB"],
  GB: ["H", "h", "hb", "hB"],
  GG: ["H", "h", "hb", "hB"],
  GI: ["H", "h", "hb", "hB"],
  IE: ["H", "h", "hb", "hB"],
  IM: ["H", "h", "hb", "hB"],
  IO: ["H", "h", "hb", "hB"],
  JE: ["H", "h", "hb", "hB"],
  LT: ["H", "h", "hb", "hB"],
  MK: ["H", "h", "hb", "hB"],
  MN: ["H", "h", "hb", "hB"],
  MS: ["H", "h", "hb", "hB"],
  NF: ["H", "h", "hb", "hB"],
  NG: ["H", "h", "hb", "hB"],
  NR: ["H", "h", "hb", "hB"],
  NU: ["H", "h", "hb", "hB"],
  PN: ["H", "h", "hb", "hB"],
  SH: ["H", "h", "hb", "hB"],
  SX: ["H", "h", "hb", "hB"],
  TA: ["H", "h", "hb", "hB"],
  ZA: ["H", "h", "hb", "hB"],
  "af-ZA": ["H", "h", "hB", "hb"],
  AR: ["H", "h", "hB", "hb"],
  CL: ["H", "h", "hB", "hb"],
  CR: ["H", "h", "hB", "hb"],
  CU: ["H", "h", "hB", "hb"],
  EA: ["H", "h", "hB", "hb"],
  "es-BO": ["H", "h", "hB", "hb"],
  "es-BR": ["H", "h", "hB", "hb"],
  "es-EC": ["H", "h", "hB", "hb"],
  "es-ES": ["H", "h", "hB", "hb"],
  "es-GQ": ["H", "h", "hB", "hb"],
  "es-PE": ["H", "h", "hB", "hb"],
  GT: ["H", "h", "hB", "hb"],
  HN: ["H", "h", "hB", "hb"],
  IC: ["H", "h", "hB", "hb"],
  KG: ["H", "h", "hB", "hb"],
  KM: ["H", "h", "hB", "hb"],
  LK: ["H", "h", "hB", "hb"],
  MA: ["H", "h", "hB", "hb"],
  MX: ["H", "h", "hB", "hb"],
  NI: ["H", "h", "hB", "hb"],
  PY: ["H", "h", "hB", "hb"],
  SV: ["H", "h", "hB", "hb"],
  UY: ["H", "h", "hB", "hb"],
  JP: ["H", "h", "K"],
  AD: ["H", "hB"],
  AM: ["H", "hB"],
  AO: ["H", "hB"],
  AT: ["H", "hB"],
  AW: ["H", "hB"],
  BE: ["H", "hB"],
  BF: ["H", "hB"],
  BJ: ["H", "hB"],
  BL: ["H", "hB"],
  BR: ["H", "hB"],
  CG: ["H", "hB"],
  CI: ["H", "hB"],
  CV: ["H", "hB"],
  DE: ["H", "hB"],
  EE: ["H", "hB"],
  FR: ["H", "hB"],
  GA: ["H", "hB"],
  GF: ["H", "hB"],
  GN: ["H", "hB"],
  GP: ["H", "hB"],
  GW: ["H", "hB"],
  HR: ["H", "hB"],
  IL: ["H", "hB"],
  IT: ["H", "hB"],
  KZ: ["H", "hB"],
  MC: ["H", "hB"],
  MD: ["H", "hB"],
  MF: ["H", "hB"],
  MQ: ["H", "hB"],
  MZ: ["H", "hB"],
  NC: ["H", "hB"],
  NL: ["H", "hB"],
  PM: ["H", "hB"],
  PT: ["H", "hB"],
  RE: ["H", "hB"],
  RO: ["H", "hB"],
  SI: ["H", "hB"],
  SR: ["H", "hB"],
  ST: ["H", "hB"],
  TG: ["H", "hB"],
  TR: ["H", "hB"],
  WF: ["H", "hB"],
  YT: ["H", "hB"],
  BD: ["h", "hB", "H"],
  PK: ["h", "hB", "H"],
  AZ: ["H", "hB", "h"],
  BA: ["H", "hB", "h"],
  BG: ["H", "hB", "h"],
  CH: ["H", "hB", "h"],
  GE: ["H", "hB", "h"],
  LI: ["H", "hB", "h"],
  ME: ["H", "hB", "h"],
  RS: ["H", "hB", "h"],
  UA: ["H", "hB", "h"],
  UZ: ["H", "hB", "h"],
  XK: ["H", "hB", "h"],
  AG: ["h", "hb", "H", "hB"],
  AU: ["h", "hb", "H", "hB"],
  BB: ["h", "hb", "H", "hB"],
  BM: ["h", "hb", "H", "hB"],
  BS: ["h", "hb", "H", "hB"],
  CA: ["h", "hb", "H", "hB"],
  DM: ["h", "hb", "H", "hB"],
  "en-001": ["h", "hb", "H", "hB"],
  FJ: ["h", "hb", "H", "hB"],
  FM: ["h", "hb", "H", "hB"],
  GD: ["h", "hb", "H", "hB"],
  GM: ["h", "hb", "H", "hB"],
  GU: ["h", "hb", "H", "hB"],
  GY: ["h", "hb", "H", "hB"],
  JM: ["h", "hb", "H", "hB"],
  KI: ["h", "hb", "H", "hB"],
  KN: ["h", "hb", "H", "hB"],
  KY: ["h", "hb", "H", "hB"],
  LC: ["h", "hb", "H", "hB"],
  LR: ["h", "hb", "H", "hB"],
  MH: ["h", "hb", "H", "hB"],
  MP: ["h", "hb", "H", "hB"],
  MW: ["h", "hb", "H", "hB"],
  NZ: ["h", "hb", "H", "hB"],
  SB: ["h", "hb", "H", "hB"],
  SG: ["h", "hb", "H", "hB"],
  SL: ["h", "hb", "H", "hB"],
  SS: ["h", "hb", "H", "hB"],
  SZ: ["h", "hb", "H", "hB"],
  TC: ["h", "hb", "H", "hB"],
  TT: ["h", "hb", "H", "hB"],
  UM: ["h", "hb", "H", "hB"],
  US: ["h", "hb", "H", "hB"],
  VC: ["h", "hb", "H", "hB"],
  VG: ["h", "hb", "H", "hB"],
  VI: ["h", "hb", "H", "hB"],
  ZM: ["h", "hb", "H", "hB"],
  BO: ["H", "hB", "h", "hb"],
  EC: ["H", "hB", "h", "hb"],
  ES: ["H", "hB", "h", "hb"],
  GQ: ["H", "hB", "h", "hb"],
  PE: ["H", "hB", "h", "hb"],
  AE: ["h", "hB", "hb", "H"],
  "ar-001": ["h", "hB", "hb", "H"],
  BH: ["h", "hB", "hb", "H"],
  DZ: ["h", "hB", "hb", "H"],
  EG: ["h", "hB", "hb", "H"],
  EH: ["h", "hB", "hb", "H"],
  HK: ["h", "hB", "hb", "H"],
  IQ: ["h", "hB", "hb", "H"],
  JO: ["h", "hB", "hb", "H"],
  KW: ["h", "hB", "hb", "H"],
  LB: ["h", "hB", "hb", "H"],
  LY: ["h", "hB", "hb", "H"],
  MO: ["h", "hB", "hb", "H"],
  MR: ["h", "hB", "hb", "H"],
  OM: ["h", "hB", "hb", "H"],
  PH: ["h", "hB", "hb", "H"],
  PS: ["h", "hB", "hb", "H"],
  QA: ["h", "hB", "hb", "H"],
  SA: ["h", "hB", "hb", "H"],
  SD: ["h", "hB", "hb", "H"],
  SY: ["h", "hB", "hb", "H"],
  TN: ["h", "hB", "hb", "H"],
  YE: ["h", "hB", "hb", "H"],
  AF: ["H", "hb", "hB", "h"],
  LA: ["H", "hb", "hB", "h"],
  CN: ["H", "hB", "hb", "h"],
  LV: ["H", "hB", "hb", "h"],
  TL: ["H", "hB", "hb", "h"],
  "zu-ZA": ["H", "hB", "hb", "h"],
  CD: ["hB", "H"],
  IR: ["hB", "H"],
  "hi-IN": ["hB", "h", "H"],
  "kn-IN": ["hB", "h", "H"],
  "ml-IN": ["hB", "h", "H"],
  "te-IN": ["hB", "h", "H"],
  KH: ["hB", "h", "H", "hb"],
  "ta-IN": ["hB", "h", "hb", "H"],
  BN: ["hb", "hB", "h", "H"],
  MY: ["hb", "hB", "h", "H"],
  ET: ["hB", "hb", "h", "H"],
  "gu-IN": ["hB", "hb", "h", "H"],
  "mr-IN": ["hB", "hb", "h", "H"],
  "pa-IN": ["hB", "hb", "h", "H"],
  TW: ["hB", "hb", "h", "H"],
  KE: ["hB", "hb", "H", "h"],
  MM: ["hB", "hb", "H", "h"],
  TZ: ["hB", "hb", "H", "h"],
  UG: ["hB", "hb", "H", "h"]
}
function A(e) {
  var /* [auto-meaningful-name] */e$hourCycle = e.hourCycle
  if (undefined === e$hourCycle && e.hourCycles && e.hourCycles.length) {
    e$hourCycle = e.hourCycles[0]
  }
  if (e$hourCycle) {
    switch (e$hourCycle) {
      case "h24":
        return "k"
      case "h23":
        return "H"
      case "h12":
        return "h"
      case "h11":
        return "K"
      default:
        throw new Error("Invalid hourCycle")
    }
  }
  var /* [auto-meaningful-name] */e$maximize$region
  var /* [auto-meaningful-name] */e$language = e.language
  if ("root" !== e$language) {
    e$maximize$region = e.maximize().region
  }
  return (N[e$maximize$region || ""] || N[e$language || ""] || N["".concat(e$language, "-001")] || N["001"])[0]
}
var R = new RegExp("^".concat(y.source, "*"))
var L = new RegExp("".concat(y.source, "*$"))
function D(e, t) {
  return {
    start: e,
    end: t
  }
}
var M = !!String.prototype.startsWith
var U = !!String.fromCodePoint
var B = !!Object.fromEntries
var H = !!String.prototype.codePointAt
var F = !!String.prototype.trimStart
var $ = !!String.prototype.trimEnd
var z = !!Number.isSafeInteger ? Number.isSafeInteger : function (e) {
  return "number" === typeof e && isFinite(e) && Math.floor(e) === e && Math.abs(e) <= 9007199254740991
}
var q = true
try {
  q = "a" === (null === (I = Q("([^\\p{White_Space}\\p{Pattern_Syntax}]*)", "yu").exec("a")) || undefined === I ? undefined : I[0])
} catch (ae) {
  q = false
}
var V
var G = M ? function (e, t, n) {
  return e.startsWith(t, n)
} : function (e, t, n) {
  return e.slice(n, n + t.length) === t
}
var W = U ? String.fromCodePoint : function () {
  for (var e = [], t = 0; t < arguments.length; t++) {
    e[t] = arguments[t]
  }
  for (var n, r = "", /* [auto-meaningful-name] */e$length = e.length, o = 0; e$length > o;) {
    if ((n = e[o++]) > 1114111) {
      throw RangeError(n + " is not a valid code point")
    }
    r += n < 65536 ? String.fromCharCode(n) : String.fromCharCode(55296 + ((n -= 65536) >> 10), n % 1024 + 56320)
  }
  return r
}
var K = B ? Object.fromEntries : function (e) {
  for (var t = {}, n = 0, r = e; n < r.length; n++) {
    var i = r[n]
    var o = i[0]
    var a = i[1]
    t[o] = a
  }
  return t
}
var J = H ? function (e, t) {
  return e.codePointAt(t)
} : function (e, t) {
  var /* [auto-meaningful-name] */e$length = e.length
  if (!(t < 0 || t >= e$length)) {
    var r
    var i = e.charCodeAt(t)
    return i < 55296 || i > 56319 || t + 1 === e$length || (r = e.charCodeAt(t + 1)) < 56320 || r > 57343 ? i : r - 56320 + (i - 55296 << 10) + 65536
  }
}
var Y = F ? function (e) {
  return e.trimStart()
} : function (e) {
  return e.replace(R, "")
}
var X = $ ? function (e) {
  return e.trimEnd()
} : function (e) {
  return e.replace(L, "")
}
function Q(e, t) {
  return new RegExp(e, t)
}
if (q) {
  var Z = Q("([^\\p{White_Space}\\p{Pattern_Syntax}]*)", "yu")
  V = function (e, t) {
    var n
    Z.lastIndex = t
    return null !== (n = Z.exec(e)[1]) && undefined !== n ? n : ""
  }
} else {
  V = function (e, t) {
    for (var n = [];;) {
      var r = J(e, t)
      if (undefined === r || ne(r) || re(r)) {
        break
      }
      n.push(r)
      t += r >= 65536 ? 2 : 1
    }
    return W.apply(undefined, n)
  }
}
var ee = function () {
  function e(e, t) {
    if (undefined === t) {
      t = {}
    }
    this.message = e
    this.position = {
      offset: 0,
      line: 1,
      column: 1
    }
    this.ignoreTag = !!t.ignoreTag
    this.locale = t.locale
    this.requiresOtherClause = !!t.requiresOtherClause
    this.shouldParseSkeletons = !!t.shouldParseSkeletons
  }
  e.prototype.parse = function () {
    if (0 !== this.offset()) {
      throw Error("parser can only be used once")
    }
    return this.parseMessage(0, "", false)
  }
  e.prototype.parseMessage = function (e, t, n) {
    for (var o = []; !this.isEOF();) {
      var a = this.char()
      if (123 === a) {
        if ((s = this.parseArgument(e, n)).err) {
          return s
        }
        o.push(s.val)
      } else {
        if (125 === a && e > 0) {
          break
        }
        if (35 !== a || "plural" !== t && "selectordinal" !== t) {
          if (60 === a && !this.ignoreTag && 47 === this.peek()) {
            if (n) {
              break
            }
            return this.error(r.UNMATCHED_CLOSING_TAG, D(this.clonePosition(), this.clonePosition()))
          }
          if (60 === a && !this.ignoreTag && te(this.peek() || 0)) {
            if ((s = this.parseTag(e, t)).err) {
              return s
            }
            o.push(s.val)
          } else {
            var s
            if ((s = this.parseLiteral(e, t)).err) {
              return s
            }
            o.push(s.val)
          }
        } else {
          var u = this.clonePosition()
          this.bump()
          o.push({
            type: i.pound,
            location: D(u, this.clonePosition())
          })
        }
      }
    }
    return {
      val: o,
      err: null
    }
  }
  e.prototype.parseTag = function (e, t) {
    var n = this.clonePosition()
    this.bump()
    var o = this.parseTagName()
    this.bumpSpace()
    if (this.bumpIf("/>")) {
      return {
        val: {
          type: i.literal,
          value: "<".concat(o, "/>"),
          location: D(n, this.clonePosition())
        },
        err: null
      }
    }
    if (this.bumpIf(">")) {
      var a = this.parseMessage(e + 1, t, true)
      if (a.err) {
        return a
      }
      var /* [auto-meaningful-name] */a$val = a.val
      var u = this.clonePosition()
      if (this.bumpIf("</")) {
        if (this.isEOF() || !te(this.char())) {
          return this.error(r.INVALID_TAG, D(u, this.clonePosition()))
        }
        var c = this.clonePosition()
        return o !== this.parseTagName() ? this.error(r.UNMATCHED_CLOSING_TAG, D(c, this.clonePosition())) : (this.bumpSpace(), this.bumpIf(">") ? {
          val: {
            type: i.tag,
            value: o,
            children: a$val,
            location: D(n, this.clonePosition())
          },
          err: null
        } : this.error(r.INVALID_TAG, D(u, this.clonePosition())))
      }
      return this.error(r.UNCLOSED_TAG, D(n, this.clonePosition()))
    }
    return this.error(r.INVALID_TAG, D(n, this.clonePosition()))
  }
  e.prototype.parseTagName = function () {
    var e
    var t = this.offset()
    for (this.bump(); !this.isEOF() && (45 === (e = this.char()) || 46 === e || e >= 48 && e <= 57 || 95 === e || e >= 97 && e <= 122 || e >= 65 && e <= 90 || 183 == e || e >= 192 && e <= 214 || e >= 216 && e <= 246 || e >= 248 && e <= 893 || e >= 895 && e <= 8191 || e >= 8204 && e <= 8205 || e >= 8255 && e <= 8256 || e >= 8304 && e <= 8591 || e >= 11264 && e <= 12271 || e >= 12289 && e <= 55295 || e >= 63744 && e <= 64975 || e >= 65008 && e <= 65533 || e >= 65536 && e <= 983039);) {
      this.bump()
    }
    return this.message.slice(t, this.offset())
  }
  e.prototype.parseLiteral = function (e, t) {
    for (var n = this.clonePosition(), r = "";;) {
      var o = this.tryParseQuote(t)
      if (o) {
        r += o
      } else {
        var a = this.tryParseUnquoted(e, t)
        if (a) {
          r += a
        } else {
          var s = this.tryParseLeftAngleBracket()
          if (!s) {
            break
          }
          r += s
        }
      }
    }
    var u = D(n, this.clonePosition())
    return {
      val: {
        type: i.literal,
        value: r,
        location: u
      },
      err: null
    }
  }
  e.prototype.tryParseLeftAngleBracket = function () {
    return this.isEOF() || 60 !== this.char() || !this.ignoreTag && (te(e = this.peek() || 0) || 47 === e) ? null : (this.bump(), "<")
    var e
  }
  e.prototype.tryParseQuote = function (e) {
    if (this.isEOF() || 39 !== this.char()) {
      return null
    }
    switch (this.peek()) {
      case 39:
        this.bump()
        this.bump()
        return "'"
      case 123:
      case 60:
      case 62:
      case 125:
        break
      case 35:
        if ("plural" === e || "selectordinal" === e) {
          break
        }
        return null
      default:
        return null
    }
    this.bump()
    var t = [this.char()]
    for (this.bump(); !this.isEOF();) {
      var n = this.char()
      if (39 === n) {
        if (39 !== this.peek()) {
          this.bump()
          break
        }
        t.push(39)
        this.bump()
      } else {
        t.push(n)
      }
      this.bump()
    }
    return W.apply(undefined, t)
  }
  e.prototype.tryParseUnquoted = function (e, t) {
    if (this.isEOF()) {
      return null
    }
    var n = this.char()
    return 60 === n || 123 === n || 35 === n && ("plural" === t || "selectordinal" === t) || 125 === n && e > 0 ? null : (this.bump(), W(n))
  }
  e.prototype.parseArgument = function (e, t) {
    var n = this.clonePosition()
    this.bump()
    this.bumpSpace()
    if (this.isEOF()) {
      return this.error(r.EXPECT_ARGUMENT_CLOSING_BRACE, D(n, this.clonePosition()))
    }
    if (125 === this.char()) {
      this.bump()
      return this.error(r.EMPTY_ARGUMENT, D(n, this.clonePosition()))
    }
    var /* [auto-meaningful-name] */this$parseIdentifierIfPossible$value = this.parseIdentifierIfPossible().value
    if (!this$parseIdentifierIfPossible$value) {
      return this.error(r.MALFORMED_ARGUMENT, D(n, this.clonePosition()))
    }
    this.bumpSpace()
    if (this.isEOF()) {
      return this.error(r.EXPECT_ARGUMENT_CLOSING_BRACE, D(n, this.clonePosition()))
    }
    switch (this.char()) {
      case 125:
        this.bump()
        return {
          val: {
            type: i.argument,
            value: this$parseIdentifierIfPossible$value,
            location: D(n, this.clonePosition())
          },
          err: null
        }
      case 44:
        this.bump()
        this.bumpSpace()
        return this.isEOF() ? this.error(r.EXPECT_ARGUMENT_CLOSING_BRACE, D(n, this.clonePosition())) : this.parseArgumentOptions(e, t, this$parseIdentifierIfPossible$value, n)
      default:
        return this.error(r.MALFORMED_ARGUMENT, D(n, this.clonePosition()))
    }
  }
  e.prototype.parseIdentifierIfPossible = function () {
    var e = this.clonePosition()
    var t = this.offset()
    var n = V(this.message, t)
    var r = t + n.length
    this.bumpTo(r)
    return {
      value: n,
      location: D(e, this.clonePosition())
    }
  }
  e.prototype.parseArgumentOptions = function (e, t, n, s) {
    var u
    var c = this.clonePosition()
    var /* [auto-meaningful-name] */this$parseIdentifierIfPossible$value = this.parseIdentifierIfPossible().value
    var f = this.clonePosition()
    switch (this$parseIdentifierIfPossible$value) {
      case "":
        return this.error(r.EXPECT_ARGUMENT_TYPE, D(c, f))
      case "number":
      case "date":
      case "time":
        this.bumpSpace()
        var p = null
        if (this.bumpIf(",")) {
          this.bumpSpace()
          var d = this.clonePosition()
          if ((S = this.parseSimpleArgStyleIfPossible()).err) {
            return S
          }
          if (0 === (v = X(S.val)).length) {
            return this.error(r.EXPECT_ARGUMENT_STYLE, D(this.clonePosition(), this.clonePosition()))
          }
          p = {
            style: v,
            styleLocation: D(d, this.clonePosition())
          }
        }
        if ((k = this.tryParseArgumentClose(s)).err) {
          return k
        }
        var h = D(s, this.clonePosition())
        if (p && G(null === p || undefined === p ? undefined : p.style, "::", 0)) {
          var g = Y(p.style.slice(2))
          if ("number" === this$parseIdentifierIfPossible$value) {
            return (S = this.parseNumberSkeletonFromString(g, p.styleLocation)).err ? S : {
              val: {
                type: i.number,
                value: n,
                location: h,
                style: S.val
              },
              err: null
            }
          }
          if (0 === g.length) {
            return this.error(r.EXPECT_DATE_TIME_SKELETON, h)
          }
          var m = g
          if (this.locale) {
            m = function (e, t) {
              for (var n = "", r = 0; r < e.length; r++) {
                var i = e.charAt(r)
                if ("j" === i) {
                  for (var o = 0; r + 1 < e.length && e.charAt(r + 1) === i;) {
                    o++
                    r++
                  }
                  var a = 1 + (1 & o)
                  var s = o < 2 ? 1 : 3 + (o >> 1)
                  var u = A(t)
                  for ("H" != u && "k" != u || (s = 0); s-- > 0;) {
                    n += "a"
                  }
                  for (; a-- > 0;) {
                    n = u + n
                  }
                } else {
                  n += "J" === i ? "H" : i
                }
              }
              return n
            }(g, this.locale)
          }
          var v = {
            type: o.dateTime,
            pattern: m,
            location: p.styleLocation,
            parsedOptions: this.shouldParseSkeletons ? b(m) : {}
          }
          return {
            val: {
              type: "date" === this$parseIdentifierIfPossible$value ? i.date : i.time,
              value: n,
              location: h,
              style: v
            },
            err: null
          }
        }
        return {
          val: {
            type: "number" === this$parseIdentifierIfPossible$value ? i.number : "date" === this$parseIdentifierIfPossible$value ? i.date : i.time,
            value: n,
            location: h,
            style: null !== (u = null === p || undefined === p ? undefined : p.style) && undefined !== u ? u : null
          },
          err: null
        }
      case "plural":
      case "selectordinal":
      case "select":
        var y = this.clonePosition()
        if (this.bumpSpace(), !this.bumpIf(",")) {
          return this.error(r.EXPECT_SELECT_ARGUMENT_OPTIONS, D(y, Module_0.a({}, y)))
        }
        this.bumpSpace()
        var _ = this.parseIdentifierIfPossible(),
          w = 0
        if ("select" !== this$parseIdentifierIfPossible$value && "offset" === _.value) {
          if (!this.bumpIf(":")) {
            return this.error(r.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE, D(this.clonePosition(), this.clonePosition()))
          }
          var S
          this.bumpSpace()
          if ((S = this.tryParseDecimalInteger(r.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE, r.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE)).err) {
            return S
          }
          this.bumpSpace()
          _ = this.parseIdentifierIfPossible()
          w = S.val
        }
        var k,
          O = this.tryParsePluralOrSelectOptions(e, this$parseIdentifierIfPossible$value, t, _)
        if (O.err) {
          return O
        }
        if ((k = this.tryParseArgumentClose(s)).err) {
          return k
        }
        var E = D(s, this.clonePosition())
        return "select" === this$parseIdentifierIfPossible$value ? {
          val: {
            type: i.select,
            value: n,
            options: K(O.val),
            location: E
          },
          err: null
        } : {
          val: {
            type: i.plural,
            value: n,
            options: K(O.val),
            offset: w,
            pluralType: "plural" === this$parseIdentifierIfPossible$value ? "cardinal" : "ordinal",
            location: E
          },
          err: null
        }
      default:
        return this.error(r.INVALID_ARGUMENT_TYPE, D(c, f))
    }
  }
  e.prototype.tryParseArgumentClose = function (e) {
    return this.isEOF() || 125 !== this.char() ? this.error(r.EXPECT_ARGUMENT_CLOSING_BRACE, D(e, this.clonePosition())) : (this.bump(), {
      val: true,
      err: null
    })
  }
  e.prototype.parseSimpleArgStyleIfPossible = function () {
    for (var e = 0, t = this.clonePosition(); !this.isEOF();) {
      switch (this.char()) {
        case 39:
          this.bump()
          var n = this.clonePosition()
          if (!this.bumpUntil("'")) {
            return this.error(r.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE, D(n, this.clonePosition()))
          }
          this.bump()
          break
        case 123:
          e += 1
          this.bump()
          break
        case 125:
          if (!(e > 0)) {
            return {
              val: this.message.slice(t.offset, this.offset()),
              err: null
            }
          }
          e -= 1
          break
        default:
          this.bump()
      }
    }
    return {
      val: this.message.slice(t.offset, this.offset()),
      err: null
    }
  }
  e.prototype.parseNumberSkeletonFromString = function (e, t) {
    var n = []
    try {
      n = function (e) {
        if (0 === e.length) {
          throw new Error("Number skeleton cannot be empty")
        }
        for (var t = [], n = 0, r = e.split(w).filter(function (e) {
          return e.length > 0
        }); n < r.length; n++) {
          var i = r[n].split("/")
          if (0 === i.length) {
            throw new Error("Invalid number skeleton")
          }
          for (var o = i[0], a = i.slice(1), s = 0, u = a; s < u.length; s++) {
            if (0 === u[s].length) {
              throw new Error("Invalid number skeleton")
            }
          }
          t.push({
            stem: o,
            options: a
          })
        }
        return t
      }(e)
    } catch (i) {
      return this.error(r.INVALID_NUMBER_SKELETON, t)
    }
    return {
      val: {
        type: o.number,
        tokens: n,
        location: t,
        parsedOptions: this.shouldParseSkeletons ? C(n) : {}
      },
      err: null
    }
  }
  e.prototype.tryParsePluralOrSelectOptions = function (e, t, n, i) {
    for (var o, a = false, s = [], u = new Set(), /* [auto-meaningful-name] */i$value = i.value, /* [auto-meaningful-name] */i$location = i.location;;) {
      if (0 === i$value.length) {
        var f = this.clonePosition()
        if ("select" === t || !this.bumpIf("=")) {
          break
        }
        var p = this.tryParseDecimalInteger(r.EXPECT_PLURAL_ARGUMENT_SELECTOR, r.INVALID_PLURAL_ARGUMENT_SELECTOR)
        if (p.err) {
          return p
        }
        i$location = D(f, this.clonePosition())
        i$value = this.message.slice(f.offset, this.offset())
      }
      if (u.has(i$value)) {
        return this.error("select" === t ? r.DUPLICATE_SELECT_ARGUMENT_SELECTOR : r.DUPLICATE_PLURAL_ARGUMENT_SELECTOR, i$location)
      }
      if ("other" === i$value) {
        a = true
      }
      this.bumpSpace()
      var d = this.clonePosition()
      if (!this.bumpIf("{")) {
        return this.error("select" === t ? r.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT : r.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT, D(this.clonePosition(), this.clonePosition()))
      }
      var h = this.parseMessage(e + 1, t, n)
      if (h.err) {
        return h
      }
      var g = this.tryParseArgumentClose(d)
      if (g.err) {
        return g
      }
      s.push([
        i$value, {
          value: h.val,
          location: D(d, this.clonePosition())
        }
      ])
      u.add(i$value)
      this.bumpSpace()
      i$value = (o = this.parseIdentifierIfPossible()).value
      i$location = o.location
    }
    return 0 === s.length ? this.error("select" === t ? r.EXPECT_SELECT_ARGUMENT_SELECTOR : r.EXPECT_PLURAL_ARGUMENT_SELECTOR, D(this.clonePosition(), this.clonePosition())) : this.requiresOtherClause && !a ? this.error(r.MISSING_OTHER_CLAUSE, D(this.clonePosition(), this.clonePosition())) : {
      val: s,
      err: null
    }
  }
  e.prototype.tryParseDecimalInteger = function (e, t) {
    var n = 1
    var r = this.clonePosition()
    if (!this.bumpIf("+")) {
      if (this.bumpIf("-")) {
        n = -1
      }
    }
    for (var i = false, o = 0; !this.isEOF();) {
      var a = this.char()
      if (!(a >= 48 && a <= 57)) {
        break
      }
      i = true
      o = 10 * o + (a - 48)
      this.bump()
    }
    var s = D(r, this.clonePosition())
    return i ? z(o *= n) ? {
      val: o,
      err: null
    } : this.error(t, s) : this.error(e, s)
  }
  e.prototype.offset = function () {
    return this.position.offset
  }
  e.prototype.isEOF = function () {
    return this.offset() === this.message.length
  }
  e.prototype.clonePosition = function () {
    return {
      offset: this.position.offset,
      line: this.position.line,
      column: this.position.column
    }
  }
  e.prototype.char = function () {
    var /* [auto-meaningful-name] */this$position$offset = this.position.offset
    if (this$position$offset >= this.message.length) {
      throw Error("out of bound")
    }
    var t = J(this.message, this$position$offset)
    if (undefined === t) {
      throw Error("Offset ".concat(this$position$offset, " is at invalid UTF-16 code unit boundary"))
    }
    return t
  }
  e.prototype.error = function (e, t) {
    return {
      val: null,
      err: {
        kind: e,
        message: this.message,
        location: t
      }
    }
  }
  e.prototype.bump = function () {
    if (!this.isEOF()) {
      var e = this.char()
      if (10 === e) {
        this.position.line += 1
        this.position.column = 1
        this.position.offset += 1
      } else {
        this.position.column += 1
        this.position.offset += e < 65536 ? 1 : 2
      }
    }
  }
  e.prototype.bumpIf = function (e) {
    if (G(this.message, e, this.offset())) {
      for (var t = 0; t < e.length; t++) {
        this.bump()
      }
      return true
    }
    return false
  }
  e.prototype.bumpUntil = function (e) {
    var t = this.offset()
    var n = this.message.indexOf(e, t)
    return n >= 0 ? (this.bumpTo(n), true) : (this.bumpTo(this.message.length), false)
  }
  e.prototype.bumpTo = function (e) {
    if (this.offset() > e) {
      throw Error("targetOffset ".concat(e, " must be greater than or equal to the current offset ").concat(this.offset()))
    }
    for (e = Math.min(e, this.message.length);;) {
      var t = this.offset()
      if (t === e) {
        break
      }
      if (t > e) {
        throw Error("targetOffset ".concat(e, " is at invalid UTF-16 code unit boundary"))
      }
      this.bump()
      if (this.isEOF()) {
        break
      }
    }
  }
  e.prototype.bumpSpace = function () {
    for (; !this.isEOF() && ne(this.char());) {
      this.bump()
    }
  }
  e.prototype.peek = function () {
    if (this.isEOF()) {
      return null
    }
    var e = this.char()
    var t = this.offset()
    var n = this.message.charCodeAt(t + (e >= 65536 ? 2 : 1))
    return null !== n && undefined !== n ? n : null
  }
  return e
}()
function te(e) {
  return e >= 97 && e <= 122 || e >= 65 && e <= 90
}
function ne(e) {
  return e >= 9 && e <= 13 || 32 === e || 133 === e || e >= 8206 && e <= 8207 || 8232 === e || 8233 === e
}
function re(e) {
  return e >= 33 && e <= 35 || 36 === e || e >= 37 && e <= 39 || 40 === e || 41 === e || 42 === e || 43 === e || 44 === e || 45 === e || e >= 46 && e <= 47 || e >= 58 && e <= 59 || e >= 60 && e <= 62 || e >= 63 && e <= 64 || 91 === e || 92 === e || 93 === e || 94 === e || 96 === e || 123 === e || 124 === e || 125 === e || 126 === e || 161 === e || e >= 162 && e <= 165 || 166 === e || 167 === e || 169 === e || 171 === e || 172 === e || 174 === e || 176 === e || 177 === e || 182 === e || 187 === e || 191 === e || 215 === e || 247 === e || e >= 8208 && e <= 8213 || e >= 8214 && e <= 8215 || 8216 === e || 8217 === e || 8218 === e || e >= 8219 && e <= 8220 || 8221 === e || 8222 === e || 8223 === e || e >= 8224 && e <= 8231 || e >= 8240 && e <= 8248 || 8249 === e || 8250 === e || e >= 8251 && e <= 8254 || e >= 8257 && e <= 8259 || 8260 === e || 8261 === e || 8262 === e || e >= 8263 && e <= 8273 || 8274 === e || 8275 === e || e >= 8277 && e <= 8286 || e >= 8592 && e <= 8596 || e >= 8597 && e <= 8601 || e >= 8602 && e <= 8603 || e >= 8604 && e <= 8607 || 8608 === e || e >= 8609 && e <= 8610 || 8611 === e || e >= 8612 && e <= 8613 || 8614 === e || e >= 8615 && e <= 8621 || 8622 === e || e >= 8623 && e <= 8653 || e >= 8654 && e <= 8655 || e >= 8656 && e <= 8657 || 8658 === e || 8659 === e || 8660 === e || e >= 8661 && e <= 8691 || e >= 8692 && e <= 8959 || e >= 8960 && e <= 8967 || 8968 === e || 8969 === e || 8970 === e || 8971 === e || e >= 8972 && e <= 8991 || e >= 8992 && e <= 8993 || e >= 8994 && e <= 9e3 || 9001 === e || 9002 === e || e >= 9003 && e <= 9083 || 9084 === e || e >= 9085 && e <= 9114 || e >= 9115 && e <= 9139 || e >= 9140 && e <= 9179 || e >= 9180 && e <= 9185 || e >= 9186 && e <= 9254 || e >= 9255 && e <= 9279 || e >= 9280 && e <= 9290 || e >= 9291 && e <= 9311 || e >= 9472 && e <= 9654 || 9655 === e || e >= 9656 && e <= 9664 || 9665 === e || e >= 9666 && e <= 9719 || e >= 9720 && e <= 9727 || e >= 9728 && e <= 9838 || 9839 === e || e >= 9840 && e <= 10087 || 10088 === e || 10089 === e || 10090 === e || 10091 === e || 10092 === e || 10093 === e || 10094 === e || 10095 === e || 10096 === e || 10097 === e || 10098 === e || 10099 === e || 10100 === e || 10101 === e || e >= 10132 && e <= 10175 || e >= 10176 && e <= 10180 || 10181 === e || 10182 === e || e >= 10183 && e <= 10213 || 10214 === e || 10215 === e || 10216 === e || 10217 === e || 10218 === e || 10219 === e || 10220 === e || 10221 === e || 10222 === e || 10223 === e || e >= 10224 && e <= 10239 || e >= 10240 && e <= 10495 || e >= 10496 && e <= 10626 || 10627 === e || 10628 === e || 10629 === e || 10630 === e || 10631 === e || 10632 === e || 10633 === e || 10634 === e || 10635 === e || 10636 === e || 10637 === e || 10638 === e || 10639 === e || 10640 === e || 10641 === e || 10642 === e || 10643 === e || 10644 === e || 10645 === e || 10646 === e || 10647 === e || 10648 === e || e >= 10649 && e <= 10711 || 10712 === e || 10713 === e || 10714 === e || 10715 === e || e >= 10716 && e <= 10747 || 10748 === e || 10749 === e || e >= 10750 && e <= 11007 || e >= 11008 && e <= 11055 || e >= 11056 && e <= 11076 || e >= 11077 && e <= 11078 || e >= 11079 && e <= 11084 || e >= 11085 && e <= 11123 || e >= 11124 && e <= 11125 || e >= 11126 && e <= 11157 || 11158 === e || e >= 11159 && e <= 11263 || e >= 11776 && e <= 11777 || 11778 === e || 11779 === e || 11780 === e || 11781 === e || e >= 11782 && e <= 11784 || 11785 === e || 11786 === e || 11787 === e || 11788 === e || 11789 === e || e >= 11790 && e <= 11798 || 11799 === e || e >= 11800 && e <= 11801 || 11802 === e || 11803 === e || 11804 === e || 11805 === e || e >= 11806 && e <= 11807 || 11808 === e || 11809 === e || 11810 === e || 11811 === e || 11812 === e || 11813 === e || 11814 === e || 11815 === e || 11816 === e || 11817 === e || e >= 11818 && e <= 11822 || 11823 === e || e >= 11824 && e <= 11833 || e >= 11834 && e <= 11835 || e >= 11836 && e <= 11839 || 11840 === e || 11841 === e || 11842 === e || e >= 11843 && e <= 11855 || e >= 11856 && e <= 11857 || 11858 === e || e >= 11859 && e <= 11903 || e >= 12289 && e <= 12291 || 12296 === e || 12297 === e || 12298 === e || 12299 === e || 12300 === e || 12301 === e || 12302 === e || 12303 === e || 12304 === e || 12305 === e || e >= 12306 && e <= 12307 || 12308 === e || 12309 === e || 12310 === e || 12311 === e || 12312 === e || 12313 === e || 12314 === e || 12315 === e || 12316 === e || 12317 === e || e >= 12318 && e <= 12319 || 12320 === e || 12336 === e || 64830 === e || 64831 === e || e >= 65093 && e <= 65094
}
function ie(e) {
  e.forEach(function (e) {
    delete e.location
    if (p(e) || d(e)) {
      for (var t in e.options) {
        delete e.options[t].location
        ie(e.options[t].value)
      }
    } else if (c(e) && m(e.style) || (l(e) || f(e)) && v(e.style)) {
      delete e.style.location
    } else {
      if (g(e)) {
        ie(e.children)
      }
    }
  })
}
function oe(e, t) {
  if (undefined === t) {
    t = {}
  }
  t = Module_0.a({
    shouldParseSkeletons: true,
    requiresOtherClause: true
  }, t)
  var n = new ee(e, t).parse()
  if (n.err) {
    var i = SyntaxError(r[n.err.kind])
    i.location = n.err.location
    i.originalMessage = n.err.message
    throw i
  }
  if (!(null === t || undefined === t ? undefined : t.captureLocation)) {
    ie(n.val)
  }
  return n.val
}
export { i }
export { s }
export { u }
export { c }
export { l }
export { f }
export { p }
export { d }
export { h }
export { g }
export { m }
export { v }
export { oe }
