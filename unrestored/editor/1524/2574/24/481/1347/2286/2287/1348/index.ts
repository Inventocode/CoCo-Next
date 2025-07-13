import * as r from "./1125/index";
import * as i from "./2289/index";
import * as o from "./2298";
import * as a from "./2299/index";
exports.polling = function (e) {
  var t = !1;
  var n = !1;
  var a = !1 !== e.jsonp;
  if ("undefined" !== typeof location) {
    var s = "https:" === location.protocol;
    var c = location.port;
    if (!c) {
      c = s ? 443 : 80;
    }
    t = e.hostname !== location.hostname || c !== e.port;
    n = e.secure !== s;
  }
  if (e.xdomain = t, e.xscheme = n, "open" in new r(e) && !e.forceJSONP) {
    return new i(e);
  }
  if (!a) {
    throw new Error("JSONP disabled");
  }
  return new o(e);
};
export { a as websocket };