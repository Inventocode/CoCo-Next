"use strict";

import * as r from "../../../../1000/93";
import * as i from "../../../../17/497/961";
import * as o from "../../../../301/173";
import * as a from "../../../../4/127";
import * as s from "../../../../125/195/2003/1099";
var c = (0, r.__importStar)(require("../../../../17/533"));
import * as u from "../../../../1000/213/index";
var l = (0, r.__importStar)(require("../../728/1130"));
var f = (0, r.__importStar)(require("../../728/1131"));
import * as h from "./2303/index";
var d = function () {
  function e() {
    this.plugins = new Set();
    this.error = function (e) {
      for (var t = [], n = 1; n < arguments.length; n++) {
        t[n - 1] = arguments[n];
      }
      console.error.apply(console, (0, r.__spreadArray)(["Error when transform to ide ", "[" + e + "]: "], t, !1));
    };
    this.param_block_ids = [];
    this.redo_param_connect = [];
    this.redo_collapse_ids = [];
    var e = new h.ConflictResolver();
    this.register_plugins([e]);
  }
  e.prototype.register_plugins = function (e) {
    var t = this;
    e.forEach(function (e) {
      return t.plugins.add(e);
    });
  };
  e.prototype.decompose_and_transform_op = function (e) {
    var t = this;
    try {
      this.plugins.forEach(function (t) {
        t.before_decompose_and_sort_op(e);
      });
    } catch (u) {
      this.error("Before decompose and sort op", u);
    }
    var n = void 0;
    try {
      n = f.decompose_and_sort_op(e);
    } catch (u) {
      this.error("Decompose and sort op", u);
    }
    if (n) {
      for (var r = this.analyze_sorted_ops(n), i = r.analyze_result, o = r.affected_ids, a = Array.from(this.plugins), s = 0; s < a.length; s++) {
        var c = a[s];
        try {
          if (!c.after_analyze_op(o)) {
            return;
          }
        } catch (u) {
          return void this.error("After analyze op", u);
        }
      }
      i.pick_ops.forEach(function (e) {
        t.transform_pick_operation(e, i.drop_ops);
      });
      i.drop_ops.forEach(function (e) {
        t.transform_drop_operation(e);
      });
      if (this.redo_param_connect.length) {
        this.redo_param_connect.forEach(function (e) {
          t.transform_drop_operation(e);
        });
      }
      this.redo_param_connect = [];
      this.param_block_ids = [];
      if (this.redo_collapse_ids.length) {
        this.redo_collapse_ids.forEach(function (e) {
          try {
            t.Blink.events.disable();
            var n = t.Blink.mainWorkspace.get_block_by_id(e);
            if (!(null === n || void 0 === n)) {
              n.set_collapsed(!1);
            }
            if (!(null === n || void 0 === n)) {
              n.set_collapsed(!0);
            }
          } catch (u) {
            t.error("Retrying creating collapsed blocks", e);
          } finally {
            t.Blink.events.enable();
          }
        });
      }
      this.redo_collapse_ids = [];
      try {
        this.plugins.forEach(function (t) {
          t.after_transform_op_to_event(e);
        });
      } catch (u) {
        this.error("After transform op to event", u);
      }
    }
  };
  e.prototype.analyze_sorted_ops = function (e) {
    var t = this;
    var n = [];
    var r = {
      drop_ops: [],
      pick_ops: []
    };
    e.pick_ops.forEach(function (e) {
      if (l.is_pick_operation(e.operation)) {
        try {
          t.plugins.forEach(function (t) {
            t.before_analyze_op(e);
          });
        } catch (o) {
          t.error("Before analyze pick op", e, o);
        }
        var i = f.analyze_path("pick", e.path);
        if (void 0 !== i && (r.pick_ops.push({
          event_type: i.event_type,
          normalized_path: i.normalized_path,
          operation: e.operation
        }), n.push(i.normalized_path.target_id), i.event_type === l.EventType.DISCONNECT)) {
          if (!l.is_path_3(i.normalized_path)) {
            return;
          }
          n.push(i.normalized_path.property);
        }
      }
    });
    e.drop_ops.forEach(function (e) {
      if (l.is_drop_operation(e.operation)) {
        try {
          t.plugins.forEach(function (t) {
            t.before_analyze_op(e);
          });
        } catch (a) {
          t.error("Before analyze drop op", e, a);
        }
        var i = f.analyze_path("drop", e.path);
        if (void 0 !== i) {
          if (r.drop_ops.push({
            event_type: i.event_type,
            normalized_path: i.normalized_path,
            operation: e.operation
          }), n.push(i.normalized_path.target_id), i.event_type === l.EventType.CONNECT) {
            if (!l.is_path_3(i.normalized_path)) {
              return;
            }
            n.push(i.normalized_path.property);
          }
          if (i.event_type === l.EventType.CREATE_COMMENT) {
            var o = e.operation;
            if (o.i && (0, s.is_comment_json)(o.i) && null !== o.i.parent_id) {
              n.push(o.i.parent_id);
            }
          }
        }
      }
    });
    return {
      analyze_result: r,
      affected_ids: n
    };
  };
  e.prototype.transform_pick_operation = function (e, t) {
    var n = this;
    try {
      this.plugins.forEach(function (t) {
        t.before_generate_event(e);
      });
    } catch (w) {
      this.error("Before generate pick event", e, w);
    }
    var i = e.event_type;
    var o = e.normalized_path;
    var a = function () {
      for (var t = [], i = 0; i < arguments.length; i++) {
        t[i] = arguments[i];
      }
      return n.error.apply(n, (0, r.__spreadArray)(["Transforming pick operation", e], t, !1));
    };
    if (i !== l.EventType.DISCONNECT) {
      if (i !== l.EventType.DELETE_BLOCK) {
        if (i !== l.EventType.DELETE_COMMENT) {
          if (i === l.EventType.REMOVE_SHADOW_INPUT) {
            if (!l.is_path_4(o)) {
              return;
            }
            _ = o.target_id;
            if (!(v = this.Blink.mainWorkspace.get_block_by_id(_))) {
              return void a("remove shadow input: cannot find target block " + _);
            }
            for (var s = void 0, c = 0; c < t.length; c++) {
              var u = t[c];
              if (u.event_type === l.EventType.APPEND_SHADOW_INPUT && l.is_path_4(u.normalized_path) && u.normalized_path.target_id === o.target_id && u.normalized_path.property_name === o.property_name) {
                s = u;
                break;
              }
            }
            if (!s) {
              if (!v.removeMutation) {
                return void a("Block " + _ + " should have function: removeMutation.");
              }
              this.Blink.events.disable();
              try {
                v.removeMutation();
              } catch (w) {
                a(w);
              } finally {
                this.Blink.events.enable();
              }
            }
          }
        } else {
          if (!l.is_path_2(o)) {
            return;
          }
          var f = o.target_id;
          var h = this.Blink.mainWorkspace.workspace_comment_db.get(f);
          if (!h) {
            return;
          }
          if (g = this.Blink.json.comment_to_json(h).parent_id) {
            var d = this.Blink.mainWorkspace.get_element_from_db(g);
            if (!d) {
              return void a("cannot find block connected to this comment " + f);
            }
            this.Blink.events.disable();
            try {
              var p = this.Blink.xml.comment_to_dom_with_xy(h);
              this.change_event_factory("comment", {
                block: d,
                old_value: p,
                new_value: void 0
              }).run(!0);
            } catch (w) {
              a(w);
            } finally {
              this.Blink.events.enable();
            }
          } else {
            A = this.delete_event_factory({
              block: h
            });
            this.Blink.events.disable();
            try {
              A.run(!0);
            } catch (w) {
              a(w);
            } finally {
              this.Blink.events.enable();
            }
          }
        }
      } else {
        if (!l.is_path_2(o)) {
          return;
        }
        var _ = o.target_id;
        if (!(v = this.Blink.mainWorkspace.get_block_by_id(_)) || v.is_shadow()) {
          return;
        }
        if (m = v.get_parent()) {
          y = {
            id: _,
            group: "",
            old_parent_id: m.id
          };
          b = this.move_event_factory({
            block: v
          });
          this.Blink.events.disable();
          try {
            b.deserialize(y);
            b.run(!0);
          } catch (w) {
            a("disconnecting from parent", w);
          } finally {
            this.Blink.events.enable();
          }
        }
        var A = this.delete_event_factory({
          block: v
        });
        this.Blink.events.disable();
        try {
          A.run(!0);
        } catch (w) {
          a("deleting", w);
        } finally {
          this.Blink.events.enable();
        }
      }
    } else {
      if (!l.is_path_3(o)) {
        return;
      }
      var _ = o.property;
      var g = o.target_id;
      var v = this.Blink.mainWorkspace.get_block_by_id(_);
      var m = this.Blink.mainWorkspace.get_block_by_id(g);
      if (!v || !m || v.is_shadow()) {
        return;
      }
      var y = {
        id: _,
        group: "",
        old_parent_id: g
      };
      var b = this.move_event_factory({
        block: v
      });
      this.Blink.events.disable();
      try {
        b.deserialize(y);
        b.run(!0);
      } catch (w) {
        a(w);
      } finally {
        this.Blink.events.enable();
      }
    }
  };
  e.prototype.transform_drop_operation = function (e) {
    var t;
    var n;
    var a;
    var f;
    var h;
    var d;
    var p;
    var _ = this;
    try {
      this.plugins.forEach(function (t) {
        t.before_generate_event(e);
      });
    } catch (ie) {
      this.error("Before generate drop event", e, ie);
    }
    var A = function () {
      for (var t = [], n = 0; n < arguments.length; n++) {
        t[n] = arguments[n];
      }
      return _.error.apply(_, (0, r.__spreadArray)(["Transforming drop operation", e], t, !1));
    };
    var g = e.event_type;
    var v = e.normalized_path;
    var m = e.operation;
    if (l.is_path_2(v)) {
      if (g === l.EventType.CREATE_BLOCK) {
        var y = v.target_id;
        if (!m.i || !(0, s.is_block_json)(m.i)) {
          return void A("Invalid op. ");
        }
        if (U = this.Blink.mainWorkspace.get_block_by_id(y)) {
          return void this.Blink.json.parse_block_data(m.i, U);
        }
        var b = {
          blocks: (t = {}, t[y] = m.i, t),
          connections: {},
          comments: {}
        };
        this.Blink.events.disable();
        try {
          this.Blink.json.json_to_workspace(b, this.Blink.mainWorkspace);
        } catch (ie) {
          A(ie);
        } finally {
          this.Blink.events.enable();
        }
        var w = this.Blink.mainWorkspace.get_block_by_id(y);
        if ("param" === (null === w || void 0 === w ? void 0 : w.element_type)) {
          this.param_block_ids.push(y);
        }
        return void ((null === w || void 0 === w ? void 0 : w.is_collapsed()) && this.redo_collapse_ids.push(y));
      }
      if (g === l.EventType.CREATE_COMMENT) {
        var E = v.target_id;
        if (!m.i || !(0, s.is_comment_json)(m.i)) {
          return void A("Invalid op. ");
        }
        var x = m.i;
        if (x.parent_id) {
          if (!(q = this.Blink.mainWorkspace.get_element_from_db(x.parent_id))) {
            return void A("cannot find block connected to this comment " + E);
          }
          var C = this.change_event_factory("comment", {
            block: q,
            old_value: void 0,
            new_value: E
          });
          this.Blink.events.disable();
          try {
            C.run(!0);
          } catch (ie) {
            A(ie);
          } finally {
            this.Blink.events.enable();
          }
          if (!(K = this.Blink.mainWorkspace.get_element_from_db(E)) || !(0, u.is_workspace_comment)(K)) {
            return void A("create: cannot find target comment " + E);
          }
          var O = x.location;
          if (!Array.isArray(O) || "number" !== typeof O[0] || "number" !== typeof O[1]) {
            return void A("Invalid op. ");
          }
          var S = [O[0], O[1]];
          var k = {
            id: K.id,
            group: "",
            new_coordinate: S
          };
          var T = this.move_event_factory({
            block: K
          });
          this.Blink.events.disable();
          try {
            T.deserialize(k);
            T.run(!0);
          } catch (ie) {
            A(ie);
          } finally {
            this.Blink.events.enable();
          }
          if (x.text) {
            var B = this.change_event_factory("comment_text", {
              block: K,
              old_value: "",
              new_value: x.text
            });
            this.Blink.events.disable();
            try {
              B.run(!0);
            } catch (ie) {
              A(ie);
            } finally {
              this.Blink.events.enable();
            }
          }
          var D = K.get_color_theme();
          var I = this.change_event_factory("comment_color", {
            block: K,
            old_value: D,
            new_value: x.color_theme
          });
          this.Blink.events.disable();
          try {
            I.run(!0);
          } catch (ie) {
            A(ie);
          } finally {
            this.Blink.events.enable();
          }
        } else {
          b = {
            blocks: {},
            connections: {},
            comments: (n = {}, n[x.id] = x, n)
          };
          this.Blink.events.disable();
          try {
            this.Blink.json.json_to_workspace(b, this.Blink.mainWorkspace);
          } catch (ie) {
            A(ie);
          } finally {
            this.Blink.events.enable();
          }
        }
        return;
      }
    }
    if (l.is_path_3(v)) {
      if (g === l.EventType.MOVE_BLOCK) {
        y = v.target_id;
        var F = this.Blink.mainWorkspace.get_block_by_id(y);
        if (!F) {
          return void A("move block: cannot find target block " + y);
        }
        if (F.is_shadow()) {
          return;
        }
        if (!Array.isArray(m.i) || "number" !== typeof m.i[0] || "number" !== typeof m.i[1]) {
          return void A("invalid op. ");
        }
        k = {
          id: y,
          group: "",
          new_coordinate: S = [m.i[0], m.i[1]]
        };
        T = this.move_event_factory({
          block: F
        });
        this.Blink.events.disable();
        try {
          T.deserialize(k);
          T.run(!0);
        } catch (ie) {
          A(ie);
        } finally {
          this.Blink.events.enable();
        }
        return;
      }
      if (g === l.EventType.COLLAPSE_BLOCK) {
        y = v.target_id;
        var R = this.Blink.mainWorkspace.get_element_from_db(y);
        if (!R) {
          return void A("Invalid block " + y + ". ");
        }
        if ("boolean" !== typeof m.i) {
          return void A("Invalid op. ");
        }
        var P = m.i;
        C = this.change_event_factory("collapsed", {
          block: R,
          old_value: !P,
          new_value: P
        });
        this.Blink.events.disable();
        try {
          C.run(!0);
        } catch (ie) {
          A(ie);
        } finally {
          this.Blink.events.enable();
        }
        return;
      }
      if (g === l.EventType.DISABLE_BLOCK) {
        y = v.target_id;
        if (!(U = this.Blink.mainWorkspace.get_block_by_id(y))) {
          return void A("Invalid block " + y + ". ");
        }
        var N = m.i;
        if ("boolean" !== typeof N) {
          return void A("Invalid op. ");
        }
        C = this.change_event_factory("disabled", {
          block: U,
          old_value: !N,
          new_value: N
        });
        this.Blink.events.disable();
        try {
          C.run(!0);
        } catch (ie) {
          A(ie);
        } finally {
          this.Blink.events.enable();
        }
        return;
      }
      if (g === l.EventType.SET_BLOCK_VISIBILITY) {
        y = v.target_id;
        if (!(U = this.Blink.mainWorkspace.get_block_by_id(y))) {
          return void A("Invalid block " + y + ". ");
        }
        var M = m.i;
        if ("string" !== typeof M) {
          return void A("Invalid op. ");
        }
        var j = (0, i.parse_visibility)(M);
        if (!j) {
          return void A("Invalid op. ");
        }
        C = this.change_event_factory("visibility", {
          block: U,
          old_value: c.BlockVisibility.HIDDEN,
          new_value: j
        });
        this.Blink.events.disable();
        try {
          C.run(!0);
        } catch (ie) {
          A(ie);
        } finally {
          this.Blink.events.enable();
        }
        return;
      }
      if (g === l.EventType.CONNECT) {
        y = v.property;
        var L = v.target_id;
        var U = this.Blink.mainWorkspace.get_block_by_id(y);
        var H = this.Blink.mainWorkspace.get_block_by_id(L);
        if (!U) {
          return void A("Invalid block " + y + ". ");
        }
        if (!m.i || !(0, s.is_connection_json)(m.i)) {
          return void A("Invalid op. ");
        }
        var V = m.i;
        k = {
          id: y,
          group: ""
        };
        if ("next" === V.type && (k.new_parent_id = L), "input" === V.type) {
          if (k.new_parent_id = L, k.new_input_name = V.input_name, !H) {
            return void A("Invalid block " + y + ". ");
          }
          if (!(z = H.get_input(V.input_name))) {
            return void A("Cannot find target input " + V.input_name + " on block " + L);
          }
        }
        T = this.move_event_factory({
          block: U
        });
        this.Blink.events.disable();
        try {
          T.deserialize(k);
          T.run(!0);
        } catch (ie) {
          A(ie);
        } finally {
          this.Blink.events.enable();
        }
        if (this.param_block_ids.includes(y) && this.redo_param_connect.push(e), !U.is_shadow()) {
          return;
        }
        for (var G = 0; G < U.inputList.length; G++) {
          for (var z = U.inputList[G], Q = 0; Q < z.fieldRow.length; Q++) {
            var W = z.fieldRow[Q];
            if ((0, u.is_field_number)(W)) {
              W.update_allow_text();
            }
          }
        }
        return;
      }
      if (g === l.EventType.MOVE_COMMENT) {
        var K;
        E = v.target_id;
        if (!(K = this.Blink.mainWorkspace.get_element_from_db(E))) {
          return void A("Invalid comment " + E);
        }
        if (!Array.isArray(m.i) || "number" !== typeof m.i[0] || "number" !== typeof m.i[1]) {
          return void A("Invalid op. ");
        }
        k = {
          id: E,
          group: "",
          new_coordinate: S = [m.i[0], m.i[1]]
        };
        T = this.move_event_factory({
          block: K
        });
        this.Blink.events.disable();
        try {
          T.deserialize(k);
          T.run(!0);
        } catch (ie) {
          A(ie);
        } finally {
          this.Blink.events.enable();
        }
        return;
      }
      if (g === l.EventType.EDIT_COMMENT) {
        E = v.target_id;
        if (!(q = this.Blink.mainWorkspace.get_element_from_db(E))) {
          return void A("Invalid comment " + E);
        }
        if ("string" !== typeof m.i) {
          return void A("Invalid op. ");
        }
        B = this.change_event_factory("comment_text", {
          block: q,
          old_value: "",
          new_value: m.i
        });
        this.Blink.events.disable();
        try {
          B.run(!0);
        } catch (ie) {
          A(ie);
        } finally {
          this.Blink.events.enable();
        }
        return;
      }
      if (g === l.EventType.COLLAPSE_COMMENT) {
        E = v.target_id;
        if (!(q = this.Blink.mainWorkspace.get_element_from_db(E))) {
          return void A("Invalid comment " + E);
        }
        if ("boolean" !== typeof m.i) {
          return void A("Invalid op. ");
        }
        var X = m.i;
        var Y = this.change_event_factory("comment_expand", {
          block: q,
          old_value: !X,
          new_value: X
        });
        this.Blink.events.disable();
        try {
          Y.run(!0);
        } catch (ie) {
          A(ie);
        } finally {
          this.Blink.events.enable();
        }
        return;
      }
      if (g === l.EventType.CHANGE_COMMENT_COLOR) {
        E = v.target_id;
        var q = this.Blink.mainWorkspace.get_element_from_db(E);
        if (!(0, u.is_workspace_comment)(q)) {
          return void A("Invalid comment " + E);
        }
        if (!(0, u.is_comment_theme)(m.i)) {
          return void A("Invalid op. ");
        }
        D = q.get_color_theme();
        I = this.change_event_factory("comment_color", {
          block: q,
          old_value: D,
          new_value: m.i
        });
        this.Blink.events.disable();
        try {
          I.run(!0);
        } catch (ie) {
          A(ie);
        } finally {
          this.Blink.events.enable();
        }
        return;
      }
      if (g === l.EventType.RESIZE_COMMENT) {
        E = v.target_id;
        if (!(q = this.Blink.mainWorkspace.get_element_from_db(E))) {
          return void A("Invalid comment " + E);
        }
        if (!Array.isArray(m.i) || "number" !== typeof m.i[0] || "number" !== typeof m.i[1]) {
          return void A("Invalid op. ");
        }
        var $ = q.get_height_width();
        var J = this.change_event_factory("comment_resize", {
          block: q,
          old_value: [$.width, $.height],
          new_value: [m.i[0], m.i[1]]
        });
        this.Blink.events.disable();
        try {
          J.run(!0);
        } catch (ie) {
          A(ie);
        } finally {
          this.Blink.events.enable();
        }
        return;
      }
    }
    if (l.is_path_4(v)) {
      if (g === l.EventType.EDIT_BLOCK_FIELD) {
        if ("string" !== typeof m.i) {
          return void A("Invalid op. ");
        }
        y = v.target_id;
        if (!(U = this.Blink.mainWorkspace.get_block_by_id(y))) {
          return void A("Invalid block " + y);
        }
        var Z = v.property_name;
        if (!(W = U.get_field(Z))) {
          var ee = {
            TEXT: "NUM",
            NUM: "TEXT"
          };
          if (!(W = U.get_field(ee[Z])) || !W.allow_text) {
            return void A("Invalid field " + Z + " on block " + y);
          }
          Z = ee[Z];
        }
        var te = W.get_value();
        if (te === m.i) {
          return;
        }
        var ne = U.type === o.PROCEDURE_BLOCK_TYPES.DEF && Z === o.PROCEDURE_BLOCK_FIELD_NAMES.PROCEDURE_NAME;
        C = this.change_event_factory(ne ? "procedure_rename" : "field", {
          block: U,
          old_value: te,
          new_value: m.i,
          name: Z
        });
        this.Blink.events.disable();
        try {
          C.run(!0);
        } catch (ie) {
          A(ie);
        } finally {
          this.Blink.events.enable();
        }
        return;
      }
      if (g === l.EventType.APPEND_SHADOW_INPUT) {
        if ("string" !== typeof m.i) {
          return void A("Invalid op. ");
        }
        y = v.target_id;
        var re = v.property_name;
        if (!(U = this.Blink.mainWorkspace.get_block_by_id(y))) {
          return void A("Invalid block " + y);
        }
        if (z = U.get_input(re)) {
          if (!(null === (a = z.connection) || void 0 === a)) {
            a.set_shadow_from_string(m.i);
          }
        } else {
          this.Blink.events.disable();
          try {
            if (!(null === (f = U.addMutation) || void 0 === f)) {
              f.call(U);
            }
            if (!(null === (p = null === (d = null === (h = U.get_input(re)) || void 0 === h ? void 0 : h.connection) || void 0 === d ? void 0 : d.targetBlock()) || void 0 === p)) {
              p.dispose();
            }
          } catch (ie) {
            A(ie);
          } finally {
            this.Blink.events.enable();
          }
        }
      }
    }
    if (l.is_path_5(v) && g === l.EventType.EDIT_FIELD_EXTRA_ATTR) {
      y = v.target_id;
      if (!(U = this.Blink.mainWorkspace.get_block_by_id(y))) {
        return void A("Invalid block " + y);
      }
      Z = v.property_name;
      if (!(W = U.get_field(Z))) {
        return void A("Cannot find field " + Z + " on block " + y);
      }
      if ((0, u.is_field_default_value)(W)) {
        if ("boolean" !== typeof m.i) {
          return void A("Invalid op. ");
        }
        W.set_has_been_edited(m.i);
      }
    }
  };
  (0, r.__decorate)([(0, a.lazy_inject)(a.BINDING.Blink)], e.prototype, "Blink", void 0);
  (0, r.__decorate)([(0, a.lazy_inject)(a.BINDING.MoveEvent)], e.prototype, "move_event_factory", void 0);
  (0, r.__decorate)([(0, a.lazy_inject)(a.BINDING.DeleteEvent)], e.prototype, "delete_event_factory", void 0);
  (0, r.__decorate)([(0, a.lazy_inject)(a.BINDING.ChangeEvent)], e.prototype, "change_event_factory", void 0);
  return e;
}();
export { d as TransformToIde };