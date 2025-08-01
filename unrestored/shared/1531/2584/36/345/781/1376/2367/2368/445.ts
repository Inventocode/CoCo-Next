"use strict";

var r = require("./1377");
var i = Object.prototype.toString;
function o(e) {
  return "[object Array]" === i.call(e);
}
function a(e) {
  return "undefined" === typeof e;
}
function s(e) {
  return null !== e && "object" === typeof e;
}
function c(e) {
  return "[object Function]" === i.call(e);
}
function u(e, t) {
  if (null !== e && "undefined" !== typeof e) {
    if ("object" !== typeof e && (e = [e]), o(e)) {
      for (var n = 0, r = e.length; n < r; n++) {
        t.call(null, e[n], n, e);
      }
    } else {
      for (var i in e) if (Object.prototype.hasOwnProperty.call(e, i)) {
        t.call(null, e[i], i, e);
      }
    }
  }
}
module.exports = {
  isArray: o,
  isArrayBuffer: function (e) {
    return "[object ArrayBuffer]" === i.call(e);
  },
  isBuffer: function (e) {
    return null !== e && !a(e) && null !== e.constructor && !a(e.constructor) && "function" === typeof e.constructor.isBuffer && e.constructor.isBuffer(e);
  },
  isFormData: function (e) {
    return "undefined" !== typeof FormData && e instanceof FormData;
  },
  isArrayBufferView: function (e) {
    return "undefined" !== typeof ArrayBuffer && ArrayBuffer.isView ? ArrayBuffer.isView(e) : e && e.buffer && e.buffer instanceof ArrayBuffer;
  },
  isString: function (e) {
    return "string" === typeof e;
  },
  isNumber: function (e) {
    return "number" === typeof e;
  },
  isObject: s,
  isUndefined: a,
  isDate: function (e) {
    return "[object Date]" === i.call(e);
  },
  isFile: function (e) {
    return "[object File]" === i.call(e);
  },
  isBlob: function (e) {
    return "[object Blob]" === i.call(e);
  },
  isFunction: c,
  isStream: function (e) {
    return s(e) && c(e.pipe);
  },
  isURLSearchParams: function (e) {
    return "undefined" !== typeof URLSearchParams && e instanceof URLSearchParams;
  },
  isStandardBrowserEnv: function () {
    return ("undefined" === typeof navigator || "ReactNative" !== navigator.product && "NativeScript" !== navigator.product && "NS" !== navigator.product) && "undefined" !== typeof window && "undefined" !== typeof document;
  },
  forEach: u,
  merge: function e() {
    var t = {};
    function n(n, r) {
      if ("object" === typeof t[r] && "object" === typeof n) {
        t[r] = e(t[r], n);
      } else {
        t[r] = n;
      }
    }
    for (var r = 0, i = arguments.length; r < i; r++) {
      u(arguments[r], n);
    }
    return t;
  },
  deepMerge: function e() {
    var t = {};
    function n(n, r) {
      if ("object" === typeof t[r] && "object" === typeof n) {
        t[r] = e(t[r], n);
      } else {
        t[r] = "object" === typeof n ? e({}, n) : n;
      }
    }
    for (var r = 0, i = arguments.length; r < i; r++) {
      u(arguments[r], n);
    }
    return t;
  },
  extend: function (e, t, n) {
    u(t, function (t, i) {
      e[i] = n && "function" === typeof t ? r(t, n) : t;
    });
    return e;
  },
  trim: function (e) {
    return e.replace(/^\s*/, "").replace(/\s*$/, "");
  }
};