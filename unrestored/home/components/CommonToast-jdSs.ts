"use strict";

/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_0_redux__ from "redux";
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_1_react_redux__ from "react-redux";
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_2__template__ from "../template-Fp3z";
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_3__redux_main_actions__ from "../redux/main/actions-_FmP";
var mapStateToProps = function mapStateToProps(state, ownProps) {
  return {
    commonToastInfo: state.main_reducer.commonToastInfo
  };
};
var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return Object(__WEBPACK_IMPORTED_MODULE_0_redux__.bindActionCreators)({
    setCommonToastAction: __WEBPACK_IMPORTED_MODULE_3__redux_main_actions__.setCommonToastAction
  }, dispatch);
};
/* harmony default export */
export default Object(__WEBPACK_IMPORTED_MODULE_1_react_redux__.connect)(mapStateToProps, mapDispatchToProps)(__WEBPACK_IMPORTED_MODULE_2__template__.CommonToastView);
/***/