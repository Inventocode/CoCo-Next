"use strict";

import * as r from "../186/index";
var o = n.n(r).a.create({
  timeout: 5e3,
  withCredentials: !0
});
o.interceptors.request.use(function (e) {
  return e;
}, function (e) {
  return Promise.reject(e);
});
o.interceptors.response.use(function (e) {
  return e;
}, function (e) {
  e.response;
  return Promise.reject(e);
});
export { o as a };