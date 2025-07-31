var r = require("./1791/955");
var i = Object.prototype.hasOwnProperty;
module.exports = function (e) {
  var t = this.__data__;
  return r ? void 0 !== t[e] : i.call(t, e);
};