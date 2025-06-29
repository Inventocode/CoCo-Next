"use strict";

/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_0_redux__ from "redux";
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_1_react_redux__ from "react-redux";
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_2__template__ from "./template-P9xH";
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_3__routes_Work_model_actions__ from "../model/actions-HXaG";
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_4__redux_main_actions__ from "../redux/main/actions-_FmP";
var mapStateToProps = function mapStateToProps(state, ownProps) {
  return {
    userInfo: state.main_reducer.userInfo
  };
};
var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return Object(__WEBPACK_IMPORTED_MODULE_0_redux__.bindActionCreators)({
    quitCollWorkAction: __WEBPACK_IMPORTED_MODULE_3__routes_Work_model_actions__.quitCollWorkAction,
    renameWorkAction: __WEBPACK_IMPORTED_MODULE_3__routes_Work_model_actions__.renameWorkAction,
    deleteWorkAction: __WEBPACK_IMPORTED_MODULE_3__routes_Work_model_actions__.deleteWorkAction,
    againDeleteWorkAction: __WEBPACK_IMPORTED_MODULE_3__routes_Work_model_actions__.againDeleteWorkAction,
    recoverDeleteWorkAction: __WEBPACK_IMPORTED_MODULE_3__routes_Work_model_actions__.recoverDeleteWorkAction,
    setConfirmDialogInfoAction: __WEBPACK_IMPORTED_MODULE_4__redux_main_actions__.setConfirmDialogInfoAction
  }, dispatch);
};
/* harmony default export */
export default Object(__WEBPACK_IMPORTED_MODULE_1_react_redux__.connect)(mapStateToProps, mapDispatchToProps)(__WEBPACK_IMPORTED_MODULE_2__template__.WorkItemView);
/***/