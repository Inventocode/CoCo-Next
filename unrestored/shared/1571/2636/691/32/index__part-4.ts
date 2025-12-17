/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：32__part-4
 */

"use strict"

import { ct, ht, _t, St, Gt, Rn, Nn, Vr, $r, ri, ai } from "./index__part-2"
import { Bi, Di, Fi, Qi, Zi, Po, Lo, Uo } from "./index__part-3"
import "../1006"
var va = function () {
  var e = function (t, n) {
    return (e = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (e, t) {
      e.__proto__ = t
    } || function (e, t) {
      for (var n in t) if (Object.prototype.hasOwnProperty.call(t, n)) {
        e[n] = t[n]
      }
    })(t, n)
  }
  return function (t, n) {
    function r() {
      this.constructor = t
    }
    e(t, n)
    t.prototype = null === n ? Object.create(n) : (r.prototype = n.prototype, new r())
  }
}()
var ma = function (e) {
  function t(t, n) {
    return e.call(this, t ? Math.floor(t) : t, n ? Math.floor(n) : n) || this
  }
  va(t, e)
  t.prototype.clone = function () {
    return new t(this.x, this.y)
  }
  t.prototype.set = function (t, n) {
    return e.prototype.set.call(this, t ? Math.floor(t) : t, n ? Math.floor(n) : n)
  }
  return t
}(ht)
Zi.registerPlugin("extract", Uo)
Zi.registerPlugin("graphics", Po)
Zi.registerPlugin("interaction", Gt)
Zi.registerPlugin("sprite", Lo)
Vr.registerPlugin("extract", ai)
Vr.registerPlugin("interaction", Gt)
Vr.registerPlugin("tilingSprite", Qi)
Vr.registerPlugin("batch", $r)
Bi.registerPlugin(Fi)
ri.registerPlugin(St)
ri.registerPlugin(Di)
var ya = new _t()
Nn.prototype.push = function (e, t) {
  for (var /* [auto-meaningful-name] */this$renderer = this.renderer, /* [auto-meaningful-name] */this$defaultFilterStack = this.defaultFilterStack, i = this.statePool.pop() || new Rn(), /* [auto-meaningful-name] */this$renderer$renderTexture = this.renderer.renderTexture, /* [auto-meaningful-name] */t0$resolution = t[0].resolution, /* [auto-meaningful-name] */t0$padding = t[0].padding, /* [auto-meaningful-name] */t0$autoFit = t[0].autoFit, /* [auto-meaningful-name] */t0$legacy = t[0].legacy, l = 1; l < t.length; l++) {
    var f = t[l]
    t0$resolution = Math.min(t0$resolution, f.resolution)
    t0$padding = Math.max(t0$padding, f.padding)
    t0$autoFit = t0$autoFit && f.autoFit
    t0$legacy = t0$legacy || f.legacy
  }
  if (1 === this$defaultFilterStack.length) {
    this.defaultFilterStack[0].renderTexture = this$renderer$renderTexture.current
  }
  this$defaultFilterStack.push(i)
  i.resolution = t0$resolution
  i.legacy = t0$legacy
  i.target = e
  i.sourceFrame.copyFrom(e.filterArea || e.getBounds(true))
  i.sourceFrame.pad(t0$padding)
  if (t0$autoFit) {
    var d = new ct(this$renderer$renderTexture.sourceFrame.x - this$renderer$renderTexture.sourceFrame.width / 2, this$renderer$renderTexture.sourceFrame.y - this$renderer$renderTexture.sourceFrame.height / 2, 2 * this$renderer$renderTexture.sourceFrame.width, 2 * this$renderer$renderTexture.sourceFrame.height)
    if (this$renderer.projection.transform) {
      this.transformAABB(ya.copyFrom(this$renderer.projection.transform).invert(), d)
    }
    i.sourceFrame.fit(d)
  }
  this.roundFrame(i.sourceFrame, this$renderer$renderTexture.current ? this$renderer$renderTexture.current.resolution : this$renderer.resolution, this$renderer$renderTexture.sourceFrame, this$renderer$renderTexture.destinationFrame, this$renderer.projection.transform)
  i.renderTexture = this.getOptimalFilterTexture(i.sourceFrame.width, i.sourceFrame.height, t0$resolution)
  i.filters = t
  i.destinationFrame.width = i.renderTexture.width
  i.destinationFrame.height = i.renderTexture.height
  var h = new ct(0, 0, i.sourceFrame.width, i.sourceFrame.height)
  i.renderTexture.filterFrame = i.sourceFrame
  i.bindingSourceFrame.copyFrom(this$renderer$renderTexture.sourceFrame)
  i.bindingDestinationFrame.copyFrom(this$renderer$renderTexture.destinationFrame)
  i.transform = this$renderer.projection.transform
  this$renderer.projection.transform = null
  this$renderer$renderTexture.bind(i.renderTexture, i.sourceFrame, h)
  this$renderer.framebuffer.clear(0, 0, 0, 0)
}
export { ma }
