"use strict";

/* unused harmony export handleChangeLanguage */
/* unused harmony export handleSetUserInfo */
/* unused harmony export handleSetIsNewUser */
/* unused harmony export handleSetUserInfoFetchDone */
/* unused harmony export handleSetSignDialogVisible */
/* unused harmony export handleSetCourseDialogVisible */
/* unused harmony export handleSetCommonToast */
/* unused harmony export handleSetConfirmDialogVisible */
/* harmony export (binding) */
export { main_reducer };
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_0_redux_actions__ from "redux-actions";
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_1__utils__ from "../../components/utils-jnIn";
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_2__actions__ from "./actions-_FmP";
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_3__interface__ from "./interface-faTg";
/* harmony import */
import __WEBPACK_IMPORTED_MODULE_3__interface___default from "./interface-faTg";
/* unused harmony reexport MainReducerState */
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_4__saga__ from "./saga-ePvC";
/* harmony reexport (binding) */
export { mainSaga } from "./saga-ePvC";
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
  language: 'zh',
  signDialogVisible: false,
  courseDialogVisible: false,
  userInfo: null,
  userInfoFetchDone: false,
  commonToastInfo: {
    visible: false
  },
  confirmDialogInfo: {
    visible: false
  }
};
var handleChangeLanguage = function handleChangeLanguage(state, action) {
  return Object(__WEBPACK_IMPORTED_MODULE_1__utils__.update_state)(state, {
    language: action.payload.language
  });
};
var handleSetUserInfo = function handleSetUserInfo(state, action) {
  if (action.payload) {
    return Object(__WEBPACK_IMPORTED_MODULE_1__utils__.update_state)(state, {
      userInfo: Object.assign({}, state.userInfo, action.payload)
    });
  }
  return Object(__WEBPACK_IMPORTED_MODULE_1__utils__.update_state)(state, {
    userInfo: null
  });
};
var handleSetIsNewUser = function handleSetIsNewUser(state, action) {
  if (state.userInfo) {
    return Object(__WEBPACK_IMPORTED_MODULE_1__utils__.update_state)(state, {
      userInfo: Object.assign({}, state.userInfo, {
        isNewUser: action.payload
      })
    });
  }
};
var handleSetUserInfoFetchDone = function handleSetUserInfoFetchDone(state, action) {
  return Object(__WEBPACK_IMPORTED_MODULE_1__utils__.update_state)(state, {
    userInfoFetchDone: true
  });
};
var handleSetSignDialogVisible = function handleSetSignDialogVisible(state, action) {
  return Object(__WEBPACK_IMPORTED_MODULE_1__utils__.update_state)(state, {
    signDialogVisible: action.payload
  });
};
var handleSetCourseDialogVisible = function handleSetCourseDialogVisible(state, action) {
  return Object(__WEBPACK_IMPORTED_MODULE_1__utils__.update_state)(state, {
    courseDialogVisible: action.payload
  });
};
var handleSetCommonToast = function handleSetCommonToast(state, action) {
  return Object(__WEBPACK_IMPORTED_MODULE_1__utils__.update_state)(state, {
    commonToastInfo: action.payload
  });
};
var handleSetConfirmDialogVisible = function handleSetConfirmDialogVisible(state, action) {
  return Object(__WEBPACK_IMPORTED_MODULE_1__utils__.update_state)(state, {
    confirmDialogInfo: action.payload
  });
};
var main_reducer = Object(__WEBPACK_IMPORTED_MODULE_0_redux_actions__.handleActions)((_handleActions = {}, _defineProperty(_handleActions, __WEBPACK_IMPORTED_MODULE_2__actions__.ACTION_CHANGE_LANGUAGE, handleChangeLanguage), _defineProperty(_handleActions, __WEBPACK_IMPORTED_MODULE_2__actions__.SET_USER_INFO_ACTION, handleSetUserInfo), _defineProperty(_handleActions, __WEBPACK_IMPORTED_MODULE_2__actions__.SET_USER_INFO_FETCH_DONE_ACTION, handleSetUserInfoFetchDone), _defineProperty(_handleActions, __WEBPACK_IMPORTED_MODULE_2__actions__.SET_IS_NEW_USER_ACTION, handleSetIsNewUser), _defineProperty(_handleActions, __WEBPACK_IMPORTED_MODULE_2__actions__.SET_SIGN_DIALOG_VISIBLE_ACTION, handleSetSignDialogVisible), _defineProperty(_handleActions, __WEBPACK_IMPORTED_MODULE_2__actions__.SET_COURSE_DIALOG_VISIBLE_ACTION, handleSetCourseDialogVisible), _defineProperty(_handleActions, __WEBPACK_IMPORTED_MODULE_2__actions__.SET_COMMON_TOAST_ACTION, handleSetCommonToast), _defineProperty(_handleActions, __WEBPACK_IMPORTED_MODULE_2__actions__.SET_CONFIRM_DIALOG_INFO_ACTION, handleSetConfirmDialogVisible), _handleActions), initial_state);

/***/