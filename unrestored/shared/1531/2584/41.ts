"use strict";

var r = require("./186/index");
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
var i = require("./23");
var a = require("./38/index");
var s = require("./2/index");
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
export default c;