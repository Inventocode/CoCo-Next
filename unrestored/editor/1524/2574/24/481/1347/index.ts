import * as r from "./2286/index";
import * as i from "../1353/index";
import * as o from "./1124";
import * as a from "../1123/index";
import * as s from "./1354";
import * as c from "./1355";
var u = require("../844/index")("socket.io-client:manager");
import * as l from "./1352";
import * as f from "./2301";
var h = Object.prototype.hasOwnProperty;
function d(e, t) {
  if (!(this instanceof d)) {
    return new d(e, t);
  }
  if (e && "object" === typeof e) {
    t = e;
    e = void 0;
  }
  (t = t || {}).path = t.path || "/socket.io";
  this.nsps = {};
  this.subs = [];
  this.opts = t;
  this.reconnection(!1 !== t.reconnection);
  this.reconnectionAttempts(t.reconnectionAttempts || 1 / 0);
  this.reconnectionDelay(t.reconnectionDelay || 1e3);
  this.reconnectionDelayMax(t.reconnectionDelayMax || 5e3);
  this.randomizationFactor(t.randomizationFactor || .5);
  this.backoff = new f({
    min: this.reconnectionDelay(),
    max: this.reconnectionDelayMax(),
    jitter: this.randomizationFactor()
  });
  this.timeout(null == t.timeout ? 2e4 : t.timeout);
  this.readyState = "closed";
  this.uri = e;
  this.connecting = [];
  this.lastPing = null;
  this.encoding = !1;
  this.packetBuffer = [];
  var n = t.parser || a;
  this.encoder = new n.Encoder();
  this.decoder = new n.Decoder();
  this.autoConnect = !1 !== t.autoConnect;
  if (this.autoConnect) {
    this.open();
  }
}
module.exports = d;
d.prototype.emitAll = function () {
  for (var e in this.emit.apply(this, arguments), this.nsps) if (h.call(this.nsps, e)) {
    this.nsps[e].emit.apply(this.nsps[e], arguments);
  }
};
d.prototype.updateSocketIds = function () {
  for (var e in this.nsps) if (h.call(this.nsps, e)) {
    this.nsps[e].id = this.generateId(e);
  }
};
d.prototype.generateId = function (e) {
  return ("/" === e ? "" : e + "#") + this.engine.id;
};
o(d.prototype);
d.prototype.reconnection = function (e) {
  return arguments.length ? (this._reconnection = !!e, this) : this._reconnection;
};
d.prototype.reconnectionAttempts = function (e) {
  return arguments.length ? (this._reconnectionAttempts = e, this) : this._reconnectionAttempts;
};
d.prototype.reconnectionDelay = function (e) {
  return arguments.length ? (this._reconnectionDelay = e, this.backoff && this.backoff.setMin(e), this) : this._reconnectionDelay;
};
d.prototype.randomizationFactor = function (e) {
  return arguments.length ? (this._randomizationFactor = e, this.backoff && this.backoff.setJitter(e), this) : this._randomizationFactor;
};
d.prototype.reconnectionDelayMax = function (e) {
  return arguments.length ? (this._reconnectionDelayMax = e, this.backoff && this.backoff.setMax(e), this) : this._reconnectionDelayMax;
};
d.prototype.timeout = function (e) {
  return arguments.length ? (this._timeout = e, this) : this._timeout;
};
d.prototype.maybeReconnectOnOpen = function () {
  if (!this.reconnecting && this._reconnection && 0 === this.backoff.attempts) {
    this.reconnect();
  }
};
d.prototype.open = d.prototype.connect = function (e, t) {
  if (u("readyState %s", this.readyState), ~this.readyState.indexOf("open")) {
    return this;
  }
  u("opening %s", this.uri);
  this.engine = r(this.uri, this.opts);
  var n = this.engine;
  var i = this;
  this.readyState = "opening";
  this.skipReconnect = !1;
  var o = s(n, "open", function () {
    i.onopen();
    if (e) {
      e();
    }
  });
  var a = s(n, "error", function (t) {
    if (u("connect_error"), i.cleanup(), i.readyState = "closed", i.emitAll("connect_error", t), e) {
      var n = new Error("Connection error");
      n.data = t;
      e(n);
    } else {
      i.maybeReconnectOnOpen();
    }
  });
  if (!1 !== this._timeout) {
    var c = this._timeout;
    u("connect attempt will timeout after %d", c);
    if (0 === c) {
      o.destroy();
    }
    var l = setTimeout(function () {
      u("connect attempt timed out after %d", c);
      o.destroy();
      n.close();
      n.emit("error", "timeout");
      i.emitAll("connect_timeout", c);
    }, c);
    this.subs.push({
      destroy: function () {
        clearTimeout(l);
      }
    });
  }
  this.subs.push(o);
  this.subs.push(a);
  return this;
};
d.prototype.onopen = function () {
  u("open");
  this.cleanup();
  this.readyState = "open";
  this.emit("open");
  var e = this.engine;
  this.subs.push(s(e, "data", c(this, "ondata")));
  this.subs.push(s(e, "ping", c(this, "onping")));
  this.subs.push(s(e, "pong", c(this, "onpong")));
  this.subs.push(s(e, "error", c(this, "onerror")));
  this.subs.push(s(e, "close", c(this, "onclose")));
  this.subs.push(s(this.decoder, "decoded", c(this, "ondecoded")));
};
d.prototype.onping = function () {
  this.lastPing = new Date();
  this.emitAll("ping");
};
d.prototype.onpong = function () {
  this.emitAll("pong", new Date() - this.lastPing);
};
d.prototype.ondata = function (e) {
  this.decoder.add(e);
};
d.prototype.ondecoded = function (e) {
  this.emit("packet", e);
};
d.prototype.onerror = function (e) {
  u("error", e);
  this.emitAll("error", e);
};
d.prototype.socket = function (e, t) {
  var n = this.nsps[e];
  if (!n) {
    n = new i(this, e, t);
    this.nsps[e] = n;
    var r = this;
    n.on("connecting", o);
    n.on("connect", function () {
      n.id = r.generateId(e);
    });
    if (this.autoConnect) {
      o();
    }
  }
  function o() {
    if (!~l(r.connecting, n)) {
      r.connecting.push(n);
    }
  }
  return n;
};
d.prototype.destroy = function (e) {
  var t = l(this.connecting, e);
  if (~t) {
    this.connecting.splice(t, 1);
  }
  if (!this.connecting.length) {
    this.close();
  }
};
d.prototype.packet = function (e) {
  u("writing packet %j", e);
  var t = this;
  if (e.query && 0 === e.type) {
    e.nsp += "?" + e.query;
  }
  if (t.encoding) {
    t.packetBuffer.push(e);
  } else {
    t.encoding = !0;
    this.encoder.encode(e, function (n) {
      for (var r = 0; r < n.length; r++) {
        t.engine.write(n[r], e.options);
      }
      t.encoding = !1;
      t.processPacketQueue();
    });
  }
};
d.prototype.processPacketQueue = function () {
  if (this.packetBuffer.length > 0 && !this.encoding) {
    var e = this.packetBuffer.shift();
    this.packet(e);
  }
};
d.prototype.cleanup = function () {
  u("cleanup");
  for (var e = this.subs.length, t = 0; t < e; t++) {
    this.subs.shift().destroy();
  }
  this.packetBuffer = [];
  this.encoding = !1;
  this.lastPing = null;
  this.decoder.destroy();
};
d.prototype.close = d.prototype.disconnect = function () {
  u("disconnect");
  this.skipReconnect = !0;
  this.reconnecting = !1;
  if ("opening" === this.readyState) {
    this.cleanup();
  }
  this.backoff.reset();
  this.readyState = "closed";
  if (this.engine) {
    this.engine.close();
  }
};
d.prototype.onclose = function (e) {
  u("onclose");
  this.cleanup();
  this.backoff.reset();
  this.readyState = "closed";
  this.emit("close", e);
  if (this._reconnection && !this.skipReconnect) {
    this.reconnect();
  }
};
d.prototype.reconnect = function () {
  if (this.reconnecting || this.skipReconnect) {
    return this;
  }
  var e = this;
  if (this.backoff.attempts >= this._reconnectionAttempts) {
    u("reconnect failed");
    this.backoff.reset();
    this.emitAll("reconnect_failed");
    this.reconnecting = !1;
  } else {
    var t = this.backoff.duration();
    u("will wait %dms before reconnect attempt", t);
    this.reconnecting = !0;
    var n = setTimeout(function () {
      if (!e.skipReconnect) {
        u("attempting reconnect");
        e.emitAll("reconnect_attempt", e.backoff.attempts);
        e.emitAll("reconnecting", e.backoff.attempts);
        if (!e.skipReconnect) {
          e.open(function (t) {
            if (t) {
              u("reconnect attempt error");
              e.reconnecting = !1;
              e.reconnect();
              e.emitAll("reconnect_error", t.data);
            } else {
              u("reconnect success");
              e.onreconnect();
            }
          });
        }
      }
    }, t);
    this.subs.push({
      destroy: function () {
        clearTimeout(n);
      }
    });
  }
};
d.prototype.onreconnect = function () {
  var e = this.backoff.attempts;
  this.reconnecting = !1;
  this.backoff.reset();
  this.updateSocketIds();
  this.emitAll("reconnect", e);
};