/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：121
 */

"use strict"

export { f as a }
import r = require("../6")
import /* [auto-meaningful-name] */$$_27 = require("../27")
import /* [auto-meaningful-name] */$$_40 = require("../40")
import /* [auto-meaningful-name] */$$_57_index = require("../57/index")
import /* [auto-meaningful-name] */$$_58_index = require("../58/index")
import /* [auto-meaningful-name] */$$_17_index = require("../17/index")
import /* [auto-meaningful-name] */$_727 = require("./727")
import /* [auto-meaningful-name] */$$_18 = require("../18")
import d = require("../9")
import /* [auto-meaningful-name] */$$_46_index = require("../46/index")
var f = function (e) {
  $$_57_index.a(n, e)
  var t = $$_58_index.a(n)
  function n(e) {
    var r
    $$_27.a(this, n);
    (r = t.call(this, {
      menu_generator: e.options,
      opt_onchange: e.optOnchange,
      selected_index: e.selectedIndex,
      opt_validator: e.optValidator,
      menu_generator_advanced: e.advancedOptions
    })).MAX_BLOCK_HEIGHT = 40
    r.SVG_WIDTH = 2
    return r
  }
  $$_40.a(n, [{
    key: "show_editor",
    value: function () {
      var /* [auto-meaningful-name] */this$source_block
      var t = this
      var n = this.get_advanced_options() || this.get_options()
      var o = []
      if ("SCREEN_ID" === this.name) {
        for (var i in n) {
          var /* [auto-meaningful-name] */f$snapshot
          var /* [auto-meaningful-name] */_f$snapshot
          var /* [auto-meaningful-name] */_f$snapshot2
          var f = n[i]
          var h = r.a(r.a({}, f), {}, {
            icon: {
              width: (null === (f$snapshot = f.snapshot) || undefined === f$snapshot ? undefined : f$snapshot.width) || 40,
              height: (null === (_f$snapshot = f.snapshot) || undefined === _f$snapshot ? undefined : _f$snapshot.height) || 40,
              src: (null === (_f$snapshot2 = f.snapshot) || undefined === _f$snapshot2 ? undefined : _f$snapshot2.src) || ""
            }
          })
          o.push(h)
        }
      }
      var /* [auto-meaningful-name] */_this$source_block = this.source_block
      var g = (null === (this$source_block = this.source_block) || undefined === this$source_block ? undefined : this$source_block.is_shadow()) && this.source_block.parent_block || this.source_block
      if (!_this$source_block || !g) {
        throw Error("field is not attached to any block.")
      }
      var _ = g.get_field_value("WIDGET_ID")
      if ("DOC_KEYS" === this.name && _ === d.h) {
        var v = {
          payload: undefined,
          type: "ASYNC_OPEN_TOAST_ON_NOT_SELECT_DOCUMENT"
        }
        $$_46_index.c().dispatchAction(v)
      } else {
        var /* [auto-meaningful-name] */_this$source_block2
        var /* [auto-meaningful-name] */_this$source_block$parent_block
        var E
        var O
        var w
        var C
        var T = g.workspace.get_scale()
        var S = ($$_17_index.Blink.theme.renderer.STATEMENT_ROW_PADDING_Y_TO_FIELD + 1) * T + 1
        if (_this$source_block.is_shadow()) {
          var /* [auto-meaningful-name] */_this$source_block$svg_group = _this$source_block.svg_group
          E = $$_17_index.BU.dom.get_page_offset(_this$source_block$svg_group)
          var A = _this$source_block.get_height_width()
          O = A.width * T
          w = A.height * T + 2 * S
          C = E[1] + _this$source_block.height * T + S
        } else {
          E = this.get_absolute_xy()
          var j = this.get_scaled_bbox()
          O = j.width
          w = j.height + 2 * S
          C = E[1] + j.height + S
        }
        this.change_editor_style(true)
        var N = {
          payload: {
            type: $$_18.a.DYNAMIC_DROPDOWN,
            value: this.get_value(),
            setValue: function (e) {
              t.set_value(e)
            },
            showCurrentScreenIndex: false,
            position: {
              left: E[0],
              top: C
            },
            options: "[]" === JSON.stringify(o) ? n : o,
            blockInfo: {
              scale: T < 1 ? 1 : T,
              fieldWidth: O,
              blockHeight: w,
              sourceBlockId: (null === (_this$source_block2 = this.source_block) || undefined === _this$source_block2 ? undefined : _this$source_block2.id) || "",
              fieldName: this.name || "",
              emptyImageVisible: "image_set_file_id" === (null === (_this$source_block$parent_block = _this$source_block.parent_block) || undefined === _this$source_block$parent_block ? undefined : _this$source_block$parent_block.type)
            },
            onHide: function () {
              if (t.source_block) {
                t.focus(false)
                t.change_editor_style(false)
              }
            }
          },
          type: "SHOW_BLOCKS_DROPDOWN"
        }
        if (!("BROADCAST" !== this.name && "VAR" !== this.name && "ARRAY" !== this.name && "OBJECT" !== this.name)) {
          N.payload.showCurrentScreenIndex = true
        }
        if ("IMAGE_FILE_ID" === this.name) {
          N.payload.type = $$_18.a.IMAGE_DROPDOWN
        } else {
          if ("ICON_FILE_ID" === this.name) {
            N.payload.type = $$_18.a.ICON_DROPDOWN
          } else {
            if ("ACTOR_ACTION_ID" === this.name || "ACTOR_STYLE_ID" === this.name) {
              N.payload.type = $$_18.a.ACTOR_STYLE_DROPDOWN
            } else {
              if ("SCREEN_ID" === this.name) {
                N.payload.type = $$_18.a.SCREEN_DROPDOWN
              } else {
                if ("SOUND_FILE_ID" === this.name) {
                  N.payload.type = $$_18.a.SOUND_DROPDOWN
                }
              }
            }
          }
        }
        $$_46_index.c().dispatchAction(N)
      }
    }
  }, {
    key: "get_display_text",
    value: function () {
      var /* [auto-meaningful-name] */this$text_ = this.text_
      if (!this$text_) {
        return " "
      }
      for (var t = "", n = 0, r = 0; r < this$text_.length; r++) {
        if (this$text_.charCodeAt(r) > 127) {
          n += 2
        } else {
          n += 1
        }
        if (n > 14) {
          t += "…"
          break
        }
        t += this$text_[r]
      }
      return t = t.replace(/\s/g, " ")
    }
  }])
  return n
}($_727.FieldDropdown)
f.field_type = "field_coco_dropdown"
export default f
