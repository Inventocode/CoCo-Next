"use strict";

/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_0_redux__ from "redux";
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_1_react_redux__ from "react";
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_2__template__ from "./template-+DtV";
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_3__model_actions__ from "./routes/Home/model/actions-twBc";
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_4__redux_main_actions__ from "./redux/main/actions-_FmP";
var mapStateToProps = function mapStateToProps(state, ownProps) {
  return {
    userInfo: state.main_reducer.userInfo,
    userInfoFetchDone: state.main_reducer.userInfoFetchDone,
    courseListVisible: state.home_reducer.courseListVisible,
    bannerList: state.home_reducer.bannerList,
    topicList: state.home_reducer.topicList,
    courseList: state.home_reducer.courseList,
    templateList: state.home_reducer.templateList,
    workList: state.home_reducer.workList
  };
};
var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return Object(__WEBPACK_IMPORTED_MODULE_0_redux__.bindActionCreators)({
    getBannerListAction: __WEBPACK_IMPORTED_MODULE_3__model_actions__.getBannerListAction,
    getTopicListAction: __WEBPACK_IMPORTED_MODULE_3__model_actions__.getTopicListAction,
    getCourseListAction: __WEBPACK_IMPORTED_MODULE_3__model_actions__.getCourseListAction,
    getTemplateListAction: __WEBPACK_IMPORTED_MODULE_3__model_actions__.getTemplateListAction,
    getWorkListAction: __WEBPACK_IMPORTED_MODULE_3__model_actions__.getWorkListAction,
    setCourseListVisibleAction: __WEBPACK_IMPORTED_MODULE_3__model_actions__.setCourseListVisibleAction,
    setPlayCourseInfoAction: __WEBPACK_IMPORTED_MODULE_3__model_actions__.setPlayCourseInfoAction,
    setPreviewTemplateInfoAction: __WEBPACK_IMPORTED_MODULE_3__model_actions__.setPreviewTemplateInfoAction,
    setCommonToastAction: __WEBPACK_IMPORTED_MODULE_4__redux_main_actions__.setCommonToastAction
  }, dispatch);
};
/* harmony default export */
export default Object(__WEBPACK_IMPORTED_MODULE_1_react_redux__.connect)(mapStateToProps, mapDispatchToProps)(__WEBPACK_IMPORTED_MODULE_2__template__.HomeView);
/***/