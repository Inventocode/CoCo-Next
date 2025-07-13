"use strict";

import * as r from "../../445";
import * as i from "./2364";
import * as o from "../../2359/1371";
import * as a from "./2366/index";
import * as s from "./2369";
import * as c from "./2370";
import * as u from "./1375/index";
module.exports = function (e) {
  return new Promise(function (t, l) {
    var f = e.data;
    var h = e.headers;
    if (r.isFormData(f)) {
      delete h["Content-Type"];
    }
    var d = new XMLHttpRequest();
    if (e.auth) {
      var p = e.auth.username || "";
      var _ = e.auth.password || "";
      h.Authorization = "Basic " + btoa(p + ":" + _);
    }
    var A = a(e.baseURL, e.url);
    if (d.open(e.method.toUpperCase(), o(A, e.params, e.paramsSerializer), !0), d.timeout = e.timeout, d.onreadystatechange = function () {
      if (d && 4 === d.readyState && (0 !== d.status || d.responseURL && 0 === d.responseURL.indexOf("file:"))) {
        var n = "getAllResponseHeaders" in d ? s(d.getAllResponseHeaders()) : null;
        var r = {
          data: e.responseType && "text" !== e.responseType ? d.response : d.responseText,
          status: d.status,
          statusText: d.statusText,
          headers: n,
          config: e,
          request: d
        };
        i(t, l, r);
        d = null;
      }
    }, d.onabort = function () {
      if (d) {
        l(u("Request aborted", e, "ECONNABORTED", d));
        d = null;
      }
    }, d.onerror = function () {
      l(u("Network Error", e, null, d));
      d = null;
    }, d.ontimeout = function () {
      var t = "timeout of " + e.timeout + "ms exceeded";
      if (e.timeoutErrorMessage) {
        t = e.timeoutErrorMessage;
      }
      l(u(t, e, "ECONNABORTED", d));
      d = null;
    }, r.isStandardBrowserEnv()) {
      var g = require("./2371");
      var v = (e.withCredentials || c(A)) && e.xsrfCookieName ? g.read(e.xsrfCookieName) : void 0;
      if (v) {
        h[e.xsrfHeaderName] = v;
      }
    }
    if ("setRequestHeader" in d && r.forEach(h, function (e, t) {
      if ("undefined" === typeof f && "content-type" === t.toLowerCase()) {
        delete h[t];
      } else {
        d.setRequestHeader(t, e);
      }
    }), r.isUndefined(e.withCredentials) || (d.withCredentials = !!e.withCredentials), e.responseType) {
      try {
        d.responseType = e.responseType;
      } catch (m) {
        if ("json" !== e.responseType) {
          throw m;
        }
      }
    }
    if ("function" === typeof e.onDownloadProgress) {
      d.addEventListener("progress", e.onDownloadProgress);
    }
    if ("function" === typeof e.onUploadProgress && d.upload) {
      d.upload.addEventListener("progress", e.onUploadProgress);
    }
    if (e.cancelToken) {
      e.cancelToken.promise.then(function (e) {
        if (d) {
          d.abort();
          l(e);
          d = null;
        }
      });
    }
    if (void 0 === f) {
      f = null;
    }
    d.send(f);
  });
};