/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：35__part-1
 */

"use strict"

import { "35__part-3__Se" as Se } from "./35__part-3"
var r
import * as /* [auto-meaningful-name] */RegeneratorRuntime from "regenerator-runtime"
import /* [auto-meaningful-name] */_RegeneratorRuntime from "regenerator-runtime"
import * as a from "./7"
import * as /* [auto-meaningful-name] */$_10_index from "./10/index"
import * as c from "./11"
import * as l from "./6"
import * as /* [auto-meaningful-name] */$_25_index from "./25/index"
import * as d from "./47"
import * as /* [auto-meaningful-name] */$_42_index from "./42/index"
import * as f from "./5"
import * as h from "./64"
import * as m from "./15"
import * as g from "./83"
import * as /* [auto-meaningful-name] */$_313 from "./313"
import * as v from "./97"
import * as /* [auto-meaningful-name] */$_190 from "./190"
import * as /* [auto-meaningful-name] */$_133 from "./133"
import * as E from "./76"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_src_shared_events_actions from "../../../../src/shared/events/actions"
import * as /* [auto-meaningful-name] */$_26_index from "./26/index"
import * as C from "./53"
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
function I(e, t) {
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
function A() {
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
  $_42_index.g.forEach(function (t) {
    if (!(t.type !== f.y && t.type !== f.B)) {
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
  $_42_index.g.forEach(function (t) {
    if (t.type === f.l) {
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
  $_42_index.g.forEach(function (t) {
    if (t.type === f.h) {
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
  if (t && (t.type === f.y || t.type === f.B || t.type === f.l)) {
    var /* [auto-meaningful-name] */t$attributes$fields = t.attributes.fields
    return undefined === t$attributes$fields ? [] : t$attributes$fields
  }
  return []
}
function P(e) {
  var t = Se(e)
  return t && t.type === f.l ? t.attributes.cloudDbId : null
}
function B(e) {
  var t = Se(e)
  return t && t.type === f.h ? t.attributes.columns : []
}
function F(e) {
  var t = Se(e)
  return t && t.type === f.h ? t.attributes.cloudDbId : null
}
function G(e) {
  var t = Se(e)
  return t && t.type === f.k ? t.attributes.cloudTableId : null
}
function U(e) {
  var t = Se(e)
  return t && t.type === f.j ? t.attributes.cloudDictId : null
}
export { r as "35__part-1__r" }
export { I as "35__part-1__I" }
export { A as "35__part-1__A" }
export { j as "35__part-1__j" }
export { N as "35__part-1__N" }
export { R as "35__part-1__R" }
export { k as "35__part-1__k" }
export { x as "35__part-1__x" }
export { D as "35__part-1__D" }
export { M as "35__part-1__M" }
export { L as "35__part-1__L" }
export { P as "35__part-1__P" }
export { B as "35__part-1__B" }
export { F as "35__part-1__F" }
export { G as "35__part-1__G" }
export { U as "35__part-1__U" }
