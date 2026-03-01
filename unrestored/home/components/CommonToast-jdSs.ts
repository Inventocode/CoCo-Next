/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：jdSs
 */

"use strict"

/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_0_redux__ from /* 2KeS */"redux"
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_1_react_redux__ from /* RH2O */"react-redux"
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_2__template__ from /* Fp3z */"./template-Fp3z"
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_3__redux_main_actions__ from /* /FmP */"../../../src/home/redux/main/actions"
var mapStateToProps = function mapStateToProps(state, ownProps) {
  return {
    commonToastInfo: state.main_reducer.commonToastInfo
  }
}
var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return __WEBPACK_IMPORTED_MODULE_0_redux__.bindActionCreators({
    setCommonToastAction: __WEBPACK_IMPORTED_MODULE_3__redux_main_actions__.setCommonToastAction
  }, dispatch)
}
/* harmony default export */
export default __WEBPACK_IMPORTED_MODULE_1_react_redux__.connect(mapStateToProps, mapDispatchToProps)(__WEBPACK_IMPORTED_MODULE_2__template__.CommonToastView)
/***/
