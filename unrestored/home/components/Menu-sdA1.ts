"use strict";

/* harmony export (binding) */
export { Menu };
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_0_redux__ from "external/redux/index-2KeS";
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_1_react_redux__ from "react";
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_2_react_router__ from "react";
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_3__template__ from "../template-My5k";
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_4__redux_store__ from "../redux/store-q9Rd";
/* unused harmony reexport store_manager */
/* unused harmony reexport ReduxState */
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_5__cfg__ from "../cfg-dpNx";
/* unused harmony reexport config */
var mapStateToProps = function mapStateToProps(state, ownProps) {
  return {};
};
var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return Object(__WEBPACK_IMPORTED_MODULE_0_redux__.bindActionCreators)({}, dispatch);
};
var Menu = Object(__WEBPACK_IMPORTED_MODULE_2_react_router__.withRouter)(Object(__WEBPACK_IMPORTED_MODULE_1_react_redux__.connect)(mapStateToProps, mapDispatchToProps)(__WEBPACK_IMPORTED_MODULE_3__template__.MenuView));

/***/