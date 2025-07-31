"use strict";

Object.defineProperty(exports, "__esModule", {
  value: !0
});
exports.Events = void 0;
var r = require("../../1000/93");
var i = require("../../1000/134/index");
var o = require("../642");
var a = require("../640/index");
var s = require("../../125/195/index");
var c = require("../../125/294");
var u = function () {
  function e() {
    this.FIRE_QUEUE_ = [];
    this.disabled_ = 0;
    this.group_ = "";
    this._record_undo = !0;
    this._is_undoing = !1;
    this.enable_filter = !1;
    this.listener_disabled = 0;
  }
  e.prototype.set_disabled = function (e) {
    this.disabled_ = e;
  };
  e.prototype.is_record_undo = function () {
    return this._record_undo;
  };
  e.prototype.set_record_undo = function (e) {
    this._record_undo = e;
  };
  e.prototype.is_undoing = function () {
    return this._is_undoing;
  };
  e.prototype.set_undoing = function (e) {
    this._is_undoing = e;
  };
  e.prototype.fire = function (e) {
    var t = this;
    if (e && this.is_enabled()) {
      if (e.is_record_undo() && this.enable_filter) {
        if (!this.FIRE_QUEUE_.length) {
          window.setTimeout(function () {
            t.fire_now();
          }, 0);
        }
        this.FIRE_QUEUE_.push(e);
      } else {
        var n = this.workspace_db.get(e.get_workspace_id());
        if (n) {
          n.fire_change_listener(e);
        }
      }
    }
  };
  e.prototype.fire_now = function () {
    var e = this.filter(this.FIRE_QUEUE_, !0);
    this.FIRE_QUEUE_.length = 0;
    for (var t = 0; t < e.length; t++) {
      var n = e[t];
      var r = this.workspace_db.get(n.get_workspace_id());
      if (r) {
        r.fire_change_listener(n);
      }
    }
  };
  e.prototype.filter = function (e, t) {
    var n = e.slice();
    if (!t) {
      n.reverse();
    }
    for (var r = [], i = new Map(), o = 0; o < n.length; o++) {
      var a = n[o];
      if (!a.is_null()) {
        var c = "";
        var u = "";
        if (a.type === s.BlockEventType.CHANGE) {
          c = a.element || "";
          u = a.get_name() || "";
        }
        var l = a.type + "&&" + a.get_block_id() + "&&" + a.get_workspace_id() + "&&" + c + "&&" + u;
        var f = i.get(l);
        if (f) {
          switch (a.type) {
            case s.BlockEventType.MOVE:
              if (f.index === o - 1) {
                var h = a.get_new_loc();
                f.event.update_new_loc(h);
                f.index = o;
              } else {
                i.set(l, {
                  index: o,
                  event: a
                });
                r.push(a);
              }
              break;
            case s.BlockEventType.CHANGE:
              var d = a;
              f.event.update_new_value(d.get_new_value());
              break;
            default:
              i.set(l, {
                index: o,
                event: a
              });
              r.push(a);
          }
        } else {
          i.set(l, {
            index: o,
            event: a
          });
          r.push(a);
        }
      }
    }
    n = r.filter(function (e) {
      return !e.is_null();
    });
    if (!t) {
      n.reverse();
    }
    return n;
  };
  e.prototype.clear_pending_undo = function () {
    for (var e = 0; e < this.FIRE_QUEUE_.length; e++) {
      this.FIRE_QUEUE_[e].set_record_undo(!1);
    }
  };
  e.prototype.disable = function () {
    this.disabled_++;
  };
  e.prototype.enable = function () {
    this.disabled_--;
  };
  e.prototype.is_enabled = function () {
    return 0 == this.disabled_;
  };
  e.prototype.get_group = function () {
    return this.group_;
  };
  e.prototype.set_group = function (e) {
    var t = this.group_;
    if (this.group_ = "boolean" == typeof e ? e ? (0, c.gen_uid)() : "" : e, t && t !== this.group_ && this.is_enabled()) {
      var n = this.group_event_factory({
        type: s.GroupEventType.GroupEnd,
        group: t
      });
      this.fire(n);
    }
    if (this.group_ && t !== this.group_ && this.is_enabled()) {
      var r = this.group_event_factory({
        type: s.GroupEventType.GroupStart,
        group: this.group_
      });
      this.fire(r);
    }
  };
  e.prototype.disable_orphans = function (e) {
    if (e.type == s.BlockEventType.MOVE || e.type == s.BlockEventType.CREATE) {
      this.disable();
      var t = this.workspace_db.get(e.get_workspace_id());
      if (void 0 == t) {
        console.error("Trying to enable/disable a block when the workspace disposed.");
        return void this.enable();
      }
      var n = t.get_block_by_id(e.get_block_id());
      if (void 0 != n) {
        var r = n.get_parent();
        if (r && !r.disabled) {
          for (var i = n.get_descendants(), o = 0; o < i.length; o++) {
            i[o].set_disabled(!1);
          }
        } else if ((n.output_connection || n.previous_connection) && !t.is_dragging()) {
          do {
            n.set_disabled(!0);
            n = n.get_next_block();
          } while (n);
        }
      }
      this.enable();
    }
  };
  e.prototype.bind_event = function (e, t, n, r) {
    var i = this;
    var o = function (e) {
      if (n) {
        r.call(n, e);
      } else {
        r(e);
      }
    };
    e.addEventListener(t, o, !1);
    var a = {
      original: {
        target: e,
        name: t,
        listener: o
      },
      additional: []
    };
    if (t in this.touch_manager.TOUCH_MAP) {
      for (var s = function (e) {
          if (1 == e.changedTouches.length) {
            var t = e.changedTouches[0];
            e.clientX = t.clientX;
            e.clientY = t.clientY;
          }
          o(e);
          if (a.original) {
            i.unbind_original(a);
          }
        }, c = 0; c < this.touch_manager.TOUCH_MAP[t].length; c++) {
        var u = this.touch_manager.TOUCH_MAP[t][c];
        e.addEventListener(u, s, !1);
        a.additional.push({
          target: e,
          name: u,
          listener: s
        });
      }
    }
    return a;
  };
  e.prototype.unbind_event_by_data = function (e) {
    var t = e.target;
    var n = e.name;
    var r = e.listener;
    t.removeEventListener(n, r, !1);
    return r;
  };
  e.prototype.unbind_original = function (e) {
    var t;
    if (e.original) {
      t = this.unbind_event_by_data(e.original);
      e.original = void 0;
    }
    return t;
  };
  e.prototype.unbind_event = function (e) {
    for (var t = this.unbind_original(e); e.additional.length > 0;) {
      var n = e.additional.pop();
      t = this.unbind_event_by_data(n);
    }
    return t;
  };
  e.prototype.bind_event_with_checks = function (e, t, n, r, i, o) {
    var a = this;
    var s = function (e) {
      if (e.target instanceof Element) {
        for (var t = !i, o = a.touch_manager.split_event_by_touches(e), s = 0; s < o.length; s++) {
          var c = o[s];
          if (2 === o.length) {
            return;
          }
          if (!(t && !a.touch_manager.should_handle_event(c))) {
            a.touch_manager.set_client_from_touch(c);
            if (n) {
              r.call(n, c);
            } else {
              r(c);
            }
          }
        }
      }
    };
    e.addEventListener(t, s, !1);
    var c = {
      original: {
        target: e,
        name: t,
        listener: s
      },
      additional: []
    };
    if (t in this.touch_manager.TOUCH_MAP) {
      for (var u = function (e) {
          if (s(e), c.original && a.unbind_original(c), !o) {
            if (0 == e.cancelable) {
              return;
            }
            e.preventDefault();
          }
        }, l = 0; l < this.touch_manager.TOUCH_MAP[t].length; l++) {
        var f = this.touch_manager.TOUCH_MAP[t][l];
        e.addEventListener(f, u, !1);
        c.additional.push({
          target: e,
          name: f,
          listener: u
        });
      }
    }
    return c;
  };
  e.prototype.enable_listener = function () {
    this.listener_disabled++;
  };
  e.prototype.disable_listener = function () {
    this.listener_disabled--;
  };
  e.prototype.is_listener_enabled = function () {
    return 0 === this.listener_disabled;
  };
  (0, r.__decorate)([(0, a.lazy_inject)(o.BINDING.touch_manager)], e.prototype, "touch_manager", void 0);
  (0, r.__decorate)([(0, a.lazy_inject)(o.BINDING.workspace_db)], e.prototype, "workspace_db", void 0);
  (0, r.__decorate)([(0, a.lazy_inject)(o.BINDING.GroupEvent)], e.prototype, "group_event_factory", void 0);
  return e = (0, r.__decorate)([(0, i.injectable)()], e);
}();
exports.Events = u;