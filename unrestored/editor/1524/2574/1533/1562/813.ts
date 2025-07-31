var r = require("../1626/167");
var o = require("../1601/705");
var i = "".split;
module.exports = r(function () {
  return !Object("z").propertyIsEnumerable(0);
}) ? function (e) {
  return "String" == o(e) ? i.call(e, "") : Object(e);
} : Object;