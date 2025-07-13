"use strict";

import * as r from "./2325/444";
import * as i from "./359";
import * as o from "./2330/498";
exports.postConstruct = function () {
  return function (e, t, n) {
    var a = new o.Metadata(i.POST_CONSTRUCT, t);
    if (Reflect.hasOwnMetadata(i.POST_CONSTRUCT, e.constructor)) {
      throw new Error(r.MULTIPLE_POST_CONSTRUCT_METHODS);
    }
    Reflect.defineMetadata(i.POST_CONSTRUCT, a, e.constructor);
  };
};