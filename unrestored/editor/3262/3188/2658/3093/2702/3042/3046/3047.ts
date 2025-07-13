"use strict";

exports.TaggedTemplateExpression = function (e) {
  this.print(e.tag, e);
  this.print(e.typeParameters, e);
  this.print(e.quasi, e);
};
exports.TemplateElement = function (e, t) {
  var n = t.quasis[0] === e;
  var r = t.quasis[t.quasis.length - 1] === e;
  var i = (n ? "`" : "}") + e.value.raw + (r ? "`" : "${");
  this.token(i);
};
exports.TemplateLiteral = function (e) {
  for (var t = e.quasis, n = 0; n < t.length; n++) {
    this.print(t[n], e);
    if (n + 1 < t.length) {
      this.print(e.expressions[n], e);
    }
  }
};