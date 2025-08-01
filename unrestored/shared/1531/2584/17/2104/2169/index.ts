"use strict";

Object.defineProperty(exports, "__esModule", {
  value: !0
});
exports.block_render_svg = void 0;
var r = require("../../../1001/93");
var i = require("../../259");
var o = require("../../../125/195/index");
var a = require("../../../125/534");
var s = require("../../../1001/213/index");
var c = require("./2170");
var u = require("./2171");
var l = require("./1324");
var f = require("./1107");
exports.block_render_svg = function (e) {
  return function (e) {
    function t() {
      var t = null !== e && e.apply(this, arguments) || this;
      t.fixed_size_rule = [function (e, n) {
        if (!(t.is_starting_block() || t.is_collapsed() || e !== t.inputList.length - 1 || !t.inputList[e - 1] || t.inputList[e - 1].type !== o.InputType.STATEMENT)) {
          t.inputList[e].height = 26;
          t.inputList[e].width = t.theme.renderer.INPUT_EXTRA_ROW_WIDTH;
          n.padding_l = 52;
          n.padding_r = 16;
        }
      }, function (e, n) {
        if ((0, s.is_block_group)(t) && t.group_type === o.BlockGroupType.OUTPUT) {
          t.inputList[e].height = 48;
          n.height = 48;
        }
      }, function (e) {
        if (t.is_starting_block() && t.inputList[e].type === o.InputType.STATEMENT) {
          t.inputList[e].render_height = 0;
          t.inputList[e].height = 0;
        }
      }];
      return t;
    }
    (0, r.__extends)(t, e);
    t.prototype.get_block_renderer = function () {
      return this.is_starting_block() ? new c.HeadBlockRenderer(this) : void 0 != this.output_connection ? this.is_shadow() && "param_color" !== this.element_type ? new u.ShadowBlockRenderer(this) : new l.OutputBlockRenderer(this) : new f.BlockRenderer(this);
    };
    t.prototype.render = function (e) {
      this.width = 0;
      this.svg_path_width = 0;
      this.block_renderer = this.get_block_renderer();
      this.utils.start_text_cache();
      this.rendered = !0;
      var t = 0;
      if (this.warning) {
        t = this.warning.render_icon(t, this.block_renderer);
      }
      var n = this._render_compute(t);
      this.render_draw_(n);
      this.render_move_connections_();
      if (this.comment) {
        this.comment.reposition();
      }
      if (!1 !== e) {
        var r = this.get_parent();
        if (r) {
          r.render(!0);
        } else {
          this.workspace.resize_contents();
        }
      }
      this.utils.stop_text_cache();
      this.update_chunk_visibility();
    };
    t.prototype.render_fields_ = function (e, t, n) {
      for (var r = 0; r < e.length; ++r) {
        e[r].layout(t, n);
      }
      return t;
    };
    t.prototype.create_row_for_input_ = function (e, t) {
      return Object.assign([], {
        type: e.type !== o.InputType.STATEMENT ? o.InputRowType.INLINE : o.InputRowType.STATEMENT,
        padding_l: e.type === o.InputType.STATEMENT && this.is_starting_block() ? t : this.block_renderer.padding_l + t,
        padding_r: this.block_renderer.padding_r,
        height: 0
      });
    };
    t.prototype.compute_input_height_ = function (e) {
      return e.type === o.InputType.STATEMENT ? this.theme.renderer.INPUT_MIN_HEIGHT_STATEMENT : this.block_renderer.min_height;
    };
    t.prototype.compute_input_width_ = function (e) {
      var t;
      if (!this.is_output_block()) {
        return 0;
      }
      switch (null === (t = e.connection) || void 0 === t ? void 0 : t.get_output_shape()) {
        case o.OutputShape.ROUND:
          return this.theme.renderer.INPUT_SHAPE_ROUND_WIDTH;
        case o.OutputShape.HEXAGONAL:
          return this.theme.renderer.INPUT_SHAPE_HEXAGONAL_WIDTH;
        default:
          return 0;
      }
    };
    t.prototype._render_compute = function (e) {
      for (var t, n = this.inputList, r = Object.assign([], {
          type: o.InputRowType.INLINE,
          right_edge: 0,
          statement_width: 0,
          height: 0
        }), i = this.get_inputs_inline() && !this.is_collapsed(), a = function (a) {
          var c;
          var u = n[a];
          if (!u.is_visible()) {
            return "continue";
          }
          if (i && void 0 != t && t !== o.InputType.STATEMENT && u.type !== o.InputType.STATEMENT) {
            c = r[r.length - 1];
          } else {
            c = s.create_row_for_input_(u, void 0 == t ? e : 0);
            t = u.type;
            r.push(c);
          }
          c.push(u);
          u.field_width = 0;
          u.field_height = 0;
          for (var l = 0; l < u.fieldRow.length; l++) {
            var f = u.fieldRow[l];
            var d = f.get_size();
            f.render_sep = c.length > 1 || l > 0 || s.is_starting_block() ? f.margin_left : 0;
            u.field_width += f.render_sep + d.width;
            u.field_height = Math.max(u.field_height, d.height);
          }
          u.render_width = 0;
          u.render_height = 0;
          if (u.connection) {
            var h = u.connection.targetBlock();
            if (h) {
              var p = h.get_height_width();
              if (h.is_shadow() && "param_color" !== h.element_type) {
                u.field_height = Math.max(u.field_height, p.height);
              } else {
                u.render_height = Math.max(u.render_height, p.height);
              }
              u.render_width = Math.max(u.render_width, p.width);
            }
          }
          u.height = Math.max(s.compute_input_height_(c), u.field_height + 2 * s.block_renderer.get_field_padding_y(), u.render_height + 2 * s.block_renderer.get_block_padding_y(u.type));
          u.width = Math.max(s.compute_input_width_(u), u.field_width + u.render_width);
          s.fixed_size_rule.forEach(function (e) {
            return e(a, c);
          });
          c.height = Math.max(c.height, u.height);
        }, s = this, c = 0; c < n.length; c++) {
        a(c);
      }
      r.forEach(function (e) {
        e.forEach(function (t) {
          t.height = e.height;
        });
      });
      r.right_edge = Math.max(r.right_edge, this.block_renderer.min_width(this) - this.block_renderer.padding_r);
      return r;
    };
    t.prototype.render_draw_ = function (e) {
      var t = [];
      this.render_draw_top_(t);
      var n = this.render_draw_right_(t, e);
      this.render_draw_bottom_(t, n);
      this.render_draw_left_(t);
      var r = t.join(" ");
      if (this.svg_path) {
        this.svg_path.setAttribute("d", r);
        if (this.RTL) {
          this.svg_path.setAttribute("transform", "scale(-1 1)");
        }
      }
    };
    t.prototype.render_move_connections_ = function () {
      var e = this.get_relative_to_surface_xy();
      if (void 0 != this.previous_connection) {
        this.previous_connection.move_to_offset(e);
      }
      if (void 0 != this.output_connection) {
        this.output_connection.move_to_offset(e);
      }
      for (var t = 0; t < this.inputList.length; ++t) {
        var n = this.inputList[t].connection;
        if (n) {
          n.move_to_offset(e);
          if (n.is_connected()) {
            n.tighten();
          }
        }
      }
      if (this.next_connection) {
        this.next_connection.move_to_offset(e);
        if (this.next_connection.is_connected()) {
          this.next_connection.tighten();
        }
      }
    };
    t.prototype.render_draw_top_ = function (e) {
      this.block_renderer.render_path_start(e, this);
      if (void 0 != this.previous_connection) {
        var t = 0;
        if (this.is_render_notch()) {
          t = this.theme.renderer.NOTCH_WIDTH + this.theme.renderer.NTOCH_START_PADDING;
        }
        this.previous_connection.set_offset_in_block(t, 0);
      }
    };
    t.prototype.render_draw_right_ = function (e, t) {
      for (var n = i.vec2.create(), r = 0, c = 0, u = 0, l = t.length; u < l; u++) {
        var f = t[u];
        var d = t[u - 1];
        n[0] = f.padding_l;
        if (f.type == o.InputRowType.INLINE) {
          if (d && d.type == o.InputRowType.STATEMENT && u !== l - 1) {
            this.render_row_inline_(e, n, u, t, this.block_renderer.edge_width, Math.max(this.theme.renderer.MIN_WIDTH - r, r));
          } else {
            this.render_row_inline_(e, n, u, t, this.block_renderer.edge_width);
          }
        } else {
          if (f.type == o.InputRowType.STATEMENT) {
            if (void 0 != d && !this.is_starting_block() || 0 == this.inputs_inline) {
              this.block_renderer.render_edge_shape_right(e, this, !0, n, c);
            }
            this.render_row_statement(e, n, f, u, t);
          }
        }
        n[1] += f.height;
        r = n[0];
        c = f.height;
      }
      if (0 === t.length) {
        n[0] = t.right_edge;
        e.push("H", "" + n[0]);
        this.block_renderer.render_edge_shape_right(e, this, this.inputs_inline, n, c);
        this.width = Math.max(this.width, n[0] + this.block_renderer.padding_r);
        this.svg_path_width = Math.max(this.width, n[0] + this.block_renderer.padding_r);
        n[1] = this.block_renderer.min_height;
      }
      this.height = n[1];
      if (t[t.length - 1] && t[t.length - 1][0].name === a.COLLAPSED_INPUT_NAME) {
        this.block_renderer.render_edge_shape_collapsed_right(e, this);
        return n;
      }
      if ((0, s.is_block_group)(this)) {
        var h = this.block_renderer.render_group_decoration_blocks(this);
        e.push("h " + h);
        n[0] += h;
        this.block_renderer.render_edge_shape_group_right(e, this);
        this.width += h + this.theme.renderer.GROUP_RIGHT_EXTENDED_WIDTH;
        if (this.group_type === o.BlockGroupType.EXECUTION) {
          this.height += this.theme.renderer.INPUT_MIN_HEIGHT_STATEMENT + this.theme.renderer.INPUT_EXTRA_ROW_HEIGHT;
        }
        return n;
      }
      if (t[t.length - 1] && t[t.length - 1].type !== o.InputType.STATEMENT || this.is_starting_block()) {
        this.block_renderer.render_edge_shape_right(e, this, this.inputs_inline, n, c);
      }
      return n;
    };
    t.prototype.render_row_inline_ = function (e, t, n, r, i, a) {
      for (var s = r[n], c = 0; c < s.length; c++) {
        var u = s[c];
        t = this.render_fields_(u.fieldRow, t, s.height || 0);
        if (u.type == o.InputType.VALUE) {
          t[0] += 0 === u.fieldRow.length && 0 === c ? 0 : u.margin_left;
          var l = u.connection;
          var f = l.targetBlock();
          if (u.connection && u.connection.get_targe_connection() && void 0 != f) {
            l.set_offset_in_block(t[0], t[1] + (s.height - f.height) / 2);
          }
          t[0] += u.render_width;
        }
        if (a) {
          t[0] = Math.max(t[0], a);
        }
      }
      var d = r.right_edge;
      var h = r[n - 1];
      if (void 0 != h && h.type === o.InputType.STATEMENT) {
        d = this.theme.renderer.STATEMENT_OTHER_ROW_MIN_WIDTH - this.theme.renderer.BLOCK_EDGE_WIDTH;
      }
      r.right_edge = Math.max(t[0], d);
      t[0] = Math.max(t[0], r.right_edge);
      if (0 === n) {
        this.first_row_width = t[0] + s.padding_r;
        this.first_row_height = s.height;
      }
      this.width = Math.max(this.width, t[0] + s.padding_r);
      this.svg_path_width = Math.max(this.width, t[0] + s.padding_r);
      var p = Math.min(s.height / 2, i);
      e.push("H", "" + (t[0] + s.padding_r - p));
    };
    t.prototype.draw_statement_input_ = function (e, t, n) {
      if (this.is_render_notch()) {
        e.push("H " + (this.theme.renderer.STATEMENT_MIN_WIDTH + this.theme.renderer.NTOCH_START_PADDING + this.theme.renderer.NOTCH_WIDTH + this.theme.renderer.NOTCH_OFFSET_BETWEEN_PADDING_AND_ROUND_CORNER));
        e.push(this.theme.renderer.NOTCH_PATH_RIGHT);
      }
      if (1 == n.length && 0 == n[0].fieldRow.length) {
        e.push("H " + (this.theme.renderer.STATEMENT_MIN_WIDTH + this.theme.renderer.C_BLOCK_INNER_CORNOR_RADIUS));
      } else {
        e.push("H " + (t + this.theme.renderer.STATEMENT_MIN_WIDTH + this.theme.renderer.C_BLOCK_INNER_CORNOR_RADIUS));
      }
      e.push(this.theme.renderer.C_BLOCK_INNER_CORNOR_LEFT_TOP + " v " + (n.height - 2 * this.theme.renderer.C_BLOCK_INNER_CORNOR_RADIUS) + " " + this.theme.renderer.C_BLOCK_INNER_CORNOR_LEFT_BOTTOM);
      if (this.is_render_notch()) {
        e.push("H " + (this.theme.renderer.STATEMENT_MIN_WIDTH + this.theme.renderer.NTOCH_START_PADDING));
        e.push(this.theme.renderer.NOTCH_PATH_LEFT);
      }
    };
    t.prototype.render_row_statement = function (e, t, n, r, i) {
      var s = n[0];
      this.render_fields_(s.fieldRow, t, n.height || 0);
      if (!(this.is_starting_block() && 0 != this.inputs_inline)) {
        this.draw_statement_input_(e, t[0], n);
        if (!(1 == n.length && 0 == n[0].fieldRow.length)) {
          t[0] += this.theme.renderer.STATEMENT_MIN_WIDTH;
        }
      }
      var c = t[0];
      if (this.is_render_notch()) {
        if (this.is_starting_block()) {
          if (a.SPECIAL_CONNECTION_INPUT_NAME.includes(s.name)) {
            c = this.theme.renderer.NTOCH_START_PADDING + this.theme.renderer.NOTCH_WIDTH;
          }
        } else {
          c = this.theme.renderer.NTOCH_START_PADDING + this.theme.renderer.NOTCH_WIDTH + this.theme.renderer.STATEMENT_MIN_WIDTH;
        }
      }
      if (!s.connection) {
        throw new Error("Statement connection should be renderable.");
      }
      s.connection.set_offset_in_block(c, t[1]);
      if (r == i.length - 1 || i[r + 1].type == o.InputType.STATEMENT) {
        if (this.is_starting_block()) {
          return;
        }
        var u = this.theme.renderer.INPUT_EXTRA_ROW_HEIGHT / 2;
        var l = Math.max(this.theme.renderer.INPUT_EXTRA_ROW_WIDTH - u, t[0] + this.theme.renderer.ROW_PADDING);
        e.push("H " + l);
        e.push("a " + u + " " + u + " 0,0,1 0, " + this.theme.renderer.INPUT_EXTRA_ROW_HEIGHT);
        t[1] += this.theme.renderer.INPUT_EXTRA_ROW_HEIGHT;
      }
    };
    t.prototype.render_draw_bottom_ = function (e, t) {
      if (!a.NEED_COLLAPSE_CHILDREN_BLOCKS.includes(this.type) || !this.is_collapsed()) {
        if ((0, s.is_block_group)(this) && this.group_type === o.BlockGroupType.EXECUTION) {
          this.block_renderer.render_group_bottom(e);
          t[0] = this.theme.renderer.STATEMENT_MIN_WIDTH;
          t[1] += this.theme.renderer.INPUT_MIN_HEIGHT_STATEMENT + this.theme.renderer.INPUT_EXTRA_ROW_HEIGHT;
        }
        var n = this.next_connection || this.is_include_special_input() && !this.is_collapsed();
        var r = 0;
        if (this.is_render_notch() && n) {
          this.block_renderer.render_path_notch_bottom(e);
          r = this.theme.renderer.NOTCH_WIDTH + this.theme.renderer.NTOCH_START_PADDING;
        }
        if (this.next_connection) {
          this.next_connection.set_offset_in_block(r, t[1]);
        }
      }
    };
    t.prototype.render_draw_left_ = function (e) {
      if (void 0 != this.output_connection) {
        this.output_connection.set_offset_in_block(0, 0);
      }
      this.block_renderer.render_path_end(e, this);
      e.push("z");
    };
    return t;
  }(e);
};