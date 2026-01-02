/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：sEiI
 */

"use strict"

/* harmony export (binding) */
/* harmony import */
export { Header }
import * as __WEBPACK_IMPORTED_MODULE_0_redux__ from "redux"
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_1_react_redux__ from "react-redux"
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_2__template__ from "./template"
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_3__routes_Home_model_actions__ from "../../routes/Home/model/actions"
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_4__redux_main_actions__ from "../../../redux/actions"
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_5__redux_store__ from "../../../redux/store"
/* unused harmony reexport store_manager */
/* unused harmony reexport ReduxState */
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_6__cfg__ from "../../../../../unrestored/home/cfg-dpNx"
/* unused harmony reexport config */
var mapStateToProps = function mapStateToProps(state, ownProps) {
  return {
    userInfo: state.main_reducer.userInfo,
    // 主页-入门教程是否显示
    courseListVisible: state.home_reducer.courseListVisible
  }
}
var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return __WEBPACK_IMPORTED_MODULE_0_redux__.bindActionCreators({
    setCourseListVisibleAction: __WEBPACK_IMPORTED_MODULE_3__routes_Home_model_actions__.setCourseListVisibleAction,
    asyncSetUserInfoAction: __WEBPACK_IMPORTED_MODULE_4__redux_main_actions__.asyncSetUserInfoAction,
    setSignDialogVisibleAction: __WEBPACK_IMPORTED_MODULE_4__redux_main_actions__.setSignDialogVisibleAction,
    setCourseDialogVisibleAction: __WEBPACK_IMPORTED_MODULE_4__redux_main_actions__.setCourseDialogVisibleAction
  }, dispatch)
}
var Header = __WEBPACK_IMPORTED_MODULE_1_react_redux__.connect(mapStateToProps, mapDispatchToProps)(__WEBPACK_IMPORTED_MODULE_2__template__.HeaderView)

/***/
