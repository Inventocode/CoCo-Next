"use strict";

var r = require("./1012");
var i = "object" == typeof self && self && self.Object === Object && self;
var o = r.a || i || Function("return this")();
exports.a = o;