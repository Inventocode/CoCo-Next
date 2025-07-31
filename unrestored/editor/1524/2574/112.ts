"use strict";

export { o as a };
export { a as b };
var r = require("./6");
function o(e, t) {
  var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
  var o = Object(r.a)({
    isFold: !0,
    screenId: "GLOBAL",
    isWatching: !0,
    selected: !0
  }, n);
  var i = Object(r.a)(Object(r.a)({
    type: e
  }, o), t);
  if (i.isWatching) {
    i.selected = !0;
  } else {
    i.selected = !1;
  }
  return i;
}
var i = {
  PRIMITIVE: {
    class: "icon-watch-variable",
    color: "rgb(255, 187, 85)",
    text: "variable",
    fontSize: "20px",
    foldIcon: "",
    unfoldIcon: ""
  },
  LIST: {
    class: "icon-watch-list",
    color: "rgb(255, 201, 21)",
    text: "list",
    fontSize: "20px",
    foldIcon: "icon-open",
    unfoldIcon: "icon-fold-datawatch"
  },
  DICT: {
    class: "icon-watch-dict",
    color: "rgb(160, 115, 255)",
    text: "object",
    fontSize: "20px",
    foldIcon: "icon-open",
    unfoldIcon: "icon-fold-datawatch"
  },
  TABLE_DATA_WIDGET: {
    class: "icon-watch-tabledata",
    color: "#775af4",
    text: "ListViewerWidget.tableData",
    fontSize: "20px",
    foldIcon: "icon-openview",
    unfoldIcon: "icon-openview"
  },
  LOCAL_STORAGE_WIDGET: {
    class: "icon-watch-database",
    color: "#775af4",
    text: "LocalStorageWidget.widgetName",
    fontSize: "20px",
    foldIcon: "icon-open",
    unfoldIcon: "icon-fold-datawatch"
  },
  NEW_LOCAL_STORAGE_WIDGET: {
    class: "icon-watch-database",
    color: "#775af4",
    text: "LocalStorageWidget.widgetName",
    fontSize: "20px",
    foldIcon: "icon-open",
    unfoldIcon: "icon-fold-datawatch"
  },
  DEFAULT: {
    class: "icon-watch-variable",
    color: "rgb(255, 187, 85)",
    text: "PRIMITIVE",
    fontSize: "20px",
    foldIcon: "icon-open",
    unfoldIcon: "icon-fold-datawatch"
  }
};
function a(e) {
  return i[e] ? i[e] : i.DEFAULT;
}
export default o;