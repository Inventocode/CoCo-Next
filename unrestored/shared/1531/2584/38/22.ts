/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：22
 */

"use strict"

export { r as x }
export { o as y }
export { i as G }
export { a as C }
export { s as A }
export { c as w }
export { l as E }
export { u as F }
export { d as B }
export { p as m }
export { f as k }
export { h as l }
export { m as v }
export { g as D }
export { _ as s }
export { v as J }
export { b as K }
export { y as f }
export { E as g }
export { O as H }
export { w as I }
export { C as n }
export { T as r }
export { S as u }
export { I as e }
export { A as o }
export { j as t }
export { N as i }
export { R as j }
export { k as z }
export { x as p }
export { D as q }
export { M as b }
export { L as d }
export { P as c }
export { B as a }
export { F as h }
var r = function (e) {
  return e.project.currentScreenIndex
}
var o = function (e) {
  return e.project.id
}
var i = function (e) {
  return e.project.title
}
var a = function (e) {
  return e.project.screens
}
var s = function (e) {
  return e.project.packageInfo
}
var c = function (e) {
  return e.project.bcmUrl
}
var l = function (e) {
  return e.project.projectShareInfo
}
var u = function (e) {
  return e.project.projectSource
}
var d = function (e) {
  return e.project.packageTaskLabel
}
var p = function (e) {
  return e.project.globalVariableList
}
var f = function (e) {
  return e.project.globalArrayList
}
var h = function (e) {
  return e.project.globalObjectList
}
var m = function (e) {
  return e.project.apiToken
}
var g = function (e) {
  return e.project.selectedWidgetId
}
var _ = function (e) {
  return e.common.language
}
var v = function (e) {
  return e.common.userInfo
}
var b = function (e) {
  return e.common.userInfoFetchDone
}
var y = function (e) {
  return e.project.screens.get(e.project.currentScreenIndex)
}
var E = function (e) {
  var t = e.project.screens.get(e.project.currentScreenIndex)
  return null === t || undefined === t ? undefined : t.id
}
var O = function (e, t) {
  return e.project.screens.find(function (e) {
    return e.id === t
  })
}
var w = function (e) {
  return e.resource.soundFileList
}
var C = function (e) {
  return e.project.globalWidgetIds
}
var T = function (e) {
  return e.oTState.isAuthor
}
var S = function (e) {
  return e.oTState.collWorkId
}
var I = function (e) {
  return e.common.consoleMessages
}
var A = function (e) {
  return e.resource.iconFileList
}
var j = function (e) {
  return e.common.myExtensionWidgets
}
var N = function (e) {
  return e.block.flyoutVisible
}
var R = function (e) {
  return e.resource.fontFileList
}
var k = function (e) {
  return e.project.jsonFrom
}
var x = function (e) {
  return e.cloudSpace.initialRefDictIds
}
var D = function (e) {
  return e.cloudSpace.initialRefTableIds
}
var M = function (e) {
  return e.cloudSpace.cloudDictList
}
var L = function (e) {
  return e.cloudSpace.cloudTableList
}
var P = function (e) {
  return e.cloudSpace.cloudTableColumnList
}
var B = function (e) {
  return e.cloudSpace.cloudDictKeysList
}
var F = function (e) {
  return e.common.editAreaUpdatedAt
}
export default B
