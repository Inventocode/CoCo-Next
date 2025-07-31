"use strict";

export { f as a };
var r = require("../6");
var o = require("../27");
var i = require("../40");
var a = require("../57/index");
var s = require("../58/index");
var c = require("../17/index");
var l = require("./727");
var u = require("../18");
var d = require("../9");
var p = require("../46/index");
var f = function (e) {
  Object(a.a)(n, e);
  var t = Object(s.a)(n);
  function n(e) {
    var r;
    Object(o.a)(this, n);
    (r = t.call(this, {
      menu_generator: e.options,
      opt_onchange: e.optOnchange,
      selected_index: e.selectedIndex,
      opt_validator: e.optValidator,
      menu_generator_advanced: e.advancedOptions
    })).MAX_BLOCK_HEIGHT = 40;
    r.SVG_WIDTH = 2;
    return r;
  }
  Object(i.a)(n, [{
    key: "show_editor",
    value: function () {
      var e;
      var t = this;
      var n = this.get_advanced_options() || this.get_options();
      var o = [];
      if ("SCREEN_ID" === this.name) {
        for (var i in n) {
          var a;
          var s;
          var l;
          var f = n[i];
          var h = Object(r.a)(Object(r.a)({}, f), {}, {
            icon: {
              width: (null === (a = f.snapshot) || void 0 === a ? void 0 : a.width) || 40,
              height: (null === (s = f.snapshot) || void 0 === s ? void 0 : s.height) || 40,
              src: (null === (l = f.snapshot) || void 0 === l ? void 0 : l.src) || ""
            }
          });
          o.push(h);
        }
      }
      var m = this.source_block;
      var g = (null === (e = this.source_block) || void 0 === e ? void 0 : e.is_shadow()) && this.source_block.parent_block || this.source_block;
      if (!m || !g) {
        throw Error("field is not attached to any block.");
      }
      var _ = g.get_field_value("WIDGET_ID");
      if ("DOC_KEYS" === this.name && _ === d.h) {
        var v = {
          payload: void 0,
          type: "ASYNC_OPEN_TOAST_ON_NOT_SELECT_DOCUMENT"
        };
        Object(p.c)().dispatchAction(v);
      } else {
        var b;
        var y;
        var E;
        var O;
        var w;
        var C;
        var T = g.workspace.get_scale();
        var S = (c.Blink.theme.renderer.STATEMENT_ROW_PADDING_Y_TO_FIELD + 1) * T + 1;
        if (m.is_shadow()) {
          var I = m.svg_group;
          E = c.BU.dom.get_page_offset(I);
          var A = m.get_height_width();
          O = A.width * T;
          w = A.height * T + 2 * S;
          C = E[1] + m.height * T + S;
        } else {
          E = this.get_absolute_xy();
          var j = this.get_scaled_bbox();
          O = j.width;
          w = j.height + 2 * S;
          C = E[1] + j.height + S;
        }
        this.change_editor_style(!0);
        var N = {
          payload: {
            type: u.a.DYNAMIC_DROPDOWN,
            value: this.get_value(),
            setValue: function (e) {
              t.set_value(e);
            },
            showCurrentScreenIndex: !1,
            position: {
              left: E[0],
              top: C
            },
            options: "[]" === JSON.stringify(o) ? n : o,
            blockInfo: {
              scale: T < 1 ? 1 : T,
              fieldWidth: O,
              blockHeight: w,
              sourceBlockId: (null === (b = this.source_block) || void 0 === b ? void 0 : b.id) || "",
              fieldName: this.name || "",
              emptyImageVisible: "image_set_file_id" === (null === (y = m.parent_block) || void 0 === y ? void 0 : y.type)
            },
            onHide: function () {
              if (t.source_block) {
                t.focus(!1);
                t.change_editor_style(!1);
              }
            }
          },
          type: "SHOW_BLOCKS_DROPDOWN"
        };
        if (!("BROADCAST" !== this.name && "VAR" !== this.name && "ARRAY" !== this.name && "OBJECT" !== this.name)) {
          N.payload.showCurrentScreenIndex = !0;
        }
        if ("IMAGE_FILE_ID" === this.name) {
          N.payload.type = u.a.IMAGE_DROPDOWN;
        } else {
          if ("ICON_FILE_ID" === this.name) {
            N.payload.type = u.a.ICON_DROPDOWN;
          } else {
            if ("ACTOR_ACTION_ID" === this.name || "ACTOR_STYLE_ID" === this.name) {
              N.payload.type = u.a.ACTOR_STYLE_DROPDOWN;
            } else {
              if ("SCREEN_ID" === this.name) {
                N.payload.type = u.a.SCREEN_DROPDOWN;
              } else {
                if ("SOUND_FILE_ID" === this.name) {
                  N.payload.type = u.a.SOUND_DROPDOWN;
                }
              }
            }
          }
        }
        Object(p.c)().dispatchAction(N);
      }
    }
  }, {
    key: "get_display_text",
    value: function () {
      var e = this.text_;
      if (!e) {
        return "\xa0";
      }
      for (var t = "", n = 0, r = 0; r < e.length; r++) {
        if (e.charCodeAt(r) > 127 ? n += 2 : n += 1, n > 14) {
          t += "\u2026";
          break;
        }
        t += e[r];
      }
      return t = t.replace(/\s/g, "\xa0");
    }
  }]);
  return n;
}(l.FieldDropdown);
f.field_type = "field_coco_dropdown";
export default f;