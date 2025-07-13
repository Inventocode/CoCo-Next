import * as r from "./2282/index";
import * as i from "./1123/index";
import * as o from "./1347/index";
var a = require("./844/index")("socket.io-client");
module.exports = t = c;
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
export { c as connect };
exports.Manager = require("./1347/index");
exports.Socket = require("./1353/index");