"use strict";

import * as r from "../../../../../../2873/2721/805/index";
import * as i from "./2641";
import * as a from "./2728";
var s = (0, i.defineAliasedType)("Miscellaneous");
s("Noop", {
  visitor: []
});
s("Placeholder", {
  visitor: [],
  builder: ["expectedNode", "name"],
  fields: {
    name: {
      validate: (0, i.assertNodeType)("Identifier")
    },
    expectedNode: {
      validate: i.assertOneOf.apply(void 0, r(a.PLACEHOLDERS))
    }
  }
});
s("V8IntrinsicIdentifier", {
  builder: ["name"],
  fields: {
    name: {
      validate: (0, i.assertValueType)("string")
    }
  }
});