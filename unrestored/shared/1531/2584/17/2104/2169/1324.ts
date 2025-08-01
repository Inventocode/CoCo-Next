"use strict";

Object.defineProperty(exports, "__esModule", {
  value: !0
});
exports.OutputBlockRenderer = void 0;
var r = require("../../../1001/93");
var i = require("../../../125/195/index");
var o = require("../../../125/index");
var a = function (e) {
  function t(t) {
    var n = e.call(this, t) || this;
    n.padding_l = n.theme.renderer.ROW_PADDING_OUTPUT;
    n.padding_r = n.theme.renderer.ROW_PADDING_OUTPUT;
    n.edge_width = n.theme.renderer.BLOCK_EDGE_WIDTH_OUTPUT;
    n.min_height = n.theme.renderer.MIN_HEIGHT_OUTPUT;
    if (t.get_output_shape() === i.OutputShape.HEXAGONAL) {
      n.edge_width = n.theme.renderer.BLOCK_EDGE_WIDTH_OUTPUT_HEXAGONAL;
    }
    return n;
  }
  (0, r.__extends)(t, e);
  t.prototype.min_width = function (e) {
    return e && this.theme.renderer.MIN_WIDTH_OUTPUT;
  };
  t.prototype.render_path_start = function (e, t) {
    if (t) {
      e.push("m " + this.edge_width + ",0");
    }
  };
  t.prototype.render_edge_shape_right = function (e, t) {
    switch (t.get_output_shape()) {
      case i.OutputShape.HEXAGONAL:
        e.push("a " + this.theme.renderer.HEX_TOP_BOTTOM_CORNER_RADIUS + ", " + this.theme.renderer.HEX_TOP_BOTTOM_CORNER_RADIUS + " 0 0,1 \n          " + this.theme.renderer.CORNER_OFFSET_X + ", " + this.theme.renderer.CORNER_OFFSET_Y);
        e.push("l " + this.edge_width + " " + (t.height / 2 - this.theme.renderer.CORNER_OFFSET_X));
        e.push("a " + this.theme.renderer.HEX_CENTER_CORNER_RADIUS + ", " + this.theme.renderer.HEX_CENTER_CORNER_RADIUS + " 0 0,1 \n          0, " + this.theme.renderer.CENTER_CORNER_OFFSET);
        e.push("l -" + this.edge_width + " " + (t.height / 2 - this.theme.renderer.CORNER_OFFSET_X));
        e.push("a " + this.theme.renderer.HEX_TOP_BOTTOM_CORNER_RADIUS + "," + this.theme.renderer.HEX_TOP_BOTTOM_CORNER_RADIUS + " 0 0,1 \n          -" + this.theme.renderer.CORNER_OFFSET_X + ", " + this.theme.renderer.CORNER_OFFSET_Y);
        break;
      default:
        e.push("a " + this.edge_width + " " + this.edge_width + " 0 0 1 " + this.edge_width + " " + this.edge_width);
        var n = t.height - 2 * this.edge_width;
        if (n > 0) {
          e.push("v " + n);
        }
        e.push("a " + this.edge_width + " " + this.edge_width + " 0 0 1 -" + this.edge_width + " " + this.edge_width);
    }
  };
  t.prototype.render_path_end = function (e, t) {
    switch (t.get_output_shape()) {
      case i.OutputShape.HEXAGONAL:
        e.push("H " + this.edge_width);
        e.push("a " + this.theme.renderer.HEX_TOP_BOTTOM_CORNER_RADIUS + "," + this.theme.renderer.HEX_TOP_BOTTOM_CORNER_RADIUS + " 0 0,1 \n          -" + this.theme.renderer.CORNER_OFFSET_X + ", -" + this.theme.renderer.CORNER_OFFSET_Y);
        e.push("l -" + this.edge_width + " -" + (t.height / 2 - this.theme.renderer.CORNER_OFFSET_X));
        e.push("a " + this.theme.renderer.HEX_CENTER_CORNER_RADIUS + "," + this.theme.renderer.HEX_CENTER_CORNER_RADIUS + " 0 0,1 \n            0, -" + this.theme.renderer.CENTER_CORNER_OFFSET);
        e.push("l " + this.edge_width + " -" + (t.height / 2 - this.theme.renderer.CORNER_OFFSET_X));
        e.push("a " + this.theme.renderer.HEX_TOP_BOTTOM_CORNER_RADIUS + "," + this.theme.renderer.HEX_TOP_BOTTOM_CORNER_RADIUS + " 0 0,1 \n          " + this.theme.renderer.CORNER_OFFSET_X + ", -" + this.theme.renderer.CORNER_OFFSET_Y);
        break;
      default:
        e.push("H " + this.edge_width);
        e.push("a " + this.edge_width + " " + this.edge_width + " 0 0 1 -" + this.edge_width + " -" + this.edge_width);
        var n = t.height - 2 * this.edge_width;
        if (n > 0) {
          e.push("v -" + n);
        }
        e.push("a " + this.edge_width + " " + this.edge_width + " 0 0 1 " + this.edge_width + " -" + this.edge_width);
    }
  };
  t.prototype.render_edge_shape_collapsed_right = function (e, t) {
    var n = t.height;
    e.push(this.theme.renderer.COLLAPSED_PATH);
    e.push("v " + (n - this.min_height + t.height / 2 - this.theme.renderer.CORNER_OFFSET_X));
  };
  t.prototype.get_layered_value_descendants = function (e, t) {
    var n;
    if (void 0 === t && (t = !0), !e.output_connection) {
      return [];
    }
    for (var r = [], o = 0; o < e.inputList.length; o++) {
      var a = e.inputList[o];
      if (a.type === i.InputType.VALUE) {
        var s = null === (n = a.connection) || void 0 === n ? void 0 : n.targetBlock();
        if (!(!s || t && s.is_shadow())) {
          for (var c = this.get_layered_value_descendants(s, t), u = 0; u < c.length; u++) {
            r[u] = r[u] || [];
            r[u] = r[u].concat(c[u]);
          }
        }
      }
    }
    r.unshift([e]);
    return r;
  };
  t.prototype.select_output_group_children = function (e) {
    for (var t, n, r = e.origin_block, i = this.get_layered_value_descendants(r, !0), o = [], a = 1; a < i.length; a++) {
      o = o.concat(i[a]);
    }
    var s = function (e) {
      return e.get_original_colour() === r.get_original_colour();
    };
    for (a = 0; a < o.length; a++) {
      var c = o[a];
      if (t) {
        if (n) {
          if (!s(t) && !s(n)) {
            break;
          }
          if (!s(n)) {
            t = n;
          }
          n = c;
        } else {
          n = c;
        }
      } else {
        t = c;
      }
    }
    return [t, n];
  };
  t.prototype.render_decoration_block = function (e, t, n, r, a) {
    var s = n;
    switch (a) {
      case i.OutputShape.HEXAGONAL:
        return (0, o.create_svg_element)("path", {
          d: "\n            m " + (t + e * this.theme.renderer.OUTPUT_GROUP_DECORATION_OFFSET - 5) + " 6,\n            h " + (s + 10) + ",\n            a 3,3 0 0,1 2,1\n            l " + this.edge_width + " " + (this.min_height / 2 - this.theme.renderer.CORNER_OFFSET_X) + ",\n            a 2,2 0 0,1 0,2\n            l -" + this.edge_width + " " + (this.min_height / 2 - this.theme.renderer.CORNER_OFFSET_X) + "\n            a 3,3 0 0,1 -2,1\n            h -" + (s + 10) + ",\n            a 3,3 0 0,1 -2,-1\n            l -" + this.edge_width + " -" + (this.min_height / 2 - this.theme.renderer.CORNER_OFFSET_X) + "\n            a 2,2 0 0,1 0,-2\n            l " + this.edge_width + " -" + (this.min_height / 2 - this.theme.renderer.CORNER_OFFSET_X) + "\n            a 3,3 0 0,1 2,-1\n          ",
          fill: r.get_original_colour(),
          stroke: r.get_border_colour(),
          class: "decoration_for_collapsed_blocks"
        });
      default:
        return (0, o.create_svg_element)("path", {
          d: "\n            m " + (t + e * this.theme.renderer.OUTPUT_GROUP_DECORATION_OFFSET) + " 6,\n            h " + s + ",\n            a " + this.edge_width + " " + this.edge_width + " 0 0 1 0 " + 2 * this.edge_width + ",\n            h -" + s + ",\n            a " + this.edge_width + " " + this.edge_width + " 0 0 1 0 -" + 2 * this.edge_width,
          fill: r.get_original_colour(),
          stroke: r.get_border_colour(),
          class: "decoration_for_collapsed_blocks"
        });
    }
  };
  t.prototype.render_group_decoration_blocks = function (e) {
    e.decoration_block_paths.forEach(o.remove_node);
    e.decoration_block_paths.length = 0;
    var t = this.select_output_group_children(e);
    var n = t[0];
    var r = t[1];
    var a = 0;
    var s = e.get_field(i.BLOCK_GROUP_TAG_FIELD_NAME);
    var c = this.theme.renderer.BLOCK_EDGE_WIDTH_OUTPUT + this.theme.renderer.SEP_SPACE_X + s.get_size().width + this.theme.renderer.SEP_SPACE_X + this.theme.renderer.OUTPUT_GROUP_DECORATION_PADDING;
    var u = e.get_field(i.BLOCK_GROUP_NAME_FIELD_NAME).get_size().width;
    var l = e.origin_block.get_output_shape() || i.OutputShape.ROUND;
    var f = this.render_decoration_block(0, c, u, e.origin_block, l);
    if (r) {
      var d = this.render_decoration_block(2, c, u, r, l);
      e.decoration_block_paths.unshift(d);
      e.svg_group.insertBefore(d, e.svg_group.lastChild);
      a += this.theme.renderer.OUTPUT_GROUP_DECORATION_OFFSET;
    }
    if (n) {
      var h = this.render_decoration_block(1, c, u, n, l);
      e.decoration_block_paths.unshift(h);
      e.svg_group.insertBefore(h, e.svg_group.lastChild);
      a += this.theme.renderer.OUTPUT_GROUP_DECORATION_OFFSET;
    }
    e.decoration_block_paths.unshift(f);
    e.svg_group.insertBefore(f, e.svg_group.lastChild);
    return a += this.theme.renderer.OUTPUT_GROUP_DECORATION_PADDING;
  };
  t.prototype.get_field_padding_y = function () {
    return this.theme.renderer.OUTPUT_ROW_PADDING_Y_TO_FIELD;
  };
  t.prototype.get_block_padding_y = function () {
    return this.theme.renderer.OUTPUT_ROW_PADDING_Y_TO_VALUE_BLOCK;
  };
  return t;
}(require("./1107").BlockRenderer);
exports.OutputBlockRenderer = a;