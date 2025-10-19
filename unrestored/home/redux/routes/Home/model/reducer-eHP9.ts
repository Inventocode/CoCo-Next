/** 
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：eHP9
 */

"use strict";

/* unused harmony export handleSetBannerList */
/* unused harmony export handleSetTopicList */
/* unused harmony export handleSetCourseList */
/* unused harmony export handleSetTemplateList */
/* unused harmony export handleSetWorkList */
/* unused harmony export handleSetCourseListVisible */
/* unused harmony export handleSetPlayCourseInfo */
/* unused harmony export handleSetPreviewTemplateInfo */
/* harmony export (binding) */
/* harmony import */
export { homeReducer };
import * as __WEBPACK_IMPORTED_MODULE_0_redux_actions__ from "redux-actions";
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_1__utils__ from "../../../../components/utils-jnIn";
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_2__actions__ from "../../../../Home/model/actions-twBc";
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_3__interface__ from "./interface-vDhS";
/* harmony import */
import __WEBPACK_IMPORTED_MODULE_3__interface___default from "./interface-vDhS";
/* unused harmony reexport HomeReducerState */
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_4__saga__ from "./saga-TNoC";
/* harmony reexport (binding) */
export { homeSaga } from "./saga-TNoC";
var _handleActions;
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}
var initial_state = {
  courseListVisible: !localStorage.getItem("homeCourseListVisible"),
  playCourseInfo: {
    visible: false,
    id: -1
  },
  previewTemplateInfo: {
    visible: false,
    id: -1
  },
  bannerList: [],
  topicList: [],
  courseList: [],
  templateList: [],
  workList: []
};
var handleSetBannerList = function handleSetBannerList(state, action) {
  return __WEBPACK_IMPORTED_MODULE_1__utils__.update_state(state, {
    bannerList: action.payload
  });
};
var handleSetTopicList = function handleSetTopicList(state, action) {
  return __WEBPACK_IMPORTED_MODULE_1__utils__.update_state(state, {
    topicList: action.payload
  });
};
var handleSetCourseList = function handleSetCourseList(state, action) {
  return __WEBPACK_IMPORTED_MODULE_1__utils__.update_state(state, {
    courseList: action.payload
  });
};
var handleSetTemplateList = function handleSetTemplateList(state, action) {
  return __WEBPACK_IMPORTED_MODULE_1__utils__.update_state(state, {
    templateList: action.payload
  });
};
var handleSetWorkList = function handleSetWorkList(state, action) {
  return __WEBPACK_IMPORTED_MODULE_1__utils__.update_state(state, {
    workList: action.payload
  });
};
var handleSetCourseListVisible = function handleSetCourseListVisible(state, action) {
  return __WEBPACK_IMPORTED_MODULE_1__utils__.update_state(state, {
    courseListVisible: action.payload
  });
};
var handleSetPlayCourseInfo = function handleSetPlayCourseInfo(state, action) {
  return __WEBPACK_IMPORTED_MODULE_1__utils__.update_state(state, {
    playCourseInfo: action.payload
  });
};
var handleSetPreviewTemplateInfo = function handleSetPreviewTemplateInfo(state, action) {
  return __WEBPACK_IMPORTED_MODULE_1__utils__.update_state(state, {
    previewTemplateInfo: action.payload
  });
};
var homeReducer = __WEBPACK_IMPORTED_MODULE_0_redux_actions__.handleActions((_handleActions = {}, _defineProperty(_handleActions, __WEBPACK_IMPORTED_MODULE_2__actions__.SET_BANNER_LIST_ACTION, handleSetBannerList), _defineProperty(_handleActions, __WEBPACK_IMPORTED_MODULE_2__actions__.SET_TOPIC_LIST_ACTION, handleSetTopicList), _defineProperty(_handleActions, __WEBPACK_IMPORTED_MODULE_2__actions__.SET_COURSE_LIST_ACTION, handleSetCourseList), _defineProperty(_handleActions, __WEBPACK_IMPORTED_MODULE_2__actions__.SET_TEMPLATE_LIST_ACTION, handleSetTemplateList), _defineProperty(_handleActions, __WEBPACK_IMPORTED_MODULE_2__actions__.SET_WORK_LIST_ACTION, handleSetWorkList), _defineProperty(_handleActions, __WEBPACK_IMPORTED_MODULE_2__actions__.SET_COURSE_LIST_VISIBLE_ACTION, handleSetCourseListVisible), _defineProperty(_handleActions, __WEBPACK_IMPORTED_MODULE_2__actions__.SET_PLAY_COURSE_INFO_ACTION, handleSetPlayCourseInfo), _defineProperty(_handleActions, __WEBPACK_IMPORTED_MODULE_2__actions__.SET_PREVIEW_TEMPLATE_INFO_ACTION, handleSetPreviewTemplateInfo), _handleActions), initial_state);

/***/