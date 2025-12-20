/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：100
 */

"use strict"

export { SET_EDIT_COOPERATION_INVITATION_URL as e }
export { o as p }
export { SET_READONLY_COOPERATION_INVITATION_URL as g }
export { a as r }
export { SET_IS_AUTHOR as f }
export { c as q }
export { SET_COLL_WORK_ID as d }
export { u as o }
export { UPDATE_COOPERATION_USER_LIST as h }
export { p as s }
export { UPDATE_ONLINE_COOPERATION_USER_LIST as j }
export { h as u }
export { ASYNC_UPDATE_ONLINE_COOPERATION_USER_LIST as a }
export { g as l }
export { UPDATE_USER_FOCUS_OT_INFO_LIST as k }
export { v }
export { ASYNC_UPDATE_USER_FOCUS_OT_INFO as b }
export { y as m }
export { UPDATE_ONLINE_COOPERATION_USER_COLOR_RECORD as i }
export { O as t }
export { INITIAL_OT_STATE as c }
export { C as n }
var /* [auto-meaningful-name] */SET_EDIT_COOPERATION_INVITATION_URL = "SET_EDIT_COOPERATION_INVITATION_URL"
var o = function (e) {
  return {
    type: SET_EDIT_COOPERATION_INVITATION_URL,
    payload: {
      url: e
    }
  }
}
var /* [auto-meaningful-name] */SET_READONLY_COOPERATION_INVITATION_URL = "SET_READONLY_COOPERATION_INVITATION_URL"
var a = function (e) {
  return {
    type: SET_READONLY_COOPERATION_INVITATION_URL,
    payload: {
      url: e
    }
  }
}
var /* [auto-meaningful-name] */SET_IS_AUTHOR = "SET_IS_AUTHOR"
var c = function (e) {
  return {
    type: SET_IS_AUTHOR,
    payload: {
      isAuthor: e
    }
  }
}
var /* [auto-meaningful-name] */SET_COLL_WORK_ID = "SET_COLL_WORK_ID"
var u = function (e) {
  return {
    type: SET_COLL_WORK_ID,
    payload: {
      id: e
    }
  }
}
var /* [auto-meaningful-name] */UPDATE_COOPERATION_USER_LIST = "UPDATE_COOPERATION_USER_LIST"
var p = function (e) {
  return {
    payload: {
      list: e
    },
    type: UPDATE_COOPERATION_USER_LIST
  }
}
var /* [auto-meaningful-name] */UPDATE_ONLINE_COOPERATION_USER_LIST = "UPDATE_ONLINE_COOPERATION_USER_LIST"
var h = function (e) {
  return {
    payload: {
      list: e
    },
    type: UPDATE_ONLINE_COOPERATION_USER_LIST
  }
}
var /* [auto-meaningful-name] */ASYNC_UPDATE_ONLINE_COOPERATION_USER_LIST = "ASYNC_UPDATE_ONLINE_COOPERATION_USER_LIST"
var g = function (e) {
  return {
    payload: {
      list: e
    },
    type: ASYNC_UPDATE_ONLINE_COOPERATION_USER_LIST
  }
}
var /* [auto-meaningful-name] */UPDATE_USER_FOCUS_OT_INFO_LIST = "UPDATE_USER_FOCUS_OT_INFO_LIST"
var v = function (e) {
  return {
    type: UPDATE_USER_FOCUS_OT_INFO_LIST,
    payload: {
      list: e
    }
  }
}
var /* [auto-meaningful-name] */ASYNC_UPDATE_USER_FOCUS_OT_INFO = "ASYNC_UPDATE_USER_FOCUS_OT_INFO"
var y = function (e) {
  return {
    type: ASYNC_UPDATE_USER_FOCUS_OT_INFO,
    payload: {
      info: e
    }
  }
}
var /* [auto-meaningful-name] */UPDATE_ONLINE_COOPERATION_USER_COLOR_RECORD = "UPDATE_ONLINE_COOPERATION_USER_COLOR_RECORD"
var O = function (e) {
  return {
    type: UPDATE_ONLINE_COOPERATION_USER_COLOR_RECORD,
    payload: {
      colors: e
    }
  }
}
var /* [auto-meaningful-name] */INITIAL_OT_STATE = "INITIAL_OT_STATE"
var C = function () {
  return {
    type: INITIAL_OT_STATE,
    payload: undefined
  }
}
export default ASYNC_UPDATE_ONLINE_COOPERATION_USER_LIST
