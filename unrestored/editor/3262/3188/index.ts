"use strict";

import * as r from "./3189";
import * as a from "./1184/index";
import * as i from "./2658/index";
var o = (0, r.declare)(function (e) {
  function t(e, t) {
    for (var n = t.arguments[0].properties, r = !0, a = 0; a < n.length; a++) {
      var o = n[a];
      var s = i.types.toComputedKey(o);
      if (i.types.isLiteral(s, {
        value: "displayName"
      })) {
        r = !1;
        break;
      }
    }
    if (r) {
      n.unshift(i.types.objectProperty(i.types.identifier("displayName"), i.types.stringLiteral(e)));
    }
  }
  e.assertVersion(7);
  var n = i.types.buildMatchMemberExpression("React.createClass");
  function r(e) {
    if (!e || !i.types.isCallExpression(e)) {
      return !1;
    }
    if (!n(e.callee) && "createReactClass" !== e.callee.name) {
      return !1;
    }
    var t = e.arguments;
    if (1 !== t.length) {
      return !1;
    }
    var r = t[0];
    return !!i.types.isObjectExpression(r);
  }
  return {
    name: "transform-react-display-name",
    visitor: {
      ExportDefaultDeclaration: function (e, n) {
        var i = e.node;
        if (r(i.declaration)) {
          var o = n.filename || "unknown";
          var s = a.basename(o, a.extname(o));
          if ("index" === s) {
            s = a.basename(a.dirname(o));
          }
          t(s, i.declaration);
        }
      },
      CallExpression: function (e) {
        var n;
        var a = e.node;
        if (r(a)) {
          e.find(function (e) {
            if (e.isAssignmentExpression()) {
              n = e.node.left;
            } else if (e.isObjectProperty()) {
              n = e.node.key;
            } else if (e.isVariableDeclarator()) {
              n = e.node.id;
            } else if (e.isStatement()) {
              return !0;
            }
            if (n) {
              return !0;
            }
          });
          if (n) {
            if (i.types.isMemberExpression(n)) {
              n = n.property;
            }
            if (i.types.isIdentifier(n)) {
              t(n.name, a);
            }
          }
        }
      }
    }
  };
});
export default o;