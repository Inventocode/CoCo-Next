"use strict";

import * as r from "../../../../2873/2721/805/index";
import * as a from "./2645";
import * as i from "./2832";
var o = (0, a.defineAliasedType)("Miscellaneous");
o("Noop", {
  visitor: []
});
o("Placeholder", {
  visitor: [],
  builder: ["expectedNode", "name"],
  fields: {
    name: {
      validate: (0, a.assertNodeType)("Identifier")
    },
    expectedNode: {
      validate: a.assertOneOf.apply(void 0, r(i.PLACEHOLDERS))
    }
  }
});
o("V8IntrinsicIdentifier", {
  builder: ["name"],
  fields: {
    name: {
      validate: (0, a.assertValueType)("string")
    }
  }
});