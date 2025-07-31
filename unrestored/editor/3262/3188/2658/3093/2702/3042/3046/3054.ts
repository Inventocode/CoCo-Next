"use strict";

var r = require("../../../../../../3190/494");
function i() {
  this.space();
}
Object.defineProperty(exports, "__esModule", {
  value: !0
});
exports.JSXAttribute = function (e) {
  this.print(e.name, e);
  if (e.value) {
    this.token("=");
    this.print(e.value, e);
  }
};
exports.JSXClosingElement = function (e) {
  this.token("</");
  this.print(e.name, e);
  this.token(">");
};
exports.JSXClosingFragment = function () {
  this.token("</");
  this.token(">");
};
exports.JSXElement = function (e) {
  var t = e.openingElement;
  if (this.print(t, e), t.selfClosing) {
    return;
  }
  this.indent();
  var n;
  var i = r(e.children);
  try {
    for (i.s(); !(n = i.n()).done;) {
      var a = n.value;
      this.print(a, e);
    }
  } catch (s) {
    i.e(s);
  } finally {
    i.f();
  }
  this.dedent();
  this.print(e.closingElement, e);
};
exports.JSXEmptyExpression = function (e) {
  this.printInnerComments(e);
};
exports.JSXExpressionContainer = function (e) {
  this.token("{");
  this.print(e.expression, e);
  this.token("}");
};
exports.JSXFragment = function (e) {
  this.print(e.openingFragment, e);
  this.indent();
  var t;
  var n = r(e.children);
  try {
    for (n.s(); !(t = n.n()).done;) {
      var i = t.value;
      this.print(i, e);
    }
  } catch (a) {
    n.e(a);
  } finally {
    n.f();
  }
  this.dedent();
  this.print(e.closingFragment, e);
};
exports.JSXIdentifier = function (e) {
  this.word(e.name);
};
exports.JSXMemberExpression = function (e) {
  this.print(e.object, e);
  this.token(".");
  this.print(e.property, e);
};
exports.JSXNamespacedName = function (e) {
  this.print(e.namespace, e);
  this.token(":");
  this.print(e.name, e);
};
exports.JSXOpeningElement = function (e) {
  this.token("<");
  this.print(e.name, e);
  this.print(e.typeParameters, e);
  if (e.attributes.length > 0) {
    this.space();
    this.printJoin(e.attributes, e, {
      separator: i
    });
  }
  if (e.selfClosing) {
    this.space();
    this.token("/>");
  } else {
    this.token(">");
  }
};
exports.JSXOpeningFragment = function () {
  this.token("<");
  this.token(">");
};
exports.JSXSpreadAttribute = function (e) {
  this.token("{");
  this.token("...");
  this.print(e.argument, e);
  this.token("}");
};
exports.JSXSpreadChild = function (e) {
  this.token("{");
  this.token("...");
  this.print(e.expression, e);
  this.token("}");
};
exports.JSXText = function (e) {
  var t = this.getPossibleRaw(e);
  if (null != t) {
    this.token(t);
  } else {
    this.token(e.value);
  }
};