/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：97
 */

"use strict"

export { g as b }
export { b as c }
export { I as g }
export { j as f }
export { N as d }
export { R as e }
export { k as a }
import * as /* [auto-meaningful-name] */RegeneratorRuntime from "regenerator-runtime"
import /* [auto-meaningful-name] */_RegeneratorRuntime from "regenerator-runtime"
import * as /* [auto-meaningful-name] */$_10_index from "./10/index"
import * as a from "./6"
import * as /* [auto-meaningful-name] */$_25_index from "./25/index"
import * as c from "./7"
import * as /* [auto-meaningful-name] */Lodash from "lodash"
import * as /* [auto-meaningful-name] */$_37_index from "./37/index"
import * as d from "./9"
import * as /* [auto-meaningful-name] */$_26_index from "./26/index"
import * as f from "./5"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_src_shared_widget_custom_storage from "../../../../src/shared/widget/custom/storage"
import * as /* [auto-meaningful-name] */$_37_375 from "./37/375"
function g(e) {
  return _.apply(this, arguments)
}
function _() {
  return (_ = c.a(_RegeneratorRuntime.mark(function e(t) {
    var /* [auto-meaningful-name] */r$common$userInfo
    var r
    var /* [auto-meaningful-name] */r$project
    var /* [auto-meaningful-name] */r$project$title
    var /* [auto-meaningful-name] */r$project$globalVariableList
    var /* [auto-meaningful-name] */r$project$globalArrayList
    var /* [auto-meaningful-name] */r$project$globalWidgetIds
    var /* [auto-meaningful-name] */r$project$globalObjectList
    var /* [auto-meaningful-name] */r$project$version
    var /* [auto-meaningful-name] */r$project$projectSource
    var y
    var C
    var T
    var S
    var A
    var I
    var j
    var N
    var R
    return _RegeneratorRuntime.wrap(function (e) {
      for (;;) {
        switch (e.prev = e.next) {
          case 0:
            r = $_37_index.d.getState()
            r$project = r.project
            r$project$title = r$project.title
            r$project$globalVariableList = r$project.globalVariableList
            r$project$globalArrayList = r$project.globalArrayList
            r$project$globalWidgetIds = r$project.globalWidgetIds
            r$project$globalObjectList = r$project.globalObjectList
            r$project$version = r$project.version
            r$project$projectSource = r$project.projectSource
            y = null === (r$common$userInfo = r.common.userInfo) || undefined === r$common$userInfo ? undefined : r$common$userInfo.id
            C = w(r.project.screens)
            T = r.project.screens.map(function (e) {
              return e.id
            }).toJSON()
            S = $_26_index.z.getWorkspacesRecord()
            A = E(S, r$project$globalWidgetIds)
            I = Lodash.cloneDeep(O(A))
            j = $$_$$_$$_$$_src_shared_widget_custom_storage.d()
            N = $$_$$_$$_$$_src_shared_widget_custom_storage.e()
            e.t0 = Lodash.cloneDeep
            e.t1 = y
            e.t2 = r$project$title
            e.t3 = r$project$version
            e.t4 = C
            e.t5 = T
            e.t6 = S
            e.next = 19
            return d.H()
          case 19:
            e.t7 = e.sent
            e.next = 22
            return d.I()
          case 22:
            e.t8 = e.sent
            e.next = 25
            return d.G()
          case 25:
            e.t9 = e.sent
            e.t10 = v()
            e.t11 = r$project$globalVariableList
            e.t12 = r$project$globalArrayList
            e.t13 = r$project$globalObjectList
            e.t14 = A
            e.t15 = I
            e.t16 = j
            e.t17 = N
            e.t18 = r$project$projectSource.tag
            e.t19 = r$project$projectSource.id
            e.t20 = {
              authorId: e.t1,
              title: e.t2,
              version: e.t3,
              screens: e.t4,
              screenIds: e.t5,
              blockly: e.t6,
              imageFileList: e.t7,
              soundFileList: e.t8,
              iconFileList: e.t9,
              fontFileList: e.t10,
              globalVariableList: e.t11,
              globalArrayList: e.t12,
              globalObjectList: e.t13,
              globalWidgetIds: e.t14,
              globalWidgets: e.t15,
              extensionWidgetList: e.t16,
              unsafeExtensionWidgetList: e.t17,
              sourceTag: e.t18,
              sourceId: e.t19
            }
            R = (0, e.t0)(e.t20)
            if (!t) {
              Object.keys(R.globalWidgets).forEach(function (e) {
                var t = R.globalWidgets[e]
                if (t.type === f.l) {
                  t.attributes.fields.forEach(function (e) {
                    e.value = ""
                  })
                }
              })
            }
            return e.abrupt("return", R)
          case 40:
          case "end":
            return e.stop()
        }
      }
    }, e)
  }))).apply(this, arguments)
}
function v() {
  var e = $_37_index.d.getState()
  var /* [auto-meaningful-name] */e$resource$fontFileList = e.resource.fontFileList
  var n = {}
  var /* [auto-meaningful-name] */e$project$screens = e.project.screens
  var o = []
  var i = {}
  e$resource$fontFileList.forEach(function (e) {
    n[e.id] = e
  })
  e$project$screens.forEach(function (e) {
    e.widgetIds.forEach(function (e) {
      var t = d.Bb(e)
      if ((null === t || undefined === t ? undefined : t.type) === f.H || (null === t || undefined === t ? undefined : t.type) === f.z || (null === t || undefined === t ? undefined : t.type) === f.w) {
        var /* [auto-meaningful-name] */t$attributes$fontFamily = t.attributes.fontFamily
        if (!i[t$attributes$fontFamily]) {
          if (n[t$attributes$fontFamily].cdnUrl) {
            o.push(n[t$attributes$fontFamily])
          }
          i[t$attributes$fontFamily] = true
        }
      }
      if (t && t.attributes && "EXTENSION_QUILL_RICH_TEXT_WIDGET" === t.type) {
        var /* [auto-meaningful-name] */t$attributes$content = t.attributes.content
        var s = undefined === t$attributes$content ? "" : t$attributes$content
        $_37_375.a(s).forEach(function (e) {
          if (!i[e]) {
            if (n[e].cdnUrl) {
              o.push(n[e])
            }
            i[e] = true
          }
        })
      }
    })
  })
  return o
}
function b() {
  return y.apply(this, arguments)
}
function y() {
  return (y = c.a(_RegeneratorRuntime.mark(function e() {
    var /* [auto-meaningful-name] */n$common$userInfo
    var n
    var /* [auto-meaningful-name] */n$project
    var /* [auto-meaningful-name] */n$project$title
    var /* [auto-meaningful-name] */n$project$globalVariableList
    var /* [auto-meaningful-name] */n$project$globalArrayList
    var /* [auto-meaningful-name] */n$project$globalWidgetIds
    var /* [auto-meaningful-name] */n$project$version
    var /* [auto-meaningful-name] */n$project$globalObjectList
    var _
    var v
    var b
    var y
    var E
    var I
    var j
    var N
    var R
    var k
    var x
    var D
    return _RegeneratorRuntime.wrap(function (e) {
      for (;;) {
        switch (e.prev = e.next) {
          case 0:
            n = $_37_index.d.getState()
            n$project = n.project
            n$project$title = n$project.title
            n$project$globalVariableList = n$project.globalVariableList
            n$project$globalArrayList = n$project.globalArrayList
            n$project$globalWidgetIds = n$project.globalWidgetIds
            n$project$version = n$project.version
            n$project$globalObjectList = n$project.globalObjectList
            _ = null === (n$common$userInfo = n.common.userInfo) || undefined === n$common$userInfo ? undefined : n$common$userInfo.id
            v = C(n.cloudSpace.cloudDictKeysList)
            b = S(n.cloudSpace.cloudTableColumnList)
            y = A(n.cloudSpace.cloudTableDataList)
            E = T(n.cloudSpace.cloudDictList)
            I = T(n.cloudSpace.cloudTableList)
            j = w(n.project.screens)
            N = n.project.screens.map(function (e) {
              return e.id
            }).toJSON()
            R = $_26_index.z.getWorkspacesRecord()
            k = $$_$$_$$_$$_src_shared_widget_custom_storage.d()
            x = $$_$$_$$_$$_src_shared_widget_custom_storage.e()
            e.t0 = Lodash.cloneDeep
            e.t1 = _
            e.t2 = n$project$title
            e.t3 = n$project$version
            e.t4 = j
            e.t5 = N
            e.t6 = R
            e.next = 22
            return d.H()
          case 22:
            e.t7 = e.sent
            e.next = 25
            return d.I()
          case 25:
            e.t8 = e.sent
            e.next = 28
            return d.G()
          case 28:
            e.t9 = e.sent
            e.t10 = n$project$globalVariableList
            e.t11 = n$project$globalArrayList
            e.t12 = n$project$globalObjectList
            e.t13 = n$project$globalWidgetIds
            e.t14 = O(n$project$globalWidgetIds)
            e.t15 = k
            e.t16 = x
            e.t17 = v
            e.t18 = b
            e.t19 = y
            e.t20 = E
            e.t21 = I
            e.t22 = {
              authorId: e.t1,
              title: e.t2,
              version: e.t3,
              screens: e.t4,
              screenIds: e.t5,
              blockly: e.t6,
              imageFileList: e.t7,
              soundFileList: e.t8,
              iconFileList: e.t9,
              globalVariableList: e.t10,
              globalArrayList: e.t11,
              globalObjectList: e.t12,
              globalWidgetIds: e.t13,
              globalWidgets: e.t14,
              extensionWidgetList: e.t15,
              unsafeExtensionWidgetList: e.t16,
              cloudDictKeysList: e.t17,
              cloudTableColumnList: e.t18,
              cloudTableDataList: e.t19,
              cloudDictList: e.t20,
              cloudTableList: e.t21
            }
            D = (0, e.t0)(e.t22)
            Object.keys(D.globalWidgets).forEach(function (e) {
              var t = D.globalWidgets[e]
              if (t.type === f.l) {
                t.attributes.fields.forEach(function (e) {
                  e.value = ""
                })
              }
            })
            return e.abrupt("return", D)
          case 45:
          case "end":
            return e.stop()
        }
      }
    }, e)
  }))).apply(this, arguments)
}
function E(e, t) {
  var n = []
  Object.keys(e).forEach(function (t) {
    var /* [auto-meaningful-name] */eT$workspaceJson
    var o = null === (eT$workspaceJson = e[t].workspaceJson) || undefined === eT$workspaceJson ? undefined : eT$workspaceJson.blocks
    if (o) {
      Object.keys(o).forEach(function (e) {
        var /* [auto-meaningful-name] */oE$fields$WIDGET_ID = o[e].fields.WIDGET_ID
        if (oE$fields$WIDGET_ID && oE$fields$WIDGET_ID.startsWith(f.l) && !n.includes(oE$fields$WIDGET_ID)) {
          n.push(oE$fields$WIDGET_ID)
        }
      })
    }
  })
  return [].concat($_25_index.a(t.filter(function (e) {
    return !e.startsWith(f.l)
  })), n)
}
function O(e) {
  var t = {}
  e.forEach(function (e) {
    var n = d.Bb(e)
    if (n && n.type) {
      t[e] = n
    }
  })
  return t
}
function w(e) {
  var t = {}
  e.toJSON().forEach(function (e) {
    var n = e.toJSON()
    t[n.id] = I(n)
  })
  return t
}
function C(e) {
  var t = {}
  e.forEach(function (e) {
    t[e.id] = e.data
  })
  return t
}
function T(e) {
  return $_25_index.a(e)
}
function S(e) {
  var t = {}
  e.forEach(function (e) {
    t[e.id] = e.columns
  })
  return t
}
function A(e) {
  var t = {}
  e.forEach(function (e) {
    t[e.id] = e.data
  })
  return t
}
function I(e) {
  var /* [auto-meaningful-name] */e$invisibleWidgetIds
  var n = Lodash.cloneDeep(a.a(a.a({}, e), {}, {
    widgets: {}
  }))
  e.widgetIds.forEach(function (e) {
    var t = d.Bb(e)
    if (t) {
      n.widgets[e] = t
    }
  })
  if (!(null === (e$invisibleWidgetIds = e.invisibleWidgetIds) || undefined === e$invisibleWidgetIds)) {
    e$invisibleWidgetIds.forEach(function (e) {
      var t = d.Bb(e)
      if (t) {
        n.widgets[e] = t
      }
    })
  }
  return n
}
function j(e) {
  var t = {}
  Object.entries(e).forEach(function (e) {
    var n = $_10_index.a(e, 2)
    n[0]
    var r = n[1]
    t = a.a(a.a({}, t), r.widgets)
  })
  return t
}
function N(e) {
  var t = Lodash.cloneDeep(e)
  if (!t.invisibleWidgetIds) {
    t.invisibleWidgetIds = []
  }
  delete t.widgets
  return t
}
function R(e, t) {
  return t.map(function (t) {
    return N(e[t])
  })
}
function k(e) {
  return !e.startsWith("PROJECT")
}
export default k
