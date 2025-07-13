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
export { default as addComment } from "./3157";
export { default as addComments } from "./2816";
export { default as appendToMemberExpression } from "./3169";
export { default as assertNode } from "./3146";
export { default as buildMatchMemberExpression } from "./2809";
export { default as clone } from "./3153";
export { default as cloneDeep } from "./3154";
export { default as cloneDeepWithoutLoc } from "./3155";
export { default as cloneNode } from "./2652";
export { default as cloneWithoutLoc } from "./3156";
export { default as createFlowUnionType } from "./3149";
export { default as createTSUnionType } from "./3150/index";
export { default as createTypeAnnotationBasedOnTypeof } from "./3148";
export { default as createUnionTypeAnnotation } from "./3149";
export { default as ensureBlock } from "./3160";
export { default as getBindingIdentifiers } from "./2686";
export { default as getOuterBindingIdentifiers } from "./3172";
export { default as inheritInnerComments } from "./2817";
export { default as inheritLeadingComments } from "./2818";
export { default as inheritTrailingComments } from "./2820/index";
export { default as inherits } from "./3170";
export { default as inheritsComments } from "./2819";
export { default as is } from "./2668";
export { default as isBinding } from "./3174";
export { default as isBlockScoped } from "./3175";
export { default as isImmutable } from "./3176";
export { default as isLet } from "./2826";
export { default as isNode } from "./2814";
export { default as isNodesEquivalent } from "./3177";
export { default as isPlaceholderType } from "./2812";
export { default as isReferenced } from "./3178";
export { default as isScope } from "./3179";
export { default as isSpecifierDefault } from "./3180";
export { default as isType } from "./2709";
export { default as isValidES3Identifier } from "./3181";
export { default as isValidIdentifier } from "./2669/index";
export { default as isVar } from "./3182";
export { default as matchesPattern } from "./2810";
export { default as prependToMemberExpression } from "./3171";
export { default as removeComments } from "./3158";
export { default as removeProperties } from "./2825";
export { default as removePropertiesDeep } from "./2823";
export { default as removeTypeDuplicates } from "./2815";
export { default as shallowEqual } from "./2708";
export { default as toBindingIdentifierName } from "./3161";
export { default as toBlock } from "./2821";
export { default as toComputedKey } from "./3162";
export { default as toExpression } from "./3163";
export { default as toIdentifier } from "./2822";
export { default as toKeyAlias } from "./3164";
export { default as toSequenceExpression } from "./3165/index";
export { default as toStatement } from "./3167";
export { default as traverse } from "./3173";
export { default as traverseFast } from "./2824";
export { default as validate } from "./2711";
export { default as valueToNode } from "./3168";
import * as a from "./3134";
import * as i from "./3135";
import * as o from "./3136/index";
import * as s from "./3146";
import * as u from "./3147";
Object.keys(u).forEach(function (e) {
  if ("default" !== e && "__esModule" !== e) {
    if (!(Object.prototype.hasOwnProperty.call(r, e) || e in t && t[e] === u[e])) {
      Object.defineProperty(t, e, {
        enumerable: !0,
        get: function () {
          return u[e];
        }
      });
    }
  }
});
import * as l from "./3148";
import * as p from "./3149";
import * as f from "./3150/index";
import * as d from "./2631/index";
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
import * as c from "./3152";
Object.keys(c).forEach(function (e) {
  if ("default" !== e && "__esModule" !== e) {
    if (!(Object.prototype.hasOwnProperty.call(r, e) || e in t && t[e] === c[e])) {
      Object.defineProperty(t, e, {
        enumerable: !0,
        get: function () {
          return c[e];
        }
      });
    }
  }
});
import * as y from "./2652";
import * as T from "./3153";
import * as m from "./3154";
import * as S from "./3155";
import * as E from "./3156";
import * as b from "./3157";
import * as v from "./2816";
import * as P from "./2817";
import * as O from "./2818";
import * as A from "./2819";
import * as g from "./2820/index";
import * as x from "./3158";
import * as D from "./3159";
Object.keys(D).forEach(function (e) {
  if ("default" !== e && "__esModule" !== e) {
    if (!(Object.prototype.hasOwnProperty.call(r, e) || e in t && t[e] === D[e])) {
      Object.defineProperty(t, e, {
        enumerable: !0,
        get: function () {
          return D[e];
        }
      });
    }
  }
});
import * as I from "./2651";
Object.keys(I).forEach(function (e) {
  if ("default" !== e && "__esModule" !== e) {
    if (!(Object.prototype.hasOwnProperty.call(r, e) || e in t && t[e] === I[e])) {
      Object.defineProperty(t, e, {
        enumerable: !0,
        get: function () {
          return I[e];
        }
      });
    }
  }
});
import * as _ from "./3160";
import * as h from "./3161";
import * as N from "./2821";
import * as j from "./3162";
import * as L from "./3163";
import * as C from "./2822";
import * as B from "./3164";
import * as w from "./3165/index";
import * as M from "./3167";
import * as F from "./3168";
import * as R from "./2635/index";
Object.keys(R).forEach(function (e) {
  if ("default" !== e && "__esModule" !== e) {
    if (!(Object.prototype.hasOwnProperty.call(r, e) || e in t && t[e] === R[e])) {
      Object.defineProperty(t, e, {
        enumerable: !0,
        get: function () {
          return R[e];
        }
      });
    }
  }
});
import * as K from "./3169";
import * as V from "./3170";
import * as k from "./3171";
import * as Y from "./2825";
import * as U from "./2823";
import * as X from "./2815";
import * as W from "./2686";
import * as J from "./3172";
import * as H from "./3173";
Object.keys(H).forEach(function (e) {
  if ("default" !== e && "__esModule" !== e) {
    if (!(Object.prototype.hasOwnProperty.call(r, e) || e in t && t[e] === H[e])) {
      Object.defineProperty(t, e, {
        enumerable: !0,
        get: function () {
          return H[e];
        }
      });
    }
  }
});
import * as q from "./2824";
import * as G from "./2708";
import * as z from "./2668";
import * as Q from "./3174";
import * as $ from "./3175";
import * as Z from "./3176";
import * as ee from "./2826";
import * as te from "./2814";
import * as ne from "./3177";
import * as re from "./2812";
import * as ae from "./3178";
import * as ie from "./3179";
import * as oe from "./3180";
import * as se from "./2709";
import * as ue from "./3181";
import * as le from "./2669/index";
import * as pe from "./3182";
import * as fe from "./2810";
import * as de from "./2711";
import * as ce from "./2809";
import * as ye from "./2627";
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
import * as Te from "./3183";
Object.keys(Te).forEach(function (e) {
  if ("default" !== e && "__esModule" !== e) {
    if (!(Object.prototype.hasOwnProperty.call(r, e) || e in t && t[e] === Te[e])) {
      Object.defineProperty(t, e, {
        enumerable: !0,
        get: function () {
          return Te[e];
        }
      });
    }
  }
});
var me = {
  isReactComponent: a.default,
  isCompatTag: i.default,
  buildChildren: o.default
};
export { me as react };