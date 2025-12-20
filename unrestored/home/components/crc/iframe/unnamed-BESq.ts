/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：BESq
 */

"use strict"

Object.defineProperty(exports, "__esModule", {
  value: true
})
exports.checkIfSuccess = checkIfSuccess
exports.createWood3IframeApi = createWood3IframeApi
exports.createWood3ParentApi = createWood3ParentApi
exports.getWood3CppIframeUrl = getWood3CppIframeUrl
exports.getNctWood3CppIframeUrl = getNctWood3CppIframeUrl
exports.getWood3TeacherCppIframeUrl = getWood3TeacherCppIframeUrl
exports.getWood3PlayerUrl = getWood3PlayerUrl
exports.getWood3CodelabCppIframeUrl = getWood3CodelabCppIframeUrl
exports.getWood3CodelabTeacherCppIframeUrl = getWood3CodelabTeacherCppIframeUrl
exports.getWood3ViewerUrl = getWood3ViewerUrl
var base_1 = require("./unnamed-S9_H")
var iframe_1 = require("./unnamed-IKhi")
var utils_1 = require("./utils/1-MMZc")
var types_1 = require("./types/1-8T_t")
function checkIfSuccess(result) {
  return result.status === types_1.EStatus.Success
}
const iframeApiSpec = new base_1.ApiSpec("wood3", {
  configure: new base_1.MethodType(),
  loadWork: new base_1.MethodType(),
  saveWork: new base_1.MethodType(),
  shareWork: new base_1.MethodType(),
  startWork: new base_1.MethodType(),
  stopWork: new base_1.MethodType(),
  getWorkUrl: new base_1.MethodType(),
  getCurrentTextFileContent: new base_1.MethodType(),
  setCurrentTextFileContent: new base_1.MethodType(),
  downloadCurrentTextFile: new base_1.MethodType(),
  executeRegExp: new base_1.MethodType(),
  getRegExpConfigJson: new base_1.MethodType(),
  setCourseInfo: new base_1.MethodType(),
  setAuthToken: new base_1.MethodType(),
  setQuestionInfo: new base_1.MethodType(),
  generateWorkUrlFromFileContent: new base_1.MethodType(),
  checkIsValidWorkUrl: new base_1.MethodType(),
  runOJMultiCases: new base_1.MethodType(),
  resetEditorStatus: new base_1.MethodType(),
  getAiMatchTimeLimit: new base_1.MethodType(),
  checkIfWorkChanged: new base_1.MethodType(),
  checkIfRegExpChanged: new base_1.MethodType(),
  onMessage: new base_1.MethodType()
})
const parentApiSpec = new base_1.ApiSpec(iframeApiSpec.namespace, {
  onEvent: new base_1.MethodType(),
  getClipboardContent: new base_1.MethodType()
})
function createWood3IframeApi(handler, options) {
  return (0, iframe_1.createIframeApi)(iframeApiSpec, handler, options)
}
function createWood3ParentApi(handler, options) {
  return (0, iframe_1.createIframeApi)(parentApiSpec, handler, options)
}
function getWood3CppIframeUrl(env) {
  // TODO: change domain
  return `${(0, utils_1.getServiceOrigin)(env, "turtle-tool.codemao.cn")}/cpp`
}
function getNctWood3CppIframeUrl(env) {
  // TODO: change domain
  return `${(0, utils_1.getServiceOrigin)(env, "nct-turtle-tool.codemao.cn")}/cpp`
}
function getWood3TeacherCppIframeUrl(env) {
  // TODO: change domain
  return `${(0, utils_1.getServiceOrigin)(env, "turtle-tool.codemao.cn")}/teacher/cpp`
}
function getWood3PlayerUrl(env, workId) {
  return `${(0, utils_1.getServiceOrigin)(env, "turtle-tool.codemao.cn")}/player/${workId}`
}
function getWood3CodelabCppIframeUrl(env) {
  return `${(0, utils_1.getServiceOrigin)(env, "turtle-plus.codemao.cn")}/codelab/cpp`
}
function getWood3CodelabTeacherCppIframeUrl(env) {
  return `${(0, utils_1.getServiceOrigin)(env, "turtle-plus.codemao.cn")}/teacher/cpp`
}
function getWood3ViewerUrl(env, workId, workUrl, workName) {
  const list = []
  if (workId !== undefined) {
    list.push(`work_id=${workId}`)
  }
  if (workUrl !== undefined) {
    list.push(`work_url=${workUrl}`)
  }
  if (workName !== undefined) {
    list.push(`work_name=${workName}`)
  }
  return `${(0, utils_1.getServiceOrigin)(env, "turtle-tool.codemao.cn")}/viewer?action=load_work&${list.join("&")}`
}

/***/
