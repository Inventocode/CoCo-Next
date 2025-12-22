/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：KBfb
 */

import { handleActions, Action } from "redux-actions"
import { update_state } from "../../../../unrestored/home/components/utils-jnIn"
import * as actions from "./actions"
import type { CommonToastInfo, ConfirmDialogInfo, MainReducerState, UserInfo } from "./interface"

export { MainReducerState }
export { mainSaga } from "./saga"

const initial_state: MainReducerState = {
  language: "zh",
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
}

export function handleChangeLanguage(state: MainReducerState, action: Action<{ language: string }>) {
  return update_state(state, {
    language: action.payload.language
  })
}

export function handleSetUserInfo(state: MainReducerState, action: Action<null | UserInfo>) {
  if (action.payload) {
    return update_state(state, {
      userInfo: Object.assign({}, state.userInfo, action.payload)
    })
  }
  return update_state(state, { userInfo: null })
}

export function handleSetIsNewUser(state: MainReducerState, action: Action<boolean>) {
  if (state.userInfo) {
    return update_state(state, {
      userInfo: Object.assign({}, state.userInfo, {
        isNewUser: action.payload
      })
    })
  }
}

export function handleSetUserInfoFetchDone(state: MainReducerState, action: Action<void>) {
  return update_state(state, { userInfoFetchDone: true })
}

export function handleSetSignDialogVisible(state: MainReducerState, action: Action<boolean>) {
  return update_state(state, { signDialogVisible: action.payload })
}

export function handleSetCourseDialogVisible(state: MainReducerState, action: Action<boolean>) {
  return update_state(state, { courseDialogVisible: action.payload })
}

export function handleSetCommonToast(state: MainReducerState, action: Action<CommonToastInfo>) {
  return update_state(state, { commonToastInfo: action.payload })
}

export function handleSetConfirmDialogVisible(state: MainReducerState, action: Action<ConfirmDialogInfo>) {
  return update_state(state, { confirmDialogInfo: action.payload })
}

export const main_reducer = handleActions<MainReducerState, any>({
  [actions.ACTION_CHANGE_LANGUAGE]: handleChangeLanguage,
  [actions.SET_USER_INFO_ACTION]: handleSetUserInfo,
  [actions.SET_USER_INFO_FETCH_DONE_ACTION]: handleSetUserInfoFetchDone,
  [actions.SET_IS_NEW_USER_ACTION]: handleSetIsNewUser,
  [actions.SET_SIGN_DIALOG_VISIBLE_ACTION]: handleSetSignDialogVisible,
  [actions.SET_COURSE_DIALOG_VISIBLE_ACTION]: handleSetCourseDialogVisible,
  [actions.SET_COMMON_TOAST_ACTION]: handleSetCommonToast,
  [actions.SET_CONFIRM_DIALOG_INFO_ACTION]: handleSetConfirmDialogVisible
}, initial_state)
