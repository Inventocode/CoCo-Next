/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：754
 */

"use strict"

Object.defineProperty(exports, "__esModule", {
  value: true
})
exports.find_caller_blocks = exports.add_procedure_and_generate_rename_map = exports.get_legal_procedure_name = undefined
var r = require("./173")
function i(e) {
  if (e.length > 15) {
    var t = parseInt(e.substring(0, 15), 10)
    var n = parseInt(e.substring(15, e.length), 10) + 1
    var r = n.toString()
    if (n > Math.pow(e.length - 15, 10) - 1) {
      t += 1
      r = r.substring(1, r.length)
    }
    return t + r
  }
  return parseInt(e, 10) + 1
}
function o(e, t) {
  for (; t.includes(e);) {
    var n = e.match(/^(.*?)(\d+)$/)
    if (n) {
      e = n[1] + i(n[2])
    } else {
      e += "1"
    }
  }
  return e
}
exports.get_legal_procedure_name = o
exports.add_procedure_and_generate_rename_map = function (e) {
  var /* [auto-meaningful-name] */e$procedure_manager = e.procedure_manager
  var /* [auto-meaningful-name] */e$procedure_to_add = e.procedure_to_add
  var /* [auto-meaningful-name] */e$callers_to_add = e.callers_to_add
  var i = {}
  Object.keys(e$procedure_to_add).forEach(function (e) {
    var a = e$procedure_manager.get_procedures()
    var s = e$procedure_manager.get_callers()
    var c = e$procedure_manager.get_procedure_by_def(e$procedure_to_add[e].def_id)
    if (c) {
      e$procedure_to_add[e].callers_id.forEach(function (e) {
        e$procedure_manager.add_caller(c.name, e, e$callers_to_add[e].call_type)
      })
    } else if (e$procedure_to_add[e].def_id) {
      if (!a[e]) {
        a[e] = e$procedure_to_add[e]
        return void a[e].callers_id.forEach(function (e) {
          s[e] = e$callers_to_add[e]
        })
      }
      var u = o(e, e$procedure_manager.get_occupied_procedure_names())
      i[e] = u
      var l = e$procedure_to_add[e]
      l.name = u
      l.base_name = u
      l.callers_id.forEach(function (e) {
        var t = e$callers_to_add[e]
        t.proc_name = u
        s[e] = t
      })
      a[u] = l
    } else {
      e$procedure_to_add[e].callers_id.forEach(function (n) {
        e$procedure_manager.add_caller(e, n, e$callers_to_add[n].call_type)
      })
    }
  })
  return i
}
exports.find_caller_blocks = function (e, t) {
  var n = Object.keys(e.blocks)
  var i = []
  n.forEach(function (n) {
    var o = e.blocks[n]
    if (!(o.type !== r.PROCEDURE_BLOCK_TYPES.CALL_RETURN && o.type !== r.PROCEDURE_BLOCK_TYPES.CALL_NORETURN || o.fields[r.PROCEDURE_BLOCK_FIELD_NAMES.PROCEDURE_NAME] !== t)) {
      i.push(e.blocks[n])
    }
  })
  return i
}
