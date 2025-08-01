var r = require("./1128/index");
var i = require("./2308/1356");
var o = require("../1131");
var a = require("./2308/967");
var s = require("../968/index")("engine.io-client:polling-xhr");
var c = require("./2308/1129");
function u() {}
function l(e) {
  i.call(this, e);
  this.requestTimeout = e.requestTimeout;
  this.extraHeaders = e.extraHeaders;
  if ("undefined" !== typeof location) {
    var t = "https:" === location.protocol;
    var n = location.port;
    if (!n) {
      n = t ? 443 : 80;
    }
    this.xd = "undefined" !== typeof location && e.hostname !== location.hostname || n !== e.port;
    this.xs = e.secure !== t;
  }
}
function f(e) {
  this.method = e.method || "GET";
  this.uri = e.uri;
  this.xd = !!e.xd;
  this.xs = !!e.xs;
  this.async = !1 !== e.async;
  this.data = void 0 !== e.data ? e.data : null;
  this.agent = e.agent;
  this.isBinary = e.isBinary;
  this.supportsBinary = e.supportsBinary;
  this.enablesXDR = e.enablesXDR;
  this.withCredentials = e.withCredentials;
  this.requestTimeout = e.requestTimeout;
  this.pfx = e.pfx;
  this.key = e.key;
  this.passphrase = e.passphrase;
  this.cert = e.cert;
  this.ca = e.ca;
  this.ciphers = e.ciphers;
  this.rejectUnauthorized = e.rejectUnauthorized;
  this.extraHeaders = e.extraHeaders;
  this.create();
}
module.exports = l;
module.exports.Request = f;
a(l, i);
l.prototype.supportsBinary = !0;
l.prototype.request = function (e) {
  (e = e || {}).uri = this.uri();
  e.xd = this.xd;
  e.xs = this.xs;
  e.agent = this.agent || !1;
  e.supportsBinary = this.supportsBinary;
  e.enablesXDR = this.enablesXDR;
  e.withCredentials = this.withCredentials;
  e.pfx = this.pfx;
  e.key = this.key;
  e.passphrase = this.passphrase;
  e.cert = this.cert;
  e.ca = this.ca;
  e.ciphers = this.ciphers;
  e.rejectUnauthorized = this.rejectUnauthorized;
  e.requestTimeout = this.requestTimeout;
  e.extraHeaders = this.extraHeaders;
  return new f(e);
};
l.prototype.doWrite = function (e, t) {
  var n = "string" !== typeof e && void 0 !== e;
  var r = this.request({
    method: "POST",
    data: e,
    isBinary: n
  });
  var i = this;
  r.on("success", t);
  r.on("error", function (e) {
    i.onError("xhr post error", e);
  });
  this.sendXhr = r;
};
l.prototype.doPoll = function () {
  s("xhr poll");
  var e = this.request();
  var t = this;
  e.on("data", function (e) {
    t.onData(e);
  });
  e.on("error", function (e) {
    t.onError("xhr poll error", e);
  });
  this.pollXhr = e;
};
o(f.prototype);
f.prototype.create = function () {
  var e = {
    agent: this.agent,
    xdomain: this.xd,
    xscheme: this.xs,
    enablesXDR: this.enablesXDR
  };
  e.pfx = this.pfx;
  e.key = this.key;
  e.passphrase = this.passphrase;
  e.cert = this.cert;
  e.ca = this.ca;
  e.ciphers = this.ciphers;
  e.rejectUnauthorized = this.rejectUnauthorized;
  var t = this.xhr = new r(e);
  var n = this;
  try {
    s("xhr open %s: %s", this.method, this.uri);
    t.open(this.method, this.uri, this.async);
    try {
      if (this.extraHeaders) {
        for (var i in t.setDisableHeaderCheck && t.setDisableHeaderCheck(!0), this.extraHeaders) if (this.extraHeaders.hasOwnProperty(i)) {
          t.setRequestHeader(i, this.extraHeaders[i]);
        }
      }
    } catch (o) {}
    if ("POST" === this.method) {
      try {
        if (this.isBinary) {
          t.setRequestHeader("Content-type", "application/octet-stream");
        } else {
          t.setRequestHeader("Content-type", "text/plain;charset=UTF-8");
        }
      } catch (o) {}
    }
    try {
      t.setRequestHeader("Accept", "*/*");
    } catch (o) {}
    if ("withCredentials" in t) {
      t.withCredentials = this.withCredentials;
    }
    if (this.requestTimeout) {
      t.timeout = this.requestTimeout;
    }
    if (this.hasXDR()) {
      t.onload = function () {
        n.onLoad();
      };
      t.onerror = function () {
        n.onError(t.responseText);
      };
    } else {
      t.onreadystatechange = function () {
        if (2 === t.readyState) {
          try {
            var e = t.getResponseHeader("Content-Type");
            if (n.supportsBinary && "application/octet-stream" === e || "application/octet-stream; charset=UTF-8" === e) {
              t.responseType = "arraybuffer";
            }
          } catch (o) {}
        }
        if (4 === t.readyState) {
          if (200 === t.status || 1223 === t.status) {
            n.onLoad();
          } else {
            setTimeout(function () {
              n.onError("number" === typeof t.status ? t.status : 0);
            }, 0);
          }
        }
      };
    }
    s("xhr data %s", this.data);
    t.send(this.data);
  } catch (o) {
    return void setTimeout(function () {
      n.onError(o);
    }, 0);
  }
  if ("undefined" !== typeof document) {
    this.index = f.requestsCount++;
    f.requests[this.index] = this;
  }
};
f.prototype.onSuccess = function () {
  this.emit("success");
  this.cleanup();
};
f.prototype.onData = function (e) {
  this.emit("data", e);
  this.onSuccess();
};
f.prototype.onError = function (e) {
  this.emit("error", e);
  this.cleanup(!0);
};
f.prototype.cleanup = function (e) {
  if ("undefined" !== typeof this.xhr && null !== this.xhr) {
    if (this.hasXDR()) {
      this.xhr.onload = this.xhr.onerror = u;
    } else {
      this.xhr.onreadystatechange = u;
    }
    if (e) {
      try {
        this.xhr.abort();
      } catch (t) {}
    }
    if ("undefined" !== typeof document) {
      delete f.requests[this.index];
    }
    this.xhr = null;
  }
};
f.prototype.onLoad = function () {
  var e;
  try {
    var t;
    try {
      t = this.xhr.getResponseHeader("Content-Type");
    } catch (n) {}
    e = ("application/octet-stream" === t || "application/octet-stream; charset=UTF-8" === t) && this.xhr.response || this.xhr.responseText;
  } catch (n) {
    this.onError(n);
  }
  if (null != e) {
    this.onData(e);
  }
};
f.prototype.hasXDR = function () {
  return "undefined" !== typeof XDomainRequest && !this.xs && this.enablesXDR;
};
f.prototype.abort = function () {
  this.cleanup();
};
f.requestsCount = 0;
f.requests = {};
if ("undefined" !== typeof document) {
  if ("function" === typeof attachEvent) {
    attachEvent("onunload", d);
  } else if ("function" === typeof addEventListener) {
    addEventListener("onpagehide" in c ? "pagehide" : "unload", d, !1);
  }
}
function d() {
  for (var e in f.requests) if (f.requests.hasOwnProperty(e)) {
    f.requests[e].abort();
  }
}