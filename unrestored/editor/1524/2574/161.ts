"use strict";

export { r as h };
export { o as G };
export { i as s };
export { a as P };
export { s as t };
export { c as Q };
export { l as e };
export { u as D };
export { d as m };
export { p as x };
export { f as U };
export { h as a };
export { m as z };
export { g as o };
export { _ as L };
export { v as y };
export { b as V };
export { y as b };
export { E as A };
export { O as p };
export { w as M };
export { C as c };
export { T as B };
export { S as q };
export { I as N };
export { A as d };
export { j as C };
export { N as i };
export { R as H };
export { k as r };
export { x as O };
export { D as u };
export { M as R };
export { L as w };
export { P as T };
export { B as n };
export { F as f };
export { G as E };
export { U as k };
export { W as J };
export { H as g };
export { V as F };
export { z as v };
export { Y as S };
export { K as j };
export { q as I };
export { X as l };
export { Q as K };
var r = "ASYNC_INITIAL_CLOUD_SPACE_DATA";
var o = function () {
  return {
    type: r,
    payload: void 0
  };
};
var i = "UPDATE_CLOUD_SPACE_DICT_LIST";
var a = function (e) {
  return {
    payload: e,
    type: i
  };
};
var s = "UPDATE_CLOUD_SPACE_TABLE_LIST";
var c = function (e) {
  return {
    payload: e,
    type: s
  };
};
var l = "ASYNC_FETCH_CLOUD_SPACE_LIST";
var u = function () {
  return {
    payload: void 0,
    type: l
  };
};
var d = "INIT_CLOUD_SPACE_REF_IDS";
var p = "UPDATE_INITIAL_REF_DICT_IDS";
var f = function (e) {
  return {
    payload: e,
    type: p
  };
};
var h = "APPEND_INITIAL_REF_DICT_IDS";
var m = function (e) {
  return {
    payload: e,
    type: h
  };
};
var g = "REMOVE_INITIAL_REF_DICT_IDS";
var _ = function (e) {
  return {
    payload: e,
    type: g
  };
};
var v = "UPDATE_INITIAL_REF_TABLE_IDS";
var b = function (e) {
  return {
    payload: e,
    type: v
  };
};
var y = "APPEND_INITIAL_REF_TABLE_IDS";
var E = function (e) {
  return {
    payload: e,
    type: y
  };
};
var O = "REMOVE_INITIAL_REF_TABLE_IDS";
var w = function (e) {
  return {
    payload: e,
    type: O
  };
};
var C = "ASYNC_CHECK_WIDGET_DATA_SOURCES_VALID";
var T = function (e) {
  return {
    payload: e,
    type: C
  };
};
var S = "UPDATE_CHECKED_TIMESTAMP";
var I = function (e) {
  return {
    payload: e,
    type: S
  };
};
var A = "ASYNC_FETCH_CLOUD_DICT_KEYS_DETAIL";
var j = function (e, t) {
  return {
    payload: {
      id: e,
      showToast: t
    },
    type: A
  };
};
var N = "ASYNC_UPDATE_CLOUD_DICT_KEYS_DETAIL";
var R = function (e, t, n) {
  return {
    payload: {
      id: e,
      data: t,
      isEmitOT: n
    },
    type: N
  };
};
var k = "UPDATE_CLOUD_DICT_KEYS_DETAIL";
var x = function (e, t) {
  return {
    payload: {
      id: e,
      data: t
    },
    type: k
  };
};
var D = "UPDATE_CLOUD_TABLE_COLUMN_LIST";
var M = function (e, t) {
  return {
    payload: {
      id: e,
      columns: t
    },
    type: D
  };
};
var L = "UPDATE_CLOUD_TABLE_LIST_COLUMNS";
var P = function (e, t) {
  return {
    payload: {
      id: e,
      columns: t
    },
    type: L
  };
};
var B = "REMOVE_CLOUD_TABLE_COLUMN_LIST";
var F = "ASYNC_FETCH_CLOUD_TABLE_COLUMNS_DETAIL";
var G = function (e, t) {
  return {
    payload: {
      id: e,
      showToast: t
    },
    type: F
  };
};
var U = "ASYNC_UPDATE_CLOUD_TABLE_COLUMNS_DETAIL";
var W = function (e, t, n) {
  return {
    payload: {
      id: e,
      columns: t,
      isEmitOT: n
    },
    type: U
  };
};
var H = "ASYNC_FETCH_CLOUD_TABLE_DATA";
var V = function (e) {
  return {
    payload: {
      id: e
    },
    type: H
  };
};
var z = "UPDATE_CLOUD_TABLE_DATA";
var Y = function (e, t) {
  return {
    payload: {
      id: e,
      data: t
    },
    type: z
  };
};
var K = "ASYNC_UPDATE_CLOUD_DICT_LIST";
var q = function (e, t) {
  return {
    payload: {
      list: e,
      isEmitOT: t
    },
    type: K
  };
};
var X = "ASYNC_UPDATE_CLOUD_TABLE_LIST";
var Q = function (e, t) {
  return {
    payload: {
      list: e,
      isEmitOT: t
    },
    type: X
  };
};