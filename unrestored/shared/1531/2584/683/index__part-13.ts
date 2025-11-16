/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：683__part-13
 */

"use strict"

import { "683__part-1__s" as s } from "./index__part-1"
import { "683__part-8__Ae" as Ae } from "./index__part-8"
import { "683__part-9__Ne" as Ne, "683__part-9__je" as je } from "./index__part-9"
import { "683__part-10__Ge" as Ge, "683__part-10__Wt" as Wt, "683__part-10__Jt" as Jt, "683__part-10__on" as on, "683__part-10__cn" as cn } from "./index__part-10"
import { "683__part-11__Cr" as Cr, "683__part-11__Rr" as Rr } from "./index__part-11"
import { "683__part-12__Mr" as Mr } from "./index__part-12"
import * as /* [auto-meaningful-name] */$_467 from "./467"
import * as /* [auto-meaningful-name] */$_128 from "./128"
import * as /* [auto-meaningful-name] */$_122 from "./122"
import * as c from "./65"
import * as /* [auto-meaningful-name] */$_34_index from "./34/index"
import * as /* [auto-meaningful-name] */$_269_index from "./269/index"
import * as /* [auto-meaningful-name] */$_318 from "./318"
var Lr = function () {
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
var Ur = new $_34_index.x({
  fontFamily: ["sans-serif", "Microsoft YaHei"],
  fontSize: "24px",
  fill: "#ffffff"
})
var Hr = function (e) {
  function t(t, n, r) {
    var i = e.call(this) || this
    i.is_cached = false
    i.loader_animation = function (e) {
      i.loading_icon.rotation -= .1 * e
    }
    i.app = t
    i.loader = n
    i.url = r
    i.loading_icon = new $_34_index.t()
    i.name_text = new $_34_index.v("")
    return i
  }
  Lr(t, e)
  t.prototype.load_texture = function () {
    var e = this
    this.loader.add({
      url: this.url,
      on_success: function (t) {
        var /* [auto-meaningful-name] */t$textures = t.textures
        if (t$textures) {
          e.loading_icon.texture = t$textures["wood_banner_loading.png"]
        }
      },
      on_error: function (e) {
        return console.error("wood texture load fail", e)
      }
    })
  }
  t.prototype.draw = function () {
    this.clear()
    var /* [auto-meaningful-name] */this$app$get_app$view = this.app.get_app().view
    var /* [auto-meaningful-name] */this$app$get_app$view$width = this$app$get_app$view.width
    var /* [auto-meaningful-name] */this$app$get_app$view$height = this$app$get_app$view.height
    this.name_text.visible = true
    this.loading_icon.visible = true
    this.name_text.style = Ur
    this.name_text.anchor.set(0, .5)
    this.loading_icon.anchor.set(.5)
    var r = this$app$get_app$view$width
    this.loading_icon.x = 60 - r / 2
    this.loading_icon.y = 40 - this$app$get_app$view$height / 2
    this.name_text.x = 100 - r / 2
    this.name_text.y = 40 - this$app$get_app$view$height / 2
    this.beginFill(0, .8)
    this.drawRect(-r / 2, -this$app$get_app$view$height / 2, r, 80)
    this.endFill()
  }
  t.prototype.show = function (e) {
    if (e) {
      this.name_text.text = e
    }
    if (!this.is_cached) {
      this.load_texture()
      this.addChild(this.name_text, this.loading_icon)
      this.draw()
      this.interactive = true
      this.setParent(this.app.get_app().stage)
      this.is_cached = true
    }
    this.visible = true
    this.app.get_app().ticker.add(this.loader_animation)
  }
  t.prototype.hide = function () {
    this.name_text.text = ""
    this.visible = false
    this.app.get_app().ticker.remove(this.loader_animation)
  }
  t.prototype.destroy = function () {
    this.app.get_app().ticker.remove(this.loader_animation)
    e.prototype.destroy.call(this, {
      children: true,
      texture: true
    })
  }
  return t
}($_34_index.j)
var Vr = function () {
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
var Gr = function (e) {
  function t(t, n) {
    var r = e.call(this) || this
    r.LINE_WIDTH = 1.5
    r.LINE_COLOR = 16777215
    r.LINE_ALPHA = 1
    r.draw_border_box = function (e) {
      r.update_transform(e)
      r.clear()
      r.lineStyle(r.LINE_WIDTH, r.LINE_COLOR, r.LINE_ALPHA)
      r.drawRect(-e.width / 2, -e.height / 2, e.width, e.height)
      r.endFill()
    }
    r.on_target_change = function (e) {
      if (r.target && c.l(r.target)) {
        if (undefined !== e.visible) {
          r.visible = e.visible
        }
        if (e.scale || e.texture) {
          r.draw_border_box(r.target)
        } else {
          if (e.position || e.pivot || e.rotation) {
            r.update_transform(r.target)
          }
        }
      }
    }
    r.on_target_destroy = function () {
      r.hide()
    }
    r.set_parent = function (e) {
      r.setParent(e)
    }
    r.app = t
    r.data = n
    var i = new $_34_index.h({
      rotation: 0,
      distance: 0,
      alpha: .3,
      color: 2171686,
      blur: .5
    })
    r.filters = [i]
    r.visible = false
    return r
  }
  Vr(t, e)
  t.prototype.set_target_actor = function (e) {
    var t = this.data.get_internal_actor(e)
    if (!t) {
      return new $_122.a("Cannot find actor " + e)
    }
    if (this.target !== t) {
      this.target = t
      this.visible = this.target.get_visible()
      this.draw_border_box(this.target)
      this.target.add_listener("change", this.on_target_change)
      this.target.add_listener("destroy", this.on_target_destroy)
      this.app.render()
    }
  }
  t.prototype.get_target_actor = function () {
    var /* [auto-meaningful-name] */this$target
    return null === (this$target = this.target) || undefined === this$target ? undefined : this$target.id
  }
  t.prototype.destroy = function () {
    if (c.l(this.target)) {
      this.target.remove_listener("destroy", this.on_target_destroy)
    }
    e.prototype.destroy.call(this, true)
  }
  t.prototype.update_transform = function (e) {
    this.position.set(e.position.x, e.position.y)
    this.pivot.set(e.pivot.x * e.scale.x, e.pivot.y * e.scale.y)
    this.rotation = e.rotation
  }
  t.prototype.hide = function () {
    if (this.target) {
      this.target.removeListener("change", this.on_target_change)
      this.target.removeListener("destroy", this.on_target_destroy)
      this.target = undefined
      this.visible = false
      this.app.render()
    }
  }
  return t
}($_34_index.j)
var zr = function () {
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
var Qr = function (e, t, n, r) {
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
var Wr = function (e, t) {
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
var Kr = function (e) {
  function t(t, n, r) {
    var i = e.call(this) || this
    i.cache = new Map()
    i.set_parent = function (e) {
      i.setParent(e)
    }
    i.theme = t
    i.app = n
    i.data = r
    return i
  }
  zr(t, e)
  t.prototype.load_actor_box = function (e) {
    var t = this.data.get_internal_actor(e)
    if (t) {
      return this.load_box(t)
    }
  }
  t.prototype.load_video_box = function (e) {
    if ($_467.b(e)) {
      return this.load_box(e)
    }
  }
  t.prototype.load_box = function (e) {
    var t = this.cache.get(e.get_id())
    if (t) {
      return t
    }
    var n = new Xr(this.app, e, this.theme, this.cache)
    this.addChild(n)
    this.cache.set(e.get_id(), n)
    return n
  }
  t.prototype.get_box = function (e) {
    return this.cache.get(e)
  }
  t.prototype.set_theme = function (e) {
    this.theme = e
    this.cache.forEach(function (t) {
      t.update_theme(e)
    })
  }
  t.prototype.hide_all_boxes = function () {
    this.cache.forEach(function (e) {
      e.set_visible(false)
    })
  }
  t.prototype.destroy_all_boxes = function () {
    this.cache.forEach(function (e) {
      e.destroy()
    })
    this.cache.clear()
  }
  return t
}($_34_index.f)
var Xr = function (e) {
  function t(t, n, r, i) {
    var o = e.call(this) || this
    o.app = t
    o.target = n
    o.theme = r
    o.cache = i
    o.box_visible = true
    o.LINE_WIDTH = 2
    o.ICON_HEIGHT = 5
    o.ICON_WIDTH = 43
    o.MIN_BOX = 54
    o.RADUIS = 4
    o.on_target_destroy = function () {
      return o.destroy()
    }
    o.on_actor_update = function (e) {
      if (c.l(o.target)) {
        if (undefined !== e.visible) {
          o.visible = e.visible && o.box_visible
        }
        if (e.scale || e.texture) {
          o.draw(o.target)
        } else {
          if (e.position || e.pivot || undefined !== e.rotation) {
            o.update_transform(o.target)
          }
        }
      }
    }
    o.on_video_update = function (e) {
      if ($_467.b(o.target)) {
        if (undefined !== e.visible) {
          o.visible = e.visible && o.box_visible
        }
        if (e.scale) {
          o.draw(o.target)
        } else {
          if (e.position) {
            o.update_transform(o.target)
          }
        }
      }
    }
    o.target = n
    o.id = n.id
    o.visible = n.visible && o.box_visible
    o.icon = new $_34_index.t()
    o.icon.width = o.ICON_WIDTH
    o.icon.height = o.ICON_HEIGHT
    o.load_texture(o.theme.icon_url).then(function (e) {
      o.icon.texture = e
      o.app.render()
    }).catch(function (e) {
      return console.warn(e)
    })
    o.addChild(o.icon)
    o.draw(o.target)
    if (c.l(o.target)) {
      o.target.add_listener("change", o.on_actor_update)
      o.target.add_listener("destroy", o.on_target_destroy)
    } else {
      o.target.add_listener("change", o.on_video_update)
      o.target.add_listener("destroy", o.on_target_destroy)
    }
    return o
  }
  zr(t, e)
  t.prototype.load_texture = function (e) {
    return Qr(this, undefined, undefined, function () {
      var t
      return Wr(this, function (n) {
        return e && $_34_index.B.TextureCache[e] ? [2, $_34_index.B.TextureCache[e]] : e && $_34_index.B.BaseTextureCache[e] ? [2, new $_34_index.y($_34_index.B.BaseTextureCache[e])] : (t = e ? $_34_index.y.from(e) : $_34_index.y.EMPTY).valid ? [2, t] : [2, new Promise(function (e, n) {
          t.baseTexture.on("loaded", function () {
            e(t)
          })
          t.baseTexture.on("update", function () {
            e(t)
          })
          t.baseTexture.on("error", function (e) {
            t.destroy(true)
            n(e)
          })
        })]
      })
    })
  }
  t.prototype.draw = function (e) {
    this.update_transform(e)
    var t = Math.max(e.width, this.MIN_BOX)
    var n = Math.max(e.height, this.MIN_BOX)
    this.clear()
    this.lineStyle(this.LINE_WIDTH, this.theme.color)
    this.drawRoundedRect(-t / 2, -n / 2, t, n, this.RADUIS)
    this.endFill()
    this.icon.position.set(-t / 2, -n / 2 - this.ICON_HEIGHT)
  }
  t.prototype.update_theme = function (e) {
    var t = this
    this.theme = e
    this.draw(this.target)
    this.load_texture(this.theme.icon_url).then(function (e) {
      t.icon.texture = e
      t.app.render()
    }).catch(function (e) {
      return console.warn(e)
    })
  }
  t.prototype.update_transform = function (e) {
    this.position.set(e.position.x, e.position.y)
    this.pivot.set(e.pivot.x * e.scale.x, e.pivot.y * e.scale.y)
    this.rotation = e.rotation
  }
  t.prototype.set_visible = function (e) {
    this.box_visible = e
    this.visible = this.target.visible && this.box_visible
  }
  t.prototype.destroy = function () {
    if (c.l(this.target)) {
      this.target.remove_listener("change", this.on_actor_update)
      this.target.remove_listener("destroy", this.on_target_destroy)
    } else {
      this.target.remove_listener("change", this.on_video_update)
      this.target.remove_listener("destroy", this.on_target_destroy)
    }
    this.cache.delete(this.id)
    e.prototype.destroy.call(this, {
      children: true
    })
  }
  return t
}($_34_index.j)
var Yr = function () {
  function e(e, t, n) {
    var r = this
    this.destroy_scene_children_container = function () {
      if (r.scene_children_container && 0 === r.scene_children_container.children.length) {
        r.remove_scene_container_parent_scene_listener()
        r.scene_children_container.destroy()
        r.events.remove_listener("scene:current_scene_changed", r.on_parent_scene_change)
        r.scene_children_container = undefined
      }
    }
    this.on_parent_scene_change = function (e) {
      var t = r.data.get_internal_scene(e)
      if (t) {
        r.remove_scene_container_parent_scene_listener()
        r.on_parent_scene_destroy = function () {
          t.removeChild(r.get_scene_children_container())
          if (r.on_parent_scene_destroy) {
            t.remove_listener("destroy", r.on_parent_scene_destroy)
          }
        }
        t.addChildAt(r.get_scene_children_container(), $_128.h)
        t.add_listener("destroy", r.on_parent_scene_destroy)
      }
    }
    this.app = e
    this.data = t
    this.events = n
    this.loader = new je()
    this.components_z_index_array = [undefined]
    this.scene_children_container_children_z_index_array = []
  }
  e.prototype.init = function (e) {
    var t
    var n = this
    if (!this.editor && e.editor) {
      this.editor = new $_318.a(e.editor, this.app, this.data, this.events, this.loader)
      this.components_z_index_array[$_128.c.EDITOR] = this.editor.set_parent
    }
    if (!this.grid && e.grid) {
      this.grid = new on(this.app, this.events)
      this.components_z_index_array[$_128.c.GRID] = this.grid.set_parent
    }
    if (!this.draggable_container && e.draggable_container) {
      this.draggable_container = new Cr(this.app, this.events, this.data)
      this.components_z_index_array[$_128.c.DRAGGABLE_CONTAINER] = this.draggable_container.set_parent
    }
    if (!this.voice_dialog && e.voice_dialog) {
      this.voice_dialog = new Wt(e.voice_dialog, this.app, this.loader, this.events)
      this.components_z_index_array[$_128.c.VOICE_DIALOG] = this.voice_dialog.set_parent
    }
    if (!this.stage_dialog && e.stage_dialog) {
      this.stage_dialog = new Jt(this.app, this.data, this.loader, e.stage_dialog, this.events)
      this.components_z_index_array[$_128.c.STAGE_DIALOG] = this.stage_dialog.set_parent
    }
    if (!this.selection_dialog && e.selection_dialog) {
      this.selection_dialog = new cn(this.app, this.events)
      this.components_z_index_array[$_128.c.SELECTION_DIALOG] = this.selection_dialog.set_parent
    }
    if (!this.translate_dialog && e.translate_dialog) {
      this.translate_dialog = new Rr(this.app, this.loader, this.events, e.translate_dialog)
      this.components_z_index_array[$_128.c.TRANSLATE_DIALOG] = this.translate_dialog.set_parent
    }
    if (!this.playable_manager && e.playable_manager) {
      this.playable_manager = new $_467.a(this.app, this.data, this.events, this.destroy_scene_children_container)
      this.scene_children_container_children_z_index_array[$_128.g.PLAYABLE_CONTAINER] = this.playable_manager.set_video_container_parent
      if (t = e.playable_manager.parent_scene_id) {
        this.on_parent_scene_change(t)
      }
    }
    if (!this.camera && e.camera) {
      this.camera = new Mr(this.app, this.destroy_scene_children_container)
      this.scene_children_container_children_z_index_array[$_128.g.CAMERA] = this.camera.set_parent
      if (t = e.camera.parent_scene_id) {
        this.on_parent_scene_change(t)
      }
    }
    if (!this.actor_dialog_manager && e.actor_dialog_manager) {
      this.actor_dialog_manager = new Ge(this.app, this.data)
    }
    if (!this.wood_loader && e.wood_loader) {
      this.wood_loader = new Hr(this.app, this.loader, e.wood_loader.url)
    }
    if (!this.border_box && e.border_box) {
      this.border_box = new Gr(this.app, this.data)
      this.components_z_index_array[$_128.c.BORDER_BOX] = this.border_box.set_parent
    }
    if (!this.cooperation_box_container && e.cooperation_box_container) {
      this.cooperation_box_container = new Kr(e.cooperation_box_container, this.app, this.data)
      this.components_z_index_array[$_128.c.COOPERATION_CONTAINER] = this.cooperation_box_container.set_parent
    }
    var /* [auto-meaningful-name] */this$app$get_app$stage = this.app.get_app().stage
    this.components_z_index_array.forEach(function (e) {
      if (e) {
        e(this$app$get_app$stage)
      }
    })
    this.scene_children_container_children_z_index_array.forEach(function (e) {
      if (e) {
        e(n.get_scene_children_container())
      }
    })
  }
  e.prototype.get_scene_children_container = function () {
    if (!this.scene_children_container) {
      this.scene_children_container = new $_34_index.f()
      this.events.add_listener("scene:current_scene_changed", this.on_parent_scene_change)
    }
    return this.scene_children_container
  }
  e.prototype.remove_scene_container_parent_scene_listener = function () {
    var /* [auto-meaningful-name] */this$get_scene_children_container$parent = this.get_scene_children_container().parent
    if (c.m(this$get_scene_children_container$parent) && this.on_parent_scene_destroy) {
      this$get_scene_children_container$parent.remove_listener("destroy", this.on_parent_scene_destroy)
      this.on_parent_scene_destroy = undefined
    }
  }
  e.prototype.destroy = function (e) {
    if (this.editor && e.editor) {
      this.editor.destroy()
      this.editor = undefined
      this.components_z_index_array[$_128.c.EDITOR] = undefined
    }
    if (this.actor_dialog_manager && e.actor_dialog_manager) {
      this.actor_dialog_manager.destroy()
      this.actor_dialog_manager = undefined
    }
    if (this.stage_dialog && e.stage_dialog) {
      this.stage_dialog.destroy()
      this.stage_dialog = undefined
      this.components_z_index_array[$_128.c.STAGE_DIALOG] = undefined
    }
    if (this.grid && e.grid) {
      this.grid.destroy()
      this.grid = undefined
      this.components_z_index_array[$_128.c.GRID] = undefined
    }
    if (this.selection_dialog && e.selection_dialog) {
      this.selection_dialog.destroy()
      this.selection_dialog = undefined
      this.components_z_index_array[$_128.c.SELECTION_DIALOG] = undefined
    }
    if (this.translate_dialog && e.translate_dialog) {
      this.translate_dialog.destroy()
      this.translate_dialog = undefined
      this.components_z_index_array[$_128.c.TRANSLATE_DIALOG] = undefined
    }
    if (this.draggable_container && e.draggable_container) {
      this.draggable_container.destroy()
      this.draggable_container = undefined
      this.components_z_index_array[$_128.c.DRAGGABLE_CONTAINER] = undefined
    }
    if (this.camera && e.camera) {
      this.camera.destroy()
      this.camera = undefined
      this.scene_children_container_children_z_index_array[$_128.g.CAMERA] = undefined
    }
    if (this.playable_manager && e.playable_manager) {
      this.playable_manager.destroy()
      this.playable_manager = undefined
      this.scene_children_container_children_z_index_array[$_128.g.PLAYABLE_CONTAINER] = undefined
    }
    if (this.wood_loader && e.wood_loader) {
      this.wood_loader.destroy()
      this.wood_loader = undefined
    }
    if (this.voice_dialog && e.voice_dialog) {
      this.voice_dialog.destroy()
      this.voice_dialog = undefined
      this.components_z_index_array[$_128.c.VOICE_DIALOG] = undefined
    }
    if (this.border_box && e.border_box) {
      this.border_box.destroy()
      this.border_box = undefined
      this.components_z_index_array[$_128.c.BORDER_BOX] = undefined
    }
  }
  e.prototype.get_editor = function () {
    return this.editor
  }
  e.prototype.get_actor_dialog_manager = function () {
    return this.actor_dialog_manager
  }
  e.prototype.get_voice_dialog = function () {
    return this.voice_dialog
  }
  e.prototype.get_stage_dialog = function () {
    return this.stage_dialog
  }
  e.prototype.get_grid = function () {
    return this.grid
  }
  e.prototype.get_selection_dialog = function () {
    return this.selection_dialog
  }
  e.prototype.get_translate_dialog = function () {
    return this.translate_dialog
  }
  e.prototype.get_draggable_container = function () {
    return this.draggable_container
  }
  e.prototype.get_playable_manager = function () {
    return this.playable_manager
  }
  e.prototype.get_camera = function () {
    return this.camera
  }
  e.prototype.get_wood_loader = function () {
    return this.wood_loader
  }
  e.prototype.get_border_box = function () {
    return this.border_box
  }
  e.prototype.get_cooperation_container = function () {
    return this.cooperation_box_container
  }
  return e
}()
var qr = {
  Components: Symbol("Components"),
  KittenStage: Symbol("KittenStage")
}
var $r = function () {
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
var Jr = function (e, t, n, r) {
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
var Zr = function (e, t) {
  if ("object" === typeof Reflect && "function" === typeof Reflect.metadata) {
    return Reflect.metadata(e, t)
  }
}
var ei = function (e, t) {
  return function (n, r) {
    t(n, r, e)
  }
}
var ti = function (e) {
  function t(t, n, r, i, o, a, s, c, u) {
    var l = e.call(this, t, r, i, o, a, s, c, n) || this
    l.events = n
    l.components = u(t, l.data)
    return l
  }
  $r(t, e)
  return t = Jr([$_269_index.injectable(), ei(0, $_269_index.inject(s.App)), ei(1, $_269_index.inject(s.Events)), ei(2, $_269_index.inject(s.Data)), ei(3, $_269_index.inject(s.Textures)), ei(4, $_269_index.inject(s.Scenes)), ei(5, $_269_index.inject(s.Actors)), ei(6, $_269_index.inject(s.StageAnimation)), ei(7, $_269_index.inject(s.Physics)), ei(8, $_269_index.inject(qr.Components)), Zr("design:paramtypes", [Object, Object, Function, Function, Function, Function, Function, Function, Function])], t)
}(Ae)
var ni = Ne
ni.bind(qr.Components).toFactory(function (e) {
  var t = e.container.get(s.Events)
  return function (e, n) {
    return new Yr(e, n, t)
  }
})
ni.bind(qr.KittenStage).to(ti)
var /* [auto-meaningful-name] */require$_2344$version = require("./2344").version
function ii() {
  return function (e) {
    return ni.get(e)
  }(qr.KittenStage)
}
console.log("%cWelcome to ❤ Codemao Stage - v" + require$_2344$version + " ❤ for Kitten o(*￣▽￣*)ブ", "\n  color: #BC2424;\n  text-shadow: 0 1px 0 #8D1B1B;")
export { ii as "683__part-13__ii" }
