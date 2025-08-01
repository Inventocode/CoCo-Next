"use strict";

var r = require("../../../../../220");
var i = require("../../../../../230");
Object.defineProperty(exports, "__esModule", {
  value: !0
});
exports.OptionValidator = void 0;
var a = require("./2808");
var s = function () {
  function e(t) {
    r(this, e);
    this.descriptor = t;
  }
  i(e, [{
    key: "validateTopLevelOptions",
    value: function (e, t) {
      for (var n = Object.keys(t), r = 0, i = Object.keys(e); r < i.length; r++) {
        var s = i[r];
        if (!n.includes(s)) {
          throw new Error(this.formatMessage("'".concat(s, "' is not a valid top-level option.\n- Did you mean '").concat((0, a.findSuggestion)(s, n), "'?")));
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
exports.OptionValidator = s;