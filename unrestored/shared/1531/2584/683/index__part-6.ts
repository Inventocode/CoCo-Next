/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：683__part-6
 */

"use strict"

import * as /* [auto-meaningful-name] */$_122 from "./122"
import * as c from "./65"
import * as /* [auto-meaningful-name] */$_34_index from "./34/index"
import * as /* [auto-meaningful-name] */$$_107_index from "../107/index"
import * as /* [auto-meaningful-name] */$_1002 from "./1002"
var ne = function () {
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
var re = function (e) {
  function t(t, n, r, i, o, a, s, c, u) {
    var l = e.call(this, t, r, i) || this
    l.type = $$_107_index.d.Background
    l.rotation_type = $$_107_index.e.ALL
    l.rotation_value = 0
    l.is_horizontal_flipped = false
    l.is_vertical_flipped = false
    l.is_rotation_flipped = false
    l.transform_offset = {
      pivot: {
        x: 0,
        y: 0
      },
      position: {
        x: 0,
        y: 0
      }
    }
    l.custom_pivot = {
      x: 0,
      y: 0
    }
    l.adaptive_scale = {
      x: 1,
      y: 1
    }
    l.transform_position = {
      x: 0,
      y: 0
    }
    l.on_resize = function (e) {
      if (e.target_id === l.app.get_app().stage.name) {
        l.width = e.data.width
        l.height = e.data.height
      }
    }
    l.id = u
    l.name = u
    l.texture_id = n
    l.anchor.set(.5)
    l.interactive = true
    l.emit_scene_event = o
    l.app = a
    l.data = s
    l.events = c
    l.events.add_listener("stage:resize", l.on_resize)
    return l
  }
  ne(t, e)
  t.prototype.set_position = function (e, t) {
    this.update_pixi_position(e, t)
    this.emit_scene_event("change", {
      position: this.transform_position
    })
  }
  t.prototype.set_position_x = function (e) {
    var /* [auto-meaningful-name] */this$get_position$y = this.get_position().y
    this.set_position(e, this$get_position$y)
  }
  t.prototype.set_position_y = function (e) {
    var /* [auto-meaningful-name] */this$get_position$x = this.get_position().x
    this.set_position(this$get_position$x, e)
  }
  t.prototype.move_forward = function (e) {
    var t = this.get_position()
    var n = this.get_rotation()
    var r = t.x + Math.cos(n) * e
    var i = t.y + Math.sin(n) * e
    this.set_position(r, i)
  }
  t.prototype.get_position = function () {
    var /* [auto-meaningful-name] */this$transform_offset$position = this.transform_offset.position
    return {
      x: this.transform_position.x - this$transform_offset$position.x,
      y: -this.transform_position.y + this$transform_offset$position.y
    }
  }
  t.prototype.set_scale = function (e, t) {
    var n = e
    if (undefined !== n) {
      n = Math.max(0, n)
      n = this.is_rotation_flipped !== this.is_vertical_flipped ? -1 * n : n
    }
    var r = undefined === t ? e : t
    if (undefined !== r) {
      r = Math.max(0, r)
      r = this.is_horizontal_flipped ? -1 * r : r
    }
    this.set_pixi_scale(n, r)
  }
  t.prototype.get_scale = function () {
    var e = this.get_pixi_scale()
    var t = e.x
    var n = e.y
    return {
      x: Math.abs(t),
      y: Math.abs(n)
    }
  }
  t.prototype.set_rotation = function (e) {
    var t = c.s(e)
    this.rotation_value = t
    var n = false
    switch (this.rotation_type) {
      case $$_107_index.e.ALL:
        this.set_pixi_rotation(-this.rotation_value)
        n = this.is_rotation_flipped
        break
      case $$_107_index.e.LEFT_RIGHT:
        this.set_pixi_rotation(0)
        n = (this.rotation_value >= Math.PI / 2 || this.rotation_value < -Math.PI / 2) !== this.is_rotation_flipped
        break
      case $$_107_index.e.NONE:
        this.set_pixi_rotation(0)
        n = this.is_rotation_flipped
    }
    if (n) {
      var r = this.get_pixi_scale()
      var i = r.x
      var o = r.y
      this.is_rotation_flipped = !this.is_rotation_flipped
      this.set_pixi_scale(-1 * i, o)
    }
  }
  t.prototype.set_flipped = function (e) {
    var t = this.get_pixi_scale()
    var n = t.x
    var r = t.y
    switch (e) {
      case "vertical":
        this.set_pixi_scale(-1 * n, r)
        return void (this.is_vertical_flipped = !this.is_vertical_flipped)
      case "horizontal":
        this.set_pixi_scale(n, -1 * r)
        return void (this.is_horizontal_flipped = !this.is_horizontal_flipped)
    }
  }
  t.prototype.set_rotation_type = function (e) {
    this.rotation_type = e
    this.set_rotation(this.rotation_value)
  }
  t.prototype.set_visible = function (e) {
    this.visible = e
    this.emit_scene_event("change", {
      visible: this.visible
    })
  }
  t.prototype.set_alpha = function (e) {
    this.alpha = e
    this.emit_scene_event("change", {
      alpha: this.alpha
    })
  }
  t.prototype.get_rotation = function () {
    return this.rotation_value
  }
  t.prototype.get_rotation_type = function () {
    return this.rotation_type
  }
  t.prototype.get_visible = function () {
    return this.visible
  }
  t.prototype.get_alpha = function () {
    return this.alpha
  }
  t.prototype.get_texture_id = function () {
    return this.texture_id
  }
  t.prototype.get_vertical_flipped = function () {
    return this.is_vertical_flipped
  }
  t.prototype.get_horizontal_flipped = function () {
    return this.is_horizontal_flipped
  }
  t.prototype.set_texture = function (e, t) {
    var n = this.data.get_texture(e)
    if (!n) {
      return new $_122.a("Cannot find texture " + e + ". Please load texture first")
    }
    this.texture = n
    this.texture_id = e
    if (t) {
      if (t.pivot) {
        this.custom_pivot = t.pivot
      }
      if (undefined !== t.adaption) {
        this.adaption = t.adaption
      }
    }
    this.on_texture_updated()
  }
  t.prototype.update_adaptive_scale = function () {
    if (this.adaption) {
      var e = this.app.get_app_view_size()
      var /* [auto-meaningful-name] */e$width = e.width
      var /* [auto-meaningful-name] */e$height = e.height
      var r = e$width / this.texture.width
      var i = e$height / this.texture.height
      var o = undefined
      switch (this.adaption) {
        case $$_107_index.a.CONTAIN:
          o = Math.min(r, i)
          this.adaptive_scale = {
            x: o,
            y: o
          }
          this.width = this.texture.width * this.adaptive_scale.x
          this.height = this.texture.height * this.adaptive_scale.y
          this.transform_offset.position = {
            x: this.width / 2,
            y: this.height / 2
          }
          break
        case $$_107_index.a.COVER:
          o = Math.max(r, i)
          this.adaptive_scale = {
            x: o,
            y: o
          }
          this.width = e$width
          this.height = e$height
          this.transform_offset.position = {
            x: e$width / 2,
            y: e$height / 2
          }
          break
        case $$_107_index.a.STRETCH:
          this.adaptive_scale = {
            x: r,
            y: i
          }
          this.width = e$width
          this.height = e$height
          this.transform_offset.position = {
            x: e$width / 2,
            y: e$height / 2
          }
          break
        default:
          return
      }
    } else {
      this.adaptive_scale = {
        x: 1,
        y: 1
      }
    }
    this.update_pixi_position()
    this.tileTransform.scale.set(this.adaptive_scale.x, this.adaptive_scale.y)
  }
  t.prototype.set_adaption_mode = function (e) {
    if (this.adaption !== e && this.data.get_texture(this.texture_id)) {
      this.adaption = e
      this.on_texture_updated()
    }
  }
  t.prototype.update_pixi_position = function (e, t) {
    var /* [auto-meaningful-name] */this$transform_offset$position = this.transform_offset.position
    this.transform_position = {
      x: e ? e + this$transform_offset$position.x : this$transform_offset$position.x,
      y: t ? -t + this$transform_offset$position.y : this$transform_offset$position.y
    }
    this.tileTransform.position.set(this.transform_position.x % (this.texture.width * this.adaptive_scale.x), this.transform_position.y % (this.texture.height * this.adaptive_scale.y))
  }
  t.prototype.destroy = function () {
    this.events.remove_listener("stage:resize", this.on_resize)
    e.prototype.destroy.call(this)
  }
  return t
}($_34_index.z)
var ie = function (e) {
  function t(t, n, r, i, o, a, s, c, u) {
    var l = e.call(this, t, n, r, i, o, a, s, c, u) || this
    l.update_transform = function (e) {
      l.transform_offset.position = {
        x: e.width / 2,
        y: e.height / 2
      }
      l.update_pixi_position()
      l.update_transform_pivot()
      l.update_adaptive_scale()
    }
    l.on_stage_resize = function (e) {
      if (e.target_id === l.app.get_app().stage.name) {
        l.update_transform(e.data)
      }
    }
    var /* [auto-meaningful-name] */a$get_app$view = a.get_app().view
    var /* [auto-meaningful-name] */a$get_app$view$width = a$get_app$view.width
    var /* [auto-meaningful-name] */a$get_app$view$height = a$get_app$view.height
    l.update_transform({
      width: a$get_app$view$width,
      height: a$get_app$view$height
    })
    l.events.add_listener("stage:resize", l.on_stage_resize)
    return l
  }
  ne(t, e)
  t.prototype.set_pixi_rotation = function (e) {
    this.tileTransform.rotation = e
    this.emit_scene_event("change", {
      rotation: this.get_pixi_rotation()
    })
  }
  t.prototype.get_pixi_rotation = function () {
    return this.tileTransform.rotation
  }
  t.prototype.set_pixi_scale = function (e, t) {
    this.tileTransform.scale.set(undefined === e ? undefined : e * this.adaptive_scale.x, undefined === t ? undefined : t * this.adaptive_scale.y)
    this.emit_scene_event("change", {
      scale: this.tileTransform.scale
    })
  }
  t.prototype.get_pixi_scale = function () {
    var /* [auto-meaningful-name] */this$tileTransform$scale = this.tileTransform.scale
    var /* [auto-meaningful-name] */this$tileTransform$scale$x = this$tileTransform$scale.x
    var /* [auto-meaningful-name] */this$tileTransform$scale$y = this$tileTransform$scale.y
    return {
      x: this$tileTransform$scale$x / this.adaptive_scale.x,
      y: this$tileTransform$scale$y / this.adaptive_scale.y
    }
  }
  t.prototype.on_texture_updated = function () {
    this.update_transform_pivot()
    this.update_adaptive_scale()
  }
  t.prototype.update_transform_pivot = function () {
    var /* [auto-meaningful-name] */this$texture = this.texture
    var /* [auto-meaningful-name] */this$texture$width = this$texture.width
    var /* [auto-meaningful-name] */this$texture$height = this$texture.height
    this.transform_offset.pivot = {
      x: this$texture$width / 2 + this.custom_pivot.x,
      y: this$texture$height / 2 + this.custom_pivot.y
    }
    this.tileTransform.pivot.set(this.transform_offset.pivot.x, this.transform_offset.pivot.y)
  }
  t.prototype.destroy = function () {
    this.events.remove_listener("stage:resize", this.on_stage_resize)
    e.prototype.destroy.call(this)
  }
  return t
}(re);
(function (e) {
  function t(t, n, r, i, o, a, s, c, u) {
    var l = e.call(this, t, n, r, i, o, a, s, c, u) || this
    l.update_transform = function (e) {
      if (e.target_id === l.app.get_app().stage.name) {
        l.on_texture_updated()
      }
    }
    l.update_transform_position(0, 0)
    l.events.add_listener("stage:resize", l.update_transform)
    return l
  }
  ne(t, e)
  t.prototype.set_pixi_rotation = function (e) {
    this.rotation = e
    this.emit_scene_event("change", {
      rotation: this.get_pixi_rotation()
    })
  }
  t.prototype.get_pixi_rotation = function () {
    return this.rotation
  }
  t.prototype.set_pixi_scale = function (e, t) {
    this.scale.set(e, t)
    this.emit_scene_event("change", {
      scale: this.get_pixi_scale()
    })
  }
  t.prototype.get_pixi_scale = function () {
    var /* [auto-meaningful-name] */this$scale = this.scale
    return {
      x: this$scale.x,
      y: this$scale.y
    }
  }
  t.prototype.on_texture_updated = function () {
    this.update_adaptive_scale()
    var /* [auto-meaningful-name] */this$tileTransform$position = this.tileTransform.position
    var /* [auto-meaningful-name] */this$tileTransform$position$x = this$tileTransform$position.x
    var /* [auto-meaningful-name] */this$tileTransform$position$y = this$tileTransform$position.y
    var r = this$tileTransform$position$x - this.transform_offset.position.x
    var i = this$tileTransform$position$y - this.transform_offset.position.y
    this.update_transform_position(r, i)
  }
  t.prototype.update_transform_position = function (e, t) {
    var n = this.app.get_app_view_size()
    var /* [auto-meaningful-name] */n$width = n.width
    var /* [auto-meaningful-name] */n$height = n.height
    var /* [auto-meaningful-name] */this$texture = this.texture
    var /* [auto-meaningful-name] */this$texture$width = this$texture.width
    var /* [auto-meaningful-name] */this$texture$height = this$texture.height
    var c = (this$texture$width * this.adaptive_scale.x - n$width) / -2 - this.custom_pivot.x
    var u = (this$texture$height * this.adaptive_scale.y - n$height) / -2 - this.custom_pivot.y
    this.transform_offset.position = {
      x: c,
      y: u
    }
    this.tileTransform.position.set(this.transform_offset.position.x + e, this.transform_offset.position.y + t)
  }
  t.prototype.destroy = function () {
    this.events.remove_listener("stage:resize", this.update_transform)
    e.prototype.destroy.call(this)
  }
})(re)
var oe = function () {
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
var ae = function (e) {
  function t(t, n, r, i, o, s) {
    var c = e.call(this) || this
    c.type = $$_107_index.d.Scene
    c.brush_canvas = document.createElement("canvas")
    c.brush_ctx = c.brush_canvas.getContext("2d")
    c.should_update_brush_texture = false
    c.mouse_down_time = 0
    c.on_resize = function (e) {
      if (e.target_id === c.app.get_app().stage.name) {
        var /* [auto-meaningful-name] */c$app$get_app$view = c.app.get_app().view
        var /* [auto-meaningful-name] */c$app$get_app$view$width = c$app$get_app$view.width
        var /* [auto-meaningful-name] */c$app$get_app$view$height = c$app$get_app$view.height
        c.brush_canvas.width = c$app$get_app$view$width
        c.brush_canvas.height = c$app$get_app$view$height
      }
    }
    c.on_tick = function () {
      if (c.should_update_brush_texture) {
        c.should_update_brush_texture = false
        c.update_brush()
      }
    }
    c.data = i
    c.app = o
    c.events = s
    c.id = t
    c.name = t
    var /* [auto-meaningful-name] */c$app$get_app$view = c.app.get_app().view
    var /* [auto-meaningful-name] */c$app$get_app$view$width = c$app$get_app$view.width
    var /* [auto-meaningful-name] */c$app$get_app$view$height = c$app$get_app$view.height
    var d = c.app.get_app_view_resolution()
    c.visible = false
    c.interactive = true
    var h = c.app.get_renderer_type() === $_34_index.p.WEBGL
    var p = c.emit_event.bind(c)
    c.background = new ie(n, r, c$app$get_app$view$width, c$app$get_app$view$height, p, o, i, s, t)
    c.addChildAt(c.background, 0)
    c.brush_canvas.width = c$app$get_app$view$width
    c.brush_canvas.height = c$app$get_app$view$height
    c.brush_sprite = $_34_index.t.from(c.brush_canvas)
    c.brush_sprite.anchor.set(.5)
    c.brush_sprite.position.set(0, 0)
    c.brush_sprite.scale.set(1 / d)
    c.addChildAt(c.brush_sprite, 1)
    c.actor_container = new $_34_index.f()
    c.actor_container.name = "actor_container"
    c.addChildAt(c.actor_container, 2)
    c.background.addListener("mousedown", function () {
      return c.emit_mouse_event("scene:mousedown")
    })
    c.background.addListener("mousemove", function () {
      return c.emit_mouse_event("scene:mousemove")
    })
    c.background.addListener("mouseup", function () {
      return c.emit_mouse_event("scene:mouseup")
    })
    c.background.addListener("mouseupoutside", function () {
      return c.emit_mouse_event("scene:mouseupoutside")
    })
    c.background.addListener("touchstart", function () {
      return c.emit_mouse_event("scene:touchstart")
    })
    c.background.addListener("touchmove", function () {
      return c.emit_mouse_event("scene:touchmove")
    })
    c.background.addListener("touchend", function () {
      return c.emit_mouse_event("scene:touchend")
    })
    c.background.addListener("touchendoutside", function () {
      return c.emit_mouse_event("scene:touchendoutside")
    })
    c.events.add_listener("stage:resize", c.on_resize)
    c.app.get_app().ticker.add(c.on_tick)
    if (h) {
      c.effects = new $_1002.a(c.app, c)
    }
    return c
  }
  oe(t, e)
  t.prototype.emit_event = function (e, t) {
    this.emit(e, t)
  }
  t.prototype.add_listener = function (e, t) {
    this.on(e, t)
  }
  t.prototype.remove_listener = function (e, t) {
    this.off(e, t)
  }
  t.prototype.destroy = function () {
    this.emit_event("destroy", undefined)
    this.app.get_app().ticker.remove(this.on_tick)
    this.events.remove_listener("stage:resize", this.on_resize)
    this.brush_sprite.destroy({
      children: true,
      texture: true,
      baseTexture: true
    })
    e.prototype.destroy.call(this, {
      children: true
    })
    this.data.clear_scene_cache(this.id)
  }
  t.prototype.get_background = function () {
    return this.background
  }
  t.prototype.get_id = function () {
    return this.id
  }
  t.prototype.get_actor_ids = function (e) {
    var t = []
    var n = e ? function (n) {
      return n.group === e && t.push(n.id)
    } : function (e) {
      return t.push(e.id)
    }
    this.actor_container.children.forEach(function (e) {
      if (c.k(e)) {
        n(e.get_actor())
      }
    })
    return t
  }
  t.prototype.get_brush_ctx = function () {
    return this.brush_ctx
  }
  t.prototype.should_update_brush = function () {
    this.should_update_brush_texture = true
  }
  t.prototype.update_brush = function () {
    this.brush_sprite.texture.update()
  }
  t.prototype.get_actor_container = function () {
    return this.actor_container
  }
  t.prototype.emit_mouse_event = function (e) {
    switch (e) {
      case "scene:mousedown":
      case "scene:touchstart":
        this.mouse_down_time = new Date().getTime()
        this.events.fire("scene:selected", {
          target_id: this.id
        })
        break
      case "scene:mouseup":
      case "scene:touchend":
        if (new Date().getTime() - this.mouse_down_time < 1e3) {
          this.events.fire("scene:click", {
            target_id: this.id
          })
        }
    }
    this.events.fire(e, {
      target_id: this.id
    })
  }
  t.prototype.get_effects = function () {
    return this.effects ? $_122.b.success(this.effects) : $_122.b.error("Effect not available. It needs support of WebGL.")
  }
  t.prototype.set_brush_target = function (e) {
    var t = this
    var n = this.data.get_internal_actor(e, [this.get_id()])
    if (!n) {
      return new $_122.a("Cannot find actor " + e + " in scene " + this.id)
    }
    n.wrapper.addChild(this.brush_sprite)
    this.brush_unset_listener = function () {
      t.unset_brush_target()
    }
    n.add_listener("destroy", this.brush_unset_listener)
  }
  t.prototype.get_brush_target = function () {
    if (c.k(this.brush_sprite.parent)) {
      return this.brush_sprite.parent.get_actor()
    }
  }
  t.prototype.unset_brush_target = function () {
    var /* [auto-meaningful-name] */this$brush_sprite$parent = this.brush_sprite.parent
    if (c.k(this$brush_sprite$parent)) {
      this.addChildAt(this.brush_sprite, 1)
      if (this.brush_unset_listener) {
        this$brush_sprite$parent.get_actor().remove_listener("destroy", this.brush_unset_listener)
        this.brush_unset_listener = undefined
      }
    }
  }
  return t
}($_34_index.f)
var se = function () {
  function e(e, t, n, r, i) {
    this.transition_type = "none"
    this.app = e
    this.data = t
    this.transition = n(e)
    this.scene = r
    this.events = i
  }
  e.prototype.load_scene = function (e, t) {
    if (this.data.get_internal_scene(e)) {
      return $_122.b.error("Scene " + e + " already exists. Please use new scene id")
    }
    var n = t ? this.data.get_texture(t) : $_34_index.y.EMPTY
    if (!n) {
      return $_122.b.error("Cannot find texture " + t + ". Please load texture first")
    }
    var r = this.scene(e, n, t || "", this.data, this.app)
    this.app.get_scene_container().addChild(r)
    return $_122.b.success(r)
  }
  e.prototype.set_current_scene = function (e, t) {
    var n = this
    var r = this.data.get_internal_scene(e)
    if (!r) {
      return new $_122.a("Cannot find scene " + e)
    }
    if (this.current_scene !== e) {
      if (!this.current_scene) {
        this.current_scene = e
        this.set_one_scene_visible(e)
        return void (t && t())
      }
      var i = this.data.get_internal_scene(this.current_scene)
      if (!i) {
        return new $_122.a("Cannot find out scene " + this.current_scene)
      }
      this.current_scene = e
      this.transition.set_transition(this.transition_type, i, r, function () {
        n.set_one_scene_visible(r.id)
        if (t) {
          t()
        }
      })
    }
  }
  e.prototype.get_current_scene = function () {
    return this.current_scene
  }
  e.prototype.destroy_scene = function (e) {
    var t = this.data.get_internal_scene(e)
    if (!t) {
      return $_122.b.error("Cannot find scene " + e)
    }
    t.destroy()
    if (this.current_scene === e) {
      this.current_scene = undefined
    }
    var /* [auto-meaningful-name] */this$app$get_scene_container$children = this.app.get_scene_container().children
    var r = []
    this$app$get_scene_container$children.forEach(function (e) {
      if (c.m(e)) {
        r.push(e.id)
      }
    })
    return $_122.b.success({
      scene_ids: r
    })
  }
  e.prototype.dispose_actors_by_scene = function (e) {
    var t = this
    var n = this.data.get_internal_scene(e)
    if (!n) {
      return new $_122.a("Cannot find scene " + e)
    }
    n.get_actor_container().removeChildren().forEach(function (e) {
      if (c.k(e)) {
        var n = e.get_actor()
        n.destroy()
        t.data.clear_actor_cache(n.get_id())
      }
    })
  }
  e.prototype.destroy_all_scenes = function () {
    var e = this
    this.get_scene_ids().forEach(function (t) {
      var n = e.data.get_internal_scene(t)
      if (n) {
        n.destroy()
      }
    })
    this.current_scene = undefined
    this.data.clear_all_scenes_cache()
  }
  e.prototype.get_scene_ids = function () {
    var e = []
    this.app.get_scene_container().children.forEach(function (t) {
      if (c.m(t)) {
        e.push(t.id)
      }
    })
    return e
  }
  e.prototype.set_one_scene_visible = function (e) {
    this.app.get_scene_container().children.forEach(function (t) {
      if (c.m(t)) {
        if (t.id === e) {
          t.visible = true
        } else {
          t.visible = false
        }
      }
    })
    this.events.fire("scene:current_scene_changed", e)
  }
  e.prototype.set_transition_type = function (e) {
    if ("distort" === e && this.app.get_renderer_type() !== $_34_index.p.WEBGL) {
      return new $_122.a("Only WEBGL support distort transition")
    }
    this.transition_type = e
  }
  e.prototype.get_scene = function (e) {
    var t = this.data.get_internal_scene(e)
    return t ? $_122.b.success(t) : $_122.b.error("Cannot find scene " + e)
  }
  return e
}()
export { ae as "683__part-6__ae" }
export { se as "683__part-6__se" }
