"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.find_caller_blocks = exports.add_procedure_and_generate_rename_map = exports.get_legal_procedure_name = undefined;
var r = require("../301/173");
function i(e) {
  if (e.length > 15) {
    var t = parseInt(e.substring(0, 15), 10);
    var n = parseInt(e.substring(15, e.length), 10) + 1;
    var r = n.toString();
    if (n > Math.pow(e.length - 15, 10) - 1) {
      t += 1;
      r = r.substring(1, r.length);
    }
    return t + r;
  }
  return parseInt(e, 10) + 1;
}
function o(e, t) {
  for (; t.includes(e);) {
    var n = e.match(/^(.*?)(\d+)$/);
    if (n) {
      e = n[1] + i(n[2]);
    } else {
      e += "1";
    }
  }
  return e;
}
exports.get_legal_procedure_name = o;
exports.add_procedure_and_generate_rename_map = function (e) {
  var t = e.procedure_manager;
  var n = e.procedure_to_add;
  var r = e.callers_to_add;
  var i = {};
  Object.keys(n).forEach(function (e) {
    var a = t.get_procedures();
    var s = t.get_callers();
    var c = t.get_procedure_by_def(n[e].def_id);
    if (c) {
      n[e].callers_id.forEach(function (e) {
        t.add_caller(c.name, e, r[e].call_type);
      });
    } else if (n[e].def_id) {
      if (!a[e]) {
        a[e] = n[e];
        return void a[e].callers_id.forEach(function (e) {
          s[e] = r[e];
        });
      }
      var u = o(e, t.get_occupied_procedure_names());
      i[e] = u;
      var l = n[e];
      l.name = u;
      l.base_name = u;
      l.callers_id.forEach(function (e) {
        var t = r[e];
        t.proc_name = u;
        s[e] = t;
      });
      a[u] = l;
    } else {
      n[e].callers_id.forEach(function (n) {
        t.add_caller(e, n, r[n].call_type);
      });
    }
  });
  return i;
};
exports.find_caller_blocks = function (e, t) {
  var n = Object.keys(e.blocks);
  var i = [];
  n.forEach(function (n) {
    var o = e.blocks[n];
    if (!(o.type !== r.PROCEDURE_BLOCK_TYPES.CALL_RETURN && o.type !== r.PROCEDURE_BLOCK_TYPES.CALL_NORETURN || o.fields[r.PROCEDURE_BLOCK_FIELD_NAMES.PROCEDURE_NAME] !== t)) {
      i.push(e.blocks[n]);
    }
  });
  return i;
};