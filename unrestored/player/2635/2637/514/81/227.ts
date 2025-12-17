/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：227
 */

"use strict"

var r = require("./373")
var i = require("./167")
var o = function () {
  function t() {}
  t.decode = function (t, e) {
    var n = this.encodingName(e)
    return this.customDecoder ? this.customDecoder(t, n) : "undefined" === typeof TextDecoder || this.shouldDecodeOnFallback(n) ? this.decodeFallback(t, n) : new TextDecoder(n).decode(t)
  }
  t.shouldDecodeOnFallback = function (e) {
    return !t.isBrowser() && "ISO-8859-1" === e
  }
  t.encode = function (t, e) {
    var n = this.encodingName(e)
    return this.customEncoder ? this.customEncoder(t, n) : "undefined" === typeof TextEncoder ? this.encodeFallback(t) : new TextEncoder().encode(t)
  }
  t.isBrowser = function () {
    return "undefined" !== typeof window && "[object Window]" === {}.toString.call(window)
  }
  t.encodingName = function (t) {
    return "string" === typeof t ? t : t.getName()
  }
  t.encodingCharacterSet = function (t) {
    return t instanceof i.a ? t : i.a.getCharacterSetECIByName(t)
  }
  t.decodeFallback = function (e, n) {
    var o = this.encodingCharacterSet(n)
    if (t.isDecodeFallbackSupported(o)) {
      for (var a = "", s = 0, /* [auto-meaningful-name] */e$length = e.length; s < e$length; s++) {
        var c = e[s].toString(16)
        if (c.length < 2) {
          c = "0" + c
        }
        a += "%" + c
      }
      return decodeURIComponent(a)
    }
    if (o.equals(i.a.UnicodeBigUnmarked)) {
      return String.fromCharCode.apply(null, new Uint16Array(e.buffer))
    }
    throw new r.a("Encoding " + this.encodingName(n) + " not supported by fallback.")
  }
  t.isDecodeFallbackSupported = function (t) {
    return t.equals(i.a.UTF8) || t.equals(i.a.ISO8859_1) || t.equals(i.a.ASCII)
  }
  t.encodeFallback = function (t) {
    for (var e = btoa(unescape(encodeURIComponent(t))).split(""), n = [], r = 0; r < e.length; r++) {
      n.push(e[r].charCodeAt(0))
    }
    return new Uint8Array(n)
  }
  return t
}()
exports.a = o
