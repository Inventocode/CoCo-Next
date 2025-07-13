"use strict";

import * as r from "../../../../../../3190/624/index";
import * as i from "../../../../2623/index";
var a = i.FLIPPED_ALIAS_KEYS;
var s = i.isArrayExpression;
var o = i.isAssignmentExpression;
var l = i.isBinary;
var u = i.isBlockStatement;
var c = i.isCallExpression;
var p = i.isFunction;
var f = i.isIdentifier;
var d = i.isLiteral;
var h = i.isMemberExpression;
var y = i.isObjectExpression;
var m = i.isOptionalCallExpression;
var v = i.isOptionalMemberExpression;
var g = i.isStringLiteral;
function T(e) {
  var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
  if (h(e) || v(e)) {
    T(e.object, t);
    if (e.computed) {
      T(e.property, t);
    }
  } else {
    if (l(e) || o(e)) {
      T(e.left, t);
      T(e.right, t);
    } else {
      if (c(e) || m(e)) {
        t.hasCall = !0;
        T(e.callee, t);
      } else {
        if (p(e)) {
          t.hasFunction = !0;
        } else {
          if (f(e)) {
            t.hasHelper = t.hasHelper || b(e.callee);
          }
        }
      }
    }
  }
  return t;
}
function b(e) {
  return h(e) ? b(e.object) || b(e.property) : f(e) ? "require" === e.name || "_" === e.name[0] : c(e) ? b(e.callee) : !(!l(e) && !o(e)) && (f(e.left) && b(e.left) || b(e.right));
}
function S(e) {
  return d(e) || y(e) || s(e) || f(e) || h(e);
}
var E = {
  AssignmentExpression: function (e) {
    var t = T(e.right);
    if (t.hasCall && t.hasHelper || t.hasFunction) {
      return {
        before: t.hasFunction,
        after: !0
      };
    }
  },
  SwitchCase: function (e, t) {
    return {
      before: !!e.consequent.length || t.cases[0] === e,
      after: !e.consequent.length && t.cases[t.cases.length - 1] === e
    };
  },
  LogicalExpression: function (e) {
    if (p(e.left) || p(e.right)) {
      return {
        after: !0
      };
    }
  },
  Literal: function (e) {
    if (g(e) && "use strict" === e.value) {
      return {
        after: !0
      };
    }
  },
  CallExpression: function (e) {
    if (p(e.callee) || b(e)) {
      return {
        before: !0,
        after: !0
      };
    }
  },
  OptionalCallExpression: function (e) {
    if (p(e.callee)) {
      return {
        before: !0,
        after: !0
      };
    }
  },
  VariableDeclaration: function (e) {
    for (var t = 0; t < e.declarations.length; t++) {
      var n = e.declarations[t];
      var r = b(n.id) && !S(n.init);
      if (!r) {
        var i = T(n.init);
        r = b(n.init) && i.hasCall || i.hasFunction;
      }
      if (r) {
        return {
          before: !0,
          after: !0
        };
      }
    }
  },
  IfStatement: function (e) {
    if (u(e.consequent)) {
      return {
        before: !0,
        after: !0
      };
    }
  }
};
export { E as nodes };
E.ObjectProperty = E.ObjectTypeProperty = E.ObjectMethod = function (e, t) {
  if (t.properties[0] === e) {
    return {
      before: !0
    };
  }
};
E.ObjectTypeCallProperty = function (e, t) {
  var n;
  if (t.callProperties[0] === e && (null == (n = t.properties) || !n.length)) {
    return {
      before: !0
    };
  }
};
E.ObjectTypeIndexer = function (e, t) {
  var n;
  var r;
  if (t.indexers[0] === e && (null == (n = t.properties) || !n.length) && (null == (r = t.callProperties) || !r.length)) {
    return {
      before: !0
    };
  }
};
E.ObjectTypeInternalSlot = function (e, t) {
  var n;
  var r;
  var i;
  if (t.internalSlots[0] === e && (null == (n = t.properties) || !n.length) && (null == (r = t.callProperties) || !r.length) && (null == (i = t.indexers) || !i.length)) {
    return {
      before: !0
    };
  }
};
exports.list = {
  VariableDeclaration: function (e) {
    return e.declarations.map(function (e) {
      return e.init;
    });
  },
  ArrayExpression: function (e) {
    return e.elements;
  },
  ObjectExpression: function (e) {
    return e.properties;
  }
};
[["Function", !0], ["Class", !0], ["Loop", !0], ["LabeledStatement", !0], ["SwitchStatement", !0], ["TryStatement", !0]].forEach(function (e) {
  var t = r(e, 2);
  var n = t[0];
  var i = t[1];
  if ("boolean" === typeof i) {
    i = {
      after: i,
      before: i
    };
  }
  [n].concat(a[n] || []).forEach(function (e) {
    E[e] = function () {
      return i;
    };
  });
});