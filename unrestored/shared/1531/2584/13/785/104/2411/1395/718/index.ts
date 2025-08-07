var r = require("./849");
var i = require("./2413");
var o = require("./2414");
var a = r ? r.toStringTag : undefined;
module.exports = function (e) {
  return null == e ? undefined === e ? "[object Undefined]" : "[object Null]" : a && a in Object(e) ? i(e) : o(e);
};