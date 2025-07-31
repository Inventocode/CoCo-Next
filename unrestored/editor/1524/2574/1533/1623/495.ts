var r = require("../1738/332");
var o = require("./309");
var i = require("../1534/932");
var a = require("./1066");
var s = i("IE_PROTO");
var c = Object.prototype;
module.exports = a ? Object.getPrototypeOf : function (e) {
  e = o(e);
  return r(e, s) ? e[s] : "function" == typeof e.constructor && e instanceof e.constructor ? e.constructor.prototype : e instanceof Object ? c : null;
};