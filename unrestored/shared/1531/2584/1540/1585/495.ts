var r = require("../1745/332");
var o = require("../1731/309");
var i = require("../1541/933");
var a = require("../1660/1067");
var s = i("IE_PROTO");
var c = Object.prototype;
module.exports = a ? Object.getPrototypeOf : function (e) {
  e = o(e);
  return r(e, s) ? e[s] : "function" == typeof e.constructor && e instanceof e.constructor ? e.constructor.prototype : e instanceof Object ? c : null;
};