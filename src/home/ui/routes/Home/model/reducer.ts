/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：eHP9
 */

import { handleActions } from "redux-actions"
import { update_state } from "../../../../../../unrestored/home/components/utils-jnIn"
import * as actions from "./actions"
import "./interface"

export { homeSaga } from "./saga"

const initial_state = {
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
}

export function handleSetBannerList(state, action) {
  return update_state(state, {
    bannerList: action.payload
  })
}

export function handleSetTopicList(state, action) {
  return update_state(state, {
    topicList: action.payload
  })
}

export function handleSetCourseList(state, action) {
  return update_state(state, {
    courseList: action.payload
  })
}

export function handleSetTemplateList(state, action) {
  return update_state(state, {
    templateList: action.payload
  })
}

export function handleSetWorkList(state, action) {
  return update_state(state, {
    workList: action.payload
  })
}

export function handleSetCourseListVisible(state, action) {
  return update_state(state, {
    courseListVisible: action.payload
  })
}

export function handleSetPlayCourseInfo(state, action) {
  return update_state(state, {
    playCourseInfo: action.payload
  })
}

export function handleSetPreviewTemplateInfo(state, action) {
  return update_state(state, {
    previewTemplateInfo: action.payload
  })
}

export const homeReducer = handleActions({
  [actions.SET_BANNER_LIST_ACTION]: handleSetBannerList,
  [actions.SET_TOPIC_LIST_ACTION]: handleSetTopicList,
  [actions.SET_COURSE_LIST_ACTION]: handleSetCourseList,
  [actions.SET_TEMPLATE_LIST_ACTION]: handleSetTemplateList,
  [actions.SET_WORK_LIST_ACTION]: handleSetWorkList,
  [actions.SET_COURSE_LIST_VISIBLE_ACTION]: handleSetCourseListVisible,
  [actions.SET_PLAY_COURSE_INFO_ACTION]: handleSetPlayCourseInfo,
  [actions.SET_PREVIEW_TEMPLATE_INFO_ACTION]: handleSetPreviewTemplateInfo
}, initial_state)
