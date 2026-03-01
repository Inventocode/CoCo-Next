/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：Lx+u
 */

"use strict"

/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_0_redux__ from /* 2KeS */"redux"
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_1_react_redux__ from /* RH2O */"react-redux"
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_2__template__ from /* ARYd */"./template-ARYd"
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_3__redux_main_actions__ from /* /FmP */"../../../src/home/redux/main/actions"
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_4__redux_store__ from /* q9Rd */"../../../src/home/redux/store"
/* unused harmony reexport store_manager */
/* unused harmony reexport ReduxState */
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_5__cfg__ from /* dpNx */"../cfg-dpNx"
/* unused harmony reexport config */
var mapStateToProps = function mapStateToProps(state, ownProps) {
  return {
    signDialogVisible: state.main_reducer.signDialogVisible
  }
}
var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return __WEBPACK_IMPORTED_MODULE_0_redux__.bindActionCreators({
    asyncSetUserInfoAction: __WEBPACK_IMPORTED_MODULE_3__redux_main_actions__.asyncSetUserInfoAction,
    setUserInfoFetchDoneAction: __WEBPACK_IMPORTED_MODULE_3__redux_main_actions__.setUserInfoFetchDoneAction,
    setSignDialogVisibleAction: __WEBPACK_IMPORTED_MODULE_3__redux_main_actions__.setSignDialogVisibleAction,
    setCommonToastAction: __WEBPACK_IMPORTED_MODULE_3__redux_main_actions__.setCommonToastAction
  }, dispatch)
}
/* harmony default export */
export default __WEBPACK_IMPORTED_MODULE_1_react_redux__.connect(mapStateToProps, mapDispatchToProps)(__WEBPACK_IMPORTED_MODULE_2__template__.SignInDialogView)
/***/
