/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：/FmP
 */

import { createAction } from "redux-actions"

export const ACTION_CHANGE_LANGUAGE = "main/change_language"
export const changeLanguageAction = createAction(ACTION_CHANGE_LANGUAGE)

export const SET_SIGN_DIALOG_VISIBLE_ACTION = "main/set_sign_dialog_visible"
export const setSignDialogVisibleAction = createAction(SET_SIGN_DIALOG_VISIBLE_ACTION)

export const SET_COURSE_DIALOG_VISIBLE_ACTION = "main/set_course_dialog_visible"
export const setCourseDialogVisibleAction = createAction(SET_COURSE_DIALOG_VISIBLE_ACTION)

export const GET_IS_NEW_USER_ACTION = "main/get_is_new_user"
export const getIsNewUserAction = createAction(GET_IS_NEW_USER_ACTION)

export const SET_IS_NEW_USER_ACTION = "main/set_is_new_user"
export const setIsNewUserAction = createAction(SET_IS_NEW_USER_ACTION)

export const SET_USER_INFO_ACTION = "main/set_user_info"
export const setUserInfoAction = createAction(SET_USER_INFO_ACTION)

export const ASYNC_SET_USER_INFO_ACTION = "main/async_set_user_info"
export const asyncSetUserInfoAction = createAction(ASYNC_SET_USER_INFO_ACTION)

export const SET_USER_INFO_FETCH_DONE_ACTION = "main/set_user_info_fetch_done"
export const setUserInfoFetchDoneAction = createAction(SET_USER_INFO_FETCH_DONE_ACTION)

export const SET_COMMON_TOAST_ACTION = "main/set_common_toast"
export const setCommonToastAction = createAction(SET_COMMON_TOAST_ACTION)

export const SET_CONFIRM_DIALOG_INFO_ACTION = "main/set_confirm_dialog_info"
export const setConfirmDialogInfoAction = createAction(SET_CONFIRM_DIALOG_INFO_ACTION)
