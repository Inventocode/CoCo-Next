/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2115
 */

"use strict"

Object.defineProperty(exports, "__esModule", {
  value: true
})
exports.MoveEvent = undefined
var r = require("tslib")
var i = require("@kitten-team/gl-matrix")
var o = require("inversify")
var a = require("../../../125/195/index")
var s = require("../../../1001/213/index")
var c = function (e) {
  function t(t) {
    var n = e.call(this, t.block) || this
    n.type = a.BlockEventType.MOVE
    var r = n._current_location()
    n.old_parent_id = r.parent_id
    n.old_input_name = r.input_name
    n.old_coordinate = r.coordinate
    return n
  }
  (0, r.__extends)(t, e)
  t.prototype.get_new_loc = function () {
    return {
      parent_id: this.new_parent_id,
      input_name: this.new_input_name,
      coordinate: this.new_coordinate
    }
  }
  t.prototype._current_location = function () {
    var e = this.workspace_db.get(this._workspace_id)
    if (undefined == e) {
      console.error("Event has no workspace.")
      return {}
    }
    var t = e.get_element_from_db(this._block_id)
    if (undefined == t) {
      console.error("Event has no block.")
      return {}
    }
    var n = {}
    if ((0, s.is_block_svg)(t)) {
      var r = t.get_parent()
      if (r) {
        n.parent_id = r.id
        var i = r.get_input_with_block(t)
        if (i) {
          n.input_name = i.name
        }
      } else {
        n.coordinate = t.get_relative_to_surface_xy()
      }
    } else if ((0, s.is_workspace_comment)(t)) {
      n.coordinate = (0, s.clone_deep)(t.get_relative_position())
    }
    return n
  }
  t.prototype.record_new = function () {
    var e = this._current_location()
    this.new_parent_id = e.parent_id
    this.new_input_name = e.input_name
    this.new_coordinate = e.coordinate
  }
  t.prototype.is_null = function () {
    return this.old_parent_id === this.new_parent_id && this.old_input_name === this.new_input_name && (undefined == this.old_coordinate && undefined == this.new_coordinate || undefined != this.old_coordinate && undefined != this.new_coordinate && i.vec2.equals(this.old_coordinate, this.new_coordinate))
  }
  t.prototype.run = function (e) {
    var t = this
    var n = this._get_event_workspace()
    var r = n.get_element_from_db(this._block_id)
    if (undefined != r) {
      !function () {
        if ((0, s.is_block_svg)(r)) {
          var i = e ? t.new_parent_id : t.old_parent_id
          if (i) {
            var o
            var c = n.get_block_by_id(i)
            if (!c) {
              throw Error("Trying to re-connect to non-existent block. Event: " + t)
            }
            var u = r.output_connection || r.previous_connection
            if (!u) {
              throw Error("没有对外连接记录个🔨的连接事件")
            }
            var l = e ? t.new_input_name : t.old_input_name
            if (l) {
              var f = c.get_input(l)
              o = f && f.connection
            } else if (u.type === a.CONNECTION_TYPE.PREVIOUS_STATEMENT) {
              o = c.next_connection
            }
            if (undefined != o) {
              r.unplug()
              return void u.connect(o, true)
            }
            console.warn("Can't connect to non-existent input: " + l + ", so dispose this blockConnection")
            if (u) {
              t.events.disable()
              u.source_block.dispose()
              t.events.enable()
            }
          } else {
            r.unplug()
          }
        }
      }();
      (function () {
        var n
        var o = e ? (0, s.clone_deep)(t.new_coordinate) : (0, s.clone_deep)(t.old_coordinate)
        if (o) {
          var a = r.get_relative_to_surface_xy()
          if ((0, s.is_workspace_comment)(r)) {
            var c = null === (n = r.get_parent_block()) || undefined === n ? undefined : n.get_relative_to_surface_xy()
            if (c) {
              i.vec2.add(o, c, o)
            }
          }
          r.move_by(i.vec2.sub(a, o, a))
        }
      })()
    } else if (!e) {
      console.warn("Can't move non-existent block: " + this._block_id)
    }
  }
  t.prototype.set_old_coord = function (e) {
    this.old_coordinate = e
  }
  t.prototype.get_old_loc = function () {
    return {
      parent_id: this.old_parent_id,
      input_name: this.old_input_name,
      coordinate: this.old_coordinate
    }
  }
  t.prototype.serialize = function () {
    var e = this.old_coordinate ? [this.old_coordinate[0], this.old_coordinate[1]] : undefined
    var t = this.new_coordinate ? [this.new_coordinate[0], this.new_coordinate[1]] : undefined
    return {
      id: this._block_id,
      group: this._group,
      old_parent_id: this.old_parent_id,
      old_input_name: this.old_input_name,
      old_coordinate: e,
      new_parent_id: this.new_parent_id,
      new_input_name: this.new_input_name,
      new_coordinate: t
    }
  }
  t.prototype.deserialize = function (e) {
    this._block_id = e.id
    this.old_parent_id = e.old_parent_id
    this.old_input_name = e.old_input_name
    this.old_coordinate = e.old_coordinate && i.vec2.fromValues(e.old_coordinate[0], e.old_coordinate[1])
    this.new_parent_id = e.new_parent_id
    this.new_input_name = e.new_input_name
    this.new_coordinate = e.new_coordinate && i.vec2.fromValues(e.new_coordinate[0], e.new_coordinate[1])
  }
  t.prototype.update_new_loc = function (e) {
    this.new_parent_id = e.parent_id
    this.new_input_name = e.input_name
    this.new_coordinate = e.coordinate
  }
  return t = (0, r.__decorate)([(0, o.injectable)()], t)
}(require("./643").BlockEvent)
exports.MoveEvent = c
