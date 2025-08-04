var r = require("../../../../1442/1779/1828/1831/955");
var i = require("./1791");
var o = require("./1792");
var a = r ? r.toStringTag : void 0;
module.exports = function (e) {
  return null == e ? void 0 === e ? "[object Undefined]" : "[object Null]" : a && a in Object(e) ? i(e) : o(e);
};