"use strict";

Object.defineProperty(exports, "__esModule", {
  value: !0
});
exports.VerticalFlyout = void 0;
var r = require("../../../1000/93");
var i = require("../../../1000/134/index");
var o = require("../../../125/259");
var a = require("../../../125/195/index");
var s = require("../../../125/index");
var c = require("../../../1000/213/index");
var u = require("../../../125/294");
var l = function (e) {
  function t(t) {
    var n = e.call(this, t) || this;
    n.excute_after_next_reflow = [];
    n.content_height_ = 0;
    n.horizontalLayout_ = !1;
    n.fixed_width = t.flyout.fixed_width;
    n.width_ = n.fixed_width || 0;
    n.set_auto_close(t.flyout.auto_close);
    return n;
  }
  (0, r.__extends)(t, e);
  t.prototype.create_dom = function (t) {
    var n = e.prototype.create_dom.call(this, t);
    if ("number" === typeof this.fixed_width) {
      n.addEventListener("mouseenter", function () {
        n.style.overflow = "visible";
      });
      n.addEventListener("mouseleave", function () {
        n.style.overflow = "hidden";
      });
    }
    return n;
  };
  t.prototype.get_metrics = function () {
    if (this.is_visible()) {
      var e;
      var t = this.workspace_.get_canvas();
      if (!t) {
        throw new Error("Flyout ws has not been inited.");
      }
      try {
        e = t.getBBox();
      } catch (r) {
        e = {
          height: 0,
          y: 0,
          width: 0,
          x: 0
        };
      }
      var n = this.workspace_.get_scale();
      return {
        viewHeight: this.height_,
        viewWidth: this.width_,
        contentHeight: e.height * n + this.padding_top + this.padding_bottom,
        contentWidth: e.width * n,
        viewTop: -this.workspace_.scroll_xy[1],
        viewLeft: -this.workspace_.scroll_xy[0],
        contentTop: 0,
        contentLeft: e.x,
        absoluteTop: 2,
        absoluteLeft: 0
      };
    }
  };
  t.prototype.layout_ = function (e, t) {
    for (var n, r = this, i = o.vec2.fromValues(this.padding_left, 0), a = function (e) {
        for (var t = e.get_descendants(), n = 0; n < t.length; n++) {
          var i = t[n];
          i.is_in_flyout = !0;
          i.render();
        }
        e.render();
        var o = e.get_svg_root();
        r.add_block_listeners(o, e);
        return e;
      }, s = 0; s < e.length; s++) {
      var c = e[s];
      if ("block" == c.type && c.block) {
        var u = o.vec2.fromValues(i[0], i[1]);
        o.vec2.add(u, u, this.theme.renderer.BLOCK_LEFT_TOP);
        if (c.block.is_starting_block()) {
          o.vec2.add(u, u, [(null === (n = this.targetWorkspace_) || void 0 === n ? void 0 : n.options.flyout.blocks.head_block_offset[0]) || 0, 0]);
        }
        var l = a(c.block);
        l.move_by(u);
        var f = l.get_height_width();
        if (c.inline) {
          this.current_item_line = {
            offset_left: i[0] + f.width,
            offset_right: this.padding_right,
            height: f.height
          };
          continue;
        }
        i[1] += f.height + t[s];
      } else if ("button" == c.type && c.button) {
        this.button_layout(c.button, i, t[s]);
      }
    }
    this.content_height_ = i[1];
  };
  t.prototype.button_layout = function (e, t, n) {
    var r;
    var i = this;
    var o = t[0];
    var a = t[1];
    var s = "absolute" !== e.position && "fixed" !== e.position;
    var c = "center" === e.align || "right" === e.align;
    var u = function (t) {
      if (s && !c) {
        return {
          x: o,
          y: a
        };
      }
      if ("number" !== typeof t) {
        console.warn("Position of button " + e + " should be computed when reflow. ");
        return {
          x: o,
          y: a
        };
      }
      var n = 0;
      var r = t / i.workspace_.get_scale();
      if (void 0 !== e.left ? n = e.left : void 0 !== e.right ? n = r - e.right - e.width : "center" === e.align ? n = (r - e.width) / 2 : "right" === e.align && (n = r - i.padding_right - e.margin_right - e.width), s) {
        return {
          x: n,
          y: a
        };
      }
      var u = 0;
      if (void 0 !== e.top) {
        u = e.top;
      } else if (void 0 !== e.bottom) {
        u = ("fixed" === e.position ? i.height_ / i.workspace_.get_scale() : i.content_height_) - e.bottom - e.height;
      }
      return {
        x: n,
        y: u
      };
    };
    if (e.width_ratio) {
      this.excute_after_next_reflow.push(function (t) {
        var n;
        var r = t / i.workspace_.get_scale();
        var o = u(t);
        var a = o.x;
        var s = o.y;
        var c = i.init_flyout_button(e, a, s, r * (e.width_ratio || 1));
        if ("fixed" === e.position) {
          if (!(null === (n = i.svg_group) || void 0 === n)) {
            n.appendChild(c);
          }
        }
      });
      return void (s && (t[1] += e.height + n));
    }
    if (!s) {
      var l = this.init_flyout_button(e);
      this.excute_after_next_reflow.push(function (t) {
        var n = u(t);
        var r = n.x;
        var i = n.y;
        e.move_to(r, i);
      });
      return void ("fixed" === e.position && (null === (r = this.svg_group) || void 0 === r || r.appendChild(l)));
    }
    if (e.inline || this.current_item_line) {
      (function () {
        if (i.current_item_line || (i.current_item_line = {
          offset_left: o,
          offset_right: i.padding_right,
          height: e.height
        }), "center" === e.align) {
          i.init_flyout_button(e);
          i.excute_after_next_reflow.push(function (t) {
            var n = t / i.workspace_.get_scale();
            e.move_to((n - e.width) / 2, a);
          });
        } else if ("right" === e.align) {
          i.init_flyout_button(e);
          var r = i.current_item_line.offset_right;
          var s = e.width + e.margin_right;
          i.excute_after_next_reflow.push(function (t) {
            var n = t / i.workspace_.get_scale();
            e.move_to(n - r - s, a);
          });
          i.current_item_line.offset_right += s;
        } else {
          i.init_flyout_button(e, i.current_item_line.offset_left, a);
          i.current_item_line.offset_left += e.width + e.margin_right;
        }
        i.current_item_line.height = Math.max(i.current_item_line.height, e.height);
        if (!e.inline) {
          t[1] += i.current_item_line.height + n;
          i.current_item_line = void 0;
        }
      })();
    } else {
      if ("center" === e.align || "right" === e.align) {
        this.init_flyout_button(e);
        this.excute_after_next_reflow.push(function (t) {
          var n = u(t);
          var r = n.x;
          var i = n.y;
          e.move_to(r, i);
        });
      } else {
        this.init_flyout_button(e, o, a);
      }
      t[1] += e.height + n;
    }
  };
  t.prototype.reflow_internal = function (e) {
    var t = this;
    if (this.workspace_ && this.targetWorkspace_) {
      var n = this.targetWorkspace_.options.flyout;
      var r = n.max_width;
      var i = n.min_width || 0;
      if ("number" === typeof this.fixed_width) {
        i = this.fixed_width;
      } else {
        for (var o = 0; o < e.length; o++) {
          var a = e[o];
          var s = a.width;
          if (a.is_starting_block()) {
            s += this.targetWorkspace_.options.flyout.blocks.head_block_offset[0];
          }
          i = Math.max(i, s);
        }
        for (o = 0; o < this.buttons_.length; o++) {
          var c = this.buttons_[o];
          if ("fixed" === c.position) {
            break;
          }
          i = Math.max(i, c.width);
        }
        var u = this.workspace_.get_scale();
        i += this.padding_left + this.padding_right;
        i *= u;
        if (r) {
          i = Math.min(i, r);
        }
      }
      this.width_ = i;
      this.excute_after_next_reflow.forEach(function (e) {
        return e(t.width_);
      });
      this.excute_after_next_reflow = [];
    } else {
      console.error("Workspace has not been init.");
    }
  };
  t.prototype.is_drag_toward_workspace = function (e) {
    var t = e[0];
    var n = e[1];
    var r = Math.atan2(n, t) / Math.PI * 180;
    var i = this.drag_angle_range_;
    return r < i && r > -i || r < -180 + i || r > 180 - i;
  };
  t.prototype.place_new_block = function (e, t) {
    if (!this.targetWorkspace_) {
      throw new Error("Trying to place block before setting target workspace. ");
    }
    var n = e.get_svg_root();
    if (!n) {
      throw ReferenceError("Origin block should have root svg.");
    }
    var r = this.utils.get_injection_div_xy(n);
    var i = this.xml.block_to_dom(e);
    var a = this.xml.dom_to_block(i, this.targetWorkspace_);
    var c = a.get_svg_root();
    if (void 0 == c) {
      throw new ReferenceError("Block should have svg root.");
    }
    var u = this.utils.get_injection_div_xy(c);
    o.vec2.sub(u, r, u);
    var l = this.targetWorkspace_.get_scale();
    if (this.workspace_.get_scale() !== l && t) {
      var f = o.vec2.sub(t, t, (0, s.get_page_offset)(e.get_svg_root()));
      o.vec2.scale(f, f, this.workspace_.get_scale() - l);
      o.vec2.add(u, u, f);
    }
    o.vec2.scale(u, u, 1 / l);
    a.move_by(u);
    return a;
  };
  t.prototype.wheel_ = function (e) {
    if (this.is_visible()) {
      e.preventDefault();
      e.stopPropagation();
      var t = e.deltaY;
      if (t && this.scrollbar_) {
        var n = this.get_metrics();
        if (n) {
          var r = n.viewTop + t;
          this.scrollbar_.set(r);
        } else {
          console.error("Cannot get metrics for wheel.");
        }
      }
    }
  };
  t.prototype.set_metrics = function (e) {
    if (void 0 != this.workspace_) {
      var t = this.get_metrics();
      if (t) {
        if ((0, c.is_number)(e.y)) {
          this.workspace_.content_offset_by_view[1] = e.y;
          this.workspace_.scroll_xy[1] = -t.contentTop - e.y;
        }
        var n = this.workspace_.scroll_xy[0];
        var r = this.workspace_.scroll_xy[1];
        this.workspace_.translate(n, r);
      }
    } else {
      console.error("Workspace not init.");
    }
  };
  t.prototype.get_client_rect = function () {
    if (this.svg_group) {
      var e = this.svg_group.getBoundingClientRect();
      var t = this.workspace_.get_options().delete_area_margin;
      var n = e.left;
      var r = e.top;
      var i = e.width;
      var o = e.height;
      return new u.Rect(n - t[3], r - t[0], i + t[1] + t[3], o + t[0] + t[2]);
    }
  };
  t.prototype.reset_size = function () {
    this.width_ = 0;
  };
  t.prototype.position = function () {
    if (void 0 != this.targetWorkspace_) {
      if (this.svg_background_ && this.svg_group) {
        var e = this.targetWorkspace_.get_metrics();
        if (e) {
          if (this.height_ = e.viewHeight, this.is_visible()) {
            var t = this.compute_background_path(this.width_, this.height_);
            this.svg_background_.setAttribute("d", t);
          } else {
            this.svg_group.style.overflow = "hidden";
          }
          var n = e.absoluteTop;
          var r = e.absoluteLeft;
          if (this.toolboxPosition_ === a.TOOLBOX_POSITION.RIGHT) {
            r += e.viewWidth;
            if (this.is_auto_close() && this.is_visible()) {
              r -= this.width_;
            }
            r = Math.round(r + 1);
          }
          if (this.toolboxPosition_ === a.TOOLBOX_POSITION.LEFT) {
            if (!(this.is_auto_close() && this.is_visible())) {
              r -= this.width_;
            }
            r = Math.round(r - 1);
          }
          this.position_at(this.width_, this.height_, r, n);
        }
      } else {
        console.error("Trying to position flyout before initialization. ");
      }
    } else {
      console.error("Trying to position flyout before setting target workspace. ");
    }
  };
  t.prototype.compute_background_path = function (e, t) {
    var n = this.toolboxPosition_ === a.TOOLBOX_POSITION.RIGHT;
    var r = e - this.flyout_corner_radius;
    var i = t - 2 * this.flyout_corner_radius;
    var o = ["M " + (n ? e : 0) + ",0"];
    o.push("h", n ? "" + -r : "" + r);
    o.push("a", "" + this.flyout_corner_radius, "" + this.flyout_corner_radius, "0", "0", n ? "0" : "1", n ? "" + -this.flyout_corner_radius : "" + this.flyout_corner_radius, "" + this.flyout_corner_radius);
    o.push("v", "" + Math.max(0, i));
    o.push("a", "" + this.flyout_corner_radius, "" + this.flyout_corner_radius, "0", "0", n ? "0" : "1", n ? "" + this.flyout_corner_radius : "" + -this.flyout_corner_radius, "" + this.flyout_corner_radius);
    o.push("h", n ? "" + r : "" + -r);
    o.push("z");
    return o.join(" ");
  };
  return t = (0, r.__decorate)([(0, i.injectable)()], t);
}(require("./2113").Flyout);
exports.VerticalFlyout = l;