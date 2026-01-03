/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：1397
 */

"use strict"

Object.defineProperty(exports, "__esModule", {
  value: true
})
var r = require("../../../359")
var i = require("../../../724")
var o = require("../../../1396/501")
var a = require("./2363")
var s = function () {
  function e(e, t, n, s) {
    this.id = i.id()
    this.type = e
    this.serviceIdentifier = n
    this.name = new a.QueryableString(t || "")
    this.metadata = new Array()
    var c = null
    if ("string" === typeof s) {
      c = new o.Metadata(r.NAMED_TAG, s)
    } else {
      if (s instanceof o.Metadata) {
        c = s
      }
    }
    if (null !== c) {
      this.metadata.push(c)
    }
  }
  e.prototype.hasTag = function (e) {
    for (var t = 0, /* [auto-meaningful-name] */this$metadata = this.metadata; t < this$metadata.length; t++) {
      if (this$metadata[t].key === e) {
        return true
      }
    }
    return false
  }
  e.prototype.isArray = function () {
    return this.hasTag(r.MULTI_INJECT_TAG)
  }
  e.prototype.matchesArray = function (e) {
    return this.matchesTag(r.MULTI_INJECT_TAG)(e)
  }
  e.prototype.isNamed = function () {
    return this.hasTag(r.NAMED_TAG)
  }
  e.prototype.isTagged = function () {
    return this.metadata.some(function (e) {
      return e.key !== r.INJECT_TAG && e.key !== r.MULTI_INJECT_TAG && e.key !== r.NAME_TAG && e.key !== r.UNMANAGED_TAG && e.key !== r.NAMED_TAG
    })
  }
  e.prototype.isOptional = function () {
    return this.matchesTag(r.OPTIONAL_TAG)(true)
  }
  e.prototype.getNamedTag = function () {
    return this.isNamed() ? this.metadata.filter(function (e) {
      return e.key === r.NAMED_TAG
    })[0] : null
  }
  e.prototype.getCustomTags = function () {
    return this.isTagged() ? this.metadata.filter(function (e) {
      return e.key !== r.INJECT_TAG && e.key !== r.MULTI_INJECT_TAG && e.key !== r.NAME_TAG && e.key !== r.UNMANAGED_TAG && e.key !== r.NAMED_TAG
    }) : null
  }
  e.prototype.matchesNamedTag = function (e) {
    return this.matchesTag(r.NAMED_TAG)(e)
  }
  e.prototype.matchesTag = function (e) {
    var t = this
    return function (n) {
      for (var r = 0, /* [auto-meaningful-name] */t$metadata = t.metadata; r < t$metadata.length; r++) {
        var o = t$metadata[r]
        if (o.key === e && o.value === n) {
          return true
        }
      }
      return false
    }
  }
  return e
}()
exports.Target = s
