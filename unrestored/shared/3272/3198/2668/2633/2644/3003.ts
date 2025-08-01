"use strict";

var r = require("../../../../2883/2731/806/index");
var i = require("./2653");
var a = require("./2773");
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