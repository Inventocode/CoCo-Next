/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：Pv6Z
 */

"use strict"

/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_0_react_redux__ from "react-redux"
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_1_redux__ from "redux"
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_2__template__ from "./template"
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_3__model_actions__ from "./model/actions"
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_4__redux_main_actions__ from "../../../redux/actions"
function map_state(state) {
  return {
    userInfo: state.main_reducer.userInfo,
    userInfoFetchDone: state.main_reducer.userInfoFetchDone,
    templateList: state.home_reducer.templateList,
    createWorkOffset: state.work_reducer.createWorkOffset,
    createWorkIsLoaded: state.work_reducer.createWorkIsLoaded,
    createWorkList: state.work_reducer.createWorkList,
    collWorkOffset: state.work_reducer.collWorkOffset,
    collWorkIsLoaded: state.work_reducer.createWorkIsLoaded,
    collWorkList: state.work_reducer.collWorkList,
    deleteWorkOffset: state.work_reducer.deleteWorkOffset,
    deleteWorkIsLoaded: state.work_reducer.deleteWorkIsLoaded,
    deleteWorkList: state.work_reducer.deleteWorkList
  }
}
function map_dispatch(dispatch) {
  return __WEBPACK_IMPORTED_MODULE_1_redux__.bindActionCreators({
    getCreateWorkListAction: __WEBPACK_IMPORTED_MODULE_3__model_actions__.getCreateWorkListAction,
    getCollWorkListAction: __WEBPACK_IMPORTED_MODULE_3__model_actions__.getCollWorkListAction,
    getDeleteWorkListAction: __WEBPACK_IMPORTED_MODULE_3__model_actions__.getDeleteWorkListAction,
    clearDeletedWorkAction: __WEBPACK_IMPORTED_MODULE_3__model_actions__.clearDeletedWorkAction,
    setSignDialogVisibleAction: __WEBPACK_IMPORTED_MODULE_4__redux_main_actions__.setSignDialogVisibleAction,
    setConfirmDialogInfoAction: __WEBPACK_IMPORTED_MODULE_4__redux_main_actions__.setConfirmDialogInfoAction
  }, dispatch)
}
/* harmony default export */
export default __WEBPACK_IMPORTED_MODULE_0_react_redux__.connect(map_state, map_dispatch)(__WEBPACK_IMPORTED_MODULE_2__template__.WorkView)
/***/
