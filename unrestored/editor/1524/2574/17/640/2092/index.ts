"use strict";

import * as r from "./2093";
export default (function (e, t) {
  if (void 0 === t) {
    t = !0;
  }
  return {
    lazyInject: r.makePropertyInjectDecorator(e, t),
    lazyInjectNamed: r.makePropertyInjectNamedDecorator(e, t),
    lazyInjectTagged: r.makePropertyInjectTaggedDecorator(e, t),
    lazyMultiInject: r.makePropertyMultiInjectDecorator(e, t)
  };
});