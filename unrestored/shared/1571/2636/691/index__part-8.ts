/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：691__part-8
 */

"use strict"

import { s } from "./index__part-1"
import * as /* [auto-meaningful-name] */$$_105 from "../105"
import * as /* [auto-meaningful-name] */$_523_index from "./523/index"
import * as /* [auto-meaningful-name] */$_744_index from "./744/index"
import * as c from "./65"
import * as /* [auto-meaningful-name] */$_32_index from "./32/index"
import * as /* [auto-meaningful-name] */$_268_index from "./268/index"
import * as /* [auto-meaningful-name] */$_217_index from "./217/index"
var fe = function (e, t, n, r) {
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
var de = function (e, t) {
  if ("object" === typeof Reflect && "function" === typeof Reflect.metadata) {
    return Reflect.metadata(e, t)
  }
}
var he = function (e, t) {
  return function (n, r) {
    t(n, r, e)
  }
}
var pe = function (e, t, n, r) {
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
var _e = function (e, t) {
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
var Ae = function () {
  function e(e, t, n, r, i, o, a, s) {
    this.app = e
    this.data = t(e)
    this.textures = n(this.data)
    this.scenes = r(e, this.data)
    this.actors = i(e, this.data)
    this.stage_animation = o(this.data)
    this.physics = a(e, this.data)
    this.events = s
  }
  e.prototype.init = function (e) {
    this.app.init(e)
  }
  e.prototype.render = function () {
    this.app.render()
  }
  e.prototype.start_rendering = function () {
    this.app.get_app().ticker.start()
  }
  e.prototype.stop_rendering = function () {
    this.app.get_app().ticker.stop()
  }
  e.prototype.get_view = function () {
    return this.app.get_app().view
  }
  e.prototype.get_view_size = function () {
    return this.app.get_app_view_size()
  }
  e.prototype.get_screenshot = function (e) {
    return pe(this, undefined, undefined, function () {
      var t = this
      return _e(this, function (n) {
        return [
          2, new Promise(function (n, r) {
            t.app.get_screenshot(e).then(n).catch(r)
          })
        ]
      })
    })
  }
  e.prototype.extract_pixels = function (e, t, n, r) {
    var i = this.get_view()
    var /* [auto-meaningful-name] */i$width = i.width
    var /* [auto-meaningful-name] */i$height = i.height
    var c = new $_32_index.r(new $_32_index.d({
      width: i$width,
      height: i$height
    }))
    this.app.get_app().renderer.render(this.app.get_app().stage, {
      renderTexture: c
    })
    if (this.app.get_renderer_type() === $_32_index.p.WEBGL) {
      c.frame = this.get_render_texture_frame(e, t, n, r)
      return this.app.get_extract_module().pixels(c)
    }
    var u = this.app.get_extract_module().canvas(c).getContext("2d")
    return u ? u.getImageData(e, t, n, r).data : undefined
  }
  e.prototype.extract_canvas = function (e, t, n, r) {
    var i = this.get_view()
    var /* [auto-meaningful-name] */i$width = i.width
    var /* [auto-meaningful-name] */i$height = i.height
    var c = new $_32_index.r(new $_32_index.d({
      width: i$width,
      height: i$height
    }))
    this.app.get_app().renderer.render(this.app.get_app().stage, {
      renderTexture: c
    })
    c.frame = this.get_render_texture_frame(e, t, n, r)
    return this.app.get_extract_module().canvas(c)
  }
  e.prototype.get_render_texture_frame = function (e, t, n, r) {
    var i = this.get_view()
    var /* [auto-meaningful-name] */i$width = i.width
    var /* [auto-meaningful-name] */i$height = i.height
    e = $_217_index.a(0, i$width - 1, e)
    n = $_217_index.a(1, i$width - e, n)
    t = $_217_index.a(0, i$height - 1, t)
    r = $_217_index.a(1, i$height - t, r)
    return new $_32_index.q(e, t, n, r)
  }
  e.prototype.resize = function (e, t) {
    this.app.resize(e, t)
  }
  e.prototype.set_background_color = function (e) {
    this.app.get_app().renderer.backgroundColor = e
  }
  e.prototype.set_background_alpha = function (e) {
    this.app.get_app().renderer.backgroundAlpha = e
  }
  e.prototype.add_rendering_update_listener = function (e) {
    this.app.get_app().ticker.add(e)
  }
  e.prototype.remove_rendering_update_listener = function (e) {
    this.app.get_app().ticker.remove(e)
  }
  e.prototype.destroy = function () {
    this.data.clear_all_actors_cache()
    this.data.clear_all_scenes_cache()
    this.data.clear_all_sprite_sheet_cache()
    this.data.clear_all_textures_points_cache()
    this.app.destroy()
  }
  return e = fe([$_268_index.injectable(), he(0, $_268_index.inject(s.App)), he(1, $_268_index.inject(s.Data)), he(2, $_268_index.inject(s.Textures)), he(3, $_268_index.inject(s.Scenes)), he(4, $_268_index.inject(s.Actors)), he(5, $_268_index.inject(s.StageAnimation)), he(6, $_268_index.inject(s.Physics)), he(7, $_268_index.inject(s.Events)), de("design:paramtypes", [Object, Function, Function, Function, Function, Function, Function, Object])], e)
}()
var ge = function () {
  return (ge = Object.assign || function (e) {
    for (var t, n = 1, /* [auto-meaningful-name] */arguments$length = arguments.length; n < arguments$length; n++) {
      for (var i in t = arguments[n]) if (Object.prototype.hasOwnProperty.call(t, i)) {
        e[i] = t[i]
      }
    }
    return e
  }).apply(this, arguments)
}
var ve = function (e, t, n, r) {
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
var me = function (e, t) {
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
var ye = function (e, t) {
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
var be = function (e, t) {
  var n = "function" === typeof Symbol && e[Symbol.iterator]
  if (!n) {
    return e
  }
  var r
  var i
  var o = n.call(e)
  var a = []
  try {
    for (; (undefined === t || t-- > 0) && !(r = o.next()).done;) {
      a.push(r.value)
    }
  } catch (s) {
    i = {
      error: s
    }
  } finally {
    try {
      if (r && !r.done && (n = o.return)) {
        n.call(o)
      }
    } finally {
      if (i) {
        throw i.error
      }
    }
  }
  return a
}
var we = function () {
  function e(e) {
    this.data = e
  }
  e.prototype.init = function () {
    return ve(this, undefined, undefined, function () {
      var e
      var t
      return me(this, function (r) {
        switch (r.label) {
          case 0:
            return !this.cmao_gsap ? (e = this, [4, import("./3328")]) : [3, 2]
          case 1:
            e.cmao_gsap = r.sent()
            r.label = 2
          case 2:
            return !this.cmao_custom_ease ? (t = this, [4, import("./3329")]) : [3, 4]
          case 3:
            t.cmao_custom_ease = r.sent()
            r.label = 4
          case 4:
            if (this.cmao_gsap && this.cmao_custom_ease) {
              this.cmao_gsap.gsap.registerPlugin(this.cmao_custom_ease.CustomEase)
            }
            return [2]
        }
      })
    })
  }
  e.prototype.create_ease_function = function (e, t) {
    if (this.cmao_custom_ease) {
      return this.cmao_custom_ease.CustomEase.create(e, t)
    }
  }
  e.prototype.compose_timeline = function (e, t, n) {
    var r = this
    if (this.cmao_gsap && this.data.get_internal_actor(e)) {
      var /* [auto-meaningful-name] */n$on_start
      var /* [auto-meaningful-name] */n$on_update
      var /* [auto-meaningful-name] */n$on_complete
      if (n) {
        n$on_start = n.on_start
        n$on_update = n.on_update
        n$on_complete = n.on_complete
      }
      var s = new this.cmao_gsap.TimelineLite({
        onStart: n$on_start,
        onUpdate: n$on_update,
        onComplete: n$on_complete
      })
      t.forEach(function (t) {
        var /* [auto-meaningful-name] */t$tween_opt = t.tween_opt
        var /* [auto-meaningful-name] */t$timeline_pos = t.timeline_pos
        var o = r.compose_tween(e, t$tween_opt)
        if (o) {
          s.add(o, t$timeline_pos)
        }
      })
      return s
    }
  }
  e.prototype.compose_tween = function (e, t) {
    var n = this.data.get_internal_actor(e)
    if (this.cmao_gsap && n) {
      var r
      var i
      switch (t.variation_type) {
        case $$_105.f.TO:
          i = this.manufacture_tween_vars(n, [t.tween_vars])
          r = this.cmao_gsap.TweenLite.to(i.target, i.vars[0])
          break
        case $$_105.f.FROM:
          i = this.manufacture_tween_vars(n, [t.tween_vars])
          r = this.cmao_gsap.TweenLite.from(i.target, i.vars[0])
          break
        case $$_105.f.FROM_TO:
          i = this.manufacture_tween_vars(n, [t.tween_vars.from, t.tween_vars.to])
          r = this.cmao_gsap.TweenLite.fromTo(i.target, i.vars[0], i.vars[1])
      }
      n.on("destroy", function () {
        return r.kill()
      })
      return r
    }
  }
  e.prototype.manufacture_tween_vars = function (t, n) {
    var r = this
    var i = {}
    var o = []
    var a = Object.keys(e.HOOK_FACTORY)
    n.forEach(function (n) {
      var /* [auto-meaningful-name] */n$on_start = n.on_start
      var /* [auto-meaningful-name] */n$on_update = n.on_update
      var /* [auto-meaningful-name] */n$on_complete = n.on_complete
      var l = ye(n, ["on_start", "on_update", "on_complete"])
      var f = $_523_index.a(l)
      var d = Math.random().toString()
      f.id = d
      var h = false
      if (r.cmao_gsap) {
        var /* [auto-meaningful-name] */r$cmao_gsap = r.cmao_gsap
        var _ = []
        var g = []
        var v = {}
        var m = Object.keys(l)
        a.forEach(function (n) {
          if ($_744_index.a(n, m)) {
            if ("undefined" === typeof i[n]) {
              i[n] = 0
            }
            var r = be(e.HOOK_FACTORY[n](t, i), 3)
            var o = r[0]
            var a = r[1]
            var s = r[2]
            _.push(o)
            g.push(a)
            if (s) {
              v[n] = s
            }
          }
        })
        _.push(function () {
          h = true
          var e = r$cmao_gsap.gsap.getById(d)
          if (e) {
            e.invalidate()
          }
        })
        if (n$on_start) {
          _.push(n$on_start)
        }
        if (n$on_update) {
          g.push(n$on_update)
        }
        o.push(ge(ge({}, f), {
          modifiers: v,
          onStart: function () {
            _.forEach(function (e) {
              return e()
            })
          },
          onUpdate: function () {
            if (h) {
              g.forEach(function (e) {
                return e()
              })
            }
          },
          onComplete: n$on_complete
        }))
      }
    })
    return {
      target: i,
      vars: o
    }
  }
  e.HOOK_FACTORY = {
    position_x: function (e, t) {
      return [
        function () {
          t.position_x = e.position.x
        }, function () {
          var /* [auto-meaningful-name] */e$position$y = e.position.y
          e.set_pixi_position(t.position_x, e$position$y)
        }
      ]
    },
    position_y: function (e, t) {
      return [
        function () {
          t.position_y = -e.position.y
        }, function () {
          var /* [auto-meaningful-name] */e$position$x = e.position.x
          e.set_pixi_position(e$position$x, -t.position_y)
        }
      ]
    },
    scale_x: function (e, t) {
      return [
        function () {
          t.scale_x = e.scale.x
        }, function () {
          var /* [auto-meaningful-name] */e$scale$y = e.scale.y
          e.set_pixi_scale(t.scale_x, e$scale$y)
        }
      ]
    },
    scale_y: function (e, t) {
      return [
        function () {
          t.scale_y = e.scale.y
        }, function () {
          var /* [auto-meaningful-name] */e$scale$x = e.scale.x
          e.set_pixi_scale(e$scale$x, t.scale_y)
        }
      ]
    },
    rotation: function (e, t) {
      return [
        function () {
          t.rotation = e.rotation_value
        }, function () {
          e.set_rotation(t.rotation)
        }, function (e) {
          return c.s(e)
        }
      ]
    },
    pixi_rotation: function (e, t) {
      return [
        function () {
          t.pixi_rotation = e.rotation
        }, function () {
          e.set_pixi_rotation(t.pixi_rotation)
        }, function (e) {
          return c.s(e)
        }
      ]
    },
    alpha: function (e, t) {
      return [
        function () {
          t.alpha = e.alpha
        }, function () {
          e.set_alpha(t.alpha)
        }
      ]
    }
  }
  return e
}()
export { Ae }
export { we }
