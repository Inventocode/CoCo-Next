/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：238
 */

"use strict"

export { i as d }
export { a as e }
export { s as b }
export { c }
export { l as a }
import { useSelector } from "react-redux"
import * as o from "./9"
function i() {
  return useSelector(function (e) {
    var /* [auto-meaningful-name] */e$project = e.project
    var /* [auto-meaningful-name] */e$project$screens = e$project.screens
    var /* [auto-meaningful-name] */e$project$currentScreenIndex = e$project.currentScreenIndex
    var o = e$project$screens.get(e$project$currentScreenIndex)
    if (e$project$currentScreenIndex > -1 && o) {
      return o
    }
  })
}
function a(e) {
  return useSelector(function (t) {
    return t.project.screens.findIndex(function (t) {
      return t.id === e
    })
  })
}
function s() {
  return useSelector(function (e) {
    return e.common.editAreaUpdatedAt
  })
}
function c() {
  return useSelector(function (e) {
    return e.common.extensionListUpdateAt
  })
}
function l() {
  var e = i()
  var t = []
  if (e) {
    e.widgetIds.forEach(function (e) {
      var n = o.Bb(e)
      if (n) {
        var /* [auto-meaningful-name] */n$type = n.type
        if (n && !t.includes(n$type)) {
          var i = o.Db(n.type)
          if (i && i.hasAnyWidget) {
            t.push(n.type)
          }
        }
      }
    })
  }
  return t
}
export default l
