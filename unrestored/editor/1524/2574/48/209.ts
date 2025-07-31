"use strict";

var r = require("../186/index");
var o = (module => {
  var defaultExport = module && module.__esModule ? function () {
    return module.default;
  } : function () {
    return module;
  };
  Object.defineProperty(defaultExport, "a", {
    enumerable: true,
    get: defaultExport
  });
  return defaultExport;
})(r).a.create({
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
exports.a = o;