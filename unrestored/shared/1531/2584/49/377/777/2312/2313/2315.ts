"use strict";

Object.defineProperty(exports, "__esModule", {
  value: !0
});
exports.ConflictResolver = void 0;
var r;
var i = require("../../../../../1001/93");
var o = require("../../../../../17/640/index");
var a = require("../../../../../17/642");
var s = (0, i.__importStar)(require("../../../../../17/533"));
var c = require("../../../../../1001/213/index");
var u = function (e) {
  function t() {
    return null !== e && e.apply(this, arguments) || this;
  }
  (0, i.__extends)(t, e);
  t.prototype.after_analyze_op = function (e) {
    var t = this.detect_conflict(e);
    return !t || (t.type === r.Gesture ? (this.interrupt_gesture(t.target), !0) : t.type === r.EditComment ? (this.interrupt_edit_comment(t.target), !0) : t.type === r.EditField ? (this.interrupt_edit_field(t.target), !0) : t.type !== r.UI || (this.interrupt_ui(t.target), !0));
  };
  t.prototype.get_server_affected_id_list = function (e) {
    var t = this;
    var n = new Set();
    e.forEach(function (e) {
      t.Blink.mainWorkspace.for_each_element_in_stack(e, function (e) {
        return n.add(e.id);
      });
    });
    return n;
  };
  t.prototype.analyze_local_operation = function (e) {
    var t;
    var n = new Set();
    var i = this.Blink.mainWorkspace.current_gesture_;
    var o = null === i || void 0 === i ? void 0 : i.target_block;
    if (i && o) {
      this.Blink.mainWorkspace.for_each_element_in_stack(o.id, function (e) {
        return n.add(e.id);
      });
      var a = i.block_dragger;
      if (void 0 !== (null === a || void 0 === a ? void 0 : a.parent_before_drag)) {
        this.Blink.mainWorkspace.for_each_element_in_stack(a.parent_before_drag.id, function (e) {
          return n.add(e.id);
        });
      }
      for (var s = Array.from(e), u = 0; u < s.length; u++) {
        if (n.has(s[u])) {
          return {
            type: r.Gesture,
            target: i
          };
        }
      }
    }
    var l = this.Blink.runtime_data.selected;
    if (l && e.has(l.id)) {
      if (this.Blink.context_menu.current_block === l) {
        return {
          type: r.UI,
          target: l
        };
      }
      if ((0, c.is_workspace_comment)(l) && (l.is_textarea_focused || l.size_before_resize)) {
        return {
          type: r.EditComment,
          target: l
        };
      }
      if ((0, c.is_block_svg)(l)) {
        var f = this.Blink.runtime_data.editing;
        if (!f) {
          return;
        }
        if (f.source_block === l || (null === (t = f.source_block) || void 0 === t ? void 0 : t.parent_block) === l) {
          return {
            type: r.EditField,
            target: f
          };
        }
      }
    }
  };
  t.prototype.detect_conflict = function (e) {
    var t = this.get_server_affected_id_list(e);
    if (t) {
      return this.analyze_local_operation(t);
    }
  };
  t.prototype.interrupt_edit_field = function (e) {
    var t;
    this.Blink.events.disable();
    if (this.Blink.runtime_data.editing === e) {
      var n = e.value_before_editing;
      if (void 0 !== n) {
        e.set_value(n);
        e.set_html_input_value(n);
      }
      if (!(null === (t = e.source_block) || void 0 === t)) {
        t.unselect();
      }
      e.focus(!1);
    }
    if (this.Blink.widget_div.owner_) {
      this.Blink.widget_div.hide();
    }
    this.Blink.events.enable();
  };
  t.prototype.interrupt_edit_comment = function (e) {
    e.cancel_operation();
  };
  t.prototype.interrupt_ui = function (e) {
    this.Blink.events.disable();
    this.Blink.context_menu.hide();
    e.unselect();
    this.Blink.events.enable();
  };
  t.prototype.interrupt_gesture = function (e) {
    var t;
    var n;
    var r = this.Blink.events.get_group();
    this.Blink.events.fire(this.group_event_factory({
      type: s.GroupEventType.GroupCancel,
      group: r
    }));
    try {
      this.Blink.events.disable_listener();
      var i = null === (t = e.block_dragger) || void 0 === t ? void 0 : t.redo_stack_before_drag.slice();
      var o = null === (n = e.block_dragger) || void 0 === n ? void 0 : n.undo_stack_before_drag.slice();
      if (void 0 === i || void 0 === o) {
        return void console.error("Confilct resolver: cannot get redo stack before drag.");
      }
      e.cancel();
      if (o.length !== this.Blink.mainWorkspace.get_undo_stack().length) {
        this.Blink.mainWorkspace.undo();
        this.Blink.mainWorkspace.set_redo_stack(i);
      }
    } catch (a) {
      console.error("Occurs error when interruput gesture: ", a);
    } finally {
      this.Blink.events.enable_listener();
    }
  };
  (0, i.__decorate)([(0, o.lazy_inject)(a.BINDING.Blink)], t.prototype, "Blink", void 0);
  (0, i.__decorate)([(0, o.lazy_inject)(a.BINDING.GroupEvent)], t.prototype, "group_event_factory", void 0);
  return t;
}(require("../../../728/1135").BasePlugin);
exports.ConflictResolver = u;
(function (e) {
  e.Gesture = "Gesture";
  e.EditField = "EditField";
  e.EditComment = "EditComment";
  e.UI = "UI";
})(r || (r = {}));