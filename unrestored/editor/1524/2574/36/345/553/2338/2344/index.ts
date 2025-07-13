import * as r from "../761";
import * as i from "./2345/index";
var o = require("../../../../../616/570/index").Buffer;
function a(e) {
  this.genPoly = void 0;
  this.degree = e;
  if (this.degree) {
    this.initialize(this.degree);
  }
}
a.prototype.initialize = function (e) {
  this.degree = e;
  this.genPoly = i.generateECPolynomial(this.degree);
};
a.prototype.encode = function (e) {
  if (!this.genPoly) {
    throw new Error("Encoder not initialized");
  }
  var t = r.alloc(this.degree);
  var n = o.concat([e, t], e.length + this.degree);
  var a = i.mod(n, this.genPoly);
  var s = this.degree - a.length;
  if (s > 0) {
    var c = r.alloc(this.degree);
    a.copy(c, s);
    return c;
  }
  return a;
};
module.exports = a;