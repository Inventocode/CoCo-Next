var r = require("../759/index");
var i = require("./1128");
function o(e) {
  this.path = e.path;
  this.hostname = e.hostname;
  this.port = e.port;
  this.secure = e.secure;
  this.query = e.query;
  this.timestampParam = e.timestampParam;
  this.timestampRequests = e.timestampRequests;
  this.readyState = "";
  this.agent = e.agent || !1;
  this.socket = e.socket;
  this.enablesXDR = e.enablesXDR;
  this.withCredentials = e.withCredentials;
  this.pfx = e.pfx;
  this.key = e.key;
  this.passphrase = e.passphrase;
  this.cert = e.cert;
  this.ca = e.ca;
  this.ciphers = e.ciphers;
  this.rejectUnauthorized = e.rejectUnauthorized;
  this.forceNode = e.forceNode;
  this.isReactNative = e.isReactNative;
  this.extraHeaders = e.extraHeaders;
  this.localAddress = e.localAddress;
}
module.exports = o;
i(o.prototype);
o.prototype.onError = function (e, t) {
  var n = new Error(e);
  n.type = "TransportError";
  n.description = t;
  this.emit("error", n);
  return this;
};
o.prototype.open = function () {
  if (!("closed" !== this.readyState && "" !== this.readyState)) {
    this.readyState = "opening";
    this.doOpen();
  }
  return this;
};
o.prototype.close = function () {
  if (!("opening" !== this.readyState && "open" !== this.readyState)) {
    this.doClose();
    this.onClose();
  }
  return this;
};
o.prototype.send = function (e) {
  if ("open" !== this.readyState) {
    throw new Error("Transport not open");
  }
  this.write(e);
};
o.prototype.onOpen = function () {
  this.readyState = "open";
  this.writable = !0;
  this.emit("open");
};
o.prototype.onData = function (e) {
  var t = r.decodePacket(e, this.socket.binaryType);
  this.onPacket(t);
};
o.prototype.onPacket = function (e) {
  this.emit("packet", e);
};
o.prototype.onClose = function () {
  this.readyState = "closed";
  this.emit("close");
};