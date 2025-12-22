/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：37__part-8
 */

"use strict"

import { xl } from "../../../../../src/editor/redux/store"
import * as cn from "../../../../../src/editor/widget/built-in/types"
import * as on from "../9"
import * as /* [auto-meaningful-name] */$$_47 from "../47"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_$$_src_shared_events_messagesWrapper from "../../../../../src/editor/redux/common/actions"
import * as /* [auto-meaningful-name] */$$_127 from "../127"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_$$_src_shared_widget_custom_load from "../../../../../src/shared/widget/custom/load"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_$$_src_shared_widget_custom_storage from "../../../../../src/shared/widget/custom/storage"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_$$_src_shared_widget_custom_shop from "../../../../../src/shared/widget/custom/shop"
import * as /* [auto-meaningful-name] */$_376 from "./376"
import * as /* [auto-meaningful-name] */$_219_index from "./219/index"
import * as /* [auto-meaningful-name] */$$_147 from "../147"
import * as /* [auto-meaningful-name] */$_515 from "./515"
import /* [auto-meaningful-name] */_$_ from "./515"
import * as /* [auto-meaningful-name] */$$_410 from "../410"
import * as /* [auto-meaningful-name] */$$_48_345 from "../48/345"
import * as /* [auto-meaningful-name] */$_375 from "./375"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_$$_src_shared_widget_custom_restrict from "../../../../../src/shared/widget/custom/restrict"
import * as /* [auto-meaningful-name] */$$_144 from "../144"
import * as /* [auto-meaningful-name] */$$_392_index from "../392/index"
import * as /* [auto-meaningful-name] */$$_20_index from "../20/index"
import * as /* [auto-meaningful-name] */$$_174 from "../174"
import * as /* [auto-meaningful-name] */$_143 from "./143"
import * as /* [auto-meaningful-name] */$$_110 from "../110"
function Ln() {
  var /* [auto-meaningful-name] */t$common$userInfo
  var t = xl.getState()
  var /* [auto-meaningful-name] */t$project$id = t.project.id
  var r = null === (t$common$userInfo = t.common.userInfo) || undefined === t$common$userInfo ? undefined : t$common$userInfo.id
  return "".concat("DATA_WATCH_VARIABLE_LIST", "_").concat(r, "_").concat(t$project$id)
}
function Pn() {
  var /* [auto-meaningful-name] */xl$getState$dataWatch$variableList = xl.getState().dataWatch.variableList
  var t = []
  try {
    var n
    var r = $$_47.a(xl$getState$dataWatch$variableList)
    try {
      for (r.s(); !(n = r.n()).done;) {
        var /* [auto-meaningful-name] */n$value = n.value
        t.push({
          id: n$value.id,
          name: n$value.name,
          screenId: n$value.screenId,
          isWatching: n$value.isWatching,
          type: n$value.type
        })
      }
    } catch (a) {
      r.e(a)
    } finally {
      r.f()
    }
    var i = JSON.stringify(t)
    $_143.a.setItem(Ln(), i)
  } catch (s) {
    console.error("cache data watch failed", s)
  }
}
function Bn() {
  var e = Ln()
  var t = $_143.a.getItem(e)
  var n = []
  try {
    if (t) {
      n = JSON.parse(t)
    }
  } catch (r) {
    console.error(r)
  }
  return n
}
function Fn(e) {
  var t
  var n = xl.getState()
  var /* [auto-meaningful-name] */n$project$screens = n.project.screens
  var /* [auto-meaningful-name] */n$project$id = n.project.id
  var i = []
  var a = $$_47.a(e)
  try {
    var s = function () {
      var /* [auto-meaningful-name] */t$value = t.value
      if (!t$value.isWatching) {
        return "continue"
      }
      if ("GLOBAL" !== t$value.screenId) {
        var a = n$project$screens.find(function (t) {
          return t.id === t$value.screenId
        })
        if (!a) {
          return "break"
        }
        var /* [auto-meaningful-name] */a$primitiveVariables = a.primitiveVariables
        var /* [auto-meaningful-name] */a$arrayVariables = a.arrayVariables
        var /* [auto-meaningful-name] */a$objectVariables = a.objectVariables
        if ("LIST" === t$value.type) {
          var u = a$arrayVariables.find(function (t) {
            return t.id === t$value.id
          })
          if (u) {
            i.push($$_110.a("PRIMITIVE", u, {
              screenId: a.id
            }))
          }
        }
        if ("DICT" === t$value.type) {
          var d = a$objectVariables.find(function (t) {
            return t.id === t$value.id
          })
          if (d) {
            i.push($$_110.a("DICT", d, {
              screenId: a.id
            }))
          }
        }
        if ("PRIMITIVE" === t$value.type) {
          var p = a$primitiveVariables.find(function (t) {
            return t.id === t$value.id
          })
          if (p) {
            i.push($$_110.a("PRIMITIVE", p, {
              screenId: a.id
            }))
          }
        }
      } else {
        var /* [auto-meaningful-name] */n$project = n.project
        var /* [auto-meaningful-name] */n$project$globalWidgetIds = n$project.globalWidgetIds
        var /* [auto-meaningful-name] */n$project$globalObjectList = n$project.globalObjectList
        var /* [auto-meaningful-name] */n$project$globalVariableList = n$project.globalVariableList
        var /* [auto-meaningful-name] */n$project$globalArrayList = n$project.globalArrayList
        if ("LIST" === t$value.type) {
          var v = n$project$globalArrayList.find(function (t) {
            return t.id === t$value.id
          })
          if (v) {
            i.push($$_110.a("LIST", v))
          }
        }
        if ("DICT" === t$value.type) {
          var b = n$project$globalObjectList.find(function (t) {
            return t.id === t$value.id
          })
          if (b) {
            i.push($$_110.a("DICT", b))
          }
        }
        if ("PRIMITIVE" === t$value.type) {
          var y = n$project$globalVariableList.find(function (t) {
            return t.id === t$value.id
          })
          if (y) {
            i.push($$_110.a("PRIMITIVE", y))
          }
        }
        if (n$project$globalWidgetIds.includes(t$value.id)) {
          var E = on.Bb(t$value.id)
          if (t$value.type === cn.B || t$value.type === cn.y) {
            var O = $$_20_index.getLocalDocumentObject(n$project$id, t$value.id) || E.attributes.fields
            i.push($$_110.a(t$value.type, {
              id: t$value.id,
              name: t$value.name,
              value: O,
              defaultValue: "no-use"
            }))
          } else if (t$value.type === cn.G) {
            i.push($$_110.a(cn.G, {
              id: t$value.id,
              name: t$value.name,
              value: {
                header: [],
                data: []
              },
              defaultValue: "no-use"
            }))
          }
        }
      }
    }
    for (a.s(); !(t = a.n()).done;) {
      var l = s()
      if ("continue" !== l && "break" === l) {
        break
      }
    }
  } catch (f) {
    a.e(f)
  } finally {
    a.f()
  }
  for (var u = 0, d = i; u < d.length; u++) {
    var p = d[u]
    xl.dispatch($$_$$_$$_$$_$$_src_shared_events_messagesWrapper.Pj(p.id, "isWatching", true))
    xl.dispatch($$_$$_$$_$$_$$_src_shared_events_messagesWrapper.Pj(p.id, "selected", true))
  }
}
function Gn() {
  var e = Ln()
  return $_143.a.removeItem(e)
}
export { Pn }
export { Bn }
export { Fn }
export { Gn }
