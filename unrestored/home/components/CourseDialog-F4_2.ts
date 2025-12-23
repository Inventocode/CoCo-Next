/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：F4/2
 */

"use strict"

/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_0_redux__ from "redux"
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_1_react_redux__ from "react-redux"
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_2__template__ from "./template-kehq"
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_3__redux_main_actions__ from "../../../src/home/redux/main/actions"
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_4__routes_Home_model_actions__ from "../../../src/home/ui/routes/Home/model/actions"
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_5__redux_store__ from "../../../src/home/redux/store"
/* unused harmony reexport store_manager */
/* unused harmony reexport ReduxState */
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_6__cfg__ from "../cfg-dpNx"
/* unused harmony reexport config */
var mapStateToProps = function mapStateToProps(state, ownProps) {
  return {
    courseDialogVisible: state.main_reducer.courseDialogVisible,
    courseList: state.home_reducer.courseList
  }
}
var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return __WEBPACK_IMPORTED_MODULE_0_redux__.bindActionCreators({
    setPlayCourseInfoAction: __WEBPACK_IMPORTED_MODULE_4__routes_Home_model_actions__.setPlayCourseInfoAction,
    setCourseDialogVisibleAction: __WEBPACK_IMPORTED_MODULE_3__redux_main_actions__.setCourseDialogVisibleAction
  }, dispatch)
}
/* harmony default export */
export default __WEBPACK_IMPORTED_MODULE_1_react_redux__.connect(mapStateToProps, mapDispatchToProps)(__WEBPACK_IMPORTED_MODULE_2__template__.CourseDialogView)
/***/
