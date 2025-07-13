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
export { default as addComment } from "./2899";
export { default as addComments } from "./2731";
export { default as appendToMemberExpression } from "./2911";
export { default as assertNode } from "./2888";
export { default as buildMatchMemberExpression } from "./2724";
export { default as clone } from "./2895";
export { default as cloneDeep } from "./2896";
export { default as cloneDeepWithoutLoc } from "./2897";
export { default as cloneNode } from "./2648";
export { default as cloneWithoutLoc } from "./2898";
export { default as createFlowUnionType } from "./2891";
export { default as createTSUnionType } from "./2892/index";
export { default as createTypeAnnotationBasedOnTypeof } from "./2890";
export { default as createUnionTypeAnnotation } from "./2891";
export { default as ensureBlock } from "./2902";
export { default as getBindingIdentifiers } from "./2675";
export { default as getOuterBindingIdentifiers } from "./2914";
export { default as inheritInnerComments } from "./2732";
export { default as inheritLeadingComments } from "./2733/index";
export { default as inheritTrailingComments } from "./2735";
export { default as inherits } from "./2912";
export { default as inheritsComments } from "./2734";
export { default as is } from "./2660";
export { default as isBinding } from "./2916";
export { default as isBlockScoped } from "./2917";
export { default as isImmutable } from "./2918";
export { default as isLet } from "./2741";
export { default as isNode } from "./2729";
export { default as isNodesEquivalent } from "./2919";
export { default as isPlaceholderType } from "./2727";
export { default as isReferenced } from "./2920";
export { default as isScope } from "./2921";
export { default as isSpecifierDefault } from "./2922";
export { default as isType } from "./2693";
export { default as isValidES3Identifier } from "./2923";
export { default as isValidIdentifier } from "./2661";
export { default as isVar } from "./2924";
export { default as matchesPattern } from "./2725";
export { default as prependToMemberExpression } from "./2913";
export { default as removeComments } from "./2900";
export { default as removeProperties } from "./2740";
export { default as removePropertiesDeep } from "./2738";
export { default as removeTypeDuplicates } from "./2730";
export { default as shallowEqual } from "./2692";
export { default as toBindingIdentifierName } from "./2903";
export { default as toBlock } from "./2736";
export { default as toComputedKey } from "./2904";
export { default as toExpression } from "./2905";
export { default as toIdentifier } from "./2737/index";
export { default as toKeyAlias } from "./2906";
export { default as toSequenceExpression } from "./2907/index";
export { default as toStatement } from "./2909";
export { default as traverse } from "./2915";
export { default as traverseFast } from "./2739";
export { default as validate } from "./2694";
export { default as valueToNode } from "./2910";
import * as i from "./2876";
import * as a from "./2877";
import * as s from "./2878/index";
import * as o from "./2888";
import * as l from "./2889";
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
import * as u from "./2890";
import * as c from "./2891";
import * as p from "./2892/index";
import * as f from "./2629/index";
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
import * as d from "./2894";
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
import * as h from "./2648";
import * as y from "./2895";
import * as m from "./2896";
import * as v from "./2897";
import * as g from "./2898";
import * as T from "./2899";
import * as b from "./2731";
import * as S from "./2732";
import * as E from "./2733/index";
import * as x from "./2734";
import * as P from "./2735";
import * as A from "./2900";
import * as k from "./2901";
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
import * as w from "./2647";
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
import * as O from "./2902";
import * as C from "./2903";
import * as I from "./2736";
import * as N from "./2904";
import * as _ from "./2905";
import * as D from "./2737/index";
import * as j from "./2906";
import * as L from "./2907/index";
import * as M from "./2909";
import * as B from "./2910";
import * as F from "./2633/index";
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
import * as R from "./2911";
import * as U from "./2912";
import * as K from "./2913";
import * as V from "./2740";
import * as W from "./2738";
import * as Y from "./2730";
import * as H from "./2675";
import * as q from "./2914";
import * as J from "./2915";
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
import * as X from "./2739";
import * as G from "./2692";
import * as z from "./2660";
import * as $ from "./2916";
import * as Q from "./2917";
import * as Z from "./2918";
import * as ee from "./2741";
import * as te from "./2729";
import * as ne from "./2919";
import * as re from "./2727";
import * as ie from "./2920";
import * as ae from "./2921";
import * as se from "./2922";
import * as oe from "./2693";
import * as le from "./2923";
import * as ue from "./2661";
import * as ce from "./2924";
import * as pe from "./2725";
import * as fe from "./2694";
import * as de from "./2724";
import * as he from "./2625";
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
import * as ye from "./2925";
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