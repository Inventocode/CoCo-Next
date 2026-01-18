/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：596
 */

"use strict"

var r
var i
var o = require("../56")
var a = require("../167")
var s = require("../336")
var u = require("../597")
var c = require("../182/index")
var l = require("../108")
var d = require("../102")
var f = require("./743")
var h = require("./916")
var p = require("../227")
function m() {
  if ("undefined" !== typeof window) {
    return window.BigInt || null
  }
  if ("undefined" !== typeof global) {
    return global.BigInt || null
  }
  if ("undefined" !== typeof self) {
    return self.BigInt || null
  }
  throw new Error("Can't search globals for BigInt!")
}
function b(t) {
  if ("undefined" === typeof i) {
    i = m()
  }
  if (null === i) {
    throw new Error("BigInt is not supported!")
  }
  return i(t)
}
!function (t) {
  t[t.ALPHA = 0] = "ALPHA"
  t[t.LOWER = 1] = "LOWER"
  t[t.MIXED = 2] = "MIXED"
  t[t.PUNCT = 3] = "PUNCT"
  t[t.ALPHA_SHIFT = 4] = "ALPHA_SHIFT"
  t[t.PUNCT_SHIFT = 5] = "PUNCT_SHIFT"
}(r || (r = {}))
var g = function () {
  function t() {}
  t.decode = function (e, n) {
    var r = new l.a("")
    var /* [auto-meaningful-name] */a$a$ISO8859_1 = a.a.ISO8859_1
    r.enableDecoding(a$a$ISO8859_1)
    for (var c = 1, d = e[c++], f = new u.a(); c < e[0];) {
      switch (d) {
        case t.TEXT_COMPACTION_MODE_LATCH:
          c = t.textCompaction(e, c, r)
          break
        case t.BYTE_COMPACTION_MODE_LATCH:
        case t.BYTE_COMPACTION_MODE_LATCH_6:
          c = t.byteCompaction(d, e, a$a$ISO8859_1, c, r)
          break
        case t.MODE_SHIFT_TO_BYTE_COMPACTION_MODE:
          r.append(e[c++])
          break
        case t.NUMERIC_COMPACTION_MODE_LATCH:
          c = t.numericCompaction(e, c, r)
          break
        case t.ECI_CHARSET:
          a.a.getCharacterSetECIByValue(e[c++])
          break
        case t.ECI_GENERAL_PURPOSE:
          c += 2
          break
        case t.ECI_USER_DEFINED:
          c++
          break
        case t.BEGIN_MACRO_PDF417_CONTROL_BLOCK:
          c = t.decodeMacroBlock(e, c, f)
          break
        case t.BEGIN_MACRO_PDF417_OPTIONAL_FIELD:
        case t.MACRO_PDF417_TERMINATOR:
          throw new o.a()
        default:
          c--
          c = t.textCompaction(e, c, r)
      }
      if (!(c < e.length)) {
        throw o.a.getFormatInstance()
      }
      d = e[c++]
    }
    if (0 === r.length()) {
      throw o.a.getFormatInstance()
    }
    var h = new s.a(null, r.toString(), null, n)
    h.setOther(f)
    return h
  }
  t.decodeMacroBlock = function (e, n, r) {
    if (n + t.NUMBER_OF_SEQUENCE_CODEWORDS > e[0]) {
      throw o.a.getFormatInstance()
    }
    for (var i = new Int32Array(t.NUMBER_OF_SEQUENCE_CODEWORDS), a = 0; a < t.NUMBER_OF_SEQUENCE_CODEWORDS; a++, n++) {
      i[a] = e[n]
    }
    r.setSegmentIndex(d.a.parseInt(t.decodeBase900toBase10(i, t.NUMBER_OF_SEQUENCE_CODEWORDS)))
    var s = new l.a()
    n = t.textCompaction(e, n, s)
    r.setFileId(s.toString())
    var u = -1
    for (e[n] === t.BEGIN_MACRO_PDF417_OPTIONAL_FIELD && (u = n + 1); n < e[0];) {
      switch (e[n]) {
        case t.BEGIN_MACRO_PDF417_OPTIONAL_FIELD:
          switch (e[++n]) {
            case t.MACRO_PDF417_OPTIONAL_FIELD_FILE_NAME:
              var h = new l.a()
              n = t.textCompaction(e, n + 1, h)
              r.setFileName(h.toString())
              break
            case t.MACRO_PDF417_OPTIONAL_FIELD_SENDER:
              var p = new l.a()
              n = t.textCompaction(e, n + 1, p)
              r.setSender(p.toString())
              break
            case t.MACRO_PDF417_OPTIONAL_FIELD_ADDRESSEE:
              var m = new l.a()
              n = t.textCompaction(e, n + 1, m)
              r.setAddressee(m.toString())
              break
            case t.MACRO_PDF417_OPTIONAL_FIELD_SEGMENT_COUNT:
              var b = new l.a()
              n = t.numericCompaction(e, n + 1, b)
              r.setSegmentCount(d.a.parseInt(b.toString()))
              break
            case t.MACRO_PDF417_OPTIONAL_FIELD_TIME_STAMP:
              var g = new l.a()
              n = t.numericCompaction(e, n + 1, g)
              r.setTimestamp(f.a.parseLong(g.toString()))
              break
            case t.MACRO_PDF417_OPTIONAL_FIELD_CHECKSUM:
              var v = new l.a()
              n = t.numericCompaction(e, n + 1, v)
              r.setChecksum(d.a.parseInt(v.toString()))
              break
            case t.MACRO_PDF417_OPTIONAL_FIELD_FILE_SIZE:
              var _ = new l.a()
              n = t.numericCompaction(e, n + 1, _)
              r.setFileSize(f.a.parseLong(_.toString()))
              break
            default:
              throw o.a.getFormatInstance()
          }
          break
        case t.MACRO_PDF417_TERMINATOR:
          n++
          r.setLastSegment(true)
          break
        default:
          throw o.a.getFormatInstance()
      }
    }
    if (-1 !== u) {
      var y = n - u
      if (r.isLastSegment()) {
        y--
      }
      r.setOptionalData(c.a.copyOfRange(e, u, u + y))
    }
    return n
  }
  t.textCompaction = function (e, n, r) {
    for (var i = new Int32Array(2 * (e[0] - n)), o = new Int32Array(2 * (e[0] - n)), a = 0, s = false; n < e[0] && !s;) {
      var u = e[n++]
      if (u < t.TEXT_COMPACTION_MODE_LATCH) {
        i[a] = u / 30
        i[a + 1] = u % 30
        a += 2
      } else {
        switch (u) {
          case t.TEXT_COMPACTION_MODE_LATCH:
            i[a++] = t.TEXT_COMPACTION_MODE_LATCH
            break
          case t.BYTE_COMPACTION_MODE_LATCH:
          case t.BYTE_COMPACTION_MODE_LATCH_6:
          case t.NUMERIC_COMPACTION_MODE_LATCH:
          case t.BEGIN_MACRO_PDF417_CONTROL_BLOCK:
          case t.BEGIN_MACRO_PDF417_OPTIONAL_FIELD:
          case t.MACRO_PDF417_TERMINATOR:
            n--
            s = true
            break
          case t.MODE_SHIFT_TO_BYTE_COMPACTION_MODE:
            i[a] = t.MODE_SHIFT_TO_BYTE_COMPACTION_MODE
            u = e[n++]
            o[a] = u
            a++
        }
      }
    }
    t.decodeTextCompaction(i, o, a, r)
    return n
  }
  t.decodeTextCompaction = function (e, n, i, o) {
    for (var /* [auto-meaningful-name] */r$ALPHA = r.ALPHA, /* [auto-meaningful-name] */r$ALPHA1 = r.ALPHA, u = 0; u < i;) {
      var c = e[u]
      var l = ""
      switch (r$ALPHA) {
        case r.ALPHA:
          if (c < 26) {
            l = String.fromCharCode(65 + c)
          } else {
            switch (c) {
              case 26:
                l = " "
                break
              case t.LL:
                r$ALPHA = r.LOWER
                break
              case t.ML:
                r$ALPHA = r.MIXED
                break
              case t.PS:
                r$ALPHA1 = r$ALPHA
                r$ALPHA = r.PUNCT_SHIFT
                break
              case t.MODE_SHIFT_TO_BYTE_COMPACTION_MODE:
                o.append(n[u])
                break
              case t.TEXT_COMPACTION_MODE_LATCH:
                r$ALPHA = r.ALPHA
            }
          }
          break
        case r.LOWER:
          if (c < 26) {
            l = String.fromCharCode(97 + c)
          } else {
            switch (c) {
              case 26:
                l = " "
                break
              case t.AS:
                r$ALPHA1 = r$ALPHA
                r$ALPHA = r.ALPHA_SHIFT
                break
              case t.ML:
                r$ALPHA = r.MIXED
                break
              case t.PS:
                r$ALPHA1 = r$ALPHA
                r$ALPHA = r.PUNCT_SHIFT
                break
              case t.MODE_SHIFT_TO_BYTE_COMPACTION_MODE:
                o.append(n[u])
                break
              case t.TEXT_COMPACTION_MODE_LATCH:
                r$ALPHA = r.ALPHA
            }
          }
          break
        case r.MIXED:
          if (c < t.PL) {
            l = t.MIXED_CHARS[c]
          } else {
            switch (c) {
              case t.PL:
                r$ALPHA = r.PUNCT
                break
              case 26:
                l = " "
                break
              case t.LL:
                r$ALPHA = r.LOWER
                break
              case t.AL:
                r$ALPHA = r.ALPHA
                break
              case t.PS:
                r$ALPHA1 = r$ALPHA
                r$ALPHA = r.PUNCT_SHIFT
                break
              case t.MODE_SHIFT_TO_BYTE_COMPACTION_MODE:
                o.append(n[u])
                break
              case t.TEXT_COMPACTION_MODE_LATCH:
                r$ALPHA = r.ALPHA
            }
          }
          break
        case r.PUNCT:
          if (c < t.PAL) {
            l = t.PUNCT_CHARS[c]
          } else {
            switch (c) {
              case t.PAL:
                r$ALPHA = r.ALPHA
                break
              case t.MODE_SHIFT_TO_BYTE_COMPACTION_MODE:
                o.append(n[u])
                break
              case t.TEXT_COMPACTION_MODE_LATCH:
                r$ALPHA = r.ALPHA
            }
          }
          break
        case r.ALPHA_SHIFT:
          if (r$ALPHA = r$ALPHA1, c < 26) {
            l = String.fromCharCode(65 + c)
          } else {
            switch (c) {
              case 26:
                l = " "
                break
              case t.TEXT_COMPACTION_MODE_LATCH:
                r$ALPHA = r.ALPHA
            }
          }
          break
        case r.PUNCT_SHIFT:
          if (r$ALPHA = r$ALPHA1, c < t.PAL) {
            l = t.PUNCT_CHARS[c]
          } else {
            switch (c) {
              case t.PAL:
                r$ALPHA = r.ALPHA
                break
              case t.MODE_SHIFT_TO_BYTE_COMPACTION_MODE:
                o.append(n[u])
                break
              case t.TEXT_COMPACTION_MODE_LATCH:
                r$ALPHA = r.ALPHA
            }
          }
      }
      if ("" !== l) {
        o.append(l)
      }
      u++
    }
  }
  t.byteCompaction = function (e, n, r, i, o) {
    var a = new h.a()
    var s = 0
    var u = 0
    var c = false
    switch (e) {
      case t.BYTE_COMPACTION_MODE_LATCH:
        for (var l = new Int32Array(6), d = n[i++]; i < n[0] && !c;) {
          switch (l[s++] = d, u = 900 * u + d, d = n[i++]) {
            case t.TEXT_COMPACTION_MODE_LATCH:
            case t.BYTE_COMPACTION_MODE_LATCH:
            case t.NUMERIC_COMPACTION_MODE_LATCH:
            case t.BYTE_COMPACTION_MODE_LATCH_6:
            case t.BEGIN_MACRO_PDF417_CONTROL_BLOCK:
            case t.BEGIN_MACRO_PDF417_OPTIONAL_FIELD:
            case t.MACRO_PDF417_TERMINATOR:
              i--
              c = true
              break
            default:
              if (s % 5 === 0 && s > 0) {
                for (var f = 0; f < 6; ++f) {
                  a.write(Number(b(u) >> b(8 * (5 - f))))
                }
                u = 0
                s = 0
              }
          }
        }
        if (i === n[0] && d < t.TEXT_COMPACTION_MODE_LATCH) {
          l[s++] = d
        }
        for (var m = 0; m < s; m++) {
          a.write(l[m])
        }
        break
      case t.BYTE_COMPACTION_MODE_LATCH_6:
        for (; i < n[0] && !c;) {
          var g = n[i++]
          if (g < t.TEXT_COMPACTION_MODE_LATCH) {
            s++
            u = 900 * u + g
          } else {
            switch (g) {
              case t.TEXT_COMPACTION_MODE_LATCH:
              case t.BYTE_COMPACTION_MODE_LATCH:
              case t.NUMERIC_COMPACTION_MODE_LATCH:
              case t.BYTE_COMPACTION_MODE_LATCH_6:
              case t.BEGIN_MACRO_PDF417_CONTROL_BLOCK:
              case t.BEGIN_MACRO_PDF417_OPTIONAL_FIELD:
              case t.MACRO_PDF417_TERMINATOR:
                i--
                c = true
            }
          }
          if (s % 5 === 0 && s > 0) {
            for (f = 0; f < 6; ++f) {
              a.write(Number(b(u) >> b(8 * (5 - f))))
            }
            u = 0
            s = 0
          }
        }
    }
    o.append(p.a.decode(a.toByteArray(), r))
    return i
  }
  t.numericCompaction = function (e, n, r) {
    for (var i = 0, o = false, a = new Int32Array(t.MAX_NUMERIC_CODEWORDS); n < e[0] && !o;) {
      var s = e[n++]
      if (n === e[0]) {
        o = true
      }
      if (s < t.TEXT_COMPACTION_MODE_LATCH) {
        a[i] = s
        i++
      } else {
        switch (s) {
          case t.TEXT_COMPACTION_MODE_LATCH:
          case t.BYTE_COMPACTION_MODE_LATCH:
          case t.BYTE_COMPACTION_MODE_LATCH_6:
          case t.BEGIN_MACRO_PDF417_CONTROL_BLOCK:
          case t.BEGIN_MACRO_PDF417_OPTIONAL_FIELD:
          case t.MACRO_PDF417_TERMINATOR:
            n--
            o = true
        }
      }
      if ((i % t.MAX_NUMERIC_CODEWORDS === 0 || s === t.NUMERIC_COMPACTION_MODE_LATCH || o) && i > 0) {
        r.append(t.decodeBase900toBase10(a, i))
        i = 0
      }
    }
    return n
  }
  t.decodeBase900toBase10 = function (e, n) {
    for (var r = b(0), i = 0; i < n; i++) {
      r += t.EXP900[n - i - 1] * b(e[i])
    }
    var a = r.toString()
    if ("1" !== a.charAt(0)) {
      throw new o.a()
    }
    return a.substring(1)
  }
  t.TEXT_COMPACTION_MODE_LATCH = 900
  t.BYTE_COMPACTION_MODE_LATCH = 901
  t.NUMERIC_COMPACTION_MODE_LATCH = 902
  t.BYTE_COMPACTION_MODE_LATCH_6 = 924
  t.ECI_USER_DEFINED = 925
  t.ECI_GENERAL_PURPOSE = 926
  t.ECI_CHARSET = 927
  t.BEGIN_MACRO_PDF417_CONTROL_BLOCK = 928
  t.BEGIN_MACRO_PDF417_OPTIONAL_FIELD = 923
  t.MACRO_PDF417_TERMINATOR = 922
  t.MODE_SHIFT_TO_BYTE_COMPACTION_MODE = 913
  t.MAX_NUMERIC_CODEWORDS = 15
  t.MACRO_PDF417_OPTIONAL_FIELD_FILE_NAME = 0
  t.MACRO_PDF417_OPTIONAL_FIELD_SEGMENT_COUNT = 1
  t.MACRO_PDF417_OPTIONAL_FIELD_TIME_STAMP = 2
  t.MACRO_PDF417_OPTIONAL_FIELD_SENDER = 3
  t.MACRO_PDF417_OPTIONAL_FIELD_ADDRESSEE = 4
  t.MACRO_PDF417_OPTIONAL_FIELD_FILE_SIZE = 5
  t.MACRO_PDF417_OPTIONAL_FIELD_CHECKSUM = 6
  t.PL = 25
  t.LL = 27
  t.AS = 27
  t.ML = 28
  t.AL = 28
  t.PS = 29
  t.PAL = 29
  t.PUNCT_CHARS = ";<>@[\\]_`~!\r\t,:\n-.$/\"|*()?{}'"
  t.MIXED_CHARS = "0123456789&\r\t,:#-.$/+%*=^"
  t.EXP900 = m() ? function () {
    var t = []
    t[0] = b(1)
    var e = b(900)
    t[1] = e
    for (var n = 2; n < 16; n++) {
      t[n] = t[n - 1] * e
    }
    return t
  }() : []
  t.NUMBER_OF_SEQUENCE_CODEWORDS = 2
  return t
}()
exports.a = g
