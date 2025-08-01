var r = require("../../1130");
var i = require("../../../../../1360/966");
var o = require("../../../759/index");
var a = require("./967");
var s = require("../2309/1358");
var c = require("../../968/index")("engine.io-client:polling");
module.exports = l;
var u = null != new (require("../1128/index"))({
  xdomain: !1
}).responseType;
function l(e) {
  var t = e && e.forceBase64;
  if (!(u && !t)) {
    this.supportsBinary = !1;
  }
  r.call(this, e);
}
a(l, r);
l.prototype.name = "polling";
l.prototype.doOpen = function () {
  this.poll();
};
l.prototype.pause = function (e) {
  var t = this;
  function n() {
    c("paused");
    t.readyState = "paused";
    e();
  }
  if (this.readyState = "pausing", this.polling || !this.writable) {
    var r = 0;
    if (this.polling) {
      c("we are currently polling - waiting to pause");
      r++;
      this.once("pollComplete", function () {
        c("pre-pause polling complete");
        if (! --r) {
          n();
        }
      });
    }
    if (!this.writable) {
      c("we are currently writing - waiting to pause");
      r++;
      this.once("drain", function () {
        c("pre-pause writing complete");
        if (! --r) {
          n();
        }
      });
    }
  } else {
    n();
  }
};
l.prototype.poll = function () {
  c("polling");
  this.polling = !0;
  this.doPoll();
  this.emit("poll");
};
l.prototype.onData = function (e) {
  var t = this;
  c("polling got data %s", e);
  o.decodePayload(e, this.socket.binaryType, function (e, n, r) {
    if ("opening" === t.readyState && "open" === e.type && t.onOpen(), "close" === e.type) {
      t.onClose();
      return !1;
    }
    t.onPacket(e);
  });
  if ("closed" !== this.readyState) {
    this.polling = !1;
    this.emit("pollComplete");
    if ("open" === this.readyState) {
      this.poll();
    } else {
      c('ignoring poll - transport state "%s"', this.readyState);
    }
  }
};
l.prototype.doClose = function () {
  var e = this;
  function t() {
    c("writing close packet");
    e.write([{
      type: "close"
    }]);
  }
  if ("open" === this.readyState) {
    c("transport open - closing");
    t();
  } else {
    c("transport not open - deferring close");
    this.once("open", t);
  }
};
l.prototype.write = function (e) {
  var t = this;
  this.writable = !1;
  var n = function () {
    t.writable = !0;
    t.emit("drain");
  };
  o.encodePayload(e, this.supportsBinary, function (e) {
    t.doWrite(e, n);
  });
};
l.prototype.uri = function () {
  var e = this.query || {};
  var t = this.secure ? "https" : "http";
  var n = "";
  if (!1 !== this.timestampRequests) {
    e[this.timestampParam] = s();
  }
  if (!(this.supportsBinary || e.sid)) {
    e.b64 = 1;
  }
  e = i.encode(e);
  if (this.port && ("https" === t && 443 !== Number(this.port) || "http" === t && 80 !== Number(this.port))) {
    n = ":" + this.port;
  }
  if (e.length) {
    e = "?" + e;
  }
  return t + "://" + (-1 !== this.hostname.indexOf(":") ? "[" + this.hostname + "]" : this.hostname) + n + this.path + e;
};