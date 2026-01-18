/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：520__part-0
 */

"use strict"

import * as /* [auto-meaningful-name] */$_217_index from "./217/index"
import * as /* [auto-meaningful-name] */$_523_index from "./523/index"
import * as /* [auto-meaningful-name] */$_744_index from "./744/index"
import * as /* [auto-meaningful-name] */$_32_index from "./32/index"
import * as /* [auto-meaningful-name] */$$_105 from "../105"
import * as c from "./65"
import * as /* [auto-meaningful-name] */$_119 from "./119"
import * as /* [auto-meaningful-name] */$_1023 from "./1023"
var f = function () {
  function e(e, t) {
    this.actor = e
    this.fn = t
  }
  e.prototype.contains = function (e, t) {
    var n = this.actor.toGlobal(new $_32_index.o(e, t))
    return !!this.actor.containsPoint(new $_32_index.o(n.x, n.y)) && this.fn(n)
  }
  return e
}()
var d = function () {
  function e(e, t) {
    var n = this
    this.ctx = null
    this.update_pen_on_change = function (e) {
      if (e.position) {
        n.draw_line(e.position.x, e.position.y)
      }
    }
    this.update_fill_point_on_change = function (e) {
      if (e.position) {
        n.update_fill_point(e.position.x, e.position.y)
      }
    }
    this.app = e
    this.actor = t
    this.size = 1
    this.stroke_color = "000000"
    this.alpha = 1
    this.hsl = [0, 0, 0]
    this.ctx = this.actor.parent_scene.get_brush_ctx()
    this.fill_path = []
    this.is_recording_fill_path = false
  }
  e.prototype.set_pen_down = function () {
    if (!this.origin_x || !this.origin_y) {
      var /* [auto-meaningful-name] */this$actor = this.actor
      var /* [auto-meaningful-name] */this$actor$x = this$actor.x
      var /* [auto-meaningful-name] */this$actor$y = this$actor.y
      this.origin_x = this$actor$x
      this.origin_y = this$actor$y
      this.draw_line(this$actor$x, this$actor$y)
      this.actor.add_listener("change", this.update_pen_on_change)
    }
  }
  e.prototype.set_pen_up = function () {
    this.origin_x = undefined
    this.origin_y = undefined
    this.actor.remove_listener("change", this.update_pen_on_change)
  }
  e.prototype.draw_line = function (e, t) {
    if (undefined !== this.origin_x && undefined !== this.origin_y) {
      var n = this.app.get_app_view_resolution()
      var /* [auto-meaningful-name] */this$ctx = this.ctx
      if (this$ctx) {
        this$ctx.save()
        this$ctx.lineWidth = this.size * n
        this$ctx.globalAlpha = this.alpha
        this$ctx.strokeStyle = "#" + this.stroke_color
        this$ctx.fillStyle = "#" + this.stroke_color
        this.canvas_draw_circle(this$ctx, this.origin_x, this.origin_y)
        this.canvas_draw_line(this$ctx, this.origin_x, this.origin_y, e, t)
        this$ctx.restore()
        this.actor.parent_scene.should_update_brush()
        this.origin_x = e
        this.origin_y = t
      }
    }
  }
  e.prototype.canvas_draw_line = function (e, t, n, r, i) {
    var o = this.app.get_app_view_resolution()
    var a = this.app.get_app_view_size()
    var s = a.width / 2
    var c = a.height / 2
    e.lineJoin = "round"
    e.beginPath()
    e.moveTo((s + t) * o, (c + n) * o)
    e.lineTo((s + r) * o, (c + i) * o)
    e.closePath()
    e.stroke()
  }
  e.prototype.canvas_draw_circle = function (e, t, n) {
    var r = this.app.get_app_view_resolution()
    var i = this.app.get_app_view_size()
    var o = i.width / 2
    var a = i.height / 2
    var s = this.size / 2
    e.beginPath()
    e.arc((o + t) * r, (a + n) * r, s * r, 0, 2 * Math.PI)
    e.fill()
  }
  e.prototype.render = function () {
    this.actor.parent_scene.update_brush()
    this.app.render()
  }
  e.prototype.set_size = function (e) {
    this.size = $_217_index.a(1, 1e4, e)
  }
  e.prototype.set_color = function (e) {
    this.stroke_color = e
    this.hsl = c.h(e)
  }
  e.prototype.set_alpha = function (e) {
    this.alpha = $_217_index.a(0, 1, e)
  }
  e.prototype.set_hue = function (e) {
    if ((e %= 360) < 0) {
      e += 360
    }
    this.hsl[0] = e
    this.stroke_color = c.j(this.hsl[0], this.hsl[1], this.hsl[2])
  }
  e.prototype.set_saturation = function (e) {
    this.hsl[1] = $_217_index.a(0, 1, e)
    this.stroke_color = c.j(this.hsl[0], this.hsl[1], this.hsl[2])
  }
  e.prototype.set_brightness = function (e) {
    this.hsl[2] = $_217_index.a(0, 1, e)
    this.stroke_color = c.j(this.hsl[0], this.hsl[1], this.hsl[2])
  }
  e.prototype.get_size = function () {
    return this.size
  }
  e.prototype.get_color = function () {
    return this.stroke_color
  }
  e.prototype.get_alpha = function () {
    return this.alpha
  }
  e.prototype.get_hue = function () {
    return this.hsl[0]
  }
  e.prototype.get_saturation = function () {
    return this.hsl[1]
  }
  e.prototype.get_brightness = function () {
    return this.hsl[2]
  }
  e.prototype.clear = function () {
    if (this.ctx) {
      var e = this.app.get_app_view_resolution()
      var t = this.app.get_app_view_size()
      var /* [auto-meaningful-name] */t$width = t.width
      var /* [auto-meaningful-name] */t$height = t.height
      this.ctx.clearRect(0, 0, t$width * e, t$height * e)
      this.actor.parent_scene.should_update_brush()
    }
  }
  e.prototype.set_fill_color = function (e) {
    this.fill_color = e
  }
  e.prototype.set_fill_start = function () {
    if (!this.is_recording_fill_path) {
      this.is_recording_fill_path = true
      this.actor.add_listener("change", this.update_fill_point_on_change)
    }
    this.fill_path = []
    this.update_fill_point(this.actor.position.x, this.actor.position.y)
  }
  e.prototype.update_fill_point = function (e, t) {
    if (this.is_recording_fill_path) {
      var n = new $_32_index.o(e, t)
      this.fill_path.push(this.app.get_app().stage.toGlobal(n))
    }
  }
  e.prototype.draw_fill_pattern = function () {
    if (this.is_recording_fill_path) {
      var /* [auto-meaningful-name] */this$ctx = this.ctx
      if (this$ctx) {
        var t = this.fill_path.shift()
        if (t) {
          this$ctx.save()
          this$ctx.fillStyle = this.fill_color ? "#" + this.fill_color : "#" + this.stroke_color
          this$ctx.lineJoin = "round"
          this$ctx.beginPath()
          var n = this.app.get_app_view_resolution()
          this$ctx.moveTo(t.x * n, t.y * n)
          this.fill_path.forEach(function (t) {
            this$ctx.lineTo(t.x * n, t.y * n)
          })
          this$ctx.closePath()
          this$ctx.fill()
          this$ctx.restore()
          this.actor.parent_scene.should_update_brush()
          this.fill_path = []
          this.is_recording_fill_path = false
          this.actor.remove_listener("change", this.update_fill_point_on_change)
        }
      }
    }
  }
  e.prototype.draw_text_stamp = function (e, t, n, r) {
    var /* [auto-meaningful-name] */this$ctx = this.ctx
    if (this$ctx) {
      var o = this.app.get_app().stage.toGlobal(this.actor.position)
      var a = o.x
      var s = o.y
      var c = undefined !== r ? r : this.actor.rotation
      this$ctx.save()
      this$ctx.font = "bold " + t + "px Arial , Microsoft YaHei"
      this$ctx.fillStyle = "#" + this.stroke_color
      this$ctx.globalAlpha = this.alpha
      this$ctx.textBaseline = "middle"
      this$ctx.textAlign = n
      this$ctx.translate(a, s)
      this$ctx.rotate(c)
      this$ctx.fillText(e, 0, 0)
      this$ctx.restore()
      this.actor.parent_scene.should_update_brush()
    }
  }
  e.prototype.draw_image_stamp = function () {
    var /* [auto-meaningful-name] */this$ctx = this.ctx
    if (this$ctx) {
      var /* [auto-meaningful-name] */this$actor = this.actor
      var n = c.d(this$actor, this$actor.position)
      var /* [auto-meaningful-name] */this$actor$rotation = this.actor.rotation
      var i = this.app.get_app_view_resolution()
      var o = this.app.get_app_view_size()
      var /* [auto-meaningful-name] */o$height = o.height
      var /* [auto-meaningful-name] */o$width = o.width
      this$ctx.save()
      this$ctx.translate((n.x + o$width / 2) * i, (n.y + o$height / 2) * i)
      this$ctx.rotate(this$actor$rotation)
      this$ctx.scale(this$actor.scale.x < 0 ? -1 : 1, this$actor.scale.y < 0 ? -1 : 1)
      var u = this$actor.texture.baseTexture.getDrawableSource && this$actor.texture.baseTexture.getDrawableSource()
      if (u) {
        this$ctx.drawImage(u, Math.floor(-this$actor.width / 2) * i, Math.floor(-this$actor.height / 2) * i, Math.floor(this$actor.width) * i, Math.floor(this$actor.height) * i)
        this$ctx.restore()
        this$actor.parent_scene.should_update_brush()
      }
    }
  }
  return e
}()
export { f }
export { d }
