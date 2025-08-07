"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.delete_from_xml = exports.rename_procedures_in_xml = exports.load_from_xml = undefined;
var r = require("../../17/497/387");
var i = require("../../301/173");
var o = require("../../1036/754");
function a(e, t) {
  var n = function (e) {
    if ("block" === e.tagName.toLowerCase()) {
      var n = e.getAttribute("type");
      if (n !== i.PROCEDURE_BLOCK_TYPES.DEF) {
        if (n === i.PROCEDURE_BLOCK_TYPES.CALL_NORETURN || n === i.PROCEDURE_BLOCK_TYPES.CALL_RETURN) {
          a = (o = e.querySelector("field[name=\"NAME\"]")) && o.textContent;
          if (o && a && t[a]) {
            o.textContent = t[a];
            var r = e.querySelector("mutation");
            if (r) {
              r.setAttribute("name", t[a]);
            }
          }
        }
      } else {
        var o;
        var a = (o = e.querySelector("field[name=\"NAME\"]")) && o.textContent;
        if (o && a && t[a]) {
          o.textContent = t[a];
        }
      }
    }
  };
  n(e);
  Array.from(e.querySelectorAll("block")).forEach(n);
  return e;
}
exports.load_from_xml = function (e, t, n) {
  var s = Array.from(t.querySelectorAll("block"));
  if ("block" === t.tagName.toLowerCase()) {
    s.unshift(t);
  }
  var c = {};
  var u = {};
  s.forEach(function (t) {
    var o = t.getAttribute("type");
    if (o === i.PROCEDURE_BLOCK_TYPES.DEF) {
      var a = t.getAttribute("id");
      (0, r.assert)(a);
      var s = (p = t.querySelector("field[name=\"" + i.PROCEDURE_BLOCK_FIELD_NAMES.PROCEDURE_NAME + "\"]")) && p.textContent;
      (0, r.assert)(s);
      var l = Array.from(t.querySelectorAll("block[type=\"" + i.PROCEDURE_BLOCK_TYPES.PARAM_ON_BLOCK + "\"]")).map(function (e) {
        var t = e.querySelector("field[name=\"" + i.PROCEDURE_BLOCK_FIELD_NAMES.PARAM_NAME + "\"]");
        (0, r.assert)(t && t.textContent, "No name field or name on block parameter. ");
        var n = e.querySelector("field[name=\"" + i.PROCEDURE_BLOCK_FIELD_NAMES.PARAM_DEFAULT_VALUE + "\"]");
        return {
          param_name: t.textContent,
          default_value: (null === n || undefined === n ? undefined : n.textContent) || undefined
        };
      });
      var f = t.querySelector("statement[name=\"" + i.PROCEDURE_BLOCK_INPUT_NAMES.DEF_STATEMENT + "\"]");
      var d = f && f.querySelectorAll("block[type=\"" + i.PROCEDURE_BLOCK_TYPES.RETURN + "\"]>mutation[items=\"1\"]").length || 0;
      if (!n) {
        var h = e.add_procedure_def(s, a);
        h.params = l;
        h.return_count = d;
        return void (p && h.name !== s && (p.textContent = h.name));
      }
      if (!(_ = c[s])) {
        _ = {
          def_id: a,
          disabled: true,
          name: s,
          base_name: s,
          params: [],
          callers_id: [],
          return_count: 0,
          valid: true,
          created_timestamp: Date.now()
        };
        c[s] = _;
      }
      _.def_id = a;
      _.disabled = false;
      _.params = l;
      return void (_.return_count = d);
    }
    if (o === i.PROCEDURE_BLOCK_TYPES.CALL_NORETURN || o === i.PROCEDURE_BLOCK_TYPES.CALL_RETURN) {
      a = t.getAttribute("id");
      (0, r.assert)(a);
      var p;
      s = (p = t.querySelector("field[name=\"NAME\"]")) && p.textContent;
      (0, r.assert)(s);
      var _;
      l = Array.from(t.querySelectorAll("mutation>procedures_2_parameter_shadow")).map(function (e) {
        return {
          param_name: e.getAttribute("name") || ""
        };
      });
      if (!n) {
        if (!e.get_procedure_by_name(s)) {
          var A = e.add_procedure_def(s, "");
          A.params = l;
          A.disabled = true;
        }
        return void e.add_caller(s, a, o === i.PROCEDURE_BLOCK_TYPES.CALL_RETURN ? "call_return" : "call");
      }
      if (!(_ = c[s])) {
        var g = t.querySelector("mutation");
        _ = {
          def_id: g && g.getAttribute("def_id") || "",
          disabled: true,
          name: s,
          base_name: s,
          params: l,
          callers_id: [],
          return_count: 0,
          valid: true,
          created_timestamp: Date.now()
        };
        c[s] = _;
      }
      u[a] = {
        id: a,
        proc_name: s,
        call_type: o === i.PROCEDURE_BLOCK_TYPES.CALL_RETURN ? "call_return" : "call",
        disabled: false
      };
      return void _.callers_id.push(a);
    }
  });
  if (!n) {
    return t;
  }
  var l = (0, o.add_procedure_and_generate_rename_map)({
    procedure_manager: e,
    procedure_to_add: c,
    callers_to_add: u
  });
  return 0 === Object.keys(l).length ? t : a(t, l);
};
exports.rename_procedures_in_xml = a;
exports.delete_from_xml = function (e, t) {
  var n = [];
  var o = function (t) {
    var o = t.getAttribute("type");
    if (o !== i.PROCEDURE_BLOCK_TYPES.DEF) {
      if (o === i.PROCEDURE_BLOCK_TYPES.CALL_NORETURN || o === i.PROCEDURE_BLOCK_TYPES.CALL_RETURN) {
        a = t.getAttribute("id");
        (0, r.assert)(a);
        e.delete_caller(a);
      }
    } else {
      var a = t.getAttribute("id");
      (0, r.assert)(a);
      var s = e.delete_procedure_def(a);
      if (s) {
        n.push(s.def_id);
      }
    }
  };
  o(t);
  Array.from(t.querySelectorAll("block")).forEach(o);
  return n;
};