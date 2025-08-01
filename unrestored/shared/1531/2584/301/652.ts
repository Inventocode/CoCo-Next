"use strict";

Object.defineProperty(exports, "__esModule", {
  value: !0
});
exports.FieldLabel = void 0;
var r = require("../1001/93");
var i = require("../1001/134/index");
var o = require("../125/294");
var a = require("../125/index");
var s = require("../125/474");
var c = function (e) {
  function t(t) {
    var n = e.call(this, t.text) || this;
    n.editable = !1;
    n.field_type = "FieldLabel";
    n.size_ = new o.Size(0, n.theme.renderer.SHADOW_FIELD_HEIGHT);
    n.class_ = t.opt_class;
    n.set_value(t.text);
    return n;
  }
  (0, r.__extends)(t, e);
  t.prototype.init = function () {
    if (!this.text_element) {
      if (s.is.safari() || s.is.mobile()) {
        this.text_element = (0, a.create_svg_element)("text", {
          class: "blocklyText",
          "font-size": this.theme.font.SIZE,
          dy: ".4em"
        });
      } else {
        this.text_element = (0, a.create_svg_element)("text", {
          class: "blocklyText",
          "font-size": this.theme.font.SIZE,
          "dominant-baseline": "central"
        });
      }
      if (this.class_) {
        (0, a.add_class)(this.text_element, this.class_);
      }
      if (!this.visible_) {
        this.text_element.style.display = "none";
      }
      if (void 0 == this.source_block) {
        throw new ReferenceError("Field should have source block when init.");
      }
      if (void 0 != this.source_block) {
        var e = this.source_block.get_svg_root();
        if (void 0 == e) {
          throw new ReferenceError("Field should have svg root when init.");
        }
        e.appendChild(this.text_element);
      }
      if (this.source_block) {
        this.render_();
      }
    }
  };
  t.prototype.layout = function (e, t) {
    e[0] += this.render_sep;
    if (this.text_element) {
      this.text_element.setAttribute("transform", "translate(" + e[0] + "," + (e[1] + t / 2) + ")");
      e[0] += this.size_.width;
    }
  };
  return t = (0, r.__decorate)([(0, i.injectable)()], t);
}(require("./500").Field);
exports.FieldLabel = c;