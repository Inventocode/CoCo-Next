/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：227
 */

"use strict"

export { g as d }
export { _ as c }
export { v as b }
export { E as a }
export { O as e }
import RegeneratorRuntime = require("regenerator-runtime");
var o = function __importDefault(module) {
  var defaultExport = module && module.__esModule ? function () {
    return module.default
  } : function () {
    return module
  }
  Object.defineProperty(defaultExport, "a", {
    enumerable: true,
    get: defaultExport
  })
  return defaultExport
}(RegeneratorRuntime)
import i = require("../7");
import a = require("../17/index");
import s = require("./724/index");
import c = require("./723");
import l = require("../../../../../src/shared/events/actions");
import u = require("../../../../../src/shared/events/messages-wrapper");
import d = require("../15");
import p = require("../9");
import f = require("../141/index");
import h = require("../../../../../src/editor/block/toolbox");
import m = require("../26/index");
function g() {
  Object.keys(m.h()).forEach(function (e) {
    _(e)
  })
}
function _(e) {
  a.Blink.mainWorkspace.register_toolbox_category_callback(e, function () {
    var t = m.g.getToolbox()
    var n = E()
    return t && n ? b(e, n, false) : []
  })
  a.Blink.mainWorkspace.register_toolbox_category_callback("ANY_" + e, function () {
    return m.g.getToolbox() ? b(e, "", true) : []
  })
}
function v(e) {
  var l$d$dispatch = l.d.dispatch
  c.register_procedure_blocks(a.Blink, e, function () {
    var n = i.a(o.a.mark(function n(r) {
      var i
      var a
      var /* [auto-meaningful-name] */a$name
      return o.a.wrap(function (n) {
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
                l$d$dispatch(u.lj({
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
                    if (!d.j(e)) {
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
    var n = i.a(o.a.mark(function n(r) {
      var i
      var a
      return o.a.wrap(function (n) {
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
                l$d$dispatch(u.lj({
                  title: "parameterDialogTitle",
                  placeholder: "parameterDialogPlaceholder",
                  maxLength: 20,
                  validator: function (e) {
                    return "" === e ? "emptyParameterName" : a.params.find(function (t) {
                      return t.param_name === e
                    }) ? "parameterExists" : e[0].match(/[0-9_]/) ? "invalidVariableFirstChar" : d.j(e) ? undefined : "invalidVariableName"
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
  a.Blink.mainWorkspace.register_toolbox_category_callback("PROCEDURE", function () {
    return e().get_all_procedures_xml()
  })
  s.register_default_procedure_events(a.Blink.mainWorkspace, e)
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
  return Array.from(a.Blink.xml.text_to_dom(o).children)
}
var y = ""
function E() {
  return y
}
function O(e) {
  y = e
  var t = l.d.getState()
  var n = t.project.screens.get(t.project.currentScreenIndex)
  var r = p.Fb(e) || h.d(e)
  f.a("BlockCategoryClick", {
    isCooperation: !!t.oTState.collWorkId,
    screenId: (null === n || undefined === n ? undefined : n.id) || "",
    screenName: (null === n || undefined === n ? undefined : n.title) || "",
    blockCategory: r
  })
}
export default E
