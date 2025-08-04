"use strict";

Object.defineProperty(exports, "__esModule", {
  value: !0
});
exports.Controller = void 0;
var r = require("tslib");
var i = require("inversify");
var o = require("../../../4/127");
var a = require("../../../125/index");
var s = function () {
  function e() {
    this.container = (0, a.create_dom)("div", {
      style: "position: fixed",
      class: "blocklyWidgetDiv"
    });
    this.container.style.display = "none";
  }
  e.prototype.show = function (e, t) {};
  e.prototype.hide = function () {
    this.container.style.display = "none";
  };
  e.prototype.update_value = function (e) {};
  e.prototype.position = function () {
    if (this.owner && this.container) {
      var e = this.owner.source_block;
      if (e) {
        var t = e.get_workspace().get_scale() || 1;
        this.container.style.transformOrigin = "top left";
        this.container.style.transform = "scale(" + t + ")";
        var n = (this.theme.renderer.STATEMENT_ROW_PADDING_Y_TO_FIELD + 1) * t;
        var r = this.container.getBoundingClientRect().width;
        if (!e.is_shadow()) {
          var i = this.owner.get_absolute_xy();
          var o = this.owner.get_size();
          var s = o.width * t;
          var c = o.height * t;
          var u = i[0] + s / 2 - r / 2;
          var l = i[1] + c + n;
          this.container.style.left = u + "px";
          return void (this.container.style.top = l + "px");
        }
        var f = e.svg_group;
        var d = (0, a.get_page_offset)(f);
        var h = e.width * t;
        var p = e.height * t;
        var _ = d[0] + h / 2 - r / 2;
        var A = d[1] + p + n;
        this.container.style.left = _ + "px";
        this.container.style.top = A + "px";
      }
    }
  };
  (0, r.__decorate)([(0, o.lazy_inject)(o.BINDING.theme)], e.prototype, "theme", void 0);
  return e = (0, r.__decorate)([(0, i.injectable)()], e);
}();
exports.Controller = s;