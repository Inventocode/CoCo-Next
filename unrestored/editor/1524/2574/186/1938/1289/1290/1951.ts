"use strict";

import * as r from "../../442";
module.exports = r.isStandardBrowserEnv() ? function () {
  var e;
  var t = /(msie|trident)/i.test(navigator.userAgent);
  var n = document.createElement("a");
  function i(e) {
    var r = e;
    if (t) {
      n.setAttribute("href", r);
      r = n.href;
    }
    n.setAttribute("href", r);
    return {
      href: n.href,
      protocol: n.protocol ? n.protocol.replace(/:$/, "") : "",
      host: n.host,
      search: n.search ? n.search.replace(/^\?/, "") : "",
      hash: n.hash ? n.hash.replace(/^#/, "") : "",
      hostname: n.hostname,
      port: n.port,
      pathname: "/" === n.pathname.charAt(0) ? n.pathname : "/" + n.pathname
    };
  }
  e = i(window.location.href);
  return function (t) {
    var n = r.isString(t) ? i(t) : t;
    return n.protocol === e.protocol && n.host === e.host;
  };
}() : function () {
  return !0;
};