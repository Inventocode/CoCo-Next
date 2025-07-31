var r = require("./1382");
var i = "object" == typeof self && self && self.Object === Object && self;
var o = r || i || Function("return this")();
module.exports = o;