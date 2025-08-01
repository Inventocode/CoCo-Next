var r = require("./1867");
var i = /^\s+/;
module.exports = function (e) {
  return e ? e.slice(0, r(e) + 1).replace(i, "") : e;
};