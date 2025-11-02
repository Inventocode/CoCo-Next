/** 
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：121
 */

"use strict"

export { f as a }
import r = require("../6");
import o = require("../27");
import i = require("../40");
import a = require("../57/index");
import s = require("../58/index");
import c = require("../17/index");
import l = require("./727");
import u = require("../18");
import d = require("../9");
import p = require("../46/index");
var f = function (e) {
  a.a(n, e)
  var t = s.a(n)
  function n(e) {
    var r
    o.a(this, n);
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
  i.a(n, [{
    key: "show_editor",
    value: function () {
      var /* [auto-meaningful-name] */_this$source_block3
      var t = this
      var n = this.get_advanced_options() || this.get_options()
      var o = []
      if ("SCREEN_ID" === this.name) {
        for (var i in n) {
          var /* [auto-meaningful-name] */_f$snapshot2
          var /* [auto-meaningful-name] */_f$snapshot3
          var /* [auto-meaningful-name] */f$snapshot
          var f = n[i]
          var h = r.a(r.a({}, f), {}, {
            icon: {
              width: (null === (_f$snapshot2 = f.snapshot) || undefined === _f$snapshot2 ? undefined : _f$snapshot2.width) || 40,
              height: (null === (_f$snapshot3 = f.snapshot) || undefined === _f$snapshot3 ? undefined : _f$snapshot3.height) || 40,
              src: (null === (f$snapshot = f.snapshot) || undefined === f$snapshot ? undefined : f$snapshot.src) || ""
            }
          })
          o.push(h)
        }
      }
      var _this$source_block = this.source_block
      var g = (null === (_this$source_block3 = this.source_block) || undefined === _this$source_block3 ? undefined : _this$source_block3.is_shadow()) && this.source_block.parent_block || this.source_block
      if (!_this$source_block || !g) {
        throw Error("field is not attached to any block.")
      }
      var _ = g.get_field_value("WIDGET_ID")
      if ("DOC_KEYS" === this.name && _ === d.h) {
        var v = {
          payload: undefined,
          type: "ASYNC_OPEN_TOAST_ON_NOT_SELECT_DOCUMENT"
        }
        p.c().dispatchAction(v)
      } else {
        var /* [auto-meaningful-name] */this$source_block
        var /* [auto-meaningful-name] */_this$source_block$parent_block
        var E
        var O
        var w
        var C
        var T = g.workspace.get_scale()
        var S = (c.Blink.theme.renderer.STATEMENT_ROW_PADDING_Y_TO_FIELD + 1) * T + 1
        if (_this$source_block.is_shadow()) {
          var this$source_block$svg_group = _this$source_block.svg_group
          E = c.BU.dom.get_page_offset(this$source_block$svg_group)
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
            type: u.a.DYNAMIC_DROPDOWN,
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
              sourceBlockId: (null === (this$source_block = this.source_block) || undefined === this$source_block ? undefined : this$source_block.id) || "",
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
          N.payload.type = u.a.IMAGE_DROPDOWN
        } else {
          if ("ICON_FILE_ID" === this.name) {
            N.payload.type = u.a.ICON_DROPDOWN
          } else {
            if ("ACTOR_ACTION_ID" === this.name || "ACTOR_STYLE_ID" === this.name) {
              N.payload.type = u.a.ACTOR_STYLE_DROPDOWN
            } else {
              if ("SCREEN_ID" === this.name) {
                N.payload.type = u.a.SCREEN_DROPDOWN
              } else {
                if ("SOUND_FILE_ID" === this.name) {
                  N.payload.type = u.a.SOUND_DROPDOWN
                }
              }
            }
          }
        }
        p.c().dispatchAction(N)
      }
    }
  }, {
    key: "get_display_text",
    value: function () {
      var this$text_ = this.text_
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
}(l.FieldDropdown)
f.field_type = "field_coco_dropdown"
export default f
