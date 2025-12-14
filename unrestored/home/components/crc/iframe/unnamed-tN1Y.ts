/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：tN1Y
 */

"use strict"

Object.defineProperty(exports, "__esModule", {
  value: true
})
exports.createNekoIframeApi = createNekoIframeApi
exports.createNekoParentApi = createNekoParentApi
exports.getNekoIframeUrl = getNekoIframeUrl
var base_1 = require("./unnamed-S9_H")
var iframe_1 = require("./unnamed-IKhi")
var utils_1 = require("./utils/1-MMZc")
var interface_1 = require("./interface/1-yX6s")
const iframeApiSpec = new base_1.ApiSpec("neko", {
  loadWork: new base_1.MethodType(),
  saveWork: new base_1.MethodType(),
  setConfigurations: new base_1.MethodType(),
  setUserData: new base_1.MethodType(),
  setWxViewParameter: new base_1.MethodType(),
  setVisualViewport: new base_1.MethodType(),
  setStageState: new base_1.MethodType(),
  checkHasBlockType: new base_1.MethodType(),
  bcmCompare: new base_1.MethodType(),
  blocksCategoryType: new base_1.MethodType(),
  highLightBlocks: new base_1.MethodType(),
  cancelHighLightBlocks: new base_1.MethodType(),
  workspaceJsonContainText: new base_1.MethodType(),
  getBlockCount: new base_1.MethodType(),
  openHistoryBackupDialog: new base_1.MethodType(),
  getBcmChangeState: new base_1.MethodType(),
  getTargetIframe: new base_1.MethodType(),
  runnerStage: new base_1.MethodType(),
  selectEntity: new base_1.MethodType(),
  changeTheatre: new base_1.MethodType(),
  bcmRuleCompare: new base_1.MethodType(),
  loadRuleSdk: new base_1.MethodType(),
  showBackPackPage: new base_1.MethodType(),
  hideBackPackPage: new base_1.MethodType(),
  startGuide: new base_1.MethodType(),
  closeGuide: new base_1.MethodType(),
  getGuidanceFinished: new base_1.MethodType(),
  getCurrentGuidanceStep: new base_1.MethodType(),
  playGuideBgm: new base_1.MethodType(),
  stopGuideBgm: new base_1.MethodType()
})
const parentApiSpec = new base_1.ApiSpec(iframeApiSpec.namespace, {
  onEvent: new base_1.MethodType()
})
function createNekoIframeApi(handler, options) {
  return (0, iframe_1.createIframeApi)(iframeApiSpec, handler, options)
}
function createNekoParentApi(handler, options) {
  return (0, iframe_1.createIframeApi)(parentApiSpec, handler, options)
}
function getNekoIframeUrl(env, knType = interface_1.EKnType.KN, params) {
  let param = ""
  if (params) {
    params.forEach(({
      type,
      value
    }, index) => {
      if (index === 0) {
        param += "?"
      } else {
        param += "&"
      }
      param += `${type}=${value}`
    })
  }
  return (0, utils_1.getServiceOrigin)(env, `${knType}.codemao.cn/editor${param}`)
}

/***/
