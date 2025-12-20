/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：611
 */

var i = require("../../207/787/572/index")
var o = require("../../207/787/819")
var a = require("../../207/787/399")
var s = require("../../207/787/204")
var c = require("../../207/787/711/index")
var u = require("../../207/787/180")
var l = require("./283")
var f = require("./284/index")
var d = require("./974/index")
!function (t, n) {
  "use strict"

  function h(e) {
    return e.split("")
  }
  function p(e, t) {
    return t.includes(e)
  }
  n = n && Object.prototype.hasOwnProperty.call(n, "default") ? n.default : n
  var _ = function (e) {
    l(n, e)
    var t = f(n)
    function n(e, r) {
      var i
      u(this, n);
      (i = t.call(this)).name = "DefaultsError"
      i.message = e
      i.defs = r
      return i
    }
    return n
  }(d(Error))
  function A(e, t, n) {
    if (true === e) {
      e = {}
    }
    var r = e || {}
    if (n) {
      for (var i in r) if (B(r, i) && !B(t, i)) {
        throw new _("`" + i + "` is not a supported option", t)
      }
    }
    for (var o in t) if (B(t, o)) {
      if (e && B(e, o)) {
        if ("ecma" === o) {
          var a = 0 | e[o]
          if (a > 5 && a < 2015) {
            a += 2009
          }
          r[o] = a
        } else {
          r[o] = e && B(e, o) ? e[o] : t[o]
        }
      } else {
        r[o] = t[o]
      }
    }
    return r
  }
  function g() {}
  function v() {
    return false
  }
  function m() {
    return true
  }
  function y() {
    return this
  }
  function b() {
    return null
  }
  var w = function () {
    function e(e, o, a) {
      var s
      var c = []
      var u = []
      function l() {
        var l = o(e[s], s)
        var f = l instanceof i
        if (f) {
          l = l.v
        }
        if (l instanceof n) {
          if ((l = l.v) instanceof r) {
            u.push.apply(u, a ? l.v.slice().reverse() : l.v)
          } else {
            u.push(l)
          }
        } else {
          if (l !== t) {
            if (l instanceof r) {
              c.push.apply(c, a ? l.v.slice().reverse() : l.v)
            } else {
              c.push(l)
            }
          }
        }
        return f
      }
      if (Array.isArray(e)) {
        if (a) {
          for (s = e.length; --s >= 0 && !l();) {
            ;
          }
          c.reverse()
          u.reverse()
        } else {
          for (s = 0; s < e.length && !l(); ++s) {
            ;
          }
        }
      } else {
        for (s in e) if (B(e, s) && l()) {
          break
        }
      }
      return u.concat(c)
    }
    e.at_top = function (e) {
      return new n(e)
    }
    e.splice = function (e) {
      return new r(e)
    }
    e.last = function (e) {
      return new i(e)
    }
    var t = e.skip = {}
    function n(e) {
      this.v = e
    }
    function r(e) {
      this.v = e
    }
    function i(e) {
      this.v = e
    }
    return e
  }()
  function E(e, t, n) {
    if (!n) {
      n = {}
    }
    if (t) {
      if (!n.start) {
        n.start = t.start
      }
      if (!n.end) {
        n.end = t.end
      }
    }
    return new e(n)
  }
  function x(e, t) {
    if (!e.includes(t)) {
      e.push(t)
    }
  }
  function C(e, t) {
    return e.replace(/{(.+?)}/g, function (e, n) {
      return t && t[n]
    })
  }
  function O(e, t) {
    for (var /* [auto-meaningful-name] */e$length = e.length; --e$length >= 0;) {
      if (e[e$length] === t) {
        e.splice(e$length, 1)
      }
    }
  }
  function k(e, t) {
    return e.length < 2 ? e.slice() : function e(n) {
      if (n.length <= 1) {
        return n
      }
      var r = Math.floor(n.length / 2)
      var i = n.slice(0, r)
      var o = n.slice(r)
      return function (e, n) {
        for (var r = [], i = 0, o = 0, a = 0; i < e.length && o < n.length;) {
          if (t(e[i], n[o]) <= 0) {
            r[a++] = e[i++]
          } else {
            r[a++] = n[o++]
          }
        }
        if (i < e.length) {
          r.push.apply(r, e.slice(i))
        }
        if (o < n.length) {
          r.push.apply(r, n.slice(o))
        }
        return r
      }(i = e(i), o = e(o))
    }(e)
  }
  function S(e) {
    if (!Array.isArray(e)) {
      e = e.split(" ")
    }
    return new Set(e)
  }
  function T(e, t, n) {
    if (e.has(t)) {
      e.get(t).push(n)
    } else {
      e.set(t, [n])
    }
  }
  function B(e, t) {
    return Object.prototype.hasOwnProperty.call(e, t)
  }
  function D(e, t) {
    return true === e || e instanceof RegExp && e.test(t)
  }
  var I = {
    "\n": "n",
    "\r": "r",
    " ": "u2028",
    " ": "u2029"
  }
  function R(e) {
    return e.replace(/[\n\r\u2028\u2029]/g, function (t, n) {
      return ("\\" != e[n - 1] || "\\" == e[n - 2] && !/(?:^|[^\\])(?:\\{2})*$/.test(e.slice(0, n - 1)) ? "\\" : "") + I[t]
    })
  }
  function F(e, t) {
    return e._annotations & t
  }
  function P(e, t) {
    e._annotations |= t
  }
  var /* [auto-meaningful-name] */BreakCaseCatchClassConstContinueDebuggerDefaultDeleteDoElseExportExtendsFinallyForFunctionIfInInstanceofLetNewReturnSwitchThrowTryTypeofVarVoidWhileWith = "break case catch class const continue debugger default delete do else export extends finally for function if in instanceof let new return switch throw try typeof var void while with"
  var /* [auto-meaningful-name] */FalseNullTrue = "false null true"
  var L = "enum implements import interface package private protected public static super this " + FalseNullTrue + " " + BreakCaseCatchClassConstContinueDebuggerDefaultDeleteDoElseExportExtendsFinallyForFunctionIfInInstanceofLetNewReturnSwitchThrowTryTypeofVarVoidWhileWith
  var /* [auto-meaningful-name] */ReturnNewDeleteThrowElseCaseYieldAwait = "return new delete throw else case yield await"
  BreakCaseCatchClassConstContinueDebuggerDefaultDeleteDoElseExportExtendsFinallyForFunctionIfInInstanceofLetNewReturnSwitchThrowTryTypeofVarVoidWhileWith = S(BreakCaseCatchClassConstContinueDebuggerDefaultDeleteDoElseExportExtendsFinallyForFunctionIfInInstanceofLetNewReturnSwitchThrowTryTypeofVarVoidWhileWith)
  L = S(L)
  ReturnNewDeleteThrowElseCaseYieldAwait = S(ReturnNewDeleteThrowElseCaseYieldAwait)
  FalseNullTrue = S(FalseNullTrue)
  var U = S(h("+-*&%=<>!?|~^"))
  var H = /[0-9a-f]/i
  var V = /^0x[0-9a-f]+$/i
  var G = /^0[0-7]+$/
  var z = /^0o[0-7]+$/i
  var Q = /^0b[01]+$/i
  var W = /^\d*\.?\d*(?:e[+-]?\d*(?:\d\.?|\.?\d)\d*)?$/i
  var K = /^(0[xob])?[0-9a-f]+n$/i
  var X = S(["in", "instanceof", "typeof", "new", "void", "delete", "++", "--", "+", "-", "!", "~", "&", "|", "^", "*", "**", "/", "%", ">>", "<<", ">>>", "<", ">", "<=", ">=", "==", "===", "!=", "!==", "?", "=", "+=", "-=", "/=", "*=", "**=", "%=", ">>=", "<<=", ">>>=", "|=", "^=", "&=", "&&", "??", "||"])
  var Y = S(h("  \n\r\t\f\u000b​               　﻿"))
  var q = S(h("\n\r  "))
  var $ = S(h(";]),:"))
  var J = S(h("[{(,;:"))
  var Z = S(h("[]{}(),;:"))
  var ee = {
    ID_Start: /[$A-Z_a-z\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u05D0-\u05EA\u05F0-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u08A0-\u08B4\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C60\u0C61\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1877\u1880-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1CE9-\u1CEC\u1CEE-\u1CF1\u1CF5\u1CF6\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2118-\u211D\u2124\u2126\u2128\u212A-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303C\u3041-\u3096\u309B-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FD5\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6EF\uA717-\uA71F\uA722-\uA788\uA78B-\uA7AD\uA7B0-\uA7B7\uA7F7-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD40-\uDD74\uDE80-\uDE9C\uDEA0-\uDED0\uDF00-\uDF1F\uDF30-\uDF4A\uDF50-\uDF75\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDD00-\uDD27\uDD30-\uDD63\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00\uDE10-\uDE13\uDE15-\uDE17\uDE19-\uDE33\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE4\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2]|\uD804[\uDC03-\uDC37\uDC83-\uDCAF\uDCD0-\uDCE8\uDD03-\uDD26\uDD50-\uDD72\uDD76\uDD83-\uDDB2\uDDC1-\uDDC4\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE2B\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEDE\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3D\uDF50\uDF5D-\uDF61]|\uD805[\uDC80-\uDCAF\uDCC4\uDCC5\uDCC7\uDD80-\uDDAE\uDDD8-\uDDDB\uDE00-\uDE2F\uDE44\uDE80-\uDEAA\uDF00-\uDF19]|\uD806[\uDCA0-\uDCDF\uDCFF\uDEC0-\uDEF8]|\uD808[\uDC00-\uDF99]|\uD809[\uDC00-\uDC6E\uDC80-\uDD43]|[\uD80C\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDED0-\uDEED\uDF00-\uDF2F\uDF40-\uDF43\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDF00-\uDF44\uDF50\uDF93-\uDF9F]|\uD82C[\uDC00\uDC01]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB]|\uD83A[\uDC00-\uDCC4]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1]|\uD87E[\uDC00-\uDE1D]/,
    ID_Continue: /(?:[$0-9A-Z_a-z\xAA\xB5\xB7\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0300-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u0483-\u0487\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u05D0-\u05EA\u05F0-\u05F2\u0610-\u061A\u0620-\u0669\u066E-\u06D3\u06D5-\u06DC\u06DF-\u06E8\u06EA-\u06FC\u06FF\u0710-\u074A\u074D-\u07B1\u07C0-\u07F5\u07FA\u0800-\u082D\u0840-\u085B\u08A0-\u08B4\u08E3-\u0963\u0966-\u096F\u0971-\u0983\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BC-\u09C4\u09C7\u09C8\u09CB-\u09CE\u09D7\u09DC\u09DD\u09DF-\u09E3\u09E6-\u09F1\u0A01-\u0A03\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A59-\u0A5C\u0A5E\u0A66-\u0A75\u0A81-\u0A83\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABC-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AD0\u0AE0-\u0AE3\u0AE6-\u0AEF\u0AF9\u0B01-\u0B03\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3C-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B56\u0B57\u0B5C\u0B5D\u0B5F-\u0B63\u0B66-\u0B6F\u0B71\u0B82\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD0\u0BD7\u0BE6-\u0BEF\u0C00-\u0C03\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C58-\u0C5A\u0C60-\u0C63\u0C66-\u0C6F\u0C81-\u0C83\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBC-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CDE\u0CE0-\u0CE3\u0CE6-\u0CEF\u0CF1\u0CF2\u0D01-\u0D03\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D-\u0D44\u0D46-\u0D48\u0D4A-\u0D4E\u0D57\u0D5F-\u0D63\u0D66-\u0D6F\u0D7A-\u0D7F\u0D82\u0D83\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DE6-\u0DEF\u0DF2\u0DF3\u0E01-\u0E3A\u0E40-\u0E4E\u0E50-\u0E59\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB9\u0EBB-\u0EBD\u0EC0-\u0EC4\u0EC6\u0EC8-\u0ECD\u0ED0-\u0ED9\u0EDC-\u0EDF\u0F00\u0F18\u0F19\u0F20-\u0F29\u0F35\u0F37\u0F39\u0F3E-\u0F47\u0F49-\u0F6C\u0F71-\u0F84\u0F86-\u0F97\u0F99-\u0FBC\u0FC6\u1000-\u1049\u1050-\u109D\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u135D-\u135F\u1369-\u1371\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1714\u1720-\u1734\u1740-\u1753\u1760-\u176C\u176E-\u1770\u1772\u1773\u1780-\u17D3\u17D7\u17DC\u17DD\u17E0-\u17E9\u180B-\u180D\u1810-\u1819\u1820-\u1877\u1880-\u18AA\u18B0-\u18F5\u1900-\u191E\u1920-\u192B\u1930-\u193B\u1946-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u19D0-\u19DA\u1A00-\u1A1B\u1A20-\u1A5E\u1A60-\u1A7C\u1A7F-\u1A89\u1A90-\u1A99\u1AA7\u1AB0-\u1ABD\u1B00-\u1B4B\u1B50-\u1B59\u1B6B-\u1B73\u1B80-\u1BF3\u1C00-\u1C37\u1C40-\u1C49\u1C4D-\u1C7D\u1CD0-\u1CD2\u1CD4-\u1CF6\u1CF8\u1CF9\u1D00-\u1DF5\u1DFC-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u200C\u200D\u203F\u2040\u2054\u2071\u207F\u2090-\u209C\u20D0-\u20DC\u20E1\u20E5-\u20F0\u2102\u2107\u210A-\u2113\u2115\u2118-\u211D\u2124\u2126\u2128\u212A-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D7F-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2DE0-\u2DFF\u3005-\u3007\u3021-\u302F\u3031-\u3035\u3038-\u303C\u3041-\u3096\u3099-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FD5\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA62B\uA640-\uA66F\uA674-\uA67D\uA67F-\uA6F1\uA717-\uA71F\uA722-\uA788\uA78B-\uA7AD\uA7B0-\uA7B7\uA7F7-\uA827\uA840-\uA873\uA880-\uA8C4\uA8D0-\uA8D9\uA8E0-\uA8F7\uA8FB\uA8FD\uA900-\uA92D\uA930-\uA953\uA960-\uA97C\uA980-\uA9C0\uA9CF-\uA9D9\uA9E0-\uA9FE\uAA00-\uAA36\uAA40-\uAA4D\uAA50-\uAA59\uAA60-\uAA76\uAA7A-\uAAC2\uAADB-\uAADD\uAAE0-\uAAEF\uAAF2-\uAAF6\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABEA\uABEC\uABED\uABF0-\uABF9\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE00-\uFE0F\uFE20-\uFE2F\uFE33\uFE34\uFE4D-\uFE4F\uFE70-\uFE74\uFE76-\uFEFC\uFF10-\uFF19\uFF21-\uFF3A\uFF3F\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD40-\uDD74\uDDFD\uDE80-\uDE9C\uDEA0-\uDED0\uDEE0\uDF00-\uDF1F\uDF30-\uDF4A\uDF50-\uDF7A\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDCA0-\uDCA9\uDD00-\uDD27\uDD30-\uDD63\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00-\uDE03\uDE05\uDE06\uDE0C-\uDE13\uDE15-\uDE17\uDE19-\uDE33\uDE38-\uDE3A\uDE3F\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE6\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2]|\uD804[\uDC00-\uDC46\uDC66-\uDC6F\uDC7F-\uDCBA\uDCD0-\uDCE8\uDCF0-\uDCF9\uDD00-\uDD34\uDD36-\uDD3F\uDD50-\uDD73\uDD76\uDD80-\uDDC4\uDDCA-\uDDCC\uDDD0-\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE37\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEEA\uDEF0-\uDEF9\uDF00-\uDF03\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3C-\uDF44\uDF47\uDF48\uDF4B-\uDF4D\uDF50\uDF57\uDF5D-\uDF63\uDF66-\uDF6C\uDF70-\uDF74]|\uD805[\uDC80-\uDCC5\uDCC7\uDCD0-\uDCD9\uDD80-\uDDB5\uDDB8-\uDDC0\uDDD8-\uDDDD\uDE00-\uDE40\uDE44\uDE50-\uDE59\uDE80-\uDEB7\uDEC0-\uDEC9\uDF00-\uDF19\uDF1D-\uDF2B\uDF30-\uDF39]|\uD806[\uDCA0-\uDCE9\uDCFF\uDEC0-\uDEF8]|\uD808[\uDC00-\uDF99]|\uD809[\uDC00-\uDC6E\uDC80-\uDD43]|[\uD80C\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDE60-\uDE69\uDED0-\uDEED\uDEF0-\uDEF4\uDF00-\uDF36\uDF40-\uDF43\uDF50-\uDF59\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDF00-\uDF44\uDF50-\uDF7E\uDF8F-\uDF9F]|\uD82C[\uDC00\uDC01]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99\uDC9D\uDC9E]|\uD834[\uDD65-\uDD69\uDD6D-\uDD72\uDD7B-\uDD82\uDD85-\uDD8B\uDDAA-\uDDAD\uDE42-\uDE44]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB\uDFCE-\uDFFF]|\uD836[\uDE00-\uDE36\uDE3B-\uDE6C\uDE75\uDE84\uDE9B-\uDE9F\uDEA1-\uDEAF]|\uD83A[\uDC00-\uDCC4\uDCD0-\uDCD6]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1]|\uD87E[\uDC00-\uDE1D]|\uDB40[\uDD00-\uDDEF])+/
  }
  function te(e, t) {
    if (ne(e.charCodeAt(t))) {
      if (re(e.charCodeAt(t + 1))) {
        return e.charAt(t) + e.charAt(t + 1)
      }
    } else if (re(e.charCodeAt(t)) && ne(e.charCodeAt(t - 1))) {
      return e.charAt(t - 1) + e.charAt(t)
    }
    return e.charAt(t)
  }
  function ne(e) {
    return e >= 55296 && e <= 56319
  }
  function re(e) {
    return e >= 56320 && e <= 57343
  }
  function ie(e) {
    return e >= 48 && e <= 57
  }
  function oe(e) {
    return ee.ID_Start.test(e)
  }
  function ae(e) {
    return ee.ID_Continue.test(e)
  }
  function se(e) {
    return /^[a-z_$][a-z0-9_$]*$/i.test(e)
  }
  function ce(e, t) {
    if (/^[a-z_$][a-z0-9_$]*$/i.test(e)) {
      return true
    }
    if (!t && /[\ud800-\udfff]/.test(e)) {
      return false
    }
    var n = ee.ID_Start.exec(e)
    return !(!n || 0 !== n.index) && (!(e = e.slice(n[0].length)) || !!(n = ee.ID_Continue.exec(e)) && n[0].length === e.length)
  }
  function ue(e) {
    var t = !(arguments.length > 1 && undefined !== arguments[1]) || arguments[1]
    if (!t && e.includes("e")) {
      return NaN
    }
    if (V.test(e)) {
      return parseInt(e.substr(2), 16)
    }
    if (G.test(e)) {
      return parseInt(e.substr(1), 8)
    }
    if (z.test(e)) {
      return parseInt(e.substr(2), 8)
    }
    if (Q.test(e)) {
      return parseInt(e.substr(2), 2)
    }
    if (W.test(e)) {
      return parseFloat(e)
    }
    var n = parseFloat(e)
    return n == e ? n : undefined
  }
  var le = function (e) {
    l(n, e)
    var t = f(n)
    function n(e, r, i, o, a) {
      var s
      u(this, n);
      (s = t.call(this)).name = "SyntaxError"
      s.message = e
      s.filename = r
      s.line = i
      s.col = o
      s.pos = a
      return s
    }
    return n
  }(d(Error))
  function fe(e, t, n, r, i) {
    throw new le(e, t, n, r, i)
  }
  function de(e, t, n) {
    return e.type == t && (null == n || e.value == n)
  }
  var he = {}
  function pe(e, t, n, r) {
    var i = {
      text: e,
      filename: t,
      pos: 0,
      tokpos: 0,
      line: 1,
      tokline: 0,
      col: 0,
      tokcol: 0,
      newline_before: false,
      regex_allowed: false,
      brace_counter: 0,
      template_braces: [],
      comments_before: [],
      directives: {},
      directive_stack: []
    }
    function o() {
      return te(i.text, i.pos)
    }
    function a(e, t) {
      var n = te(i.text, i.pos++)
      if (e && !n) {
        throw he
      }
      if (q.has(n)) {
        i.newline_before = i.newline_before || !t
        ++i.line
        i.col = 0
        if ("\r" == n && "\n" == o()) {
          ++i.pos
          n = "\n"
        }
      } else {
        if (n.length > 1) {
          ++i.pos
          ++i.col
        }
        ++i.col
      }
      return n
    }
    function s(e) {
      for (; e--;) {
        a()
      }
    }
    function c(e) {
      return i.text.substr(i.pos, e.length) == e
    }
    function u(e, t) {
      var n = i.text.indexOf(e, i.pos)
      if (t && -1 == n) {
        throw he
      }
      return n
    }
    function l() {
      i.tokline = i.line
      i.tokcol = i.col
      i.tokpos = i.pos
    }
    var f = false
    var d = null
    function h(n, r, o) {
      i.regex_allowed = "operator" == n && !Ae.has(r) || "keyword" == n && ReturnNewDeleteThrowElseCaseYieldAwait.has(r) || "punc" == n && J.has(r) || "arrow" == n
      if ("punc" == n && "." == r) {
        f = true
      } else {
        if (!o) {
          f = false
        }
      }
      var a = {
        type: n,
        value: r,
        line: i.tokline,
        col: i.tokcol,
        pos: i.tokpos,
        endline: i.line,
        endcol: i.col,
        endpos: i.pos,
        nlb: i.newline_before,
        file: t
      }
      if (/^(?:num|string|regexp)$/i.test(n)) {
        a.raw = e.substring(a.pos, a.endpos)
      }
      if (!o) {
        a.comments_before = i.comments_before
        a.comments_after = i.comments_before = []
      }
      i.newline_before = false
      a = new we(a)
      if (!o) {
        d = a
      }
      return a
    }
    function p() {
      for (; Y.has(o());) {
        a()
      }
    }
    function _(e) {
      fe(e, t, i.tokline, i.tokcol, i.tokpos)
    }
    function A(e) {
      var t = false
      var n = false
      var r = false
      var i = "." == e
      var s = false
      var c = false
      var u = function (e) {
        for (var t, n = "", r = 0; (t = o()) && e(t, r++);) {
          n += a()
        }
        return n
      }(function (o, a) {
        if (s) {
          return false
        }
        switch (o.charCodeAt(0)) {
          case 95:
            return c = true
          case 98:
          case 66:
            return r = true
          case 111:
          case 79:
          case 120:
          case 88:
            return !r && (r = true)
          case 101:
          case 69:
            return !!r || !t && (t = n = true)
          case 45:
            return n || 0 == a && !e
          case 43:
            return n
          case (n = false, 46):
            return !(i || r || t) && (i = true)
        }
        return "n" === o ? (s = true, true) : H.test(o)
      })
      if (e) {
        u = e + u
      }
      if (G.test(u) && T.has_directive("use strict")) {
        _("Legacy octal literals are not allowed in strict mode")
      }
      if (c) {
        if (u.endsWith("_")) {
          _("Numeric separators are not allowed at the end of numeric literals")
        } else {
          if (u.includes("__")) {
            _("Only one underscore is allowed as numeric separator")
          }
        }
        u = u.replace(/_/g, "")
      }
      if (u.endsWith("n")) {
        var l = u.slice(0, -1)
        var f = ue(l, V.test(l))
        if (!i && K.test(u) && !isNaN(f)) {
          return h("big_int", l)
        }
        _("Invalid or unexpected token")
      }
      var d = ue(u)
      if (!isNaN(d)) {
        return h("num", d)
      }
      _("Invalid syntax: " + u)
    }
    function g(e) {
      return e >= "0" && e <= "7"
    }
    function v(e, t, n) {
      var r
      var s = a(true, e)
      switch (s.charCodeAt(0)) {
        case 110:
          return "\n"
        case 114:
          return "\r"
        case 116:
          return "\t"
        case 98:
          return "\b"
        case 118:
          return "\u000b"
        case 102:
          return "\f"
        case 120:
          return String.fromCharCode(m(2, t))
        case 117:
          if ("{" == o()) {
            for (a(true), "}" === o() && _("Expecting hex-character between {}"); "0" == o();) {
              a(true)
            }
            var c
            var l = u("}", true) - i.pos
            if (l > 6 || (c = m(l, t)) > 1114111) {
              _("Unicode reference out of bounds")
            }
            a(true)
            return (r = c) > 65535 ? (r -= 65536, String.fromCharCode(55296 + (r >> 10)) + String.fromCharCode(r % 1024 + 56320)) : String.fromCharCode(r)
          }
          return String.fromCharCode(m(4, t))
        case 10:
          return ""
        case 13:
          if ("\n" == o()) {
            a(true, e)
            return ""
          }
      }
      return g(s) ? (n && t && ("0" === s && !g(o()) || _("Octal escape sequences are not allowed in template strings")), function (e, t) {
        var n = o()
        if (n >= "0" && n <= "7" && (e += a(true))[0] <= "3" && (n = o()) >= "0" && n <= "7") {
          e += a(true)
        }
        return "0" === e ? "\u0000" : (e.length > 0 && T.has_directive("use strict") && t && _("Legacy octal escape sequences are not allowed in strict mode"), String.fromCharCode(parseInt(e, 8)))
      }(s, t)) : s
    }
    function m(e, t) {
      for (var n = 0; e > 0; --e) {
        if (!t && isNaN(parseInt(o(), 16))) {
          return parseInt(n, 16) || ""
        }
        var r = a(true)
        if (isNaN(parseInt(r, 16))) {
          _("Invalid hex-character pattern in string")
        }
        n += r
      }
      return parseInt(n, 16)
    }
    var y = S("Unterminated string constant", function () {
      for (var e = a(), t = "";;) {
        var n = a(true, true)
        if ("\\" == n) {
          n = v(true, true)
        } else if ("\r" == n || "\n" == n) {
          _("Unterminated string constant")
        } else if (n == e) {
          break
        }
        t += n
      }
      var r = h("string", t)
      r.quote = e
      return r
    })
    var b = S("Unterminated template", function (e) {
      if (e) {
        i.template_braces.push(i.brace_counter)
      }
      var t
      var n
      var r = ""
      var s = ""
      for (a(true, true); "`" != (t = a(true, true));) {
        if ("\r" == t) {
          if ("\n" == o()) {
            ++i.pos
          }
          t = "\n"
        } else if ("$" == t && "{" == o()) {
          a(true, true)
          i.brace_counter++;
          (n = h(e ? "template_head" : "template_substitution", r)).raw = s
          return n
        }
        s += t
        if ("\\" == t) {
          var /* [auto-meaningful-name] */i$pos = i.pos
          t = v(true, !(d && ("name" === d.type || "punc" === d.type && (")" === d.value || "]" === d.value))), true)
          s += i.text.substr(i$pos, i.pos - i$pos)
        }
        r += t
      }
      i.template_braces.pop();
      (n = h(e ? "template_head" : "template_substitution", r)).raw = s
      n.end = true
      return n
    })
    function w(e) {
      var t
      var /* [auto-meaningful-name] */i$regex_allowed = i.regex_allowed
      var r = function () {
        for (var /* [auto-meaningful-name] */i$text = i.text, /* [auto-meaningful-name] */i$pos = i.pos, /* [auto-meaningful-name] */i$text$length = i.text.length; i$pos < i$text$length; ++i$pos) {
          var r = i$text[i$pos]
          if (q.has(r)) {
            return i$pos
          }
        }
        return -1
      }()
      if (-1 == r) {
        t = i.text.substr(i.pos)
        i.pos = i.text.length
      } else {
        t = i.text.substring(i.pos, r)
        i.pos = r
      }
      i.col = i.tokcol + (i.pos - i.tokpos)
      i.comments_before.push(h(e, t, true))
      i.regex_allowed = i$regex_allowed
      return T
    }
    var E = S("Unterminated multiline comment", function () {
      var /* [auto-meaningful-name] */i$regex_allowed = i.regex_allowed
      var t = u("*/", true)
      var n = i.text.substring(i.pos, t).replace(/\r\n|\r|\u2028|\u2029/g, "\n")
      s(function (e) {
        for (var t = 0, n = 0; n < e.length; n++) {
          if (ne(e.charCodeAt(n)) && re(e.charCodeAt(n + 1))) {
            t++
            n++
          }
        }
        return e.length - t
      }(n) + 2)
      i.comments_before.push(h("comment2", n, true))
      i.newline_before = i.newline_before || n.includes("\n")
      i.regex_allowed = i$regex_allowed
      return T
    })
    var x = S("Unterminated identifier name", function () {
      var e
      var t
      var n = false
      var r = function () {
        n = true
        a()
        if ("u" !== o()) {
          _("Expecting UnicodeEscapeSequence -- uXXXX or u{XXXX}")
        }
        return v(false, true)
      }
      if ("\\" === (e = o())) {
        if (!oe(e = r())) {
          _("First identifier char is an invalid identifier char")
        }
      } else {
        if (!oe(e)) {
          return ""
        }
        a()
      }
      for (; null != (t = o());) {
        if ("\\" === (t = o())) {
          if (!ae(t = r())) {
            _("Invalid escaped identifier char")
          }
        } else {
          if (!ae(t)) {
            break
          }
          a()
        }
        e += t
      }
      if (L.has(e) && n) {
        _("Escaped characters are not allowed in keywords")
      }
      return e
    })
    var C = S("Unterminated regular expression", function (e) {
      for (var t, n = false, r = false; t = a(true);) {
        if (q.has(t)) {
          _("Unexpected line terminator")
        } else if (n) {
          e += "\\" + t
          n = false
        } else if ("[" == t) {
          r = true
          e += t
        } else if ("]" == t && r) {
          r = false
          e += t
        } else {
          if ("/" == t && !r) {
            break
          }
          if ("\\" == t) {
            n = true
          } else {
            e += t
          }
        }
      }
      return h("regexp", {
        source: e,
        flags: x()
      })
    })
    function O(e) {
      return h("operator", function e(t) {
        if (!o()) {
          return t
        }
        var n = t + o()
        return X.has(n) ? (a(), e(n)) : t
      }(e || a()))
    }
    function k() {
      switch (a(), o()) {
        case "/":
          a()
          return w("comment1")
        case "*":
          a()
          return E()
      }
      return i.regex_allowed ? C("") : O("/")
    }
    function S(e, t) {
      return function (n) {
        try {
          return t(n)
        } catch (t) {
          if (t !== he) {
            throw t
          }
          _(e)
        }
      }
    }
    function T(e) {
      if (null != e) {
        return C(e)
      }
      for (r && 0 == i.pos && c("#!") && (l(), s(2), w("comment5"));;) {
        p()
        l()
        if (n) {
          if (c("<!--")) {
            s(4)
            w("comment3")
            continue
          }
          if (c("-->") && i.newline_before) {
            s(3)
            w("comment4")
            continue
          }
        }
        var t = o()
        if (!t) {
          return h("eof")
        }
        var u = t.charCodeAt(0)
        switch (u) {
          case 34:
          case 39:
            return y()
          case 46:
            a()
            return ie(o().charCodeAt(0)) ? A(".") : "." === o() ? (a(), a(), h("expand", "...")) : h("punc", ".")
          case 47:
            var d = k()
            if (d === T) {
              continue
            }
            return d
          case 61:
            a()
            return ">" === o() ? (a(), h("arrow", "=>")) : O("=")
          case 96:
            return b(true)
          case 123:
            i.brace_counter++
            break
          case 125:
            if (i.brace_counter--, i.template_braces.length > 0 && i.template_braces[i.template_braces.length - 1] === i.brace_counter) {
              return b(false)
            }
        }
        if (ie(u)) {
          return A()
        }
        if (Z.has(t)) {
          return h("punc", a())
        }
        if (U.has(t)) {
          return O()
        }
        if (92 == u || oe(t)) {
          g = x()
          return f ? h("name", g) : FalseNullTrue.has(g) ? h("atom", g) : BreakCaseCatchClassConstContinueDebuggerDefaultDeleteDoElseExportExtendsFinallyForFunctionIfInInstanceofLetNewReturnSwitchThrowTryTypeofVarVoidWhileWith.has(g) ? X.has(g) ? h("operator", g) : h("keyword", g) : h("name", g)
        }
        break
      }
      var g
      _("Unexpected character '" + t + "'")
    }
    T.next = a
    T.peek = o
    T.context = function (e) {
      if (e) {
        i = e
      }
      return i
    }
    T.add_directive = function (e) {
      i.directive_stack[i.directive_stack.length - 1].push(e)
      if (undefined === i.directives[e]) {
        i.directives[e] = 1
      } else {
        i.directives[e]++
      }
    }
    T.push_directives_stack = function () {
      i.directive_stack.push([])
    }
    T.pop_directives_stack = function () {
      for (var e = i.directive_stack[i.directive_stack.length - 1], t = 0; t < e.length; t++) {
        i.directives[e[t]]--
      }
      i.directive_stack.pop()
    }
    T.has_directive = function (e) {
      return i.directives[e] > 0
    }
    return T
  }
  var _e = S(["typeof", "void", "delete", "--", "++", "!", "~", "-", "+"])
  var Ae = S(["--", "++"])
  var ge = S(["=", "+=", "-=", "/=", "*=", "**=", "%=", ">>=", "<<=", ">>>=", "|=", "^=", "&="])
  var ve = function (e, t) {
    for (var n = 0; n < e.length; ++n) {
      for (var r = e[n], i = 0; i < r.length; ++i) {
        t[r[i]] = n + 1
      }
    }
    return t
  }([["||"], ["??"], ["&&"], ["|"], ["^"], ["&"], ["==", "===", "!=", "!=="], ["<", ">", "<=", ">=", "in", "instanceof"], [">>", "<<", ">>>"], ["+", "-"], ["*", "/", "%"], ["**"]], {})
  var me = S(["atom", "num", "big_int", "string", "regexp", "name"])
  function ye(e, t) {
    var n = new Map()
    t = A(t, {
      bare_returns: false,
      ecma: 2017,
      expression: false,
      filename: null,
      html5_comments: true,
      module: false,
      shebang: true,
      strict: false,
      toplevel: null
    }, true)
    var r = {
      input: "string" == typeof e ? pe(e, t.filename, t.html5_comments, t.shebang) : e,
      token: null,
      prev: null,
      peeked: null,
      in_function: 0,
      in_async: -1,
      in_generator: -1,
      in_directives: true,
      in_loop: 0,
      labels: []
    }
    function i(e, t) {
      return de(r.token, e, t)
    }
    function o() {
      return r.peeked || (r.peeked = r.input())
    }
    function a() {
      r.prev = r.token
      if (!r.peeked) {
        o()
      }
      r.token = r.peeked
      r.peeked = null
      r.in_directives = r.in_directives && ("string" == r.token.type || i("punc", ";"))
      return r.token
    }
    function s() {
      return r.prev
    }
    function u(e, t, n, i) {
      var o = r.input.context()
      fe(e, o.filename, null != t ? t : o.tokline, null != n ? n : o.tokcol, null != i ? i : o.tokpos)
    }
    function l(e, t) {
      u(t, e.line, e.col)
    }
    function f(e) {
      if (null == e) {
        e = r.token
      }
      l(e, "Unexpected token: " + e.type + " (" + e.value + ")")
    }
    function d(e, t) {
      if (i(e, t)) {
        return a()
      }
      l(r.token, "Unexpected token " + r.token.type + " «" + r.token.value + "», expected " + e + " «" + t + "»")
    }
    function h(e) {
      return d("punc", e)
    }
    function p(e) {
      return e.nlb || !e.comments_before.every(function (e) {
        return !e.nlb
      })
    }
    function _() {
      return !t.strict && (i("eof") || i("punc", "}") || p(r.token))
    }
    function g() {
      return r.in_generator === r.in_function
    }
    function v() {
      return r.in_async === r.in_function
    }
    function m(e) {
      if (i("punc", ";")) {
        a()
      } else {
        if (!(e || _())) {
          f()
        }
      }
    }
    function y() {
      h("(")
      var e = be(true)
      h(")")
      return e
    }
    function b(e) {
      return function () {
        var /* [auto-meaningful-name] */r$token = r.token
        var n = e.apply(undefined, arguments)
        n.start = r$token
        n.end = s()
        return n
      }
    }
    function w() {
      if (i("operator", "/") || i("operator", "/=")) {
        r.peeked = null
        r.token = r.input(r.token.value.substr(1))
      }
    }
    r.token = a()
    var E = b(function (e, n, c) {
      switch (w(), r.token.type) {
        case "string":
          if (r.in_directives) {
            var A = o()
            if (!r.token.raw.includes("\\") && (de(A, "punc", ";") || de(A, "punc", "}") || p(A) || de(A, "eof"))) {
              r.input.add_directive(r.token.value)
            } else {
              r.in_directives = false
            }
          }
          var /* [auto-meaningful-name] */r$in_directives = r.in_directives,
            b = x()
          return r$in_directives && b.body instanceof wn ? new Oe(b.body) : b
        case "template_head":
        case "num":
        case "big_int":
        case "regexp":
        case "operator":
        case "atom":
          return x()
        case "name":
          if ("async" == r.token.value && de(o(), "keyword", "function")) {
            a()
            a()
            if (n) {
              u("functions are not allowed as the body of a loop")
            }
            return k(qe, false, true, e)
          }
          if ("import" == r.token.value && !de(o(), "punc", "(")) {
            a()
            var O = function () {
              var e
              var t
              var n = s()
              if (i("name")) {
                e = re(dn)
              }
              if (i("punc", ",")) {
                a()
              }
              if ((t = Z(true)) || e) {
                d("name", "from")
              }
              var /* [auto-meaningful-name] */r$token = r.token
              if ("string" !== r$token.type) {
                f()
              }
              a()
              return new xt({
                start: n,
                imported_name: e,
                imported_names: t,
                module_name: new wn({
                  start: r$token,
                  value: r$token.value,
                  quote: r$token.quote,
                  end: r$token
                }),
                end: r.token
              })
            }()
            m()
            return O
          }
          return de(o(), "punc", ":") ? function () {
            var e = re(pn)
            if ("await" === e.name && v()) {
              l(r.prev, "await cannot be used as label inside async function")
            }
            if (r.labels.some(function (t) {
              return t.name === e.name
            })) {
              u("Label " + e.name + " defined twice")
            }
            h(":")
            r.labels.push(e)
            var t = E()
            r.labels.pop()
            if (!(t instanceof Pe)) {
              e.references.forEach(function (t) {
                if (t instanceof st) {
                  t = t.label.start
                  u("Continue label `" + e.name + "` refers to non-IterationStatement.", t.line, t.col, t.pos)
                }
              })
            }
            return new Fe({
              body: t,
              label: e
            })
          }() : x()
        case "punc":
          switch (r.token.value) {
            case "{":
              return new De({
                start: r.token,
                body: I(),
                end: s()
              })
            case "[":
            case "(":
              return x()
            case ";":
              r.in_directives = false
              a()
              return new Ie()
            default:
              f()
          }
        case "keyword":
          switch (r.token.value) {
            case "break":
              a()
              return C(at)
            case "continue":
              a()
              return C(st)
            case "debugger":
              a()
              m()
              return new Ce()
            case "do":
              a()
              var S = we(E)
              d("keyword", "while")
              var B = y()
              m(true)
              return new Me({
                body: S,
                condition: B
              })
            case "while":
              a()
              return new Le({
                condition: y(),
                body: we(function () {
                  return E(false, true)
                })
              })
            case "for":
              a()
              return function () {
                var /* [auto-meaningful-name] */ForAwaitInvalidInThisContext = "`for await` invalid in this context"
                var /* [auto-meaningful-name] */r$token = r.token
                if ("name" == r$token.type && "await" == r$token.value) {
                  if (!v()) {
                    l(r$token, ForAwaitInvalidInThisContext)
                  }
                  a()
                } else {
                  r$token = false
                }
                h("(")
                var n = null
                if (i("punc", ";")) {
                  if (r$token) {
                    l(r$token, ForAwaitInvalidInThisContext)
                  }
                } else {
                  n = i("keyword", "var") ? (a(), N(true)) : i("keyword", "let") ? (a(), M(true)) : i("keyword", "const") ? (a(), j(true)) : be(true, true)
                  var o = i("operator", "in")
                  var s = i("name", "of")
                  if (r$token && !s) {
                    l(r$token, ForAwaitInvalidInThisContext)
                  }
                  if (o || s) {
                    if (n instanceof vt) {
                      if (n.definitions.length > 1) {
                        l(n.start, "Only one variable declaration allowed in for..in loop")
                      }
                    } else {
                      if (!(le(n) || (n = he(n)) instanceof $e)) {
                        l(n.start, "Invalid left-hand side in for..in loop")
                      }
                    }
                    a()
                    return o ? function (e) {
                      var t = be(true)
                      h(")")
                      return new Ue({
                        init: e,
                        object: t,
                        body: we(function () {
                          return E(false, true)
                        })
                      })
                    }(n) : function (e, t) {
                      var n = e instanceof vt ? e.definitions[0].name : null
                      var r = be(true)
                      h(")")
                      return new He({
                        await: t,
                        init: e,
                        name: n,
                        object: r,
                        body: we(function () {
                          return E(false, true)
                        })
                      })
                    }(n, !!r$token)
                  }
                }
                return function (e) {
                  h(";")
                  var t = i("punc", ";") ? null : be(true)
                  h(";")
                  var n = i("punc", ")") ? null : be(true)
                  h(")")
                  return new je({
                    init: e,
                    condition: t,
                    step: n,
                    body: we(function () {
                      return E(false, true)
                    })
                  })
                }(n)
              }()
            case "class":
              a()
              if (n) {
                u("classes are not allowed as the body of a loop")
              }
              if (c) {
                u("classes are not allowed as the body of an if")
              }
              return X(Xt)
            case "function":
              a()
              if (n) {
                u("functions are not allowed as the body of a loop")
              }
              return k(qe, false, false, e)
            case "if":
              a()
              return function () {
                var e = y()
                var t = E(false, false, true)
                var n = null
                if (i("keyword", "else")) {
                  a()
                  n = E(false, false, true)
                }
                return new lt({
                  condition: e,
                  body: t,
                  alternative: n
                })
              }()
            case "return":
              if (!(0 != r.in_function || t.bare_returns)) {
                u("'return' outside of function")
              }
              a()
              var D = null
              if (i("punc", ";")) {
                a()
              } else {
                if (!_()) {
                  D = be(true)
                  m()
                }
              }
              return new rt({
                value: D
              })
            case "switch":
              a()
              return new ft({
                expression: y(),
                body: we(R)
              })
            case "throw":
              a()
              if (p(r.token)) {
                u("Illegal newline after 'throw'")
              }
              D = be(true)
              m()
              return new it({
                value: D
              })
            case "try":
              a()
              return function () {
                var e = I()
                var t = null
                var n = null
                if (i("keyword", "catch")) {
                  var /* [auto-meaningful-name] */r$token = r.token
                  a()
                  if (i("punc", "{")) {
                    var c = null
                  } else {
                    h("(")
                    c = T(undefined, fn)
                    h(")")
                  }
                  t = new At({
                    start: r$token,
                    argname: c,
                    body: I(),
                    end: s()
                  })
                }
                if (i("keyword", "finally")) {
                  r$token = r.token
                  a()
                  n = new gt({
                    start: r$token,
                    body: I(),
                    end: s()
                  })
                }
                if (!(t || n)) {
                  u("Missing catch/finally blocks")
                }
                return new _t({
                  body: e,
                  bcatch: t,
                  bfinally: n
                })
              }()
            case "var":
              a()
              O = N()
              m()
              return O
            case "let":
              a()
              O = M()
              m()
              return O
            case "const":
              a()
              O = j()
              m()
              return O
            case "with":
              if (r.input.has_directive("use strict")) {
                u("Strict mode may not include a with statement")
              }
              a()
              return new Ve({
                expression: y(),
                body: E()
              })
            case "export":
              if (!de(o(), "punc", "(")) {
                a()
                O = function () {
                  var e
                  var t
                  var n
                  var c
                  var u
                  var /* [auto-meaningful-name] */r$token = r.token
                  if (i("keyword", "default")) {
                    e = true
                    a()
                  } else if (t = Z(false)) {
                    if (i("name", "from")) {
                      a()
                      var /* [auto-meaningful-name] */_r$token = r.token
                      if ("string" !== _r$token.type) {
                        f()
                      }
                      a()
                      return new Ct({
                        start: r$token,
                        is_default: e,
                        exported_names: t,
                        module_name: new wn({
                          start: _r$token,
                          value: _r$token.value,
                          quote: _r$token.quote,
                          end: _r$token
                        }),
                        end: s()
                      })
                    }
                    return new Ct({
                      start: r$token,
                      is_default: e,
                      exported_names: t,
                      end: s()
                    })
                  }
                  if (i("punc", "{") || e && (i("keyword", "class") || i("keyword", "function")) && de(o(), "punc")) {
                    c = be(false)
                    m()
                  } else {
                    if ((n = E(e)) instanceof vt && e) {
                      f(n.start)
                    } else {
                      if (n instanceof vt || n instanceof We || n instanceof Xt) {
                        u = n
                      } else {
                        if (n instanceof ke) {
                          c = n.body
                        } else {
                          f(n.start)
                        }
                      }
                    }
                  }
                  return new Ct({
                    start: r$token,
                    is_default: e,
                    exported_value: c,
                    exported_definition: u,
                    end: s()
                  })
                }()
                if (i("punc", ";")) {
                  m()
                }
                return O
              }
          }
      }
      f()
    })
    function x(e) {
      return new ke({
        body: (e = be(true), m(), e)
      })
    }
    function C(e) {
      var t
      var n = null
      if (!_()) {
        n = re(vn, true)
      }
      if (null != n) {
        if (!(t = r.labels.find(function (e) {
          return e.name === n.name
        }))) {
          u("Undefined label " + n.name)
        }
        n.thedef = t
      } else {
        if (0 == r.in_loop) {
          u(e.TYPE + " not inside a loop or switch")
        }
      }
      m()
      var i = new e({
        label: n
      })
      if (t) {
        t.references.push(i)
      }
      return i
    }
    var O = function (e, t, n) {
      if (p(r.token)) {
        u("Unexpected newline before arrow (=>)")
      }
      d("arrow", "=>")
      var o = D(i("punc", "{"), false, n)
      var a = o instanceof Array && o.length ? o[o.length - 1].end : o instanceof Array ? e : o.end
      return new Ye({
        start: e,
        end: a,
        async: n,
        argnames: t,
        body: o
      })
    }
    var k = function (e, t, n, r) {
      var o = e === qe
      var c = i("operator", "*")
      if (c) {
        a()
      }
      var u = i("name") ? re(o ? on : cn) : null
      if (o && !u) {
        if (r) {
          e = Xe
        } else {
          f()
        }
      }
      if (!(!u || e === Ke || u instanceof Jt)) {
        f(s())
      }
      var l = []
      var d = D(true, c || t, n, u, l)
      return new e({
        start: l.start,
        end: d.end,
        is_generator: c,
        async: n,
        name: u,
        argnames: l,
        body: d
      })
    }
    function S(e, t) {
      var n = new Set()
      var r = false
      var i = false
      var o = false
      var a = !!t
      var s = {
        add_parameter: function (t) {
          if (n.has(t.value)) {
            if (false === r) {
              r = t
            }
            s.check_strict()
          } else if (n.add(t.value), e) {
            switch (t.value) {
              case "arguments":
              case "eval":
              case "yield":
                if (a) {
                  l(t, "Unexpected " + t.value + " identifier as parameter inside strict mode")
                }
                break
              default:
                if (L.has(t.value)) {
                  f()
                }
            }
          }
        },
        mark_default_assignment: function (e) {
          if (false === i) {
            i = e
          }
        },
        mark_spread: function (e) {
          if (false === o) {
            o = e
          }
        },
        mark_strict_mode: function () {
          a = true
        },
        is_strict: function () {
          return false !== i || false !== o || a
        },
        check_strict: function () {
          if (s.is_strict() && false !== r) {
            l(r, "Parameter " + r.value + " was used already")
          }
        }
      }
      return s
    }
    function T(e, t) {
      var n
      var o = false
      if (undefined === e) {
        e = S(true, r.input.has_directive("use strict"))
      }
      if (i("expand", "...")) {
        o = r.token
        e.mark_spread(r.token)
        a()
      }
      n = B(e, t)
      if (i("operator", "=") && false === o) {
        e.mark_default_assignment(r.token)
        a()
        n = new Lt({
          start: n.start,
          left: n,
          operator: "=",
          right: be(false),
          end: r.token
        })
      }
      if (false !== o) {
        if (!i("punc", ")")) {
          f()
        }
        n = new Qe({
          start: o,
          expression: n,
          end: o
        })
      }
      e.check_strict()
      return n
    }
    function B(e, t) {
      var n
      var c = []
      var l = true
      var d = false
      var /* [auto-meaningful-name] */r$token = r.token
      if (undefined === e) {
        e = S(false, r.input.has_directive("use strict"))
      }
      t = undefined === t ? rn : t
      if (i("punc", "[")) {
        for (a(); !i("punc", "]");) {
          if (l) {
            l = false
          } else {
            h(",")
          }
          if (i("expand", "...")) {
            d = true
            n = r.token
            e.mark_spread(r.token)
            a()
          }
          if (i("punc")) {
            switch (r.token.value) {
              case ",":
                c.push(new Bn({
                  start: r.token,
                  end: r.token
                }))
                continue
              case "]":
                break
              case "[":
              case "{":
                c.push(B(e, t))
                break
              default:
                f()
            }
          } else if (i("name")) {
            e.add_parameter(r.token)
            c.push(re(t))
          } else {
            u("Invalid function parameter")
          }
          if (i("operator", "=") && false === d) {
            e.mark_default_assignment(r.token)
            a()
            c[c.length - 1] = new Lt({
              start: c[c.length - 1].start,
              left: c[c.length - 1],
              operator: "=",
              right: be(false),
              end: r.token
            })
          }
          if (d) {
            if (!i("punc", "]")) {
              u("Rest element must be last element")
            }
            c[c.length - 1] = new Qe({
              start: n,
              expression: c[c.length - 1],
              end: n
            })
          }
        }
        h("]")
        e.check_strict()
        return new $e({
          start: r$token,
          names: c,
          is_array: true,
          end: s()
        })
      }
      if (i("punc", "{")) {
        for (a(); !i("punc", "}");) {
          if (l) {
            l = false
          } else {
            h(",")
          }
          if (i("expand", "...")) {
            d = true
            n = r.token
            e.mark_spread(r.token)
            a()
          }
          if (i("name") && (de(o(), "punc") || de(o(), "operator")) && [",", "}", "="].includes(o().value)) {
            e.add_parameter(r.token)
            var _ = s()
            var A = re(t)
            if (d) {
              c.push(new Qe({
                start: n,
                expression: A,
                end: A.end
              }))
            } else {
              c.push(new Vt({
                start: _,
                key: A.name,
                value: A,
                end: A.end
              }))
            }
          } else {
            if (i("punc", "}")) {
              continue
            }
            var /* [auto-meaningful-name] */_r$token2 = r.token
            var v = ee()
            if (null === v) {
              f(s())
            } else {
              if ("name" !== s().type || i("punc", ":")) {
                h(":")
                c.push(new Vt({
                  start: _r$token2,
                  quote: _r$token2.quote,
                  key: v,
                  value: B(e, t),
                  end: s()
                }))
              } else {
                c.push(new Vt({
                  start: s(),
                  key: v,
                  value: new t({
                    start: s(),
                    name: v,
                    end: s()
                  }),
                  end: s()
                }))
              }
            }
          }
          if (d) {
            if (!i("punc", "}")) {
              u("Rest element must be last element")
            }
          } else {
            if (i("operator", "=")) {
              e.mark_default_assignment(r.token)
              a()
              c[c.length - 1].value = new Lt({
                start: c[c.length - 1].value.start,
                left: c[c.length - 1].value,
                operator: "=",
                right: be(false),
                end: r.token
              })
            }
          }
        }
        h("}")
        e.check_strict()
        return new $e({
          start: r$token,
          names: c,
          is_array: false,
          end: s()
        })
      }
      if (i("name")) {
        e.add_parameter(r.token)
        return re(t)
      }
      u("Invalid function parameter")
    }
    function D(e, n, o, s, c) {
      var /* [auto-meaningful-name] */r$in_loop = r.in_loop
      var /* [auto-meaningful-name] */r$labels = r.labels
      var /* [auto-meaningful-name] */r$in_generator = r.in_generator
      var /* [auto-meaningful-name] */r$in_async = r.in_async
      ++r.in_function
      if (n) {
        r.in_generator = r.in_function
      }
      if (o) {
        r.in_async = r.in_function
      }
      if (c) {
        (function (e) {
          var n = S(true, r.input.has_directive("use strict"))
          for (h("("); !i("punc", ")");) {
            var o = T(n)
            e.push(o)
            if (!i("punc", ")")) {
              h(",")
              if (i("punc", ")") && t.ecma < 2017) {
                f()
              }
            }
            if (o instanceof Qe) {
              break
            }
          }
          a()
        })(c)
      }
      if (e) {
        r.in_directives = true
      }
      r.in_loop = 0
      r.labels = []
      if (e) {
        r.input.push_directives_stack()
        var _ = I()
        if (s) {
          ne(s)
        }
        if (c) {
          c.forEach(ne)
        }
        r.input.pop_directives_stack()
      } else {
        _ = [
          new rt({
            start: r.token,
            value: be(false),
            end: r.token
          })
        ]
      }
      --r.in_function
      r.in_loop = r$in_loop
      r.labels = r$labels
      r.in_generator = r$in_generator
      r.in_async = r$in_async
      return _
    }
    function I() {
      h("{")
      for (var e = []; !i("punc", "}");) {
        if (i("eof")) {
          f()
        }
        e.push(E())
      }
      a()
      return e
    }
    function R() {
      h("{")
      for (var e, t = [], n = null, o = null; !i("punc", "}");) {
        if (i("eof")) {
          f()
        }
        if (i("keyword", "case")) {
          if (o) {
            o.end = s()
          }
          n = []
          o = new pt({
            start: (e = r.token, a(), e),
            expression: be(true),
            body: n
          })
          t.push(o)
          h(":")
        } else {
          if (i("keyword", "default")) {
            if (o) {
              o.end = s()
            }
            n = []
            o = new ht({
              start: (e = r.token, a(), h(":"), e),
              body: n
            })
            t.push(o)
          } else {
            if (!n) {
              f()
            }
            n.push(E())
          }
        }
      }
      if (o) {
        o.end = s()
      }
      a()
      return t
    }
    function F(e, t) {
      for (var n, o = [];;) {
        var c = "var" === t ? Zt : "const" === t ? tn : "let" === t ? nn : null
        if (i("punc", "{") || i("punc", "[")) {
          n = new wt({
            start: r.token,
            name: B(undefined, c),
            value: i("operator", "=") ? (d("operator", "="), be(false, e)) : null,
            end: s()
          })
        } else {
          if ("import" == (n = new wt({
            start: r.token,
            name: re(c),
            value: i("operator", "=") ? (a(), be(false, e)) : e || "const" !== t ? null : u("Missing initializer in const declaration"),
            end: s()
          })).name.name) {
            u("Unexpected token: import")
          }
        }
        o.push(n)
        if (!i("punc", ",")) {
          break
        }
        a()
      }
      return o
    }
    var N = function (e) {
      return new mt({
        start: s(),
        definitions: F(e, "var"),
        end: s()
      })
    }
    var M = function (e) {
      return new yt({
        start: s(),
        definitions: F(e, "let"),
        end: s()
      })
    }
    var j = function (e) {
      return new bt({
        start: s(),
        definitions: F(e, "const"),
        end: s()
      })
    }
    function U() {
      var e
      var /* [auto-meaningful-name] */r$token = r.token
      switch (r$token.type) {
        case "name":
          e = te(_n)
          break
        case "num":
          e = new En({
            start: r$token,
            end: r$token,
            value: r$token.value
          })
          break
        case "big_int":
          e = new xn({
            start: r$token,
            end: r$token,
            value: r$token.value
          })
          break
        case "string":
          e = new wn({
            start: r$token,
            end: r$token,
            value: r$token.value,
            quote: r$token.quote
          })
          break
        case "regexp":
          e = new Cn({
            start: r$token,
            end: r$token,
            value: r$token.value
          })
          break
        case "atom":
          switch (r$token.value) {
            case "false":
              e = new Rn({
                start: r$token,
                end: r$token
              })
              break
            case "true":
              e = new Fn({
                start: r$token,
                end: r$token
              })
              break
            case "null":
              e = new kn({
                start: r$token,
                end: r$token
              })
          }
      }
      a()
      return e
    }
    function H(e, t, n, r) {
      var i = function (e, t) {
        return t ? new Lt({
          start: e.start,
          left: e,
          operator: "=",
          right: t,
          end: t.end
        }) : e
      }
      return e instanceof Ut ? i(new $e({
        start: e.start,
        end: e.end,
        is_array: false,
        names: e.properties.map(H)
      }), r) : e instanceof Vt ? (e.value = H(e.value, 0, e.key), i(e, r)) : e instanceof Bn ? e : e instanceof $e ? (e.names = e.names.map(H), i(e, r)) : e instanceof _n ? i(new rn({
        name: e.name,
        start: e.start,
        end: e.end
      }), r) : e instanceof Qe ? (e.expression = H(e.expression), i(e, r)) : e instanceof jt ? i(new $e({
        start: e.start,
        end: e.end,
        is_array: true,
        names: e.elements.map(H)
      }), r) : e instanceof Mt ? i(H(e.left, 0, 0, e.right), r) : e instanceof Lt ? (e.left = H(e.left, 0, e.left), e) : void u("Invalid function parameter", e.start.line, e.start.col)
    }
    var V = function e(u, l) {
      var /* [auto-meaningful-name] */m$end$comments_after
      if (i("operator", "new")) {
        return function (n) {
          var /* [auto-meaningful-name] */r$token = r.token
          d("operator", "new")
          if (i("punc", ".")) {
            a()
            d("name", "target")
            return oe(new $t({
              start: r$token,
              end: s()
            }), n)
          }
          var c
          var u = e(false)
          if (i("punc", "(")) {
            a()
            c = z(")", t.ecma >= 2017)
          } else {
            c = []
          }
          var l = new kt({
            start: r$token,
            expression: u,
            args: c,
            end: s()
          })
          ie(l)
          return oe(l, n)
        }(u)
      }
      var _
      var /* [auto-meaningful-name] */r$token = r.token
      var g = i("name", "async") && "[" != (_ = o()).value && "arrow" != _.type && U()
      if (i("punc")) {
        switch (r.token.value) {
          case "(":
            if (g && !u) {
              break
            }
            var v = function (e, n) {
              var /* [auto-meaningful-name] */_r$token3
              var c
              var u
              var l = []
              for (h("("); !i("punc", ")");) {
                if (_r$token3) {
                  f(_r$token3)
                }
                if (i("expand", "...")) {
                  _r$token3 = r.token
                  if (n) {
                    c = r.token
                  }
                  a()
                  l.push(new Qe({
                    start: s(),
                    expression: be(),
                    end: r.token
                  }))
                } else {
                  l.push(be())
                }
                if (!i("punc", ")")) {
                  h(",")
                  if (i("punc", ")")) {
                    if (t.ecma < 2017) {
                      f()
                    }
                    u = s()
                    if (n) {
                      c = u
                    }
                  }
                }
              }
              h(")")
              if (e && i("arrow", "=>")) {
                if (_r$token3 && u) {
                  f(u)
                }
              } else {
                if (c) {
                  f(c)
                }
              }
              return l
            }(l, !g)
            if (l && i("arrow", "=>")) {
              return O(r$token, v.map(H), !!g)
            }
            var m = g ? new Ot({
              expression: g,
              args: v
            }) : 1 == v.length ? v[0] : new St({
              expressions: v
            })
            if (m.start) {
              var /* [auto-meaningful-name] */m$start$comments_before
              var /* [auto-meaningful-name] */r$token$comments_before$length = r$token.comments_before.length
              n.set(r$token, r$token$comments_before$length);
              (m$start$comments_before = m.start.comments_before).unshift.apply(m$start$comments_before, c(r$token.comments_before))
              r$token.comments_before = m.start.comments_before
              if (0 == r$token$comments_before$length && r$token.comments_before.length > 0) {
                var w = r$token.comments_before[0]
                if (!w.nlb) {
                  w.nlb = r$token.nlb
                  r$token.nlb = false
                }
              }
              r$token.comments_after = m.start.comments_after
            }
            m.start = r$token
            var E = s()
            if (m.end) {
              E.comments_before = m.end.comments_before;
              (m$end$comments_after = m.end.comments_after).push.apply(m$end$comments_after, c(E.comments_after))
              E.comments_after = m.end.comments_after
            }
            m.end = E
            if (m instanceof Ot) {
              ie(m)
            }
            return oe(m, u)
          case "[":
            return oe(Q(), u)
          case "{":
            return oe(K(), u)
        }
        if (!g) {
          f()
        }
      }
      if (l && i("name") && de(o(), "arrow")) {
        var x = new rn({
          name: r.token.value,
          start: r$token,
          end: r$token
        })
        a()
        return O(r$token, [x], !!g)
      }
      if (i("keyword", "function")) {
        a()
        var C = k(Xe, false, !!g)
        C.start = r$token
        C.end = s()
        return oe(C, u)
      }
      if (g) {
        return oe(g, u)
      }
      if (i("keyword", "class")) {
        a()
        var S = X(Yt)
        S.start = r$token
        S.end = s()
        return oe(S, u)
      }
      return i("template_head") ? oe(G(), u) : me.has(r.token.type) ? oe(U(), u) : void f()
    }
    function G() {
      var e = []
      var /* [auto-meaningful-name] */r$token = r.token
      for (e.push(new et({
        start: r.token,
        raw: r.token.raw,
        value: r.token.value,
        end: r.token
      })); !r.token.end;) {
        a()
        w()
        e.push(be(true))
        if (!de("template_substitution")) {
          f()
        }
        e.push(new et({
          start: r.token,
          raw: r.token.raw,
          value: r.token.value,
          end: r.token
        }))
      }
      a()
      return new Ze({
        start: r$token,
        segments: e,
        end: r.token
      })
    }
    function z(e, t, n) {
      for (var o = true, c = []; !i("punc", e) && (o ? o = false : h(","), !t || !i("punc", e));) {
        if (i("punc", ",") && n) {
          c.push(new Bn({
            start: r.token,
            end: r.token
          }))
        } else {
          if (i("expand", "...")) {
            a()
            c.push(new Qe({
              start: s(),
              expression: be(),
              end: r.token
            }))
          } else {
            c.push(be(false))
          }
        }
      }
      a()
      return c
    }
    var Q = b(function () {
      h("[")
      return new jt({
        elements: z("]", !t.strict, true)
      })
    })
    var W = b(function (e, t) {
      return k(Ke, e, t)
    })
    var K = b(function () {
      var /* [auto-meaningful-name] */r$token = r.token
      var n = true
      var o = []
      for (h("{"); !i("punc", "}") && (n ? n = false : h(","), t.strict || !i("punc", "}"));) {
        if ("expand" != (r$token = r.token).type) {
          var c
          var u = ee()
          if (i("punc", ":")) {
            if (null === u) {
              f(s())
            } else {
              a()
              c = be(false)
            }
          } else {
            var l = Y(u, r$token)
            if (l) {
              o.push(l)
              continue
            }
            c = new _n({
              start: s(),
              name: u,
              end: s()
            })
          }
          if (i("operator", "=")) {
            a()
            c = new Mt({
              start: r$token,
              left: c,
              operator: "=",
              right: be(false),
              end: s()
            })
          }
          o.push(new Vt({
            start: r$token,
            quote: r$token.quote,
            key: u instanceof Ee ? u : "" + u,
            value: c,
            end: s()
          }))
        } else {
          a()
          o.push(new Qe({
            start: r$token,
            expression: be(false),
            end: s()
          }))
        }
      }
      a()
      return new Ut({
        properties: o
      })
    })
    function X(e) {
      var /* [auto-meaningful-name] */r$token
      var n
      var o
      var c
      var u = []
      for (r.input.push_directives_stack(), r.input.add_directive("use strict"), "name" == r.token.type && "extends" != r.token.value && (o = re(e === Xt ? un : ln)), e !== Xt || o || f(), "extends" == r.token.value && (a(), c = be(true)), h("{"); i("punc", ";");) {
        a()
      }
      for (; !i("punc", "}");) {
        for (r$token = r.token, (n = Y(ee(), r$token, true)) || f(), u.push(n); i("punc", ";");) {
          a()
        }
      }
      r.input.pop_directives_stack()
      a()
      return new e({
        start: r$token,
        name: o,
        extends: c,
        properties: u,
        end: s()
      })
    }
    function Y(e, t, n) {
      var o = function (e, t) {
        return "string" == typeof e || "number" == typeof e ? new an({
          start: t,
          name: "" + e,
          end: s()
        }) : (null === e && f(), e)
      }
      var c = false
      var u = false
      var l = false
      var d = t
      if (n && "static" === e && !i("punc", "(")) {
        u = true
        d = r.token
        e = ee()
      }
      if (!("async" !== e || i("punc", "(") || i("punc", ",") || i("punc", "}") || i("operator", "="))) {
        c = true
        d = r.token
        e = ee()
      }
      if (null === e) {
        l = true
        d = r.token
        if (null === (e = ee())) {
          f()
        }
      }
      if (i("punc", "(")) {
        e = o(e, t)
        return new Qt({
          start: t,
          static: u,
          is_generator: l,
          async: c,
          key: e,
          quote: e instanceof an ? d.quote : undefined,
          value: W(l, c),
          end: s()
        })
      }
      var /* [auto-meaningful-name] */r$token = r.token
      if ("get" == e) {
        if (!i("punc") || i("punc", "[")) {
          e = o(ee(), t)
          return new zt({
            start: t,
            static: u,
            key: e,
            quote: e instanceof an ? r$token.quote : undefined,
            value: W(),
            end: s()
          })
        }
      } else if ("set" == e && (!i("punc") || i("punc", "["))) {
        e = o(ee(), t)
        return new Gt({
          start: t,
          static: u,
          key: e,
          quote: e instanceof an ? r$token.quote : undefined,
          value: W(),
          end: s()
        })
      }
      if (n) {
        var p = function (e) {
          return "string" == typeof e || "number" == typeof e ? new sn({
            start: d,
            end: d,
            name: "" + e
          }) : (null === e && f(), e)
        }(e)
        var _ = p instanceof sn ? d.quote : undefined
        if (i("operator", "=")) {
          a()
          return new Kt({
            start: t,
            static: u,
            quote: _,
            key: p,
            value: be(false),
            end: s()
          })
        }
        if (i("name") || i("punc", ";") || i("punc", "}")) {
          return new Kt({
            start: t,
            static: u,
            quote: _,
            key: p,
            end: s()
          })
        }
      }
    }
    function q(e) {
      function t(e) {
        return new e({
          name: ee(),
          start: s(),
          end: s()
        })
      }
      var n
      var o
      var c = e ? hn : gn
      var u = e ? dn : An
      var /* [auto-meaningful-name] */r$token = r.token
      if (e) {
        n = t(c)
      } else {
        o = t(u)
      }
      if (i("name", "as")) {
        a()
        if (e) {
          o = t(u)
        } else {
          n = t(c)
        }
      } else {
        if (e) {
          o = new u(n)
        } else {
          n = new c(o)
        }
      }
      return new Et({
        start: r$token,
        foreign_name: n,
        name: o,
        end: s()
      })
    }
    function J(e, t) {
      var n
      var i = e ? hn : gn
      var o = e ? dn : An
      var /* [auto-meaningful-name] */r$token = r.token
      var c = s()
      t = t || new o({
        name: "*",
        start: r$token,
        end: c
      })
      n = new i({
        name: "*",
        start: r$token,
        end: c
      })
      return new Et({
        start: r$token,
        foreign_name: n,
        name: t,
        end: c
      })
    }
    function Z(e) {
      var t
      if (i("punc", "{")) {
        for (a(), t = []; !i("punc", "}");) {
          t.push(q(e))
          if (i("punc", ",")) {
            a()
          }
        }
        a()
      } else if (i("operator", "*")) {
        var n
        a()
        if (e && i("name", "as")) {
          a()
          n = re(e ? dn : gn)
        }
        t = [J(e, n)]
      }
      return t
    }
    function ee() {
      var /* [auto-meaningful-name] */r$token = r.token
      switch (r$token.type) {
        case "punc":
          if ("[" === r$token.value) {
            a()
            var t = be(false)
            h("]")
            return t
          }
          f(r$token)
        case "operator":
          if ("*" === r$token.value) {
            a()
            return null
          }
          if (!["delete", "in", "instanceof", "new", "typeof", "void"].includes(r$token.value)) {
            f(r$token)
          }
        case "name":
        case "string":
        case "num":
        case "big_int":
        case "keyword":
        case "atom":
          a()
          return r$token.value
        default:
          f(r$token)
      }
    }
    function te(e) {
      var /* [auto-meaningful-name] */r$token$value = r.token.value
      return new ("this" == r$token$value ? mn : "super" == r$token$value ? yn : e)({
        name: String(r$token$value),
        start: r.token,
        end: r.token
      })
    }
    function ne(e) {
      var /* [auto-meaningful-name] */e$name = e.name
      if (g() && "yield" == e$name) {
        l(e.start, "Yield cannot be used as identifier inside generators")
      }
      if (r.input.has_directive("use strict")) {
        if ("yield" == e$name) {
          l(e.start, "Unexpected yield identifier inside strict mode")
        }
        if (e instanceof Jt && ("arguments" == e$name || "eval" == e$name)) {
          l(e.start, "Unexpected " + e$name + " in strict mode")
        }
      }
    }
    function re(e, t) {
      if (!i("name")) {
        if (!t) {
          u("Name expected")
        }
        return null
      }
      var n = te(e)
      ne(n)
      a()
      return n
    }
    function ie(e) {
      for (var /* [auto-meaningful-name] */e$start = e.start, /* [auto-meaningful-name] */e$start$comments_before = e$start.comments_before, i = n.get(e$start), o = null != i ? i : e$start$comments_before.length; --o >= 0;) {
        var a = e$start$comments_before[o]
        if (/[@#]__/.test(a.value)) {
          if (/[@#]__PURE__/.test(a.value)) {
            P(e, Un)
            break
          }
          if (/[@#]__INLINE__/.test(a.value)) {
            P(e, Hn)
            break
          }
          if (/[@#]__NOINLINE__/.test(a.value)) {
            P(e, Vn)
            break
          }
        }
      }
    }
    var oe = function e(t, n) {
      var /* [auto-meaningful-name] */r$token
      var /* [auto-meaningful-name] */t$start = t.start
      if (i("punc", ".")) {
        a()
        return e(new Bt({
          start: t$start,
          expression: t,
          property: (r$token = r.token, "name" != r$token.type && f(), a(), r$token.value),
          end: s()
        }), n)
      }
      if (i("punc", "[")) {
        a()
        var u = be(true)
        h("]")
        return e(new Dt({
          start: t$start,
          expression: t,
          property: u,
          end: s()
        }), n)
      }
      if (n && i("punc", "(")) {
        a()
        var l = new Ot({
          start: t$start,
          expression: t,
          args: ae(),
          end: s()
        })
        ie(l)
        return e(l, true)
      }
      return i("template_head") ? e(new Je({
        start: t$start,
        prefix: t,
        template_string: G(),
        end: s()
      }), n) : t
    }
    function ae() {
      for (var e = []; !i("punc", ")");) {
        if (i("expand", "...")) {
          a()
          e.push(new Qe({
            start: s(),
            expression: be(false),
            end: s()
          }))
        } else {
          e.push(be(false))
        }
        if (!i("punc", ")")) {
          h(",")
          if (i("punc", ")") && t.ecma < 2017) {
            f()
          }
        }
      }
      a()
      return e
    }
    var se = function e(t, n) {
      var /* [auto-meaningful-name] */r$token = r.token
      if ("name" == r$token.type && "await" == r$token.value) {
        if (v()) {
          a()
          if (!v()) {
            u("Unexpected await expression outside async function", r.prev.line, r.prev.col, r.prev.pos)
          }
          return new ct({
            start: s(),
            end: r.token,
            expression: e(true)
          })
        }
        if (r.input.has_directive("use strict")) {
          l(r.token, "Unexpected await identifier inside strict mode")
        }
      }
      if (i("operator") && _e.has(r$token.value)) {
        a()
        w()
        var c = ce(Rt, r$token, e(t))
        c.start = r$token
        c.end = s()
        return c
      }
      for (var d = V(t, n); i("operator") && Ae.has(r.token.value) && !p(r.token);) {
        if (d instanceof Ye) {
          f()
        }
        (d = ce(Ft, r.token, d)).start = r$token
        d.end = r.token
        a()
      }
      return d
    }
    function ce(e, t, n) {
      var /* [auto-meaningful-name] */t$value = t.value
      switch (t$value) {
        case "++":
        case "--":
          if (!le(n)) {
            u("Invalid use of " + t$value + " operator", t.line, t.col, t.pos)
          }
          break
        case "delete":
          if (n instanceof _n && r.input.has_directive("use strict")) {
            u("Calling delete on expression not allowed in strict mode", n.start.line, n.start.col, n.start.pos)
          }
      }
      return new e({
        operator: t$value,
        expression: n
      })
    }
    var ue = function (e) {
      var /* [auto-meaningful-name] */r$token = r.token
      var n = function (e) {
        return function e(t, n, o) {
          var s = i("operator") ? r.token.value : null
          if ("in" == s && o) {
            s = null
          }
          if ("**" == s && t instanceof Rt && !de(t.start, "punc", "(") && "--" !== t.operator && "++" !== t.operator) {
            f(t.start)
          }
          var c = null != s ? ve[s] : null
          if (null != c && (c > n || "**" === s && n === c)) {
            a()
            var u = e(se(true), c, o)
            return e(new Pt({
              start: t.start,
              left: t,
              operator: s,
              right: u,
              end: u.end
            }), n, o)
          }
          return t
        }(se(true, true), 0, e)
      }(e)
      if (i("operator", "?")) {
        a()
        var o = be(false)
        h(":")
        return new Nt({
          start: r$token,
          condition: n,
          consequent: o,
          alternative: be(false, e),
          end: s()
        })
      }
      return n
    }
    function le(e) {
      return e instanceof Tt || e instanceof _n
    }
    function he(e) {
      if (e instanceof Ut) {
        e = new $e({
          start: e.start,
          names: e.properties.map(he),
          is_array: false,
          end: e.end
        })
      } else if (e instanceof jt) {
        for (var t = [], n = 0; n < e.elements.length; n++) {
          if (e.elements[n] instanceof Qe) {
            if (n + 1 !== e.elements.length) {
              l(e.elements[n].start, "Spread must the be last element in destructuring array")
            }
            e.elements[n].expression = he(e.elements[n].expression)
          }
          t.push(he(e.elements[n]))
        }
        e = new $e({
          start: e.start,
          names: t,
          is_array: true,
          end: e.end
        })
      } else if (e instanceof Ht) {
        e.value = he(e.value)
      } else {
        if (e instanceof Mt) {
          e = new Lt({
            start: e.start,
            left: e.left,
            operator: "=",
            right: e.right,
            end: e.end
          })
        }
      }
      return e
    }
    var ye = function e(t) {
      w()
      var /* [auto-meaningful-name] */r$token = r.token
      if ("name" == r$token.type && "yield" == r$token.value) {
        if (g()) {
          a()
          return function () {
            if (!g()) {
              u("Unexpected yield expression outside generator function", r.prev.line, r.prev.col, r.prev.pos)
            }
            var /* [auto-meaningful-name] */_r$token4 = r.token
            var t = false
            var n = true
            if (_() || i("punc") && $.has(r.token.value)) {
              n = false
            } else {
              if (i("operator", "*")) {
                t = true
                a()
              }
            }
            return new ut({
              start: _r$token4,
              is_star: t,
              expression: n ? be() : null,
              end: s()
            })
          }()
        }
        if (r.input.has_directive("use strict")) {
          l(r.token, "Unexpected yield identifier inside strict mode")
        }
      }
      var o = ue(t)
      var /* [auto-meaningful-name] */r$token$value = r.token.value
      if (i("operator") && ge.has(r$token$value)) {
        if (le(o) || (o = he(o)) instanceof $e) {
          a()
          return new Mt({
            start: r$token,
            left: o,
            operator: r$token$value,
            right: e(t),
            end: s()
          })
        }
        u("Invalid assignment")
      }
      return o
    }
    var be = function (e, t) {
      for (var /* [auto-meaningful-name] */r$token = r.token, s = []; s.push(ye(t)), e && i("punc", ",");) {
        a()
        e = true
      }
      return 1 == s.length ? s[0] : new St({
        start: r$token,
        expressions: s,
        end: o()
      })
    }
    function we(e) {
      ++r.in_loop
      var t = e()
      --r.in_loop
      return t
    }
    return t.expression ? be(true) : function () {
      var /* [auto-meaningful-name] */r$token = r.token
      var n = []
      for (r.input.push_directives_stack(), t.module && r.input.add_directive("use strict"); !i("eof");) {
        n.push(E())
      }
      r.input.pop_directives_stack()
      var o = s()
      var /* [auto-meaningful-name] */t$toplevel = t.toplevel
      if (t$toplevel) {
        t$toplevel.body = t$toplevel.body.concat(n)
        t$toplevel.end = o
      } else {
        t$toplevel = new ze({
          start: r$token,
          body: n,
          end: o
        })
      }
      return t$toplevel
    }()
  }
  function be(e, t, n) {
    var r = arguments.length > 3 && undefined !== arguments[3] ? arguments[3] : Ee
    var i = t = t ? t.split(/\s+/) : []
    if (r && r.PROPS) {
      t = t.concat(r.PROPS)
    }
    for (var o = "return function AST_" + e + "(props){ if (props) { ", /* [auto-meaningful-name] */t$length = t.length; --t$length >= 0;) {
      o += "this." + t[t$length] + " = props." + t[t$length] + ";"
    }
    var s = r && Object.create(r.prototype)
    if (s && s.initialize || n && n.initialize) {
      o += "this.initialize();"
    }
    o += "}"
    o += "this.flags = 0;"
    o += "}"
    var c = new Function(o)()
    if (s) {
      c.prototype = s
      c.BASE = r
    }
    if (r) {
      r.SUBCLASSES.push(c)
    }
    c.prototype.CTOR = c
    c.prototype.constructor = c
    c.PROPS = t || null
    c.SELF_PROPS = i
    c.SUBCLASSES = []
    if (e) {
      c.prototype.TYPE = c.TYPE = e
    }
    if (n) {
      for (t$length in n) if (B(n, t$length)) {
        if ("$" === t$length[0]) {
          c[t$length.substr(1)] = n[t$length]
        } else {
          c.prototype[t$length] = n[t$length]
        }
      }
    }
    c.DEFMETHOD = function (e, t) {
      this.prototype[e] = t
    }
    return c
  }
  var we = be("Token", "type value line col pos endline endcol endpos nlb comments_before comments_after file raw quote end", {}, null)
  var Ee = be("Node", "start end", {
    _clone: function (e) {
      if (e) {
        var t = this.clone()
        return t.transform(new jn(function (e) {
          if (e !== t) {
            return e.clone(true)
          }
        }))
      }
      return new this.CTOR(this)
    },
    clone: function (e) {
      return this._clone(e)
    },
    $documentation: "Base class of all AST nodes",
    $propdoc: {
      start: "[AST_Token] The first token of this node",
      end: "[AST_Token] The last token of this node"
    },
    _walk: function (e) {
      return e._visit(this)
    },
    walk: function (e) {
      return this._walk(e)
    },
    _children_backwards: function () {}
  }, null)
  Ee.warn_function = null
  Ee.warn = function (e, t) {
    if (Ee.warn_function) {
      Ee.warn_function(C(e, t))
    }
  }
  var xe = be("Statement", null, {
    $documentation: "Base class of all statements"
  })
  var Ce = be("Debugger", null, {
    $documentation: "Represents a debugger statement"
  }, xe)
  var Oe = be("Directive", "value quote", {
    $documentation: "Represents a directive, like \"use strict\";",
    $propdoc: {
      value: "[string] The value of this directive as a plain string (it's not an AST_String!)",
      quote: "[string] the original quote character"
    }
  }, xe)
  var ke = be("SimpleStatement", "body", {
    $documentation: "A statement consisting of an expression, i.e. a = 1 + 2",
    $propdoc: {
      body: "[AST_Node] an expression node (should not be instanceof AST_Statement)"
    },
    _walk: function (e) {
      return e._visit(this, function () {
        this.body._walk(e)
      })
    },
    _children_backwards: function (e) {
      e(this.body)
    }
  }, xe)
  function Se(e, t) {
    for (var /* [auto-meaningful-name] */e$body = e.body, r = 0, /* [auto-meaningful-name] */e$body$length = e$body.length; r < e$body$length; r++) {
      e$body[r]._walk(t)
    }
  }
  function Te(e) {
    var t = this._clone(e)
    if (this.block_scope) {
      t.block_scope = this.block_scope.clone()
    }
    return t
  }
  var Be = be("Block", "body block_scope", {
    $documentation: "A body of statements (usually braced)",
    $propdoc: {
      body: "[AST_Statement*] an array of statements",
      block_scope: "[AST_Scope] the block scope"
    },
    _walk: function (e) {
      return e._visit(this, function () {
        Se(this, e)
      })
    },
    _children_backwards: function (e) {
      for (var /* [auto-meaningful-name] */this$body$length = this.body.length; this$body$length--;) {
        e(this.body[this$body$length])
      }
    },
    clone: Te
  }, xe)
  var De = be("BlockStatement", null, {
    $documentation: "A block statement"
  }, Be)
  var Ie = be("EmptyStatement", null, {
    $documentation: "The empty statement (empty block or simply a semicolon)"
  }, xe)
  var Re = be("StatementWithBody", "body", {
    $documentation: "Base class for all statements that contain one nested body: `For`, `ForIn`, `Do`, `While`, `With`",
    $propdoc: {
      body: "[AST_Statement] the body; this should always be present, even if it's an AST_EmptyStatement"
    }
  }, xe)
  var Fe = be("LabeledStatement", "label", {
    $documentation: "Statement with a label",
    $propdoc: {
      label: "[AST_Label] a label definition"
    },
    _walk: function (e) {
      return e._visit(this, function () {
        this.label._walk(e)
        this.body._walk(e)
      })
    },
    _children_backwards: function (e) {
      e(this.body)
      e(this.label)
    },
    clone: function (e) {
      var t = this._clone(e)
      if (e) {
        var /* [auto-meaningful-name] */t$label = t.label
        var /* [auto-meaningful-name] */this$label = this.label
        t.walk(new Ln(function (e) {
          if (e instanceof ot && e.label && e.label.thedef === this$label) {
            e.label.thedef = t$label
            t$label.references.push(e)
          }
        }))
      }
      return t
    }
  }, Re)
  var Pe = be("IterationStatement", "block_scope", {
    $documentation: "Internal class.  All loops inherit from it.",
    $propdoc: {
      block_scope: "[AST_Scope] the block scope for this iteration statement."
    },
    clone: Te
  }, Re)
  var Ne = be("DWLoop", "condition", {
    $documentation: "Base class for do/while statements",
    $propdoc: {
      condition: "[AST_Node] the loop condition.  Should not be instanceof AST_Statement"
    }
  }, Pe)
  var Me = be("Do", null, {
    $documentation: "A `do` statement",
    _walk: function (e) {
      return e._visit(this, function () {
        this.body._walk(e)
        this.condition._walk(e)
      })
    },
    _children_backwards: function (e) {
      e(this.condition)
      e(this.body)
    }
  }, Ne)
  var Le = be("While", null, {
    $documentation: "A `while` statement",
    _walk: function (e) {
      return e._visit(this, function () {
        this.condition._walk(e)
        this.body._walk(e)
      })
    },
    _children_backwards: function (e) {
      e(this.body)
      e(this.condition)
    }
  }, Ne)
  var je = be("For", "init condition step", {
    $documentation: "A `for` statement",
    $propdoc: {
      init: "[AST_Node?] the `for` initialization code, or null if empty",
      condition: "[AST_Node?] the `for` termination clause, or null if empty",
      step: "[AST_Node?] the `for` update clause, or null if empty"
    },
    _walk: function (e) {
      return e._visit(this, function () {
        if (this.init) {
          this.init._walk(e)
        }
        if (this.condition) {
          this.condition._walk(e)
        }
        if (this.step) {
          this.step._walk(e)
        }
        this.body._walk(e)
      })
    },
    _children_backwards: function (e) {
      e(this.body)
      if (this.step) {
        e(this.step)
      }
      if (this.condition) {
        e(this.condition)
      }
      if (this.init) {
        e(this.init)
      }
    }
  }, Pe)
  var Ue = be("ForIn", "init object", {
    $documentation: "A `for ... in` statement",
    $propdoc: {
      init: "[AST_Node] the `for/in` initialization code",
      object: "[AST_Node] the object that we're looping through"
    },
    _walk: function (e) {
      return e._visit(this, function () {
        this.init._walk(e)
        this.object._walk(e)
        this.body._walk(e)
      })
    },
    _children_backwards: function (e) {
      e(this.body)
      if (this.object) {
        e(this.object)
      }
      if (this.init) {
        e(this.init)
      }
    }
  }, Pe)
  var He = be("ForOf", "await", {
    $documentation: "A `for ... of` statement"
  }, Ue)
  var Ve = be("With", "expression", {
    $documentation: "A `with` statement",
    $propdoc: {
      expression: "[AST_Node] the `with` expression"
    },
    _walk: function (e) {
      return e._visit(this, function () {
        this.expression._walk(e)
        this.body._walk(e)
      })
    },
    _children_backwards: function (e) {
      e(this.body)
      e(this.expression)
    }
  }, Re)
  var Ge = be("Scope", "variables functions uses_with uses_eval parent_scope enclosed cname _var_name_cache", {
    $documentation: "Base class for all statements introducing a lexical scope",
    $propdoc: {
      variables: "[Map/S] a map of name -> SymbolDef for all variables/functions defined in this scope",
      functions: "[Map/S] like `variables`, but only lists function declarations",
      uses_with: "[boolean/S] tells whether this scope uses the `with` statement",
      uses_eval: "[boolean/S] tells whether this scope contains a direct call to the global `eval`",
      parent_scope: "[AST_Scope?/S] link to the parent scope",
      enclosed: "[SymbolDef*/S] a list of all symbol definitions that are accessed from this scope or any subscopes",
      cname: "[integer/S] current index for mangling variables (used internally by the mangler)"
    },
    get_defun_scope: function () {
      for (var e = this; e.is_block_scope();) {
        e = e.parent_scope
      }
      return e
    },
    clone: function (e) {
      var t = this._clone(e)
      if (this.variables) {
        t.variables = new Map(this.variables)
      }
      if (this.functions) {
        t.functions = new Map(this.functions)
      }
      if (this.enclosed) {
        t.enclosed = this.enclosed.slice()
      }
      if (this._block_scope) {
        t._block_scope = this._block_scope
      }
      return t
    },
    pinned: function () {
      return this.uses_eval || this.uses_with
    }
  }, Be)
  var ze = be("Toplevel", "globals", {
    $documentation: "The toplevel scope",
    $propdoc: {
      globals: "[Map/S] a map of name -> SymbolDef for all undeclared names"
    },
    wrap_commonjs: function (e) {
      var /* [auto-meaningful-name] */this$body = this.body
      var n = "(function(exports){'$ORIG';})(typeof " + e + "=='undefined'?(" + e + "={}):" + e + ");"
      return (n = ye(n)).transform(new jn(function (e) {
        if (e instanceof Oe && "$ORIG" == e.value) {
          return w.splice(this$body)
        }
      }))
    },
    wrap_enclose: function (e) {
      if ("string" != typeof e) {
        e = ""
      }
      var t = e.indexOf(":")
      if (t < 0) {
        t = e.length
      }
      var /* [auto-meaningful-name] */this$body = this.body
      return ye(["(function(", e.slice(0, t), "){\"$ORIG\"})(", e.slice(t + 1), ")"].join("")).transform(new jn(function (e) {
        if (e instanceof Oe && "$ORIG" == e.value) {
          return w.splice(this$body)
        }
      }))
    }
  }, Ge)
  var Qe = be("Expansion", "expression", {
    $documentation: "An expandible argument, such as ...rest, a splat, such as [1,2,...all], or an expansion in a variable declaration, such as var [first, ...rest] = list",
    $propdoc: {
      expression: "[AST_Node] the thing to be expanded"
    },
    _walk: function (e) {
      return e._visit(this, function () {
        this.expression.walk(e)
      })
    },
    _children_backwards: function (e) {
      e(this.expression)
    }
  })
  var We = be("Lambda", "name argnames uses_arguments is_generator async", {
    $documentation: "Base class for functions",
    $propdoc: {
      name: "[AST_SymbolDeclaration?] the name of this function",
      argnames: "[AST_SymbolFunarg|AST_Destructuring|AST_Expansion|AST_DefaultAssign*] array of function arguments, destructurings, or expanding arguments",
      uses_arguments: "[boolean/S] tells whether this function accesses the arguments array",
      is_generator: "[boolean] is this a generator method",
      async: "[boolean] is this method async"
    },
    args_as_names: function () {
      for (var e = [], t = 0; t < this.argnames.length; t++) {
        if (this.argnames[t] instanceof $e) {
          e.push.apply(e, c(this.argnames[t].all_symbols()))
        } else {
          e.push(this.argnames[t])
        }
      }
      return e
    },
    _walk: function (e) {
      return e._visit(this, function () {
        if (this.name) {
          this.name._walk(e)
        }
        for (var /* [auto-meaningful-name] */this$argnames = this.argnames, n = 0, /* [auto-meaningful-name] */this$argnames$length = this$argnames.length; n < this$argnames$length; n++) {
          this$argnames[n]._walk(e)
        }
        Se(this, e)
      })
    },
    _children_backwards: function (e) {
      for (var /* [auto-meaningful-name] */this$body$length = this.body.length; this$body$length--;) {
        e(this.body[this$body$length])
      }
      for (this$body$length = this.argnames.length; this$body$length--;) {
        e(this.argnames[this$body$length])
      }
      if (this.name) {
        e(this.name)
      }
    }
  }, Ge)
  var Ke = be("Accessor", null, {
    $documentation: "A setter/getter function.  The `name` property is always null."
  }, We)
  var Xe = be("Function", null, {
    $documentation: "A function expression"
  }, We)
  var Ye = be("Arrow", null, {
    $documentation: "An ES6 Arrow function ((a) => b)"
  }, We)
  var qe = be("Defun", null, {
    $documentation: "A function definition"
  }, We)
  var $e = be("Destructuring", "names is_array", {
    $documentation: "A destructuring of several names. Used in destructuring assignment and with destructuring function argument names",
    $propdoc: {
      names: "[AST_Node*] Array of properties or elements",
      is_array: "[Boolean] Whether the destructuring represents an object or array"
    },
    _walk: function (e) {
      return e._visit(this, function () {
        this.names.forEach(function (t) {
          t._walk(e)
        })
      })
    },
    _children_backwards: function (e) {
      for (var /* [auto-meaningful-name] */this$names$length = this.names.length; this$names$length--;) {
        e(this.names[this$names$length])
      }
    },
    all_symbols: function () {
      var e = []
      this.walk(new Ln(function (t) {
        if (t instanceof qt) {
          e.push(t)
        }
      }))
      return e
    }
  })
  var Je = be("PrefixedTemplateString", "template_string prefix", {
    $documentation: "A templatestring with a prefix, such as String.raw`foobarbaz`",
    $propdoc: {
      template_string: "[AST_TemplateString] The template string",
      prefix: "[AST_SymbolRef|AST_PropAccess] The prefix, which can be a symbol such as `foo` or a dotted expression such as `String.raw`."
    },
    _walk: function (e) {
      return e._visit(this, function () {
        this.prefix._walk(e)
        this.template_string._walk(e)
      })
    },
    _children_backwards: function (e) {
      e(this.template_string)
      e(this.prefix)
    }
  })
  var Ze = be("TemplateString", "segments", {
    $documentation: "A template string literal",
    $propdoc: {
      segments: "[AST_Node*] One or more segments, starting with AST_TemplateSegment. AST_Node may follow AST_TemplateSegment, but each AST_Node must be followed by AST_TemplateSegment."
    },
    _walk: function (e) {
      return e._visit(this, function () {
        this.segments.forEach(function (t) {
          t._walk(e)
        })
      })
    },
    _children_backwards: function (e) {
      for (var /* [auto-meaningful-name] */this$segments$length = this.segments.length; this$segments$length--;) {
        e(this.segments[this$segments$length])
      }
    }
  })
  var et = be("TemplateSegment", "value raw", {
    $documentation: "A segment of a template string literal",
    $propdoc: {
      value: "Content of the segment",
      raw: "Raw content of the segment"
    }
  })
  var tt = be("Jump", null, {
    $documentation: "Base class for “jumps” (for now that's `return`, `throw`, `break` and `continue`)"
  }, xe)
  var nt = be("Exit", "value", {
    $documentation: "Base class for “exits” (`return` and `throw`)",
    $propdoc: {
      value: "[AST_Node?] the value returned or thrown by this statement; could be null for AST_Return"
    },
    _walk: function (e) {
      return e._visit(this, this.value && function () {
        this.value._walk(e)
      })
    },
    _children_backwards: function (e) {
      if (this.value) {
        e(this.value)
      }
    }
  }, tt)
  var rt = be("Return", null, {
    $documentation: "A `return` statement"
  }, nt)
  var it = be("Throw", null, {
    $documentation: "A `throw` statement"
  }, nt)
  var ot = be("LoopControl", "label", {
    $documentation: "Base class for loop control statements (`break` and `continue`)",
    $propdoc: {
      label: "[AST_LabelRef?] the label, or null if none"
    },
    _walk: function (e) {
      return e._visit(this, this.label && function () {
        this.label._walk(e)
      })
    },
    _children_backwards: function (e) {
      if (this.label) {
        e(this.label)
      }
    }
  }, tt)
  var at = be("Break", null, {
    $documentation: "A `break` statement"
  }, ot)
  var st = be("Continue", null, {
    $documentation: "A `continue` statement"
  }, ot)
  var ct = be("Await", "expression", {
    $documentation: "An `await` statement",
    $propdoc: {
      expression: "[AST_Node] the mandatory expression being awaited"
    },
    _walk: function (e) {
      return e._visit(this, function () {
        this.expression._walk(e)
      })
    },
    _children_backwards: function (e) {
      e(this.expression)
    }
  })
  var ut = be("Yield", "expression is_star", {
    $documentation: "A `yield` statement",
    $propdoc: {
      expression: "[AST_Node?] the value returned or thrown by this statement; could be null (representing undefined) but only when is_star is set to false",
      is_star: "[Boolean] Whether this is a yield or yield* statement"
    },
    _walk: function (e) {
      return e._visit(this, this.expression && function () {
        this.expression._walk(e)
      })
    },
    _children_backwards: function (e) {
      if (this.expression) {
        e(this.expression)
      }
    }
  })
  var lt = be("If", "condition alternative", {
    $documentation: "A `if` statement",
    $propdoc: {
      condition: "[AST_Node] the `if` condition",
      alternative: "[AST_Statement?] the `else` part, or null if not present"
    },
    _walk: function (e) {
      return e._visit(this, function () {
        this.condition._walk(e)
        this.body._walk(e)
        if (this.alternative) {
          this.alternative._walk(e)
        }
      })
    },
    _children_backwards: function (e) {
      if (this.alternative) {
        e(this.alternative)
      }
      e(this.body)
      e(this.condition)
    }
  }, Re)
  var ft = be("Switch", "expression", {
    $documentation: "A `switch` statement",
    $propdoc: {
      expression: "[AST_Node] the `switch` “discriminant”"
    },
    _walk: function (e) {
      return e._visit(this, function () {
        this.expression._walk(e)
        Se(this, e)
      })
    },
    _children_backwards: function (e) {
      for (var /* [auto-meaningful-name] */this$body$length = this.body.length; this$body$length--;) {
        e(this.body[this$body$length])
      }
      e(this.expression)
    }
  }, Be)
  var dt = be("SwitchBranch", null, {
    $documentation: "Base class for `switch` branches"
  }, Be)
  var ht = be("Default", null, {
    $documentation: "A `default` switch branch"
  }, dt)
  var pt = be("Case", "expression", {
    $documentation: "A `case` switch branch",
    $propdoc: {
      expression: "[AST_Node] the `case` expression"
    },
    _walk: function (e) {
      return e._visit(this, function () {
        this.expression._walk(e)
        Se(this, e)
      })
    },
    _children_backwards: function (e) {
      for (var /* [auto-meaningful-name] */this$body$length = this.body.length; this$body$length--;) {
        e(this.body[this$body$length])
      }
      e(this.expression)
    }
  }, dt)
  var _t = be("Try", "bcatch bfinally", {
    $documentation: "A `try` statement",
    $propdoc: {
      bcatch: "[AST_Catch?] the catch block, or null if not present",
      bfinally: "[AST_Finally?] the finally block, or null if not present"
    },
    _walk: function (e) {
      return e._visit(this, function () {
        Se(this, e)
        if (this.bcatch) {
          this.bcatch._walk(e)
        }
        if (this.bfinally) {
          this.bfinally._walk(e)
        }
      })
    },
    _children_backwards: function (e) {
      if (this.bfinally) {
        e(this.bfinally)
      }
      if (this.bcatch) {
        e(this.bcatch)
      }
      for (var /* [auto-meaningful-name] */this$body$length = this.body.length; this$body$length--;) {
        e(this.body[this$body$length])
      }
    }
  }, Be)
  var At = be("Catch", "argname", {
    $documentation: "A `catch` node; only makes sense as part of a `try` statement",
    $propdoc: {
      argname: "[AST_SymbolCatch|AST_Destructuring|AST_Expansion|AST_DefaultAssign] symbol for the exception"
    },
    _walk: function (e) {
      return e._visit(this, function () {
        if (this.argname) {
          this.argname._walk(e)
        }
        Se(this, e)
      })
    },
    _children_backwards: function (e) {
      for (var /* [auto-meaningful-name] */this$body$length = this.body.length; this$body$length--;) {
        e(this.body[this$body$length])
      }
      if (this.argname) {
        e(this.argname)
      }
    }
  }, Be)
  var gt = be("Finally", null, {
    $documentation: "A `finally` node; only makes sense as part of a `try` statement"
  }, Be)
  var vt = be("Definitions", "definitions", {
    $documentation: "Base class for `var` or `const` nodes (variable declarations/initializations)",
    $propdoc: {
      definitions: "[AST_VarDef*] array of variable definitions"
    },
    _walk: function (e) {
      return e._visit(this, function () {
        for (var /* [auto-meaningful-name] */this$definitions = this.definitions, n = 0, /* [auto-meaningful-name] */this$definitions$length = this$definitions.length; n < this$definitions$length; n++) {
          this$definitions[n]._walk(e)
        }
      })
    },
    _children_backwards: function (e) {
      for (var /* [auto-meaningful-name] */this$definitions$length = this.definitions.length; this$definitions$length--;) {
        e(this.definitions[this$definitions$length])
      }
    }
  }, xe)
  var mt = be("Var", null, {
    $documentation: "A `var` statement"
  }, vt)
  var yt = be("Let", null, {
    $documentation: "A `let` statement"
  }, vt)
  var bt = be("Const", null, {
    $documentation: "A `const` statement"
  }, vt)
  var wt = be("VarDef", "name value", {
    $documentation: "A variable declaration; only appears in a AST_Definitions node",
    $propdoc: {
      name: "[AST_Destructuring|AST_SymbolConst|AST_SymbolLet|AST_SymbolVar] name of the variable",
      value: "[AST_Node?] initializer, or null of there's no initializer"
    },
    _walk: function (e) {
      return e._visit(this, function () {
        this.name._walk(e)
        if (this.value) {
          this.value._walk(e)
        }
      })
    },
    _children_backwards: function (e) {
      if (this.value) {
        e(this.value)
      }
      e(this.name)
    }
  })
  var Et = be("NameMapping", "foreign_name name", {
    $documentation: "The part of the export/import statement that declare names from a module.",
    $propdoc: {
      foreign_name: "[AST_SymbolExportForeign|AST_SymbolImportForeign] The name being exported/imported (as specified in the module)",
      name: "[AST_SymbolExport|AST_SymbolImport] The name as it is visible to this module."
    },
    _walk: function (e) {
      return e._visit(this, function () {
        this.foreign_name._walk(e)
        this.name._walk(e)
      })
    },
    _children_backwards: function (e) {
      e(this.name)
      e(this.foreign_name)
    }
  })
  var xt = be("Import", "imported_name imported_names module_name", {
    $documentation: "An `import` statement",
    $propdoc: {
      imported_name: "[AST_SymbolImport] The name of the variable holding the module's default export.",
      imported_names: "[AST_NameMapping*] The names of non-default imported variables",
      module_name: "[AST_String] String literal describing where this module came from"
    },
    _walk: function (e) {
      return e._visit(this, function () {
        if (this.imported_name) {
          this.imported_name._walk(e)
        }
        if (this.imported_names) {
          this.imported_names.forEach(function (t) {
            t._walk(e)
          })
        }
        this.module_name._walk(e)
      })
    },
    _children_backwards: function (e) {
      e(this.module_name)
      if (this.imported_names) {
        for (var /* [auto-meaningful-name] */this$imported_names$length = this.imported_names.length; this$imported_names$length--;) {
          e(this.imported_names[this$imported_names$length])
        }
      }
      if (this.imported_name) {
        e(this.imported_name)
      }
    }
  })
  var Ct = be("Export", "exported_definition exported_value is_default exported_names module_name", {
    $documentation: "An `export` statement",
    $propdoc: {
      exported_definition: "[AST_Defun|AST_Definitions|AST_DefClass?] An exported definition",
      exported_value: "[AST_Node?] An exported value",
      exported_names: "[AST_NameMapping*?] List of exported names",
      module_name: "[AST_String?] Name of the file to load exports from",
      is_default: "[Boolean] Whether this is the default exported value of this module"
    },
    _walk: function (e) {
      return e._visit(this, function () {
        if (this.exported_definition) {
          this.exported_definition._walk(e)
        }
        if (this.exported_value) {
          this.exported_value._walk(e)
        }
        if (this.exported_names) {
          this.exported_names.forEach(function (t) {
            t._walk(e)
          })
        }
        if (this.module_name) {
          this.module_name._walk(e)
        }
      })
    },
    _children_backwards: function (e) {
      if (this.module_name) {
        e(this.module_name)
      }
      if (this.exported_names) {
        for (var /* [auto-meaningful-name] */this$exported_names$length = this.exported_names.length; this$exported_names$length--;) {
          e(this.exported_names[this$exported_names$length])
        }
      }
      if (this.exported_value) {
        e(this.exported_value)
      }
      if (this.exported_definition) {
        e(this.exported_definition)
      }
    }
  }, xe)
  var Ot = be("Call", "expression args _annotations", {
    $documentation: "A function call expression",
    $propdoc: {
      expression: "[AST_Node] expression to invoke as function",
      args: "[AST_Node*] array of arguments",
      _annotations: "[number] bitfield containing information about the call"
    },
    initialize: function () {
      if (null == this._annotations) {
        this._annotations = 0
      }
    },
    _walk: function (e) {
      return e._visit(this, function () {
        for (var /* [auto-meaningful-name] */this$args = this.args, n = 0, /* [auto-meaningful-name] */this$args$length = this$args.length; n < this$args$length; n++) {
          this$args[n]._walk(e)
        }
        this.expression._walk(e)
      })
    },
    _children_backwards: function (e) {
      for (var /* [auto-meaningful-name] */this$args$length = this.args.length; this$args$length--;) {
        e(this.args[this$args$length])
      }
      e(this.expression)
    }
  })
  var kt = be("New", null, {
    $documentation: "An object instantiation.  Derives from a function call since it has exactly the same properties"
  }, Ot)
  var St = be("Sequence", "expressions", {
    $documentation: "A sequence expression (comma-separated expressions)",
    $propdoc: {
      expressions: "[AST_Node*] array of expressions (at least two)"
    },
    _walk: function (e) {
      return e._visit(this, function () {
        this.expressions.forEach(function (t) {
          t._walk(e)
        })
      })
    },
    _children_backwards: function (e) {
      for (var /* [auto-meaningful-name] */this$expressions$length = this.expressions.length; this$expressions$length--;) {
        e(this.expressions[this$expressions$length])
      }
    }
  })
  var Tt = be("PropAccess", "expression property", {
    $documentation: "Base class for property access expressions, i.e. `a.foo` or `a[\"foo\"]`",
    $propdoc: {
      expression: "[AST_Node] the “container” expression",
      property: "[AST_Node|string] the property to access.  For AST_Dot this is always a plain string, while for AST_Sub it's an arbitrary AST_Node"
    }
  })
  var Bt = be("Dot", "quote", {
    $documentation: "A dotted property access expression",
    $propdoc: {
      quote: "[string] the original quote character when transformed from AST_Sub"
    },
    _walk: function (e) {
      return e._visit(this, function () {
        this.expression._walk(e)
      })
    },
    _children_backwards: function (e) {
      e(this.expression)
    }
  }, Tt)
  var Dt = be("Sub", null, {
    $documentation: "Index-style property access, i.e. `a[\"foo\"]`",
    _walk: function (e) {
      return e._visit(this, function () {
        this.expression._walk(e)
        this.property._walk(e)
      })
    },
    _children_backwards: function (e) {
      e(this.property)
      e(this.expression)
    }
  }, Tt)
  var It = be("Unary", "operator expression", {
    $documentation: "Base class for unary expressions",
    $propdoc: {
      operator: "[string] the operator",
      expression: "[AST_Node] expression that this unary operator applies to"
    },
    _walk: function (e) {
      return e._visit(this, function () {
        this.expression._walk(e)
      })
    },
    _children_backwards: function (e) {
      e(this.expression)
    }
  })
  var Rt = be("UnaryPrefix", null, {
    $documentation: "Unary prefix expression, i.e. `typeof i` or `++i`"
  }, It)
  var Ft = be("UnaryPostfix", null, {
    $documentation: "Unary postfix expression, i.e. `i++`"
  }, It)
  var Pt = be("Binary", "operator left right", {
    $documentation: "Binary expression, i.e. `a + b`",
    $propdoc: {
      left: "[AST_Node] left-hand side expression",
      operator: "[string] the operator",
      right: "[AST_Node] right-hand side expression"
    },
    _walk: function (e) {
      return e._visit(this, function () {
        this.left._walk(e)
        this.right._walk(e)
      })
    },
    _children_backwards: function (e) {
      e(this.right)
      e(this.left)
    }
  })
  var Nt = be("Conditional", "condition consequent alternative", {
    $documentation: "Conditional expression using the ternary operator, i.e. `a ? b : c`",
    $propdoc: {
      condition: "[AST_Node]",
      consequent: "[AST_Node]",
      alternative: "[AST_Node]"
    },
    _walk: function (e) {
      return e._visit(this, function () {
        this.condition._walk(e)
        this.consequent._walk(e)
        this.alternative._walk(e)
      })
    },
    _children_backwards: function (e) {
      e(this.alternative)
      e(this.consequent)
      e(this.condition)
    }
  })
  var Mt = be("Assign", null, {
    $documentation: "An assignment expression — `a = b + 5`"
  }, Pt)
  var Lt = be("DefaultAssign", null, {
    $documentation: "A default assignment expression like in `(a = 3) => a`"
  }, Pt)
  var jt = be("Array", "elements", {
    $documentation: "An array literal",
    $propdoc: {
      elements: "[AST_Node*] array of elements"
    },
    _walk: function (e) {
      return e._visit(this, function () {
        for (var /* [auto-meaningful-name] */this$elements = this.elements, n = 0, /* [auto-meaningful-name] */this$elements$length = this$elements.length; n < this$elements$length; n++) {
          this$elements[n]._walk(e)
        }
      })
    },
    _children_backwards: function (e) {
      for (var /* [auto-meaningful-name] */this$elements$length = this.elements.length; this$elements$length--;) {
        e(this.elements[this$elements$length])
      }
    }
  })
  var Ut = be("Object", "properties", {
    $documentation: "An object literal",
    $propdoc: {
      properties: "[AST_ObjectProperty*] array of properties"
    },
    _walk: function (e) {
      return e._visit(this, function () {
        for (var /* [auto-meaningful-name] */this$properties = this.properties, n = 0, /* [auto-meaningful-name] */this$properties$length = this$properties.length; n < this$properties$length; n++) {
          this$properties[n]._walk(e)
        }
      })
    },
    _children_backwards: function (e) {
      for (var /* [auto-meaningful-name] */this$properties$length = this.properties.length; this$properties$length--;) {
        e(this.properties[this$properties$length])
      }
    }
  })
  var Ht = be("ObjectProperty", "key value", {
    $documentation: "Base class for literal object properties",
    $propdoc: {
      key: "[string|AST_Node] property name. For ObjectKeyVal this is a string. For getters, setters and computed property this is an AST_Node.",
      value: "[AST_Node] property value.  For getters and setters this is an AST_Accessor."
    },
    _walk: function (e) {
      return e._visit(this, function () {
        if (this.key instanceof Ee) {
          this.key._walk(e)
        }
        this.value._walk(e)
      })
    },
    _children_backwards: function (e) {
      e(this.value)
      if (this.key instanceof Ee) {
        e(this.key)
      }
    }
  })
  var Vt = be("ObjectKeyVal", "quote", {
    $documentation: "A key: value object property",
    $propdoc: {
      quote: "[string] the original quote character"
    },
    computed_key: function () {
      return this.key instanceof Ee
    }
  }, Ht)
  var Gt = be("ObjectSetter", "quote static", {
    $propdoc: {
      quote: "[string|undefined] the original quote character, if any",
      static: "[boolean] whether this is a static setter (classes only)"
    },
    $documentation: "An object setter property",
    computed_key: function () {
      return !(this.key instanceof an)
    }
  }, Ht)
  var zt = be("ObjectGetter", "quote static", {
    $propdoc: {
      quote: "[string|undefined] the original quote character, if any",
      static: "[boolean] whether this is a static getter (classes only)"
    },
    $documentation: "An object getter property",
    computed_key: function () {
      return !(this.key instanceof an)
    }
  }, Ht)
  var Qt = be("ConciseMethod", "quote static is_generator async", {
    $propdoc: {
      quote: "[string|undefined] the original quote character, if any",
      static: "[boolean] is this method static (classes only)",
      is_generator: "[boolean] is this a generator method",
      async: "[boolean] is this method async"
    },
    $documentation: "An ES6 concise method inside an object or class",
    computed_key: function () {
      return !(this.key instanceof an)
    }
  }, Ht)
  var Wt = be("Class", "name extends properties", {
    $propdoc: {
      name: "[AST_SymbolClass|AST_SymbolDefClass?] optional class name.",
      extends: "[AST_Node]? optional parent class",
      properties: "[AST_ObjectProperty*] array of properties"
    },
    $documentation: "An ES6 class",
    _walk: function (e) {
      return e._visit(this, function () {
        if (this.name) {
          this.name._walk(e)
        }
        if (this.extends) {
          this.extends._walk(e)
        }
        this.properties.forEach(function (t) {
          return t._walk(e)
        })
      })
    },
    _children_backwards: function (e) {
      for (var /* [auto-meaningful-name] */this$properties$length = this.properties.length; this$properties$length--;) {
        e(this.properties[this$properties$length])
      }
      if (this.extends) {
        e(this.extends)
      }
      if (this.name) {
        e(this.name)
      }
    }
  }, Ge)
  var Kt = be("ClassProperty", "static quote", {
    $documentation: "A class property",
    $propdoc: {
      static: "[boolean] whether this is a static key",
      quote: "[string] which quote is being used"
    },
    _walk: function (e) {
      return e._visit(this, function () {
        if (this.key instanceof Ee) {
          this.key._walk(e)
        }
        if (this.value instanceof Ee) {
          this.value._walk(e)
        }
      })
    },
    _children_backwards: function (e) {
      if (this.value instanceof Ee) {
        e(this.value)
      }
      if (this.key instanceof Ee) {
        e(this.key)
      }
    },
    computed_key: function () {
      return !(this.key instanceof sn)
    }
  }, Ht)
  var Xt = be("DefClass", null, {
    $documentation: "A class definition"
  }, Wt)
  var Yt = be("ClassExpression", null, {
    $documentation: "A class expression."
  }, Wt)
  var qt = be("Symbol", "scope name thedef", {
    $propdoc: {
      name: "[string] name of this symbol",
      scope: "[AST_Scope/S] the current scope (not necessarily the definition scope)",
      thedef: "[SymbolDef/S] the definition of this symbol"
    },
    $documentation: "Base class for all symbols"
  })
  var $t = be("NewTarget", null, {
    $documentation: "A reference to new.target"
  })
  var Jt = be("SymbolDeclaration", "init", {
    $documentation: "A declaration symbol (symbol in var/const, function name or argument, symbol in catch)"
  }, qt)
  var Zt = be("SymbolVar", null, {
    $documentation: "Symbol defining a variable"
  }, Jt)
  var en = be("SymbolBlockDeclaration", null, {
    $documentation: "Base class for block-scoped declaration symbols"
  }, Jt)
  var tn = be("SymbolConst", null, {
    $documentation: "A constant declaration"
  }, en)
  var nn = be("SymbolLet", null, {
    $documentation: "A block-scoped `let` declaration"
  }, en)
  var rn = be("SymbolFunarg", null, {
    $documentation: "Symbol naming a function argument"
  }, Zt)
  var on = be("SymbolDefun", null, {
    $documentation: "Symbol defining a function"
  }, Jt)
  var an = be("SymbolMethod", null, {
    $documentation: "Symbol in an object defining a method"
  }, qt)
  var sn = be("SymbolClassProperty", null, {
    $documentation: "Symbol for a class property"
  }, qt)
  var cn = be("SymbolLambda", null, {
    $documentation: "Symbol naming a function expression"
  }, Jt)
  var un = be("SymbolDefClass", null, {
    $documentation: "Symbol naming a class's name in a class declaration. Lexically scoped to its containing scope, and accessible within the class."
  }, en)
  var ln = be("SymbolClass", null, {
    $documentation: "Symbol naming a class's name. Lexically scoped to the class."
  }, Jt)
  var fn = be("SymbolCatch", null, {
    $documentation: "Symbol naming the exception in catch"
  }, en)
  var dn = be("SymbolImport", null, {
    $documentation: "Symbol referring to an imported name"
  }, en)
  var hn = be("SymbolImportForeign", null, {
    $documentation: "A symbol imported from a module, but it is defined in the other module, and its real name is irrelevant for this module's purposes"
  }, qt)
  var pn = be("Label", "references", {
    $documentation: "Symbol naming a label (declaration)",
    $propdoc: {
      references: "[AST_LoopControl*] a list of nodes referring to this label"
    },
    initialize: function () {
      this.references = []
      this.thedef = this
    }
  }, qt)
  var _n = be("SymbolRef", null, {
    $documentation: "Reference to some symbol (not definition/declaration)"
  }, qt)
  var An = be("SymbolExport", null, {
    $documentation: "Symbol referring to a name to export"
  }, _n)
  var gn = be("SymbolExportForeign", null, {
    $documentation: "A symbol exported from this module, but it is used in the other module, and its real name is irrelevant for this module's purposes"
  }, qt)
  var vn = be("LabelRef", null, {
    $documentation: "Reference to a label symbol"
  }, qt)
  var mn = be("This", null, {
    $documentation: "The `this` symbol"
  }, qt)
  var yn = be("Super", null, {
    $documentation: "The `super` symbol"
  }, mn)
  var bn = be("Constant", null, {
    $documentation: "Base class for all constants",
    getValue: function () {
      return this.value
    }
  })
  var wn = be("String", "value quote", {
    $documentation: "A string literal",
    $propdoc: {
      value: "[string] the contents of this string",
      quote: "[string] the original quote character"
    }
  }, bn)
  var En = be("Number", "value literal", {
    $documentation: "A number literal",
    $propdoc: {
      value: "[number] the numeric value",
      literal: "[string] numeric value as string (optional)"
    }
  }, bn)
  var xn = be("BigInt", "value", {
    $documentation: "A big int literal",
    $propdoc: {
      value: "[string] big int value"
    }
  }, bn)
  var Cn = be("RegExp", "value", {
    $documentation: "A regexp literal",
    $propdoc: {
      value: "[RegExp] the actual regexp"
    }
  }, bn)
  var On = be("Atom", null, {
    $documentation: "Base class for atoms"
  }, bn)
  var kn = be("Null", null, {
    $documentation: "The `null` atom",
    value: null
  }, On)
  var Sn = be("NaN", null, {
    $documentation: "The impossible value",
    value: NaN
  }, On)
  var Tn = be("Undefined", null, {
    $documentation: "The `undefined` value",
    value: undefined
  }, On)
  var Bn = be("Hole", null, {
    $documentation: "A hole in an array",
    value: undefined
  }, On)
  var Dn = be("Infinity", null, {
    $documentation: "The `Infinity` value",
    value: 1 / 0
  }, On)
  var In = be("Boolean", null, {
    $documentation: "Base class for booleans"
  }, On)
  var Rn = be("False", null, {
    $documentation: "The `false` atom",
    value: false
  }, In)
  var Fn = be("True", null, {
    $documentation: "The `true` atom",
    value: true
  }, In)
  function Pn(e, t) {
    for (var n = arguments.length > 2 && undefined !== arguments[2] ? arguments[2] : [e], r = n.push.bind(n); n.length;) {
      var i = n.pop()
      var o = t(i, n)
      if (o) {
        if (o === Mn) {
          return true
        }
      } else {
        i._children_backwards(r)
      }
    }
    return false
  }
  function Nn(e, t, n) {
    for (var r, i = [e], o = i.push.bind(i), a = n ? n.slice() : [], s = [], c = {
      parent: function () {
        var e = arguments.length > 0 && undefined !== arguments[0] ? arguments[0] : 0
        return -1 === e ? r : n && e >= a.length ? (e -= a.length, n[n.length - (e + 1)]) : a[a.length - (1 + e)]
      }
    }; i.length;) {
      for (r = i.pop(); s.length && i.length == s[s.length - 1];) {
        a.pop()
        s.pop()
      }
      var u = t(r, c)
      if (u) {
        if (u === Mn) {
          return true
        }
      } else {
        var /* [auto-meaningful-name] */i$length = i.length
        r._children_backwards(o)
        if (i.length > i$length) {
          a.push(r)
          s.push(i$length - 1)
        }
      }
    }
    return false
  }
  var Mn = Symbol("abort walk")
  var Ln = function () {
    function e(t) {
      u(this, e)
      this.visit = t
      this.stack = []
      this.directives = Object.create(null)
    }
    s(e, [
      {
        key: "_visit",
        value: function (e, t) {
          this.push(e)
          var n = this.visit(e, t ? function () {
            t.call(e)
          } : g)
          if (!n && t) {
            t.call(e)
          }
          this.pop()
          return n
        }
      }, {
        key: "parent",
        value: function (e) {
          return this.stack[this.stack.length - 2 - (e || 0)]
        }
      }, {
        key: "push",
        value: function (e) {
          if (e instanceof We) {
            this.directives = Object.create(this.directives)
          } else {
            if (e instanceof Oe && !this.directives[e.value]) {
              this.directives[e.value] = e
            } else {
              if (e instanceof Wt) {
                this.directives = Object.create(this.directives)
                if (!this.directives["use strict"]) {
                  this.directives["use strict"] = e
                }
              }
            }
          }
          this.stack.push(e)
        }
      }, {
        key: "pop",
        value: function () {
          var e = this.stack.pop()
          if (e instanceof We || e instanceof Wt) {
            this.directives = Object.getPrototypeOf(this.directives)
          }
        }
      }, {
        key: "self",
        value: function () {
          return this.stack[this.stack.length - 1]
        }
      }, {
        key: "find_parent",
        value: function (e) {
          for (var /* [auto-meaningful-name] */this$stack = this.stack, /* [auto-meaningful-name] */this$stack$length = this$stack.length; --this$stack$length >= 0;) {
            var r = this$stack[this$stack$length]
            if (r instanceof e) {
              return r
            }
          }
        }
      }, {
        key: "has_directive",
        value: function (e) {
          var t = this.directives[e]
          if (t) {
            return t
          }
          var n = this.stack[this.stack.length - 1]
          if (n instanceof Ge && n.body) {
            for (var r = 0; r < n.body.length; ++r) {
              var i = n.body[r]
              if (!(i instanceof Oe)) {
                break
              }
              if (i.value == e) {
                return i
              }
            }
          }
        }
      }, {
        key: "loopcontrol_target",
        value: function (e) {
          var /* [auto-meaningful-name] */this$stack = this.stack
          if (e.label) {
            for (var /* [auto-meaningful-name] */this$stack$length = this$stack.length; --this$stack$length >= 0;) {
              if ((r = this$stack[this$stack$length]) instanceof Fe && r.label.name == e.label.name) {
                return r.body
              }
            }
          } else {
            for (this$stack$length = this$stack.length; --this$stack$length >= 0;) {
              var r
              if ((r = this$stack[this$stack$length]) instanceof Pe || e instanceof at && r instanceof ft) {
                return r
              }
            }
          }
        }
      }
    ])
    return e
  }()
  var jn = function (e) {
    l(n, e)
    var t = f(n)
    function n(e, r) {
      var i
      u(this, n);
      (i = t.call(this)).before = e
      i.after = r
      return i
    }
    return n
  }(Ln)
  var Un = 1
  var Hn = 2
  var Vn = 4
  var Gn = Object.freeze({
    __proto__: null,
    AST_Accessor: Ke,
    AST_Array: jt,
    AST_Arrow: Ye,
    AST_Assign: Mt,
    AST_Atom: On,
    AST_Await: ct,
    AST_BigInt: xn,
    AST_Binary: Pt,
    AST_Block: Be,
    AST_BlockStatement: De,
    AST_Boolean: In,
    AST_Break: at,
    AST_Call: Ot,
    AST_Case: pt,
    AST_Catch: At,
    AST_Class: Wt,
    AST_ClassExpression: Yt,
    AST_ClassProperty: Kt,
    AST_ConciseMethod: Qt,
    AST_Conditional: Nt,
    AST_Const: bt,
    AST_Constant: bn,
    AST_Continue: st,
    AST_Debugger: Ce,
    AST_Default: ht,
    AST_DefaultAssign: Lt,
    AST_DefClass: Xt,
    AST_Definitions: vt,
    AST_Defun: qe,
    AST_Destructuring: $e,
    AST_Directive: Oe,
    AST_Do: Me,
    AST_Dot: Bt,
    AST_DWLoop: Ne,
    AST_EmptyStatement: Ie,
    AST_Exit: nt,
    AST_Expansion: Qe,
    AST_Export: Ct,
    AST_False: Rn,
    AST_Finally: gt,
    AST_For: je,
    AST_ForIn: Ue,
    AST_ForOf: He,
    AST_Function: Xe,
    AST_Hole: Bn,
    AST_If: lt,
    AST_Import: xt,
    AST_Infinity: Dn,
    AST_IterationStatement: Pe,
    AST_Jump: tt,
    AST_Label: pn,
    AST_LabeledStatement: Fe,
    AST_LabelRef: vn,
    AST_Lambda: We,
    AST_Let: yt,
    AST_LoopControl: ot,
    AST_NameMapping: Et,
    AST_NaN: Sn,
    AST_New: kt,
    AST_NewTarget: $t,
    AST_Node: Ee,
    AST_Null: kn,
    AST_Number: En,
    AST_Object: Ut,
    AST_ObjectGetter: zt,
    AST_ObjectKeyVal: Vt,
    AST_ObjectProperty: Ht,
    AST_ObjectSetter: Gt,
    AST_PrefixedTemplateString: Je,
    AST_PropAccess: Tt,
    AST_RegExp: Cn,
    AST_Return: rt,
    AST_Scope: Ge,
    AST_Sequence: St,
    AST_SimpleStatement: ke,
    AST_Statement: xe,
    AST_StatementWithBody: Re,
    AST_String: wn,
    AST_Sub: Dt,
    AST_Super: yn,
    AST_Switch: ft,
    AST_SwitchBranch: dt,
    AST_Symbol: qt,
    AST_SymbolBlockDeclaration: en,
    AST_SymbolCatch: fn,
    AST_SymbolClass: ln,
    AST_SymbolClassProperty: sn,
    AST_SymbolConst: tn,
    AST_SymbolDeclaration: Jt,
    AST_SymbolDefClass: un,
    AST_SymbolDefun: on,
    AST_SymbolExport: An,
    AST_SymbolExportForeign: gn,
    AST_SymbolFunarg: rn,
    AST_SymbolImport: dn,
    AST_SymbolImportForeign: hn,
    AST_SymbolLambda: cn,
    AST_SymbolLet: nn,
    AST_SymbolMethod: an,
    AST_SymbolRef: _n,
    AST_SymbolVar: Zt,
    AST_TemplateSegment: et,
    AST_TemplateString: Ze,
    AST_This: mn,
    AST_Throw: it,
    AST_Token: we,
    AST_Toplevel: ze,
    AST_True: Fn,
    AST_Try: _t,
    AST_Unary: It,
    AST_UnaryPostfix: Ft,
    AST_UnaryPrefix: Rt,
    AST_Undefined: Tn,
    AST_Var: mt,
    AST_VarDef: wt,
    AST_While: Le,
    AST_With: Ve,
    AST_Yield: ut,
    TreeTransformer: jn,
    TreeWalker: Ln,
    walk: Pn,
    walk_abort: Mn,
    walk_body: Se,
    walk_parent: Nn,
    _INLINE: Hn,
    _NOINLINE: Vn,
    _PURE: Un
  })
  function zn(e, t) {
    e.DEFMETHOD("transform", function (e, n) {
      var r = undefined
      e.push(this)
      if (e.before) {
        r = e.before(this, t, n)
      }
      if (undefined === r && (t(r = this, e), e.after)) {
        var i = e.after(r, n)
        if (undefined !== i) {
          r = i
        }
      }
      e.pop()
      return r
    })
  }
  function Qn(e, t) {
    return w(e, function (e) {
      return e.transform(t, true)
    })
  }
  function Wn(e) {
    for (var t, n = e.parent(-1), r = 0; t = e.parent(r); r++) {
      if (t instanceof xe && t.body === n) {
        return true
      }
      if (!(t instanceof St && t.expressions[0] === n || "Call" === t.TYPE && t.expression === n || t instanceof Je && t.prefix === n || t instanceof Bt && t.expression === n || t instanceof Dt && t.expression === n || t instanceof Nt && t.condition === n || t instanceof Pt && t.left === n || t instanceof Ft && t.expression === n)) {
        return false
      }
      n = t
    }
  }
  zn(Ee, g)
  zn(Fe, function (e, t) {
    e.label = e.label.transform(t)
    e.body = e.body.transform(t)
  })
  zn(ke, function (e, t) {
    e.body = e.body.transform(t)
  })
  zn(Be, function (e, t) {
    e.body = Qn(e.body, t)
  })
  zn(Me, function (e, t) {
    e.body = e.body.transform(t)
    e.condition = e.condition.transform(t)
  })
  zn(Le, function (e, t) {
    e.condition = e.condition.transform(t)
    e.body = e.body.transform(t)
  })
  zn(je, function (e, t) {
    if (e.init) {
      e.init = e.init.transform(t)
    }
    if (e.condition) {
      e.condition = e.condition.transform(t)
    }
    if (e.step) {
      e.step = e.step.transform(t)
    }
    e.body = e.body.transform(t)
  })
  zn(Ue, function (e, t) {
    e.init = e.init.transform(t)
    e.object = e.object.transform(t)
    e.body = e.body.transform(t)
  })
  zn(Ve, function (e, t) {
    e.expression = e.expression.transform(t)
    e.body = e.body.transform(t)
  })
  zn(nt, function (e, t) {
    if (e.value) {
      e.value = e.value.transform(t)
    }
  })
  zn(ot, function (e, t) {
    if (e.label) {
      e.label = e.label.transform(t)
    }
  })
  zn(lt, function (e, t) {
    e.condition = e.condition.transform(t)
    e.body = e.body.transform(t)
    if (e.alternative) {
      e.alternative = e.alternative.transform(t)
    }
  })
  zn(ft, function (e, t) {
    e.expression = e.expression.transform(t)
    e.body = Qn(e.body, t)
  })
  zn(pt, function (e, t) {
    e.expression = e.expression.transform(t)
    e.body = Qn(e.body, t)
  })
  zn(_t, function (e, t) {
    e.body = Qn(e.body, t)
    if (e.bcatch) {
      e.bcatch = e.bcatch.transform(t)
    }
    if (e.bfinally) {
      e.bfinally = e.bfinally.transform(t)
    }
  })
  zn(At, function (e, t) {
    if (e.argname) {
      e.argname = e.argname.transform(t)
    }
    e.body = Qn(e.body, t)
  })
  zn(vt, function (e, t) {
    e.definitions = Qn(e.definitions, t)
  })
  zn(wt, function (e, t) {
    e.name = e.name.transform(t)
    if (e.value) {
      e.value = e.value.transform(t)
    }
  })
  zn($e, function (e, t) {
    e.names = Qn(e.names, t)
  })
  zn(We, function (e, t) {
    if (e.name) {
      e.name = e.name.transform(t)
    }
    e.argnames = Qn(e.argnames, t)
    if (e.body instanceof Ee) {
      e.body = e.body.transform(t)
    } else {
      e.body = Qn(e.body, t)
    }
  })
  zn(Ot, function (e, t) {
    e.expression = e.expression.transform(t)
    e.args = Qn(e.args, t)
  })
  zn(St, function (e, t) {
    var n = Qn(e.expressions, t)
    e.expressions = n.length ? n : [
      new En({
        value: 0
      })
    ]
  })
  zn(Bt, function (e, t) {
    e.expression = e.expression.transform(t)
  })
  zn(Dt, function (e, t) {
    e.expression = e.expression.transform(t)
    e.property = e.property.transform(t)
  })
  zn(ut, function (e, t) {
    if (e.expression) {
      e.expression = e.expression.transform(t)
    }
  })
  zn(ct, function (e, t) {
    e.expression = e.expression.transform(t)
  })
  zn(It, function (e, t) {
    e.expression = e.expression.transform(t)
  })
  zn(Pt, function (e, t) {
    e.left = e.left.transform(t)
    e.right = e.right.transform(t)
  })
  zn(Nt, function (e, t) {
    e.condition = e.condition.transform(t)
    e.consequent = e.consequent.transform(t)
    e.alternative = e.alternative.transform(t)
  })
  zn(jt, function (e, t) {
    e.elements = Qn(e.elements, t)
  })
  zn(Ut, function (e, t) {
    e.properties = Qn(e.properties, t)
  })
  zn(Ht, function (e, t) {
    if (e.key instanceof Ee) {
      e.key = e.key.transform(t)
    }
    if (e.value) {
      e.value = e.value.transform(t)
    }
  })
  zn(Wt, function (e, t) {
    if (e.name) {
      e.name = e.name.transform(t)
    }
    if (e.extends) {
      e.extends = e.extends.transform(t)
    }
    e.properties = Qn(e.properties, t)
  })
  zn(Qe, function (e, t) {
    e.expression = e.expression.transform(t)
  })
  zn(Et, function (e, t) {
    e.foreign_name = e.foreign_name.transform(t)
    e.name = e.name.transform(t)
  })
  zn(xt, function (e, t) {
    if (e.imported_name) {
      e.imported_name = e.imported_name.transform(t)
    }
    if (e.imported_names) {
      Qn(e.imported_names, t)
    }
    e.module_name = e.module_name.transform(t)
  })
  zn(Ct, function (e, t) {
    if (e.exported_definition) {
      e.exported_definition = e.exported_definition.transform(t)
    }
    if (e.exported_value) {
      e.exported_value = e.exported_value.transform(t)
    }
    if (e.exported_names) {
      Qn(e.exported_names, t)
    }
    if (e.module_name) {
      e.module_name = e.module_name.transform(t)
    }
  })
  zn(Ze, function (e, t) {
    e.segments = Qn(e.segments, t)
  })
  zn(Je, function (e, t) {
    e.prefix = e.prefix.transform(t)
    e.template_string = e.template_string.transform(t)
  })
  var Kn = /^$|[;{][\s\n]*$/
  var Xn = /[@#]__(PURE|INLINE|NOINLINE)__/g
  function Yn(e) {
    return ("comment2" === e.type || "comment1" === e.type) && /@preserve|@lic|@cc_on|^\**!/i.test(e.value)
  }
  function qn(e) {
    var t = !e
    if (undefined === (e = A(e, {
      ascii_only: false,
      beautify: false,
      braces: false,
      comments: "some",
      ecma: 5,
      ie8: false,
      indent_level: 4,
      indent_start: 0,
      inline_script: true,
      keep_numbers: false,
      keep_quoted_props: false,
      max_line_len: false,
      preamble: null,
      preserve_annotations: false,
      quote_keys: false,
      quote_style: 0,
      safari10: false,
      semicolons: true,
      shebang: true,
      shorthand: undefined,
      source_map: null,
      webkit: false,
      width: 80,
      wrap_iife: false,
      wrap_func_args: true
    }, true)).shorthand) {
      e.shorthand = e.ecma > 5
    }
    var n = v
    if (e.comments) {
      var /* [auto-meaningful-name] */e$comments = e.comments
      if ("string" == typeof e.comments && /^\/.*\/[a-zA-Z]*$/.test(e.comments)) {
        var i = e.comments.lastIndexOf("/")
        e$comments = new RegExp(e.comments.substr(1, i - 1), e.comments.substr(i + 1))
      }
      n = e$comments instanceof RegExp ? function (e) {
        return "comment5" != e.type && e$comments.test(e.value)
      } : "function" == typeof e$comments ? function (e) {
        return "comment5" != e.type && e$comments(this, e)
      } : "some" === e$comments ? Yn : m
    }
    var o = 0
    var a = 0
    var s = 1
    var c = 0
    var u = ""
    var l = new Set()
    var f = e.ascii_only ? function (t, n) {
      if (e.ecma >= 2015) {
        t = t.replace(/[\ud800-\udbff][\udc00-\udfff]/g, function (e) {
          return "\\u{" + function (e, t) {
            return ne(e.charCodeAt(0)) ? 65536 + (e.charCodeAt(0) - 55296 << 10) + e.charCodeAt(1) - 56320 : e.charCodeAt(0)
          }(e).toString(16) + "}"
        })
      }
      return t.replace(/[\u0000-\u001f\u007f-\uffff]/g, function (e) {
        var t = e.charCodeAt(0).toString(16)
        if (t.length <= 2 && !n) {
          for (; t.length < 2;) {
            t = "0" + t
          }
          return "\\x" + t
        }
        for (; t.length < 4;) {
          t = "0" + t
        }
        return "\\u" + t
      })
    } : function (e) {
      return e.replace(/[\ud800-\udbff][\udc00-\udfff]|([\ud800-\udbff]|[\udc00-\udfff])/g, function (e, t) {
        return t ? "\\u" + t.charCodeAt(0).toString(16) : e
      })
    }
    function d(t, n) {
      var r = function (t, n) {
        var r = 0
        var i = 0
        function o() {
          return "'" + t.replace(/\x27/g, "\\'") + "'"
        }
        function a() {
          return "\"" + t.replace(/\x22/g, "\\\"") + "\""
        }
        t = t.replace(/[\\\b\f\n\r\v\t\x22\x27\u2028\u2029\0\ufeff]/g, function (n, o) {
          switch (n) {
            case "\"":
              ++r
              return "\""
            case "'":
              ++i
              return "'"
            case "\\":
              return "\\\\"
            case "\n":
              return "\\n"
            case "\r":
              return "\\r"
            case "\t":
              return "\\t"
            case "\b":
              return "\\b"
            case "\f":
              return "\\f"
            case "\u000b":
              return e.ie8 ? "\\x0B" : "\\v"
            case " ":
              return "\\u2028"
            case " ":
              return "\\u2029"
            case "﻿":
              return "\\ufeff"
            case "\u0000":
              return /[0-9]/.test(te(t, o + 1)) ? "\\x00" : "\\0"
          }
          return n
        })
        t = f(t)
        if ("`" === n) {
          return "`" + t.replace(/`/g, "\\`") + "`"
        }
        switch (e.quote_style) {
          case 1:
            return o()
          case 2:
            return a()
          case 3:
            return "'" == n ? o() : a()
          default:
            return r > i ? o() : a()
        }
      }(t, n)
      if (e.inline_script) {
        r = (r = (r = r.replace(/<\x2f(script)([>\/\t\n\f\r ])/gi, "<\\/$1$2")).replace(/\x3c!--/g, "\\x3c!--")).replace(/--\x3e/g, "--\\x3e")
      }
      return r
    }
    var h
    var p
    var _ = false
    var y = false
    var b = false
    var w = 0
    var E = false
    var x = false
    var C = -1
    var O = ""
    var k = e.source_map && []
    var T = k ? function () {
      k.forEach(function (t) {
        try {
          e.source_map.add(t.token.file, t.line, t.col, t.token.line, t.token.col, t.name || "name" != t.token.type ? t.name : t.token.value)
        } catch (e) {
          if (null != t.token.file) {
            Ee.warn("Couldn't figure out mapping for {file}:{line},{col} → {cline},{ccol} [{name}]", {
              file: t.token.file,
              line: t.token.line,
              col: t.token.col,
              cline: t.line,
              ccol: t.col,
              name: t.name || ""
            })
          }
        }
      })
      k = []
    } : g
    var B = e.max_line_len ? function () {
      if (a > e.max_line_len) {
        if (w) {
          var t = u.slice(0, w)
          var n = u.slice(w)
          if (k) {
            var r = n.length - a
            k.forEach(function (e) {
              e.line++
              e.col += r
            })
          }
          u = t + "\n" + n
          s++
          c++
          a = n.length
        }
        if (a > e.max_line_len) {
          Ee.warn("Output exceeds {max_line_len} characters", e)
        }
      }
      if (w) {
        w = 0
        T()
      }
    } : g
    var D = S("( [ + * / - , . `")
    function I(t) {
      var n = te(t = String(t), 0)
      if (E && n) {
        E = false
        if ("\n" !== n) {
          I("\n")
          F()
        }
      }
      if (x && n) {
        x = false
        if (!/[\s;})]/.test(n)) {
          R()
        }
      }
      C = -1
      var r = O.charAt(O.length - 1)
      if (b) {
        b = false
        if (!((":" !== r || "}" !== n) && (n && ";}".includes(n) || ";" === r))) {
          if (e.semicolons || D.has(n)) {
            u += ";"
            a++
            c++
          } else {
            B()
            if (a > 0) {
              u += "\n"
              c++
              s++
              a = 0
            }
            if (/^\s+$/.test(t)) {
              b = true
            }
          }
          if (!e.beautify) {
            y = false
          }
        }
      }
      if (y) {
        if (ae(r) && (ae(n) || "\\" == n) || "/" == n && n == r || ("+" == n || "-" == n) && n == O) {
          u += " "
          a++
          c++
        }
        y = false
      }
      if (h) {
        k.push({
          token: h,
          name: p,
          line: s,
          col: a
        })
        h = false
        if (!w) {
          T()
        }
      }
      u += t
      _ = "(" == t[t.length - 1]
      c += t.length
      var i = t.split(/\r?\n/)
      var o = i.length - 1
      s += o
      a += i[0].length
      if (o > 0) {
        B()
        a = i[o].length
      }
      O = t
    }
    var R = e.beautify ? function () {
      I(" ")
    } : function () {
      y = true
    }
    var F = e.beautify ? function (t) {
      var n
      if (e.beautify) {
        I((n = t ? .5 : 0, " ".repeat(e.indent_start + o - n * e.indent_level)))
      }
    } : g
    var P = e.beautify ? function (e, t) {
      if (true === e) {
        e = j()
      }
      var n = o
      o = e
      var r = t()
      o = n
      return r
    } : function (e, t) {
      return t()
    }
    var N = e.beautify ? function () {
      if (C < 0) {
        return I("\n")
      }
      if ("\n" != u[C]) {
        u = u.slice(0, C) + "\n" + u.slice(C)
        c++
        s++
      }
      C++
    } : e.max_line_len ? function () {
      B()
      w = u.length
    } : g
    var M = e.beautify ? function () {
      I(";")
    } : function () {
      b = true
    }
    function L() {
      b = false
      I(";")
    }
    function j() {
      return o + e.indent_level
    }
    function U() {
      if (w) {
        B()
      }
      return u
    }
    function H() {
      for (var e = u.length - 1; e >= 0;) {
        var t = u.charCodeAt(e)
        if (10 === t) {
          return true
        }
        if (32 !== t) {
          return false
        }
        e--
      }
      return true
    }
    function V(t) {
      if (!e.preserve_annotations) {
        t = t.replace(Xn, " ")
      }
      return /^\s*$/.test(t) ? "" : t.replace(/(<\s*\/\s*)(script)/i, "<\\/$2")
    }
    var G = []
    return {
      get: U,
      toString: U,
      indent: F,
      in_directive: false,
      use_asm: null,
      active_scope: null,
      indentation: function () {
        return o
      },
      current_width: function () {
        return a - o
      },
      should_break: function () {
        return e.width && this.current_width() >= e.width
      },
      has_parens: function () {
        return _
      },
      newline: N,
      print: I,
      star: function () {
        I("*")
      },
      space: R,
      comma: function () {
        I(",")
        R()
      },
      colon: function () {
        I(":")
        R()
      },
      last: function () {
        return O
      },
      semicolon: M,
      force_semicolon: L,
      to_utf8: f,
      print_name: function (e) {
        I(function (e) {
          e = e.toString()
          return f(e, true)
        }(e))
      },
      print_string: function (e, t, n) {
        var r = d(e, t)
        if (!(true !== n || r.includes("\\"))) {
          if (!Kn.test(u)) {
            L()
          }
          L()
        }
        I(r)
      },
      print_template_string_chars: function (e) {
        var t = d(e, "`").replace(/\${/g, "\\${")
        return I(t.substr(1, t.length - 2))
      },
      encode_string: d,
      next_indent: j,
      with_indent: P,
      with_block: function (e) {
        var t
        I("{")
        N()
        P(j(), function () {
          t = e()
        })
        F()
        I("}")
        return t
      },
      with_parens: function (e) {
        I("(")
        var t = e()
        I(")")
        return t
      },
      with_square: function (e) {
        I("[")
        var t = e()
        I("]")
        return t
      },
      add_mapping: k ? function (e, t) {
        h = e
        p = t
      } : g,
      option: function (t) {
        return e[t]
      },
      printed_comments: l,
      prepend_comments: t ? g : function (t) {
        var /* [auto-meaningful-name] */t$start = t.start
        if (t$start) {
          var /* [auto-meaningful-name] */this$printed_comments = this.printed_comments
          var o = t instanceof nt && t.value
          if (t$start.comments_before && this$printed_comments.has(t$start.comments_before)) {
            if (!o) {
              return
            }
            t$start.comments_before = []
          }
          var /* [auto-meaningful-name] */t$start$comments_before = t$start.comments_before
          if (!t$start$comments_before) {
            t$start$comments_before = t$start.comments_before = []
          }
          this$printed_comments.add(t$start$comments_before)
          if (o) {
            var s = new Ln(function (e) {
              var t = s.parent()
              if (!(t instanceof nt || t instanceof Pt && t.left === e || "Call" == t.TYPE && t.expression === e || t instanceof Nt && t.condition === e || t instanceof Bt && t.expression === e || t instanceof St && t.expressions[0] === e || t instanceof Dt && t.expression === e || t instanceof Ft)) {
                return true
              }
              if (e.start) {
                var /* [auto-meaningful-name] */e$start$comments_before = e.start.comments_before
                if (e$start$comments_before && !this$printed_comments.has(e$start$comments_before)) {
                  this$printed_comments.add(e$start$comments_before)
                  t$start$comments_before = t$start$comments_before.concat(e$start$comments_before)
                }
              }
            })
            s.push(t)
            t.value.walk(s)
          }
          if (0 == c) {
            if (t$start$comments_before.length > 0 && e.shebang && "comment5" === t$start$comments_before[0].type && !this$printed_comments.has(t$start$comments_before[0])) {
              I("#!" + t$start$comments_before.shift().value + "\n")
              F()
            }
            var /* [auto-meaningful-name] */e$preamble = e.preamble
            if (e$preamble) {
              I(e$preamble.replace(/\r\n?|[\n\u2028\u2029]|\s*$/g, "\n"))
            }
          }
          if (0 != (t$start$comments_before = t$start$comments_before.filter(n, t).filter(function (e) {
            return !this$printed_comments.has(e)
          })).length) {
            var l = H()
            t$start$comments_before.forEach(function (e, t) {
              this$printed_comments.add(e)
              if (!l) {
                if (e.nlb) {
                  I("\n")
                  F()
                  l = true
                } else {
                  if (t > 0) {
                    R()
                  }
                }
              }
              if (/comment[134]/.test(e.type)) {
                if (n = V(e.value)) {
                  I("//" + n + "\n")
                  F()
                }
                l = true
              } else if ("comment2" == e.type) {
                var n
                if (n = V(e.value)) {
                  I("/*" + n + "*/")
                }
                l = false
              }
            })
            if (!l) {
              if (t$start.nlb) {
                I("\n")
                F()
              } else {
                R()
              }
            }
          }
        }
      },
      append_comments: t || n === v ? g : function (e, t) {
        var /* [auto-meaningful-name] */e$end = e.end
        if (e$end) {
          var /* [auto-meaningful-name] */this$printed_comments = this.printed_comments
          var o = e$end[t ? "comments_before" : "comments_after"]
          if (o && !this$printed_comments.has(o) && (e instanceof xe || o.every(function (e) {
            return !/comment[134]/.test(e.type)
          }))) {
            this$printed_comments.add(o)
            var /* [auto-meaningful-name] */u$length = u.length
            o.filter(n, e).forEach(function (e, n) {
              if (!this$printed_comments.has(e)) {
                this$printed_comments.add(e)
                x = false
                if (E) {
                  I("\n")
                  F()
                  E = false
                } else {
                  if (e.nlb && (n > 0 || !H())) {
                    I("\n")
                    F()
                  } else {
                    if (n > 0 || !t) {
                      R()
                    }
                  }
                }
                if (/comment[134]/.test(e.type)) {
                  var r = V(e.value)
                  if (r) {
                    I("//" + r)
                  }
                  E = true
                } else if ("comment2" == e.type) {
                  var o = V(e.value)
                  if (o) {
                    I("/*" + o + "*/")
                  }
                  x = true
                }
              }
            })
            if (u.length > u$length) {
              C = u$length
            }
          }
        }
      },
      line: function () {
        return s
      },
      col: function () {
        return a
      },
      pos: function () {
        return c
      },
      push_node: function (e) {
        G.push(e)
      },
      pop_node: function () {
        return G.pop()
      },
      parent: function (e) {
        return G[G.length - 2 - (e || 0)]
      }
    }
  }
  !function () {
    function e(e, t) {
      e.DEFMETHOD("_codegen", t)
    }
    function t(e, n) {
      if (Array.isArray(e)) {
        e.forEach(function (e) {
          t(e, n)
        })
      } else {
        e.DEFMETHOD("needs_parens", n)
      }
    }
    function n(e, t, n, r) {
      var i = e.length - 1
      n.in_directive = r
      e.forEach(function (e, r) {
        if (!(true !== n.in_directive || e instanceof Oe || e instanceof Ie || e instanceof ke && e.body instanceof wn)) {
          n.in_directive = false
        }
        if (!(e instanceof Ie)) {
          n.indent()
          e.print(n)
          if (!(r == i && t)) {
            n.newline()
            if (t) {
              n.newline()
            }
          }
        }
        if (true === n.in_directive && e instanceof ke && e.body instanceof wn) {
          n.in_directive = false
        }
      })
      n.in_directive = false
    }
    function r(e, t) {
      t.print("{")
      t.with_indent(t.next_indent(), function () {
        t.append_comments(e, true)
      })
      t.print("}")
    }
    function i(e, t, i) {
      if (e.body.length > 0) {
        t.with_block(function () {
          n(e.body, false, t, i)
        })
      } else {
        r(e, t)
      }
    }
    function o(e, t, n) {
      var r = false
      if (n) {
        r = Pn(e, function (e) {
          return e instanceof Ge || (e instanceof Pt && "in" == e.operator ? Mn : undefined)
        })
      }
      e.print(t, r)
    }
    function s(e, t, n) {
      return n.option("quote_keys") ? n.print_string(e) : "" + +e == e && e >= 0 ? n.option("keep_numbers") ? n.print(e) : n.print(f(e)) : (L.has(e) ? n.option("ie8") : n.option("ecma") < 2015 ? !se(e) : !ce(e, true)) || t && n.option("keep_quoted_props") ? n.print_string(e, t) : n.print_name(e)
    }
    Ee.DEFMETHOD("print", function (e, t) {
      var n = this
      var /* [auto-meaningful-name] */n$_codegen = n._codegen
      function i() {
        e.prepend_comments(n)
        n.add_source_map(e)
        n$_codegen(n, e)
        e.append_comments(n)
      }
      if (n instanceof Ge) {
        e.active_scope = n
      } else {
        if (!e.use_asm && n instanceof Oe && "use asm" == n.value) {
          e.use_asm = e.active_scope
        }
      }
      e.push_node(n)
      if (t || n.needs_parens(e)) {
        e.with_parens(i)
      } else {
        i()
      }
      e.pop_node()
      if (n === e.use_asm) {
        e.use_asm = null
      }
    })
    Ee.DEFMETHOD("_print", Ee.prototype.print)
    Ee.DEFMETHOD("print_to_string", function (e) {
      var t = qn(e)
      this.print(t)
      return t.get()
    })
    t(Ee, v)
    t(Xe, function (e) {
      return !(e.has_parens() || !Wn(e)) || !!(e.option("webkit") && (t = e.parent()) instanceof Tt && t.expression === this) || !!(e.option("wrap_iife") && (t = e.parent()) instanceof Ot && t.expression === this) || !!(e.option("wrap_func_args") && (t = e.parent()) instanceof Ot && t.args.includes(this))
      var t
    })
    t(Ye, function (e) {
      var t = e.parent()
      return t instanceof Tt && t.expression === this
    })
    t(Ut, function (e) {
      return !e.has_parens() && Wn(e)
    })
    t(Yt, Wn)
    t(It, function (e) {
      var t = e.parent()
      return t instanceof Tt && t.expression === this || t instanceof Ot && t.expression === this || t instanceof Pt && "**" === t.operator && this instanceof Rt && t.left === this && "++" !== this.operator && "--" !== this.operator
    })
    t(ct, function (e) {
      var t = e.parent()
      return t instanceof Tt && t.expression === this || t instanceof Ot && t.expression === this || e.option("safari10") && t instanceof Rt
    })
    t(St, function (e) {
      var t = e.parent()
      return t instanceof Ot || t instanceof It || t instanceof Pt || t instanceof wt || t instanceof Tt || t instanceof jt || t instanceof Ht || t instanceof Nt || t instanceof Ye || t instanceof Lt || t instanceof Qe || t instanceof He && this === t.object || t instanceof ut || t instanceof Ct
    })
    t(Pt, function (e) {
      var t = e.parent()
      if (t instanceof Ot && t.expression === this) {
        return true
      }
      if (t instanceof It) {
        return true
      }
      if (t instanceof Tt && t.expression === this) {
        return true
      }
      if (t instanceof Pt) {
        var /* [auto-meaningful-name] */t$operator = t.operator
        var /* [auto-meaningful-name] */this$operator = this.operator
        if ("??" === this$operator && ("||" === t$operator || "&&" === t$operator)) {
          return true
        }
        var i = ve[t$operator]
        var o = ve[this$operator]
        if (i > o || i == o && (this === t.right || "**" == t$operator)) {
          return true
        }
      }
    })
    t(ut, function (e) {
      var t = e.parent()
      return t instanceof Pt && "=" !== t.operator || t instanceof Ot && t.expression === this || t instanceof Nt && t.condition === this || t instanceof It || t instanceof Tt && t.expression === this || undefined
    })
    t(Tt, function (e) {
      var t = e.parent()
      if (t instanceof kt && t.expression === this) {
        return Pn(this, function (e) {
          return e instanceof Ge || (e instanceof Ot ? Mn : undefined)
        })
      }
    })
    t(Ot, function (e) {
      var t
      var n = e.parent()
      return !!(n instanceof kt && n.expression === this || n instanceof Ct && n.is_default && this.expression instanceof Xe) || this.expression instanceof Xe && n instanceof Tt && n.expression === this && (t = e.parent(1)) instanceof Mt && t.left === n
    })
    t(kt, function (e) {
      var t = e.parent()
      if (0 === this.args.length && (t instanceof Tt || t instanceof Ot && t.expression === this)) {
        return true
      }
    })
    t(En, function (e) {
      var t = e.parent()
      if (t instanceof Tt && t.expression === this) {
        var n = this.getValue()
        if (n < 0 || /^0/.test(f(n))) {
          return true
        }
      }
    })
    t(xn, function (e) {
      var t = e.parent()
      if (t instanceof Tt && t.expression === this && this.getValue().startsWith("-")) {
        return true
      }
    })
    t([Mt, Nt], function (e) {
      var t = e.parent()
      return t instanceof It || t instanceof Pt && !(t instanceof Mt) || t instanceof Ot && t.expression === this || t instanceof Nt && t.condition === this || t instanceof Tt && t.expression === this || this instanceof Mt && this.left instanceof $e && false === this.left.is_array || undefined
    })
    e(Oe, function (e, t) {
      t.print_string(e.value, e.quote)
      t.semicolon()
    })
    e(Qe, function (e, t) {
      t.print("...")
      e.expression.print(t)
    })
    e($e, function (e, t) {
      t.print(e.is_array ? "[" : "{")
      var /* [auto-meaningful-name] */e$names$length = e.names.length
      e.names.forEach(function (e, r) {
        if (r > 0) {
          t.comma()
        }
        e.print(t)
        if (r == e$names$length - 1 && e instanceof Bn) {
          t.comma()
        }
      })
      t.print(e.is_array ? "]" : "}")
    })
    e(Ce, function (e, t) {
      t.print("debugger")
      t.semicolon()
    })
    Re.DEFMETHOD("_do_print_body", function (e) {
      l(this.body, e)
    })
    e(xe, function (e, t) {
      e.body.print(t)
      t.semicolon()
    })
    e(ze, function (e, t) {
      n(e.body, true, t, true)
      t.print("")
    })
    e(Fe, function (e, t) {
      e.label.print(t)
      t.colon()
      e.body.print(t)
    })
    e(ke, function (e, t) {
      e.body.print(t)
      t.semicolon()
    })
    e(De, function (e, t) {
      i(e, t)
    })
    e(Ie, function (e, t) {
      t.semicolon()
    })
    e(Me, function (e, t) {
      t.print("do")
      t.space()
      d(e.body, t)
      t.space()
      t.print("while")
      t.space()
      t.with_parens(function () {
        e.condition.print(t)
      })
      t.semicolon()
    })
    e(Le, function (e, t) {
      t.print("while")
      t.space()
      t.with_parens(function () {
        e.condition.print(t)
      })
      t.space()
      e._do_print_body(t)
    })
    e(je, function (e, t) {
      t.print("for")
      t.space()
      t.with_parens(function () {
        if (e.init) {
          if (e.init instanceof vt) {
            e.init.print(t)
          } else {
            o(e.init, t, true)
          }
          t.print(";")
          t.space()
        } else {
          t.print(";")
        }
        if (e.condition) {
          e.condition.print(t)
          t.print(";")
          t.space()
        } else {
          t.print(";")
        }
        if (e.step) {
          e.step.print(t)
        }
      })
      t.space()
      e._do_print_body(t)
    })
    e(Ue, function (e, t) {
      t.print("for")
      if (e.await) {
        t.space()
        t.print("await")
      }
      t.space()
      t.with_parens(function () {
        e.init.print(t)
        t.space()
        t.print(e instanceof He ? "of" : "in")
        t.space()
        e.object.print(t)
      })
      t.space()
      e._do_print_body(t)
    })
    e(Ve, function (e, t) {
      t.print("with")
      t.space()
      t.with_parens(function () {
        e.expression.print(t)
      })
      t.space()
      e._do_print_body(t)
    })
    We.DEFMETHOD("_do_print", function (e, t) {
      var n = this
      if (!t) {
        if (n.async) {
          e.print("async")
          e.space()
        }
        e.print("function")
        if (n.is_generator) {
          e.star()
        }
        if (n.name) {
          e.space()
        }
      }
      if (n.name instanceof qt) {
        n.name.print(e)
      } else {
        if (t && n.name instanceof Ee) {
          e.with_square(function () {
            n.name.print(e)
          })
        }
      }
      e.with_parens(function () {
        n.argnames.forEach(function (t, n) {
          if (n) {
            e.comma()
          }
          t.print(e)
        })
      })
      e.space()
      i(n, e, true)
    })
    e(We, function (e, t) {
      e._do_print(t)
    })
    e(Je, function (e, t) {
      var /* [auto-meaningful-name] */e$prefix = e.prefix
      var r = e$prefix instanceof We || e$prefix instanceof Pt || e$prefix instanceof Nt || e$prefix instanceof St || e$prefix instanceof It || e$prefix instanceof Bt && e$prefix.expression instanceof Ut
      if (r) {
        t.print("(")
      }
      e.prefix.print(t)
      if (r) {
        t.print(")")
      }
      e.template_string.print(t)
    })
    e(Ze, function (e, t) {
      var n = t.parent() instanceof Je
      t.print("`")
      for (var r = 0; r < e.segments.length; r++) {
        if (e.segments[r] instanceof et) {
          if (n) {
            t.print(e.segments[r].raw)
          } else {
            t.print_template_string_chars(e.segments[r].value)
          }
        } else {
          t.print("${")
          e.segments[r].print(t)
          t.print("}")
        }
      }
      t.print("`")
    })
    Ye.DEFMETHOD("_do_print", function (e) {
      var t = this
      var n = e.parent()
      var r = n instanceof Pt && !(n instanceof Mt) || n instanceof It || n instanceof Ot && t === n.expression
      if (r) {
        e.print("(")
      }
      if (t.async) {
        e.print("async")
        e.space()
      }
      if (1 === t.argnames.length && t.argnames[0] instanceof qt) {
        t.argnames[0].print(e)
      } else {
        e.with_parens(function () {
          t.argnames.forEach(function (t, n) {
            if (n) {
              e.comma()
            }
            t.print(e)
          })
        })
      }
      e.space()
      e.print("=>")
      e.space()
      var o = t.body[0]
      if (1 === t.body.length && o instanceof rt) {
        var /* [auto-meaningful-name] */o$value = o.value
        if (o$value) {
          if (function e(t) {
            return t instanceof Ut || (t instanceof St ? e(t.expressions[0]) : "Call" === t.TYPE ? e(t.expression) : t instanceof Je ? e(t.prefix) : t instanceof Bt || t instanceof Dt ? e(t.expression) : t instanceof Nt ? e(t.condition) : t instanceof Pt ? e(t.left) : t instanceof Ft && e(t.expression))
          }(o$value)) {
            e.print("(")
            o$value.print(e)
            e.print(")")
          } else {
            o$value.print(e)
          }
        } else {
          e.print("{}")
        }
      } else {
        i(t, e)
      }
      if (r) {
        e.print(")")
      }
    })
    nt.DEFMETHOD("_do_print", function (e, t) {
      e.print(t)
      if (this.value) {
        e.space()
        var /* [auto-meaningful-name] */this$value$start$comments_before = this.value.start.comments_before
        if (this$value$start$comments_before && this$value$start$comments_before.length && !e.printed_comments.has(this$value$start$comments_before)) {
          e.print("(")
          this.value.print(e)
          e.print(")")
        } else {
          this.value.print(e)
        }
      }
      e.semicolon()
    })
    e(rt, function (e, t) {
      e._do_print(t, "return")
    })
    e(it, function (e, t) {
      e._do_print(t, "throw")
    })
    e(ut, function (e, t) {
      var n = e.is_star ? "*" : ""
      t.print("yield" + n)
      if (e.expression) {
        t.space()
        e.expression.print(t)
      }
    })
    e(ct, function (e, t) {
      t.print("await")
      t.space()
      var /* [auto-meaningful-name] */e$expression = e.expression
      var r = !(e$expression instanceof Ot || e$expression instanceof _n || e$expression instanceof Tt || e$expression instanceof It || e$expression instanceof bn)
      if (r) {
        t.print("(")
      }
      e.expression.print(t)
      if (r) {
        t.print(")")
      }
    })
    ot.DEFMETHOD("_do_print", function (e, t) {
      e.print(t)
      if (this.label) {
        e.space()
        this.label.print(e)
      }
      e.semicolon()
    })
    e(at, function (e, t) {
      e._do_print(t, "break")
    })
    e(st, function (e, t) {
      e._do_print(t, "continue")
    })
    e(lt, function (e, t) {
      t.print("if")
      t.space()
      t.with_parens(function () {
        e.condition.print(t)
      })
      t.space()
      if (e.alternative) {
        (function (e, t) {
          var /* [auto-meaningful-name] */e$body = e.body
          if (t.option("braces") || t.option("ie8") && e$body instanceof Me) {
            return d(e$body, t)
          }
          if (!e$body) {
            return t.force_semicolon()
          }
          for (;;) {
            if (e$body instanceof lt) {
              if (!e$body.alternative) {
                return void d(e.body, t)
              }
              e$body = e$body.alternative
            } else {
              if (!(e$body instanceof Re)) {
                break
              }
              e$body = e$body.body
            }
          }
          l(e.body, t)
        })(e, t)
        t.space()
        t.print("else")
        t.space()
        if (e.alternative instanceof lt) {
          e.alternative.print(t)
        } else {
          l(e.alternative, t)
        }
      } else {
        e._do_print_body(t)
      }
    })
    e(ft, function (e, t) {
      t.print("switch")
      t.space()
      t.with_parens(function () {
        e.expression.print(t)
      })
      t.space()
      var n = e.body.length - 1
      if (n < 0) {
        r(e, t)
      } else {
        t.with_block(function () {
          e.body.forEach(function (e, r) {
            t.indent(true)
            e.print(t)
            if (r < n && e.body.length > 0) {
              t.newline()
            }
          })
        })
      }
    })
    dt.DEFMETHOD("_do_print_body", function (e) {
      e.newline()
      this.body.forEach(function (t) {
        e.indent()
        t.print(e)
        e.newline()
      })
    })
    e(ht, function (e, t) {
      t.print("default:")
      e._do_print_body(t)
    })
    e(pt, function (e, t) {
      t.print("case")
      t.space()
      e.expression.print(t)
      t.print(":")
      e._do_print_body(t)
    })
    e(_t, function (e, t) {
      t.print("try")
      t.space()
      i(e, t)
      if (e.bcatch) {
        t.space()
        e.bcatch.print(t)
      }
      if (e.bfinally) {
        t.space()
        e.bfinally.print(t)
      }
    })
    e(At, function (e, t) {
      t.print("catch")
      if (e.argname) {
        t.space()
        t.with_parens(function () {
          e.argname.print(t)
        })
      }
      t.space()
      i(e, t)
    })
    e(gt, function (e, t) {
      t.print("finally")
      t.space()
      i(e, t)
    })
    vt.DEFMETHOD("_do_print", function (e, t) {
      e.print(t)
      e.space()
      this.definitions.forEach(function (t, n) {
        if (n) {
          e.comma()
        }
        t.print(e)
      })
      var n = e.parent()
      if (!(n instanceof je || n instanceof Ue) || n && n.init !== this) {
        e.semicolon()
      }
    })
    e(yt, function (e, t) {
      e._do_print(t, "let")
    })
    e(mt, function (e, t) {
      e._do_print(t, "var")
    })
    e(bt, function (e, t) {
      e._do_print(t, "const")
    })
    e(xt, function (e, t) {
      t.print("import")
      t.space()
      if (e.imported_name) {
        e.imported_name.print(t)
      }
      if (e.imported_name && e.imported_names) {
        t.print(",")
        t.space()
      }
      if (e.imported_names) {
        if (1 === e.imported_names.length && "*" === e.imported_names[0].foreign_name.name) {
          e.imported_names[0].print(t)
        } else {
          t.print("{")
          e.imported_names.forEach(function (n, r) {
            t.space()
            n.print(t)
            if (r < e.imported_names.length - 1) {
              t.print(",")
            }
          })
          t.space()
          t.print("}")
        }
      }
      if (e.imported_name || e.imported_names) {
        t.space()
        t.print("from")
        t.space()
      }
      e.module_name.print(t)
      t.semicolon()
    })
    e(Et, function (e, t) {
      var n = t.parent() instanceof xt
      var r = e.name.definition()
      if ((r && r.mangled_name || e.name.name) !== e.foreign_name.name) {
        if (n) {
          t.print(e.foreign_name.name)
        } else {
          e.name.print(t)
        }
        t.space()
        t.print("as")
        t.space()
        if (n) {
          e.name.print(t)
        } else {
          t.print(e.foreign_name.name)
        }
      } else {
        e.name.print(t)
      }
    })
    e(Ct, function (e, t) {
      t.print("export")
      t.space()
      if (e.is_default) {
        t.print("default")
        t.space()
      }
      if (e.exported_names) {
        if (1 === e.exported_names.length && "*" === e.exported_names[0].name.name) {
          e.exported_names[0].print(t)
        } else {
          t.print("{")
          e.exported_names.forEach(function (n, r) {
            t.space()
            n.print(t)
            if (r < e.exported_names.length - 1) {
              t.print(",")
            }
          })
          t.space()
          t.print("}")
        }
      } else if (e.exported_value) {
        e.exported_value.print(t)
      } else if (e.exported_definition && (e.exported_definition.print(t), e.exported_definition instanceof vt)) {
        return
      }
      if (e.module_name) {
        t.space()
        t.print("from")
        t.space()
        e.module_name.print(t)
      }
      if (e.exported_value && !(e.exported_value instanceof qe || e.exported_value instanceof Xe || e.exported_value instanceof Wt) || e.module_name || e.exported_names) {
        t.semicolon()
      }
    })
    e(wt, function (e, t) {
      e.name.print(t)
      if (e.value) {
        t.space()
        t.print("=")
        t.space()
        var n = t.parent(1)
        var r = n instanceof je || n instanceof Ue
        o(e.value, t, r)
      }
    })
    e(Ot, function (e, t) {
      e.expression.print(t)
      if (!(e instanceof kt && 0 === e.args.length)) {
        if (e.expression instanceof Ot || e.expression instanceof We) {
          t.add_mapping(e.start)
        }
        t.with_parens(function () {
          e.args.forEach(function (e, n) {
            if (n) {
              t.comma()
            }
            e.print(t)
          })
        })
      }
    })
    e(kt, function (e, t) {
      t.print("new")
      t.space()
      Ot.prototype._codegen(e, t)
    })
    St.DEFMETHOD("_do_print", function (e) {
      this.expressions.forEach(function (t, n) {
        if (n > 0) {
          e.comma()
          if (e.should_break()) {
            e.newline()
            e.indent()
          }
        }
        t.print(e)
      })
    })
    e(St, function (e, t) {
      e._do_print(t)
    })
    e(Bt, function (e, t) {
      var /* [auto-meaningful-name] */e$expression = e.expression
      e$expression.print(t)
      var /* [auto-meaningful-name] */e$property = e.property
      if (L.has(e$property) ? t.option("ie8") : !ce(e$property, t.option("ecma") >= 2015)) {
        t.print("[")
        t.add_mapping(e.end)
        t.print_string(e$property)
        t.print("]")
      } else {
        if (e$expression instanceof En && e$expression.getValue() >= 0) {
          if (!/[xa-f.)]/i.test(t.last())) {
            t.print(".")
          }
        }
        t.print(".")
        t.add_mapping(e.end)
        t.print_name(e$property)
      }
    })
    e(Dt, function (e, t) {
      e.expression.print(t)
      t.print("[")
      e.property.print(t)
      t.print("]")
    })
    e(Rt, function (e, t) {
      var /* [auto-meaningful-name] */e$operator = e.operator
      t.print(e$operator)
      if (/^[a-z]/i.test(e$operator) || /[+-]$/.test(e$operator) && e.expression instanceof Rt && /^[+-]/.test(e.expression.operator)) {
        t.space()
      }
      e.expression.print(t)
    })
    e(Ft, function (e, t) {
      e.expression.print(t)
      t.print(e.operator)
    })
    e(Pt, function (e, t) {
      var /* [auto-meaningful-name] */e$operator = e.operator
      e.left.print(t)
      if (">" == e$operator[0] && e.left instanceof Ft && "--" == e.left.operator) {
        t.print(" ")
      } else {
        t.space()
      }
      t.print(e$operator)
      if (("<" == e$operator || "<<" == e$operator) && e.right instanceof Rt && "!" == e.right.operator && e.right.expression instanceof Rt && "--" == e.right.expression.operator) {
        t.print(" ")
      } else {
        t.space()
      }
      e.right.print(t)
    })
    e(Nt, function (e, t) {
      e.condition.print(t)
      t.space()
      t.print("?")
      t.space()
      e.consequent.print(t)
      t.space()
      t.colon()
      e.alternative.print(t)
    })
    e(jt, function (e, t) {
      t.with_square(function () {
        var /* [auto-meaningful-name] */e$elements = e.elements
        var /* [auto-meaningful-name] */e$elements$length = e$elements.length
        if (e$elements$length > 0) {
          t.space()
        }
        e$elements.forEach(function (e, n) {
          if (n) {
            t.comma()
          }
          e.print(t)
          if (n === e$elements$length - 1 && e instanceof Bn) {
            t.comma()
          }
        })
        if (e$elements$length > 0) {
          t.space()
        }
      })
    })
    e(Ut, function (e, t) {
      if (e.properties.length > 0) {
        t.with_block(function () {
          e.properties.forEach(function (e, n) {
            if (n) {
              t.print(",")
              t.newline()
            }
            t.indent()
            e.print(t)
          })
          t.newline()
        })
      } else {
        r(e, t)
      }
    })
    e(Wt, function (e, t) {
      t.print("class")
      t.space()
      if (e.name) {
        e.name.print(t)
        t.space()
      }
      if (e.extends) {
        var n = !(e.extends instanceof _n || e.extends instanceof Tt || e.extends instanceof Yt || e.extends instanceof Xe)
        t.print("extends")
        if (n) {
          t.print("(")
        } else {
          t.space()
        }
        e.extends.print(t)
        if (n) {
          t.print(")")
        } else {
          t.space()
        }
      }
      if (e.properties.length > 0) {
        t.with_block(function () {
          e.properties.forEach(function (e, n) {
            if (n) {
              t.newline()
            }
            t.indent()
            e.print(t)
          })
          t.newline()
        })
      } else {
        t.print("{}")
      }
    })
    e($t, function (e, t) {
      t.print("new.target")
    })
    e(Vt, function (e, t) {
      function n(e) {
        var t = e.definition()
        return t ? t.mangled_name || t.name : e.name
      }
      var r = t.option("shorthand")
      if (r && e.value instanceof qt && ce(e.key, t.option("ecma") >= 2015) && n(e.value) === e.key && !L.has(e.key)) {
        s(e.key, e.quote, t)
      } else {
        if (r && e.value instanceof Lt && e.value.left instanceof qt && ce(e.key, t.option("ecma") >= 2015) && n(e.value.left) === e.key) {
          s(e.key, e.quote, t)
          t.space()
          t.print("=")
          t.space()
          e.value.right.print(t)
        } else {
          if (e.key instanceof Ee) {
            t.with_square(function () {
              e.key.print(t)
            })
          } else {
            s(e.key, e.quote, t)
          }
          t.colon()
          e.value.print(t)
        }
      }
    })
    e(Kt, function (e, t) {
      if (e.static) {
        t.print("static")
        t.space()
      }
      if (e.key instanceof sn) {
        s(e.key.name, e.quote, t)
      } else {
        t.print("[")
        e.key.print(t)
        t.print("]")
      }
      if (e.value) {
        t.print("=")
        e.value.print(t)
      }
      t.semicolon()
    })
    Ht.DEFMETHOD("_print_getter_setter", function (e, t) {
      var n = this
      if (n.static) {
        t.print("static")
        t.space()
      }
      if (e) {
        t.print(e)
        t.space()
      }
      if (n.key instanceof an) {
        s(n.key.name, n.quote, t)
      } else {
        t.with_square(function () {
          n.key.print(t)
        })
      }
      n.value._do_print(t, true)
    })
    e(Gt, function (e, t) {
      e._print_getter_setter("set", t)
    })
    e(zt, function (e, t) {
      e._print_getter_setter("get", t)
    })
    e(Qt, function (e, t) {
      var n
      if (e.is_generator && e.async) {
        n = "async*"
      } else {
        if (e.is_generator) {
          n = "*"
        } else {
          if (e.async) {
            n = "async"
          }
        }
      }
      e._print_getter_setter(n, t)
    })
    qt.DEFMETHOD("_do_print", function (e) {
      var t = this.definition()
      e.print_name(t ? t.mangled_name || t.name : this.name)
    })
    e(qt, function (e, t) {
      e._do_print(t)
    })
    e(Bn, g)
    e(mn, function (e, t) {
      t.print("this")
    })
    e(yn, function (e, t) {
      t.print("super")
    })
    e(bn, function (e, t) {
      t.print(e.getValue())
    })
    e(wn, function (e, t) {
      t.print_string(e.getValue(), e.quote, t.in_directive)
    })
    e(En, function (e, t) {
      if ((t.option("keep_numbers") || t.use_asm) && e.start && null != e.start.raw) {
        t.print(e.start.raw)
      } else {
        t.print(f(e.getValue()))
      }
    })
    e(xn, function (e, t) {
      t.print(e.getValue() + "n")
    })
    var c = /(<\s*\/\s*script)/i
    var u = function (e, t) {
      return t.replace("/", "\\/")
    }
    function l(e, t) {
      if (t.option("braces")) {
        d(e, t)
      } else {
        if (!e || e instanceof Ie) {
          t.force_semicolon()
        } else {
          e.print(t)
        }
      }
    }
    function f(e) {
      var t
      var n
      var r
      var i = e.toString(10).replace(/^0\./, ".").replace("e+", "e")
      var o = [i]
      if (Math.floor(e) === e) {
        if (e < 0) {
          o.push("-0x" + (-e).toString(16).toLowerCase())
        } else {
          o.push("0x" + e.toString(16).toLowerCase())
        }
      }
      if (t = /^\.0+/.exec(i)) {
        n = t[0].length
        r = i.slice(n)
        o.push(r + "e-" + (r.length + n - 1))
      } else {
        if (t = /0+$/.exec(i)) {
          n = t[0].length
          o.push(i.slice(0, -n) + "e" + n)
        } else {
          if (t = /^(\d)\.(\d+)e(-?\d+)$/.exec(i)) {
            o.push(t[1] + t[2] + "e" + (t[3] - t[2].length))
          }
        }
      }
      return function (e) {
        for (var t = e[0], /* [auto-meaningful-name] */t$length = t.length, r = 1; r < e.length; ++r) {
          if (e[r].length < t$length) {
            t$length = (t = e[r]).length
          }
        }
        return t
      }(o)
    }
    function d(e, t) {
      if (!e || e instanceof Ie) {
        t.print("{}")
      } else {
        if (e instanceof De) {
          e.print(t)
        } else {
          t.with_block(function () {
            t.indent()
            e.print(t)
            t.newline()
          })
        }
      }
    }
    function h(e, t) {
      e.forEach(function (e) {
        e.DEFMETHOD("add_source_map", t)
      })
    }
    e(Cn, function (e, t) {
      var n = e.getValue()
      var /* [auto-meaningful-name] */n$source = n.source
      var /* [auto-meaningful-name] */n$flags = n.flags
      n$source = R(n$source)
      n$flags = n$flags ? function (e) {
        var t
        var n = new Set(e.split(""))
        var r = ""
        var i = a("gimuy")
        try {
          for (i.s(); !(t = i.n()).done;) {
            var /* [auto-meaningful-name] */t$value = t.value
            if (n.has(t$value)) {
              r += t$value
              n.delete(t$value)
            }
          }
        } catch (s) {
          i.e(s)
        } finally {
          i.f()
        }
        if (n.size) {
          n.forEach(function (e) {
            r += e
          })
        }
        return r
      }(n$flags) : ""
      n$source = n$source.replace(c, u)
      t.print(t.to_utf8("/".concat(n$source, "/").concat(n$flags)))
      var o = t.parent()
      if (o instanceof Pt && /^\w/.test(o.operator) && o.left === e) {
        t.print(" ")
      }
    })
    h([Ee, Fe, ze], g)
    h([jt, De, At, Wt, bn, Ce, vt, Oe, gt, tt, We, kt, Ut, Re, qt, ft, dt, Ze, et, _t], function (e) {
      e.add_mapping(this.start)
    })
    h([zt, Gt], function (e) {
      e.add_mapping(this.start, this.key.name)
    })
    h([Ht], function (e) {
      e.add_mapping(this.start, this.key)
    })
  }()
  var $n = function (e, t) {
    return null === e && null === t || e.TYPE === t.TYPE && e.shallow_cmp(t)
  }
  var Jn = function (e) {
    var t = Object.keys(e).map(function (t) {
      if ("eq" === e[t]) {
        return "this.".concat(t, " === other.").concat(t)
      }
      if ("exist" === e[t]) {
        return "(this.".concat(t, " == null ? other.").concat(t, " == null : this.").concat(t, " === other.").concat(t, ")")
      }
      throw new Error("mkshallow: Unexpected instruction: ".concat(e[t]))
    }).join(" && ")
    return new Function("other", "return " + t)
  }
  var Zn = function () {
    return true
  }
  Ee.prototype.shallow_cmp = function () {
    throw new Error("did not find a shallow_cmp function for " + this.constructor.name)
  }
  Ce.prototype.shallow_cmp = Zn
  Oe.prototype.shallow_cmp = Jn({
    value: "eq"
  })
  ke.prototype.shallow_cmp = Zn
  Be.prototype.shallow_cmp = Zn
  Ie.prototype.shallow_cmp = Zn
  Fe.prototype.shallow_cmp = Jn({
    "label.name": "eq"
  })
  Me.prototype.shallow_cmp = Zn
  Le.prototype.shallow_cmp = Zn
  je.prototype.shallow_cmp = Jn({
    init: "exist",
    condition: "exist",
    step: "exist"
  })
  Ue.prototype.shallow_cmp = Zn
  He.prototype.shallow_cmp = Zn
  Ve.prototype.shallow_cmp = Zn
  ze.prototype.shallow_cmp = Zn
  Qe.prototype.shallow_cmp = Zn
  We.prototype.shallow_cmp = Jn({
    is_generator: "eq",
    async: "eq"
  })
  $e.prototype.shallow_cmp = Jn({
    is_array: "eq"
  })
  Je.prototype.shallow_cmp = Zn
  Ze.prototype.shallow_cmp = Zn
  et.prototype.shallow_cmp = Jn({
    value: "eq"
  })
  tt.prototype.shallow_cmp = Zn
  ot.prototype.shallow_cmp = Zn
  ct.prototype.shallow_cmp = Zn
  ut.prototype.shallow_cmp = Jn({
    is_star: "eq"
  })
  lt.prototype.shallow_cmp = Jn({
    alternative: "exist"
  })
  ft.prototype.shallow_cmp = Zn
  dt.prototype.shallow_cmp = Zn
  _t.prototype.shallow_cmp = Jn({
    bcatch: "exist",
    bfinally: "exist"
  })
  At.prototype.shallow_cmp = Jn({
    argname: "exist"
  })
  gt.prototype.shallow_cmp = Zn
  vt.prototype.shallow_cmp = Zn
  wt.prototype.shallow_cmp = Jn({
    value: "exist"
  })
  Et.prototype.shallow_cmp = Zn
  xt.prototype.shallow_cmp = Jn({
    imported_name: "exist",
    imported_names: "exist"
  })
  Ct.prototype.shallow_cmp = Jn({
    exported_definition: "exist",
    exported_value: "exist",
    exported_names: "exist",
    module_name: "eq",
    is_default: "eq"
  })
  Ot.prototype.shallow_cmp = Zn
  St.prototype.shallow_cmp = Zn
  Tt.prototype.shallow_cmp = Zn
  Bt.prototype.shallow_cmp = Jn({
    property: "eq"
  })
  It.prototype.shallow_cmp = Jn({
    operator: "eq"
  })
  Pt.prototype.shallow_cmp = Jn({
    operator: "eq"
  })
  Nt.prototype.shallow_cmp = Zn
  jt.prototype.shallow_cmp = Zn
  Ut.prototype.shallow_cmp = Zn
  Ht.prototype.shallow_cmp = Zn
  Vt.prototype.shallow_cmp = Jn({
    key: "eq"
  })
  Gt.prototype.shallow_cmp = Jn({
    static: "eq"
  })
  zt.prototype.shallow_cmp = Jn({
    static: "eq"
  })
  Qt.prototype.shallow_cmp = Jn({
    static: "eq",
    is_generator: "eq",
    async: "eq"
  })
  Wt.prototype.shallow_cmp = Jn({
    name: "exist",
    extends: "exist"
  })
  Kt.prototype.shallow_cmp = Jn({
    static: "eq"
  })
  qt.prototype.shallow_cmp = Jn({
    name: "eq"
  })
  $t.prototype.shallow_cmp = Zn
  mn.prototype.shallow_cmp = Zn
  yn.prototype.shallow_cmp = Zn
  wn.prototype.shallow_cmp = Jn({
    value: "eq"
  })
  En.prototype.shallow_cmp = Jn({
    value: "eq"
  })
  xn.prototype.shallow_cmp = Jn({
    value: "eq"
  })
  Cn.prototype.shallow_cmp = function (e) {
    return this.value.flags === e.value.flags && this.value.source === e.value.source
  }
  On.prototype.shallow_cmp = Zn
  var er = null
  var tr = null
  var nr = function () {
    function e(t, n, r) {
      u(this, e)
      this.name = n.name
      this.orig = [n]
      this.init = r
      this.eliminated = 0
      this.assignments = 0
      this.scope = t
      this.replaced = 0
      this.global = false
      this.export = 0
      this.mangled_name = null
      this.undeclared = false
      this.id = e.next_id++
      this.chained = false
      this.direct_access = false
      this.escaped = 0
      this.recursive_refs = 0
      this.references = []
      this.should_replace = undefined
      this.single_use = false
      this.fixed = false
      Object.seal(this)
    }
    s(e, [
      {
        key: "fixed_value",
        value: function () {
          return !this.fixed || this.fixed instanceof Ee ? this.fixed : this.fixed()
        }
      }, {
        key: "unmangleable",
        value: function (e) {
          if (!e) {
            e = {}
          }
          return !!(er && er.has(this.id) && D(e.keep_fnames, this.orig[0].name)) || this.global && !e.toplevel || 1 & this.export || this.undeclared || !e.eval && this.scope.pinned() || (this.orig[0] instanceof cn || this.orig[0] instanceof on) && D(e.keep_fnames, this.orig[0].name) || this.orig[0] instanceof an || (this.orig[0] instanceof ln || this.orig[0] instanceof un) && D(e.keep_classnames, this.orig[0].name)
        }
      }, {
        key: "mangle",
        value: function (e) {
          var t = e.cache && e.cache.props
          if (this.global && t && t.has(this.name)) {
            this.mangled_name = t.get(this.name)
          } else if (!this.mangled_name && !this.unmangleable(e)) {
            var /* [auto-meaningful-name] */this$scope = this.scope
            var r = this.orig[0]
            if (e.ie8 && r instanceof cn) {
              this$scope = this$scope.parent_scope
            }
            var i = rr(this)
            this.mangled_name = i ? i.mangled_name || i.name : this$scope.next_mangled(e, this)
            if (this.global && t) {
              t.set(this.name, this.mangled_name)
            }
          }
        }
      }
    ])
    return e
  }()
  function rr(e) {
    if (e.orig[0] instanceof fn && e.scope.is_block_scope()) {
      return e.scope.get_defun_scope().variables.get(e.name)
    }
  }
  function ir(e, t) {
    var /* [auto-meaningful-name] */e$enclosed = e.enclosed
    e: for (;;) {
      var r = or(++e.cname)
      if (!L.has(r) && !(t.reserved.has(r) || tr && tr.has(r))) {
        for (var /* [auto-meaningful-name] */e$enclosed$length = e$enclosed.length; --e$enclosed$length >= 0;) {
          var o = e$enclosed[e$enclosed$length]
          if (r == (o.mangled_name || o.unmangleable(t) && o.name)) {
            continue e
          }
        }
        return r
      }
    }
  }
  nr.next_id = 1
  Ge.DEFMETHOD("figure_out_scope", function (e) {
    var t = arguments.length > 1 && undefined !== arguments[1] ? arguments[1] : {}
    var /* [auto-meaningful-name] */t$parent_scope = t.parent_scope
    var r = undefined === t$parent_scope ? null : t$parent_scope
    var /* [auto-meaningful-name] */t$toplevel = t.toplevel
    var o = undefined === t$toplevel ? this : t$toplevel
    e = A(e, {
      cache: null,
      ie8: false,
      safari10: false
    })
    if (!(o instanceof ze)) {
      throw new Error("Invalid toplevel scope")
    }
    var s = this.parent_scope = r
    var c = new Map()
    var u = null
    var l = null
    var f = []
    var d = new Ln(function (t, n) {
      if (t.is_block_scope()) {
        var r = s
        t.block_scope = s = new Ge(t)
        s._block_scope = true
        var i = t instanceof At ? r.parent_scope : r
        s.init_scope_vars(i)
        s.uses_with = r.uses_with
        s.uses_eval = r.uses_eval
        if (e.safari10 && (t instanceof je || t instanceof Ue)) {
          f.push(s)
        }
        if (t instanceof ft) {
          var o = s
          s = r
          t.expression.walk(d)
          s = o
          for (var a = 0; a < t.body.length; a++) {
            t.body[a].walk(d)
          }
        } else {
          n()
        }
        s = r
        return true
      }
      if (t instanceof $e) {
        var p = l
        l = t
        n()
        l = p
        return true
      }
      if (t instanceof Ge) {
        t.init_scope_vars(s)
        var _ = s
        var A = u
        var g = c
        u = s = t
        c = new Map()
        n()
        s = _
        u = A
        c = g
        return true
      }
      if (t instanceof Fe) {
        var /* [auto-meaningful-name] */t$label = t.label
        if (c.has(t$label.name)) {
          throw new Error(C("Label {name} defined twice", t$label))
        }
        c.set(t$label.name, t$label)
        n()
        c.delete(t$label.name)
        return true
      }
      if (t instanceof Ve) {
        for (var m = s; m; m = m.parent_scope) {
          m.uses_with = true
        }
      } else {
        if (t instanceof qt) {
          t.scope = s
        }
        if (t instanceof pn) {
          t.thedef = t
          t.references = []
        }
        if (t instanceof cn) {
          u.def_function(t, "arguments" == t.name ? undefined : u)
        } else if (t instanceof on) {
          h((t.scope = u.parent_scope.get_defun_scope()).def_function(t, u), 1)
        } else if (t instanceof ln) {
          h(u.def_variable(t, u), 1)
        } else if (t instanceof dn) {
          s.def_variable(t)
        } else if (t instanceof un) {
          h((t.scope = u.parent_scope).def_function(t, u), 1)
        } else if (t instanceof Zt || t instanceof nn || t instanceof tn || t instanceof fn) {
          if (!(y = t instanceof en ? s.def_variable(t, null) : u.def_variable(t, "SymbolVar" == t.TYPE ? null : undefined)).orig.every(function (e) {
            return e === t || (t instanceof en ? e instanceof cn : !(e instanceof nn || e instanceof tn))
          })) {
            fe("\"".concat(t.name, "\" is redeclared"), t.start.file, t.start.line, t.start.col, t.start.pos)
          }
          if (!(t instanceof rn)) {
            h(y, 2)
          }
          if (u !== s) {
            t.mark_enclosed()
            var y = s.find_variable(t)
            if (t.thedef !== y) {
              t.thedef = y
              t.reference()
            }
          }
        } else if (t instanceof vn) {
          var b = c.get(t.name)
          if (!b) {
            throw new Error(C("Undefined label {name} [{line},{col}]", {
              name: t.name,
              line: t.start.line,
              col: t.start.col
            }))
          }
          t.thedef = b
        }
        if (!(s instanceof ze || !(t instanceof Ct || t instanceof xt))) {
          fe("\"".concat(t.TYPE, "\" statement may only appear at the top level"), t.start.file, t.start.line, t.start.col, t.start.pos)
        }
      }
    })
    function h(e, t) {
      if (l) {
        var n = 0
        do {
          t++
        } while (d.parent(n++) !== l)
      }
      var r = d.parent(t)
      if (e.export = r instanceof Ct ? 1 : 0) {
        var /* [auto-meaningful-name] */r$exported_definition = r.exported_definition
        if ((r$exported_definition instanceof qe || r$exported_definition instanceof Xt) && r.is_default) {
          e.export = 2
        }
      }
    }
    this.walk(d)
    if (this instanceof ze) {
      this.globals = new Map()
    }
    d = new Ln(function (e) {
      if (e instanceof ot && e.label) {
        e.label.thedef.references.push(e)
        return true
      }
      if (e instanceof _n) {
        var t
        var /* [auto-meaningful-name] */e$name = e.name
        if ("eval" == e$name && d.parent() instanceof Ot) {
          for (var /* [auto-meaningful-name] */e$scope = e.scope; e$scope && !e$scope.uses_eval; e$scope = e$scope.parent_scope) {
            e$scope.uses_eval = true
          }
        }
        if (d.parent() instanceof Et && d.parent(1).module_name || !(t = e.scope.find_variable(e$name))) {
          t = o.def_global(e)
          if (e instanceof An) {
            t.export = 1
          }
        } else {
          if (t.scope instanceof We && "arguments" == e$name) {
            t.scope.uses_arguments = true
          }
        }
        e.thedef = t
        e.reference()
        if (!(!e.scope.is_block_scope() || t.orig[0] instanceof en)) {
          e.scope = e.scope.get_defun_scope()
        }
        return true
      }
      var i
      if (e instanceof fn && (i = rr(e.definition()))) {
        for (e$scope = e.scope; e$scope && (x(e$scope.enclosed, i), e$scope !== i.scope);) {
          e$scope = e$scope.parent_scope
        }
      }
    })
    this.walk(d)
    if (e.ie8 || e.safari10) {
      Pn(this, function (e) {
        if (e instanceof fn) {
          var /* [auto-meaningful-name] */e$name = e.name
          var /* [auto-meaningful-name] */e$thedef$references = e.thedef.references
          var r = e.scope.get_defun_scope()
          var i = r.find_variable(e$name) || o.globals.get(e$name) || r.def_variable(e)
          e$thedef$references.forEach(function (e) {
            e.thedef = i
            e.reference()
          })
          e.thedef = i
          e.reference()
          return true
        }
      })
    }
    if (e.safari10) {
      var p
      var _ = a(f)
      try {
        var g = function () {
          var /* [auto-meaningful-name] */p$value = p.value
          p$value.parent_scope.variables.forEach(function (t) {
            x(p$value.enclosed, t)
          })
        }
        for (_.s(); !(p = _.n()).done;) {
          g()
        }
      } catch (v) {
        _.e(v)
      } finally {
        _.f()
      }
    }
  })
  ze.DEFMETHOD("def_global", function (e) {
    var /* [auto-meaningful-name] */this$globals = this.globals
    var /* [auto-meaningful-name] */e$name = e.name
    if (this$globals.has(e$name)) {
      return this$globals.get(e$name)
    }
    var r = new nr(this, e)
    r.undeclared = true
    r.global = true
    this$globals.set(e$name, r)
    return r
  })
  Ge.DEFMETHOD("init_scope_vars", function (e) {
    this.variables = new Map()
    this.functions = new Map()
    this.uses_with = false
    this.uses_eval = false
    this.parent_scope = e
    this.enclosed = []
    this.cname = -1
    this._var_name_cache = null
  })
  Ge.DEFMETHOD("var_names", function e() {
    var /* [auto-meaningful-name] */this$_var_name_cache = this._var_name_cache
    if (!this$_var_name_cache) {
      this._var_name_cache = this$_var_name_cache = new Set(this.parent_scope ? e.call(this.parent_scope) : null)
      if (this._added_var_names) {
        this._added_var_names.forEach(function (e) {
          this$_var_name_cache.add(e)
        })
      }
      this.enclosed.forEach(function (e) {
        this$_var_name_cache.add(e.name)
      })
      this.variables.forEach(function (e, n) {
        this$_var_name_cache.add(n)
      })
    }
    return this$_var_name_cache
  })
  Ge.DEFMETHOD("add_var_name", function (e) {
    if (!this._added_var_names) {
      this._added_var_names = new Set()
    }
    this._added_var_names.add(e)
    if (!this._var_name_cache) {
      this.var_names()
    }
    this._var_name_cache.add(e)
  })
  Ge.DEFMETHOD("add_child_scope", function (e) {
    var t = this
    if (e.parent_scope !== this) {
      e.parent_scope = this
      e._var_name_cache = null
      if (e._added_var_names) {
        e._added_var_names.forEach(function (t) {
          return e.add_var_name(t)
        })
      }
      var n
      var r = new Set(e.enclosed)
      var i = function () {
        var e = []
        var n = t
        do {
          e.push(n)
        } while (n = n.parent_scope)
        e.reverse()
        return e
      }()
      var o = []
      var s = a(i)
      try {
        var c = function () {
          var /* [auto-meaningful-name] */n$value = n.value
          o.forEach(function (t) {
            return x(n$value.enclosed, t)
          })
          var t
          var i = a(n$value.variables.values())
          try {
            for (i.s(); !(t = i.n()).done;) {
              var /* [auto-meaningful-name] */t$value = t.value
              if (r.has(t$value)) {
                x(o, t$value)
                x(n$value.enclosed, t$value)
              }
            }
          } catch (c) {
            i.e(c)
          } finally {
            i.f()
          }
        }
        for (s.s(); !(n = s.n()).done;) {
          c()
        }
      } catch (u) {
        s.e(u)
      } finally {
        s.f()
      }
    }
  })
  Ee.DEFMETHOD("is_block_scope", v)
  Wt.DEFMETHOD("is_block_scope", v)
  We.DEFMETHOD("is_block_scope", v)
  ze.DEFMETHOD("is_block_scope", v)
  dt.DEFMETHOD("is_block_scope", v)
  Be.DEFMETHOD("is_block_scope", m)
  Ge.DEFMETHOD("is_block_scope", function () {
    return this._block_scope || false
  })
  Pe.DEFMETHOD("is_block_scope", m)
  We.DEFMETHOD("init_scope_vars", function () {
    Ge.prototype.init_scope_vars.apply(this, arguments)
    this.uses_arguments = false
    this.def_variable(new rn({
      name: "arguments",
      start: this.start,
      end: this.end
    }))
  })
  Ye.DEFMETHOD("init_scope_vars", function () {
    Ge.prototype.init_scope_vars.apply(this, arguments)
    this.uses_arguments = false
  })
  qt.DEFMETHOD("mark_enclosed", function () {
    for (var e = this.definition(), /* [auto-meaningful-name] */this$scope = this.scope; this$scope && (x(this$scope.enclosed, e), this$scope !== e.scope);) {
      this$scope = this$scope.parent_scope
    }
  })
  qt.DEFMETHOD("reference", function () {
    this.definition().references.push(this)
    this.mark_enclosed()
  })
  Ge.DEFMETHOD("find_variable", function (e) {
    if (e instanceof qt) {
      e = e.name
    }
    return this.variables.get(e) || this.parent_scope && this.parent_scope.find_variable(e)
  })
  Ge.DEFMETHOD("def_function", function (e, t) {
    var n = this.def_variable(e, t)
    if (!n.init || n.init instanceof qe) {
      n.init = t
    }
    this.functions.set(e.name, n)
    return n
  })
  Ge.DEFMETHOD("def_variable", function (e, t) {
    var n = this.variables.get(e.name)
    if (n) {
      n.orig.push(e)
      if (n.init && (n.scope !== e.scope || n.init instanceof Xe)) {
        n.init = t
      }
    } else {
      n = new nr(this, e, t)
      this.variables.set(e.name, n)
      n.global = !this.parent_scope
    }
    return e.thedef = n
  })
  Ge.DEFMETHOD("next_mangled", function (e) {
    return ir(this, e)
  })
  ze.DEFMETHOD("next_mangled", function (e) {
    var t
    var /* [auto-meaningful-name] */this$mangled_names = this.mangled_names
    do {
      t = ir(this, e)
    } while (this$mangled_names.has(t))
    return t
  })
  Xe.DEFMETHOD("next_mangled", function (e, t) {
    for (var n = t.orig[0] instanceof rn && this.name && this.name.definition(), r = n ? n.mangled_name || n.name : null;;) {
      var i = ir(this, e)
      if (!r || r != i) {
        return i
      }
    }
  })
  qt.DEFMETHOD("unmangleable", function (e) {
    var t = this.definition()
    return !t || t.unmangleable(e)
  })
  pn.DEFMETHOD("unmangleable", v)
  qt.DEFMETHOD("unreferenced", function () {
    return !this.definition().references.length && !this.scope.pinned()
  })
  qt.DEFMETHOD("definition", function () {
    return this.thedef
  })
  qt.DEFMETHOD("global", function () {
    return this.thedef.global
  })
  ze.DEFMETHOD("_default_mangler_options", function (e) {
    if ((e = A(e, {
      eval: false,
      ie8: false,
      keep_classnames: false,
      keep_fnames: false,
      module: false,
      reserved: [],
      toplevel: false
    })).module) {
      e.toplevel = true
    }
    if (!(Array.isArray(e.reserved) || e.reserved instanceof Set)) {
      e.reserved = []
    }
    e.reserved = new Set(e.reserved)
    e.reserved.add("arguments")
    return e
  })
  ze.DEFMETHOD("mangle_names", function (e) {
    e = this._default_mangler_options(e)
    var t = -1
    var n = []
    if (e.keep_fnames) {
      er = new Set()
    }
    var r = this.mangled_names = new Set()
    if (e.cache) {
      this.globals.forEach(o)
      if (e.cache.props) {
        e.cache.props.forEach(function (e) {
          r.add(e)
        })
      }
    }
    var i = new Ln(function (r, i) {
      if (r instanceof Fe) {
        var a = t
        i()
        t = a
        return true
      }
      if (r instanceof Ge) {
        r.variables.forEach(o)
      } else if (r.is_block_scope()) {
        r.block_scope.variables.forEach(o)
      } else if (er && r instanceof wt && r.value instanceof We && !r.value.name && D(e.keep_fnames, r.name.name)) {
        er.add(r.name.definition().id)
      } else {
        if (r instanceof pn) {
          var s
          do {
            s = or(++t)
          } while (L.has(s))
          r.mangled_name = s
          return true
        }
        if (!e.ie8 && !e.safari10 && r instanceof fn) {
          n.push(r.definition())
        }
      }
    })
    function o(t) {
      if (!(e.reserved.has(t.name) || 1 & t.export)) {
        n.push(t)
      }
    }
    this.walk(i)
    if (e.keep_fnames || e.keep_classnames) {
      tr = new Set()
      n.forEach(function (t) {
        if (t.name.length < 6 && t.unmangleable(e)) {
          tr.add(t.name)
        }
      })
    }
    n.forEach(function (t) {
      t.mangle(e)
    })
    er = null
    tr = null
  })
  ze.DEFMETHOD("find_colliding_names", function (e) {
    var t = e.cache && e.cache.props
    var n = new Set()
    e.reserved.forEach(r)
    this.globals.forEach(i)
    this.walk(new Ln(function (e) {
      if (e instanceof Ge) {
        e.variables.forEach(i)
      }
      if (e instanceof fn) {
        i(e.definition())
      }
    }))
    return n
    function r(e) {
      n.add(e)
    }
    function i(n) {
      var /* [auto-meaningful-name] */n$name = n.name
      if (n.global && t && t.has(n$name)) {
        n$name = t.get(n$name)
      } else if (!n.unmangleable(e)) {
        return
      }
      r(n$name)
    }
  })
  ze.DEFMETHOD("expand_names", function (e) {
    or.reset()
    or.sort()
    e = this._default_mangler_options(e)
    var t = this.find_colliding_names(e)
    var n = 0
    function r(r) {
      if ((!r.global || !e.cache) && !r.unmangleable(e) && !e.reserved.has(r.name)) {
        var i = rr(r)
        var o = r.name = i ? i.name : function () {
          var e
          do {
            e = or(n++)
          } while (t.has(e) || L.has(e))
          return e
        }()
        r.orig.forEach(function (e) {
          e.name = o
        })
        r.references.forEach(function (e) {
          e.name = o
        })
      }
    }
    this.globals.forEach(r)
    this.walk(new Ln(function (e) {
      if (e instanceof Ge) {
        e.variables.forEach(r)
      }
      if (e instanceof fn) {
        r(e.definition())
      }
    }))
  })
  Ee.DEFMETHOD("tail_node", y)
  St.DEFMETHOD("tail_node", function () {
    return this.expressions[this.expressions.length - 1]
  })
  ze.DEFMETHOD("compute_char_frequency", function (e) {
    e = this._default_mangler_options(e)
    try {
      Ee.prototype.print = function (t, n) {
        this._print(t, n)
        if (this instanceof qt && !this.unmangleable(e)) {
          or.consider(this.name, -1)
        } else {
          if (e.properties) {
            if (this instanceof Bt) {
              or.consider(this.property, -1)
            } else {
              if (this instanceof Dt) {
                (function e(t) {
                  if (t instanceof wn) {
                    or.consider(t.value, -1)
                  } else {
                    if (t instanceof Nt) {
                      e(t.consequent)
                      e(t.alternative)
                    } else {
                      if (t instanceof St) {
                        e(t.tail_node())
                      }
                    }
                  }
                })(this.property)
              }
            }
          }
        }
      }
      or.consider(this.print_to_string(), 1)
    } finally {
      Ee.prototype.print = Ee.prototype._print
    }
    or.sort()
  })
  var or = function () {
    var e
    var t
    var n = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ$_".split("")
    var r = "0123456789".split("")
    function i() {
      t = new Map()
      n.forEach(function (e) {
        t.set(e, 0)
      })
      r.forEach(function (e) {
        t.set(e, 0)
      })
    }
    function o(e, n) {
      return t.get(n) - t.get(e)
    }
    function a(t) {
      var n = ""
      var r = 54
      t++
      do {
        t--
        n += e[t % r]
        t = Math.floor(t / r)
        r = 64
      } while (t > 0)
      return n
    }
    a.consider = function (e, n) {
      for (var /* [auto-meaningful-name] */e$length = e.length; --e$length >= 0;) {
        t.set(e[e$length], t.get(e[e$length]) + n)
      }
    }
    a.sort = function () {
      e = k(n, o).concat(k(r, o))
    }
    a.reset = i
    i()
    return a
  }()
  function ar() {
    var e = {}
    Object.keys(sr({
      0: 0
    })).forEach(function (t) {
      var n = sr(o({}, t, {
        0: 0
      }))
      if (n) {
        e[t] = n
      }
    })
    return e
  }
  function sr(e) {
    var t = Ti("", e)
    return t.error && t.error.defs
  }
  var cr = undefined
  Ee.prototype.size = function (e, t) {
    cr = ar.mangle
    var n = 0
    Nn(this, function (e, t) {
      n += e._size(t)
    }, t || e && e.stack)
    cr = undefined
    return n
  }
  Ee.prototype._size = function () {
    return 0
  }
  Ce.prototype._size = function () {
    return 8
  }
  Oe.prototype._size = function () {
    return 2 + this.value.length
  }
  var ur = function (e) {
    return e.length && e.length - 1
  }
  Be.prototype._size = function () {
    return 2 + ur(this.body)
  }
  ze.prototype._size = function () {
    return ur(this.body)
  }
  Ie.prototype._size = function () {
    return 1
  }
  Fe.prototype._size = function () {
    return 2
  }
  Me.prototype._size = function () {
    return 9
  }
  Le.prototype._size = function () {
    return 7
  }
  je.prototype._size = function () {
    return 8
  }
  Ue.prototype._size = function () {
    return 8
  }
  Ve.prototype._size = function () {
    return 6
  }
  Qe.prototype._size = function () {
    return 3
  }
  var lr = function (e) {
    return (e.is_generator ? 1 : 0) + (e.async ? 6 : 0)
  }
  Ke.prototype._size = function () {
    return lr(this) + 4 + ur(this.argnames) + ur(this.body)
  }
  Xe.prototype._size = function (e) {
    return 2 * !!Wn(e) + lr(this) + 12 + ur(this.argnames) + ur(this.body)
  }
  qe.prototype._size = function () {
    return lr(this) + 13 + ur(this.argnames) + ur(this.body)
  }
  Ye.prototype._size = function () {
    var e = 2 + ur(this.argnames)
    if (!(1 === this.argnames.length && this.argnames[0] instanceof qt)) {
      e += 2
    }
    return lr(this) + e + (Array.isArray(this.body) ? ur(this.body) : this.body._size())
  }
  $e.prototype._size = function () {
    return 2
  }
  Ze.prototype._size = function () {
    return 2 + 3 * Math.floor(this.segments.length / 2)
  }
  et.prototype._size = function () {
    return this.value.length
  }
  rt.prototype._size = function () {
    return this.value ? 7 : 6
  }
  it.prototype._size = function () {
    return 6
  }
  at.prototype._size = function () {
    return this.label ? 6 : 5
  }
  st.prototype._size = function () {
    return this.label ? 9 : 8
  }
  lt.prototype._size = function () {
    return 4
  }
  ft.prototype._size = function () {
    return 8 + ur(this.body)
  }
  pt.prototype._size = function () {
    return 5 + ur(this.body)
  }
  ht.prototype._size = function () {
    return 8 + ur(this.body)
  }
  _t.prototype._size = function () {
    return 3 + ur(this.body)
  }
  At.prototype._size = function () {
    var e = 7 + ur(this.body)
    if (this.argname) {
      e += 2
    }
    return e
  }
  gt.prototype._size = function () {
    return 7 + ur(this.body)
  }
  var fr = function (e, t) {
    return e + ur(t.definitions)
  }
  mt.prototype._size = function () {
    return fr(4, this)
  }
  yt.prototype._size = function () {
    return fr(4, this)
  }
  bt.prototype._size = function () {
    return fr(6, this)
  }
  wt.prototype._size = function () {
    return this.value ? 1 : 0
  }
  Et.prototype._size = function () {
    return this.name ? 4 : 0
  }
  xt.prototype._size = function () {
    var e = 6
    if (this.imported_name) {
      e += 1
    }
    if (this.imported_name || this.imported_names) {
      e += 5
    }
    if (this.imported_names) {
      e += 2 + ur(this.imported_names)
    }
    return e
  }
  Ct.prototype._size = function () {
    var e = 7 + (this.is_default ? 8 : 0)
    if (this.exported_value) {
      e += this.exported_value._size()
    }
    if (this.exported_names) {
      e += 2 + ur(this.exported_names)
    }
    if (this.module_name) {
      e += 5
    }
    return e
  }
  Ot.prototype._size = function () {
    return 2 + ur(this.args)
  }
  kt.prototype._size = function () {
    return 6 + ur(this.args)
  }
  St.prototype._size = function () {
    return ur(this.expressions)
  }
  Bt.prototype._size = function () {
    return this.property.length + 1
  }
  Dt.prototype._size = function () {
    return 2
  }
  It.prototype._size = function () {
    return "typeof" === this.operator ? 7 : "void" === this.operator ? 5 : this.operator.length
  }
  Pt.prototype._size = function (e) {
    if ("in" === this.operator) {
      return 4
    }
    var /* [auto-meaningful-name] */this$operator$length = this.operator.length
    if (("+" === this.operator || "-" === this.operator) && this.right instanceof It && this.right.operator === this.operator) {
      this$operator$length += 1
    }
    if (this.needs_parens(e)) {
      this$operator$length += 2
    }
    return this$operator$length
  }
  Nt.prototype._size = function () {
    return 3
  }
  jt.prototype._size = function () {
    return 2 + ur(this.elements)
  }
  Ut.prototype._size = function (e) {
    var t = 2
    if (Wn(e)) {
      t += 2
    }
    return t + ur(this.properties)
  }
  var dr = function (e) {
    return "string" == typeof e ? e.length : 0
  }
  Vt.prototype._size = function () {
    return dr(this.key) + 1
  }
  var hr = function (e) {
    return e ? 7 : 0
  }
  zt.prototype._size = function () {
    return 5 + hr(this.static) + dr(this.key)
  }
  Gt.prototype._size = function () {
    return 5 + hr(this.static) + dr(this.key)
  }
  Qt.prototype._size = function () {
    return hr(this.static) + dr(this.key) + lr(this)
  }
  Wt.prototype._size = function () {
    return (this.name ? 8 : 7) + (this.extends ? 8 : 0)
  }
  Kt.prototype._size = function () {
    return hr(this.static) + ("string" == typeof this.key ? this.key.length + 2 : 0) + (this.value ? 1 : 0)
  }
  qt.prototype._size = function () {
    return !cr || this.definition().unmangleable(cr) ? this.name.length : 2
  }
  sn.prototype._size = function () {
    return this.name.length
  }
  _n.prototype._size = function () {
    var /* [auto-meaningful-name] */this$name = this.name
    var /* [auto-meaningful-name] */this$thedef = this.thedef
    return this$thedef && this$thedef.global ? this$name.length : "arguments" === this$name ? 9 : 2
  }
  $t.prototype._size = function () {
    return 10
  }
  hn.prototype._size = function () {
    return this.name.length
  }
  gn.prototype._size = function () {
    return this.name.length
  }
  mn.prototype._size = function () {
    return 4
  }
  yn.prototype._size = function () {
    return 5
  }
  wn.prototype._size = function () {
    return this.value.length + 2
  }
  En.prototype._size = function () {
    var /* [auto-meaningful-name] */this$value = this.value
    return 0 === this$value ? 1 : this$value > 0 && Math.floor(this$value) === this$value ? Math.floor(Math.log10(this$value) + 1) : this$value.toString().length
  }
  xn.prototype._size = function () {
    return this.value.length
  }
  Cn.prototype._size = function () {
    return this.value.toString().length
  }
  kn.prototype._size = function () {
    return 4
  }
  Sn.prototype._size = function () {
    return 3
  }
  Tn.prototype._size = function () {
    return 6
  }
  Bn.prototype._size = function () {
    return 0
  }
  Dn.prototype._size = function () {
    return 8
  }
  Fn.prototype._size = function () {
    return 4
  }
  Rn.prototype._size = function () {
    return 5
  }
  ct.prototype._size = function () {
    return 6
  }
  ut.prototype._size = function () {
    return 6
  }
  var pr = function (e, t) {
    return e.flags & t
  }
  var _r = function (e, t) {
    e.flags |= t
  }
  var Ar = function (e, t) {
    e.flags &= ~t
  }
  var gr = function (e) {
    l(n, e)
    var t = f(n)
    function n(e, r) {
      var i
      u(this, n)
      i = t.call(this)
      if (!(undefined === e.defaults || e.defaults)) {
        r = true
      }
      i.options = A(e, {
        arguments: false,
        arrows: !r,
        booleans: !r,
        booleans_as_integers: false,
        collapse_vars: !r,
        comparisons: !r,
        computed_props: !r,
        conditionals: !r,
        dead_code: !r,
        defaults: true,
        directives: !r,
        drop_console: false,
        drop_debugger: !r,
        ecma: 5,
        evaluate: !r,
        expression: false,
        global_defs: false,
        hoist_funs: false,
        hoist_props: !r,
        hoist_vars: false,
        ie8: false,
        if_return: !r,
        inline: !r,
        join_vars: !r,
        keep_classnames: false,
        keep_fargs: true,
        keep_fnames: false,
        keep_infinity: false,
        loops: !r,
        module: false,
        negate_iife: !r,
        passes: 1,
        properties: !r,
        pure_getters: !r && "strict",
        pure_funcs: null,
        reduce_funcs: null,
        reduce_vars: !r,
        sequences: !r,
        side_effects: !r,
        switches: !r,
        top_retain: null,
        toplevel: !(!e || !e.top_retain),
        typeofs: !r,
        unsafe: false,
        unsafe_arrows: false,
        unsafe_comps: false,
        unsafe_Function: false,
        unsafe_math: false,
        unsafe_symbols: false,
        unsafe_methods: false,
        unsafe_proto: false,
        unsafe_regexp: false,
        unsafe_undefined: false,
        unused: !r,
        warnings: false
      }, true)
      var /* [auto-meaningful-name] */i$options$global_defs = i.options.global_defs
      if ("object" == typeof i$options$global_defs) {
        for (var a in i$options$global_defs) if ("@" === a[0] && B(i$options$global_defs, a)) {
          i$options$global_defs[a.slice(1)] = ye(i$options$global_defs[a], {
            expression: true
          })
        }
      }
      if (true === i.options.inline) {
        i.options.inline = 3
      }
      var /* [auto-meaningful-name] */i$options$pure_funcs = i.options.pure_funcs
      i.pure_funcs = "function" == typeof i$options$pure_funcs ? i$options$pure_funcs : i$options$pure_funcs ? function (e) {
        return !i$options$pure_funcs.includes(e.expression.print_to_string())
      } : m
      var /* [auto-meaningful-name] */i$options$top_retain = i.options.top_retain
      if (i$options$top_retain instanceof RegExp) {
        i.top_retain = function (e) {
          return i$options$top_retain.test(e.name)
        }
      } else {
        if ("function" == typeof i$options$top_retain) {
          i.top_retain = i$options$top_retain
        } else {
          if (i$options$top_retain) {
            if ("string" == typeof i$options$top_retain) {
              i$options$top_retain = i$options$top_retain.split(/,/)
            }
            i.top_retain = function (e) {
              return i$options$top_retain.includes(e.name)
            }
          }
        }
      }
      if (i.options.module) {
        i.directives["use strict"] = true
        i.options.toplevel = true
      }
      var /* [auto-meaningful-name] */i$options$toplevel = i.options.toplevel
      i.toplevel = "string" == typeof i$options$toplevel ? {
        funcs: /funcs/.test(i$options$toplevel),
        vars: /vars/.test(i$options$toplevel)
      } : {
        funcs: i$options$toplevel,
        vars: i$options$toplevel
      }
      var /* [auto-meaningful-name] */i$options$sequences = i.options.sequences
      i.sequences_limit = 1 == i$options$sequences ? 800 : 0 | i$options$sequences
      i.warnings_produced = {}
      i.evaluated_regexps = new Map()
      return i
    }
    s(n, [
      {
        key: "option",
        value: function (e) {
          return this.options[e]
        }
      }, {
        key: "exposed",
        value: function (e) {
          if (e.export) {
            return true
          }
          if (e.global) {
            for (var t = 0, /* [auto-meaningful-name] */e$orig$length = e.orig.length; t < e$orig$length; t++) {
              if (!this.toplevel[e.orig[t] instanceof on ? "funcs" : "vars"]) {
                return true
              }
            }
          }
          return false
        }
      }, {
        key: "in_boolean_context",
        value: function () {
          if (!this.option("booleans")) {
            return false
          }
          for (var e, t = this.self(), n = 0; e = this.parent(n); n++) {
            if (e instanceof ke || e instanceof Nt && e.condition === t || e instanceof Ne && e.condition === t || e instanceof je && e.condition === t || e instanceof lt && e.condition === t || e instanceof Rt && "!" == e.operator && e.expression === t) {
              return true
            }
            if (!(e instanceof Pt && ("&&" == e.operator || "||" == e.operator || "??" == e.operator) || e instanceof Nt || e.tail_node() === t)) {
              return false
            }
            t = e
          }
        }
      }, {
        key: "compress",
        value: function (e) {
          var t = this
          e = e.resolve_defines(this)
          if (this.option("expression")) {
            e.process_expression(true)
          }
          for (var n = +this.options.passes || 1, r = 1 / 0, i = false, o = {
              ie8: this.option("ie8")
            }, a = 0; a < n && (e.figure_out_scope(o), 0 === a && this.option("drop_console") && (e = e.drop_console()), (a > 0 || this.option("reduce_vars")) && e.reset_opt_flags(this), e = e.transform(this), !(n > 1 && "break" === function () {
              var n = 0
              Pn(e, function () {
                n++
              })
              t.info("pass " + a + ": last_count: " + r + ", count: " + n)
              if (n < r) {
                r = n
                i = false
              } else {
                if (i) {
                  return "break"
                }
                i = true
              }
            }())); a++) {
            ;
          }
          if (this.option("expression")) {
            e.process_expression(false)
          }
          return e
        }
      }, {
        key: "info",
        value: function () {
          if ("verbose" == this.options.warnings) {
            Ee.warn.apply(Ee, arguments)
          }
        }
      }, {
        key: "warn",
        value: function (e, t) {
          if (this.options.warnings) {
            var n = C(e, t)
            if (!(n in this.warnings_produced)) {
              this.warnings_produced[n] = true
              Ee.warn.apply(Ee, arguments)
            }
          }
        }
      }, {
        key: "clear_warnings",
        value: function () {
          this.warnings_produced = {}
        }
      }, {
        key: "before",
        value: function (e, t) {
          if (pr(e, 256)) {
            return e
          }
          var n = false
          if (e instanceof Ge) {
            e = (e = e.hoist_properties(this)).hoist_declarations(this)
            n = true
          }
          t(e, this)
          t(e, this)
          var r = e.optimize(this)
          if (n && r instanceof Ge) {
            r.drop_unused(this)
            t(r, this)
          }
          if (r === e) {
            _r(r, 256)
          }
          return r
        }
      }
    ])
    return n
  }(Ln)
  function vr(e, t) {
    e.DEFMETHOD("optimize", function (e) {
      if (pr(this, 512)) {
        return this
      }
      if (e.has_directive("use asm")) {
        return this
      }
      var n = t(this, e)
      _r(n, 512)
      return n
    })
  }
  function mr(e, t) {
    if (!((t = Vr(t)) instanceof Ee)) {
      var n
      if (e instanceof jt) {
        var /* [auto-meaningful-name] */e$elements = e.elements
        if ("length" == t) {
          return kr(e$elements.length, e)
        }
        if ("number" == typeof t && t in e$elements) {
          n = e$elements[t]
        }
      } else if (e instanceof Ut) {
        t = "" + t
        for (var /* [auto-meaningful-name] */e$properties = e.properties, /* [auto-meaningful-name] */e$properties$length = e$properties.length; --e$properties$length >= 0;) {
          if (!(e$properties[e$properties$length] instanceof Vt)) {
            return
          }
          if (!(n || e$properties[e$properties$length].key !== t)) {
            n = e$properties[e$properties$length].value
          }
        }
      }
      return n instanceof _n && n.fixed_value() || n
    }
  }
  function yr(e, t, n, r, i, o) {
    var a = t.parent(i)
    var s = Wr(n, a)
    if (s) {
      return s
    }
    if (!o && a instanceof Ot && a.expression === n && !(r instanceof Ye) && !(r instanceof Wt) && !a.is_expr_pure(e) && (!(r instanceof Xe) || !(a instanceof kt) && r.contains_this())) {
      return true
    }
    if (a instanceof jt) {
      return yr(e, t, a, a, i + 1)
    }
    if (a instanceof Vt && n === a.value) {
      var c = t.parent(i + 1)
      return yr(e, t, c, c, i + 2)
    }
    if (a instanceof Tt && a.expression === n) {
      var u = mr(r, a.property)
      return !o && yr(e, t, a, u, i + 1)
    }
  }
  function br(e) {
    return e instanceof Ye || e instanceof Xe
  }
  function wr(e) {
    if (e instanceof mn) {
      return true
    }
    if (e instanceof _n) {
      return e.definition().orig[0] instanceof cn
    }
    if (e instanceof Tt) {
      if ((e = e.expression) instanceof _n) {
        if (e.is_immutable()) {
          return false
        }
        e = e.fixed_value()
      }
      return !e || !(e instanceof Cn) && (e instanceof bn || wr(e))
    }
    return false
  }
  function Er(e, t) {
    if (!(e instanceof _n)) {
      return false
    }
    for (var /* [auto-meaningful-name] */e$definition$orig = e.definition().orig, /* [auto-meaningful-name] */e$definition$orig$length = e$definition$orig.length; --e$definition$orig$length >= 0;) {
      if (e$definition$orig[e$definition$orig$length] instanceof t) {
        return true
      }
    }
  }
  function xr(e) {
    for (var t = 0;; t++) {
      var n = e.parent(t)
      if (n instanceof ze) {
        return n
      }
      if (n instanceof We) {
        return n
      }
      if (n.block_scope) {
        return n.block_scope
      }
    }
  }
  function Cr(e, t) {
    for (var n, r = 0; (n = e.parent(r++)) && !(n instanceof Ge);) {
      if (n instanceof At && n.argname) {
        n = n.argname.definition().scope
        break
      }
    }
    return n.find_variable(t)
  }
  function Or(e, t) {
    if (1 == t.length) {
      return t[0]
    }
    if (0 == t.length) {
      throw new Error("trying to create a sequence with length zero!")
    }
    return E(St, e, {
      expressions: t.reduce(Tr, [])
    })
  }
  function kr(e, t) {
    switch (typeof e) {
      case "string":
        return E(wn, t, {
          value: e
        })
      case "number":
        return isNaN(e) ? E(Sn, t) : isFinite(e) ? 1 / e < 0 ? E(Rt, t, {
          operator: "-",
          expression: E(En, t, {
            value: -e
          })
        }) : E(En, t, {
          value: e
        }) : e < 0 ? E(Rt, t, {
          operator: "-",
          expression: E(Dn, t)
        }) : E(Dn, t)
      case "boolean":
        return E(e ? Fn : Rn, t)
      case "undefined":
        return E(Tn, t)
      default:
        if (null === e) {
          return E(kn, t, {
            value: null
          })
        }
        if (e instanceof RegExp) {
          return E(Cn, t, {
            value: {
              source: R(e.source),
              flags: e.flags
            }
          })
        }
        throw new Error(C("Can't handle constant of type: {type}", {
          type: typeof e
        }))
    }
  }
  function Sr(e, t, n) {
    return e instanceof Rt && "delete" == e.operator || e instanceof Ot && e.expression === t && (n instanceof Tt || n instanceof _n && "eval" == n.name) ? Or(t, [
      E(En, t, {
        value: 0
      }), n
    ]) : n
  }
  function Tr(e, t) {
    if (t instanceof St) {
      e.push.apply(e, c(t.expressions))
    } else {
      e.push(t)
    }
    return e
  }
  function Br(e) {
    if (null === e) {
      return []
    }
    if (e instanceof De) {
      return e.body
    }
    if (e instanceof Ie) {
      return []
    }
    if (e instanceof xe) {
      return [e]
    }
    throw new Error("Can't convert thing to statement array")
  }
  function Dr(e) {
    return null === e || e instanceof Ie || e instanceof De && 0 == e.body.length
  }
  function Ir(e) {
    return !(e instanceof Xt || e instanceof qe || e instanceof yt || e instanceof bt || e instanceof Ct || e instanceof xt)
  }
  function Rr(e) {
    return e instanceof Pe && e.body instanceof De ? e.body : e
  }
  function Fr(e) {
    return "Call" == e.TYPE && (e.expression instanceof Xe || Fr(e.expression))
  }
  function Pr(e) {
    return e instanceof _n && e.definition().undeclared
  }
  vr(Ee, function (e) {
    return e
  })
  ze.DEFMETHOD("drop_console", function () {
    return this.transform(new jn(function (e) {
      if ("Call" == e.TYPE) {
        var /* [auto-meaningful-name] */e$expression = e.expression
        if (e$expression instanceof Tt) {
          for (var /* [auto-meaningful-name] */e$expression$expression = e$expression.expression; e$expression$expression.expression;) {
            e$expression$expression = e$expression$expression.expression
          }
          if (Pr(e$expression$expression) && "console" == e$expression$expression.name) {
            return E(Tn, e)
          }
        }
      }
    }))
  })
  Ee.DEFMETHOD("equivalent_to", function (e) {
    return function (e, t) {
      if (!$n(e, t)) {
        return false
      }
      for (var n = [e], r = [t], i = n.push.bind(n), o = r.push.bind(r); n.length && r.length;) {
        var a = n.pop()
        var s = r.pop()
        if (!$n(a, s)) {
          return false
        }
        a._children_backwards(i)
        s._children_backwards(o)
        if (n.length !== r.length) {
          return false
        }
      }
      return 0 == n.length && 0 == r.length
    }(this, e)
  })
  Ge.DEFMETHOD("process_expression", function (e, t) {
    var n = this
    var r = new jn(function (i) {
      if (e && i instanceof ke) {
        return E(rt, i, {
          value: i.body
        })
      }
      if (!e && i instanceof rt) {
        if (t) {
          var o = i.value && i.value.drop_side_effect_free(t, true)
          return o ? E(ke, i, {
            body: o
          }) : E(Ie, i)
        }
        return E(ke, i, {
          body: i.value || E(Rt, i, {
            operator: "void",
            expression: E(En, i, {
              value: 0
            })
          })
        })
      }
      if (i instanceof Wt || i instanceof We && i !== n) {
        return i
      }
      if (i instanceof Be) {
        var a = i.body.length - 1
        if (a >= 0) {
          i.body[a] = i.body[a].transform(r)
        }
      } else if (i instanceof lt) {
        i.body = i.body.transform(r)
        if (i.alternative) {
          i.alternative = i.alternative.transform(r)
        }
      } else {
        if (i instanceof Ve) {
          i.body = i.body.transform(r)
        }
      }
      return i
    })
    n.transform(r)
  });
  (function (e) {
    function t(e, t) {
      t.assignments = 0
      t.chained = false
      t.direct_access = false
      t.escaped = 0
      t.recursive_refs = 0
      t.references = []
      t.should_replace = undefined
      t.single_use = undefined
      if (t.scope.pinned()) {
        t.fixed = false
      } else {
        if (t.orig[0] instanceof tn || !e.exposed(t)) {
          t.fixed = t.init
        } else {
          t.fixed = false
        }
      }
    }
    function n(e, n, r) {
      r.variables.forEach(function (r) {
        t(n, r)
        if (null === r.fixed) {
          e.defs_to_safe_ids.set(r.id, e.safe_ids)
          a(e, r, true)
        } else {
          if (r.fixed) {
            e.loop_ids.set(r.id, e.in_loop)
            a(e, r, true)
          }
        }
      })
    }
    function r(e, n) {
      if (n.block_scope) {
        n.block_scope.variables.forEach(function (n) {
          t(e, n)
        })
      }
    }
    function i(e) {
      e.safe_ids = Object.create(e.safe_ids)
    }
    function o(e) {
      e.safe_ids = Object.getPrototypeOf(e.safe_ids)
    }
    function a(e, t, n) {
      e.safe_ids[t.id] = n
    }
    function s(e, t) {
      if ("m" == t.single_use) {
        return false
      }
      if (e.safe_ids[t.id]) {
        if (null == t.fixed) {
          var n = t.orig[0]
          if (n instanceof rn || "arguments" == n.name) {
            return false
          }
          t.fixed = E(Tn, n)
        }
        return true
      }
      return t.fixed instanceof qe
    }
    function c(e, t, n, r) {
      return undefined === t.fixed || (null === t.fixed && (i = e.defs_to_safe_ids.get(t.id)) ? (i[t.id] = false, e.defs_to_safe_ids.delete(t.id), true) : !!B(e.safe_ids, t.id) && !!s(e, t) && false !== t.fixed && !(null != t.fixed && (!r || t.references.length > t.assignments)) && (t.fixed instanceof qe ? r instanceof Ee && t.fixed.parent_scope === n : t.orig.every(function (e) {
        return !(e instanceof tn || e instanceof on || e instanceof cn)
      })))
      var i
    }
    function u(e, t, n, r, i, o, a) {
      var s = e.parent(o)
      if (i) {
        if (i.is_constant()) {
          return
        }
        if (i instanceof Yt) {
          return
        }
      }
      if (s instanceof Mt && "=" == s.operator && r === s.right || s instanceof Ot && (r !== s.expression || s instanceof kt) || s instanceof nt && r === s.value && r.scope !== t.scope || s instanceof wt && r === s.value || s instanceof ut && r === s.value && r.scope !== t.scope) {
        if (!(!(a > 1) || i && i.is_constant_expression(n))) {
          a = 1
        }
        return void ((!t.escaped || t.escaped > a) && (t.escaped = a))
      }
      if (s instanceof jt || s instanceof ct || s instanceof Pt && zr.has(s.operator) || s instanceof Nt && r !== s.condition || s instanceof Qe || s instanceof St && r === s.tail_node()) {
        u(e, t, n, s, s, o + 1, a)
      } else if (s instanceof Vt && r === s.value) {
        var c = e.parent(o + 1)
        u(e, t, n, c, c, o + 2, a)
      } else if (s instanceof Tt && r === s.expression && (u(e, t, n, s, i = mr(i, s.property), o + 1, a + 1), i)) {
        return
      }
      if (!(o > 0 || s instanceof St && r !== s.tail_node() || s instanceof ke)) {
        t.direct_access = true
      }
    }
    e(Ee, g)
    var l = function (e) {
      return Pn(e, function (e) {
        if (e instanceof qt) {
          var t = e.definition()
          if (t) {
            if (e instanceof _n) {
              t.references.push(e)
            }
            t.fixed = false
          }
        }
      })
    }
    e(Ke, function (e, t, r) {
      i(e)
      n(e, r, this)
      t()
      o(e)
      return true
    })
    e(Mt, function (e, t, n) {
      var r = this
      if (r.left instanceof $e) {
        l(r.left)
      } else {
        var /* [auto-meaningful-name] */r$left = r.left
        if (r$left instanceof _n) {
          var o = r$left.definition()
          var s = c(e, o, r$left.scope, r.right)
          o.assignments++
          if (s) {
            var /* [auto-meaningful-name] */o$fixed = o.fixed
            if (o$fixed || "=" == r.operator) {
              var d = "=" == r.operator
              var h = d ? r.right : r
              if (!yr(n, e, r, h, 0)) {
                o.references.push(r$left)
                if (!d) {
                  o.chained = true
                }
                o.fixed = d ? function () {
                  return r.right
                } : function () {
                  return E(Pt, r, {
                    operator: r.operator.slice(0, -1),
                    left: o$fixed instanceof Ee ? o$fixed : o$fixed(),
                    right: r.right
                  })
                }
                a(e, o, false)
                r.right.walk(e)
                a(e, o, true)
                u(e, o, r$left.scope, r, h, 0, 1)
                return true
              }
            }
          }
        }
      }
    })
    e(Pt, function (e) {
      if (zr.has(this.operator)) {
        this.left.walk(e)
        i(e)
        this.right.walk(e)
        o(e)
        return true
      }
    })
    e(Be, function (e, t, n) {
      r(n, this)
    })
    e(pt, function (e) {
      i(e)
      this.expression.walk(e)
      o(e)
      i(e)
      Se(this, e)
      o(e)
      return true
    })
    e(Wt, function (e, t) {
      Ar(this, 16)
      i(e)
      t()
      o(e)
      return true
    })
    e(Nt, function (e) {
      this.condition.walk(e)
      i(e)
      this.consequent.walk(e)
      o(e)
      i(e)
      this.alternative.walk(e)
      o(e)
      return true
    })
    e(ht, function (e, t) {
      i(e)
      t()
      o(e)
      return true
    })
    e(We, function (e, t, r) {
      var s
      var c = this
      Ar(this, 16)
      i(e)
      n(e, r, this)
      return this.uses_arguments ? (t(), void o(e)) : (!this.name && (s = e.parent()) instanceof Ot && s.expression === this && !s.args.some(function (e) {
        return e instanceof Qe
      }) && this.argnames.every(function (e) {
        return e instanceof qt
      }) && this.argnames.forEach(function (t, n) {
        if (t.definition) {
          var r = t.definition()
          if (!(r.orig.length > 1)) {
            if (undefined !== r.fixed || c.uses_arguments && !e.has_directive("use strict")) {
              r.fixed = false
            } else {
              r.fixed = function () {
                return s.args[n] || E(Tn, s)
              }
              e.loop_ids.set(r.id, e.in_loop)
              a(e, r, true)
            }
          }
        }
      }), t(), o(e), true)
    })
    e(Me, function (e, t, n) {
      r(n, this)
      var /* [auto-meaningful-name] */e$in_loop = e.in_loop
      e.in_loop = this
      i(e)
      this.body.walk(e)
      if (ai(this)) {
        o(e)
        i(e)
      }
      this.condition.walk(e)
      o(e)
      e.in_loop = e$in_loop
      return true
    })
    e(je, function (e, t, n) {
      r(n, this)
      if (this.init) {
        this.init.walk(e)
      }
      var /* [auto-meaningful-name] */e$in_loop = e.in_loop
      e.in_loop = this
      i(e)
      if (this.condition) {
        this.condition.walk(e)
      }
      this.body.walk(e)
      if (this.step) {
        if (ai(this)) {
          o(e)
          i(e)
        }
        this.step.walk(e)
      }
      o(e)
      e.in_loop = e$in_loop
      return true
    })
    e(Ue, function (e, t, n) {
      r(n, this)
      l(this.init)
      this.object.walk(e)
      var /* [auto-meaningful-name] */e$in_loop = e.in_loop
      e.in_loop = this
      i(e)
      this.body.walk(e)
      o(e)
      e.in_loop = e$in_loop
      return true
    })
    e(lt, function (e) {
      this.condition.walk(e)
      i(e)
      this.body.walk(e)
      o(e)
      if (this.alternative) {
        i(e)
        this.alternative.walk(e)
        o(e)
      }
      return true
    })
    e(Fe, function (e) {
      i(e)
      this.body.walk(e)
      o(e)
      return true
    })
    e(fn, function () {
      this.definition().fixed = false
    })
    e(_n, function (e, t, n) {
      var r
      var i
      var o = this.definition()
      o.references.push(this)
      if (1 == o.references.length && !o.fixed && o.orig[0] instanceof on) {
        e.loop_ids.set(o.id, e.in_loop)
      }
      if (undefined !== o.fixed && s(e, o)) {
        if (o.fixed) {
          if ((r = this.fixed_value()) instanceof We && ui(e, o)) {
            o.recursive_refs++
          } else {
            if (r && !n.exposed(o) && function (e, t, n) {
              return t.option("unused") && !n.scope.pinned() && n.references.length - n.recursive_refs == 1 && e.loop_ids.get(n.id) === e.in_loop
            }(e, n, o)) {
              o.single_use = r instanceof We && !r.pinned() || r instanceof Wt || o.scope === this.scope && r.is_constant_expression()
            } else {
              o.single_use = false
            }
          }
          if (yr(n, e, this, r, 0, !!(i = r) && (i.is_constant() || i instanceof We || i instanceof mn))) {
            if (o.single_use) {
              o.single_use = "m"
            } else {
              o.fixed = false
            }
          }
        }
      } else {
        o.fixed = false
      }
      u(e, o, this.scope, this, r, 0, 1)
    })
    e(ze, function (e, r, i) {
      this.globals.forEach(function (e) {
        t(i, e)
      })
      n(e, i, this)
    })
    e(_t, function (e, t, n) {
      r(n, this)
      i(e)
      Se(this, e)
      o(e)
      if (this.bcatch) {
        i(e)
        this.bcatch.walk(e)
        o(e)
      }
      if (this.bfinally) {
        this.bfinally.walk(e)
      }
      return true
    })
    e(It, function (e) {
      var t = this
      if ("++" === t.operator || "--" === t.operator) {
        var /* [auto-meaningful-name] */t$expression = t.expression
        if (t$expression instanceof _n) {
          var r = t$expression.definition()
          var i = c(e, r, t$expression.scope, true)
          r.assignments++
          if (i) {
            var /* [auto-meaningful-name] */r$fixed = r.fixed
            if (r$fixed) {
              r.references.push(t$expression)
              r.chained = true
              r.fixed = function () {
                return E(Pt, t, {
                  operator: t.operator.slice(0, -1),
                  left: E(Rt, t, {
                    operator: "+",
                    expression: r$fixed instanceof Ee ? r$fixed : r$fixed()
                  }),
                  right: E(En, t, {
                    value: 1
                  })
                })
              }
              a(e, r, true)
              return true
            }
          }
        }
      }
    })
    e(wt, function (e, t) {
      var n = this
      if (n.name instanceof $e) {
        l(n.name)
      } else {
        var r = n.name.definition()
        if (n.value) {
          if (c(e, r, n.name.scope, n.value)) {
            r.fixed = function () {
              return n.value
            }
            e.loop_ids.set(r.id, e.in_loop)
            a(e, r, false)
            t()
            a(e, r, true)
            return true
          }
          r.fixed = false
        }
      }
    })
    e(Le, function (e, t, n) {
      r(n, this)
      var /* [auto-meaningful-name] */e$in_loop = e.in_loop
      e.in_loop = this
      i(e)
      t()
      o(e)
      e.in_loop = e$in_loop
      return true
    })
  })(function (e, t) {
    e.DEFMETHOD("reduce_vars", t)
  })
  ze.DEFMETHOD("reset_opt_flags", function (e) {
    var t = this
    var n = e.option("reduce_vars")
    var r = new Ln(function (i, o) {
      Ar(i, 1792)
      if (n) {
        if (e.top_retain && i instanceof qe && r.parent() === t) {
          _r(i, 1024)
        }
        return i.reduce_vars(r, o, e)
      }
    })
    r.safe_ids = Object.create(null)
    r.in_loop = null
    r.loop_ids = new Map()
    r.defs_to_safe_ids = new Map()
    t.walk(r)
  })
  qt.DEFMETHOD("fixed_value", function () {
    var /* [auto-meaningful-name] */this$thedef$fixed = this.thedef.fixed
    return !this$thedef$fixed || this$thedef$fixed instanceof Ee ? this$thedef$fixed : this$thedef$fixed()
  })
  _n.DEFMETHOD("is_immutable", function () {
    var /* [auto-meaningful-name] */this$definition$orig = this.definition().orig
    return 1 == this$definition$orig.length && this$definition$orig[0] instanceof cn
  })
  var Nr = S("Array Boolean clearInterval clearTimeout console Date decodeURI decodeURIComponent encodeURI encodeURIComponent Error escape eval EvalError Function isFinite isNaN JSON Math Number parseFloat parseInt RangeError ReferenceError RegExp Object setInterval setTimeout String SyntaxError TypeError unescape URIError")
  _n.DEFMETHOD("is_declared", function (e) {
    return !this.definition().undeclared || e.option("unsafe") && Nr.has(this.name)
  })
  var Mr
  var Lr = S("Infinity NaN undefined")
  function jr(e) {
    return e instanceof Dn || e instanceof Sn || e instanceof Tn
  }
  function Ur(e, t) {
    var n
    var r
    var i = t.find_parent(Ge).get_defun_scope()
    !function () {
      var e = t.self()
      var o = 0
      do {
        if (e instanceof At || e instanceof gt) {
          o++
        } else if (e instanceof Pe) {
          n = true
        } else {
          if (e instanceof Ge) {
            i = e
            break
          }
          if (e instanceof _t) {
            r = true
          }
        }
      } while (e = t.parent(o++))
    }()
    var o
    var a = 10
    do {
      o = false
      u(e)
      if (t.option("dead_code")) {
        f(e, t)
      }
      if (t.option("if_return")) {
        l(e, t)
      }
      if (t.sequences_limit > 0) {
        h(e, t)
        A(e, t)
      }
      if (t.option("join_vars")) {
        v(e)
      }
      if (t.option("collapse_vars")) {
        s(e, t)
      }
    } while (o && a-- > 0)
    function s(e, t) {
      if (i.pinned()) {
        return e
      }
      for (var a, s = [], /* [auto-meaningful-name] */e$length = e.length, u = new jn(function (e) {
          if (S) {
            return e
          }
          if (!k) {
            return e !== f[d] ? e : ++d < f.length ? P(e) : (k = true, (A = function e(t, n, r) {
              var i = u.parent(n)
              return i instanceof Mt ? r && !(i.left instanceof Tt || m.has(i.left.name)) ? e(i, n + 1, r) : t : i instanceof Pt ? !r || zr.has(i.operator) && i.left !== t ? t : e(i, n + 1, r) : i instanceof Ot || i instanceof pt ? t : i instanceof Nt ? r && i.condition === t ? e(i, n + 1, r) : t : i instanceof vt ? e(i, n + 1, true) : i instanceof nt ? r ? e(i, n + 1, r) : t : i instanceof lt ? r && i.condition === t ? e(i, n + 1, r) : t : i instanceof Pe ? t : i instanceof St ? e(i, n + 1, i.tail_node() !== t) : i instanceof ke ? e(i, n + 1, true) : i instanceof ft || i instanceof wt ? t : null
            }(e, 0)) === e && (S = true), e)
          }
          var n
          var a = u.parent()
          if (e instanceof Mt && "=" != e.operator && v.equivalent_to(e.left) || e instanceof ct || e instanceof Ot && v instanceof Tt && v.equivalent_to(e.expression) || e instanceof Ce || e instanceof $e || e instanceof Qe && e.expression instanceof qt && e.expression.definition().references.length > 1 || e instanceof Pe && !(e instanceof je) || e instanceof ot || e instanceof _t || e instanceof Ve || e instanceof ut || e instanceof Ct || e instanceof Wt || a instanceof je && e !== a.init || !x && e instanceof _n && !e.is_declared(t) && !ti.has(e) || e instanceof _n && a instanceof Ot && F(a, Vn)) {
            S = true
            return e
          }
          if (!(g || y && x || !(a instanceof Pt && zr.has(a.operator) && a.left !== e || a instanceof Nt && a.condition !== e || a instanceof lt && a.condition !== e))) {
            g = a
          }
          if (B && !(e instanceof Jt) && v.equivalent_to(e)) {
            if (g) {
              S = true
              return e
            }
            if (Wr(e, a)) {
              if (_) {
                T++
              }
              return e
            }
            T++
            if (_ && h instanceof wt) {
              return e
            }
            o = S = true
            t.info("Collapsing {name} [{file}:{line},{col}]", {
              name: e.print_to_string(),
              file: e.start.file,
              line: e.start.line,
              col: e.start.col
            })
            if (h instanceof Ft) {
              return E(Rt, h, h)
            }
            if (h instanceof wt) {
              var s = h.name.definition()
              var /* [auto-meaningful-name] */h$value = h.value
              return s.references.length - s.replaced != 1 || t.exposed(s) ? E(Mt, h, {
                operator: "=",
                left: E(_n, h.name, h.name),
                right: h$value
              }) : (s.replaced++, O && jr(h$value) ? h$value.transform(t) : Sr(a, e, h$value))
            }
            Ar(h, 32)
            return h
          }
          if (e instanceof Ot || e instanceof nt && (b || v instanceof Tt || W(v)) || e instanceof Tt && (b || e.expression.may_throw_on_access(t)) || e instanceof _n && (m.get(e.name) || b && W(e)) || e instanceof wt && e.value && (m.has(e.name.name) || b && W(e.name)) || (n = Wr(e.left, e)) && (n instanceof Tt || m.has(n.name)) || C && (r ? e.has_side_effects(t) : function e(t, n) {
            if (t instanceof Mt) {
              return e(t.left, true)
            }
            if (t instanceof It) {
              return e(t.expression, true)
            }
            if (t instanceof wt) {
              return t.value && e(t.value)
            }
            if (n) {
              if (t instanceof Bt) {
                return e(t.expression, true)
              }
              if (t instanceof Dt) {
                return e(t.expression, true)
              }
              if (t instanceof _n) {
                return t.definition().scope !== i
              }
            }
            return false
          }(e))) {
            A = e
            if (e instanceof Ge) {
              S = true
            }
          }
          return P(e)
        }, function (e) {
          if (!S) {
            if (A === e) {
              S = true
            }
            if (g === e) {
              g = null
            }
          }
        }), l = new jn(function (e) {
          if (S) {
            return e
          }
          if (!k) {
            if (e !== f[d]) {
              return e
            }
            if (++d < f.length) {
              return
            }
            k = true
            return e
          }
          return e instanceof _n && e.name == R.name ? (--T || (S = true), Wr(e, l.parent()) ? e : (R.replaced++, _.replaced--, h.value)) : e instanceof ht || e instanceof Ge ? e : undefined
        }); --e$length >= 0;) {
        if (0 == e$length && t.option("unused")) {
          M()
        }
        var f = []
        for (L(e[e$length]); s.length > 0;) {
          f = s.pop()
          var d = 0
          var h = f[f.length - 1]
          var _ = null
          var A = null
          var g = null
          var v = j(h)
          if (v && !wr(v) && !v.has_side_effects(t)) {
            var m = H(h)
            var y = G(v)
            if (v instanceof _n) {
              m.set(v.name, false)
            }
            var b = z(h)
            var x = Q()
            var C = h.may_throw(t)
            var O = h.name instanceof rn
            var k = O
            var S = false
            var T = 0
            var B = !a || !k
            if (!B) {
              for (var D = t.self().argnames.lastIndexOf(h.name) + 1; !S && D < a.length; D++) {
                a[D].transform(u)
              }
              B = true
            }
            for (var I = e$length; !S && I < e.length; I++) {
              e[I].transform(u)
            }
            if (_) {
              var R = h.name.definition()
              if (S && R.references.length - R.replaced > T) {
                T = false
              } else {
                for (S = false, d = 0, k = O, I = e$length; !S && I < e.length; I++) {
                  e[I].transform(l)
                }
                _.single_use = false
              }
            }
            if (T && !V(h)) {
              e.splice(e$length, 1)
            }
          }
        }
      }
      function P(e) {
        if (e instanceof Ge) {
          return e
        }
        if (e instanceof ft) {
          e.expression = e.expression.transform(u)
          for (var t = 0, /* [auto-meaningful-name] */e$body$length = e.body.length; !S && t < e$body$length; t++) {
            var r = e.body[t]
            if (r instanceof pt) {
              if (!k) {
                if (r !== f[d]) {
                  continue
                }
                d++
              }
              r.expression = r.expression.transform(u)
              if (!x) {
                break
              }
            }
          }
          S = true
          return e
        }
      }
      function N(e, t, n) {
        var r = false
        var o = !(e instanceof Ye)
        t.walk(new Ln(function (t, a) {
          if (r) {
            return true
          }
          if (t instanceof _n && (e.variables.has(t.name) || function (e, t) {
            if (e.global) {
              return false
            }
            for (var /* [auto-meaningful-name] */e$scope = e.scope; e$scope && e$scope !== t;) {
              if (e$scope.variables.has(e.name)) {
                return true
              }
              e$scope = e$scope.parent_scope
            }
            return false
          }(t.definition(), e))) {
            var /* [auto-meaningful-name] */t$definition$scope = t.definition().scope
            if (t$definition$scope !== i) {
              for (; t$definition$scope = t$definition$scope.parent_scope;) {
                if (t$definition$scope === i) {
                  return true
                }
              }
            }
            return r = true
          }
          if ((n || o) && t instanceof mn) {
            return r = true
          }
          if (t instanceof Ge && !(t instanceof Ye)) {
            var c = o
            o = false
            a()
            o = c
            return true
          }
        }))
        return r
      }
      function M() {
        var e
        var n = t.self()
        if (br(n) && !n.name && !n.uses_arguments && !n.pinned() && (e = t.parent()) instanceof Ot && e.expression === n && e.args.every(function (e) {
          return !(e instanceof Qe)
        })) {
          var r = t.has_directive("use strict")
          if (r && !p(r, n.body)) {
            r = false
          }
          var /* [auto-meaningful-name] */n$argnames$length = n.argnames.length
          a = e.args.slice(n$argnames$length)
          for (var o = new Set(), c = n$argnames$length; --c >= 0;) {
            var u = n.argnames[c]
            var l = e.args[c]
            var f = u.definition && u.definition()
            if (!(f && f.orig.length > 1) && (a.unshift(E(wt, u, {
              name: u,
              value: l
            })), !o.has(u.name))) {
              o.add(u.name)
              if (u instanceof Qe) {
                var d = e.args.slice(c)
                if (d.every(function (e) {
                  return !N(n, e, r)
                })) {
                  s.unshift([
                    E(wt, u, {
                      name: u.expression,
                      value: E(jt, e, {
                        elements: d
                      })
                    })
                  ])
                }
              } else {
                if (l) {
                  if (l instanceof We && l.pinned() || N(n, l, r)) {
                    l = null
                  }
                } else {
                  l = E(Tn, u).transform(t)
                }
                if (l) {
                  s.unshift([
                    E(wt, u, {
                      name: u,
                      value: l
                    })
                  ])
                }
              }
            }
          }
        }
      }
      function L(e) {
        f.push(e)
        if (e instanceof Mt) {
          if (!e.left.has_side_effects(t)) {
            s.push(f.slice())
          }
          L(e.right)
        } else if (e instanceof Pt) {
          L(e.left)
          L(e.right)
        } else if (e instanceof Ot && !F(e, Vn)) {
          L(e.expression)
          e.args.forEach(L)
        } else if (e instanceof pt) {
          L(e.expression)
        } else if (e instanceof Nt) {
          L(e.condition)
          L(e.consequent)
          L(e.alternative)
        } else if (e instanceof vt) {
          var /* [auto-meaningful-name] */e$definitions$length = e.definitions.length
          var r = e$definitions$length - 200
          for (r < 0 && (r = 0); r < e$definitions$length; r++) {
            L(e.definitions[r])
          }
        } else if (e instanceof Ne) {
          L(e.condition)
          if (!(e.body instanceof Be)) {
            L(e.body)
          }
        } else {
          if (e instanceof nt) {
            if (e.value) {
              L(e.value)
            }
          } else {
            if (e instanceof je) {
              if (e.init) {
                L(e.init)
              }
              if (e.condition) {
                L(e.condition)
              }
              if (e.step) {
                L(e.step)
              }
              if (!(e.body instanceof Be)) {
                L(e.body)
              }
            } else {
              if (e instanceof Ue) {
                L(e.object)
                if (!(e.body instanceof Be)) {
                  L(e.body)
                }
              } else {
                if (e instanceof lt) {
                  L(e.condition)
                  if (!(e.body instanceof Be)) {
                    L(e.body)
                  }
                  if (!(!e.alternative || e.alternative instanceof Be)) {
                    L(e.alternative)
                  }
                } else {
                  if (e instanceof St) {
                    e.expressions.forEach(L)
                  } else {
                    if (e instanceof ke) {
                      L(e.body)
                    } else {
                      if (e instanceof ft) {
                        L(e.expression)
                        e.body.forEach(L)
                      } else {
                        if (e instanceof It) {
                          if (!("++" != e.operator && "--" != e.operator)) {
                            s.push(f.slice())
                          }
                        } else {
                          if (e instanceof wt && e.value) {
                            s.push(f.slice())
                            L(e.value)
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
        f.pop()
      }
      function j(e) {
        if (!(e instanceof wt && e.name instanceof Jt)) {
          var n = e[e instanceof Mt ? "left" : "expression"]
          return !Er(n, tn) && !Er(n, nn) && n
        }
        var r = e.name.definition()
        if (p(e.name, r.orig)) {
          var i = r.references.length - r.replaced
          if (i) {
            return r.orig.length - r.eliminated > 1 && !(e.name instanceof rn) || (i > 1 ? function (e) {
              var /* [auto-meaningful-name] */e$value = e.value
              if (e$value instanceof _n && "arguments" != e$value.name) {
                var n = e$value.definition()
                if (!n.undeclared) {
                  return _ = n
                }
              }
            }(e) : !t.exposed(r)) ? E(_n, e.name, e.name) : undefined
          }
        }
      }
      function U(e) {
        return e[e instanceof Mt ? "right" : "value"]
      }
      function H(e) {
        var n = new Map()
        if (e instanceof It) {
          return n
        }
        var r = new Ln(function (e) {
          for (var i = e; i instanceof Tt;) {
            i = i.expression
          }
          if (i instanceof _n || i instanceof mn) {
            n.set(i.name, n.get(i.name) || yr(t, r, e, e, 0))
          }
        })
        U(e).walk(r)
        return n
      }
      function V(n) {
        if (n.name instanceof rn) {
          var r = t.parent()
          var /* [auto-meaningful-name] */t$self$argnames = t.self().argnames
          var o = t$self$argnames.indexOf(n.name)
          if (o < 0) {
            r.args.length = Math.min(r.args.length, t$self$argnames.length - 1)
          } else {
            var /* [auto-meaningful-name] */r$args = r.args
            if (r$args[o]) {
              r$args[o] = E(En, r$args[o], {
                value: 0
              })
            }
          }
          return true
        }
        var s = false
        return e[e$length].transform(new jn(function (e, t, r) {
          return s ? e : e === n || e.body === n ? (s = true, e instanceof wt ? (e.value = e.name instanceof tn ? E(Tn, e.value) : null, e) : r ? w.skip : null) : undefined
        }, function (e) {
          if (e instanceof St) {
            switch (e.expressions.length) {
              case 0:
                return null
              case 1:
                return e.expressions[0]
            }
          }
        }))
      }
      function G(e) {
        for (; e instanceof Tt;) {
          e = e.expression
        }
        return e instanceof _n && e.definition().scope === i && !(n && (m.has(e.name) || h instanceof It || h instanceof Mt && "=" != h.operator))
      }
      function z(e) {
        return e instanceof It ? Qr.has(e.operator) : U(e).has_side_effects(t)
      }
      function Q() {
        if (b) {
          return false
        }
        if (_) {
          return true
        }
        if (v instanceof _n) {
          var e = v.definition()
          if (e.references.length - e.replaced == (h instanceof wt ? 1 : 2)) {
            return true
          }
        }
        return false
      }
      function W(e) {
        if (!e.definition) {
          return true
        }
        var t = e.definition()
        return !(1 == t.orig.length && t.orig[0] instanceof on) && (t.scope.get_defun_scope() !== i || !t.references.every(function (e) {
          var t = e.scope.get_defun_scope()
          if ("Scope" == t.TYPE) {
            t = t.parent_scope
          }
          return t === i
        }))
      }
    }
    function u(e) {
      for (var t = [], n = 0; n < e.length;) {
        var r = e[n]
        if (r instanceof De && r.body.every(Ir)) {
          o = true
          u(r.body)
          e.splice.apply(e, [n, 1].concat(c(r.body)))
          n += r.body.length
        } else {
          if (r instanceof Ie) {
            o = true
            e.splice(n, 1)
          } else {
            if (r instanceof Oe) {
              if (t.indexOf(r.value) < 0) {
                n++
                t.push(r.value)
              } else {
                o = true
                e.splice(n, 1)
              }
            } else {
              n++
            }
          }
        }
      }
    }
    function l(e, t) {
      for (var n = t.self(), r = function (e) {
          for (var t = 0, /* [auto-meaningful-name] */e$length = e.length; --e$length >= 0;) {
            var r = e[e$length]
            if (r instanceof lt && r.body instanceof rt && ++t > 1) {
              return true
            }
          }
          return false
        }(e), i = n instanceof We, /* [auto-meaningful-name] */e$length = e.length; --e$length >= 0;) {
        var s = e[e$length]
        var c = v(e$length)
        var u = e[c]
        if (i && !u && s instanceof rt) {
          if (!s.value) {
            o = true
            e.splice(e$length, 1)
            continue
          }
          if (s.value instanceof Rt && "void" == s.value.operator) {
            o = true
            e[e$length] = E(ke, s, {
              body: s.value.expression
            })
            continue
          }
        }
        if (s instanceof lt) {
          var l
          if (_(l = ni(s.body))) {
            if (l.label) {
              O(l.label.thedef.references, l)
            }
            o = true;
            (s = s.clone()).condition = s.condition.negate(t)
            var f = g(s.body, l)
            s.body = E(De, s, {
              body: Br(s.alternative).concat(A())
            })
            s.alternative = E(De, s, {
              body: f
            })
            e[e$length] = s.transform(t)
            continue
          }
          if (_(l = ni(s.alternative))) {
            if (l.label) {
              O(l.label.thedef.references, l)
            }
            o = true;
            (s = s.clone()).body = E(De, s.body, {
              body: Br(s.body).concat(A())
            })
            f = g(s.alternative, l)
            s.alternative = E(De, s.alternative, {
              body: f
            })
            e[e$length] = s.transform(t)
            continue
          }
        }
        if (s instanceof lt && s.body instanceof rt) {
          var /* [auto-meaningful-name] */s$body$value = s.body.value
          if (!s$body$value && !s.alternative && (i && !u || u instanceof rt && !u.value)) {
            o = true
            e[e$length] = E(ke, s.condition, {
              body: s.condition
            })
            continue
          }
          if (s$body$value && !s.alternative && u instanceof rt && u.value) {
            o = true;
            (s = s.clone()).alternative = u
            e[e$length] = s.transform(t)
            e.splice(c, 1)
            continue
          }
          if (s$body$value && !s.alternative && (!u && i && r || u instanceof rt)) {
            o = true;
            (s = s.clone()).alternative = u || E(rt, s, {
              value: null
            })
            e[e$length] = s.transform(t)
            if (u) {
              e.splice(c, 1)
            }
            continue
          }
          var p = e[m(e$length)]
          if (t.option("sequences") && i && !s.alternative && p instanceof lt && p.body instanceof rt && v(c) == e.length && u instanceof ke) {
            o = true;
            (s = s.clone()).alternative = E(De, u, {
              body: [
                u, E(rt, u, {
                  value: null
                })
              ]
            })
            e[e$length] = s.transform(t)
            e.splice(c, 1)
            continue
          }
        }
      }
      function _(r) {
        if (!r) {
          return false
        }
        for (var o = e$length + 1, /* [auto-meaningful-name] */_e$length = e.length; o < _e$length; o++) {
          var c = e[o]
          if (c instanceof bt || c instanceof yt) {
            return false
          }
        }
        var u = r instanceof ot ? t.loopcontrol_target(r) : null
        return r instanceof rt && i && function (e) {
          return !e || e instanceof Rt && "void" == e.operator
        }(r.value) || r instanceof st && n === Rr(u) || r instanceof at && u instanceof De && n === u
      }
      function A() {
        var t = e.slice(e$length + 1)
        e.length = e$length + 1
        return t.filter(function (t) {
          return !(t instanceof qe) || (e.push(t), false)
        })
      }
      function g(e, t) {
        var n = Br(e).slice(0, -1)
        if (t.value) {
          n.push(E(ke, t.value, {
            body: t.value.expression
          }))
        }
        return n
      }
      function v(t) {
        for (var n = t + 1, /* [auto-meaningful-name] */_e$length2 = e.length; n < _e$length2; n++) {
          var i = e[n]
          if (!(i instanceof mt && d(i))) {
            break
          }
        }
        return n
      }
      function m(t) {
        for (var n = t; --n >= 0;) {
          var r = e[n]
          if (!(r instanceof mt && d(r))) {
            break
          }
        }
        return n
      }
    }
    function f(e, t) {
      for (var n, r = t.self(), i = 0, a = 0, /* [auto-meaningful-name] */e$length = e.length; i < e$length; i++) {
        var c = e[i]
        if (c instanceof ot) {
          var u = t.loopcontrol_target(c)
          if (c instanceof at && !(u instanceof Pe) && Rr(u) === r || c instanceof st && Rr(u) === r) {
            if (c.label) {
              O(c.label.thedef.references, c)
            }
          } else {
            e[a++] = c
          }
        } else {
          e[a++] = c
        }
        if (ni(c)) {
          n = e.slice(i + 1)
          break
        }
      }
      e.length = a
      o = a != e$length
      if (n) {
        n.forEach(function (n) {
          Hr(t, n, e)
        })
      }
    }
    function d(e) {
      return e.definitions.every(function (e) {
        return !e.value
      })
    }
    function h(e, t) {
      if (!(e.length < 2)) {
        for (var n = [], r = 0, i = 0, /* [auto-meaningful-name] */e$length = e.length; i < e$length; i++) {
          var s = e[i]
          if (s instanceof ke) {
            if (n.length >= t.sequences_limit) {
              u()
            }
            var /* [auto-meaningful-name] */s$body = s.body
            if (n.length > 0) {
              s$body = s$body.drop_side_effect_free(t)
            }
            if (s$body) {
              Tr(n, s$body)
            }
          } else {
            if (!(s instanceof vt && d(s) || s instanceof qe)) {
              u()
            }
            e[r++] = s
          }
        }
        u()
        e.length = r
        if (r != e$length) {
          o = true
        }
      }
      function u() {
        if (n.length) {
          var t = Or(n[0], n)
          e[r++] = E(ke, t, {
            body: t
          })
          n = []
        }
      }
    }
    function _(e, t) {
      if (!(e instanceof De)) {
        return e
      }
      for (var n = null, r = 0, /* [auto-meaningful-name] */e$body$length = e.body.length; r < e$body$length; r++) {
        var o = e.body[r]
        if (o instanceof mt && d(o)) {
          t.push(o)
        } else {
          if (n) {
            return false
          }
          n = o
        }
      }
      return n
    }
    function A(e, t) {
      function n(e) {
        i--
        o = true
        var /* [auto-meaningful-name] */r$body = r.body
        return Or(r$body, [r$body, e]).transform(t)
      }
      for (var r, i = 0, a = 0; a < e.length; a++) {
        var s = e[a]
        if (r) {
          if (s instanceof nt) {
            s.value = n(s.value || E(Tn, s).transform(t))
          } else {
            if (s instanceof je) {
              if (!(s.init instanceof vt || Pn(r.body, function (e) {
                return e instanceof Ge || (e instanceof Pt && "in" === e.operator ? Mn : undefined)
              }))) {
                if (s.init) {
                  s.init = n(s.init)
                } else {
                  s.init = r.body
                  i--
                  o = true
                }
              }
            } else {
              if (s instanceof Ue) {
                if (!(s.init instanceof bt || s.init instanceof yt)) {
                  s.object = n(s.object)
                }
              } else {
                if (s instanceof lt) {
                  s.condition = n(s.condition)
                } else {
                  if (s instanceof ft || s instanceof Ve) {
                    s.expression = n(s.expression)
                  }
                }
              }
            }
          }
        }
        if (t.option("conditionals") && s instanceof lt) {
          var c = []
          var u = _(s.body, c)
          var l = _(s.alternative, c)
          if (false !== u && false !== l && c.length > 0) {
            var /* [auto-meaningful-name] */c$length = c.length
            c.push(E(lt, s, {
              condition: s.condition,
              body: u || E(Ie, s.body),
              alternative: l
            }))
            c.unshift(i, 1);
            [].splice.apply(e, c)
            a += c$length
            i += c$length + 1
            r = null
            o = true
            continue
          }
        }
        e[i++] = s
        r = s instanceof ke ? s : null
      }
      e.length = i
    }
    function g(e, n) {
      if (e instanceof vt) {
        var r
        var o = e.definitions[e.definitions.length - 1]
        if (o.value instanceof Ut && (n instanceof Mt ? r = [n] : n instanceof St && (r = n.expressions.slice()), r)) {
          var a = false
          do {
            var s = r[0]
            if (!(s instanceof Mt)) {
              break
            }
            if ("=" != s.operator) {
              break
            }
            if (!(s.left instanceof Tt)) {
              break
            }
            var /* [auto-meaningful-name] */s$left$expression = s.left.expression
            if (!(s$left$expression instanceof _n)) {
              break
            }
            if (o.name.name != s$left$expression.name) {
              break
            }
            if (!s.right.is_constant_expression(i)) {
              break
            }
            var /* [auto-meaningful-name] */s$left$property = s.left.property
            if (s$left$property instanceof Ee) {
              s$left$property = s$left$property.evaluate(t)
            }
            if (s$left$property instanceof Ee) {
              break
            }
            s$left$property = "" + s$left$property
            var l = t.option("ecma") < 2015 && t.has_directive("use strict") ? function (e) {
              return e.key != s$left$property && e.key && e.key.name != s$left$property
            } : function (e) {
              return e.key && e.key.name != s$left$property
            }
            if (!o.value.properties.every(l)) {
              break
            }
            var f = o.value.properties.filter(function (e) {
              return e.key === s$left$property
            })[0]
            if (f) {
              f.value = new St({
                start: f.start,
                expressions: [f.value.clone(), s.right.clone()],
                end: f.end
              })
            } else {
              o.value.properties.push(E(Vt, s, {
                key: s$left$property,
                value: s.right
              }))
            }
            r.shift()
            a = true
          } while (r.length)
          return a && r
        }
      }
    }
    function v(e) {
      for (var t, n = 0, r = -1, /* [auto-meaningful-name] */e$length = e.length; n < e$length; n++) {
        var a = e[n]
        var s = e[r]
        if (a instanceof vt) {
          if (s && s.TYPE == a.TYPE) {
            s.definitions = s.definitions.concat(a.definitions)
            o = true
          } else {
            if (t && t.TYPE == a.TYPE && d(a)) {
              t.definitions = t.definitions.concat(a.definitions)
              o = true
            } else {
              e[++r] = a
              t = a
            }
          }
        } else if (a instanceof nt) {
          a.value = u(a.value)
        } else if (a instanceof je) {
          if (c = g(s, a.init)) {
            o = true
            a.init = c.length ? Or(a.init, c) : null
            e[++r] = a
          } else {
            if (s instanceof mt && (!a.init || a.init.TYPE == s.TYPE)) {
              if (a.init) {
                s.definitions = s.definitions.concat(a.init.definitions)
              }
              a.init = s
              e[r] = a
              o = true
            } else {
              if (t && a.init && t.TYPE == a.init.TYPE && d(a.init)) {
                t.definitions = t.definitions.concat(a.init.definitions)
                a.init = null
                e[++r] = a
                o = true
              } else {
                e[++r] = a
              }
            }
          }
        } else if (a instanceof Ue) {
          a.object = u(a.object)
        } else if (a instanceof lt) {
          a.condition = u(a.condition)
        } else if (a instanceof ke) {
          var c
          if (c = g(s, a.body)) {
            o = true
            if (!c.length) {
              continue
            }
            a.body = Or(a.body, c)
          }
          e[++r] = a
        } else if (a instanceof ft || a instanceof Ve) {
          a.expression = u(a.expression)
        } else {
          e[++r] = a
        }
      }
      function u(t) {
        e[++r] = a
        var n = g(s, t)
        return n ? (o = true, n.length ? Or(t, n) : t instanceof St ? t.tail_node().left : t.left) : t
      }
      e.length = r + 1
    }
  }
  function Hr(e, t, n) {
    if (!(t instanceof qe)) {
      e.warn("Dropping unreachable code [{file}:{line},{col}]", t.start)
    }
    Pn(t, function (r) {
      return r instanceof mt ? (e.warn("Declarations in unreachable code! [{file}:{line},{col}]", r.start), r.remove_initializers(), n.push(r), true) : r instanceof qe && (r === t || !e.has_directive("use strict")) ? (n.push(r === t ? r : E(mt, r, {
        definitions: [
          E(wt, r, {
            name: E(Zt, r.name, r.name),
            value: null
          })
        ]
      })), true) : r instanceof Ge || undefined
    })
  }
  function Vr(e) {
    return e instanceof bn ? e.getValue() : e instanceof Rt && "void" == e.operator && e.expression instanceof bn ? undefined : e
  }
  function Gr(e, t) {
    return pr(e, 8) || e instanceof Tn || e instanceof Rt && "void" == e.operator && !e.expression.has_side_effects(t)
  }
  !function (e) {
    function t(e) {
      return /strict/.test(e.option("pure_getters"))
    }
    Ee.DEFMETHOD("may_throw_on_access", function (e) {
      return !e.option("pure_getters") || this._dot_throw(e)
    })
    e(Ee, t)
    e(kn, m)
    e(Tn, m)
    e(bn, v)
    e(jt, v)
    e(Ut, function (e) {
      if (!t(e)) {
        return false
      }
      for (var /* [auto-meaningful-name] */this$properties$length = this.properties.length; --this$properties$length >= 0;) {
        if (this.properties[this$properties$length]._dot_throw(e)) {
          return true
        }
      }
      return false
    })
    e(Wt, v)
    e(Ht, v)
    e(zt, m)
    e(Qe, function (e) {
      return this.expression._dot_throw(e)
    })
    e(Xe, v)
    e(Ye, v)
    e(Ft, v)
    e(Rt, function () {
      return "void" == this.operator
    })
    e(Pt, function (e) {
      return ("&&" == this.operator || "||" == this.operator || "??" == this.operator) && (this.left._dot_throw(e) || this.right._dot_throw(e))
    })
    e(Mt, function (e) {
      return "=" == this.operator && this.right._dot_throw(e)
    })
    e(Nt, function (e) {
      return this.consequent._dot_throw(e) || this.alternative._dot_throw(e)
    })
    e(Bt, function (e) {
      return !!t(e) && !(this.expression instanceof Xe && "prototype" == this.property)
    })
    e(St, function (e) {
      return this.tail_node()._dot_throw(e)
    })
    e(_n, function (e) {
      if ("arguments" === this.name) {
        return false
      }
      if (pr(this, 8)) {
        return true
      }
      if (!t(e)) {
        return false
      }
      if (Pr(this) && this.is_declared(e)) {
        return false
      }
      if (this.is_immutable()) {
        return false
      }
      var n = this.fixed_value()
      return !n || n._dot_throw(e)
    })
  }(function (e, t) {
    e.DEFMETHOD("_dot_throw", t)
  });
  (function (e) {
    var t = S("! delete")
    var n = S("in instanceof == != === !== < <= >= >")
    e(Ee, v)
    e(Rt, function () {
      return t.has(this.operator)
    })
    e(Pt, function () {
      return n.has(this.operator) || zr.has(this.operator) && this.left.is_boolean() && this.right.is_boolean()
    })
    e(Nt, function () {
      return this.consequent.is_boolean() && this.alternative.is_boolean()
    })
    e(Mt, function () {
      return "=" == this.operator && this.right.is_boolean()
    })
    e(St, function () {
      return this.tail_node().is_boolean()
    })
    e(Fn, m)
    e(Rn, m)
  })(function (e, t) {
    e.DEFMETHOD("is_boolean", t)
  });
  (function (e) {
    e(Ee, v)
    e(En, m)
    var t = S("+ - ~ ++ --")
    e(It, function () {
      return t.has(this.operator)
    })
    var n = S("- * / % & | ^ << >> >>>")
    e(Pt, function (e) {
      return n.has(this.operator) || "+" == this.operator && this.left.is_number(e) && this.right.is_number(e)
    })
    e(Mt, function (e) {
      return n.has(this.operator.slice(0, -1)) || "=" == this.operator && this.right.is_number(e)
    })
    e(St, function (e) {
      return this.tail_node().is_number(e)
    })
    e(Nt, function (e) {
      return this.consequent.is_number(e) && this.alternative.is_number(e)
    })
  })(function (e, t) {
    e.DEFMETHOD("is_number", t)
  });
  (Mr = function (e, t) {
    e.DEFMETHOD("is_string", t)
  })(Ee, v)
  Mr(wn, m)
  Mr(Ze, m)
  Mr(Rt, function () {
    return "typeof" == this.operator
  })
  Mr(Pt, function (e) {
    return "+" == this.operator && (this.left.is_string(e) || this.right.is_string(e))
  })
  Mr(Mt, function (e) {
    return ("=" == this.operator || "+=" == this.operator) && this.right.is_string(e)
  })
  Mr(St, function (e) {
    return this.tail_node().is_string(e)
  })
  Mr(Nt, function (e) {
    return this.consequent.is_string(e) && this.alternative.is_string(e)
  })
  var zr = S("&& || ??")
  var Qr = S("delete ++ --")
  function Wr(e, t) {
    return t instanceof It && Qr.has(t.operator) ? t.expression : t instanceof Mt && t.left === e ? e : undefined
  }
  function Kr(e, t) {
    return e.size() > t.size() ? t : e
  }
  function Xr(e, t) {
    return Kr(E(ke, e, {
      body: e
    }), E(ke, t, {
      body: t
    })).body
  }
  function Yr(e, t, n) {
    return (Wn(e) ? Xr : Kr)(t, n)
  }
  function qr(e) {
    for (var t = new Map(), n = 0, r = Object.keys(e); n < r.length; n++) {
      var i = r[n]
      t.set(i, S(e[i]))
    }
    return t
  }
  !function (e) {
    function t(e, t) {
      e.warn("global_defs " + t.print_to_string() + " redefined [{file}:{line},{col}]", t.start)
    }
    ze.DEFMETHOD("resolve_defines", function (e) {
      return e.option("global_defs") ? (this.figure_out_scope({
        ie8: e.option("ie8")
      }), this.transform(new jn(function (n) {
        var r = n._find_defs(e, "")
        if (r) {
          for (var i, o = 0, a = n; (i = this.parent(o++)) && i instanceof Tt && i.expression === a;) {
            a = i
          }
          if (!Wr(a, i)) {
            return r
          }
          t(e, n)
        }
      }))) : this
    })
    e(Ee, g)
    e(Bt, function (e, t) {
      return this.expression._find_defs(e, "." + this.property + t)
    })
    e(Jt, function (e) {
      if (this.global() && B(e.option("global_defs"), this.name)) {
        t(e, this)
      }
    })
    e(_n, function (e, t) {
      if (this.global()) {
        var n = e.option("global_defs")
        var r = this.name + t
        return B(n, r) ? function e(t, n) {
          if (t instanceof Ee) {
            return E(t.CTOR, n, t)
          }
          if (Array.isArray(t)) {
            return E(jt, n, {
              elements: t.map(function (t) {
                return e(t, n)
              })
            })
          }
          if (t && "object" == typeof t) {
            var r = []
            for (var i in t) if (B(t, i)) {
              r.push(E(Vt, n, {
                key: i,
                value: e(t[i], n)
              }))
            }
            return E(Ut, n, {
              properties: r
            })
          }
          return kr(t, n)
        }(n[r], this) : undefined
      }
    })
  }(function (e, t) {
    e.DEFMETHOD("_find_defs", t)
  })
  var $r = ["constructor", "toString", "valueOf"]
  var Jr = qr({
    Array: ["indexOf", "join", "lastIndexOf", "slice"].concat($r),
    Boolean: $r,
    Function: $r,
    Number: ["toExponential", "toFixed", "toPrecision"].concat($r),
    Object: $r,
    RegExp: ["test"].concat($r),
    String: ["charAt", "charCodeAt", "concat", "indexOf", "italics", "lastIndexOf", "match", "replace", "search", "slice", "split", "substr", "substring", "toLowerCase", "toUpperCase", "trim"].concat($r)
  })
  var Zr = qr({
    Array: ["isArray"],
    Math: ["abs", "acos", "asin", "atan", "ceil", "cos", "exp", "floor", "log", "round", "sin", "sqrt", "tan", "atan2", "pow", "max", "min"],
    Number: ["isFinite", "isNaN"],
    Object: ["create", "getOwnPropertyDescriptor", "getOwnPropertyNames", "getPrototypeOf", "isExtensible", "isFrozen", "isSealed", "keys"],
    String: ["fromCharCode"]
  })
  !function (e) {
    Ee.DEFMETHOD("evaluate", function (e) {
      if (!e.option("evaluate")) {
        return this
      }
      var t = this._eval(e, 1)
      return !t || t instanceof RegExp ? t : "function" == typeof t || "object" == typeof t ? this : t
    })
    var t = S("! ~ - + void")
    Ee.DEFMETHOD("is_constant", function () {
      return this instanceof bn ? !(this instanceof Cn) : this instanceof Rt && this.expression instanceof bn && t.has(this.operator)
    })
    e(xe, function () {
      throw new Error(C("Cannot evaluate a statement [{file}:{line},{col}]", this.start))
    })
    e(We, y)
    e(Wt, y)
    e(Ee, y)
    e(bn, function () {
      return this.getValue()
    })
    e(xn, y)
    e(Cn, function (e) {
      var t = e.evaluated_regexps.get(this)
      if (undefined === t) {
        try {
          t = (0, eval)(this.print_to_string())
        } catch (e) {
          t = null
        }
        e.evaluated_regexps.set(this, t)
      }
      return t || this
    })
    e(Ze, function () {
      return 1 !== this.segments.length ? this : this.segments[0].value
    })
    e(Xe, function (e) {
      if (e.option("unsafe")) {
        var t = function () {}
        t.node = this
        t.toString = function () {
          return this.node.print_to_string()
        }
        return t
      }
      return this
    })
    e(jt, function (e, t) {
      if (e.option("unsafe")) {
        for (var n = [], r = 0, /* [auto-meaningful-name] */this$elements$length = this.elements.length; r < this$elements$length; r++) {
          var o = this.elements[r]
          var a = o._eval(e, t)
          if (o === a) {
            return this
          }
          n.push(a)
        }
        return n
      }
      return this
    })
    e(Ut, function (e, t) {
      if (e.option("unsafe")) {
        for (var n = {}, r = 0, /* [auto-meaningful-name] */this$properties$length = this.properties.length; r < this$properties$length; r++) {
          var o = this.properties[r]
          if (o instanceof Qe) {
            return this
          }
          var /* [auto-meaningful-name] */o$key = o.key
          if (o$key instanceof qt) {
            o$key = o$key.name
          } else if (o$key instanceof Ee && (o$key = o$key._eval(e, t)) === o.key) {
            return this
          }
          if ("function" == typeof Object.prototype[o$key]) {
            return this
          }
          if (!(o.value instanceof Xe) && (n[o$key] = o.value._eval(e, t), n[o$key] === o.value)) {
            return this
          }
        }
        return n
      }
      return this
    })
    var n = S("! typeof void")
    e(Rt, function (e, t) {
      var /* [auto-meaningful-name] */this$expression = this.expression
      if (e.option("typeofs") && "typeof" == this.operator && (this$expression instanceof We || this$expression instanceof _n && this$expression.fixed_value() instanceof We)) {
        return "function"
      }
      if (!n.has(this.operator)) {
        t++
      }
      if ((this$expression = this$expression._eval(e, t)) === this.expression) {
        return this
      }
      switch (this.operator) {
        case "!":
          return !this$expression
        case "typeof":
          return this$expression instanceof RegExp ? this : typeof this$expression
        case "void":
          return
        case "~":
          return ~this$expression
        case "-":
          return -this$expression
        case "+":
          return +this$expression
      }
      return this
    })
    var r = S("&& || ?? === !==")
    e(Pt, function (e, t) {
      if (!r.has(this.operator)) {
        t++
      }
      var n = this.left._eval(e, t)
      if (n === this.left) {
        return this
      }
      var i
      var o = this.right._eval(e, t)
      if (o === this.right) {
        return this
      }
      switch (this.operator) {
        case "&&":
          i = n && o
          break
        case "||":
          i = n || o
          break
        case "??":
          i = null != n ? n : o
          break
        case "|":
          i = n | o
          break
        case "&":
          i = n & o
          break
        case "^":
          i = n ^ o
          break
        case "+":
          i = n + o
          break
        case "*":
          i = n * o
          break
        case "**":
          i = Math.pow(n, o)
          break
        case "/":
          i = n / o
          break
        case "%":
          i = n % o
          break
        case "-":
          i = n - o
          break
        case "<<":
          i = n << o
          break
        case ">>":
          i = n >> o
          break
        case ">>>":
          i = n >>> o
          break
        case "==":
          i = n == o
          break
        case "===":
          i = n === o
          break
        case "!=":
          i = n != o
          break
        case "!==":
          i = n !== o
          break
        case "<":
          i = n < o
          break
        case "<=":
          i = n <= o
          break
        case ">":
          i = n > o
          break
        case ">=":
          i = n >= o
          break
        default:
          return this
      }
      return isNaN(i) && e.find_parent(Ve) ? this : i
    })
    e(Nt, function (e, t) {
      var n = this.condition._eval(e, t)
      if (n === this.condition) {
        return this
      }
      var r = n ? this.consequent : this.alternative
      var i = r._eval(e, t)
      return i === r ? this : i
    })
    e(_n, function (e, t) {
      var n
      var r = this.fixed_value()
      if (!r) {
        return this
      }
      if (B(r, "_eval")) {
        n = r._eval()
      } else {
        this._eval = y
        n = r._eval(e, t)
        delete this._eval
        if (n === r) {
          return this
        }
        r._eval = function () {
          return n
        }
      }
      if (n && "object" == typeof n) {
        var /* [auto-meaningful-name] */this$definition$escaped = this.definition().escaped
        if (this$definition$escaped && t > this$definition$escaped) {
          return this
        }
      }
      return n
    })
    var i = {
      Array: Array,
      Math: Math,
      Number: Number,
      Object: Object,
      String: String
    }
    var o = qr({
      Math: ["E", "LN10", "LN2", "LOG2E", "LOG10E", "PI", "SQRT1_2", "SQRT2"],
      Number: ["MAX_VALUE", "MIN_VALUE", "NaN", "NEGATIVE_INFINITY", "POSITIVE_INFINITY"]
    })
    e(Tt, function (e, t) {
      if (e.option("unsafe")) {
        var /* [auto-meaningful-name] */this$property = this.property
        if (this$property instanceof Ee && (this$property = this$property._eval(e, t)) === this.property) {
          return this
        }
        var r
        var /* [auto-meaningful-name] */this$expression = this.expression
        if (Pr(this$expression)) {
          var s
          var c = "hasOwnProperty" === this$expression.name && "call" === this$property && (s = e.parent() && e.parent().args) && s && s[0] && s[0].evaluate(e)
          if (null == (c = c instanceof Bt ? c.expression : c) || c.thedef && c.thedef.undeclared) {
            return this.clone()
          }
          var u = o.get(this$expression.name)
          if (!u || !u.has(this$property)) {
            return this
          }
          r = i[this$expression.name]
        } else {
          if (!(r = this$expression._eval(e, t + 1)) || r === this$expression || !B(r, this$property)) {
            return this
          }
          if ("function" == typeof r) {
            switch (this$property) {
              case "name":
                return r.node.name ? r.node.name.name : ""
              case "length":
                return r.node.argnames.length
              default:
                return this
            }
          }
        }
        return r[this$property]
      }
      return this
    })
    e(Ot, function (e, t) {
      var /* [auto-meaningful-name] */this$expression = this.expression
      if (e.option("unsafe") && this$expression instanceof Tt) {
        var r
        var /* [auto-meaningful-name] */this$expression$property = this$expression.property
        if (this$expression$property instanceof Ee && (this$expression$property = this$expression$property._eval(e, t)) === this$expression.property) {
          return this
        }
        var /* [auto-meaningful-name] */this$expression$expression = this$expression.expression
        if (Pr(this$expression$expression)) {
          var s = "hasOwnProperty" === this$expression$expression.name && "call" === this$expression$property && this.args[0] && this.args[0].evaluate(e)
          if (null == (s = s instanceof Bt ? s.expression : s) || s.thedef && s.thedef.undeclared) {
            return this.clone()
          }
          var c = Zr.get(this$expression$expression.name)
          if (!c || !c.has(this$expression$property)) {
            return this
          }
          r = i[this$expression$expression.name]
        } else {
          if ((r = this$expression$expression._eval(e, t + 1)) === this$expression$expression || !r) {
            return this
          }
          var u = Jr.get(r.constructor.name)
          if (!u || !u.has(this$expression$property)) {
            return this
          }
        }
        for (var l = [], f = 0, /* [auto-meaningful-name] */this$args$length = this.args.length; f < this$args$length; f++) {
          var h = this.args[f]
          var p = h._eval(e, t)
          if (h === p) {
            return this
          }
          l.push(p)
        }
        try {
          return r[this$expression$property].apply(r, l)
        } catch (t) {
          e.warn("Error evaluating {code} [{file}:{line},{col}]", {
            code: this.print_to_string(),
            file: this.start.file,
            line: this.start.line,
            col: this.start.col
          })
        }
      }
      return this
    })
    e(kt, y)
  }(function (e, t) {
    e.DEFMETHOD("_eval", t)
  });
  (function (e) {
    function t(e) {
      return E(Rt, e, {
        operator: "!",
        expression: e
      })
    }
    function n(e, n, r) {
      var i = t(e)
      if (r) {
        var o = E(ke, n, {
          body: n
        })
        return Kr(i, o) === o ? n : i
      }
      return Kr(i, n)
    }
    e(Ee, function () {
      return t(this)
    })
    e(xe, function () {
      throw new Error("Cannot negate a statement")
    })
    e(Xe, function () {
      return t(this)
    })
    e(Ye, function () {
      return t(this)
    })
    e(Rt, function () {
      return "!" == this.operator ? this.expression : t(this)
    })
    e(St, function (e) {
      var t = this.expressions.slice()
      t.push(t.pop().negate(e))
      return Or(this, t)
    })
    e(Nt, function (e, t) {
      var r = this.clone()
      r.consequent = r.consequent.negate(e)
      r.alternative = r.alternative.negate(e)
      return n(this, r, t)
    })
    e(Pt, function (e, r) {
      var i = this.clone()
      var /* [auto-meaningful-name] */this$operator = this.operator
      if (e.option("unsafe_comps")) {
        switch (this$operator) {
          case "<=":
            i.operator = ">"
            return i
          case "<":
            i.operator = ">="
            return i
          case ">=":
            i.operator = "<"
            return i
          case ">":
            i.operator = "<="
            return i
        }
      }
      switch (this$operator) {
        case "==":
          i.operator = "!="
          return i
        case "!=":
          i.operator = "=="
          return i
        case "===":
          i.operator = "!=="
          return i
        case "!==":
          i.operator = "==="
          return i
        case "&&":
          i.operator = "||"
          i.left = i.left.negate(e, r)
          i.right = i.right.negate(e)
          return n(this, i, r)
        case "||":
          i.operator = "&&"
          i.left = i.left.negate(e, r)
          i.right = i.right.negate(e)
          return n(this, i, r)
        case "??":
          i.right = i.right.negate(e)
          return n(this, i, r)
      }
      return t(this)
    })
  })(function (e, t) {
    e.DEFMETHOD("negate", function (e, n) {
      return t.call(this, e, n)
    })
  })
  var ei = S("Boolean decodeURI decodeURIComponent Date encodeURI encodeURIComponent Error escape EvalError isFinite isNaN Number Object parseFloat parseInt RangeError ReferenceError String SyntaxError TypeError unescape URIError")
  Ot.DEFMETHOD("is_expr_pure", function (e) {
    if (e.option("unsafe")) {
      var t
      var /* [auto-meaningful-name] */this$expression = this.expression
      var r = this.args && this.args[0] && this.args[0].evaluate(e)
      if (this$expression.expression && "hasOwnProperty" === this$expression.expression.name && (null == r || r.thedef && r.thedef.undeclared)) {
        return false
      }
      if (Pr(this$expression) && ei.has(this$expression.name)) {
        return true
      }
      if (this$expression instanceof Bt && Pr(this$expression.expression) && (t = Zr.get(this$expression.expression.name)) && t.has(this$expression.property)) {
        return true
      }
    }
    return !!F(this, Un) || !e.pure_funcs(this)
  })
  Ee.DEFMETHOD("is_call_pure", v)
  Bt.DEFMETHOD("is_call_pure", function (e) {
    if (e.option("unsafe")) {
      var t
      var /* [auto-meaningful-name] */this$expression = this.expression
      if (this$expression instanceof jt) {
        t = Jr.get("Array")
      } else {
        if (this$expression.is_boolean()) {
          t = Jr.get("Boolean")
        } else {
          if (this$expression.is_number(e)) {
            t = Jr.get("Number")
          } else {
            if (this$expression instanceof Cn) {
              t = Jr.get("RegExp")
            } else {
              if (this$expression.is_string(e)) {
                t = Jr.get("String")
              } else {
                if (!this.may_throw_on_access(e)) {
                  t = Jr.get("Object")
                }
              }
            }
          }
        }
      }
      return t && t.has(this.property)
    }
  })
  var ti = new Set(["Number", "String", "Array", "Object", "Function", "Promise"])
  function ni(e) {
    return e && e.aborts()
  }
  !function (e) {
    function t(e, t) {
      for (var /* [auto-meaningful-name] */e$length = e.length; --e$length >= 0;) {
        if (e[e$length].has_side_effects(t)) {
          return true
        }
      }
      return false
    }
    e(Ee, m)
    e(Ie, v)
    e(bn, v)
    e(mn, v)
    e(Be, function (e) {
      return t(this.body, e)
    })
    e(Ot, function (e) {
      return !(this.is_expr_pure(e) || this.expression.is_call_pure(e) && !this.expression.has_side_effects(e)) || t(this.args, e)
    })
    e(ft, function (e) {
      return this.expression.has_side_effects(e) || t(this.body, e)
    })
    e(pt, function (e) {
      return this.expression.has_side_effects(e) || t(this.body, e)
    })
    e(_t, function (e) {
      return t(this.body, e) || this.bcatch && this.bcatch.has_side_effects(e) || this.bfinally && this.bfinally.has_side_effects(e)
    })
    e(lt, function (e) {
      return this.condition.has_side_effects(e) || this.body && this.body.has_side_effects(e) || this.alternative && this.alternative.has_side_effects(e)
    })
    e(Fe, function (e) {
      return this.body.has_side_effects(e)
    })
    e(ke, function (e) {
      return this.body.has_side_effects(e)
    })
    e(We, v)
    e(Wt, function (e) {
      return !(!this.extends || !this.extends.has_side_effects(e)) || t(this.properties, e)
    })
    e(Pt, function (e) {
      return this.left.has_side_effects(e) || this.right.has_side_effects(e)
    })
    e(Mt, m)
    e(Nt, function (e) {
      return this.condition.has_side_effects(e) || this.consequent.has_side_effects(e) || this.alternative.has_side_effects(e)
    })
    e(It, function (e) {
      return Qr.has(this.operator) || this.expression.has_side_effects(e)
    })
    e(_n, function (e) {
      return !this.is_declared(e) && !ti.has(this.name)
    })
    e(sn, v)
    e(Jt, v)
    e(Ut, function (e) {
      return t(this.properties, e)
    })
    e(Ht, function (e) {
      return this.computed_key() && this.key.has_side_effects(e) || this.value.has_side_effects(e)
    })
    e(Kt, function (e) {
      return this.computed_key() && this.key.has_side_effects(e) || this.static && this.value && this.value.has_side_effects(e)
    })
    e(Qt, function (e) {
      return this.computed_key() && this.key.has_side_effects(e)
    })
    e(zt, function (e) {
      return this.computed_key() && this.key.has_side_effects(e)
    })
    e(Gt, function (e) {
      return this.computed_key() && this.key.has_side_effects(e)
    })
    e(jt, function (e) {
      return t(this.elements, e)
    })
    e(Bt, function (e) {
      return this.expression.may_throw_on_access(e) || this.expression.has_side_effects(e)
    })
    e(Dt, function (e) {
      return this.expression.may_throw_on_access(e) || this.expression.has_side_effects(e) || this.property.has_side_effects(e)
    })
    e(St, function (e) {
      return t(this.expressions, e)
    })
    e(vt, function (e) {
      return t(this.definitions, e)
    })
    e(wt, function () {
      return this.value
    })
    e(et, v)
    e(Ze, function (e) {
      return t(this.segments, e)
    })
  }(function (e, t) {
    e.DEFMETHOD("has_side_effects", t)
  });
  (function (e) {
    function t(e, t) {
      for (var /* [auto-meaningful-name] */e$length = e.length; --e$length >= 0;) {
        if (e[e$length].may_throw(t)) {
          return true
        }
      }
      return false
    }
    e(Ee, m)
    e(bn, v)
    e(Ie, v)
    e(We, v)
    e(Jt, v)
    e(mn, v)
    e(Wt, function (e) {
      return !(!this.extends || !this.extends.may_throw(e)) || t(this.properties, e)
    })
    e(jt, function (e) {
      return t(this.elements, e)
    })
    e(Mt, function (e) {
      return !!this.right.may_throw(e) || !(!e.has_directive("use strict") && "=" == this.operator && this.left instanceof _n) && this.left.may_throw(e)
    })
    e(Pt, function (e) {
      return this.left.may_throw(e) || this.right.may_throw(e)
    })
    e(Be, function (e) {
      return t(this.body, e)
    })
    e(Ot, function (e) {
      return !!t(this.args, e) || !this.is_expr_pure(e) && (!!this.expression.may_throw(e) || !(this.expression instanceof We) || t(this.expression.body, e))
    })
    e(pt, function (e) {
      return this.expression.may_throw(e) || t(this.body, e)
    })
    e(Nt, function (e) {
      return this.condition.may_throw(e) || this.consequent.may_throw(e) || this.alternative.may_throw(e)
    })
    e(vt, function (e) {
      return t(this.definitions, e)
    })
    e(Bt, function (e) {
      return this.expression.may_throw_on_access(e) || this.expression.may_throw(e)
    })
    e(lt, function (e) {
      return this.condition.may_throw(e) || this.body && this.body.may_throw(e) || this.alternative && this.alternative.may_throw(e)
    })
    e(Fe, function (e) {
      return this.body.may_throw(e)
    })
    e(Ut, function (e) {
      return t(this.properties, e)
    })
    e(Ht, function (e) {
      return this.value.may_throw(e)
    })
    e(Kt, function (e) {
      return this.computed_key() && this.key.may_throw(e) || this.static && this.value && this.value.may_throw(e)
    })
    e(Qt, function (e) {
      return this.computed_key() && this.key.may_throw(e)
    })
    e(zt, function (e) {
      return this.computed_key() && this.key.may_throw(e)
    })
    e(Gt, function (e) {
      return this.computed_key() && this.key.may_throw(e)
    })
    e(rt, function (e) {
      return this.value && this.value.may_throw(e)
    })
    e(St, function (e) {
      return t(this.expressions, e)
    })
    e(ke, function (e) {
      return this.body.may_throw(e)
    })
    e(Dt, function (e) {
      return this.expression.may_throw_on_access(e) || this.expression.may_throw(e) || this.property.may_throw(e)
    })
    e(ft, function (e) {
      return this.expression.may_throw(e) || t(this.body, e)
    })
    e(_n, function (e) {
      return !this.is_declared(e) && !ti.has(this.name)
    })
    e(sn, v)
    e(_t, function (e) {
      return this.bcatch ? this.bcatch.may_throw(e) : t(this.body, e) || this.bfinally && this.bfinally.may_throw(e)
    })
    e(It, function (e) {
      return !("typeof" == this.operator && this.expression instanceof _n) && this.expression.may_throw(e)
    })
    e(wt, function (e) {
      return !!this.value && this.value.may_throw(e)
    })
  })(function (e, t) {
    e.DEFMETHOD("may_throw", t)
  });
  (function (e) {
    function t(e) {
      var t = this
      var n = true
      Pn(this, function (r) {
        if (r instanceof _n) {
          if (pr(t, 16)) {
            n = false
            return Mn
          }
          var i = r.definition()
          if (p(i, t.enclosed) && !t.variables.has(i.name)) {
            if (e) {
              var o = e.find_variable(r)
              if (i.undeclared ? !o : o === i) {
                n = "f"
                return true
              }
            }
            n = false
            return Mn
          }
          return true
        }
        if (r instanceof mn && t instanceof Ye) {
          n = false
          return Mn
        }
      })
      return n
    }
    e(Ee, v)
    e(bn, m)
    e(Wt, function (e) {
      if (this.extends && !this.extends.is_constant_expression(e)) {
        return false
      }
      var n
      var r = a(this.properties)
      try {
        for (r.s(); !(n = r.n()).done;) {
          var /* [auto-meaningful-name] */n$value = n.value
          if (n$value.computed_key() && !n$value.key.is_constant_expression(e)) {
            return false
          }
          if (n$value.static && n$value.value && !n$value.value.is_constant_expression(e)) {
            return false
          }
        }
      } catch (o) {
        r.e(o)
      } finally {
        r.f()
      }
      return t.call(this, e)
    })
    e(We, t)
    e(It, function () {
      return this.expression.is_constant_expression()
    })
    e(Pt, function () {
      return this.left.is_constant_expression() && this.right.is_constant_expression()
    })
    e(jt, function () {
      return this.elements.every(function (e) {
        return e.is_constant_expression()
      })
    })
    e(Ut, function () {
      return this.properties.every(function (e) {
        return e.is_constant_expression()
      })
    })
    e(Ht, function () {
      return !(this.key instanceof Ee) && this.value.is_constant_expression()
    })
  })(function (e, t) {
    e.DEFMETHOD("is_constant_expression", t)
  });
  (function (e) {
    function t() {
      for (var e = 0; e < this.body.length; e++) {
        if (ni(this.body[e])) {
          return this.body[e]
        }
      }
      return null
    }
    e(xe, b)
    e(tt, y)
    e(xt, function () {
      return null
    })
    e(De, t)
    e(dt, t)
    e(lt, function () {
      return this.alternative && ni(this.body) && ni(this.alternative) && this
    })
  })(function (e, t) {
    e.DEFMETHOD("aborts", t)
  })
  var ri = new Set(["use asm", "use strict"])
  function ii(e, t) {
    Ur(e.body, t)
    if (t.option("side_effects") && 1 == e.body.length && e.body[0] === t.has_directive("use strict")) {
      e.body.length = 0
    }
    return e
  }
  vr(Oe, function (e, t) {
    return !t.option("directives") || ri.has(e.value) && t.has_directive(e.value) === e ? e : E(Ie, e)
  })
  vr(Ce, function (e, t) {
    return t.option("drop_debugger") ? E(Ie, e) : e
  })
  vr(Fe, function (e, t) {
    return e.body instanceof at && t.loopcontrol_target(e.body) === e.body ? E(Ie, e) : 0 == e.label.references.length ? e.body : e
  })
  vr(Be, function (e, t) {
    Ur(e.body, t)
    return e
  })
  vr(De, function (e, t) {
    switch (Ur(e.body, t), e.body.length) {
      case 1:
        if (!t.has_directive("use strict") && t.parent() instanceof lt && !((n = e.body[0]) instanceof bt || n instanceof yt || n instanceof Wt) || Ir(e.body[0])) {
          return e.body[0]
        }
        break
      case 0:
        return E(Ie, e)
    }
    var n
    return e
  })
  vr(We, ii)
  var oi = /keep_assign/
  function ai(e, t) {
    var n = false
    var r = new Ln(function (t) {
      return !!(n || t instanceof Ge) || (t instanceof ot && r.loopcontrol_target(t) === e ? n = true : undefined)
    })
    if (t instanceof Fe) {
      r.push(t)
    }
    r.push(e)
    e.body.walk(r)
    return n
  }
  function si(e, t) {
    return t.top_retain && e instanceof qe && pr(e, 1024) && e.name && t.top_retain(e.name)
  }
  Ge.DEFMETHOD("drop_unused", function (e) {
    if (e.option("unused") && !e.has_directive("use asm")) {
      var t = this
      if (!t.pinned()) {
        var n = !(t instanceof ze) || e.toplevel.funcs
        var r = !(t instanceof ze) || e.toplevel.vars
        var i = oi.test(e.option("unused")) ? v : function (e) {
          return e instanceof Mt && (pr(e, 32) || "=" == e.operator) ? e.left : e instanceof It && pr(e, 32) ? e.expression : undefined
        }
        var o = new Map()
        var s = new Map()
        if (t instanceof ze && e.top_retain) {
          t.variables.forEach(function (t) {
            if (e.top_retain(t) && !o.has(t.id)) {
              o.set(t.id, t)
            }
          })
        }
        var c = new Map()
        var u = new Map()
        var l = this
        var f = new Ln(function (i, d) {
          if (i instanceof We && i.uses_arguments && !f.has_directive("use strict")) {
            i.argnames.forEach(function (e) {
              if (e instanceof Jt) {
                var t = e.definition()
                if (!o.has(t.id)) {
                  o.set(t.id, t)
                }
              }
            })
          }
          if (i !== t) {
            if (i instanceof qe || i instanceof Xt) {
              var p = i.name.definition()
              if ((f.parent() instanceof Ct || !n && l === t) && p.global && !o.has(p.id)) {
                o.set(p.id, p)
              }
              if (i instanceof Xt) {
                if (i.extends && (i.extends.has_side_effects(e) || i.extends.may_throw(e))) {
                  i.extends.walk(f)
                }
                var _
                var A = a(i.properties)
                try {
                  for (A.s(); !(_ = A.n()).done;) {
                    var /* [auto-meaningful-name] */_$value = _.value
                    if (_$value.has_side_effects(e) || _$value.may_throw(e)) {
                      _$value.walk(f)
                    }
                  }
                } catch (m) {
                  A.e(m)
                } finally {
                  A.f()
                }
              }
              T(u, p.id, i)
              return true
            }
            if (i instanceof rn && l === t) {
              T(c, i.definition().id, i)
            }
            if (i instanceof vt && l === t) {
              var v = f.parent() instanceof Ct
              i.definitions.forEach(function (t) {
                if (t.name instanceof Zt) {
                  T(c, t.name.definition().id, t)
                }
                if (!(!v && r)) {
                  Pn(t.name, function (e) {
                    if (e instanceof Jt) {
                      var t = e.definition()
                      if (!(!v && !t.global || o.has(t.id))) {
                        o.set(t.id, t)
                      }
                    }
                  })
                }
                if (t.value) {
                  if (t.name instanceof $e) {
                    t.walk(f)
                  } else {
                    var n = t.name.definition()
                    T(u, n.id, t.value)
                    if (!(n.chained || t.name.fixed_value() !== t.value)) {
                      s.set(n.id, t)
                    }
                  }
                  if (t.value.has_side_effects(e)) {
                    t.value.walk(f)
                  }
                }
              })
              return true
            }
            return h(i, d)
          }
        })
        t.walk(f)
        f = new Ln(h)
        o.forEach(function (e) {
          var t = u.get(e.id)
          if (t) {
            t.forEach(function (e) {
              e.walk(f)
            })
          }
        })
        var d = new jn(function (a, u, f) {
          var h = d.parent()
          if (r) {
            var p = i(a)
            if (p instanceof _n) {
              var _ = p.definition()
              var A = o.has(_.id)
              if (a instanceof Mt) {
                if (!A || s.has(_.id) && s.get(_.id) !== a) {
                  return Sr(h, a, a.right.transform(d))
                }
              } else if (!A) {
                return f ? w.skip : E(En, a, {
                  value: 0
                })
              }
            }
          }
          if (l === t) {
            if (a.name && (a instanceof Yt && !D(e.option("keep_classnames"), (_ = a.name.definition()).name) || a instanceof Xe && !D(e.option("keep_fnames"), (_ = a.name.definition()).name)) && (!o.has(_.id) || _.orig.length > 1)) {
              a.name = null
            }
            if (a instanceof We && !(a instanceof Ke)) {
              for (var g = !e.option("keep_fargs"), /* [auto-meaningful-name] */a$argnames = a.argnames, /* [auto-meaningful-name] */a$argnames$length = a$argnames.length; --a$argnames$length >= 0;) {
                var y = a$argnames[a$argnames$length]
                if (y instanceof Qe) {
                  y = y.expression
                }
                if (y instanceof Lt) {
                  y = y.left
                }
                if (y instanceof $e || o.has(y.definition().id)) {
                  g = false
                } else {
                  _r(y, 1)
                  if (g) {
                    a$argnames.pop()
                    e[y.unreferenced() ? "warn" : "info"]("Dropping unused function argument {name} [{file}:{line},{col}]", F(y))
                  }
                }
              }
            }
            if ((a instanceof qe || a instanceof Xt) && a !== t) {
              var b = a.name.definition()
              if (!(b.global && !n || o.has(b.id))) {
                e[a.name.unreferenced() ? "warn" : "info"]("Dropping unused function {name} [{file}:{line},{col}]", F(a.name))
                b.eliminated++
                if (a instanceof Xt) {
                  var x = a.drop_side_effect_free(e)
                  if (x) {
                    return E(ke, a, {
                      body: x
                    })
                  }
                }
                return f ? w.skip : E(Ie, a)
              }
            }
            if (a instanceof vt && !(h instanceof Ue && h.init === a)) {
              var C = !(h instanceof ze || a instanceof mt)
              var k = []
              var S = []
              var T = []
              var B = []
              switch (a.definitions.forEach(function (t) {
                if (t.value) {
                  t.value = t.value.transform(d)
                }
                var n = t.name instanceof $e
                var i = n ? new nr(null, {
                  name: "<destructure>"
                }) : t.name.definition()
                if (C && i.global) {
                  return T.push(t)
                }
                if (!r && !C || n && (t.name.names.length || t.name.is_array || 1 != e.option("pure_getters")) || o.has(i.id)) {
                  if (t.value && s.has(i.id) && s.get(i.id) !== t) {
                    t.value = t.value.drop_side_effect_free(e)
                  }
                  if (t.name instanceof Zt) {
                    var u = c.get(i.id)
                    if (u.length > 1 && (!t.value || i.orig.indexOf(t.name) > i.eliminated)) {
                      e.warn("Dropping duplicated definition of variable {name} [{file}:{line},{col}]", F(t.name))
                      if (t.value) {
                        var l = E(_n, t.name, t.name)
                        i.references.push(l)
                        var f = E(Mt, t, {
                          operator: "=",
                          left: l,
                          right: t.value
                        })
                        if (s.get(i.id) === t) {
                          s.set(i.id, f)
                        }
                        B.push(f.transform(d))
                      }
                      O(u, t)
                      return void i.eliminated++
                    }
                  }
                  if (t.value) {
                    if (B.length > 0) {
                      if (T.length > 0) {
                        B.push(t.value)
                        t.value = Or(t.value, B)
                      } else {
                        k.push(E(ke, a, {
                          body: Or(a, B)
                        }))
                      }
                      B = []
                    }
                    T.push(t)
                  } else {
                    S.push(t)
                  }
                } else if (i.orig[0] instanceof fn) {
                  if (h = t.value && t.value.drop_side_effect_free(e)) {
                    B.push(h)
                  }
                  t.value = null
                  S.push(t)
                } else {
                  var h
                  if (h = t.value && t.value.drop_side_effect_free(e)) {
                    if (!n) {
                      e.warn("Side effects in initialization of unused variable {name} [{file}:{line},{col}]", F(t.name))
                    }
                    B.push(h)
                  } else {
                    if (!n) {
                      e[t.name.unreferenced() ? "warn" : "info"]("Dropping unused variable {name} [{file}:{line},{col}]", F(t.name))
                    }
                  }
                  i.eliminated++
                }
              }), (S.length > 0 || T.length > 0) && (a.definitions = S.concat(T), k.push(a)), B.length > 0 && k.push(E(ke, a, {
                body: Or(a, B)
              })), k.length) {
                case 0:
                  return f ? w.skip : E(Ie, a)
                case 1:
                  return k[0]
                default:
                  return f ? w.splice(k) : E(De, a, {
                    body: k
                  })
              }
            }
            if (a instanceof je) {
              u(a, this)
              if (a.init instanceof De) {
                a$body = a.init
                a.init = a$body.body.pop()
                a$body.body.push(a)
              }
              if (a.init instanceof ke) {
                a.init = a.init.body
              } else {
                if (Dr(a.init)) {
                  a.init = null
                }
              }
              return a$body ? f ? w.splice(a$body.body) : a$body : a
            }
            if (a instanceof Fe && a.body instanceof je) {
              u(a, this)
              if (a.body instanceof De) {
                var /* [auto-meaningful-name] */a$body = a.body
                a.body = a$body.body.pop()
                a$body.body.push(a)
                return f ? w.splice(a$body.body) : a$body
              }
              return a
            }
            if (a instanceof De) {
              u(a, this)
              return f && a.body.every(Ir) ? w.splice(a.body) : a
            }
            if (a instanceof Ge) {
              var R = l
              l = a
              u(a, this)
              l = R
              return a
            }
          }
          function F(e) {
            return {
              name: e.name,
              file: e.start.file,
              line: e.start.line,
              col: e.start.col
            }
          }
        })
        t.transform(d)
      }
    }
    function h(e, n) {
      var r
      var a = i(e)
      if (a instanceof _n && !Er(e.left, en) && t.variables.get(a.name) === (r = a.definition())) {
        if (e instanceof Mt) {
          e.right.walk(f)
          if (!(r.chained || e.left.fixed_value() !== e.right)) {
            s.set(r.id, e)
          }
        }
        return true
      }
      if (e instanceof _n) {
        r = e.definition()
        if (!o.has(r.id) && (o.set(r.id, r), r.orig[0] instanceof fn)) {
          var c = r.scope.is_block_scope() && r.scope.get_defun_scope().variables.get(r.name)
          if (c) {
            o.set(c.id, c)
          }
        }
        return true
      }
      if (e instanceof Ge) {
        var u = l
        l = e
        n()
        l = u
        return true
      }
    }
  })
  Ge.DEFMETHOD("hoist_declarations", function (e) {
    var t = this
    if (e.has_directive("use asm")) {
      return t
    }
    if (!Array.isArray(t.body)) {
      return t
    }
    var n = e.option("hoist_funs")
    var r = e.option("hoist_vars")
    if (n || r) {
      var i = []
      var o = []
      var a = new Map()
      var s = 0
      var c = 0
      Pn(t, function (e) {
        return e instanceof Ge && e !== t || (e instanceof mt ? (++c, true) : undefined)
      })
      r = r && c > 1
      var u = new jn(function (c) {
        if (c !== t) {
          if (c instanceof Oe) {
            i.push(c)
            return E(Ie, c)
          }
          if (n && c instanceof qe && !(u.parent() instanceof Ct) && u.parent() === t) {
            o.push(c)
            return E(Ie, c)
          }
          if (r && c instanceof mt) {
            c.definitions.forEach(function (e) {
              if (!(e.name instanceof $e)) {
                a.set(e.name.name, e)
                ++s
              }
            })
            var l = c.to_assignments(e)
            var f = u.parent()
            if (f instanceof Ue && f.init === c) {
              if (null == l) {
                var /* [auto-meaningful-name] */c$definitions0$name = c.definitions[0].name
                return E(_n, c$definitions0$name, c$definitions0$name)
              }
              return l
            }
            return f instanceof je && f.init === c ? l : l ? E(ke, c, {
              body: l
            }) : E(Ie, c)
          }
          if (c instanceof Ge) {
            return c
          }
        }
      })
      t = t.transform(u)
      if (s > 0) {
        var l = []
        var f = t instanceof We
        var d = f ? t.args_as_names() : null
        a.forEach(function (e, t) {
          if (f && d.some(function (t) {
            return t.name === e.name.name
          })) {
            a.delete(t)
          } else {
            (e = e.clone()).value = null
            l.push(e)
            a.set(t, e)
          }
        })
        if (l.length > 0) {
          for (var h = 0; h < t.body.length;) {
            if (t.body[h] instanceof ke) {
              var p
              var _
              var /* [auto-meaningful-name] */t$bodyH$body = t.body[h].body
              if (t$bodyH$body instanceof Mt && "=" == t$bodyH$body.operator && (p = t$bodyH$body.left) instanceof qt && a.has(p.name)) {
                if ((g = a.get(p.name)).value) {
                  break
                }
                g.value = t$bodyH$body.right
                O(l, g)
                l.push(g)
                t.body.splice(h, 1)
                continue
              }
              if (t$bodyH$body instanceof St && (_ = t$bodyH$body.expressions[0]) instanceof Mt && "=" == _.operator && (p = _.left) instanceof qt && a.has(p.name)) {
                var g
                if ((g = a.get(p.name)).value) {
                  break
                }
                g.value = _.right
                O(l, g)
                l.push(g)
                t.body[h].body = Or(t$bodyH$body, t$bodyH$body.expressions.slice(1))
                continue
              }
            }
            if (t.body[h] instanceof Ie) {
              t.body.splice(h, 1)
            } else {
              if (!(t.body[h] instanceof De)) {
                break
              }
              var v = [h, 1].concat(t.body[h].body)
              t.body.splice.apply(t.body, v)
            }
          }
          l = E(mt, t, {
            definitions: l
          })
          o.push(l)
        }
      }
      t.body = i.concat(o, t.body)
    }
    return t
  })
  Ge.DEFMETHOD("make_var_name", function (e) {
    for (var t = this.var_names(), n = e = e.replace(/(?:^[^a-z_$]|[^a-z0-9_$])/gi, "_"), r = 0; t.has(n); r++) {
      n = e + "$" + r
    }
    this.add_var_name(n)
    return n
  })
  Ge.DEFMETHOD("hoist_properties", function (e) {
    var t = this
    if (!e.option("hoist_props") || e.has_directive("use asm")) {
      return t
    }
    var n = t instanceof ze && e.top_retain || v
    var r = new Map()
    var i = new jn(function (o, a) {
      if (o instanceof vt && i.parent() instanceof Ct) {
        return o
      }
      if (o instanceof wt) {
        var s
        var c
        var /* [auto-meaningful-name] */o$name = o.name
        if (o$name.scope === t && 1 != (s = o$name.definition()).escaped && !s.assignments && !s.direct_access && !s.single_use && !e.exposed(s) && !n(s) && (c = o$name.fixed_value()) === o.value && c instanceof Ut && c.properties.every(function (e) {
          return "string" == typeof e.key
        })) {
          a(o, this)
          var l = new Map()
          var f = []
          c.properties.forEach(function (e) {
            f.push(E(wt, o, {
              name: _(o$name, e.key, l),
              value: e.value
            }))
          })
          r.set(s.id, l)
          return w.splice(f)
        }
      } else if (o instanceof Tt && o.expression instanceof _n) {
        var d = r.get(o.expression.definition().id)
        if (d) {
          var h = d.get(String(Vr(o.property)))
          var p = E(_n, o, {
            name: h.name,
            scope: o.expression.scope,
            thedef: h
          })
          p.reference({})
          return p
        }
      }
      function _(e, n, r) {
        var i = E(e.CTOR, e, {
          name: t.make_var_name(e.name + "_" + n),
          scope: t
        })
        var o = t.def_variable(i)
        r.set(String(n), o)
        t.enclosed.push(o)
        return i
      }
    })
    return t.transform(i)
  });
  (function (e) {
    function t(e, t, n) {
      var /* [auto-meaningful-name] */e$length = e.length
      if (!e$length) {
        return null
      }
      for (var i = [], o = false, a = 0; a < e$length; a++) {
        var s = e[a].drop_side_effect_free(t, n)
        o |= s !== e[a]
        if (s) {
          i.push(s)
          n = false
        }
      }
      return o ? i.length ? i : null : e
    }
    e(Ee, y)
    e(bn, b)
    e(mn, b)
    e(Ot, function (e, n) {
      if (!this.is_expr_pure(e)) {
        if (this.expression.is_call_pure(e)) {
          var r = this.args.slice()
          r.unshift(this.expression.expression)
          return (r = t(r, e, n)) && Or(this, r)
        }
        if (br(this.expression) && (!this.expression.name || !this.expression.name.definition().references.length)) {
          var i = this.clone()
          i.expression.process_expression(false, e)
          return i
        }
        return this
      }
      if (F(this, Un)) {
        e.warn("Dropping __PURE__ call [{file}:{line},{col}]", this.start)
      }
      var o = t(this.args, e, n)
      return o && Or(this, o)
    })
    e(Ke, b)
    e(Xe, b)
    e(Ye, b)
    e(Wt, function (e) {
      var t = []
      var n = this.extends && this.extends.drop_side_effect_free(e)
      if (n) {
        t.push(n)
      }
      var r
      var i = a(this.properties)
      try {
        for (i.s(); !(r = i.n()).done;) {
          var o = r.value.drop_side_effect_free(e)
          if (o) {
            t.push(o)
          }
        }
      } catch (s) {
        i.e(s)
      } finally {
        i.f()
      }
      return t.length ? Or(this, t) : null
    })
    e(Pt, function (e, t) {
      var n = this.right.drop_side_effect_free(e)
      if (!n) {
        return this.left.drop_side_effect_free(e, t)
      }
      if (zr.has(this.operator)) {
        if (n === this.right) {
          return this
        }
        var r = this.clone()
        r.right = n
        return r
      }
      var i = this.left.drop_side_effect_free(e, t)
      return i ? Or(this, [i, n]) : this.right.drop_side_effect_free(e, t)
    })
    e(Mt, function (e) {
      var /* [auto-meaningful-name] */this$left = this.left
      if (this$left.has_side_effects(e) || e.has_directive("use strict") && this$left instanceof Tt && this$left.expression.is_constant()) {
        return this
      }
      for (_r(this, 32); this$left instanceof Tt;) {
        this$left = this$left.expression
      }
      return this$left.is_constant_expression(e.find_parent(Ge)) ? this.right.drop_side_effect_free(e) : this
    })
    e(Nt, function (e) {
      var t = this.consequent.drop_side_effect_free(e)
      var n = this.alternative.drop_side_effect_free(e)
      if (t === this.consequent && n === this.alternative) {
        return this
      }
      if (!t) {
        return n ? E(Pt, this, {
          operator: "||",
          left: this.condition,
          right: n
        }) : this.condition.drop_side_effect_free(e)
      }
      if (!n) {
        return E(Pt, this, {
          operator: "&&",
          left: this.condition,
          right: t
        })
      }
      var r = this.clone()
      r.consequent = t
      r.alternative = n
      return r
    })
    e(It, function (e, t) {
      if (Qr.has(this.operator)) {
        if (this.expression.has_side_effects(e)) {
          Ar(this, 32)
        } else {
          _r(this, 32)
        }
        return this
      }
      if ("typeof" == this.operator && this.expression instanceof _n) {
        return null
      }
      var n = this.expression.drop_side_effect_free(e, t)
      return t && n && Fr(n) ? n === this.expression && "!" == this.operator ? this : n.negate(e, t) : n
    })
    e(_n, function (e) {
      return this.is_declared(e) || ti.has(this.name) ? null : this
    })
    e(Ut, function (e, n) {
      var r = t(this.properties, e, n)
      return r && Or(this, r)
    })
    e(Ht, function (e, t) {
      var n = this instanceof Vt && this.key instanceof Ee && this.key.drop_side_effect_free(e, t)
      var r = this.value.drop_side_effect_free(e, t)
      return n && r ? Or(this, [n, r]) : n || r
    })
    e(Kt, function (e) {
      var t = this.computed_key() && this.key.drop_side_effect_free(e)
      var n = this.static && this.value && this.value.drop_side_effect_free(e)
      return t && n ? Or(this, [t, n]) : t || n || null
    })
    e(Qt, function () {
      return this.computed_key() ? this.key : null
    })
    e(zt, function () {
      return this.computed_key() ? this.key : null
    })
    e(Gt, function () {
      return this.computed_key() ? this.key : null
    })
    e(jt, function (e, n) {
      var r = t(this.elements, e, n)
      return r && Or(this, r)
    })
    e(Bt, function (e, t) {
      return this.expression.may_throw_on_access(e) ? this : this.expression.drop_side_effect_free(e, t)
    })
    e(Dt, function (e, t) {
      if (this.expression.may_throw_on_access(e)) {
        return this
      }
      var n = this.expression.drop_side_effect_free(e, t)
      if (!n) {
        return this.property.drop_side_effect_free(e, t)
      }
      var r = this.property.drop_side_effect_free(e)
      return r ? Or(this, [n, r]) : n
    })
    e(St, function (e) {
      var t = this.tail_node()
      var n = t.drop_side_effect_free(e)
      if (n === t) {
        return this
      }
      var r = this.expressions.slice(0, -1)
      if (n) {
        r.push(n)
      }
      return r.length ? Or(this, r) : E(En, this, {
        value: 0
      })
    })
    e(Qe, function (e, t) {
      return this.expression.drop_side_effect_free(e, t)
    })
    e(et, b)
    e(Ze, function (e) {
      var n = t(this.segments, e, Wn)
      return n && Or(this, n)
    })
  })(function (e, t) {
    e.DEFMETHOD("drop_side_effect_free", t)
  })
  vr(ke, function (e, t) {
    if (t.option("side_effects")) {
      var /* [auto-meaningful-name] */e$body = e.body
      var r = e$body.drop_side_effect_free(t, true)
      if (!r) {
        t.warn("Dropping side-effect-free statement [{file}:{line},{col}]", e.start)
        return E(Ie, e)
      }
      if (r !== e$body) {
        return E(ke, e, {
          body: r
        })
      }
    }
    return e
  })
  vr(Le, function (e, t) {
    return t.option("loops") ? E(je, e, e).optimize(t) : e
  })
  vr(Me, function (e, t) {
    if (!t.option("loops")) {
      return e
    }
    var n = e.condition.tail_node().evaluate(t)
    if (!(n instanceof Ee)) {
      if (n) {
        return E(je, e, {
          body: E(De, e.body, {
            body: [
              e.body, E(ke, e.condition, {
                body: e.condition
              })
            ]
          })
        }).optimize(t)
      }
      if (!ai(e, t.parent())) {
        return E(De, e.body, {
          body: [
            e.body, E(ke, e.condition, {
              body: e.condition
            })
          ]
        }).optimize(t)
      }
    }
    return e
  })
  vr(je, function (e, t) {
    if (!t.option("loops")) {
      return e
    }
    if (t.option("side_effects") && e.init) {
      e.init = e.init.drop_side_effect_free(t)
    }
    if (e.condition) {
      var n = e.condition.evaluate(t)
      if (!(n instanceof Ee)) {
        if (n) {
          e.condition = null
        } else if (!t.option("dead_code")) {
          var /* [auto-meaningful-name] */e$condition = e.condition
          e.condition = kr(n, e.condition)
          e.condition = Kr(e.condition.transform(t), e$condition)
        }
      }
      if (t.option("dead_code") && (n instanceof Ee && (n = e.condition.tail_node().evaluate(t)), !n)) {
        var i = []
        Hr(t, e.body, i)
        if (e.init instanceof xe) {
          i.push(e.init)
        } else {
          if (e.init) {
            i.push(E(ke, e.init, {
              body: e.init
            }))
          }
        }
        i.push(E(ke, e.condition, {
          body: e.condition
        }))
        return E(De, e, {
          body: i
        }).optimize(t)
      }
    }
    return function e(t, n) {
      var r = t.body instanceof De ? t.body.body[0] : t.body
      if (n.option("dead_code") && o(r)) {
        var i = []
        if (t.init instanceof xe) {
          i.push(t.init)
        } else {
          if (t.init) {
            i.push(E(ke, t.init, {
              body: t.init
            }))
          }
        }
        if (t.condition) {
          i.push(E(ke, t.condition, {
            body: t.condition
          }))
        }
        Hr(n, t.body, i)
        return E(De, t, {
          body: i
        })
      }
      if (r instanceof lt) {
        if (o(r.body)) {
          if (t.condition) {
            t.condition = E(Pt, t.condition, {
              left: t.condition,
              operator: "&&",
              right: r.condition.negate(n)
            })
          } else {
            t.condition = r.condition.negate(n)
          }
          a(r.alternative)
        } else {
          if (o(r.alternative)) {
            if (t.condition) {
              t.condition = E(Pt, t.condition, {
                left: t.condition,
                operator: "&&",
                right: r.condition
              })
            } else {
              t.condition = r.condition
            }
            a(r.body)
          }
        }
      }
      return t
      function o(e) {
        return e instanceof at && n.loopcontrol_target(e) === n.self()
      }
      function a(r) {
        r = Br(r)
        if (t.body instanceof De) {
          t.body = t.body.clone()
          t.body.body = r.concat(t.body.body.slice(1))
          t.body = t.body.transform(n)
        } else {
          t.body = E(De, t.body, {
            body: r
          }).transform(n)
        }
        t = e(t, n)
      }
    }(e, t)
  })
  vr(lt, function (e, t) {
    if (Dr(e.alternative)) {
      e.alternative = null
    }
    if (!t.option("conditionals")) {
      return e
    }
    var n = e.condition.evaluate(t)
    if (!(t.option("dead_code") || n instanceof Ee)) {
      var /* [auto-meaningful-name] */e$condition = e.condition
      e.condition = kr(n, e$condition)
      e.condition = Kr(e.condition.transform(t), e$condition)
    }
    if (t.option("dead_code")) {
      if (n instanceof Ee) {
        n = e.condition.tail_node().evaluate(t)
      }
      if (!n) {
        t.warn("Condition always false [{file}:{line},{col}]", e.condition.start)
        var i = []
        Hr(t, e.body, i)
        i.push(E(ke, e.condition, {
          body: e.condition
        }))
        if (e.alternative) {
          i.push(e.alternative)
        }
        return E(De, e, {
          body: i
        }).optimize(t)
      }
      if (!(n instanceof Ee)) {
        t.warn("Condition always true [{file}:{line},{col}]", e.condition.start);
        (i = []).push(E(ke, e.condition, {
          body: e.condition
        }))
        i.push(e.body)
        if (e.alternative) {
          Hr(t, e.alternative, i)
        }
        return E(De, e, {
          body: i
        }).optimize(t)
      }
    }
    var o = e.condition.negate(t)
    var a = e.condition.size()
    var s = o.size()
    var c = s < a
    if (e.alternative && c) {
      c = false
      e.condition = o
      var /* [auto-meaningful-name] */e$body = e.body
      e.body = e.alternative || E(Ie, e)
      e.alternative = e$body
    }
    if (Dr(e.body) && Dr(e.alternative)) {
      return E(ke, e.condition, {
        body: e.condition.clone()
      }).optimize(t)
    }
    if (e.body instanceof ke && e.alternative instanceof ke) {
      return E(ke, e, {
        body: E(Nt, e, {
          condition: e.condition,
          consequent: e.body.body,
          alternative: e.alternative.body
        })
      }).optimize(t)
    }
    if (Dr(e.alternative) && e.body instanceof ke) {
      if (a === s && !c && e.condition instanceof Pt && "||" == e.condition.operator) {
        c = true
      }
      return c ? E(ke, e, {
        body: E(Pt, e, {
          operator: "||",
          left: o,
          right: e.body.body
        })
      }).optimize(t) : E(ke, e, {
        body: E(Pt, e, {
          operator: "&&",
          left: e.condition,
          right: e.body.body
        })
      }).optimize(t)
    }
    if (e.body instanceof Ie && e.alternative instanceof ke) {
      return E(ke, e, {
        body: E(Pt, e, {
          operator: "||",
          left: e.condition,
          right: e.alternative.body
        })
      }).optimize(t)
    }
    if (e.body instanceof nt && e.alternative instanceof nt && e.body.TYPE == e.alternative.TYPE) {
      return E(e.body.CTOR, e, {
        value: E(Nt, e, {
          condition: e.condition,
          consequent: e.body.value || E(Tn, e.body),
          alternative: e.alternative.value || E(Tn, e.alternative)
        }).transform(t)
      }).optimize(t)
    }
    if (e.body instanceof lt && !e.body.alternative && !e.alternative) {
      e = E(lt, e, {
        condition: E(Pt, e.condition, {
          operator: "&&",
          left: e.condition,
          right: e.body.condition
        }),
        body: e.body.body,
        alternative: null
      })
    }
    if (ni(e.body) && e.alternative) {
      var /* [auto-meaningful-name] */e$alternative = e.alternative
      e.alternative = null
      return E(De, e, {
        body: [e, e$alternative]
      }).optimize(t)
    }
    return ni(e.alternative) ? (i = e.body, e.body = e.alternative, e.condition = c ? o : e.condition.negate(t), e.alternative = null, E(De, e, {
      body: [e, i]
    }).optimize(t)) : e
  })
  vr(ft, function (e, t) {
    if (!t.option("switches")) {
      return e
    }
    var n
    var r = e.expression.evaluate(t)
    if (!(r instanceof Ee)) {
      var /* [auto-meaningful-name] */e$expression = e.expression
      e.expression = kr(r, e$expression)
      e.expression = Kr(e.expression.transform(t), e$expression)
    }
    if (!t.option("dead_code")) {
      return e
    }
    if (r instanceof Ee) {
      r = e.expression.tail_node().evaluate(t)
    }
    for (var o, a, s = [], c = [], u = 0, /* [auto-meaningful-name] */e$body$length = e.body.length; u < e$body$length && !a; u++) {
      if ((n = e.body[u]) instanceof ht) {
        if (o) {
          v(n, c[c.length - 1])
        } else {
          o = n
        }
      } else if (!(r instanceof Ee)) {
        if (!((A = n.expression.evaluate(t)) instanceof Ee) && A !== r) {
          v(n, c[c.length - 1])
          continue
        }
        if (A instanceof Ee) {
          A = n.expression.tail_node().evaluate(t)
        }
        if (A === r && (a = n, o)) {
          var f = c.indexOf(o)
          c.splice(f, 1)
          v(o, c[f - 1])
          o = null
        }
      }
      if (ni(n)) {
        var d = c[c.length - 1]
        if (ni(d) && d.body.length == n.body.length && E(De, d, d).equivalent_to(E(De, n, n))) {
          d.body = []
        }
      }
      c.push(n)
    }
    for (; u < e$body$length;) {
      v(e.body[u++], c[c.length - 1])
    }
    for (c.length > 0 && (c[0].body = s.concat(c[0].body)), e.body = c; n = c[c.length - 1];) {
      var h = n.body[n.body.length - 1]
      if (h instanceof at && t.loopcontrol_target(h) === e) {
        n.body.pop()
      }
      if (n.body.length || n instanceof pt && (o || n.expression.has_side_effects(t))) {
        break
      }
      if (c.pop() === o) {
        o = null
      }
    }
    if (0 == c.length) {
      return E(De, e, {
        body: s.concat(E(ke, e.expression, {
          body: e.expression
        }))
      }).optimize(t)
    }
    if (1 == c.length && (c[0] === a || c[0] === o)) {
      var p = false
      var _ = new Ln(function (t) {
        if (p || t instanceof We || t instanceof ke) {
          return true
        }
        if (t instanceof at && _.loopcontrol_target(t) === e) {
          p = true
        }
      })
      e.walk(_)
      if (!p) {
        var A
        var g = c[0].body.slice()
        if (A = c[0].expression) {
          g.unshift(E(ke, A, {
            body: A
          }))
        }
        g.unshift(E(ke, e.expression, {
          body: e.expression
        }))
        return E(De, e, {
          body: g
        }).optimize(t)
      }
    }
    return e
    function v(e, n) {
      if (n && !ni(n)) {
        n.body = n.body.concat(e.body)
      } else {
        Hr(t, e, s)
      }
    }
  })
  vr(_t, function (e, t) {
    Ur(e.body, t)
    if (e.bcatch && e.bfinally && e.bfinally.body.every(Dr)) {
      e.bfinally = null
    }
    if (t.option("dead_code") && e.body.every(Dr)) {
      var n = []
      if (e.bcatch) {
        Hr(t, e.bcatch, n)
      }
      if (e.bfinally) {
        n.push.apply(n, c(e.bfinally.body))
      }
      return E(De, e, {
        body: n
      }).optimize(t)
    }
    return e
  })
  vt.DEFMETHOD("remove_initializers", function () {
    var e = []
    this.definitions.forEach(function (t) {
      if (t.name instanceof Jt) {
        t.value = null
        e.push(t)
      } else {
        Pn(t.name, function (n) {
          if (n instanceof Jt) {
            e.push(E(wt, t, {
              name: n,
              value: null
            }))
          }
        })
      }
    })
    this.definitions = e
  })
  vt.DEFMETHOD("to_assignments", function (e) {
    var t = e.option("reduce_vars")
    var n = this.definitions.reduce(function (e, n) {
      if (!n.value || n.name instanceof $e) {
        if (n.value) {
          var r = E(wt, n, {
            name: n.name,
            value: n.value
          })
          var i = E(mt, n, {
            definitions: [r]
          })
          e.push(i)
        }
      } else {
        var o = E(_n, n.name, n.name)
        e.push(E(Mt, n, {
          operator: "=",
          left: o,
          right: n.value
        }))
        if (t) {
          o.definition().fixed = false
        }
      }
      (n = n.name.definition()).eliminated++
      n.replaced--
      return e
    }, [])
    return 0 == n.length ? null : Or(this, n)
  })
  vr(vt, function (e) {
    return 0 == e.definitions.length ? E(Ie, e) : e
  })
  vr(xt, function (e) {
    return e
  })
  vr(Ot, function (e, t) {
    var /* [auto-meaningful-name] */e$expression = e.expression
    var r = e$expression
    vi(e, 0, e.args)
    var i = e.args.every(function (e) {
      return !(e instanceof Qe)
    })
    if (t.option("reduce_vars") && r instanceof _n && !F(e, Vn)) {
      var o = r.fixed_value()
      if (!si(o, t)) {
        r = o
      }
    }
    var a = r instanceof We
    if (t.option("unused") && i && a && !r.uses_arguments && !r.pinned()) {
      for (var s = 0, c = 0, u = 0, /* [auto-meaningful-name] */e$args$length = e.args.length; u < e$args$length; u++) {
        if (r.argnames[u] instanceof Qe) {
          if (pr(r.argnames[u].expression, 1)) {
            for (; u < e$args$length;) {
              if (y = e.args[u++].drop_side_effect_free(t)) {
                e.args[s++] = y
              }
            }
          } else {
            for (; u < e$args$length;) {
              e.args[s++] = e.args[u++]
            }
          }
          c = s
          break
        }
        var f = u >= r.argnames.length
        if (f || pr(r.argnames[u], 1)) {
          if (y = e.args[u].drop_side_effect_free(t)) {
            e.args[s++] = y
          } else if (!f) {
            e.args[s++] = E(En, e.args[u], {
              value: 0
            })
            continue
          }
        } else {
          e.args[s++] = e.args[u]
        }
        c = s
      }
      e.args.length = c
    }
    if (t.option("unsafe")) {
      if (Pr(e$expression)) {
        switch (e$expression.name) {
          case "Array":
            if (1 != e.args.length) {
              return E(jt, e, {
                elements: e.args
              }).optimize(t)
            }
            if (e.args[0] instanceof En && e.args[0].value <= 11) {
              for (var d = [], h = 0; h < e.args[0].value; h++) {
                d.push(new Bn())
              }
              return new jt({
                elements: d
              })
            }
            break
          case "Object":
            if (0 == e.args.length) {
              return E(Ut, e, {
                properties: []
              })
            }
            break
          case "String":
            if (0 == e.args.length) {
              return E(wn, e, {
                value: ""
              })
            }
            if (e.args.length <= 1) {
              return E(Pt, e, {
                left: e.args[0],
                operator: "+",
                right: E(wn, e, {
                  value: ""
                })
              }).optimize(t)
            }
            break
          case "Number":
            if (0 == e.args.length) {
              return E(En, e, {
                value: 0
              })
            }
            if (1 == e.args.length && t.option("unsafe_math")) {
              return E(Rt, e, {
                expression: e.args[0],
                operator: "+"
              }).optimize(t)
            }
            break
          case "Symbol":
            if (1 == e.args.length && e.args[0] instanceof wn && t.option("unsafe_symbols")) {
              e.args.length = 0
            }
            break
          case "Boolean":
            if (0 == e.args.length) {
              return E(Rn, e)
            }
            if (1 == e.args.length) {
              return E(Rt, e, {
                expression: E(Rt, e, {
                  expression: e.args[0],
                  operator: "!"
                }),
                operator: "!"
              }).optimize(t)
            }
            break
          case "RegExp":
            var p = []
            if (e.args.length >= 1 && e.args.length <= 2 && e.args.every(function (e) {
              var n = e.evaluate(t)
              p.push(n)
              return e !== n
            })) {
              var _ = p[0]
              var A = p[1]
              _ = R(new RegExp(_).source)
              var g = E(Cn, e, {
                value: {
                  source: _,
                  flags: A
                }
              })
              if (g._eval(t) !== g) {
                return g
              }
              t.warn("Error converting {expr} [{file}:{line},{col}]", {
                expr: e.print_to_string(),
                file: e.start.file,
                line: e.start.line,
                col: e.start.col
              })
            }
        }
      } else if (e$expression instanceof Bt) {
        switch (e$expression.property) {
          case "toString":
            if (0 == e.args.length && !e$expression.expression.may_throw_on_access(t)) {
              return E(Pt, e, {
                left: E(wn, e, {
                  value: ""
                }),
                operator: "+",
                right: e$expression.expression
              }).optimize(t)
            }
            break
          case "join":
            if (e$expression.expression instanceof jt) {
              e: {
                var v
                if (!(e.args.length > 0 && (v = e.args[0].evaluate(t)) === e.args[0])) {
                  var m
                  var y
                  var b = []
                  var w = []
                  for (u = 0, e$args$length = e$expression.expression.elements.length; u < e$args$length; u++) {
                    var x = e$expression.expression.elements[u]
                    if (x instanceof Qe) {
                      break e
                    }
                    var C = x.evaluate(t)
                    if (C !== x) {
                      w.push(C)
                    } else {
                      if (w.length > 0) {
                        b.push(E(wn, e, {
                          value: w.join(v)
                        }))
                        w.length = 0
                      }
                      b.push(x)
                    }
                  }
                  if (w.length > 0) {
                    b.push(E(wn, e, {
                      value: w.join(v)
                    }))
                  }
                  return 0 == b.length ? E(wn, e, {
                    value: ""
                  }) : 1 == b.length ? b[0].is_string(t) ? b[0] : E(Pt, b[0], {
                    operator: "+",
                    left: E(wn, e, {
                      value: ""
                    }),
                    right: b[0]
                  }) : "" == v ? (m = b[0].is_string(t) || b[1].is_string(t) ? b.shift() : E(wn, e, {
                    value: ""
                  }), b.reduce(function (e, t) {
                    return E(Pt, t, {
                      operator: "+",
                      left: e,
                      right: t
                    })
                  }, m).optimize(t)) : ((y = e.clone()).expression = y.expression.clone(), y.expression.expression = y.expression.expression.clone(), y.expression.expression.elements = b, Yr(t, e, y))
                }
              }
            }
            break
          case "charAt":
            if (e$expression.expression.is_string(t)) {
              var O = e.args[0]
              var k = O ? O.evaluate(t) : 0
              if (k !== O) {
                return E(Dt, e$expression, {
                  expression: e$expression.expression,
                  property: kr(0 | k, O || e$expression)
                }).optimize(t)
              }
            }
            break
          case "apply":
            if (2 == e.args.length && e.args[1] instanceof jt) {
              (X = e.args[1].elements.slice()).unshift(e.args[0])
              return E(Ot, e, {
                expression: E(Bt, e$expression, {
                  expression: e$expression.expression,
                  property: "call"
                }),
                args: X
              }).optimize(t)
            }
            break
          case "call":
            var /* [auto-meaningful-name] */e$expression$expression = e$expression.expression
            if (e$expression$expression instanceof _n && (e$expression$expression = e$expression$expression.fixed_value()), e$expression$expression instanceof We && !e$expression$expression.contains_this()) {
              return (e.args.length ? Or(this, [
                e.args[0], E(Ot, e, {
                  expression: e$expression.expression,
                  args: e.args.slice(1)
                })
              ]) : E(Ot, e, {
                expression: e$expression.expression,
                args: []
              })).optimize(t)
            }
        }
      }
    }
    if (t.option("unsafe_Function") && Pr(e$expression) && "Function" == e$expression.name) {
      if (0 == e.args.length) {
        return E(Xe, e, {
          argnames: [],
          body: []
        }).optimize(t)
      }
      if (e.args.every(function (e) {
        return e instanceof wn
      })) {
        try {
          var T = ye(P = "n(function(" + e.args.slice(0, -1).map(function (e) {
            return e.value
          }).join(",") + "){" + e.args[e.args.length - 1].value + "})")
          var B = {
            ie8: t.option("ie8")
          }
          T.figure_out_scope(B)
          var D
          var I = new gr(t.options);
          (T = T.transform(I)).figure_out_scope(B)
          or.reset()
          T.compute_char_frequency(B)
          T.mangle_names(B)
          Pn(T, function (e) {
            if (br(e)) {
              D = e
              return Mn
            }
          })
          var P = qn()
          De.prototype._codegen.call(D, D, P)
          e.args = [
            E(wn, e, {
              value: D.argnames.map(function (e) {
                return e.print_to_string()
              }).join(",")
            }), E(wn, e.args[e.args.length - 1], {
              value: P.get().replace(/^{|}$/g, "")
            })
          ]
          return e
        } catch (n) {
          if (!(n instanceof le)) {
            throw n
          }
          t.warn("Error parsing code passed to new Function [{file}:{line},{col}]", e.args[e.args.length - 1].start)
          t.warn(n.toString())
        }
      }
    }
    var N = a && r.body[0]
    var M = a && !r.is_generator && !r.async
    var L = M && t.option("inline") && !e.is_expr_pure(t)
    if (L && N instanceof rt) {
      var j
      var /* [auto-meaningful-name] */N$value = N.value
      if (!N$value || N$value.is_constant_expression()) {
        N$value = N$value ? N$value.clone(true) : E(Tn, e)
        var H = e.args.concat(N$value)
        return Or(e, H).optimize(t)
      }
      if (1 === r.argnames.length && r.argnames[0] instanceof rn && e.args.length < 2 && N$value instanceof _n && N$value.name === r.argnames[0].name) {
        return e.args[0] instanceof Tt && (j = t.parent()) instanceof Ot && j.expression === e ? Or(e, [
          E(En, e, {
            value: 0
          }), e.args[0].optimize(t)
        ]) : (e.args[0] || E(Tn)).optimize(t)
      }
    }
    if (L) {
      var V
      var G
      var z
      var Q
      var W
      var K = -1
      if (i && !r.uses_arguments && !r.pinned() && !(t.parent() instanceof Wt) && !(r.name && r instanceof Xe) && (Q = function (e) {
        var /* [auto-meaningful-name] */r$body = r.body
        var /* [auto-meaningful-name] */r$body$length = r$body.length
        if (t.option("inline") < 3) {
          return 1 == r$body$length && q(e)
        }
        e = null
        for (var o = 0; o < r$body$length; o++) {
          var a = r$body[o]
          if (a instanceof mt) {
            if (e && !a.definitions.every(function (e) {
              return !e.value
            })) {
              return false
            }
          } else {
            if (e) {
              return false
            }
            if (!(a instanceof Ie)) {
              e = a
            }
          }
        }
        return q(e)
      }(N)) && (e$expression === r || F(e, Hn) || t.option("unused") && 1 == (z = e$expression.definition()).references.length && !ui(t, z) && r.is_constant_expression(e$expression.scope)) && !F(e, Un | Vn) && !r.contains_this() && function () {
        var n = new Set()
        do {
          if ((V = t.parent(++K)).is_block_scope() && V.block_scope) {
            V.block_scope.variables.forEach(function (e) {
              n.add(e.name)
            })
          }
          if (V instanceof At) {
            if (V.argname) {
              n.add(V.argname.name)
            }
          } else if (V instanceof Pe) {
            G = []
          } else if (V instanceof _n && V.fixed_value() instanceof Ge) {
            return false
          }
        } while (!(V instanceof Ge))
        var i = !(V instanceof ze) || t.toplevel.vars
        var o = t.option("inline")
        return !!function (e, t) {
          for (var /* [auto-meaningful-name] */r$body$length = r.body.length, i = 0; i < r$body$length; i++) {
            var o = r.body[i]
            if (o instanceof mt) {
              if (!t) {
                return false
              }
              for (var /* [auto-meaningful-name] */o$definitions$length = o.definitions.length; --o$definitions$length >= 0;) {
                var /* [auto-meaningful-name] */o$definitionsO$definitions$length$name = o.definitions[o$definitions$length].name
                if (o$definitionsO$definitions$length$name instanceof $e || e.has(o$definitionsO$definitions$length$name.name) || Lr.has(o$definitionsO$definitions$length$name.name) || V.var_names().has(o$definitionsO$definitions$length$name.name)) {
                  return false
                }
                if (G) {
                  G.push(o$definitionsO$definitions$length$name.definition())
                }
              }
            }
          }
          return true
        }(n, o >= 3 && i) && !!function (e, t) {
          for (var n = 0, /* [auto-meaningful-name] */r$argnames$length = r.argnames.length; n < r$argnames$length; n++) {
            var o = r.argnames[n]
            if (o instanceof Lt) {
              if (pr(o.left, 1)) {
                continue
              }
              return false
            }
            if (o instanceof $e) {
              return false
            }
            if (o instanceof Qe) {
              if (pr(o.expression, 1)) {
                continue
              }
              return false
            }
            if (!pr(o, 1)) {
              if (!t || e.has(o.name) || Lr.has(o.name) || V.var_names().has(o.name)) {
                return false
              }
              if (G) {
                G.push(o.definition())
              }
            }
          }
          return true
        }(n, o >= 2 && i) && !!function () {
          for (var t = new Set(), n = function (e) {
              if (e instanceof Ge) {
                var n = new Set()
                e.enclosed.forEach(function (e) {
                  n.add(e.name)
                })
                e.variables.forEach(function (e) {
                  n.delete(e)
                })
                n.forEach(function (e) {
                  t.add(e)
                })
                return true
              }
            }, i = 0; i < e.args.length; i++) {
            Pn(e.args[i], n)
          }
          if (0 == t.size) {
            return true
          }
          for (var o = 0, /* [auto-meaningful-name] */r$argnames$length = r.argnames.length; o < r$argnames$length; o++) {
            var s = r.argnames[o]
            if (!(s instanceof Lt && pr(s.left, 1)) && !(s instanceof Qe && pr(s.expression, 1)) && !pr(s, 1) && t.has(s.name)) {
              return false
            }
          }
          for (var c = 0, /* [auto-meaningful-name] */r$body$length = r.body.length; c < r$body$length; c++) {
            var l = r.body[c]
            if (l instanceof mt) {
              for (var /* [auto-meaningful-name] */l$definitions$length = l.definitions.length; --l$definitions$length >= 0;) {
                var /* [auto-meaningful-name] */l$definitionsL$definitions$length$name = l.definitions[l$definitions$length].name
                if (l$definitionsL$definitions$length$name instanceof $e || t.has(l$definitionsL$definitions$length$name.name)) {
                  return false
                }
              }
            }
          }
          return true
        }() && (!G || 0 == G.length || !di(r, G))
      }() && (W = xr(t)) && !li(W, r) && !function () {
        for (var e, n = 0; e = t.parent(n++);) {
          if (e instanceof Lt) {
            return true
          }
          if (e instanceof Be) {
            break
          }
        }
        return false
      }() && !(V instanceof Wt)) {
        _r(r, 256)
        W.add_child_scope(r)
        return Or(e, function (n) {
          var i = []
          var o = [];
          (function (t, n) {
            for (var /* [auto-meaningful-name] */r$argnames$length = r.argnames.length, /* [auto-meaningful-name] */_e$args$length = e.args.length; --_e$args$length >= r$argnames$length;) {
              n.push(e.args[_e$args$length])
            }
            for (_e$args$length = r$argnames$length; --_e$args$length >= 0;) {
              var a = r.argnames[_e$args$length]
              var s = e.args[_e$args$length]
              if (pr(a, 1) || !a.name || V.var_names().has(a.name)) {
                if (s) {
                  n.push(s)
                }
              } else {
                var c = E(Zt, a, a)
                a.definition().orig.push(c)
                if (!s && G) {
                  s = E(Tn, e)
                }
                $(t, n, c, s)
              }
            }
            t.reverse()
            n.reverse()
          })(i, o);
          (function (e, t) {
            for (var /* [auto-meaningful-name] */t$length = t.length, i = 0, /* [auto-meaningful-name] */r$body$length = r.body.length; i < r$body$length; i++) {
              var a = r.body[i]
              if (a instanceof mt) {
                for (var s = 0, /* [auto-meaningful-name] */a$definitions$length = a.definitions.length; s < a$definitions$length; s++) {
                  var u = a.definitions[s]
                  var /* [auto-meaningful-name] */u$name = u.name
                  $(e, t, u$name, u.value)
                  if (G && r.argnames.every(function (e) {
                    return e.name != u$name.name
                  })) {
                    var f = r.variables.get(u$name.name)
                    var d = E(_n, u$name, u$name)
                    f.references.push(d)
                    t.splice(t$length++, 0, E(Mt, u, {
                      operator: "=",
                      left: d,
                      right: E(Tn, u$name)
                    }))
                  }
                }
              }
            }
          })(i, o)
          o.push(n)
          if (i.length) {
            var a = V.body.indexOf(t.parent(K - 1)) + 1
            V.body.splice(a, 0, E(mt, r, {
              definitions: i
            }))
          }
          return o.map(function (e) {
            return e.clone(true)
          })
        }(Q)).optimize(t)
      }
    }
    if (M && t.option("side_effects") && r.body.every(Dr)) {
      var X = e.args.concat(E(Tn, e))
      return Or(e, X).optimize(t)
    }
    if (t.option("negate_iife") && t.parent() instanceof ke && Fr(e)) {
      return e.negate(t, true)
    }
    var Y = e.evaluate(t)
    return Y !== e ? (Y = kr(Y, e).optimize(t), Yr(t, Y, e)) : e
    function q(t) {
      return t ? t instanceof rt ? t.value ? t.value.clone(true) : E(Tn, e) : t instanceof ke ? E(Rt, t, {
        operator: "void",
        expression: t.body.clone(true)
      }) : undefined : E(Tn, e)
    }
    function $(t, n, r, i) {
      var o = r.definition()
      V.variables.set(r.name, o)
      V.enclosed.push(o)
      if (!V.var_names().has(r.name)) {
        V.add_var_name(r.name)
        t.push(E(wt, r, {
          name: r,
          value: null
        }))
      }
      var a = E(_n, r, r)
      o.references.push(a)
      if (i) {
        n.push(E(Mt, e, {
          operator: "=",
          left: a,
          right: i.clone()
        }))
      }
    }
  })
  vr(kt, function (e, t) {
    return t.option("unsafe") && Pr(e.expression) && ["Object", "RegExp", "Function", "Error", "Array"].includes(e.expression.name) ? E(Ot, e, e).transform(t) : e
  })
  vr(St, function (e, t) {
    if (!t.option("side_effects")) {
      return e
    }
    var n
    var r
    var i = []
    n = Wn(t)
    r = e.expressions.length - 1
    e.expressions.forEach(function (e, o) {
      if (o < r) {
        e = e.drop_side_effect_free(t, n)
      }
      if (e) {
        Tr(i, e)
        n = false
      }
    })
    var o = i.length - 1;
    (function () {
      for (; o > 0 && Gr(i[o], t);) {
        o--
      }
      if (o < i.length - 1) {
        i[o] = E(Rt, e, {
          operator: "void",
          expression: i[o]
        })
        i.length = o + 1
      }
    })()
    return 0 == o ? ((e = Sr(t.parent(), t.self(), i[0])) instanceof St || (e = e.optimize(t)), e) : (e.expressions = i, e)
  })
  It.DEFMETHOD("lift_sequences", function (e) {
    if (e.option("sequences") && this.expression instanceof St) {
      var t = this.expression.expressions.slice()
      var n = this.clone()
      n.expression = t.pop()
      t.push(n)
      return Or(this, t).optimize(e)
    }
    return this
  })
  vr(Ft, function (e, t) {
    return e.lift_sequences(t)
  })
  vr(Rt, function (e, t) {
    var /* [auto-meaningful-name] */e$expression = e.expression
    if ("delete" == e.operator && !(e$expression instanceof _n || e$expression instanceof Tt || jr(e$expression))) {
      if (e$expression instanceof St) {
        var r = e$expression.expressions.slice()
        r.push(E(Fn, e))
        return Or(e, r).optimize(t)
      }
      return Or(e, [e$expression, E(Fn, e)]).optimize(t)
    }
    var i = e.lift_sequences(t)
    if (i !== e) {
      return i
    }
    if (t.option("side_effects") && "void" == e.operator) {
      return (e$expression = e$expression.drop_side_effect_free(t)) ? (e.expression = e$expression, e) : E(Tn, e).optimize(t)
    }
    if (t.in_boolean_context()) {
      switch (e.operator) {
        case "!":
          if (e$expression instanceof Rt && "!" == e$expression.operator) {
            return e$expression.expression
          }
          if (e$expression instanceof Pt) {
            e = Yr(t, e, e$expression.negate(t, Wn(t)))
          }
          break
        case "typeof":
          t.warn("Boolean expression always true [{file}:{line},{col}]", e.start)
          return (e$expression instanceof _n ? E(Fn, e) : Or(e, [e$expression, E(Fn, e)])).optimize(t)
      }
    }
    if ("-" == e.operator && e$expression instanceof Dn) {
      e$expression = e$expression.transform(t)
    }
    if (e$expression instanceof Pt && ("+" == e.operator || "-" == e.operator) && ("*" == e$expression.operator || "/" == e$expression.operator || "%" == e$expression.operator)) {
      return E(Pt, e, {
        operator: e$expression.operator,
        left: E(Rt, e$expression.left, {
          operator: e.operator,
          expression: e$expression.left
        }),
        right: e$expression.right
      })
    }
    if ("-" != e.operator || !(e$expression instanceof En || e$expression instanceof Dn || e$expression instanceof xn)) {
      var o = e.evaluate(t)
      if (o !== e) {
        return Yr(t, o = kr(o, e).optimize(t), e)
      }
    }
    return e
  })
  Pt.DEFMETHOD("lift_sequences", function (e) {
    if (e.option("sequences")) {
      if (this.left instanceof St) {
        var t = this.left.expressions.slice();
        (n = this.clone()).left = t.pop()
        t.push(n)
        return Or(this, t).optimize(e)
      }
      if (this.right instanceof St && !this.left.has_side_effects(e)) {
        for (var n, r = "=" == this.operator && this.left instanceof _n, i = (t = this.right.expressions).length - 1, o = 0; o < i && (r || !t[o].has_side_effects(e)); o++) {
          ;
        }
        if (o == i) {
          t = t.slice();
          (n = this.clone()).right = t.pop()
          t.push(n)
          return Or(this, t).optimize(e)
        }
        if (o > 0) {
          (n = this.clone()).right = Or(this.right, t.slice(o));
          (t = t.slice(0, o)).push(n)
          return Or(this, t).optimize(e)
        }
      }
    }
    return this
  })
  var ci = S("== === != !== * & | ^")
  function ui(e, t) {
    for (var n, r = 0; n = e.parent(r); r++) {
      if (n instanceof We || n instanceof Wt) {
        var /* [auto-meaningful-name] */n$name = n.name
        if (n$name && n$name.definition() === t) {
          break
        }
      }
    }
    return n
  }
  function li(e, t) {
    var n
    var r = a(t.enclosed)
    try {
      for (r.s(); !(n = r.n()).done;) {
        var /* [auto-meaningful-name] */n$value = n.value
        if (!t.variables.has(n$value.name)) {
          var o = e.find_variable(n$value.name)
          if (o) {
            if (o === n$value) {
              continue
            }
            return true
          }
        }
      }
    } catch (s) {
      r.e(s)
    } finally {
      r.f()
    }
    return false
  }
  function fi(e, t) {
    return e instanceof _n || e.TYPE === t.TYPE
  }
  function di(e, t) {
    var n = function (e) {
      if (e instanceof _n && p(e.definition(), t)) {
        return Mn
      }
    }
    return Nn(e, function (t, r) {
      if (t instanceof Ge && t !== e) {
        var i = r.parent()
        if (i instanceof Ot && i.expression === t) {
          return
        }
        return !Pn(t, n) || Mn
      }
    })
  }
  vr(Pt, function (e, t) {
    function n() {
      return e.left.is_constant() || e.right.is_constant() || !e.left.has_side_effects(t) && !e.right.has_side_effects(t)
    }
    function r(t) {
      if (n()) {
        if (t) {
          e.operator = t
        }
        var /* [auto-meaningful-name] */e$left = e.left
        e.left = e.right
        e.right = e$left
      }
    }
    if (ci.has(e.operator) && e.right.is_constant() && !e.left.is_constant()) {
      if (!(e.left instanceof Pt && ve[e.left.operator] >= ve[e.operator])) {
        r()
      }
    }
    e = e.lift_sequences(t)
    if (t.option("comparisons")) {
      switch (e.operator) {
        case "===":
        case "!==":
          var i = true
          if (e.left.is_string(t) && e.right.is_string(t) || e.left.is_number(t) && e.right.is_number(t) || e.left.is_boolean() && e.right.is_boolean() || e.left.equivalent_to(e.right)) {
            e.operator = e.operator.substr(0, 2)
          }
        case "==":
        case "!=":
          if (!i && Gr(e.left, t)) {
            e.left = E(kn, e.left)
          } else if (t.option("typeofs") && e.left instanceof wn && "undefined" == e.left.value && e.right instanceof Rt && "typeof" == e.right.operator) {
            var /* [auto-meaningful-name] */e$right$expression = e.right.expression
            if (!(e$right$expression instanceof _n ? !e$right$expression.is_declared(t) : e$right$expression instanceof Tt && t.option("ie8"))) {
              e.right = e$right$expression
              e.left = E(Tn, e.left).optimize(t)
              if (2 == e.operator.length) {
                e.operator += "="
              }
            }
          } else if (e.left instanceof _n && e.right instanceof _n && e.left.definition() === e.right.definition() && ((c = e.left.fixed_value()) instanceof jt || c instanceof We || c instanceof Ut || c instanceof Wt)) {
            return E("=" == e.operator[0] ? Fn : Rn, e)
          }
          break
        case "&&":
        case "||":
          var /* [auto-meaningful-name] */e$left = e.left
          if (e$left.operator == e.operator && (e$left = e$left.right), e$left instanceof Pt && e$left.operator == ("&&" == e.operator ? "!==" : "===") && e.right instanceof Pt && e$left.operator == e.right.operator && (Gr(e$left.left, t) && e.right.left instanceof kn || e$left.left instanceof kn && Gr(e.right.left, t)) && !e$left.right.has_side_effects(t) && e$left.right.equivalent_to(e.right.right)) {
            var s = E(Pt, e, {
              operator: e$left.operator.slice(0, -1),
              left: E(kn, e),
              right: e$left.right
            })
            if (e$left !== e.left) {
              s = E(Pt, e, {
                operator: e.operator,
                left: e.left.left,
                right: s
              })
            }
            return s
          }
      }
    }
    var c
    if ("+" == e.operator && t.in_boolean_context()) {
      var u = e.left.evaluate(t)
      var l = e.right.evaluate(t)
      if (u && "string" == typeof u) {
        t.warn("+ in boolean context always true [{file}:{line},{col}]", e.start)
        return Or(e, [e.right, E(Fn, e)]).optimize(t)
      }
      if (l && "string" == typeof l) {
        t.warn("+ in boolean context always true [{file}:{line},{col}]", e.start)
        return Or(e, [e.left, E(Fn, e)]).optimize(t)
      }
    }
    if (t.option("comparisons") && e.is_boolean()) {
      if (!(t.parent() instanceof Pt) || t.parent() instanceof Mt) {
        var f = E(Rt, e, {
          operator: "!",
          expression: e.negate(t, Wn(t))
        })
        e = Yr(t, e, f)
      }
      if (t.option("unsafe_comps")) {
        switch (e.operator) {
          case "<":
            r(">")
            break
          case "<=":
            r(">=")
        }
      }
    }
    if ("+" == e.operator) {
      if (e.right instanceof wn && "" == e.right.getValue() && e.left.is_string(t)) {
        return e.left
      }
      if (e.left instanceof wn && "" == e.left.getValue() && e.right.is_string(t)) {
        return e.right
      }
      if (e.left instanceof Pt && "+" == e.left.operator && e.left.left instanceof wn && "" == e.left.left.getValue() && e.right.is_string(t)) {
        e.left = e.left.right
        return e.transform(t)
      }
    }
    if (t.option("evaluate")) {
      switch (e.operator) {
        case "&&":
          if (!(u = !!pr(e.left, 2) || !pr(e.left, 4) && e.left.evaluate(t))) {
            t.warn("Condition left of && always false [{file}:{line},{col}]", e.start)
            return Sr(t.parent(), t.self(), e.left).optimize(t)
          }
          if (!(u instanceof Ee)) {
            t.warn("Condition left of && always true [{file}:{line},{col}]", e.start)
            return Or(e, [e.left, e.right]).optimize(t)
          }
          if (l = e.right.evaluate(t)) {
            if (!(l instanceof Ee) && ("&&" == (d = t.parent()).operator && d.left === t.self() || t.in_boolean_context())) {
              t.warn("Dropping side-effect-free && [{file}:{line},{col}]", e.start)
              return e.left.optimize(t)
            }
          } else {
            if (t.in_boolean_context()) {
              t.warn("Boolean && always false [{file}:{line},{col}]", e.start)
              return Or(e, [e.left, E(Rn, e)]).optimize(t)
            }
            _r(e, 4)
          }
          if ("||" == e.left.operator && !(h = e.left.right.evaluate(t))) {
            return E(Nt, e, {
              condition: e.left.left,
              consequent: e.right,
              alternative: e.left.right
            }).optimize(t)
          }
          break
        case "||":
          var d, h
          if (!(u = !!pr(e.left, 2) || !pr(e.left, 4) && e.left.evaluate(t))) {
            t.warn("Condition left of || always false [{file}:{line},{col}]", e.start)
            return Or(e, [e.left, e.right]).optimize(t)
          }
          if (!(u instanceof Ee)) {
            t.warn("Condition left of || always true [{file}:{line},{col}]", e.start)
            return Sr(t.parent(), t.self(), e.left).optimize(t)
          }
          if (l = e.right.evaluate(t)) {
            if (!(l instanceof Ee)) {
              if (t.in_boolean_context()) {
                t.warn("Boolean || always true [{file}:{line},{col}]", e.start)
                return Or(e, [e.left, E(Fn, e)]).optimize(t)
              }
              _r(e, 2)
            }
          } else if ("||" == (d = t.parent()).operator && d.left === t.self() || t.in_boolean_context()) {
            t.warn("Dropping side-effect-free || [{file}:{line},{col}]", e.start)
            return e.left.optimize(t)
          }
          if ("&&" == e.left.operator && (h = e.left.right.evaluate(t)) && !(h instanceof Ee)) {
            return E(Nt, e, {
              condition: e.left.left,
              consequent: e.left.right,
              alternative: e.right
            }).optimize(t)
          }
          break
        case "??":
          if (_i(e.left)) {
            return e.right
          }
          if (!((u = e.left.evaluate(t)) instanceof Ee)) {
            return null == u ? e.right : e.left
          }
          if (t.in_boolean_context()) {
            var p = e.right.evaluate(t)
            if (!(p instanceof Ee || p)) {
              return e.left
            }
          }
      }
      var _ = true
      switch (e.operator) {
        case "+":
          if (e.left instanceof bn && e.right instanceof Pt && "+" == e.right.operator && e.right.is_string(t)) {
            var A = (v = E(Pt, e, {
              operator: "+",
              left: e.left,
              right: e.right.left
            })).optimize(t)
            if (v !== A) {
              e = E(Pt, e, {
                operator: "+",
                left: A,
                right: e.right.right
              })
            }
          }
          if (e.right instanceof bn && e.left instanceof Pt && "+" == e.left.operator && e.left.is_string(t)) {
            var g = (v = E(Pt, e, {
              operator: "+",
              left: e.left.right,
              right: e.right
            })).optimize(t)
            if (v !== g) {
              e = E(Pt, e, {
                operator: "+",
                left: e.left.left,
                right: g
              })
            }
          }
          if (e.left instanceof Pt && "+" == e.left.operator && e.left.is_string(t) && e.right instanceof Pt && "+" == e.right.operator && e.right.is_string(t)) {
            var v
            var m = (v = E(Pt, e, {
              operator: "+",
              left: e.left.right,
              right: e.right.left
            })).optimize(t)
            if (v !== m) {
              e = E(Pt, e, {
                operator: "+",
                left: E(Pt, e.left, {
                  operator: "+",
                  left: e.left.left,
                  right: m
                }),
                right: e.right.right
              })
            }
          }
          if (e.right instanceof Rt && "-" == e.right.operator && e.left.is_number(t)) {
            e = E(Pt, e, {
              operator: "-",
              left: e.left,
              right: e.right.expression
            })
            break
          }
          if (e.left instanceof Rt && "-" == e.left.operator && n() && e.right.is_number(t)) {
            e = E(Pt, e, {
              operator: "-",
              left: e.right,
              right: e.left.expression
            })
            break
          }
          if (e.left instanceof Ze && (A = e.left, (g = e.right.evaluate(t)) != e.right)) {
            A.segments[A.segments.length - 1].value += g.toString()
            return A
          }
          if (e.right instanceof Ze && (g = e.right, (A = e.left.evaluate(t)) != e.left)) {
            g.segments[0].value = A.toString() + g.segments[0].value
            return g
          }
          if (e.left instanceof Ze && e.right instanceof Ze) {
            var /* [auto-meaningful-name] */AE$left$segments = (A = e.left).segments
            g = e.right
            AE$left$segments[AE$left$segments.length - 1].value += g.segments[0].value
            for (var b = 1; b < g.segments.length; b++) {
              AE$left$segments.push(g.segments[b])
            }
            return A
          }
        case "*":
          _ = t.option("unsafe_math")
        case "&":
        case "|":
        case "^":
          if (e.left.is_number(t) && e.right.is_number(t) && n() && !(e.left instanceof Pt && e.left.operator != e.operator && ve[e.left.operator] >= ve[e.operator])) {
            var w = E(Pt, e, {
              operator: e.operator,
              left: e.right,
              right: e.left
            })
            e = e.right instanceof bn && !(e.left instanceof bn) ? Yr(t, w, e) : Yr(t, e, w)
          }
          if (_ && e.is_number(t)) {
            if (e.right instanceof Pt && e.right.operator == e.operator) {
              e = E(Pt, e, {
                operator: e.operator,
                left: E(Pt, e.left, {
                  operator: e.operator,
                  left: e.left,
                  right: e.right.left,
                  start: e.left.start,
                  end: e.right.left.end
                }),
                right: e.right.right
              })
            }
            if (e.right instanceof bn && e.left instanceof Pt && e.left.operator == e.operator) {
              if (e.left.left instanceof bn) {
                e = E(Pt, e, {
                  operator: e.operator,
                  left: E(Pt, e.left, {
                    operator: e.operator,
                    left: e.left.left,
                    right: e.right,
                    start: e.left.left.start,
                    end: e.right.end
                  }),
                  right: e.left.right
                })
              } else {
                if (e.left.right instanceof bn) {
                  e = E(Pt, e, {
                    operator: e.operator,
                    left: E(Pt, e.left, {
                      operator: e.operator,
                      left: e.left.right,
                      right: e.right,
                      start: e.left.right.start,
                      end: e.right.end
                    }),
                    right: e.left.left
                  })
                }
              }
            }
            if (e.left instanceof Pt && e.left.operator == e.operator && e.left.right instanceof bn && e.right instanceof Pt && e.right.operator == e.operator && e.right.left instanceof bn) {
              e = E(Pt, e, {
                operator: e.operator,
                left: E(Pt, e.left, {
                  operator: e.operator,
                  left: E(Pt, e.left.left, {
                    operator: e.operator,
                    left: e.left.right,
                    right: e.right.left,
                    start: e.left.right.start,
                    end: e.right.left.end
                  }),
                  right: e.left.left
                }),
                right: e.right.right
              })
            }
          }
      }
    }
    if (e.right instanceof Pt && e.right.operator == e.operator && (zr.has(e.operator) || "+" == e.operator && (e.right.left.is_string(t) || e.left.is_string(t) && e.right.right.is_string(t)))) {
      e.left = E(Pt, e.left, {
        operator: e.operator,
        left: e.left,
        right: e.right.left
      })
      e.right = e.right.right
      return e.transform(t)
    }
    var x = e.evaluate(t)
    return x !== e ? (x = kr(x, e).optimize(t), Yr(t, x, e)) : e
  })
  vr(An, function (e) {
    return e
  })
  vr(_n, function (e, t) {
    if (!t.option("ie8") && Pr(e) && (!e.scope.uses_with || !t.find_parent(Ve))) {
      switch (e.name) {
        case "undefined":
          return E(Tn, e).optimize(t)
        case "NaN":
          return E(Sn, e).optimize(t)
        case "Infinity":
          return E(Dn, e).optimize(t)
      }
    }
    var n = t.parent()
    if (t.option("reduce_vars") && Wr(e, n) !== e) {
      var r = e.definition()
      if (t.top_retain && r.global && t.top_retain(r)) {
        r.fixed = false
        r.should_replace = false
        r.single_use = false
        return e
      }
      var i = e.fixed_value()
      var o = r.single_use && !(n instanceof Ot && n.is_expr_pure(t) || F(n, Vn))
      if (o && (i instanceof We || i instanceof Wt)) {
        if (si(i, t)) {
          o = false
        } else if (r.scope !== e.scope && (1 == r.escaped || pr(i, 16) || function (e) {
          for (var t, n = 0; t = e.parent(n++);) {
            if (t instanceof xe) {
              return false
            }
            if (t instanceof jt || t instanceof Vt || t instanceof Ut) {
              return true
            }
          }
          return false
        }(t))) {
          o = false
        } else if (ui(t, r)) {
          o = false
        } else if ((r.scope !== e.scope || r.orig[0] instanceof rn) && "f" == (o = i.is_constant_expression(e.scope))) {
          var /* [auto-meaningful-name] */e$scope = e.scope
          do {
            if (e$scope instanceof qe || br(e$scope)) {
              _r(e$scope, 16)
            }
          } while (e$scope = e$scope.parent_scope)
        }
      }
      if (o && i instanceof We) {
        var s = xr(t)
        o = r.scope === e.scope && !li(s, i) || n instanceof Ot && n.expression === e && !li(s, i)
      }
      if (o && i instanceof Wt) {
        o = (!i.extends || !i.extends.may_throw(t) && !i.extends.has_side_effects(t)) && !i.properties.some(function (e) {
          return e.may_throw(t) || e.has_side_effects(t)
        })
      }
      if (o && i) {
        if (i instanceof Xt) {
          _r(i, 256)
          i = E(Yt, i, i)
        }
        if (i instanceof qe) {
          _r(i, 256)
          i = E(Xe, i, i)
        }
        if (r.recursive_refs > 0 && i.name instanceof on) {
          var c = i.name.definition()
          var u = i.variables.get(i.name.name)
          var l = u && u.orig[0]
          if (!(l instanceof cn)) {
            (l = E(cn, i.name, i.name)).scope = i
            i.name = l
            u = i.def_function(l)
          }
          Pn(i, function (e) {
            if (e instanceof _n && e.definition() === c) {
              e.thedef = u
              u.references.push(e)
            }
          })
        }
        if (i instanceof We || i instanceof Wt) {
          xr(t).add_child_scope(i)
        }
        return i.optimize(t)
      }
      if (i && undefined === r.should_replace) {
        var f
        if (i instanceof mn) {
          if (!(r.orig[0] instanceof rn || !r.references.every(function (e) {
            return r.scope === e.scope
          }))) {
            f = i
          }
        } else {
          var d = i.evaluate(t)
          if (!(d === i || !t.option("unsafe_regexp") && d instanceof RegExp)) {
            f = kr(d, i)
          }
        }
        if (f) {
          var h
          var p = f.optimize(t).size()
          if (Pn(i, function (e) {
            if (e instanceof _n) {
              return Mn
            }
          })) {
            h = function () {
              var e = f.optimize(t)
              return e === f ? e.clone(true) : e
            }
          } else {
            p = Math.min(p, i.size())
            h = function () {
              var e = Kr(f.optimize(t), i)
              return e === f || e === i ? e.clone(true) : e
            }
          }
          var /* [auto-meaningful-name] */r$name$length = r.name.length
          var A = 0
          if (t.option("unused") && !t.exposed(r)) {
            A = (r$name$length + 2 + p) / (r.references.length - r.assignments)
          }
          r.should_replace = p <= r$name$length + A && h
        } else {
          r.should_replace = false
        }
      }
      if (r.should_replace) {
        return r.should_replace()
      }
    }
    return e
  })
  vr(Tn, function (e, t) {
    if (t.option("unsafe_undefined")) {
      var n = Cr(t, "undefined")
      if (n) {
        var r = E(_n, e, {
          name: "undefined",
          scope: n.scope,
          thedef: n
        })
        _r(r, 8)
        return r
      }
    }
    var i = Wr(t.self(), t.parent())
    return i && fi(i, e) ? e : E(Rt, e, {
      operator: "void",
      expression: E(En, e, {
        value: 0
      })
    })
  })
  vr(Dn, function (e, t) {
    var n = Wr(t.self(), t.parent())
    return n && fi(n, e) ? e : !t.option("keep_infinity") || n && !fi(n, e) || Cr(t, "Infinity") ? E(Pt, e, {
      operator: "/",
      left: E(En, e, {
        value: 1
      }),
      right: E(En, e, {
        value: 0
      })
    }) : e
  })
  vr(Sn, function (e, t) {
    var n = Wr(t.self(), t.parent())
    return n && !fi(n, e) || Cr(t, "NaN") ? E(Pt, e, {
      operator: "/",
      left: E(En, e, {
        value: 0
      }),
      right: E(En, e, {
        value: 0
      })
    }) : e
  })
  var hi = S("+ - / * % >> << >>> | ^ &")
  var pi = S("* | ^ &")
  function _i(e) {
    var /* [auto-meaningful-name] */e$definition$fixed
    return e instanceof kn || Gr(e) || e instanceof _n && (e$definition$fixed = e.definition().fixed) instanceof Ee && _i(e$definition$fixed)
  }
  function Ai(e, t) {
    if (e instanceof _n) {
      e = e.fixed_value()
    }
    return !!e && (!(e instanceof We || e instanceof Wt) || !(e instanceof We && e.contains_this()) || t.parent() instanceof kt)
  }
  function gi(e, t) {
    return t.in_boolean_context() ? Yr(t, e, Or(e, [e, E(Fn, e)]).optimize(t)) : e
  }
  function vi(e, t, n) {
    for (var r = 0; r < n.length; r++) {
      var i = n[r]
      if (i instanceof Qe) {
        var /* [auto-meaningful-name] */i$expression = i.expression
        if (i$expression instanceof jt) {
          n.splice.apply(n, [r, 1].concat(c(i$expression.elements)))
          r--
        }
      }
    }
    return e
  }
  function mi(e, t) {
    if (!t.option("computed_props")) {
      return e
    }
    if (!(e.key instanceof bn)) {
      return e
    }
    if (e.key instanceof wn || e.key instanceof En) {
      if ("__proto__" === e.key.value) {
        return e
      }
      if ("constructor" == e.key.value && t.parent() instanceof Wt) {
        return e
      }
      e.key = e instanceof Vt ? e.key.value : E(e instanceof Kt ? sn : an, e.key, {
        name: e.key.value
      })
    }
    return e
  }
  vr(Mt, function (e, t) {
    var n
    if (t.option("dead_code") && e.left instanceof _n && (n = e.left.definition()).scope === t.find_parent(We)) {
      var r
      var i = 0
      var o = e
      do {
        r = o
        if ((o = t.parent(i++)) instanceof nt) {
          if (a(i, o)) {
            break
          }
          if (di(n.scope, [n])) {
            break
          }
          return "=" == e.operator ? e.right : (n.fixed = false, E(Pt, e, {
            operator: e.operator.slice(0, -1),
            left: e.left,
            right: e.right
          }).optimize(t))
        }
      } while (o instanceof Pt && o.right === r || o instanceof St && o.tail_node() === r)
    }
    if ("=" == (e = e.lift_sequences(t)).operator && e.left instanceof _n && e.right instanceof Pt) {
      if (e.right.left instanceof _n && e.right.left.name == e.left.name && hi.has(e.right.operator)) {
        e.operator = e.right.operator + "="
        e.right = e.right.right
      } else {
        if (e.right.right instanceof _n && e.right.right.name == e.left.name && pi.has(e.right.operator) && !e.right.left.has_side_effects(t)) {
          e.operator = e.right.operator + "="
          e.right = e.right.left
        }
      }
    }
    return e
    function a(n, r) {
      var /* [auto-meaningful-name] */e$right = e.right
      e.right = E(kn, e$right)
      var o = r.may_throw(t)
      e.right = e$right
      for (var a, /* [auto-meaningful-name] */e$left$definition$scope = e.left.definition().scope; (a = t.parent(n++)) !== e$left$definition$scope;) {
        if (a instanceof _t) {
          if (a.bfinally) {
            return true
          }
          if (o && a.bcatch) {
            return true
          }
        }
      }
    }
  })
  vr(Lt, function (e, t) {
    if (!t.option("evaluate")) {
      return e
    }
    var n = e.right.evaluate(t)
    if (undefined === n) {
      e = e.left
    } else {
      if (n !== e.right) {
        n = kr(n, e.right)
        e.right = Kr(n, e.right)
      }
    }
    return e
  })
  vr(Nt, function (e, t) {
    if (!t.option("conditionals")) {
      return e
    }
    if (e.condition instanceof St) {
      var n = e.condition.expressions.slice()
      e.condition = n.pop()
      n.push(e)
      return Or(e, n)
    }
    var r = e.condition.evaluate(t)
    if (r !== e.condition) {
      return r ? (t.warn("Condition always true [{file}:{line},{col}]", e.start), Sr(t.parent(), t.self(), e.consequent)) : (t.warn("Condition always false [{file}:{line},{col}]", e.start), Sr(t.parent(), t.self(), e.alternative))
    }
    var i = r.negate(t, Wn(t))
    if (Yr(t, r, i) === i) {
      e = E(Nt, e, {
        condition: i,
        consequent: e.alternative,
        alternative: e.consequent
      })
    }
    var o
    var /* [auto-meaningful-name] */e$condition = e.condition
    var /* [auto-meaningful-name] */e$consequent = e.consequent
    var /* [auto-meaningful-name] */e$alternative = e.alternative
    if (e$condition instanceof _n && e$consequent instanceof _n && e$condition.definition() === e$consequent.definition()) {
      return E(Pt, e, {
        operator: "||",
        left: e$condition,
        right: e$alternative
      })
    }
    if (e$consequent instanceof Mt && e$alternative instanceof Mt && e$consequent.operator == e$alternative.operator && e$consequent.left.equivalent_to(e$alternative.left) && (!e.condition.has_side_effects(t) || "=" == e$consequent.operator && !e$consequent.left.has_side_effects(t))) {
      return E(Mt, e, {
        operator: e$consequent.operator,
        left: e$consequent.left,
        right: E(Nt, e, {
          condition: e.condition,
          consequent: e$consequent.right,
          alternative: e$alternative.right
        })
      })
    }
    if (e$consequent instanceof Ot && e$alternative.TYPE === e$consequent.TYPE && e$consequent.args.length > 0 && e$consequent.args.length == e$alternative.args.length && e$consequent.expression.equivalent_to(e$alternative.expression) && !e.condition.has_side_effects(t) && !e$consequent.expression.has_side_effects(t) && "number" == typeof (o = function () {
      for (var /* [auto-meaningful-name] */e$consequent$args = e$consequent.args, /* [auto-meaningful-name] */e$alternative$args = e$alternative.args, n = 0, /* [auto-meaningful-name] */e$consequent$args$length = e$consequent$args.length; n < e$consequent$args$length; n++) {
        if (e$consequent$args[n] instanceof Qe) {
          return
        }
        if (!e$consequent$args[n].equivalent_to(e$alternative$args[n])) {
          if (e$alternative$args[n] instanceof Qe) {
            return
          }
          for (var i = n + 1; i < e$consequent$args$length; i++) {
            if (e$consequent$args[i] instanceof Qe) {
              return
            }
            if (!e$consequent$args[i].equivalent_to(e$alternative$args[i])) {
              return
            }
          }
          return n
        }
      }
    }())) {
      var u = e$consequent.clone()
      u.args[o] = E(Nt, e, {
        condition: e.condition,
        consequent: e$consequent.args[o],
        alternative: e$alternative.args[o]
      })
      return u
    }
    if (e$alternative instanceof Nt && e$consequent.equivalent_to(e$alternative.consequent)) {
      return E(Nt, e, {
        condition: E(Pt, e, {
          operator: "||",
          left: e$condition,
          right: e$alternative.condition
        }),
        consequent: e$consequent,
        alternative: e$alternative.alternative
      }).optimize(t)
    }
    if (t.option("ecma") >= 2020 && function (e, t, n) {
      if (t.may_throw(n)) {
        return false
      }
      var r
      if (e instanceof Pt && "==" === e.operator && ((r = _i(e.left) && e.left) || (r = _i(e.right) && e.right)) && (r === e.left ? e.right : e.left).equivalent_to(t)) {
        return true
      }
      if (e instanceof Pt && "||" === e.operator) {
        var i
        var o
        var a = function (e) {
          if (!(e instanceof Pt) || "===" !== e.operator && "==" !== e.operator) {
            return false
          }
          var n
          var r = 0
          if (e.left instanceof kn) {
            r++
            i = e
            n = e.right
          }
          if (e.right instanceof kn) {
            r++
            i = e
            n = e.left
          }
          if (Gr(e.left)) {
            r++
            o = e
            n = e.right
          }
          if (Gr(e.right)) {
            r++
            o = e
            n = e.left
          }
          return 1 === r && !!n.equivalent_to(t)
        }
        if (!a(e.left)) {
          return false
        }
        if (!a(e.right)) {
          return false
        }
        if (i && o && i !== o) {
          return true
        }
      }
      return false
    }(e$condition, e$alternative, t)) {
      return E(Pt, e, {
        operator: "??",
        left: e$alternative,
        right: e$consequent
      }).optimize(t)
    }
    if (e$alternative instanceof St && e$consequent.equivalent_to(e$alternative.expressions[e$alternative.expressions.length - 1])) {
      return Or(e, [
        E(Pt, e, {
          operator: "||",
          left: e$condition,
          right: Or(e, e$alternative.expressions.slice(0, -1))
        }), e$consequent
      ]).optimize(t)
    }
    if (e$alternative instanceof Pt && "&&" == e$alternative.operator && e$consequent.equivalent_to(e$alternative.right)) {
      return E(Pt, e, {
        operator: "&&",
        left: E(Pt, e, {
          operator: "||",
          left: e$condition,
          right: e$alternative.left
        }),
        right: e$consequent
      }).optimize(t)
    }
    if (e$consequent instanceof Nt && e$consequent.alternative.equivalent_to(e$alternative)) {
      return E(Nt, e, {
        condition: E(Pt, e, {
          left: e.condition,
          operator: "&&",
          right: e$consequent.condition
        }),
        consequent: e$consequent.consequent,
        alternative: e$alternative
      })
    }
    if (e$consequent.equivalent_to(e$alternative)) {
      return Or(e, [e.condition, e$consequent]).optimize(t)
    }
    if (e$consequent instanceof Pt && "||" == e$consequent.operator && e$consequent.right.equivalent_to(e$alternative)) {
      return E(Pt, e, {
        operator: "||",
        left: E(Pt, e, {
          operator: "&&",
          left: e.condition,
          right: e$consequent.left
        }),
        right: e$alternative
      }).optimize(t)
    }
    var l = t.in_boolean_context()
    return d(e.consequent) ? h(e.alternative) ? f(e.condition) : E(Pt, e, {
      operator: "||",
      left: f(e.condition),
      right: e.alternative
    }) : h(e.consequent) ? d(e.alternative) ? f(e.condition.negate(t)) : E(Pt, e, {
      operator: "&&",
      left: f(e.condition.negate(t)),
      right: e.alternative
    }) : d(e.alternative) ? E(Pt, e, {
      operator: "||",
      left: f(e.condition.negate(t)),
      right: e.consequent
    }) : h(e.alternative) ? E(Pt, e, {
      operator: "&&",
      left: f(e.condition),
      right: e.consequent
    }) : e
    function f(e) {
      return e.is_boolean() ? e : E(Rt, e, {
        operator: "!",
        expression: e.negate(t)
      })
    }
    function d(e) {
      return e instanceof Fn || l && e instanceof bn && e.getValue() || e instanceof Rt && "!" == e.operator && e.expression instanceof bn && !e.expression.getValue()
    }
    function h(e) {
      return e instanceof Rn || l && e instanceof bn && !e.getValue() || e instanceof Rt && "!" == e.operator && e.expression instanceof bn && e.expression.getValue()
    }
  })
  vr(In, function (e, t) {
    if (t.in_boolean_context()) {
      return E(En, e, {
        value: +e.value
      })
    }
    var n = t.parent()
    return t.option("booleans_as_integers") ? (n instanceof Pt && ("===" == n.operator || "!==" == n.operator) && (n.operator = n.operator.replace(/=$/, "")), E(En, e, {
      value: +e.value
    })) : t.option("booleans") ? n instanceof Pt && ("==" == n.operator || "!=" == n.operator) ? (t.warn("Non-strict equality against boolean: {operator} {value} [{file}:{line},{col}]", {
      operator: n.operator,
      value: e.value,
      file: n.start.file,
      line: n.start.line,
      col: n.start.col
    }), E(En, e, {
      value: +e.value
    })) : E(Rt, e, {
      operator: "!",
      expression: E(En, e, {
        value: 1 - e.value
      })
    }) : e
  })
  vr(Dt, function (e, t) {
    var /* [auto-meaningful-name] */r$scope
    var /* [auto-meaningful-name] */e$expression = e.expression
    var /* [auto-meaningful-name] */e$property = e.property
    if (t.option("properties")) {
      var o = e$property.evaluate(t)
      if (o !== e$property) {
        if ("string" == typeof o) {
          if ("undefined" == o) {
            o = undefined
          } else {
            if ((b = parseFloat(o)).toString() == o) {
              o = b
            }
          }
        }
        e$property = e.property = Kr(e$property, kr(o, e$property).transform(t))
        var a = "" + o
        if (se(a) && a.length <= e$property.size() + 1) {
          return E(Bt, e, {
            expression: e$expression,
            property: a,
            quote: e$property.quote
          }).optimize(t)
        }
      }
    }
    e: if (t.option("arguments") && e$expression instanceof _n && "arguments" == e$expression.name && 1 == e$expression.definition().orig.length && (r$scope = e$expression.scope) instanceof We && r$scope.uses_arguments && !(r$scope instanceof Ye) && e$property instanceof En) {
      for (var s = e$property.getValue(), c = new Set(), /* [auto-meaningful-name] */r$scope$argnames = r$scope.argnames, l = 0; l < r$scope$argnames.length; l++) {
        if (!(r$scope$argnames[l] instanceof rn)) {
          break e
        }
        var /* [auto-meaningful-name] */r$scope$argnamesL$name = r$scope$argnames[l].name
        if (c.has(r$scope$argnamesL$name)) {
          break e
        }
        c.add(r$scope$argnamesL$name)
      }
      var d = r$scope.argnames[s]
      if (d && t.has_directive("use strict")) {
        var h = d.definition()
        if (!t.option("reduce_vars") || h.assignments || h.orig.length > 1) {
          d = null
        }
      } else if (!d && !t.option("keep_fargs") && s < r$scope.argnames.length + 5) {
        for (; s >= r$scope.argnames.length;) {
          d = E(rn, r$scope, {
            name: r$scope.make_var_name("argument_" + r$scope.argnames.length),
            scope: r$scope
          })
          r$scope.argnames.push(d)
          r$scope.enclosed.push(r$scope.def_variable(d))
        }
      }
      if (d) {
        var p = E(_n, e, d)
        p.reference({})
        Ar(d, 1)
        return p
      }
    }
    if (Wr(e, t.parent())) {
      return e
    }
    if (o !== e$property) {
      var _ = e.flatten_object(a, t)
      if (_) {
        e$expression = e.expression = _.expression
        e$property = e.property = _.property
      }
    }
    if (t.option("properties") && t.option("side_effects") && e$property instanceof En && e$expression instanceof jt) {
      s = e$property.getValue()
      var /* [auto-meaningful-name] */e$expression$elements = e$expression.elements
      var g = e$expression$elements[s]
      e: if (Ai(g, t)) {
        for (var v = true, m = [], /* [auto-meaningful-name] */e$expression$elements$length = e$expression$elements.length; --e$expression$elements$length > s;) {
          if (b = e$expression$elements[e$expression$elements$length].drop_side_effect_free(t)) {
            m.unshift(b)
            if (v && b.has_side_effects(t)) {
              v = false
            }
          }
        }
        if (g instanceof Qe) {
          break e
        }
        for (g = g instanceof Bn ? E(Tn, g) : g, v || m.unshift(g); --e$expression$elements$length >= 0;) {
          var b
          if ((b = e$expression$elements[e$expression$elements$length]) instanceof Qe) {
            break e
          }
          if (b = b.drop_side_effect_free(t)) {
            m.unshift(b)
          } else {
            s--
          }
        }
        return v ? (m.push(g), Or(e, m).optimize(t)) : E(Dt, e, {
          expression: E(jt, e$expression, {
            elements: m
          }),
          property: E(En, e$property, {
            value: s
          })
        })
      }
    }
    var w = e.evaluate(t)
    return w !== e ? Yr(t, w = kr(w, e).optimize(t), e) : e
  })
  We.DEFMETHOD("contains_this", function () {
    var e = this
    return Pn(this, function (t) {
      return t instanceof mn ? Mn : t !== e && t instanceof Ge && !(t instanceof Ye) || undefined
    })
  })
  Tt.DEFMETHOD("flatten_object", function (e, t) {
    if (t.option("properties")) {
      var n = t.option("unsafe_arrows") && t.option("ecma") >= 2015
      var /* [auto-meaningful-name] */this$expression = this.expression
      if (this$expression instanceof Ut) {
        for (var /* [auto-meaningful-name] */this$expression$properties = this$expression.properties, /* [auto-meaningful-name] */this$expression$properties$length = this$expression$properties.length; --this$expression$properties$length >= 0;) {
          var a = this$expression$properties[this$expression$properties$length]
          if ("" + (a instanceof Qt ? a.key.name : a.key) == e) {
            if (!this$expression$properties.every(function (e) {
              return e instanceof Vt || n && e instanceof Qt && !e.is_generator
            })) {
              break
            }
            if (!Ai(a.value, t)) {
              break
            }
            return E(Dt, this, {
              expression: E(jt, this$expression, {
                elements: this$expression$properties.map(function (e) {
                  var /* [auto-meaningful-name] */e$value = e.value
                  if (e$value instanceof Ke) {
                    e$value = E(Xe, e$value, e$value)
                  }
                  var /* [auto-meaningful-name] */e$key = e.key
                  return e$key instanceof Ee && !(e$key instanceof an) ? Or(e, [e$key, e$value]) : e$value
                })
              }),
              property: E(En, this, {
                value: this$expression$properties$length
              })
            })
          }
        }
      }
    }
  })
  vr(Bt, function (e, t) {
    if (!("arguments" != e.property && "caller" != e.property)) {
      t.warn("Function.prototype.{prop} not supported [{file}:{line},{col}]", {
        prop: e.property,
        file: e.start.file,
        line: e.start.line,
        col: e.start.col
      })
    }
    var n = t.parent()
    if (Wr(e, n)) {
      return e
    }
    if (t.option("unsafe_proto") && e.expression instanceof Bt && "prototype" == e.expression.property) {
      var /* [auto-meaningful-name] */e$expression$expression = e.expression.expression
      if (Pr(e$expression$expression)) {
        switch (e$expression$expression.name) {
          case "Array":
            e.expression = E(jt, e.expression, {
              elements: []
            })
            break
          case "Function":
            e.expression = E(Xe, e.expression, {
              argnames: [],
              body: []
            })
            break
          case "Number":
            e.expression = E(En, e.expression, {
              value: 0
            })
            break
          case "Object":
            e.expression = E(Ut, e.expression, {
              properties: []
            })
            break
          case "RegExp":
            e.expression = E(Cn, e.expression, {
              value: {
                source: "t",
                flags: ""
              }
            })
            break
          case "String":
            e.expression = E(wn, e.expression, {
              value: ""
            })
        }
      }
    }
    if (!(n instanceof Ot && F(n, Vn))) {
      var i = e.flatten_object(e.property, t)
      if (i) {
        return i.optimize(t)
      }
    }
    var o = e.evaluate(t)
    return o !== e ? Yr(t, o = kr(o, e).optimize(t), e) : e
  })
  vr(jt, function (e, t) {
    var n = gi(e, t)
    return n !== e ? n : vi(e, 0, e.elements)
  })
  vr(Ut, function (e, t) {
    var n = gi(e, t)
    if (n !== e) {
      return n
    }
    for (var /* [auto-meaningful-name] */e$properties = e.properties, i = 0; i < e$properties.length; i++) {
      var o = e$properties[i]
      if (o instanceof Qe) {
        var /* [auto-meaningful-name] */o$expression = o.expression
        if (o$expression instanceof Ut) {
          e$properties.splice.apply(e$properties, [i, 1].concat(o.expression.properties))
          i--
        } else {
          if (o$expression instanceof bn && !(o$expression instanceof wn)) {
            e$properties.splice(i, 1)
          }
        }
      }
    }
    return e
  })
  vr(Cn, gi)
  vr(rt, function (e, t) {
    if (e.value && Gr(e.value, t)) {
      e.value = null
    }
    return e
  })
  vr(Ye, ii)
  vr(Xe, function (e, t) {
    e = ii(e, t)
    return !(t.option("unsafe_arrows") && t.option("ecma") >= 2015) || e.name || e.is_generator || e.uses_arguments || e.pinned() || Pn(e, function (e) {
      if (e instanceof mn) {
        return Mn
      }
    }) ? e : E(Ye, e, e).optimize(t)
  })
  vr(Wt, function (e) {
    return e
  })
  vr(ut, function (e, t) {
    if (e.expression && !e.is_star && Gr(e.expression, t)) {
      e.expression = null
    }
    return e
  })
  vr(Ze, function (e, t) {
    if (!t.option("evaluate") || t.parent() instanceof Je) {
      return e
    }
    for (var n = [], r = 0; r < e.segments.length; r++) {
      var i = e.segments[r]
      if (i instanceof Ee) {
        var o = i.evaluate(t)
        if (o !== i && (o + "").length <= i.size() + "${}".length) {
          n[n.length - 1].value = n[n.length - 1].value + o + e.segments[++r].value
          continue
        }
        if (i instanceof Ze) {
          var /* [auto-meaningful-name] */i$segments = i.segments
          n[n.length - 1].value += i$segments[0].value
          for (var s = 1; s < i$segments.length; s++) {
            i = i$segments[s]
            n.push(i)
          }
          continue
        }
      }
      n.push(i)
    }
    e.segments = n
    if (1 == n.length) {
      return E(wn, e, n[0])
    }
    if (3 === n.length && n[1] instanceof Ee) {
      if ("" === n[2].value) {
        return E(Pt, e, {
          operator: "+",
          left: E(wn, e, {
            value: n[0].value
          }),
          right: n[1]
        })
      }
      if ("" === n[0].value) {
        return E(Pt, e, {
          operator: "+",
          left: n[1],
          right: E(wn, e, {
            value: n[2].value
          })
        })
      }
    }
    return e
  })
  vr(Je, function (e) {
    return e
  })
  vr(Ht, mi)
  vr(Qt, function (e, t) {
    mi(e, t)
    if (t.option("arrows") && t.parent() instanceof Ut && !e.is_generator && !e.value.uses_arguments && !e.value.pinned() && 1 == e.value.body.length && e.value.body[0] instanceof rt && e.value.body[0].value && !e.value.contains_this()) {
      var n = E(Ye, e.value, e.value)
      n.async = e.async
      n.is_generator = e.is_generator
      return E(Vt, e, {
        key: e.key instanceof an ? e.key.name : e.key,
        value: n,
        quote: e.quote
      })
    }
    return e
  })
  vr(Vt, function (e, t) {
    mi(e, t)
    var n = t.option("unsafe_methods")
    if (n && t.option("ecma") >= 2015 && (!(n instanceof RegExp) || n.test(e.key + ""))) {
      var /* [auto-meaningful-name] */e$key = e.key
      var /* [auto-meaningful-name] */e$value = e.value
      if ((e$value instanceof Ye && Array.isArray(e$value.body) && !e$value.contains_this() || e$value instanceof Xe) && !e$value.name) {
        return E(Qt, e, {
          async: e$value.async,
          is_generator: e$value.is_generator,
          key: e$key instanceof Ee ? e$key : E(an, e, {
            name: e$key
          }),
          value: E(Ke, e$value, e$value),
          quote: e.quote
        })
      }
    }
    return e
  })
  vr($e, function (e, t) {
    if (1 == t.option("pure_getters") && t.option("unused") && !e.is_array && Array.isArray(e.names) && !function (e) {
      for (var t = [/^VarDef$/, /^(Const|Let|Var)$/, /^Export$/], n = 0, r = 0, /* [auto-meaningful-name] */t$length = t.length; n < t$length; r++) {
        var o = e.parent(r)
        if (!o) {
          return false
        }
        if (0 !== n || "Destructuring" != o.TYPE) {
          if (!t[n].test(o.TYPE)) {
            return false
          }
          n++
        }
      }
      return true
    }(t)) {
      for (var n = [], r = 0; r < e.names.length; r++) {
        var i = e.names[r]
        if (!(i instanceof Vt && "string" == typeof i.key && i.value instanceof Jt && !o(t, i.value.definition()))) {
          n.push(i)
        }
      }
      if (n.length != e.names.length) {
        e.names = n
      }
    }
    return e
    function o(e, t) {
      return !!t.references.length || !!t.global && (!e.toplevel.vars || !!e.top_retain && e.top_retain(t))
    }
  })
  var yi = ["$&", "$'", "$*", "$+", "$1", "$2", "$3", "$4", "$5", "$6", "$7", "$8", "$9", "$_", "$`", "$input", "@@iterator", "ABORT_ERR", "ACTIVE", "ACTIVE_ATTRIBUTES", "ACTIVE_TEXTURE", "ACTIVE_UNIFORMS", "ADDITION", "ALIASED_LINE_WIDTH_RANGE", "ALIASED_POINT_SIZE_RANGE", "ALLOW_KEYBOARD_INPUT", "ALLPASS", "ALPHA", "ALPHA_BITS", "ALT_MASK", "ALWAYS", "ANY_TYPE", "ANY_UNORDERED_NODE_TYPE", "ARRAY_BUFFER", "ARRAY_BUFFER_BINDING", "ATTACHED_SHADERS", "ATTRIBUTE_NODE", "AT_TARGET", "AddSearchProvider", "AnalyserNode", "AnimationEvent", "AnonXMLHttpRequest", "ApplicationCache", "ApplicationCacheErrorEvent", "Array", "ArrayBuffer", "Attr", "Audio", "AudioBuffer", "AudioBufferSourceNode", "AudioContext", "AudioDestinationNode", "AudioListener", "AudioNode", "AudioParam", "AudioProcessingEvent", "AudioStreamTrack", "AutocompleteErrorEvent", "BACK", "BAD_BOUNDARYPOINTS_ERR", "BANDPASS", "BLEND", "BLEND_COLOR", "BLEND_DST_ALPHA", "BLEND_DST_RGB", "BLEND_EQUATION", "BLEND_EQUATION_ALPHA", "BLEND_EQUATION_RGB", "BLEND_SRC_ALPHA", "BLEND_SRC_RGB", "BLUE_BITS", "BLUR", "BOOL", "BOOLEAN_TYPE", "BOOL_VEC2", "BOOL_VEC3", "BOOL_VEC4", "BOTH", "BROWSER_DEFAULT_WEBGL", "BUBBLING_PHASE", "BUFFER_SIZE", "BUFFER_USAGE", "BYTE", "BYTES_PER_ELEMENT", "BarProp", "BaseHref", "BatteryManager", "BeforeLoadEvent", "BeforeUnloadEvent", "BiquadFilterNode", "Blob", "BlobEvent", "Boolean", "CAPTURING_PHASE", "CCW", "CDATASection", "CDATA_SECTION_NODE", "CHANGE", "CHARSET_RULE", "CHECKING", "CLAMP_TO_EDGE", "CLICK", "CLOSED", "CLOSING", "COLOR_ATTACHMENT0", "COLOR_BUFFER_BIT", "COLOR_CLEAR_VALUE", "COLOR_WRITEMASK", "COMMENT_NODE", "COMPILE_STATUS", "COMPRESSED_RGBA_S3TC_DXT1_EXT", "COMPRESSED_RGBA_S3TC_DXT3_EXT", "COMPRESSED_RGBA_S3TC_DXT5_EXT", "COMPRESSED_RGB_S3TC_DXT1_EXT", "COMPRESSED_TEXTURE_FORMATS", "CONNECTING", "CONSTANT_ALPHA", "CONSTANT_COLOR", "CONSTRAINT_ERR", "CONTEXT_LOST_WEBGL", "CONTROL_MASK", "COUNTER_STYLE_RULE", "CSS", "CSS2Properties", "CSSCharsetRule", "CSSConditionRule", "CSSCounterStyleRule", "CSSFontFaceRule", "CSSFontFeatureValuesRule", "CSSGroupingRule", "CSSImportRule", "CSSKeyframeRule", "CSSKeyframesRule", "CSSMediaRule", "CSSMozDocumentRule", "CSSNameSpaceRule", "CSSPageRule", "CSSPrimitiveValue", "CSSRule", "CSSRuleList", "CSSStyleDeclaration", "CSSStyleRule", "CSSStyleSheet", "CSSSupportsRule", "CSSUnknownRule", "CSSValue", "CSSValueList", "CSSVariablesDeclaration", "CSSVariablesRule", "CSSViewportRule", "CSS_ATTR", "CSS_CM", "CSS_COUNTER", "CSS_CUSTOM", "CSS_DEG", "CSS_DIMENSION", "CSS_EMS", "CSS_EXS", "CSS_FILTER_BLUR", "CSS_FILTER_BRIGHTNESS", "CSS_FILTER_CONTRAST", "CSS_FILTER_CUSTOM", "CSS_FILTER_DROP_SHADOW", "CSS_FILTER_GRAYSCALE", "CSS_FILTER_HUE_ROTATE", "CSS_FILTER_INVERT", "CSS_FILTER_OPACITY", "CSS_FILTER_REFERENCE", "CSS_FILTER_SATURATE", "CSS_FILTER_SEPIA", "CSS_GRAD", "CSS_HZ", "CSS_IDENT", "CSS_IN", "CSS_INHERIT", "CSS_KHZ", "CSS_MATRIX", "CSS_MATRIX3D", "CSS_MM", "CSS_MS", "CSS_NUMBER", "CSS_PC", "CSS_PERCENTAGE", "CSS_PERSPECTIVE", "CSS_PRIMITIVE_VALUE", "CSS_PT", "CSS_PX", "CSS_RAD", "CSS_RECT", "CSS_RGBCOLOR", "CSS_ROTATE", "CSS_ROTATE3D", "CSS_ROTATEX", "CSS_ROTATEY", "CSS_ROTATEZ", "CSS_S", "CSS_SCALE", "CSS_SCALE3D", "CSS_SCALEX", "CSS_SCALEY", "CSS_SCALEZ", "CSS_SKEW", "CSS_SKEWX", "CSS_SKEWY", "CSS_STRING", "CSS_TRANSLATE", "CSS_TRANSLATE3D", "CSS_TRANSLATEX", "CSS_TRANSLATEY", "CSS_TRANSLATEZ", "CSS_UNKNOWN", "CSS_URI", "CSS_VALUE_LIST", "CSS_VH", "CSS_VMAX", "CSS_VMIN", "CSS_VW", "CULL_FACE", "CULL_FACE_MODE", "CURRENT_PROGRAM", "CURRENT_VERTEX_ATTRIB", "CUSTOM", "CW", "CanvasGradient", "CanvasPattern", "CanvasRenderingContext2D", "CaretPosition", "ChannelMergerNode", "ChannelSplitterNode", "CharacterData", "ClientRect", "ClientRectList", "Clipboard", "ClipboardEvent", "CloseEvent", "Collator", "CommandEvent", "Comment", "CompositionEvent", "Console", "Controllers", "ConvolverNode", "Counter", "Crypto", "CryptoKey", "CustomEvent", "DATABASE_ERR", "DATA_CLONE_ERR", "DATA_ERR", "DBLCLICK", "DECR", "DECR_WRAP", "DELETE_STATUS", "DEPTH_ATTACHMENT", "DEPTH_BITS", "DEPTH_BUFFER_BIT", "DEPTH_CLEAR_VALUE", "DEPTH_COMPONENT", "DEPTH_COMPONENT16", "DEPTH_FUNC", "DEPTH_RANGE", "DEPTH_STENCIL", "DEPTH_STENCIL_ATTACHMENT", "DEPTH_TEST", "DEPTH_WRITEMASK", "DIRECTION_DOWN", "DIRECTION_LEFT", "DIRECTION_RIGHT", "DIRECTION_UP", "DISABLED", "DISPATCH_REQUEST_ERR", "DITHER", "DOCUMENT_FRAGMENT_NODE", "DOCUMENT_NODE", "DOCUMENT_POSITION_CONTAINED_BY", "DOCUMENT_POSITION_CONTAINS", "DOCUMENT_POSITION_DISCONNECTED", "DOCUMENT_POSITION_FOLLOWING", "DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC", "DOCUMENT_POSITION_PRECEDING", "DOCUMENT_TYPE_NODE", "DOMCursor", "DOMError", "DOMException", "DOMImplementation", "DOMImplementationLS", "DOMMatrix", "DOMMatrixReadOnly", "DOMParser", "DOMPoint", "DOMPointReadOnly", "DOMQuad", "DOMRect", "DOMRectList", "DOMRectReadOnly", "DOMRequest", "DOMSTRING_SIZE_ERR", "DOMSettableTokenList", "DOMStringList", "DOMStringMap", "DOMTokenList", "DOMTransactionEvent", "DOM_DELTA_LINE", "DOM_DELTA_PAGE", "DOM_DELTA_PIXEL", "DOM_INPUT_METHOD_DROP", "DOM_INPUT_METHOD_HANDWRITING", "DOM_INPUT_METHOD_IME", "DOM_INPUT_METHOD_KEYBOARD", "DOM_INPUT_METHOD_MULTIMODAL", "DOM_INPUT_METHOD_OPTION", "DOM_INPUT_METHOD_PASTE", "DOM_INPUT_METHOD_SCRIPT", "DOM_INPUT_METHOD_UNKNOWN", "DOM_INPUT_METHOD_VOICE", "DOM_KEY_LOCATION_JOYSTICK", "DOM_KEY_LOCATION_LEFT", "DOM_KEY_LOCATION_MOBILE", "DOM_KEY_LOCATION_NUMPAD", "DOM_KEY_LOCATION_RIGHT", "DOM_KEY_LOCATION_STANDARD", "DOM_VK_0", "DOM_VK_1", "DOM_VK_2", "DOM_VK_3", "DOM_VK_4", "DOM_VK_5", "DOM_VK_6", "DOM_VK_7", "DOM_VK_8", "DOM_VK_9", "DOM_VK_A", "DOM_VK_ACCEPT", "DOM_VK_ADD", "DOM_VK_ALT", "DOM_VK_ALTGR", "DOM_VK_AMPERSAND", "DOM_VK_ASTERISK", "DOM_VK_AT", "DOM_VK_ATTN", "DOM_VK_B", "DOM_VK_BACKSPACE", "DOM_VK_BACK_QUOTE", "DOM_VK_BACK_SLASH", "DOM_VK_BACK_SPACE", "DOM_VK_C", "DOM_VK_CANCEL", "DOM_VK_CAPS_LOCK", "DOM_VK_CIRCUMFLEX", "DOM_VK_CLEAR", "DOM_VK_CLOSE_BRACKET", "DOM_VK_CLOSE_CURLY_BRACKET", "DOM_VK_CLOSE_PAREN", "DOM_VK_COLON", "DOM_VK_COMMA", "DOM_VK_CONTEXT_MENU", "DOM_VK_CONTROL", "DOM_VK_CONVERT", "DOM_VK_CRSEL", "DOM_VK_CTRL", "DOM_VK_D", "DOM_VK_DECIMAL", "DOM_VK_DELETE", "DOM_VK_DIVIDE", "DOM_VK_DOLLAR", "DOM_VK_DOUBLE_QUOTE", "DOM_VK_DOWN", "DOM_VK_E", "DOM_VK_EISU", "DOM_VK_END", "DOM_VK_ENTER", "DOM_VK_EQUALS", "DOM_VK_EREOF", "DOM_VK_ESCAPE", "DOM_VK_EXCLAMATION", "DOM_VK_EXECUTE", "DOM_VK_EXSEL", "DOM_VK_F", "DOM_VK_F1", "DOM_VK_F10", "DOM_VK_F11", "DOM_VK_F12", "DOM_VK_F13", "DOM_VK_F14", "DOM_VK_F15", "DOM_VK_F16", "DOM_VK_F17", "DOM_VK_F18", "DOM_VK_F19", "DOM_VK_F2", "DOM_VK_F20", "DOM_VK_F21", "DOM_VK_F22", "DOM_VK_F23", "DOM_VK_F24", "DOM_VK_F25", "DOM_VK_F26", "DOM_VK_F27", "DOM_VK_F28", "DOM_VK_F29", "DOM_VK_F3", "DOM_VK_F30", "DOM_VK_F31", "DOM_VK_F32", "DOM_VK_F33", "DOM_VK_F34", "DOM_VK_F35", "DOM_VK_F36", "DOM_VK_F4", "DOM_VK_F5", "DOM_VK_F6", "DOM_VK_F7", "DOM_VK_F8", "DOM_VK_F9", "DOM_VK_FINAL", "DOM_VK_FRONT", "DOM_VK_G", "DOM_VK_GREATER_THAN", "DOM_VK_H", "DOM_VK_HANGUL", "DOM_VK_HANJA", "DOM_VK_HASH", "DOM_VK_HELP", "DOM_VK_HK_TOGGLE", "DOM_VK_HOME", "DOM_VK_HYPHEN_MINUS", "DOM_VK_I", "DOM_VK_INSERT", "DOM_VK_J", "DOM_VK_JUNJA", "DOM_VK_K", "DOM_VK_KANA", "DOM_VK_KANJI", "DOM_VK_L", "DOM_VK_LEFT", "DOM_VK_LEFT_TAB", "DOM_VK_LESS_THAN", "DOM_VK_M", "DOM_VK_META", "DOM_VK_MODECHANGE", "DOM_VK_MULTIPLY", "DOM_VK_N", "DOM_VK_NONCONVERT", "DOM_VK_NUMPAD0", "DOM_VK_NUMPAD1", "DOM_VK_NUMPAD2", "DOM_VK_NUMPAD3", "DOM_VK_NUMPAD4", "DOM_VK_NUMPAD5", "DOM_VK_NUMPAD6", "DOM_VK_NUMPAD7", "DOM_VK_NUMPAD8", "DOM_VK_NUMPAD9", "DOM_VK_NUM_LOCK", "DOM_VK_O", "DOM_VK_OEM_1", "DOM_VK_OEM_102", "DOM_VK_OEM_2", "DOM_VK_OEM_3", "DOM_VK_OEM_4", "DOM_VK_OEM_5", "DOM_VK_OEM_6", "DOM_VK_OEM_7", "DOM_VK_OEM_8", "DOM_VK_OEM_COMMA", "DOM_VK_OEM_MINUS", "DOM_VK_OEM_PERIOD", "DOM_VK_OEM_PLUS", "DOM_VK_OPEN_BRACKET", "DOM_VK_OPEN_CURLY_BRACKET", "DOM_VK_OPEN_PAREN", "DOM_VK_P", "DOM_VK_PA1", "DOM_VK_PAGEDOWN", "DOM_VK_PAGEUP", "DOM_VK_PAGE_DOWN", "DOM_VK_PAGE_UP", "DOM_VK_PAUSE", "DOM_VK_PERCENT", "DOM_VK_PERIOD", "DOM_VK_PIPE", "DOM_VK_PLAY", "DOM_VK_PLUS", "DOM_VK_PRINT", "DOM_VK_PRINTSCREEN", "DOM_VK_PROCESSKEY", "DOM_VK_PROPERITES", "DOM_VK_Q", "DOM_VK_QUESTION_MARK", "DOM_VK_QUOTE", "DOM_VK_R", "DOM_VK_REDO", "DOM_VK_RETURN", "DOM_VK_RIGHT", "DOM_VK_S", "DOM_VK_SCROLL_LOCK", "DOM_VK_SELECT", "DOM_VK_SEMICOLON", "DOM_VK_SEPARATOR", "DOM_VK_SHIFT", "DOM_VK_SLASH", "DOM_VK_SLEEP", "DOM_VK_SPACE", "DOM_VK_SUBTRACT", "DOM_VK_T", "DOM_VK_TAB", "DOM_VK_TILDE", "DOM_VK_U", "DOM_VK_UNDERSCORE", "DOM_VK_UNDO", "DOM_VK_UNICODE", "DOM_VK_UP", "DOM_VK_V", "DOM_VK_VOLUME_DOWN", "DOM_VK_VOLUME_MUTE", "DOM_VK_VOLUME_UP", "DOM_VK_W", "DOM_VK_WIN", "DOM_VK_WINDOW", "DOM_VK_WIN_ICO_00", "DOM_VK_WIN_ICO_CLEAR", "DOM_VK_WIN_ICO_HELP", "DOM_VK_WIN_OEM_ATTN", "DOM_VK_WIN_OEM_AUTO", "DOM_VK_WIN_OEM_BACKTAB", "DOM_VK_WIN_OEM_CLEAR", "DOM_VK_WIN_OEM_COPY", "DOM_VK_WIN_OEM_CUSEL", "DOM_VK_WIN_OEM_ENLW", "DOM_VK_WIN_OEM_FINISH", "DOM_VK_WIN_OEM_FJ_JISHO", "DOM_VK_WIN_OEM_FJ_LOYA", "DOM_VK_WIN_OEM_FJ_MASSHOU", "DOM_VK_WIN_OEM_FJ_ROYA", "DOM_VK_WIN_OEM_FJ_TOUROKU", "DOM_VK_WIN_OEM_JUMP", "DOM_VK_WIN_OEM_PA1", "DOM_VK_WIN_OEM_PA2", "DOM_VK_WIN_OEM_PA3", "DOM_VK_WIN_OEM_RESET", "DOM_VK_WIN_OEM_WSCTRL", "DOM_VK_X", "DOM_VK_XF86XK_ADD_FAVORITE", "DOM_VK_XF86XK_APPLICATION_LEFT", "DOM_VK_XF86XK_APPLICATION_RIGHT", "DOM_VK_XF86XK_AUDIO_CYCLE_TRACK", "DOM_VK_XF86XK_AUDIO_FORWARD", "DOM_VK_XF86XK_AUDIO_LOWER_VOLUME", "DOM_VK_XF86XK_AUDIO_MEDIA", "DOM_VK_XF86XK_AUDIO_MUTE", "DOM_VK_XF86XK_AUDIO_NEXT", "DOM_VK_XF86XK_AUDIO_PAUSE", "DOM_VK_XF86XK_AUDIO_PLAY", "DOM_VK_XF86XK_AUDIO_PREV", "DOM_VK_XF86XK_AUDIO_RAISE_VOLUME", "DOM_VK_XF86XK_AUDIO_RANDOM_PLAY", "DOM_VK_XF86XK_AUDIO_RECORD", "DOM_VK_XF86XK_AUDIO_REPEAT", "DOM_VK_XF86XK_AUDIO_REWIND", "DOM_VK_XF86XK_AUDIO_STOP", "DOM_VK_XF86XK_AWAY", "DOM_VK_XF86XK_BACK", "DOM_VK_XF86XK_BACK_FORWARD", "DOM_VK_XF86XK_BATTERY", "DOM_VK_XF86XK_BLUE", "DOM_VK_XF86XK_BLUETOOTH", "DOM_VK_XF86XK_BOOK", "DOM_VK_XF86XK_BRIGHTNESS_ADJUST", "DOM_VK_XF86XK_CALCULATOR", "DOM_VK_XF86XK_CALENDAR", "DOM_VK_XF86XK_CD", "DOM_VK_XF86XK_CLOSE", "DOM_VK_XF86XK_COMMUNITY", "DOM_VK_XF86XK_CONTRAST_ADJUST", "DOM_VK_XF86XK_COPY", "DOM_VK_XF86XK_CUT", "DOM_VK_XF86XK_CYCLE_ANGLE", "DOM_VK_XF86XK_DISPLAY", "DOM_VK_XF86XK_DOCUMENTS", "DOM_VK_XF86XK_DOS", "DOM_VK_XF86XK_EJECT", "DOM_VK_XF86XK_EXCEL", "DOM_VK_XF86XK_EXPLORER", "DOM_VK_XF86XK_FAVORITES", "DOM_VK_XF86XK_FINANCE", "DOM_VK_XF86XK_FORWARD", "DOM_VK_XF86XK_FRAME_BACK", "DOM_VK_XF86XK_FRAME_FORWARD", "DOM_VK_XF86XK_GAME", "DOM_VK_XF86XK_GO", "DOM_VK_XF86XK_GREEN", "DOM_VK_XF86XK_HIBERNATE", "DOM_VK_XF86XK_HISTORY", "DOM_VK_XF86XK_HOME_PAGE", "DOM_VK_XF86XK_HOT_LINKS", "DOM_VK_XF86XK_I_TOUCH", "DOM_VK_XF86XK_KBD_BRIGHTNESS_DOWN", "DOM_VK_XF86XK_KBD_BRIGHTNESS_UP", "DOM_VK_XF86XK_KBD_LIGHT_ON_OFF", "DOM_VK_XF86XK_LAUNCH0", "DOM_VK_XF86XK_LAUNCH1", "DOM_VK_XF86XK_LAUNCH2", "DOM_VK_XF86XK_LAUNCH3", "DOM_VK_XF86XK_LAUNCH4", "DOM_VK_XF86XK_LAUNCH5", "DOM_VK_XF86XK_LAUNCH6", "DOM_VK_XF86XK_LAUNCH7", "DOM_VK_XF86XK_LAUNCH8", "DOM_VK_XF86XK_LAUNCH9", "DOM_VK_XF86XK_LAUNCH_A", "DOM_VK_XF86XK_LAUNCH_B", "DOM_VK_XF86XK_LAUNCH_C", "DOM_VK_XF86XK_LAUNCH_D", "DOM_VK_XF86XK_LAUNCH_E", "DOM_VK_XF86XK_LAUNCH_F", "DOM_VK_XF86XK_LIGHT_BULB", "DOM_VK_XF86XK_LOG_OFF", "DOM_VK_XF86XK_MAIL", "DOM_VK_XF86XK_MAIL_FORWARD", "DOM_VK_XF86XK_MARKET", "DOM_VK_XF86XK_MEETING", "DOM_VK_XF86XK_MEMO", "DOM_VK_XF86XK_MENU_KB", "DOM_VK_XF86XK_MENU_PB", "DOM_VK_XF86XK_MESSENGER", "DOM_VK_XF86XK_MON_BRIGHTNESS_DOWN", "DOM_VK_XF86XK_MON_BRIGHTNESS_UP", "DOM_VK_XF86XK_MUSIC", "DOM_VK_XF86XK_MY_COMPUTER", "DOM_VK_XF86XK_MY_SITES", "DOM_VK_XF86XK_NEW", "DOM_VK_XF86XK_NEWS", "DOM_VK_XF86XK_OFFICE_HOME", "DOM_VK_XF86XK_OPEN", "DOM_VK_XF86XK_OPEN_URL", "DOM_VK_XF86XK_OPTION", "DOM_VK_XF86XK_PASTE", "DOM_VK_XF86XK_PHONE", "DOM_VK_XF86XK_PICTURES", "DOM_VK_XF86XK_POWER_DOWN", "DOM_VK_XF86XK_POWER_OFF", "DOM_VK_XF86XK_RED", "DOM_VK_XF86XK_REFRESH", "DOM_VK_XF86XK_RELOAD", "DOM_VK_XF86XK_REPLY", "DOM_VK_XF86XK_ROCKER_DOWN", "DOM_VK_XF86XK_ROCKER_ENTER", "DOM_VK_XF86XK_ROCKER_UP", "DOM_VK_XF86XK_ROTATE_WINDOWS", "DOM_VK_XF86XK_ROTATION_KB", "DOM_VK_XF86XK_ROTATION_PB", "DOM_VK_XF86XK_SAVE", "DOM_VK_XF86XK_SCREEN_SAVER", "DOM_VK_XF86XK_SCROLL_CLICK", "DOM_VK_XF86XK_SCROLL_DOWN", "DOM_VK_XF86XK_SCROLL_UP", "DOM_VK_XF86XK_SEARCH", "DOM_VK_XF86XK_SEND", "DOM_VK_XF86XK_SHOP", "DOM_VK_XF86XK_SPELL", "DOM_VK_XF86XK_SPLIT_SCREEN", "DOM_VK_XF86XK_STANDBY", "DOM_VK_XF86XK_START", "DOM_VK_XF86XK_STOP", "DOM_VK_XF86XK_SUBTITLE", "DOM_VK_XF86XK_SUPPORT", "DOM_VK_XF86XK_SUSPEND", "DOM_VK_XF86XK_TASK_PANE", "DOM_VK_XF86XK_TERMINAL", "DOM_VK_XF86XK_TIME", "DOM_VK_XF86XK_TOOLS", "DOM_VK_XF86XK_TOP_MENU", "DOM_VK_XF86XK_TO_DO_LIST", "DOM_VK_XF86XK_TRAVEL", "DOM_VK_XF86XK_USER1KB", "DOM_VK_XF86XK_USER2KB", "DOM_VK_XF86XK_USER_PB", "DOM_VK_XF86XK_UWB", "DOM_VK_XF86XK_VENDOR_HOME", "DOM_VK_XF86XK_VIDEO", "DOM_VK_XF86XK_VIEW", "DOM_VK_XF86XK_WAKE_UP", "DOM_VK_XF86XK_WEB_CAM", "DOM_VK_XF86XK_WHEEL_BUTTON", "DOM_VK_XF86XK_WLAN", "DOM_VK_XF86XK_WORD", "DOM_VK_XF86XK_WWW", "DOM_VK_XF86XK_XFER", "DOM_VK_XF86XK_YELLOW", "DOM_VK_XF86XK_ZOOM_IN", "DOM_VK_XF86XK_ZOOM_OUT", "DOM_VK_Y", "DOM_VK_Z", "DOM_VK_ZOOM", "DONE", "DONT_CARE", "DOWNLOADING", "DRAGDROP", "DST_ALPHA", "DST_COLOR", "DYNAMIC_DRAW", "DataChannel", "DataTransfer", "DataTransferItem", "DataTransferItemList", "DataView", "Date", "DateTimeFormat", "DelayNode", "DesktopNotification", "DesktopNotificationCenter", "DeviceLightEvent", "DeviceMotionEvent", "DeviceOrientationEvent", "DeviceProximityEvent", "DeviceStorage", "DeviceStorageChangeEvent", "Document", "DocumentFragment", "DocumentType", "DragEvent", "DynamicsCompressorNode", "E", "ELEMENT_ARRAY_BUFFER", "ELEMENT_ARRAY_BUFFER_BINDING", "ELEMENT_NODE", "EMPTY", "ENCODING_ERR", "ENDED", "END_TO_END", "END_TO_START", "ENTITY_NODE", "ENTITY_REFERENCE_NODE", "EPSILON", "EQUAL", "EQUALPOWER", "ERROR", "EXPONENTIAL_DISTANCE", "Element", "ElementQuery", "Entity", "EntityReference", "Error", "ErrorEvent", "EvalError", "Event", "EventException", "EventSource", "EventTarget", "External", "FASTEST", "FIDOSDK", "FILTER_ACCEPT", "FILTER_INTERRUPT", "FILTER_REJECT", "FILTER_SKIP", "FINISHED_STATE", "FIRST_ORDERED_NODE_TYPE", "FLOAT", "FLOAT_MAT2", "FLOAT_MAT3", "FLOAT_MAT4", "FLOAT_VEC2", "FLOAT_VEC3", "FLOAT_VEC4", "FOCUS", "FONT_FACE_RULE", "FONT_FEATURE_VALUES_RULE", "FRAGMENT_SHADER", "FRAGMENT_SHADER_DERIVATIVE_HINT_OES", "FRAMEBUFFER", "FRAMEBUFFER_ATTACHMENT_OBJECT_NAME", "FRAMEBUFFER_ATTACHMENT_OBJECT_TYPE", "FRAMEBUFFER_ATTACHMENT_TEXTURE_CUBE_MAP_FACE", "FRAMEBUFFER_ATTACHMENT_TEXTURE_LEVEL", "FRAMEBUFFER_BINDING", "FRAMEBUFFER_COMPLETE", "FRAMEBUFFER_INCOMPLETE_ATTACHMENT", "FRAMEBUFFER_INCOMPLETE_DIMENSIONS", "FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT", "FRAMEBUFFER_UNSUPPORTED", "FRONT", "FRONT_AND_BACK", "FRONT_FACE", "FUNC_ADD", "FUNC_REVERSE_SUBTRACT", "FUNC_SUBTRACT", "Feed", "FeedEntry", "File", "FileError", "FileList", "FileReader", "FindInPage", "Float32Array", "Float64Array", "FocusEvent", "FontFace", "FormData", "Function", "GENERATE_MIPMAP_HINT", "GEQUAL", "GREATER", "GREEN_BITS", "GainNode", "Gamepad", "GamepadButton", "GamepadEvent", "GestureEvent", "HAVE_CURRENT_DATA", "HAVE_ENOUGH_DATA", "HAVE_FUTURE_DATA", "HAVE_METADATA", "HAVE_NOTHING", "HEADERS_RECEIVED", "HIDDEN", "HIERARCHY_REQUEST_ERR", "HIGHPASS", "HIGHSHELF", "HIGH_FLOAT", "HIGH_INT", "HORIZONTAL", "HORIZONTAL_AXIS", "HRTF", "HTMLAllCollection", "HTMLAnchorElement", "HTMLAppletElement", "HTMLAreaElement", "HTMLAudioElement", "HTMLBRElement", "HTMLBaseElement", "HTMLBaseFontElement", "HTMLBlockquoteElement", "HTMLBodyElement", "HTMLButtonElement", "HTMLCanvasElement", "HTMLCollection", "HTMLCommandElement", "HTMLContentElement", "HTMLDListElement", "HTMLDataElement", "HTMLDataListElement", "HTMLDetailsElement", "HTMLDialogElement", "HTMLDirectoryElement", "HTMLDivElement", "HTMLDocument", "HTMLElement", "HTMLEmbedElement", "HTMLFieldSetElement", "HTMLFontElement", "HTMLFormControlsCollection", "HTMLFormElement", "HTMLFrameElement", "HTMLFrameSetElement", "HTMLHRElement", "HTMLHeadElement", "HTMLHeadingElement", "HTMLHtmlElement", "HTMLIFrameElement", "HTMLImageElement", "HTMLInputElement", "HTMLIsIndexElement", "HTMLKeygenElement", "HTMLLIElement", "HTMLLabelElement", "HTMLLegendElement", "HTMLLinkElement", "HTMLMapElement", "HTMLMarqueeElement", "HTMLMediaElement", "HTMLMenuElement", "HTMLMenuItemElement", "HTMLMetaElement", "HTMLMeterElement", "HTMLModElement", "HTMLOListElement", "HTMLObjectElement", "HTMLOptGroupElement", "HTMLOptionElement", "HTMLOptionsCollection", "HTMLOutputElement", "HTMLParagraphElement", "HTMLParamElement", "HTMLPictureElement", "HTMLPreElement", "HTMLProgressElement", "HTMLPropertiesCollection", "HTMLQuoteElement", "HTMLScriptElement", "HTMLSelectElement", "HTMLShadowElement", "HTMLSourceElement", "HTMLSpanElement", "HTMLStyleElement", "HTMLTableCaptionElement", "HTMLTableCellElement", "HTMLTableColElement", "HTMLTableElement", "HTMLTableRowElement", "HTMLTableSectionElement", "HTMLTemplateElement", "HTMLTextAreaElement", "HTMLTimeElement", "HTMLTitleElement", "HTMLTrackElement", "HTMLUListElement", "HTMLUnknownElement", "HTMLVideoElement", "HashChangeEvent", "Headers", "History", "ICE_CHECKING", "ICE_CLOSED", "ICE_COMPLETED", "ICE_CONNECTED", "ICE_FAILED", "ICE_GATHERING", "ICE_WAITING", "IDBCursor", "IDBCursorWithValue", "IDBDatabase", "IDBDatabaseException", "IDBFactory", "IDBFileHandle", "IDBFileRequest", "IDBIndex", "IDBKeyRange", "IDBMutableFile", "IDBObjectStore", "IDBOpenDBRequest", "IDBRequest", "IDBTransaction", "IDBVersionChangeEvent", "IDLE", "IMPLEMENTATION_COLOR_READ_FORMAT", "IMPLEMENTATION_COLOR_READ_TYPE", "IMPORT_RULE", "INCR", "INCR_WRAP", "INDEX_SIZE_ERR", "INT", "INT_VEC2", "INT_VEC3", "INT_VEC4", "INUSE_ATTRIBUTE_ERR", "INVALID_ACCESS_ERR", "INVALID_CHARACTER_ERR", "INVALID_ENUM", "INVALID_EXPRESSION_ERR", "INVALID_FRAMEBUFFER_OPERATION", "INVALID_MODIFICATION_ERR", "INVALID_NODE_TYPE_ERR", "INVALID_OPERATION", "INVALID_STATE_ERR", "INVALID_VALUE", "INVERSE_DISTANCE", "INVERT", "IceCandidate", "Image", "ImageBitmap", "ImageData", "Infinity", "InputEvent", "InputMethodContext", "InstallTrigger", "Int16Array", "Int32Array", "Int8Array", "Intent", "InternalError", "Intl", "IsSearchProviderInstalled", "Iterator", "JSON", "KEEP", "KEYDOWN", "KEYFRAMES_RULE", "KEYFRAME_RULE", "KEYPRESS", "KEYUP", "KeyEvent", "KeyboardEvent", "LENGTHADJUST_SPACING", "LENGTHADJUST_SPACINGANDGLYPHS", "LENGTHADJUST_UNKNOWN", "LEQUAL", "LESS", "LINEAR", "LINEAR_DISTANCE", "LINEAR_MIPMAP_LINEAR", "LINEAR_MIPMAP_NEAREST", "LINES", "LINE_LOOP", "LINE_STRIP", "LINE_WIDTH", "LINK_STATUS", "LIVE", "LN10", "LN2", "LOADED", "LOADING", "LOG10E", "LOG2E", "LOWPASS", "LOWSHELF", "LOW_FLOAT", "LOW_INT", "LSException", "LSParserFilter", "LUMINANCE", "LUMINANCE_ALPHA", "LocalMediaStream", "Location", "MAX_COMBINED_TEXTURE_IMAGE_UNITS", "MAX_CUBE_MAP_TEXTURE_SIZE", "MAX_FRAGMENT_UNIFORM_VECTORS", "MAX_RENDERBUFFER_SIZE", "MAX_SAFE_INTEGER", "MAX_TEXTURE_IMAGE_UNITS", "MAX_TEXTURE_MAX_ANISOTROPY_EXT", "MAX_TEXTURE_SIZE", "MAX_VALUE", "MAX_VARYING_VECTORS", "MAX_VERTEX_ATTRIBS", "MAX_VERTEX_TEXTURE_IMAGE_UNITS", "MAX_VERTEX_UNIFORM_VECTORS", "MAX_VIEWPORT_DIMS", "MEDIA_ERR_ABORTED", "MEDIA_ERR_DECODE", "MEDIA_ERR_ENCRYPTED", "MEDIA_ERR_NETWORK", "MEDIA_ERR_SRC_NOT_SUPPORTED", "MEDIA_KEYERR_CLIENT", "MEDIA_KEYERR_DOMAIN", "MEDIA_KEYERR_HARDWARECHANGE", "MEDIA_KEYERR_OUTPUT", "MEDIA_KEYERR_SERVICE", "MEDIA_KEYERR_UNKNOWN", "MEDIA_RULE", "MEDIUM_FLOAT", "MEDIUM_INT", "META_MASK", "MIN_SAFE_INTEGER", "MIN_VALUE", "MIRRORED_REPEAT", "MODE_ASYNCHRONOUS", "MODE_SYNCHRONOUS", "MODIFICATION", "MOUSEDOWN", "MOUSEDRAG", "MOUSEMOVE", "MOUSEOUT", "MOUSEOVER", "MOUSEUP", "MOZ_KEYFRAMES_RULE", "MOZ_KEYFRAME_RULE", "MOZ_SOURCE_CURSOR", "MOZ_SOURCE_ERASER", "MOZ_SOURCE_KEYBOARD", "MOZ_SOURCE_MOUSE", "MOZ_SOURCE_PEN", "MOZ_SOURCE_TOUCH", "MOZ_SOURCE_UNKNOWN", "MSGESTURE_FLAG_BEGIN", "MSGESTURE_FLAG_CANCEL", "MSGESTURE_FLAG_END", "MSGESTURE_FLAG_INERTIA", "MSGESTURE_FLAG_NONE", "MSPOINTER_TYPE_MOUSE", "MSPOINTER_TYPE_PEN", "MSPOINTER_TYPE_TOUCH", "MS_ASYNC_CALLBACK_STATUS_ASSIGN_DELEGATE", "MS_ASYNC_CALLBACK_STATUS_CANCEL", "MS_ASYNC_CALLBACK_STATUS_CHOOSEANY", "MS_ASYNC_CALLBACK_STATUS_ERROR", "MS_ASYNC_CALLBACK_STATUS_JOIN", "MS_ASYNC_OP_STATUS_CANCELED", "MS_ASYNC_OP_STATUS_ERROR", "MS_ASYNC_OP_STATUS_SUCCESS", "MS_MANIPULATION_STATE_ACTIVE", "MS_MANIPULATION_STATE_CANCELLED", "MS_MANIPULATION_STATE_COMMITTED", "MS_MANIPULATION_STATE_DRAGGING", "MS_MANIPULATION_STATE_INERTIA", "MS_MANIPULATION_STATE_PRESELECT", "MS_MANIPULATION_STATE_SELECTING", "MS_MANIPULATION_STATE_STOPPED", "MS_MEDIA_ERR_ENCRYPTED", "MS_MEDIA_KEYERR_CLIENT", "MS_MEDIA_KEYERR_DOMAIN", "MS_MEDIA_KEYERR_HARDWARECHANGE", "MS_MEDIA_KEYERR_OUTPUT", "MS_MEDIA_KEYERR_SERVICE", "MS_MEDIA_KEYERR_UNKNOWN", "Map", "Math", "MediaController", "MediaDevices", "MediaElementAudioSourceNode", "MediaEncryptedEvent", "MediaError", "MediaKeyError", "MediaKeyEvent", "MediaKeyMessageEvent", "MediaKeyNeededEvent", "MediaKeySession", "MediaKeyStatusMap", "MediaKeySystemAccess", "MediaKeys", "MediaList", "MediaQueryList", "MediaQueryListEvent", "MediaRecorder", "MediaSource", "MediaStream", "MediaStreamAudioDestinationNode", "MediaStreamAudioSourceNode", "MediaStreamEvent", "MediaStreamTrack", "MediaStreamTrackEvent", "MessageChannel", "MessageEvent", "MessagePort", "Methods", "MimeType", "MimeTypeArray", "MouseEvent", "MouseScrollEvent", "MozAnimation", "MozAnimationDelay", "MozAnimationDirection", "MozAnimationDuration", "MozAnimationFillMode", "MozAnimationIterationCount", "MozAnimationName", "MozAnimationPlayState", "MozAnimationTimingFunction", "MozAppearance", "MozBackfaceVisibility", "MozBinding", "MozBorderBottomColors", "MozBorderEnd", "MozBorderEndColor", "MozBorderEndStyle", "MozBorderEndWidth", "MozBorderImage", "MozBorderLeftColors", "MozBorderRightColors", "MozBorderStart", "MozBorderStartColor", "MozBorderStartStyle", "MozBorderStartWidth", "MozBorderTopColors", "MozBoxAlign", "MozBoxDirection", "MozBoxFlex", "MozBoxOrdinalGroup", "MozBoxOrient", "MozBoxPack", "MozBoxSizing", "MozCSSKeyframeRule", "MozCSSKeyframesRule", "MozColumnCount", "MozColumnFill", "MozColumnGap", "MozColumnRule", "MozColumnRuleColor", "MozColumnRuleStyle", "MozColumnRuleWidth", "MozColumnWidth", "MozColumns", "MozContactChangeEvent", "MozFloatEdge", "MozFontFeatureSettings", "MozFontLanguageOverride", "MozForceBrokenImageIcon", "MozHyphens", "MozImageRegion", "MozMarginEnd", "MozMarginStart", "MozMmsEvent", "MozMmsMessage", "MozMobileMessageThread", "MozOSXFontSmoothing", "MozOrient", "MozOutlineRadius", "MozOutlineRadiusBottomleft", "MozOutlineRadiusBottomright", "MozOutlineRadiusTopleft", "MozOutlineRadiusTopright", "MozPaddingEnd", "MozPaddingStart", "MozPerspective", "MozPerspectiveOrigin", "MozPowerManager", "MozSettingsEvent", "MozSmsEvent", "MozSmsMessage", "MozStackSizing", "MozTabSize", "MozTextAlignLast", "MozTextDecorationColor", "MozTextDecorationLine", "MozTextDecorationStyle", "MozTextSizeAdjust", "MozTransform", "MozTransformOrigin", "MozTransformStyle", "MozTransition", "MozTransitionDelay", "MozTransitionDuration", "MozTransitionProperty", "MozTransitionTimingFunction", "MozUserFocus", "MozUserInput", "MozUserModify", "MozUserSelect", "MozWindowDragging", "MozWindowShadow", "MutationEvent", "MutationObserver", "MutationRecord", "NAMESPACE_ERR", "NAMESPACE_RULE", "NEAREST", "NEAREST_MIPMAP_LINEAR", "NEAREST_MIPMAP_NEAREST", "NEGATIVE_INFINITY", "NETWORK_EMPTY", "NETWORK_ERR", "NETWORK_IDLE", "NETWORK_LOADED", "NETWORK_LOADING", "NETWORK_NO_SOURCE", "NEVER", "NEW", "NEXT", "NEXT_NO_DUPLICATE", "NICEST", "NODE_AFTER", "NODE_BEFORE", "NODE_BEFORE_AND_AFTER", "NODE_INSIDE", "NONE", "NON_TRANSIENT_ERR", "NOTATION_NODE", "NOTCH", "NOTEQUAL", "NOT_ALLOWED_ERR", "NOT_FOUND_ERR", "NOT_READABLE_ERR", "NOT_SUPPORTED_ERR", "NO_DATA_ALLOWED_ERR", "NO_ERR", "NO_ERROR", "NO_MODIFICATION_ALLOWED_ERR", "NUMBER_TYPE", "NUM_COMPRESSED_TEXTURE_FORMATS", "NaN", "NamedNodeMap", "Navigator", "NearbyLinks", "NetworkInformation", "Node", "NodeFilter", "NodeIterator", "NodeList", "Notation", "Notification", "NotifyPaintEvent", "Number", "NumberFormat", "OBSOLETE", "ONE", "ONE_MINUS_CONSTANT_ALPHA", "ONE_MINUS_CONSTANT_COLOR", "ONE_MINUS_DST_ALPHA", "ONE_MINUS_DST_COLOR", "ONE_MINUS_SRC_ALPHA", "ONE_MINUS_SRC_COLOR", "OPEN", "OPENED", "OPENING", "ORDERED_NODE_ITERATOR_TYPE", "ORDERED_NODE_SNAPSHOT_TYPE", "OUT_OF_MEMORY", "Object", "OfflineAudioCompletionEvent", "OfflineAudioContext", "OfflineResourceList", "Option", "OscillatorNode", "OverflowEvent", "PACK_ALIGNMENT", "PAGE_RULE", "PARSE_ERR", "PATHSEG_ARC_ABS", "PATHSEG_ARC_REL", "PATHSEG_CLOSEPATH", "PATHSEG_CURVETO_CUBIC_ABS", "PATHSEG_CURVETO_CUBIC_REL", "PATHSEG_CURVETO_CUBIC_SMOOTH_ABS", "PATHSEG_CURVETO_CUBIC_SMOOTH_REL", "PATHSEG_CURVETO_QUADRATIC_ABS", "PATHSEG_CURVETO_QUADRATIC_REL", "PATHSEG_CURVETO_QUADRATIC_SMOOTH_ABS", "PATHSEG_CURVETO_QUADRATIC_SMOOTH_REL", "PATHSEG_LINETO_ABS", "PATHSEG_LINETO_HORIZONTAL_ABS", "PATHSEG_LINETO_HORIZONTAL_REL", "PATHSEG_LINETO_REL", "PATHSEG_LINETO_VERTICAL_ABS", "PATHSEG_LINETO_VERTICAL_REL", "PATHSEG_MOVETO_ABS", "PATHSEG_MOVETO_REL", "PATHSEG_UNKNOWN", "PATH_EXISTS_ERR", "PEAKING", "PERMISSION_DENIED", "PERSISTENT", "PI", "PLAYING_STATE", "POINTS", "POLYGON_OFFSET_FACTOR", "POLYGON_OFFSET_FILL", "POLYGON_OFFSET_UNITS", "POSITION_UNAVAILABLE", "POSITIVE_INFINITY", "PREV", "PREV_NO_DUPLICATE", "PROCESSING_INSTRUCTION_NODE", "PageChangeEvent", "PageTransitionEvent", "PaintRequest", "PaintRequestList", "PannerNode", "Path2D", "Performance", "PerformanceEntry", "PerformanceMark", "PerformanceMeasure", "PerformanceNavigation", "PerformanceResourceTiming", "PerformanceTiming", "PeriodicWave", "Plugin", "PluginArray", "PopStateEvent", "PopupBlockedEvent", "ProcessingInstruction", "ProgressEvent", "Promise", "PropertyNodeList", "Proxy", "PushManager", "PushSubscription", "Q", "QUOTA_ERR", "QUOTA_EXCEEDED_ERR", "QueryInterface", "READ_ONLY", "READ_ONLY_ERR", "READ_WRITE", "RED_BITS", "REMOVAL", "RENDERBUFFER", "RENDERBUFFER_ALPHA_SIZE", "RENDERBUFFER_BINDING", "RENDERBUFFER_BLUE_SIZE", "RENDERBUFFER_DEPTH_SIZE", "RENDERBUFFER_GREEN_SIZE", "RENDERBUFFER_HEIGHT", "RENDERBUFFER_INTERNAL_FORMAT", "RENDERBUFFER_RED_SIZE", "RENDERBUFFER_STENCIL_SIZE", "RENDERBUFFER_WIDTH", "RENDERER", "RENDERING_INTENT_ABSOLUTE_COLORIMETRIC", "RENDERING_INTENT_AUTO", "RENDERING_INTENT_PERCEPTUAL", "RENDERING_INTENT_RELATIVE_COLORIMETRIC", "RENDERING_INTENT_SATURATION", "RENDERING_INTENT_UNKNOWN", "REPEAT", "REPLACE", "RGB", "RGB565", "RGB5_A1", "RGBA", "RGBA4", "RGBColor", "ROTATION_CLOCKWISE", "ROTATION_COUNTERCLOCKWISE", "RTCDataChannelEvent", "RTCIceCandidate", "RTCPeerConnectionIceEvent", "RTCRtpReceiver", "RTCRtpSender", "RTCSessionDescription", "RTCStatsReport", "RadioNodeList", "Range", "RangeError", "RangeException", "RecordErrorEvent", "Rect", "ReferenceError", "RegExp", "Request", "Response", "SAMPLER_2D", "SAMPLER_CUBE", "SAMPLES", "SAMPLE_ALPHA_TO_COVERAGE", "SAMPLE_BUFFERS", "SAMPLE_COVERAGE", "SAMPLE_COVERAGE_INVERT", "SAMPLE_COVERAGE_VALUE", "SAWTOOTH", "SCHEDULED_STATE", "SCISSOR_BOX", "SCISSOR_TEST", "SCROLL_PAGE_DOWN", "SCROLL_PAGE_UP", "SDP_ANSWER", "SDP_OFFER", "SDP_PRANSWER", "SECURITY_ERR", "SELECT", "SERIALIZE_ERR", "SEVERITY_ERROR", "SEVERITY_FATAL_ERROR", "SEVERITY_WARNING", "SHADER_COMPILER", "SHADER_TYPE", "SHADING_LANGUAGE_VERSION", "SHIFT_MASK", "SHORT", "SHOWING", "SHOW_ALL", "SHOW_ATTRIBUTE", "SHOW_CDATA_SECTION", "SHOW_COMMENT", "SHOW_DOCUMENT", "SHOW_DOCUMENT_FRAGMENT", "SHOW_DOCUMENT_TYPE", "SHOW_ELEMENT", "SHOW_ENTITY", "SHOW_ENTITY_REFERENCE", "SHOW_NOTATION", "SHOW_PROCESSING_INSTRUCTION", "SHOW_TEXT", "SINE", "SOUNDFIELD", "SQLException", "SQRT1_2", "SQRT2", "SQUARE", "SRC_ALPHA", "SRC_ALPHA_SATURATE", "SRC_COLOR", "START_TO_END", "START_TO_START", "STATIC_DRAW", "STENCIL_ATTACHMENT", "STENCIL_BACK_FAIL", "STENCIL_BACK_FUNC", "STENCIL_BACK_PASS_DEPTH_FAIL", "STENCIL_BACK_PASS_DEPTH_PASS", "STENCIL_BACK_REF", "STENCIL_BACK_VALUE_MASK", "STENCIL_BACK_WRITEMASK", "STENCIL_BITS", "STENCIL_BUFFER_BIT", "STENCIL_CLEAR_VALUE", "STENCIL_FAIL", "STENCIL_FUNC", "STENCIL_INDEX", "STENCIL_INDEX8", "STENCIL_PASS_DEPTH_FAIL", "STENCIL_PASS_DEPTH_PASS", "STENCIL_REF", "STENCIL_TEST", "STENCIL_VALUE_MASK", "STENCIL_WRITEMASK", "STREAM_DRAW", "STRING_TYPE", "STYLE_RULE", "SUBPIXEL_BITS", "SUPPORTS_RULE", "SVGAElement", "SVGAltGlyphDefElement", "SVGAltGlyphElement", "SVGAltGlyphItemElement", "SVGAngle", "SVGAnimateColorElement", "SVGAnimateElement", "SVGAnimateMotionElement", "SVGAnimateTransformElement", "SVGAnimatedAngle", "SVGAnimatedBoolean", "SVGAnimatedEnumeration", "SVGAnimatedInteger", "SVGAnimatedLength", "SVGAnimatedLengthList", "SVGAnimatedNumber", "SVGAnimatedNumberList", "SVGAnimatedPreserveAspectRatio", "SVGAnimatedRect", "SVGAnimatedString", "SVGAnimatedTransformList", "SVGAnimationElement", "SVGCircleElement", "SVGClipPathElement", "SVGColor", "SVGComponentTransferFunctionElement", "SVGCursorElement", "SVGDefsElement", "SVGDescElement", "SVGDiscardElement", "SVGDocument", "SVGElement", "SVGElementInstance", "SVGElementInstanceList", "SVGEllipseElement", "SVGException", "SVGFEBlendElement", "SVGFEColorMatrixElement", "SVGFEComponentTransferElement", "SVGFECompositeElement", "SVGFEConvolveMatrixElement", "SVGFEDiffuseLightingElement", "SVGFEDisplacementMapElement", "SVGFEDistantLightElement", "SVGFEDropShadowElement", "SVGFEFloodElement", "SVGFEFuncAElement", "SVGFEFuncBElement", "SVGFEFuncGElement", "SVGFEFuncRElement", "SVGFEGaussianBlurElement", "SVGFEImageElement", "SVGFEMergeElement", "SVGFEMergeNodeElement", "SVGFEMorphologyElement", "SVGFEOffsetElement", "SVGFEPointLightElement", "SVGFESpecularLightingElement", "SVGFESpotLightElement", "SVGFETileElement", "SVGFETurbulenceElement", "SVGFilterElement", "SVGFontElement", "SVGFontFaceElement", "SVGFontFaceFormatElement", "SVGFontFaceNameElement", "SVGFontFaceSrcElement", "SVGFontFaceUriElement", "SVGForeignObjectElement", "SVGGElement", "SVGGeometryElement", "SVGGlyphElement", "SVGGlyphRefElement", "SVGGradientElement", "SVGGraphicsElement", "SVGHKernElement", "SVGImageElement", "SVGLength", "SVGLengthList", "SVGLineElement", "SVGLinearGradientElement", "SVGMPathElement", "SVGMarkerElement", "SVGMaskElement", "SVGMatrix", "SVGMetadataElement", "SVGMissingGlyphElement", "SVGNumber", "SVGNumberList", "SVGPaint", "SVGPathElement", "SVGPathSeg", "SVGPathSegArcAbs", "SVGPathSegArcRel", "SVGPathSegClosePath", "SVGPathSegCurvetoCubicAbs", "SVGPathSegCurvetoCubicRel", "SVGPathSegCurvetoCubicSmoothAbs", "SVGPathSegCurvetoCubicSmoothRel", "SVGPathSegCurvetoQuadraticAbs", "SVGPathSegCurvetoQuadraticRel", "SVGPathSegCurvetoQuadraticSmoothAbs", "SVGPathSegCurvetoQuadraticSmoothRel", "SVGPathSegLinetoAbs", "SVGPathSegLinetoHorizontalAbs", "SVGPathSegLinetoHorizontalRel", "SVGPathSegLinetoRel", "SVGPathSegLinetoVerticalAbs", "SVGPathSegLinetoVerticalRel", "SVGPathSegList", "SVGPathSegMovetoAbs", "SVGPathSegMovetoRel", "SVGPatternElement", "SVGPoint", "SVGPointList", "SVGPolygonElement", "SVGPolylineElement", "SVGPreserveAspectRatio", "SVGRadialGradientElement", "SVGRect", "SVGRectElement", "SVGRenderingIntent", "SVGSVGElement", "SVGScriptElement", "SVGSetElement", "SVGStopElement", "SVGStringList", "SVGStyleElement", "SVGSwitchElement", "SVGSymbolElement", "SVGTRefElement", "SVGTSpanElement", "SVGTextContentElement", "SVGTextElement", "SVGTextPathElement", "SVGTextPositioningElement", "SVGTitleElement", "SVGTransform", "SVGTransformList", "SVGUnitTypes", "SVGUseElement", "SVGVKernElement", "SVGViewElement", "SVGViewSpec", "SVGZoomAndPan", "SVGZoomEvent", "SVG_ANGLETYPE_DEG", "SVG_ANGLETYPE_GRAD", "SVG_ANGLETYPE_RAD", "SVG_ANGLETYPE_UNKNOWN", "SVG_ANGLETYPE_UNSPECIFIED", "SVG_CHANNEL_A", "SVG_CHANNEL_B", "SVG_CHANNEL_G", "SVG_CHANNEL_R", "SVG_CHANNEL_UNKNOWN", "SVG_COLORTYPE_CURRENTCOLOR", "SVG_COLORTYPE_RGBCOLOR", "SVG_COLORTYPE_RGBCOLOR_ICCCOLOR", "SVG_COLORTYPE_UNKNOWN", "SVG_EDGEMODE_DUPLICATE", "SVG_EDGEMODE_NONE", "SVG_EDGEMODE_UNKNOWN", "SVG_EDGEMODE_WRAP", "SVG_FEBLEND_MODE_COLOR", "SVG_FEBLEND_MODE_COLOR_BURN", "SVG_FEBLEND_MODE_COLOR_DODGE", "SVG_FEBLEND_MODE_DARKEN", "SVG_FEBLEND_MODE_DIFFERENCE", "SVG_FEBLEND_MODE_EXCLUSION", "SVG_FEBLEND_MODE_HARD_LIGHT", "SVG_FEBLEND_MODE_HUE", "SVG_FEBLEND_MODE_LIGHTEN", "SVG_FEBLEND_MODE_LUMINOSITY", "SVG_FEBLEND_MODE_MULTIPLY", "SVG_FEBLEND_MODE_NORMAL", "SVG_FEBLEND_MODE_OVERLAY", "SVG_FEBLEND_MODE_SATURATION", "SVG_FEBLEND_MODE_SCREEN", "SVG_FEBLEND_MODE_SOFT_LIGHT", "SVG_FEBLEND_MODE_UNKNOWN", "SVG_FECOLORMATRIX_TYPE_HUEROTATE", "SVG_FECOLORMATRIX_TYPE_LUMINANCETOALPHA", "SVG_FECOLORMATRIX_TYPE_MATRIX", "SVG_FECOLORMATRIX_TYPE_SATURATE", "SVG_FECOLORMATRIX_TYPE_UNKNOWN", "SVG_FECOMPONENTTRANSFER_TYPE_DISCRETE", "SVG_FECOMPONENTTRANSFER_TYPE_GAMMA", "SVG_FECOMPONENTTRANSFER_TYPE_IDENTITY", "SVG_FECOMPONENTTRANSFER_TYPE_LINEAR", "SVG_FECOMPONENTTRANSFER_TYPE_TABLE", "SVG_FECOMPONENTTRANSFER_TYPE_UNKNOWN", "SVG_FECOMPOSITE_OPERATOR_ARITHMETIC", "SVG_FECOMPOSITE_OPERATOR_ATOP", "SVG_FECOMPOSITE_OPERATOR_IN", "SVG_FECOMPOSITE_OPERATOR_OUT", "SVG_FECOMPOSITE_OPERATOR_OVER", "SVG_FECOMPOSITE_OPERATOR_UNKNOWN", "SVG_FECOMPOSITE_OPERATOR_XOR", "SVG_INVALID_VALUE_ERR", "SVG_LENGTHTYPE_CM", "SVG_LENGTHTYPE_EMS", "SVG_LENGTHTYPE_EXS", "SVG_LENGTHTYPE_IN", "SVG_LENGTHTYPE_MM", "SVG_LENGTHTYPE_NUMBER", "SVG_LENGTHTYPE_PC", "SVG_LENGTHTYPE_PERCENTAGE", "SVG_LENGTHTYPE_PT", "SVG_LENGTHTYPE_PX", "SVG_LENGTHTYPE_UNKNOWN", "SVG_MARKERUNITS_STROKEWIDTH", "SVG_MARKERUNITS_UNKNOWN", "SVG_MARKERUNITS_USERSPACEONUSE", "SVG_MARKER_ORIENT_ANGLE", "SVG_MARKER_ORIENT_AUTO", "SVG_MARKER_ORIENT_UNKNOWN", "SVG_MASKTYPE_ALPHA", "SVG_MASKTYPE_LUMINANCE", "SVG_MATRIX_NOT_INVERTABLE", "SVG_MEETORSLICE_MEET", "SVG_MEETORSLICE_SLICE", "SVG_MEETORSLICE_UNKNOWN", "SVG_MORPHOLOGY_OPERATOR_DILATE", "SVG_MORPHOLOGY_OPERATOR_ERODE", "SVG_MORPHOLOGY_OPERATOR_UNKNOWN", "SVG_PAINTTYPE_CURRENTCOLOR", "SVG_PAINTTYPE_NONE", "SVG_PAINTTYPE_RGBCOLOR", "SVG_PAINTTYPE_RGBCOLOR_ICCCOLOR", "SVG_PAINTTYPE_UNKNOWN", "SVG_PAINTTYPE_URI", "SVG_PAINTTYPE_URI_CURRENTCOLOR", "SVG_PAINTTYPE_URI_NONE", "SVG_PAINTTYPE_URI_RGBCOLOR", "SVG_PAINTTYPE_URI_RGBCOLOR_ICCCOLOR", "SVG_PRESERVEASPECTRATIO_NONE", "SVG_PRESERVEASPECTRATIO_UNKNOWN", "SVG_PRESERVEASPECTRATIO_XMAXYMAX", "SVG_PRESERVEASPECTRATIO_XMAXYMID", "SVG_PRESERVEASPECTRATIO_XMAXYMIN", "SVG_PRESERVEASPECTRATIO_XMIDYMAX", "SVG_PRESERVEASPECTRATIO_XMIDYMID", "SVG_PRESERVEASPECTRATIO_XMIDYMIN", "SVG_PRESERVEASPECTRATIO_XMINYMAX", "SVG_PRESERVEASPECTRATIO_XMINYMID", "SVG_PRESERVEASPECTRATIO_XMINYMIN", "SVG_SPREADMETHOD_PAD", "SVG_SPREADMETHOD_REFLECT", "SVG_SPREADMETHOD_REPEAT", "SVG_SPREADMETHOD_UNKNOWN", "SVG_STITCHTYPE_NOSTITCH", "SVG_STITCHTYPE_STITCH", "SVG_STITCHTYPE_UNKNOWN", "SVG_TRANSFORM_MATRIX", "SVG_TRANSFORM_ROTATE", "SVG_TRANSFORM_SCALE", "SVG_TRANSFORM_SKEWX", "SVG_TRANSFORM_SKEWY", "SVG_TRANSFORM_TRANSLATE", "SVG_TRANSFORM_UNKNOWN", "SVG_TURBULENCE_TYPE_FRACTALNOISE", "SVG_TURBULENCE_TYPE_TURBULENCE", "SVG_TURBULENCE_TYPE_UNKNOWN", "SVG_UNIT_TYPE_OBJECTBOUNDINGBOX", "SVG_UNIT_TYPE_UNKNOWN", "SVG_UNIT_TYPE_USERSPACEONUSE", "SVG_WRONG_TYPE_ERR", "SVG_ZOOMANDPAN_DISABLE", "SVG_ZOOMANDPAN_MAGNIFY", "SVG_ZOOMANDPAN_UNKNOWN", "SYNTAX_ERR", "SavedPages", "Screen", "ScreenOrientation", "Script", "ScriptProcessorNode", "ScrollAreaEvent", "SecurityPolicyViolationEvent", "Selection", "ServiceWorker", "ServiceWorkerContainer", "ServiceWorkerRegistration", "SessionDescription", "Set", "ShadowRoot", "SharedWorker", "SimpleGestureEvent", "SpeechSynthesisEvent", "SpeechSynthesisUtterance", "StopIteration", "Storage", "StorageEvent", "String", "StyleSheet", "StyleSheetList", "SubtleCrypto", "Symbol", "SyntaxError", "TEMPORARY", "TEXTPATH_METHODTYPE_ALIGN", "TEXTPATH_METHODTYPE_STRETCH", "TEXTPATH_METHODTYPE_UNKNOWN", "TEXTPATH_SPACINGTYPE_AUTO", "TEXTPATH_SPACINGTYPE_EXACT", "TEXTPATH_SPACINGTYPE_UNKNOWN", "TEXTURE", "TEXTURE0", "TEXTURE1", "TEXTURE10", "TEXTURE11", "TEXTURE12", "TEXTURE13", "TEXTURE14", "TEXTURE15", "TEXTURE16", "TEXTURE17", "TEXTURE18", "TEXTURE19", "TEXTURE2", "TEXTURE20", "TEXTURE21", "TEXTURE22", "TEXTURE23", "TEXTURE24", "TEXTURE25", "TEXTURE26", "TEXTURE27", "TEXTURE28", "TEXTURE29", "TEXTURE3", "TEXTURE30", "TEXTURE31", "TEXTURE4", "TEXTURE5", "TEXTURE6", "TEXTURE7", "TEXTURE8", "TEXTURE9", "TEXTURE_2D", "TEXTURE_BINDING_2D", "TEXTURE_BINDING_CUBE_MAP", "TEXTURE_CUBE_MAP", "TEXTURE_CUBE_MAP_NEGATIVE_X", "TEXTURE_CUBE_MAP_NEGATIVE_Y", "TEXTURE_CUBE_MAP_NEGATIVE_Z", "TEXTURE_CUBE_MAP_POSITIVE_X", "TEXTURE_CUBE_MAP_POSITIVE_Y", "TEXTURE_CUBE_MAP_POSITIVE_Z", "TEXTURE_MAG_FILTER", "TEXTURE_MAX_ANISOTROPY_EXT", "TEXTURE_MIN_FILTER", "TEXTURE_WRAP_S", "TEXTURE_WRAP_T", "TEXT_NODE", "TIMEOUT", "TIMEOUT_ERR", "TOO_LARGE_ERR", "TRANSACTION_INACTIVE_ERR", "TRIANGLE", "TRIANGLES", "TRIANGLE_FAN", "TRIANGLE_STRIP", "TYPE_BACK_FORWARD", "TYPE_ERR", "TYPE_MISMATCH_ERR", "TYPE_NAVIGATE", "TYPE_RELOAD", "TYPE_RESERVED", "Text", "TextDecoder", "TextEncoder", "TextEvent", "TextMetrics", "TextTrack", "TextTrackCue", "TextTrackCueList", "TextTrackList", "TimeEvent", "TimeRanges", "Touch", "TouchEvent", "TouchList", "TrackEvent", "TransitionEvent", "TreeWalker", "TypeError", "UIEvent", "UNCACHED", "UNKNOWN_ERR", "UNKNOWN_RULE", "UNMASKED_RENDERER_WEBGL", "UNMASKED_VENDOR_WEBGL", "UNORDERED_NODE_ITERATOR_TYPE", "UNORDERED_NODE_SNAPSHOT_TYPE", "UNPACK_ALIGNMENT", "UNPACK_COLORSPACE_CONVERSION_WEBGL", "UNPACK_FLIP_Y_WEBGL", "UNPACK_PREMULTIPLY_ALPHA_WEBGL", "UNSCHEDULED_STATE", "UNSENT", "UNSIGNED_BYTE", "UNSIGNED_INT", "UNSIGNED_SHORT", "UNSIGNED_SHORT_4_4_4_4", "UNSIGNED_SHORT_5_5_5_1", "UNSIGNED_SHORT_5_6_5", "UNSPECIFIED_EVENT_TYPE_ERR", "UPDATEREADY", "URIError", "URL", "URLSearchParams", "URLUnencoded", "URL_MISMATCH_ERR", "UTC", "Uint16Array", "Uint32Array", "Uint8Array", "Uint8ClampedArray", "UserMessageHandler", "UserMessageHandlersNamespace", "UserProximityEvent", "VALIDATE_STATUS", "VALIDATION_ERR", "VARIABLES_RULE", "VENDOR", "VERSION", "VERSION_CHANGE", "VERSION_ERR", "VERTEX_ATTRIB_ARRAY_BUFFER_BINDING", "VERTEX_ATTRIB_ARRAY_DIVISOR_ANGLE", "VERTEX_ATTRIB_ARRAY_ENABLED", "VERTEX_ATTRIB_ARRAY_NORMALIZED", "VERTEX_ATTRIB_ARRAY_POINTER", "VERTEX_ATTRIB_ARRAY_SIZE", "VERTEX_ATTRIB_ARRAY_STRIDE", "VERTEX_ATTRIB_ARRAY_TYPE", "VERTEX_SHADER", "VERTICAL", "VERTICAL_AXIS", "VER_ERR", "VIEWPORT", "VIEWPORT_RULE", "VTTCue", "VTTRegion", "ValidityState", "VideoStreamTrack", "WEBKIT_FILTER_RULE", "WEBKIT_KEYFRAMES_RULE", "WEBKIT_KEYFRAME_RULE", "WEBKIT_REGION_RULE", "WRONG_DOCUMENT_ERR", "WaveShaperNode", "WeakMap", "WeakSet", "WebGLActiveInfo", "WebGLBuffer", "WebGLContextEvent", "WebGLFramebuffer", "WebGLProgram", "WebGLRenderbuffer", "WebGLRenderingContext", "WebGLShader", "WebGLShaderPrecisionFormat", "WebGLTexture", "WebGLUniformLocation", "WebGLVertexArray", "WebKitAnimationEvent", "WebKitBlobBuilder", "WebKitCSSFilterRule", "WebKitCSSFilterValue", "WebKitCSSKeyframeRule", "WebKitCSSKeyframesRule", "WebKitCSSMatrix", "WebKitCSSRegionRule", "WebKitCSSTransformValue", "WebKitDataCue", "WebKitGamepad", "WebKitMediaKeyError", "WebKitMediaKeyMessageEvent", "WebKitMediaKeySession", "WebKitMediaKeys", "WebKitMediaSource", "WebKitMutationObserver", "WebKitNamespace", "WebKitPlaybackTargetAvailabilityEvent", "WebKitPoint", "WebKitShadowRoot", "WebKitSourceBuffer", "WebKitSourceBufferList", "WebKitTransitionEvent", "WebSocket", "WheelEvent", "Window", "Worker", "XMLDocument", "XMLHttpRequest", "XMLHttpRequestEventTarget", "XMLHttpRequestException", "XMLHttpRequestProgressEvent", "XMLHttpRequestUpload", "XMLSerializer", "XMLStylesheetProcessingInstruction", "XPathEvaluator", "XPathException", "XPathExpression", "XPathNSResolver", "XPathResult", "XSLTProcessor", "ZERO", "_XD0M_", "_YD0M_", "__defineGetter__", "__defineSetter__", "__lookupGetter__", "__lookupSetter__", "__opera", "__proto__", "_browserjsran", "a", "aLink", "abbr", "abort", "abs", "absolute", "acceleration", "accelerationIncludingGravity", "accelerator", "accept", "acceptCharset", "acceptNode", "accessKey", "accessKeyLabel", "accuracy", "acos", "acosh", "action", "actionURL", "active", "activeCues", "activeElement", "activeSourceBuffers", "activeSourceCount", "activeTexture", "add", "addBehavior", "addCandidate", "addColorStop", "addCue", "addElement", "addEventListener", "addFilter", "addFromString", "addFromUri", "addIceCandidate", "addImport", "addListener", "addNamed", "addPageRule", "addPath", "addPointer", "addRange", "addRegion", "addRule", "addSearchEngine", "addSourceBuffer", "addStream", "addTextTrack", "addTrack", "addWakeLockListener", "addedNodes", "additionalName", "additiveSymbols", "addons", "adoptNode", "adr", "advance", "alert", "algorithm", "align", "align-content", "align-items", "align-self", "alignContent", "alignItems", "alignSelf", "alignmentBaseline", "alinkColor", "all", "allSettled", "allowFullscreen", "allowedDirections", "alpha", "alt", "altGraphKey", "altHtml", "altKey", "altLeft", "altitude", "altitudeAccuracy", "amplitude", "ancestorOrigins", "anchor", "anchorNode", "anchorOffset", "anchors", "angle", "animVal", "animate", "animatedInstanceRoot", "animatedNormalizedPathSegList", "animatedPathSegList", "animatedPoints", "animation", "animation-delay", "animation-direction", "animation-duration", "animation-fill-mode", "animation-iteration-count", "animation-name", "animation-play-state", "animation-timing-function", "animationDelay", "animationDirection", "animationDuration", "animationFillMode", "animationIterationCount", "animationName", "animationPlayState", "animationStartTime", "animationTimingFunction", "animationsPaused", "anniversary", "any", "app", "appCodeName", "appMinorVersion", "appName", "appNotifications", "appVersion", "append", "appendBuffer", "appendChild", "appendData", "appendItem", "appendMedium", "appendNamed", "appendRule", "appendStream", "appendWindowEnd", "appendWindowStart", "applets", "applicationCache", "apply", "applyElement", "arc", "arcTo", "archive", "areas", "arguments", "arrayBuffer", "asin", "asinh", "assert", "assign", "async", "atEnd", "atan", "atan2", "atanh", "atob", "attachEvent", "attachShader", "attachShadow", "attachments", "attack", "attrChange", "attrName", "attributeFilter", "attributeName", "attributeNamespace", "attributeOldValue", "attributes", "audioTracks", "autoIncrement", "autobuffer", "autocapitalize", "autocomplete", "autocorrect", "autofocus", "autoplay", "availHeight", "availLeft", "availTop", "availWidth", "availability", "available", "aversion", "axes", "axis", "azimuth", "b", "back", "backface-visibility", "backfaceVisibility", "background", "background-attachment", "background-blend-mode", "background-clip", "background-color", "background-image", "background-origin", "background-position", "background-repeat", "background-size", "backgroundAttachment", "backgroundBlendMode", "backgroundClip", "backgroundColor", "backgroundImage", "backgroundOrigin", "backgroundPosition", "backgroundPositionX", "backgroundPositionY", "backgroundRepeat", "backgroundSize", "badInput", "balance", "baseFrequencyX", "baseFrequencyY", "baseNode", "baseOffset", "baseURI", "baseVal", "baselineShift", "battery", "bday", "beginElement", "beginElementAt", "beginPath", "behavior", "behaviorCookie", "behaviorPart", "behaviorUrns", "beta", "bezierCurveTo", "bgColor", "bgProperties", "bias", "big", "binaryType", "bind", "bindAttribLocation", "bindBuffer", "bindFramebuffer", "bindRenderbuffer", "bindTexture", "blendColor", "blendEquation", "blendEquationSeparate", "blendFunc", "blendFuncSeparate", "blink", "blob", "blockDirection", "blue", "blur", "body", "bodyUsed", "bold", "bookmarks", "booleanValue", "border", "border-bottom", "border-bottom-color", "border-bottom-left-radius", "border-bottom-right-radius", "border-bottom-style", "border-bottom-width", "border-collapse", "border-color", "border-image", "border-image-outset", "border-image-repeat", "border-image-slice", "border-image-source", "border-image-width", "border-left", "border-left-color", "border-left-style", "border-left-width", "border-radius", "border-right", "border-right-color", "border-right-style", "border-right-width", "border-spacing", "border-style", "border-top", "border-top-color", "border-top-left-radius", "border-top-right-radius", "border-top-style", "border-top-width", "border-width", "borderBottom", "borderBottomColor", "borderBottomLeftRadius", "borderBottomRightRadius", "borderBottomStyle", "borderBottomWidth", "borderCollapse", "borderColor", "borderColorDark", "borderColorLight", "borderImage", "borderImageOutset", "borderImageRepeat", "borderImageSlice", "borderImageSource", "borderImageWidth", "borderLeft", "borderLeftColor", "borderLeftStyle", "borderLeftWidth", "borderRadius", "borderRight", "borderRightColor", "borderRightStyle", "borderRightWidth", "borderSpacing", "borderStyle", "borderTop", "borderTopColor", "borderTopLeftRadius", "borderTopRightRadius", "borderTopStyle", "borderTopWidth", "borderWidth", "bottom", "bottomMargin", "bound", "boundElements", "boundingClientRect", "boundingHeight", "boundingLeft", "boundingTop", "boundingWidth", "bounds", "box-decoration-break", "box-shadow", "box-sizing", "boxDecorationBreak", "boxShadow", "boxSizing", "breakAfter", "breakBefore", "breakInside", "browserLanguage", "btoa", "bubbles", "buffer", "bufferData", "bufferDepth", "bufferSize", "bufferSubData", "buffered", "bufferedAmount", "buildID", "buildNumber", "button", "buttonID", "buttons", "byteLength", "byteOffset", "c", "call", "caller", "canBeFormatted", "canBeMounted", "canBeShared", "canHaveChildren", "canHaveHTML", "canPlayType", "cancel", "cancelAnimationFrame", "cancelBubble", "cancelScheduledValues", "cancelable", "candidate", "canvas", "caption", "caption-side", "captionSide", "capture", "captureEvents", "captureStackTrace", "caretPositionFromPoint", "caretRangeFromPoint", "cast", "catch", "category", "cbrt", "cd", "ceil", "cellIndex", "cellPadding", "cellSpacing", "cells", "ch", "chOff", "chain", "challenge", "changedTouches", "channel", "channelCount", "channelCountMode", "channelInterpretation", "char", "charAt", "charCode", "charCodeAt", "charIndex", "characterData", "characterDataOldValue", "characterSet", "charging", "chargingTime", "charset", "checkEnclosure", "checkFramebufferStatus", "checkIntersection", "checkValidity", "checked", "childElementCount", "childList", "childNodes", "children", "chrome", "ciphertext", "cite", "classList", "className", "classid", "clear", "clearAttributes", "clearColor", "clearData", "clearDepth", "clearImmediate", "clearInterval", "clearMarks", "clearMeasures", "clearParameters", "clearRect", "clearResourceTimings", "clearShadow", "clearStencil", "clearTimeout", "clearWatch", "click", "clickCount", "clientHeight", "clientInformation", "clientLeft", "clientRect", "clientRects", "clientTop", "clientWidth", "clientX", "clientY", "clip", "clip-path", "clip-rule", "clipBottom", "clipLeft", "clipPath", "clipPathUnits", "clipRight", "clipRule", "clipTop", "clipboardData", "clone", "cloneContents", "cloneNode", "cloneRange", "close", "closePath", "closed", "closest", "clz", "clz32", "cmp", "code", "codeBase", "codePointAt", "codeType", "colSpan", "collapse", "collapseToEnd", "collapseToStart", "collapsed", "collect", "colno", "color", "color-interpolation", "color-interpolation-filters", "colorDepth", "colorInterpolation", "colorInterpolationFilters", "colorMask", "colorType", "cols", "columnCount", "columnFill", "columnGap", "columnNumber", "columnRule", "columnRuleColor", "columnRuleStyle", "columnRuleWidth", "columnSpan", "columnWidth", "columns", "command", "commitPreferences", "commonAncestorContainer", "compact", "compareBoundaryPoints", "compareDocumentPosition", "compareEndPoints", "compareNode", "comparePoint", "compatMode", "compatible", "compile", "compileShader", "complete", "componentFromPoint", "compositionEndOffset", "compositionStartOffset", "compressedTexImage2D", "compressedTexSubImage2D", "concat", "conditionText", "coneInnerAngle", "coneOuterAngle", "coneOuterGain", "confirm", "confirmComposition", "confirmSiteSpecificTrackingException", "confirmWebWideTrackingException", "connect", "connectEnd", "connectStart", "connected", "connection", "connectionSpeed", "console", "consolidate", "constrictionActive", "constructor", "contactID", "contains", "containsNode", "content", "contentDocument", "contentEditable", "contentOverflow", "contentScriptType", "contentStyleType", "contentType", "contentWindow", "context", "contextMenu", "contextmenu", "continue", "continuous", "control", "controller", "controls", "convertToSpecifiedUnits", "cookie", "cookieEnabled", "coords", "copyFromChannel", "copyTexImage2D", "copyTexSubImage2D", "copyToChannel", "copyWithin", "correspondingElement", "correspondingUseElement", "cos", "cosh", "count", "counter-increment", "counter-reset", "counterIncrement", "counterReset", "cpuClass", "cpuSleepAllowed", "create", "createAnalyser", "createAnswer", "createAttribute", "createAttributeNS", "createBiquadFilter", "createBuffer", "createBufferSource", "createCDATASection", "createCSSStyleSheet", "createCaption", "createChannelMerger", "createChannelSplitter", "createComment", "createContextualFragment", "createControlRange", "createConvolver", "createDTMFSender", "createDataChannel", "createDelay", "createDelayNode", "createDocument", "createDocumentFragment", "createDocumentType", "createDynamicsCompressor", "createElement", "createElementNS", "createEntityReference", "createEvent", "createEventObject", "createExpression", "createFramebuffer", "createFunction", "createGain", "createGainNode", "createHTMLDocument", "createImageBitmap", "createImageData", "createIndex", "createJavaScriptNode", "createLinearGradient", "createMediaElementSource", "createMediaKeys", "createMediaStreamDestination", "createMediaStreamSource", "createMutableFile", "createNSResolver", "createNodeIterator", "createNotification", "createObjectStore", "createObjectURL", "createOffer", "createOscillator", "createPanner", "createPattern", "createPeriodicWave", "createPopup", "createProcessingInstruction", "createProgram", "createRadialGradient", "createRange", "createRangeCollection", "createRenderbuffer", "createSVGAngle", "createSVGLength", "createSVGMatrix", "createSVGNumber", "createSVGPathSegArcAbs", "createSVGPathSegArcRel", "createSVGPathSegClosePath", "createSVGPathSegCurvetoCubicAbs", "createSVGPathSegCurvetoCubicRel", "createSVGPathSegCurvetoCubicSmoothAbs", "createSVGPathSegCurvetoCubicSmoothRel", "createSVGPathSegCurvetoQuadraticAbs", "createSVGPathSegCurvetoQuadraticRel", "createSVGPathSegCurvetoQuadraticSmoothAbs", "createSVGPathSegCurvetoQuadraticSmoothRel", "createSVGPathSegLinetoAbs", "createSVGPathSegLinetoHorizontalAbs", "createSVGPathSegLinetoHorizontalRel", "createSVGPathSegLinetoRel", "createSVGPathSegLinetoVerticalAbs", "createSVGPathSegLinetoVerticalRel", "createSVGPathSegMovetoAbs", "createSVGPathSegMovetoRel", "createSVGPoint", "createSVGRect", "createSVGTransform", "createSVGTransformFromMatrix", "createScriptProcessor", "createSession", "createShader", "createShadowRoot", "createStereoPanner", "createStyleSheet", "createTBody", "createTFoot", "createTHead", "createTextNode", "createTextRange", "createTexture", "createTouch", "createTouchList", "createTreeWalker", "createWaveShaper", "creationTime", "crossOrigin", "crypto", "csi", "cssFloat", "cssRules", "cssText", "cssValueType", "ctrlKey", "ctrlLeft", "cues", "cullFace", "currentNode", "currentPage", "currentScale", "currentScript", "currentSrc", "currentState", "currentStyle", "currentTarget", "currentTime", "currentTranslate", "currentView", "cursor", "curve", "customError", "cx", "cy", "d", "data", "dataFld", "dataFormatAs", "dataPageSize", "dataSrc", "dataTransfer", "database", "dataset", "dateTime", "db", "debug", "debuggerEnabled", "declare", "decode", "decodeAudioData", "decodeURI", "decodeURIComponent", "decodingInfo", "decrypt", "default", "defaultCharset", "defaultChecked", "defaultMuted", "defaultPlaybackRate", "defaultPrevented", "defaultSelected", "defaultStatus", "defaultURL", "defaultValue", "defaultView", "defaultstatus", "defer", "defineMagicFunction", "defineMagicVariable", "defineProperties", "defineProperty", "delayTime", "delete", "deleteBuffer", "deleteCaption", "deleteCell", "deleteContents", "deleteData", "deleteDatabase", "deleteFramebuffer", "deleteFromDocument", "deleteIndex", "deleteMedium", "deleteObjectStore", "deleteProgram", "deleteRenderbuffer", "deleteRow", "deleteRule", "deleteShader", "deleteTFoot", "deleteTHead", "deleteTexture", "deliverChangeRecords", "delivery", "deliveryInfo", "deliveryStatus", "deliveryTimestamp", "delta", "deltaMode", "deltaX", "deltaY", "deltaZ", "depthFunc", "depthMask", "depthRange", "deriveBits", "deriveKey", "description", "deselectAll", "designMode", "destination", "destinationURL", "detach", "detachEvent", "detachShader", "detail", "detune", "devicePixelRatio", "deviceXDPI", "deviceYDPI", "diffuseConstant", "digest", "dimensions", "dir", "dirName", "direction", "dirxml", "disable", "disableVertexAttribArray", "disabled", "dischargingTime", "disconnect", "dispatchEvent", "display", "distanceModel", "divisor", "djsapi", "djsproxy", "doImport", "doNotTrack", "doScroll", "doctype", "document", "documentElement", "documentMode", "documentURI", "dolphin", "dolphinGameCenter", "dolphininfo", "dolphinmeta", "domComplete", "domContentLoadedEventEnd", "domContentLoadedEventStart", "domInteractive", "domLoading", "domain", "domainLookupEnd", "domainLookupStart", "dominant-baseline", "dominantBaseline", "done", "dopplerFactor", "download", "dragDrop", "draggable", "drawArrays", "drawArraysInstancedANGLE", "drawCustomFocusRing", "drawElements", "drawElementsInstancedANGLE", "drawFocusIfNeeded", "drawImage", "drawImageFromRect", "drawSystemFocusRing", "drawingBufferHeight", "drawingBufferWidth", "dropEffect", "droppedVideoFrames", "dropzone", "dump", "duplicate", "duration", "dvname", "dvnum", "dx", "dy", "dynsrc", "e", "edgeMode", "effectAllowed", "elapsedTime", "elementFromPoint", "elements", "elevation", "ellipse", "email", "embeds", "empty", "empty-cells", "emptyCells", "enable", "enableBackground", "enableStyleSheetsForSet", "enableVertexAttribArray", "enabled", "enabledPlugin", "encode", "encodeURI", "encodeURIComponent", "encoding", "encrypt", "enctype", "end", "endContainer", "endElement", "endElementAt", "endOfStream", "endOffset", "endTime", "ended", "endsWith", "entities", "entries", "entryType", "enumerate", "enumerateEditable", "error", "errorCode", "escape", "eval", "evaluate", "event", "eventPhase", "every", "exception", "exec", "execCommand", "execCommandShowHelp", "execScript", "exitFullscreen", "exitPointerLock", "exp", "expand", "expandEntityReferences", "expando", "expansion", "expiryDate", "explicitOriginalTarget", "expm1", "exponent", "exponentialRampToValueAtTime", "exportKey", "extend", "extensions", "extentNode", "extentOffset", "external", "externalResourcesRequired", "extractContents", "extractable", "f", "face", "factoryReset", "fallback", "familyName", "farthestViewportElement", "fastSeek", "fatal", "fetch", "fetchStart", "fftSize", "fgColor", "fileCreatedDate", "fileHandle", "fileModifiedDate", "fileName", "fileSize", "fileUpdatedDate", "filename", "files", "fill", "fill-opacity", "fill-rule", "fillOpacity", "fillRect", "fillRule", "fillStyle", "fillText", "filter", "filterResX", "filterResY", "filterUnits", "filters", "finally", "find", "findIndex", "findRule", "findText", "finish", "fireEvent", "firstChild", "firstElementChild", "firstPage", "fixed", "flex", "flex-basis", "flex-direction", "flex-flow", "flex-grow", "flex-shrink", "flex-wrap", "flexBasis", "flexDirection", "flexFlow", "flexGrow", "flexShrink", "flexWrap", "flipX", "flipY", "float", "flood-color", "flood-opacity", "floodColor", "floodOpacity", "floor", "flush", "focus", "focusNode", "focusOffset", "font", "font-family", "font-feature-settings", "font-kerning", "font-language-override", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-synthesis", "font-variant", "font-variant-alternates", "font-variant-caps", "font-variant-east-asian", "font-variant-ligatures", "font-variant-numeric", "font-variant-position", "font-weight", "fontFamily", "fontFeatureSettings", "fontKerning", "fontLanguageOverride", "fontSize", "fontSizeAdjust", "fontSmoothingEnabled", "fontStretch", "fontStyle", "fontSynthesis", "fontVariant", "fontVariantAlternates", "fontVariantCaps", "fontVariantEastAsian", "fontVariantLigatures", "fontVariantNumeric", "fontVariantPosition", "fontWeight", "fontcolor", "fonts", "fontsize", "for", "forEach", "forceRedraw", "form", "formAction", "formEnctype", "formMethod", "formNoValidate", "formTarget", "format", "formatToParts", "forms", "forward", "fr", "frame", "frameBorder", "frameElement", "frameSpacing", "framebufferRenderbuffer", "framebufferTexture2D", "frames", "freeSpace", "freeze", "frequency", "frequencyBinCount", "from", "fromCharCode", "fromCodePoint", "fromElement", "frontFace", "fround", "fullScreen", "fullscreenElement", "fullscreenEnabled", "fx", "fy", "gain", "gamepad", "gamma", "genderIdentity", "generateKey", "generateMipmap", "generateRequest", "geolocation", "gestureObject", "get", "getActiveAttrib", "getActiveUniform", "getAdjacentText", "getAll", "getAllResponseHeaders", "getAsFile", "getAsString", "getAttachedShaders", "getAttribLocation", "getAttribute", "getAttributeNS", "getAttributeNode", "getAttributeNodeNS", "getAudioTracks", "getBBox", "getBattery", "getBlob", "getBookmark", "getBoundingClientRect", "getBufferParameter", "getByteFrequencyData", "getByteTimeDomainData", "getCSSCanvasContext", "getCTM", "getCandidateWindowClientRect", "getChannelData", "getCharNumAtPosition", "getClientRect", "getClientRects", "getCompositionAlternatives", "getComputedStyle", "getComputedTextLength", "getConfiguration", "getContext", "getContextAttributes", "getCounterValue", "getCueAsHTML", "getCueById", "getCurrentPosition", "getCurrentTime", "getData", "getDatabaseNames", "getDate", "getDay", "getDefaultComputedStyle", "getDestinationInsertionPoints", "getDistributedNodes", "getEditable", "getElementById", "getElementsByClassName", "getElementsByName", "getElementsByTagName", "getElementsByTagNameNS", "getEnclosureList", "getEndPositionOfChar", "getEntries", "getEntriesByName", "getEntriesByType", "getError", "getExtension", "getExtentOfChar", "getFeature", "getFile", "getFloat32", "getFloat64", "getFloatFrequencyData", "getFloatTimeDomainData", "getFloatValue", "getFramebufferAttachmentParameter", "getFrequencyResponse", "getFullYear", "getGamepads", "getHours", "getImageData", "getInt16", "getInt32", "getInt8", "getIntersectionList", "getItem", "getItems", "getKey", "getLineDash", "getLocalStreams", "getMarks", "getMatchedCSSRules", "getMeasures", "getMetadata", "getMilliseconds", "getMinutes", "getModifierState", "getMonth", "getNamedItem", "getNamedItemNS", "getNotifier", "getNumberOfChars", "getOverrideHistoryNavigationMode", "getOverrideStyle", "getOwnPropertyDescriptor", "getOwnPropertyNames", "getOwnPropertySymbols", "getParameter", "getPathSegAtLength", "getPointAtLength", "getPreference", "getPreferenceDefault", "getPresentationAttribute", "getPreventDefault", "getProgramInfoLog", "getProgramParameter", "getPropertyCSSValue", "getPropertyPriority", "getPropertyShorthand", "getPropertyValue", "getPrototypeOf", "getRGBColorValue", "getRandomValues", "getRangeAt", "getReceivers", "getRectValue", "getRegistration", "getRemoteStreams", "getRenderbufferParameter", "getResponseHeader", "getRoot", "getRotationOfChar", "getSVGDocument", "getScreenCTM", "getSeconds", "getSelection", "getSenders", "getShaderInfoLog", "getShaderParameter", "getShaderPrecisionFormat", "getShaderSource", "getSimpleDuration", "getSiteIcons", "getSources", "getSpeculativeParserUrls", "getStartPositionOfChar", "getStartTime", "getStats", "getStorageUpdates", "getStreamById", "getStringValue", "getSubStringLength", "getSubscription", "getSupportedExtensions", "getTexParameter", "getTime", "getTimezoneOffset", "getTotalLength", "getTrackById", "getTracks", "getTransformToElement", "getUTCDate", "getUTCDay", "getUTCFullYear", "getUTCHours", "getUTCMilliseconds", "getUTCMinutes", "getUTCMonth", "getUTCSeconds", "getUint16", "getUint32", "getUint8", "getUniform", "getUniformLocation", "getUserMedia", "getValues", "getVarDate", "getVariableValue", "getVertexAttrib", "getVertexAttribOffset", "getVideoPlaybackQuality", "getVideoTracks", "getWakeLockState", "getYear", "givenName", "global", "globalAlpha", "globalCompositeOperation", "glyphOrientationHorizontal", "glyphOrientationVertical", "glyphRef", "go", "gradientTransform", "gradientUnits", "grammars", "green", "group", "groupCollapsed", "groupEnd", "hardwareConcurrency", "has", "hasAttribute", "hasAttributeNS", "hasAttributes", "hasChildNodes", "hasComposition", "hasExtension", "hasFeature", "hasFocus", "hasLayout", "hasOwnProperty", "hash", "head", "headers", "heading", "height", "hidden", "hide", "hideFocus", "high", "hint", "history", "honorificPrefix", "honorificSuffix", "horizontalOverflow", "host", "hostname", "href", "hreflang", "hspace", "html5TagCheckInerface", "htmlFor", "htmlText", "httpEquiv", "hwTimestamp", "hypot", "iccId", "iceConnectionState", "iceGatheringState", "icon", "id", "identifier", "identity", "ignoreBOM", "ignoreCase", "image-orientation", "image-rendering", "imageOrientation", "imageRendering", "images", "ime-mode", "imeMode", "implementation", "importKey", "importNode", "importStylesheet", "imports", "impp", "imul", "in1", "in2", "inBandMetadataTrackDispatchType", "inRange", "includes", "incremental", "indeterminate", "index", "indexNames", "indexOf", "indexedDB", "inertiaDestinationX", "inertiaDestinationY", "info", "init", "initAnimationEvent", "initBeforeLoadEvent", "initClipboardEvent", "initCloseEvent", "initCommandEvent", "initCompositionEvent", "initCustomEvent", "initData", "initDeviceMotionEvent", "initDeviceOrientationEvent", "initDragEvent", "initErrorEvent", "initEvent", "initFocusEvent", "initGestureEvent", "initHashChangeEvent", "initKeyEvent", "initKeyboardEvent", "initMSManipulationEvent", "initMessageEvent", "initMouseEvent", "initMouseScrollEvent", "initMouseWheelEvent", "initMutationEvent", "initNSMouseEvent", "initOverflowEvent", "initPageEvent", "initPageTransitionEvent", "initPointerEvent", "initPopStateEvent", "initProgressEvent", "initScrollAreaEvent", "initSimpleGestureEvent", "initStorageEvent", "initTextEvent", "initTimeEvent", "initTouchEvent", "initTransitionEvent", "initUIEvent", "initWebKitAnimationEvent", "initWebKitTransitionEvent", "initWebKitWheelEvent", "initWheelEvent", "initialTime", "initialize", "initiatorType", "inner", "innerHTML", "innerHeight", "innerText", "innerWidth", "input", "inputBuffer", "inputEncoding", "inputMethod", "insertAdjacentElement", "insertAdjacentHTML", "insertAdjacentText", "insertBefore", "insertCell", "insertData", "insertItemBefore", "insertNode", "insertRow", "insertRule", "instanceRoot", "intercept", "interimResults", "internalSubset", "intersectsNode", "interval", "invalidIteratorState", "inverse", "invertSelf", "is", "is2D", "isAlternate", "isArray", "isBingCurrentSearchDefault", "isBuffer", "isCandidateWindowVisible", "isChar", "isCollapsed", "isComposing", "isContentEditable", "isContentHandlerRegistered", "isContextLost", "isDefaultNamespace", "isDisabled", "isEnabled", "isEqual", "isEqualNode", "isExtensible", "isFinite", "isFramebuffer", "isFrozen", "isGenerator", "isId", "isInjected", "isInteger", "isMap", "isMultiLine", "isNaN", "isOpen", "isPointInFill", "isPointInPath", "isPointInRange", "isPointInStroke", "isPrefAlternate", "isPrimary", "isProgram", "isPropertyImplicit", "isProtocolHandlerRegistered", "isPrototypeOf", "isRenderbuffer", "isSafeInteger", "isSameNode", "isSealed", "isShader", "isSupported", "isTextEdit", "isTexture", "isTrusted", "isTypeSupported", "isView", "isolation", "italics", "item", "itemId", "itemProp", "itemRef", "itemScope", "itemType", "itemValue", "iterateNext", "iterator", "javaEnabled", "jobTitle", "join", "json", "justify-content", "justifyContent", "k1", "k2", "k3", "k4", "kernelMatrix", "kernelUnitLengthX", "kernelUnitLengthY", "kerning", "key", "keyCode", "keyFor", "keyIdentifier", "keyLightEnabled", "keyLocation", "keyPath", "keySystem", "keyText", "keyUsage", "keys", "keytype", "kind", "knee", "label", "labels", "lang", "language", "languages", "largeArcFlag", "lastChild", "lastElementChild", "lastEventId", "lastIndex", "lastIndexOf", "lastMatch", "lastMessageSubject", "lastMessageType", "lastModified", "lastModifiedDate", "lastPage", "lastParen", "lastState", "lastStyleSheetSet", "latitude", "layerX", "layerY", "layoutFlow", "layoutGrid", "layoutGridChar", "layoutGridLine", "layoutGridMode", "layoutGridType", "lbound", "left", "leftContext", "leftMargin", "length", "lengthAdjust", "lengthComputable", "letter-spacing", "letterSpacing", "level", "lighting-color", "lightingColor", "limitingConeAngle", "line", "line-height", "lineAlign", "lineBreak", "lineCap", "lineDashOffset", "lineHeight", "lineJoin", "lineNumber", "lineTo", "lineWidth", "linearRampToValueAtTime", "lineno", "link", "linkColor", "linkProgram", "links", "list", "list-style", "list-style-image", "list-style-position", "list-style-type", "listStyle", "listStyleImage", "listStylePosition", "listStyleType", "listener", "load", "loadEventEnd", "loadEventStart", "loadTimes", "loaded", "localDescription", "localName", "localStorage", "locale", "localeCompare", "location", "locationbar", "lock", "lockedFile", "log", "log10", "log1p", "log2", "logicalXDPI", "logicalYDPI", "longDesc", "longitude", "lookupNamespaceURI", "lookupPrefix", "loop", "loopEnd", "loopStart", "looping", "low", "lower", "lowerBound", "lowerOpen", "lowsrc", "m11", "m12", "m13", "m14", "m21", "m22", "m23", "m24", "m31", "m32", "m33", "m34", "m41", "m42", "m43", "m44", "manifest", "map", "mapping", "margin", "margin-bottom", "margin-left", "margin-right", "margin-top", "marginBottom", "marginHeight", "marginLeft", "marginRight", "marginTop", "marginWidth", "mark", "marker", "marker-end", "marker-mid", "marker-offset", "marker-start", "markerEnd", "markerHeight", "markerMid", "markerOffset", "markerStart", "markerUnits", "markerWidth", "marks", "mask", "mask-type", "maskContentUnits", "maskType", "maskUnits", "match", "matchMedia", "matchMedium", "matches", "matrix", "matrixTransform", "max", "max-height", "max-width", "maxAlternatives", "maxChannelCount", "maxConnectionsPerServer", "maxDecibels", "maxDistance", "maxHeight", "maxLength", "maxTouchPoints", "maxValue", "maxWidth", "measure", "measureText", "media", "mediaCapabilities", "mediaDevices", "mediaElement", "mediaGroup", "mediaKeys", "mediaText", "meetOrSlice", "memory", "menubar", "mergeAttributes", "message", "messageClass", "messageHandlers", "metaKey", "method", "mimeType", "mimeTypes", "min", "min-height", "min-width", "minDecibels", "minHeight", "minValue", "minWidth", "miterLimit", "mix-blend-mode", "mixBlendMode", "mode", "modify", "mount", "move", "moveBy", "moveEnd", "moveFirst", "moveFocusDown", "moveFocusLeft", "moveFocusRight", "moveFocusUp", "moveNext", "moveRow", "moveStart", "moveTo", "moveToBookmark", "moveToElementText", "moveToPoint", "mozAdd", "mozAnimationStartTime", "mozAnon", "mozApps", "mozAudioCaptured", "mozAudioChannelType", "mozAutoplayEnabled", "mozCancelAnimationFrame", "mozCancelFullScreen", "mozCancelRequestAnimationFrame", "mozCaptureStream", "mozCaptureStreamUntilEnded", "mozClearDataAt", "mozContact", "mozContacts", "mozCreateFileHandle", "mozCurrentTransform", "mozCurrentTransformInverse", "mozCursor", "mozDash", "mozDashOffset", "mozDecodedFrames", "mozExitPointerLock", "mozFillRule", "mozFragmentEnd", "mozFrameDelay", "mozFullScreen", "mozFullScreenElement", "mozFullScreenEnabled", "mozGetAll", "mozGetAllKeys", "mozGetAsFile", "mozGetDataAt", "mozGetMetadata", "mozGetUserMedia", "mozHasAudio", "mozHasItem", "mozHidden", "mozImageSmoothingEnabled", "mozIndexedDB", "mozInnerScreenX", "mozInnerScreenY", "mozInputSource", "mozIsTextField", "mozItem", "mozItemCount", "mozItems", "mozLength", "mozLockOrientation", "mozMatchesSelector", "mozMovementX", "mozMovementY", "mozOpaque", "mozOrientation", "mozPaintCount", "mozPaintedFrames", "mozParsedFrames", "mozPay", "mozPointerLockElement", "mozPresentedFrames", "mozPreservesPitch", "mozPressure", "mozPrintCallback", "mozRTCIceCandidate", "mozRTCPeerConnection", "mozRTCSessionDescription", "mozRemove", "mozRequestAnimationFrame", "mozRequestFullScreen", "mozRequestPointerLock", "mozSetDataAt", "mozSetImageElement", "mozSourceNode", "mozSrcObject", "mozSystem", "mozTCPSocket", "mozTextStyle", "mozTypesAt", "mozUnlockOrientation", "mozUserCancelled", "mozVisibilityState", "msAnimation", "msAnimationDelay", "msAnimationDirection", "msAnimationDuration", "msAnimationFillMode", "msAnimationIterationCount", "msAnimationName", "msAnimationPlayState", "msAnimationStartTime", "msAnimationTimingFunction", "msBackfaceVisibility", "msBlockProgression", "msCSSOMElementFloatMetrics", "msCaching", "msCachingEnabled", "msCancelRequestAnimationFrame", "msCapsLockWarningOff", "msClearImmediate", "msClose", "msContentZoomChaining", "msContentZoomFactor", "msContentZoomLimit", "msContentZoomLimitMax", "msContentZoomLimitMin", "msContentZoomSnap", "msContentZoomSnapPoints", "msContentZoomSnapType", "msContentZooming", "msConvertURL", "msCrypto", "msDoNotTrack", "msElementsFromPoint", "msElementsFromRect", "msExitFullscreen", "msExtendedCode", "msFillRule", "msFirstPaint", "msFlex", "msFlexAlign", "msFlexDirection", "msFlexFlow", "msFlexItemAlign", "msFlexLinePack", "msFlexNegative", "msFlexOrder", "msFlexPack", "msFlexPositive", "msFlexPreferredSize", "msFlexWrap", "msFlowFrom", "msFlowInto", "msFontFeatureSettings", "msFullscreenElement", "msFullscreenEnabled", "msGetInputContext", "msGetRegionContent", "msGetUntransformedBounds", "msGraphicsTrustStatus", "msGridColumn", "msGridColumnAlign", "msGridColumnSpan", "msGridColumns", "msGridRow", "msGridRowAlign", "msGridRowSpan", "msGridRows", "msHidden", "msHighContrastAdjust", "msHyphenateLimitChars", "msHyphenateLimitLines", "msHyphenateLimitZone", "msHyphens", "msImageSmoothingEnabled", "msImeAlign", "msIndexedDB", "msInterpolationMode", "msIsStaticHTML", "msKeySystem", "msKeys", "msLaunchUri", "msLockOrientation", "msManipulationViewsEnabled", "msMatchMedia", "msMatchesSelector", "msMaxTouchPoints", "msOrientation", "msOverflowStyle", "msPerspective", "msPerspectiveOrigin", "msPlayToDisabled", "msPlayToPreferredSourceUri", "msPlayToPrimary", "msPointerEnabled", "msRegionOverflow", "msReleasePointerCapture", "msRequestAnimationFrame", "msRequestFullscreen", "msSaveBlob", "msSaveOrOpenBlob", "msScrollChaining", "msScrollLimit", "msScrollLimitXMax", "msScrollLimitXMin", "msScrollLimitYMax", "msScrollLimitYMin", "msScrollRails", "msScrollSnapPointsX", "msScrollSnapPointsY", "msScrollSnapType", "msScrollSnapX", "msScrollSnapY", "msScrollTranslation", "msSetImmediate", "msSetMediaKeys", "msSetPointerCapture", "msTextCombineHorizontal", "msTextSizeAdjust", "msToBlob", "msTouchAction", "msTouchSelect", "msTraceAsyncCallbackCompleted", "msTraceAsyncCallbackStarting", "msTraceAsyncOperationCompleted", "msTraceAsyncOperationStarting", "msTransform", "msTransformOrigin", "msTransformStyle", "msTransition", "msTransitionDelay", "msTransitionDuration", "msTransitionProperty", "msTransitionTimingFunction", "msUnlockOrientation", "msUpdateAsyncCallbackRelation", "msUserSelect", "msVisibilityState", "msWrapFlow", "msWrapMargin", "msWrapThrough", "msWriteProfilerMark", "msZoom", "msZoomTo", "mt", "multiEntry", "multiSelectionObj", "multiline", "multiple", "multiply", "multiplySelf", "mutableFile", "muted", "n", "name", "nameProp", "namedItem", "namedRecordset", "names", "namespaceURI", "namespaces", "naturalHeight", "naturalWidth", "navigate", "navigation", "navigationMode", "navigationStart", "navigator", "near", "nearestViewportElement", "negative", "netscape", "networkState", "newScale", "newTranslate", "newURL", "newValue", "newValueSpecifiedUnits", "newVersion", "newhome", "next", "nextElementSibling", "nextNode", "nextPage", "nextSibling", "nickname", "noHref", "noResize", "noShade", "noValidate", "noWrap", "nodeName", "nodeType", "nodeValue", "normalize", "normalizedPathSegList", "notationName", "notations", "note", "noteGrainOn", "noteOff", "noteOn", "now", "numOctaves", "number", "numberOfChannels", "numberOfInputs", "numberOfItems", "numberOfOutputs", "numberValue", "oMatchesSelector", "object", "object-fit", "object-position", "objectFit", "objectPosition", "objectStore", "objectStoreNames", "observe", "of", "offscreenBuffering", "offset", "offsetHeight", "offsetLeft", "offsetNode", "offsetParent", "offsetTop", "offsetWidth", "offsetX", "offsetY", "ok", "oldURL", "oldValue", "oldVersion", "olderShadowRoot", "onLine", "onabort", "onactivate", "onactive", "onaddstream", "onaddtrack", "onafterprint", "onafterscriptexecute", "onafterupdate", "onaudioend", "onaudioprocess", "onaudiostart", "onautocomplete", "onautocompleteerror", "onbeforeactivate", "onbeforecopy", "onbeforecut", "onbeforedeactivate", "onbeforeeditfocus", "onbeforepaste", "onbeforeprint", "onbeforescriptexecute", "onbeforeunload", "onbeforeupdate", "onblocked", "onblur", "onbounce", "onboundary", "oncached", "oncancel", "oncandidatewindowhide", "oncandidatewindowshow", "oncandidatewindowupdate", "oncanplay", "oncanplaythrough", "once", "oncellchange", "onchange", "onchargingchange", "onchargingtimechange", "onchecking", "onclick", "onclose", "oncompassneedscalibration", "oncomplete", "oncontextmenu", "oncontrolselect", "oncopy", "oncuechange", "oncut", "ondataavailable", "ondatachannel", "ondatasetchanged", "ondatasetcomplete", "ondblclick", "ondeactivate", "ondevicelight", "ondevicemotion", "ondeviceorientation", "ondeviceproximity", "ondischargingtimechange", "ondisplay", "ondownloading", "ondrag", "ondragend", "ondragenter", "ondragleave", "ondragover", "ondragstart", "ondrop", "ondurationchange", "onemptied", "onencrypted", "onend", "onended", "onenter", "onerror", "onerrorupdate", "onexit", "onfilterchange", "onfinish", "onfocus", "onfocusin", "onfocusout", "onfullscreenchange", "onfullscreenerror", "ongesturechange", "ongestureend", "ongesturestart", "ongotpointercapture", "onhashchange", "onhelp", "onicecandidate", "oniceconnectionstatechange", "oninactive", "oninput", "oninvalid", "onkeydown", "onkeypress", "onkeyup", "onlanguagechange", "onlayoutcomplete", "onlevelchange", "onload", "onloadeddata", "onloadedmetadata", "onloadend", "onloadstart", "onlosecapture", "onlostpointercapture", "only", "onmark", "onmessage", "onmousedown", "onmouseenter", "onmouseleave", "onmousemove", "onmouseout", "onmouseover", "onmouseup", "onmousewheel", "onmove", "onmoveend", "onmovestart", "onmozfullscreenchange", "onmozfullscreenerror", "onmozorientationchange", "onmozpointerlockchange", "onmozpointerlockerror", "onmscontentzoom", "onmsfullscreenchange", "onmsfullscreenerror", "onmsgesturechange", "onmsgesturedoubletap", "onmsgestureend", "onmsgesturehold", "onmsgesturestart", "onmsgesturetap", "onmsgotpointercapture", "onmsinertiastart", "onmslostpointercapture", "onmsmanipulationstatechanged", "onmsneedkey", "onmsorientationchange", "onmspointercancel", "onmspointerdown", "onmspointerenter", "onmspointerhover", "onmspointerleave", "onmspointermove", "onmspointerout", "onmspointerover", "onmspointerup", "onmssitemodejumplistitemremoved", "onmsthumbnailclick", "onnegotiationneeded", "onnomatch", "onnoupdate", "onobsolete", "onoffline", "ononline", "onopen", "onorientationchange", "onpagechange", "onpagehide", "onpageshow", "onpaste", "onpause", "onplay", "onplaying", "onpluginstreamstart", "onpointercancel", "onpointerdown", "onpointerenter", "onpointerleave", "onpointerlockchange", "onpointerlockerror", "onpointermove", "onpointerout", "onpointerover", "onpointerup", "onpopstate", "onprogress", "onpropertychange", "onratechange", "onreadystatechange", "onremovestream", "onremovetrack", "onreset", "onresize", "onresizeend", "onresizestart", "onresourcetimingbufferfull", "onresult", "onresume", "onrowenter", "onrowexit", "onrowsdelete", "onrowsinserted", "onscroll", "onsearch", "onseeked", "onseeking", "onselect", "onselectionchange", "onselectstart", "onshow", "onsignalingstatechange", "onsoundend", "onsoundstart", "onspeechend", "onspeechstart", "onstalled", "onstart", "onstatechange", "onstop", "onstorage", "onstoragecommit", "onsubmit", "onsuccess", "onsuspend", "ontextinput", "ontimeout", "ontimeupdate", "ontoggle", "ontouchcancel", "ontouchend", "ontouchmove", "ontouchstart", "ontransitionend", "onunload", "onupdateready", "onupgradeneeded", "onuserproximity", "onversionchange", "onvoiceschanged", "onvolumechange", "onwaiting", "onwarning", "onwebkitanimationend", "onwebkitanimationiteration", "onwebkitanimationstart", "onwebkitcurrentplaybacktargetiswirelesschanged", "onwebkitfullscreenchange", "onwebkitfullscreenerror", "onwebkitkeyadded", "onwebkitkeyerror", "onwebkitkeymessage", "onwebkitneedkey", "onwebkitorientationchange", "onwebkitplaybacktargetavailabilitychanged", "onwebkitpointerlockchange", "onwebkitpointerlockerror", "onwebkitresourcetimingbufferfull", "onwebkittransitionend", "onwheel", "onzoom", "opacity", "open", "openCursor", "openDatabase", "openKeyCursor", "opener", "opera", "operationType", "operator", "opr", "optimum", "options", "order", "orderX", "orderY", "ordered", "org", "orient", "orientAngle", "orientType", "orientation", "origin", "originalTarget", "orphans", "oscpu", "outerHTML", "outerHeight", "outerText", "outerWidth", "outline", "outline-color", "outline-offset", "outline-style", "outline-width", "outlineColor", "outlineOffset", "outlineStyle", "outlineWidth", "outputBuffer", "overflow", "overflow-x", "overflow-y", "overflowX", "overflowY", "overrideMimeType", "oversample", "ownerDocument", "ownerElement", "ownerNode", "ownerRule", "ownerSVGElement", "owningElement", "p1", "p2", "p3", "p4", "pad", "padding", "padding-bottom", "padding-left", "padding-right", "padding-top", "paddingBottom", "paddingLeft", "paddingRight", "paddingTop", "page", "page-break-after", "page-break-before", "page-break-inside", "pageBreakAfter", "pageBreakBefore", "pageBreakInside", "pageCount", "pageX", "pageXOffset", "pageY", "pageYOffset", "pages", "paint-order", "paintOrder", "paintRequests", "paintType", "palette", "panningModel", "parent", "parentElement", "parentNode", "parentRule", "parentStyleSheet", "parentTextEdit", "parentWindow", "parse", "parseFloat", "parseFromString", "parseInt", "participants", "passive", "password", "pasteHTML", "path", "pathLength", "pathSegList", "pathSegType", "pathSegTypeAsLetter", "pathname", "pattern", "patternContentUnits", "patternMismatch", "patternTransform", "patternUnits", "pause", "pauseAnimations", "pauseOnExit", "paused", "pending", "performance", "permission", "persisted", "personalbar", "perspective", "perspective-origin", "perspectiveOrigin", "phoneticFamilyName", "phoneticGivenName", "photo", "ping", "pitch", "pixelBottom", "pixelDepth", "pixelHeight", "pixelLeft", "pixelRight", "pixelStorei", "pixelTop", "pixelUnitToMillimeterX", "pixelUnitToMillimeterY", "pixelWidth", "placeholder", "platform", "play", "playbackRate", "playbackState", "playbackTime", "played", "plugins", "pluginspage", "pname", "pointer-events", "pointerBeforeReferenceNode", "pointerEnabled", "pointerEvents", "pointerId", "pointerLockElement", "pointerType", "points", "pointsAtX", "pointsAtY", "pointsAtZ", "polygonOffset", "pop", "popupWindowFeatures", "popupWindowName", "popupWindowURI", "port", "port1", "port2", "ports", "posBottom", "posHeight", "posLeft", "posRight", "posTop", "posWidth", "position", "positionAlign", "postError", "postMessage", "poster", "pow", "powerOff", "preMultiplySelf", "precision", "preferredStyleSheetSet", "preferredStylesheetSet", "prefix", "preload", "prepend", "preserveAlpha", "preserveAspectRatio", "preserveAspectRatioString", "pressed", "pressure", "prevValue", "preventDefault", "preventExtensions", "previousElementSibling", "previousNode", "previousPage", "previousScale", "previousSibling", "previousTranslate", "primaryKey", "primitiveType", "primitiveUnits", "principals", "print", "privateKey", "probablySupportsContext", "process", "processIceMessage", "product", "productSub", "profile", "profileEnd", "profiles", "prompt", "properties", "propertyIsEnumerable", "propertyName", "protocol", "protocolLong", "prototype", "pseudoClass", "pseudoElement", "publicId", "publicKey", "published", "push", "pushNotification", "pushState", "put", "putImageData", "quadraticCurveTo", "qualifier", "queryCommandEnabled", "queryCommandIndeterm", "queryCommandState", "queryCommandSupported", "queryCommandText", "queryCommandValue", "querySelector", "querySelectorAll", "quote", "quotes", "r", "r1", "r2", "race", "radiogroup", "radiusX", "radiusY", "random", "range", "rangeCount", "rangeMax", "rangeMin", "rangeOffset", "rangeOverflow", "rangeParent", "rangeUnderflow", "rate", "ratio", "raw", "read", "readAsArrayBuffer", "readAsBinaryString", "readAsBlob", "readAsDataURL", "readAsText", "readOnly", "readPixels", "readReportRequested", "readyState", "reason", "reboot", "receiver", "receivers", "recordNumber", "recordset", "rect", "red", "redirectCount", "redirectEnd", "redirectStart", "reduce", "reduceRight", "reduction", "refDistance", "refX", "refY", "referenceNode", "referrer", "refresh", "region", "regionAnchorX", "regionAnchorY", "regionId", "regions", "register", "registerContentHandler", "registerElement", "registerProtocolHandler", "reject", "rel", "relList", "relatedNode", "relatedTarget", "release", "releaseCapture", "releaseEvents", "releasePointerCapture", "releaseShaderCompiler", "reliable", "reload", "remainingSpace", "remoteDescription", "remove", "removeAllRanges", "removeAttribute", "removeAttributeNS", "removeAttributeNode", "removeBehavior", "removeChild", "removeCue", "removeEventListener", "removeFilter", "removeImport", "removeItem", "removeListener", "removeNamedItem", "removeNamedItemNS", "removeNode", "removeParameter", "removeProperty", "removeRange", "removeRegion", "removeRule", "removeSiteSpecificTrackingException", "removeSourceBuffer", "removeStream", "removeTrack", "removeVariable", "removeWakeLockListener", "removeWebWideTrackingException", "removedNodes", "renderbufferStorage", "renderedBuffer", "renderingMode", "repeat", "replace", "replaceAdjacentText", "replaceChild", "replaceData", "replaceId", "replaceItem", "replaceNode", "replaceState", "replaceTrack", "replaceWholeText", "reportValidity", "requestAnimationFrame", "requestAutocomplete", "requestData", "requestFullscreen", "requestMediaKeySystemAccess", "requestPermission", "requestPointerLock", "requestStart", "requestingWindow", "required", "requiredExtensions", "requiredFeatures", "reset", "resetTransform", "resize", "resizeBy", "resizeTo", "resolve", "response", "responseBody", "responseEnd", "responseStart", "responseText", "responseType", "responseURL", "responseXML", "restore", "result", "resultType", "resume", "returnValue", "rev", "reverse", "reversed", "revocable", "revokeObjectURL", "rgbColor", "right", "rightContext", "rightMargin", "rolloffFactor", "root", "rootElement", "rotate", "rotateAxisAngle", "rotateAxisAngleSelf", "rotateFromVector", "rotateFromVectorSelf", "rotateSelf", "rotation", "rotationRate", "round", "rowIndex", "rowSpan", "rows", "rubyAlign", "rubyOverhang", "rubyPosition", "rules", "runtime", "runtimeStyle", "rx", "ry", "safari", "sampleCoverage", "sampleRate", "sandbox", "save", "scale", "scale3d", "scale3dSelf", "scaleNonUniform", "scaleNonUniformSelf", "scaleSelf", "scheme", "scissor", "scope", "scopeName", "scoped", "screen", "screenBrightness", "screenEnabled", "screenLeft", "screenPixelToMillimeterX", "screenPixelToMillimeterY", "screenTop", "screenX", "screenY", "scripts", "scroll", "scroll-behavior", "scrollAmount", "scrollBehavior", "scrollBy", "scrollByLines", "scrollByPages", "scrollDelay", "scrollHeight", "scrollIntoView", "scrollIntoViewIfNeeded", "scrollLeft", "scrollLeftMax", "scrollMaxX", "scrollMaxY", "scrollTo", "scrollTop", "scrollTopMax", "scrollWidth", "scrollX", "scrollY", "scrollbar3dLightColor", "scrollbarArrowColor", "scrollbarBaseColor", "scrollbarDarkShadowColor", "scrollbarFaceColor", "scrollbarHighlightColor", "scrollbarShadowColor", "scrollbarTrackColor", "scrollbars", "scrolling", "sdp", "sdpMLineIndex", "sdpMid", "seal", "search", "searchBox", "searchBoxJavaBridge_", "searchParams", "sectionRowIndex", "secureConnectionStart", "security", "seed", "seekable", "seeking", "select", "selectAllChildren", "selectNode", "selectNodeContents", "selectNodes", "selectSingleNode", "selectSubString", "selected", "selectedIndex", "selectedOptions", "selectedStyleSheetSet", "selectedStylesheetSet", "selection", "selectionDirection", "selectionEnd", "selectionStart", "selector", "selectorText", "self", "send", "sendAsBinary", "sendBeacon", "sender", "sentTimestamp", "separator", "serializeToString", "serviceWorker", "sessionId", "sessionStorage", "set", "setActive", "setAlpha", "setAttribute", "setAttributeNS", "setAttributeNode", "setAttributeNodeNS", "setBaseAndExtent", "setBingCurrentSearchDefault", "setCapture", "setColor", "setCompositeOperation", "setCurrentTime", "setCustomValidity", "setData", "setDate", "setDragImage", "setEnd", "setEndAfter", "setEndBefore", "setEndPoint", "setFillColor", "setFilterRes", "setFloat32", "setFloat64", "setFloatValue", "setFullYear", "setHours", "setImmediate", "setInt16", "setInt32", "setInt8", "setInterval", "setItem", "setLineCap", "setLineDash", "setLineJoin", "setLineWidth", "setLocalDescription", "setMatrix", "setMatrixValue", "setMediaKeys", "setMilliseconds", "setMinutes", "setMiterLimit", "setMonth", "setNamedItem", "setNamedItemNS", "setNonUserCodeExceptions", "setOrientToAngle", "setOrientToAuto", "setOrientation", "setOverrideHistoryNavigationMode", "setPaint", "setParameter", "setPeriodicWave", "setPointerCapture", "setPosition", "setPreference", "setProperty", "setPrototypeOf", "setRGBColor", "setRGBColorICCColor", "setRadius", "setRangeText", "setRemoteDescription", "setRequestHeader", "setResizable", "setResourceTimingBufferSize", "setRotate", "setScale", "setSeconds", "setSelectionRange", "setServerCertificate", "setShadow", "setSkewX", "setSkewY", "setStart", "setStartAfter", "setStartBefore", "setStdDeviation", "setStringValue", "setStrokeColor", "setSuggestResult", "setTargetAtTime", "setTargetValueAtTime", "setTime", "setTimeout", "setTransform", "setTranslate", "setUTCDate", "setUTCFullYear", "setUTCHours", "setUTCMilliseconds", "setUTCMinutes", "setUTCMonth", "setUTCSeconds", "setUint16", "setUint32", "setUint8", "setUri", "setValueAtTime", "setValueCurveAtTime", "setVariable", "setVelocity", "setVersion", "setYear", "settingName", "settingValue", "sex", "shaderSource", "shadowBlur", "shadowColor", "shadowOffsetX", "shadowOffsetY", "shadowRoot", "shape", "shape-rendering", "shapeRendering", "sheet", "shift", "shiftKey", "shiftLeft", "show", "showHelp", "showModal", "showModalDialog", "showModelessDialog", "showNotification", "sidebar", "sign", "signalingState", "sin", "singleNodeValue", "sinh", "size", "sizeToContent", "sizes", "skewX", "skewXSelf", "skewY", "skewYSelf", "slice", "slope", "small", "smil", "smooth", "smoothingTimeConstant", "snapToLines", "snapshotItem", "snapshotLength", "some", "sort", "source", "sourceBuffer", "sourceBuffers", "sourceIndex", "spacing", "span", "speakAs", "speaking", "specified", "specularConstant", "specularExponent", "speechSynthesis", "speed", "speedOfSound", "spellcheck", "splice", "split", "splitText", "spreadMethod", "sqrt", "src", "srcElement", "srcFilter", "srcUrn", "srcdoc", "srclang", "srcset", "stack", "stackTraceLimit", "stacktrace", "standalone", "standby", "start", "startContainer", "startIce", "startOffset", "startRendering", "startTime", "startsWith", "state", "status", "statusMessage", "statusText", "statusbar", "stdDeviationX", "stdDeviationY", "stencilFunc", "stencilFuncSeparate", "stencilMask", "stencilMaskSeparate", "stencilOp", "stencilOpSeparate", "step", "stepDown", "stepMismatch", "stepUp", "sticky", "stitchTiles", "stop", "stop-color", "stop-opacity", "stopColor", "stopImmediatePropagation", "stopOpacity", "stopPropagation", "storageArea", "storageName", "storageStatus", "storeSiteSpecificTrackingException", "storeWebWideTrackingException", "stpVersion", "stream", "strike", "stringValue", "stringify", "stroke", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke-width", "strokeDasharray", "strokeDashoffset", "strokeLinecap", "strokeLinejoin", "strokeMiterlimit", "strokeOpacity", "strokeRect", "strokeStyle", "strokeText", "strokeWidth", "style", "styleFloat", "styleMedia", "styleSheet", "styleSheetSets", "styleSheets", "sub", "subarray", "subject", "submit", "subscribe", "substr", "substring", "substringData", "subtle", "subtree", "suffix", "suffixes", "summary", "sup", "supports", "surfaceScale", "surroundContents", "suspend", "suspendRedraw", "swapCache", "swapNode", "sweepFlag", "symbols", "system", "systemCode", "systemId", "systemLanguage", "systemXDPI", "systemYDPI", "tBodies", "tFoot", "tHead", "tabIndex", "table", "table-layout", "tableLayout", "tableValues", "tag", "tagName", "tagUrn", "tags", "taintEnabled", "takeRecords", "tan", "tanh", "target", "targetElement", "targetTouches", "targetX", "targetY", "tel", "terminate", "test", "texImage2D", "texParameterf", "texParameteri", "texSubImage2D", "text", "text-align", "text-anchor", "text-decoration", "text-decoration-color", "text-decoration-line", "text-decoration-style", "text-indent", "text-overflow", "text-rendering", "text-shadow", "text-transform", "textAlign", "textAlignLast", "textAnchor", "textAutospace", "textBaseline", "textContent", "textDecoration", "textDecorationBlink", "textDecorationColor", "textDecorationLine", "textDecorationLineThrough", "textDecorationNone", "textDecorationOverline", "textDecorationStyle", "textDecorationUnderline", "textIndent", "textJustify", "textJustifyTrim", "textKashida", "textKashidaSpace", "textLength", "textOverflow", "textRendering", "textShadow", "textTracks", "textTransform", "textUnderlinePosition", "then", "threadId", "threshold", "tiltX", "tiltY", "time", "timeEnd", "timeStamp", "timeout", "timestamp", "timestampOffset", "timing", "title", "toArray", "toBlob", "toDataURL", "toDateString", "toElement", "toExponential", "toFixed", "toFloat32Array", "toFloat64Array", "toGMTString", "toISOString", "toJSON", "toLocaleDateString", "toLocaleFormat", "toLocaleLowerCase", "toLocaleString", "toLocaleTimeString", "toLocaleUpperCase", "toLowerCase", "toMethod", "toPrecision", "toSdp", "toSource", "toStaticHTML", "toString", "toStringTag", "toTimeString", "toUTCString", "toUpperCase", "toggle", "toggleLongPressEnabled", "tooLong", "toolbar", "top", "topMargin", "total", "totalFrameDelay", "totalVideoFrames", "touchAction", "touches", "trace", "track", "transaction", "transactions", "transform", "transform-origin", "transform-style", "transformOrigin", "transformPoint", "transformString", "transformStyle", "transformToDocument", "transformToFragment", "transition", "transition-delay", "transition-duration", "transition-property", "transition-timing-function", "transitionDelay", "transitionDuration", "transitionProperty", "transitionTimingFunction", "translate", "translateSelf", "translationX", "translationY", "trim", "trimLeft", "trimRight", "trueSpeed", "trunc", "truncate", "type", "typeDetail", "typeMismatch", "typeMustMatch", "types", "ubound", "undefined", "unescape", "uneval", "unicode-bidi", "unicodeBidi", "uniform1f", "uniform1fv", "uniform1i", "uniform1iv", "uniform2f", "uniform2fv", "uniform2i", "uniform2iv", "uniform3f", "uniform3fv", "uniform3i", "uniform3iv", "uniform4f", "uniform4fv", "uniform4i", "uniform4iv", "uniformMatrix2fv", "uniformMatrix3fv", "uniformMatrix4fv", "unique", "uniqueID", "uniqueNumber", "unitType", "units", "unloadEventEnd", "unloadEventStart", "unlock", "unmount", "unobserve", "unpause", "unpauseAnimations", "unreadCount", "unregister", "unregisterContentHandler", "unregisterProtocolHandler", "unscopables", "unselectable", "unshift", "unsubscribe", "unsuspendRedraw", "unsuspendRedrawAll", "unwatch", "unwrapKey", "update", "updateCommands", "updateIce", "updateInterval", "updateSettings", "updated", "updating", "upload", "upper", "upperBound", "upperOpen", "uri", "url", "urn", "urns", "usages", "useCurrentView", "useMap", "useProgram", "usedSpace", "userAgent", "userLanguage", "username", "v8BreakIterator", "vAlign", "vLink", "valid", "validateProgram", "validationMessage", "validity", "value", "valueAsDate", "valueAsNumber", "valueAsString", "valueInSpecifiedUnits", "valueMissing", "valueOf", "valueText", "valueType", "values", "vector-effect", "vectorEffect", "velocityAngular", "velocityExpansion", "velocityX", "velocityY", "vendor", "vendorSub", "verify", "version", "vertexAttrib1f", "vertexAttrib1fv", "vertexAttrib2f", "vertexAttrib2fv", "vertexAttrib3f", "vertexAttrib3fv", "vertexAttrib4f", "vertexAttrib4fv", "vertexAttribDivisorANGLE", "vertexAttribPointer", "vertical", "vertical-align", "verticalAlign", "verticalOverflow", "vibrate", "videoHeight", "videoTracks", "videoWidth", "view", "viewBox", "viewBoxString", "viewTarget", "viewTargetString", "viewport", "viewportAnchorX", "viewportAnchorY", "viewportElement", "visibility", "visibilityState", "visible", "vlinkColor", "voice", "volume", "vrml", "vspace", "w", "wand", "warn", "wasClean", "watch", "watchPosition", "webdriver", "webkitAddKey", "webkitAnimation", "webkitAnimationDelay", "webkitAnimationDirection", "webkitAnimationDuration", "webkitAnimationFillMode", "webkitAnimationIterationCount", "webkitAnimationName", "webkitAnimationPlayState", "webkitAnimationTimingFunction", "webkitAppearance", "webkitAudioContext", "webkitAudioDecodedByteCount", "webkitAudioPannerNode", "webkitBackfaceVisibility", "webkitBackground", "webkitBackgroundAttachment", "webkitBackgroundClip", "webkitBackgroundColor", "webkitBackgroundImage", "webkitBackgroundOrigin", "webkitBackgroundPosition", "webkitBackgroundPositionX", "webkitBackgroundPositionY", "webkitBackgroundRepeat", "webkitBackgroundSize", "webkitBackingStorePixelRatio", "webkitBorderImage", "webkitBorderImageOutset", "webkitBorderImageRepeat", "webkitBorderImageSlice", "webkitBorderImageSource", "webkitBorderImageWidth", "webkitBoxAlign", "webkitBoxDirection", "webkitBoxFlex", "webkitBoxOrdinalGroup", "webkitBoxOrient", "webkitBoxPack", "webkitBoxSizing", "webkitCancelAnimationFrame", "webkitCancelFullScreen", "webkitCancelKeyRequest", "webkitCancelRequestAnimationFrame", "webkitClearResourceTimings", "webkitClosedCaptionsVisible", "webkitConvertPointFromNodeToPage", "webkitConvertPointFromPageToNode", "webkitCreateShadowRoot", "webkitCurrentFullScreenElement", "webkitCurrentPlaybackTargetIsWireless", "webkitDirectionInvertedFromDevice", "webkitDisplayingFullscreen", "webkitEnterFullScreen", "webkitEnterFullscreen", "webkitExitFullScreen", "webkitExitFullscreen", "webkitExitPointerLock", "webkitFullScreenKeyboardInputAllowed", "webkitFullscreenElement", "webkitFullscreenEnabled", "webkitGenerateKeyRequest", "webkitGetAsEntry", "webkitGetDatabaseNames", "webkitGetEntries", "webkitGetEntriesByName", "webkitGetEntriesByType", "webkitGetFlowByName", "webkitGetGamepads", "webkitGetImageDataHD", "webkitGetNamedFlows", "webkitGetRegionFlowRanges", "webkitGetUserMedia", "webkitHasClosedCaptions", "webkitHidden", "webkitIDBCursor", "webkitIDBDatabase", "webkitIDBDatabaseError", "webkitIDBDatabaseException", "webkitIDBFactory", "webkitIDBIndex", "webkitIDBKeyRange", "webkitIDBObjectStore", "webkitIDBRequest", "webkitIDBTransaction", "webkitImageSmoothingEnabled", "webkitIndexedDB", "webkitInitMessageEvent", "webkitIsFullScreen", "webkitKeys", "webkitLineDashOffset", "webkitLockOrientation", "webkitMatchesSelector", "webkitMediaStream", "webkitNotifications", "webkitOfflineAudioContext", "webkitOrientation", "webkitPeerConnection00", "webkitPersistentStorage", "webkitPointerLockElement", "webkitPostMessage", "webkitPreservesPitch", "webkitPutImageDataHD", "webkitRTCPeerConnection", "webkitRegionOverset", "webkitRequestAnimationFrame", "webkitRequestFileSystem", "webkitRequestFullScreen", "webkitRequestFullscreen", "webkitRequestPointerLock", "webkitResolveLocalFileSystemURL", "webkitSetMediaKeys", "webkitSetResourceTimingBufferSize", "webkitShadowRoot", "webkitShowPlaybackTargetPicker", "webkitSlice", "webkitSpeechGrammar", "webkitSpeechGrammarList", "webkitSpeechRecognition", "webkitSpeechRecognitionError", "webkitSpeechRecognitionEvent", "webkitStorageInfo", "webkitSupportsFullscreen", "webkitTemporaryStorage", "webkitTextSizeAdjust", "webkitTransform", "webkitTransformOrigin", "webkitTransition", "webkitTransitionDelay", "webkitTransitionDuration", "webkitTransitionProperty", "webkitTransitionTimingFunction", "webkitURL", "webkitUnlockOrientation", "webkitUserSelect", "webkitVideoDecodedByteCount", "webkitVisibilityState", "webkitWirelessVideoPlaybackDisabled", "webkitdropzone", "webstore", "weight", "whatToShow", "wheelDelta", "wheelDeltaX", "wheelDeltaY", "which", "white-space", "whiteSpace", "wholeText", "widows", "width", "will-change", "willChange", "willValidate", "window", "withCredentials", "word-break", "word-spacing", "word-wrap", "wordBreak", "wordSpacing", "wordWrap", "wrap", "wrapKey", "write", "writeln", "writingMode", "x", "x1", "x2", "xChannelSelector", "xmlEncoding", "xmlStandalone", "xmlVersion", "xmlbase", "xmllang", "xmlspace", "y", "y1", "y2", "yChannelSelector", "yandex", "z", "z-index", "zIndex", "zoom", "zoomAndPan", "zoomRectScreen"]
  function bi(e, t) {
    function n(e) {
      x(t, e)
    }
    e.walk(new Ln(function (e) {
      if (e instanceof Vt && e.quote) {
        n(e.key)
      } else {
        if (e instanceof Ht && e.quote) {
          n(e.key.name)
        } else {
          if (e instanceof Dt) {
            wi(e.property, n)
          }
        }
      }
    }))
  }
  function wi(e, t) {
    e.walk(new Ln(function (e) {
      if (e instanceof St) {
        wi(e.tail_node(), t)
      } else {
        if (e instanceof wn) {
          t(e.value)
        } else {
          if (e instanceof Nt) {
            wi(e.consequent, t)
            wi(e.alternative, t)
          }
        }
      }
      return true
    }))
  }
  function Ei(t, n) {
    var /* [auto-meaningful-name] */NANBuiltinsFalseCacheNullDebugFalseKeep_quotedFalseOnly_cacheFalseRegexNullReservedNullUndeclaredFalseTrue$reserved = (n = A(n, {
      builtins: false,
      cache: null,
      debug: false,
      keep_quoted: false,
      only_cache: false,
      regex: null,
      reserved: null,
      undeclared: false
    }, true)).reserved
    if (!Array.isArray(NANBuiltinsFalseCacheNullDebugFalseKeep_quotedFalseOnly_cacheFalseRegexNullReservedNullUndeclaredFalseTrue$reserved)) {
      NANBuiltinsFalseCacheNullDebugFalseKeep_quotedFalseOnly_cacheFalseRegexNullReservedNullUndeclaredFalseTrue$reserved = [NANBuiltinsFalseCacheNullDebugFalseKeep_quotedFalseOnly_cacheFalseRegexNullReservedNullUndeclaredFalseTrue$reserved]
    }
    var i = new Set(NANBuiltinsFalseCacheNullDebugFalseKeep_quotedFalseOnly_cacheFalseRegexNullReservedNullUndeclaredFalseTrue$reserved)
    if (!n.builtins) {
      (function (t) {
        yi.forEach(i)
        var n = {}
        var r = "object" == typeof global ? global : self
        function i(e) {
          t.add(e)
        }
        ["Symbol", "Map", "Promise", "Proxy", "Reflect", "Set", "WeakMap", "WeakSet"].forEach(function (e) {
          n[e] = r[e] || new Function()
        });
        ["null", "true", "false", "NaN", "Infinity", "-Infinity", "undefined"].forEach(i);
        [Object, Array, Function, Number, String, Boolean, Error, Math, Date, RegExp, n.Symbol, ArrayBuffer, DataView, decodeURI, decodeURIComponent, encodeURI, encodeURIComponent, eval, EvalError, Float32Array, Float64Array, Int8Array, Int16Array, Int32Array, isFinite, isNaN, JSON, n.Map, parseFloat, parseInt, n.Promise, n.Proxy, RangeError, ReferenceError, n.Reflect, n.Set, SyntaxError, TypeError, Uint8Array, Uint8ClampedArray, Uint16Array, Uint32Array, URIError, n.WeakMap, n.WeakSet].forEach(function (e) {
          Object.getOwnPropertyNames(e).map(i)
          if (e.prototype) {
            Object.getOwnPropertyNames(e.prototype).map(i)
          }
        })
      })(i)
    }
    var o
    var a = -1
    if (n.cache) {
      (o = n.cache.props).forEach(function (e) {
        i.add(e)
      })
    } else {
      o = new Map()
    }
    var s
    var c = n.regex && new RegExp(n.regex)
    var u = false !== n.debug
    if (u) {
      s = true === n.debug ? "" : n.debug
    }
    var l = new Set()
    var f = new Set()
    var d = "strict" === n.keep_quoted
    t.walk(new Ln(function (e) {
      if (e instanceof Vt) {
        if (!("string" != typeof e.key || d && e.quote)) {
          _(e.key)
        }
      } else if (e instanceof Ht) {
        if (!(d && e.key.end.quote)) {
          _(e.key.name)
        }
      } else if (e instanceof Bt) {
        var t = !!n.undeclared
        if (!t) {
          for (var r = e; r.expression;) {
            r = r.expression
          }
          t = !(r.thedef && r.thedef.undeclared)
        }
        if (!(!t || d && e.quote)) {
          _(e.property)
        }
      } else if (e instanceof Dt) {
        if (!d) {
          wi(e.property, _)
        }
      } else {
        if (e instanceof Ot && "Object.defineProperty" == e.expression.print_to_string()) {
          wi(e.args[1], _)
        }
      }
    }))
    return t.transform(new jn(function (e) {
      if (e instanceof Vt) {
        if (!("string" != typeof e.key || d && e.quote)) {
          e.key = g(e.key)
        }
      } else {
        if (e instanceof Ht) {
          if (!(d && e.key.end.quote)) {
            e.key.name = g(e.key.name)
          }
        } else {
          if (e instanceof Bt) {
            if (!(d && e.quote)) {
              e.property = g(e.property)
            }
          } else {
            if (!n.keep_quoted && e instanceof Dt) {
              e.property = v(e.property)
            } else {
              if (e instanceof Ot && "Object.defineProperty" == e.expression.print_to_string()) {
                e.args[1] = v(e.args[1])
              }
            }
          }
        }
      }
    }))
    function h(e) {
      return !f.has(e) && !i.has(e) && (n.only_cache ? o.has(e) : !/^-?[0-9]+(\.[0-9]+)?(e[+-][0-9]+)?$/.test(e))
    }
    function p(e) {
      return !(c && !c.test(e)) && !i.has(e) && (o.has(e) || l.has(e))
    }
    function _(e) {
      if (h(e)) {
        l.add(e)
      }
      if (!p(e)) {
        f.add(e)
      }
    }
    function g(e) {
      if (!p(e)) {
        return e
      }
      var t = o.get(e)
      if (!t) {
        if (u) {
          var n = "_$" + e + "$" + s + "_"
          if (h(n)) {
            t = n
          }
        }
        if (!t) {
          do {
            t = or(++a)
          } while (!h(t))
        }
        o.set(e, t)
      }
      return t
    }
    function v(e) {
      return e.transform(new jn(function (e) {
        if (e instanceof St) {
          var t = e.expressions.length - 1
          e.expressions[t] = v(e.expressions[t])
        } else if (e instanceof wn) {
          e.value = g(e.value)
        } else {
          if (e instanceof Nt) {
            e.consequent = v(e.consequent)
            e.alternative = v(e.alternative)
          }
        }
        return e
      }))
    }
  }
  var xi = "undefined" == typeof atob ? function (e) {
    return Buffer.from(e, "base64").toString()
  } : atob
  var Ci = "undefined" == typeof btoa ? function (e) {
    return Buffer.from(e).toString("base64")
  } : btoa
  function Oi(e, t, n) {
    if (t[e]) {
      n.forEach(function (n) {
        if (t[n]) {
          if ("object" != typeof t[n]) {
            t[n] = {}
          }
          if (!(e in t[n])) {
            t[n][e] = t[e]
          }
        }
      })
    }
  }
  function ki(e) {
    if (e) {
      if ("props" in e) {
        if (!(e.props instanceof Map)) {
          e.props = function (e) {
            var t = new Map()
            for (var n in e) if (B(e, n) && "$" === n.charAt(0)) {
              t.set(n.substr(1), e[n])
            }
            return t
          }(e.props)
        }
      } else {
        e.props = new Map()
      }
    }
  }
  function Si(e) {
    return {
      props: (e$props = e.props, n = Object.create(null), e$props.forEach(function (e, t) {
        n["$" + t] = e
      }), n)
    }
    var /* [auto-meaningful-name] */e$props
    var n
  }
  function Ti(e, t) {
    var r
    var i
    var /* [auto-meaningful-name] */Ee$warn_function = Ee.warn_function
    try {
      var a
      var s = (t = A(t, {
        compress: {},
        ecma: undefined,
        enclose: false,
        ie8: false,
        keep_classnames: undefined,
        keep_fnames: false,
        mangle: {},
        module: false,
        nameCache: null,
        output: {},
        parse: {},
        rename: undefined,
        safari10: false,
        sourceMap: false,
        timings: false,
        toplevel: false,
        warnings: false,
        wrap: false
      }, true)).timings && {
        start: Date.now()
      }
      if (undefined === t.keep_classnames) {
        t.keep_classnames = t.keep_fnames
      }
      if (undefined === t.rename) {
        t.rename = t.compress && t.mangle
      }
      Oi("ecma", t, ["parse", "compress", "output"])
      Oi("ie8", t, ["compress", "mangle", "output"])
      Oi("keep_classnames", t, ["compress", "mangle"])
      Oi("keep_fnames", t, ["compress", "mangle"])
      Oi("module", t, ["parse", "compress", "mangle"])
      Oi("safari10", t, ["mangle", "output"])
      Oi("toplevel", t, ["compress", "mangle"])
      Oi("warnings", t, ["compress"])
      if (t.mangle) {
        t.mangle = A(t.mangle, {
          cache: t.nameCache && (t.nameCache.vars || {}),
          eval: false,
          ie8: false,
          keep_classnames: false,
          keep_fnames: false,
          module: false,
          properties: false,
          reserved: [],
          safari10: false,
          toplevel: false
        }, true)
        if (t.mangle.properties) {
          if ("object" != typeof t.mangle.properties) {
            t.mangle.properties = {}
          }
          if (t.mangle.properties.keep_quoted) {
            a = t.mangle.properties.reserved
            if (!Array.isArray(a)) {
              a = []
            }
            t.mangle.properties.reserved = a
          }
          if (!(!t.nameCache || "cache" in t.mangle.properties)) {
            t.mangle.properties.cache = t.nameCache.props || {}
          }
        }
        ki(t.mangle.cache)
        ki(t.mangle.properties.cache)
      }
      if (t.sourceMap) {
        t.sourceMap = A(t.sourceMap, {
          asObject: false,
          content: null,
          filename: null,
          includeSources: false,
          root: null,
          url: null
        }, true)
      }
      var c
      var u = []
      if (t.warnings && !Ee.warn_function) {
        Ee.warn_function = function (e) {
          u.push(e)
        }
      }
      if (s) {
        s.parse = Date.now()
      }
      if (e instanceof ze) {
        c = e
      } else {
        for (var l in "string" == typeof e && (e = [e]), t.parse = t.parse || {}, t.parse.toplevel = null, e) if (B(e, l) && (t.parse.filename = l, t.parse.toplevel = ye(e[l], t.parse), t.sourceMap && "inline" == t.sourceMap.content)) {
          if (Object.keys(e).length > 1) {
            throw new Error("inline source map only works with singular input")
          }
          t.sourceMap.content = (r = e[l], (i = /(?:^|[^.])\/\/# sourceMappingURL=data:application\/json(;[\w=-]*)?;base64,([+/0-9A-Za-z]*=*)\s*$/.exec(r)) ? xi(i[2]) : (Ee.warn("inline source map not found"), null))
        }
        c = t.parse.toplevel
      }
      if (a && "strict" !== t.mangle.properties.keep_quoted) {
        bi(c, a)
      }
      if (t.wrap) {
        c = c.wrap_commonjs(t.wrap)
      }
      if (t.enclose) {
        c = c.wrap_enclose(t.enclose)
      }
      if (s) {
        s.rename = Date.now()
      }
      if (s) {
        s.compress = Date.now()
      }
      if (t.compress) {
        c = new gr(t.compress).compress(c)
      }
      if (s) {
        s.scope = Date.now()
      }
      if (t.mangle) {
        c.figure_out_scope(t.mangle)
      }
      if (s) {
        s.mangle = Date.now()
      }
      if (t.mangle) {
        or.reset()
        c.compute_char_frequency(t.mangle)
        c.mangle_names(t.mangle)
      }
      if (s) {
        s.properties = Date.now()
      }
      if (t.mangle && t.mangle.properties) {
        c = Ei(c, t.mangle.properties)
      }
      if (s) {
        s.output = Date.now()
      }
      var f = {}
      if (t.output.ast) {
        f.ast = c
      }
      if (!B(t.output, "code") || t.output.code) {
        if (t.sourceMap && ("string" == typeof t.sourceMap.content && (t.sourceMap.content = JSON.parse(t.sourceMap.content)), t.output.source_map = function (e) {
          e = A(e, {
            file: null,
            root: null,
            orig: null,
            orig_line_diff: 0,
            dest_line_diff: 0
          })
          var t = new n.SourceMapGenerator({
            file: e.file,
            sourceRoot: e.root
          })
          var r = e.orig && new n.SourceMapConsumer(e.orig)
          if (r) {
            r.sources.forEach(function (e) {
              var n = r.sourceContentFor(e, true)
              if (n) {
                t.setSourceContent(e, n)
              }
            })
          }
          return {
            add: function (n, i, o, a, s, c) {
              if (r) {
                var u = r.originalPositionFor({
                  line: a,
                  column: s
                })
                if (null === u.source) {
                  return
                }
                n = u.source
                a = u.line
                s = u.column
                c = u.name || c
              }
              t.addMapping({
                generated: {
                  line: i + e.dest_line_diff,
                  column: o
                },
                original: {
                  line: a + e.orig_line_diff,
                  column: s
                },
                source: n,
                name: c
              })
            },
            get: function () {
              return t
            },
            toString: function () {
              return JSON.stringify(t.toJSON())
            }
          }
        }({
          file: t.sourceMap.filename,
          orig: t.sourceMap.content,
          root: t.sourceMap.root
        }), t.sourceMap.includeSources)) {
          if (e instanceof ze) {
            throw new Error("original source content unavailable")
          }
          for (var l in e) if (B(e, l)) {
            t.output.source_map.get().setSourceContent(l, e[l])
          }
        }
        delete t.output.ast
        delete t.output.code
        var d = qn(t.output)
        c.print(d)
        f.code = d.get()
        if (t.sourceMap) {
          if (t.sourceMap.asObject) {
            f.map = t.output.source_map.get().toJSON()
          } else {
            f.map = t.output.source_map.toString()
          }
          if ("inline" == t.sourceMap.url) {
            var h = "object" == typeof f.map ? JSON.stringify(f.map) : f.map
            f.code += "\n//# sourceMappingURL=data:application/json;charset=utf-8;base64," + Ci(h)
          } else if (t.sourceMap.url) {
            f.code += "\n//# sourceMappingURL=" + t.sourceMap.url
          }
        }
      }
      if (t.nameCache && t.mangle) {
        if (t.mangle.cache) {
          t.nameCache.vars = Si(t.mangle.cache)
        }
        if (t.mangle.properties && t.mangle.properties.cache) {
          t.nameCache.props = Si(t.mangle.properties.cache)
        }
      }
      if (s) {
        s.end = Date.now()
        f.timings = {
          parse: .001 * (s.rename - s.parse),
          rename: .001 * (s.compress - s.rename),
          compress: .001 * (s.scope - s.compress),
          scope: .001 * (s.mangle - s.scope),
          mangle: .001 * (s.properties - s.mangle),
          properties: .001 * (s.output - s.properties),
          output: .001 * (s.end - s.output),
          total: .001 * (s.end - s.start)
        }
      }
      if (u.length) {
        f.warnings = u
      }
      return f
    } catch (e) {
      return {
        error: e
      }
    } finally {
      Ee.warn_function = Ee$warn_function
    }
  }
  !function () {
    var e = function (e) {
      for (var t = true, n = 0; n < e.length; n++) {
        if (t && e[n] instanceof xe && e[n].body instanceof wn) {
          e[n] = new Oe({
            start: e[n].start,
            end: e[n].end,
            value: e[n].body.value
          })
        } else {
          if (!(!t || e[n] instanceof xe && e[n].body instanceof wn)) {
            t = false
          }
        }
      }
      return e
    }
    var t = {
      Program: function (t) {
        return new ze({
          start: r(t),
          end: o(t),
          body: e(t.body.map(c))
        })
      },
      ArrayPattern: function (e) {
        return new $e({
          start: r(e),
          end: o(e),
          names: e.elements.map(function (e) {
            return null === e ? new Bn() : c(e)
          }),
          is_array: true
        })
      },
      ObjectPattern: function (e) {
        return new $e({
          start: r(e),
          end: o(e),
          names: e.properties.map(c),
          is_array: false
        })
      },
      AssignmentPattern: function (e) {
        return new Lt({
          start: r(e),
          end: o(e),
          left: c(e.left),
          operator: "=",
          right: c(e.right)
        })
      },
      SpreadElement: function (e) {
        return new Qe({
          start: r(e),
          end: o(e),
          expression: c(e.argument)
        })
      },
      RestElement: function (e) {
        return new Qe({
          start: r(e),
          end: o(e),
          expression: c(e.argument)
        })
      },
      TemplateElement: function (e) {
        return new et({
          start: r(e),
          end: o(e),
          value: e.value.cooked,
          raw: e.value.raw
        })
      },
      TemplateLiteral: function (e) {
        for (var t = [], n = 0; n < e.quasis.length; n++) {
          t.push(c(e.quasis[n]))
          if (e.expressions[n]) {
            t.push(c(e.expressions[n]))
          }
        }
        return new Ze({
          start: r(e),
          end: o(e),
          segments: t
        })
      },
      TaggedTemplateExpression: function (e) {
        return new Je({
          start: r(e),
          end: o(e),
          template_string: c(e.quasi),
          prefix: c(e.tag)
        })
      },
      FunctionDeclaration: function (t) {
        return new qe({
          start: r(t),
          end: o(t),
          name: c(t.id),
          argnames: t.params.map(c),
          is_generator: t.generator,
          async: t.async,
          body: e(c(t.body).body)
        })
      },
      FunctionExpression: function (t) {
        return new Xe({
          start: r(t),
          end: o(t),
          name: c(t.id),
          argnames: t.params.map(c),
          is_generator: t.generator,
          async: t.async,
          body: e(c(t.body).body)
        })
      },
      ArrowFunctionExpression: function (e) {
        var t = "BlockStatement" === e.body.type ? c(e.body).body : [
          E(rt, {}, {
            value: c(e.body)
          })
        ]
        return new Ye({
          start: r(e),
          end: o(e),
          argnames: e.params.map(c),
          body: t,
          async: e.async
        })
      },
      ExpressionStatement: function (e) {
        return new ke({
          start: r(e),
          end: o(e),
          body: c(e.expression)
        })
      },
      TryStatement: function (e) {
        var t = e.handlers || [e.handler]
        if (t.length > 1 || e.guardedHandlers && e.guardedHandlers.length) {
          throw new Error("Multiple catch clauses are not supported.")
        }
        return new _t({
          start: r(e),
          end: o(e),
          body: c(e.block).body,
          bcatch: c(t[0]),
          bfinally: e.finalizer ? new gt(c(e.finalizer)) : null
        })
      },
      Property: function (e) {
        var /* [auto-meaningful-name] */e$key = e.key
        var n = {
          start: r(e$key || e.value),
          end: o(e.value),
          key: "Identifier" == e$key.type ? e$key.name : e$key.value,
          value: c(e.value)
        }
        if (e.computed) {
          n.key = c(e.key)
        }
        return e.method ? (n.is_generator = e.value.generator, n.async = e.value.async, e.computed ? n.key = c(e.key) : n.key = new an({
          name: n.key
        }), new Qt(n)) : "init" == e.kind ? ("Identifier" != e$key.type && "Literal" != e$key.type && (n.key = c(e$key)), new Vt(n)) : ("string" != typeof n.key && "number" != typeof n.key || (n.key = new an({
          name: n.key
        })), n.value = new Ke(n.value), "get" == e.kind ? new zt(n) : "set" == e.kind ? new Gt(n) : "method" == e.kind ? (n.async = e.value.async, n.is_generator = e.value.generator, n.quote = e.computed ? "\"" : null, new Qt(n)) : undefined)
      },
      MethodDefinition: function (e) {
        var t = {
          start: r(e),
          end: o(e),
          key: e.computed ? c(e.key) : new an({
            name: e.key.name || e.key.value
          }),
          value: c(e.value),
          static: e.static
        }
        return "get" == e.kind ? new zt(t) : "set" == e.kind ? new Gt(t) : (t.is_generator = e.value.generator, t.async = e.value.async, new Qt(t))
      },
      FieldDefinition: function (e) {
        var t
        if (e.computed) {
          t = c(e.key)
        } else {
          if ("Identifier" !== e.key.type) {
            throw new Error("Non-Identifier key in FieldDefinition")
          }
          t = c(e.key)
        }
        return new Kt({
          start: r(e),
          end: o(e),
          key: t,
          value: c(e.value),
          static: e.static
        })
      },
      ArrayExpression: function (e) {
        return new jt({
          start: r(e),
          end: o(e),
          elements: e.elements.map(function (e) {
            return null === e ? new Bn() : c(e)
          })
        })
      },
      ObjectExpression: function (e) {
        return new Ut({
          start: r(e),
          end: o(e),
          properties: e.properties.map(function (e) {
            if (!("SpreadElement" === e.type)) {
              e.type = "Property"
            }
            return c(e)
          })
        })
      },
      SequenceExpression: function (e) {
        return new St({
          start: r(e),
          end: o(e),
          expressions: e.expressions.map(c)
        })
      },
      MemberExpression: function (e) {
        return new (e.computed ? Dt : Bt)({
          start: r(e),
          end: o(e),
          property: e.computed ? c(e.property) : e.property.name,
          expression: c(e.object)
        })
      },
      SwitchCase: function (e) {
        return new (e.test ? pt : ht)({
          start: r(e),
          end: o(e),
          expression: c(e.test),
          body: e.consequent.map(c)
        })
      },
      VariableDeclaration: function (e) {
        return new ("const" === e.kind ? bt : "let" === e.kind ? yt : mt)({
          start: r(e),
          end: o(e),
          definitions: e.declarations.map(c)
        })
      },
      ImportDeclaration: function (e) {
        var t = null
        var n = null
        e.specifiers.forEach(function (e) {
          if ("ImportSpecifier" === e.type) {
            if (!n) {
              n = []
            }
            n.push(new Et({
              start: r(e),
              end: o(e),
              foreign_name: c(e.imported),
              name: c(e.local)
            }))
          } else {
            if ("ImportDefaultSpecifier" === e.type) {
              t = c(e.local)
            } else {
              if ("ImportNamespaceSpecifier" === e.type) {
                if (!n) {
                  n = []
                }
                n.push(new Et({
                  start: r(e),
                  end: o(e),
                  foreign_name: new hn({
                    name: "*"
                  }),
                  name: c(e.local)
                }))
              }
            }
          }
        })
        return new xt({
          start: r(e),
          end: o(e),
          imported_name: t,
          imported_names: n,
          module_name: c(e.source)
        })
      },
      ExportAllDeclaration: function (e) {
        return new Ct({
          start: r(e),
          end: o(e),
          exported_names: [
            new Et({
              name: new gn({
                name: "*"
              }),
              foreign_name: new gn({
                name: "*"
              })
            })
          ],
          module_name: c(e.source)
        })
      },
      ExportNamedDeclaration: function (e) {
        return new Ct({
          start: r(e),
          end: o(e),
          exported_definition: c(e.declaration),
          exported_names: e.specifiers && e.specifiers.length ? e.specifiers.map(function (e) {
            return new Et({
              foreign_name: c(e.exported),
              name: c(e.local)
            })
          }) : null,
          module_name: c(e.source)
        })
      },
      ExportDefaultDeclaration: function (e) {
        return new Ct({
          start: r(e),
          end: o(e),
          exported_value: c(e.declaration),
          is_default: true
        })
      },
      Literal: function (e) {
        var /* [auto-meaningful-name] */e$value = e.value
        var n = {
          start: r(e),
          end: o(e)
        }
        var /* [auto-meaningful-name] */e$regex = e.regex
        if (e$regex && e$regex.pattern) {
          n.value = {
            source: e$regex.pattern,
            flags: e$regex.flags
          }
          return new Cn(n)
        }
        if (e$regex) {
          var s = e.raw || e$value
          var c = s.match(/^\/(.*)\/(\w*)$/)
          if (!c) {
            throw new Error("Invalid regex source " + s)
          }
          var u = i(c, 3)
          u[0]
          var l = u[1]
          var f = u[2]
          n.value = {
            source: l,
            flags: f
          }
          return new Cn(n)
        }
        if (null === e$value) {
          return new kn(n)
        }
        switch (typeof e$value) {
          case "string":
            n.value = e$value
            return new wn(n)
          case "number":
            n.value = e$value
            return new En(n)
          case "boolean":
            return new (e$value ? Fn : Rn)(n)
        }
      },
      MetaProperty: function (e) {
        if ("new" === e.meta.name && "target" === e.property.name) {
          return new $t({
            start: r(e),
            end: o(e)
          })
        }
      },
      Identifier: function (e) {
        var t = s[s.length - 2]
        return new ("LabeledStatement" == t.type ? pn : "VariableDeclarator" == t.type && t.id === e ? "const" == t.kind ? tn : "let" == t.kind ? nn : Zt : /Import.*Specifier/.test(t.type) ? t.local === e ? dn : hn : "ExportSpecifier" == t.type ? t.local === e ? An : gn : "FunctionExpression" == t.type ? t.id === e ? cn : rn : "FunctionDeclaration" == t.type ? t.id === e ? on : rn : "ArrowFunctionExpression" == t.type ? t.params.includes(e) ? rn : _n : "ClassExpression" == t.type ? t.id === e ? ln : _n : "Property" == t.type ? t.key === e && t.computed || t.value === e ? _n : an : "FieldDefinition" == t.type ? t.key === e && t.computed || t.value === e ? _n : sn : "ClassDeclaration" == t.type ? t.id === e ? un : _n : "MethodDefinition" == t.type ? t.computed ? _n : an : "CatchClause" == t.type ? fn : "BreakStatement" == t.type || "ContinueStatement" == t.type ? vn : _n)({
          start: r(e),
          end: o(e),
          name: e.name
        })
      },
      BigIntLiteral: function (e) {
        return new xn({
          start: r(e),
          end: o(e),
          value: e.value
        })
      }
    }
    function n(e) {
      if ("Literal" == e.type) {
        return null != e.raw ? e.raw : e.value + ""
      }
    }
    function r(e) {
      var /* [auto-meaningful-name] */e$loc = e.loc
      var r = e$loc && e$loc.start
      var /* [auto-meaningful-name] */e$range = e.range
      return new we({
        file: e$loc && e$loc.source,
        line: r && r.line,
        col: r && r.column,
        pos: e$range ? e$range[0] : e.start,
        endline: r && r.line,
        endcol: r && r.column,
        endpos: e$range ? e$range[0] : e.start,
        raw: n(e)
      })
    }
    function o(e) {
      var /* [auto-meaningful-name] */e$loc = e.loc
      var r = e$loc && e$loc.end
      var /* [auto-meaningful-name] */e$range = e.range
      return new we({
        file: e$loc && e$loc.source,
        line: r && r.line,
        col: r && r.column,
        pos: e$range ? e$range[1] : e.end,
        endline: r && r.line,
        endcol: r && r.column,
        endpos: e$range ? e$range[1] : e.end,
        raw: n(e)
      })
    }
    function a(e, n, i) {
      var a = "function From_Moz_" + e + "(M){\n"
      a += "return new U2." + n.name + "({\nstart: my_start_token(M),\nend: my_end_token(M)"
      var s = "function To_Moz_" + e + "(M){\n"
      s += "return {\ntype: " + JSON.stringify(e)
      if (i) {
        i.split(/\s*,\s*/).forEach(function (e) {
          var t = /([a-z0-9$_]+)([=@>%])([a-z0-9$_]+)/i.exec(e)
          if (!t) {
            throw new Error("Can't understand property map: " + e)
          }
          var n = t[1]
          var r = t[2]
          var i = t[3]
          switch (a += ",\n" + i + ": ", s += ",\n" + n + ": ", r) {
            case "@":
              a += "M." + n + ".map(from_moz)"
              s += "M." + i + ".map(to_moz)"
              break
            case ">":
              a += "from_moz(M." + n + ")"
              s += "to_moz(M." + i + ")"
              break
            case "=":
              a += "M." + n
              s += "M." + i
              break
            case "%":
              a += "from_moz(M." + n + ").body"
              s += "to_moz_block(M)"
              break
            default:
              throw new Error("Can't understand operator in propmap: " + e)
          }
        })
      }
      a += "\n})\n}"
      s += "\n}\n}"
      a = new Function("U2", "my_start_token", "my_end_token", "from_moz", "return(" + a + ")")(Gn, r, o, c)
      s = new Function("to_moz", "to_moz_block", "to_moz_scope", "return(" + s + ")")(f, h, p)
      t[e] = a
      u(n, s)
    }
    t.UpdateExpression = t.UnaryExpression = function (e) {
      return new (("prefix" in e ? e.prefix : "UnaryExpression" == e.type) ? Rt : Ft)({
        start: r(e),
        end: o(e),
        operator: e.operator,
        expression: c(e.argument)
      })
    }
    t.ClassDeclaration = t.ClassExpression = function (e) {
      return new ("ClassDeclaration" === e.type ? Xt : Yt)({
        start: r(e),
        end: o(e),
        name: c(e.id),
        extends: c(e.superClass),
        properties: e.body.body.map(c)
      })
    }
    a("EmptyStatement", Ie)
    a("BlockStatement", De, "body@body")
    a("IfStatement", lt, "test>condition, consequent>body, alternate>alternative")
    a("LabeledStatement", Fe, "label>label, body>body")
    a("BreakStatement", at, "label>label")
    a("ContinueStatement", st, "label>label")
    a("WithStatement", Ve, "object>expression, body>body")
    a("SwitchStatement", ft, "discriminant>expression, cases@body")
    a("ReturnStatement", rt, "argument>value")
    a("ThrowStatement", it, "argument>value")
    a("WhileStatement", Le, "test>condition, body>body")
    a("DoWhileStatement", Me, "test>condition, body>body")
    a("ForStatement", je, "init>init, test>condition, update>step, body>body")
    a("ForInStatement", Ue, "left>init, right>object, body>body")
    a("ForOfStatement", He, "left>init, right>object, body>body, await=await")
    a("AwaitExpression", ct, "argument>expression")
    a("YieldExpression", ut, "argument>expression, delegate=is_star")
    a("DebuggerStatement", Ce)
    a("VariableDeclarator", wt, "id>name, init>value")
    a("CatchClause", At, "param>argname, body%body")
    a("ThisExpression", mn)
    a("Super", yn)
    a("BinaryExpression", Pt, "operator=operator, left>left, right>right")
    a("LogicalExpression", Pt, "operator=operator, left>left, right>right")
    a("AssignmentExpression", Mt, "operator=operator, left>left, right>right")
    a("ConditionalExpression", Nt, "test>condition, consequent>consequent, alternate>alternative")
    a("NewExpression", kt, "callee>expression, arguments@args")
    a("CallExpression", Ot, "callee>expression, arguments@args")
    u(ze, function (e) {
      return p("Program", e)
    })
    u(Qe, function (e) {
      return {
        type: d() ? "RestElement" : "SpreadElement",
        argument: f(e.expression)
      }
    })
    u(Je, function (e) {
      return {
        type: "TaggedTemplateExpression",
        tag: f(e.prefix),
        quasi: f(e.template_string)
      }
    })
    u(Ze, function (e) {
      for (var t = [], n = [], r = 0; r < e.segments.length; r++) {
        if (r % 2 != 0) {
          n.push(f(e.segments[r]))
        } else {
          t.push({
            type: "TemplateElement",
            value: {
              raw: e.segments[r].raw,
              cooked: e.segments[r].value
            },
            tail: r === e.segments.length - 1
          })
        }
      }
      return {
        type: "TemplateLiteral",
        quasis: t,
        expressions: n
      }
    })
    u(qe, function (e) {
      return {
        type: "FunctionDeclaration",
        id: f(e.name),
        params: e.argnames.map(f),
        generator: e.is_generator,
        async: e.async,
        body: p("BlockStatement", e)
      }
    })
    u(Xe, function (e, t) {
      var n = undefined !== t.is_generator ? t.is_generator : e.is_generator
      return {
        type: "FunctionExpression",
        id: f(e.name),
        params: e.argnames.map(f),
        generator: n,
        async: e.async,
        body: p("BlockStatement", e)
      }
    })
    u(Ye, function (e) {
      var t = {
        type: "BlockStatement",
        body: e.body.map(f)
      }
      return {
        type: "ArrowFunctionExpression",
        params: e.argnames.map(f),
        async: e.async,
        body: t
      }
    })
    u($e, function (e) {
      return e.is_array ? {
        type: "ArrayPattern",
        elements: e.names.map(f)
      } : {
        type: "ObjectPattern",
        properties: e.names.map(f)
      }
    })
    u(Oe, function (e) {
      return {
        type: "ExpressionStatement",
        expression: {
          type: "Literal",
          value: e.value,
          raw: e.print_to_string()
        },
        directive: e.value
      }
    })
    u(ke, function (e) {
      return {
        type: "ExpressionStatement",
        expression: f(e.body)
      }
    })
    u(dt, function (e) {
      return {
        type: "SwitchCase",
        test: f(e.expression),
        consequent: e.body.map(f)
      }
    })
    u(_t, function (e) {
      return {
        type: "TryStatement",
        block: h(e),
        handler: f(e.bcatch),
        guardedHandlers: [],
        finalizer: f(e.bfinally)
      }
    })
    u(At, function (e) {
      return {
        type: "CatchClause",
        param: f(e.argname),
        guard: null,
        body: h(e)
      }
    })
    u(vt, function (e) {
      return {
        type: "VariableDeclaration",
        kind: e instanceof bt ? "const" : e instanceof yt ? "let" : "var",
        declarations: e.definitions.map(f)
      }
    })
    u(Ct, function (e) {
      return e.exported_names ? "*" === e.exported_names[0].name.name ? {
        type: "ExportAllDeclaration",
        source: f(e.module_name)
      } : {
        type: "ExportNamedDeclaration",
        specifiers: e.exported_names.map(function (e) {
          return {
            type: "ExportSpecifier",
            exported: f(e.foreign_name),
            local: f(e.name)
          }
        }),
        declaration: f(e.exported_definition),
        source: f(e.module_name)
      } : {
        type: e.is_default ? "ExportDefaultDeclaration" : "ExportNamedDeclaration",
        declaration: f(e.exported_value || e.exported_definition)
      }
    })
    u(xt, function (e) {
      var t = []
      if (e.imported_name) {
        t.push({
          type: "ImportDefaultSpecifier",
          local: f(e.imported_name)
        })
      }
      if (e.imported_names && "*" === e.imported_names[0].foreign_name.name) {
        t.push({
          type: "ImportNamespaceSpecifier",
          local: f(e.imported_names[0].name)
        })
      } else {
        if (e.imported_names) {
          e.imported_names.forEach(function (e) {
            t.push({
              type: "ImportSpecifier",
              local: f(e.name),
              imported: f(e.foreign_name)
            })
          })
        }
      }
      return {
        type: "ImportDeclaration",
        specifiers: t,
        source: f(e.module_name)
      }
    })
    u(St, function (e) {
      return {
        type: "SequenceExpression",
        expressions: e.expressions.map(f)
      }
    })
    u(Tt, function (e) {
      var t = e instanceof Dt
      return {
        type: "MemberExpression",
        object: f(e.expression),
        computed: t,
        property: t ? f(e.property) : {
          type: "Identifier",
          name: e.property
        }
      }
    })
    u(It, function (e) {
      return {
        type: "++" == e.operator || "--" == e.operator ? "UpdateExpression" : "UnaryExpression",
        operator: e.operator,
        prefix: e instanceof Rt,
        argument: f(e.expression)
      }
    })
    u(Pt, function (e) {
      return "=" == e.operator && d() ? {
        type: "AssignmentPattern",
        left: f(e.left),
        right: f(e.right)
      } : {
        type: "&&" == e.operator || "||" == e.operator || "??" === e.operator ? "LogicalExpression" : "BinaryExpression",
        left: f(e.left),
        operator: e.operator,
        right: f(e.right)
      }
    })
    u(jt, function (e) {
      return {
        type: "ArrayExpression",
        elements: e.elements.map(f)
      }
    })
    u(Ut, function (e) {
      return {
        type: "ObjectExpression",
        properties: e.properties.map(f)
      }
    })
    u(Ht, function (e, t) {
      var n
      var r = e.key instanceof Ee ? f(e.key) : {
        type: "Identifier",
        value: e.key
      }
      if ("number" == typeof e.key) {
        r = {
          type: "Literal",
          value: Number(e.key)
        }
      }
      if ("string" == typeof e.key) {
        r = {
          type: "Identifier",
          name: e.key
        }
      }
      var i = "string" == typeof e.key || "number" == typeof e.key
      var o = !i && (!(e.key instanceof qt) || e.key instanceof _n)
      if (e instanceof Vt) {
        n = "init"
        o = !i
      } else {
        if (e instanceof zt) {
          n = "get"
        } else {
          if (e instanceof Gt) {
            n = "set"
          }
        }
      }
      return e instanceof Kt ? {
        type: "FieldDefinition",
        computed: o,
        key: r,
        value: f(e.value),
        static: e.static
      } : t instanceof Wt ? {
        type: "MethodDefinition",
        computed: o,
        kind: n,
        static: e.static,
        key: f(e.key),
        value: f(e.value)
      } : {
        type: "Property",
        computed: o,
        kind: n,
        key: r,
        value: f(e.value)
      }
    })
    u(Qt, function (e, t) {
      return t instanceof Ut ? {
        type: "Property",
        computed: !(e.key instanceof qt) || e.key instanceof _n,
        kind: "init",
        method: true,
        shorthand: false,
        key: f(e.key),
        value: f(e.value)
      } : {
        type: "MethodDefinition",
        computed: !(e.key instanceof qt) || e.key instanceof _n,
        kind: "constructor" === e.key ? "constructor" : "method",
        static: e.static,
        key: f(e.key),
        value: f(e.value)
      }
    })
    u(Wt, function (e) {
      return {
        type: e instanceof Yt ? "ClassExpression" : "ClassDeclaration",
        superClass: f(e.extends),
        id: e.name ? f(e.name) : null,
        body: {
          type: "ClassBody",
          body: e.properties.map(f)
        }
      }
    })
    u($t, function () {
      return {
        type: "MetaProperty",
        meta: {
          type: "Identifier",
          name: "new"
        },
        property: {
          type: "Identifier",
          name: "target"
        }
      }
    })
    u(qt, function (e, t) {
      if (e instanceof an && t.quote) {
        return {
          type: "Literal",
          value: e.name
        }
      }
      var n = e.definition()
      return {
        type: "Identifier",
        name: n ? n.mangled_name || n.name : e.name
      }
    })
    u(Cn, function (e) {
      var /* [auto-meaningful-name] */e$value$source = e.value.source
      var /* [auto-meaningful-name] */e$value$flags = e.value.flags
      return {
        type: "Literal",
        value: null,
        raw: e.print_to_string(),
        regex: {
          pattern: e$value$source,
          flags: e$value$flags
        }
      }
    })
    u(bn, function (e) {
      var /* [auto-meaningful-name] */e$value = e.value
      return "number" == typeof e$value && (e$value < 0 || 0 === e$value && 1 / e$value < 0) ? {
        type: "UnaryExpression",
        operator: "-",
        prefix: true,
        argument: {
          type: "Literal",
          value: -e$value,
          raw: e.start.raw
        }
      } : {
        type: "Literal",
        value: e$value,
        raw: e.start.raw
      }
    })
    u(On, function (e) {
      return {
        type: "Identifier",
        name: String(e.value)
      }
    })
    u(xn, function (e) {
      return {
        type: "BigIntLiteral",
        value: e.value
      }
    })
    In.DEFMETHOD("to_mozilla_ast", bn.prototype.to_mozilla_ast)
    kn.DEFMETHOD("to_mozilla_ast", bn.prototype.to_mozilla_ast)
    Bn.DEFMETHOD("to_mozilla_ast", function () {
      return null
    })
    Be.DEFMETHOD("to_mozilla_ast", De.prototype.to_mozilla_ast)
    We.DEFMETHOD("to_mozilla_ast", Xe.prototype.to_mozilla_ast)
    var s = null
    function c(e) {
      s.push(e)
      var n = null != e ? t[e.type](e) : null
      s.pop()
      return n
    }
    function u(e, t) {
      e.DEFMETHOD("to_mozilla_ast", function (e) {
        n = t(this, e)
        this$start = this.start
        this$end = this.end
        return this$start && this$end ? (null != this$start.pos && null != this$end.endpos && (n.range = [this$start.pos, this$end.endpos]), this$start.line && (n.loc = {
          start: {
            line: this$start.line,
            column: this$start.col
          },
          end: this$end.endline ? {
            line: this$end.endline,
            column: this$end.endcol
          } : null
        }, this$start.file && (n.loc.source = this$start.file)), n) : n
        var n
        var /* [auto-meaningful-name] */this$start
        var /* [auto-meaningful-name] */this$end
      })
    }
    Ee.from_mozilla_ast = function (e) {
      var t = s
      s = []
      var n = c(e)
      s = t
      return n
    }
    var l = null
    function f(e) {
      if (null === l) {
        l = []
      }
      l.push(e)
      var t = null != e ? e.to_mozilla_ast(l[l.length - 2]) : null
      l.pop()
      if (0 === l.length) {
        l = null
      }
      return t
    }
    function d() {
      for (var /* [auto-meaningful-name] */l$length = l.length; l$length--;) {
        if (l[l$length] instanceof $e) {
          return true
        }
      }
      return false
    }
    function h(e) {
      return {
        type: "BlockStatement",
        body: e.body.map(f)
      }
    }
    function p(e, t) {
      var n = t.body.map(f)
      if (t.body[0] instanceof ke && t.body[0].body instanceof wn) {
        n.unshift(f(new Ie(t.body[0])))
      }
      return {
        type: e,
        body: n
      }
    }
  }()
  t.AST_Accessor = Ke
  t.AST_Array = jt
  t.AST_Arrow = Ye
  t.AST_Assign = Mt
  t.AST_Atom = On
  t.AST_Await = ct
  t.AST_Binary = Pt
  t.AST_Block = Be
  t.AST_BlockStatement = De
  t.AST_Boolean = In
  t.AST_Break = at
  t.AST_Call = Ot
  t.AST_Case = pt
  t.AST_Catch = At
  t.AST_Class = Wt
  t.AST_ClassExpression = Yt
  t.AST_ConciseMethod = Qt
  t.AST_Conditional = Nt
  t.AST_Const = bt
  t.AST_Constant = bn
  t.AST_Continue = st
  t.AST_DWLoop = Ne
  t.AST_Debugger = Ce
  t.AST_DefClass = Xt
  t.AST_Default = ht
  t.AST_DefaultAssign = Lt
  t.AST_Definitions = vt
  t.AST_Defun = qe
  t.AST_Destructuring = $e
  t.AST_Directive = Oe
  t.AST_Do = Me
  t.AST_Dot = Bt
  t.AST_EmptyStatement = Ie
  t.AST_Exit = nt
  t.AST_Expansion = Qe
  t.AST_Export = Ct
  t.AST_False = Rn
  t.AST_Finally = gt
  t.AST_For = je
  t.AST_ForIn = Ue
  t.AST_ForOf = He
  t.AST_Function = Xe
  t.AST_Hole = Bn
  t.AST_If = lt
  t.AST_Import = xt
  t.AST_Infinity = Dn
  t.AST_IterationStatement = Pe
  t.AST_Jump = tt
  t.AST_Label = pn
  t.AST_LabelRef = vn
  t.AST_LabeledStatement = Fe
  t.AST_Lambda = We
  t.AST_Let = yt
  t.AST_LoopControl = ot
  t.AST_NaN = Sn
  t.AST_NameMapping = Et
  t.AST_New = kt
  t.AST_NewTarget = $t
  t.AST_Node = Ee
  t.AST_Null = kn
  t.AST_Number = En
  t.AST_Object = Ut
  t.AST_ObjectGetter = zt
  t.AST_ObjectKeyVal = Vt
  t.AST_ObjectProperty = Ht
  t.AST_ObjectSetter = Gt
  t.AST_PrefixedTemplateString = Je
  t.AST_PropAccess = Tt
  t.AST_RegExp = Cn
  t.AST_Return = rt
  t.AST_Scope = Ge
  t.AST_Sequence = St
  t.AST_SimpleStatement = ke
  t.AST_Statement = xe
  t.AST_StatementWithBody = Re
  t.AST_String = wn
  t.AST_Sub = Dt
  t.AST_Super = yn
  t.AST_Switch = ft
  t.AST_SwitchBranch = dt
  t.AST_Symbol = qt
  t.AST_SymbolBlockDeclaration = en
  t.AST_SymbolCatch = fn
  t.AST_SymbolClass = ln
  t.AST_SymbolConst = tn
  t.AST_SymbolDeclaration = Jt
  t.AST_SymbolDefClass = un
  t.AST_SymbolDefun = on
  t.AST_SymbolExport = An
  t.AST_SymbolExportForeign = gn
  t.AST_SymbolFunarg = rn
  t.AST_SymbolImport = dn
  t.AST_SymbolImportForeign = hn
  t.AST_SymbolLambda = cn
  t.AST_SymbolLet = nn
  t.AST_SymbolMethod = an
  t.AST_SymbolRef = _n
  t.AST_SymbolVar = Zt
  t.AST_TemplateSegment = et
  t.AST_TemplateString = Ze
  t.AST_This = mn
  t.AST_Throw = it
  t.AST_Token = we
  t.AST_Toplevel = ze
  t.AST_True = Fn
  t.AST_Try = _t
  t.AST_Unary = It
  t.AST_UnaryPostfix = Ft
  t.AST_UnaryPrefix = Rt
  t.AST_Undefined = Tn
  t.AST_Var = mt
  t.AST_VarDef = wt
  t.AST_While = Le
  t.AST_With = Ve
  t.AST_Yield = ut
  t.Compressor = gr
  t.OutputStream = qn
  t.TreeTransformer = jn
  t.TreeWalker = Ln
  t._INLINE = Hn
  t._JS_Parse_Error = le
  t._NOINLINE = Vn
  t._PURE = Un
  t._has_annotation = F
  t._tokenizer = pe
  t.base54 = or
  t.default_options = ar
  t.defaults = A
  t.mangle_properties = Ei
  t.minify = Ti
  t.parse = ye
  t.push_uniq = x
  t.reserve_quoted_keys = bi
  t.string_template = C
  t.to_ascii = xi
}(exports, require("./2011/index"))
