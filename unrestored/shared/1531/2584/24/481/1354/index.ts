var r = require("./2296/index");
var i = require("../1360/index");
var o = require("./1127");
var a = require("../1126/index");
var s = require("./1361");
var c = require("./1362");
var u = require("../845/index")("socket.io-client:manager");
var l = require("./1359");
var f = require("./2311");
var d = Object.prototype.hasOwnProperty;
function h(e, t) {
  if (!(this instanceof h)) {
    return new h(e, t);
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
module.exports = h;
h.prototype.emitAll = function () {
  for (var e in this.emit.apply(this, arguments), this.nsps) if (d.call(this.nsps, e)) {
    this.nsps[e].emit.apply(this.nsps[e], arguments);
  }
};
h.prototype.updateSocketIds = function () {
  for (var e in this.nsps) if (d.call(this.nsps, e)) {
    this.nsps[e].id = this.generateId(e);
  }
};
h.prototype.generateId = function (e) {
  return ("/" === e ? "" : e + "#") + this.engine.id;
};
o(h.prototype);
h.prototype.reconnection = function (e) {
  return arguments.length ? (this._reconnection = !!e, this) : this._reconnection;
};
h.prototype.reconnectionAttempts = function (e) {
  return arguments.length ? (this._reconnectionAttempts = e, this) : this._reconnectionAttempts;
};
h.prototype.reconnectionDelay = function (e) {
  return arguments.length ? (this._reconnectionDelay = e, this.backoff && this.backoff.setMin(e), this) : this._reconnectionDelay;
};
h.prototype.randomizationFactor = function (e) {
  return arguments.length ? (this._randomizationFactor = e, this.backoff && this.backoff.setJitter(e), this) : this._randomizationFactor;
};
h.prototype.reconnectionDelayMax = function (e) {
  return arguments.length ? (this._reconnectionDelayMax = e, this.backoff && this.backoff.setMax(e), this) : this._reconnectionDelayMax;
};
h.prototype.timeout = function (e) {
  return arguments.length ? (this._timeout = e, this) : this._timeout;
};
h.prototype.maybeReconnectOnOpen = function () {
  if (!this.reconnecting && this._reconnection && 0 === this.backoff.attempts) {
    this.reconnect();
  }
};
h.prototype.open = h.prototype.connect = function (e, t) {
  u("readyState %s", this.readyState);
  if (~this.readyState.indexOf("open")) {
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
    u("connect_error");
    i.cleanup();
    i.readyState = "closed";
    i.emitAll("connect_error", t);
    if (e) {
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
h.prototype.onopen = function () {
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
h.prototype.onping = function () {
  this.lastPing = new Date();
  this.emitAll("ping");
};
h.prototype.onpong = function () {
  this.emitAll("pong", new Date() - this.lastPing);
};
h.prototype.ondata = function (e) {
  this.decoder.add(e);
};
h.prototype.ondecoded = function (e) {
  this.emit("packet", e);
};
h.prototype.onerror = function (e) {
  u("error", e);
  this.emitAll("error", e);
};
h.prototype.socket = function (e, t) {
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
h.prototype.destroy = function (e) {
  var t = l(this.connecting, e);
  if (~t) {
    this.connecting.splice(t, 1);
  }
  if (!this.connecting.length) {
    this.close();
  }
};
h.prototype.packet = function (e) {
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
h.prototype.processPacketQueue = function () {
  if (this.packetBuffer.length > 0 && !this.encoding) {
    var e = this.packetBuffer.shift();
    this.packet(e);
  }
};
h.prototype.cleanup = function () {
  u("cleanup");
  for (var e = this.subs.length, t = 0; t < e; t++) {
    this.subs.shift().destroy();
  }
  this.packetBuffer = [];
  this.encoding = !1;
  this.lastPing = null;
  this.decoder.destroy();
};
h.prototype.close = h.prototype.disconnect = function () {
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
h.prototype.onclose = function (e) {
  u("onclose");
  this.cleanup();
  this.backoff.reset();
  this.readyState = "closed";
  this.emit("close", e);
  if (this._reconnection && !this.skipReconnect) {
    this.reconnect();
  }
};
h.prototype.reconnect = function () {
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
h.prototype.onreconnect = function () {
  var e = this.backoff.attempts;
  this.reconnecting = !1;
  this.backoff.reset();
  this.updateSocketIds();
  this.emitAll("reconnect", e);
};