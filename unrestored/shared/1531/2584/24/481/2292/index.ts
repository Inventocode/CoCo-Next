var r = require("./1352");
var i = require("../845/index")("socket.io-client:url");
module.exports = function (e, t) {
  var n = e;
  t = t || "undefined" !== typeof location && location;
  if (null == e) {
    e = t.protocol + "//" + t.host;
  }
  if ("string" === typeof e) {
    if ("/" === e.charAt(0)) {
      e = "/" === e.charAt(1) ? t.protocol + e : t.host + e;
    }
    if (!/^(https?|wss?):\/\//.test(e)) {
      i("protocol-less url %s", e);
      e = "undefined" !== typeof t ? t.protocol + "//" + e : "https://" + e;
    }
    i("parse %s", e);
    n = r(e);
  }
  if (!n.port) {
    if (/^(http|ws)$/.test(n.protocol)) {
      n.port = "80";
    } else {
      if (/^(http|ws)s$/.test(n.protocol)) {
        n.port = "443";
      }
    }
  }
  n.path = n.path || "/";
  var o = -1 !== n.host.indexOf(":") ? "[" + n.host + "]" : n.host;
  n.id = n.protocol + "://" + o + ":" + n.port;
  n.href = n.protocol + "://" + o + (t && t.port === n.port ? "" : ":" + n.port);
  return n;
};