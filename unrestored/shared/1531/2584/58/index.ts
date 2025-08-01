"use strict";

export { a };
var r = require("../301/203");
var i = require("./989");
var o = require("./685");
function a(e) {
  return function () {
    var t;
    var n = Object(r.a)(e);
    if (Object(i.a)()) {
      var a = Object(r.a)(this).constructor;
      t = Reflect.construct(n, arguments, a);
    } else {
      t = n.apply(this, arguments);
    }
    return Object(o.a)(this, t);
  };
}
export default a;