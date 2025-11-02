/** 
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：467
 */

"use strict"

export { l as a }
export { h as b }
import r = require("./34/index");
import i = require("./122");
import o = require("./65");
import a = require("./1003");
import s = require("./128");
var c = function () {
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
var u = function (e) {
  var t = "function" === typeof Symbol && Symbol.iterator
  var n = t && e[t]
  var r = 0
  if (n) {
    return n.call(e)
  }
  if (e && "number" === typeof e.length) {
    return {
      next: function () {
        if (e && r >= e.length) {
          e = undefined
        }
        return {
          value: e && e[r++],
          done: !e
        }
      }
    }
  }
  throw new TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.")
}
var l = function () {
  function e(e, t, n, i) {
    var o = this
    this.on_destroy = i
    this.set_video_container_parent = function (e) {
      o.playable_container.setParent(e)
    }
    this.app = e
    this.data = t
    this.events = n
    this.playables = new Map()
    this.playable_container = new r.f()
    this.playable_container.name = "playable_container"
  }
  e.prototype.add_video = function (e, t, n, r) {
    var o = this.data.get_texture(t)
    if (!o) {
      if (r) {
        var a = new f(e, this.playable_container, this.app, this.events, undefined, undefined, r)
        this.playables.set(e, a)
        return i.b.success(a)
      }
      return i.b.error("Can not find texture with texture id " + t)
    }
    if (!o.baseTexture.getDrawableSource || !(o.baseTexture.getDrawableSource() instanceof HTMLVideoElement)) {
      return i.b.error("texture is not video-based")
    }
    var s = new f(e, this.playable_container, this.app, this.events, o, n)
    this.playables.set(e, s)
    return i.b.success(s)
  }
  e.prototype.add_animated_actor = function (e, t, n) {
    for (var r = [], o = 0; o < t.length; o++) {
      var a = this.data.get_texture(t[o])
      if (!a) {
        return i.b.error("Can not find texture with texture_id " + t[o])
      }
      r.push(a)
    }
    var s = new d(e, r, this.playable_container, this.app, n)
    this.playables.set(e, s)
    return i.b.success(s)
  }
  e.prototype.destroy_playable = function (e) {
    var t = this.playables.get(e)
    if (!t) {
      return new i.a("Can not find video with id " + e)
    }
    this.playables.delete(e)
    t.destroy({
      children: true
    })
  }
  e.prototype.get_playable = function (e) {
    return this.playables.get(e)
  }
  e.prototype.get_video = function (e) {
    var t
    var /* [auto-meaningful-name] */r$return
    try {
      for (var r = u(this.playables.values()), i = r.next(); !i.done; i = r.next()) {
        var i$value = i.value
        if (h(i$value)) {
          return i$value
        }
      }
    } catch (a) {
      t = {
        error: a
      }
    } finally {
      try {
        if (i && !i.done && (r$return = r.return)) {
          r$return.call(r)
        }
      } finally {
        if (t) {
          throw t.error
        }
      }
    }
  }
  e.prototype.get_all_videos = function () {
    var e
    var /* [auto-meaningful-name] */r$return
    var n = []
    try {
      for (var r = u(this.playables.values()), i = r.next(); !i.done; i = r.next()) {
        var i$value = i.value
        if (h(i$value)) {
          n.push(i$value)
        }
      }
    } catch (a) {
      e = {
        error: a
      }
    } finally {
      try {
        if (i && !i.done && (r$return = r.return)) {
          r$return.call(r)
        }
      } finally {
        if (e) {
          throw e.error
        }
      }
    }
    return n
  }
  e.prototype.destroy_all_playables = function () {
    var e
    var /* [auto-meaningful-name] */n$return
    try {
      for (var n = u(this.playables.values()), r = n.next(); !r.done; r = n.next()) {
        r.value.destroy({
          children: true
        })
      }
    } catch (i) {
      e = {
        error: i
      }
    } finally {
      try {
        if (r && !r.done && (n$return = n.return)) {
          n$return.call(n)
        }
      } finally {
        if (e) {
          throw e.error
        }
      }
    }
    this.playables.clear()
  }
  e.prototype.destroy = function () {
    this.playables.clear()
    this.playable_container.destroy({
      children: true
    })
    this.on_destroy()
  }
  return e
}()
var f = function (e) {
  function t(t, n, i, a, c, u, l) {
    var f = e.call(this, t, n, i, a) || this
    f.type = s.f.Video
    f.on_play_handler = function () {
      if (f.custom_on_play_handler) {
        f.custom_on_play_handler()
      }
    }
    f.on_error_handler = function () {
      var e = f.get_video_element_from_base_texture()
      if (e && f.custom_on_error_handler && e.error) {
        f.custom_on_error_handler("Error " + e.error.code + "; details: " + e.error.message)
      }
    }
    f.on_complete_handler = function () {
      if (f.custom_on_complete_handler) {
        f.custom_on_complete_handler()
      }
    }
    f.id = t
    f.app = i
    f.is_played = false
    f.video_frame = new r.t(c)
    if (l) {
      f.generate_error_frame(l)
    }
    f.set_origin_in_center(true)
    f.video_frame.anchor.set(.5, .5)
    f.add_listener("drag_start", function () {
      f.events.fire("video:selected", f)
    })
    f.add_listener("drag_end", function () {
      f.events.fire("video:drag_end", {
        target_id: f.id,
        data: {
          position: {
            x: f.position.x,
            y: -f.position.y
          }
        }
      })
    })
    f.addChild(f.video_frame)
    var f$app$get_app$view = f.app.get_app().view
    var f$app$get_app$view$width = f$app$get_app$view.width
    var f$app$get_app$view$height = f$app$get_app$view.height
    var _ = u || o.e({
      width: f.width,
      height: f.height
    }, {
      width: f$app$get_app$view$width,
      height: f$app$get_app$view$height
    })
    f.scale.set(_)
    var A = f.get_video_element_from_base_texture()
    if (A) {
      A.addEventListener("play", f.on_play_handler)
      A.addEventListener("error", f.on_error_handler)
      A.addEventListener("ended", f.on_complete_handler)
    }
    return f
  }
  c(t, e)
  t.prototype.play = function (e) {
    var t = this.get_video_element_from_base_texture()
    if (t) {
      this.on_complete_handler()
      if (e) {
        this.custom_on_play_handler = e.on_play
        this.custom_on_error_handler = e.on_error
        this.custom_on_complete_handler = e.on_complete
      }
      t.currentTime = 0
      t.play()
      this.is_played = true
    }
  }
  t.prototype.resume = function () {
    if (this.is_played) {
      var e = this.get_video_element_from_base_texture()
      if (e && e.paused && !e.ended) {
        e.play()
      }
    }
  }
  t.prototype.pause = function () {
    var e = this.get_video_element_from_base_texture()
    if (e && !e.paused) {
      e.pause()
    }
  }
  t.prototype.set_pixi_scale = function (e, t) {
    var n = e && Math.max(0, e)
    this.scale.set(n, undefined !== t ? Math.max(0, t) : n)
    this.emit_event("change", {
      scale: this.scale
    })
  }
  t.prototype.get_scale = function () {
    return {
      x: Math.abs(this.scale.x),
      y: Math.abs(this.scale.y)
    }
  }
  t.prototype.set_scale = function (e, t) {
    this.set_pixi_scale(e, t)
  }
  t.prototype.set_position = function (e, t) {
    this.position.set(e, -t)
    this.emit_event("change", {
      position: this.position
    })
  }
  t.prototype.set_is_played_state = function (e) {
    this.is_played = e
  }
  t.prototype.get_position = function () {
    return {
      x: this.position.x,
      y: -this.position.y
    }
  }
  t.prototype.get_pixi_position = function () {
    return {
      x: this.x,
      y: this.y
    }
  }
  t.prototype.get_id = function () {
    return this.id
  }
  t.prototype.destroy = function (t) {
    var n = this.get_video_element_from_base_texture()
    if (n) {
      n.removeEventListener("play", this.on_play_handler)
      n.removeEventListener("error", this.on_error_handler)
      n.removeEventListener("ended", this.on_complete_handler)
    }
    this.emit_event("destroy", undefined)
    e.prototype.destroy.call(this, t)
  }
  t.prototype.get_video_element_from_base_texture = function () {
    var e = this.video_frame.texture.baseTexture.getDrawableSource && this.video_frame.texture.baseTexture.getDrawableSource()
    if (e instanceof HTMLVideoElement) {
      return e
    }
    console.error("Can not get video element from base texture")
  }
  t.prototype.generate_error_frame = function (e) {
    var e$width = e.width
    var e$height = e.height
    var e$error_message = e.error_message
    var o = new r.j()
    var a = new r.v(e$error_message)
    o.beginFill(15922422)
    o.drawRect(-e$width / 2, -e$height / 2, e$width, e$height)
    a.style = s.e
    a.position.set(-a.width / 2, 0)
    o.addChild(a)
    this.video_frame.addChild(o)
  }
  return t
}(a.a)
var d = function (e) {
  function t(t, n, i, a, s) {
    var c = e.call(this) || this
    c.on_complete_handler = function () {
      c.ended = true
      if (c.custom_on_complete_handler) {
        c.custom_on_complete_handler()
      }
    }
    c.id = t
    c.app = a
    c.ended = false
    c.is_played = false
    c.pivot.set(.5)
    c.animated_actor = new r.a(n)
    c.animated_actor.loop = false
    c.animated_actor.anchor.set(.5)
    c.animated_actor.onComplete = c.on_complete_handler
    c.animated_actor.animationSpeed = parseFloat((1 / 6).toFixed(2))
    c.addChild(c.animated_actor)
    var c$app$get_app$view = c.app.get_app().view
    var c$app$get_app$view$width = c$app$get_app$view.width
    var c$app$get_app$view$height = c$app$get_app$view.height
    var d = s || o.e({
      width: c.width,
      height: c.height
    }, {
      width: c$app$get_app$view$width,
      height: c$app$get_app$view$height
    })
    c.scale.set(d)
    i.addChild(c)
    return c
  }
  c(t, e)
  t.prototype.get_id = function () {
    return this.id
  }
  t.prototype.play = function (e) {
    this.on_complete_handler()
    this.ended = false
    if (e) {
      this.custom_on_complete_handler = e.on_complete
    }
    this.animated_actor.gotoAndPlay(0)
    this.is_played = true
  }
  t.prototype.resume = function () {
    if (this.is_played && !this.ended && !this.animated_actor.playing) {
      this.animated_actor.play()
    }
  }
  t.prototype.pause = function () {
    if (this.animated_actor.playing) {
      this.animated_actor.stop()
    }
  }
  t.prototype.set_visible = function (e) {
    this.visible = e
  }
  t.prototype.set_position = function (e, t) {
    this.position.set(e, -t)
  }
  t.prototype.set_is_played_state = function (e) {
    this.is_played = e
  }
  t.prototype.get_position = function () {
    return {
      x: this.position.x,
      y: -this.position.y
    }
  }
  t.prototype.get_visible = function () {
    return this.visible
  }
  t.prototype.set_pixi_scale = function (e, t) {
    var n = e && Math.max(0, e)
    this.scale.set(n, undefined !== t ? Math.max(0, t) : n)
  }
  t.prototype.get_scale = function () {
    return {
      x: Math.abs(this.scale.x),
      y: Math.abs(this.scale.y)
    }
  }
  t.prototype.set_scale = function (e, t) {
    this.set_pixi_scale(e, t)
  }
  t.prototype.get_size = function () {
    return {
      width: this.width,
      height: this.height
    }
  }
  return t
}(r.f)
function h(e) {
  return !(!e || !e.type) && e.type === s.f.Video
}
export default l
