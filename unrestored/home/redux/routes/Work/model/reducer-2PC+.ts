/** 
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2PC+
 */

"use strict"

/* unused harmony export handleSetCreateWorkOffset */
/* unused harmony export handleSetCreateWorkIsLoaded */
/* unused harmony export handleSetCreateWorkList */
/* unused harmony export handleSetCollWorkOffset */
/* unused harmony export handleSetCollWorkIsLoaded */
/* unused harmony export handleSetCollWorkList */
/* unused harmony export handleSetDeleteWorkOffset */
/* unused harmony export handleSetDeleteWorkIsLoaded */
/* unused harmony export handleSetDeleteWorkList */
/* harmony export (binding) */
/* harmony import */
export { workReducer }
import * as __WEBPACK_IMPORTED_MODULE_0_redux_actions__ from "redux-actions"
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_1__utils__ from "../../../../components/utils-jnIn"
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_2__actions__ from "../../../../model/actions-HXaG"
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_3__interface__ from "../../../../Work/model/interface-hC2z"
/* unused harmony reexport WorkReducerState */
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_4__saga__ from "./saga-BmOz"
/* harmony reexport (binding) */
export { workSaga } from "./saga-BmOz"
var _handleActions
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    })
  } else {
    obj[key] = value
  }
  return obj
}
var initial_state = {
  createWorkOffset: 0,
  createWorkIsLoaded: false,
  createWorkList: [],
  collWorkOffset: 1,
  collWorkIsLoaded: false,
  collWorkList: [],
  deleteWorkOffset: 0,
  deleteWorkIsLoaded: false,
  deleteWorkList: []
}
var handleSetCreateWorkOffset = function handleSetCreateWorkOffset(state, action) {
  return __WEBPACK_IMPORTED_MODULE_1__utils__.update_state(state, {
    createWorkOffset: action.payload
  })
}
var handleSetCreateWorkIsLoaded = function handleSetCreateWorkIsLoaded(state, action) {
  return __WEBPACK_IMPORTED_MODULE_1__utils__.update_state(state, {
    createWorkIsLoaded: action.payload
  })
}
var handleSetCreateWorkList = function handleSetCreateWorkList(state, action) {
  return __WEBPACK_IMPORTED_MODULE_1__utils__.update_state(state, {
    createWorkList: action.payload
  })
}
var handleSetCollWorkOffset = function handleSetCollWorkOffset(state, action) {
  return __WEBPACK_IMPORTED_MODULE_1__utils__.update_state(state, {
    collWorkOffset: action.payload
  })
}
var handleSetCollWorkIsLoaded = function handleSetCollWorkIsLoaded(state, action) {
  return __WEBPACK_IMPORTED_MODULE_1__utils__.update_state(state, {
    collWorkIsLoaded: action.payload
  })
}
var handleSetCollWorkList = function handleSetCollWorkList(state, action) {
  return __WEBPACK_IMPORTED_MODULE_1__utils__.update_state(state, {
    collWorkList: action.payload
  })
}
var handleSetDeleteWorkOffset = function handleSetDeleteWorkOffset(state, action) {
  return __WEBPACK_IMPORTED_MODULE_1__utils__.update_state(state, {
    deleteWorkOffset: action.payload
  })
}
var handleSetDeleteWorkIsLoaded = function handleSetDeleteWorkIsLoaded(state, action) {
  return __WEBPACK_IMPORTED_MODULE_1__utils__.update_state(state, {
    deleteWorkIsLoaded: action.payload
  })
}
var handleSetDeleteWorkList = function handleSetDeleteWorkList(state, action) {
  return __WEBPACK_IMPORTED_MODULE_1__utils__.update_state(state, {
    deleteWorkList: action.payload
  })
}
var workReducer = __WEBPACK_IMPORTED_MODULE_0_redux_actions__.handleActions((_handleActions = {}, _defineProperty(_handleActions, __WEBPACK_IMPORTED_MODULE_2__actions__.SET_CREATE_WORK_OFFSET_ACTION, handleSetCreateWorkOffset), _defineProperty(_handleActions, __WEBPACK_IMPORTED_MODULE_2__actions__.SET_CREATE_WORK_IS_LOADED_ACTION, handleSetCreateWorkIsLoaded), _defineProperty(_handleActions, __WEBPACK_IMPORTED_MODULE_2__actions__.SET_CREATE_WORK_LIST_ACTION, handleSetCreateWorkList), _defineProperty(_handleActions, __WEBPACK_IMPORTED_MODULE_2__actions__.SET_COLL_WORK_OFFSET_ACTION, handleSetCollWorkOffset), _defineProperty(_handleActions, __WEBPACK_IMPORTED_MODULE_2__actions__.SET_COLL_WORK_IS_LOADED_ACTION, handleSetCollWorkIsLoaded), _defineProperty(_handleActions, __WEBPACK_IMPORTED_MODULE_2__actions__.SET_COLL_WORK_LIST_ACTION, handleSetCollWorkList), _defineProperty(_handleActions, __WEBPACK_IMPORTED_MODULE_2__actions__.SET_DELETE_WORK_OFFSET_ACTION, handleSetDeleteWorkOffset), _defineProperty(_handleActions, __WEBPACK_IMPORTED_MODULE_2__actions__.SET_DELETE_WORK_IS_LOADED_ACTION, handleSetDeleteWorkIsLoaded), _defineProperty(_handleActions, __WEBPACK_IMPORTED_MODULE_2__actions__.SET_DELETE_WORK_LIST_ACTION, handleSetDeleteWorkList), _handleActions), initial_state)

/***/
