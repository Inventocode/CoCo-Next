"use strict";

import * as r from "./445";
module.exports = function (e, t) {
  t = t || {};
  var n = {};
  var i = ["url", "method", "params", "data"];
  var o = ["headers", "auth", "proxy"];
  var a = ["baseURL", "url", "transformRequest", "transformResponse", "paramsSerializer", "timeout", "withCredentials", "adapter", "responseType", "xsrfCookieName", "xsrfHeaderName", "onUploadProgress", "onDownloadProgress", "maxContentLength", "validateStatus", "maxRedirects", "httpAgent", "httpsAgent", "cancelToken", "socketPath"];
  r.forEach(i, function (e) {
    if ("undefined" !== typeof t[e]) {
      n[e] = t[e];
    }
  });
  r.forEach(o, function (i) {
    if (r.isObject(t[i])) {
      n[i] = r.deepMerge(e[i], t[i]);
    } else {
      if ("undefined" !== typeof t[i]) {
        n[i] = t[i];
      } else {
        if (r.isObject(e[i])) {
          n[i] = r.deepMerge(e[i]);
        } else {
          if ("undefined" !== typeof e[i]) {
            n[i] = e[i];
          }
        }
      }
    }
  });
  r.forEach(a, function (r) {
    if ("undefined" !== typeof t[r]) {
      n[r] = t[r];
    } else {
      if ("undefined" !== typeof e[r]) {
        n[r] = e[r];
      }
    }
  });
  var s = i.concat(o).concat(a);
  var c = Object.keys(t).filter(function (e) {
    return -1 === s.indexOf(e);
  });
  r.forEach(c, function (r) {
    if ("undefined" !== typeof t[r]) {
      n[r] = t[r];
    } else {
      if ("undefined" !== typeof e[r]) {
        n[r] = e[r];
      }
    }
  });
  return n;
};