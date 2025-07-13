"use strict";

import * as r from "./1738/194";
import * as o from "./1707/258/index";
import * as i from "./935/index";
var a = require("./1735/247/index")("iterator");
var s = r.Uint8Array;
var c = i.values;
var l = i.keys;
var u = i.entries;
var d = o.aTypedArray;
var p = o.exportTypedArrayMethod;
var f = s && s.prototype[a];
var h = !!f && ("values" == f.name || void 0 == f.name);
var m = function () {
  return c.call(d(this));
};
p("entries", function () {
  return u.call(d(this));
});
p("keys", function () {
  return l.call(d(this));
});
p("values", m, !h);
p(a, m, !h);