var r = require("./2282/index");
var i = require("./1123/index");
var o = require("./1347/index");
var a = require("./844/index")("socket.io-client");
module.exports = exports = c;
var s = exports.managers = {};
function c(e, t) {
  if ("object" === typeof e) {
    t = e;
    e = void 0;
  }
  t = t || {};
  var n;
  var i = r(e);
  var c = i.source;
  var u = i.id;
  var l = i.path;
  var f = s[u] && l in s[u].nsps;
  if (t.forceNew || t["force new connection"] || !1 === t.multiplex || f) {
    a("ignoring socket cache for %s", c);
    n = o(c, t);
  } else {
    if (!s[u]) {
      a("new io instance for %s", c);
      s[u] = o(c, t);
    }
    n = s[u];
  }
  if (i.query && !t.query) {
    t.query = i.query;
  }
  return n.socket(i.path, t);
}
exports.protocol = i.protocol;
exports.connect = c;
exports.Manager = require("./1347/index");
exports.Socket = require("./1353/index");