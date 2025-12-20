/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：1208
 */

"use strict"

Object.defineProperty(exports, "__esModule", {
  value: true
})
exports.decompressFrames = exports.decompressFrame = exports.parseGIF = undefined
var r
var o = (r = require("./2625")) && r.__esModule ? r : {
  default: r
}
var i = require("./1473")
var a = require("./1474")
var s = require("./2626")
var c = require("./2627")
exports.parseGIF = function (e) {
  var t = new Uint8Array(e)
  return (0, i.parse)((0, a.buildStream)(t), o.default)
}
var l = function (e, t, n) {
  if (e.image) {
    var /* [auto-meaningful-name] */e$image = e.image
    var o = e$image.descriptor.width * e$image.descriptor.height
    var i = (0, c.lzw)(e$image.data.minCodeSize, e$image.data.blocks, o)
    if (e$image.descriptor.lct.interlaced) {
      i = (0, s.deinterlace)(i, e$image.descriptor.width)
    }
    var a = {
      pixels: i,
      dims: {
        top: e.image.descriptor.top,
        left: e.image.descriptor.left,
        width: e.image.descriptor.width,
        height: e.image.descriptor.height
      }
    }
    if (e$image.descriptor.lct && e$image.descriptor.lct.exists) {
      a.colorTable = e$image.lct
    } else {
      a.colorTable = t
    }
    if (e.gce) {
      a.delay = 10 * (e.gce.delay || 10)
      a.disposalType = e.gce.extras.disposal
      if (e.gce.extras.transparentColorGiven) {
        a.transparentIndex = e.gce.transparentColorIndex
      }
    }
    if (n) {
      a.patch = function (e) {
        for (var /* [auto-meaningful-name] */e$pixels$length = e.pixels.length, n = new Uint8ClampedArray(4 * e$pixels$length), r = 0; r < e$pixels$length; r++) {
          var o = 4 * r
          var i = e.pixels[r]
          var a = e.colorTable[i] || [0, 0, 0]
          n[o] = a[0]
          n[o + 1] = a[1]
          n[o + 2] = a[2]
          n[o + 3] = i !== e.transparentIndex ? 255 : 0
        }
        return n
      }(a)
    }
    return a
  }
  console.warn("gif frame does not have associated image.")
}
exports.decompressFrame = l
exports.decompressFrames = function (e, t) {
  return e.frames.filter(function (e) {
    return e.image
  }).map(function (n) {
    return l(n, e.gct, t)
  })
}
