/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：33__part-1
 */

"use strict"

import { Se } from "../../../../unrestored/shared/1571/2636/33__part-3"
var r
import * as /* [auto-meaningful-name] */RegeneratorRuntime from "regenerator-runtime"
import /* [auto-meaningful-name] */RegeneratorRuntime1 from "regenerator-runtime"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_unrestored_shared_1571_2636_7 from "../../../../unrestored/shared/1571/2636/7"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_unrestored_shared_1571_2636_10_index from "../../../../unrestored/shared/1571/2636/10/index"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_unrestored_shared_1571_2636_11 from "../../../../unrestored/shared/1571/2636/11"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_unrestored_shared_1571_2636_6 from "../../../../unrestored/shared/1571/2636/6"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_unrestored_shared_1571_2636_25_index from "../../../../unrestored/shared/1571/2636/25/index"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_unrestored_shared_1571_2636_47_index from "../../../../unrestored/shared/1571/2636/47/index"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_unrestored_shared_1571_2636_42_index from "../../../../unrestored/shared/1571/2636/42/index"
import * as /* [auto-meaningful-name] */$$_builtIn_types from "../built-in/types"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_unrestored_shared_1571_2636_64 from "../../../../unrestored/shared/1571/2636/64"
import * as /* [auto-meaningful-name] */$$_$$_$$_shared_tools_index from "../../../shared/tools/index"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_unrestored_shared_1571_2636_83 from "../../../../unrestored/shared/1571/2636/83"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_unrestored_shared_1571_2636_314 from "../../../../unrestored/shared/1571/2636/314"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_unrestored_shared_1571_2636_95 from "../../../../unrestored/shared/1571/2636/95"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_unrestored_shared_1571_2636_190 from "../../../../unrestored/shared/1571/2636/190"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_unrestored_shared_1571_2636_133 from "../../../../unrestored/shared/1571/2636/133"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_unrestored_shared_1571_2636_75 from "../../../../unrestored/shared/1571/2636/75"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_unrestored_shared_1571_2636_37_index from "../../../../unrestored/shared/1571/2636/37/index"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_unrestored_shared_1571_2636_26_index from "../../../../unrestored/shared/1571/2636/26/index"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_unrestored_shared_1571_2636_53 from "../../../../unrestored/shared/1571/2636/53"
!function (e) {
  e[e.UI = 0] = "UI"
  e[e.STAGE = 1] = "STAGE"
  e[e.MEDIA = 2] = "MEDIA"
  e[e.SENSOR = 3] = "SENSOR"
  e[e.DATE = 4] = "DATE"
  e[e.LOCAL_STORAGE = 5] = "LOCAL_STORAGE"
  e[e.CLOUD_STORAGE = 6] = "CLOUD_STORAGE"
  e[e.NETWORK = 7] = "NETWORK"
  e[e.EXTENSION = 8] = "EXTENSION"
  e[e.DATABASE = 9] = "DATABASE"
  e[e.SOCIAL = 10] = "SOCIAL"
  e[e.CLOUD_SPACE = 11] = "CLOUD_SPACE"
}(r || (r = {}))
var T = new Map()
var S = new Map()
function A(e, t) {
  t.forEach(function (t) {
    var /* [auto-meaningful-name] */t$type = t.type
    if (T.has(t$type)) {
      console.error("Component ".concat(t$type, " is registered"))
    } else {
      T.set(t$type, t)
      var r = S.get(e) || []
      r.push(t)
      S.set(e, r)
    }
  })
}
function I() {
  var e = []
  T.forEach(function (t) {
    e.push(t)
  })
  return e
}
function j() {
  var e = []
  T.forEach(function (t) {
    return e.push(t.type)
  })
  return e
}
function N(e) {
  return T.get(e)
}
function R(e) {
  return S.get(e) || []
}
function k(e) {
  var t
  if (!(null === (t = S.get(e)) || undefined === t)) {
    t.forEach(function (t) {
      !function (e, t) {
        if (T.has(t)) {
          T.delete(t)
          var n = (S.get(e) || []).filter(function (e) {
            return e.type !== t
          })
          S.set(e, n)
        } else {
          console.error("Component ".concat(t, " is not registered"))
        }
      }(e, t.type)
    })
  }
  S.delete(e)
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
export { r }
export { A }
export { I }
export { j }
export { N }
export { R }
export { k }
export { x }
export { D }
export { M }
export { L }
export { P }
export { B }
export { F }
export { G }
export { W }
