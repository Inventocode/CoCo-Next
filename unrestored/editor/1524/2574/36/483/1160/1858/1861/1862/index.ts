var r = require("./1282");
var i = require("./1863");
var o = require("./1864");
var a = r ? r.toStringTag : void 0;
module.exports = function (e) {
  return null == e ? void 0 === e ? "[object Undefined]" : "[object Null]" : a && a in Object(e) ? i(e) : o(e);
};