/** 
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2172
 */

"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BlockGroup = undefined;
var r = require("tslib");
var i = require("inversify");
var o = require("@kitten-team/gl-matrix");
var a = require("../../125/195/index");
var s = require("../497/387");
var c = require("../../1001/213/index");
var u = require("../497/644");
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
      return (0, r.__awaiter)(n, undefined, undefined, function () {
        var n;
        var i;
        var o;
        return (0, r.__generator)(this, function (r) {
          switch (r.label) {
            case 0:
              return (n = null === (o = this.workspace.options.block_group) || undefined === o ? undefined : o.show_name_editor) ? [4, n(e.get_text())] : (t.call(e), [2]);
            case 1:
              if (!(undefined == (i = r.sent()))) {
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
        n.origin_block.get_svg_root().style.display = "none";
        n.origin_block.get_descendants(false, true).forEach(function (e) {
          return e.set_comment_visible(false);
        });
        if ("simplified" === n.workspace.get_options().comment_type) {
          (0, u.get_nested_blocks_with_comment)(n.origin_block).forEach(function (e) {
            var t;
            if ((0, c.is_block_group)(e)) {
              (t = n.nested_blocks_with_comment).push.apply(t, e.nested_blocks_with_comment);
            } else {
              n.nested_blocks_with_comment.push(e);
            }
          });
          if (n.nested_blocks_with_comment.length) {
            var s = null === (e = n.nested_blocks_with_comment[0].comment) || undefined === e ? undefined : e.get_text();
            n.set_comment_text(s);
            if (!(null === (t = n.comment) || undefined === t)) {
              t.init_svg(true);
            }
          }
        } else {
          n.set_comment_text(null === (r = n.origin_block.comment) || undefined === r ? undefined : r.get_text());
          if (!(null === (i = n.comment) || undefined === i)) {
            i.init_svg(true);
          }
        }
        n.origin_block.set_connectable(false);
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
      opt_is_head: true
    });
    var n = this.field_text_input_factory({
      text: this.group_name
    });
    n.show_editor = this.show_name_editor.bind(this, n, n.show_editor);
    this.append_dummy_input("START_GROUP").append_field(t).append_field(this.Msg.START_GROUP_TAG, a.BLOCK_GROUP_TAG_FIELD_NAME).append_field(n, a.BLOCK_GROUP_NAME_FIELD_NAME);
    this.set_previous_statement(false);
    this.set_next_statement(false);
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
    this.set_output(true, null === (e = this.origin_block.output_connection) || undefined === e ? undefined : e.check_);
    (0, s.assert)(this.output_connection);
    var n = this.origin_block.output_connection.target_connection;
    if (!(null === n || undefined === n)) {
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
    this.set_previous_statement(true);
    (0, s.assert)(this.previous_connection);
    var t = this.origin_block.previous_connection.target_connection;
    var n = undefined;
    if (this.group_stop_at) {
      this.set_next_statement(true);
      var r = this.workspace.get_block_by_id(this.group_stop_at);
      n = r && r.previous_connection;
      (0, s.assert)(n);
      n.disconnect();
      this.next_connection.connect(n);
    } else if (this.origin_block.last_connection_in_stack()) {
      this.set_next_statement(true);
    }
    if (!(null === t || undefined === t)) {
      t.disconnect();
    }
    if (!(null === t || undefined === t)) {
      t.connect(this.previous_connection);
    }
  };
  t.prototype.options_add_set_blocks_group = function (e) {
    var t = this;
    e.push({
      text: this.utils.replace_message_references("%{BKY_RELEASE_GROUP}"),
      name: "release_group",
      area: "block",
      enabled: true,
      callback: function () {
        t.release();
      }
    });
  };
  t.prototype.dispose = function (e, t) {
    var n;
    if (this.workspace) {
      var r = this.events.get_group();
      this.events.set_group(r || true);
      if (t && this.rendered) {
        this.block_animations.dispose_ui_effect(this);
      }
      this.release();
      if (null === (n = this.origin_block) || undefined === n ? undefined : n.workspace) {
        var i = this.origin_block.get_descendants(true, true);
        if (i) {
          for (var o = 0; o < i.length; o++) {
            var a = i[o];
            if ((0, c.is_block_group)(a)) {
              a.release();
            }
          }
        }
        this.origin_block.dispose(e, false);
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
    switch (this.events.disable(), this.group_name = this.get_field_value(a.BLOCK_GROUP_NAME_FIELD_NAME), this.origin_block.move_by(o.vec2.sub(o.vec2.create(), this.get_relative_to_surface_xy(), this.origin_block.get_relative_to_surface_xy())), this.origin_block.get_svg_root().style.display = this.origin_block_display, this.origin_block.set_connectable(true), this.origin_block.set_chunk_visibility(this.get_visibility()), this.origin_block.update_chunk_visibility(), this.group_type) {
      case a.BlockGroupType.EXECUTION:
        (0, s.assert)(this.origin_block.previous_connection, "Statement block must have prev conn. ");
        var d = null === (t = this.previous_connection) || undefined === t ? undefined : t.target_connection;
        if (!(null === (n = this.previous_connection) || undefined === n)) {
          n.disconnect();
        }
        var h = null === (r = this.next_connection) || undefined === r ? undefined : r.target_connection;
        if (this.group_stop_at = null === h || undefined === h ? undefined : h.source_block.id, null === (i = this.next_connection) || undefined === i || i.disconnect(), h) {
          var p = this.origin_block.last_connection_in_stack();
          (0, s.assert)(p);
          p.connect(h);
        }
        if ((null === d || undefined === d ? undefined : d.source_block.workspace) === this.origin_block.workspace) {
          if (!(null === d || undefined === d)) {
            d.connect(this.origin_block.previous_connection);
          }
        }
        break;
      case a.BlockGroupType.OUTPUT:
        (0, s.assert)(this.origin_block.output_connection, "Output block must have output conn. ");
        var _ = null === (c = this.output_connection) || undefined === c ? undefined : c.target_connection;
        if (!(null === (u = this.output_connection) || undefined === u)) {
          u.disconnect();
        }
        if (!(null === _ || undefined === _)) {
          _.connect(this.origin_block.output_connection);
        }
    }
    this.origin_block.get_descendants(false, true).forEach(function (e) {
      return e.set_comment_visible(true);
    });
    if (!(null === (l = this.origin_block.comment) || undefined === l)) {
      l.init_svg(true);
    }
    e.prototype.dispose.call(this, false, false);
    this.events.enable();
    if (!(null === (f = this.on_release) || undefined === f)) {
      f.call(this);
    }
  };
  return t = (0, r.__decorate)([(0, i.injectable)()], t);
}(require("./1325").BlockSvg);
exports.BlockGroup = l;