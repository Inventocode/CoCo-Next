var r = require("../1736/167");
var o = require("../1608/705");
var i = "".split;
module.exports = r(function () {
  return !Object("z").propertyIsEnumerable(0);
}) ? function (e) {
  return "String" == o(e) ? i.call(e, "") : Object(e);
} : Object;