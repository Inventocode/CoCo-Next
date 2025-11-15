/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：517
 */

"use strict"

export { v as a }
import /* [auto-meaningful-name] */$$_215_index = require("../215/index")
import /* [auto-meaningful-name] */$$_520_index = require("../520/index")
import /* [auto-meaningful-name] */$$_735_index = require("../735/index")
import /* [auto-meaningful-name] */$$_34_index = require("../34/index")
import /* [auto-meaningful-name] */$$_$$_107_index = require("../../107/index")
import /* [auto-meaningful-name] */$$_65 = require("../65")
import /* [auto-meaningful-name] */$$_122 = require("../122")
import /* [auto-meaningful-name] */$$_1002 = require("../1002")
var f = function () {
  function e(e, t) {
    this.actor = e
    this.fn = t
  }
  e.prototype.contains = function (e, t) {
    var n = this.actor.toGlobal(new $$_34_index.o(e, t))
    return !!this.actor.containsPoint(new $$_34_index.o(n.x, n.y)) && this.fn(n)
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
    this.size = $$_215_index.a(1, 1e4, e)
  }
  e.prototype.set_color = function (e) {
    this.stroke_color = e
    this.hsl = $$_65.h(e)
  }
  e.prototype.set_alpha = function (e) {
    this.alpha = $$_215_index.a(0, 1, e)
  }
  e.prototype.set_hue = function (e) {
    if ((e %= 360) < 0) {
      e += 360
    }
    this.hsl[0] = e
    this.stroke_color = $$_65.j(this.hsl[0], this.hsl[1], this.hsl[2])
  }
  e.prototype.set_saturation = function (e) {
    this.hsl[1] = $$_215_index.a(0, 1, e)
    this.stroke_color = $$_65.j(this.hsl[0], this.hsl[1], this.hsl[2])
  }
  e.prototype.set_brightness = function (e) {
    this.hsl[2] = $$_215_index.a(0, 1, e)
    this.stroke_color = $$_65.j(this.hsl[0], this.hsl[1], this.hsl[2])
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
      var n = new $$_34_index.o(e, t)
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
      var n = $$_65.d(this$actor, this$actor.position)
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
import /* [auto-meaningful-name] */$_913 = require("./913")
var p = function () {
  function e(e, t, n) {
    this.cached_bounds_points_vertices = {
      value: undefined,
      dependencies: []
    }
    this.cached_internal_points_vertices = {
      value: undefined,
      dependencies: []
    }
    this.actor = e
    this.app = t
    this.data = n
  }
  e.prototype.get_state_dependencies = function () {
    return [this.actor.texture, this.actor.position.x, this.actor.position.y, this.actor.scale.x, this.actor.scale.y, this.actor.rotation]
  }
  e.prototype.get_cached_bounds_points_vertices = function () {
    var /* [auto-meaningful-name] */this$cached_bounds_points_vertices$value
    if (this.cached_bounds_points_vertices.value) {
      var t = this.get_state_dependencies()
      if ($_913.a(t, this.cached_bounds_points_vertices.dependencies)) {
        this$cached_bounds_points_vertices$value = this.cached_bounds_points_vertices.value
      } else {
        this.cached_bounds_points_vertices.value = undefined
      }
      return this$cached_bounds_points_vertices$value
    }
  }
  e.prototype.get_cached_internal_points_vertices = function () {
    var /* [auto-meaningful-name] */this$cached_internal_points_vertices$value
    if (this.cached_internal_points_vertices.value) {
      var t = this.get_state_dependencies()
      if ($_913.a(t, this.cached_internal_points_vertices.dependencies)) {
        this$cached_internal_points_vertices$value = this.cached_internal_points_vertices.value
      } else {
        this.cached_internal_points_vertices.value = undefined
      }
      return this$cached_internal_points_vertices$value
    }
  }
  e.prototype.set_cached_bounds_points_vertices = function (e) {
    var t = this.get_state_dependencies()
    this.cached_bounds_points_vertices = {
      value: e,
      dependencies: t
    }
  }
  e.prototype.set_cached_internal_points_vertices = function (e) {
    var t = this.get_state_dependencies()
    this.cached_internal_points_vertices = {
      value: e,
      dependencies: t
    }
  }
  e.prototype.get_vertices = function (e) {
    var t
    var n = this
    e.forEach(function (e) {
      var r = $$_65.c(e)
      var i = $$_65.q(r, n.actor)
      if (t) {
        t.max_x = Math.max(t.max_x, i.x)
        t.min_x = Math.min(t.min_x, i.x)
        t.max_y = Math.max(t.max_y, i.y)
        t.min_y = Math.min(t.min_y, i.y)
      } else {
        t = {
          max_x: i.x,
          min_x: i.x,
          max_y: i.y,
          min_y: i.y
        }
      }
    })
    return t
  }
  e.prototype.check_relation_by_vertices = function (e, t) {
    var /* [auto-meaningful-name] */e$max_x = e.max_x
    var /* [auto-meaningful-name] */e$min_x = e.min_x
    var /* [auto-meaningful-name] */e$max_y = e.max_y
    var /* [auto-meaningful-name] */e$min_y = e.min_y
    var a = this.app.get_app_view_size()
    var c = a.width / 2
    var u = a.height / 2
    var l = 0
    var f = 0
    var d = 0
    var h = 0
    switch (t) {
      case "collision":
        l = e$max_x
        f = e$min_x
        d = e$min_y
        h = e$max_y
        break
      case "overstep":
        l = e$min_x
        f = e$max_x
        d = e$max_y
        h = e$min_y
    }
    var p = 0
    if (l >= c) {
      p += $$_$$_107_index.b.RIGHT
    }
    if (f <= -c) {
      p += $$_$$_107_index.b.LEFT
    }
    if (d <= -u) {
      p += $$_$$_107_index.b.TOP
    }
    if (h >= u) {
      p += $$_$$_107_index.b.BOTTOM
    }
    return p
  }
  e.prototype.get_texture_bounds_points_vertices = function () {
    var e = this.get_cached_bounds_points_vertices()
    if (e) {
      return e
    }
    if (this.actor.current_style) {
      var t = this.data.get_texture_bounds_points(this.actor.current_style.texture_id)
      if (t && t[0]) {
        var n = this.get_vertices(t)
        if (n) {
          this.set_cached_bounds_points_vertices(n)
        }
        return n
      }
    }
  }
  e.prototype.get_texture_internal_points_vertices = function () {
    var e = this.get_cached_internal_points_vertices()
    if (e) {
      return e
    }
    if (this.actor.current_style) {
      var t = this.data.get_texture_internal_points(this.actor.current_style.texture_id)
      if (t && t[0]) {
        var n = this.get_vertices(t)
        if (n) {
          this.set_cached_internal_points_vertices(n)
        }
        return n
      }
    }
  }
  e.prototype.contains_edge = function (e, t) {
    return !!((t || 15) & e)
  }
  return e
}()
var _ = function () {
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
var A = function (e) {
  function t(t, n) {
    var r = e.call(this) || this
    r.type = $$_$$_107_index.c.ActorWrapper
    r.actor = t
    r.scene = n
    r.id = t.get_id()
    r.name = t.get_id()
    r.addChild(r.actor)
    r.setParent(r.scene.get_actor_container())
    return r
  }
  _(t, e)
  t.prototype.get_actor = function () {
    return this.actor
  }
  return t
}($$_34_index.f)
var g = function () {
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
var v = function (e) {
  function t(t) {
    var n = e.call(this) || this
    n.type = $$_$$_107_index.d.Actor
    n.rotation_type = $$_$$_107_index.e.ALL
    n.rotation_value = 0
    n.is_vertical_flipped = false
    n.is_horizontal_flipped = false
    n.is_rotation_flipped = false
    n.styles = {}
    n.is_clone = false
    n.min_points_for_collision = 5
    n.mouse_down_time = 0
    n.is_draggable = true
    n.has_drag_protection = false
    n.on_resize = function (e) {
      if (e.target_id === n.app.get_app().stage.name) {
        var t = n.app.get_app_view_size()
        var /* [auto-meaningful-name] */t$width = t.width
        var /* [auto-meaningful-name] */t$height = t.height
        n.hitArea = new f(n, function (e) {
          return n.is_touching(new $$_34_index.o(e.x - t$width / 2, e.y - t$height / 2))
        })
      }
    }
    n.drag_start = function (e) {
      n.mouse_down_time = new Date().getTime()
      n.events.fire("actor:selected", {
        target_id: n.id
      })
      if (n.is_draggable) {
        n.drag_data = {
          event_data: e.data,
          old_pos: e.data.getLocalPosition(n.parent)
        }
        n.events.fire("actor:drag_start", {
          target_id: n.id,
          data: {
            position: {
              x: n.position.x,
              y: -n.position.y
            }
          }
        })
      }
    }
    n.drag_move = function () {
      if (n.is_draggable && n.drag_data) {
        var e = n.drag_data.event_data.getLocalPosition(n.parent)
        var t = n.app.get_app_view_size()
        var /* [auto-meaningful-name] */t$width = t.width
        var /* [auto-meaningful-name] */t$height = t.height
        if (e.x < -t$width / 2 || e.x > t$width / 2 || e.y < -t$height / 2 || e.y > t$height / 2) {
          return
        }
        var s = new $$_34_index.o(n.position.x + e.x - n.drag_data.old_pos.x, n.position.y + e.y - n.drag_data.old_pos.y)
        n.drag_data.old_pos = e
        if (n.has_drag_protection) {
          var u = $$_65.d(n, s)
          s.set($$_215_index.a(-t$width / 2, t$width / 2, u.x), $$_215_index.a(-t$height / 2, t$height / 2, u.y))
        }
        n.set_pixi_position(s.x, s.y)
        n.app.render()
        n.events.fire("actor:drag_move", {
          target_id: n.id,
          data: {
            position: {
              x: n.position.x,
              y: -n.position.y
            }
          }
        })
        n.events.fire("actor:update", {
          target_id: n.id,
          data: {
            position: {
              x: n.position.x,
              y: -n.position.y
            }
          }
        })
      }
    }
    n.drag_end = function (e) {
      var t = new Date().getTime()
      if (!(e && $$_735_index.a(e.type, ["touchendoutside", "mouseupoutside"])) && t - n.mouse_down_time < 1e3) {
        var /* [auto-meaningful-name] */n$app$get_app$stage = n.app.get_app().stage
        var i = e ? e.data.getLocalPosition(n$app$get_app$stage) : n.position
        var a = i.x
        var s = i.y
        n.events.fire("actor:click", {
          target_id: n.id,
          data: {
            position: {
              x: a,
              y: -s
            }
          }
        })
      }
      if (n.drag_data) {
        n.drag_data = undefined
        if (n.is_draggable) {
          n.events.fire("actor:drag_end", {
            target_id: n.id,
            data: {
              position: {
                x: n.position.x,
                y: -n.position.y
              }
            }
          })
          n.emit_event("change", {
            position: n.position
          })
          n.app.render()
        }
      }
    }
    n.on_break = function (e) {
      if (!(e && e !== n.id)) {
        n.drag_data = undefined
      }
    }
    n.events = t.events
    n.app = t.app
    n.data = t.data
    n.parent_scene = t.parent_scene
    n.id = t.actor_id
    n.name = t.actor_id
    n.anchor.set(.5, .5)
    n.interactive = true
    n.wrapper = new A(n, n.parent_scene)
    var i = n.app.get_app_view_size()
    var /* [auto-meaningful-name] */i$width = i.width
    var /* [auto-meaningful-name] */i$height = i.height
    n.hitArea = new f(n, function (e) {
      return n.is_touching(new $$_34_index.o(e.x - i$width / 2, e.y - i$height / 2))
    })
    n.render_texture = new $$_34_index.r(new $$_34_index.d())
    n.brush = new d(n.app, n)
    n.pixel_detector = new p(n, n.app, n.data)
    if (n.app.get_renderer_type() === $$_34_index.p.WEBGL) {
      n.effects = new $$_1002.a(n.app, n)
    }
    n.addListener("mousedown", n.drag_start)
    n.addListener("mousemove", $$_65.w(n.drag_move, $$_65.a))
    n.addListener("mouseup", n.drag_end)
    n.addListener("mouseupoutside", n.drag_end)
    n.addListener("touchstart", n.drag_start)
    n.addListener("touchmove", $$_65.w(n.drag_move, $$_65.a))
    n.addListener("touchend", n.drag_end)
    n.addListener("touchendoutside", n.drag_end)
    n.addListener("mousedown", function (e) {
      return n.emit_mouse_event(e, "actor:mousedown")
    })
    n.addListener("mouseup", function (e) {
      return n.emit_mouse_event(e, "actor:mouseup")
    })
    n.addListener("mouseupoutside", function (e) {
      return n.emit_mouse_event(e, "actor:mouseupoutside")
    })
    n.addListener("mouseover", function (e) {
      return n.emit_mouse_event(e, "actor:mouseover")
    })
    n.addListener("mouseout", function (e) {
      return n.emit_mouse_event(e, "actor:mouseout")
    })
    n.addListener("rightclick", function (e) {
      return n.emit_mouse_event(e, "actor:rightclick")
    })
    n.addListener("touchstart", function (e) {
      return n.emit_mouse_event(e, "actor:touchstart")
    })
    n.addListener("touchend", function (e) {
      return n.emit_mouse_event(e, "actor:touchend")
    })
    n.addListener("touchendoutside", function (e) {
      return n.emit_mouse_event(e, "actor:touchendoutside")
    })
    n.add_listener("change", function (e) {
      if (e.position && n.current_rotate_around_actor && !n.current_rotate_around_actor.is_rotating) {
        n.current_rotate_around_actor = undefined
      }
    })
    n.events.event_emitter.addListener("break", n.on_break)
    n.events.add_listener("stage:resize", n.on_resize)
    return n
  }
  g(t, e)
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
    this.wrapper.destroy()
    e.prototype.destroy.call(this, {
      children: true
    })
    this.data.clear_actor_cache(this.id)
    this.events.event_emitter.removeListener("break", this.on_break)
    this.events.remove_listener("stage:resize", this.on_resize)
  }
  t.prototype.clone = function (e) {
    var n = new t({
      actor_id: e || "cloned_" + $$_34_index.B.uid(),
      parent_scene: this.parent_scene,
      app: this.app,
      data: this.data,
      events: this.events
    })
    n.styles = $$_520_index.a(this.styles)
    n.current_style = $$_520_index.a(this.current_style)
    n.texture = this.texture
    n.position.set(this.position.x, this.position.y)
    n.scale.set(this.scale.x, this.scale.y)
    n.pivot.set(this.pivot.x, this.pivot.y)
    n.alpha = this.alpha
    n.visible = this.visible
    n.rotation = this.rotation
    n.rotation_type = this.rotation_type
    n.rotation_value = this.rotation_value
    n.is_draggable = this.is_draggable
    n.has_drag_protection = this.has_drag_protection
    n.is_vertical_flipped = this.is_vertical_flipped
    n.is_horizontal_flipped = this.is_horizontal_flipped
    n.group = this.group
    n.is_clone = true
    n.prototype_actor_id = this.id
    if (this.effects) {
      this.effects.clone_to(n)
    }
    return n
  }
  t.prototype.set_pixi_texture = function (e) {
    this.texture = e
    this.emit_event("change", {
      texture: this.texture,
      width: this.width,
      height: this.height
    })
  }
  t.prototype.add_style = function (e) {
    this.styles[e.style_id] = $$_520_index.a(e)
  }
  t.prototype.get_style = function (e) {
    return $$_520_index.a(this.styles[e])
  }
  t.prototype.set_current_style = function (e) {
    var t = this.styles[e]
    if (!t) {
      return new $$_122.a("Cannot find style " + e + ", You should add style first")
    }
    var n = this.data.get_texture(t.texture_id)
    if (!n) {
      return new $$_122.a("Cannot find texture " + t.texture_id)
    }
    this.current_style = t
    this.set_pixi_texture(n)
    this.set_pixi_pivot(t.pivot.x, t.pivot.y)
  }
  t.prototype.update_texture_of_style = function (e, t) {
    var n = this.styles[e]
    if (!n) {
      return new $$_122.a("Cannot find style " + e + ", You should add style first")
    }
    var r = this.data.get_texture(t)
    if (!r) {
      return new $$_122.a("Cannot find texture " + t)
    }
    n.texture_id = t
    if (this.current_style && e === this.current_style.style_id) {
      this.set_pixi_texture(r)
    }
  }
  t.prototype.update_pivot_of_style = function (e, t) {
    var n = this.styles[e]
    if (!n) {
      return new $$_122.a("Cannot find style " + e + ", You should add style first")
    }
    n.pivot = $$_520_index.a(t)
    if (this.current_style && e === this.current_style.style_id) {
      this.set_pixi_pivot(n.pivot.x, n.pivot.y)
    }
  }
  t.prototype.get_current_style = function () {
    return $$_520_index.a(this.current_style)
  }
  t.prototype.get_style_ids = function () {
    return Object.keys(this.styles)
  }
  t.prototype.remove_style = function (e) {
    if (this.current_style && e === this.current_style.style_id) {
      this.current_style = undefined
      this.set_pixi_texture($$_34_index.y.EMPTY)
      this.set_pixi_pivot(0, 0)
    }
    delete this.styles[e]
  }
  t.prototype.set_z_index = function (e) {
    var t = this.parent_scene.get_actor_container()
    var n = $$_215_index.a(0, t.children.length - 1, e)
    t.setChildIndex(this.wrapper, n)
  }
  t.prototype.set_position_x = function (e) {
    this.set_pixi_position(e, this.position.y)
  }
  t.prototype.set_position_y = function (e) {
    this.set_pixi_position(this.position.x, -e)
  }
  t.prototype.set_position = function (e, t) {
    this.set_pixi_position(e, t ? -t : t)
  }
  t.prototype.set_pixi_position = function (e, t) {
    this.position.set(e, t)
    this.emit_event("change", {
      position: this.position
    })
  }
  t.prototype.move_forward = function (e) {
    var t = this.position.x + Math.cos(this.rotation_value) * e
    var n = -this.position.y + Math.sin(this.rotation_value) * e
    this.set_pixi_position(t, -n)
  }
  t.prototype.set_pixi_scale = function (e, t) {
    this.scale.set(e, t)
    this.emit_event("change", {
      width: this.width,
      height: this.height,
      scale: this.scale
    })
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
  t.prototype.set_alpha = function (e) {
    this.alpha = e
    this.emit_event("change", {
      alpha: this.alpha
    })
  }
  t.prototype.set_visible = function (e) {
    this.visible = e
    this.emit_event("change", {
      visible: this.visible
    })
  }
  t.prototype.set_pixi_rotation = function (e) {
    this.rotation = e
    this.emit_event("change", {
      rotation: this.rotation
    })
  }
  t.prototype.set_rotation_value = function (e) {
    this.rotation_value = e
  }
  t.prototype.set_rotation = function (e) {
    var t = $$_65.s(e)
    this.set_rotation_value(t)
    var n = 0
    var r = false
    switch (this.rotation_type) {
      case $$_$$_107_index.e.ALL:
        n = -t
        r = this.is_rotation_flipped
        break
      case $$_$$_107_index.e.LEFT_RIGHT:
        n = 0
        r = (this.rotation_value >= Math.PI / 2 || this.rotation_value < -Math.PI / 2) !== this.is_rotation_flipped
        break
      case $$_$$_107_index.e.NONE:
        n = 0
        r = this.is_rotation_flipped
    }
    this.set_pixi_rotation(n)
    if (r) {
      this.is_rotation_flipped = !this.is_rotation_flipped
      this.set_pixi_scale(-1 * this.scale.x, this.scale.y)
    }
  }
  t.prototype.set_rotation_type = function (e) {
    this.rotation_type = e
    this.set_rotation(this.rotation_value)
  }
  t.prototype.set_flipped = function (e) {
    switch (e) {
      case "vertical":
        this.set_pixi_scale(-1 * this.scale.x, this.scale.y)
        return void (this.is_vertical_flipped = !this.is_vertical_flipped)
      case "horizontal":
        this.set_pixi_scale(this.scale.x, -1 * this.scale.y)
        return void (this.is_horizontal_flipped = !this.is_horizontal_flipped)
    }
  }
  t.prototype.set_cursor = function (e) {
    this.cursor = e
  }
  t.prototype.set_group = function (e) {
    this.group = e
  }
  t.prototype.clear_group = function () {
    this.group = undefined
  }
  t.prototype.set_pivot_by_stage_point = function (e, t) {
    var n = this
    var r = new $$_34_index.o(e, -t)
    Object.keys(this.styles).forEach(function (e) {
      var t = n.styles[e]
      var i = n.map_local_point_to_pivot(r, new $$_34_index.o(t.pivot.x, t.pivot.y))
      t.pivot.x = i.x
      t.pivot.y = i.y
    })
    var i = this.current_style ? this.current_style.pivot : this.map_local_point_to_pivot(r, this.pivot)
    this.set_pixi_position(e, -t)
    this.set_pixi_pivot(i.x, i.y)
  }
  t.prototype.reset_pivot = function () {
    var e = this
    Object.keys(this.styles).forEach(function (t) {
      var n = e.styles[t]
      n.pivot.x = 0
      n.pivot.y = 0
    })
    var t = $$_65.d(this, this.position)
    this.set_pixi_position(t.x, t.y)
    this.set_pixi_pivot(0)
  }
  t.prototype.map_local_point_to_pivot = function (e, t) {
    var n = new $$_34_index.o(this.position.x - t.x * this.scale.x, this.position.y - t.y * this.scale.y)
    var r = $$_65.p(e, this.position, -this.rotation)
    var i = r.x - n.x
    var o = r.y - n.y
    return new $$_34_index.o(i / this.scale.x, o / this.scale.y)
  }
  t.prototype.set_pixi_pivot = function (e, t) {
    this.pivot.set(e, t)
    this.emit_event("change", {
      pivot: this.pivot
    })
  }
  t.prototype.get_position = function () {
    return {
      x: this.position.x,
      y: -this.position.y
    }
  }
  t.prototype.get_center_position = function () {
    var e = $$_65.d(this, this.position)
    return {
      x: e.x,
      y: -e.y
    }
  }
  t.prototype.get_width = function () {
    return this.width
  }
  t.prototype.get_height = function () {
    return this.height
  }
  t.prototype.get_scale = function () {
    return {
      x: Math.abs(this.scale.x),
      y: Math.abs(this.scale.y)
    }
  }
  t.prototype.get_alpha = function () {
    return this.alpha
  }
  t.prototype.get_visible = function () {
    return this.visible
  }
  t.prototype.get_rotation = function () {
    return this.rotation_value
  }
  t.prototype.get_rotation_type = function () {
    return this.rotation_type
  }
  t.prototype.get_pixi_rotation = function () {
    return this.rotation
  }
  t.prototype.get_vertical_flipped = function () {
    return this.is_vertical_flipped
  }
  t.prototype.get_horizontal_flipped = function () {
    return this.is_horizontal_flipped
  }
  t.prototype.get_pivot = function () {
    return {
      x: this.pivot.x,
      y: this.pivot.y
    }
  }
  t.prototype.get_group = function () {
    return this.group
  }
  t.prototype.get_z_index = function () {
    return this.parent_scene.get_actor_container().getChildIndex(this.wrapper)
  }
  t.prototype.get_parent_scene = function () {
    return this.parent_scene
  }
  t.prototype.get_brush = function () {
    return this.brush
  }
  t.prototype.get_is_clone = function () {
    return this.is_clone
  }
  t.prototype.get_prototype_actor_id = function () {
    return this.prototype_actor_id
  }
  t.prototype.get_effects = function () {
    return this.effects ? $$_122.b.success(this.effects) : $$_122.b.error("Effect not available. It needs support of WebGL.")
  }
  t.prototype.set_draggable = function (e) {
    this.is_draggable = e
  }
  t.prototype.get_draggable = function () {
    return this.is_draggable
  }
  t.prototype.is_dragging = function () {
    return !!this.drag_data
  }
  t.prototype.set_drag_protection = function (e) {
    this.has_drag_protection = e
  }
  t.prototype.check_bumped = function (e) {
    var t = this.data.get_internal_actor(e)
    return t ? $$_122.b.success(this.check_bumped_other(t)) : $$_122.b.error("Cannot find actor " + e)
  }
  t.prototype.hit_test = function (e, t) {
    return this.is_touching(new $$_34_index.o(e, -t))
  }
  t.prototype.get_bounds_LTRB = function () {
    var e = this.get_vertices()
    return {
      left: e.min_x,
      top: -e.min_y,
      right: e.max_x,
      bottom: -e.max_y
    }
  }
  t.prototype.check_bumped_other = function (e) {
    if (!this.visible || !e.get_visible()) {
      return false
    }
    if (this.has_left_stage() || e.has_left_stage()) {
      return false
    }
    if (this.parent_scene.id !== e.parent_scene.id) {
      return false
    }
    var t = this.get_vertices()
    var n = e.get_vertices()
    if (!(t.min_x < n.max_x && t.max_x > n.min_x && t.min_y < n.max_y && t.max_y > n.min_y)) {
      return false
    }
    for (var r = {
        left: Math.round(Math.max(t.min_x, n.min_x)),
        right: Math.round(Math.min(t.max_x, n.max_x)),
        top: Math.round(Math.min(t.max_y, n.max_y)),
        bottom: Math.round(Math.max(t.min_y, n.min_y))
      }, i = new $$_34_index.o(0, 0), o = 0, /* [auto-meaningful-name] */r$left = r.left; r$left < r.right; r$left += 2) {
      i.x = r$left
      for (var /* [auto-meaningful-name] */r$top = r.top; r$top > r.bottom; r$top -= 2) {
        i.y = r$top
        if (this.is_touching(i) && e.is_touching(i) && (o++, this.is_tiny_sprite(this) || this.is_tiny_sprite(e))) {
          return true
        }
        if (o === this.min_points_for_collision) {
          return true
        }
      }
    }
    return false
  }
  t.prototype.check_bumped_color = function (e) {
    return $$_122.b.success(this.bumped_color(e))
  }
  t.prototype.bumped_color = function (e) {
    if (this.has_left_stage() || !this.current_style) {
      return false
    }
    var t = this.get_bounds_in_stage()
    if (0 === t.width || 0 === t.height) {
      return false
    }
    var n = this.data.get_texture_points_position(this.current_style.texture_id)
    return !(!n || 0 === n.length) && this.color_match_texture_points(t, n, e)
  }
  t.prototype.color_match_texture_points = function (e, t, n) {
    var r = this.app.get_app_view_size()
    var /* [auto-meaningful-name] */r$width = r.width
    var /* [auto-meaningful-name] */r$height = r.height
    var s = $$_65.f({
      width: e.width,
      height: e.height
    })
    var u = this.get_visible()
    this.visible = false
    var l = $$_65.g(e, {
      width: r$width,
      height: r$height
    })
    this.render_texture.resize(s.width, s.height, true)
    this.app.get_app().renderer.render(this.app.get_app().stage, {
      renderTexture: this.render_texture,
      transform: l
    })
    var f = this.app.get_extract_module().pixels(this.render_texture)
    this.visible = u
    for (var d = $$_65.i(n), h = undefined, p = 0; p < t.length; p++) {
      var _ = $$_65.c(t[p])
      var A = $$_65.q(_, this)
      var g = $$_65.t(new $$_34_index.o(A.x - e.x, A.y - e.y))
      var v = Math.floor(g.x)
      var m = Math.floor(g.y)
      if (!(v >= s.width || m >= s.height) && (h = 4 * v + m * s.width * 4, this.color_match(d, f, h))) {
        return true
      }
    }
    return false
  }
  t.prototype.color_match = function (e, t, n) {
    return undefined !== t[n] && undefined !== t[n + 1] && undefined !== t[n + 2] && (248 & e[0]) === (248 & t[n]) && (248 & e[1]) === (248 & t[n + 1]) && (240 & e[2]) === (240 & t[n + 2])
  }
  t.prototype.get_bounds_in_stage = function () {
    var e = this.get_vertices()
    var t = this.app.get_app_view_size()
    var /* [auto-meaningful-name] */t$width = t.width
    var /* [auto-meaningful-name] */t$height = t.height
    var o = {
      left: $$_215_index.a(-t$width / 2, t$width / 2, e.min_x - 5),
      right: $$_215_index.a(-t$width / 2, t$width / 2, e.max_x + 5),
      top: $$_215_index.a(-t$height / 2, t$height / 2, e.min_y - 5),
      bottom: $$_215_index.a(-t$height / 2, t$height / 2, e.max_y + 5)
    }
    return {
      x: Math.round(o.left),
      y: Math.round(o.top),
      width: Math.abs(Math.floor(o.right - o.left)),
      height: Math.abs(Math.floor(o.bottom - o.top))
    }
  }
  t.prototype.check_relation_with_edge = function (e, t) {
    var n = this.get_vertices()
    var r = this.pixel_detector.check_relation_by_vertices(n, e)
    var i = this.pixel_detector.contains_edge(r, t)
    switch (e) {
      case "collision":
        if (!i) {
          return false
        }
        break
      case "overstep":
        if (i) {
          return true
        }
    }
    var o = this.pixel_detector.get_texture_bounds_points_vertices()
    if (!o) {
      return false
    }
    var a = this.pixel_detector.check_relation_by_vertices(o, e)
    var s = this.pixel_detector.contains_edge(a, t)
    switch (e) {
      case "collision":
        if (s) {
          return true
        }
        break
      case "overstep":
        if (!s) {
          return false
        }
    }
    var c = this.pixel_detector.get_texture_internal_points_vertices()
    if (!c) {
      return false
    }
    var u = this.pixel_detector.check_relation_by_vertices(c, e)
    return this.pixel_detector.contains_edge(u, t)
  }
  t.prototype.bounce_if_collision_with_edge = function () {
    var e = this.get_vertices()
    if (this.pixel_detector.check_relation_by_vertices(e, "collision")) {
      var t = this.pixel_detector.get_texture_internal_points_vertices()
      if (t) {
        var n = this.pixel_detector.check_relation_by_vertices(t, "collision")
        if (n) {
          var r = this.app.get_app_view_size()
          var /* [auto-meaningful-name] */r$width = r.width
          var /* [auto-meaningful-name] */r$height = r.height
          var a = r$width / 2
          var u = r$height / 2
          var l = Math.cos(this.rotation_value)
          var f = Math.sin(this.rotation_value)
          var d = []
          if (this.pixel_detector.contains_edge(n, $$_$$_107_index.b.RIGHT)) {
            l = -Math.abs(l)
            d.push($$_$$_107_index.b.RIGHT)
          }
          if (this.pixel_detector.contains_edge(n, $$_$$_107_index.b.LEFT)) {
            l = Math.abs(l)
            d.push($$_$$_107_index.b.LEFT)
          }
          if (this.pixel_detector.contains_edge(n, $$_$$_107_index.b.TOP)) {
            f = -Math.abs(f)
            d.push($$_$$_107_index.b.TOP)
          }
          if (this.pixel_detector.contains_edge(n, $$_$$_107_index.b.BOTTOM)) {
            f = Math.abs(f)
            d.push($$_$$_107_index.b.BOTTOM)
          }
          var h = Math.atan2(f, l)
          var p = this.rotation_value - h
          var _ = 0
          var A = 0
          var g = t
          if (p % (2 * Math.PI) !== 0) {
            if (0 !== this.pivot.x && 0 !== this.pivot.y) {
              var v = $$_65.d(this, this.position)
              var m = $$_65.p(this.position, v, p)
              this.set_pixi_position(m.x, m.y)
            }
            this.set_rotation(h)
            var y = this.pixel_detector.get_texture_internal_points_vertices()
            g = y || g
          }
          d.forEach(function (e) {
            switch (e) {
              case $$_$$_107_index.b.RIGHT:
                _ = a - (g.max_x + 10)
                break
              case $$_$$_107_index.b.LEFT:
                _ = -a - (g.min_x - 10)
                break
              case $$_$$_107_index.b.TOP:
                A = -u - (g.min_y - 10)
                break
              case $$_$$_107_index.b.BOTTOM:
                A = u - (g.max_y + 10)
            }
          })
          this.set_pixi_position(this.position.x + _, this.position.y + A)
        }
      }
    }
  }
  t.prototype.get_id = function () {
    return this.id
  }
  t.prototype.emit_mouse_event = function (e, t) {
    var /* [auto-meaningful-name] */this$app$get_app$stage = this.app.get_app().stage
    var r = e.data.getLocalPosition(this$app$get_app$stage)
    var i = r.x
    var o = r.y
    this.events.fire(t, {
      target_id: this.id,
      data: {
        position: {
          x: i,
          y: -o
        }
      }
    })
  }
  t.prototype.is_touching = function (e) {
    if (!this.current_style) {
      return false
    }
    var t = this.data.get_texture_points_color_data(this.current_style.texture_id)
    if (!t) {
      return false
    }
    var n = $$_65.r(e, this)
    var r = $$_65.f({
      width: this.texture.width,
      height: this.texture.height
    })
    var i = $$_65.t(n)
    return !(i.x > r.width || i.y > r.height || i.x < 0 || i.y < 0) && t[i.y * r.width + i.x] >>> 24 > 0
  }
  t.prototype.get_vertices = function () {
    var e = this.app.get_app_view_size()
    var t = e.width / 2
    var n = e.height / 2
    var r = this.getBounds()
    return {
      max_x: r.x + r.width - t,
      min_x: r.x - t,
      max_y: r.y + r.height - n,
      min_y: r.y - n
    }
  }
  t.prototype.has_left_stage = function () {
    var e = this.getBounds()
    var t = this.app.get_app_view_size()
    var /* [auto-meaningful-name] */t$width = t.width
    var /* [auto-meaningful-name] */t$height = t.height
    var i = e.y + e.height
    var o = t$height - e.y
    var a = e.x + e.width
    var s = t$width - e.x
    return i <= 0 || o <= 0 || a <= 0 || s <= 0
  }
  t.prototype.is_tiny_sprite = function (e) {
    return e.width * e.height < 2 * this.min_points_for_collision
  }
  t.prototype.rotate_around_actor = function (e, t) {
    var /* [auto-meaningful-name] */r$current_rotate_around_actor
    var r = this.data.get_internal_actor(e)
    if (!r) {
      return new $$_122.a("Cannot find actor " + e)
    }
    if (!(this.current_rotate_around_actor && this.current_rotate_around_actor.actor_id === e)) {
      this.current_rotate_around_actor = {
        actor_id: e,
        offset: new $$_34_index.o(this.get_position().x - r.get_position().x, this.get_position().y - r.get_position().y),
        is_rotating: true
      }
    }
    this.current_rotate_around_actor.is_rotating = true
    if (this.id === (null === (r$current_rotate_around_actor = r.current_rotate_around_actor) || undefined === r$current_rotate_around_actor ? undefined : r$current_rotate_around_actor.actor_id)) {
      var i = $$_65.p(this.get_position(), r.get_position(), t)
      var o = i.x
      var s = i.y
      this.set_position(o, s)
    } else {
      this.current_rotate_around_actor.offset = $$_65.p(this.current_rotate_around_actor.offset, {
        x: 0,
        y: 0
      }, t)
      this.set_position(this.current_rotate_around_actor.offset.x + r.get_position().x, this.current_rotate_around_actor.offset.y + r.get_position().y)
    }
    this.set_rotation(this.get_rotation() + t)
    this.current_rotate_around_actor.is_rotating = false
  }
  return t
}($$_34_index.t)
export default v
