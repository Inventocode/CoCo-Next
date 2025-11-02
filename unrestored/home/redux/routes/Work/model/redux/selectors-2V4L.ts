/** 
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2V4L
 */

"use strict"

/* harmony export (binding) */
/* harmony export (binding) */
export { getHomeAllWorkList }
/* harmony export (binding) */
export { getCreateWorkList }
/* harmony export (binding) */
export { getCollWorkList }
export { getDeleteWorkList }
var getHomeAllWorkList = function getHomeAllWorkList(state) {
  return state.home_reducer.workList
}
var getCreateWorkList = function getCreateWorkList(state) {
  return state.work_reducer.createWorkList
}
var getCollWorkList = function getCollWorkList(state) {
  return state.work_reducer.collWorkList
}
var getDeleteWorkList = function getDeleteWorkList(state) {
  return state.work_reducer.deleteWorkList
}

/***/
