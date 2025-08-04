var r = require("./2417");
var i = require("../../../../../../785/104/2411/1395/535");
var o = Object.prototype;
var a = o.hasOwnProperty;
var s = o.propertyIsEnumerable;
var c = r(function () {
  return arguments;
}()) ? r : function (e) {
  return i(e) && a.call(e, "callee") && !s.call(e, "callee");
};
module.exports = c;