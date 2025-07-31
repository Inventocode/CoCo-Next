var r = require("../1123/index");
var i = require("../1347/1124");
var o = require("./2300");
var a = require("../1347/1354");
var s = require("../1347/1355");
var c = require("../844/index")("socket.io-client:socket");
var u = require("./965");
var l = require("./1350");
module.exports = d;
var f = {
  connect: 1,
  connect_error: 1,
  connect_timeout: 1,
  connecting: 1,
  disconnect: 1,
  error: 1,
  reconnect: 1,
  reconnect_attempt: 1,
  reconnect_failed: 1,
  reconnect_error: 1,
  reconnecting: 1,
  ping: 1,
  pong: 1
};
var h = i.prototype.emit;
function d(e, t, n) {
  this.io = e;
  this.nsp = t;
  this.json = this;
  this.ids = 0;
  this.acks = {};
  this.receiveBuffer = [];
  this.sendBuffer = [];
  this.connected = !1;
  this.disconnected = !0;
  this.flags = {};
  if (n && n.query) {
    this.query = n.query;
  }
  if (this.io.autoConnect) {
    this.open();
  }
}
i(d.prototype);
d.prototype.subEvents = function () {
  if (!this.subs) {
    var e = this.io;
    this.subs = [a(e, "open", s(this, "onopen")), a(e, "packet", s(this, "onpacket")), a(e, "close", s(this, "onclose"))];
  }
};
d.prototype.open = d.prototype.connect = function () {
  if (!this.connected) {
    this.subEvents();
    if (!this.io.reconnecting) {
      this.io.open();
    }
    if ("open" === this.io.readyState) {
      this.onopen();
    }
    this.emit("connecting");
  }
  return this;
};
d.prototype.send = function () {
  var e = o(arguments);
  e.unshift("message");
  this.emit.apply(this, e);
  return this;
};
d.prototype.emit = function (e) {
  if (f.hasOwnProperty(e)) {
    h.apply(this, arguments);
    return this;
  }
  var t = o(arguments);
  var n = {
    type: (void 0 !== this.flags.binary ? this.flags.binary : l(t)) ? r.BINARY_EVENT : r.EVENT,
    data: t,
    options: {}
  };
  n.options.compress = !this.flags || !1 !== this.flags.compress;
  if ("function" === typeof t[t.length - 1]) {
    c("emitting packet with ack id %d", this.ids);
    this.acks[this.ids] = t.pop();
    n.id = this.ids++;
  }
  if (this.connected) {
    this.packet(n);
  } else {
    this.sendBuffer.push(n);
  }
  this.flags = {};
  return this;
};
d.prototype.packet = function (e) {
  e.nsp = this.nsp;
  this.io.packet(e);
};
d.prototype.onopen = function () {
  if (c("transport is open - connecting"), "/" !== this.nsp) {
    if (this.query) {
      var e = "object" === typeof this.query ? u.encode(this.query) : this.query;
      c("sending connect packet with query %s", e);
      this.packet({
        type: r.CONNECT,
        query: e
      });
    } else {
      this.packet({
        type: r.CONNECT
      });
    }
  }
};
d.prototype.onclose = function (e) {
  c("close (%s)", e);
  this.connected = !1;
  this.disconnected = !0;
  delete this.id;
  this.emit("disconnect", e);
};
d.prototype.onpacket = function (e) {
  var t = e.nsp === this.nsp;
  var n = e.type === r.ERROR && "/" === e.nsp;
  if (t || n) {
    switch (e.type) {
      case r.CONNECT:
        this.onconnect();
        break;
      case r.EVENT:
      case r.BINARY_EVENT:
        this.onevent(e);
        break;
      case r.ACK:
      case r.BINARY_ACK:
        this.onack(e);
        break;
      case r.DISCONNECT:
        this.ondisconnect();
        break;
      case r.ERROR:
        this.emit("error", e.data);
    }
  }
};
d.prototype.onevent = function (e) {
  var t = e.data || [];
  c("emitting event %j", t);
  if (null != e.id) {
    c("attaching ack callback to event");
    t.push(this.ack(e.id));
  }
  if (this.connected) {
    h.apply(this, t);
  } else {
    this.receiveBuffer.push(t);
  }
};
d.prototype.ack = function (e) {
  var t = this;
  var n = !1;
  return function () {
    if (!n) {
      n = !0;
      var i = o(arguments);
      c("sending ack %j", i);
      t.packet({
        type: l(i) ? r.BINARY_ACK : r.ACK,
        id: e,
        data: i
      });
    }
  };
};
d.prototype.onack = function (e) {
  var t = this.acks[e.id];
  if ("function" === typeof t) {
    c("calling ack %s with %j", e.id, e.data);
    t.apply(this, e.data);
    delete this.acks[e.id];
  } else {
    c("bad ack %s", e.id);
  }
};
d.prototype.onconnect = function () {
  this.connected = !0;
  this.disconnected = !1;
  this.emit("connect");
  this.emitBuffered();
};
d.prototype.emitBuffered = function () {
  var e;
  for (e = 0; e < this.receiveBuffer.length; e++) {
    h.apply(this, this.receiveBuffer[e]);
  }
  for (this.receiveBuffer = [], e = 0; e < this.sendBuffer.length; e++) {
    this.packet(this.sendBuffer[e]);
  }
  this.sendBuffer = [];
};
d.prototype.ondisconnect = function () {
  c("server disconnect (%s)", this.nsp);
  this.destroy();
  this.onclose("io server disconnect");
};
d.prototype.destroy = function () {
  if (this.subs) {
    for (var e = 0; e < this.subs.length; e++) {
      this.subs[e].destroy();
    }
    this.subs = null;
  }
  this.io.destroy(this);
};
d.prototype.close = d.prototype.disconnect = function () {
  if (this.connected) {
    c("performing disconnect (%s)", this.nsp);
    this.packet({
      type: r.DISCONNECT
    });
  }
  this.destroy();
  if (this.connected) {
    this.onclose("io client disconnect");
  }
  return this;
};
d.prototype.compress = function (e) {
  this.flags.compress = e;
  return this;
};
d.prototype.binary = function (e) {
  this.flags.binary = e;
  return this;
};