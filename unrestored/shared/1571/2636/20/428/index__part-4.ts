/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：428__part-4
 */

"use strict"

var Le
var Me
var De
var xe
var ke
var Re
var Ne
import * as /* [auto-meaningful-name] */$$_$$_14 from "../../14"
import * as /* [auto-meaningful-name] */Lodash from "lodash"
import * as /* [auto-meaningful-name] */$_786_index from "./786/index"
import /* [auto-meaningful-name] */$_786_index1 from "./786/index"
import * as /* [auto-meaningful-name] */$_612 from "./612"
function Ge(e, t) {
  var n = Math.pow(10, t)
  return Math.round(e * n) / n
}
function We(e, t, n) {
  if (e === Ne.DIVIDE && 0 === n) {
    return t / n
  }
  if ("number" === typeof t && "number" === typeof n) {
    return function (e, t, n) {
      switch (e) {
        case Ne.ADD:
          return t.plus(n).toNumber()
        case Ne.MINUS:
          return t.minus(n).toNumber()
        case Ne.MULTIPLY:
          return t.times(n).toNumber()
        case Ne.DIVIDE:
          return t.dividedBy(n).toNumber()
        case Ne.POWER:
          return t.pow(n).toNumber()
      }
    }(e, new $_612.Decimal(t), new $_612.Decimal(n))
  }
  var r = ["number", "string"]
  if (e === Ne.ADD) {
    return r.includes(typeof t) && r.includes(typeof n) ? "".concat(t).concat(n) : void $$_$$_14.a.condition(false, {
      type: "error",
      messageId: "additionArgumentTypeError"
    })
  }
  $$_$$_14.a.condition(false, {
    type: "error",
    messageId: "operationArgumentTypeError"
  })
}
function Ue(e, t) {
  switch (e) {
    case Re.EVEN:
      return t % 2 === 0
    case Re.ODD:
      return 1 === Math.abs(t % 2)
    case Re.PRIME:
      return function (e) {
        if (isNaN(e) || !isFinite(e) || e % 1 || e < 2) {
          return false
        }
        if (e % 2 === 0) {
          return 2 === e
        }
        if (e % 3 === 0) {
          return 3 === e
        }
        for (var t = Math.sqrt(e), n = 5; n <= t; n += 6) {
          if (e % n === 0) {
            return false
          }
          if (e % (n + 2) === 0) {
            return false
          }
        }
        return true
      }(t)
    case Re.WHOLE:
      return t === Math.floor(t)
    case Re.POSITIVE:
      return t > 0
    case Re.NEGATIVE:
      return t < 0
  }
}
function He(e, t) {
  return e % t === 0
}
function Ve(e, t) {
  var n = Math.round(Math.max(e, t))
  var r = Math.round(Math.min(e, t))
  return Math.round(Math.random() * (n - r)) + r
}
function ze(e, t, n) {
  return e === ke.AND ? t && n : t || n
}
function Ye(e, t) {
  switch (e) {
    case xe.ROOT:
      return Math.pow(t, .5)
    case xe.ABS:
      return Math.abs(t)
    case xe.NEG:
      return -t
    case xe.LN:
      return Math.log(t)
    case xe.LOG10:
      return Math.log(t) / Math.log(10)
    case xe.EXP:
      return Math.pow(Math.E, t)
    case xe.POW10:
      return Math.pow(10, t)
  }
}
function Ke(e, t) {
  return e % t
}
function qe(e, t) {
  switch (e) {
    case De.SIN:
      return Ge(Math.sin(t * Math.PI / 180), 2)
    case De.COS:
      return Ge(Math.cos(t * Math.PI / 180), 2)
    case De.TAN:
      return Ge(Math.tan(t * Math.PI / 180), 2)
    case De.ASIN:
      return Ge(Math.asin(t) / Math.PI * 180, 2)
    case De.ACOS:
      return Ge(Math.acos(t) / Math.PI * 180, 2)
    case De.ATAN:
      return Ge(Math.atan(t) / Math.PI * 180, 2)
  }
}
function Xe(e, t) {
  switch (e) {
    case Me.ROUND:
      return Math.round(t)
    case Me.CEIL:
      return Math.ceil(t)
    case Me.FLOOR:
      return Math.floor(t)
  }
}
function Qe(e, t, n) {
  switch (e) {
    case Le.EQUAL:
      return Lodash.isEqual(t, n)
    case Le.UNEQUAL:
      return !Lodash.isEqual(t, n)
    case Le.LESS_THAN:
      return t < n
    case Le.LESS_THAN_OR_EQUAL:
      return t <= n
    case Le.GREATER_THAN:
      return t > n
    case Le.GREATER_THAN_OR_EQUAL:
      return t >= n
  }
}
function Ze(e) {
  return $_786_index1.lex(e).toPostfix().postfixEval()
}
function Je(e, t) {
  return "number" === t ? "NaN" === e || "number" === typeof e && isNaN(e) ? NaN : isNaN(Number(e)) ? String(e) : Number(e) : "string" === t ? Lodash.isPlainObject(e) ? e = JSON.stringify(e) : String(e) : Boolean(e)
}
function $e() {
  for (var /* [auto-meaningful-name] */arguments$length = arguments.length, t = new Array(arguments$length), n = 0; n < arguments$length; n++) {
    t[n] = arguments[n]
  }
  var r = t.map(function (e) {
    return Lodash.isPlainObject(e) ? JSON.stringify(e) : e
  })
  return r.join("")
}
function et(e) {
  return "".concat(e).length
}
function tt(e, t) {
  return e.includes(t)
}
function nt(e, t, n) {
  var r = Math.floor(t)
  if (undefined === n) {
    var o = e[r - 1]
    return o || ""
  }
  var i = Math.floor(n) - 1
  return r <= i ? e.substring(r - 1, i + 1) : e.substring(i, r).split("").reverse().join("")
}
function rt(e, t) {
  return e.split(t).map(function (e) {
    return /\s/.test(e) || "" === e || isNaN(Number(e)) ? e : Number(e)
  })
}
!function (e) {
  e.ADD = "ADD"
  e.MINUS = "MINUS"
  e.MULTIPLY = "MULTIPLY"
  e.DIVIDE = "DIVIDE"
  e.POWER = "POWER"
}(Ne || (Ne = {}));
(function (e) {
  e.EVEN = "EVEN"
  e.ODD = "ODD"
  e.PRIME = "PRIME"
  e.WHOLE = "WHOLE"
  e.POSITIVE = "POSITIVE"
  e.NEGATIVE = "NEGATIVE"
})(Re || (Re = {}));
(function (e) {
  e.AND = "AND"
  e.OR = "OR"
})(ke || (ke = {}));
(function (e) {
  e.ROOT = "ROOT"
  e.ABS = "ABS"
  e.NEG = "NEG"
  e.LN = "LN"
  e.LOG10 = "LOG10"
  e.EXP = "EXP"
  e.POW10 = "POW10"
})(xe || (xe = {}));
(function (e) {
  e.SIN = "SIN"
  e.COS = "COS"
  e.TAN = "TAN"
  e.ASIN = "ASIN"
  e.ACOS = "ACOS"
  e.ATAN = "ATAN"
})(De || (De = {}));
(function (e) {
  e.ROUND = "ROUND"
  e.CEIL = "CEIL"
  e.FLOOR = "FLOOR"
})(Me || (Me = {}));
(function (e) {
  e.EQUAL = "EQ"
  e.UNEQUAL = "NEQ"
  e.LESS_THAN = "LT"
  e.LESS_THAN_OR_EQUAL = "LTE"
  e.GREATER_THAN = "GT"
  e.GREATER_THAN_OR_EQUAL = "GTE"
})(Le || (Le = {}))
var ot = new Map()
function it(e) {
  var t = ot.get(e)
  var n = Date.now()
  if (t) {
    return t.stoppedAt ? (t.startedAt += n - t.stoppedAt, void (t.stoppedAt = undefined)) : undefined
  }
  ot.set(e, {
    startedAt: n
  })
}
function at(e) {
  var t = ot.get(e)
  var n = Date.now()
  if (t) {
    if (!t.stoppedAt) {
      t.stoppedAt = n
    }
  }
}
function st(e) {
  var t = ot.get(e)
  var n = Date.now()
  if (t) {
    if (t.stoppedAt) {
      ot.delete(e)
    } else {
      t.startedAt = n
    }
  }
}
function ct(e) {
  var t = ot.get(e)
  return t ? ((t.stoppedAt || Date.now()) - t.startedAt) / 1e3 : 0
}
function lt(e) {
  var t = arguments.length > 1 && undefined !== arguments[1] ? arguments[1] : 2
  return ct(e).toFixed(t)
}
function ut(e) {
  var t = arguments.length > 1 && undefined !== arguments[1] ? arguments[1] : 2
  return Number(ct(e).toFixed(t))
}
export { Ne }
export { Re }
export { ke }
export { xe }
export { De }
export { Me }
export { Le }
export { We }
export { Ue }
export { He }
export { Ve }
export { ze }
export { Ye }
export { Ke }
export { qe }
export { Xe }
export { Qe }
export { Ze }
export { Je }
export { $e }
export { et }
export { tt }
export { nt }
export { rt }
export { it }
export { at }
export { st }
export { ct }
export { lt }
export { ut }
