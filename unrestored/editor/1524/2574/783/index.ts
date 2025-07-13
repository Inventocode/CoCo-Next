"use strict";

export { l as a };
import * as r from "../0/index";
import * as o from "../0/index";
import * as i from "../702";
import * as a from "../13/index";
import * as s from "./742";
import * as c from "./742";
function l(e) {
  var t = e.onCancel;
  var n = e.onOk;
  var r = e.title;
  var s = void 0 === r ? "saveTipsTitle" : r;
  var l = e.desc;
  var u = void 0 === l ? "saveTipsDesc" : l;
  var d = Object(i.a)().formatMessage;
  return o.a.createElement("div", {
    className: c.a.saveTipsWrapper
  }, o.a.createElement("div", {
    className: c.a.saveTipsMask
  }), o.a.createElement("div", {
    className: c.a.saveTipsContent
  }, o.a.createElement("div", {
    className: c.a.name
  }, d({
    id: s
  })), o.a.createElement("div", {
    className: c.a.description
  }, d({
    id: u
  })), o.a.createElement("div", {
    className: c.a.actions
  }, o.a.createElement(a.d, {
    onClick: t
  }, d({
    id: "notSave"
  })), o.a.createElement(a.d, {
    type: "primary",
    onClick: n
  }, d({
    id: "save"
  })))));
}
exports.b = Object(r.memo)(l);