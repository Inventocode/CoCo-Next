var r = require("../1633/167");
module.exports = !r(function () {
  function e() {}
  e.prototype.constructor = null;
  return Object.getPrototypeOf(new e()) !== e.prototype;
});