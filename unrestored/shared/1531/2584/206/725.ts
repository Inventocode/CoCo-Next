"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.rename_procedures_in_json = exports.delete_from_json = exports.load_from_json = undefined;
var r = require("../17/497/387");
var i = require("../301/173");
var o = require("../1036/754");
function a(e, t) {
  return e.fields[t];
}
function s(e) {
  var t = e.procedure_manager;
  var n = e.workspace_json;
  var o = e.should_rename;
  var s = e.block_id;
  var c = e.procedure_to_add;
  var u = n.blocks[s];
  if (u.type === i.PROCEDURE_BLOCK_TYPES.DEF) {
    var l = a(u, i.PROCEDURE_BLOCK_FIELD_NAMES.PROCEDURE_NAME);
    (0, r.assert)(l);
    var f = n.connections[s];
    var d = Object.keys(f).filter(function (e) {
      var t = f[e];
      return "input" === t.type && t.input_name.startsWith(i.PROCEDURE_BLOCK_INPUT_NAMES.PARAM_PREFIX);
    }).sort(function (e, t) {
      var n = f[e];
      var o = f[t];
      (0, r.assert)("input" === n.type && "input" === o.type);
      return Number(n.input_name.slice(i.PROCEDURE_BLOCK_INPUT_NAMES.PARAM_PREFIX.length)) - Number(o.input_name.slice(i.PROCEDURE_BLOCK_INPUT_NAMES.PARAM_PREFIX.length));
    }).map(function (e) {
      var t = n.blocks[e];
      (0, r.assert)(t && t.type === i.PROCEDURE_BLOCK_TYPES.PARAM_ON_BLOCK);
      var o = a(t, i.PROCEDURE_BLOCK_FIELD_NAMES.PARAM_NAME);
      (0, r.assert)(o);
      return {
        param_name: o,
        default_value: a(t, i.PROCEDURE_BLOCK_FIELD_NAMES.PARAM_DEFAULT_VALUE)
      };
    });
    var h = function e(t, n, r) {
      var i = [];
      if (!(r && !r(t.blocks[n]))) {
        i.push(t.blocks[n]);
      }
      if (t.connections[n]) {
        Object.keys(t.connections[n]).forEach(function (n) {
          i.push.apply(i, e(t, n, r));
        });
      }
      return i;
    }(n, s, function (e) {
      return e.type === i.PROCEDURE_BLOCK_TYPES.RETURN && Object.keys(e.shadows).some(function (e) {
        return "VALUE" === e;
      });
    }).length;
    if (!o) {
      var p = t.add_procedure_def(l, s);
      p.params = d;
      return void (p.return_count = h);
    }
    var _ = c[l];
    if (!_) {
      _ = {
        def_id: s,
        disabled: true,
        name: l,
        base_name: l,
        params: [],
        callers_id: [],
        return_count: 0,
        valid: true,
        created_timestamp: Date.now()
      };
      c[l] = _;
    }
    _.def_id = s;
    _.disabled = false;
    _.params = d;
    _.return_count = h;
  }
}
function c(e, t) {
  var n = [i.PROCEDURE_BLOCK_TYPES.DEF, i.PROCEDURE_BLOCK_TYPES.CALL_RETURN, i.PROCEDURE_BLOCK_TYPES.CALL_NORETURN];
  Object.keys(e.blocks).forEach(function (r) {
    var o = e.blocks[r];
    if (!(n.indexOf(o.type) < 0)) {
      var a = o.fields[i.PROCEDURE_BLOCK_FIELD_NAMES.PROCEDURE_NAME];
      if (a && t[a]) {
        o.fields[i.PROCEDURE_BLOCK_FIELD_NAMES.PROCEDURE_NAME] = t[a];
      }
    }
  });
  return e;
}
exports.load_from_json = function (e, t, n) {
  var u = {};
  var l = {};
  Object.keys(t.blocks).forEach(function (o) {
    s({
      procedure_manager: e,
      procedure_to_add: u,
      workspace_json: t,
      block_id: o,
      should_rename: n
    });
    (function (e) {
      var t = e.procedure_manager;
      var n = e.workspace_json;
      var o = e.should_rename;
      var s = e.block_id;
      var c = e.procedure_to_add;
      var u = e.callers_to_add;
      var l = n.blocks[s];
      if (l.type === i.PROCEDURE_BLOCK_TYPES.CALL_NORETURN || l.type === i.PROCEDURE_BLOCK_TYPES.CALL_RETURN) {
        var f = a(l, i.PROCEDURE_BLOCK_FIELD_NAMES.PROCEDURE_NAME);
        (0, r.assert)(f);
        var d = l.mutation.match(/<procedures_2_parameter_shadow[^>]+><\/procedures_2_parameter_shadow>/g);
        var h = [];
        if (d) {
          h = Array.from(d).map(function (e) {
            var t = e.match(/ name="([^"]+)"/);
            (0, r.assert)(t && 2 === t.length, "Trying to extract param name from invalid procedures_2_parameter_shadow: " + e);
            return {
              param_name: t[1]
            };
          });
        }
        if (o) {
          var p = c[f];
          if (!p) {
            var _ = l.mutation.match(/def_id="([^"]+)"/);
            p = {
              def_id: _ && _[1] || "",
              disabled: true,
              name: f,
              base_name: f,
              params: h,
              callers_id: [],
              return_count: 0,
              valid: true,
              created_timestamp: Date.now()
            };
            c[f] = p;
          }
          u[s] = {
            id: s,
            proc_name: f,
            call_type: l.type === i.PROCEDURE_BLOCK_TYPES.CALL_RETURN ? "call_return" : "call",
            disabled: false
          };
          p.callers_id.push(s);
        } else {
          if (!t.get_procedure_by_name(f)) {
            var A = t.add_procedure_def(f, "");
            A.params = h;
            A.disabled = true;
          }
          t.add_caller(f, s, l.type === i.PROCEDURE_BLOCK_TYPES.CALL_RETURN ? "call_return" : "call");
        }
      }
    })({
      procedure_manager: e,
      procedure_to_add: u,
      workspace_json: t,
      block_id: o,
      should_rename: n,
      callers_to_add: l
    });
  });
  if (!n) {
    return t;
  }
  var f = (0, o.add_procedure_and_generate_rename_map)({
    procedure_manager: e,
    procedure_to_add: u,
    callers_to_add: l
  });
  return c(t, f);
};
exports.delete_from_json = function (e, t) {
  var n = [];
  Object.keys(t.blocks).forEach(function (r) {
    !function (t) {
      var r = t.type;
      if (r !== i.PROCEDURE_BLOCK_TYPES.DEF) {
        if (r === i.PROCEDURE_BLOCK_TYPES.CALL_NORETURN || r === i.PROCEDURE_BLOCK_TYPES.CALL_RETURN) {
          o = t.id;
          e.delete_caller(o);
        }
      } else {
        var o = t.id;
        var a = e.delete_procedure_def(o);
        if (a) {
          n.push(a.def_id);
        }
      }
    }(t.blocks[r]);
  });
  return n;
};
exports.rename_procedures_in_json = c;