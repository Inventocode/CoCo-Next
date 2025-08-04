var r = require("./2419");
var i = require("./1147");
var o = require("./1148");
var a = o && o.isTypedArray;
var s = a ? i(a) : r;
module.exports = s;