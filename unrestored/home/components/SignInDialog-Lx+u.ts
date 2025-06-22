"use strict";

/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_0_redux__ from "redux";
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_1_react_redux__ from "react";
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_2__template__ from "../template-ARYd";
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_3__redux_main_actions__ from "../redux/main/actions-_FmP";
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_4__redux_store__ from "../redux/store-q9Rd";
/* unused harmony reexport store_manager */
/* unused harmony reexport ReduxState */
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_5__cfg__ from "../cfg-dpNx";
/* unused harmony reexport config */
var mapStateToProps = function mapStateToProps(state, ownProps) {
  return {
    signDialogVisible: state.main_reducer.signDialogVisible
  };
};
var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return Object(__WEBPACK_IMPORTED_MODULE_0_redux__.bindActionCreators)({
    asyncSetUserInfoAction: __WEBPACK_IMPORTED_MODULE_3__redux_main_actions__.asyncSetUserInfoAction,
    setUserInfoFetchDoneAction: __WEBPACK_IMPORTED_MODULE_3__redux_main_actions__.setUserInfoFetchDoneAction,
    setSignDialogVisibleAction: __WEBPACK_IMPORTED_MODULE_3__redux_main_actions__.setSignDialogVisibleAction
  }, dispatch);
};
/* harmony default export */
export default Object(__WEBPACK_IMPORTED_MODULE_1_react_redux__.connect)(mapStateToProps, mapDispatchToProps)(__WEBPACK_IMPORTED_MODULE_2__template__.SignInDialogView);
/***/