/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：KBfb
 */

import { handleActions, Action } from "redux-actions"
import { update_state } from "../../../../unrestored/home/components/utils-jnIn"
import { ACTION_CHANGE_LANGUAGE, SET_COMMON_TOAST_ACTION, SET_CONFIRM_DIALOG_INFO_ACTION, SET_COURSE_DIALOG_VISIBLE_ACTION, SET_IS_NEW_USER_ACTION, SET_SIGN_DIALOG_VISIBLE_ACTION, SET_USER_INFO_ACTION, SET_USER_INFO_FETCH_DONE_ACTION } from "./actions"
import type { ICommonToastInfo, IConfirmDialogInfo, IMainReducerState, IUserInfo } from "./interface"

export { IMainReducerState }
export { mainSaga } from "./saga"

const initial_state: IMainReducerState = {
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

export function handleChangeLanguage(state: IMainReducerState, action: Action<{ language: string }>) {
  return update_state(state, {
    language: action.payload.language
  })
}

export function handleSetUserInfo(state: IMainReducerState, action: Action<null | IUserInfo>) {
  if (action.payload) {
    return update_state(state, {
      userInfo: Object.assign({}, state.userInfo, action.payload)
    })
  }
  return update_state(state, { userInfo: null })
}

export function handleSetIsNewUser(state: IMainReducerState, action: Action<boolean>) {
  if (state.userInfo) {
    return update_state(state, {
      userInfo: Object.assign({}, state.userInfo, {
        isNewUser: action.payload
      })
    })
  }
}

export function handleSetUserInfoFetchDone(state: IMainReducerState, action: Action<void>) {
  return update_state(state, { userInfoFetchDone: true })
}

export function handleSetSignDialogVisible(state: IMainReducerState, action: Action<boolean>) {
  return update_state(state, { signDialogVisible: action.payload })
}

export function handleSetCourseDialogVisible(state: IMainReducerState, action: Action<boolean>) {
  return update_state(state, { courseDialogVisible: action.payload })
}

export function handleSetCommonToast(state: IMainReducerState, action: Action<ICommonToastInfo>) {
  return update_state(state, { commonToastInfo: action.payload })
}

export function handleSetConfirmDialogVisible(state: IMainReducerState, action: Action<IConfirmDialogInfo>) {
  return update_state(state, { confirmDialogInfo: action.payload })
}

export const main_reducer = handleActions<IMainReducerState, any>({
  [ACTION_CHANGE_LANGUAGE]: handleChangeLanguage,
  [SET_USER_INFO_ACTION]: handleSetUserInfo,
  [SET_USER_INFO_FETCH_DONE_ACTION]: handleSetUserInfoFetchDone,
  [SET_IS_NEW_USER_ACTION]: handleSetIsNewUser,
  [SET_SIGN_DIALOG_VISIBLE_ACTION]: handleSetSignDialogVisible,
  [SET_COURSE_DIALOG_VISIBLE_ACTION]: handleSetCourseDialogVisible,
  [SET_COMMON_TOAST_ACTION]: handleSetCommonToast,
  [SET_CONFIRM_DIALOG_INFO_ACTION]: handleSetConfirmDialogVisible
}, initial_state)
