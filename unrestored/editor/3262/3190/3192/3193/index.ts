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
export { default as addComment } from "./3217";
export { default as addComments } from "./2835";
export { default as appendToMemberExpression } from "./3229";
export { default as assertNode } from "./3206";
export { default as buildMatchMemberExpression } from "./2828";
export { default as clone } from "./3213";
export { default as cloneDeep } from "./3214";
export { default as cloneDeepWithoutLoc } from "./3215";
export { default as cloneNode } from "./2654";
export { default as cloneWithoutLoc } from "./3216";
export { default as createFlowUnionType } from "./3209";
export { default as createTSUnionType } from "./3210/index";
export { default as createTypeAnnotationBasedOnTypeof } from "./3208";
export { default as createUnionTypeAnnotation } from "./3209";
export { default as ensureBlock } from "./3220";
export { default as getBindingIdentifiers } from "./2687";
export { default as getOuterBindingIdentifiers } from "./3232";
export { default as inheritInnerComments } from "./2836";
export { default as inheritLeadingComments } from "./2837";
export { default as inheritTrailingComments } from "./2839/index";
export { default as inherits } from "./3230";
export { default as inheritsComments } from "./2838";
export { default as is } from "./2670";
export { default as isBinding } from "./3234";
export { default as isBlockScoped } from "./3235";
export { default as isImmutable } from "./3236";
export { default as isLet } from "./2845";
export { default as isNode } from "./2833";
export { default as isNodesEquivalent } from "./3237";
export { default as isPlaceholderType } from "./2831";
export { default as isReferenced } from "./3238";
export { default as isScope } from "./3239";
export { default as isSpecifierDefault } from "./3240";
export { default as isType } from "./2714";
export { default as isValidES3Identifier } from "./3241";
export { default as isValidIdentifier } from "./2671";
export { default as isVar } from "./3242";
export { default as matchesPattern } from "./2829";
export { default as prependToMemberExpression } from "./3231";
export { default as removeComments } from "./3218";
export { default as removeProperties } from "./2844";
export { default as removePropertiesDeep } from "./2842";
export { default as removeTypeDuplicates } from "./2834";
export { default as shallowEqual } from "./2713";
export { default as toBindingIdentifierName } from "./3221";
export { default as toBlock } from "./2840";
export { default as toComputedKey } from "./3222";
export { default as toExpression } from "./3223";
export { default as toIdentifier } from "./2841/index";
export { default as toKeyAlias } from "./3224";
export { default as toSequenceExpression } from "./3225/index";
export { default as toStatement } from "./3227";
export { default as traverse } from "./3233";
export { default as traverseFast } from "./2843";
export { default as validate } from "./2716";
export { default as valueToNode } from "./3228";
import * as a from "./3194";
import * as i from "./3195";
import * as o from "./3196/index";
import * as s from "./3206";
import * as u from "./3207";
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
import * as l from "./3208";
import * as p from "./3209";
import * as f from "./3210/index";
import * as d from "./2632/index";
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
import * as c from "./3212";
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
import * as y from "./2654";
import * as T from "./3213";
import * as m from "./3214";
import * as S from "./3215";
import * as E from "./3216";
import * as b from "./3217";
import * as v from "./2835";
import * as P from "./2836";
import * as O from "./2837";
import * as A from "./2838";
import * as g from "./2839/index";
import * as x from "./3218";
import * as D from "./3219";
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
import * as I from "./2653";
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
import * as _ from "./3220";
import * as h from "./3221";
import * as N from "./2840";
import * as j from "./3222";
import * as L from "./3223";
import * as C from "./2841/index";
import * as B from "./3224";
import * as w from "./3225/index";
import * as M from "./3227";
import * as F from "./3228";
import * as R from "./2636/index";
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
import * as K from "./3229";
import * as V from "./3230";
import * as k from "./3231";
import * as Y from "./2844";
import * as U from "./2842";
import * as X from "./2834";
import * as W from "./2687";
import * as J from "./3232";
import * as H from "./3233";
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
import * as q from "./2843";
import * as G from "./2713";
import * as z from "./2670";
import * as Q from "./3234";
import * as $ from "./3235";
import * as Z from "./3236";
import * as ee from "./2845";
import * as te from "./2833";
import * as ne from "./3237";
import * as re from "./2831";
import * as ae from "./3238";
import * as ie from "./3239";
import * as oe from "./3240";
import * as se from "./2714";
import * as ue from "./3241";
import * as le from "./2671";
import * as pe from "./3242";
import * as fe from "./2829";
import * as de from "./2716";
import * as ce from "./2828";
import * as ye from "./2628";
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
import * as Te from "./3243";
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