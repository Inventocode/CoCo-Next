/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：683__part-7
 */

"use strict"

import * as /* [auto-meaningful-name] */$_122 from "./122"
import * as c from "./65"
import * as /* [auto-meaningful-name] */$_517_index from "./517/index"
var ue = function () {
  function e(e, t, n) {
    this.app = e
    this.data = t
    this.actor = n
  }
  e.prototype.load_actor = function (e) {
    var /* [auto-meaningful-name] */e$actor_id = e.actor_id
    var /* [auto-meaningful-name] */e$parent_scene_id = e.parent_scene_id
    var /* [auto-meaningful-name] */e$position = e.position
    var /* [auto-meaningful-name] */e$scale = e.scale
    var /* [auto-meaningful-name] */e$rotation_type = e.rotation_type
    var /* [auto-meaningful-name] */e$rotation = e.rotation
    var /* [auto-meaningful-name] */e$visible = e.visible
    var /* [auto-meaningful-name] */e$group = e.group
    if (this.data.get_internal_actor(e$actor_id)) {
      return $_122.b.error("Actor " + e$actor_id + " already exists. Please use new actor id")
    }
    var l = this.data.get_internal_scene(e$parent_scene_id)
    if (!l) {
      return $_122.b.error("Scene " + e$parent_scene_id + " should be loaded before loading actor " + e$actor_id)
    }
    var f = this.actor({
      actor_id: e$actor_id,
      parent_scene: l,
      app: this.app,
      data: this.data
    })
    if (e$position) {
      f.set_position_x(e$position.x)
      f.set_position_y(e$position.y)
    }
    if (e$scale) {
      f.set_scale(e$scale.x, e$scale.y)
    }
    if (undefined !== e$rotation) {
      f.set_rotation(e$rotation)
    }
    if (undefined !== e$rotation_type) {
      f.set_rotation_type(e$rotation_type)
    }
    if (undefined !== e$visible) {
      f.set_visible(e$visible)
    }
    if (undefined !== e$group) {
      f.set_group(e$group)
    }
    return $_122.b.success(f)
  }
  e.prototype.destroy_actor = function (e) {
    var t = this.data.get_internal_actor(e)
    if (!t) {
      return new $_122.a("Cannot find actor " + e)
    }
    t.destroy()
  }
  e.prototype.destroy_all_actors = function () {
    var e = this
    this.app.get_scene_container().children.forEach(function (t) {
      if (c.m(t)) {
        t.get_actor_ids().forEach(function (t) {
          var n = e.data.get_internal_actor(t)
          if (n) {
            n.destroy()
          }
        })
      }
    })
    this.data.clear_all_actors_cache()
  }
  e.prototype.get_actor_ids = function (e) {
    var t = []
    this.app.get_scene_container().children.forEach(function (n) {
      if (c.m(n)) {
        t = t.concat(n.get_actor_ids(e))
      }
    })
    return t
  }
  e.prototype.get_actor = function (e) {
    var t = this.data.get_internal_actor(e)
    return t ? $_122.b.success(t) : $_122.b.error("Cannot find actor " + e)
  }
  return e
}()
export { ue as "683__part-7__ue" }
