"use strict";

var r = require("../../../../2883/2731/806/index");
var a = require("./2655");
var i = require("./2842");
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