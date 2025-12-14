/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：UJTa
 */

"use strict"

Object.defineProperty(exports, "__esModule", {
  value: true
})
exports.createWoodIframeApi = createWoodIframeApi
exports.createWoodParentApi = createWoodParentApi
exports.getWoodIframeUrl = getWoodIframeUrl
var base_1 = require("./unnamed-S9_H")
var iframe_1 = require("./unnamed-IKhi")
var utils_1 = require("./utils/1-MMZc")
const iframeApiSpec = new base_1.ApiSpec("wood", {
  // NOTE: works
  setCurrentWoodProjectById: new base_1.MethodType(),
  setCurrentWoodProjectByUrl: new base_1.MethodType(),
  saveCurrentWoodProject: new base_1.MethodType(),
  checkIfCurrentWoodProjectEmpty: new base_1.MethodType(),
  checkIfCurrentWoodProjectChanged: new base_1.MethodType(),
  checkIfCurrentWoodProjectChangedByUrl: new base_1.MethodType(),
  // NOTE: editor
  clearEditorMarkLine: new base_1.MethodType(),
  resetEditorStatus: new base_1.MethodType(),
  setVirtualKeyboardPresetWord: new base_1.MethodType(),
  setRegExpConfig: new base_1.MethodType(),
  getRegExpMatchResult: new base_1.MethodType(),
  markEditorRegExpLine: new base_1.MethodType(),
  setCourseReportInfo: new base_1.MethodType(),
  // NOTE: ui features
  showSettingsDialog: new base_1.MethodType(),
  hideSettingsDialog: new base_1.MethodType(),
  setSideBarButtons: new base_1.MethodType(),
  getSideBarButtonRect: new base_1.MethodType(),
  setSideBarWidth: new base_1.MethodType(),
  getSideBarWidth: new base_1.MethodType(),
  setWxViewParameter: new base_1.MethodType()
})
const parentApiSpec = new base_1.ApiSpec(iframeApiSpec.namespace, {
  onEvent: new base_1.MethodType()
})
function createWoodIframeApi(handler, options) {
  return (0, iframe_1.createIframeApi)(iframeApiSpec, handler, options)
}
function createWoodParentApi(handler, options) {
  return (0, iframe_1.createIframeApi)(parentApiSpec, handler, options)
}
function getWoodIframeUrl(env) {
  return `${(0, utils_1.getServiceOrigin)(env, "lunar-turtle.codemao.cn")}?sidebar=true`
}

/***/
