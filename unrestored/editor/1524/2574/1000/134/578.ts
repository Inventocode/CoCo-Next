"use strict";

exports.BindingScopeEnum = {
  Request: "Request",
  Singleton: "Singleton",
  Transient: "Transient"
};
exports.BindingTypeEnum = {
  ConstantValue: "ConstantValue",
  Constructor: "Constructor",
  DynamicValue: "DynamicValue",
  Factory: "Factory",
  Function: "Function",
  Instance: "Instance",
  Invalid: "Invalid",
  Provider: "Provider"
};
exports.TargetTypeEnum = {
  ClassProperty: "ClassProperty",
  ConstructorArgument: "ConstructorArgument",
  Variable: "Variable"
};