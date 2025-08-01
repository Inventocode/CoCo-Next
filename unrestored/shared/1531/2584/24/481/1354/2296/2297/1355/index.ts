var r = require("./1128/index");
var i = require("./2299");
var o = require("./2308/index");
var a = require("./2309/index");
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
exports.websocket = a;