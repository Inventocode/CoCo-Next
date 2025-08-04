(function (e) {
  var r = require("./532");
  var i = require("./1812");
  var o = exports && !exports.nodeType && exports;
  var a = o && "object" == typeof e && e && !e.nodeType && e;
  var s = a && a.exports === o ? r.Buffer : void 0;
  var c = (s ? s.isBuffer : void 0) || i;
  e.exports = c;
}).call(this, require("../../../../../31/571")(module));