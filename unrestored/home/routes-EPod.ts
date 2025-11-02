/** 
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：EPod
 */

"use strict"

/* harmony export (binding) */
/* harmony import */
export { ViewRouter }
import * as __WEBPACK_IMPORTED_MODULE_0_react__ from "react"
/* harmony import */
import __WEBPACK_IMPORTED_MODULE_0_react___default from "react"
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_1_react_redux__ from "react-redux"
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_2_redux__ from "redux"
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_3_react_router_dom__ from "react-router-dom"
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_4__template__ from "./template-Y_qu"
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_5__Home_model_actions__ from "./Home/model/actions-twBc"
/**
 * use withRouter to listen the change of router
 * withRouter show use outside of Router
 * in typescript is better to use withRouter to constructor HOC than as a decorator
 */
function map_state(state) {
  return {
    signDialogVisible: state.main_reducer.signDialogVisible,
    courseDialogVisible: state.main_reducer.courseDialogVisible,
    playCourseInfo: state.home_reducer.playCourseInfo
  }
}
function map_dispatch(dispatch) {
  return __WEBPACK_IMPORTED_MODULE_2_redux__.bindActionCreators({
    getTemplateListAction: __WEBPACK_IMPORTED_MODULE_5__Home_model_actions__.getTemplateListAction,
    getCourseListAction: __WEBPACK_IMPORTED_MODULE_5__Home_model_actions__.getCourseListAction
  }, dispatch)
}
var ViewWithRouter = __WEBPACK_IMPORTED_MODULE_3_react_router_dom__.withRouter(__WEBPACK_IMPORTED_MODULE_1_react_redux__.connect(map_state, map_dispatch)(__WEBPACK_IMPORTED_MODULE_4__template__.ViewRouterComponent))
var ViewRouter = function ViewRouter() {
  return __WEBPACK_IMPORTED_MODULE_0_react__.createElement(__WEBPACK_IMPORTED_MODULE_3_react_router_dom__.BrowserRouter, null, __WEBPACK_IMPORTED_MODULE_0_react__.createElement(ViewWithRouter, null))
}

/***/
