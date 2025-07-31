"use strict";

export { s as a };
var r = require("./34/index");
var i = function () {
  function e(e) {
    this.a = this.solve_a(e[0][0].x, e[0][0].y, e[0][1].x, e[1][0].x, e[1][0].y, e[1][1].x, e[2][0].x, e[2][0].y, e[2][1].x);
    this.b = this.solve_b(e[0][0].x, e[0][0].y, e[0][1].x, e[1][0].x, e[1][0].y, e[1][1].x, e[2][0].x, e[2][0].y, e[2][1].x);
    this.c = this.solve_c(e[0][0].x, e[0][0].y, e[0][1].x, e[1][0].x, e[1][0].y, e[1][1].x, this.a, this.b);
    this.d = this.solve_a(e[0][0].x, e[0][0].y, e[0][1].y, e[1][0].x, e[1][0].y, e[1][1].y, e[2][0].x, e[2][0].y, e[2][1].y);
    this.e = this.solve_b(e[0][0].x, e[0][0].y, e[0][1].y, e[1][0].x, e[1][0].y, e[1][1].y, e[2][0].x, e[2][0].y, e[2][1].y);
    this.f = this.solve_c(e[0][0].x, e[0][0].y, e[0][1].y, e[1][0].x, e[1][0].y, e[1][1].y, this.d, this.e);
  }
  e.prototype.solve_a = function (e, t, n, r, i, o, a, s, c) {
    return ((n - o) * (i - s) - (o - c) * (t - i)) / ((e - r) * (i - s) - (r - a) * (t - i));
  };
  e.prototype.solve_b = function (e, t, n, r, i, o, a, s, c) {
    return ((n - o) * (r - a) - (o - c) * (e - r)) / ((t - i) * (r - a) - (i - s) * (e - r));
  };
  e.prototype.solve_c = function (e, t, n, r, i, o, a, s) {
    return (n + o - a * (e + r) - s * (t + i)) / 2;
  };
  e.prototype.transform = function (e) {
    return {
      x: Math.round(this.a * e.x + this.b * e.y + this.c),
      y: Math.round(this.d * e.x + this.e * e.y + this.f)
    };
  };
  return e;
}();
var o = function () {
  var e = function (t, n) {
    return (e = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (e, t) {
      e.__proto__ = t;
    } || function (e, t) {
      for (var n in t) if (Object.prototype.hasOwnProperty.call(t, n)) {
        e[n] = t[n];
      }
    })(t, n);
  };
  return function (t, n) {
    function r() {
      this.constructor = t;
    }
    e(t, n);
    t.prototype = null === n ? Object.create(n) : (r.prototype = n.prototype, new r());
  };
}();
var a = function (e, t) {
  var n = "function" === typeof Symbol && e[Symbol.iterator];
  if (!n) {
    return e;
  }
  var r;
  var i;
  var o = n.call(e);
  var a = [];
  try {
    for (; (void 0 === t || t-- > 0) && !(r = o.next()).done;) {
      a.push(r.value);
    }
  } catch (s) {
    i = {
      error: s
    };
  } finally {
    try {
      if (r && !r.done && (n = o.return)) {
        n.call(o);
      }
    } finally {
      if (i) {
        throw i.error;
      }
    }
  }
  return a;
};
var s = function (e) {
  function t(t) {
    var n = e.call(this, String("attribute vec2 aVertexPosition;attribute vec2 aTextureCoord;uniform mat3 projectionMatrix;varying vec2 vTextureCoord;void main(void) { gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0); vTextureCoord = aTextureCoord;}"), String("varying vec2 vTextureCoord;uniform sampler2D uSampler;uniform vec4 inputSize;uniform vec4 outputFrame; const int NUM_TRIADS = number_triangles_to_be_replaced; uniform vec3 transform_matrixes[NUM_TRIADS * 2]; uniform vec2 triangles[NUM_TRIADS * 3];vec2 map_coord(vec2 coord) { coord *= inputSize.xy; coord += outputFrame.xy; return coord;}vec2 unmap_coord(vec2 coord) { coord -= outputFrame.xy; coord /= inputSize.xy; return coord;}float product(vec2 a, vec2 b, vec2 p) { return (b.x - a.x) * (p.y - a.y) - (b.y - a.y) * (p.x - a.x);}bool inside_triangle(vec2 a, vec2 b, vec2 c, vec2 p) { float min_x = min(a.x, b.x); min_x = min(min_x, c.x); float max_x = max(a.x, b.x); max_x = max(max_x, c.x); float min_y = min(a.y, b.y); min_y = min(min_y, c.y); float max_y = max(a.y, b.y); max_y = max(max_y, c.y); if(p.x < min_x || p.x > max_x || p.y < min_y || p.y > max_y) { return false; } float cross_ab = product(a, b, p); float cross_bc = product(b, c, p); float cross_ca = product(c, a, p); if(cross_ab < 0.0 && cross_bc < 0.0 && cross_ca < 0.0) return true; if(cross_ab > 0.0 && cross_bc > 0.0 && cross_ca > 0.0) return true; if(cross_ab == 0.0 || cross_bc == 0.0 || cross_ca == 0.0) return true; return false;}vec2 transform_by_matrix(vec3 first_line, vec3 second_line, vec2 coord) { float a = first_line.x; float b = first_line.y; float c = first_line.z; float d = second_line.x; float e = second_line.y; float f = second_line.z; return vec2(floor(a * coord.x + b * coord.y + c), floor(d * coord.x + e * coord.y + f));}vec4 get_color(vec2 coord) { return texture2D(uSampler, unmap_coord(coord));}vec4 blend(vec4 base, vec4 color) { float target_a = 1.0 - (1.0 - base.a) * (1.0 - color.a); base.r = (color.r * color.a / target_a) + (base.r * base.a * (1.0 - color.a) / target_a); base.g = (color.g * color.a / target_a) + (base.g * base.a * (1.0 - color.a) / target_a); base.b = (color.b * color.a / target_a) + (base.b * base.a * (1.0 - color.a) / target_a); base.a = target_a; return base;}vec4 map_triangle(vec2 coord) { coord = map_coord(coord); vec4 color = vec4(0.0, 0.0, 0.0, 0.0); for(int i = 0; i < NUM_TRIADS; i++) { vec2 p0 = triangles[i * 3]; vec2 p1 = triangles[i * 3 + 1]; vec2 p2 = triangles[i * 3 + 2]; if(inside_triangle(p0, p1, p2, coord)) { vec2 source_coord = transform_by_matrix(transform_matrixes[i * 2], transform_matrixes[i * 2 + 1], coord); vec4 source_color = get_color(source_coord); if(source_color.a > 0.9) return source_color; color = blend(color, source_color); } } return color;}void main(void) { gl_FragColor = map_triangle(vTextureCoord);}").replace(/number_triangles_to_be_replaced/g, t.triangles.length.toFixed(0))) || this;
    n.max_num_anchors = t.max_num_anchors;
    n.triangle_top_points = t.triangles;
    n.uniforms.transform_matrixes = [];
    n.uniforms.triangles = [];
    if (t.anchors) {
      n.set_anchors(t.anchors);
    }
    return n;
  }
  o(t, e);
  t.prototype.compute_target_rect = function (e, t, n) {
    for (var r = 1 / 0, i = -1 / 0, o = -1 / 0, a = 1 / 0, s = 0; s < this.max_num_anchors; s++) {
      var c = e[s][1];
      r = Math.min(r, c.x);
      i = Math.max(i, c.x);
      a = Math.min(a, c.y);
      o = Math.max(o, c.y);
    }
    r = Math.max(0, r);
    i = Math.min(t, i);
    return {
      top: a = Math.max(0, a),
      right: i,
      bottom: o = Math.min(n, o),
      left: r
    };
  };
  t.prototype.set_anchors = function (e, t, n) {
    var r;
    var o;
    var s;
    var c = e.length;
    if (c > this.max_num_anchors) {
      console.error("Length of anchors (" + c + ") exceeds the maximum anchors length (" + this.max_num_anchors + ") which decided when the filter was constructed. ");
      e.slice(0, this.max_num_anchors);
    }
    var u = null === (s = null === (o = null === (r = this.uniforms.filterGlobals) || void 0 === r ? void 0 : r.uniforms) || void 0 === o ? void 0 : o.outputFrame) || void 0 === s ? void 0 : s.clone();
    if (u && t && n && (u.pad(-this.padding), u.width > 0 && u.height > 0)) {
      var l = this.compute_target_rect(e, t, n);
      this.padding = Math.max(0, u.left - l.left, u.top - l.top, l.right - (u.left + u.width), l.bottom - (u.top + u.height)) + 5;
    }
    this.uniforms.triangles.length = 0;
    this.uniforms.transform_matrixes.length = 0;
    for (var f = 0; f < this.triangle_top_points.length; f++) {
      var h = a(this.triangle_top_points[f], 3);
      var d = h[0];
      var p = h[1];
      var _ = h[2];
      this.uniforms.triangles[6 * f] = Math.floor(e[d][1].x);
      this.uniforms.triangles[6 * f + 1] = Math.floor(e[d][1].y);
      this.uniforms.triangles[6 * f + 2] = Math.floor(e[p][1].x);
      this.uniforms.triangles[6 * f + 3] = Math.floor(e[p][1].y);
      this.uniforms.triangles[6 * f + 4] = Math.floor(e[_][1].x);
      this.uniforms.triangles[6 * f + 5] = Math.floor(e[_][1].y);
      var A = new i([[e[d][1], e[d][0]], [e[p][1], e[p][0]], [e[_][1], e[_][0]]]);
      this.uniforms.transform_matrixes[6 * f] = A.a;
      this.uniforms.transform_matrixes[6 * f + 1] = A.b;
      this.uniforms.transform_matrixes[6 * f + 2] = A.c;
      this.uniforms.transform_matrixes[6 * f + 3] = A.d;
      this.uniforms.transform_matrixes[6 * f + 4] = A.e;
      this.uniforms.transform_matrixes[6 * f + 5] = A.f;
    }
  };
  return t;
}(r.i);
export default s;