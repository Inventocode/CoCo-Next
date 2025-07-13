"use strict";

(function (t) {
  var r = require("../445");
  var i = require("./2363");
  var o = {
    "Content-Type": "application/x-www-form-urlencoded"
  };
  function a(e, t) {
    if (!r.isUndefined(e) && r.isUndefined(e["Content-Type"])) {
      e["Content-Type"] = t;
    }
  }
  var s = {
    adapter: function () {
      var e;
      if ("undefined" !== typeof XMLHttpRequest || "undefined" !== typeof t && "[object process]" === Object.prototype.toString.call(t)) {
        e = require("./1374/index");
      }
      return e;
    }(),
    transformRequest: [function (e, t) {
      i(t, "Accept");
      i(t, "Content-Type");
      return r.isFormData(e) || r.isArrayBuffer(e) || r.isBuffer(e) || r.isStream(e) || r.isFile(e) || r.isBlob(e) ? e : r.isArrayBufferView(e) ? e.buffer : r.isURLSearchParams(e) ? (a(t, "application/x-www-form-urlencoded;charset=utf-8"), e.toString()) : r.isObject(e) ? (a(t, "application/json;charset=utf-8"), JSON.stringify(e)) : e;
    }],
    transformResponse: [function (e) {
      if ("string" === typeof e) {
        try {
          e = JSON.parse(e);
        } catch (t) {}
      }
      return e;
    }],
    timeout: 0,
    xsrfCookieName: "XSRF-TOKEN",
    xsrfHeaderName: "X-XSRF-TOKEN",
    maxContentLength: -1,
    validateStatus: function (e) {
      return e >= 200 && e < 300;
    },
    headers: {
      common: {
        Accept: "application/json, text/plain, */*"
      }
    }
  };
  r.forEach(["delete", "get", "head"], function (e) {
    s.headers[e] = {};
  });
  r.forEach(["post", "put", "patch"], function (e) {
    s.headers[e] = r.merge(o);
  });
  module.exports = s;
}).call(this, require("../../../../../../../../../3262/3188/1184/368"));