"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Css = undefined;
var r = require("tslib");
var i = require("inversify");
var o = require("../../4/127");
var a = function () {
  function e() {
    this.style_sheet = undefined;
    this.current_cursor = "";
    this.media_path = "";
    this.Cursor = {
      OPEN: "handopen",
      CLOSED: "handclosed",
      DELETE: "handdelete"
    };
  }
  e.prototype.inject = function (e, t) {
    if (!this.style_sheet) {
      var n = ".blocklyDraggable {}\n";
      if (e) {
        n += this.CONTENT;
      }
      this.media_path = t.replace(/[\\\/]$/, "");
      n = n.replace(/<<<PATH>>>/g, this.media_path);
      var r = document.createElement("style");
      if (document.head) {
        document.head.insertBefore(r, document.head.firstChild);
      } else {
        var i = document.createElement("head");
        i.insertBefore(r, i.firstChild);
        document.appendChild(i);
      }
      var o = document.createTextNode(n);
      r.appendChild(o);
      this.style_sheet = r.sheet;
    }
  };
  e.prototype.set_cursor = function (e) {
    if (this.current_cursor != e) {
      this.current_cursor = e;
      for (var t = "url('" + this.media_path + "/" + e + ".cur), auto", n = document.getElementsByClassName("blocklyToolboxDiv"), r = 0; r < n.length; r++) {
        var i = n[r];
        if (e == this.Cursor.DELETE) {
          i.style.cursor = t;
        } else {
          i.style.cursor = "";
        }
      }
    }
  };
  (0, r.__decorate)([(0, o.lazy_inject)(o.BINDING.css_content)], e.prototype, "CONTENT", undefined);
  return e = (0, r.__decorate)([(0, i.injectable)()], e);
}();
exports.Css = a;