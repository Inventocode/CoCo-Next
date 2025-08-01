"use strict";

Object.defineProperty(exports, "__esModule", {
  value: !0
});
exports.Xml = void 0;
var r = require("../../1001/93");
var i = require("../../1001/134/index");
var o = require("../259");
var a = require("../../125/195/index");
var s = require("../../4/127");
var c = require("../../1001/213/index");
var u = require("../../206/208/387");
var l = require("../../125/294");
var f = (0, r.__importStar)(require("../../125/index"));
var d = function () {
  function e() {
    this.grouped_blocks = [];
    this.scoped_connections = [];
  }
  e.prototype.workspace_to_dom = function (e, t) {
    for (var n = f.create_dom("xml"), r = e.get_top_blocks(!0), i = 0; i < r.length; i++) {
      var o = r[i];
      if (!(o.is_insertion_marker() || o.parent_group)) {
        n.appendChild(this.block_to_dom_with_xy(o, t));
      }
    }
    var a = e.get_top_comments(!0);
    for (i = 0; i < a.length; i++) {
      var s = a[i];
      n.appendChild(this.comment_to_dom_with_xy(s, t));
    }
    return n;
  };
  e.prototype.dom_to_workspace = function (e, t) {
    var n = [];
    this.utils.start_text_cache();
    var r = e.childNodes.length;
    var i = this.events.get_group();
    if (!i) {
      this.events.set_group(!0);
    }
    var a = t.is_resizes_enabled();
    if (a) {
      t.set_resizes_enabled(!1);
    }
    try {
      for (var s = 0; s < r; s++) {
        var u = e.childNodes[s];
        var l = u.nodeName.toLowerCase();
        var f = void 0;
        if ("block" == l || "shadow" == l && !this.events.is_record_undo() || "empty" == l && !this.events.is_record_undo()) {
          f = this.dom_to_block(u, t);
        } else {
          if ("shadow" === l || "empty" === l) {
            console.error("Shadow block cannot be a top-level block.");
          } else {
            if ("comment" === l) {
              f = this.dom_to_workspace_comment(u, t);
            }
          }
        }
        if (f) {
          n.push(f.id);
          var d = parseInt(u.getAttribute("x") || "0", 10);
          var h = parseInt(u.getAttribute("y") || "0", 10);
          if (!(isNaN(d) || isNaN(h))) {
            d = t.RTL ? 0 - d : d;
            if ((0, c.is_block_svg)(f) && f.parent_group) {
              f.parent_group.move_by(o.vec2.fromValues(d, h));
            } else {
              f.move_by(o.vec2.fromValues(d, h));
            }
          }
        }
      }
    } finally {
      if (!i) {
        this.events.set_group(!1);
      }
      this.utils.stop_text_cache();
    }
    if (a) {
      t.set_resizes_enabled(!0);
    }
    return n;
  };
  e.prototype.block_to_dom = function (e, t) {
    var n;
    var r;
    var i;
    var o;
    if ((0, c.is_block_group)(e)) {
      i = this.block_to_dom(e.origin_block, t);
      var s = e.get_field_value(a.BLOCK_GROUP_NAME_FIELD_NAME);
      (0, u.assert)("string" === typeof s);
      i.setAttribute(a.BLOCK_GROUP_NAME_XML_TAG, s);
      i.setAttribute(a.BLOCK_GROUP_ID_XML_TAG, e.id);
      if (e.group_type !== a.BlockGroupType.EXECUTION) {
        return i;
      }
      var l = null === (n = e.next_connection) || void 0 === n ? void 0 : n.targetBlock();
      var d = l && this.block_to_dom(l, t);
      if (d) {
        d.setAttribute(a.BLOCK_GROUP_STOPPED_XML_TAG, "true");
        var h = i.querySelector("next[" + a.LAST_NEXT_XML_TAG + '="true"]');
        if (!(null === h || void 0 === h)) {
          h.removeAttribute(a.LAST_NEXT_XML_TAG);
        }
        if (!(null === h || void 0 === h)) {
          h.appendChild(d);
        }
      }
      return i;
    }
    (i = e.is_shadow() ? e.is_editable() ? f.create_dom("shadow") : f.create_dom("empty") : f.create_dom("block")).setAttribute("type", e.type);
    if (!t) {
      i.setAttribute("id", e.id);
    }
    if (e.mutationToDom) {
      var p = e.mutationToDom();
      if (p && (p.hasChildNodes() || p.hasAttributes())) {
        i.appendChild(p);
      }
    }
    for (var _ = 0; _ < e.inputList.length; _++) {
      for (var A = e.inputList[_], g = 0; g < A.fieldRow.length; g++) {
        var v = A.fieldRow[g];
        this.field_to_dom(v, i);
      }
    }
    if (e.parent_group) {
      if (e.parent_group.comment) {
        i.appendChild(this.comment_to_dom(e.parent_group.comment));
      }
      i.setAttribute("visible", e.parent_group.visibility_);
    } else {
      if (e.comment) {
        i.appendChild(this.comment_to_dom(e.comment));
      }
      i.setAttribute("visible", e.visibility_);
    }
    if (e.data) {
      var m = f.create_dom("data", void 0, e.data);
      i.appendChild(m);
    }
    for (_ = 0; _ < e.inputList.length; _++) {
      var y = !0;
      if ((A = e.inputList[_]).type != a.InputType.DUMMY && A.connection) {
        var b = A.connection.targetBlock();
        if (A.type == a.InputType.VALUE) {
          o = f.create_dom("value");
        } else {
          if (A.type == a.InputType.STATEMENT) {
            o = f.create_dom("statement");
          }
        }
        var w = A.connection.get_shadow_dom();
        if (!(!w || b && b.is_shadow())) {
          if (o) {
            o.appendChild(this.clone_shadow(w));
          }
        }
        if (b) {
          if (o) {
            o.appendChild(this.block_to_dom(b, t));
          }
          y = !1;
        }
        if (o) {
          o.setAttribute("name", A.name);
        }
        if (!y) {
          i.appendChild(o);
        }
      }
    }
    if (e.inputs_inline_default != e.inputs_inline) {
      i.setAttribute("inline", String(e.inputs_inline));
    }
    if (e.is_collapsed()) {
      i.setAttribute("collapsed", String(!0));
    }
    if (e.disabled) {
      i.setAttribute("disabled", String(!0));
    }
    if (!e.deletable_) {
      i.setAttribute("deletable", String(!1));
    }
    if (!e.movable_) {
      i.setAttribute("movable", String(!1));
    }
    if (!e.editable_) {
      i.setAttribute("editable", String(!1));
    }
    var E = null === (r = e.next_connection) || void 0 === r ? void 0 : r.targetBlock();
    if (E) {
      var x = f.create_dom("next", void 0, this.block_to_dom(E, t));
      i.appendChild(x);
    } else if (e.next_connection) {
      var C = e.get_root_block();
      if (e.next_connection === C.last_connection_in_stack()) {
        (x = f.create_dom("next")).setAttribute("" + a.LAST_NEXT_XML_TAG, "true");
        i.appendChild(x);
      }
    }
    var O = e.next_connection && e.next_connection.get_shadow_dom();
    if (!(!O || E && E.is_shadow())) {
      if (o) {
        o.appendChild(this.clone_shadow(O));
      }
    }
    return i;
  };
  e.prototype.field_to_dom = function (e, t) {
    if (e.name && e.editable) {
      var n = f.create_dom("field", void 0, String(e.get_value()));
      var r = e.name;
      if ((0, c.is_field_number)(e)) {
        r = this.field_number_to_dom(e, n);
      }
      if ((0, c.is_field_default_value)(e)) {
        this.field_default_value_to_dom(e, n);
      }
      n.setAttribute("name", r);
      t.appendChild(n);
    }
  };
  e.prototype.field_number_to_dom = function (e, t) {
    var n = [e.min_, e.max_, e.precision_, e.mod_].join(",");
    t.setAttribute("constraints", n);
    if (void 0 != e.exceptions) {
      var r = e.exceptions.join(",");
      t.setAttribute("exceptions", r);
    }
    var i = e.get_controller_option();
    if (i) {
      var o = void 0;
      o = i.type === a.ControllerType.SLIDER ? [i.type, i.left_text, i.right_text].join(",") : i.type === a.ControllerType.COLOR_PICKER ? [i.type, i.color_format, i.line].join(",") : i.type;
      t.setAttribute("controller", o);
    }
    var s = e.name;
    if (e.allow_text) {
      t.setAttribute("allow_text", "true");
      if (!(0, l.is_valid_number)(e.get_value())) {
        s = "TEXT";
      }
    }
    return s;
  };
  e.prototype.field_default_value_to_dom = function (e, t) {
    var n = e.get_has_been_edited();
    t.setAttribute("has_been_edited", String(n));
  };
  e.prototype.clone_shadow = function (e) {
    for (var t, n = e = f.clone_node(e, !0); n;) {
      if (n.firstChild) {
        n = n.firstChild;
      } else {
        for (; n && !n.nextSibling;) {
          t = n;
          n = n.parentNode;
          if (t.nodeType == a.NodeType.TEXT && "" == t.data.trim() && n.firstChild != t) {
            f.remove_node(t);
          }
        }
        if (n) {
          t = n;
          n = n.nextSibling;
          if (t.nodeType == a.NodeType.TEXT && "" == t.data.trim()) {
            f.remove_node(t);
          }
        }
      }
    }
    return e;
  };
  e.prototype.dom_to_block = function (e, t) {
    var n;
    this.events.disable();
    try {
      n = this.dom_to_block_headless(e, t);
      var r = this.scoped_connections.slice();
      this.scoped_connections.length = 0;
      for (var i = 0; i < r.length; i++) {
        var o = r[i];
        var a = o[0];
        var s = o[1];
        if (!s.connect(a, !0)) {
          this.handle_unconnectable_child_block(a.source_block, s);
        }
      }
      if (t.rendered) {
        n.set_connections_hidden(!0);
        var c = n.get_descendants(!1);
        for (i = c.length - 1; i >= 0; i--) {
          c[i].respawn_all_shadows();
        }
        for (i = (c = n.get_descendants(!1)).length - 1; i >= 0; i--) {
          c[i].init_svg();
        }
        for (i = c.length - 1; i >= 0; i--) {
          c[i].update_collapsed();
          c[i].render(!1);
        }
        for (i = c.length - 1; i >= 0; i--) {
          if ((f = c[i]).comment) {
            f.comment.init_svg();
          }
        }
        var u = this.grouped_blocks.slice();
        this.grouped_blocks.length = 0;
        for (i = u.length - 1; i >= 0; i--) {
          var l = u[i];
          var f = l.block;
          var d = l.id;
          var h = l.name;
          var p = l.group_stop_at;
          f.hide_into_group(h, {
            id: d,
            group_stop_at: p
          });
        }
        window.setTimeout(function () {
          if (void 0 != n && void 0 != n.get_workspace()) {
            n.set_connections_hidden(!1);
            for (var e = 0, t = u; e < t.length; e++) {
              t[e].block.set_connections_hidden(!1);
            }
          }
        }, 1);
        n.update_disabled();
      }
    } finally {
      this.events.enable();
    }
    if (this.events.is_enabled()) {
      this.events.fire(this.create_event_factory({
        block: n
      }));
    }
    return n;
  };
  e.prototype.dom_to_block_headless = function (e, t, n) {
    var r = e.getAttribute("type");
    if (void 0 == r) {
      throw new ReferenceError("Block type unspecified.");
    }
    var i = e.getAttribute("id") || n || void 0;
    var o = e.nodeName.toLowerCase();
    var s = t.new_block(r, i);
    var c = e.getAttribute(a.BLOCK_GROUP_ID_XML_TAG);
    if (c && t.get_block_by_id(c)) {
      c = (0, l.gen_uid)();
    }
    var u = e.getAttribute(a.BLOCK_GROUP_NAME_XML_TAG);
    if ("true" === e.getAttribute(a.BLOCK_GROUP_STOPPED_XML_TAG)) {
      for (var f = this.grouped_blocks.length - 1; f >= 0; f--) {
        var d = this.grouped_blocks[f];
        if (!(d.block.is_starting_block() || d.block.is_output_block() || void 0 !== d.group_stop_at)) {
          d.group_stop_at = c || s.id;
        }
      }
    }
    if (c && u) {
      this.grouped_blocks.push({
        block: s,
        id: c,
        name: u
      });
    }
    for (f = 0; f < e.childNodes.length; f++) {
      var h = e.childNodes[f];
      if (h.nodeType != a.NodeType.TEXT) {
        for (var p = void 0, _ = void 0, A = 0; A < h.childNodes.length; A++) {
          var g = h.childNodes[A];
          if (g.nodeType == a.NodeType.ELEMENT) {
            var v = g.nodeName.toLowerCase();
            if ("block" == v) {
              _ = g;
            } else {
              if (!("shadow" != v && "empty" !== v)) {
                p = g;
              }
            }
          }
        }
        switch (h.nodeName.toLowerCase()) {
          case "mutation":
            if (s.domToMutation) {
              s.domToMutation(h);
              if (void 0 != s.init_svg) {
                s.init_svg();
              }
            }
            break;
          case "comment":
            s.set_comment_text("", h.getAttribute("id") || void 0);
            this.parse_comment_attributes(h, s.comment);
            break;
          case "data":
            s.data = h.textContent;
            break;
          case "title":
          case "field":
            this.parse_child_field(h, s);
            break;
          case "value":
          case "statement":
            var m = h.getAttribute("name"),
              y = s.get_input(m);
            if (!y || !y.connection) {
              console.warn("Ignoring non-existent input " + m + " in block " + r);
              break;
            }
            this.parse_connection(t, y.connection, p, _);
            break;
          case "next":
            if (!s.next_connection) {
              console.error("Trying to connect to invalid next connect: " + s);
              break;
            }
            this.parse_connection(t, s.next_connection, p, _);
            break;
          default:
            console.warn("Ignoring unknown tag: " + h.nodeName);
        }
      }
    }
    var b = e.getAttribute("inline");
    if (b) {
      s.set_inputs_inline("true" == b);
    }
    var w = e.getAttribute("disabled");
    if (w) {
      s.set_disabled("true" == w);
    }
    var E = e.getAttribute("deletable");
    if (E) {
      s.set_deletable("true" == E);
    }
    var x = e.getAttribute("movable");
    if (x) {
      s.set_movable("true" == x);
    }
    var C = e.getAttribute("editable");
    if (C) {
      s.set_editable("true" == C);
    }
    var O = e.getAttribute("visible");
    if (O) {
      var k = void 0;
      k = "false" === O || O === a.BlockVisibility.TRANSLUCENT ? a.BlockVisibility.TRANSLUCENT : "hidden" === O ? a.BlockVisibility.HIDDEN : a.BlockVisibility.VISIBLE;
      s.set_chunk_visibility(k);
    }
    if ("shadow" === o || "empty" === o) {
      var S = s.get_children();
      for (f = 0; f < S.length; f++) {
        if (!S[f].is_shadow()) {
          console.error("Shadow block not allowed non-shadow child.");
        }
      }
      s.set_shadow(!0);
      if ("empty" === o) {
        s.set_editable(!1);
      }
    }
    var T = e.getAttribute("collapsed");
    if (T) {
      s.set_collapsed("true" == T);
    }
    return s;
  };
  e.prototype.parse_fields = function (e, t) {
    for (var n = 0; n < e.childNodes.length; n++) {
      var r = e.childNodes[n];
      if (r.nodeType !== a.NodeType.TEXT) {
        if ("field" === r.nodeName.toLowerCase()) {
          this.parse_child_field(r, t);
        }
      }
    }
  };
  e.prototype.parse_connection = function (e, t, n, r) {
    var i;
    if (n) {
      if (null === (i = t.targetBlock()) || void 0 === i ? void 0 : i.is_shadow()) {
        t.remove_shadow();
      }
      t.set_shadow_dom(n);
    }
    if (r) {
      var o = this.dom_to_block_headless(r, e, void 0);
      var a = o.output_connection || o.previous_connection;
      if (a) {
        if (a.context) {
          this.scoped_connections.push([a, t]);
        } else {
          if (!t.connect(a, !0)) {
            this.handle_unconnectable_child_block(o, t);
          }
        }
      } else {
        console.error("Child block does not have output or previous statement.");
      }
    }
  };
  e.prototype.handle_unconnectable_child_block = function (e, t) {
    if (this.runtime_data.is_pasting()) {
      e.dispose(!1, !1);
    } else {
      for (var n = e.get_descendants(!1), r = n.length - 1; r >= 0; r--) {
        n[r].init_svg();
        n[r].update_collapsed();
        n[r].render(!1);
      }
    }
    t.respawn_shadow();
  };
  e.prototype.parse_child_field = function (e, t) {
    var n = e.getAttribute("name");
    if (void 0 != n) {
      if ("true" === e.getAttribute("allow_text") && "NUM" !== n) {
        n = "NUM";
      }
      var r = t.get_field(n);
      if (r) {
        var i = e.textContent;
        if ((0, c.is_field_number)(r)) {
          var o = e.getAttribute("constraints");
          if (o) {
            var s = o.split(",");
            r.set_constraints(s[0], s[1], s[2]);
            if (s[3]) {
              r.set_mod(s[3]);
            }
          }
          var u = e.getAttribute("exceptions");
          if (u) {
            var l = [];
            l = u.split(",").map(function (e) {
              return +e;
            });
            r.set_exceptions(l);
          }
          var f = e.getAttribute("allow_text");
          var d = void 0;
          if (f) {
            d = "true" === f;
          }
          if (r.set_allow_text) {
            r.set_allow_text(d);
          }
          var h = e.getAttribute("controller");
          if (h) {
            var p = void 0;
            p = "SLIDER" === (l = h.split(","))[0] ? {
              type: a.ControllerType.SLIDER,
              left_text: l[1],
              right_text: l[2]
            } : "COLOR_PICKER" === l[0] ? {
              type: a.ControllerType.COLOR_PICKER,
              color_format: l[1],
              line: l[2]
            } : {
              type: a.ControllerType.ANGLE_SCALE
            };
            r.set_controller_option(p);
          }
        }
        if ((0, c.is_field_default_value)(r)) {
          var _ = e.getAttribute("has_been_edited");
          if (_) {
            r.set_has_been_edited("true" === _);
          }
        }
        var A = r.call_validator(i);
        if (void 0 != A && "FieldImage" !== r.field_type) {
          r.set_value(A);
        }
      }
    }
  };
  e.prototype.dom_to_text = function (e) {
    return this.utils.dom_to_string(e);
  };
  e.prototype.text_to_dom = function (e) {
    return this.utils.string_to_dom(e);
  };
  e.prototype.block_to_dom_with_xy = function (e, t) {
    var n;
    var r = this.block_to_dom(e, t);
    var i = (null === (n = e.parent_group) || void 0 === n ? void 0 : n.get_relative_to_surface_xy()) || e.get_relative_to_surface_xy();
    r.setAttribute("x", String(Math.round(i[0])));
    r.setAttribute("y", String(Math.round(i[1])));
    return r;
  };
  e.prototype.filter_undefined_blocks = function (e, t) {
    if (void 0 === t) {
      t = !1;
    }
    for (var n = !1, r = e.querySelectorAll("block"), i = 0; i < r.length; i++) {
      var o = r[i];
      var a = o.getAttribute("type");
      if (!this.Blink.Blocks[a]) {
        if (!n) {
          n = !0;
        }
        var s = o.parentElement;
        switch (s.nodeName) {
          case "NEXT":
            s.parentElement.removeChild(s);
            break;
          case "VALUE":
          case "STATEMENT":
          case "DIV":
          default:
            s.removeChild(o);
        }
      }
    }
    return t ? {
      xml: e,
      deleted: n
    } : e;
  };
  e.prototype.comment_to_dom_with_xy = function (e, t) {
    var n = this.comment_to_dom(e, t);
    var r = e.get_relative_to_surface_xy();
    n.setAttribute("x", String(Math.round(r[0])));
    n.setAttribute("y", String(Math.round(r[1])));
    return n;
  };
  e.prototype.dom_to_workspace_comment = function (e, t) {
    var n = e.getAttribute("id") || void 0;
    var r = t.new_workspace_comment(void 0, n);
    this.parse_comment_attributes(e, r);
    r.init_svg();
    return r;
  };
  e.prototype.comment_to_dom = function (e, t) {
    var n = e.get_text();
    var r = f.create_dom("comment", void 0, n);
    r.setAttribute("pinned", String(e.is_expanded()));
    var i = e.get_bubble_size();
    r.setAttribute("h", String(i.height));
    r.setAttribute("w", String(i.width));
    var o = e.get_relative_position();
    r.setAttribute("relativeleft_", "" + o[0]);
    r.setAttribute("relativetop_", "" + o[1]);
    r.setAttribute("auto_layout", String(e.is_auto_layout()));
    r.setAttribute("color_theme", String(e.get_color_theme()));
    if (!t) {
      r.setAttribute("id", e.id);
    }
    return r;
  };
  e.prototype.parse_comment_attributes = function (e, t) {
    if (t) {
      t.set_text(e.textContent || "");
      var n = e.getAttribute("pinned");
      if (n) {
        t.set_expanded("true" == n);
      }
      var r = parseInt(e.getAttribute("w") || "", 10);
      var i = parseInt(e.getAttribute("h") || "", 10);
      if (!(isNaN(r) || isNaN(i))) {
        t.set_bubble_size(r, i);
      }
      var a = parseFloat(e.getAttribute("relativeleft_") || "");
      var s = parseFloat(e.getAttribute("relativetop_") || "");
      if (!(isNaN(a) || isNaN(s))) {
        t.set_relative_position(o.vec2.fromValues(a, s));
      }
      var u = e.getAttribute("auto_layout");
      if (u) {
        t.set_auto_layout("true" === u);
      }
      var l = e.getAttribute("color_theme");
      if ((0, c.is_comment_theme)(l)) {
        t.set_color_theme(l, !0);
      }
    }
  };
  e.prototype.dom_to_workspace_element = function (e, t) {
    var n = e.tagName.toLowerCase();
    return "block" === n ? this.dom_to_block(e, t) : "comment" === n ? this.dom_to_workspace_comment(e, t) : void console.error("Undefined workspace element: " + e);
  };
  e.prototype.workspace_element_to_dom = function (e, t) {
    return (0, c.is_block_svg)(e) ? this.block_to_dom(e, t) : (0, c.is_workspace_comment)(e) ? this.comment_to_dom(e, t) : (console.error("Undefined workspace element: " + e), f.create_dom("element"));
  };
  e.prototype.workspace_element_to_dom_with_xy = function (e, t) {
    return (0, c.is_block_svg)(e) ? this.block_to_dom_with_xy(e, t) : (0, c.is_workspace_comment)(e) ? this.comment_to_dom_with_xy(e, t) : (console.error("Undefined workspace element: " + e), f.create_dom("element"));
  };
  (0, r.__decorate)([(0, s.lazy_inject)(s.BINDING.events)], e.prototype, "events", void 0);
  (0, r.__decorate)([(0, s.lazy_inject)(s.BINDING.Blink)], e.prototype, "Blink", void 0);
  (0, r.__decorate)([(0, s.lazy_inject)(s.BINDING.utils)], e.prototype, "utils", void 0);
  (0, r.__decorate)([(0, s.lazy_inject)(s.BINDING.runtime_data)], e.prototype, "runtime_data", void 0);
  (0, r.__decorate)([(0, s.lazy_inject)(s.BINDING.CreateEvent)], e.prototype, "create_event_factory", void 0);
  return e = (0, r.__decorate)([(0, i.injectable)()], e);
}();
exports.Xml = d;