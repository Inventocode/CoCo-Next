"use strict";

Object.defineProperty(exports, "__esModule", {
  value: !0
});
exports.ProcedurePlugin = void 0;
var r = require("tslib");
var i = (0, r.__importStar)(require("../../../17/533"));
var o = require("../../../301/173");
var a = require("../../../17/640/index");
var s = require("../../../17/642");
var c = require("../../../17/497/387");
var u = (0, r.__importStar)(require("./1134"));
var l = (0, r.__importStar)(require("./1133"));
var f = function (e) {
  function t() {
    return null !== e && e.apply(this, arguments) || this;
  }
  (0, r.__extends)(t, e);
  t.prototype.before_handle_event_group = function (e) {
    for (var t = new Map(), n = 0; n < e.length;) {
      var r = e[n];
      if (void 0 !== r) {
        if (r.type !== i.BlockEventType.CREATE) {
          if (r.type === i.BlockEventType.CHANGE) {
            if ("procedure_rename" !== r.element && "field" !== r.element) {
              n++;
              continue;
            }
            u = r.get_block_id();
            var a = t.get(u);
            if (void 0 !== a) {
              var s = r.get_new_value();
              var c = e[a].get_element_json();
              if ("string" === typeof s) {
                c.blocks[u].fields[o.PROCEDURE_BLOCK_FIELD_NAMES.PROCEDURE_NAME] = s;
              }
              e.splice(n, 1);
              continue;
            }
          }
          n++;
        } else {
          var u = r.get_block_id();
          var l = r.get_element_json();
          if (l.blocks[u]) {
            var f = l.blocks[u].type;
            if (!(f !== o.PROCEDURE_BLOCK_TYPES.DEF && f !== o.PROCEDURE_BLOCK_TYPES.CALL_RETURN && f !== o.PROCEDURE_BLOCK_TYPES.CALL_NORETURN)) {
              t.set(r.get_block_id(), n);
            }
          }
          n++;
        }
      }
    }
  };
  t.prototype.analyze_op_and_update = function (e, t, n) {
    var r = this;
    this.procedure_manager = n;
    this.ws_json = t;
    var i = u.decompose_and_sort_op(e);
    if (i) {
      var o = new Map();
      var a = new Map();
      var s = new Map();
      var c = [];
      var f = [];
      var d = new Map();
      i.pick_ops.forEach(function (e) {
        var t = u.analyze_path("pick", e.path);
        if (void 0 !== t) {
          var n = t.event_type;
          var r = t.normalized_path;
          switch (n) {
            case l.EventType.DISCONNECT:
              c.push(r);
              break;
            case l.EventType.DELETE_BLOCK:
              var i = o.get(r.target_id);
              if (void 0 === i) {
                o.set(r.target_id, -1);
              } else {
                o.set(r.target_id, i - 1);
              }
              a.set(r.target_id, r);
              break;
            default:
              return;
          }
        }
      });
      i.drop_ops.forEach(function (e) {
        var t = u.analyze_path("drop", e.path);
        if (void 0 !== t) {
          var n = t.event_type;
          var r = t.normalized_path;
          switch (n) {
            case l.EventType.CREATE_BLOCK:
              var i = o.get(r.target_id);
              if (void 0 === i) {
                o.set(r.target_id, 1);
              } else {
                o.set(r.target_id, i + 1);
              }
              s.set(r.target_id, r);
              break;
            case l.EventType.CONNECT:
              f.push(r);
              break;
            case l.EventType.EDIT_BLOCK_FIELD:
              var a = e.operation.i;
              if ("string" !== typeof a) {
                break;
              }
              d.set(r, a);
              break;
            default:
              return;
          }
        }
      });
      o.forEach(function (e, t) {
        switch (e) {
          case 1:
            var n = s.get(t);
            if (n) {
              r.handle_create(n);
            }
            break;
          case -1:
            var i = a.get(t);
            if (i) {
              r.handle_delete(i);
            }
            break;
          case 0:
            var o = s.get(t);
            if (o) {
              r.handle_mutate(o);
            }
        }
      });
      d.forEach(function (e, t) {
        r.handle_rename(t, e);
      });
      c.forEach(function (e) {
        r.handle_disconnect(e);
      });
      f.forEach(function (e) {
        r.handle_connect(e);
      });
    }
  };
  t.prototype.handle_create = function (e) {
    var t = e.target_id;
    var n = this.ws_json.blocks[t];
    if (n.type === o.PROCEDURE_BLOCK_TYPES.DEF) {
      var r = n.fields[o.PROCEDURE_BLOCK_FIELD_NAMES.PROCEDURE_NAME];
      (0, c.assert)(r);
      var i = this.procedure_manager.get_procedure_by_def(t);
      if (i) {
        if (i.name !== r) {
          this.procedure_manager.rename_procedure(i.name, r);
        }
        i.disabled = !1;
        i.valid = !0;
        i.base_name = i.name;
      } else {
        i = this.procedure_manager.add_procedure_def(r, n.id);
      }
      this.reload_params(i, t);
    }
    if (n.type === o.PROCEDURE_BLOCK_TYPES.CALL_RETURN || n.type === o.PROCEDURE_BLOCK_TYPES.CALL_NORETURN) {
      var a = n.fields[o.PROCEDURE_BLOCK_FIELD_NAMES.PROCEDURE_NAME];
      (0, c.assert)(a);
      this.procedure_manager.add_caller(a, n.id, n.type === o.PROCEDURE_BLOCK_TYPES.CALL_RETURN ? "call_return" : "call");
    }
  };
  t.prototype.handle_delete = function (e) {
    var t = e.target_id;
    if (this.procedure_manager.get_procedure_by_def(t)) {
      this.procedure_manager.delete_procedure_def(t);
    } else {
      if (this.procedure_manager.get_procedure_by_caller_id(t)) {
        this.procedure_manager.delete_caller(t);
      }
    }
  };
  t.prototype.handle_connect = function (e) {
    if (l.is_path_3(e)) {
      for (var t = e.target_id, n = this.ws_json.blocks[t]; n.parent_id;) {
        n = this.ws_json.blocks[n.parent_id];
      }
      if (n.type === o.PROCEDURE_BLOCK_TYPES.DEF) {
        this.reload_return_count(n.id);
      }
    }
  };
  t.prototype.handle_disconnect = function (e) {
    if (l.is_path_3(e)) {
      var t = e.property;
      var n = e.target_id;
      var r = this.json.get_block_data_by_id(this.ws_json, t);
      if (r) {
        var i = Object.keys(r.blocks).filter(function (e) {
          return r.blocks[e].type === o.PROCEDURE_BLOCK_TYPES.RETURN && void 0 !== r.blocks[e].shadows.VALUE;
        }).length;
        if (!(i < 1)) {
          for (var a = this.ws_json.blocks[n]; a.parent_id;) {
            a = this.ws_json.blocks[a.parent_id];
          }
          if (a.type === o.PROCEDURE_BLOCK_TYPES.DEF) {
            var s = this.procedure_manager.get_procedure_by_def(a.id);
            (0, c.assert)(s);
            this.procedure_manager.change_return_count(s.name, -1 * i);
          }
        }
      }
    }
  };
  t.prototype.handle_mutate = function (e) {
    var t = e.target_id;
    if (this.ws_json.blocks[t].type === o.PROCEDURE_BLOCK_TYPES.DEF) {
      var n = this.procedure_manager.get_procedure_by_def(t);
      (0, c.assert)(n);
      this.reload_params(n, t);
    }
  };
  t.prototype.handle_rename = function (e, t) {
    var n = e.target_id;
    if (this.ws_json.blocks[n].type === o.PROCEDURE_BLOCK_TYPES.DEF) {
      var r = this.procedure_manager.get_procedure_by_def(n);
      (0, c.assert)(r);
      if (r.name !== t) {
        this.procedure_manager.rename_procedure(r.name, t);
      }
    }
  };
  t.prototype.reload_params = function (e, t) {
    var n = this;
    var r = this.ws_json.connections[t];
    var i = Object.keys(r);
    var a = [];
    i.forEach(function (e) {
      var t = r[e];
      if ("input" === t.type && t.input_name.startsWith(o.PROCEDURE_BLOCK_INPUT_NAMES.PARAM_PREFIX)) {
        var i = n.ws_json.blocks[e];
        var s = i.fields[o.PROCEDURE_BLOCK_FIELD_NAMES.PARAM_NAME];
        var c = i.fields[o.PROCEDURE_BLOCK_FIELD_NAMES.PARAM_DEFAULT_VALUE].slice(1);
        a.push({
          param_name: s,
          default_value: c || void 0
        });
      }
    });
    e.params = a;
  };
  t.prototype.reload_return_count = function (e) {
    var t = this.json.get_block_data_by_id(this.ws_json, e);
    if (t) {
      var n = Object.keys(t.blocks).filter(function (e) {
        return t.blocks[e].type === o.PROCEDURE_BLOCK_TYPES.RETURN && void 0 !== t.blocks[e].shadows.VALUE;
      }).length;
      var r = this.procedure_manager.get_procedure_by_def(e);
      (0, c.assert)(r);
      r.return_count = n;
    }
  };
  (0, r.__decorate)([(0, a.lazy_inject)(s.BINDING.json)], t.prototype, "json", void 0);
  return t;
}(require("./1135").BasePlugin);
exports.ProcedurePlugin = f;