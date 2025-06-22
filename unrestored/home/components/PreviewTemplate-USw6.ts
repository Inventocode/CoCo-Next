"use strict";

/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_0_redux__ from "external/redux/index-2KeS";
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_1_react_redux__ from "react";
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_2__template__ from "../template-+NBU";
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_3__routes_Home_model_actions__ from "../routes/Home/model/actions-twBc";
var mapStateToProps = function mapStateToProps(state, ownProps) {
  return {
    templateList: state.home_reducer.templateList,
    previewTemplateInfo: state.home_reducer.previewTemplateInfo
  };
};
var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return Object(__WEBPACK_IMPORTED_MODULE_0_redux__.bindActionCreators)({
    setPreviewTemplateInfoAction: __WEBPACK_IMPORTED_MODULE_3__routes_Home_model_actions__.setPreviewTemplateInfoAction
  }, dispatch);
};
/* harmony default export */
export default Object(__WEBPACK_IMPORTED_MODULE_1_react_redux__.connect)(mapStateToProps, mapDispatchToProps)(__WEBPACK_IMPORTED_MODULE_2__template__.PreviewTemplateView);
/***/