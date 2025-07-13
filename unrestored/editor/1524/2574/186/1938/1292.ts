"use strict";

import * as r from "./442";
module.exports = function (e, t) {
  t = t || {};
  var n = {};
  var i = ["url", "method", "data"];
  var o = ["headers", "auth", "proxy", "params"];
  var a = ["baseURL", "transformRequest", "transformResponse", "paramsSerializer", "timeout", "timeoutMessage", "withCredentials", "adapter", "responseType", "xsrfCookieName", "xsrfHeaderName", "onUploadProgress", "onDownloadProgress", "decompress", "maxContentLength", "maxBodyLength", "maxRedirects", "transport", "httpAgent", "httpsAgent", "cancelToken", "socketPath", "responseEncoding"];
  var s = ["validateStatus"];
  function c(e, t) {
    return r.isPlainObject(e) && r.isPlainObject(t) ? r.merge(e, t) : r.isPlainObject(t) ? r.merge({}, t) : r.isArray(t) ? t.slice() : t;
  }
  function u(i) {
    if (r.isUndefined(t[i])) {
      if (!r.isUndefined(e[i])) {
        n[i] = c(void 0, e[i]);
      }
    } else {
      n[i] = c(e[i], t[i]);
    }
  }
  r.forEach(i, function (e) {
    if (!r.isUndefined(t[e])) {
      n[e] = c(void 0, t[e]);
    }
  });
  r.forEach(o, u);
  r.forEach(a, function (i) {
    if (r.isUndefined(t[i])) {
      if (!r.isUndefined(e[i])) {
        n[i] = c(void 0, e[i]);
      }
    } else {
      n[i] = c(void 0, t[i]);
    }
  });
  r.forEach(s, function (r) {
    if (r in t) {
      n[r] = c(e[r], t[r]);
    } else {
      if (r in e) {
        n[r] = c(void 0, e[r]);
      }
    }
  });
  var l = i.concat(o).concat(a).concat(s);
  var f = Object.keys(e).concat(Object.keys(t)).filter(function (e) {
    return -1 === l.indexOf(e);
  });
  r.forEach(f, u);
  return n;
};