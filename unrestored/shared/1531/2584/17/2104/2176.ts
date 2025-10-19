/** 
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2176
 */

"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Options = undefined;
var r = require("tslib");
var i = require("inversify");
var o = require("../../1001/213/index");
var a = require("../../125/474");
var s = require("../640/index");
var c = require("../642");
var u = require("../../125/195/index");
var l = function () {
  function e(e) {
    this.disabledPatternId = "";
    this.embossFilterId = "";
    this.pinch = undefined;
    this.notch = undefined;
    this.degrade_translate = undefined;
    this.tooltip = undefined;
    this.timer = undefined;
    this.toolbox_background_class = undefined;
    this.in_flyout = false;
    var t;
    var n;
    var r;
    var i;
    var o;
    var a = !!e.readOnly;
    var l = false;
    if (a) {
      l = false;
      t = false;
      n = false;
      r = false;
      i = false;
    } else {
      if (e.toolbox) {
        if ("string" == typeof e.toolbox) {
          o = (0, s.get_instance)().get(c.BINDING.xml).text_to_dom(e.toolbox);
        } else {
          o = e.toolbox;
        }
        l = o instanceof Element ? !(!o || !o.getElementsByTagName("category").length) : o.length > 0;
      }
      if (undefined == (t = e.collapse)) {
        t = l;
      }
      if (undefined == (n = e.comments)) {
        n = l;
      }
      if (undefined == (r = e.disable)) {
        r = l;
      }
      i = undefined == e.sounds || e.sounds;
    }
    var f;
    var d;
    var h;
    var p;
    var _;
    var A = !!e.rtl;
    var g = e.horizontalLayout;
    if (undefined == g) {
      g = false;
    }
    if ("number" === typeof e.toolboxPosition) {
      f = e.toolboxPosition;
    } else {
      var v = "end" !== e.toolboxPosition;
      f = g ? v ? u.TOOLBOX_POSITION.TOP : u.TOOLBOX_POSITION.BOTTOM : v === A ? u.TOOLBOX_POSITION.RIGHT : u.TOOLBOX_POSITION.LEFT;
    }
    if (undefined !== e.scrollbars) {
      d = e.scrollbars;
      h = e.scrollbars;
      p = e.scrollbars;
      _ = e.scrollbars;
    } else {
      if (undefined == (d = e.scrollable ? e.scrollable.workspace : undefined)) {
        d = l;
      }
      if (undefined == (h = e.scrollable ? e.scrollable.flyout : undefined)) {
        h = l;
      }
      if (undefined == (p = e.show_scrollbars ? e.show_scrollbars.workspace : undefined)) {
        p = l;
      }
      if (undefined == (_ = e.show_scrollbars ? e.show_scrollbars.flyout : undefined)) {
        _ = l;
      }
    }
    var m = e.css;
    if (undefined == m) {
      m = true;
    }
    var y;
    var b;
    var w = "https://static.codemao.cn/blockly/media/";
    if (e.media) {
      w = e.media;
    }
    y = undefined == e.oneBasedIndex || !!e.oneBasedIndex;
    b = undefined != e.blockly_type ? e.blockly_type : "default";
    this.RTL = A;
    this.oneBasedIndex = y;
    this.collapse = t;
    this.comments = n;
    this.comment_type = e.comment_type || "normal";
    this.disable = r;
    this.readOnly = a;
    this.maxBlocks = e.maxBlocks || 1 / 0;
    this.pathToMedia = w;
    this.has_categories = l;
    this.ws_scrollable = d;
    this.ws_show_scrollbars = p;
    this.flyout_scrollable = h;
    this.flyout_show_scrollbars = _;
    this.hasSounds = i;
    this.hasCss = m;
    this.horizontalLayout = g;
    this.toolbox_config = o;
    this.gridOptions = this.parse_grid_options(e);
    this.zoomOptions = this.parse_zoom_options(e);
    this.toolboxPosition = f;
    this.blockly_type = b;
    this.connection_effect = this.parse_connection_effect_options(e);
    this.field_max_length = e.field_max_length;
    this.pinch = e.pinch;
    this.notch = e.notch;
    this.degrade_translate = e.degrade_translate;
    this.tooltip = e.tooltip;
    this.timer = e.timer;
    this.toolbox_background_class = e.toolbox_background_class;
    this.id = e.id;
    this.flyout = this.parse_flyout_options(e.flyout);
    this.custom_svg_defs = e.custom_svg_defs;
    this.delete_area_margin = this.parse_delete_area_margin(e, f);
    this.workspace = {
      content_margin: e.workspace && e.workspace.content_margin || "50%"
    };
    this.theme = "string" === typeof e.theme ? e.theme : "light";
    this.dropdown = this.parse_dropdown_options(e);
    this.delete_area = e.delete_area || "default";
    this.block_group = this.parse_block_group_options(e);
    this.auto_resize = this.parse_auto_resize_options(e);
    this.context_menu = this.parse_context_menu_options(e);
  }
  e.prototype.parse_zoom_options = function (e) {
    var t = e.zoom || {};
    return {
      controls: undefined != t.controls && t.controls,
      wheel: undefined != t.wheel && t.wheel,
      startScale: undefined == t.startScale ? 1 : t.startScale,
      maxScale: undefined == t.maxScale ? 3 : t.maxScale,
      minScale: undefined == t.minScale ? .3 : t.minScale,
      scaleSpeed: undefined == t.scaleSpeed ? 1.2 : t.scaleSpeed
    };
  };
  e.prototype.parse_grid_options = function (e) {
    var t = e.grid || {};
    return {
      spacing: t.spacing || 35,
      step: undefined === t.step ? 4 : t.step,
      snap: !!t.spacing && !!t.snap
    };
  };
  e.prototype.parse_connection_effect_options = function (e) {
    if (e.connection_effect) {
      var t = e.connection_effect || {};
      return {
        type: t.type,
        color: t.color
      };
    }
  };
  e.prototype.parse_dropdown_options = function (e) {
    var t = e.dropdown && e.dropdown.menu || {};
    var n = e.dropdown || {};
    return {
      padding: "number" === typeof n.padding ? n.padding : 6,
      arrow_type: n.arrow_type || "line",
      menu: {
        align: t.align || (a.is.mobile() || a.is.ipad() ? "center" : "first"),
        scalable: "boolean" != typeof t.scalable || t.scalable
      }
    };
  };
  e.prototype.parse_delete_area_margin = function (e, t) {
    var n = e.delete_area_margin;
    return Array.isArray(n) ? n : ("undefined" === typeof n && (n = 1e7), t === u.TOOLBOX_POSITION.LEFT ? [n, 0, n, n] : t === u.TOOLBOX_POSITION.TOP ? [n, n, 0, n] : t === u.TOOLBOX_POSITION.RIGHT ? [n, n, n, 0] : [0, n, n, n]);
  };
  e.prototype.parse_flyout_options = function (e) {
    var t = {
      auto_close: true,
      fixed_width: undefined,
      min_width: undefined,
      max_width: undefined,
      corner_radius: 0,
      padding: {
        top: 15,
        bottom: 20,
        left: 30,
        right: 30
      },
      blocks: {
        default_gap: 16,
        head_block_offset: [0, 0]
      }
    };
    return (0, o.parse_attr_deep)(t, e);
  };
  e.prototype.parse_block_group_options = function (e) {
    if (e.block_group) {
      return true === e.block_group ? {} : e.block_group;
    }
  };
  e.prototype.parse_auto_resize_options = function (e) {
    if (e.auto_resize) {
      return true === e.auto_resize ? {
        delay: 0
      } : e.auto_resize;
    }
  };
  e.prototype.parse_context_menu_options = function (e) {
    var t;
    var n;
    var r = [u.WorkspaceOptionType.PASTE, u.WorkspaceOptionType.CLEAN_UP, u.WorkspaceOptionType.DELETE_ALL, u.WorkspaceOptionType.COPY_ALL, u.WorkspaceOptionType.GLOBAL_COMMENT];
    var i = [u.BlockOptionType.COPY_AND_PASTE, u.BlockOptionType.COPY, u.BlockOptionType.ADD_COMMENT, u.BlockOptionType.COLLAPSE, u.BlockOptionType.DELETE, u.BlockOptionType.SET_GROUP];
    return {
      workspace: (null === (t = e.context_menu) || undefined === t ? undefined : t.workspace) || r,
      block: (null === (n = e.context_menu) || undefined === n ? undefined : n.block) || i
    };
  };
  return e = (0, r.__decorate)([(0, i.injectable)()], e);
}();
exports.Options = l;