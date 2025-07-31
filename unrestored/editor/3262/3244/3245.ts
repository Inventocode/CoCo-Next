"use strict";

var r = require("../3188/2658/220");
var a = require("../3188/2658/230");
Object.defineProperty(exports, "__esModule", {
  value: !0
});
exports.OptionValidator = void 0;
var i = require("./2846");
var o = function () {
  function e(t) {
    r(this, e);
    this.descriptor = t;
  }
  a(e, [{
    key: "validateTopLevelOptions",
    value: function (e, t) {
      for (var n = Object.keys(t), r = 0, a = Object.keys(e); r < a.length; r++) {
        var o = a[r];
        if (!n.includes(o)) {
          throw new Error(this.formatMessage("'".concat(o, "' is not a valid top-level option.\n- Did you mean '").concat((0, i.findSuggestion)(o, n), "'?")));
        }
      }
    }
  }, {
    key: "validateBooleanOption",
    value: function (e, t, n) {
      return void 0 === t ? n : (this.invariant("boolean" === typeof t, "'".concat(e, "' option must be a boolean.")), t);
    }
  }, {
    key: "validateStringOption",
    value: function (e, t, n) {
      return void 0 === t ? n : (this.invariant("string" === typeof t, "'".concat(e, "' option must be a string.")), t);
    }
  }, {
    key: "invariant",
    value: function (e, t) {
      if (!e) {
        throw new Error(this.formatMessage(t));
      }
    }
  }, {
    key: "formatMessage",
    value: function (e) {
      return "".concat(this.descriptor, ": ").concat(e);
    }
  }]);
  return e;
}();
exports.OptionValidator = o;