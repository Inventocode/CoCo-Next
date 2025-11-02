/** 
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：USw6
 */

"use strict"

/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_0_redux__ from "redux"
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_1_react_redux__ from "react-redux"
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_2__template__ from "./template-+NBU"
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_3__routes_Home_model_actions__ from "../Home/model/actions-twBc"
var mapStateToProps = function mapStateToProps(state, ownProps) {
  return {
    templateList: state.home_reducer.templateList,
    previewTemplateInfo: state.home_reducer.previewTemplateInfo
  }
}
var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return __WEBPACK_IMPORTED_MODULE_0_redux__.bindActionCreators({
    setPreviewTemplateInfoAction: __WEBPACK_IMPORTED_MODULE_3__routes_Home_model_actions__.setPreviewTemplateInfoAction
  }, dispatch)
}
/* harmony default export */
export default __WEBPACK_IMPORTED_MODULE_1_react_redux__.connect(mapStateToProps, mapDispatchToProps)(__WEBPACK_IMPORTED_MODULE_2__template__.PreviewTemplateView)
/***/
