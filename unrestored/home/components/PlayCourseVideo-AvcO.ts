"use strict";

/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_0_redux__ from "redux";
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_1_react_redux__ from "react-redux";
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_2__template__ from "./template-ReOC";
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_3__routes_Home_model_actions__ from "../Home/model/actions-twBc";
var mapStateToProps = function mapStateToProps(state, ownProps) {
  return {
    courseList: state.home_reducer.courseList,
    playCourseInfo: state.home_reducer.playCourseInfo
  };
};
var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return Object(__WEBPACK_IMPORTED_MODULE_0_redux__.bindActionCreators)({
    setPlayCourseInfoAction: __WEBPACK_IMPORTED_MODULE_3__routes_Home_model_actions__.setPlayCourseInfoAction
  }, dispatch);
};
/* harmony default export */
export default Object(__WEBPACK_IMPORTED_MODULE_1_react_redux__.connect)(mapStateToProps, mapDispatchToProps)(__WEBPACK_IMPORTED_MODULE_2__template__.PlayCourseVideoView);
/***/