/** 
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：592
 */

"use strict";

(function (t) {
  var n
  var o
  var i = require("../56")
  var a = require("../166")
  var u = require("../334")
  var s = require("../593")
  var c = require("../181/index")
  var f = require("../109")
  var h = require("../105")
  var l = require("./734")
  var d = require("./903")
  var p = require("../226")
  function g() {
    if ("undefined" !== typeof window) {
      return window.BigInt || null
    }
    if ("undefined" !== typeof t) {
      return t.BigInt || null
    }
    if ("undefined" !== typeof self) {
      return self.BigInt || null
    }
    throw new Error("Can't search globals for BigInt!")
  }
  function y(t) {
    if ("undefined" === typeof o) {
      o = g()
    }
    if (null === o) {
      throw new Error("BigInt is not supported!")
    }
    return o(t)
  }
  !function (t) {
    t[t.ALPHA = 0] = "ALPHA"
    t[t.LOWER = 1] = "LOWER"
    t[t.MIXED = 2] = "MIXED"
    t[t.PUNCT = 3] = "PUNCT"
    t[t.ALPHA_SHIFT = 4] = "ALPHA_SHIFT"
    t[t.PUNCT_SHIFT = 5] = "PUNCT_SHIFT"
  }(n || (n = {}))
  var w = function () {
    function t() {}
    t.decode = function (e, r) {
      var n = new f.a("")
      var a$a$ISO8859_1 = a.a.ISO8859_1
      n.enableDecoding(a$a$ISO8859_1)
      for (var c = 1, h = e[c++], l = new s.a(); c < e[0];) {
        switch (h) {
          case t.TEXT_COMPACTION_MODE_LATCH:
            c = t.textCompaction(e, c, n)
            break
          case t.BYTE_COMPACTION_MODE_LATCH:
          case t.BYTE_COMPACTION_MODE_LATCH_6:
            c = t.byteCompaction(h, e, a$a$ISO8859_1, c, n)
            break
          case t.MODE_SHIFT_TO_BYTE_COMPACTION_MODE:
            n.append(e[c++])
            break
          case t.NUMERIC_COMPACTION_MODE_LATCH:
            c = t.numericCompaction(e, c, n)
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
            c = t.decodeMacroBlock(e, c, l)
            break
          case t.BEGIN_MACRO_PDF417_OPTIONAL_FIELD:
          case t.MACRO_PDF417_TERMINATOR:
            throw new i.a()
          default:
            c--
            c = t.textCompaction(e, c, n)
        }
        if (!(c < e.length)) {
          throw i.a.getFormatInstance()
        }
        h = e[c++]
      }
      if (0 === n.length()) {
        throw i.a.getFormatInstance()
      }
      var d = new u.a(null, n.toString(), null, r)
      d.setOther(l)
      return d
    }
    t.decodeMacroBlock = function (e, r, n) {
      if (r + t.NUMBER_OF_SEQUENCE_CODEWORDS > e[0]) {
        throw i.a.getFormatInstance()
      }
      for (var o = new Int32Array(t.NUMBER_OF_SEQUENCE_CODEWORDS), a = 0; a < t.NUMBER_OF_SEQUENCE_CODEWORDS; a++, r++) {
        o[a] = e[r]
      }
      n.setSegmentIndex(h.a.parseInt(t.decodeBase900toBase10(o, t.NUMBER_OF_SEQUENCE_CODEWORDS)))
      var u = new f.a()
      r = t.textCompaction(e, r, u)
      n.setFileId(u.toString())
      var s = -1
      for (e[r] === t.BEGIN_MACRO_PDF417_OPTIONAL_FIELD && (s = r + 1); r < e[0];) {
        switch (e[r]) {
          case t.BEGIN_MACRO_PDF417_OPTIONAL_FIELD:
            switch (e[++r]) {
              case t.MACRO_PDF417_OPTIONAL_FIELD_FILE_NAME:
                var d = new f.a()
                r = t.textCompaction(e, r + 1, d)
                n.setFileName(d.toString())
                break
              case t.MACRO_PDF417_OPTIONAL_FIELD_SENDER:
                var p = new f.a()
                r = t.textCompaction(e, r + 1, p)
                n.setSender(p.toString())
                break
              case t.MACRO_PDF417_OPTIONAL_FIELD_ADDRESSEE:
                var g = new f.a()
                r = t.textCompaction(e, r + 1, g)
                n.setAddressee(g.toString())
                break
              case t.MACRO_PDF417_OPTIONAL_FIELD_SEGMENT_COUNT:
                var y = new f.a()
                r = t.numericCompaction(e, r + 1, y)
                n.setSegmentCount(h.a.parseInt(y.toString()))
                break
              case t.MACRO_PDF417_OPTIONAL_FIELD_TIME_STAMP:
                var w = new f.a()
                r = t.numericCompaction(e, r + 1, w)
                n.setTimestamp(l.a.parseLong(w.toString()))
                break
              case t.MACRO_PDF417_OPTIONAL_FIELD_CHECKSUM:
                var v = new f.a()
                r = t.numericCompaction(e, r + 1, v)
                n.setChecksum(h.a.parseInt(v.toString()))
                break
              case t.MACRO_PDF417_OPTIONAL_FIELD_FILE_SIZE:
                var _ = new f.a()
                r = t.numericCompaction(e, r + 1, _)
                n.setFileSize(l.a.parseLong(_.toString()))
                break
              default:
                throw i.a.getFormatInstance()
            }
            break
          case t.MACRO_PDF417_TERMINATOR:
            r++
            n.setLastSegment(true)
            break
          default:
            throw i.a.getFormatInstance()
        }
      }
      if (-1 !== s) {
        var m = r - s
        if (n.isLastSegment()) {
          m--
        }
        n.setOptionalData(c.a.copyOfRange(e, s, s + m))
      }
      return r
    }
    t.textCompaction = function (e, r, n) {
      for (var o = new Int32Array(2 * (e[0] - r)), i = new Int32Array(2 * (e[0] - r)), a = 0, u = false; r < e[0] && !u;) {
        var s = e[r++]
        if (s < t.TEXT_COMPACTION_MODE_LATCH) {
          o[a] = s / 30
          o[a + 1] = s % 30
          a += 2
        } else {
          switch (s) {
            case t.TEXT_COMPACTION_MODE_LATCH:
              o[a++] = t.TEXT_COMPACTION_MODE_LATCH
              break
            case t.BYTE_COMPACTION_MODE_LATCH:
            case t.BYTE_COMPACTION_MODE_LATCH_6:
            case t.NUMERIC_COMPACTION_MODE_LATCH:
            case t.BEGIN_MACRO_PDF417_CONTROL_BLOCK:
            case t.BEGIN_MACRO_PDF417_OPTIONAL_FIELD:
            case t.MACRO_PDF417_TERMINATOR:
              r--
              u = true
              break
            case t.MODE_SHIFT_TO_BYTE_COMPACTION_MODE:
              o[a] = t.MODE_SHIFT_TO_BYTE_COMPACTION_MODE
              s = e[r++]
              i[a] = s
              a++
          }
        }
      }
      t.decodeTextCompaction(o, i, a, n)
      return r
    }
    t.decodeTextCompaction = function (e, r, o, i) {
      for (var _n$ALPHA = n.ALPHA, n$ALPHA = n.ALPHA, s = 0; s < o;) {
        var c = e[s]
        var f = ""
        switch (_n$ALPHA) {
          case n.ALPHA:
            if (c < 26) {
              f = String.fromCharCode(65 + c)
            } else {
              switch (c) {
                case 26:
                  f = " "
                  break
                case t.LL:
                  _n$ALPHA = n.LOWER
                  break
                case t.ML:
                  _n$ALPHA = n.MIXED
                  break
                case t.PS:
                  n$ALPHA = _n$ALPHA
                  _n$ALPHA = n.PUNCT_SHIFT
                  break
                case t.MODE_SHIFT_TO_BYTE_COMPACTION_MODE:
                  i.append(r[s])
                  break
                case t.TEXT_COMPACTION_MODE_LATCH:
                  _n$ALPHA = n.ALPHA
              }
            }
            break
          case n.LOWER:
            if (c < 26) {
              f = String.fromCharCode(97 + c)
            } else {
              switch (c) {
                case 26:
                  f = " "
                  break
                case t.AS:
                  n$ALPHA = _n$ALPHA
                  _n$ALPHA = n.ALPHA_SHIFT
                  break
                case t.ML:
                  _n$ALPHA = n.MIXED
                  break
                case t.PS:
                  n$ALPHA = _n$ALPHA
                  _n$ALPHA = n.PUNCT_SHIFT
                  break
                case t.MODE_SHIFT_TO_BYTE_COMPACTION_MODE:
                  i.append(r[s])
                  break
                case t.TEXT_COMPACTION_MODE_LATCH:
                  _n$ALPHA = n.ALPHA
              }
            }
            break
          case n.MIXED:
            if (c < t.PL) {
              f = t.MIXED_CHARS[c]
            } else {
              switch (c) {
                case t.PL:
                  _n$ALPHA = n.PUNCT
                  break
                case 26:
                  f = " "
                  break
                case t.LL:
                  _n$ALPHA = n.LOWER
                  break
                case t.AL:
                  _n$ALPHA = n.ALPHA
                  break
                case t.PS:
                  n$ALPHA = _n$ALPHA
                  _n$ALPHA = n.PUNCT_SHIFT
                  break
                case t.MODE_SHIFT_TO_BYTE_COMPACTION_MODE:
                  i.append(r[s])
                  break
                case t.TEXT_COMPACTION_MODE_LATCH:
                  _n$ALPHA = n.ALPHA
              }
            }
            break
          case n.PUNCT:
            if (c < t.PAL) {
              f = t.PUNCT_CHARS[c]
            } else {
              switch (c) {
                case t.PAL:
                  _n$ALPHA = n.ALPHA
                  break
                case t.MODE_SHIFT_TO_BYTE_COMPACTION_MODE:
                  i.append(r[s])
                  break
                case t.TEXT_COMPACTION_MODE_LATCH:
                  _n$ALPHA = n.ALPHA
              }
            }
            break
          case n.ALPHA_SHIFT:
            if (_n$ALPHA = n$ALPHA, c < 26) {
              f = String.fromCharCode(65 + c)
            } else {
              switch (c) {
                case 26:
                  f = " "
                  break
                case t.TEXT_COMPACTION_MODE_LATCH:
                  _n$ALPHA = n.ALPHA
              }
            }
            break
          case n.PUNCT_SHIFT:
            if (_n$ALPHA = n$ALPHA, c < t.PAL) {
              f = t.PUNCT_CHARS[c]
            } else {
              switch (c) {
                case t.PAL:
                  _n$ALPHA = n.ALPHA
                  break
                case t.MODE_SHIFT_TO_BYTE_COMPACTION_MODE:
                  i.append(r[s])
                  break
                case t.TEXT_COMPACTION_MODE_LATCH:
                  _n$ALPHA = n.ALPHA
              }
            }
        }
        if ("" !== f) {
          i.append(f)
        }
        s++
      }
    }
    t.byteCompaction = function (e, r, n, o, i) {
      var a = new d.a()
      var u = 0
      var s = 0
      var c = false
      switch (e) {
        case t.BYTE_COMPACTION_MODE_LATCH:
          for (var f = new Int32Array(6), h = r[o++]; o < r[0] && !c;) {
            switch (f[u++] = h, s = 900 * s + h, h = r[o++]) {
              case t.TEXT_COMPACTION_MODE_LATCH:
              case t.BYTE_COMPACTION_MODE_LATCH:
              case t.NUMERIC_COMPACTION_MODE_LATCH:
              case t.BYTE_COMPACTION_MODE_LATCH_6:
              case t.BEGIN_MACRO_PDF417_CONTROL_BLOCK:
              case t.BEGIN_MACRO_PDF417_OPTIONAL_FIELD:
              case t.MACRO_PDF417_TERMINATOR:
                o--
                c = true
                break
              default:
                if (u % 5 === 0 && u > 0) {
                  for (var l = 0; l < 6; ++l) {
                    a.write(Number(y(s) >> y(8 * (5 - l))))
                  }
                  s = 0
                  u = 0
                }
            }
          }
          if (o === r[0] && h < t.TEXT_COMPACTION_MODE_LATCH) {
            f[u++] = h
          }
          for (var g = 0; g < u; g++) {
            a.write(f[g])
          }
          break
        case t.BYTE_COMPACTION_MODE_LATCH_6:
          for (; o < r[0] && !c;) {
            var w = r[o++]
            if (w < t.TEXT_COMPACTION_MODE_LATCH) {
              u++
              s = 900 * s + w
            } else {
              switch (w) {
                case t.TEXT_COMPACTION_MODE_LATCH:
                case t.BYTE_COMPACTION_MODE_LATCH:
                case t.NUMERIC_COMPACTION_MODE_LATCH:
                case t.BYTE_COMPACTION_MODE_LATCH_6:
                case t.BEGIN_MACRO_PDF417_CONTROL_BLOCK:
                case t.BEGIN_MACRO_PDF417_OPTIONAL_FIELD:
                case t.MACRO_PDF417_TERMINATOR:
                  o--
                  c = true
              }
            }
            if (u % 5 === 0 && u > 0) {
              for (l = 0; l < 6; ++l) {
                a.write(Number(y(s) >> y(8 * (5 - l))))
              }
              s = 0
              u = 0
            }
          }
      }
      i.append(p.a.decode(a.toByteArray(), n))
      return o
    }
    t.numericCompaction = function (e, r, n) {
      for (var o = 0, i = false, a = new Int32Array(t.MAX_NUMERIC_CODEWORDS); r < e[0] && !i;) {
        var u = e[r++]
        if (r === e[0]) {
          i = true
        }
        if (u < t.TEXT_COMPACTION_MODE_LATCH) {
          a[o] = u
          o++
        } else {
          switch (u) {
            case t.TEXT_COMPACTION_MODE_LATCH:
            case t.BYTE_COMPACTION_MODE_LATCH:
            case t.BYTE_COMPACTION_MODE_LATCH_6:
            case t.BEGIN_MACRO_PDF417_CONTROL_BLOCK:
            case t.BEGIN_MACRO_PDF417_OPTIONAL_FIELD:
            case t.MACRO_PDF417_TERMINATOR:
              r--
              i = true
          }
        }
        if ((o % t.MAX_NUMERIC_CODEWORDS === 0 || u === t.NUMERIC_COMPACTION_MODE_LATCH || i) && o > 0) {
          n.append(t.decodeBase900toBase10(a, o))
          o = 0
        }
      }
      return r
    }
    t.decodeBase900toBase10 = function (e, r) {
      for (var n = y(0), o = 0; o < r; o++) {
        n += t.EXP900[r - o - 1] * y(e[o])
      }
      var a = n.toString()
      if ("1" !== a.charAt(0)) {
        throw new i.a()
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
    t.EXP900 = g() ? function () {
      var t = []
      t[0] = y(1)
      var e = y(900)
      t[1] = e
      for (var r = 2; r < 16; r++) {
        t[r] = t[r - 1] * e
      }
      return t
    }() : []
    t.NUMBER_OF_SEQUENCE_CODEWORDS = 2
    return t
  }()
  exports.a = w
}).call(this, require("../../../../../../shared/1531/2584/710/251"))
