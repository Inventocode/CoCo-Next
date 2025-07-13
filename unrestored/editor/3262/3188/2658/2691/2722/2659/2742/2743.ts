"use strict";

import * as r from "../../../../220";
import * as i from "../../../../230";
var a = function () {
  function e(t) {
    var n = t.identifier;
    var i = t.scope;
    var a = t.path;
    var s = t.kind;
    r(this, e);
    this.identifier = void 0;
    this.scope = void 0;
    this.path = void 0;
    this.kind = void 0;
    this.constantViolations = [];
    this.constant = !0;
    this.referencePaths = [];
    this.referenced = !1;
    this.references = 0;
    this.identifier = n;
    this.scope = i;
    this.path = a;
    this.kind = s;
    this.clearValue();
  }
  i(e, [{
    key: "deoptValue",
    value: function () {
      this.clearValue();
      this.hasDeoptedValue = !0;
    }
  }, {
    key: "setValue",
    value: function (e) {
      if (!this.hasDeoptedValue) {
        this.hasValue = !0;
        this.value = e;
      }
    }
  }, {
    key: "clearValue",
    value: function () {
      this.hasDeoptedValue = !1;
      this.hasValue = !1;
      this.value = null;
    }
  }, {
    key: "reassign",
    value: function (e) {
      this.constant = !1;
      if (-1 === this.constantViolations.indexOf(e)) {
        this.constantViolations.push(e);
      }
    }
  }, {
    key: "reference",
    value: function (e) {
      if (-1 === this.referencePaths.indexOf(e)) {
        this.referenced = !0;
        this.references++;
        this.referencePaths.push(e);
      }
    }
  }, {
    key: "dereference",
    value: function () {
      this.references--;
      this.referenced = !!this.references;
    }
  }]);
  return e;
}();
export default a;