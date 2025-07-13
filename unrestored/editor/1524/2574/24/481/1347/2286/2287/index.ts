import * as r from "./1348/index";
import * as i from "./1128";
var o = require("./967/index")("engine.io-client:socket");
import * as a from "../../1352";
import * as s from "../759/index";
import * as c from "../../../2282/1345";
import * as u from "../../../1353/965";
function l(e, t) {
  if (!(this instanceof l)) {
    return new l(e, t);
  }
  t = t || {};
  if (e && "object" === typeof e) {
    t = e;
    e = null;
  }
  if (e) {
    e = c(e);
    t.hostname = e.host;
    t.secure = "https" === e.protocol || "wss" === e.protocol;
    t.port = e.port;
    if (e.query) {
      t.query = e.query;
    }
  } else {
    if (t.host) {
      t.hostname = c(t.host).host;
    }
  }
  this.secure = null != t.secure ? t.secure : "undefined" !== typeof location && "https:" === location.protocol;
  if (t.hostname && !t.port) {
    t.port = this.secure ? "443" : "80";
  }
  this.agent = t.agent || !1;
  this.hostname = t.hostname || ("undefined" !== typeof location ? location.hostname : "localhost");
  this.port = t.port || ("undefined" !== typeof location && location.port ? location.port : this.secure ? 443 : 80);
  this.query = t.query || {};
  if ("string" === typeof this.query) {
    this.query = u.decode(this.query);
  }
  this.upgrade = !1 !== t.upgrade;
  this.path = (t.path || "/engine.io").replace(/\/$/, "") + "/";
  this.forceJSONP = !!t.forceJSONP;
  this.jsonp = !1 !== t.jsonp;
  this.forceBase64 = !!t.forceBase64;
  this.enablesXDR = !!t.enablesXDR;
  this.withCredentials = !1 !== t.withCredentials;
  this.timestampParam = t.timestampParam || "t";
  this.timestampRequests = t.timestampRequests;
  this.transports = t.transports || ["polling", "websocket"];
  this.transportOptions = t.transportOptions || {};
  this.readyState = "";
  this.writeBuffer = [];
  this.prevBufferLen = 0;
  this.policyPort = t.policyPort || 843;
  this.rememberUpgrade = t.rememberUpgrade || !1;
  this.binaryType = null;
  this.onlyBinaryUpgrades = t.onlyBinaryUpgrades;
  this.perMessageDeflate = !1 !== t.perMessageDeflate && (t.perMessageDeflate || {});
  if (!0 === this.perMessageDeflate) {
    this.perMessageDeflate = {};
  }
  if (this.perMessageDeflate && null == this.perMessageDeflate.threshold) {
    this.perMessageDeflate.threshold = 1024;
  }
  this.pfx = t.pfx || void 0;
  this.key = t.key || void 0;
  this.passphrase = t.passphrase || void 0;
  this.cert = t.cert || void 0;
  this.ca = t.ca || void 0;
  this.ciphers = t.ciphers || void 0;
  this.rejectUnauthorized = void 0 === t.rejectUnauthorized || t.rejectUnauthorized;
  this.forceNode = !!t.forceNode;
  this.isReactNative = "undefined" !== typeof navigator && "string" === typeof navigator.product && "reactnative" === navigator.product.toLowerCase();
  if ("undefined" === typeof self || this.isReactNative) {
    if (t.extraHeaders && Object.keys(t.extraHeaders).length > 0) {
      this.extraHeaders = t.extraHeaders;
    }
    if (t.localAddress) {
      this.localAddress = t.localAddress;
    }
  }
  this.id = null;
  this.upgrades = null;
  this.pingInterval = null;
  this.pingTimeout = null;
  this.pingIntervalTimer = null;
  this.pingTimeoutTimer = null;
  this.open();
}
module.exports = l;
l.priorWebsocketSuccess = !1;
i(l.prototype);
l.protocol = s.protocol;
l.Socket = l;
l.Transport = require("./1127");
l.transports = require("./1348/index");
l.parser = require("../759/index");
l.prototype.createTransport = function (e) {
  o('creating transport "%s"', e);
  var t = function (e) {
    var t = {};
    for (var n in e) if (e.hasOwnProperty(n)) {
      t[n] = e[n];
    }
    return t;
  }(this.query);
  t.EIO = s.protocol;
  t.transport = e;
  var n = this.transportOptions[e] || {};
  if (this.id) {
    t.sid = this.id;
  }
  return new r[e]({
    query: t,
    socket: this,
    agent: n.agent || this.agent,
    hostname: n.hostname || this.hostname,
    port: n.port || this.port,
    secure: n.secure || this.secure,
    path: n.path || this.path,
    forceJSONP: n.forceJSONP || this.forceJSONP,
    jsonp: n.jsonp || this.jsonp,
    forceBase64: n.forceBase64 || this.forceBase64,
    enablesXDR: n.enablesXDR || this.enablesXDR,
    withCredentials: n.withCredentials || this.withCredentials,
    timestampRequests: n.timestampRequests || this.timestampRequests,
    timestampParam: n.timestampParam || this.timestampParam,
    policyPort: n.policyPort || this.policyPort,
    pfx: n.pfx || this.pfx,
    key: n.key || this.key,
    passphrase: n.passphrase || this.passphrase,
    cert: n.cert || this.cert,
    ca: n.ca || this.ca,
    ciphers: n.ciphers || this.ciphers,
    rejectUnauthorized: n.rejectUnauthorized || this.rejectUnauthorized,
    perMessageDeflate: n.perMessageDeflate || this.perMessageDeflate,
    extraHeaders: n.extraHeaders || this.extraHeaders,
    forceNode: n.forceNode || this.forceNode,
    localAddress: n.localAddress || this.localAddress,
    requestTimeout: n.requestTimeout || this.requestTimeout,
    protocols: n.protocols || void 0,
    isReactNative: this.isReactNative
  });
};
l.prototype.open = function () {
  var e;
  if (this.rememberUpgrade && l.priorWebsocketSuccess && -1 !== this.transports.indexOf("websocket")) {
    e = "websocket";
  } else {
    if (0 === this.transports.length) {
      var t = this;
      return void setTimeout(function () {
        t.emit("error", "No transports available");
      }, 0);
    }
    e = this.transports[0];
  }
  this.readyState = "opening";
  try {
    e = this.createTransport(e);
  } catch (n) {
    this.transports.shift();
    return void this.open();
  }
  e.open();
  this.setTransport(e);
};
l.prototype.setTransport = function (e) {
  o("setting transport %s", e.name);
  var t = this;
  if (this.transport) {
    o("clearing existing transport %s", this.transport.name);
    this.transport.removeAllListeners();
  }
  this.transport = e;
  e.on("drain", function () {
    t.onDrain();
  }).on("packet", function (e) {
    t.onPacket(e);
  }).on("error", function (e) {
    t.onError(e);
  }).on("close", function () {
    t.onClose("transport close");
  });
};
l.prototype.probe = function (e) {
  o('probing transport "%s"', e);
  var t = this.createTransport(e, {
    probe: 1
  });
  var n = !1;
  var r = this;
  function i() {
    if (r.onlyBinaryUpgrades) {
      var i = !this.supportsBinary && r.transport.supportsBinary;
      n = n || i;
    }
    if (!n) {
      o('probe transport "%s" opened', e);
      t.send([{
        type: "ping",
        data: "probe"
      }]);
      t.once("packet", function (i) {
        if (!n) {
          if ("pong" === i.type && "probe" === i.data) {
            if (o('probe transport "%s" pong', e), r.upgrading = !0, r.emit("upgrading", t), !t) {
              return;
            }
            l.priorWebsocketSuccess = "websocket" === t.name;
            o('pausing current transport "%s"', r.transport.name);
            r.transport.pause(function () {
              if (!n) {
                if ("closed" !== r.readyState) {
                  o("changing transport and sending upgrade packet");
                  h();
                  r.setTransport(t);
                  t.send([{
                    type: "upgrade"
                  }]);
                  r.emit("upgrade", t);
                  t = null;
                  r.upgrading = !1;
                  r.flush();
                }
              }
            });
          } else {
            o('probe transport "%s" failed', e);
            var a = new Error("probe error");
            a.transport = t.name;
            r.emit("upgradeError", a);
          }
        }
      });
    }
  }
  function a() {
    if (!n) {
      n = !0;
      h();
      t.close();
      t = null;
    }
  }
  function s(n) {
    var i = new Error("probe error: " + n);
    i.transport = t.name;
    a();
    o('probe transport "%s" failed because of error: %s', e, n);
    r.emit("upgradeError", i);
  }
  function c() {
    s("transport closed");
  }
  function u() {
    s("socket closed");
  }
  function f(e) {
    if (t && e.name !== t.name) {
      o('"%s" works - aborting "%s"', e.name, t.name);
      a();
    }
  }
  function h() {
    t.removeListener("open", i);
    t.removeListener("error", s);
    t.removeListener("close", c);
    r.removeListener("close", u);
    r.removeListener("upgrading", f);
  }
  l.priorWebsocketSuccess = !1;
  t.once("open", i);
  t.once("error", s);
  t.once("close", c);
  this.once("close", u);
  this.once("upgrading", f);
  t.open();
};
l.prototype.onOpen = function () {
  if (o("socket open"), this.readyState = "open", l.priorWebsocketSuccess = "websocket" === this.transport.name, this.emit("open"), this.flush(), "open" === this.readyState && this.upgrade && this.transport.pause) {
    o("starting upgrade probes");
    for (var e = 0, t = this.upgrades.length; e < t; e++) {
      this.probe(this.upgrades[e]);
    }
  }
};
l.prototype.onPacket = function (e) {
  if ("opening" === this.readyState || "open" === this.readyState || "closing" === this.readyState) {
    switch (o('socket receive: type "%s", data "%s"', e.type, e.data), this.emit("packet", e), this.emit("heartbeat"), e.type) {
      case "open":
        this.onHandshake(JSON.parse(e.data));
        break;
      case "pong":
        this.setPing();
        this.emit("pong");
        break;
      case "error":
        var t = new Error("server error");
        t.code = e.data;
        this.onError(t);
        break;
      case "message":
        this.emit("data", e.data);
        this.emit("message", e.data);
    }
  } else {
    o('packet received with socket readyState "%s"', this.readyState);
  }
};
l.prototype.onHandshake = function (e) {
  this.emit("handshake", e);
  this.id = e.sid;
  this.transport.query.sid = e.sid;
  this.upgrades = this.filterUpgrades(e.upgrades);
  this.pingInterval = e.pingInterval;
  this.pingTimeout = e.pingTimeout;
  this.onOpen();
  if ("closed" !== this.readyState) {
    this.setPing();
    this.removeListener("heartbeat", this.onHeartbeat);
    this.on("heartbeat", this.onHeartbeat);
  }
};
l.prototype.onHeartbeat = function (e) {
  clearTimeout(this.pingTimeoutTimer);
  var t = this;
  t.pingTimeoutTimer = setTimeout(function () {
    if ("closed" !== t.readyState) {
      t.onClose("ping timeout");
    }
  }, e || t.pingInterval + t.pingTimeout);
};
l.prototype.setPing = function () {
  var e = this;
  clearTimeout(e.pingIntervalTimer);
  e.pingIntervalTimer = setTimeout(function () {
    o("writing ping packet - expecting pong within %sms", e.pingTimeout);
    e.ping();
    e.onHeartbeat(e.pingTimeout);
  }, e.pingInterval);
};
l.prototype.ping = function () {
  var e = this;
  this.sendPacket("ping", function () {
    e.emit("ping");
  });
};
l.prototype.onDrain = function () {
  this.writeBuffer.splice(0, this.prevBufferLen);
  this.prevBufferLen = 0;
  if (0 === this.writeBuffer.length) {
    this.emit("drain");
  } else {
    this.flush();
  }
};
l.prototype.flush = function () {
  if ("closed" !== this.readyState && this.transport.writable && !this.upgrading && this.writeBuffer.length) {
    o("flushing %d packets in socket", this.writeBuffer.length);
    this.transport.send(this.writeBuffer);
    this.prevBufferLen = this.writeBuffer.length;
    this.emit("flush");
  }
};
l.prototype.write = l.prototype.send = function (e, t, n) {
  this.sendPacket("message", e, t, n);
  return this;
};
l.prototype.sendPacket = function (e, t, n, r) {
  if ("function" === typeof t && (r = t, t = void 0), "function" === typeof n && (r = n, n = null), "closing" !== this.readyState && "closed" !== this.readyState) {
    (n = n || {}).compress = !1 !== n.compress;
    var i = {
      type: e,
      data: t,
      options: n
    };
    this.emit("packetCreate", i);
    this.writeBuffer.push(i);
    if (r) {
      this.once("flush", r);
    }
    this.flush();
  }
};
l.prototype.close = function () {
  if ("opening" === this.readyState || "open" === this.readyState) {
    this.readyState = "closing";
    var e = this;
    if (this.writeBuffer.length) {
      this.once("drain", function () {
        if (this.upgrading) {
          r();
        } else {
          t();
        }
      });
    } else {
      if (this.upgrading) {
        r();
      } else {
        t();
      }
    }
  }
  function t() {
    e.onClose("forced close");
    o("socket closing - telling transport to close");
    e.transport.close();
  }
  function n() {
    e.removeListener("upgrade", n);
    e.removeListener("upgradeError", n);
    t();
  }
  function r() {
    e.once("upgrade", n);
    e.once("upgradeError", n);
  }
  return this;
};
l.prototype.onError = function (e) {
  o("socket error %j", e);
  l.priorWebsocketSuccess = !1;
  this.emit("error", e);
  this.onClose("transport error", e);
};
l.prototype.onClose = function (e, t) {
  if ("opening" === this.readyState || "open" === this.readyState || "closing" === this.readyState) {
    o('socket close with reason: "%s"', e);
    clearTimeout(this.pingIntervalTimer);
    clearTimeout(this.pingTimeoutTimer);
    this.transport.removeAllListeners("close");
    this.transport.close();
    this.transport.removeAllListeners();
    this.readyState = "closed";
    this.id = null;
    this.emit("close", e, t);
    this.writeBuffer = [];
    this.prevBufferLen = 0;
  }
};
l.prototype.filterUpgrades = function (e) {
  for (var t = [], n = 0, r = e.length; n < r; n++) {
    if (~a(this.transports, e[n])) {
      t.push(e[n]);
    }
  }
  return t;
};