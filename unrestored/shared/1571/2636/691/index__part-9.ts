/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：691__part-9
 */

"use strict"

import { s } from "./index__part-1"
import { _ } from "./index__part-2"
import { E, M, j } from "./index__part-4"
import { X, Z } from "./index__part-5"
import { ae, se } from "./index__part-6"
import { ue } from "./index__part-7"
import { Ae, we } from "./index__part-8"
import * as /* [auto-meaningful-name] */$_520_index from "./520/index"
import * as /* [auto-meaningful-name] */$$_105 from "../105"
import * as /* [auto-meaningful-name] */$_119 from "./119"
import * as c from "./65"
import * as /* [auto-meaningful-name] */$_32_index from "./32/index"
import * as /* [auto-meaningful-name] */$_268_index from "./268/index"
import * as /* [auto-meaningful-name] */$_470 from "./470"
import * as /* [auto-meaningful-name] */$_185 from "./185"
import * as /* [auto-meaningful-name] */$_1006 from "./1006"
var Oe = function () {
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
var ke = function () {
  function e(e, t, n, r, i, o) {
    this.app = e
    this.data = t
    this.box2d = n
    this.scene_world = r
    this.actor = i
    this.get_strength = o
    this.type = $_470.a.ELASTIC
    this.position_cache = new this.box2d.Vec2()
    this.particle_system = this.scene_world.world.m_particleSystemList
    this.start_rotation = this.actor.rotation
    if (!this.particle_system) {
      throw Error("Trying to init elastic body before particle system initialized. ")
    }
  }
  e.get_max_anchors = function () {
    if (this._max_anchors) {
      return this._max_anchors
    }
    var e = document.createElement("canvas").getContext("webgl")
    if (!e) {
      throw Error("[Elastic Body]: WebGL not supported")
    }
    var t = e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS)
    var n = Math.floor(t / 5)
    this._max_anchors = Math.floor((n - 1) / 2)
    return this._max_anchors
  }
  e.prototype.set_enabled = function (e) {
    var /* [auto-meaningful-name] */this$actor$current_style
    if (e && !this.particle_group) {
      var n = c.d(this.actor, this.actor.position)
      this.init({
        x: $_185.o(n.x),
        y: $_185.o(n.y)
      }, null === (this$actor$current_style = this.actor.current_style) || undefined === this$actor$current_style ? undefined : this$actor$current_style.texture_id)
    } else if (!e && this.particle_group) {
      this.clear()
    }
  }
  e.prototype.set_dynamic = function () {}
  e.prototype.set_fixed_rotation = function (e) {}
  e.prototype.set_sensor = function (e) {}
  e.prototype.set_mass = function (e) {}
  e.prototype.get_linear_velocity = function () {
    if (this.particle_group) {
      var e = this.particle_group.GetLinearVelocity()
      return new this.box2d.Vec2(e.x, -e.y)
    }
    return this.box2d.Vec2_zero
  }
  e.prototype.set_linear_velocity = function (e, t) {
    if (this.particle_group) {
      for (var /* [auto-meaningful-name] */this$particle_group$m_firstIndex = this.particle_group.m_firstIndex; this$particle_group$m_firstIndex < this.particle_group.m_lastIndex; this$particle_group$m_firstIndex++) {
        this.particle_system.m_velocityBuffer.data[this$particle_group$m_firstIndex].Set(e, -t)
      }
    }
  }
  e.prototype.get_particle_group_rotation = function () {
    if (!this.particle_group) {
      return 0
    }
    if (!this.particle_group_start_rotation) {
      return this.particle_group.GetAngle()
    }
    var e = this.particle_system.m_positionBuffer.data[this.particle_group.m_firstIndex]
    var t = this.particle_group.GetAnchorPosition()
    var n = new this.box2d.Vec2()
    this.box2d.Vec2.SubVV(e, t, n)
    n.SelfNormalize()
    return this.box2d.Atan2(n.y, n.x) - this.box2d.Atan2(this.particle_group_start_rotation.y, this.particle_group_start_rotation.x)
  }
  e.prototype.get_rotation = function () {
    return this.particle_group ? this.start_rotation + this.get_particle_group_rotation() : this.start_rotation
  }
  e.prototype.set_rotation = function (e) {
    if (this.particle_group) {
      for (var t = e - this.get_rotation(), n = this.get_position(), /* [auto-meaningful-name] */this$particle_group$m_firstIndex = this.particle_group.m_firstIndex; this$particle_group$m_firstIndex < this.particle_group.m_lastIndex; this$particle_group$m_firstIndex++) {
        var i = c.p(this.particle_system.m_positionBuffer.data[this$particle_group$m_firstIndex], n, t)
        this.particle_system.m_positionBuffer.data[this$particle_group$m_firstIndex] = new this.box2d.Vec2(i.x, i.y)
      }
    } else {
      this.start_rotation = e
    }
  }
  e.prototype.get_position = function () {
    if (!this.particle_group || !this.particle_group_anchor_offset) {
      return this.position_cache
    }
    var e = this.particle_group.GetAnchorPosition()
    var t = this.get_particle_group_rotation()
    var n = c.p(this.particle_group_anchor_offset, {
      x: 0,
      y: 0
    }, t)
    return new this.box2d.Vec2(e.x - n.x, e.y - n.y)
  }
  e.prototype.set_position = function (e) {
    if (this.particle_group) {
      for (var t = this.get_position(), n = e.x - t.x, r = e.y - t.y, /* [auto-meaningful-name] */this$particle_group$m_firstIndex = this.particle_group.m_firstIndex; this$particle_group$m_firstIndex < this.particle_group.m_lastIndex; this$particle_group$m_firstIndex++) {
        this.particle_system.m_positionBuffer.data[this$particle_group$m_firstIndex].SelfAddXY(n, r)
      }
    }
  }
  e.prototype.scale_points = function (e, t, n) {
    if (!n) {
      for (var r = 1 / 0, i = 1 / 0, o = -1 / 0, a = -1 / 0, s = 0; s < e.length; s++) {
        r = Math.min(r, e[s].x)
        i = Math.min(i, e[s].y)
        o = Math.max(o, e[s].x)
        a = Math.max(a, e[s].y)
      }
      n = {
        x: (o + r) / 2,
        y: (a + i) / 2
      }
    }
    var c = []
    for (s = 0; s < e.length; s++) {
      var u = {
        x: e[s].x,
        y: e[s].y
      }
      var l = u.x - n.x
      u.x = l > 0 ? Math.ceil(l * t + n.x) + 1 : Math.floor(l * t + n.x) - 1
      var f = u.y - n.y
      u.y = f > 0 ? Math.ceil(f * t + n.y) + 1 : Math.floor(f * t + n.y) - 1
      c.push(u)
    }
    return c
  }
  e.prototype.init = function (e, t) {
    if (t) {
      var n = this.generate_position_data(t)
      if (n) {
        this.clear()
        var /* [auto-meaningful-name] */n$points = n.points
        var /* [auto-meaningful-name] */n$triangles = n.triangles
        var o = new this.box2d.ParticleGroupDef()
        o.positionData = n$points
        o.flags = this.box2d.ParticleFlag.b2_elasticParticle | this.box2d.ParticleFlag.b2_waterParticle | this.box2d.ParticleFlag.b2_particleContactListenerParticle | this.box2d.ParticleFlag.b2_particleContactFilterParticle | this.box2d.ParticleFlag.b2_fixtureContactListenerParticle | this.box2d.ParticleFlag.b2_fixtureContactFilterParticle
        o.groupFlags = this.box2d.ParticleGroupFlag.b2_solidParticleGroup
        o.color.SetRGBA(255, 255, 255, .5)
        o.strength = this.get_strength()
        o.position.Set(e.x, e.y)
        o.angle = this.actor.rotation
        o.id = this.actor.id
        this.particle_group = this.particle_system.CreateParticleGroup(o)
        this.start_rotation = this.actor.rotation
        var a = this.particle_group.GetAnchorPosition()
        this.particle_group_anchor_offset = new this.box2d.Vec2()
        this.box2d.Vec2.SubVV(a, e, this.particle_group_anchor_offset)
        var s = this.particle_system.m_positionBuffer.data[this.particle_group.m_firstIndex]
        this.particle_group_start_rotation = new this.box2d.Vec2()
        this.box2d.Vec2.SubVV(s, a, this.particle_group_start_rotation)
        this.particle_group_start_rotation.SelfNormalize()
        var c = this.particle_group.GetParticleCount()
        var /* [auto-meaningful-name] */this$particle_group$m_firstIndex = this.particle_group.m_firstIndex
        if (!n$triangles.length) {
          for (var l = 0; l < this.particle_system.GetTriadCount(); l++) {
            var f = this.particle_system.GetTriads()[l]
            var /* [auto-meaningful-name] */f$indexA = f.indexA
            var /* [auto-meaningful-name] */f$indexB = f.indexB
            var /* [auto-meaningful-name] */f$indexC = f.indexC
            if (this.particle_group.ContainsParticle(f$indexA) && this.particle_group.ContainsParticle(f$indexB) && this.particle_group.ContainsParticle(f$indexC)) {
              n$triangles.push([f$indexA - this$particle_group$m_firstIndex, f$indexC - this$particle_group$m_firstIndex, f$indexB - this$particle_group$m_firstIndex])
            }
          }
        }
        this.soft_filter = new $_1006.a({
          max_num_anchors: c,
          triangles: n$triangles
        })
        this.soft_filter.enabled = true
        this.filters_cache = this.actor.filters
        this.actor.filters = [this.soft_filter]
      }
    }
  }
  e.prototype.clear = function () {
    this.position_cache = this.get_position()
    if (this.particle_group) {
      this.particle_group.DestroyParticles(false)
      this.particle_system.DestroyParticleGroup(this.particle_group)
      this.particle_group = undefined
      this.particle_group_anchor_offset = undefined
      this.particle_group_start_rotation = undefined
      this.soft_filter = undefined
      this.actor.filters = this.filters_cache || []
      this.filters_cache = undefined
    }
  }
  e.prototype.destroy = function () {
    this.clear()
  }
  e.prototype.on_tick = function () {
    if (this.soft_filter && this.particle_group) {
      for (var e = this.get_particle_group_rotation(), t = [], n = this.particle_group.GetAnchorPosition(), r = 0; r < this.particle_group.GetParticleCount(); r++) {
        var i = this.particle_group.relativePositions[r]
        var o = {
          x: n.x + i.x,
          y: n.y + i.y
        }
        o = c.p(o, n, e)
        var a = this.particle_system.m_positionBuffer.data[r + this.particle_group.m_firstIndex]
        t.push([this.map_physics_coord_to_pixi(o), this.map_physics_coord_to_pixi(a)])
      }
      var /* [auto-meaningful-name] */this$app$get_app$view = this.app.get_app().view
      var /* [auto-meaningful-name] */this$app$get_app$view$width = this$app$get_app$view.width
      var /* [auto-meaningful-name] */this$app$get_app$view$height = this$app$get_app$view.height
      this.soft_filter.set_anchors(t, this$app$get_app$view$width, this$app$get_app$view$height)
    }
  }
  e.prototype.apply_force = function (e) {
    var /* [auto-meaningful-name] */this$particle_group
    if (!(null === (this$particle_group = this.particle_group) || undefined === this$particle_group)) {
      this$particle_group.ApplyForce(e)
    }
  }
  e.prototype.generate_position_data = function (t) {
    var n = this
    var r = this.data.get_texture(t)
    var i = this.data.get_texture_bounds_points(t)
    if (i && r) {
      var o = this.actor.get_scale()
      var s = this.particle_system.GetRadius() * Math.SQRT2
      var u = $_185.o(r.width * o.x)
      var l = $_185.o(r.height * o.y)
      var f = Math.sqrt(Math.pow(u + s, 2) + Math.pow(l + s, 2)) / Math.sqrt(Math.pow(u, 2) + Math.pow(l, 2))
      var d = this.scale_points(i, f).map(function (e) {
        var t = c.c(new $_32_index.o(e.x, e.y))
        return new $_32_index.o($_185.o((t.x - r.width / 2) * n.actor.scale.x), $_185.o((t.y - r.height / 2) * n.actor.scale.y))
      })
      var h = []
      if (d) {
        E(d, h)
      }
      var p = new this.box2d.ParticleSystem_CompositeShape(h.map(function (e) {
        var t = new n.box2d.PolygonShape()
        t.Set(e)
        return t
      }))
      var _ = []
      var A = new Set()
      var g = this.particle_system.GetParticleStride()
      var v = u * l
      var m = .5 * e.get_max_anchors()
      var y = Math.max(Math.ceil(Math.sqrt(v / m) / g), 1)
      var /* [auto-meaningful-name] */this$box2d$Transform$IDENTITY = this.box2d.Transform.IDENTITY
      var w = new this.box2d.AABB()
      for (p.ComputeAABB(w, this$box2d$Transform$IDENTITY, 0); !A.size;) {
        for (var x = 0, C = Math.floor(w.lowerBound.y / g) * g; C < w.upperBound.y; C += g) {
          if (A.size > 0) {
            x++
          }
          for (var O = x % y === 0 || C + g >= w.upperBound.y, k = false, S = Math.floor(w.lowerBound.x / g) * g, T = 0; S < w.upperBound.x;) {
            if (k) {
              T++
            }
            var B = T % y === 0
            var D = new this.box2d.Vec2(S, C)
            var /* [auto-meaningful-name] */_$length = _.length
            if (p.TestPoint(this$box2d$Transform$IDENTITY, D)) {
              if (!k) {
                S += g / 2
                D.Set(S, C)
              }
              if (O && B) {
                A.add(_$length)
              }
              _.push(D)
              k = true
            }
            if (k) {
              S += g
            } else {
              S++
            }
          }
          if (O && k) {
            A.add(_.length - 1)
          }
        }
        if (A.size > m) {
          y++
          _.length = 0
          A.clear()
        }
      }
      for (var /* [auto-meaningful-name] */_$length1 = _.length, F = e.get_max_anchors() - m, P = Math.floor(d.length / F), N = new Set(); A.size < e.get_max_anchors();) {
        for (var M = function (e) {
            var t = d[e]
            if (_.every(function (e) {
              return n.box2d.Vec2.DistanceVV(e, t) >= n.particle_system.GetRadius()
            })) {
              N.add(_.length)
              _.push(new L.box2d.Vec2(t.x, t.y))
            }
          }, L = this, j = 0; j < d.length; j += P) {
          M(j)
        }
        if (A.size + N.size <= e.get_max_anchors()) {
          break
        }
        _.length = _$length1
        N.clear()
        P++
      }
      if (A.size === _.length) {
        return {
          points: _,
          triangles: []
        }
      }
      var U = []
      var H = new this.box2d.VoronoiDiagram(A.size + N.size)
      A.forEach(function (e) {
        H.AddGenerator(_[e], e, true)
      })
      N.forEach(function (e) {
        H.AddGenerator(_[e], e, true)
      })
      H.Generate(g / 2, 2 * g)
      H.GetNodes(function (e, t, n) {
        U.push([e, t, n])
      })
      return {
        points: _,
        triangles: U
      }
    }
  }
  e.prototype.map_physics_coord_to_pixi = function (e) {
    var t = $_185.n(e.x)
    var n = $_185.n(e.y)
    var /* [auto-meaningful-name] */this$app$get_app$view = this.app.get_app().view
    return {
      x: t + this$app$get_app$view.width / 2,
      y: n + this$app$get_app$view.height / 2
    }
  }
  e.prototype.get_dragged_body = function (e) {
    var t = this
    var n = new this.box2d.CircleShape()
    n.m_p.Copy(e)
    n.m_radius = 2 * this.particle_system.GetRadius()
    var r = new this.box2d.BodyDef()
    r.type = this.box2d.BodyType.b2_dynamicBody
    r.position.Copy(e)
    r.id = "ParticleJoint"
    r.fixedRotation = false
    var i = this.scene_world.world.CreateBody(r)
    var o = new this.box2d.MassData()
    var a = []
    var s = new this.box2d.AABB()
    n.ComputeAABB(s, this.box2d.Transform.IDENTITY, 0)
    var c = function (e) {
      function t(t) {
        var n = e.call(this) || this
        n.ReportParticle = t
        return n
      }
      Oe(t, e)
      t.prototype.ReportFixture = function (e) {
        return false
      }
      return t
    }(this.box2d.QueryCallback)
    this.scene_world.world.QueryAABB(new c(function (n, r) {
      a.push({
        index: r,
        offset: t.box2d.Vec2.SubVV(n.m_positionBuffer.data[r], e, new t.box2d.Vec2())
      })
      return true
    }), s)
    for (var u = 0; u < a.length; u++) {
      o.mass = this.particle_system.m_groupBuffer[a[u].index].GetMass()
    }
    i.SetMassData(o)
    if (this.update_callback && this.scene_world.update_callbacks.has(this.update_callback)) {
      this.scene_world.update_callbacks.delete(this.update_callback)
    }
    this.update_callback = function () {
      var e = i.GetLinearVelocity()
      var n = i.GetPosition()
      a.forEach(function (r) {
        var /* [auto-meaningful-name] */r$index = r.index
        var /* [auto-meaningful-name] */r$offset = r.offset
        t.particle_system.GetVelocityBuffer()[r$index].Copy(e)
        var a = t.box2d.Vec2.AddVV(n, r$offset, new t.box2d.Vec2())
        t.particle_system.m_positionConstraintBuffer[r$index] = [a, a]
      })
    }
    this.scene_world.update_callbacks.add(this.update_callback)
    return i
  }
  e.prototype.on_end_drag = function () {
    if (this.update_callback) {
      this.scene_world.update_callbacks.delete(this.update_callback)
      this.update_callback = undefined
    }
  }
  e.prototype.refilter = function () {}
  return e
}()
var Se = function () {
  function e(e, t, n, r, i, o, a) {
    this.data = e
    this.box2d = t
    this.scene_world = n
    this.actor = r
    this.type = $_470.a.NORMAL
    var s = new this.box2d.BodyDef()
    s.type = this.box2d.BodyType.b2_staticBody
    s.enabled = false
    s.fixedRotation = true
    s.id = this.actor.id
    this.body = this.scene_world.world.CreateBody(s)
    this.fixture_def = new this.box2d.FixtureDef()
    this.fixture_def.density = i || $_185.b
    this.fixture_def.friction = o || $_185.c
    this.fixture_def.restitution = a || $_185.e
  }
  e.prototype.set_enabled = function (e) {
    this.body.SetEnabled(e)
  }
  e.prototype.set_dynamic = function (e) {
    this.body.SetType(e ? this.box2d.BodyType.b2_dynamicBody : this.box2d.BodyType.b2_staticBody)
  }
  e.prototype.set_fixed_rotation = function (e) {
    this.body.SetFixedRotation(e)
  }
  e.prototype.set_sensor = function (e) {
    var t = this.body.GetFixtureList()
    if (e !== (null === t || undefined === t ? undefined : t.IsSensor())) {
      for (; t;) {
        t.SetSensor(e)
        t = t.m_next
      }
    }
  }
  e.prototype.set_mass = function (e) {
    var t = this.get_mass()
    if (0 === t) {
      t = 1
    }
    this.set_density(this.get_density() * e / t)
  }
  e.prototype.get_mass = function () {
    return this.body.GetMass()
  }
  e.prototype.set_density = function (e) {
    this.set_physics_property(0, e)
    this.body.ResetMassData()
    this.fixture_def.density = e
  }
  e.prototype.get_density = function () {
    var e = this.body.GetFixtureList()
    return e ? e.GetDensity() : 0
  }
  e.prototype.set_friction = function (e) {
    this.set_physics_property(1, e)
  }
  e.prototype.get_friction = function () {
    var e = this.body.GetFixtureList()
    return e ? e.GetFriction() : 0
  }
  e.prototype.set_restitution = function (e) {
    this.set_physics_property(2, e)
  }
  e.prototype.get_restitution = function () {
    var e = this.body.GetFixtureList()
    return e ? e.GetRestitution() : 0
  }
  e.prototype.get_linear_velocity = function () {
    var e = this.body.GetLinearVelocity()
    var t = e.x
    var n = e.y
    return new this.box2d.Vec2(t, -n)
  }
  e.prototype.set_linear_velocity = function (e, t) {
    this.body.SetLinearVelocity(new this.box2d.Vec2(e, -t))
  }
  e.prototype.get_rotation = function () {
    return this.body.GetAngle()
  }
  e.prototype.set_rotation = function (e) {
    this.body.SetAngle(e)
    this.body.SetAwake(true)
  }
  e.prototype.get_position = function () {
    return this.body.GetPosition()
  }
  e.prototype.set_position = function (e) {
    this.body.SetPosition(e)
    this.body.SetAwake(true)
  }
  e.prototype.init = function (e, t) {
    for (var n = this.body.GetFixtureList(); n;) {
      this.body.DestroyFixture(n)
      n = this.body.GetFixtureList()
    }
    this.body.SetPositionXY(e.x, e.y)
    this.body.SetAngle(this.actor.rotation)
    if (t) {
      this.create_fixture(t)
    }
  }
  e.prototype.destroy = function () {
    this.scene_world.world.DestroyBody(this.body)
  }
  e.prototype.on_tick = function () {}
  e.prototype.apply_force = function (e) {
    this.body.ApplyForceToCenter(e, true)
  }
  e.prototype.create_fixture = function (e) {
    var t = this
    if (this.body && e) {
      var n = this.data.get_texture_convex_groups(e)
      var r = this.data.get_texture(e)
      if (n && r) {
        n.forEach(function (e) {
          var /* [auto-meaningful-name] */t$body
          var i = new t.box2d.PolygonShape()
          var o = []
          e.forEach(function (e) {
            var n = c.c(e)
            o.push(new t.box2d.Vec2($_185.o(n.x - r.width / 2) * t.actor.scale.x, $_185.o(n.y - r.height / 2) * t.actor.scale.y))
          })
          i.Set(o)
          t.fixture_def.shape = i
          if (!(null === (t$body = t.body) || undefined === t$body)) {
            t$body.CreateFixture(t.fixture_def)
          }
        })
      }
    }
  }
  e.prototype.set_physics_property = function (e, t) {
    for (var n = this.body.GetFixtureList(); n;) {
      switch (e) {
        case 0:
          n.SetDensity(t)
          break
        case 1:
          n.SetFriction(t)
          break
        case 2:
          n.SetRestitution(t)
          break
        default:
          return
      }
      n = n.m_next
    }
  }
  e.prototype.refilter = function () {
    for (var e = this.body.GetFixtureList(); e;) {
      e.Refilter()
      e = e.m_next
    }
  }
  e.prototype.get_dragged_body = function () {
    return this.body
  }
  e.prototype.on_end_drag = function () {}
  return e
}()
var Te = function () {
  function e(e, t, n, r, i) {
    var o
    var s = this
    this.app = e
    this.data = t
    this.box2d = n
    this.scene_world = r
    this.force_handler_cache = new Set()
    this.collision_filter = new Set()
    this.bodies_cache = []
    this.should_recreate_body = false
    this.on_actor_change = function (e) {
      var t
      if (e.texture || e.scale || e.pivot) {
        if (!s.is_enabled()) {
          return void (s.should_recreate_body = true)
        }
        s.physics_body.init(s.convert_pixi_to_physics_position(s.actor.position), null === (t = s.actor.get_current_style()) || undefined === t ? undefined : t.texture_id)
      }
    }
    this.on_actor_destroy = function () {
      return s.destroy()
    }
    this.set_strength = function (e) {
      s.group_strength = e
      var t = s.bodies_cache[$_470.a.ELASTIC]
      if (null === t || undefined === t ? undefined : t.particle_group) {
        t.particle_group.m_strength = s.group_strength
      }
    }
    this.get_strength = function () {
      return s.group_strength
    }
    this.physics_set_pixi_position = function (e, t) {
      if (!s.actor.is_dragging() || !s.is_enabled()) {
        var n = s.convert_pixi_to_physics_position(new $_32_index.o(e, t))
        s.bodies_cache.forEach(function (e) {
          return e.set_position(n)
        })
        s.fork_set_pixi_position(e, t)
      }
    }
    this.physics_set_pixi_rotation = function (e) {
      s.bodies_cache.forEach(function (t) {
        return t.set_rotation(e)
      })
      s.fork_set_pixi_rotation(e)
    }
    this.handler = function () {
      if (s.is_enabled()) {
        var e = s.physics_body.get_rotation()
        var t = s.physics_body.get_position()
        var n = t.x
        var r = t.y
        var i = s.convert_physics_to_pixi_position(n, r, e)
        s.fork_set_pixi_rotation(e)
        s.fork_set_pixi_position(i.x, i.y)
        s.actor.set_rotation_value(s.convert_to_rotation_value(e))
      }
      s.update_body_state()
      s.physics_body.on_tick()
      if (s.force_handler_cache.size) {
        s.force_handler_cache.forEach(function (e) {
          return e()
        })
      }
    }
    this.drag_start = function (e) {
      if ((s.collidable || s.forceable) && s.actor.get_draggable()) {
        if (s.mouse_joint) {
          s.scene_world.world.DestroyJoint(s.mouse_joint)
        }
        var t = e.data.getLocalPosition(s.actor.parent)
        var n = {
          x: $_185.o(t.x),
          y: $_185.o(t.y)
        }
        var r = s.physics_body.get_dragged_body(n)
        var i = new s.box2d.MouseJointDef()
        i.bodyA = s.mouse_joint_dummy_body
        i.bodyB = r
        i.target.Set(n.x, n.y)
        i.maxForce = $_185.i * r.m_mass
        i.stiffness = $_185.k
        i.damping = $_185.a
        s.mouse_joint = s.scene_world.world.CreateJoint(i)
        r.SetAwake(true)
      }
    }
    this.drag_move = c.w(function (e) {
      if ((s.collidable || s.forceable) && s.actor.is_dragging() && s.mouse_joint) {
        var /* [auto-meaningful-name] */s$app$get_app$view = s.app.get_app().view
        var /* [auto-meaningful-name] */s$app$get_app$view$width = s$app$get_app$view.width
        var /* [auto-meaningful-name] */s$app$get_app$view$height = s$app$get_app$view.height
        var i = e.data.getLocalPosition(s.actor.parent)
        if (c.n(i, {
          width: s$app$get_app$view$width,
          height: s$app$get_app$view$height
        })) {
          var o = {
            x: $_185.o(i.x),
            y: $_185.o(i.y)
          }
          s.mouse_joint.GetTarget().Set(o.x, o.y)
          s.mouse_joint.GetBodyB().SetAwake(true)
        }
      }
    }, c.a)
    this.drag_end = function () {
      if ((s.collidable || s.forceable) && s.mouse_joint) {
        s.scene_world.world.DestroyJoint(s.mouse_joint)
        s.mouse_joint = undefined
        s.physics_body.on_end_drag()
      }
    }
    this.on_destroy = i.on_destroy
    this.actor = i.actor
    this.actor_id = i.actor.id
    this.mouse_joint_dummy_body = i.mouse_joint_dummy_body
    this.collidable = i.collidable
    this.forceable = i.forceable
    this.elastic = i.elastic
    this.group_strength = i.strength || 1
    var /* [auto-meaningful-name] */i$density = i.density
    var /* [auto-meaningful-name] */i$friction = i.friction
    var /* [auto-meaningful-name] */i$restitution = i.restitution
    this.physics_body = this.get_normal_body(i$density, i$friction, i$restitution)
    if (this.elastic) {
      this.physics_body = this.get_elastic_body()
    }
    var d = null === (o = this.actor.get_current_style()) || undefined === o ? undefined : o.texture_id
    var h = this.convert_pixi_to_physics_position(this.actor.position)
    this.bodies_cache.forEach(function (e) {
      return e.init(h, d)
    })
    this.update_body_state()
    this.app.get_app().ticker.add(this.handler)
    this.fork_set_pixi_position = this.actor.set_pixi_position.bind(this.actor)
    this.actor.set_pixi_position = this.physics_set_pixi_position.bind(this)
    this.fork_set_pixi_rotation = this.actor.set_pixi_rotation.bind(this.actor)
    this.actor.set_pixi_rotation = this.physics_set_pixi_rotation.bind(this)
    this.actor.add_listener("change", this.on_actor_change)
    this.actor.add_listener("destroy", this.on_actor_destroy)
    this.actor.addListener("mousedown", this.drag_start)
    this.actor.addListener("mousemove", this.drag_move)
    this.actor.addListener("mouseup", this.drag_end)
    this.actor.addListener("mouseupoutside", this.drag_end)
    this.actor.addListener("touchstart", this.drag_start)
    this.actor.addListener("touchmove", this.drag_move)
    this.actor.addListener("touchend", this.drag_end)
    this.actor.addListener("touchendoutside", this.drag_end)
  }
  e.prototype.update_body_state = function () {
    var e
    var t = this.is_enabled()
    this.physics_body.set_enabled(t)
    if (t) {
      if (this.should_recreate_body) {
        this.physics_body.init(this.convert_pixi_to_physics_position(this.actor.position), null === (e = this.actor.get_current_style()) || undefined === e ? undefined : e.texture_id)
        this.should_recreate_body = false
      }
      this.physics_body.set_dynamic(this.forceable)
      var n = this.forceable && !this.collidable
      this.physics_body.set_sensor(n)
    }
  }
  e.prototype.get_elastic_body = function () {
    if (this.bodies_cache[$_470.a.ELASTIC]) {
      return this.bodies_cache[$_470.a.ELASTIC]
    }
    var e = new ke(this.app, this.data, this.box2d, this.scene_world, this.actor, this.get_strength)
    this.bodies_cache[$_470.a.ELASTIC] = e
    return e
  }
  e.prototype.get_normal_body = function (e, t, n) {
    if (this.bodies_cache[$_470.a.NORMAL]) {
      return this.bodies_cache[$_470.a.NORMAL]
    }
    var r = new Se(this.data, this.box2d, this.scene_world, this.actor, e, t, n)
    this.bodies_cache[$_470.a.NORMAL] = r
    return r
  }
  e.prototype.convert_pixi_to_physics_position = function (e) {
    var t = c.d(this.actor, e)
    return {
      x: $_185.o(t.x),
      y: $_185.o(t.y)
    }
  }
  e.prototype.convert_physics_to_pixi_position = function (e, t, n) {
    var r = {
      x: $_185.n(e),
      y: $_185.n(t)
    }
    var i = {
      x: r.x + this.actor.pivot.x * this.actor.scale.x,
      y: r.y + this.actor.pivot.y * this.actor.scale.y
    }
    return c.p(i, r, n)
  }
  e.prototype.add_ids_to_collision_filter = function (e) {
    var t = this
    if (0 !== e.length) {
      var n = false
      e.forEach(function (e) {
        if (!t.collision_filter.has(e)) {
          t.collision_filter.add(e)
          if (!n) {
            n = true
          }
        }
      })
      if (n) {
        this.physics_body.refilter()
      }
    }
  }
  e.prototype.remove_ids_from_collision_filter = function (e) {
    var t = this
    e.forEach(function (e) {
      if (t.collision_filter.has(e)) {
        t.collision_filter.delete(e)
      }
    })
  }
  e.prototype.prevent_collision_with_actors = function (e) {
    this.add_ids_to_collision_filter(e)
  }
  e.prototype.prevent_collision_with_edges = function (e) {
    var t = []
    e.forEach(function (e) {
      t.push(e.toString())
    })
    this.add_ids_to_collision_filter(t)
  }
  e.prototype.enable_collision_with_actors = function (e) {
    this.remove_ids_from_collision_filter(e)
  }
  e.prototype.enable_collision_with_edges = function (e) {
    var t = []
    e.forEach(function (e) {
      t.push(e.toString())
    })
    this.remove_ids_from_collision_filter(t)
  }
  e.prototype.set_collidable = function (e) {
    this.collidable = e
  }
  e.prototype.set_forceable = function (e) {
    this.forceable = e
  }
  e.prototype.is_enabled = function () {
    return this.actor.visible && (this.collidable || this.forceable)
  }
  e.prototype.is_dynamic = function () {
    return this.forceable
  }
  e.prototype.set_fixed_rotation = function (e) {
    this.bodies_cache.forEach(function (t) {
      return t.set_fixed_rotation(e)
    })
  }
  e.prototype.get_collision_filter = function () {
    return this.collision_filter
  }
  e.prototype.set_mass = function (e) {
    this.get_normal_body().set_mass(e)
  }
  e.prototype.get_mass = function () {
    return this.get_normal_body().get_mass()
  }
  e.prototype.set_density = function (e) {
    this.get_normal_body().set_density(e)
  }
  e.prototype.get_density = function () {
    return this.get_normal_body().get_density()
  }
  e.prototype.set_friction = function (e) {
    this.get_normal_body().set_friction(e)
  }
  e.prototype.get_friction = function () {
    return this.get_normal_body().get_friction()
  }
  e.prototype.set_restitution = function (e) {
    this.get_normal_body().set_restitution(e)
  }
  e.prototype.get_restitution = function () {
    return this.get_normal_body().get_restitution()
  }
  e.prototype.set_elastic = function (e) {
    var t
    if (e !== this.elastic) {
      var n = this.physics_body.get_rotation()
      var r = this.physics_body.get_position()
      var i = this.physics_body.get_linear_velocity()
      var o = this.is_enabled()
      this.physics_body.set_enabled(false)
      this.physics_body = e ? this.get_elastic_body() : this.get_normal_body()
      if (this.physics_body.type === $_470.a.NORMAL) {
        this.physics_body.init(this.convert_pixi_to_physics_position(this.actor.position), null === (t = this.actor.get_current_style()) || undefined === t ? undefined : t.texture_id)
      }
      this.physics_body.set_enabled(o)
      this.physics_body.set_rotation(n)
      this.physics_body.set_position(r)
      this.physics_body.set_linear_velocity(i.x, i.y)
      this.elastic = e
    }
  }
  e.prototype.get_linear_velocity = function () {
    return this.physics_body.get_linear_velocity()
  }
  e.prototype.set_linear_velocity = function (e, t) {
    this.physics_body.set_linear_velocity(e, t)
  }
  e.prototype.apply_force = function (e, t) {
    var n = new this.box2d.Vec2(e, -t)
    this.physics_body.apply_force(n)
  }
  e.prototype.apply_force_in_time = function (e) {
    var t = this
    var /* [auto-meaningful-name] */e$time = e.time
    var r = e.x
    var i = e.y
    var /* [auto-meaningful-name] */e$on_complete = e.on_complete
    var a = Math.round(e$time / $_185.f)
    var s = 1
    this.force_handler_cache.add(function e() {
      if (s > a) {
        t.force_handler_cache.delete(e)
        return void e$on_complete()
      }
      t.apply_force(r, i)
      s++
    })
  }
  e.prototype.destroy = function () {
    this.app.get_app().ticker.remove(this.handler)
    this.actor.removeListener("mousedown", this.drag_start)
    this.actor.removeListener("mousemove", this.drag_move)
    this.actor.removeListener("mouseup", this.drag_end)
    this.actor.removeListener("mouseupoutside", this.drag_end)
    this.actor.removeListener("touchstart", this.drag_start)
    this.actor.removeListener("touchmove", this.drag_move)
    this.actor.removeListener("touchend", this.drag_end)
    this.actor.removeListener("touchendoutside", this.drag_end)
    this.actor.remove_listener("change", this.on_actor_change)
    this.actor.remove_listener("destroy", this.on_actor_destroy)
    if (this.mouse_joint) {
      this.scene_world.world.DestroyJoint(this.mouse_joint)
    }
    this.bodies_cache.forEach(function (e) {
      return e.destroy()
    })
    this.actor.set_pixi_position = this.fork_set_pixi_position
    this.actor.set_pixi_rotation = this.fork_set_pixi_rotation
    this.on_destroy()
  }
  e.prototype.convert_to_rotation_value = function (e) {
    var t = c.s(-e)
    return this.actor.is_rotation_flipped ? c.s(t + Math.PI) : t
  }
  e.prototype.get_velocity_direction = function () {
    var e = this.physics_body.get_linear_velocity()
    return c.v(Math.atan2(e.y, e.x))
  }
  e.prototype.get_current_physics_body = function () {
    return this.physics_body
  }
  return e
}()
var Be = function (e) {
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
var De = function () {
  function e(e, t, n, r, i) {
    var o = this
    this.app = e
    this.data = t
    this.scene = n
    this.box2d = r
    this.body_list = new Map()
    this.collision_list = new Set()
    this.edge_list = new Map()
    this.update_callbacks = new Set()
    this.update = function () {
      o.world.Step($_185.f, $_185.l, $_185.j)
      o.update_callbacks.forEach(function (e) {
        return e()
      })
    }
    this.on_scene_destroy = function () {
      return o.destroy()
    }
    this.world = new r.World(new r.Vec2(0, i || $_185.d))
    var a = new this.box2d.ParticleSystemDef()
    a.radius = 1.2
    this.world.CreateParticleSystem(a)
    var s = new r.ContactListener()
    var c = function (e, t) {
      if (e && t && e !== t) {
        var n = $_185.m(e, t)
        var r = $_185.m(t, e)
        o.collision_list.add(n)
        o.collision_list.add(r)
      }
    }
    s.BeginContact = function (e) {
      return c(e.GetFixtureA().GetBody().GetId(), e.GetFixtureB().GetBody().GetId())
    }
    s.BeginContactBodyParticleGroup = function (e, t) {
      var n
      return c(t.body.GetId(), (null === (n = e.m_groupBuffer[t.index]) || undefined === n ? undefined : n.id) || "")
    }
    s.BeginContactParticleGroupParticleGroup = function (e, t) {
      var n
      var r
      return c((null === (n = e.m_groupBuffer[t.GetIndexA()]) || undefined === n ? undefined : n.id) || "", (null === (r = e.m_groupBuffer[t.GetIndexB()]) || undefined === r ? undefined : r.id) || "")
    }
    var u = function (e, t) {
      if (e && t && e !== t) {
        var n = $_185.m(e, t)
        var r = $_185.m(t, e)
        o.collision_list.delete(n)
        o.collision_list.delete(r)
      }
    }
    s.EndContact = function (e) {
      return u(e.GetFixtureA().GetBody().GetId(), e.GetFixtureB().GetBody().GetId())
    }
    s.EndContactBodyParticleGroup = function (e, t) {
      var n
      return u(t.body.GetId(), (null === (n = e.m_groupBuffer[t.index]) || undefined === n ? undefined : n.id) || "")
    }
    s.EndContactParticleGroupParticleGroup = function (e, t) {
      var n
      var r
      return u((null === (n = e.m_groupBuffer[t.GetIndexA()]) || undefined === n ? undefined : n.id) || "", (null === (r = e.m_groupBuffer[t.GetIndexB()]) || undefined === r ? undefined : r.id) || "")
    }
    var l = function (e, t) {
      var n = o.body_list.get(e)
      var r = o.body_list.get(t)
      return !(null === n || undefined === n ? undefined : n.get_collision_filter().has(t)) && !(null === r || undefined === r ? undefined : r.get_collision_filter().has(e))
    }
    var f = new r.ContactFilter()
    f.ShouldCollide = function (e, t) {
      return l(e.GetBody().GetId(), t.GetBody().GetId())
    }
    f.ShouldCollideFixtureParticle = function (e, t, n) {
      var r
      return l(e.GetBody().GetId(), (null === (r = t.m_groupBuffer[n]) || undefined === r ? undefined : r.id) || "")
    }
    f.ShouldCollideParticleParticle = function (e, t, n) {
      var r
      var i
      return l((null === (r = e.m_groupBuffer[t]) || undefined === r ? undefined : r.id) || "", (null === (i = e.m_groupBuffer[n]) || undefined === i ? undefined : i.id) || "")
    }
    this.world.SetContactListener(s)
    this.world.SetContactFilter(f)
    this.scene.add_listener("destroy", this.on_scene_destroy)
    this.mouse_joint_dummy_body = this.world.CreateBody()
    this.app.get_app().ticker.add(this.update)
  }
  e.prototype.create_body = function (e) {
    var t = this
    var n = this.data.get_internal_actor(e.actor_id)
    if (n) {
      var /* [auto-meaningful-name] */e$density = e.density
      var /* [auto-meaningful-name] */e$friction = e.friction
      var /* [auto-meaningful-name] */e$restitution = e.restitution
      var /* [auto-meaningful-name] */e$strength = e.strength
      var s = new Te(this.app, this.data, this.box2d, this, {
        on_destroy: function () {
          t.body_list.delete(e.actor_id)
        },
        actor: n,
        mouse_joint_dummy_body: this.mouse_joint_dummy_body,
        collidable: !!e.collidable,
        forceable: !!e.forceable,
        elastic: !!e.elastic,
        density: e$density,
        friction: e$friction,
        restitution: e$restitution,
        strength: e$strength
      })
      this.body_list.set(e.actor_id, s)
      return s
    }
  }
  e.prototype.create_edges = function (e) {
    var t
    var /* [auto-meaningful-name] */c$return
    if (0 !== e.length) {
      var /* [auto-meaningful-name] */this$app$get_app$view = this.app.get_app().view
      var /* [auto-meaningful-name] */this$app$get_app$view$width = this$app$get_app$view.width
      var /* [auto-meaningful-name] */this$app$get_app$view$height = this$app$get_app$view.height
      var a = $_185.o(this$app$get_app$view$width) / 2
      var s = $_185.o(this$app$get_app$view$height) / 2
      try {
        for (var c = Be(e), u = c.next(); !u.done; u = c.next()) {
          var /* [auto-meaningful-name] */u$value = u.value
          if (!this.edge_list.get(u$value)) {
            var f = 0
            var d = 0
            switch (u$value) {
              case $$_105.b.TOP:
                d = -s - $_185.h
                break
              case $$_105.b.BOTTOM:
                d = s + $_185.h
                break
              case $$_105.b.LEFT:
                f = -a - $_185.h
                break
              case $$_105.b.RIGHT:
                f = a + $_185.h
                break
              default:
                return
            }
            var h = this.world.CreateBody({
              id: u$value.toString()
            })
            var p = new this.box2d.PolygonShape()
            p.SetAsBox($_185.h, $_185.h)
            h.CreateFixture(p, $_185.g)
            h.SetPositionXY(f, d)
            this.edge_list.set(u$value, h)
          }
        }
      } catch (_) {
        t = {
          error: _
        }
      } finally {
        try {
          if (u && !u.done && (c$return = c.return)) {
            c$return.call(c)
          }
        } finally {
          if (t) {
            throw t.error
          }
        }
      }
    }
  }
  e.prototype.destroy_edges = function (e) {
    var t
    var /* [auto-meaningful-name] */r$return
    if (0 !== e.length && 0 !== this.edge_list.size) {
      try {
        for (var r = Be(e), i = r.next(); !i.done; i = r.next()) {
          var /* [auto-meaningful-name] */i$value = i.value
          var a = this.edge_list.get(i$value)
          if (a) {
            a.GetWorld().DestroyBody(a)
            this.edge_list.delete(i$value)
          }
        }
      } catch (s) {
        t = {
          error: s
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
  }
  e.prototype.destroy_body = function (e) {
    var t = this.body_list.get(e)
    if (t) {
      t.destroy()
    }
  }
  e.prototype.destroy = function () {
    this.app.get_app().ticker.remove(this.update)
    this.scene.remove_listener("destroy", this.on_scene_destroy)
    this.body_list.forEach(function (e) {
      e.destroy()
    })
    this.edge_list.forEach(function (e) {
      e.GetWorld().DestroyBody(e)
    })
    this.body_list.clear()
    this.edge_list.clear()
    this.collision_list.clear()
  }
  e.prototype.get_body = function (e) {
    return this.body_list.get(e)
  }
  e.prototype.set_gravity = function (e, t) {
    this.world.SetGravity(new this.box2d.Vec2(e, -t))
  }
  e.prototype.check_bumped = function (e, t) {
    var n = this.data.get_internal_actor(e)
    var r = this.data.get_internal_actor(t)
    if (!n || n.has_left_stage() || !r || r.has_left_stage()) {
      return false
    }
    var i = this.get_body(e)
    var o = this.get_body(t)
    if (!i || !i.is_enabled() || !o || !o.is_enabled()) {
      return false
    }
    var a = $_185.m(e, t)
    var s = $_185.m(t, e)
    return this.collision_list.has(a) || this.collision_list.has(s)
  }
  e.prototype.check_collision_with_edge = function (e, t) {
    var n
    var /* [auto-meaningful-name] */s$return
    var i = this.data.get_internal_actor(e)
    if (!i || i.has_left_stage()) {
      return false
    }
    var o = this.get_body(e)
    if (!o || !o.is_enabled()) {
      return false
    }
    var a = t ? [t] : [$$_105.b.TOP, $$_105.b.BOTTOM, $$_105.b.LEFT, $$_105.b.RIGHT]
    try {
      for (var s = Be(a), c = s.next(); !c.done; c = s.next()) {
        var /* [auto-meaningful-name] */c$value = c.value
        var l = this.edge_list.get(c$value)
        if (l) {
          var f = l.GetId()
          var d = $_185.m(e, f)
          var h = $_185.m(f, e)
          if (this.collision_list.has(d) || this.collision_list.has(h)) {
            return true
          }
        }
      }
    } catch (p) {
      n = {
        error: p
      }
    } finally {
      try {
        if (c && !c.done && (s$return = s.return)) {
          s$return.call(s)
        }
      } finally {
        if (n) {
          throw n.error
        }
      }
    }
    return false
  }
  return e
}()
var Ie = function (e, t, n, r) {
  return new (n || (n = Promise))(function (i, o) {
    function a(e) {
      try {
        c(r.next(e))
      } catch (t) {
        o(t)
      }
    }
    function s(e) {
      try {
        c(r.throw(e))
      } catch (t) {
        o(t)
      }
    }
    function c(e) {
      var /* [auto-meaningful-name] */e$value
      if (e.done) {
        i(e.value)
      } else {
        (e$value = e.value, e$value instanceof n ? e$value : new n(function (e) {
          e(e$value)
        })).then(a, s)
      }
    }
    c((r = r.apply(e, t || [])).next())
  })
}
var Re = function (e, t) {
  var n
  var r
  var i
  var o
  var a = {
    label: 0,
    sent: function () {
      if (1 & i[0]) {
        throw i[1]
      }
      return i[1]
    },
    trys: [],
    ops: []
  }
  o = {
    next: s(0),
    throw: s(1),
    return: s(2)
  }
  if ("function" === typeof Symbol) {
    o[Symbol.iterator] = function () {
      return this
    }
  }
  return o
  function s(o) {
    return function (s) {
      return function (o) {
        if (n) {
          throw new TypeError("Generator is already executing.")
        }
        for (; a;) {
          try {
            n = 1
            if (r && (i = 2 & o[0] ? r.return : o[0] ? r.throw || ((i = r.return) && i.call(r), 0) : r.next) && !(i = i.call(r, o[1])).done) {
              return i
            }
            switch (r = 0, i && (o = [2 & o[0], i.value]), o[0]) {
              case 0:
              case 1:
                i = o
                break
              case 4:
                a.label++
                return {
                  value: o[1],
                  done: false
                }
              case 5:
                a.label++
                r = o[1]
                o = [0]
                continue
              case 7:
                o = a.ops.pop()
                a.trys.pop()
                continue
              default:
                if (!(i = (i = a.trys).length > 0 && i[i.length - 1]) && (6 === o[0] || 2 === o[0])) {
                  a = 0
                  continue
                }
                if (3 === o[0] && (!i || o[1] > i[0] && o[1] < i[3])) {
                  a.label = o[1]
                  break
                }
                if (6 === o[0] && a.label < i[1]) {
                  a.label = i[1]
                  i = o
                  break
                }
                if (i && a.label < i[2]) {
                  a.label = i[2]
                  a.ops.push(o)
                  break
                }
                if (i[2]) {
                  a.ops.pop()
                }
                a.trys.pop()
                continue
            }
            o = t.call(e, a)
          } catch (s) {
            o = [6, s]
            r = 0
          } finally {
            n = i = 0
          }
        }
        if (5 & o[0]) {
          throw o[1]
        }
        return {
          value: o[0] ? o[1] : undefined,
          done: true
        }
      }([o, s])
    }
  }
}
var Fe = function (e) {
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
var Pe = function () {
  function e(e, t) {
    this.app = e
    this.data = t
    this.world_list = new Map()
  }
  e.prototype.init = function (e) {
    var /* [auto-meaningful-name] */this$debug_draw
    return Ie(this, undefined, undefined, function () {
      var r
      var /* [auto-meaningful-name] */this$app$get_app$view
      var o
      var /* [auto-meaningful-name] */l$sent$DebugDraw
      var /* [auto-meaningful-name] */this$box2d$DrawFlags
      var c
      var u = this
      return Re(this, function (l) {
        switch (l.label) {
          case 0:
            return this.box2d ? [3, 2] : (r = this, [4, import("./3323")])
          case 1:
            r.box2d = l.sent()
            l.label = 2
          case 2:
            return !e || this.debug_draw ? [3, 4] : (this$app$get_app$view = this.app.get_app().view).parentElement ? ((o = document.createElement("canvas")).width = this$app$get_app$view.width, o.height = this$app$get_app$view.height, o.style.width = this$app$get_app$view.style.width, o.style.height = this$app$get_app$view.style.height, o.style.position = "absolute", o.style.top = "0", o.style.left = "0", o.style.pointerEvents = "none", this$app$get_app$view.parentElement.appendChild(o), [4, import("./3325")]) : [2]
          case 3:
            l$sent$DebugDraw = l.sent().DebugDraw
            this.debug_draw = new l$sent$DebugDraw(o)
            this$box2d$DrawFlags = this.box2d.DrawFlags
            c = this$box2d$DrawFlags.e_none
            c |= this$box2d$DrawFlags.e_shapeBit
            c |= this$box2d$DrawFlags.e_particleBit
            if (!(null === (this$debug_draw = this.debug_draw) || undefined === this$debug_draw)) {
              this$debug_draw.SetFlags(c)
            }
            this.draw_handler = function (e) {
              var /* [auto-meaningful-name] */u$debug_draw
              var n
              var /* [auto-meaningful-name] */u$latest_world
              if (!(null === (n = null === (u$debug_draw = u.debug_draw) || undefined === u$debug_draw ? undefined : u$debug_draw.m_ctx) || undefined === n)) {
                n.clearRect(0, 0, o.width, o.height)
              }
              if (e) {
                if (!(null === (u$latest_world = u.latest_world) || undefined === u$latest_world)) {
                  u$latest_world.world.DebugDraw()
                }
              }
            }
            l.label = 4
          case 4:
            return [2]
        }
      })
    })
  }
  e.prototype.create_world = function (e, t) {
    var n = this.data.get_internal_scene(e)
    if (this.box2d && n) {
      var r = new De(this.app, this.data, n, this.box2d, t)
      if (this.debug_draw) {
        r.world.SetDebugDraw(this.debug_draw)
        if (0 === this.world_list.size && this.draw_handler) {
          this.app.get_app().ticker.add(this.draw_handler)
        }
      }
      this.world_list.set(e, r)
      this.latest_world = r
      return r
    }
  }
  e.prototype.destroy_world = function (e) {
    var /* [auto-meaningful-name] */this$draw_handler
    var n = this.world_list.get(e)
    if (!n) {
      return new $_119.a("Can not find world with id " + e)
    }
    this.world_list.delete(e)
    n.destroy()
    if (this.latest_world === n) {
      this.latest_world = undefined
    }
    if (this.draw_handler && 0 === this.world_list.size) {
      this.app.get_app().ticker.remove(this.draw_handler)
      if (!(null === (this$draw_handler = this.draw_handler) || undefined === this$draw_handler)) {
        this$draw_handler.call(this, 0)
      }
    }
  }
  e.prototype.destroy_all_worlds = function () {
    var e
    var /* [auto-meaningful-name] */n$return
    try {
      for (var n = Fe(this.world_list.keys()), r = n.next(); !r.done; r = n.next()) {
        var /* [auto-meaningful-name] */r$value = r.value
        this.destroy_world(r$value)
      }
    } catch (o) {
      e = {
        error: o
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
  }
  e.prototype.get_world = function (e) {
    var t = this.world_list.get(e)
    this.latest_world = t || this.latest_world
    return t
  }
  return e
}()
var Ne = new $_268_index.Container()
Ne.bind(s.Events).to(j).inSingletonScope()
Ne.bind(s.App).to(_)
Ne.bind(s.Data).toFactory(function () {
  return function (e) {
    return new M(e)
  }
})
Ne.bind(s.Textures).toFactory(function () {
  return function (e) {
    return new X(e)
  }
})
Ne.bind(s.Transition).toFactory(function () {
  return function (e) {
    return new Z(e)
  }
})
Ne.bind(s.StageAnimation).toFactory(function () {
  return function (e) {
    return new we(e)
  }
})
Ne.bind(s.Physics).toFactory(function () {
  return function (e, t) {
    return new Pe(e, t)
  }
})
Ne.bind(s.Scene).toFactory(function (e) {
  var t = e.container.get(s.Events)
  return function (e, n, r, i, o) {
    return new ae(e, n, r, i, o, t)
  }
})
Ne.bind(s.Scenes).toFactory(function (e) {
  var t = e.container.get(s.Events)
  var n = e.container.get(s.Transition)
  var r = e.container.get(s.Scene)
  return function (e, i) {
    return new se(e, i, n, r, t)
  }
})
Ne.bind(s.Actor).toFactory(function (e) {
  return function (t) {
    var n = e.container.get(s.Events)
    var r = Object.assign({}, t, {
      events: n
    })
    return new $_520_index.a(r)
  }
})
Ne.bind(s.Actors).toFactory(function (e) {
  var t = e.container.get(s.Actor)
  return function (e, n) {
    return new ue(e, n, t)
  }
})
Ne.bind(s.Stage).to(Ae)
var Le = function () {
  function e() {
    this.loader = $_32_index.k.shared
    this.tasks = []
    this.is_loading = false
  }
  e.prototype.add = function (e) {
    this.tasks.push(e)
    if (!this.is_loading) {
      this.execute()
    }
  }
  e.prototype.get_resources = function () {
    return this.loader.resources
  }
  e.prototype.execute = function () {
    var e = this
    this.is_loading = true
    var t = this.tasks.shift()
    if (t) {
      var n = this.loader.resources[t.url]
      if (n) {
        if (t.on_success) {
          t.on_success(n)
        }
        return void this.execute()
      }
      this.loader.add(t.url).load(function (n, r) {
        var i = r[t.url]
        if (!i || i.error) {
          var o = i ? i.error : new Error("No available resource.")
          if (t.on_error) {
            t.on_error(o)
          }
          if (i) {
            delete r[t.url]
          }
        }
        if (i && !i.error && t.on_success) {
          t.on_success(i)
        }
        e.execute()
      })
    } else {
      this.is_loading = false
    }
  }
  return e
}()
export { Ne }
export { Le }
