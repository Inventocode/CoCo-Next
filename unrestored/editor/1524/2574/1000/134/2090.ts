"use strict";

import * as r from "./838/443";
import * as i from "./358";
import * as o from "./2088/496";
exports.postConstruct = function () {
  return function (e, t, n) {
    var a = new o.Metadata(i.POST_CONSTRUCT, t);
    if (Reflect.hasOwnMetadata(i.POST_CONSTRUCT, e.constructor)) {
      throw new Error(r.MULTIPLE_POST_CONSTRUCT_METHODS);
    }
    Reflect.defineMetadata(i.POST_CONSTRUCT, a, e.constructor);
  };
};