"use strict";

Object.defineProperty(exports, "__esModule", {
  value: !0
});
exports.FieldIcon = void 0;
var r = require("../../1000/93");
var i = require("../../1000/134/index");
var o = require("../../125/index");
var a = require("../497/index");
var s = require("../../125/294");
var c = function (e) {
  function t(t) {
    var n = e.call(this, t) || this;
    n.field_type = "FieldIcon";
    n.width_ = n.theme.renderer.HEAD_ICON_WIDTH;
    n.height_ = n.theme.renderer.HEAD_ICON_WIDTH;
    n.size_ = new s.Size(0, 0);
    n.opt_is_head_ = t.opt_is_head || !1;
    n.set_value(n.utils.replace_message_references(t.src));
    return n;
  }
  (0, r.__extends)(t, e);
  t.prototype.is_head = function () {
    return this.opt_is_head_;
  };
  t.prototype.init = function () {
    if (!this.field_group) {
      if (!1 === this.opt_is_head_ && void 0 != this.source_block) {
        if ("*" === this.text_ || "" === this.text_) {
          return;
        }
        this.size_ = new s.Size(this.width_, this.height_);
      }
      this.field_group = (0, o.create_svg_element)("g", {
        transform: "translate(-" + this.theme.renderer.HEAD_ICON_WRAP_WIDTH / 2 + ", -" + (this.theme.renderer.HEAD_ICON_WRAP_WIDTH - this.theme.renderer.MIN_HEIGHT) + ")"
      });
      if (!this.visible_) {
        this.field_group.style.display = "none";
      }
      var e = this.theme.renderer.HEAD_ICON_WRAP_WIDTH / 2;
      if ((0, o.create_svg_element)("circle", {
        cx: e,
        cy: e,
        r: e,
        fill: void 0 != this.source_block ? this.source_block.get_colour() : "",
        stroke: void 0 != this.source_block ? this.source_block.get_border_colour() : this.theme.block_color.DEFAULT.border,
        class: "blockly_head_icon_wrapper"
      }, this.field_group), this.image_element = (0, o.create_svg_element)("image", {
        height: this.height_ + "px",
        width: this.width_ + "px",
        x: e - this.width_ / 2,
        y: e - this.height_ / 2,
        class: "blockly_head_icon"
      }, this.field_group), this.set_value(this.src_), a.is.Gecko() && (0, o.create_svg_element)("rect", {
        height: this.height_ + "px",
        width: this.width_ + "px",
        "fill-opacity": 0
      }, this.field_group), void 0 == this.source_block) {
        throw new ReferenceError("Field should have source block when init.");
      }
      var t = this.source_block.get_svg_root();
      if (void 0 == t) {
        throw new ReferenceError("Field should have svg root when init.");
      }
      t.appendChild(this.field_group);
    }
  };
  t.prototype.layout = function (e) {
    return e;
  };
  return t = (0, r.__decorate)([(0, i.injectable)()], t);
}(require("../../301/541").FieldImage);
exports.FieldIcon = c;