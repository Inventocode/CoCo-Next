"use strict";

export { o as a };
import r = require("../57/770");
import i = require("../58/989");
function o(e, t, n) {
  return (o = i.a() ? Reflect.construct : function (e, t, n) {
    var i = [null];
    i.push.apply(i, t);
    var o = new (Function.bind.apply(e, i))();
    if (n) {
      r.a(o, n.prototype);
    }
    return o;
  }).apply(null, arguments);
}
export default o;