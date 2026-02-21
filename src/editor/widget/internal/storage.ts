/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：33__part-1
 */

import { Se } from "../../../../unrestored/shared/1571/2636/33__part-3"
import * as /* [auto-meaningful-name] */RegeneratorRuntime from "regenerator-runtime"
import /* [auto-meaningful-name] */RegeneratorRuntime1 from "regenerator-runtime"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_unrestored_shared_1571_2636_7 from "../../../../unrestored/shared/1571/2636/7"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_unrestored_shared_1571_2636_10_index from "../../../../unrestored/shared/1571/2636/10/index"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_unrestored_shared_1571_2636_11 from "../../../../unrestored/shared/1571/2636/11"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_unrestored_shared_1571_2636_6 from "../../../../unrestored/shared/1571/2636/6"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_unrestored_shared_1571_2636_25_index from "../../../../unrestored/shared/1571/2636/25/index"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_unrestored_shared_1571_2636_47 from "../../../../unrestored/shared/1571/2636/47"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_unrestored_shared_1571_2636_42_index from "../../../../unrestored/shared/1571/2636/42/index"
import * as /* [auto-meaningful-name] */$$_builtIn_types from "../built-in/types"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_unrestored_shared_1571_2636_64 from "../../../../unrestored/shared/1571/2636/64"
import * as /* [auto-meaningful-name] */$$_$$_$$_shared_tools from "../../../shared/tools"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_unrestored_shared_1571_2636_83 from "../../../../unrestored/shared/1571/2636/83"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_unrestored_shared_1571_2636_314 from "../../../../unrestored/shared/1571/2636/314"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_unrestored_shared_1571_2636_95 from "../../../../unrestored/shared/1571/2636/95"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_unrestored_shared_1571_2636_190 from "../../../../unrestored/shared/1571/2636/190"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_unrestored_shared_1571_2636_133 from "../../../../unrestored/shared/1571/2636/133"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_unrestored_shared_1571_2636_75 from "../../../../unrestored/shared/1571/2636/75"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_unrestored_shared_1571_2636_37_index from "../../../../unrestored/shared/1571/2636/37/index"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_unrestored_shared_1571_2636_26_index from "../../../../unrestored/shared/1571/2636/26/index"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_unrestored_shared_1571_2636_53 from "../../../../unrestored/shared/1571/2636/53"
import { Widget } from "./types"

export enum WidgetCategory {
  UI,
  STAGE,
  MEDIA,
  SENSOR,
  DATE,
  LOCAL_STORAGE,
  CLOUD_STORAGE,
  NETWORK,
  EXTENSION,
  DATABASE,
  SOCIAL,
  CLOUD_SPACE
}

const typeToWidgetMap = new Map<string, Widget>()
const categoryToWidgetsMap = new Map<WidgetCategory, Widget[]>()

export function register(category: WidgetCategory, widgets: Widget[]) {
  widgets.forEach((widget) => {
    const { type } = widget
    if (typeToWidgetMap.has(type)) {
      console.error(`Component ${type} is registered`)
    } else {
      typeToWidgetMap.set(type, widget)
      const widgets = categoryToWidgetsMap.get(category) || []
      widgets.push(widget)
      categoryToWidgetsMap.set(category, widgets)
    }
  })
}

function I() {
  var e = []
  typeToWidgetMap.forEach(function (t) {
    e.push(t)
  })
  return e
}
function j() {
  var e = []
  typeToWidgetMap.forEach(function (t) {
    return e.push(t.type)
  })
  return e
}
function N(e) {
  return typeToWidgetMap.get(e)
}
function R(e) {
  return categoryToWidgetsMap.get(e) || []
}

export function unregisterCategory(category: WidgetCategory) {
  categoryToWidgetsMap.get(category)?.forEach(({ type }) => {
    if (typeToWidgetMap.has(type)) {
      typeToWidgetMap.delete(type)
      const newWidgetList = (categoryToWidgetsMap.get(category) || []).filter((widget) => widget.type !== type)
      categoryToWidgetsMap.set(category, newWidgetList)
    } else {
      console.error(`Component ${type} is not registered`)
    }
  })
  categoryToWidgetsMap.delete(category)
}

function x() {
  var e = []
  $$_$$_$$_$$_unrestored_shared_1571_2636_42_index.g.forEach(function (t) {
    if (!(t.type !== $$_builtIn_types.y && t.type !== $$_builtIn_types.B)) {
      e.push({
        id: t.id,
        title: t.title
      })
    }
  })
  return e
}
function D() {
  var e = []
  $$_$$_$$_$$_unrestored_shared_1571_2636_42_index.g.forEach(function (t) {
    if (t.type === $$_builtIn_types.l) {
      e.push({
        id: t.id,
        title: t.title
      })
    }
  })
  return e
}
function M() {
  var e = []
  $$_$$_$$_$$_unrestored_shared_1571_2636_42_index.g.forEach(function (t) {
    if (t.type === $$_builtIn_types.h) {
      e.push({
        id: t.id,
        title: t.title
      })
    }
  })
  return e
}
function L(e) {
  var t = Se(e)
  if (t && (t.type === $$_builtIn_types.y || t.type === $$_builtIn_types.B || t.type === $$_builtIn_types.l)) {
    var /* [auto-meaningful-name] */t$attributes$fields = t.attributes.fields
    return undefined === t$attributes$fields ? [] : t$attributes$fields
  }
  return []
}
function P(e) {
  var t = Se(e)
  return t && t.type === $$_builtIn_types.l ? t.attributes.cloudDbId : null
}
function B(e) {
  var t = Se(e)
  return t && t.type === $$_builtIn_types.h ? t.attributes.columns : []
}
function F(e) {
  var t = Se(e)
  return t && t.type === $$_builtIn_types.h ? t.attributes.cloudDbId : null
}
function G(e) {
  var t = Se(e)
  return t && t.type === $$_builtIn_types.k ? t.attributes.cloudTableId : null
}
function W(e) {
  var t = Se(e)
  return t && t.type === $$_builtIn_types.j ? t.attributes.cloudDictId : null
}
export { WidgetCategory as r }
export { register as A }
export { I }
export { j }
export { N }
export { R }
export { unregisterCategory as k }
export { x }
export { D }
export { M }
export { L }
export { P }
export { B }
export { F }
export { G }
export { W }
