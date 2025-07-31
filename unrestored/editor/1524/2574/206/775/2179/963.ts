"use strict";

var r = require("../../../../../3262/3188/2658/220");
var i = function e(t, n) {
  r(this, e);
  this.name = t;
  this.identifiers = [];
  this.references = [];
  this.defs = [];
  this.tainted = !1;
  this.stack = !0;
  this.scope = n;
};
i.CatchClause = "CatchClause";
i.Parameter = "Parameter";
i.FunctionName = "FunctionName";
i.ClassName = "ClassName";
i.Variable = "Variable";
i.ImportBinding = "ImportBinding";
i.ImplicitGlobalVariable = "ImplicitGlobalVariable";
module.exports = i;