/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：683__part-10
 */

"use strict"

var Me
import * as /* [auto-meaningful-name] */$_215_index from "./215/index"
import * as /* [auto-meaningful-name] */$$_107_index from "../107/index"
import * as /* [auto-meaningful-name] */$_122 from "./122"
import * as c from "./65"
import * as /* [auto-meaningful-name] */$_34_index from "./34/index"
import * as /* [auto-meaningful-name] */$_128 from "./128";
(function () {
  function e(e, t) {
    this.actor_dialogs = new Map()
    this.dialog_containers = new Map()
    this.actor_destroy_handlers = new Map()
    this.app = e
    this.data = t
  }
  e.prototype.load_dialog = function (e, t) {
    var /* [auto-meaningful-name] */e$parent_scene = e.parent_scene
    var r = this.get_dialog_container(e$parent_scene)
    this.actor_dialogs.set(e.get_id(), t)
    r.addChild(t.get_graphics())
  }
  e.prototype.destroy_actor_dialog = function (e) {
    var t = this.actor_dialogs.get(e)
    if (!t) {
      return new $_122.a("Actor dialog " + e + " has not been found")
    }
    var n = this.data.get_internal_actor(e)
    var r = this.actor_destroy_handlers.get(e)
    if (n && r) {
      n.remove_listener("destroy", r)
      this.actor_destroy_handlers.delete(e)
    }
    this.actor_dialogs.delete(e)
    t.destroy()
  }
  e.prototype.destroy_all_actor_dialogs = function () {
    var e = this
    this.dialog_containers.forEach(function (t) {
      e.destroy_dialog_container(t)
    })
  }
  e.prototype.set_container_z_index = function () {
    console.warn("Method deprecated. It will not change anything.")
  }
  e.prototype.destroy = function () {
    this.destroy_all_actor_dialogs()
  }
  e.prototype.get_dialog_container = function (e) {
    var t = this
    var n = e.get_id()
    var r = this.dialog_containers.get(n)
    if (!r) {
      r = new $_34_index.f()
      e.addChild(r)
      this.dialog_containers.set(n, r)
      e.add_listener("destroy", function () {
        var e = t.dialog_containers.get(n)
        if (e) {
          t.destroy_dialog_container(e)
        }
      })
    }
    return r
  }
  e.prototype.destroy_dialog_container = function (e) {
    var t = this
    var /* [auto-meaningful-name] */e$parent = e.parent
    if (c.m(e$parent)) {
      this.dialog_containers.delete(e$parent.get_id())
      e.removeChildren().forEach(function (e) {
        if (e.name) {
          t.actor_dialogs.delete(e.name)
        }
        e.destroy()
      })
    }
    e.destroy()
  }
})()
var Ue = function () {
  function e(e, t, n) {
    var r = this
    this.actor_dialog = new $_34_index.j()
    this.text = new $_34_index.v("")
    this.content_width = 0
    this.content_height = 0
    this.on_change = function (e) {
      r.update_on_change(e)
    }
    this.update_on_change = function (e) {
      if (e.position || e.scale || e.rotation) {
        r.update_dialog_position()
      }
      if (undefined !== e.alpha) {
        r.update_dialog_alpha()
      }
      if (e.position || e.scale || e.rotation || undefined !== e.visible) {
        r.update_dialog_visible()
      }
    }
    this.actor_dialog.name = e.id
    this.text.name = "text"
    this.actor = e
    this.STAGE_WIDTH = t
    this.STAGE_HEIGHT = n
    this.actor_dialog.addChild(this.text)
    this.actor.add_listener("change", this.on_change)
  }
  e.prototype.update_dialog_alpha = function () {
    this.actor_dialog.alpha = this.actor.get_alpha()
  }
  e.prototype.update_dialog_visible = function () {
    var e = this.actor.get_visible() && 0 !== this.actor.get_scale().x
    this.actor_dialog.visible = e
  }
  e.prototype.update_dialog_position = function () {
    var e = c.d(this.actor, this.actor.position)
    this.actor_dialog.position.set(e.x, e.y - this.actor.height / 2 - this.actor_dialog.height)
    this.actor_dialog.scale.x = 1
    this.text.scale.x = 1
    var t = this.content_width === this.DIALOG_MIN_WIDTH ? (this.content_width - this.text.width) / 2 : this.TEXT_PADDING
    this.text.position.x = t
    this.text.position.y = this.TEXT_PADDING
    this.calibrate_edge_detection(this.actor_dialog.getBounds(), e)
  }
  e.prototype.calibrate_edge_detection = function (e, t) {
    var n = this.STAGE_WIDTH / 2
    var r = this.STAGE_HEIGHT / 2
    var i = e.x + e.width > this.STAGE_WIDTH
    var o = e.x < 0
    var a = e.y < 0
    var s = e.y + e.height > this.STAGE_HEIGHT
    if (i && this.actor_dialog.scale.x > 0) {
      this.actor_dialog.scale.x = -1
      this.text.scale.x = -1
      this.text.position.x = this.content_width - this.text.position.x
      if (t.x > n) {
        this.actor_dialog.position.x = n
      }
    }
    if (o) {
      this.actor_dialog.position.x = -n
    }
    if (a) {
      this.actor_dialog.position.y = -r
    }
    if (s) {
      this.actor_dialog.position.y = r - this.actor_dialog.height
    }
  }
  e.prototype.actor_is_in_stage = function () {
    var e = this.actor.getBounds()
    return e.x < this.STAGE_WIDTH && e.x > -e.width && e.y < this.STAGE_HEIGHT && e.y > -e.height
  }
  e.prototype.destroy = function () {
    this.actor.remove_listener("change", this.on_change)
    this.actor_dialog.destroy({
      children: true,
      texture: true
    })
  }
  e.prototype.get_graphics = function () {
    return this.actor_dialog
  }
  return e
}()
var He = function () {
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
var Ve = {
  fontSize: "26px",
  fontFamily: ["PingFangSC-Medium", "Microsoft YaHei"],
  fill: "#666666",
  wordWrap: true,
  wordWrapWidth: 208,
  breakWords: true,
  lineHeight: 36
}
var Ge = function () {
  function e(e, t) {
    this.dialog_cache = new Map()
    this.app = e
    this.data = t
  }
  e.prototype.load_actor_dialog = function (e, t, n) {
    var r = this
    var i = this.data.get_internal_actor(e)
    if (!i) {
      return new $_122.a("Actor " + e + " has not been found")
    }
    var o = this.dialog_cache.get(e)
    if (!o) {
      var s = this.app.get_app_view_size()
      var /* [auto-meaningful-name] */s$width = s.width
      var /* [auto-meaningful-name] */s$height = s.height;
      (o = new ze(i, n, s$width, s$height, this.app.get_renderer_type() === $_34_index.p.WEBGL)).get_graphics().setParent(i.wrapper)
      this.dialog_cache.set(e, o)
      i.add_listener("destroy", function () {
        r.destroy_actor_dialog(e)
      })
    }
    o.update(t, n)
  }
  e.prototype.destroy_actor_dialog = function (e) {
    var t = this.dialog_cache.get(e)
    if (!t) {
      return new $_122.a("Actor dialog " + e + " has not been found")
    }
    this.dialog_cache.delete(e)
    t.destroy()
  }
  e.prototype.destroy_all_actor_dialogs = function () {
    this.dialog_cache.forEach(function (e) {
      e.destroy()
    })
    this.dialog_cache.clear()
  }
  e.prototype.destroy = function () {
    this.destroy_all_actor_dialogs()
  }
  return e
}()
var ze = function (e) {
  function t(t, n, r, i, o) {
    var s = e.call(this, t, r, i) || this
    s.DIALOG_MIN_WIDTH = 108
    s.DIALOG_MAX_WIDTH = 248
    s.TEXT_PADDING = 20
    s.bubbles = new $_34_index.j()
    s.update_on_change = function (e) {
      if (e.position || e.scale || e.rotation) {
        s.update_dialog_position()
      }
    }
    s.type = n
    s.actor = t
    s.text.style = Ve
    s.bubbles.name = "bubbles"
    s.actor_dialog.addChild(s.bubbles)
    s.update_dialog_style()
    if (o) {
      s.actor_dialog.filters = [new $_34_index.h({
        rotation: 45,
        distance: 3,
        alpha: .15,
        color: 0,
        blur: 0
      })]
    }
    return s
  }
  He(t, e)
  t.prototype.update = function (e, t) {
    if (!(e === this.text.text && t === this.type)) {
      this.text.text = e
      this.type = t
      this.update_dialog_style()
    }
    this.update_dialog_position()
  }
  t.prototype.update_dialog_style = function () {
    var /* [auto-meaningful-name] */this$actor
    var t
    var n = this.text.width + 2 * this.TEXT_PADDING
    this.content_height = this.text.height + 30
    this.content_width = $_215_index.a(this.DIALOG_MIN_WIDTH, this.DIALOG_MAX_WIDTH, n)
    var r = {
      start_x: .1 * this.DIALOG_MAX_WIDTH,
      center_x: .1 * this.DIALOG_MAX_WIDTH - 5
    }
    var i = {
      x: 25,
      y: this.content_height + 20
    }
    var o = {
      x: 5,
      y: this.content_height + 40
    }
    var s = this.content_height > 80 ? 40 : this.content_height / 2
    var c = (null === (t = null === (this$actor = this.actor) || undefined === this$actor ? undefined : this$actor.app) || undefined === t ? undefined : t.get_app().renderer.type) === $_34_index.p.CANVAS
    switch (this.actor_dialog.clear(), this.bubbles.clear(), this.type) {
      case $_128.a.SAYING:
        if (c) {
          this.actor_dialog.beginFill(0, .3)
          this.actor_dialog.drawRoundedRect(0, 0, this.content_width + 1, this.content_height + 1, 16)
          this.actor_dialog.moveTo(r.start_x, this.content_height)
          this.actor_dialog.lineTo(r.center_x + 1, this.content_height + 25 + 1)
          this.actor_dialog.lineTo(r.start_x + 1 + 25, this.content_height + 1)
          this.actor_dialog.endFill()
        }
        this.actor_dialog.beginFill(16777215)
        this.actor_dialog.drawRoundedRect(0, 0, this.content_width, this.content_height, 16)
        this.actor_dialog.moveTo(r.start_x, this.content_height)
        this.actor_dialog.lineTo(r.center_x, this.content_height + 25)
        this.actor_dialog.lineTo(r.start_x + 25, this.content_height)
        this.actor_dialog.endFill()
        this.bubbles.visible = false
        break
      case $_128.a.THINKING:
        if (c) {
          this.bubbles.beginFill(0, .3)
          this.bubbles.drawEllipse(i.x + 1, i.y + 1, 13, 10)
          this.bubbles.drawEllipse(o.x + 1, o.y + 1, 8, 6)
          this.bubbles.endFill()
          this.bubbles.visible = true
          this.actor_dialog.beginFill(0, .3)
          this.actor_dialog.drawRoundedRect(0, 0, this.content_width + 1, this.content_height + 1, s)
          this.actor_dialog.endFill()
        }
        this.bubbles.beginFill(16777215)
        this.bubbles.drawEllipse(i.x, i.y, 13, 10)
        this.bubbles.drawEllipse(o.x, o.y, 8, 6)
        this.bubbles.endFill()
        this.bubbles.visible = true
        this.actor_dialog.beginFill(16777215)
        this.actor_dialog.drawRoundedRect(0, 0, this.content_width, this.content_height, s)
        this.actor_dialog.endFill()
    }
  }
  return t
}(Ue)
!function (e) {
  e[e.RECORDING = 0] = "RECORDING"
  e[e.RECOGNITION = 1] = "RECOGNITION"
}(Me || (Me = {}))
var Ke = 16
var Xe = 270
var Ye = 6
var qe = 32
var $e = 46
var Je = .4
var Ze = .3
var et = .16
var tt = {
  distance: 2,
  color: 0,
  alpha: .5,
  rotation: 45,
  blur: 0
}
var nt = 94
var rt = .56
var it = 1
var ot = .7
var at = {
  alpha: .22,
  rotation: 90,
  distance: 3
}
var st = 46
var ct = 1
var ut = .7
var lt = {
  fontFamily: ["PingFangSC", "Microsoft YaHei"],
  fontSize: 20,
  fontWeight: "500",
  align: "center"
}
var /* [auto-meaningful-name] */_0x297EFF = "0x297EFF"
var dt = {
  fontFamily: ["PingFangSC", "Microsoft YaHei"],
  fontSize: 20,
  fontWeight: "400",
  lineHeight: 26,
  align: "left",
  fill: "#000000",
  wordWrap: true,
  wordWrapWidth: 550,
  breakWords: true
}
var ht = 34
var pt = 47
var _t = {
  width: 7,
  gap: 15,
  max_height: 65,
  min_height: 10,
  num_per_side: 8,
  color: 16729173
}
var At = {
  width: 3,
  gap: 8,
  max_height: 23,
  min_height: 5,
  num_per_side: 14,
  color: 1952135
}
var gt = 400
var vt = 50
var mt = 6
var yt = 2
var bt = 1161338
var wt = 2940568
var Et = 2
var xt = 16777215
var Ct = 8
var Ot = 16777215
var kt = 10
var St = .15
var Tt = function () {
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
var Bt = function (e) {
  function t(t, n) {
    var r = e.call(this) || this
    r.is_touching = false
    r.on_default_mouse_down = function () {
      r.is_touching = true
    }
    r.on_default_mouse_up = function () {
      if (r.is_touching) {
        r.is_touching = false
        if (r.type) {
          r.events.fire("voice_dialog_btn:click", {
            type: r.type
          })
        }
      }
    }
    r.on_default_mouse_out = function () {
      r.is_touching = false
    }
    r.app = t
    r.events = n
    r.interactive = true
    r.addListener("mousedown", r.on_default_mouse_down).addListener("mouseup", r.on_default_mouse_up).addListener("mouseout", r.on_default_mouse_out).addListener("touchstart", r.on_default_mouse_down).addListener("touchend", r.on_default_mouse_up).addListener("touchendoutside", r.on_default_mouse_out)
    return r
  }
  Tt(t, e)
  return t
}($_34_index.j)
var Dt = function (e) {
  function t(t, n, r, i) {
    if (undefined === r) {
      r = 1
    }
    var o = e.call(this, t, n) || this
    o.icon = new $_34_index.t()
    o.default_alpha = r
    o.active_alpha = undefined === i ? r : i
    o.icon.anchor.set(.5)
    o.set_icon_alpha(o.default_alpha)
    if (o.default_alpha !== o.active_alpha) {
      o.addListener("mouseover", function () {
        o.set_icon_alpha(o.active_alpha)
      }).addListener("mouseout", function () {
        o.set_icon_alpha(o.default_alpha)
      })
    }
    o.addChild(o.icon)
    return o
  }
  Tt(t, e)
  t.prototype.set_icon_texture = function (e) {
    this.icon.texture = e
  }
  t.prototype.set_icon_alpha = function (e) {
    this.icon.alpha = e
    this.app.render()
  }
  return t
}(Bt)
var It = function (e) {
  function t(t, n) {
    var r = e.call(this, t, n, Je, Ze) || this
    r.scale.set(et)
    r.type = "close_btn"
    return r
  }
  Tt(t, e)
  return t
}(Dt)
var Ft = function (e) {
  function t(t, n) {
    var r = e.call(this, t, n, it, ot) || this
    r.scale.set(rt)
    if (r.app.get_renderer_type() === $_34_index.p.WEBGL) {
      r.drop_shadow_filter = new $_34_index.h(at)
      r.filters = [r.drop_shadow_filter]
    }
    return r
  }
  Tt(t, e)
  t.prototype.set_textures = function (e) {
    this.textures = e
  }
  t.prototype.draw_btn = function (e) {
    if (this.textures && this.type !== e && (this.type = e, this.set_icon_texture(this.textures[this.type]), this.drop_shadow_filter)) {
      switch (e) {
        case "recorder_btn":
          this.drop_shadow_filter.color = 16729173
          this.drop_shadow_filter.blur = 5
          break
        case "terminate_btn":
          this.drop_shadow_filter.color = 15753312
          this.drop_shadow_filter.blur = 5
          break
        case "play_btn":
        case "stop_btn":
          this.drop_shadow_filter.color = 1298827
          this.drop_shadow_filter.blur = 7
          break
        case "recognize_btn":
          return void (this.filters = [])
      }
      this.filters = [this.drop_shadow_filter]
    }
  }
  return t
}(Dt)
var Rt = function (e) {
  function t(t, n, r, i, o) {
    if (undefined === i) {
      i = 1
    }
    var s = e.call(this, t, n) || this
    s.text = new $_34_index.v("", lt)
    s.default_alpha = i
    s.active_alpha = undefined === o ? i : o
    s.type = r
    s.cursor = "pointer"
    s.text.anchor.set(.5)
    if (s.default_alpha !== s.active_alpha) {
      s.addListener("mouseover", function () {
        s.set_text_alpha(s.active_alpha)
      }).addListener("mouseout", function () {
        s.set_text_alpha(s.default_alpha)
      })
    }
    s.addChild(s.text)
    return s
  }
  Tt(t, e)
  t.prototype.set_text = function (e) {
    this.text.text = e
  }
  t.prototype.set_text_color = function (e) {
    this.text.style.fill = e
  }
  t.prototype.set_text_alpha = function (e) {
    this.text.alpha = e
    this.app.render()
  }
  return t
}(Bt)
var Pt = function () {
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
var Nt = function (e) {
  function t(t) {
    var /* [auto-meaningful-name] */t$gap = t.gap
    var /* [auto-meaningful-name] */t$num_per_side = t.num_per_side
    var /* [auto-meaningful-name] */t$width = t.width
    var /* [auto-meaningful-name] */t$max_height = t.max_height
    var /* [auto-meaningful-name] */t$min_height = t.min_height
    var /* [auto-meaningful-name] */t$color = t.color
    var u = e.call(this) || this
    u.animation_interval = 120
    u.current_central_gap = 0
    u.max_item_height = t$max_height
    u.min_item_height = t$min_height
    u.item_num_per_side = t$num_per_side
    u.item_gap = t$gap
    for (var l = t$width / 2, f = 0; f < 2 * u.item_num_per_side; f++) {
      var d = new $_34_index.j()
      d.beginFill(t$color).drawRoundedRect(0, 0, t$width, u.max_item_height, l).endFill()
      d.position.x = f * t$gap
      u.addChild(d)
    }
    return u
  }
  Pt(t, e)
  t.prototype.set_item_height = function (e, t) {
    if (e instanceof $_34_index.j) {
      e.height = t
      e.position.y = (this.max_item_height - t) / 2
    }
  }
  t.prototype.animate = function () {
    var e = this
    if (this.animation_timer) {
      window.clearInterval(this.animation_timer)
    }
    var t = this.max_item_height - this.min_item_height
    this.animation_timer = window.setInterval(function () {
      for (var n = 0; n < e.item_num_per_side; n++) {
        var r = Math.random() * t + e.min_item_height
        var i = e.children[n]
        var o = e.children[e.children.length - n - 1]
        e.set_item_height(i, r)
        e.set_item_height(o, r)
      }
    }, this.animation_interval)
  }
  t.prototype.terminate = function () {
    if (this.animation_timer) {
      window.clearInterval(this.animation_timer)
    }
  }
  t.prototype.set_central_gap = function (e) {
    if (this.current_central_gap !== e) {
      this.current_central_gap = e
      for (var t = 0; t < 2 * this.item_num_per_side; t++) {
        var n = this.children[t]
        var r = t < this.item_num_per_side ? t * this.item_gap : t * this.item_gap + e
        n.position.x = r
      }
    }
  }
  return t
}($_34_index.j)
var Mt = function () {
  function e(e, t) {
    this.start_time = 0
    this.volume_bar = new Nt(e)
    this.timer = new $_34_index.v("00:00", dt)
    this.parent_graphics = t
  }
  e.prototype.set_text = function (e) {
    this.timer.text = e
  }
  e.prototype.start_counting = function () {
    var e = this
    if (0 === this.start_time) {
      this.start_time = Date.now()
      this.timer.text = "00:00"
    }
    this.counting_timer = window.setInterval(function () {
      var t = Date.now() - e.start_time
      var n = Math.round(t / 1e3)
      var r = Math.floor(n / 60)
      n -= 60 * r
      var i = r < 10 ? "0" + r : r.toString()
      var o = n < 10 ? "0" + n : n.toString()
      e.timer.text = i + ":" + o
    }, 1e3)
  }
  e.prototype.stop_counting = function () {
    this.timer.text = "00:00"
    this.start_time = 0
    if (this.counting_timer) {
      clearInterval(this.counting_timer)
    }
  }
  e.prototype.start_animation = function () {
    this.volume_bar.animate()
  }
  e.prototype.stop_animation = function () {
    this.volume_bar.terminate()
  }
  e.prototype.get_volume_bar = function () {
    return this.volume_bar
  }
  e.prototype.get_timer = function () {
    return this.timer
  }
  return e
}()
var jt = function (e) {
  function t(t, n, r, i) {
    var o = e.call(this, _t, t) || this
    o.get_text_record = r
    o.events = i
    var /* [auto-meaningful-name] */n$max_duration = n.max_duration
    var /* [auto-meaningful-name] */n$thresholds = n.thresholds
    var c = o.get_text_record()
    var /* [auto-meaningful-name] */c$countdown_prefix = c.countdown_prefix
    var /* [auto-meaningful-name] */c$countdown_suffix = c.countdown_suffix
    o.countdown_prefix = c$countdown_prefix
    o.countdown_suffix = c$countdown_suffix
    o.countdown_opt = {
      max_duration: n$max_duration,
      thresholds: Math.min(n$max_duration, n$thresholds)
    }
    o.timer.anchor.set(.5)
    o.parent_graphics.addChild(o.volume_bar, o.timer)
    return o
  }
  Pt(t, e)
  t.prototype.set_visible = function (e) {
    this.timer.visible = e
    this.volume_bar.visible = e
  }
  t.prototype.start_counting = function () {
    var e = this
    if (0 === this.start_time) {
      this.start_time = Date.now() - 1e3
      this.timer.text = "00:01"
    }
    this.counting_timer = window.setInterval(function () {
      var t = Date.now() - e.start_time
      var n = Math.round(t / 1e3)
      if (n < e.countdown_opt.thresholds) {
        var r = Math.floor(n / 60)
        n -= 60 * r
        var i = r < 10 ? "0" + r : r.toString()
        var o = n < 10 ? "0" + n : n.toString()
        e.timer.text = i + ":" + o
      } else {
        var a = e.countdown_opt.max_duration - n
        if (a > 0) {
          e.timer.text = "" + e.countdown_prefix + a + e.countdown_suffix
        } else {
          clearInterval(e.counting_timer)
          e.events.fire("voice_dialog:recorder_time_up", undefined)
        }
      }
    }, 1e3)
  }
  t.prototype.stop_counting = function () {
    this.timer.text = "00:00"
    this.start_time = 0
    if (this.counting_timer) {
      clearInterval(this.counting_timer)
    }
  }
  t.prototype.set_countdown_warning_text = function (e, t) {
    this.countdown_prefix = e
    this.countdown_suffix = t
  }
  t.prototype.destroy = function () {
    this.timer.destroy({
      texture: true
    })
    this.volume_bar.destroy({
      children: true
    })
  }
  return t
}(Mt)
var Lt = function (e) {
  function t(t) {
    var n = e.call(this, At, t) || this
    var r = gt
    var i = vt
    var o = mt
    var s = yt
    var c = bt
    var u = wt
    var l = Ct
    var f = Ot
    n.graphics = new $_34_index.j()
    n.graphics.lineStyle(s, c).beginFill(u).drawRoundedRect(0, 0, r, i, o).endFill()
    n.timer.position.set((r - n.timer.width) / 2, (i - n.timer.height) / 2)
    n.timer.style.fill = f
    n.volume_bar.set_central_gap(n.timer.width + 40)
    n.volume_bar.position.set((r - n.volume_bar.width) / 2, (i - n.volume_bar.height) / 2)
    var d = n.draw_point()
    var h = n.draw_point()
    d.position.set(n.volume_bar.position.x - l, (i - d.height) / 2)
    h.position.set(n.volume_bar.position.x + n.volume_bar.width + l, (i - h.height) / 2)
    n.graphics.addChild(n.volume_bar, n.timer, d, h)
    n.parent_graphics.addChild(n.graphics)
    return n
  }
  Pt(t, e)
  t.prototype.get_graphic = function () {
    return this.graphics
  }
  t.prototype.set_visible = function (e) {
    this.graphics.visible = e
  }
  t.prototype.destroy = function () {
    this.timer.destroy({
      texture: true
    })
    this.volume_bar.destroy({
      children: true
    })
    this.graphics.destroy({
      children: true
    })
  }
  t.prototype.draw_point = function () {
    var e = Et
    var t = xt
    var n = new $_34_index.j()
    n.beginFill(t).drawCircle(0, 0, e).endFill()
    return n
  }
  return t
}(Mt)
var Ut = function () {
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
var Ht = function (e, t) {
  var n = {}
  for (var r in e) if (Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0) {
    n[r] = e[r]
  }
  if (null != e && "function" === typeof Object.getOwnPropertySymbols) {
    var i = 0
    for (r = Object.getOwnPropertySymbols(e); i < r.length; i++) {
      if (t.indexOf(r[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[i])) {
        n[r[i]] = e[r[i]]
      }
    }
  }
  return n
}
var Vt = function () {
  function e(e) {
    var /* [auto-meaningful-name] */e$close_btn = e.close_btn
    var /* [auto-meaningful-name] */e$central_btn = e.central_btn
    var /* [auto-meaningful-name] */e$confirm_btn = e.confirm_btn
    var /* [auto-meaningful-name] */e$cancel_btn = e.cancel_btn
    var /* [auto-meaningful-name] */e$content = e.content
    var /* [auto-meaningful-name] */e$recorder_volume_panel = e.recorder_volume_panel
    var /* [auto-meaningful-name] */e$get_text_record = e.get_text_record
    var /* [auto-meaningful-name] */e$set_content = e.set_content
    this.close_btn = e$close_btn
    this.central_btn = e$central_btn
    this.confirm_btn = e$confirm_btn
    this.cancel_btn = e$cancel_btn
    this.content = e$content
    this.recorder_volume_panel = e$recorder_volume_panel
    this.get_text_record = e$get_text_record
    this.set_content = e$set_content
  }
  e.prototype.mount = function () {
    this.close_btn.visible = true
    this.central_btn.visible = true
    this.confirm_btn.visible = false
    this.cancel_btn.visible = false
    this.content.visible = true
    this.recorder_volume_panel.set_visible(false)
    this.central_btn.draw_btn("recorder_btn")
  }
  e.prototype.dismount = function () {
    this.recorder_volume_panel.stop_counting()
    this.recorder_volume_panel.stop_animation()
    if (this.recorder_animation_start_timer) {
      clearTimeout(this.recorder_animation_start_timer)
    }
  }
  return e
}()
var Gt = function (e) {
  function t(t) {
    var /* [auto-meaningful-name] */t$player_volume_panel = t.player_volume_panel
    var r = Ht(t, ["player_volume_panel"])
    var i = e.call(this, r) || this
    i.type = Me.RECORDING
    i.player_volume_panel = t$player_volume_panel
    return i
  }
  Ut(t, e)
  t.prototype.mount = function () {
    e.prototype.mount.call(this)
    this.player_volume_panel.set_visible(false)
    var t = this.get_text_record()
    var /* [auto-meaningful-name] */t$start_recording = t.start_recording
    var /* [auto-meaningful-name] */t$recorder_confirm = t.recorder_confirm
    var /* [auto-meaningful-name] */t$recorder_cancel = t.recorder_cancel
    this.set_content(t$start_recording)
    this.confirm_btn.set_text(t$recorder_confirm)
    this.cancel_btn.set_text(t$recorder_cancel)
    this.central_btn.draw_btn("recorder_btn")
  }
  t.prototype.dismount = function () {
    e.prototype.dismount.call(this)
    this.player_volume_panel.set_visible(false)
    this.player_volume_panel.stop_counting()
    this.player_volume_panel.stop_animation()
  }
  t.prototype.set_state = function (e) {
    var t = this
    switch (this.dismount(), e) {
      case "init":
        this.mount()
        break
      case "recording":
        this.content.visible = true
        this.confirm_btn.visible = false
        this.cancel_btn.visible = false
        this.central_btn.visible = true
        this.central_btn.draw_btn("terminate_btn")
        this.set_content(this.get_text_record().recording)
        this.recorder_volume_panel.set_text("")
        this.recorder_volume_panel.set_visible(true)
        this.recorder_volume_panel.start_animation()
        this.recorder_animation_start_timer = window.setTimeout(function () {
          t.recorder_volume_panel.start_counting()
          t.content.visible = false
        }, 1e3)
        break
      case "done":
        this.content.visible = false
        this.confirm_btn.visible = true
        this.cancel_btn.visible = true
        this.central_btn.draw_btn("play_btn")
        this.recorder_volume_panel.set_visible(false)
        this.player_volume_panel.set_visible(true)
        break
      case "playing":
        this.content.visible = false
        this.confirm_btn.visible = true
        this.cancel_btn.visible = true
        this.central_btn.draw_btn("stop_btn")
        this.recorder_volume_panel.set_visible(false)
        this.player_volume_panel.set_visible(true)
        this.player_volume_panel.start_counting()
        this.player_volume_panel.start_animation()
    }
  }
  return t
}(Vt)
var zt = function (e) {
  function t(t) {
    var /* [auto-meaningful-name] */t$loading_icon = t.loading_icon
    var /* [auto-meaningful-name] */t$start_loading_animation = t.start_loading_animation
    var /* [auto-meaningful-name] */t$stop_loading_animation = t.stop_loading_animation
    var o = Ht(t, ["loading_icon", "start_loading_animation", "stop_loading_animation"])
    var a = e.call(this, o) || this
    a.type = Me.RECOGNITION
    a.loading_icon = t$loading_icon
    a.start_loading_animation = t$start_loading_animation
    a.stop_loading_animation = t$stop_loading_animation
    return a
  }
  Ut(t, e)
  t.prototype.mount = function () {
    e.prototype.mount.call(this)
    this.loading_icon.visible = false
    var t = this.get_text_record()
    var /* [auto-meaningful-name] */t$start_speaking = t.start_speaking
    var /* [auto-meaningful-name] */t$recognition_confirm = t.recognition_confirm
    var /* [auto-meaningful-name] */t$recognition_cancel = t.recognition_cancel
    this.set_content(t$start_speaking)
    this.confirm_btn.set_text(t$recognition_confirm)
    this.cancel_btn.set_text(t$recognition_cancel)
  }
  t.prototype.dismount = function () {
    e.prototype.dismount.call(this)
    this.loading_icon.visible = false
    this.stop_loading_animation()
  }
  t.prototype.set_state = function (e) {
    var t = this
    switch (this.dismount(), e) {
      case "init":
        this.mount()
        break
      case "recording":
        this.content.visible = true
        this.confirm_btn.visible = false
        this.cancel_btn.visible = false
        this.loading_icon.visible = false
        this.central_btn.visible = true
        this.central_btn.draw_btn("terminate_btn")
        this.set_content(this.get_text_record().recording)
        this.recorder_volume_panel.set_text("")
        this.recorder_volume_panel.set_visible(true)
        this.recorder_volume_panel.start_animation()
        this.recorder_animation_start_timer = window.setTimeout(function () {
          t.recorder_volume_panel.start_counting()
          t.content.visible = false
        }, 1e3)
        break
      case "recognizing":
        this.content.visible = true
        this.confirm_btn.visible = false
        this.cancel_btn.visible = false
        this.central_btn.visible = true
        this.central_btn.draw_btn("recognize_btn")
        this.recorder_volume_panel.set_visible(false)
        this.set_content(this.get_text_record().recognizing)
        this.loading_icon.visible = true
        this.start_loading_animation()
        break
      case "success":
        this.content.visible = true
        this.confirm_btn.visible = true
        this.cancel_btn.visible = true
        this.central_btn.draw_btn("recorder_btn")
        this.recorder_volume_panel.set_visible(false)
        this.loading_icon.visible = false
        break
      case "failure":
        this.content.visible = true
        this.confirm_btn.visible = false
        this.cancel_btn.visible = false
        this.central_btn.draw_btn("recorder_btn")
        this.set_content(this.get_text_record().recognition_failure)
        this.recorder_volume_panel.set_visible(false)
        this.loading_icon.visible = false
    }
  }
  return t
}(Vt)
var Qt = function () {
  return (Qt = Object.assign || function (e) {
    for (var t, n = 1, /* [auto-meaningful-name] */arguments$length = arguments.length; n < arguments$length; n++) {
      for (var i in t = arguments[n]) if (Object.prototype.hasOwnProperty.call(t, i)) {
        e[i] = t[i]
      }
    }
    return e
  }).apply(this, arguments)
}
var Wt = function () {
  function e(e, t, n, r) {
    var i = this
    var /* [auto-meaningful-name] */e$url = e.url
    var /* [auto-meaningful-name] */e$texture_name = e.texture_name
    var /* [auto-meaningful-name] */e$text_record = e.text_record
    var /* [auto-meaningful-name] */e$countdown_opt = e.countdown_opt
    this.graphics = new $_34_index.j()
    this.voice_type = Me.RECOGNITION
    this.dialog_width = 0
    this.dialog_height = 0
    this.set_content = function (e) {
      i.content.text = e
      var t = i.dialog_width - 2 * ht
      i.content.style.wordWrapWidth = t
      var n = i.get_byte_length(i.content.text)
      var r = Math.ceil(10 * (n - 2 * t / 10) / t * 26)
      r = r > 0 ? r : 0
      i.draw_background(0, r)
      i.update_central_btn_position()
      i.update_side_btns_position(r)
      i.update_content_position()
      if (i.loading_icon.visible) {
        i.update_loading_icon_position()
      }
    }
    this.start_loading_animation = function () {
      i.stop_loading_animation()
      i.update_loading_icon_position()
      i.loading_animation_timer = window.setInterval(function () {
        i.loading_icon.rotation += .05
      }, 20)
    }
    this.stop_loading_animation = function () {
      if (i.loading_animation_timer) {
        window.clearInterval(i.loading_animation_timer)
      }
    }
    this.get_text_record = function () {
      return i.text_record
    }
    this.set_parent = function (e) {
      i.graphics.setParent(e)
    }
    this.on_stage_resize = function (e) {
      if (e.target_id === i.app.get_app().stage.name) {
        i.stage_width = e.data.width
        i.stage_height = e.data.height
        i.draw_background()
        i.update_close_btn_position()
        i.update_central_btn_position()
        i.update_side_btns_position()
        i.update_content_position()
        i.update_recorder_volume_panel_position()
        i.update_player_volume_panel_position()
        i.update_loading_icon_position()
        i.graphics.hitArea = new $_34_index.q(0, -i.stage_height + i.dialog_height, i.stage_width, i.stage_height)
      }
    }
    this.app = t
    this.events = r
    this.loader = n
    this.text_record = e$text_record
    this.state = "init"
    var /* [auto-meaningful-name] */this$app$get_app$view = this.app.get_app().view
    var /* [auto-meaningful-name] */this$app$get_app$view$width = this$app$get_app$view.width
    var /* [auto-meaningful-name] */this$app$get_app$view$height = this$app$get_app$view.height
    this.stage_width = this$app$get_app$view$width
    this.stage_height = this$app$get_app$view$height
    this.graphics.name = "voice_dialog"
    this.graphics.interactive = true
    this.graphics.visible = false
    this.draw_background()
    this.close_btn = new It(this.app, this.events)
    this.update_close_btn_position()
    this.graphics.addChild(this.close_btn)
    this.central_btn = new Ft(this.app, this.events)
    this.update_central_btn_position()
    this.graphics.addChild(this.central_btn)
    this.confirm_btn = new Rt(this.app, this.events, "confirm_btn", ct, ut)
    this.confirm_btn.set_text(e$text_record.recorder_confirm)
    this.confirm_btn.set_text_color(_0x297EFF)
    this.cancel_btn = new Rt(this.app, this.events, "cancel_btn", ct, ut)
    this.cancel_btn.set_text(e$text_record.recorder_cancel)
    this.update_side_btns_position()
    this.graphics.addChild(this.confirm_btn, this.cancel_btn)
    this.content = new $_34_index.v("", dt)
    this.content.anchor.set(.5)
    this.update_content_position()
    this.graphics.addChild(this.content)
    this.recorder_volume_panel = new jt(this.graphics, e$countdown_opt, this.get_text_record, this.events)
    this.update_recorder_volume_panel_position()
    this.player_volume_panel = new Lt(this.graphics)
    this.update_player_volume_panel_position()
    this.player_volume_panel.set_visible(false)
    this.loading_icon = new $_34_index.t()
    this.loading_icon.anchor.set(.5)
    this.loading_icon.scale.set(St)
    this.loading_icon.visible = false
    this.update_loading_icon_position()
    this.graphics.addChild(this.loading_icon)
    if (this.app.get_renderer_type() === $_34_index.p.WEBGL) {
      this.graphics.filters = [new $_34_index.h(tt)]
    }
    var h = function () {
      i.update_loading_icon_position()
    }
    this.loader.add({
      url: e$url,
      on_success: function (e) {
        var /* [auto-meaningful-name] */e$textures = e.textures
        if (e$textures) {
          var /* [auto-meaningful-name] */e$texture_name$close_btn = e$texture_name.close_btn
          var /* [auto-meaningful-name] */e$texture_name$recorder_btn = e$texture_name.recorder_btn
          var /* [auto-meaningful-name] */e$texture_name$terminate_btn = e$texture_name.terminate_btn
          var /* [auto-meaningful-name] */e$texture_name$recognize_btn = e$texture_name.recognize_btn
          var /* [auto-meaningful-name] */e$texture_name$play_btn = e$texture_name.play_btn
          var /* [auto-meaningful-name] */e$texture_name$stop_btn = e$texture_name.stop_btn
          var /* [auto-meaningful-name] */e$texture_name$loading_icon = e$texture_name.loading_icon
          i.close_btn.set_icon_texture(e$textures[e$texture_name$close_btn])
          var f = {
            recorder_btn: e$textures[e$texture_name$recorder_btn],
            terminate_btn: e$textures[e$texture_name$terminate_btn],
            recognize_btn: e$textures[e$texture_name$recognize_btn],
            play_btn: e$textures[e$texture_name$play_btn],
            stop_btn: e$textures[e$texture_name$stop_btn]
          }
          i.central_btn.set_textures(f)
          i.central_btn.draw_btn("recorder_btn")
          i.loading_icon.texture = e$textures[e$texture_name$loading_icon]
          i.update_side_btns_position()
          i.update_recorder_volume_panel_position()
          h()
        }
      },
      on_error: h
    })
    this.events.add_listener("stage:resize", this.on_stage_resize)
  }
  e.prototype.set_state = function (e) {
    var /* [auto-meaningful-name] */this$painter
    if (!(null === (this$painter = this.painter) || undefined === this$painter)) {
      this$painter.set_state(e)
    }
    this.state = e
  }
  e.prototype.get_state = function () {
    return this.state
  }
  e.prototype.get_visible = function () {
    return this.graphics.visible
  }
  e.prototype.set_voice_record_duration = function (e) {
    var t = e % 60
    var n = Math.floor(e / 60)
    var r = t < 10 ? "0" + t : "" + t
    var i = n < 10 ? "0" + n : "" + n
    this.player_volume_panel.set_text(i + ":" + r)
  }
  e.prototype.set_recorder_countdown_warning_text = function (e, t) {
    this.recorder_volume_panel.set_countdown_warning_text(e, t)
  }
  e.prototype.draw_background = function (e, t) {
    if (undefined === e) {
      e = 0
    }
    if (undefined === t) {
      t = 0
    }
    this.graphics.clear()
    this.graphics.beginFill(16777215)
    var n = this.stage_width / 2
    var r = this.stage_height / 2
    this.dialog_width = this.stage_width - 2 * Ke
    this.dialog_height = Xe - Ke + e + t
    this.graphics.drawRoundedRect(0, 0, this.dialog_width, this.dialog_height, Ye)
    this.graphics.endFill()
    this.graphics.position.set(-n + Ke, r - Xe - e - t)
    this.graphics.hitArea = new $_34_index.q(0, -this.stage_height + this.dialog_height, this.stage_width, this.stage_height)
  }
  e.prototype.show = function (e) {
    this.graphics.visible = true
    if (this.voice_type !== e && this.painter) {
      this.painter.dismount()
    }
    this.voice_type = e
    this.get_painter().mount()
  }
  e.prototype.hide = function () {
    this.graphics.visible = false
    this.get_painter().dismount()
  }
  e.prototype.get_byte_length = function (e) {
    for (var t = 0, n = 0; n < e.length; n++) {
      if (e.charCodeAt(n) > 127 || 94 === e.charCodeAt(n)) {
        t += 2
      } else {
        t++
      }
    }
    return t
  }
  e.prototype.set_text_record = function (e) {
    this.text_record = e
    var t = this.voice_type === Me.RECOGNITION
    switch (this.state) {
      case "init":
        this.set_content(t ? e.start_speaking : e.start_recording)
        break
      case "recording":
        this.set_content(e.recording)
        this.set_recorder_countdown_warning_text(e.countdown_prefix, e.countdown_suffix)
        break
      case "recognizing":
        this.set_content(e.recognizing)
        break
      case "failure":
        this.set_content(e.recognition_failure)
    }
    if (t) {
      this.cancel_btn.set_text(e.recognition_cancel)
      this.confirm_btn.set_text(e.recognition_confirm)
    } else {
      this.cancel_btn.set_text(e.recorder_cancel)
      this.confirm_btn.set_text(e.recorder_confirm)
    }
  }
  e.prototype.update_content_position = function () {
    this.content.position.set(this.dialog_width / 2, pt + this.content.height / 2)
  }
  e.prototype.update_close_btn_position = function () {
    this.close_btn.position.set(this.dialog_width - qe, $e - Ke)
  }
  e.prototype.update_central_btn_position = function () {
    this.central_btn.position.set(this.dialog_width / 2, this.dialog_height - nt)
  }
  e.prototype.update_side_btns_position = function (e) {
    if (undefined === e) {
      e = 0
    }
    var /* [auto-meaningful-name] */this$central_btn = this.central_btn
    var /* [auto-meaningful-name] */this$central_btn$position = this$central_btn.position
    var r = this$central_btn.width / 2
    this.cancel_btn.position.set(this$central_btn$position.x - r - st - this.cancel_btn.width, this$central_btn$position.y + e)
    this.confirm_btn.position.set(this$central_btn$position.x + r + st + this.confirm_btn.width, this$central_btn$position.y + e)
  }
  e.prototype.update_recorder_volume_panel_position = function () {
    var e = this.recorder_volume_panel.get_volume_bar()
    var t = this.recorder_volume_panel.get_timer()
    e.set_central_gap(this.central_btn.width + 40)
    e.position.set(this.central_btn.position.x - e.width / 2, this.central_btn.position.y - e.height / 2)
    t.position.set(this.dialog_width / 2, pt + t.height / 2)
  }
  e.prototype.update_player_volume_panel_position = function () {
    var e = this.player_volume_panel.get_graphic()
    e.position.set(this.central_btn.position.x - e.width / 2, 33)
  }
  e.prototype.update_loading_icon_position = function () {
    this.loading_icon.position.set(this.content.position.x - this.content.width / 2 - kt - this.loading_icon.width / 2, this.content.position.y)
  }
  e.prototype.get_painter = function () {
    if (!this.painter || this.painter.type !== this.voice_type) {
      var e = {
        close_btn: this.close_btn,
        central_btn: this.central_btn,
        confirm_btn: this.confirm_btn,
        cancel_btn: this.cancel_btn,
        content: this.content,
        recorder_volume_panel: this.recorder_volume_panel,
        get_text_record: this.get_text_record,
        set_content: this.set_content
      }
      switch (this.voice_type) {
        case Me.RECORDING:
          this.painter = new Gt(Qt(Qt({}, e), {
            player_volume_panel: this.player_volume_panel
          }))
          break
        default:
          this.painter = new zt(Qt(Qt({}, e), {
            loading_icon: this.loading_icon,
            start_loading_animation: this.start_loading_animation,
            stop_loading_animation: this.stop_loading_animation
          }))
      }
    }
    return this.painter
  }
  e.prototype.destroy = function () {
    this.hide()
    this.events.remove_listener("stage:resize", this.on_stage_resize)
    this.confirm_btn.destroy({
      children: true,
      texture: true
    })
    this.cancel_btn.destroy({
      children: true,
      texture: true
    })
    this.content.destroy({
      texture: true
    })
    this.recorder_volume_panel.destroy()
    this.player_volume_panel.destroy()
    this.graphics.destroy({
      children: true
    })
  }
  return e
}()
var Kt = function () {
  function e(e) {
    var t = this
    this.is_running = false
    this.tasks = []
    this.on_tick = function () {
      if (t.cur_task) {
        if (t.cur_task.printer.text.length >= t.cur_task.content.length) {
          t.stop()
        } else {
          var e = t.cur_task.content.substring(0, Math.min(Math.ceil(t.index), t.cur_task.content.length))
          t.cur_task.printer.text = e
          t.index += t.app.get_app().ticker.elapsedMS / 50
          if (t.cur_task.on_update) {
            t.cur_task.on_update()
          }
        }
      }
    }
    this.app = e
    this.index = 1
  }
  e.prototype.add_task = function (e) {
    if (!this.is_running) {
      this.cur_task = e
      return void this.execute()
    }
    this.tasks.push(e)
  }
  e.prototype.release = function () {
    this.is_running = false
    this.cur_task = this.tasks.shift()
    if (this.cur_task) {
      this.execute()
    }
  }
  e.prototype.clear = function () {
    this.tasks = []
    this.cur_task = undefined
    this.is_running = false
  }
  e.prototype.execute = function () {
    this.is_running = true
    this.index = 1
    if (this.cur_task) {
      this.app.get_app().ticker.add(this.on_tick)
      if (this.cur_task.on_start) {
        this.cur_task.on_start()
      }
    }
  }
  e.prototype.stop = function () {
    if (this.cur_task) {
      this.app.get_app().ticker.remove(this.on_tick)
      if (this.cur_task.on_complete) {
        this.cur_task.on_complete()
      }
    }
  }
  e.prototype.finish = function () {
    if (this.cur_task) {
      this.cur_task.printer.text = this.cur_task.content
      this.stop()
    }
  }
  return e
}()
var Xt = function () {
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
var Yt = {
  fontSize: "21px",
  fontFamily: "Microsoft YaHei",
  fill: "#498AD9"
}
var qt = {
  fontSize: "22px",
  fontFamily: "Microsoft YaHei",
  fill: "#333333"
}
var $t = {
  fontSize: "21px",
  fontFamily: "Microsoft YaHei",
  fill: "#AEAEAE"
}
var Jt = function (e) {
  function t(t, n, r, i, o) {
    var s = e.call(this) || this
    s.bg_line_width = 0
    s.actor_line_width = 0
    s.is_printing = false
    s.on_complete_cb = undefined
    s.set_parent = function (e) {
      s.setParent(e)
    }
    s.on_stage_resize = function (e) {
      if (e.target_id === s.app.get_app().stage.name) {
        s.draw_dialog_basis()
      }
    }
    s.app = t
    s.data = n
    s.events = o
    s.loader = r
    s.name = "stage_dialog"
    s.preview = new $_34_index.t()
    s.target_name = new $_34_index.v("", Yt)
    s.content = new $_34_index.v("", qt)
    s.next_text = new $_34_index.v("点击继续", $t)
    s.next_text.name = "next_text"
    s.next_icon = new $_34_index.t()
    s.next_icon.name = "next_icon"
    s.print = new Kt(s.app)
    s.addListener("mouseup", s.on_mouse_up.bind(s))
    s.addListener("touchend", s.on_mouse_up.bind(s))
    s.loader.add({
      url: i.url,
      on_success: function (e) {
        var /* [auto-meaningful-name] */e$textures = e.textures
        if (e$textures) {
          s.next_icon.texture = e$textures[i.next_icon]
          s.app.render()
        }
      }
    })
    s.draw_dialog_basis()
    s.interactive = true
    s.visible = false
    s.addChild(s.next_icon, s.next_text, s.preview, s.target_name, s.content)
    s.events.add_listener("stage:resize", s.on_stage_resize)
    return s
  }
  Xt(t, e)
  t.prototype.draw_dialog_basis = function () {
    var /* [auto-meaningful-name] */this$app$get_app$view = this.app.get_app().view
    var /* [auto-meaningful-name] */this$app$get_app$view$width = this$app$get_app$view.width
    var /* [auto-meaningful-name] */this$app$get_app$view$height = this$app$get_app$view.height
    var r = this$app$get_app$view$width - 24
    this.clear()
    this.lineStyle(2, 14276302, 1)
    this.beginFill(16777215, 1)
    this.drawRoundedRect(0, 0, r, 180, 4)
    this.hitArea = new $_34_index.q(0, 0, r, 180)
    this.y = this$app$get_app$view$height / 2 - 180 - 12
    this.x = -this$app$get_app$view$width / 2 + 12
    this.endFill()
    this.next_icon.x = r - 10 - 20
    this.next_icon.y = 150
    this.update_next_text_position()
    this.bg_line_width = Math.floor(this$app$get_app$view$width - 24 - 30 - 12 - 20)
    this.actor_line_width = Math.floor(this$app$get_app$view$width - 24 - 20 - 100 - 12 - 20)
  }
  t.prototype.update_next_text_position = function () {
    this.next_text.x = this.next_icon.x - this.next_text.width - 7
    this.next_text.y = this.next_icon.y - 5
  }
  t.prototype.set_component_size_and_position = function (e) {
    var t = 100
    if (e === $$_107_index.d.Scene) {
      t = 30
      this.preview.x = 0
    } else {
      var n = this.preview.texture.width / this.preview.texture.height
      this.preview.width = n > 1 ? t : t * n
      this.preview.height = n > 1 ? t / n : t
      this.preview.position.set(20, (180 - this.preview.height) / 2)
    }
    this.target_name.position.x = this.preview.position.x + t + 12
    this.target_name.position.y = 20
    this.content.position.x = this.target_name.position.x
    this.content.position.y = this.target_name.position.y + this.target_name.height + 6
  }
  t.prototype.show_stage_dialog = function (e, t, n, r, i) {
    var o = this
    var s = this.data.get_target(e)
    if (!s) {
      return new $_122.a("Cannot find target " + e)
    }
    this.visible = true
    this.preview.texture = c.l(s) ? new $_34_index.y(s.texture.baseTexture) : $_34_index.y.EMPTY
    this.set_component_size_and_position(s.type)
    this.target_name.text = t
    var l = r ? undefined : i
    this.print.add_task({
      id: e,
      content: n,
      printer: this.content,
      on_start: function () {
        o.is_printing = true
      },
      on_complete: function () {
        o.is_printing = false
        o.on_complete_cb = l
      }
    })
  }
  t.prototype.on_mouse_up = function () {
    if (this.is_printing) {
      this.print.finish()
    } else {
      this.content.text = ""
      this.print.release()
      if (this.on_complete_cb) {
        this.on_complete_cb()
      }
    }
  }
  t.prototype.get_max_content_width = function (e) {
    return e === $$_107_index.d.Actor ? this.actor_line_width : this.bg_line_width
  }
  t.prototype.set_next_text = function (e) {
    this.next_text.text = e
    this.update_next_text_position()
  }
  t.prototype.hide = function () {
    this.visible = false
    this.content.text = ""
    this.target_name.text = ""
    this.print.clear()
  }
  t.prototype.destroy = function () {
    e.prototype.destroy.call(this, {
      children: true,
      texture: true
    })
    this.events.remove_listener("stage:resize", this.on_stage_resize)
  }
  return t
}($_34_index.j)
var Zt = {
  width: 2,
  color: 14211288,
  alpha: .7
}
var en = {
  width: 2,
  color: 15132390,
  alpha: .4
}
var tn = {
  width: 2,
  color: 15132390,
  alpha: .15
}
var nn = {
  fontWeight: "bold",
  fontSize: "16px",
  fontFamily: "STHeitiSC-Medium",
  fill: "#000000"
}
var rn = {
  fontWeight: "bold",
  fontSize: "16px",
  fontFamily: "STHeitiSC-Medium",
  fill: "#ffffff"
}
var on = function () {
  function e(e, t) {
    var n = this
    this.grid = new $_34_index.j()
    this.axis_arrow = new $_34_index.j()
    this.x_label = new $_34_index.v("X", nn)
    this.y_label = new $_34_index.v("Y", nn)
    this.x_label_shadow = new $_34_index.v("X", rn)
    this.y_label_shadow = new $_34_index.v("Y", rn)
    this.set_parent = function (e) {
      n.grid.setParent(e)
    }
    this.on_stage_resize = function (e) {
      if (e.target_id === n.app.get_app().stage.name) {
        n.stage_width = e.data.width
        n.stage_height = e.data.height
        n.grid.removeChildren()
        n.draw_grid_lines(20, 100)
        n.label_axis_numbers(100)
        n.draw_axis_arrows()
        n.set_xy_label_position()
      }
    }
    this.app = e
    this.events = t
    var /* [auto-meaningful-name] */this$app$get_app$view = this.app.get_app().view
    var /* [auto-meaningful-name] */this$app$get_app$view$width = this$app$get_app$view.width
    var /* [auto-meaningful-name] */this$app$get_app$view$height = this$app$get_app$view.height
    this.stage_width = this$app$get_app$view$width
    this.stage_height = this$app$get_app$view$height
    this.init_grid()
    this.grid.visible = false
    t.add_listener("stage:resize", this.on_stage_resize)
  }
  e.prototype.init_grid = function () {
    this.draw_grid_lines(20, 100)
    this.label_axis_numbers(100)
    this.draw_axis_arrows()
    this.init_xy_label()
  }
  e.prototype.draw_grid_lines = function (e, t) {
    this.grid.clear()
    for (var n, r = this.stage_height / 2, i = this.stage_width / 2, o = 0, a = 0, s = 0; s < r;) {
      n = 0 === s ? Zt : s % t === 0 ? en : tn
      this.grid.lineStyle(n.width, n.color, n.alpha)
      this.grid.moveTo(-i, s)
      this.grid.lineTo(i, s)
      this.grid.moveTo(-i, -s)
      this.grid.lineTo(i, -s)
      s = ++o * e
    }
    for (o = 0; a < i;) {
      n = 0 === a ? Zt : a % t === 0 ? en : tn
      this.grid.lineStyle(n.width, n.color, n.alpha)
      this.grid.moveTo(a, -r)
      this.grid.lineTo(a, r)
      this.grid.moveTo(-a, -r)
      this.grid.lineTo(-a, r)
      a = ++o * e
    }
  }
  e.prototype.draw_axis_arrows = function () {
    this.axis_arrow.clear()
    var e = this.stage_width / 2
    var t = this.stage_height / 2
    this.axis_arrow.beginFill(14211288)
    this.axis_arrow.drawPolygon([e - 10, 5, e, 0, e - 10, -5])
    this.axis_arrow.endFill()
    this.axis_arrow.beginFill(14211288)
    this.axis_arrow.drawPolygon([-5, 10 - t, 0, -t, 5, 10 - t])
    this.axis_arrow.endFill()
    this.grid.addChild(this.axis_arrow)
  }
  e.prototype.label_axis_numbers = function (e) {
    for (var t = 0, n = 0; n < this.stage_height / 2;) {
      var r = n.toString()
      var i = (-n).toString();
      (s = new $_34_index.v(r, nn)).x = 5
      s.y = 5 - n
      s.alpha = .8;
      (c = new $_34_index.v(i, nn)).x = 5
      c.y = n + 5
      c.alpha = .8;
      (u = new $_34_index.v(r, rn)).x = 5
      u.y = 5 - n + 1
      u.alpha = .8;
      (l = new $_34_index.v(i, rn)).x = 5
      l.y = n + 5 + 1
      l.alpha = .8
      this.grid.addChild(s, c, u, l)
      n = ++t * e
    }
    t = 1
    for (var o = e; o < this.stage_width / 2;) {
      var s
      var c
      var u
      var l
      var f = o.toString()
      var d = (-o).toString();
      (s = new $_34_index.v(f, nn)).x = o + 5
      s.y = 5
      s.alpha = .8;
      (c = new $_34_index.v(d, nn)).x = 5 - o
      c.y = 5
      c.alpha = .8;
      (u = new $_34_index.v(f, rn)).x = o + 5
      u.y = 6
      u.alpha = .8;
      (l = new $_34_index.v(d, rn)).x = 5 - o
      l.y = 6
      l.alpha = .8
      this.grid.addChild(s, c, u, l)
      o = ++t * e
    }
  }
  e.prototype.init_xy_label = function () {
    this.x_label.alpha = .8
    this.y_label.alpha = .8
    this.x_label_shadow.alpha = .8
    this.y_label_shadow.alpha = .8
    this.set_xy_label_position()
  }
  e.prototype.set_xy_label_position = function () {
    var e = {
      x: this.stage_width / 2 - 10 - 8,
      y: -26
    }
    var t = {
      x: 10,
      y: 10 - this.stage_height / 2
    }
    this.x_label.position.set(e.x, e.y)
    this.y_label.position.set(t.x, t.y)
    this.x_label_shadow.position.set(e.x, e.y + 1)
    this.y_label_shadow.position.set(t.x, t.y + 1)
    this.grid.addChild(this.x_label, this.y_label, this.x_label_shadow, this.y_label_shadow)
  }
  e.prototype.set_visible = function (e) {
    this.grid.visible = e
  }
  e.prototype.set_z_index = function (e) {
    var /* [auto-meaningful-name] */this$grid$parent = this.grid.parent
    e = Math.min(e, this$grid$parent.children.length - 1)
    e = Math.max(1, e)
    this$grid$parent.setChildIndex(this.grid, e)
  }
  e.prototype.destroy = function () {
    this.events.remove_listener("stage:resize", this.on_stage_resize)
    this.grid.destroy({
      children: true
    })
  }
  return e
}()
var an = function () {
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
var sn = {
  fontSize: 22,
  fontFamily: "Microsoft YaHei"
}
var cn = function (e) {
  function t(t, n) {
    var r = e.call(this) || this
    r.selections = []
    r.is_landscape = false
    r.on_complete_cb = undefined
    r.stage_height = 0
    r.stage_width = 0
    r.dialog_height = 0
    r.dialog_width = 0
    r.selection_width = 0
    r.selection_height = 0
    r.distance = 0
    r.MARGIN = 10
    r.RECT_RADIUS = 9
    r.pop_selection = function () {
      if (r.distance > 0) {
        var e = Math.ceil(r.distance / 4)
        r.position.y -= e
        r.distance -= e
      } else {
        r.app.get_app().ticker.remove(r.pop_selection)
      }
    }
    r.set_parent = function (e) {
      r.setParent(e)
    }
    r.on_stage_resize = function (e) {
      if (e.target_id === r.app.get_app().stage.name) {
        r.stage_width = e.data.width
        r.stage_height = e.data.height
        r.is_landscape = r.stage_width > r.stage_height
        r.dialog_width = r.stage_width - 2 * r.MARGIN
        r.selection_width = r.is_landscape ? r.dialog_width / 2 : r.dialog_width
        r.selection_height = .0888 * r.stage_height
        r.redraw_selections()
      }
    }
    r.app = t
    r.events = n
    r.visible = false
    r.selection_container = new $_34_index.j()
    r.selection_header = new $_34_index.j()
    var /* [auto-meaningful-name] */r$app$get_app$view = r.app.get_app().view
    var /* [auto-meaningful-name] */r$app$get_app$view$width = r$app$get_app$view.width
    var /* [auto-meaningful-name] */r$app$get_app$view$height = r$app$get_app$view.height
    r.stage_width = r$app$get_app$view$width
    r.stage_height = r$app$get_app$view$height
    r.dialog_width = r.stage_width - 2 * r.MARGIN
    r.selection_width = r.dialog_width
    r.selection_height = .0888 * r.stage_height
    r.init_selections()
    r.draw_header()
    if (r.app.get_renderer_type() === $_34_index.p.WEBGL) {
      r.filters = [new $_34_index.h({
        rotation: 45,
        distance: 3,
        alpha: .15,
        color: 0,
        blur: 0
      })]
    }
    r.addChild(r.selection_container, r.selection_header)
    r.events.add_listener("stage:resize", r.on_stage_resize)
    return r
  }
  an(t, e)
  t.prototype.init_selections = function () {
    for (var e = 0; e < 4; e++) {
      var t = new $_34_index.f()
      var n = new $_34_index.j()
      var r = new $_34_index.j()
      var i = new $_34_index.v("", sn)
      i.anchor.set(.5)
      i.visible = true
      n.clear()
      n.lineStyle(2, 14211288, 1)
      n.beginFill(16777215, 1)
      n.drawRoundedRect(0, 0, this.selection_width, this.selection_height, this.RECT_RADIUS)
      n.endFill()
      r.clear()
      r.beginFill(2719487, 1)
      r.drawRoundedRect(0, 0, this.selection_width, this.selection_height, this.RECT_RADIUS)
      r.endFill()
      t.addChild(n, r, i)
      t.visible = false
      t.buttonMode = true
      t.interactive = true
      t.on("touchstart", function (e) {
        e.stopPropagation()
      })
      t.on("mousedown", function (e) {
        e.stopPropagation()
      })
      t.on("touchend", this.select_item.bind(this, e))
      t.on("mouseup", this.select_item.bind(this, e))
      t.on("touchstart", this.on_pointer_over.bind(this, e))
      t.on("mouseover", this.on_pointer_over.bind(this, e))
      t.on("mouseout", this.on_pointer_out.bind(this, e))
      this.selection_container.addChild(t)
    }
  }
  t.prototype.show_selections = function () {
    var e = this
    this.selection_container.visible = true
    this.selections.forEach(function (t, n) {
      var r = e.selection_container.children[n]
      if (r instanceof $_34_index.f) {
        var i = r.children[0]
        var o = r.children[1]
        var s = r.children[2]
        if (s instanceof $_34_index.v) {
          s.text = t
          s.style.fill = "black"
        }
        r.visible = true
        i.visible = true
        o.visible = false
        if (e.is_landscape) {
          r.position.x = n % 2 ? e.selection_width : 0
          r.position.y = Math.floor(n / 2) * e.selection_height
        } else {
          r.position.x = 0
          r.position.y = n * e.selection_height
        }
        s.position.x = e.selection_width / 2
        s.position.y = e.selection_height / 2
      }
    })
  }
  t.prototype.hide_selections = function () {
    this.selection_container.children.forEach(function (e) {
      e.visible = false
    })
  }
  t.prototype.select_item = function (e, t) {
    t.stopPropagation()
    if (this.on_complete_cb) {
      this.on_complete_cb(e)
    }
    this.position.y = this.stage_height / 2
  }
  t.prototype.on_pointer_over = function (e) {
    var t = this.selection_container.children[e]
    if (t instanceof $_34_index.f) {
      t.children[0].visible = false
      t.children[1].visible = true
      var n = t.children[2]
      if (n instanceof $_34_index.v) {
        n.style.fill = "white"
      }
    }
  }
  t.prototype.on_pointer_out = function (e) {
    var t = this.selection_container.children[e]
    if (t instanceof $_34_index.f) {
      t.children[0].visible = true
      t.children[1].visible = false
      var n = t.children[2]
      if (n instanceof $_34_index.v) {
        n.style.fill = "black"
      }
    }
  }
  t.prototype.draw_header = function () {
    this.selection_header.beginFill(16777215, 1)
    this.selection_header.drawRoundedRect(0, 0, this.dialog_width, this.selection_height, 6)
    this.selection_header.endFill()
    var e = new $_34_index.v("", sn)
    e.anchor.set(0, .5)
    e.position.x = 16
    this.selection_header.visible = false
    this.selection_header.position.x = 0
    this.selection_header.addChild(e)
  }
  t.prototype.show_header = function (e) {
    var t = this.selection_header.children[0]
    t.text = e
    t.position.y = this.selection_height / 2
    this.selection_header.position.y = -this.selection_height
    this.selection_header.visible = true
  }
  t.prototype.hide_header = function () {
    this.selection_header.visible = false
  }
  t.prototype.show = function (e, t, n) {
    this.visible = true
    this.selections = e
    if (this.is_landscape) {
      this.dialog_height = Math.ceil(e.length / 2) * this.selection_height
    } else {
      this.dialog_height = e.length * this.selection_height
    }
    this.draw_selection_container()
    this.show_selections()
    this.on_complete_cb = n
    if ("" !== t) {
      this.show_header(t)
    }
    this.position.y = this.stage_height / 2
    this.position.x = -this.stage_width / 2 + this.MARGIN
    this.distance = this.dialog_height + this.MARGIN
    this.app.get_app().ticker.remove(this.pop_selection)
    this.app.get_app().ticker.add(this.pop_selection)
  }
  t.prototype.get_width = function () {
    return this.dialog_width
  }
  t.prototype.hide = function () {
    this.visible = false
    this.hide_selections()
    this.hide_header()
  }
  t.prototype.destroy = function () {
    this.app.get_app().ticker.remove(this.pop_selection)
    this.events.remove_listener("stage:resize", this.on_stage_resize)
    e.prototype.destroy.call(this, {
      children: true
    })
  }
  t.prototype.draw_selection_container = function () {
    this.selection_container.clear()
    this.selection_container.lineStyle(2, 14211288, 1)
    this.selection_container.beginFill(16777215, 1)
    this.selection_container.drawRoundedRect(0, 0, this.dialog_width, this.dialog_height, this.RECT_RADIUS)
    this.selection_container.endFill()
  }
  t.prototype.redraw_selections = function () {
    for (var e = 0; e < this.selection_container.children.length; e++) {
      var t = this.selection_container.children[e]
      if (!(t instanceof $_34_index.f)) {
        return
      }
      var n = t.children[0]
      var r = t.children[1]
      if (!(n instanceof $_34_index.j && r instanceof $_34_index.j)) {
        return
      }
      n.clear()
      n.lineStyle(2, 14211288, 1)
      n.beginFill(16777215, 1)
      n.drawRoundedRect(0, 0, this.selection_width, this.selection_height, this.RECT_RADIUS)
      n.endFill()
      r.clear()
      r.beginFill(2719487, 1)
      r.drawRoundedRect(0, 0, this.selection_width, this.selection_height, this.RECT_RADIUS)
      r.endFill()
    }
  }
  return t
}($_34_index.j)
export { Ge as "683__part-10__Ge" }
export { Wt as "683__part-10__Wt" }
export { Jt as "683__part-10__Jt" }
export { on as "683__part-10__on" }
export { cn as "683__part-10__cn" }
