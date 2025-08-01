"use strict";

Object.defineProperty(exports, "__esModule", {
  value: !0
});
Object.defineProperty(exports, "ALIAS_KEYS", {
  enumerable: !0,
  get: function () {
    return i.ALIAS_KEYS;
  }
});
Object.defineProperty(exports, "BUILDER_KEYS", {
  enumerable: !0,
  get: function () {
    return i.BUILDER_KEYS;
  }
});
Object.defineProperty(exports, "DEPRECATED_KEYS", {
  enumerable: !0,
  get: function () {
    return i.DEPRECATED_KEYS;
  }
});
Object.defineProperty(exports, "FLIPPED_ALIAS_KEYS", {
  enumerable: !0,
  get: function () {
    return i.FLIPPED_ALIAS_KEYS;
  }
});
Object.defineProperty(exports, "NODE_FIELDS", {
  enumerable: !0,
  get: function () {
    return i.NODE_FIELDS;
  }
});
Object.defineProperty(exports, "NODE_PARENT_VALIDATIONS", {
  enumerable: !0,
  get: function () {
    return i.NODE_PARENT_VALIDATIONS;
  }
});
Object.defineProperty(exports, "PLACEHOLDERS", {
  enumerable: !0,
  get: function () {
    return a.PLACEHOLDERS;
  }
});
Object.defineProperty(exports, "PLACEHOLDERS_ALIAS", {
  enumerable: !0,
  get: function () {
    return a.PLACEHOLDERS_ALIAS;
  }
});
Object.defineProperty(exports, "PLACEHOLDERS_FLIPPED_ALIAS", {
  enumerable: !0,
  get: function () {
    return a.PLACEHOLDERS_FLIPPED_ALIAS;
  }
});
exports.TYPES = void 0;
Object.defineProperty(exports, "VISITOR_KEYS", {
  enumerable: !0,
  get: function () {
    return i.VISITOR_KEYS;
  }
});
var r = require("./2683");
require("./2771");
require("./3001");
require("./3002");
require("./3003");
require("./3004");
require("./3005");
var i = require("./2653");
var a = require("./2773");
r(i.VISITOR_KEYS);
r(i.ALIAS_KEYS);
r(i.FLIPPED_ALIAS_KEYS);
r(i.NODE_FIELDS);
r(i.BUILDER_KEYS);
r(i.DEPRECATED_KEYS);
r(a.PLACEHOLDERS_ALIAS);
r(a.PLACEHOLDERS_FLIPPED_ALIAS);
var s = [].concat(Object.keys(i.VISITOR_KEYS), Object.keys(i.FLIPPED_ALIAS_KEYS), Object.keys(i.DEPRECATED_KEYS));
exports.TYPES = s;