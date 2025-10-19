/** 
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：102
 */

"use strict";

export { r as e };
export { o as p };
export { i as g };
export { a as r };
export { s as f };
export { c as q };
export { l as d };
export { u as o };
export { d as h };
export { p as s };
export { f as j };
export { h as u };
export { m as a };
export { g as l };
export { _ as k };
export { v };
export { b };
export { y as m };
export { E as i };
export { O as t };
export { w as c };
export { C as n };
var r = "SET_EDIT_COOPERATION_INVITATION_URL";
var o = function (e) {
  return {
    type: r,
    payload: {
      url: e
    }
  };
};
var i = "SET_READONLY_COOPERATION_INVITATION_URL";
var a = function (e) {
  return {
    type: i,
    payload: {
      url: e
    }
  };
};
var s = "SET_IS_AUTHOR";
var c = function (e) {
  return {
    type: s,
    payload: {
      isAuthor: e
    }
  };
};
var l = "SET_COLL_WORK_ID";
var u = function (e) {
  return {
    type: l,
    payload: {
      id: e
    }
  };
};
var d = "UPDATE_COOPERATION_USER_LIST";
var p = function (e) {
  return {
    payload: {
      list: e
    },
    type: d
  };
};
var f = "UPDATE_ONLINE_COOPERATION_USER_LIST";
var h = function (e) {
  return {
    payload: {
      list: e
    },
    type: f
  };
};
var m = "ASYNC_UPDATE_ONLINE_COOPERATION_USER_LIST";
var g = function (e) {
  return {
    payload: {
      list: e
    },
    type: m
  };
};
var _ = "UPDATE_USER_FOCUS_OT_INFO_LIST";
var v = function (e) {
  return {
    type: _,
    payload: {
      list: e
    }
  };
};
var b = "ASYNC_UPDATE_USER_FOCUS_OT_INFO";
var y = function (e) {
  return {
    type: b,
    payload: {
      info: e
    }
  };
};
var E = "UPDATE_ONLINE_COOPERATION_USER_COLOR_RECORD";
var O = function (e) {
  return {
    type: E,
    payload: {
      colors: e
    }
  };
};
var w = "INITIAL_OT_STATE";
var C = function () {
  return {
    type: w,
    payload: undefined
  };
};
export default m;