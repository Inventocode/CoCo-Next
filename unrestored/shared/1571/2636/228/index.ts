/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：228
 */

"use strict"

export { g as d }
export { _ as c }
export { v as b }
export { E as a }
export { O as e }
import * as /* [auto-meaningful-name] */RegeneratorRuntime from /* 1 */"regenerator-runtime"
import /* [auto-meaningful-name] */RegeneratorRuntime1 from /* 1 */"regenerator-runtime"
import * as /* [auto-meaningful-name] */Module_7 from /* 7 */"../7"
import * as /* [auto-meaningful-name] */Src_shared_packages_Crc_blink_src_index from /* 17 */"../../../../../src/shared/packages/@crc/blink/src/index"
import * as /* [auto-meaningful-name] */Module_733 from /* 733 */"./733/index"
import * as /* [auto-meaningful-name] */Src_shared_packages_Crc_blink_src_procedure_blocks from /* 732 */"../../../../../src/shared/packages/@crc/blink/src/procedure/blocks"
import * as /* [auto-meaningful-name] */Module_37 from /* 37 */"../37/index"
import * as /* [auto-meaningful-name] */Src_editor_redux_common_actions from /* 2 */"../../../../../src/editor/redux/common/actions"
import * as /* [auto-meaningful-name] */Src_shared_tools_index from /* 15 */"../../../../../src/shared/tools/index"
import * as /* [auto-meaningful-name] */Module_9 from /* 9 */"../9"
import * as /* [auto-meaningful-name] */Module_141 from /* 141 */"../141/index"
import * as /* [auto-meaningful-name] */Src_editor_block_toolbox from /* 261 */"../../../../../src/editor/block/toolbox"
import * as /* [auto-meaningful-name] */Module_26 from /* 26 */"../26/index"
function g() {
  Object.keys(Module_26.h()).forEach(function (e) {
    _(e)
  })
}
function _(e) {
  Src_shared_packages_Crc_blink_src_index.Blink.mainWorkspace.register_toolbox_category_callback(e, function () {
    var t = Module_26.g.getToolbox()
    var n = E()
    return t && n ? b(e, n, false) : []
  })
  Src_shared_packages_Crc_blink_src_index.Blink.mainWorkspace.register_toolbox_category_callback("ANY_" + e, function () {
    return Module_26.g.getToolbox() ? b(e, "", true) : []
  })
}
function v(e) {
  var /* [auto-meaningful-name] */Module_37$d$dispatch = Module_37.d.dispatch
  Src_shared_packages_Crc_blink_src_procedure_blocks.register_procedure_blocks(Src_shared_packages_Crc_blink_src_index.Blink, e, function () {
    var n = Module_7.a(RegeneratorRuntime1.mark(function n(r) {
      var i
      var a
      var /* [auto-meaningful-name] */a$name
      return RegeneratorRuntime1.wrap(function (n) {
        for (;;) {
          switch (n.prev = n.next) {
            case 0:
              if (i = e(), a = i.get_procedure_by_def(r)) {
                n.next = 4
                break
              }
              return n.abrupt("return")
            case 4:
              a$name = a.name
              return n.abrupt("return", new Promise(function (e) {
                Module_37$d$dispatch(Src_editor_redux_common_actions.lj({
                  title: "procedureDialogTitle",
                  defaultValue: a$name,
                  placeholder: "procedureDialogPlaceholder",
                  maxLength: 20,
                  validator: function (e) {
                    if ("" === e) {
                      return "emptyProcedureName"
                    }
                    var t = i.get_occupied_procedure_names()
                    t.splice(t.indexOf(a$name), 1)
                    if (t.includes(e)) {
                      return "procedureNameExists"
                    }
                    if (e[0].match(/[0-9_]/)) {
                      return "invalidVariableFirstChar"
                    }
                    if (!Src_shared_tools_index.j(e)) {
                      return "invalidVariableName"
                    }
                    return ["函数", "函數", "function"].includes(e) ? "preservedProcedureName" : undefined
                  },
                  confirmCallback: function (t) {
                    if (t !== a$name) {
                      e(t)
                    }
                    e(undefined)
                  },
                  cancelCallback: function () {
                    return e(undefined)
                  }
                }))
              }))
            case 6:
            case "end":
              return n.stop()
          }
        }
      }, n)
    }))
    return function (e) {
      return n.apply(this, arguments)
    }
  }(), function () {
    var n = Module_7.a(RegeneratorRuntime1.mark(function n(r) {
      var i
      var a
      return RegeneratorRuntime1.wrap(function (n) {
        for (;;) {
          switch (n.prev = n.next) {
            case 0:
              if (i = e(), a = i.get_procedure_by_def(r)) {
                n.next = 4
                break
              }
              throw Error("Trying to add param to undefined procedure")
            case 4:
              return n.abrupt("return", new Promise(function (e) {
                Module_37$d$dispatch(Src_editor_redux_common_actions.lj({
                  title: "parameterDialogTitle",
                  placeholder: "parameterDialogPlaceholder",
                  maxLength: 20,
                  validator: function (e) {
                    return "" === e ? "emptyParameterName" : a.params.find(function (t) {
                      return t.param_name === e
                    }) ? "parameterExists" : e[0].match(/[0-9_]/) ? "invalidVariableFirstChar" : Src_shared_tools_index.j(e) ? undefined : "invalidVariableName"
                  },
                  confirmCallback: function (t) {
                    return e({
                      param_name: t,
                      default_value: undefined
                    })
                  },
                  cancelCallback: function () {
                    return e(undefined)
                  }
                }))
              }))
            case 5:
            case "end":
              return n.stop()
          }
        }
      }, n)
    }))
    return function (e) {
      return n.apply(this, arguments)
    }
  }())
  Src_shared_packages_Crc_blink_src_index.Blink.mainWorkspace.register_toolbox_category_callback("PROCEDURE", function () {
    return e().get_all_procedures_xml()
  })
  Module_733.register_default_procedure_events(Src_shared_packages_Crc_blink_src_index.Blink.mainWorkspace, e)
}
function b(e, t, n) {
  var r = function (e, t, n) {
    return Module_9.Cb(e, t, n)
  }(e, t, n)
  var o = "<xml>"
  r.forEach(function (e) {
    o += e
  })
  o += "</xml>"
  return Array.from(Src_shared_packages_Crc_blink_src_index.Blink.xml.text_to_dom(o).children)
}
var y = ""
function E() {
  return y
}
function O(e) {
  y = e
  var t = Module_37.d.getState()
  var n = t.project.screens.get(t.project.currentScreenIndex)
  var r = Module_9.Fb(e) || Src_editor_block_toolbox.d(e)
  Module_141.a("BlockCategoryClick", {
    isCooperation: !!t.oTState.collWorkId,
    screenId: (null === n || undefined === n ? undefined : n.id) || "",
    screenName: (null === n || undefined === n ? undefined : n.title) || "",
    blockCategory: r
  })
}
export default E
