"use strict";

Object.defineProperty(exports, "__esModule", {
  value: !0
});
exports.register_default_procedure_events = void 0;
var r = require("tslib");
var i = require("../../4/127");
var o = (0, r.__importStar)(require("../../17/533"));
var a = require("../../17/497/387");
var s = require("../../1001/213/index");
var c = require("../../301/173");
var u = require("../../1036/754");
var l = require("./1316");
exports.register_default_procedure_events = function (e, t) {
  var n = (0, i.get_instance)().get(i.BINDING.events);
  var r = (0, i.get_instance)().get(i.BINDING.ChangeEvent);
  e.add_custom_change_event("procedure_rename", function (i) {
    var o = (0, s.is_func)(t) ? t() : t;
    var l = this.get_old_value();
    var f = this.get_new_value();
    var d = this.get_block_id();
    (0, a.assert)("string" === typeof l);
    (0, a.assert)("string" === typeof f);
    var h = e.get_block_by_id(d);
    (0, a.assert)(h);
    var p = o.get_procedure_name_by_def(d);
    var _ = i ? f : l;
    var A = (0, u.get_legal_procedure_name)(_, o.get_occupied_procedure_names());
    n.disable();
    o.rename_procedure(p, A);
    var g = h.get_field("NAME");
    if (g) {
      g.set_value(A);
    }
    n.enable();
    n.fire(r("procedure_rename", {
      block: h,
      old_value: p,
      new_value: A,
      name: c.PROCEDURE_BLOCK_FIELD_NAMES.PROCEDURE_NAME
    }));
  });
  e.add_custom_change_event("change_procedure_param", function (i) {
    var o;
    var u;
    var l;
    var f;
    var d = (0, s.is_func)(t) ? t() : t;
    var h = this.get_old_value();
    var p = this.get_new_value();
    var _ = this.get_block_id();
    var A = i ? p : h;
    var g = i ? h : p;
    var v = e.get_block_by_id(_);
    (0, a.assert)(v);
    var m = d.get_procedure_by_def(_);
    (0, a.assert)(m);
    n.disable();
    if ("undefined" === typeof g && "object" === typeof A) {
      if (!(null === (o = v.addMutation) || void 0 === o)) {
        o.call(v, A.param_name);
      }
      if (void 0 !== A.default_value) {
        var y = m.params.length;
        var b = null === (l = null === (u = v.get_input("" + c.PROCEDURE_BLOCK_INPUT_NAMES.PARAM_PREFIX + y)) || void 0 === u ? void 0 : u.connection) || void 0 === l ? void 0 : l.targetBlock();
        (0, a.assert)(b);
        b.set_field_value("=" + A.default_value, c.PROCEDURE_BLOCK_FIELD_NAMES.PARAM_DEFAULT_VALUE);
      }
    } else if ("undefined" === typeof A && "object" === typeof g) {
      if (!(null === (f = v.removeMutation) || void 0 === f)) {
        f.call(v);
      }
    }
    n.enable();
    n.fire(r("change_procedure_param", {
      block: v,
      old_value: g,
      new_value: A
    }));
  });
  var f = function (t) {
    e.add_change_listener(function n(r) {
      if (!(r.type !== o.BlockEventType.END_DRAG && r.type !== o.BlockEventType.DELETE)) {
        setTimeout(function () {
          t(r);
        });
        e.remove_change_listener(n);
      }
    });
  };
  var d = function (i, u) {
    if (!u || u.type !== o.BlockEventType.DELETE) {
      var l = e.get_block_by_id(i.get_block_id());
      if (l) {
        var f = n.is_record_undo();
        n.set_record_undo(!1);
        var d = (0, s.is_func)(t) ? t() : t;
        if (l.type === c.PROCEDURE_BLOCK_TYPES.DEF) {
          var h = d.load_def_from_block(l);
          (0, a.assert)(h);
          n.disable();
          var p = l.get_field(c.PROCEDURE_BLOCK_FIELD_NAMES.PROCEDURE_NAME);
          var _ = null === p || void 0 === p ? void 0 : p.get_value();
          (0, a.assert)(p);
          p.set_value(h.name);
          n.enable();
          if (_ !== h.name) {
            n.fire(r("procedure_rename", {
              block: l,
              old_value: _ || "",
              new_value: h.name,
              name: c.PROCEDURE_BLOCK_FIELD_NAMES.PROCEDURE_NAME
            }));
          }
          d.update_callers_disabled(e, h.def_id);
        }
        l.get_descendants(!1, !0).forEach(function (e) {
          if (e.type === c.PROCEDURE_BLOCK_TYPES.CALL_RETURN || e.type === c.PROCEDURE_BLOCK_TYPES.CALL_NORETURN) {
            var t = d.load_caller_from_block(e);
            (0, a.assert)(t);
            var n = d.get_procedure_by_caller_id(e.id);
            (0, a.assert)(n);
            var r = e.get_field(c.PROCEDURE_BLOCK_FIELD_NAMES.PROCEDURE_NAME);
            (0, a.assert)(r);
            r.set_value(n.name);
            e.set_disabled(n.disabled || e.type === c.PROCEDURE_BLOCK_TYPES.CALL_RETURN && 0 === n.return_count);
          }
        });
        n.set_record_undo(f);
      }
    }
  };
  e.add_change_listener(function (r) {
    var i = n.is_record_undo();
    switch (n.set_record_undo(!1), r.type) {
      case o.BlockEventType.CREATE:
        if (n.is_undoing() || "flyout:drag" !== r.source) {
          d(r);
        } else {
          f(d.bind(r, r));
        }
        break;
      case o.BlockEventType.DELETE:
        !function (n) {
          var r = (0, s.is_func)(t) ? t() : t;
          if (n.old_xml.getAttribute("type") === c.PROCEDURE_BLOCK_TYPES.DEF) {
            var i = r.delete_procedure_def(n.get_block_id());
            if (!i) {
              return;
            }
            r.update_callers_disabled(e, i.def_id);
          }
          var o = function (e) {
            if ("block" === e.tagName.toLowerCase()) {
              var t = e.getAttribute("type");
              var n = e.getAttribute("id");
              (0, a.assert)(t);
              (0, a.assert)(n);
              if (!(t !== c.PROCEDURE_BLOCK_TYPES.CALL_RETURN && t !== c.PROCEDURE_BLOCK_TYPES.CALL_NORETURN)) {
                r.delete_caller(n);
              }
            }
          };
          o(n.old_xml);
          Array.from(n.old_xml.querySelectorAll("block")).forEach(o);
        }(r);
        break;
      case o.BlockEventType.MOVE:
        !function (r) {
          var i = r.get_old_loc();
          var o = r.get_new_loc();
          if (!(!i.input_name && !i.parent_id && !o.input_name && !o.parent_id)) {
            var u = [];
            var l = e.get_block_by_id(r.get_block_id());
            if (l) {
              var d = (0, s.is_func)(t) ? t() : t;
              var h = l.get_descendants(!1, !0).filter(function (e) {
                return e.type === c.PROCEDURE_BLOCK_TYPES.RETURN && e.get_input("VALUE");
              }).length;
              if (!(h < 1)) {
                var p = function (t) {
                  var n = t && e.get_block_by_id(t);
                  var r = n && n.get_top_parent();
                  if (r && (0, s.is_block_svg)(r) && r.type === c.PROCEDURE_BLOCK_TYPES.DEF) {
                    return r.id;
                  }
                };
                var _ = p(r.get_old_loc().parent_id);
                if (_) {
                  u.push(function () {
                    var t = d.get_procedure_by_def(_);
                    (0, a.assert)(t);
                    d.change_return_count(t.name, -1 * h);
                    if (0 === t.return_count) {
                      d.update_callers_disabled(e, t.def_id);
                    }
                  });
                }
                var A = p(r.get_new_loc().parent_id);
                if (A) {
                  u.push(function () {
                    var t = d.get_procedure_by_def(A);
                    if (t) {
                      var n = t.return_count;
                      d.change_return_count(t.name, h);
                      if (0 === n && t.return_count > 0) {
                        d.update_callers_disabled(e, t.def_id);
                      }
                    }
                  });
                }
                var g = function () {
                  var e = n.is_record_undo();
                  n.set_record_undo(!1);
                  u.forEach(function (e) {
                    return e();
                  });
                  n.set_record_undo(e);
                };
                if (!n.is_undoing() && e.is_dragging()) {
                  f(g);
                } else {
                  g();
                }
              }
            }
          }
        }(r);
        break;
      case o.BlockEventType.CHANGE:
        !function (n) {
          var r = e.get_block_by_id(n.get_block_id() || "");
          if (n.type === o.BlockEventType.CHANGE && r) {
            var i = (0, s.is_func)(t) ? t() : t;
            if (r.type === c.PROCEDURE_BLOCK_TYPES.RETURN) {
              var u = r.get_top_parent();
              if (u && (0, s.is_block_svg)(u) && u.type !== c.PROCEDURE_BLOCK_TYPES.DEF) {
                return;
              }
              var l = i.get_procedure_by_def(u.id);
              (0, a.assert)(l);
              if ("mutation" === n.element) {
                if (void 0 !== n.get_new_value()) {
                  i.change_return_count(l.name, 1);
                  if (l.return_count > 0) {
                    i.update_callers_disabled(e, l.def_id);
                  }
                } else {
                  if (void 0 !== n.get_old_value()) {
                    i.change_return_count(l.name, -1);
                    if (0 === l.return_count) {
                      i.update_callers_disabled(e, l.def_id);
                    }
                  }
                }
              }
            }
            if (r.type === c.PROCEDURE_BLOCK_TYPES.DEF) {
              if ("change_procedure_param" === n.element) {
                var f = n.get_old_value();
                var d = n.get_new_value();
                l = i.get_procedure_by_def(n.get_block_id());
                (0, a.assert)(l, "Trying to edit param on in-existing procedure");
                if ("object" === typeof d && "undefined" === typeof f) {
                  var h = d;
                  i.add_param(l.name, h.param_name, h.default_value);
                  i.update_params(e, l.name, "increase", h);
                } else if ("object" === typeof f && "undefined" === typeof d) {
                  h = f;
                  i.delete_param(l.name, h.param_name);
                  i.update_params(e, l.name, "decrease", h);
                }
                return;
              }
              if ("procedure_rename" === n.element) {
                f = n.get_old_value();
                d = n.get_new_value();
                (0, a.assert)("string" === typeof f);
                (0, a.assert)("string" === typeof d);
                i.update_procedure_name(e, f, d);
              }
            }
          }
        }(r);
    }
    n.set_record_undo(i);
  });
  e.set_pre_paste(function (e, n, r, i) {
    var o = (0, s.is_func)(t) ? t() : t;
    if (!i) {
      e = (0, l.load_from_xml)(o, e, !0);
    }
    return {
      xml_block: e,
      mouse_position: n,
      is_move_to_default: r
    };
  });
  e.set_pre_paste_extend(function (e, n, r) {
    var i = (0, s.is_func)(t) ? t() : t;
    var o = document.createElement("xml");
    e.forEach(function (e) {
      return o.appendChild(e);
    });
    return {
      xml_blocks: e = Array.from((0, l.load_from_xml)(i, o, !0).children),
      mouse_position: n,
      is_move_to_default: r
    };
  });
};