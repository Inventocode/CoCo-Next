/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：3325
 */

"use strict"

export { c as DebugDraw }
import * as /* [auto-meaningful-name] */$_3323 from "./3323"
import * as /* [auto-meaningful-name] */$_470 from "./470"
import * as /* [auto-meaningful-name] */$_185 from "./185"
var l = function () {
  var t = function (r, e) {
    return (t = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (t, r) {
      t.__proto__ = r
    } || function (t, r) {
      for (var e in r) if (Object.prototype.hasOwnProperty.call(r, e)) {
        t[e] = r[e]
      }
    })(r, e)
  }
  return function (r, e) {
    function o() {
      this.constructor = r
    }
    t(r, e)
    r.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o())
  }
}()
var a = function (t, r) {
  var e = "function" === typeof Symbol && t[Symbol.iterator]
  if (!e) {
    return t
  }
  var o
  var n
  var i = e.call(t)
  var l = []
  try {
    for (; (undefined === r || r-- > 0) && !(o = i.next()).done;) {
      l.push(o.value)
    }
  } catch (a) {
    n = {
      error: a
    }
  } finally {
    try {
      if (o && !o.done && (e = i.return)) {
        e.call(i)
      }
    } finally {
      if (n) {
        throw n.error
      }
    }
  }
  return l
}
var c = function (t) {
  function r(r) {
    var e = t.call(this) || this
    e.m_ctx = null
    e.half_width = 310
    e.half_height = 450
    e.m_ctx = r.getContext("2d")
    e.half_width = r.width / 2
    e.half_height = r.height / 2
    return e
  }
  l(r, t)
  r.prototype.set_world = function (t) {
    this.world = t
  }
  r.prototype.PushTransform = function (t) {
    var /* [auto-meaningful-name] */this$m_ctx = this.m_ctx
    if (this$m_ctx) {
      this$m_ctx.save()
      this$m_ctx.translate($_185.n(t.p.x) + this.half_width, $_185.n(t.p.y) + this.half_height)
      this$m_ctx.rotate(t.q.GetAngle())
    }
  }
  r.prototype.PopTransform = function (t) {
    var /* [auto-meaningful-name] */this$m_ctx = this.m_ctx
    if (this$m_ctx) {
      this$m_ctx.restore()
    }
  }
  r.prototype.DrawPolygon = function (t, r, e) {
    var /* [auto-meaningful-name] */this$m_ctx = this.m_ctx
    if (this$m_ctx) {
      this$m_ctx.beginPath()
      this$m_ctx.moveTo($_185.n(t[0].x), $_185.n(t[0].y))
      for (var n = 1; n < r; n++) {
        this$m_ctx.lineTo($_185.n(t[n].x), $_185.n(t[n].y))
      }
      this$m_ctx.closePath()
      this$m_ctx.strokeStyle = e.MakeStyleString(1)
      this$m_ctx.stroke()
    }
  }
  r.prototype.DrawSolidPolygon = function (t, r, e) {
    if (.9 === e.r) {
      e.SetRGB(.9, .9, .9)
    }
    var /* [auto-meaningful-name] */this$m_ctx = this.m_ctx
    if (this$m_ctx) {
      this$m_ctx.beginPath()
      this$m_ctx.moveTo($_185.n(t[0].x), $_185.n(t[0].y))
      for (var n = 1; n < r; n++) {
        this$m_ctx.lineTo($_185.n(t[n].x), $_185.n(t[n].y))
      }
      this$m_ctx.closePath()
      this$m_ctx.fillStyle = e.MakeStyleString(.1)
      this$m_ctx.fill()
      this$m_ctx.strokeStyle = e.MakeStyleString(1)
      this$m_ctx.stroke()
    }
  }
  r.prototype.DrawCircle = function (t, r, e) {
    var /* [auto-meaningful-name] */this$m_ctx = this.m_ctx
    if (this$m_ctx) {
      this$m_ctx.beginPath()
      this$m_ctx.arc($_185.n(t.x), $_185.n(t.y), r, 0, 2 * $_3323.pi, true)
      this$m_ctx.strokeStyle = e.MakeStyleString(1)
      this$m_ctx.stroke()
    }
  }
  r.prototype.DrawSolidCircle = function (t, r, e, n) {
    var /* [auto-meaningful-name] */this$m_ctx = this.m_ctx
    if (this$m_ctx) {
      var a = $_185.n(t.x)
      var c = $_185.n(t.y)
      this$m_ctx.beginPath()
      this$m_ctx.arc(a, c, r, 0, 2 * $_3323.pi, true)
      this$m_ctx.moveTo(a, c)
      this$m_ctx.lineTo(a + e.x * r, c + e.y * r)
      this$m_ctx.fillStyle = n.MakeStyleString(.5)
      this$m_ctx.fill()
      this$m_ctx.strokeStyle = n.MakeStyleString(1)
      this$m_ctx.stroke()
    }
  }
  r.prototype.DrawParticles = function (t, r, e, n) {
    if (this.m_ctx) {
      for (var l = 0; l < n; ++l) {
        var a = t[l]
        var c = (null === e || undefined === e ? undefined : e[l]) || new $_3323.Color(255, 255, 255, .5)
        this.m_ctx.fillStyle = c.MakeStyleString()
        this.m_ctx.beginPath()
        this.m_ctx.arc($_185.n(a.x), $_185.n(a.y), $_185.n(r), 0, 2 * $_3323.pi, true)
        this.m_ctx.fill()
      }
    }
  }
  r.prototype.DrawParticleTriads = function (t, r) {
    var /* [auto-meaningful-name] */this$world
    if (this.m_ctx) {
      if (null === (this$world = this.world) || undefined === this$world ? undefined : this$world.body_list) {
        r = []
        this.world.body_list.forEach(function (t) {
          var /* [auto-meaningful-name] */o$soft_filter
          var o = t.get_current_physics_body()
          if (o.type === $_470.a.ELASTIC) {
            var /* [auto-meaningful-name] */o$particle_group$m_firstIndex = o.particle_group.m_firstIndex
            if (!(null === (o$soft_filter = o.soft_filter) || undefined === o$soft_filter)) {
              o$soft_filter.triangle_top_points.forEach(function (t) {
                r.push([t[0] + o$particle_group$m_firstIndex, t[1] + o$particle_group$m_firstIndex, t[2] + o$particle_group$m_firstIndex])
              })
            }
          }
        })
      }
      for (var o = 0; o < r.length; o++) {
        var l = a(r[o], 3)
        var c = l[0]
        var s = l[1]
        var f = l[2]
        var y = t[c]
        var h = t[s]
        var p = t[f]
        if (y && h && p) {
          this.m_ctx.fillStyle = "rgba(0,0,0,0.5)"
          this.m_ctx.beginPath()
          this.m_ctx.moveTo($_185.n(y.x), $_185.n(y.y))
          this.m_ctx.lineTo($_185.n(h.x), $_185.n(h.y))
          this.m_ctx.lineTo($_185.n(p.x), $_185.n(p.y))
          this.m_ctx.closePath()
          this.m_ctx.stroke()
        } else {
          console.error("Invalid triangle: ", r[o])
        }
      }
    }
  }
  r.prototype.DrawSegment = function (t, r, e) {
    var /* [auto-meaningful-name] */this$m_ctx = this.m_ctx
    if (this$m_ctx) {
      this$m_ctx.beginPath()
      this$m_ctx.moveTo($_185.n(t.x), $_185.n(t.y))
      this$m_ctx.lineTo($_185.n(r.x), $_185.n(r.y))
      this$m_ctx.strokeStyle = e.MakeStyleString(1)
      this$m_ctx.stroke()
    }
  }
  r.prototype.DrawTransform = function (t) {
    var /* [auto-meaningful-name] */this$m_ctx = this.m_ctx
    if (this$m_ctx) {
      this.PushTransform(t)
      this$m_ctx.beginPath()
      this$m_ctx.moveTo(0, 0)
      this$m_ctx.lineTo(1, 0)
      this$m_ctx.strokeStyle = $_3323.Color.RED.MakeStyleString(1)
      this$m_ctx.stroke()
      this$m_ctx.beginPath()
      this$m_ctx.moveTo(0, 0)
      this$m_ctx.lineTo(0, 1)
      this$m_ctx.strokeStyle = $_3323.Color.GREEN.MakeStyleString(1)
      this$m_ctx.stroke()
      this.PopTransform(t)
    }
  }
  r.prototype.DrawPoint = function (t, r, e) {
    var /* [auto-meaningful-name] */this$m_ctx = this.m_ctx
    if (this$m_ctx) {
      this$m_ctx.fillStyle = e.MakeStyleString()
      var n = r / 2
      this$m_ctx.fillRect(t.x - n, t.y - n, r, r)
    }
  }
  r.prototype.DrawString = function (t, e, o) {
    var /* [auto-meaningful-name] */this$m_ctx = this.m_ctx
    if (this$m_ctx) {
      this$m_ctx.save()
      this$m_ctx.setTransform(1, 0, 0, 1, 0, 0)
      this$m_ctx.font = "15px DroidSans"
      var /* [auto-meaningful-name] */r$DrawString_s_color = r.DrawString_s_color
      this$m_ctx.fillStyle = r$DrawString_s_color.MakeStyleString()
      this$m_ctx.fillText(o, $_185.n(t), $_185.n(e))
      this$m_ctx.restore()
    }
  }
  r.prototype.DrawStringWorld = function (t, e, o) {
    var /* [auto-meaningful-name] */this$m_ctx = this.m_ctx
    if (this$m_ctx) {
      var i = r.DrawStringWorld_s_p.Set(t, e)
      this$m_ctx.save()
      this$m_ctx.setTransform(1, 0, 0, 1, 0, 0)
      this$m_ctx.font = "15px DroidSans"
      var /* [auto-meaningful-name] */r$DrawStringWorld_s_color = r.DrawStringWorld_s_color
      this$m_ctx.fillStyle = r$DrawStringWorld_s_color.MakeStyleString()
      this$m_ctx.fillText(o, i.x, i.y)
      this$m_ctx.restore()
    }
  }
  r.prototype.DrawAABB = function (t, r) {
    var /* [auto-meaningful-name] */this$m_ctx = this.m_ctx
    if (this$m_ctx) {
      this$m_ctx.strokeStyle = r.MakeStyleString()
      var o = $_185.n(t.lowerBound.x)
      var n = $_185.n(t.lowerBound.y)
      var l = $_185.n(t.upperBound.x - t.lowerBound.x)
      var a = $_185.n(t.upperBound.y - t.lowerBound.y)
      this$m_ctx.strokeRect(o, n, l, a)
    }
  }
  r.DrawString_s_color = new $_3323.Color(.9, .6, .6)
  r.DrawStringWorld_s_p = new $_3323.Vec2()
  r.DrawStringWorld_s_color = new $_3323.Color(.5, .9, .5)
  return r
}($_3323.Draw)
