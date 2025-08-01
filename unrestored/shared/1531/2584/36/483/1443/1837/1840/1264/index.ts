var r = require("./1811");
var i = require("../../../../1448/1876/639");
var o = Object.prototype;
var a = o.hasOwnProperty;
var s = o.propertyIsEnumerable;
var c = r(function () {
  return arguments;
}()) ? r : function (e) {
  return i(e) && a.call(e, "callee") && !s.call(e, "callee");
};
module.exports = c;