/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：FSbX
 */

"use strict"

/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_0_redux__ from /* 2KeS */"redux"
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_1_react_redux__ from /* RH2O */"react-redux"
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_2__template__ from /* P9xH */"./template"
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_3__routes_Work_model_actions__ from /* HXaG */"../../routes/Work/model/actions"
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_4__redux_main_actions__ from /* /FmP */"../../../redux/main/actions"
var mapStateToProps = function mapStateToProps(state, ownProps) {
  return {
    userInfo: state.main_reducer.userInfo
  }
}
var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return __WEBPACK_IMPORTED_MODULE_0_redux__.bindActionCreators({
    quitCollWorkAction: __WEBPACK_IMPORTED_MODULE_3__routes_Work_model_actions__.quitCollWorkAction,
    renameWorkAction: __WEBPACK_IMPORTED_MODULE_3__routes_Work_model_actions__.renameWorkAction,
    deleteWorkAction: __WEBPACK_IMPORTED_MODULE_3__routes_Work_model_actions__.deleteWorkAction,
    againDeleteWorkAction: __WEBPACK_IMPORTED_MODULE_3__routes_Work_model_actions__.againDeleteWorkAction,
    recoverDeleteWorkAction: __WEBPACK_IMPORTED_MODULE_3__routes_Work_model_actions__.recoverDeleteWorkAction,
    setConfirmDialogInfoAction: __WEBPACK_IMPORTED_MODULE_4__redux_main_actions__.setConfirmDialogInfoAction
  }, dispatch)
}
/* harmony default export */
export default __WEBPACK_IMPORTED_MODULE_1_react_redux__.connect(mapStateToProps, mapDispatchToProps)(__WEBPACK_IMPORTED_MODULE_2__template__.WorkItemView)
/***/
