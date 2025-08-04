"use strict";

Object.defineProperty(exports, "__esModule", {
  value: !0
});
exports.RuntimeData = void 0;
var r = require("tslib");
var i = require("inversify");
var o = (0, r.__importStar)(require("hammerjs"));
var a = require("../../4/127");
var s = require("../../125/index");
var c = function () {
  function e() {
    var e = this;
    this.selected = void 0;
    this.editing = void 0;
    this.pasting_count = 0;
    this.dragging_connections = [];
    this.hide_chaff_effects = [];
    this.document_events_bound = !1;
    this.before_scale = 1;
    this.pinch_listener = function (t) {
      var n = e.workspace_db.current;
      if (n.current_gesture_) {
        n.current_gesture_.cancel();
      }
      var r = t.scale;
      if (r - e.before_scale > .08) {
        n.mark_focused();
        n.zoom_center(.5);
        e.before_scale = r;
      } else {
        if (r - e.before_scale < -.08) {
          n.mark_focused();
          n.zoom_center(-.5);
          e.before_scale = r;
        }
      }
    };
    this.pinchend_listener = function () {
      e.before_scale = 1;
    };
    this.clipboard = new u();
  }
  e.prototype.set_pasting = function (e) {
    if (e) {
      this.pasting_count++;
    } else {
      this.pasting_count--;
    }
  };
  e.prototype.is_pasting = function () {
    return this.pasting_count;
  };
  e.prototype.register_finger_events = function () {
    if (!this.hammer_manager) {
      var e = document.querySelector(".blocklySvg");
      this.hammer_manager = new o.Manager(e);
    }
    if (!this.pinch_recognizer) {
      this.pinch_recognizer = new o.Pinch();
    }
    this.hammer_manager.add(this.pinch_recognizer);
    this.hammer_manager.on("pinch", this.pinch_listener);
    this.hammer_manager.on("pinchend", this.pinchend_listener);
  };
  e.prototype.unregister_finger_events = function () {
    var e;
    var t;
    var n;
    if (this.pinch_recognizer) {
      if (!(null === (e = this.hammer_manager) || void 0 === e)) {
        e.remove(this.pinch_recognizer);
      }
    }
    if (!(null === (t = this.hammer_manager) || void 0 === t)) {
      t.off("pinch", this.pinch_listener);
    }
    if (!(null === (n = this.hammer_manager) || void 0 === n)) {
      n.off("pinchend", this.pinchend_listener);
    }
  };
  e.prototype.cancel_gesture_when_multi_touch = function () {
    var e;
    var t = this;
    if (!(null === (e = this.workspace_db.current) || void 0 === e)) {
      e.get_parent_svg().addEventListener("touchmove", function (e) {
        var n = t.workspace_db.current;
        if (e.touches.length > 1 && n.current_gesture_) {
          n.current_gesture_.cancel();
        }
      });
    }
  };
  (0, r.__decorate)([(0, a.lazy_inject)(a.BINDING.workspace_db)], e.prototype, "workspace_db", void 0);
  return e = (0, r.__decorate)([(0, i.injectable)()], e);
}();
exports.RuntimeData = c;
var u = function () {
  function e() {}
  e.prototype.get_content = function () {
    if (this.content) {
      return Array.isArray(this.content) ? this.content.map(function (e) {
        return (0, s.clone_node)(e, !0);
      }) : (0, s.clone_node)(this.content, !0);
    }
  };
  e.prototype.copy = function (e) {
    var t = this.xml.workspace_element_to_dom_with_xy(e);
    this.content = t;
    return t;
  };
  e.prototype.copy_all = function (e) {
    var t = this;
    var n = e.map(function (e) {
      return t.xml.workspace_element_to_dom_with_xy(e);
    });
    this.content = n;
    return n;
  };
  e.prototype.duplicate = function (e) {
    var t = this.copy(e);
    e.get_workspace().paste((0, s.clone_node)(t, !0));
    return t;
  };
  (0, r.__decorate)([(0, a.lazy_inject)(a.BINDING.xml)], e.prototype, "xml", void 0);
  return e;
}();