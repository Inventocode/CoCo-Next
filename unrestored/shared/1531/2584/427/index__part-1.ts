/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：427__part-1
 */

"use strict"

import { "427__part-0__a" as a } from "./index__part-0"
import * as /* [auto-meaningful-name] */Lodash from "lodash"
function u(e, t) {
  if (a) {
    a({
      type: t,
      content: e
    })
  }
}
function l() {
  return "pc" === (navigator.userAgent.indexOf("iPad") >= 0 || navigator.userAgent.indexOf("iPhone") >= 0 ? "ios" : navigator.userAgent.indexOf("Android") >= 0 ? "android" : "pc")
}
function f() {
  return !l() && (screen.width < 425 || screen.height < 425 || navigator.userAgent.indexOf("iPhone") >= 0 || navigator.userAgent.indexOf("Android") >= 0 && navigator.userAgent.indexOf("Mobile") >= 0) && navigator.userAgent.indexOf("iPhone") >= 0
}
var d = {
  audio_recording: false
}
function h() {
  window.AudioContext = window.AudioContext || window.webkitAudioContext
  navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mediaDevices && navigator.mediaDevices.getUserMedia
  window.URL = window.URL || window.webkitURL
  if (AudioContext && (navigator.getUserMedia || navigator.mediaDevices && navigator.mediaDevices.getUserMedia) && URL) {
    d.audio_recording = true
  }
  return d
}
function p() {
  return navigator.userAgent.indexOf("iPad") >= 0 || navigator.userAgent.indexOf("iPhone") >= 0 ? "ios" : navigator.userAgent.indexOf("Android") >= 0 ? "android" : "pc"
}
function _() {
  return "pc" === p()
}
function A() {
  return "ios" === p()
}
function g() {
  return "android" === p()
}
export { u as "427__part-1__u" }
export { f as "427__part-1__f" }
export { h as "427__part-1__h" }
export { _ as "427__part-1___" }
export { A as "427__part-1__A" }
export { g as "427__part-1__g" }
