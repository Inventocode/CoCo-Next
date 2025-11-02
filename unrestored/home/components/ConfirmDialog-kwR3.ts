/** 
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：kwR3
 */

"use strict"

/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_0_redux__ from "redux"
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_1_react_redux__ from "react-redux"
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_2__template__ from "./template-_TF1"
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_3__redux_main_actions__ from "../redux/main/actions-_FmP"
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_4__redux_store__ from "../redux/store-q9Rd"
/* unused harmony reexport store_manager */
/* unused harmony reexport ReduxState */
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_5__cfg__ from "../cfg-dpNx"
/* unused harmony reexport config */
var mapStateToProps = function mapStateToProps(state, ownProps) {
  return {
    confirmDialogInfo: state.main_reducer.confirmDialogInfo
  }
}
var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return __WEBPACK_IMPORTED_MODULE_0_redux__.bindActionCreators({
    setConfirmDialogInfoAction: __WEBPACK_IMPORTED_MODULE_3__redux_main_actions__.setConfirmDialogInfoAction
  }, dispatch)
}
/* harmony default export */
export default __WEBPACK_IMPORTED_MODULE_1_react_redux__.connect(mapStateToProps, mapDispatchToProps)(__WEBPACK_IMPORTED_MODULE_2__template__.ConfirmDialogView)
/***/
