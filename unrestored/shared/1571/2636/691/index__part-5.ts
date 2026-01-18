/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：691__part-5
 */

"use strict"

var P
import * as /* [auto-meaningful-name] */$_119 from "./119"
import * as c from "./65"
import * as /* [auto-meaningful-name] */$_32_index from "./32/index"
import * as /* [auto-meaningful-name] */Axios from "axios"
import /* [auto-meaningful-name] */Axios1 from "axios"
var V = function (e, t, n, r) {
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
var G = function (e, t) {
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
var /* [auto-meaningful-name] */SpriteSheetIsBeingLoaded$ = "Sprite sheet is being loaded."
var /* [auto-meaningful-name] */SpriteSheetAlreadyExists$ = "Sprite sheet already exists."
var /* [auto-meaningful-name] */CannotLoadTheImageOfSpriteSheet = "Cannot load the image of sprite sheet"
var /* [auto-meaningful-name] */CannotParseSpriteSheetTextures$ = "Cannot parse sprite sheet textures."
var X = function () {
  function e(e) {
    this.data = e
    this.loading_urls = new Set()
  }
  e.prototype.load_texture = function (e, t) {
    return V(this, undefined, undefined, function () {
      var n
      return G(this, function (r) {
        return this.data.get_texture(e) ? [2, new $_119.a("Texture " + e + " already exists. Please use new texture id")] : (n = $_32_index.y.from(t), $_32_index.y.addToCache(n, e), n.valid ? [2, new $_119.a("This texture " + e + " is already available in pixi")] : [
          2, new Promise(function (e, t) {
            n.baseTexture.on("loaded", function () {
              e()
            })
            n.baseTexture.on("update", function () {
              e()
            })
            n.baseTexture.on("error", function (e) {
              n.destroy(true)
              t(e)
            })
          })
        ])
      })
    })
  }
  e.prototype.get_texture_img_url = function (e) {
    var t = this.data.get_texture(e)
    if (!t) {
      return $_119.b.error("Cannot find texture " + e)
    }
    var n = t.baseTexture.getDrawableSource && t.baseTexture.getDrawableSource()
    return n && n instanceof HTMLImageElement ? $_119.b.success(n.src) : $_119.b.error("Cannot get url because source is not ImageElement")
  }
  e.prototype.destroy_texture = function (e) {
    var t = this.data.get_texture(e)
    return t ? this.data.is_texture_in_sprite_sheet(e) ? new $_119.a("Texture " + e + " is part of sprite sheet. Cannot destroy it alone") : (t.destroy(true), void this.data.clear_texture_points_cache(e)) : new $_119.a("Cannot find texture " + e)
  }
  e.prototype.clear_texture_cache = function (e) {
    if (!this.data.get_texture(e)) {
      return new $_119.a("Cannot find texture " + e)
    }
    delete $_32_index.B.TextureCache[e]
    this.data.clear_texture_points_cache(e)
  }
  e.prototype.clear_all_textures_cache = function () {
    this.data.clear_all_textures_points_cache()
  }
  e.prototype.destroy_all_textures = function () {
    $_32_index.B.destroyTextureCache()
    $_32_index.B.clearTextureCache()
    this.data.clear_all_textures_points_cache()
    this.data.clear_all_sprite_sheet_cache()
  }
  e.prototype.load_sprite_sheet = function (e) {
    return V(this, undefined, undefined, function () {
      var t
      var n
      var /* [auto-meaningful-name] */i$data
      var i
      var o
      var s
      var c
      var l
      var f = this
      return G(this, function (d) {
        switch (d.label) {
          case 0:
            if (t = this.data.get_sprite_sheet_data(e)) {
              new $_119.a(SpriteSheetAlreadyExists$)
              return [2, t.texture_ids]
            }
            if (this.loading_urls.has(e)) {
              return [2, new $_119.a(SpriteSheetIsBeingLoaded$)]
            }
            this.loading_urls.add(e)
            n = function () {
              return f.loading_urls.delete(e)
            }
            d.label = 1
          case 1:
            d.trys.push([1, 3,, 4])
            return [4, Axios1.get(e)]
          case 2:
            i = d.sent()
            i$data = i.data
            return [3, 4]
          case 3:
            o = d.sent()
            n()
            return [2, new $_119.a(o)]
          case 4:
            s = $_32_index.B.url.resolve(e, i$data.meta.image)
            c = "SPRITE_SHEET_" + e
            d.label = 5
          case 5:
            d.trys.push([5, 7,, 8])
            return [4, this.load_texture(c, s)]
          case 6:
            d.sent()
            l = this.data.get_texture(c)
            return [3, 8]
          case 7:
            d.sent()
            n()
            return [2, new $_119.a(CannotLoadTheImageOfSpriteSheet)]
          case 8:
            return l ? [4, this.data.parse_and_cache_sprite_sheet_data(e, c, i$data)] : (n(), [2, new $_119.a(CannotLoadTheImageOfSpriteSheet)])
          case 9:
            return (t = d.sent()) ? (n(), [2, t.texture_ids]) : (n(), [2, new $_119.a(CannotParseSpriteSheetTextures$)])
        }
      })
    })
  }
  e.prototype.destroy_sprite_sheet = function (e) {
    var t = this
    var n = this.data.get_sprite_sheet_data(e)
    if (!n) {
      return new $_119.a("Cannot find sprite sheet " + e)
    }
    n.texture_ids.forEach(function (e) {
      var n = t.data.get_texture(e)
      if (n) {
        n.destroy()
      }
    })
    var r = this.data.get_texture(n.origin_texture_id)
    if (r) {
      r.destroy(true)
    }
    this.data.clear_sprite_sheet_cache(e)
  }
  e.prototype.get_sprite_sheet_texture_ids = function (e) {
    var t = this.data.get_sprite_sheet_data(e)
    if (t) {
      return t.texture_ids
    }
  }
  return e
}()
!function (e) {
  e[e.QUAD = 0] = "QUAD"
  e[e.BOUNCE = 1] = "BOUNCE"
}(P || (P = {}))
var Y
var q = function (e) {
  return 1 - (1 - e) * (1 - e)
}
var $ = function (e) {
  var t = 7.5625
  var n = 2.75
  return e < 1 / n ? t * e * e : e < 2 / n ? t * (e -= 1.5 / n) * e + .75 : e < 2.5 / n ? t * (e -= 2.25 / n) * e + .9375 : t * (e -= 2.625 / n) * e + .984375
}
!function (e) {
  e[e.X = 0] = "X"
  e[e.Y = 1] = "Y"
  e[e.ALPHA = 2] = "ALPHA"
  e[e.ANGLE = 3] = "ANGLE"
}(Y || (Y = {}))
var J = function () {
  function e(e) {
    this.handler_cache = new Set()
    this.app = e
  }
  e.prototype.update_attributes = function (e, t, n) {
    var r
    var i
    if (!(e instanceof $_32_index.A)) {
      switch (n) {
        case Y.X:
          i = t - e.x
          r = e.x
          return function (t) {
            e.position.set(r + i * t, e.position.y)
          }
        case Y.Y:
          i = t - e.y
          r = e.y
          return function (t) {
            e.position.set(e.position.x, r + i * t)
          }
        case Y.ALPHA:
          i = t - e.alpha
          r = e.alpha
          return function (t) {
            e.alpha = r + i * t
          }
      }
    }
    if (n === Y.ANGLE) {
      i = t - e.angle
      r = e.angle
      return function (t) {
        e.angle = r + i * t
      }
    }
  }
  e.prototype.create_tween = function (e) {
    var /* [auto-meaningful-name] */e$to_options
    var n
    var r = this
    var /* [auto-meaningful-name] */e$target = e.target
    var o = 1e3 * e.duration
    var s = performance.now()
    var c = (null === (e$to_options = e.to_options) || undefined === e$to_options ? undefined : e$to_options.ease) || P.QUAD
    var /* [auto-meaningful-name] */e$to_options1 = e.to_options
    var l = e.delay ? 1e3 * e.delay : 0
    switch (c) {
      case P.QUAD:
        n = q
        break
      case P.BOUNCE:
        n = $
    }
    var f = {}
    if (!(e$target instanceof $_32_index.A)) {
      if (undefined !== e$to_options1.x && e$to_options1.x - e$target.position.x !== 0) {
        f.update_x = this.update_attributes(e$target, e$to_options1.x, Y.X)
      }
      if (undefined !== e$to_options1.y && e$to_options1.y - e$target.position.y !== 0) {
        f.update_y = this.update_attributes(e$target, e$to_options1.y, Y.Y)
      }
      if (undefined !== e$to_options1.visible) {
        e$target.visible = e$to_options1.visible
      }
      if (undefined !== e$to_options1.alpha) {
        f.update_alpha = this.update_attributes(e$target, e$to_options1.alpha, Y.ALPHA)
      }
    }
    if (undefined !== e$to_options1.angle) {
      f.update_angle = this.update_attributes(e$target, e$to_options1.angle, Y.ANGLE)
    }
    var d = function e() {
      var t = performance.now()
      if (!(l > 0 && s + l > t)) {
        var i = (t - s - l) / o
        var a = n(i)
        if (i > 1) {
          r.update_target(f, a)
          return void r.remove_ticker(e)
        }
        r.update_target(f, a)
      }
    }
    this.handler_cache.add(d)
    this.app.get_app().ticker.add(d)
  }
  e.prototype.update_target = function (e, t) {
    if (e.update_x) {
      e.update_x(t)
    }
    if (e.update_y) {
      e.update_y(t)
    }
    if (e.update_alpha) {
      e.update_alpha(t)
    }
    if (e.update_angle) {
      e.update_angle(t)
    }
  }
  e.prototype.to = function (e, t, n, r) {
    this.create_tween({
      target: e,
      duration: t,
      to_options: n,
      delay: r
    })
    return this
  }
  e.prototype.from = function (e, t, n, r) {
    var i = {
      angle: e.angle
    }
    if (!(e instanceof $_32_index.A)) {
      i.x = e.position.x
      i.y = e.position.x
      i.visible = e.visible
      i.alpha = e.alpha
    }
    this.set_target_initial_state(e, n)
    this.create_tween({
      target: e,
      duration: t,
      to_options: i,
      delay: r
    })
    return this
  }
  e.prototype.from_to = function (e, t, n, r, i) {
    this.set_target_initial_state(e, n)
    this.create_tween({
      target: e,
      duration: t,
      to_options: r,
      delay: i
    })
    return this
  }
  e.prototype.set_target_initial_state = function (e, t) {
    if (!(e instanceof $_32_index.A)) {
      if (undefined !== t.x) {
        e.position.x = t.x
      }
      if (undefined !== t.y) {
        e.position.y = t.y
      }
      if (undefined !== t.alpha) {
        e.alpha = t.alpha
      }
      if (undefined !== t.visible) {
        e.visible = t.visible
      }
    }
    if (undefined !== t.angle) {
      e.angle = t.angle
    }
  }
  e.prototype.set_complete_handler = function (e) {
    this.on_complete = e
  }
  e.prototype.get_cache_size = function () {
    return this.handler_cache.size
  }
  e.prototype.clear = function () {
    var e = this
    this.handler_cache.forEach(function (t) {
      e.app.get_app().ticker.remove(t)
    })
    this.handler_cache.clear()
    this.on_complete = undefined
  }
  e.prototype.remove_ticker = function (e) {
    this.app.get_app().ticker.remove(e)
    this.handler_cache.delete(e)
    if (0 === this.handler_cache.size) {
      if (this.on_complete) {
        this.on_complete()
      }
      this.on_complete = undefined
    }
  }
  return e
}()
var Z = function () {
  function e(e) {
    this.app = e
    this.tl = new J(this.app)
  }
  e.prototype.on_complete = function () {}
  e.prototype.set_transition = function (e, t, n, r) {
    var i = this
    this.clear_tl(t, n)
    this.on_complete = function () {
      i.reset_scenes(t, n)
      if (r) {
        r()
      }
    }
    if ("none" !== e) {
      switch (this.tl.set_complete_handler(this.on_complete), this.scene_destroy_handler = function () {
        i.clear_tl(t, n)
        i.scene_destroy_handler = undefined
      }, t.add_listener("destroy", this.scene_destroy_handler), n.add_listener("destroy", this.scene_destroy_handler), e) {
        case "slide_up":
        case "slide_left":
        case "slide_down":
        case "slide_right":
          return void this.set_slide_transition(t, n, e)
        case "bounce_up":
        case "bounce_down":
        case "bounce_left":
        case "bounce_right":
          return void this.set_bounce_transition(n, e)
        case "fade_in_out":
          return void this.set_fade_transition(t, n)
        case "distort":
          return void this.set_distort_transition(t, n)
      }
    } else if (r) {
      r()
    }
  }
  e.prototype.set_slide_transition = function (e, t, n) {
    var /* [auto-meaningful-name] */this$app$get_app$view = this.app.get_app().view
    var /* [auto-meaningful-name] */this$app$get_app$view$width = this$app$get_app$view.width
    var /* [auto-meaningful-name] */this$app$get_app$view$height = this$app$get_app$view.height
    t.visible = true
    var a = 0
    var s = 0
    switch (n) {
      case "slide_down":
        t.position.y = -this$app$get_app$view$height
        s = this$app$get_app$view$height
        break
      case "slide_up":
        t.position.y = this$app$get_app$view$height
        s = -this$app$get_app$view$height
        break
      case "slide_left":
        t.position.x = this$app$get_app$view$width
        a = -this$app$get_app$view$width
        break
      case "slide_right":
        t.position.x = -this$app$get_app$view$width
        a = this$app$get_app$view$width
    }
    this.tl.to(e, .5, {
      x: a,
      y: s,
      ease: P.QUAD
    }).to(t, .5, {
      x: 0,
      y: 0,
      ease: P.QUAD
    })
  }
  e.prototype.set_bounce_transition = function (e, t) {
    var n = this.app.get_app()
    var r = this.app.get_scene_container()
    var /* [auto-meaningful-name] */n$view = n.view
    var /* [auto-meaningful-name] */n$view$width = n$view.width
    var /* [auto-meaningful-name] */n$view$height = n$view.height
    this.in_scene_origin_z_index = r.getChildIndex(e)
    r.setChildIndex(e, r.children.length - 1)
    e.visible = true
    switch (t) {
      case "bounce_down":
        e.position.y = -n$view$height
        break
      case "bounce_up":
        e.position.y = n$view$height
        break
      case "bounce_left":
        e.position.x = n$view$width
        break
      case "bounce_right":
        e.position.x = -n$view$width
    }
    this.tl.to(e, 1, {
      x: 0,
      y: 0,
      ease: P.BOUNCE
    })
  }
  e.prototype.set_fade_transition = function (e, t) {
    t.visible = true
    t.alpha = 0
    this.tl.to(e, .5, {
      alpha: 0,
      ease: P.QUAD
    }).from_to(t, .5, {
      alpha: 0
    }, {
      alpha: 1,
      ease: P.QUAD
    })
  }
  e.prototype.set_distort_transition = function (e, t) {
    var n = this.app.get_app()
    var /* [auto-meaningful-name] */n$view = n.view
    var /* [auto-meaningful-name] */n$view$width = n$view.width
    var /* [auto-meaningful-name] */n$view$height = n$view.height
    var s = new $_32_index.r(new $_32_index.d({
      width: n$view$width,
      height: n$view$height
    }))
    var u = new $_32_index.r(new $_32_index.d({
      width: n$view$width,
      height: n$view$height
    }))
    e.visible = true
    t.visible = false
    n.renderer.render(n.stage, {
      renderTexture: s
    })
    e.visible = false
    t.visible = true
    n.renderer.render(n.stage, {
      renderTexture: u
    })
    this.out_sprite = $_32_index.t.from(s)
    this.out_sprite.anchor.set(.5)
    this.in_sprite = $_32_index.t.from(u)
    this.in_sprite.anchor.set(.5)
    var l = Math.min(n$view$width, n$view$height)
    var f = new $_32_index.o(n$view$width / 2, n$view$height / 2)
    var d = new $_32_index.A({
      radius: l,
      angle: 0,
      padding: 10
    })
    d.offset = f
    var h = new $_32_index.A({
      radius: l,
      angle: c.b(189),
      padding: 10
    })
    h.offset = f
    this.out_sprite.filters = [d]
    this.in_sprite.filters = [h]
    n.stage.addChild(this.out_sprite, this.in_sprite)
    this.tl.from_to(this.out_sprite, .5, {
      alpha: 1
    }, {
      alpha: 0
    }).from_to(d, .5, {
      angle: 0
    }, {
      angle: c.b(-227.8)
    }).from_to(this.in_sprite, .5, {
      visible: true,
      alpha: 0
    }, {
      visible: true,
      alpha: 1
    }, .1).to(h, .5, {
      angle: 0
    }, .1)
  }
  e.prototype.clear_tl = function (e, t) {
    if (this.tl.get_cache_size()) {
      this.reset_scenes(e, t)
      this.tl.clear()
    }
  }
  e.prototype.reset_scenes = function (e, t) {
    e.x = 0
    e.y = 0
    e.alpha = 1
    t.x = 0
    t.y = 0
    t.alpha = 1
    if (this.scene_destroy_handler) {
      e.remove_listener("destroy", this.scene_destroy_handler)
      t.remove_listener("destroy", this.scene_destroy_handler)
      this.scene_destroy_handler = undefined
    }
    if (undefined !== this.in_scene_origin_z_index) {
      this.app.get_scene_container().setChildIndex(t, this.in_scene_origin_z_index)
      this.in_scene_origin_z_index = undefined
    }
    if (this.out_sprite) {
      this.out_sprite.destroy({
        children: true,
        texture: true,
        baseTexture: true
      })
      this.out_sprite = undefined
    }
    if (this.in_sprite) {
      this.in_sprite.destroy({
        children: true,
        texture: true,
        baseTexture: true
      })
      this.in_sprite = undefined
    }
  }
  return e
}()
export { X }
export { Z }
