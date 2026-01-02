/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：345
 */

"use strict"

export { l as c }
export { d as b }
export { p as a }
import * as /* [auto-meaningful-name] */$$_47 from "../47"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_$$_src_editor_widget_builtIn_types from "../../../../../src/editor/widget/built-in/types"
import * as i from "../9"
import * as /* [auto-meaningful-name] */$$_95 from "../95"
import * as /* [auto-meaningful-name] */$$_76 from "../76"
import * as /* [auto-meaningful-name] */$$_131 from "../131"
function l(e, t) {
  for (var n in e) {
    var r = e[n]
    if (1 === t) {
      if (r.type === $$_$$_$$_$$_$$_src_editor_widget_builtIn_types.v && "" === r.attributes.fileId) {
        r.attributes.fileId = "https://creation.codemao.cn/coconut/web/1.10.0/static/media/defaultImage.8392642c.svg"
      }
      if (r.type !== $$_$$_$$_$$_$$_src_editor_widget_builtIn_types.H || r.parentId) {
        if (r.type === $$_$$_$$_$$_$$_src_editor_widget_builtIn_types.w) {
          var /* [auto-meaningful-name] */r$attributes$sizeType = r.attributes.sizeType
          if (r$attributes$sizeType) {
            var l = i.ob(r$attributes$sizeType)
            r.size.height = l.height
            r.attributes.fontSize = l.fontSize
          }
          if (r.attributes.color) {
            r.attributes.backgroundColor = r.attributes.color
          }
          if (r.attributes.mode) {
            r.attributes.templateMode = r.attributes.mode
          }
          r.attributes.placeholderColor = $$_95.n
          r.attributes.valueColor = $$_95.o
          r.attributes.fontFamily = $$_95.f
          r.attributes.backgroundMode = $$_76.a.TEMPLATE
          r.attributes.backgroundImage = $$_95.a
          r.attributes.imageResizeMode = $$_76.b.CONTAIN
        } else if (r.type === $$_$$_$$_$$_$$_src_editor_widget_builtIn_types.F) {
          u(r)
        }
      } else {
        var /* [auto-meaningful-name] */__textWidgetMigrateContainer = "__textWidgetMigrateContainer"
        var p = document.getElementById(__textWidgetMigrateContainer)
        if (!p) {
          (p = document.createElement("div")).id = __textWidgetMigrateContainer
          p.style.whiteSpace = "pre"
          p.style.wordBreak = "break-all"
          p.style.position = "absolute"
          p.style.zIndex = "-100"
          p.style.visibility = "hidden"
          p.style.padding = "6px"
          document.body.appendChild(p)
        }
        var /* [auto-meaningful-name] */r$attributes = r.attributes
        var /* [auto-meaningful-name] */r$attributes$fontSize = r$attributes.fontSize
        var m = r$attributes.content.replace(/&nbsp;/g, " ")
        r.attributes.content = m
        if (40 === r.size.width && 40 === r.size.height && r.attributes.sizeAdaptive === $$_$$_$$_$$_$$_src_editor_widget_builtIn_types.q.AUTO_ALL) {
          p.style.fontSize = "".concat(r$attributes$fontSize, "px")
          p.innerText = m
          r.size.width = Math.max(40, p.clientWidth)
          r.size.height = Math.max(40, p.clientHeight)
          r.attributes.sizeAdaptive = $$_$$_$$_$$_$$_src_editor_widget_builtIn_types.q.AUTO_HEIGHT
          p.innerText = ""
        } else {
          r.attributes.sizeAdaptive = $$_$$_$$_$$_$$_src_editor_widget_builtIn_types.q.FIXED
        }
      }
    } else if (2 === t && r.type === $$_$$_$$_$$_$$_src_editor_widget_builtIn_types.F) {
      u(r)
    }
  }
}
function u(e) {
  var /* [auto-meaningful-name] */e$attributes$mode = e.attributes.mode
  var /* [auto-meaningful-name] */e$attributes$sizeType = e.attributes.sizeType
  if (e$attributes$mode && e$attributes$sizeType) {
    var r = $$_131.l[e$attributes$mode][e$attributes$sizeType]
    e.size.width = r.width
    e.size.height = r.height
  }
  e.attributes.backgroundMode = $$_76.a.TEMPLATE
  e.attributes.imageResizeMode = $$_76.b.CONTAIN
}
function d(e) {
  var /* [auto-meaningful-name] */e$screens = e.screens
  Object.values(e$screens).forEach(function (e) {
    if (!e.objectVariables) {
      e.objectVariables = []
    }
  })
  if (!e.globalObjectList) {
    e.globalObjectList = []
  }
}
function p(e) {
  var t = function (e) {
    var t = []
    for (var n in e) if (e[n]) {
      var /* [auto-meaningful-name] */eN$blocks = e[n].blocks
      if (eN$blocks) {
        for (var o in eN$blocks) {
          var /* [auto-meaningful-name] */eN$blocksO$fields = eN$blocks[o].fields
          if (eN$blocksO$fields) {
            var /* [auto-meaningful-name] */eN$blocksO$fields$BROADCAST = eN$blocksO$fields.BROADCAST
            if (eN$blocksO$fields$BROADCAST && !t.includes(eN$blocksO$fields$BROADCAST)) {
              t.push(eN$blocksO$fields$BROADCAST)
            }
          }
        }
      }
    }
    return t
  }(e.blockJsonMap)
  return {
    title: e.title,
    screenIds: e.screenList.map(function (e) {
      return e.id
    }),
    screens: f(e.screenList, e.widgetMap, t),
    blockly: h(e.blockJsonMap),
    imageFileList: m(e.imageFileList),
    soundFileList: m(e.soundFileList),
    iconFileList: m(e.iconFileList),
    version: e.version,
    apiToken: e.apiToken || "",
    globalVariableList: v(e.variableMap).variableList,
    globalArrayList: v(e.variableMap).arrayList,
    globalObjectList: v(e.variableMap).objectList,
    globalWidgetIds: g(e.widgetMap).list,
    globalWidgets: g(e.widgetMap).map,
    authorId: e.authorId,
    extensionWidgetList: e.extensionWidgetList,
    unsafeExtensionWidgetList: e.unsafeExtensionWidgetList,
    fontFileList: m(e.fontFileList),
    sourceTag: e.sourceTag,
    sourceId: e.sourceId
  }
}
function f(e, t, n) {
  var o
  var i = {}
  var a = $$_47.a(e)
  try {
    for (a.s(); !(o = a.n()).done;) {
      var /* [auto-meaningful-name] */o$value = o.value
      o$value.arrayVariables = []
      o$value.broadcasts = n
      o$value.objectVariables = []
      o$value.primitiveVariables = []
      o$value.widgets = _(o$value.widgetIds.concat(o$value.invisibleWidgetIds), t)
      i[o$value.id] = o$value
    }
  } catch (c) {
    a.e(c)
  } finally {
    a.f()
  }
  return i
}
function h(e) {
  var t = {}
  for (var n in e) t[n] = {
    screenId: n,
    workspaceJson: e[n],
    workspaceOffset: {
      x: 0,
      y: 0
    }
  }
  return t
}
function m() {
  var e = arguments.length > 0 && undefined !== arguments[0] ? arguments[0] : {}
  var t = []
  for (var n in e) t.push(e[n])
  return t
}
function g(e) {
  var t = []
  var n = {}
  for (var r in e) if (e[r].isGlobalWidget) {
    t.push(r)
    n[r] = e[r]
  }
  return {
    list: t,
    map: n
  }
}
function _(e, t) {
  var n = {}
  e.forEach(function (e) {
    n[e] = t[e]
  })
  return n
}
function v() {
  var e = arguments.length > 0 && undefined !== arguments[0] ? arguments[0] : {}
  var t = []
  var n = []
  var r = []
  for (var o in e) if (o.startsWith("VARIABLE")) {
    t.push({
      defaultValue: e[o],
      id: o,
      name: o,
      value: e[o]
    })
  } else {
    if (o.startsWith("OBJECT")) {
      r.push({
        defaultValue: e[o],
        id: o,
        name: o,
        value: e[o]
      })
    } else {
      if (o.startsWith("ARRAY")) {
        n.push({
          defaultValue: e[o],
          id: o,
          name: o,
          value: e[o]
        })
      }
    }
  }
  return {
    variableList: t,
    objectList: r,
    arrayList: n
  }
}
export default p
