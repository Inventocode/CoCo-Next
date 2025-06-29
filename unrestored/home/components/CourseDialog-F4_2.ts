"use strict";

/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_0_redux__ from "redux";
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_1_react_redux__ from "react-redux";
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_2__template__ from "./template-kehq";
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_3__redux_main_actions__ from "../redux/main/actions-_FmP";
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_4__routes_Home_model_actions__ from "../Home/model/actions-twBc";
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_5__redux_store__ from "../redux/store-q9Rd";
/* unused harmony reexport store_manager */
/* unused harmony reexport ReduxState */
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_6__cfg__ from "../cfg-dpNx";
/* unused harmony reexport config */
var mapStateToProps = function mapStateToProps(state, ownProps) {
  return {
    courseDialogVisible: state.main_reducer.courseDialogVisible,
    courseList: state.home_reducer.courseList
  };
};
var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return Object(__WEBPACK_IMPORTED_MODULE_0_redux__.bindActionCreators)({
    setPlayCourseInfoAction: __WEBPACK_IMPORTED_MODULE_4__routes_Home_model_actions__.setPlayCourseInfoAction,
    setCourseDialogVisibleAction: __WEBPACK_IMPORTED_MODULE_3__redux_main_actions__.setCourseDialogVisibleAction
  }, dispatch);
};
/* harmony default export */
export default Object(__WEBPACK_IMPORTED_MODULE_1_react_redux__.connect)(mapStateToProps, mapDispatchToProps)(__WEBPACK_IMPORTED_MODULE_2__template__.CourseDialogView);
/***/