/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：683__part-4
 */

"use strict"

import { "683__part-3__m" as m } from "./index__part-3"
import * as /* [auto-meaningful-name] */$_735_index from "./735/index"
import * as /* [auto-meaningful-name] */$_122 from "./122"
import * as c from "./65"
import * as /* [auto-meaningful-name] */$_34_index from "./34/index"
import * as /* [auto-meaningful-name] */$_269_index from "./269/index"
import * as /* [auto-meaningful-name] */$_520_index from "./520/index"
function E(e, t) {
  var n = function (e) {
    for (var t = [], n = 0, r = 0, i = 0, o = 0; o < e.length; o++) {
      if (0 === o) {
        var a = e[e.length - 1]
        n = a.x === e[0].x ? 1 / 0 : (a.y - e[0].y) / (a.x - e[0].x)
        r = n
        t.push(a)
      } else {
        var s = undefined
        s = e[o - 1].x === e[o].x ? 1 / 0 : (e[o - 1].y - e[o].y) / (e[o - 1].x - e[o].x)
        if (n === s || Math.abs(n - s) < .001) {
          continue
        }
        n = s
        if (o === e.length - 1) {
          i = s
        }
        t.push(e[o - 1])
      }
    }
    if (r === i || Math.abs(r - i) < .001) {
      t.shift()
    }
    return t
  }(e)
  if (n.length) {
    for (var /* [auto-meaningful-name] */n$length = n.length, i = function e(t) {
        for (var n = 0, r = 0, i = 0; i < t.length; i++) {
          var o = C(i + 1, t.length)
          var a = C(i + 2, t.length)
          if (D(t[i], t[o], t[a]) === S) {
            n++
          } else {
            r++
          }
        }
        if (r === n) {
          var s = $_520_index.a(t)
          s.pop()
          return e(s)
        }
        return r > n
      }(n), o = undefined, a = -1, s = 0; s < n$length; s++) {
      var c = n[s]
      var u = C(s + 1, n$length)
      var l = C(s + 2, n$length)
      var f = D(c, n[u], n[l])
      if (i && f === S) {
        o = n[u]
        a = u
        break
      }
      if (!i && f === T) {
        o = n[u]
        a = u
        break
      }
    }
    if (o) {
      var d = a
      var h = C(d + 1, n$length)
      var p = C(d - 1, n$length)
      var _ = k(n[p], n[d], n[h])
      var A = (2 * Math.PI - _) / 2
      var g = 100
      var v = 0
      for (s = 0; s < n$length; s++) {
        if (s !== d && s !== p && s !== h) {
          var m = D(n[p], n[d], n[s])
          if ((i && m === T || !i && m === S || m === B) && !x(n, p, d, h, s)) {
            var y = k(n[p], n[d], n[s])
            var b = Math.abs(y - A)
            if (b < g) {
              g = b
              v = s
            }
          }
        }
      }
      var O = function (e, t, n) {
        var r = Math.min(t, n)
        var i = Math.max(t, n)
        var o = e[r]
        var a = e[i]
        var s = r + 1
        var c = Math.abs(t - n) - 1
        var u = []
        var l = s + c - e.length
        if (l > 0) {
          for (var f = 0; f < l; f++) {
            var d = e.shift()
            e.push(d)
            s--
          }
        }
        (u = e.splice(s, c)).push(a, o)
        return [u, e]
      }(n, d, v)
      E(O[0], t)
      E(O[1], t)
    } else {
      t.push(n)
    }
  }
}
function x(e, t, n, r, i) {
  for (var o = [t, n, r], a = [C(i - 1, e.length), i, C(i + 1, e.length)], s = 0; s < e.length; s++) {
    var c = (s + 1) % e.length
    if (!(o.indexOf(s) >= 0 && o.indexOf(c) >= 0) && !(a.indexOf(s) >= 0 && a.indexOf(c) >= 0) && F(e[s], e[c], e[n], e[i])) {
      return true
    }
  }
  return false
}
function C(e, t) {
  return e >= t ? e % t : e < 0 ? t + e % t : e
}
function O(e, t) {
  var n = function (e, t) {
    return Math.hypot(t.x - e.x, t.y - e.y)
  }(e, t)
  var r = (t.x - e.x) / n
  return t.y >= e.y ? Math.acos(r) : 2 * Math.PI - Math.acos(r)
}
function k(e, t, n) {
  var r = O(t, e)
  var i = O(t, n)
  var o = Math.abs(r - i)
  return o > Math.PI ? 2 * Math.PI - o : o
}
var S = 1
var T = 2
var B = 4
function D(e, t, n) {
  var r = O(e, t)
  var i = O(e, n)
  return Math.abs(r - i) < .001 || Math.abs(r - i - Math.PI) < .001 ? I(n.x, e.x, t.x) && I(n.y, e.y, t.y) ? 3 : B : r <= Math.PI ? i < r || i - r > Math.PI ? S : T : i > r || r - i > Math.PI ? T : S
}
function I(e, t, n) {
  return e >= t && e <= n || e >= n && e <= t
}
function F(e, t, n, r) {
  if (R(e, n) || R(e, r) || R(t, n) || R(t, r)) {
    return true
  }
  var i = function (e, t, n, r) {
    var i = t.y - e.y
    var o = e.x - t.x
    var s = t.x * e.y - e.x * t.y
    var c = r.y - n.y
    var u = n.x - r.x
    var l = r.x * n.y - n.x * r.y
    var f = c * o - i * u
    if (0 !== f) {
      var d = (u * s - o * l) / f
      var h = (i * l - c * s) / f
      return new $_34_index.o(d, h)
    }
  }(e, t, n, r)
  return i ? I(i.x, e.x, t.x) && I(i.x, n.x, r.x) && I(i.y, e.y, t.y) && I(i.y, n.y, r.y) : 3 === D(e, t, n) || 3 === D(e, t, r)
}
function R(e, t) {
  return e.x === t.x && e.y === t.y
}
var N = function (e) {
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
var M = function () {
  function e(e) {
    this.scenes_cache = new Map()
    this.actors_cache = new Map()
    this.textures_points_color_data = new Map()
    this.textures_bounds_points = new Map()
    this.textures_internal_points = new Map()
    this.textures_convex_groups = new Map()
    this.sprite_sheets = new Map()
    this.app = e
  }
  e.prototype.get_texture = function (e) {
    var t = $_34_index.B.TextureCache[e]
    if (t instanceof $_34_index.y) {
      return t
    }
  }
  e.prototype.get_texture_points_color_data = function (e) {
    var t = this.textures_points_color_data.get(e)
    if (t) {
      return t
    }
    var n = this.get_texture(e)
    return n ? this.set_points_data(e, n) : undefined
  }
  e.prototype.get_texture_points_position = function (e) {
    var t = this.get_texture_internal_points(e)
    var n = this.get_texture_bounds_points(e)
    if (t && n) {
      return t.concat(n)
    }
  }
  e.prototype.get_texture_internal_points = function (e) {
    var t = this.textures_internal_points.get(e)
    if (t) {
      return t
    }
    var n = this.get_texture(e)
    var r = this.get_texture_points_color_data(e)
    if (n && r) {
      var i = c.f({
        width: n.width,
        height: n.height
      })
      var o = function (e, t, n, r, i) {
        var o
        var s
        if (undefined === r) {
          r = 12
        }
        if (undefined === i) {
          i = 0
        }
        var c
        var u
        var l = []
        var f = function (r, i) {
          return r >= 0 && i >= 0 && r < t && i < n && e[i * t + r] >>> 24 > 0
        }
        for (o = 0, s = 0; s < n; o += r) {
          if (o > t) {
            o = 0
            s += r
          }
          if (!(s > n)) {
            var d = i ? (Math.random() - .5) * i + o : o
            var h = i ? (Math.random() - .5) * i + s : s
            if (f((c = d) - 1, (u = h) - 1) && f(c, u - 1) && f(c - 1, u) && f(c, u)) {
              l.push(new $_34_index.m(d, h))
            }
          }
        }
        return l
      }(r, i.width, i.height)
      if (o) {
        this.textures_internal_points.set(e, o)
        return o
      }
    }
  }
  e.prototype.get_texture_bounds_points = function (e) {
    var t = this.textures_bounds_points.get(e)
    if (t) {
      return t
    }
    var n = this.get_texture(e)
    var r = this.get_texture_points_color_data(e)
    if (n && r) {
      var i = c.f({
        width: n.width,
        height: n.height
      })
      var o = m(r, i.width, i.height, {
        mode: "step",
        step: 5
      })
      if (o) {
        this.textures_bounds_points.set(e, o)
        return o
      }
    }
  }
  e.prototype.get_texture_convex_groups = function (e) {
    var t = this.textures_convex_groups.get(e)
    if (t) {
      return t
    }
    var n = this.collect_texture_convex_groups(e)
    return n ? (this.textures_convex_groups.set(e, n), n) : undefined
  }
  e.prototype.collect_texture_convex_groups = function (e) {
    var t = this.get_texture(e)
    var n = this.get_texture_points_color_data(e)
    if (t && n) {
      var r = c.f({
        width: t.width,
        height: t.height
      })
      var i = m(n, r.width, r.height, {
        mode: "vertex",
        tolerance: 5
      })
      if (i) {
        var o = []
        E(i, o)
        return o
      }
    }
  }
  e.prototype.set_points_data = function (e, t) {
    var n = t.baseTexture.getDrawableSource && t.baseTexture.getDrawableSource()
    var r = document.createElement("canvas")
    var i = r.getContext("2d")
    if (i && n) {
      var o = c.f({
        width: t.width,
        height: t.height
      })
      r.width = o.width || 1
      r.height = o.height || 1
      i.drawImage(n, 0, 0, r.width, r.height)
      var a = new Uint32Array(i.getImageData(0, 0, r.width, r.height).data.buffer)
      this.textures_points_color_data.set(e, a)
      return a
    }
  }
  e.prototype.get_internal_scene = function (e) {
    var t = this.scenes_cache.get(e)
    if (t) {
      return t
    }
    for (var /* [auto-meaningful-name] */this$app$get_scene_container$children = this.app.get_scene_container().children, r = 0; r < this$app$get_scene_container$children.length; r++) {
      var i = this$app$get_scene_container$children[r]
      if (c.m(i) && i.id === e) {
        this.scenes_cache.set(e, i)
        return i
      }
    }
  }
  e.prototype.get_internal_actor = function (e, t) {
    var n
    var /* [auto-meaningful-name] */l$return
    var i
    var /* [auto-meaningful-name] */p$return
    var a = this.actors_cache.get(e)
    var s = function (e) {
      return !t || $_735_index.a(e.get_id(), t)
    }
    if (a) {
      return !t || s(a.get_parent_scene()) ? a : undefined
    }
    var /* [auto-meaningful-name] */this$app$get_scene_container$children = this.app.get_scene_container().children
    try {
      for (var l = N(this$app$get_scene_container$children), f = l.next(); !f.done; f = l.next()) {
        var /* [auto-meaningful-name] */f$value = f.value
        if (c.m(f$value) && s(f$value)) {
          var /* [auto-meaningful-name] */f$value$get_actor_container$children = f$value.get_actor_container().children
          try {
            for (i = undefined, p = N(f$value$get_actor_container$children), _ = p.next(), undefined; !_.done; _ = p.next()) {
              var p
              var _
              var /* [auto-meaningful-name] */_$value = _.value
              if (c.k(_$value) && _$value.id === e) {
                var v = _$value.get_actor()
                this.actors_cache.set(e, v)
                return v
              }
            }
          } catch (m) {
            i = {
              error: m
            }
          } finally {
            try {
              if (_ && !_.done && (p$return = p.return)) {
                p$return.call(p)
              }
            } finally {
              if (i) {
                throw i.error
              }
            }
          }
        }
      }
    } catch (y) {
      n = {
        error: y
      }
    } finally {
      try {
        if (f && !f.done && (l$return = l.return)) {
          l$return.call(l)
        }
      } finally {
        if (n) {
          throw n.error
        }
      }
    }
  }
  e.prototype.get_target = function (e) {
    var t = this.get_internal_scene(e)
    return t || this.get_internal_actor(e)
  }
  e.prototype.clear_scene_cache = function (e) {
    if (this.scenes_cache.get(e)) {
      this.scenes_cache.delete(e)
    }
  }
  e.prototype.clear_actor_cache = function (e) {
    if (this.actors_cache.get(e)) {
      this.actors_cache.delete(e)
    }
  }
  e.prototype.clear_texture_points_cache = function (e) {
    if (this.textures_points_color_data.get(e)) {
      this.textures_points_color_data.delete(e)
    }
    if (this.textures_bounds_points.get(e)) {
      this.textures_bounds_points.delete(e)
    }
    if (this.textures_internal_points.get(e)) {
      this.textures_internal_points.delete(e)
    }
    if (this.textures_convex_groups.get(e)) {
      this.textures_convex_groups.delete(e)
    }
  }
  e.prototype.clear_all_scenes_cache = function () {
    this.scenes_cache.clear()
  }
  e.prototype.clear_all_actors_cache = function () {
    this.actors_cache.clear()
  }
  e.prototype.clear_all_textures_points_cache = function () {
    this.textures_points_color_data.clear()
    this.textures_bounds_points.clear()
    this.textures_internal_points.clear()
    this.textures_convex_groups.clear()
  }
  e.prototype.get_sprite_sheet_data = function (e) {
    return this.sprite_sheets.get(e)
  }
  e.prototype.parse_and_cache_sprite_sheet_data = function (e, t, n) {
    var r = this
    return new Promise(function (i, o) {
      var s = r.sprite_sheets.get(e)
      if (s) {
        i(s)
      }
      var c = r.get_texture(t)
      if (c) {
        var u = new $_34_index.u(c, n)
        u.parse(function () {
          if (u.textures) {
            var n = {
              origin_texture_id: t,
              texture_ids: Object.keys(u.textures)
            }
            r.sprite_sheets.set(e, n)
            i(n)
          } else {
            i(undefined)
          }
        })
      } else {
        i(undefined)
      }
    })
  }
  e.prototype.clear_sprite_sheet_cache = function (e) {
    return this.sprite_sheets.delete(e)
  }
  e.prototype.clear_all_sprite_sheet_cache = function () {
    this.sprite_sheets.clear()
  }
  e.prototype.is_texture_in_sprite_sheet = function (e) {
    var t
    var /* [auto-meaningful-name] */i$return
    var r = this.sprite_sheets.values()
    try {
      for (var i = N(r), o = i.next(); !o.done; o = i.next()) {
        var /* [auto-meaningful-name] */o$value = o.value
        if ($_735_index.a(e, o$value.texture_ids)) {
          return true
        }
      }
    } catch (s) {
      t = {
        error: s
      }
    } finally {
      try {
        if (o && !o.done && (i$return = i.return)) {
          i$return.call(i)
        }
      } finally {
        if (t) {
          throw t.error
        }
      }
    }
    return false
  }
  return e
}()
var j = function (e, t, n, r) {
  var i
  var /* [auto-meaningful-name] */arguments$length = arguments.length
  var a = arguments$length < 3 ? t : null === r ? r = Object.getOwnPropertyDescriptor(t, n) : r
  if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) {
    a = Reflect.decorate(e, t, n, r)
  } else {
    for (var s = e.length - 1; s >= 0; s--) {
      if (i = e[s]) {
        a = (arguments$length < 3 ? i(a) : arguments$length > 3 ? i(t, n, a) : i(t, n)) || a
      }
    }
  }
  if (arguments$length > 3 && a) {
    Object.defineProperty(t, n, a)
  }
  return a
}
var L = function () {
  function e() {
    this.event_emitter = new $_34_index.B.EventEmitter()
    this.disabled = 0
    this.fire_queue = []
  }
  e.prototype.disable = function () {
    this.disabled++
  }
  e.prototype.enable = function () {
    if (this.disabled <= 0) {
      this.disabled = 0
      return new $_122.a("Do not use enable more than once")
    }
    this.disabled--
  }
  e.prototype.is_enabled = function () {
    return 0 === this.disabled
  }
  e.prototype.add_listener = function (e, t) {
    this.event_emitter.addListener(e, t)
  }
  e.prototype.remove_listener = function (e, t) {
    this.event_emitter.removeListener(e, t)
  }
  e.prototype.fire = function (e, t) {
    if (this.is_enabled()) {
      this.fire_queue.push([e, t])
      this.release()
    }
  }
  e.prototype.emit_break_event = function (e) {
    this.event_emitter.emit("break", e)
  }
  e.prototype.release = function () {
    var e = this.fire_queue.shift()
    if (e) {
      this.emit(e[0], e[1])
      this.release()
    }
  }
  e.prototype.emit = function (e, t) {
    this.event_emitter.emit(e, t)
  }
  return e = j([$_269_index.injectable()], e)
}()
export { E as "683__part-4__E" }
export { M as "683__part-4__M" }
export { L as "683__part-4__L" }
