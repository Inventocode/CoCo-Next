/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：3323__part-3
 */

"use strict"

import { o } from "./3323__part-1"
import { m, c, f, v, p, x, A, b, w, it, ht, _t, mt, ct, vt, pt, xt, gt, It, jt, Tt, Ot, zt, Nt, Jt, Xt, Zt, le, he, Be, Ae, ke, De } from "./3323__part-2"
var ze
import * as /* [auto-meaningful-name] */$$_39 from "../39"
import * as /* [auto-meaningful-name] */$$_27 from "../27"
import * as /* [auto-meaningful-name] */$$_301_225 from "../301/225"
import * as /* [auto-meaningful-name] */$$_301_203 from "../301/203"
import * as /* [auto-meaningful-name] */$$_58_index from "../58/index"
import * as /* [auto-meaningful-name] */$$_59_index from "../59/index"
var We = function t() {
  $$_27.a(this, t)
  this.mass = 0
  this.center = new It(0, 0)
  this.I = 0
}
!function (t) {
  t[t.e_unknown = -1] = "e_unknown"
  t[t.e_circleShape = 0] = "e_circleShape"
  t[t.e_edgeShape = 1] = "e_edgeShape"
  t[t.e_polygonShape = 2] = "e_polygonShape"
  t[t.e_chainShape = 3] = "e_chainShape"
  t[t.e_shapeTypeCount = 4] = "e_shapeTypeCount"
}(ze || (ze = {}))
var Qe = function () {
  function t(e, i) {
    $$_27.a(this, t)
    this.m_type = ze.e_unknown
    this.m_radius = 0
    this.m_type = e
    this.m_radius = i
  }
  $$_39.a(t, [
    {
      key: "Copy",
      value: function (t) {
        this.m_radius = t.m_radius
        return this
      }
    }, {
      key: "GetType",
      value: function () {
        return this.m_type
      }
    }
  ])
  return t
}()
var Ye = function (t) {
  $$_58_index.a(i, t)
  var e = $$_59_index.a(i)
  function i() {
    var t
    $$_27.a(this, i);
    (t = e.call(this, ze.e_edgeShape, b)).m_vertex1 = new It()
    t.m_vertex2 = new It()
    t.m_vertex0 = new It()
    t.m_vertex3 = new It()
    t.m_oneSided = false
    return t
  }
  $$_39.a(i, [
    {
      key: "SetOneSided",
      value: function (t, e, i, n) {
        this.m_vertex0.Copy(t)
        this.m_vertex1.Copy(e)
        this.m_vertex2.Copy(i)
        this.m_vertex3.Copy(n)
        this.m_oneSided = true
        return this
      }
    }, {
      key: "SetTwoSided",
      value: function (t, e) {
        this.m_vertex1.Copy(t)
        this.m_vertex2.Copy(e)
        this.m_oneSided = false
        return this
      }
    }, {
      key: "Clone",
      value: function () {
        return new i().Copy(this)
      }
    }, {
      key: "Copy",
      value: function (t) {
        $$_301_225.a($$_301_203.a(i.prototype), "Copy", this).call(this, t)
        this.m_vertex1.Copy(t.m_vertex1)
        this.m_vertex2.Copy(t.m_vertex2)
        this.m_vertex0.Copy(t.m_vertex0)
        this.m_vertex3.Copy(t.m_vertex3)
        this.m_oneSided = t.m_oneSided
        return this
      }
    }, {
      key: "GetChildCount",
      value: function () {
        return 1
      }
    }, {
      key: "TestPoint",
      value: function (t, e) {
        return false
      }
    }, {
      key: "ComputeDistance",
      value: function (t, e, n, s) {
        var r = Tt.MulXV(t, this.m_vertex1, i.ComputeDistance_s_v1)
        var o = Tt.MulXV(t, this.m_vertex2, i.ComputeDistance_s_v2)
        var a = It.SubVV(e, r, i.ComputeDistance_s_d)
        var u = It.SubVV(o, r, i.ComputeDistance_s_s)
        var l = It.DotVV(a, u)
        if (l > 0) {
          var h = It.DotVV(u, u)
          if (l > h) {
            It.SubVV(e, o, a)
          } else {
            a.SelfMulSub(l / h, u)
          }
        }
        n.Copy(a)
        return n.Normalize()
      }
    }, {
      key: "RayCast",
      value: function (t, e, n, s) {
        var r = Tt.MulTXV(n, e.p1, i.RayCast_s_p1)
        var o = Tt.MulTXV(n, e.p2, i.RayCast_s_p2)
        var a = It.SubVV(o, r, i.RayCast_s_d)
        var /* [auto-meaningful-name] */this$m_vertex1 = this.m_vertex1
        var /* [auto-meaningful-name] */this$m_vertex2 = this.m_vertex2
        var h = It.SubVV(this$m_vertex2, this$m_vertex1, i.RayCast_s_e)
        var _ = t.normal.Set(h.y, -h.x).SelfNormalize()
        var m = It.DotVV(_, It.SubVV(this$m_vertex1, r, It.s_t0))
        if (this.m_oneSided && m > 0) {
          return false
        }
        var c = It.DotVV(_, a)
        if (0 === c) {
          return false
        }
        var f = m / c
        if (f < 0 || e.maxFraction < f) {
          return false
        }
        var d = It.AddVMulSV(r, f, a, i.RayCast_s_q)
        var v = It.SubVV(this$m_vertex2, this$m_vertex1, i.RayCast_s_r)
        var y = It.DotVV(v, v)
        if (0 === y) {
          return false
        }
        var p = It.DotVV(It.SubVV(d, this$m_vertex1, It.s_t0), v) / y
        return !(p < 0 || 1 < p) && (t.fraction = f, jt.MulRV(n.q, t.normal, t.normal), m > 0 && t.normal.SelfNeg(), true)
      }
    }, {
      key: "ComputeAABB",
      value: function (t, e, n) {
        var s = Tt.MulXV(e, this.m_vertex1, i.ComputeAABB_s_v1)
        var r = Tt.MulXV(e, this.m_vertex2, i.ComputeAABB_s_v2)
        It.MinV(s, r, t.lowerBound)
        It.MaxV(s, r, t.upperBound)
        var /* [auto-meaningful-name] */this$m_radius = this.m_radius
        t.lowerBound.SelfSubXY(this$m_radius, this$m_radius)
        t.upperBound.SelfAddXY(this$m_radius, this$m_radius)
      }
    }, {
      key: "ComputeMass",
      value: function (t, e) {
        t.mass = 0
        It.MidVV(this.m_vertex1, this.m_vertex2, t.center)
        t.I = 0
      }
    }, {
      key: "SetupDistanceProxy",
      value: function (t, e) {
        t.m_vertices = t.m_buffer
        t.m_vertices[0].Copy(this.m_vertex1)
        t.m_vertices[1].Copy(this.m_vertex2)
        t.m_count = 2
        t.m_radius = this.m_radius
      }
    }, {
      key: "ComputeSubmergedArea",
      value: function (t, e, i, n) {
        n.SetZero()
        return 0
      }
    }, {
      key: "Dump",
      value: function (t) {
        t("    const shape: b2EdgeShape = new b2EdgeShape();\n")
        t("    shape.m_radius = %.15f;\n", this.m_radius)
        t("    shape.m_vertex0.Set(%.15f, %.15f);\n", this.m_vertex0.x, this.m_vertex0.y)
        t("    shape.m_vertex1.Set(%.15f, %.15f);\n", this.m_vertex1.x, this.m_vertex1.y)
        t("    shape.m_vertex2.Set(%.15f, %.15f);\n", this.m_vertex2.x, this.m_vertex2.y)
        t("    shape.m_vertex3.Set(%.15f, %.15f);\n", this.m_vertex3.x, this.m_vertex3.y)
        t("    shape.m_oneSided = %s;\n", this.m_oneSided)
      }
    }
  ])
  return i
}(Qe)
Ye.ComputeDistance_s_v1 = new It()
Ye.ComputeDistance_s_v2 = new It()
Ye.ComputeDistance_s_d = new It()
Ye.ComputeDistance_s_s = new It()
Ye.RayCast_s_p1 = new It()
Ye.RayCast_s_p2 = new It()
Ye.RayCast_s_d = new It()
Ye.RayCast_s_e = new It()
Ye.RayCast_s_q = new It()
Ye.RayCast_s_r = new It()
Ye.ComputeAABB_s_v1 = new It()
Ye.ComputeAABB_s_v2 = new It()
var Ke = function (t) {
  $$_58_index.a(i, t)
  var e = $$_59_index.a(i)
  function i() {
    var t
    $$_27.a(this, i);
    (t = e.call(this, ze.e_chainShape, b)).m_vertices = []
    t.m_count = 0
    t.m_prevVertex = new It()
    t.m_nextVertex = new It()
    return t
  }
  $$_39.a(i, [
    {
      key: "CreateLoop",
      value: function () {
        for (var /* [auto-meaningful-name] */arguments$length = arguments.length, e = new Array(arguments$length), i = 0; i < arguments$length; i++) {
          e[i] = arguments[i]
        }
        if ("number" === typeof e[0][0]) {
          var n = e[0]
          if (n.length % 2 !== 0) {
            throw new Error()
          }
          return this._CreateLoop(function (t) {
            return {
              x: n[2 * t],
              y: n[2 * t + 1]
            }
          }, n.length / 2)
        }
        var s = e[0]
        var r = e[1] || s.length
        return this._CreateLoop(function (t) {
          return s[t]
        }, r)
      }
    }, {
      key: "_CreateLoop",
      value: function (t, e) {
        if (e < 3) {
          return this
        }
        this.m_count = e + 1
        this.m_vertices = It.MakeArray(this.m_count)
        for (var i = 0; i < e; ++i) {
          this.m_vertices[i].Copy(t(i))
        }
        this.m_vertices[e].Copy(this.m_vertices[0])
        this.m_prevVertex.Copy(this.m_vertices[this.m_count - 2])
        this.m_nextVertex.Copy(this.m_vertices[1])
        return this
      }
    }, {
      key: "CreateChain",
      value: function () {
        for (var /* [auto-meaningful-name] */arguments$length = arguments.length, e = new Array(arguments$length), i = 0; i < arguments$length; i++) {
          e[i] = arguments[i]
        }
        if ("number" === typeof e[0][0]) {
          var n = e[0]
          var s = e[1]
          var r = e[2]
          if (n.length % 2 !== 0) {
            throw new Error()
          }
          return this._CreateChain(function (t) {
            return {
              x: n[2 * t],
              y: n[2 * t + 1]
            }
          }, n.length / 2, s, r)
        }
        var o = e[0]
        var a = e[1] || o.length
        var u = e[2]
        var l = e[3]
        return this._CreateChain(function (t) {
          return o[t]
        }, a, u, l)
      }
    }, {
      key: "_CreateChain",
      value: function (t, e, i, n) {
        this.m_count = e
        this.m_vertices = It.MakeArray(e)
        for (var s = 0; s < e; ++s) {
          this.m_vertices[s].Copy(t(s))
        }
        this.m_prevVertex.Copy(i)
        this.m_nextVertex.Copy(n)
        return this
      }
    }, {
      key: "Clone",
      value: function () {
        return new i().Copy(this)
      }
    }, {
      key: "Copy",
      value: function (t) {
        $$_301_225.a($$_301_203.a(i.prototype), "Copy", this).call(this, t)
        this._CreateChain(function (e) {
          return t.m_vertices[e]
        }, t.m_count, t.m_prevVertex, t.m_nextVertex)
        this.m_prevVertex.Copy(t.m_prevVertex)
        this.m_nextVertex.Copy(t.m_nextVertex)
        return this
      }
    }, {
      key: "GetChildCount",
      value: function () {
        return this.m_count - 1
      }
    }, {
      key: "GetChildEdge",
      value: function (t, e) {
        t.m_radius = this.m_radius
        t.m_vertex1.Copy(this.m_vertices[e])
        t.m_vertex2.Copy(this.m_vertices[e + 1])
        t.m_oneSided = true
        if (e > 0) {
          t.m_vertex0.Copy(this.m_vertices[e - 1])
        } else {
          t.m_vertex0.Copy(this.m_prevVertex)
        }
        if (e < this.m_count - 2) {
          t.m_vertex3.Copy(this.m_vertices[e + 2])
        } else {
          t.m_vertex3.Copy(this.m_nextVertex)
        }
      }
    }, {
      key: "TestPoint",
      value: function (t, e) {
        return false
      }
    }, {
      key: "ComputeDistance",
      value: function (t, e, n, s) {
        var /* [auto-meaningful-name] */i$ComputeDistance_s_edgeShape = i.ComputeDistance_s_edgeShape
        this.GetChildEdge(i$ComputeDistance_s_edgeShape, s)
        return i$ComputeDistance_s_edgeShape.ComputeDistance(t, e, n, 0)
      }
    }, {
      key: "RayCast",
      value: function (t, e, n, s) {
        var /* [auto-meaningful-name] */i$RayCast_s_edgeShape = i.RayCast_s_edgeShape
        i$RayCast_s_edgeShape.m_vertex1.Copy(this.m_vertices[s])
        i$RayCast_s_edgeShape.m_vertex2.Copy(this.m_vertices[(s + 1) % this.m_count])
        return i$RayCast_s_edgeShape.RayCast(t, e, n, 0)
      }
    }, {
      key: "ComputeAABB",
      value: function (t, e, n) {
        var s = this.m_vertices[n]
        var r = this.m_vertices[(n + 1) % this.m_count]
        var o = Tt.MulXV(e, s, i.ComputeAABB_s_v1)
        var a = Tt.MulXV(e, r, i.ComputeAABB_s_v2)
        var u = It.MinV(o, a, i.ComputeAABB_s_lower)
        var l = It.MaxV(o, a, i.ComputeAABB_s_upper)
        t.lowerBound.x = u.x - this.m_radius
        t.lowerBound.y = u.y - this.m_radius
        t.upperBound.x = l.x + this.m_radius
        t.upperBound.y = l.y + this.m_radius
      }
    }, {
      key: "ComputeMass",
      value: function (t, e) {
        t.mass = 0
        t.center.SetZero()
        t.I = 0
      }
    }, {
      key: "SetupDistanceProxy",
      value: function (t, e) {
        t.m_vertices = t.m_buffer
        t.m_vertices[0].Copy(this.m_vertices[e])
        if (e + 1 < this.m_count) {
          t.m_vertices[1].Copy(this.m_vertices[e + 1])
        } else {
          t.m_vertices[1].Copy(this.m_vertices[0])
        }
        t.m_count = 2
        t.m_radius = this.m_radius
      }
    }, {
      key: "ComputeSubmergedArea",
      value: function (t, e, i, n) {
        n.SetZero()
        return 0
      }
    }, {
      key: "Dump",
      value: function (t) {
        t("    const shape: b2ChainShape = new b2ChainShape();\n")
        t("    const vs: b2Vec2[] = [];\n")
        for (var e = 0; e < this.m_count; ++e) {
          t("    vs[%d] = new bVec2(%.15f, %.15f);\n", e, this.m_vertices[e].x, this.m_vertices[e].y)
        }
        t("    shape.CreateChain(vs, %d);\n", this.m_count)
        t("    shape.m_prevVertex.Set(%.15f, %.15f);\n", this.m_prevVertex.x, this.m_prevVertex.y)
        t("    shape.m_nextVertex.Set(%.15f, %.15f);\n", this.m_nextVertex.x, this.m_nextVertex.y)
      }
    }
  ])
  return i
}(Qe)
Ke.ComputeDistance_s_edgeShape = new Ye()
Ke.RayCast_s_edgeShape = new Ye()
Ke.ComputeAABB_s_v1 = new It()
Ke.ComputeAABB_s_v2 = new It()
Ke.ComputeAABB_s_lower = new It()
Ke.ComputeAABB_s_upper = new It()
var He = function (t) {
  $$_58_index.a(i, t)
  var e = $$_59_index.a(i)
  function i() {
    var t
    var s = arguments.length > 0 && undefined !== arguments[0] ? arguments[0] : 0
    $$_27.a(this, i);
    (t = e.call(this, ze.e_circleShape, s)).m_p = new It()
    return t
  }
  $$_39.a(i, [
    {
      key: "Set",
      value: function (t) {
        var e = arguments.length > 1 && undefined !== arguments[1] ? arguments[1] : this.m_radius
        this.m_p.Copy(t)
        this.m_radius = e
        return this
      }
    }, {
      key: "Clone",
      value: function () {
        return new i().Copy(this)
      }
    }, {
      key: "Copy",
      value: function (t) {
        $$_301_225.a($$_301_203.a(i.prototype), "Copy", this).call(this, t)
        this.m_p.Copy(t.m_p)
        return this
      }
    }, {
      key: "GetChildCount",
      value: function () {
        return 1
      }
    }, {
      key: "TestPoint",
      value: function (t, e) {
        var n = Tt.MulXV(t, this.m_p, i.TestPoint_s_center)
        var s = It.SubVV(e, n, i.TestPoint_s_d)
        return It.DotVV(s, s) <= vt(this.m_radius)
      }
    }, {
      key: "ComputeDistance",
      value: function (t, e, n, s) {
        var r = Tt.MulXV(t, this.m_p, i.ComputeDistance_s_center)
        It.SubVV(e, r, n)
        return n.Normalize() - this.m_radius
      }
    }, {
      key: "RayCast",
      value: function (t, e, n, s) {
        var r = Tt.MulXV(n, this.m_p, i.RayCast_s_position)
        var o = It.SubVV(e.p1, r, i.RayCast_s_s)
        var a = It.DotVV(o, o) - vt(this.m_radius)
        var u = It.SubVV(e.p2, e.p1, i.RayCast_s_r)
        var l = It.DotVV(o, u)
        var h = It.DotVV(u, u)
        var _ = l * l - h * a
        if (_ < 0 || h < f) {
          return false
        }
        var m = -(l + pt(_))
        return 0 <= m && m <= e.maxFraction * h && (m /= h, t.fraction = m, It.AddVMulSV(o, m, u, t.normal).SelfNormalize(), true)
      }
    }, {
      key: "ComputeAABB",
      value: function (t, e, n) {
        var s = Tt.MulXV(e, this.m_p, i.ComputeAABB_s_p)
        t.lowerBound.Set(s.x - this.m_radius, s.y - this.m_radius)
        t.upperBound.Set(s.x + this.m_radius, s.y + this.m_radius)
      }
    }, {
      key: "ComputeMass",
      value: function (t, e) {
        var i = vt(this.m_radius)
        t.mass = e * v * i
        t.center.Copy(this.m_p)
        t.I = t.mass * (.5 * i + It.DotVV(this.m_p, this.m_p))
      }
    }, {
      key: "SetupDistanceProxy",
      value: function (t, e) {
        t.m_vertices = t.m_buffer
        t.m_vertices[0].Copy(this.m_p)
        t.m_count = 1
        t.m_radius = this.m_radius
      }
    }, {
      key: "ComputeSubmergedArea",
      value: function (t, e, i, n) {
        var s = Tt.MulXV(i, this.m_p, new It())
        var r = -(It.DotVV(t, s) - e)
        if (r < -this.m_radius + f) {
          return 0
        }
        if (r > this.m_radius) {
          n.Copy(s)
          return v * this.m_radius * this.m_radius
        }
        var o = this.m_radius * this.m_radius
        var a = r * r
        var u = o * (gt(r / this.m_radius) + v / 2) + r * pt(o - a)
        var l = -2 / 3 * xt(o - a, 1.5) / u
        n.x = s.x + t.x * l
        n.y = s.y + t.y * l
        return u
      }
    }, {
      key: "Dump",
      value: function (t) {
        t("    const shape: b2CircleShape = new b2CircleShape();\n")
        t("    shape.m_radius = %.15f;\n", this.m_radius)
        t("    shape.m_p.Set(%.15f, %.15f);\n", this.m_p.x, this.m_p.y)
      }
    }
  ])
  return i
}(Qe)
He.TestPoint_s_center = new It()
He.TestPoint_s_d = new It()
He.ComputeDistance_s_center = new It()
He.RayCast_s_position = new It()
He.RayCast_s_s = new It()
He.RayCast_s_r = new It()
He.ComputeAABB_s_p = new It()
var $e = new It()
var ti = new It()
function ei(t, e, i, n, s) {
  t.pointCount = 0
  var r = Tt.MulXV(i, e.m_p, $e)
  var o = Tt.MulXV(s, n.m_p, ti)
  var a = It.DistanceSquaredVV(r, o)
  var u = e.m_radius + n.m_radius
  if (!(a > u * u)) {
    t.type = Be.e_circles
    t.localPoint.Copy(e.m_p)
    t.localNormal.SetZero()
    t.pointCount = 1
    t.points[0].localPoint.Copy(n.m_p)
    t.points[0].id.key = 0
  }
}
var ii = new It()
var ni = new It()
var si = new It()
function ri(t, e, i, n, s) {
  t.pointCount = 0
  for (var r = Tt.MulXV(s, n.m_p, ii), o = Tt.MulTXV(i, r, ni), a = 0, u = -c, l = e.m_radius + n.m_radius, /* [auto-meaningful-name] */e$m_count = e.m_count, /* [auto-meaningful-name] */e$m_vertices = e.m_vertices, /* [auto-meaningful-name] */e$m_normals = e.m_normals, d = 0; d < e$m_count; ++d) {
    var v = It.DotVV(e$m_normals[d], It.SubVV(o, e$m_vertices[d], It.s_t0))
    if (v > l) {
      return
    }
    if (v > u) {
      u = v
      a = d
    }
  }
  var y = a
  var p = (y + 1) % e$m_count
  var x = e$m_vertices[y]
  var B = e$m_vertices[p]
  if (u < f) {
    t.pointCount = 1
    t.type = Be.e_faceA
    t.localNormal.Copy(e$m_normals[a])
    It.MidVV(x, B, t.localPoint)
    t.points[0].localPoint.Copy(n.m_p)
    return void (t.points[0].id.key = 0)
  }
  var S = It.DotVV(It.SubVV(o, x, It.s_t0), It.SubVV(B, x, It.s_t1))
  var A = It.DotVV(It.SubVV(o, B, It.s_t0), It.SubVV(x, B, It.s_t1))
  if (S <= 0) {
    if (It.DistanceSquaredVV(o, x) > l * l) {
      return
    }
    t.pointCount = 1
    t.type = Be.e_faceA
    It.SubVV(o, x, t.localNormal).SelfNormalize()
    t.localPoint.Copy(x)
    t.points[0].localPoint.Copy(n.m_p)
    t.points[0].id.key = 0
  } else if (A <= 0) {
    if (It.DistanceSquaredVV(o, B) > l * l) {
      return
    }
    t.pointCount = 1
    t.type = Be.e_faceA
    It.SubVV(o, B, t.localNormal).SelfNormalize()
    t.localPoint.Copy(B)
    t.points[0].localPoint.Copy(n.m_p)
    t.points[0].id.key = 0
  } else {
    var C = It.MidVV(x, B, si)
    if (It.DotVV(It.SubVV(o, C, It.s_t1), e$m_normals[y]) > l) {
      return
    }
    t.pointCount = 1
    t.type = Be.e_faceA
    t.localNormal.Copy(e$m_normals[y]).SelfNormalize()
    t.localPoint.Copy(C)
    t.points[0].localPoint.Copy(n.m_p)
    t.points[0].id.key = 0
  }
}
var oi
var ai = new It()
var ui = new It()
var li = new It()
var hi = new It()
var _i = new It()
var mi = new It()
var ci = new It()
var fi = new Ae()
function di(t, e, i, n, s) {
  t.pointCount = 0
  var r = Tt.MulTXV(i, Tt.MulXV(s, n.m_p, It.s_t0), ai)
  var /* [auto-meaningful-name] */e$m_vertex1 = e.m_vertex1
  var /* [auto-meaningful-name] */e$m_vertex2 = e.m_vertex2
  var u = It.SubVV(e$m_vertex2, e$m_vertex1, ui)
  var l = ci.Set(u.y, -u.x)
  var h = It.DotVV(l, It.SubVV(r, e$m_vertex1, It.s_t0))
  if (!(e.m_oneSided && h < 0)) {
    var _ = It.DotVV(u, It.SubVV(e$m_vertex2, r, It.s_t0))
    var m = It.DotVV(u, It.SubVV(r, e$m_vertex1, It.s_t0))
    var c = e.m_radius + n.m_radius
    var f = fi
    f.cf.indexB = 0
    f.cf.typeB = he.e_vertex
    if (m <= 0) {
      var d = e$m_vertex1
      var v = It.SubVV(r, d, li)
      if (It.DotVV(v, v) > c * c) {
        return
      }
      if (e.m_oneSided) {
        var /* [auto-meaningful-name] */e$m_vertex0 = e.m_vertex0
        var p = e$m_vertex1
        var x = It.SubVV(p, e$m_vertex0, hi)
        if (It.DotVV(x, It.SubVV(p, r, It.s_t0)) > 0) {
          return
        }
      }
      f.cf.indexA = 0
      f.cf.typeA = he.e_vertex
      t.pointCount = 1
      t.type = Be.e_circles
      t.localNormal.SetZero()
      t.localPoint.Copy(d)
      t.points[0].id.Copy(f)
      return void t.points[0].localPoint.Copy(n.m_p)
    }
    if (_ <= 0) {
      var B = e$m_vertex2
      var S = It.SubVV(r, B, li)
      if (It.DotVV(S, S) > c * c) {
        return
      }
      if (e.m_oneSided) {
        var /* [auto-meaningful-name] */e$m_vertex3 = e.m_vertex3
        var C = e$m_vertex2
        var b = It.SubVV(e$m_vertex3, C, _i)
        if (It.DotVV(b, It.SubVV(r, C, It.s_t0)) > 0) {
          return
        }
      }
      f.cf.indexA = 1
      f.cf.typeA = he.e_vertex
      t.pointCount = 1
      t.type = Be.e_circles
      t.localNormal.SetZero()
      t.localPoint.Copy(B)
      t.points[0].id.Copy(f)
      return void t.points[0].localPoint.Copy(n.m_p)
    }
    var g = It.DotVV(u, u)
    var V = mi
    V.x = 1 / g * (_ * e$m_vertex1.x + m * e$m_vertex2.x)
    V.y = 1 / g * (_ * e$m_vertex1.y + m * e$m_vertex2.y)
    var w = It.SubVV(r, V, li)
    if (!(It.DotVV(w, w) > c * c)) {
      if (h < 0) {
        l.Set(-l.x, -l.y)
      }
      l.Normalize()
      f.cf.indexA = 0
      f.cf.typeA = he.e_face
      t.pointCount = 1
      t.type = Be.e_faceA
      t.localNormal.Copy(l)
      t.localPoint.Copy(e$m_vertex1)
      t.points[0].id.Copy(f)
      t.points[0].localPoint.Copy(n.m_p)
    }
  }
}
!function (t) {
  t[t.e_unknown = 0] = "e_unknown"
  t[t.e_edgeA = 1] = "e_edgeA"
  t[t.e_edgeB = 2] = "e_edgeB"
}(oi || (oi = {}))
var vi = function t() {
  $$_27.a(this, t)
  this.normal = new It()
  this.type = oi.e_unknown
  this.index = 0
  this.separation = 0
}
var yi = new vi()
var pi = [new It(), new It()]
var xi = new vi()
var Bi = new It()
var Si = new Tt()
var Ai = new It()
var Ci = new It()
var bi = new It()
var gi = new It()
var Vi = new It()
var wi = new It()
var ki = new It()
var Mi = new function t() {
  $$_27.a(this, t)
  this.vertices = []
  this.normals = []
  this.count = 0
}()
var Pi = new function t() {
  $$_27.a(this, t)
  this.i1 = 0
  this.i2 = 0
  this.v1 = new It()
  this.v2 = new It()
  this.normal = new It()
  this.sideNormal1 = new It()
  this.sideOffset1 = 0
  this.sideNormal2 = new It()
  this.sideOffset2 = 0
}()
var Ii = [new ke(), new ke()]
var Gi = [new ke(), new ke()]
var Di = [new ke(), new ke()]
function Fi(t, e, i, n, s) {
  t.pointCount = 0
  var r = Tt.MulTXX(i, s, Si)
  var o = Tt.MulXV(r, n.m_centroid, Ai)
  var /* [auto-meaningful-name] */e$m_vertex1 = e.m_vertex1
  var /* [auto-meaningful-name] */e$m_vertex2 = e.m_vertex2
  var l = It.SubVV(e$m_vertex2, e$m_vertex1, Ci)
  l.Normalize()
  var h = bi.Set(l.y, -l.x)
  var _ = It.DotVV(h, It.SubVV(o, e$m_vertex1, It.s_t0))
  var /* [auto-meaningful-name] */e$m_oneSided = e.m_oneSided
  if (!(e$m_oneSided && _ < 0)) {
    var c = Mi
    c.count = n.m_count
    for (var f = 0; f < n.m_count; ++f) {
      if (c.vertices.length <= f) {
        c.vertices.push(new It())
      }
      if (c.normals.length <= f) {
        c.normals.push(new It())
      }
      Tt.MulXV(r, n.m_vertices[f], c.vertices[f])
      jt.MulRV(r.q, n.m_normals[f], c.normals[f])
    }
    var d = n.m_radius + e.m_radius
    var v = function (t, e, i) {
      var n = yi
      n.type = oi.e_edgeA
      n.index = -1
      n.separation = -Number.MAX_VALUE
      n.normal.SetZero()
      var s = pi
      s[0].Copy(i)
      s[1].Copy(i).SelfNeg()
      for (var r = 0; r < 2; ++r) {
        for (var /* [auto-meaningful-name] */Number$MAX_VALUE = Number.MAX_VALUE, a = 0; a < t.count; ++a) {
          var u = It.DotVV(s[r], It.SubVV(t.vertices[a], e, It.s_t0))
          if (u < Number$MAX_VALUE) {
            Number$MAX_VALUE = u
          }
        }
        if (Number$MAX_VALUE > n.separation) {
          n.index = r
          n.separation = Number$MAX_VALUE
          n.normal.Copy(s[r])
        }
      }
      return n
    }(c, e$m_vertex1, h)
    if (!(v.separation > d)) {
      var y = function (t, e, i) {
        var n = xi
        n.type = oi.e_unknown
        n.index = -1
        n.separation = -Number.MAX_VALUE
        n.normal.SetZero()
        for (var s = 0; s < t.count; ++s) {
          var r = It.NegV(t.normals[s], Bi)
          var o = _t(It.DotVV(r, It.SubVV(t.vertices[s], e, It.s_t0)), It.DotVV(r, It.SubVV(t.vertices[s], i, It.s_t0)))
          if (o > n.separation) {
            n.type = oi.e_edgeB
            n.index = s
            n.separation = o
            n.normal.Copy(r)
          }
        }
        return n
      }(c, e$m_vertex1, e$m_vertex2)
      if (!(y.separation > d)) {
        var p
        p = y.separation - d > .98 * (v.separation - d) + .001 ? y : v
        if (e$m_oneSided) {
          var B = It.SubVV(e$m_vertex1, e.m_vertex0, gi)
          B.Normalize()
          var S = Vi.Set(B.y, -B.x)
          var A = It.CrossVV(B, l) >= 0
          var C = It.SubVV(e.m_vertex3, e$m_vertex2, wi)
          C.Normalize()
          var b = ki.Set(C.y, -C.x)
          var g = It.CrossVV(l, C) >= 0
          if (It.DotVV(p.normal, l) <= 0) {
            if (A) {
              if (It.CrossVV(p.normal, S) > .1) {
                return
              }
            } else {
              p = v
            }
          } else if (g) {
            if (It.CrossVV(b, p.normal) > .1) {
              return
            }
          } else {
            p = v
          }
        }
        var V = Ii
        var w = Pi
        if (p.type === oi.e_edgeA) {
          t.type = Be.e_faceA
          for (var k = 0, M = It.DotVV(p.normal, c.normals[0]), P = 1; P < c.count; ++P) {
            var I = It.DotVV(p.normal, c.normals[P])
            if (I < M) {
              M = I
              k = P
            }
          }
          var G = k
          var D = G + 1 < c.count ? G + 1 : 0
          V[0].v.Copy(c.vertices[G])
          V[0].id.cf.indexA = 0
          V[0].id.cf.indexB = G
          V[0].id.cf.typeA = he.e_face
          V[0].id.cf.typeB = he.e_vertex
          V[1].v.Copy(c.vertices[D])
          V[1].id.cf.indexA = 0
          V[1].id.cf.indexB = D
          V[1].id.cf.typeA = he.e_face
          V[1].id.cf.typeB = he.e_vertex
          w.i1 = 0
          w.i2 = 1
          w.v1.Copy(e$m_vertex1)
          w.v2.Copy(e$m_vertex2)
          w.normal.Copy(p.normal)
          w.sideNormal1.Copy(l).SelfNeg()
          w.sideNormal2.Copy(l)
        } else {
          t.type = Be.e_faceB
          V[0].v.Copy(e$m_vertex2)
          V[0].id.cf.indexA = 1
          V[0].id.cf.indexB = p.index
          V[0].id.cf.typeA = he.e_vertex
          V[0].id.cf.typeB = he.e_face
          V[1].v.Copy(e$m_vertex1)
          V[1].id.cf.indexA = 0
          V[1].id.cf.indexB = p.index
          V[1].id.cf.typeA = he.e_vertex
          V[1].id.cf.typeB = he.e_face
          w.i1 = p.index
          w.i2 = w.i1 + 1 < c.count ? w.i1 + 1 : 0
          w.v1.Copy(c.vertices[w.i1])
          w.v2.Copy(c.vertices[w.i2])
          w.normal.Copy(c.normals[w.i1])
          w.sideNormal1.Set(w.normal.y, -w.normal.x)
          w.sideNormal2.Copy(w.sideNormal1).SelfNeg()
        }
        w.sideOffset1 = It.DotVV(w.sideNormal1, w.v1)
        w.sideOffset2 = It.DotVV(w.sideNormal2, w.v2)
        var F = Gi
        var L = Di
        if (!(De(F, V, w.sideNormal1, w.sideOffset1, w.i1) < x) && !(De(L, F, w.sideNormal2, w.sideOffset2, w.i2) < x)) {
          if (p.type === oi.e_edgeA) {
            t.localNormal.Copy(w.normal)
            t.localPoint.Copy(w.v1)
          } else {
            t.localNormal.Copy(n.m_normals[w.i1])
            t.localPoint.Copy(n.m_vertices[w.i1])
          }
          for (var R = 0, j = 0; j < x; ++j) {
            if (It.DotVV(w.normal, It.SubVV(L[j].v, w.v1, It.s_t0)) <= d) {
              var T = t.points[R]
              if (p.type === oi.e_edgeA) {
                Tt.MulTXV(r, L[j].v, T.localPoint)
                T.id.Copy(L[j].id)
              } else {
                T.localPoint.Copy(L[j].v)
                T.id.cf.typeA = L[j].id.cf.typeB
                T.id.cf.typeB = L[j].id.cf.typeA
                T.id.cf.indexA = L[j].id.cf.indexB
                T.id.cf.indexB = L[j].id.cf.indexA
              }
              ++R
            }
          }
          t.pointCount = R
        }
      }
    }
  }
}
var Li = new Tt()
var Ri = new It()
var ji = new It()
function Ti(t, e, i, n, s) {
  for (var /* [auto-meaningful-name] */e$m_count = e.m_count, /* [auto-meaningful-name] */n$m_count = n.m_count, /* [auto-meaningful-name] */e$m_normals = e.m_normals, /* [auto-meaningful-name] */e$m_vertices = e.m_vertices, /* [auto-meaningful-name] */n$m_vertices = n.m_vertices, h = Tt.MulTXX(s, i, Li), _ = 0, m = -c, f = 0; f < e$m_count; ++f) {
    for (var d = jt.MulRV(h.q, e$m_normals[f], Ri), v = Tt.MulXV(h, e$m_vertices[f], ji), y = c, p = 0; p < n$m_count; ++p) {
      var x = It.DotVV(d, It.SubVV(n$m_vertices[p], v, It.s_t0))
      if (x < y) {
        y = x
      }
    }
    if (y > m) {
      m = y
      _ = f
    }
  }
  t[0] = _
  return m
}
var Oi = new It()
var qi = [new ke(), new ke()]
var zi = [new ke(), new ke()]
var Ei = [new ke(), new ke()]
var Ni = [0]
var Ji = [0]
var Xi = new It()
var Zi = new It()
var Ui = new It()
var Wi = new It()
var Qi = new It()
var Yi = new It()
var Ki = new It()
var Hi = new It()
function $i(t, e, i, n, s) {
  t.pointCount = 0
  var r = e.m_radius + n.m_radius
  var o = Ni
  o[0] = 0
  var a = Ti(o, e, i, n, s)
  if (!(a > r)) {
    var u = Ji
    u[0] = 0
    var l = Ti(u, n, s, e, i)
    if (!(l > r)) {
      var h
      var _
      var m
      var f
      var d = 0
      var v = 0
      if (l > a + .1 * A) {
        h = n
        _ = e
        m = s
        f = i
        d = u[0]
        t.type = Be.e_faceB
        v = 1
      } else {
        h = e
        _ = n
        m = i
        f = s
        d = o[0]
        t.type = Be.e_faceA
        v = 0
      }
      var y = qi
      !function (t, e, i, n, s, r) {
        for (var /* [auto-meaningful-name] */e$m_normals = e.m_normals, /* [auto-meaningful-name] */s$m_count = s.m_count, /* [auto-meaningful-name] */s$m_vertices = s.m_vertices, /* [auto-meaningful-name] */s$m_normals = s.m_normals, h = jt.MulTRV(r.q, jt.MulRV(i.q, e$m_normals[n], It.s_t0), Oi), _ = 0, m = c, f = 0; f < s$m_count; ++f) {
          var d = It.DotVV(h, s$m_normals[f])
          if (d < m) {
            m = d
            _ = f
          }
        }
        var v = _
        var y = v + 1 < s$m_count ? v + 1 : 0
        var p = t[0]
        Tt.MulXV(r, s$m_vertices[v], p.v)
        var /* [auto-meaningful-name] */p$id$cf = p.id.cf
        p$id$cf.indexA = n
        p$id$cf.indexB = v
        p$id$cf.typeA = he.e_face
        p$id$cf.typeB = he.e_vertex
        var B = t[1]
        Tt.MulXV(r, s$m_vertices[y], B.v)
        var /* [auto-meaningful-name] */B$id$cf = B.id.cf
        B$id$cf.indexA = n
        B$id$cf.indexB = y
        B$id$cf.typeA = he.e_face
        B$id$cf.typeB = he.e_vertex
      }(y, h, m, d, _, f)
      var /* [auto-meaningful-name] */h$m_count = h.m_count
      var /* [auto-meaningful-name] */h$m_vertices = h.m_vertices
      var S = d
      var C = d + 1 < h$m_count ? d + 1 : 0
      var b = h$m_vertices[S]
      var g = h$m_vertices[C]
      var V = It.SubVV(g, b, Xi)
      V.Normalize()
      var w = It.CrossVOne(V, Zi)
      var k = It.MidVV(b, g, Ui)
      var M = jt.MulRV(m.q, V, Qi)
      var P = It.CrossVOne(M, Wi)
      var I = Tt.MulXV(m, b, Ki)
      var G = Tt.MulXV(m, g, Hi)
      var D = It.DotVV(P, I)
      var F = -It.DotVV(M, I) + r
      var L = It.DotVV(M, G) + r
      var R = zi
      var j = Ei
      if (!(De(R, y, It.NegV(M, Yi), F, S) < 2) && !(De(j, R, M, L, C) < 2)) {
        t.localNormal.Copy(w)
        t.localPoint.Copy(k)
        for (var T = 0, O = 0; O < x; ++O) {
          var q = j[O]
          if (It.DotVV(P, q.v) - D <= r) {
            var z = t.points[T]
            Tt.MulTXV(f, q.v, z.localPoint)
            z.id.Copy(q.id)
            if (v) {
              var /* [auto-meaningful-name] */z$id$cf = z.id.cf
              z.id.cf.indexA = z$id$cf.indexB
              z.id.cf.indexB = z$id$cf.indexA
              z.id.cf.typeA = z$id$cf.typeB
              z.id.cf.typeB = z$id$cf.typeA
            }
            ++T
          }
        }
        t.pointCount = T
      }
    }
  }
}
var tn = function (t) {
  $$_58_index.a(i, t)
  var e = $$_59_index.a(i)
  function i() {
    var t
    $$_27.a(this, i);
    (t = e.call(this, ze.e_polygonShape, b)).m_centroid = new It(0, 0)
    t.m_vertices = []
    t.m_normals = []
    t.m_count = 0
    return t
  }
  $$_39.a(i, [
    {
      key: "Clone",
      value: function () {
        return new i().Copy(this)
      }
    }, {
      key: "Copy",
      value: function (t) {
        $$_301_225.a($$_301_203.a(i.prototype), "Copy", this).call(this, t)
        this.m_centroid.Copy(t.m_centroid)
        this.m_count = t.m_count
        this.m_vertices = It.MakeArray(this.m_count)
        this.m_normals = It.MakeArray(this.m_count)
        for (var e = 0; e < this.m_count; ++e) {
          this.m_vertices[e].Copy(t.m_vertices[e])
          this.m_normals[e].Copy(t.m_normals[e])
        }
        return this
      }
    }, {
      key: "GetChildCount",
      value: function () {
        return 1
      }
    }, {
      key: "Set",
      value: function () {
        for (var /* [auto-meaningful-name] */arguments$length = arguments.length, e = new Array(arguments$length), i = 0; i < arguments$length; i++) {
          e[i] = arguments[i]
        }
        if ("number" === typeof e[0][0]) {
          var n = e[0]
          if (n.length % 2 !== 0) {
            throw new Error()
          }
          return this._Set(function (t) {
            return {
              x: n[2 * t],
              y: n[2 * t + 1]
            }
          }, n.length / 2)
        }
        var s = e[0]
        var r = e[1] || s.length
        return this._Set(function (t) {
          return s[t]
        }, r)
      }
    }, {
      key: "_Set",
      value: function (t, e) {
        if (e < 3) {
          return this.SetAsBox(1, 1)
        }
        for (var n = e, s = [], r = 0; r < n; ++r) {
          for (var o = t(r), a = true, u = 0; u < s.length; ++u) {
            if (It.DistanceSquaredVV(o, s[u]) < .5 * A * (.5 * A)) {
              a = false
              break
            }
          }
          if (a) {
            s.push(o)
          }
        }
        if ((n = s.length) < 3) {
          return this.SetAsBox(1, 1)
        }
        for (var l = 0, h = s[0].x, _ = 1; _ < n; ++_) {
          var m = s[_].x
          if (m > h || m === h && s[_].y < s[l].y) {
            l = _
            h = m
          }
        }
        for (var c = [], f = 0, d = l;;) {
          c[f] = d
          for (var v = 0, y = 1; y < n; ++y) {
            if (v !== d) {
              var p = It.SubVV(s[v], s[c[f]], i.Set_s_r)
              var x = It.SubVV(s[y], s[c[f]], i.Set_s_v)
              var B = It.CrossVV(p, x)
              if (B < 0) {
                v = y
              }
              if (0 === B && x.LengthSquared() > p.LengthSquared()) {
                v = y
              }
            } else {
              v = y
            }
          }
          ++f
          d = v
          if (v === l) {
            break
          }
        }
        this.m_count = f
        this.m_vertices = It.MakeArray(this.m_count)
        this.m_normals = It.MakeArray(this.m_count)
        for (var S = 0; S < f; ++S) {
          this.m_vertices[S].Copy(s[c[S]])
        }
        for (var C = 0; C < f; ++C) {
          var b = this.m_vertices[C]
          var g = this.m_vertices[(C + 1) % f]
          var V = It.SubVV(g, b, It.s_t0)
          It.CrossVOne(V, this.m_normals[C]).SelfNormalize()
        }
        i.ComputeCentroid(this.m_vertices, f, this.m_centroid)
        return this
      }
    }, {
      key: "SetAsBox",
      value: function (t, e, i) {
        var n = arguments.length > 3 && undefined !== arguments[3] ? arguments[3] : 0
        this.m_count = 4
        this.m_vertices = It.MakeArray(this.m_count)
        this.m_normals = It.MakeArray(this.m_count)
        this.m_vertices[0].Set(-t, -e)
        this.m_vertices[1].Set(t, -e)
        this.m_vertices[2].Set(t, e)
        this.m_vertices[3].Set(-t, e)
        this.m_normals[0].Set(0, -1)
        this.m_normals[1].Set(1, 0)
        this.m_normals[2].Set(0, 1)
        this.m_normals[3].Set(-1, 0)
        this.m_centroid.SetZero()
        if (i) {
          this.m_centroid.Copy(i)
          var s = new Tt()
          s.SetPosition(i)
          s.SetRotationAngle(n)
          for (var r = 0; r < this.m_count; ++r) {
            Tt.MulXV(s, this.m_vertices[r], this.m_vertices[r])
            jt.MulRV(s.q, this.m_normals[r], this.m_normals[r])
          }
        }
        return this
      }
    }, {
      key: "TestPoint",
      value: function (t, e) {
        for (var n = Tt.MulTXV(t, e, i.TestPoint_s_pLocal), s = 0; s < this.m_count; ++s) {
          if (It.DotVV(this.m_normals[s], It.SubVV(n, this.m_vertices[s], It.s_t0)) > 0) {
            return false
          }
        }
        return true
      }
    }, {
      key: "ComputeDistance",
      value: function (t, e, n, s) {
        for (var r = Tt.MulTXV(t, e, i.ComputeDistance_s_pLocal), o = -c, a = i.ComputeDistance_s_normalForMaxDistance.Copy(r), u = 0; u < this.m_count; ++u) {
          var l = It.DotVV(this.m_normals[u], It.SubVV(r, this.m_vertices[u], It.s_t0))
          if (l > o) {
            o = l
            a.Copy(this.m_normals[u])
          }
        }
        if (o > 0) {
          for (var h = i.ComputeDistance_s_minDistance.Copy(a), _ = o * o, m = 0; m < this.m_count; ++m) {
            var f = It.SubVV(r, this.m_vertices[m], i.ComputeDistance_s_distance)
            var d = f.LengthSquared()
            if (_ > d) {
              h.Copy(f)
              _ = d
            }
          }
          jt.MulRV(t.q, h, n)
          n.Normalize()
          return Math.sqrt(_)
        }
        jt.MulRV(t.q, a, n)
        return o
      }
    }, {
      key: "RayCast",
      value: function (t, e, n, s) {
        for (var r = Tt.MulTXV(n, e.p1, i.RayCast_s_p1), o = Tt.MulTXV(n, e.p2, i.RayCast_s_p2), a = It.SubVV(o, r, i.RayCast_s_d), u = 0, /* [auto-meaningful-name] */e$maxFraction = e.maxFraction, h = -1, _ = 0; _ < this.m_count; ++_) {
          var m = It.DotVV(this.m_normals[_], It.SubVV(this.m_vertices[_], r, It.s_t0))
          var c = It.DotVV(this.m_normals[_], a)
          if (0 === c) {
            if (m < 0) {
              return false
            }
          } else if (c < 0 && m < u * c) {
            u = m / c
            h = _
          } else {
            if (c > 0 && m < e$maxFraction * c) {
              e$maxFraction = m / c
            }
          }
          if (e$maxFraction < u) {
            return false
          }
        }
        return h >= 0 && (t.fraction = u, jt.MulRV(n.q, this.m_normals[h], t.normal), true)
      }
    }, {
      key: "ComputeAABB",
      value: function (t, e, n) {
        for (var s = Tt.MulXV(e, this.m_vertices[0], t.lowerBound), r = t.upperBound.Copy(s), o = 0; o < this.m_count; ++o) {
          var a = Tt.MulXV(e, this.m_vertices[o], i.ComputeAABB_s_v)
          It.MinV(a, s, s)
          It.MaxV(a, r, r)
        }
        var /* [auto-meaningful-name] */this$m_radius = this.m_radius
        s.SelfSubXY(this$m_radius, this$m_radius)
        r.SelfAddXY(this$m_radius, this$m_radius)
      }
    }, {
      key: "ComputeMass",
      value: function (t, e) {
        for (var n = i.ComputeMass_s_center.SetZero(), s = 0, r = 0, o = i.ComputeMass_s_s.Copy(this.m_vertices[0]), a = 0; a < this.m_count; ++a) {
          var u = It.SubVV(this.m_vertices[a], o, i.ComputeMass_s_e1)
          var l = It.SubVV(this.m_vertices[(a + 1) % this.m_count], o, i.ComputeMass_s_e2)
          var h = It.CrossVV(u, l)
          var _ = .5 * h
          s += _
          n.SelfAdd(It.MulSV(_ * (1 / 3), It.AddVV(u, l, It.s_t0), It.s_t1))
          var m = u.x
          var c = u.y
          var f = l.x
          var d = l.y
          r += 1 / 3 * .25 * h * (m * m + f * m + f * f + (c * c + d * c + d * d))
        }
        t.mass = e * s
        n.SelfMul(1 / s)
        It.AddVV(n, o, t.center)
        t.I = e * r
        t.I += t.mass * (It.DotVV(t.center, t.center) - It.DotVV(n, n))
      }
    }, {
      key: "Validate",
      value: function () {
        for (var t = 0; t < this.m_count; ++t) {
          for (var e = t, n = (t + 1) % this.m_count, s = this.m_vertices[e], r = It.SubVV(this.m_vertices[n], s, i.Validate_s_e), o = 0; o < this.m_count; ++o) {
            if (o !== e && o !== n) {
              var a = It.SubVV(this.m_vertices[o], s, i.Validate_s_v)
              if (It.CrossVV(r, a) < 0) {
                return false
              }
            }
          }
        }
        return true
      }
    }, {
      key: "SetupDistanceProxy",
      value: function (t, e) {
        t.m_vertices = this.m_vertices
        t.m_count = this.m_count
        t.m_radius = this.m_radius
      }
    }, {
      key: "ComputeSubmergedArea",
      value: function (t, e, n, s) {
        for (var r = jt.MulTRV(n.q, t, i.ComputeSubmergedArea_s_normalL), o = e - It.DotVV(t, n.p), a = [], u = 0, l = -1, h = -1, _ = false, m = 0; m < this.m_count; ++m) {
          a[m] = It.DotVV(r, this.m_vertices[m]) - o
          var c = a[m] < -f
          if (m > 0) {
            if (c) {
              if (!_) {
                l = m - 1
                u++
              }
            } else {
              if (_) {
                h = m - 1
                u++
              }
            }
          }
          _ = c
        }
        switch (u) {
          case 0:
            if (_) {
              var /* [auto-meaningful-name] */i$ComputeSubmergedArea_s_md = i.ComputeSubmergedArea_s_md
              this.ComputeMass(i$ComputeSubmergedArea_s_md, 1)
              Tt.MulXV(n, i$ComputeSubmergedArea_s_md.center, s)
              return i$ComputeSubmergedArea_s_md.mass
            }
            return 0
          case 1:
            if (-1 === l) {
              l = this.m_count - 1
            } else {
              h = this.m_count - 1
            }
        }
        for (var v, y = (l + 1) % this.m_count, p = (h + 1) % this.m_count, x = (0 - a[l]) / (a[y] - a[l]), B = (0 - a[h]) / (a[p] - a[h]), S = i.ComputeSubmergedArea_s_intoVec.Set(this.m_vertices[l].x * (1 - x) + this.m_vertices[y].x * x, this.m_vertices[l].y * (1 - x) + this.m_vertices[y].y * x), A = i.ComputeSubmergedArea_s_outoVec.Set(this.m_vertices[h].x * (1 - B) + this.m_vertices[p].x * B, this.m_vertices[h].y * (1 - B) + this.m_vertices[p].y * B), C = 0, b = i.ComputeSubmergedArea_s_center.SetZero(), g = this.m_vertices[y], V = y; V !== p;) {
          v = (V = (V + 1) % this.m_count) === p ? A : this.m_vertices[V]
          var w = .5 * ((g.x - S.x) * (v.y - S.y) - (g.y - S.y) * (v.x - S.x))
          C += w
          b.x += w * (S.x + g.x + v.x) / 3
          b.y += w * (S.y + g.y + v.y) / 3
          g = v
        }
        b.SelfMul(1 / C)
        Tt.MulXV(n, b, s)
        return C
      }
    }, {
      key: "Dump",
      value: function (t) {
        t("    const shape: b2PolygonShape = new b2PolygonShape();\n")
        t("    const vs: b2Vec2[] = [];\n")
        for (var e = 0; e < this.m_count; ++e) {
          t("    vs[%d] = new b2Vec2(%.15f, %.15f);\n", e, this.m_vertices[e].x, this.m_vertices[e].y)
        }
        t("    shape.Set(vs, %d);\n", this.m_count)
      }
    }
  ], [
    {
      key: "ComputeCentroid",
      value: function (t, e, n) {
        var s = n
        s.SetZero()
        for (var r = 0, o = i.ComputeCentroid_s_s.Copy(t[0]), a = 0; a < e; ++a) {
          var u = It.SubVV(t[0], o, i.ComputeCentroid_s_p1)
          var l = It.SubVV(t[a], o, i.ComputeCentroid_s_p2)
          var h = It.SubVV(t[(a + 1) % e], o, i.ComputeCentroid_s_p3)
          var _ = It.SubVV(l, u, i.ComputeCentroid_s_e1)
          var m = It.SubVV(h, u, i.ComputeCentroid_s_e2)
          var c = .5 * It.CrossVV(_, m)
          r += c
          s.x += c * (1 / 3) * (u.x + l.x + h.x)
          s.y += c * (1 / 3) * (u.y + l.y + h.y)
        }
        s.x = 1 / r * s.x + o.x
        s.y = 1 / r * s.y + o.y
        return s
      }
    }
  ])
  return i
}(Qe)
tn.Set_s_r = new It()
tn.Set_s_v = new It()
tn.TestPoint_s_pLocal = new It()
tn.ComputeDistance_s_pLocal = new It()
tn.ComputeDistance_s_normalForMaxDistance = new It()
tn.ComputeDistance_s_minDistance = new It()
tn.ComputeDistance_s_distance = new It()
tn.RayCast_s_p1 = new It()
tn.RayCast_s_p2 = new It()
tn.RayCast_s_d = new It()
tn.ComputeAABB_s_v = new It()
tn.ComputeMass_s_center = new It()
tn.ComputeMass_s_s = new It()
tn.ComputeMass_s_e1 = new It()
tn.ComputeMass_s_e2 = new It()
tn.Validate_s_e = new It()
tn.Validate_s_v = new It()
tn.ComputeSubmergedArea_s_normalL = new It()
tn.ComputeSubmergedArea_s_md = new We()
tn.ComputeSubmergedArea_s_intoVec = new It()
tn.ComputeSubmergedArea_s_outoVec = new It()
tn.ComputeSubmergedArea_s_center = new It()
tn.ComputeCentroid_s_s = new It()
tn.ComputeCentroid_s_p1 = new It()
tn.ComputeCentroid_s_p2 = new It()
tn.ComputeCentroid_s_p3 = new It()
tn.ComputeCentroid_s_e1 = new It()
tn.ComputeCentroid_s_e2 = new It()
var en = 0
var nn = 0
var sn = 0
var rn = 0
var on = 0
var an = 0
var un = 0
function ln() {
  en = 0
  nn = 0
  sn = 0
  rn = 0
  on = 0
  an = 0
  un = 0
}
var hn
var _n = new Tt()
var mn = new Tt()
var cn = new It()
var fn = new It()
var dn = new It()
var vn = new It()
var yn = new It()
var pn = function t() {
  $$_27.a(this, t)
  this.proxyA = new Nt()
  this.proxyB = new Nt()
  this.sweepA = new Ot()
  this.sweepB = new Ot()
  this.tMax = 0
}
!function (t) {
  t[t.e_unknown = 0] = "e_unknown"
  t[t.e_failed = 1] = "e_failed"
  t[t.e_overlapped = 2] = "e_overlapped"
  t[t.e_touching = 3] = "e_touching"
  t[t.e_separated = 4] = "e_separated"
}(hn || (hn = {}))
var xn
var Bn = function t() {
  $$_27.a(this, t)
  this.state = hn.e_unknown
  this.t = 0
}
!function (t) {
  t[t.e_unknown = -1] = "e_unknown"
  t[t.e_points = 0] = "e_points"
  t[t.e_faceA = 1] = "e_faceA"
  t[t.e_faceB = 2] = "e_faceB"
}(xn || (xn = {}))
var Sn
var An = function () {
  function t() {
    $$_27.a(this, t)
    this.m_sweepA = new Ot()
    this.m_sweepB = new Ot()
    this.m_type = xn.e_unknown
    this.m_localPoint = new It()
    this.m_axis = new It()
  }
  $$_39.a(t, [
    {
      key: "Initialize",
      value: function (t, e, i, n, s, r) {
        this.m_proxyA = e
        this.m_proxyB = n
        var /* [auto-meaningful-name] */t$count = t.count
        this.m_sweepA.Copy(i)
        this.m_sweepB.Copy(s)
        var a = _n
        var u = mn
        this.m_sweepA.GetTransform(a, r)
        this.m_sweepB.GetTransform(u, r)
        if (1 === t$count) {
          this.m_type = xn.e_points
          var l = this.m_proxyA.GetVertex(t.indexA[0])
          var h = this.m_proxyB.GetVertex(t.indexB[0])
          var _ = Tt.MulXV(a, l, cn)
          var m = Tt.MulXV(u, h, fn)
          It.SubVV(m, _, this.m_axis)
          var c = this.m_axis.Normalize()
          this.m_localPoint.SetZero()
          return c
        }
        if (t.indexA[0] === t.indexA[1]) {
          this.m_type = xn.e_faceB
          var f = this.m_proxyB.GetVertex(t.indexB[0])
          var d = this.m_proxyB.GetVertex(t.indexB[1])
          It.CrossVOne(It.SubVV(d, f, It.s_t0), this.m_axis).SelfNormalize()
          var v = jt.MulRV(u.q, this.m_axis, dn)
          It.MidVV(f, d, this.m_localPoint)
          var y = Tt.MulXV(u, this.m_localPoint, fn)
          var p = this.m_proxyA.GetVertex(t.indexA[0])
          var x = Tt.MulXV(a, p, cn)
          var B = It.DotVV(It.SubVV(x, y, It.s_t0), v)
          if (B < 0) {
            this.m_axis.SelfNeg()
            B = -B
          }
          return B
        }
        this.m_type = xn.e_faceA
        var S = this.m_proxyA.GetVertex(t.indexA[0])
        var A = this.m_proxyA.GetVertex(t.indexA[1])
        It.CrossVOne(It.SubVV(A, S, It.s_t0), this.m_axis).SelfNormalize()
        var C = jt.MulRV(a.q, this.m_axis, dn)
        It.MidVV(S, A, this.m_localPoint)
        var b = Tt.MulXV(a, this.m_localPoint, cn)
        var g = this.m_proxyB.GetVertex(t.indexB[0])
        var V = Tt.MulXV(u, g, fn)
        var w = It.DotVV(It.SubVV(V, b, It.s_t0), C)
        if (w < 0) {
          this.m_axis.SelfNeg()
          w = -w
        }
        return w
      }
    }, {
      key: "FindMinSeparation",
      value: function (t, e, i) {
        var n = _n
        var s = mn
        switch (this.m_sweepA.GetTransform(n, i), this.m_sweepB.GetTransform(s, i), this.m_type) {
          case xn.e_points:
            var r = jt.MulTRV(n.q, this.m_axis, vn),
              o = jt.MulTRV(s.q, It.NegV(this.m_axis, It.s_t0), yn)
            t[0] = this.m_proxyA.GetSupport(r)
            e[0] = this.m_proxyB.GetSupport(o)
            var a = this.m_proxyA.GetVertex(t[0]),
              u = this.m_proxyB.GetVertex(e[0]),
              l = Tt.MulXV(n, a, cn),
              h = Tt.MulXV(s, u, fn)
            return It.DotVV(It.SubVV(h, l, It.s_t0), this.m_axis)
          case xn.e_faceA:
            var _ = jt.MulRV(n.q, this.m_axis, dn),
              m = Tt.MulXV(n, this.m_localPoint, cn),
              c = jt.MulTRV(s.q, It.NegV(_, It.s_t0), yn)
            t[0] = -1
            e[0] = this.m_proxyB.GetSupport(c)
            var f = this.m_proxyB.GetVertex(e[0]),
              d = Tt.MulXV(s, f, fn)
            return It.DotVV(It.SubVV(d, m, It.s_t0), _)
          case xn.e_faceB:
            var v = jt.MulRV(s.q, this.m_axis, dn),
              y = Tt.MulXV(s, this.m_localPoint, fn),
              p = jt.MulTRV(n.q, It.NegV(v, It.s_t0), vn)
            e[0] = -1
            t[0] = this.m_proxyA.GetSupport(p)
            var x = this.m_proxyA.GetVertex(t[0]),
              B = Tt.MulXV(n, x, cn)
            return It.DotVV(It.SubVV(B, y, It.s_t0), v)
          default:
            t[0] = -1
            e[0] = -1
            return 0
        }
      }
    }, {
      key: "Evaluate",
      value: function (t, e, i) {
        var n = _n
        var s = mn
        switch (this.m_sweepA.GetTransform(n, i), this.m_sweepB.GetTransform(s, i), this.m_type) {
          case xn.e_points:
            var r = this.m_proxyA.GetVertex(t),
              o = this.m_proxyB.GetVertex(e),
              a = Tt.MulXV(n, r, cn),
              u = Tt.MulXV(s, o, fn)
            return It.DotVV(It.SubVV(u, a, It.s_t0), this.m_axis)
          case xn.e_faceA:
            var l = jt.MulRV(n.q, this.m_axis, dn),
              h = Tt.MulXV(n, this.m_localPoint, cn),
              _ = this.m_proxyB.GetVertex(e),
              m = Tt.MulXV(s, _, fn)
            return It.DotVV(It.SubVV(m, h, It.s_t0), l)
          case xn.e_faceB:
            var c = jt.MulRV(s.q, this.m_axis, dn),
              f = Tt.MulXV(s, this.m_localPoint, fn),
              d = this.m_proxyA.GetVertex(t),
              v = Tt.MulXV(n, d, cn)
            return It.DotVV(It.SubVV(v, f, It.s_t0), c)
          default:
            return 0
        }
      }
    }
  ])
  return t
}()
var Cn = new zt()
var bn = new Jt()
var gn = new Xt()
var Vn = new Zt()
var wn = new An()
var kn = [0]
var Mn = [0]
var Pn = new Ot()
var In = new Ot()
function Gn(t, e) {
  var i = Cn.Reset()
  ++sn
  t.state = hn.e_unknown
  t.t = e.tMax
  var /* [auto-meaningful-name] */e$proxyA = e.proxyA
  var /* [auto-meaningful-name] */e$proxyB = e.proxyB
  var r = mt(p, mt(e$proxyA.m_count, e$proxyB.m_count))
  var o = Pn.Copy(e.sweepA)
  var a = In.Copy(e.sweepB)
  o.Normalize()
  a.Normalize()
  var /* [auto-meaningful-name] */e$tMax = e.tMax
  var l = e$proxyA.m_radius + e$proxyB.m_radius
  var h = mt(A, l - 3 * A)
  var _ = .25 * A
  var m = 0
  var c = 0
  var f = bn
  f.count = 0
  var d = gn
  for (d.proxyA.Copy(e.proxyA), d.proxyB.Copy(e.proxyB), d.useRadii = false;;) {
    var v = _n
    var y = mn
    o.GetTransform(v, m)
    a.GetTransform(y, m)
    d.transformA.Copy(v)
    d.transformB.Copy(y)
    var x = Vn
    le(x, f, d)
    if (x.distance <= 0) {
      t.state = hn.e_overlapped
      t.t = 0
      break
    }
    if (x.distance < h + _) {
      t.state = hn.e_touching
      t.t = m
      break
    }
    var B = wn
    B.Initialize(f, e$proxyA, o, e$proxyB, a, m)
    for (var S = false, C = e$tMax, b = 0;;) {
      var g = kn
      var V = Mn
      var w = B.FindMinSeparation(g, V, C)
      if (w > h + _) {
        t.state = hn.e_separated
        t.t = e$tMax
        S = true
        break
      }
      if (w > h - _) {
        m = C
        break
      }
      var k = B.Evaluate(g[0], V[0], m)
      if (k < h - _) {
        t.state = hn.e_failed
        t.t = m
        S = true
        break
      }
      if (k <= h + _) {
        t.state = hn.e_touching
        t.t = m
        S = true
        break
      }
      for (var M = 0, P = m, I = C;;) {
        var G = 0
        G = 1 & M ? P + (h - k) * (I - P) / (w - k) : .5 * (P + I)
        ++M
        ++an
        var D = B.Evaluate(g[0], V[0], G)
        if (ht(D - h) < _) {
          C = G
          break
        }
        if (D > h) {
          P = G
          k = D
        } else {
          I = G
          w = D
        }
        if (50 === M) {
          break
        }
      }
      un = mt(un, M)
      if (++b === r) {
        break
      }
    }
    ++c
    ++rn
    if (S) {
      break
    }
    if (20 === c) {
      t.state = hn.e_failed
      t.t = m
      break
    }
  }
  on = mt(on, c)
  var F = i.GetMilliseconds()
  nn = mt(nn, F)
  en += F
}
!function (t) {
  t[t.e_unknownJoint = 0] = "e_unknownJoint"
  t[t.e_revoluteJoint = 1] = "e_revoluteJoint"
  t[t.e_prismaticJoint = 2] = "e_prismaticJoint"
  t[t.e_distanceJoint = 3] = "e_distanceJoint"
  t[t.e_pulleyJoint = 4] = "e_pulleyJoint"
  t[t.e_mouseJoint = 5] = "e_mouseJoint"
  t[t.e_gearJoint = 6] = "e_gearJoint"
  t[t.e_wheelJoint = 7] = "e_wheelJoint"
  t[t.e_weldJoint = 8] = "e_weldJoint"
  t[t.e_frictionJoint = 9] = "e_frictionJoint"
  t[t.e_ropeJoint = 10] = "e_ropeJoint"
  t[t.e_motorJoint = 11] = "e_motorJoint"
  t[t.e_areaJoint = 12] = "e_areaJoint"
}(Sn || (Sn = {}))
var Dn = function () {
  function t() {
    $$_27.a(this, t)
    this.linear = new It()
    this.angularA = 0
    this.angularB = 0
  }
  $$_39.a(t, [
    {
      key: "SetZero",
      value: function () {
        this.linear.SetZero()
        this.angularA = 0
        this.angularB = 0
        return this
      }
    }, {
      key: "Set",
      value: function (t, e, i) {
        this.linear.Copy(t)
        this.angularA = e
        this.angularB = i
        return this
      }
    }
  ])
  return t
}()
var Fn = function () {
  function t(e) {
    $$_27.a(this, t)
    this._other = null
    this.prev = null
    this.next = null
    this.joint = e
  }
  $$_39.a(t, [
    {
      key: "other",
      get: function () {
        if (null === this._other) {
          throw new Error()
        }
        return this._other
      },
      set: function (t) {
        if (null !== this._other) {
          throw new Error()
        }
        this._other = t
      }
    }, {
      key: "Reset",
      value: function () {
        this._other = null
        this.prev = null
        this.next = null
      }
    }
  ])
  return t
}()
var Ln = function t(e) {
  $$_27.a(this, t)
  this.type = Sn.e_unknownJoint
  this.userData = null
  this.collideConnected = false
  this.type = e
}
function Rn(t, e, i, n, s) {
  var r
  var o = n.GetMass()
  var a = s.GetMass()
  r = o > 0 && a > 0 ? o * a / (o + a) : o > 0 ? o : a
  var u = 2 * v * e
  t.stiffness = r * u * u
  t.damping = 2 * r * i * u
}
function jn(t, e, i, n, s) {
  var r
  var o = n.GetInertia()
  var a = s.GetInertia()
  r = o > 0 && a > 0 ? o * a / (o + a) : o > 0 ? o : a
  var u = 2 * v * e
  t.stiffness = r * u * u
  t.damping = 2 * r * i * u
}
var Tn = function () {
  function t(e) {
    $$_27.a(this, t)
    this.m_type = Sn.e_unknownJoint
    this.m_prev = null
    this.m_next = null
    this.m_edgeA = new Fn(this)
    this.m_edgeB = new Fn(this)
    this.m_index = 0
    this.m_islandFlag = false
    this.m_collideConnected = false
    this.m_userData = null
    this.m_type = e.type
    this.m_edgeA.other = e.bodyB
    this.m_edgeB.other = e.bodyA
    this.m_bodyA = e.bodyA
    this.m_bodyB = e.bodyB
    this.m_collideConnected = m(e.collideConnected, false)
    this.m_userData = m(e.userData, null)
  }
  $$_39.a(t, [
    {
      key: "GetType",
      value: function () {
        return this.m_type
      }
    }, {
      key: "GetBodyA",
      value: function () {
        return this.m_bodyA
      }
    }, {
      key: "GetBodyB",
      value: function () {
        return this.m_bodyB
      }
    }, {
      key: "GetNext",
      value: function () {
        return this.m_next
      }
    }, {
      key: "GetUserData",
      value: function () {
        return this.m_userData
      }
    }, {
      key: "SetUserData",
      value: function (t) {
        this.m_userData = t
      }
    }, {
      key: "IsEnabled",
      value: function () {
        return this.m_bodyA.IsEnabled() && this.m_bodyB.IsEnabled()
      }
    }, {
      key: "GetCollideConnected",
      value: function () {
        return this.m_collideConnected
      }
    }, {
      key: "Dump",
      value: function (t) {
        t("// Dump is not supported for this joint type.\n")
      }
    }, {
      key: "ShiftOrigin",
      value: function (t) {}
    }, {
      key: "Draw",
      value: function (e) {
        var i = this.m_bodyA.GetTransform()
        var n = this.m_bodyB.GetTransform()
        var s = i.p
        var r = n.p
        var o = this.GetAnchorA(t.Draw_s_p1)
        var a = this.GetAnchorB(t.Draw_s_p2)
        var u = t.Draw_s_color.SetRGB(.5, .8, .8)
        switch (this.m_type) {
          case Sn.e_distanceJoint:
            e.DrawSegment(o, a, u)
            break
          case Sn.e_pulleyJoint:
            var l = this.GetGroundAnchorA(),
              h = this.GetGroundAnchorB()
            e.DrawSegment(l, o, u)
            e.DrawSegment(h, a, u)
            e.DrawSegment(l, h, u)
            break
          case Sn.e_mouseJoint:
            var /* [auto-meaningful-name] */t$Draw_s_c = t.Draw_s_c
            t$Draw_s_c.Set(0, 1, 0)
            e.DrawPoint(o, 4, t$Draw_s_c)
            e.DrawPoint(a, 4, t$Draw_s_c)
            t$Draw_s_c.Set(.8, .8, .8)
            e.DrawSegment(o, a, t$Draw_s_c)
            break
          default:
            e.DrawSegment(s, o, u)
            e.DrawSegment(o, a, u)
            e.DrawSegment(r, a, u)
        }
      }
    }
  ])
  return t
}()
Tn.Draw_s_p1 = new It()
Tn.Draw_s_p2 = new It()
Tn.Draw_s_color = new o(.5, .8, .8)
Tn.Draw_s_c = new o()
var On = function (t) {
  $$_58_index.a(i, t)
  var e = $$_59_index.a(i)
  function i() {
    var t
    $$_27.a(this, i);
    (t = e.call(this, Sn.e_distanceJoint)).localAnchorA = new It()
    t.localAnchorB = new It()
    t.length = 1
    t.minLength = 0
    t.maxLength = c
    t.stiffness = 0
    t.damping = 0
    return t
  }
  $$_39.a(i, [
    {
      key: "Initialize",
      value: function (t, e, i, n) {
        this.bodyA = t
        this.bodyB = e
        this.bodyA.GetLocalPoint(i, this.localAnchorA)
        this.bodyB.GetLocalPoint(n, this.localAnchorB)
        this.length = mt(It.DistanceVV(i, n), A)
        this.minLength = this.length
        this.maxLength = this.length
      }
    }
  ])
  return i
}(Ln)
var qn = function (t) {
  $$_58_index.a(i, t)
  var e = $$_59_index.a(i)
  function i(t) {
    var s
    $$_27.a(this, i);
    (s = e.call(this, t)).m_stiffness = 0
    s.m_damping = 0
    s.m_bias = 0
    s.m_length = 0
    s.m_minLength = 0
    s.m_maxLength = 0
    s.m_localAnchorA = new It()
    s.m_localAnchorB = new It()
    s.m_gamma = 0
    s.m_impulse = 0
    s.m_lowerImpulse = 0
    s.m_upperImpulse = 0
    s.m_indexA = 0
    s.m_indexB = 0
    s.m_u = new It()
    s.m_rA = new It()
    s.m_rB = new It()
    s.m_localCenterA = new It()
    s.m_localCenterB = new It()
    s.m_currentLength = 0
    s.m_invMassA = 0
    s.m_invMassB = 0
    s.m_invIA = 0
    s.m_invIB = 0
    s.m_softMass = 0
    s.m_mass = 0
    s.m_qA = new jt()
    s.m_qB = new jt()
    s.m_lalcA = new It()
    s.m_lalcB = new It()
    s.m_localAnchorA.Copy(m(t.localAnchorA, It.ZERO))
    s.m_localAnchorB.Copy(m(t.localAnchorB, It.ZERO))
    s.m_length = mt(m(t.length, s.GetCurrentLength()), A)
    s.m_minLength = mt(m(t.minLength, s.m_length), A)
    s.m_maxLength = mt(m(t.maxLength, s.m_length), s.m_minLength)
    s.m_stiffness = m(t.stiffness, 0)
    s.m_damping = m(t.damping, 0)
    return s
  }
  $$_39.a(i, [
    {
      key: "GetAnchorA",
      value: function (t) {
        return this.m_bodyA.GetWorldPoint(this.m_localAnchorA, t)
      }
    }, {
      key: "GetAnchorB",
      value: function (t) {
        return this.m_bodyB.GetWorldPoint(this.m_localAnchorB, t)
      }
    }, {
      key: "GetReactionForce",
      value: function (t, e) {
        e.x = t * (this.m_impulse + this.m_lowerImpulse - this.m_upperImpulse) * this.m_u.x
        e.y = t * (this.m_impulse + this.m_lowerImpulse - this.m_upperImpulse) * this.m_u.y
        return e
      }
    }, {
      key: "GetReactionTorque",
      value: function (t) {
        return 0
      }
    }, {
      key: "GetLocalAnchorA",
      value: function () {
        return this.m_localAnchorA
      }
    }, {
      key: "GetLocalAnchorB",
      value: function () {
        return this.m_localAnchorB
      }
    }, {
      key: "SetLength",
      value: function (t) {
        this.m_impulse = 0
        this.m_length = mt(A, t)
        return this.m_length
      }
    }, {
      key: "GetLength",
      value: function () {
        return this.m_length
      }
    }, {
      key: "SetMinLength",
      value: function (t) {
        this.m_lowerImpulse = 0
        this.m_minLength = ct(t, A, this.m_maxLength)
        return this.m_minLength
      }
    }, {
      key: "SetMaxLength",
      value: function (t) {
        this.m_upperImpulse = 0
        this.m_maxLength = mt(t, this.m_minLength)
        return this.m_maxLength
      }
    }, {
      key: "GetCurrentLength",
      value: function () {
        var t = this.m_bodyA.GetWorldPoint(this.m_localAnchorA, new It())
        var e = this.m_bodyB.GetWorldPoint(this.m_localAnchorB, new It())
        return It.DistanceVV(t, e)
      }
    }, {
      key: "SetStiffness",
      value: function (t) {
        this.m_stiffness = t
      }
    }, {
      key: "GetStiffness",
      value: function () {
        return this.m_stiffness
      }
    }, {
      key: "SetDamping",
      value: function (t) {
        this.m_damping = t
      }
    }, {
      key: "GetDamping",
      value: function () {
        return this.m_damping
      }
    }, {
      key: "Dump",
      value: function (t) {
        var /* [auto-meaningful-name] */this$m_bodyA$m_islandIndex = this.m_bodyA.m_islandIndex
        var /* [auto-meaningful-name] */this$m_bodyB$m_islandIndex = this.m_bodyB.m_islandIndex
        t("  const jd: b2DistanceJointDef = new b2DistanceJointDef();\n")
        t("  jd.bodyA = bodies[%d];\n", this$m_bodyA$m_islandIndex)
        t("  jd.bodyB = bodies[%d];\n", this$m_bodyB$m_islandIndex)
        t("  jd.collideConnected = %s;\n", this.m_collideConnected ? "true" : "false")
        t("  jd.localAnchorA.Set(%.15f, %.15f);\n", this.m_localAnchorA.x, this.m_localAnchorA.y)
        t("  jd.localAnchorB.Set(%.15f, %.15f);\n", this.m_localAnchorB.x, this.m_localAnchorB.y)
        t("  jd.length = %.15f;\n", this.m_length)
        t("  jd.minLength = %.15f;\n", this.m_minLength)
        t("  jd.maxLength = %.15f;\n", this.m_maxLength)
        t("  jd.stiffness = %.15f;\n", this.m_stiffness)
        t("  jd.damping = %.15f;\n", this.m_damping)
        t("  joints[%d] = this.m_world.CreateJoint(jd);\n", this.m_index)
      }
    }, {
      key: "InitVelocityConstraints",
      value: function (t) {
        this.m_indexA = this.m_bodyA.m_islandIndex
        this.m_indexB = this.m_bodyB.m_islandIndex
        this.m_localCenterA.Copy(this.m_bodyA.m_sweep.localCenter)
        this.m_localCenterB.Copy(this.m_bodyB.m_sweep.localCenter)
        this.m_invMassA = this.m_bodyA.m_invMass
        this.m_invMassB = this.m_bodyB.m_invMass
        this.m_invIA = this.m_bodyA.m_invI
        this.m_invIB = this.m_bodyB.m_invI
        var /* [auto-meaningful-name] */t$positionsThis$m_indexA$c = t.positions[this.m_indexA].c
        var /* [auto-meaningful-name] */t$positionsThis$m_indexA$a = t.positions[this.m_indexA].a
        var /* [auto-meaningful-name] */t$velocitiesThis$m_indexA$v = t.velocities[this.m_indexA].v
        var /* [auto-meaningful-name] */t$velocitiesThis$m_indexA$w = t.velocities[this.m_indexA].w
        var /* [auto-meaningful-name] */t$positionsThis$m_indexB$c = t.positions[this.m_indexB].c
        var /* [auto-meaningful-name] */t$positionsThis$m_indexB$a = t.positions[this.m_indexB].a
        var /* [auto-meaningful-name] */t$velocitiesThis$m_indexB$v = t.velocities[this.m_indexB].v
        var /* [auto-meaningful-name] */t$velocitiesThis$m_indexB$w = t.velocities[this.m_indexB].w
        var h = this.m_qA.SetAngle(t$positionsThis$m_indexA$a)
        var _ = this.m_qB.SetAngle(t$positionsThis$m_indexB$a)
        It.SubVV(this.m_localAnchorA, this.m_localCenterA, this.m_lalcA)
        jt.MulRV(h, this.m_lalcA, this.m_rA)
        It.SubVV(this.m_localAnchorB, this.m_localCenterB, this.m_lalcB)
        jt.MulRV(_, this.m_lalcB, this.m_rB)
        this.m_u.x = t$positionsThis$m_indexB$c.x + this.m_rB.x - t$positionsThis$m_indexA$c.x - this.m_rA.x
        this.m_u.y = t$positionsThis$m_indexB$c.y + this.m_rB.y - t$positionsThis$m_indexA$c.y - this.m_rA.y
        this.m_currentLength = this.m_u.Length()
        if (this.m_currentLength > A) {
          this.m_u.SelfMul(1 / this.m_currentLength)
        } else {
          this.m_u.SetZero()
          this.m_mass = 0
          this.m_impulse = 0
          this.m_lowerImpulse = 0
          this.m_upperImpulse = 0
        }
        var m = It.CrossVV(this.m_rA, this.m_u)
        var c = It.CrossVV(this.m_rB, this.m_u)
        var f = this.m_invMassA + this.m_invIA * m * m + this.m_invMassB + this.m_invIB * c * c
        this.m_mass = 0 !== f ? 1 / f : 0
        if (this.m_stiffness > 0 && this.m_minLength < this.m_maxLength) {
          var d = this.m_currentLength - this.m_length
          var /* [auto-meaningful-name] */this$m_damping = this.m_damping
          var /* [auto-meaningful-name] */this$m_stiffness = this.m_stiffness
          var /* [auto-meaningful-name] */t$step$dt = t.step.dt
          this.m_gamma = t$step$dt * (this$m_damping + t$step$dt * this$m_stiffness)
          this.m_gamma = 0 !== this.m_gamma ? 1 / this.m_gamma : 0
          this.m_bias = d * t$step$dt * this$m_stiffness * this.m_gamma
          f += this.m_gamma
          this.m_softMass = 0 !== f ? 1 / f : 0
        } else {
          this.m_gamma = 0
          this.m_bias = 0
          this.m_softMass = this.m_mass
        }
        if (t.step.warmStarting) {
          this.m_impulse *= t.step.dtRatio
          this.m_lowerImpulse *= t.step.dtRatio
          this.m_upperImpulse *= t.step.dtRatio
          var x = It.MulSV(this.m_impulse + this.m_lowerImpulse - this.m_upperImpulse, this.m_u, i.InitVelocityConstraints_s_P)
          t$velocitiesThis$m_indexA$v.SelfMulSub(this.m_invMassA, x)
          t$velocitiesThis$m_indexA$w -= this.m_invIA * It.CrossVV(this.m_rA, x)
          t$velocitiesThis$m_indexB$v.SelfMulAdd(this.m_invMassB, x)
          t$velocitiesThis$m_indexB$w += this.m_invIB * It.CrossVV(this.m_rB, x)
        } else {
          this.m_impulse = 0
        }
        t.velocities[this.m_indexA].w = t$velocitiesThis$m_indexA$w
        t.velocities[this.m_indexB].w = t$velocitiesThis$m_indexB$w
      }
    }, {
      key: "SolveVelocityConstraints",
      value: function (t) {
        var /* [auto-meaningful-name] */t$velocitiesThis$m_indexA$v = t.velocities[this.m_indexA].v
        var /* [auto-meaningful-name] */t$velocitiesThis$m_indexA$w = t.velocities[this.m_indexA].w
        var /* [auto-meaningful-name] */t$velocitiesThis$m_indexB$v = t.velocities[this.m_indexB].v
        var /* [auto-meaningful-name] */t$velocitiesThis$m_indexB$w = t.velocities[this.m_indexB].w
        if (this.m_minLength < this.m_maxLength) {
          if (this.m_stiffness > 0) {
            var o = It.AddVCrossSV(t$velocitiesThis$m_indexA$v, t$velocitiesThis$m_indexA$w, this.m_rA, i.SolveVelocityConstraints_s_vpA)
            var a = It.AddVCrossSV(t$velocitiesThis$m_indexB$v, t$velocitiesThis$m_indexB$w, this.m_rB, i.SolveVelocityConstraints_s_vpB)
            var u = It.DotVV(this.m_u, It.SubVV(a, o, It.s_t0))
            var l = -this.m_softMass * (u + this.m_bias + this.m_gamma * this.m_impulse)
            this.m_impulse += l
            var h = It.MulSV(l, this.m_u, i.SolveVelocityConstraints_s_P)
            t$velocitiesThis$m_indexA$v.SelfMulSub(this.m_invMassA, h)
            t$velocitiesThis$m_indexA$w -= this.m_invIA * It.CrossVV(this.m_rA, h)
            t$velocitiesThis$m_indexB$v.SelfMulAdd(this.m_invMassB, h)
            t$velocitiesThis$m_indexB$w += this.m_invIB * It.CrossVV(this.m_rB, h)
          }
          var _ = mt(0, this.m_currentLength - this.m_minLength) * t.step.inv_dt
          var m = It.AddVCrossSV(t$velocitiesThis$m_indexA$v, t$velocitiesThis$m_indexA$w, this.m_rA, i.SolveVelocityConstraints_s_vpA)
          var c = It.AddVCrossSV(t$velocitiesThis$m_indexB$v, t$velocitiesThis$m_indexB$w, this.m_rB, i.SolveVelocityConstraints_s_vpB)
          var f = It.DotVV(this.m_u, It.SubVV(c, m, It.s_t0))
          var d = -this.m_mass * (f + _)
          var /* [auto-meaningful-name] */this$m_lowerImpulse = this.m_lowerImpulse
          this.m_lowerImpulse = mt(0, this.m_lowerImpulse + d)
          d = this.m_lowerImpulse - this$m_lowerImpulse
          var y = It.MulSV(d, this.m_u, i.SolveVelocityConstraints_s_P)
          t$velocitiesThis$m_indexA$v.SelfMulSub(this.m_invMassA, y)
          t$velocitiesThis$m_indexA$w -= this.m_invIA * It.CrossVV(this.m_rA, y)
          t$velocitiesThis$m_indexB$v.SelfMulAdd(this.m_invMassB, y)
          t$velocitiesThis$m_indexB$w += this.m_invIB * It.CrossVV(this.m_rB, y)
          var p = mt(0, this.m_maxLength - this.m_currentLength) * t.step.inv_dt
          var x = It.AddVCrossSV(t$velocitiesThis$m_indexA$v, t$velocitiesThis$m_indexA$w, this.m_rA, i.SolveVelocityConstraints_s_vpA)
          var B = It.AddVCrossSV(t$velocitiesThis$m_indexB$v, t$velocitiesThis$m_indexB$w, this.m_rB, i.SolveVelocityConstraints_s_vpB)
          var S = It.DotVV(this.m_u, It.SubVV(x, B, It.s_t0))
          var A = -this.m_mass * (S + p)
          var /* [auto-meaningful-name] */this$m_upperImpulse = this.m_upperImpulse
          this.m_upperImpulse = mt(0, this.m_upperImpulse + A)
          A = this.m_upperImpulse - this$m_upperImpulse
          var b = It.MulSV(-A, this.m_u, i.SolveVelocityConstraints_s_P)
          t$velocitiesThis$m_indexA$v.SelfMulSub(this.m_invMassA, b)
          t$velocitiesThis$m_indexA$w -= this.m_invIA * It.CrossVV(this.m_rA, b)
          t$velocitiesThis$m_indexB$v.SelfMulAdd(this.m_invMassB, b)
          t$velocitiesThis$m_indexB$w += this.m_invIB * It.CrossVV(this.m_rB, b)
        } else {
          var g = It.AddVCrossSV(t$velocitiesThis$m_indexA$v, t$velocitiesThis$m_indexA$w, this.m_rA, i.SolveVelocityConstraints_s_vpA)
          var V = It.AddVCrossSV(t$velocitiesThis$m_indexB$v, t$velocitiesThis$m_indexB$w, this.m_rB, i.SolveVelocityConstraints_s_vpB)
          var w = It.DotVV(this.m_u, It.SubVV(V, g, It.s_t0))
          var k = -this.m_mass * w
          this.m_impulse += k
          var M = It.MulSV(k, this.m_u, i.SolveVelocityConstraints_s_P)
          t$velocitiesThis$m_indexA$v.SelfMulSub(this.m_invMassA, M)
          t$velocitiesThis$m_indexA$w -= this.m_invIA * It.CrossVV(this.m_rA, M)
          t$velocitiesThis$m_indexB$v.SelfMulAdd(this.m_invMassB, M)
          t$velocitiesThis$m_indexB$w += this.m_invIB * It.CrossVV(this.m_rB, M)
        }
        t.velocities[this.m_indexA].w = t$velocitiesThis$m_indexA$w
        t.velocities[this.m_indexB].w = t$velocitiesThis$m_indexB$w
      }
    }, {
      key: "SolvePositionConstraints",
      value: function (t) {
        var /* [auto-meaningful-name] */t$positionsThis$m_indexA$c = t.positions[this.m_indexA].c
        var /* [auto-meaningful-name] */t$positionsThis$m_indexA$a = t.positions[this.m_indexA].a
        var /* [auto-meaningful-name] */t$positionsThis$m_indexB$c = t.positions[this.m_indexB].c
        var /* [auto-meaningful-name] */t$positionsThis$m_indexB$a = t.positions[this.m_indexB].a
        var o = this.m_qA.SetAngle(t$positionsThis$m_indexA$a)
        var a = this.m_qB.SetAngle(t$positionsThis$m_indexB$a)
        var u = jt.MulRV(o, this.m_lalcA, this.m_rA)
        var l = jt.MulRV(a, this.m_lalcB, this.m_rB)
        var /* [auto-meaningful-name] */this$m_u = this.m_u
        this$m_u.x = t$positionsThis$m_indexB$c.x + l.x - t$positionsThis$m_indexA$c.x - u.x
        this$m_u.y = t$positionsThis$m_indexB$c.y + l.y - t$positionsThis$m_indexA$c.y - u.y
        var _
        var m = this.m_u.Normalize()
        if (this.m_minLength === this.m_maxLength) {
          _ = m - this.m_minLength
        } else if (m < this.m_minLength) {
          _ = m - this.m_minLength
        } else {
          if (!(this.m_maxLength < m)) {
            return true
          }
          _ = m - this.m_maxLength
        }
        var c = -this.m_mass * _
        var f = It.MulSV(c, this$m_u, i.SolvePositionConstraints_s_P)
        t$positionsThis$m_indexA$c.SelfMulSub(this.m_invMassA, f)
        t$positionsThis$m_indexA$a -= this.m_invIA * It.CrossVV(u, f)
        t$positionsThis$m_indexB$c.SelfMulAdd(this.m_invMassB, f)
        t$positionsThis$m_indexB$a += this.m_invIB * It.CrossVV(l, f)
        t.positions[this.m_indexA].a = t$positionsThis$m_indexA$a
        t.positions[this.m_indexB].a = t$positionsThis$m_indexB$a
        return ht(_) < A
      }
    }, {
      key: "Draw",
      value: function (t) {
        var e = this.m_bodyA.GetTransform()
        var n = this.m_bodyB.GetTransform()
        var s = Tt.MulXV(e, this.m_localAnchorA, i.Draw_s_pA)
        var r = Tt.MulXV(n, this.m_localAnchorB, i.Draw_s_pB)
        var o = It.SubVV(r, s, i.Draw_s_axis)
        o.Normalize()
        var /* [auto-meaningful-name] */i$Draw_s_c1 = i.Draw_s_c1
        var /* [auto-meaningful-name] */i$Draw_s_c2 = i.Draw_s_c2
        var /* [auto-meaningful-name] */i$Draw_s_c3 = i.Draw_s_c3
        var /* [auto-meaningful-name] */i$Draw_s_c4 = i.Draw_s_c4
        t.DrawSegment(s, r, i$Draw_s_c4)
        var _ = It.AddVMulSV(s, this.m_length, o, i.Draw_s_pRest)
        t.DrawPoint(_, 8, i$Draw_s_c1)
        if (this.m_minLength !== this.m_maxLength) {
          if (this.m_minLength > A) {
            var m = It.AddVMulSV(s, this.m_minLength, o, i.Draw_s_pMin)
            t.DrawPoint(m, 4, i$Draw_s_c2)
          }
          if (this.m_maxLength < c) {
            var f = It.AddVMulSV(s, this.m_maxLength, o, i.Draw_s_pMax)
            t.DrawPoint(f, 4, i$Draw_s_c3)
          }
        }
      }
    }
  ])
  return i
}(Tn)
qn.InitVelocityConstraints_s_P = new It()
qn.SolveVelocityConstraints_s_vpA = new It()
qn.SolveVelocityConstraints_s_vpB = new It()
qn.SolveVelocityConstraints_s_P = new It()
qn.SolvePositionConstraints_s_P = new It()
qn.Draw_s_pA = new It()
qn.Draw_s_pB = new It()
qn.Draw_s_axis = new It()
qn.Draw_s_c1 = new o(.7, .7, .7)
qn.Draw_s_c2 = new o(.3, .9, .3)
qn.Draw_s_c3 = new o(.9, .3, .3)
qn.Draw_s_c4 = new o(.4, .4, .4)
qn.Draw_s_pRest = new It()
qn.Draw_s_pMin = new It()
qn.Draw_s_pMax = new It()
var zn = function (t) {
  $$_58_index.a(i, t)
  var e = $$_59_index.a(i)
  function i() {
    var t
    $$_27.a(this, i);
    (t = e.call(this, Sn.e_areaJoint)).bodies = []
    t.stiffness = 0
    t.damping = 0
    return t
  }
  $$_39.a(i, [
    {
      key: "AddBody",
      value: function (t) {
        this.bodies.push(t)
        if (1 === this.bodies.length) {
          this.bodyA = t
        } else {
          if (2 === this.bodies.length) {
            this.bodyB = t
          }
        }
      }
    }
  ])
  return i
}(Ln)
var En = function (t) {
  $$_58_index.a(i, t)
  var e = $$_59_index.a(i)
  function i(t) {
    var s
    $$_27.a(this, i);
    (s = e.call(this, t)).m_stiffness = 0
    s.m_damping = 0
    s.m_impulse = 0
    s.m_targetArea = 0
    s.m_delta = new It()
    s.m_bodies = t.bodies
    s.m_stiffness = m(t.stiffness, 0)
    s.m_damping = m(t.damping, 0)
    s.m_targetLengths = it(t.bodies.length)
    s.m_normals = It.MakeArray(t.bodies.length)
    s.m_joints = []
    s.m_deltas = It.MakeArray(t.bodies.length)
    var r = new On()
    r.stiffness = s.m_stiffness
    r.damping = s.m_damping
    s.m_targetArea = 0
    for (var o = 0; o < s.m_bodies.length; ++o) {
      var a = s.m_bodies[o]
      var u = s.m_bodies[(o + 1) % s.m_bodies.length]
      var l = a.GetWorldCenter()
      var h = u.GetWorldCenter()
      s.m_targetLengths[o] = It.DistanceVV(l, h)
      s.m_targetArea += It.CrossVV(l, h)
      r.Initialize(a, u, l, h)
      s.m_joints[o] = a.GetWorld().CreateJoint(r)
    }
    s.m_targetArea *= .5
    return s
  }
  $$_39.a(i, [
    {
      key: "GetAnchorA",
      value: function (t) {
        return t
      }
    }, {
      key: "GetAnchorB",
      value: function (t) {
        return t
      }
    }, {
      key: "GetReactionForce",
      value: function (t, e) {
        return e
      }
    }, {
      key: "GetReactionTorque",
      value: function (t) {
        return 0
      }
    }, {
      key: "SetStiffness",
      value: function (t) {
        this.m_stiffness = t
        for (var e = 0; e < this.m_joints.length; ++e) {
          this.m_joints[e].SetStiffness(t)
        }
      }
    }, {
      key: "GetStiffness",
      value: function () {
        return this.m_stiffness
      }
    }, {
      key: "SetDamping",
      value: function (t) {
        this.m_damping = t
        for (var e = 0; e < this.m_joints.length; ++e) {
          this.m_joints[e].SetDamping(t)
        }
      }
    }, {
      key: "GetDamping",
      value: function () {
        return this.m_damping
      }
    }, {
      key: "Dump",
      value: function (t) {
        t("Area joint dumping is not supported.\n")
      }
    }, {
      key: "InitVelocityConstraints",
      value: function (t) {
        for (var e = 0; e < this.m_bodies.length; ++e) {
          var i = this.m_bodies[(e + this.m_bodies.length - 1) % this.m_bodies.length]
          var n = this.m_bodies[(e + 1) % this.m_bodies.length]
          var /* [auto-meaningful-name] */t$positionsI$m_islandIndex$c = t.positions[i.m_islandIndex].c
          var /* [auto-meaningful-name] */t$positionsN$m_islandIndex$c = t.positions[n.m_islandIndex].c
          var o = this.m_deltas[e]
          It.SubVV(t$positionsN$m_islandIndex$c, t$positionsI$m_islandIndex$c, o)
        }
        if (t.step.warmStarting) {
          this.m_impulse *= t.step.dtRatio
          for (var a = 0; a < this.m_bodies.length; ++a) {
            var u = this.m_bodies[a]
            var /* [auto-meaningful-name] */t$velocitiesU$m_islandIndex$v = t.velocities[u.m_islandIndex].v
            var h = this.m_deltas[a]
            t$velocitiesU$m_islandIndex$v.x += u.m_invMass * h.y * .5 * this.m_impulse
            t$velocitiesU$m_islandIndex$v.y += u.m_invMass * -h.x * .5 * this.m_impulse
          }
        } else {
          this.m_impulse = 0
        }
      }
    }, {
      key: "SolveVelocityConstraints",
      value: function (t) {
        for (var e = 0, i = 0, n = 0; n < this.m_bodies.length; ++n) {
          var s = this.m_bodies[n]
          var /* [auto-meaningful-name] */t$velocitiesS$m_islandIndex$v = t.velocities[s.m_islandIndex].v
          var o = this.m_deltas[n]
          e += o.LengthSquared() / s.GetMass()
          i += It.CrossVV(t$velocitiesS$m_islandIndex$v, o)
        }
        var a = -2 * i / e
        this.m_impulse += a
        for (var u = 0; u < this.m_bodies.length; ++u) {
          var l = this.m_bodies[u]
          var /* [auto-meaningful-name] */t$velocitiesL$m_islandIndex$v = t.velocities[l.m_islandIndex].v
          var _ = this.m_deltas[u]
          t$velocitiesL$m_islandIndex$v.x += l.m_invMass * _.y * .5 * a
          t$velocitiesL$m_islandIndex$v.y += l.m_invMass * -_.x * .5 * a
        }
      }
    }, {
      key: "SolvePositionConstraints",
      value: function (t) {
        for (var e = 0, i = 0, n = 0; n < this.m_bodies.length; ++n) {
          var s = this.m_bodies[n]
          var r = this.m_bodies[(n + 1) % this.m_bodies.length]
          var /* [auto-meaningful-name] */t$positionsS$m_islandIndex$c = t.positions[s.m_islandIndex].c
          var /* [auto-meaningful-name] */t$positionsR$m_islandIndex$c = t.positions[r.m_islandIndex].c
          var u = It.SubVV(t$positionsR$m_islandIndex$c, t$positionsS$m_islandIndex$c, this.m_delta)
          var l = u.Length()
          if (l < f) {
            l = 1
          }
          this.m_normals[n].x = u.y / l
          this.m_normals[n].y = -u.x / l
          e += l
          i += It.CrossVV(t$positionsS$m_islandIndex$c, t$positionsR$m_islandIndex$c)
        }
        i *= .5
        for (var h = .5 * (this.m_targetArea - i) / e, _ = true, m = 0; m < this.m_bodies.length; ++m) {
          var c = this.m_bodies[m]
          var /* [auto-meaningful-name] */t$positionsC$m_islandIndex$c = t.positions[c.m_islandIndex].c
          var v = (m + 1) % this.m_bodies.length
          var y = It.AddVV(this.m_normals[m], this.m_normals[v], this.m_delta)
          y.SelfMul(h)
          var p = y.LengthSquared()
          if (p > vt(w)) {
            y.SelfMul(w / pt(p))
          }
          if (p > vt(A)) {
            _ = false
          }
          t$positionsC$m_islandIndex$c.x += y.x
          t$positionsC$m_islandIndex$c.y += y.y
        }
        return _
      }
    }
  ])
  return i
}(Tn)
export { ze }
export { We }
export { Qe }
export { Ye }
export { Ke }
export { He }
export { ei }
export { ri }
export { di }
export { Fi }
export { $i }
export { tn }
export { en }
export { nn }
export { sn }
export { rn }
export { on }
export { an }
export { un }
export { ln }
export { hn }
export { pn }
export { xn }
export { Bn }
export { Sn }
export { An }
export { Gn }
export { Dn }
export { Fn }
export { Ln }
export { Rn }
export { jn }
export { Tn }
export { On }
export { qn }
export { zn }
export { En }
