/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：1361
 */

"use strict"

var r = require("./1132")
var i = require("./2239/index")
var o = require("./2241")
var a = require("./2242/index")
var s = require("./1362")
var /* [auto-meaningful-name] */s$getLatestEcmaVersion = s.getLatestEcmaVersion
var /* [auto-meaningful-name] */s$getSupportedEcmaVersions = s.getSupportedEcmaVersions
var l = {
  _regular: null,
  _jsx: null,
  get regular() {
    if (null === this._regular) {
      this._regular = r.Parser.extend(a())
    }
    return this._regular
  },
  get jsx() {
    if (null === this._jsx) {
      this._jsx = r.Parser.extend(i(), a())
    }
    return this._jsx
  },
  get: function (e) {
    return Boolean(e && e.ecmaFeatures && e.ecmaFeatures.jsx) ? this.jsx : this.regular
  }
}
exports.version = require("./2244").version
exports.tokenize = function (e, t) {
  var n = l.get(t)
  if (!(t && true === t.tokens)) {
    t = Object.assign({}, t, {
      tokens: true
    })
  }
  return new n(t, e).tokenize()
}
exports.parse = function (e, t) {
  return new (l.get(t))(t, e).parse()
}
exports.Syntax = function () {
  var e
  var t = {}
  for (e in "function" === typeof Object.create && (t = Object.create(null)), o) if (Object.hasOwnProperty.call(o, e)) {
    t[e] = o[e]
  }
  if ("function" === typeof Object.freeze) {
    Object.freeze(t)
  }
  return t
}()
exports.VisitorKeys = require("../777/index").KEYS
exports.latestEcmaVersion = s$getLatestEcmaVersion()
exports.supportedEcmaVersions = s$getSupportedEcmaVersions()
