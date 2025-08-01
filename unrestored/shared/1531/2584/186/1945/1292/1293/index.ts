"use strict";

var r = require("../../442");
var i = require("./1951");
var o = require("./1953");
var a = require("../../1946/1290");
var s = require("./1954/index");
var c = require("./1957");
var u = require("./1958");
var l = require("./1294/index");
module.exports = function (e) {
  return new Promise(function (t, n) {
    var f = e.data;
    var d = e.headers;
    if (r.isFormData(f)) {
      delete d["Content-Type"];
    }
    var h = new XMLHttpRequest();
    if (e.auth) {
      var p = e.auth.username || "";
      var _ = e.auth.password ? unescape(encodeURIComponent(e.auth.password)) : "";
      d.Authorization = "Basic " + btoa(p + ":" + _);
    }
    var A = s(e.baseURL, e.url);
    if (h.open(e.method.toUpperCase(), a(A, e.params, e.paramsSerializer), !0), h.timeout = e.timeout, h.onreadystatechange = function () {
      if (h && 4 === h.readyState && (0 !== h.status || h.responseURL && 0 === h.responseURL.indexOf("file:"))) {
        var r = "getAllResponseHeaders" in h ? c(h.getAllResponseHeaders()) : null;
        var o = {
          data: e.responseType && "text" !== e.responseType ? h.response : h.responseText,
          status: h.status,
          statusText: h.statusText,
          headers: r,
          config: e,
          request: h
        };
        i(t, n, o);
        h = null;
      }
    }, h.onabort = function () {
      if (h) {
        n(l("Request aborted", e, "ECONNABORTED", h));
        h = null;
      }
    }, h.onerror = function () {
      n(l("Network Error", e, null, h));
      h = null;
    }, h.ontimeout = function () {
      var t = "timeout of " + e.timeout + "ms exceeded";
      if (e.timeoutErrorMessage) {
        t = e.timeoutErrorMessage;
      }
      n(l(t, e, "ECONNABORTED", h));
      h = null;
    }, r.isStandardBrowserEnv()) {
      var g = (e.withCredentials || u(A)) && e.xsrfCookieName ? o.read(e.xsrfCookieName) : void 0;
      if (g) {
        d[e.xsrfHeaderName] = g;
      }
    }
    if ("setRequestHeader" in h && r.forEach(d, function (e, t) {
      if ("undefined" === typeof f && "content-type" === t.toLowerCase()) {
        delete d[t];
      } else {
        h.setRequestHeader(t, e);
      }
    }), r.isUndefined(e.withCredentials) || (h.withCredentials = !!e.withCredentials), e.responseType) {
      try {
        h.responseType = e.responseType;
      } catch (v) {
        if ("json" !== e.responseType) {
          throw v;
        }
      }
    }
    if ("function" === typeof e.onDownloadProgress) {
      h.addEventListener("progress", e.onDownloadProgress);
    }
    if ("function" === typeof e.onUploadProgress && h.upload) {
      h.upload.addEventListener("progress", e.onUploadProgress);
    }
    if (e.cancelToken) {
      e.cancelToken.promise.then(function (e) {
        if (h) {
          h.abort();
          n(e);
          h = null;
        }
      });
    }
    if (!f) {
      f = null;
    }
    h.send(f);
  });
};