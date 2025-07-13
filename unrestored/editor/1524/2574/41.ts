"use strict";

import * as r from "./186/index";
import * as o from "./186/index";
import * as i from "./23";
import * as a from "./38/index";
import * as s from "./2/index";
var c = o.a.create({
  timeout: 2e4,
  withCredentials: !0
});
c.interceptors.request.use(function (e) {
  return e;
}, function (e) {
  return Promise.reject(e);
});
c.interceptors.response.use(function (e) {
  return e;
}, function (e) {
  var t;
  var n;
  if (!e.response && (!navigator.onLine || 0 === (null === (t = navigator) || void 0 === t || null === (n = t.connection) || void 0 === n ? void 0 : n.rtt))) {
    var r = Object(a.b)();
    Object(a.c)().dispatch(Object(s.mj)({
      message: Object(i.c)(r, "axios.weakNetworkTips").toString(),
      type: "error"
    }));
  }
  return Promise.reject(e);
});
export { c as a };