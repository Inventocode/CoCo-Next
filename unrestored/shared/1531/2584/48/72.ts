/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：72
 */

"use strict"

export { SET_NAVIGATOR as h }
export { SET_WIDGET as j }
export { UNSET_WIDGET as k }
export { UPDATE_SCREEN as l }
export { SET_CAMERA_DIRECTION as f }
export { SET_SWITCH_SCREEN_PARAM as i }
export { SET_EMULATOR_PHONE_INFO as g }
export { u as t }
export { d as u }
export { p as v }
export { f as w }
export { h as x }
export { m as r }
export { ASYNC_SET_CLOUD_DOC_FIELD_VALUE as e }
export { _ as q }
export { ASYNC_DELETE_CLOUD_DOC_FIELD_VALUE as b }
export { b as n }
export { ASYNC_CLEAR_CLOUD_DOC_ALL_FIELD_VALUE as a }
export { E as m }
export { ASYNC_GET_CLOUD_DOC_FIELD_VALUE as d }
export { w as p }
export { ASYNC_GET_CLOUD_DOC_ALL_FIELD_VALUE as c }
export { T as o }
export { S as s }
var /* [auto-meaningful-name] */SET_NAVIGATOR = "SET_NAVIGATOR"
var /* [auto-meaningful-name] */SET_WIDGET = "SET_WIDGET"
var /* [auto-meaningful-name] */UNSET_WIDGET = "UNSET_WIDGET"
var /* [auto-meaningful-name] */UPDATE_SCREEN = "UPDATE_SCREEN"
var /* [auto-meaningful-name] */SET_CAMERA_DIRECTION = "SET_CAMERA_DIRECTION"
var /* [auto-meaningful-name] */SET_SWITCH_SCREEN_PARAM = "SET_SWITCH_SCREEN_PARAM"
var /* [auto-meaningful-name] */SET_EMULATOR_PHONE_INFO = "SET_EMULATOR_PHONE_INFO"
var u = function (e) {
  return {
    payload: {
      navigator: e
    },
    type: SET_NAVIGATOR
  }
}
var d = function (e) {
  return {
    payload: {
      param: e
    },
    type: SET_SWITCH_SCREEN_PARAM
  }
}
var p = function (e, t) {
  return {
    payload: {
      id: e,
      widget: t
    },
    type: SET_WIDGET
  }
}
var f = function (e) {
  return {
    payload: {
      id: e
    },
    type: UNSET_WIDGET
  }
}
var h = function (e, t, n) {
  return {
    payload: {
      id: e,
      key: t,
      value: n
    },
    type: UPDATE_SCREEN
  }
}
var m = function (e) {
  return {
    payload: {
      cameraDirection: e
    },
    type: SET_CAMERA_DIRECTION
  }
}
var /* [auto-meaningful-name] */ASYNC_SET_CLOUD_DOC_FIELD_VALUE = "ASYNC_SET_CLOUD_DOC_FIELD_VALUE"
var _ = function (e, t, n, r) {
  return {
    type: ASYNC_SET_CLOUD_DOC_FIELD_VALUE,
    payload: {
      documentId: e,
      key: t,
      value: n,
      fieldType: r
    }
  }
}
var /* [auto-meaningful-name] */ASYNC_DELETE_CLOUD_DOC_FIELD_VALUE = "ASYNC_DELETE_CLOUD_DOC_FIELD_VALUE"
var b = function (e, t, n) {
  return {
    type: ASYNC_DELETE_CLOUD_DOC_FIELD_VALUE,
    payload: {
      documentId: e,
      key: t,
      id: n
    }
  }
}
var /* [auto-meaningful-name] */ASYNC_CLEAR_CLOUD_DOC_ALL_FIELD_VALUE = "ASYNC_CLEAR_CLOUD_DOC_ALL_FIELD_VALUE"
var E = function (e) {
  return {
    type: ASYNC_CLEAR_CLOUD_DOC_ALL_FIELD_VALUE,
    payload: {
      documentId: e
    }
  }
}
var /* [auto-meaningful-name] */ASYNC_GET_CLOUD_DOC_FIELD_VALUE = "ASYNC_GET_CLOUD_DOC_FIELD_VALUE"
var w = function (e, t, n) {
  return {
    type: ASYNC_GET_CLOUD_DOC_FIELD_VALUE,
    payload: {
      documentId: e,
      key: t,
      isConsole: n
    }
  }
}
var /* [auto-meaningful-name] */ASYNC_GET_CLOUD_DOC_ALL_FIELD_VALUE = "ASYNC_GET_CLOUD_DOC_ALL_FIELD_VALUE"
var T = function (e) {
  return {
    type: ASYNC_GET_CLOUD_DOC_ALL_FIELD_VALUE,
    payload: {
      documentId: e
    }
  }
}
var S = function (e) {
  return {
    payload: e,
    type: SET_EMULATOR_PHONE_INFO
  }
}
export default ASYNC_CLEAR_CLOUD_DOC_ALL_FIELD_VALUE
