var r = require("../../../../1441/1869/1870/1876/954");
var i = require("./1784");
var o = require("./1785");
var a = r ? r.toStringTag : void 0;
module.exports = function (e) {
  return null == e ? void 0 === e ? "[object Undefined]" : "[object Null]" : a && a in Object(e) ? i(e) : o(e);
};