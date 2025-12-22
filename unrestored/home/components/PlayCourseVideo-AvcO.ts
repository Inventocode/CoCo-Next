/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：AvcO
 */

"use strict"

/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_0_redux__ from "redux"
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_1_react_redux__ from "react-redux"
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_2__template__ from "./template-ReOC"
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_3__routes_Home_model_actions__ from "../../../src/home/ui/routes/Home/model/actions"
var mapStateToProps = function mapStateToProps(state, ownProps) {
  return {
    courseList: state.home_reducer.courseList,
    playCourseInfo: state.home_reducer.playCourseInfo
  }
}
var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return __WEBPACK_IMPORTED_MODULE_0_redux__.bindActionCreators({
    setPlayCourseInfoAction: __WEBPACK_IMPORTED_MODULE_3__routes_Home_model_actions__.setPlayCourseInfoAction
  }, dispatch)
}
/* harmony default export */
export default __WEBPACK_IMPORTED_MODULE_1_react_redux__.connect(mapStateToProps, mapDispatchToProps)(__WEBPACK_IMPORTED_MODULE_2__template__.PlayCourseVideoView)
/***/
