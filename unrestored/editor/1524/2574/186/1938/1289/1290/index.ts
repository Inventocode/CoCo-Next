"use strict";

var r = require("../../442");
var i = require("./1944");
var o = require("./1946");
var a = require("../../1939/1287");
var s = require("./1947/index");
var c = require("./1950");
var u = require("./1951");
var l = require("./1291/index");
module.exports = function (e) {
  return new Promise(function (t, n) {
    var f = e.data;
    var h = e.headers;
    if (r.isFormData(f)) {
      delete h["Content-Type"];
    }
    var d = new XMLHttpRequest();
    if (e.auth) {
      var p = e.auth.username || "";
      var _ = e.auth.password ? unescape(encodeURIComponent(e.auth.password)) : "";
      h.Authorization = "Basic " + btoa(p + ":" + _);
    }
    var A = s(e.baseURL, e.url);
    if (d.open(e.method.toUpperCase(), a(A, e.params, e.paramsSerializer), !0), d.timeout = e.timeout, d.onreadystatechange = function () {
      if (d && 4 === d.readyState && (0 !== d.status || d.responseURL && 0 === d.responseURL.indexOf("file:"))) {
        var r = "getAllResponseHeaders" in d ? c(d.getAllResponseHeaders()) : null;
        var o = {
          data: e.responseType && "text" !== e.responseType ? d.response : d.responseText,
          status: d.status,
          statusText: d.statusText,
          headers: r,
          config: e,
          request: d
        };
        i(t, n, o);
        d = null;
      }
    }, d.onabort = function () {
      if (d) {
        n(l("Request aborted", e, "ECONNABORTED", d));
        d = null;
      }
    }, d.onerror = function () {
      n(l("Network Error", e, null, d));
      d = null;
    }, d.ontimeout = function () {
      var t = "timeout of " + e.timeout + "ms exceeded";
      if (e.timeoutErrorMessage) {
        t = e.timeoutErrorMessage;
      }
      n(l(t, e, "ECONNABORTED", d));
      d = null;
    }, r.isStandardBrowserEnv()) {
      var g = (e.withCredentials || u(A)) && e.xsrfCookieName ? o.read(e.xsrfCookieName) : void 0;
      if (g) {
        h[e.xsrfHeaderName] = g;
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
      } catch (v) {
        if ("json" !== e.responseType) {
          throw v;
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
          n(e);
          d = null;
        }
      });
    }
    if (!f) {
      f = null;
    }
    d.send(f);
  });
};