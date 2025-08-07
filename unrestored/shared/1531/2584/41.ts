"use strict";

import r = require("axios");
var o = function __importDefault(module) {
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
}(r);
import i = require("../../../../src/shared/language");
import a = require("./38/index");
import s = require("./2");
var c = o.a.create({
  timeout: 2e4,
  withCredentials: true
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
  if (!e.response && (!navigator.onLine || 0 === (null === (t = navigator) || undefined === t || null === (n = t.connection) || undefined === n ? undefined : n.rtt))) {
    var r = a.b();
    a.c().dispatch(s.mj({
      message: i.c(r, "axios.weakNetworkTips").toString(),
      type: "error"
    }));
  }
  return Promise.reject(e);
});
export { c as a };
export default c;