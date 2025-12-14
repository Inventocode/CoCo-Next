/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2390
 */

"use strict"

var /* [auto-meaningful-name] */require$_2391$Buffer = require("./2391").Buffer
var i = require$_2391$Buffer.isEncoding || function (e) {
  switch ((e = "" + e) && e.toLowerCase()) {
    case "hex":
    case "utf8":
    case "utf-8":
    case "ascii":
    case "binary":
    case "base64":
    case "ucs2":
    case "ucs-2":
    case "utf16le":
    case "utf-16le":
    case "raw":
      return true
    default:
      return false
  }
}
function o(e) {
  var t
  switch (this.encoding = function (e) {
    var t = function (e) {
      if (!e) {
        return "utf8"
      }
      for (var t;;) {
        switch (e) {
          case "utf8":
          case "utf-8":
            return "utf8"
          case "ucs2":
          case "ucs-2":
          case "utf16le":
          case "utf-16le":
            return "utf16le"
          case "latin1":
          case "binary":
            return "latin1"
          case "base64":
          case "ascii":
          case "hex":
            return e
          default:
            if (t) {
              return
            }
            e = ("" + e).toLowerCase()
            t = true
        }
      }
    }(e)
    if ("string" !== typeof t && (require$_2391$Buffer.isEncoding === i || !i(e))) {
      throw new Error("Unknown encoding: " + e)
    }
    return t || e
  }(e), this.encoding) {
    case "utf16le":
      this.text = c
      this.end = u
      t = 4
      break
    case "utf8":
      this.fillLast = s
      t = 4
      break
    case "base64":
      this.text = l
      this.end = f
      t = 3
      break
    default:
      this.write = d
      return void (this.end = h)
  }
  this.lastNeed = 0
  this.lastTotal = 0
  this.lastChar = require$_2391$Buffer.allocUnsafe(t)
}
function a(e) {
  return e <= 127 ? 0 : e >> 5 === 6 ? 2 : e >> 4 === 14 ? 3 : e >> 3 === 30 ? 4 : e >> 6 === 2 ? -1 : -2
}
function s(e) {
  var t = this.lastTotal - this.lastNeed
  var n = function (e, t, n) {
    if (128 !== (192 & t[0])) {
      e.lastNeed = 0
      return "�"
    }
    if (e.lastNeed > 1 && t.length > 1) {
      if (128 !== (192 & t[1])) {
        e.lastNeed = 1
        return "�"
      }
      if (e.lastNeed > 2 && t.length > 2 && 128 !== (192 & t[2])) {
        e.lastNeed = 2
        return "�"
      }
    }
  }(this, e)
  return undefined !== n ? n : this.lastNeed <= e.length ? (e.copy(this.lastChar, t, 0, this.lastNeed), this.lastChar.toString(this.encoding, 0, this.lastTotal)) : (e.copy(this.lastChar, t, 0, e.length), void (this.lastNeed -= e.length))
}
function c(e, t) {
  if ((e.length - t) % 2 === 0) {
    var n = e.toString("utf16le", t)
    if (n) {
      var r = n.charCodeAt(n.length - 1)
      if (r >= 55296 && r <= 56319) {
        this.lastNeed = 2
        this.lastTotal = 4
        this.lastChar[0] = e[e.length - 2]
        this.lastChar[1] = e[e.length - 1]
        return n.slice(0, -1)
      }
    }
    return n
  }
  this.lastNeed = 1
  this.lastTotal = 2
  this.lastChar[0] = e[e.length - 1]
  return e.toString("utf16le", t, e.length - 1)
}
function u(e) {
  var t = e && e.length ? this.write(e) : ""
  if (this.lastNeed) {
    var n = this.lastTotal - this.lastNeed
    return t + this.lastChar.toString("utf16le", 0, n)
  }
  return t
}
function l(e, t) {
  var n = (e.length - t) % 3
  return 0 === n ? e.toString("base64", t) : (this.lastNeed = 3 - n, this.lastTotal = 3, 1 === n ? this.lastChar[0] = e[e.length - 1] : (this.lastChar[0] = e[e.length - 2], this.lastChar[1] = e[e.length - 1]), e.toString("base64", t, e.length - n))
}
function f(e) {
  var t = e && e.length ? this.write(e) : ""
  return this.lastNeed ? t + this.lastChar.toString("base64", 0, 3 - this.lastNeed) : t
}
function d(e) {
  return e.toString(this.encoding)
}
function h(e) {
  return e && e.length ? this.write(e) : ""
}
exports.StringDecoder = o
o.prototype.write = function (e) {
  if (0 === e.length) {
    return ""
  }
  var t
  var n
  if (this.lastNeed) {
    if (undefined === (t = this.fillLast(e))) {
      return ""
    }
    n = this.lastNeed
    this.lastNeed = 0
  } else {
    n = 0
  }
  return n < e.length ? t ? t + this.text(e, n) : this.text(e, n) : t || ""
}
o.prototype.end = function (e) {
  var t = e && e.length ? this.write(e) : ""
  return this.lastNeed ? t + "�" : t
}
o.prototype.text = function (e, t) {
  var n = function (e, t, n) {
    var r = t.length - 1
    if (r < n) {
      return 0
    }
    var i = a(t[r])
    if (i >= 0) {
      if (i > 0) {
        e.lastNeed = i - 1
      }
      return i
    }
    if (--r < n || -2 === i) {
      return 0
    }
    if ((i = a(t[r])) >= 0) {
      if (i > 0) {
        e.lastNeed = i - 2
      }
      return i
    }
    if (--r < n || -2 === i) {
      return 0
    }
    if ((i = a(t[r])) >= 0) {
      if (i > 0) {
        if (2 === i) {
          i = 0
        } else {
          e.lastNeed = i - 3
        }
      }
      return i
    }
    return 0
  }(this, e, t)
  if (!this.lastNeed) {
    return e.toString("utf8", t)
  }
  this.lastTotal = n
  var r = e.length - (n - this.lastNeed)
  e.copy(this.lastChar, 0, r)
  return e.toString("utf8", t, r)
}
o.prototype.fillLast = function (e) {
  if (this.lastNeed <= e.length) {
    e.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, this.lastNeed)
    return this.lastChar.toString(this.encoding, 0, this.lastTotal)
  }
  e.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, e.length)
  this.lastNeed -= e.length
}
