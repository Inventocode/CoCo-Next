(function (t) {
  var r;
  var i;
  var o = require("../../1130");
  var a = require("../../../759/index");
  var s = require("../../../../../1360/966");
  var c = require("../2308/967");
  var u = require("./1358");
  var l = require("../../968/index")("engine.io-client:websocket");
  if ("undefined" !== typeof WebSocket ? r = WebSocket : "undefined" !== typeof self && (r = self.WebSocket || self.MozWebSocket), "undefined" === typeof window) {
    try {
      i = require("./1132");
    } catch (h) {}
  }
  var f = r || i;
  function d(e) {
    if (e && e.forceBase64) {
      this.supportsBinary = !1;
    }
    this.perMessageDeflate = e.perMessageDeflate;
    this.usingBrowserWebSocket = r && !e.forceNode;
    this.protocols = e.protocols;
    if (!this.usingBrowserWebSocket) {
      f = i;
    }
    o.call(this, e);
  }
  module.exports = d;
  c(d, o);
  d.prototype.name = "websocket";
  d.prototype.supportsBinary = !0;
  d.prototype.doOpen = function () {
    if (this.check()) {
      var e = this.uri();
      var t = this.protocols;
      var n = {};
      if (!this.isReactNative) {
        n.agent = this.agent;
        n.perMessageDeflate = this.perMessageDeflate;
        n.pfx = this.pfx;
        n.key = this.key;
        n.passphrase = this.passphrase;
        n.cert = this.cert;
        n.ca = this.ca;
        n.ciphers = this.ciphers;
        n.rejectUnauthorized = this.rejectUnauthorized;
      }
      if (this.extraHeaders) {
        n.headers = this.extraHeaders;
      }
      if (this.localAddress) {
        n.localAddress = this.localAddress;
      }
      try {
        this.ws = this.usingBrowserWebSocket && !this.isReactNative ? t ? new f(e, t) : new f(e) : new f(e, t, n);
      } catch (r) {
        return this.emit("error", r);
      }
      if (void 0 === this.ws.binaryType) {
        this.supportsBinary = !1;
      }
      if (this.ws.supports && this.ws.supports.binary) {
        this.supportsBinary = !0;
        this.ws.binaryType = "nodebuffer";
      } else {
        this.ws.binaryType = "arraybuffer";
      }
      this.addEventListeners();
    }
  };
  d.prototype.addEventListeners = function () {
    var e = this;
    this.ws.onopen = function () {
      e.onOpen();
    };
    this.ws.onclose = function () {
      e.onClose();
    };
    this.ws.onmessage = function (t) {
      e.onData(t.data);
    };
    this.ws.onerror = function (t) {
      e.onError("websocket error", t);
    };
  };
  d.prototype.write = function (e) {
    var n = this;
    this.writable = !1;
    for (var r = e.length, i = 0, o = r; i < o; i++) {
      !function (e) {
        a.encodePacket(e, n.supportsBinary, function (i) {
          if (!n.usingBrowserWebSocket) {
            var o = {};
            if (e.options && (o.compress = e.options.compress), n.perMessageDeflate) {
              if (("string" === typeof i ? t.byteLength(i) : i.length) < n.perMessageDeflate.threshold) {
                o.compress = !1;
              }
            }
          }
          try {
            if (n.usingBrowserWebSocket) {
              n.ws.send(i);
            } else {
              n.ws.send(i, o);
            }
          } catch (h) {
            l("websocket closed before onclose event");
          }
          if (! --r) {
            s();
          }
        });
      }(e[i]);
    }
    function s() {
      n.emit("flush");
      setTimeout(function () {
        n.writable = !0;
        n.emit("drain");
      }, 0);
    }
  };
  d.prototype.onClose = function () {
    o.prototype.onClose.call(this);
  };
  d.prototype.doClose = function () {
    if ("undefined" !== typeof this.ws) {
      this.ws.close();
    }
  };
  d.prototype.uri = function () {
    var e = this.query || {};
    var t = this.secure ? "wss" : "ws";
    var n = "";
    if (this.port && ("wss" === t && 443 !== Number(this.port) || "ws" === t && 80 !== Number(this.port))) {
      n = ":" + this.port;
    }
    if (this.timestampRequests) {
      e[this.timestampParam] = u();
    }
    if (!this.supportsBinary) {
      e.b64 = 1;
    }
    if ((e = s.encode(e)).length) {
      e = "?" + e;
    }
    return t + "://" + (-1 !== this.hostname.indexOf(":") ? "[" + this.hostname + "]" : this.hostname) + n + this.path + e;
  };
  d.prototype.check = function () {
    return !!f && !("__initialize" in f && this.name === d.prototype.name);
  };
}).call(this, require("../../../../../../../616/570/index").Buffer);