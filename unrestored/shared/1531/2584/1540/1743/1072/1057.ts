var r = require("../../1745/194");
var o = require("../../1633/231");
var i = r.document;
var a = o(i) && o(i.createElement);
module.exports = function (e) {
  return a ? i.createElement(e) : {};
};