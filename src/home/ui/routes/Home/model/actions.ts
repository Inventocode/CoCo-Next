/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：twBc
 */

import { createAction } from "redux-actions"

export const GET_BANNER_LIST_ACTION = "home/get_banner_list"
export const getBannerListAction = createAction(GET_BANNER_LIST_ACTION)

export const SET_BANNER_LIST_ACTION = "home/set_banner_list"
export const setBannerListAction = createAction(SET_BANNER_LIST_ACTION)

export const GET_TOPIC_LIST_ACTION = "home/get_topic_list"
export const getTopicListAction = createAction(GET_TOPIC_LIST_ACTION)

export const SET_TOPIC_LIST_ACTION = "home/set_topic_list"
export const setTopicListAction = createAction(SET_TOPIC_LIST_ACTION)

export const GET_COURSE_LIST_ACTION = "home/get_course_list"
export const getCourseListAction = createAction(GET_COURSE_LIST_ACTION)

export const SET_COURSE_LIST_ACTION = "home/set_course_list"
export const setCourseListAction = createAction(SET_COURSE_LIST_ACTION)

export const GET_TEMPLATE_LIST_ACTION = "home/get_template_list"
export const getTemplateListAction = createAction(GET_TEMPLATE_LIST_ACTION)

export const SET_TEMPLATE_LIST_ACTION = "home/set_template_list"
export const setTemplateListAction = createAction(SET_TEMPLATE_LIST_ACTION)

export const GET_WORK_LIST_ACTION = "home/get_work_list"
export const getWorkListAction = createAction(GET_WORK_LIST_ACTION)

export const SET_WORK_LIST_ACTION = "home/set_work_list"
export const setWorkListAction = createAction(SET_WORK_LIST_ACTION)

export const SET_COURSE_LIST_VISIBLE_ACTION = "home/set_course_list_visible"
export const setCourseListVisibleAction = createAction(SET_COURSE_LIST_VISIBLE_ACTION)

export const SET_PLAY_COURSE_INFO_ACTION = "home/set_play_course_info"
export const setPlayCourseInfoAction = createAction(SET_PLAY_COURSE_INFO_ACTION)

export const SET_PREVIEW_TEMPLATE_INFO_ACTION = "home/set_preview_template_info"
export const setPreviewTemplateInfoAction = createAction(SET_PREVIEW_TEMPLATE_INFO_ACTION)
