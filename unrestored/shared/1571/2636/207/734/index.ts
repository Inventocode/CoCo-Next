/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：734
 */

"use strict"

Object.defineProperty(exports, "__esModule", {
  value: true
})
exports.rename_procedures_in_json = exports.delete_from_json = exports.load_from_json = undefined
var r = require("./387")
var i = require("../../1058/173")
var o = require("../../1058/762")
function a(e, t) {
  return e.fields[t]
}
function s(e) {
  var /* [auto-meaningful-name] */e$procedure_manager = e.procedure_manager
  var /* [auto-meaningful-name] */e$workspace_json = e.workspace_json
  var /* [auto-meaningful-name] */e$should_rename = e.should_rename
  var /* [auto-meaningful-name] */e$block_id = e.block_id
  var /* [auto-meaningful-name] */e$procedure_to_add = e.procedure_to_add
  var u = e$workspace_json.blocks[e$block_id]
  if (u.type === i.PROCEDURE_BLOCK_TYPES.DEF) {
    var l = a(u, i.PROCEDURE_BLOCK_FIELD_NAMES.PROCEDURE_NAME);
    (0, r.assert)(l)
    var f = e$workspace_json.connections[e$block_id]
    var d = Object.keys(f).filter(function (e) {
      var t = f[e]
      return "input" === t.type && t.input_name.startsWith(i.PROCEDURE_BLOCK_INPUT_NAMES.PARAM_PREFIX)
    }).sort(function (e, t) {
      var n = f[e]
      var o = f[t];
      (0, r.assert)("input" === n.type && "input" === o.type)
      return Number(n.input_name.slice(i.PROCEDURE_BLOCK_INPUT_NAMES.PARAM_PREFIX.length)) - Number(o.input_name.slice(i.PROCEDURE_BLOCK_INPUT_NAMES.PARAM_PREFIX.length))
    }).map(function (e) {
      var t = e$workspace_json.blocks[e];
      (0, r.assert)(t && t.type === i.PROCEDURE_BLOCK_TYPES.PARAM_ON_BLOCK)
      var o = a(t, i.PROCEDURE_BLOCK_FIELD_NAMES.PARAM_NAME);
      (0, r.assert)(o)
      return {
        param_name: o,
        default_value: a(t, i.PROCEDURE_BLOCK_FIELD_NAMES.PARAM_DEFAULT_VALUE)
      }
    })
    var /* [auto-meaningful-name] */functionETNRVarIIfRRT$blocksNI$pushT$blocksNIfT$connectionsNObject$keysT$connectionsN$forEachFunctionNI$push$applyIETNRReturnIE$workspace_jsonE$block_idFunctionEReturnE$typeI$PROCEDURE_BLOCK_TYPES$RETURNObject$keysE$shadows$someFunctionEReturnVALUEE$length = function e(t, n, r) {
      var i = []
      if (!(r && !r(t.blocks[n]))) {
        i.push(t.blocks[n])
      }
      if (t.connections[n]) {
        Object.keys(t.connections[n]).forEach(function (n) {
          i.push.apply(i, e(t, n, r))
        })
      }
      return i
    }(e$workspace_json, e$block_id, function (e) {
      return e.type === i.PROCEDURE_BLOCK_TYPES.RETURN && Object.keys(e.shadows).some(function (e) {
        return "VALUE" === e
      })
    }).length
    if (!e$should_rename) {
      var p = e$procedure_manager.add_procedure_def(l, e$block_id)
      p.params = d
      return void (p.return_count = functionETNRVarIIfRRT$blocksNI$pushT$blocksNIfT$connectionsNObject$keysT$connectionsN$forEachFunctionNI$push$applyIETNRReturnIE$workspace_jsonE$block_idFunctionEReturnE$typeI$PROCEDURE_BLOCK_TYPES$RETURNObject$keysE$shadows$someFunctionEReturnVALUEE$length)
    }
    var _ = e$procedure_to_add[l]
    if (!_) {
      _ = {
        def_id: e$block_id,
        disabled: true,
        name: l,
        base_name: l,
        params: [],
        callers_id: [],
        return_count: 0,
        valid: true,
        created_timestamp: Date.now()
      }
      e$procedure_to_add[l] = _
    }
    _.def_id = e$block_id
    _.disabled = false
    _.params = d
    _.return_count = functionETNRVarIIfRRT$blocksNI$pushT$blocksNIfT$connectionsNObject$keysT$connectionsN$forEachFunctionNI$push$applyIETNRReturnIE$workspace_jsonE$block_idFunctionEReturnE$typeI$PROCEDURE_BLOCK_TYPES$RETURNObject$keysE$shadows$someFunctionEReturnVALUEE$length
  }
}
function c(e, t) {
  var n = [i.PROCEDURE_BLOCK_TYPES.DEF, i.PROCEDURE_BLOCK_TYPES.CALL_RETURN, i.PROCEDURE_BLOCK_TYPES.CALL_NORETURN]
  Object.keys(e.blocks).forEach(function (r) {
    var o = e.blocks[r]
    if (!(n.indexOf(o.type) < 0)) {
      var a = o.fields[i.PROCEDURE_BLOCK_FIELD_NAMES.PROCEDURE_NAME]
      if (a && t[a]) {
        o.fields[i.PROCEDURE_BLOCK_FIELD_NAMES.PROCEDURE_NAME] = t[a]
      }
    }
  })
  return e
}
exports.load_from_json = function (e, t, n) {
  var u = {}
  var l = {}
  Object.keys(t.blocks).forEach(function (o) {
    s({
      procedure_manager: e,
      procedure_to_add: u,
      workspace_json: t,
      block_id: o,
      should_rename: n
    });
    (function (e) {
      var /* [auto-meaningful-name] */e$procedure_manager = e.procedure_manager
      var /* [auto-meaningful-name] */e$workspace_json = e.workspace_json
      var /* [auto-meaningful-name] */e$should_rename = e.should_rename
      var /* [auto-meaningful-name] */e$block_id = e.block_id
      var /* [auto-meaningful-name] */e$procedure_to_add = e.procedure_to_add
      var /* [auto-meaningful-name] */e$callers_to_add = e.callers_to_add
      var l = e$workspace_json.blocks[e$block_id]
      if (l.type === i.PROCEDURE_BLOCK_TYPES.CALL_NORETURN || l.type === i.PROCEDURE_BLOCK_TYPES.CALL_RETURN) {
        var f = a(l, i.PROCEDURE_BLOCK_FIELD_NAMES.PROCEDURE_NAME);
        (0, r.assert)(f)
        var d = l.mutation.match(/<procedures_2_parameter_shadow[^>]+><\/procedures_2_parameter_shadow>/g)
        var h = []
        if (d) {
          h = Array.from(d).map(function (e) {
            var t = e.match(/ name="([^"]+)"/);
            (0, r.assert)(t && 2 === t.length, "Trying to extract param name from invalid procedures_2_parameter_shadow: " + e)
            return {
              param_name: t[1]
            }
          })
        }
        if (e$should_rename) {
          var p = e$procedure_to_add[f]
          if (!p) {
            var _ = l.mutation.match(/def_id="([^"]+)"/)
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
            }
            e$procedure_to_add[f] = p
          }
          e$callers_to_add[e$block_id] = {
            id: e$block_id,
            proc_name: f,
            call_type: l.type === i.PROCEDURE_BLOCK_TYPES.CALL_RETURN ? "call_return" : "call",
            disabled: false
          }
          p.callers_id.push(e$block_id)
        } else {
          if (!e$procedure_manager.get_procedure_by_name(f)) {
            var A = e$procedure_manager.add_procedure_def(f, "")
            A.params = h
            A.disabled = true
          }
          e$procedure_manager.add_caller(f, e$block_id, l.type === i.PROCEDURE_BLOCK_TYPES.CALL_RETURN ? "call_return" : "call")
        }
      }
    })({
      procedure_manager: e,
      procedure_to_add: u,
      workspace_json: t,
      block_id: o,
      should_rename: n,
      callers_to_add: l
    })
  })
  if (!n) {
    return t
  }
  var f = (0, o.add_procedure_and_generate_rename_map)({
    procedure_manager: e,
    procedure_to_add: u,
    callers_to_add: l
  })
  return c(t, f)
}
exports.delete_from_json = function (e, t) {
  var n = []
  Object.keys(t.blocks).forEach(function (r) {
    !function (t) {
      var /* [auto-meaningful-name] */t$type = t.type
      if (t$type !== i.PROCEDURE_BLOCK_TYPES.DEF) {
        if (t$type === i.PROCEDURE_BLOCK_TYPES.CALL_NORETURN || t$type === i.PROCEDURE_BLOCK_TYPES.CALL_RETURN) {
          o = t.id
          e.delete_caller(o)
        }
      } else {
        var o = t.id
        var a = e.delete_procedure_def(o)
        if (a) {
          n.push(a.def_id)
        }
      }
    }(t.blocks[r])
  })
  return n
}
exports.rename_procedures_in_json = c
