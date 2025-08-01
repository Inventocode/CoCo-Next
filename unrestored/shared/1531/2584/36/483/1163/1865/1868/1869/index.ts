var r = require("./1285");
var i = require("./1870");
var o = require("./1871");
var a = r ? r.toStringTag : void 0;
module.exports = function (e) {
  return null == e ? void 0 === e ? "[object Undefined]" : "[object Null]" : a && a in Object(e) ? i(e) : o(e);
};