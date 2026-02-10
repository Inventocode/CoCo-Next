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
import * as /* [auto-meaningful-name] */RegeneratorRuntime from "regenerator-runtime"
import /* [auto-meaningful-name] */RegeneratorRuntime1 from "regenerator-runtime"
import * as i from "../7"
import * as /* [auto-meaningful-name] */$$_17_index from "../17/index"
import * as /* [auto-meaningful-name] */$_733 from "./733"
import * as /* [auto-meaningful-name] */$_732 from "./732"
import * as /* [auto-meaningful-name] */$$_37_index from "../37/index"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_$$_src_editor_redux_common_actions from "../../../../../src/editor/redux/common/actions"
import * as /* [auto-meaningful-name] */$$_15 from "../../../../../src/shared/tools"
import * as p from "../9"
import * as /* [auto-meaningful-name] */$$_141_index from "../141/index"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_$$_src_editor_block_toolbox from "../../../../../src/editor/block/toolbox"
import * as /* [auto-meaningful-name] */$$_26_index from "../26/index"
function g() {
  Object.keys($$_26_index.h()).forEach(function (e) {
    _(e)
  })
}
function _(e) {
  $$_17_index.Blink.mainWorkspace.register_toolbox_category_callback(e, function () {
    var t = $$_26_index.g.getToolbox()
    var n = E()
    return t && n ? b(e, n, false) : []
  })
  $$_17_index.Blink.mainWorkspace.register_toolbox_category_callback("ANY_" + e, function () {
    return $$_26_index.g.getToolbox() ? b(e, "", true) : []
  })
}
function v(e) {
  var /* [auto-meaningful-name] */$$_37_index$d$dispatch = $$_37_index.d.dispatch
  $_732.register_procedure_blocks($$_17_index.Blink, e, function () {
    var n = i.a(RegeneratorRuntime1.mark(function n(r) {
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
                $$_37_index$d$dispatch($$_$$_$$_$$_$$_src_editor_redux_common_actions.lj({
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
                    if (!$$_15.j(e)) {
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
    var n = i.a(RegeneratorRuntime1.mark(function n(r) {
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
                $$_37_index$d$dispatch($$_$$_$$_$$_$$_src_editor_redux_common_actions.lj({
                  title: "parameterDialogTitle",
                  placeholder: "parameterDialogPlaceholder",
                  maxLength: 20,
                  validator: function (e) {
                    return "" === e ? "emptyParameterName" : a.params.find(function (t) {
                      return t.param_name === e
                    }) ? "parameterExists" : e[0].match(/[0-9_]/) ? "invalidVariableFirstChar" : $$_15.j(e) ? undefined : "invalidVariableName"
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
  $$_17_index.Blink.mainWorkspace.register_toolbox_category_callback("PROCEDURE", function () {
    return e().get_all_procedures_xml()
  })
  $_733.register_default_procedure_events($$_17_index.Blink.mainWorkspace, e)
}
function b(e, t, n) {
  var r = function (e, t, n) {
    return p.Cb(e, t, n)
  }(e, t, n)
  var o = "<xml>"
  r.forEach(function (e) {
    o += e
  })
  o += "</xml>"
  return Array.from($$_17_index.Blink.xml.text_to_dom(o).children)
}
var y = ""
function E() {
  return y
}
function O(e) {
  y = e
  var t = $$_37_index.d.getState()
  var n = t.project.screens.get(t.project.currentScreenIndex)
  var r = p.Fb(e) || $$_$$_$$_$$_$$_src_editor_block_toolbox.d(e)
  $$_141_index.a("BlockCategoryClick", {
    isCooperation: !!t.oTState.collWorkId,
    screenId: (null === n || undefined === n ? undefined : n.id) || "",
    screenName: (null === n || undefined === n ? undefined : n.title) || "",
    blockCategory: r
  })
}
export default E
