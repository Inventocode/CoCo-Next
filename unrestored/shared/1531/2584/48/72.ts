/** 
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：72
 */

"use strict";

export { r as h };
export { o as j };
export { i as k };
export { a as l };
export { s as f };
export { c as i };
export { l as g };
export { u as t };
export { d as u };
export { p as v };
export { f as w };
export { h as x };
export { m as r };
export { g as e };
export { _ as q };
export { v as b };
export { b as n };
export { y as a };
export { E as m };
export { O as d };
export { w as p };
export { C as c };
export { T as o };
export { S as s };
var r = "SET_NAVIGATOR";
var o = "SET_WIDGET";
var i = "UNSET_WIDGET";
var a = "UPDATE_SCREEN";
var s = "SET_CAMERA_DIRECTION";
var c = "SET_SWITCH_SCREEN_PARAM";
var l = "SET_EMULATOR_PHONE_INFO";
var u = function (e) {
  return {
    payload: {
      navigator: e
    },
    type: r
  };
};
var d = function (e) {
  return {
    payload: {
      param: e
    },
    type: c
  };
};
var p = function (e, t) {
  return {
    payload: {
      id: e,
      widget: t
    },
    type: o
  };
};
var f = function (e) {
  return {
    payload: {
      id: e
    },
    type: i
  };
};
var h = function (e, t, n) {
  return {
    payload: {
      id: e,
      key: t,
      value: n
    },
    type: a
  };
};
var m = function (e) {
  return {
    payload: {
      cameraDirection: e
    },
    type: s
  };
};
var g = "ASYNC_SET_CLOUD_DOC_FIELD_VALUE";
var _ = function (e, t, n, r) {
  return {
    type: g,
    payload: {
      documentId: e,
      key: t,
      value: n,
      fieldType: r
    }
  };
};
var v = "ASYNC_DELETE_CLOUD_DOC_FIELD_VALUE";
var b = function (e, t, n) {
  return {
    type: v,
    payload: {
      documentId: e,
      key: t,
      id: n
    }
  };
};
var y = "ASYNC_CLEAR_CLOUD_DOC_ALL_FIELD_VALUE";
var E = function (e) {
  return {
    type: y,
    payload: {
      documentId: e
    }
  };
};
var O = "ASYNC_GET_CLOUD_DOC_FIELD_VALUE";
var w = function (e, t, n) {
  return {
    type: O,
    payload: {
      documentId: e,
      key: t,
      isConsole: n
    }
  };
};
var C = "ASYNC_GET_CLOUD_DOC_ALL_FIELD_VALUE";
var T = function (e) {
  return {
    type: C,
    payload: {
      documentId: e
    }
  };
};
var S = function (e) {
  return {
    payload: e,
    type: l
  };
};
export default y;