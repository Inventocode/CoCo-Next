"use strict";

var r = {
  react: !0,
  assertNode: !0,
  createTypeAnnotationBasedOnTypeof: !0,
  createUnionTypeAnnotation: !0,
  createFlowUnionType: !0,
  createTSUnionType: !0,
  cloneNode: !0,
  clone: !0,
  cloneDeep: !0,
  cloneDeepWithoutLoc: !0,
  cloneWithoutLoc: !0,
  addComment: !0,
  addComments: !0,
  inheritInnerComments: !0,
  inheritLeadingComments: !0,
  inheritsComments: !0,
  inheritTrailingComments: !0,
  removeComments: !0,
  ensureBlock: !0,
  toBindingIdentifierName: !0,
  toBlock: !0,
  toComputedKey: !0,
  toExpression: !0,
  toIdentifier: !0,
  toKeyAlias: !0,
  toSequenceExpression: !0,
  toStatement: !0,
  valueToNode: !0,
  appendToMemberExpression: !0,
  inherits: !0,
  prependToMemberExpression: !0,
  removeProperties: !0,
  removePropertiesDeep: !0,
  removeTypeDuplicates: !0,
  getBindingIdentifiers: !0,
  getOuterBindingIdentifiers: !0,
  traverse: !0,
  traverseFast: !0,
  shallowEqual: !0,
  is: !0,
  isBinding: !0,
  isBlockScoped: !0,
  isImmutable: !0,
  isLet: !0,
  isNode: !0,
  isNodesEquivalent: !0,
  isPlaceholderType: !0,
  isReferenced: !0,
  isScope: !0,
  isSpecifierDefault: !0,
  isType: !0,
  isValidES3Identifier: !0,
  isValidIdentifier: !0,
  isVar: !0,
  matchesPattern: !0,
  validate: !0,
  buildMatchMemberExpression: !0
};
export { default as addComment } from "./3007";
export { default as addComments } from "./2766";
export { default as appendToMemberExpression } from "./3019";
export { default as assertNode } from "./2996";
export { default as buildMatchMemberExpression } from "./2759";
export { default as clone } from "./3003";
export { default as cloneDeep } from "./3004";
export { default as cloneDeepWithoutLoc } from "./3005";
export { default as cloneNode } from "./2650";
export { default as cloneWithoutLoc } from "./3006";
export { default as createFlowUnionType } from "./2999";
export { default as createTSUnionType } from "./3000/index";
export { default as createTypeAnnotationBasedOnTypeof } from "./2998";
export { default as createUnionTypeAnnotation } from "./2999";
export { default as ensureBlock } from "./3010";
export { default as getBindingIdentifiers } from "./2677";
export { default as getOuterBindingIdentifiers } from "./3022";
export { default as inheritInnerComments } from "./2767/index";
export { default as inheritLeadingComments } from "./2768";
export { default as inheritTrailingComments } from "./2770";
export { default as inherits } from "./3020";
export { default as inheritsComments } from "./2769";
export { default as is } from "./2663";
export { default as isBinding } from "./3024";
export { default as isBlockScoped } from "./3025";
export { default as isImmutable } from "./3026";
export { default as isLet } from "./2776";
export { default as isNode } from "./2764";
export { default as isNodesEquivalent } from "./3027";
export { default as isPlaceholderType } from "./2762";
export { default as isReferenced } from "./3028";
export { default as isScope } from "./3029";
export { default as isSpecifierDefault } from "./3030";
export { default as isType } from "./2699";
export { default as isValidES3Identifier } from "./3031";
export { default as isValidIdentifier } from "./2664/index";
export { default as isVar } from "./3032";
export { default as matchesPattern } from "./2760";
export { default as prependToMemberExpression } from "./3021";
export { default as removeComments } from "./3008";
export { default as removeProperties } from "./2775";
export { default as removePropertiesDeep } from "./2773";
export { default as removeTypeDuplicates } from "./2765";
export { default as shallowEqual } from "./2698";
export { default as toBindingIdentifierName } from "./3011";
export { default as toBlock } from "./2771";
export { default as toComputedKey } from "./3012";
export { default as toExpression } from "./3013";
export { default as toIdentifier } from "./2772";
export { default as toKeyAlias } from "./3014";
export { default as toSequenceExpression } from "./3015/index";
export { default as toStatement } from "./3017";
export { default as traverse } from "./3023";
export { default as traverseFast } from "./2774";
export { default as validate } from "./2700";
export { default as valueToNode } from "./3018";
import * as i from "./2984";
import * as a from "./2985";
import * as s from "./2986/index";
import * as o from "./2996";
import * as l from "./2997";
Object.keys(l).forEach(function (e) {
  if ("default" !== e && "__esModule" !== e) {
    if (!(Object.prototype.hasOwnProperty.call(r, e) || e in t && t[e] === l[e])) {
      Object.defineProperty(t, e, {
        enumerable: !0,
        get: function () {
          return l[e];
        }
      });
    }
  }
});
import * as u from "./2998";
import * as c from "./2999";
import * as p from "./3000/index";
import * as f from "./2630/index";
Object.keys(f).forEach(function (e) {
  if ("default" !== e && "__esModule" !== e) {
    if (!(Object.prototype.hasOwnProperty.call(r, e) || e in t && t[e] === f[e])) {
      Object.defineProperty(t, e, {
        enumerable: !0,
        get: function () {
          return f[e];
        }
      });
    }
  }
});
import * as d from "./3002";
Object.keys(d).forEach(function (e) {
  if ("default" !== e && "__esModule" !== e) {
    if (!(Object.prototype.hasOwnProperty.call(r, e) || e in t && t[e] === d[e])) {
      Object.defineProperty(t, e, {
        enumerable: !0,
        get: function () {
          return d[e];
        }
      });
    }
  }
});
import * as h from "./2650";
import * as y from "./3003";
import * as m from "./3004";
import * as v from "./3005";
import * as g from "./3006";
import * as T from "./3007";
import * as b from "./2766";
import * as S from "./2767/index";
import * as E from "./2768";
import * as x from "./2769";
import * as P from "./2770";
import * as A from "./3008";
import * as k from "./3009";
Object.keys(k).forEach(function (e) {
  if ("default" !== e && "__esModule" !== e) {
    if (!(Object.prototype.hasOwnProperty.call(r, e) || e in t && t[e] === k[e])) {
      Object.defineProperty(t, e, {
        enumerable: !0,
        get: function () {
          return k[e];
        }
      });
    }
  }
});
import * as w from "./2649";
Object.keys(w).forEach(function (e) {
  if ("default" !== e && "__esModule" !== e) {
    if (!(Object.prototype.hasOwnProperty.call(r, e) || e in t && t[e] === w[e])) {
      Object.defineProperty(t, e, {
        enumerable: !0,
        get: function () {
          return w[e];
        }
      });
    }
  }
});
import * as O from "./3010";
import * as C from "./3011";
import * as I from "./2771";
import * as N from "./3012";
import * as _ from "./3013";
import * as D from "./2772";
import * as j from "./3014";
import * as L from "./3015/index";
import * as M from "./3017";
import * as B from "./3018";
import * as F from "./2634/index";
Object.keys(F).forEach(function (e) {
  if ("default" !== e && "__esModule" !== e) {
    if (!(Object.prototype.hasOwnProperty.call(r, e) || e in t && t[e] === F[e])) {
      Object.defineProperty(t, e, {
        enumerable: !0,
        get: function () {
          return F[e];
        }
      });
    }
  }
});
import * as R from "./3019";
import * as U from "./3020";
import * as K from "./3021";
import * as V from "./2775";
import * as W from "./2773";
import * as Y from "./2765";
import * as H from "./2677";
import * as q from "./3022";
import * as J from "./3023";
Object.keys(J).forEach(function (e) {
  if ("default" !== e && "__esModule" !== e) {
    if (!(Object.prototype.hasOwnProperty.call(r, e) || e in t && t[e] === J[e])) {
      Object.defineProperty(t, e, {
        enumerable: !0,
        get: function () {
          return J[e];
        }
      });
    }
  }
});
import * as X from "./2774";
import * as G from "./2698";
import * as z from "./2663";
import * as $ from "./3024";
import * as Q from "./3025";
import * as Z from "./3026";
import * as ee from "./2776";
import * as te from "./2764";
import * as ne from "./3027";
import * as re from "./2762";
import * as ie from "./3028";
import * as ae from "./3029";
import * as se from "./3030";
import * as oe from "./2699";
import * as le from "./3031";
import * as ue from "./2664/index";
import * as ce from "./3032";
import * as pe from "./2760";
import * as fe from "./2700";
import * as de from "./2759";
import * as he from "./2626";
Object.keys(he).forEach(function (e) {
  if ("default" !== e && "__esModule" !== e) {
    if (!(Object.prototype.hasOwnProperty.call(r, e) || e in t && t[e] === he[e])) {
      Object.defineProperty(t, e, {
        enumerable: !0,
        get: function () {
          return he[e];
        }
      });
    }
  }
});
import * as ye from "./3033";
Object.keys(ye).forEach(function (e) {
  if ("default" !== e && "__esModule" !== e) {
    if (!(Object.prototype.hasOwnProperty.call(r, e) || e in t && t[e] === ye[e])) {
      Object.defineProperty(t, e, {
        enumerable: !0,
        get: function () {
          return ye[e];
        }
      });
    }
  }
});
var me = {
  isReactComponent: i.default,
  isCompatTag: a.default,
  buildChildren: s.default
};
export { me as react };