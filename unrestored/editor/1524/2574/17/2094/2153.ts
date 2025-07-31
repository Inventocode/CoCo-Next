"use strict";

Object.defineProperty(exports, "__esModule", {
  value: !0
});
exports.FieldLabelSerializable = void 0;
var r = require("../../1000/93");
var i = require("../../1000/134/index");
var o = function (e) {
  function t(t) {
    var n = e.call(this, t) || this;
    n.editable = !0;
    n.field_type = "FieldLabelSerializable";
    return n;
  }
  (0, r.__extends)(t, e);
  t.prototype.get_display_text = function () {
    var e = this.text_;
    if (e.length > this.max_display_length) {
      e = e.substring(0, this.max_display_length - 2) + "\u2026";
    }
    return e = e.replace(/\s/g, "\xa0");
  };
  return t = (0, r.__decorate)([(0, i.injectable)()], t);
}(require("../../301/652").FieldLabel);
exports.FieldLabelSerializable = o;