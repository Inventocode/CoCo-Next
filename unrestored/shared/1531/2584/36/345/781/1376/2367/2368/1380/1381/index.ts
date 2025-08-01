"use strict";

var r = require("../../445");
var i = require("./2374");
var o = require("../../2369/1378");
var a = require("./2376/index");
var s = require("./2379");
var c = require("./2380");
var u = require("./1382/index");
module.exports = function (e) {
  return new Promise(function (t, l) {
    var f = e.data;
    var d = e.headers;
    if (r.isFormData(f)) {
      delete d["Content-Type"];
    }
    var h = new XMLHttpRequest();
    if (e.auth) {
      var p = e.auth.username || "";
      var _ = e.auth.password || "";
      d.Authorization = "Basic " + btoa(p + ":" + _);
    }
    var A = a(e.baseURL, e.url);
    h.open(e.method.toUpperCase(), o(A, e.params, e.paramsSerializer), !0);
    h.timeout = e.timeout;
    h.onreadystatechange = function () {
      if (h && 4 === h.readyState && (0 !== h.status || h.responseURL && 0 === h.responseURL.indexOf("file:"))) {
        var n = "getAllResponseHeaders" in h ? s(h.getAllResponseHeaders()) : null;
        var r = {
          data: e.responseType && "text" !== e.responseType ? h.response : h.responseText,
          status: h.status,
          statusText: h.statusText,
          headers: n,
          config: e,
          request: h
        };
        i(t, l, r);
        h = null;
      }
    };
    h.onabort = function () {
      if (h) {
        l(u("Request aborted", e, "ECONNABORTED", h));
        h = null;
      }
    };
    h.onerror = function () {
      l(u("Network Error", e, null, h));
      h = null;
    };
    h.ontimeout = function () {
      var t = "timeout of " + e.timeout + "ms exceeded";
      if (e.timeoutErrorMessage) {
        t = e.timeoutErrorMessage;
      }
      l(u(t, e, "ECONNABORTED", h));
      h = null;
    };
    if (r.isStandardBrowserEnv()) {
      var g = require("./2381");
      var v = (e.withCredentials || c(A)) && e.xsrfCookieName ? g.read(e.xsrfCookieName) : void 0;
      if (v) {
        d[e.xsrfHeaderName] = v;
      }
    }
    if ("setRequestHeader" in h) {
      r.forEach(d, function (e, t) {
        if ("undefined" === typeof f && "content-type" === t.toLowerCase()) {
          delete d[t];
        } else {
          h.setRequestHeader(t, e);
        }
      });
    }
    if (!r.isUndefined(e.withCredentials)) {
      h.withCredentials = !!e.withCredentials;
    }
    if (e.responseType) {
      try {
        h.responseType = e.responseType;
      } catch (m) {
        if ("json" !== e.responseType) {
          throw m;
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
          l(e);
          h = null;
        }
      });
    }
    if (void 0 === f) {
      f = null;
    }
    h.send(f);
  });
};