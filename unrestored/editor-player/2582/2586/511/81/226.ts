/** 
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：226
 */

"use strict"

var n = require("./373")
var o = require("./166")
var i = function () {
  function t() {}
  t.decode = function (t, e) {
    var r = this.encodingName(e)
    return this.customDecoder ? this.customDecoder(t, r) : "undefined" === typeof TextDecoder || this.shouldDecodeOnFallback(r) ? this.decodeFallback(t, r) : new TextDecoder(r).decode(t)
  }
  t.shouldDecodeOnFallback = function (e) {
    return !t.isBrowser() && "ISO-8859-1" === e
  }
  t.encode = function (t, e) {
    var r = this.encodingName(e)
    return this.customEncoder ? this.customEncoder(t, r) : "undefined" === typeof TextEncoder ? this.encodeFallback(t) : new TextEncoder().encode(t)
  }
  t.isBrowser = function () {
    return "undefined" !== typeof window && "[object Window]" === {}.toString.call(window)
  }
  t.encodingName = function (t) {
    return "string" === typeof t ? t : t.getName()
  }
  t.encodingCharacterSet = function (t) {
    return t instanceof o.a ? t : o.a.getCharacterSetECIByName(t)
  }
  t.decodeFallback = function (e, r) {
    var i = this.encodingCharacterSet(r)
    if (t.isDecodeFallbackSupported(i)) {
      for (var a = "", u = 0, e$length = e.length; u < e$length; u++) {
        var c = e[u].toString(16)
        if (c.length < 2) {
          c = "0" + c
        }
        a += "%" + c
      }
      return decodeURIComponent(a)
    }
    if (i.equals(o.a.UnicodeBigUnmarked)) {
      return String.fromCharCode.apply(null, new Uint16Array(e.buffer))
    }
    throw new n.a("Encoding " + this.encodingName(r) + " not supported by fallback.")
  }
  t.isDecodeFallbackSupported = function (t) {
    return t.equals(o.a.UTF8) || t.equals(o.a.ISO8859_1) || t.equals(o.a.ASCII)
  }
  t.encodeFallback = function (t) {
    for (var e = btoa(unescape(encodeURIComponent(t))).split(""), r = [], n = 0; n < e.length; n++) {
      r.push(e[n].charCodeAt(0))
    }
    return new Uint8Array(r)
  }
  return t
}()
exports.a = i
