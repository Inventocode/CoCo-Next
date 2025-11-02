/** 
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2554
 */

"use strict"

Object.defineProperty(exports, "__esModule", {
  value: true
})
exports.init_extensions = undefined
var r = (0, require("tslib").__importStar)(require("../17/533"))
var o = require("../17/497/644")
exports.init_extensions = function (e) {
  e.extensions.register("parent_tooltip_when_inline", function () {
    var e = this
    this.tooltip_when_not_connected = this.tooltip
    this.set_tooltip(function () {
      var t = e.get_parent()
      return t && t.get_inputs_inline() && t.tooltip || e.tooltip_when_not_connected
    })
  })
  var t = {
    onchange: function (e) {
      if (!(e.type && e.type != r.BlockEventType.MOVE)) {
        (0, o.update_disable_status)(this)
      }
    }
  }
  e.extensions.register_mixin("disable_inside_wrap_loop", t)
  e.extensions.register_mixin("disable_inside_warp_loop", {
    onchange: function (e) {
      if ((!e.type || e.type == r.BlockEventType.MOVE) && !this.is_in_flyout) {
        for (var t = ["repeat_forever", "repeat_n_times", "repeat_forever_until"], n = false, o = true, i = this.get_surround_parent(); i;) {
          if (n && "warp" === i.type) {
            o = false
            break
          }
          if (t.includes(i.type)) {
            n = true
          }
          i = i.get_surround_parent()
        }
        if (o) {
          if (!this.disabled) {
            return
          }
          this.disabled = false
          this.update_disabled()
        } else {
          if (this.disabled) {
            return
          }
          this.disabled = true
          this.update_disabled()
        }
      }
    }
  })
  e.extensions.register("param_block", function () {
    this.element_type = "param"
  })
  e.extensions.register("param_color_block", function () {
    this.element_type = "param_color"
  })
}
