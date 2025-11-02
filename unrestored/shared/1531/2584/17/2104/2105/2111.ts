/** 
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2111
 */

"use strict"

Object.defineProperty(exports, "__esModule", {
  value: true
})
exports.ChangeEvent = undefined
var r = require("tslib")
var i = require("inversify")
var o = require("../../../125/195/index")
var a = require("../../../1001/213/index")
var s = function (e) {
  function t(t, n) {
    var r = e.call(this, n.block) || this
    r.type = o.BlockEventType.CHANGE
    r.element = t
    r._data = {
      block: n.block,
      name: n.name,
      old_value: n.old_value,
      new_value: n.new_value
    }
    if ((0, a.is_block_svg)(n.block)) {
      if (r.is("mutation", r._data) || r.is("change_procedure_param", r._data)) {
        r._new_json = r.json.block_to_json(n.block)
        return r
      }
      if (r.is("comment", r._data) && "string" === typeof r._data.new_value) {
        var i = r._get_event_workspace().workspace_comment_db.get(r._data.new_value)
        if (i) {
          r._comment_json = r.json.comment_to_json(i)
        }
      }
    }
    return r
  }
  (0, r.__extends)(t, e)
  t.prototype.is = function (e, t) {
    return this.element === e && !!t
  }
  t.prototype.is_null = function () {
    return this._data.old_value == this._data.new_value
  }
  t.prototype.run = function (e) {
    var /* [auto-meaningful-name] */u$addMutation
    var /* [auto-meaningful-name] */_this$_data$name4
    var /* [auto-meaningful-name] */u$removeMutation
    var /* [auto-meaningful-name] */this$_data$name
    var /* [auto-meaningful-name] */u$parent_group
    var s
    var c = this._get_event_workspace()
    var u = c.get_element_from_db(this._block_id)
    if (u) {
      if ((0, a.is_workspace_comment)(u)) {
        if (this.is("comment_text", this._data)) {
          u.set_text(e ? this._data.new_value : this._data.old_value)
        } else if (this.is("comment_color", this._data)) {
          u.set_color_theme(e ? this._data.new_value : this._data.old_value)
        } else if (this.is("comment_expand", this._data)) {
          u.set_expanded(e ? this._data.new_value : this._data.old_value)
        } else if (this.is("comment_resize", this._data)) {
          var l = e ? this._data.new_value : this._data.old_value
          u.set_bubble_size(l[0], l[1])
        } else {
          console.warn("Unknown change type: " + this.element)
        }
      } else if ((0, a.is_block_svg)(u)) {
        if (this.is("field", this._data)) {
          var _this$_data = this._data
          var _this$_data$name = _this$_data.name
          var this$_data$new_value = _this$_data.new_value
          var this$_data$old_value = _this$_data.old_value
          l = e ? this$_data$new_value : this$_data$old_value
          if (undefined != _this$_data$name && (s = u.get_field(String(_this$_data$name)))) {
            s.call_validator(l)
            s.set_value(l, true)
          }
        } else if (this.is("field_default_value", this._data)) {
          var _this$_data2 = this._data
          var _this$_data$name2 = _this$_data2.name
          this$_data$new_value = _this$_data2.new_value
          this$_data$old_value = _this$_data2.old_value
          l = e ? this$_data$new_value : this$_data$old_value
          if (undefined != _this$_data$name2 && (s = u.get_field(String(_this$_data$name2))) && (0, a.is_field_default_value)(s)) {
            s.set_has_been_edited(l)
          }
        } else if (this.is("comment", this._data)) {
          var _this$_data3 = this._data
          this$_data$new_value = _this$_data3.new_value
          this$_data$old_value = _this$_data3.old_value
          switch (typeof (l = e ? this$_data$new_value : this$_data$old_value)) {
            case "string":
              u.set_comment_text("", l)
              if (u.comment) {
                u.comment.set_expanded(true)
                u.comment.init_svg()
              }
              break
            case "undefined":
              u.set_comment_text(undefined)
              break
            default:
              var v = undefined,
                m = parseFloat(l.getAttribute("relativeleft_") || ""),
                y = parseFloat(l.getAttribute("relativetop_") || "")
              if (!(isNaN(m) || isNaN(y))) {
                v = {
                  x: m,
                  y: y
                }
              }
              u.set_comment_text("", l.getAttribute("id") || undefined, v)
              this.xml.parse_comment_attributes(l, u.comment)
              if (u.comment) {
                u.comment.init_svg()
              }
          }
        } else if (this.is("collapsed", this._data)) {
          u.set_collapsed(e ? this._data.new_value : this._data.old_value, true)
        } else if (this.is("disabled", this._data)) {
          u.set_disabled(e ? this._data.new_value : this._data.old_value)
        } else if (this.is("inline", this._data)) {
          u.set_inputs_inline(e ? this._data.new_value : this._data.old_value)
        } else if (this.is("mutation", this._data)) {
          this$_data$old_value = e ? this._data.old_value : this._data.new_value
          if ("undefined" !== typeof (this$_data$new_value = e ? this._data.new_value : this._data.old_value)) {
            if (!(null === (u$addMutation = u.addMutation) || undefined === u$addMutation)) {
              u$addMutation.call(u, this$_data$new_value, null === (_this$_data$name4 = this._data.name) || undefined === _this$_data$name4 ? undefined : _this$_data$name4.toString())
            }
          } else {
            if ("undefined" !== typeof this$_data$old_value) {
              if (!(null === (u$removeMutation = u.removeMutation) || undefined === u$removeMutation)) {
                u$removeMutation.call(u, this$_data$old_value, null === (this$_data$name = this._data.name) || undefined === this$_data$name ? undefined : this$_data$name.toString())
              }
            }
          }
        } else if (this.is("visibility", this._data)) {
          u.set_chunk_visibility(e ? this._data.new_value : this._data.old_value)
          u.update_chunk_visibility()
        } else if (this.is("group_block", this._data)) {
          var this$_data = this._data
          this$_data$new_value = this$_data.new_value
          this$_data$old_value = this$_data.old_value
          if (l = e ? this$_data$new_value : this$_data$old_value) {
            var w = l[0]
            var E = l[1]
            var x = l[2]
            u.hide_into_group(E, {
              id: w,
              group_stop_at: x
            })
          } else if (!(null === (u$parent_group = u.parent_group) || undefined === u$parent_group)) {
            u$parent_group.release()
          }
        } else {
          var C = c.get_change_event(this.element)
          if (C) {
            C.call(this, e)
          } else {
            console.warn("Unknown change type: " + this.element)
          }
        }
      }
    }
  }
  t.prototype.get_name = function () {
    return this._data.name
  }
  t.prototype.get_new_value = function () {
    return this._data.new_value
  }
  t.prototype.get_old_value = function () {
    return this._data.old_value
  }
  t.prototype.update_new_value = function (e) {
    this._data.new_value = e
  }
  t.prototype.serialize = function () {
    return {
      id: this._block_id,
      group: this._group,
      element: this.element,
      old_value: this._data.old_value,
      new_value: this._data.new_value,
      name: this._data.name
    }
  }
  t.prototype.get_new_comment = function () {
    return this._comment_json
  }
  t.prototype.get_new_json = function () {
    return this._new_json
  }
  return t = (0, r.__decorate)([(0, i.injectable)()], t)
}(require("./643").BlockEvent)
exports.ChangeEvent = s
