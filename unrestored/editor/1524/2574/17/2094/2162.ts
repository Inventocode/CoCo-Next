"use strict";

import * as r from "../../1000/93";
import * as i from "../../1000/134/index";
import * as o from "../../125/259";
import * as a from "../../125/195/index";
import * as s from "../../206/725/387";
import * as c from "../../1000/213/index";
import * as u from "../497/644";
var l = function (e) {
  function t(t) {
    var n = e.call(this, {
      workspace: t.workspace,
      id: t.id
    }) || this;
    n.element_type = "block_group";
    n.group_type = 0;
    n.nested_blocks_with_comment = [];
    n.decoration_block_paths = [];
    n.show_name_editor = function (e, t) {
      return (0, r.__awaiter)(n, void 0, void 0, function () {
        var n;
        var i;
        var o;
        return (0, r.__generator)(this, function (r) {
          switch (r.label) {
            case 0:
              return (n = null === (o = this.workspace.options.block_group) || void 0 === o ? void 0 : o.show_name_editor) ? [4, n(e.get_text())] : (t.call(e), [2]);
            case 1:
              if (!(void 0 == (i = r.sent()))) {
                e.set_value(i);
              }
              return [2];
          }
        });
      });
    };
    n.init = function () {
      var e;
      var t;
      var r;
      var i;
      n.events.disable();
      var o = n.origin_xy || n.origin_block.get_relative_to_surface_xy();
      n.move_by(o);
      n.set_chunk_visibility(n.origin_block.get_visibility());
      try {
        if (n.origin_block.is_starting_block()) {
          n.group_type = a.BlockGroupType.START;
          return void n.init_start_group();
        }
        if (n.origin_block.output_connection) {
          n.group_type = a.BlockGroupType.OUTPUT;
          return void n.init_output_group();
        }
        n.group_type = a.BlockGroupType.EXECUTION;
        n.init_execution_group();
      } finally {
        if (n.origin_block.get_svg_root().style.display = "none", n.origin_block.get_descendants(!1, !0).forEach(function (e) {
          return e.set_comment_visible(!1);
        }), "simplified" === n.workspace.get_options().comment_type) {
          if ((0, u.get_nested_blocks_with_comment)(n.origin_block).forEach(function (e) {
            var t;
            if ((0, c.is_block_group)(e)) {
              (t = n.nested_blocks_with_comment).push.apply(t, e.nested_blocks_with_comment);
            } else {
              n.nested_blocks_with_comment.push(e);
            }
          }), n.nested_blocks_with_comment.length) {
            var s = null === (e = n.nested_blocks_with_comment[0].comment) || void 0 === e ? void 0 : e.get_text();
            n.set_comment_text(s);
            if (!(null === (t = n.comment) || void 0 === t)) {
              t.init_svg(!0);
            }
          }
        } else {
          n.set_comment_text(null === (r = n.origin_block.comment) || void 0 === r ? void 0 : r.get_text());
          if (!(null === (i = n.comment) || void 0 === i)) {
            i.init_svg(!0);
          }
        }
        n.origin_block.set_connectable(!1);
        n.events.enable();
      }
    };
    n.origin_block = t.origin_block;
    n.group_name = t.group_name;
    n.on_release = t.on_release;
    n.origin_block_display = n.origin_block.get_svg_root().style.display;
    n.origin_xy = t.origin_xy;
    n.group_stop_at = t.group_stop_at;
    n.init();
    return n;
  }
  (0, r.__extends)(t, e);
  t.prototype.init_start_group = function () {
    this.set_colour(this.theme.block_group_color.START_GROUP_FILL_COLOUR || this.origin_block.get_original_colour(), this.theme.block_group_color.START_GROUP_STROKE_COLOUR || this.origin_block.get_border_colour());
    var e = this.origin_block.inputList[0].fieldRow[0];
    var t = this.field_icon_factory({
      src: e.src_ || "",
      opt_is_head: !0
    });
    var n = this.field_text_input_factory({
      text: this.group_name
    });
    n.show_editor = this.show_name_editor.bind(this, n, n.show_editor);
    this.append_dummy_input("START_GROUP").append_field(t).append_field(this.Msg.START_GROUP_TAG, a.BLOCK_GROUP_TAG_FIELD_NAME).append_field(n, a.BLOCK_GROUP_NAME_FIELD_NAME);
    this.set_previous_statement(!1);
    this.set_next_statement(!1);
  };
  t.prototype.init_output_group = function () {
    var e;
    this.set_colour(this.theme.block_group_color.OUTPUT_GROUP_FILL_COLOUR || this.origin_block.get_original_colour(), this.theme.block_group_color.OUTPUT_GROUP_STROKE_COLOUR || this.origin_block.get_border_colour());
    var t = this.field_text_input_factory({
      text: this.group_name
    });
    t.margin_left = this.theme.renderer.SEP_SPACE_X + this.theme.renderer.BLOCK_EDGE_WIDTH_OUTPUT;
    t.show_editor = this.show_name_editor.bind(this, t, t.show_editor);
    this.append_dummy_input("OUTPUT_GROUP").append_field(this.Msg.OUTPUT_GROUP_TAG, a.BLOCK_GROUP_TAG_FIELD_NAME).append_field(t, a.BLOCK_GROUP_NAME_FIELD_NAME);
    (0, s.assert)(this.origin_block.output_connection);
    this.set_output(!0, null === (e = this.origin_block.output_connection) || void 0 === e ? void 0 : e.check_);
    (0, s.assert)(this.output_connection);
    var n = this.origin_block.output_connection.target_connection;
    if (!(null === n || void 0 === n)) {
      n.connect(this.output_connection);
    }
  };
  t.prototype.init_execution_group = function () {
    this.set_colour(this.theme.block_group_color.EXECUTION_GROUP_FILL_COLOUR || this.origin_block.get_original_colour(), this.theme.block_group_color.EXECUTION_GROUP_STROKE_COLOUR || this.origin_block.get_border_colour());
    var e = this.field_text_input_factory({
      text: this.group_name
    });
    e.show_editor = this.show_name_editor.bind(this, e, e.show_editor);
    this.append_dummy_input("EXECUTION_GROUP").append_field(this.Msg.EXECUTION_GROUP_TAG, a.BLOCK_GROUP_TAG_FIELD_NAME).append_field(e, a.BLOCK_GROUP_NAME_FIELD_NAME);
    (0, s.assert)(this.origin_block.previous_connection);
    this.set_previous_statement(!0);
    (0, s.assert)(this.previous_connection);
    var t = this.origin_block.previous_connection.target_connection;
    var n = void 0;
    if (this.group_stop_at) {
      this.set_next_statement(!0);
      var r = this.workspace.get_block_by_id(this.group_stop_at);
      n = r && r.previous_connection;
      (0, s.assert)(n);
      n.disconnect();
      this.next_connection.connect(n);
    } else if (this.origin_block.last_connection_in_stack()) {
      this.set_next_statement(!0);
    }
    if (!(null === t || void 0 === t)) {
      t.disconnect();
    }
    if (!(null === t || void 0 === t)) {
      t.connect(this.previous_connection);
    }
  };
  t.prototype.options_add_set_blocks_group = function (e) {
    var t = this;
    e.push({
      text: this.utils.replace_message_references("%{BKY_RELEASE_GROUP}"),
      name: "release_group",
      area: "block",
      enabled: !0,
      callback: function () {
        t.release();
      }
    });
  };
  t.prototype.dispose = function (e, t) {
    var n;
    if (this.workspace) {
      var r = this.events.get_group();
      if (this.events.set_group(r || !0), t && this.rendered && this.block_animations.dispose_ui_effect(this), this.release(), null === (n = this.origin_block) || void 0 === n ? void 0 : n.workspace) {
        var i = this.origin_block.get_descendants(!0, !0);
        if (i) {
          for (var o = 0; o < i.length; o++) {
            var a = i[o];
            if ((0, c.is_block_group)(a)) {
              a.release();
            }
          }
        }
        this.origin_block.dispose(e, !1);
      }
      this.events.set_group(r);
    }
  };
  t.prototype.release = function () {
    var t;
    var n;
    var r;
    var i;
    var c;
    var u;
    var l;
    var f;
    switch (this.events.disable(), this.group_name = this.get_field_value(a.BLOCK_GROUP_NAME_FIELD_NAME), this.origin_block.move_by(o.vec2.sub(o.vec2.create(), this.get_relative_to_surface_xy(), this.origin_block.get_relative_to_surface_xy())), this.origin_block.get_svg_root().style.display = this.origin_block_display, this.origin_block.set_connectable(!0), this.origin_block.set_chunk_visibility(this.get_visibility()), this.origin_block.update_chunk_visibility(), this.group_type) {
      case a.BlockGroupType.EXECUTION:
        (0, s.assert)(this.origin_block.previous_connection, "Statement block must have prev conn. ");
        var h = null === (t = this.previous_connection) || void 0 === t ? void 0 : t.target_connection;
        if (!(null === (n = this.previous_connection) || void 0 === n)) {
          n.disconnect();
        }
        var d = null === (r = this.next_connection) || void 0 === r ? void 0 : r.target_connection;
        if (this.group_stop_at = null === d || void 0 === d ? void 0 : d.source_block.id, null === (i = this.next_connection) || void 0 === i || i.disconnect(), d) {
          var p = this.origin_block.last_connection_in_stack();
          (0, s.assert)(p);
          p.connect(d);
        }
        if ((null === h || void 0 === h ? void 0 : h.source_block.workspace) === this.origin_block.workspace) {
          if (!(null === h || void 0 === h)) {
            h.connect(this.origin_block.previous_connection);
          }
        }
        break;
      case a.BlockGroupType.OUTPUT:
        (0, s.assert)(this.origin_block.output_connection, "Output block must have output conn. ");
        var _ = null === (c = this.output_connection) || void 0 === c ? void 0 : c.target_connection;
        if (!(null === (u = this.output_connection) || void 0 === u)) {
          u.disconnect();
        }
        if (!(null === _ || void 0 === _)) {
          _.connect(this.origin_block.output_connection);
        }
    }
    this.origin_block.get_descendants(!1, !0).forEach(function (e) {
      return e.set_comment_visible(!0);
    });
    if (!(null === (l = this.origin_block.comment) || void 0 === l)) {
      l.init_svg(!0);
    }
    e.prototype.dispose.call(this, !1, !1);
    this.events.enable();
    if (!(null === (f = this.on_release) || void 0 === f)) {
      f.call(this);
    }
  };
  return t = (0, r.__decorate)([(0, i.injectable)()], t);
}(require("./1318").BlockSvg);
export { l as BlockGroup };