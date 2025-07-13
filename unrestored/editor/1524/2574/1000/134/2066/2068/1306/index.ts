"use strict";

import * as r from "../../../358";
import * as i from "../../../713";
import * as o from "../../../2088/496";
import * as a from "./2073";
var s = function () {
  function e(e, t, n, s) {
    this.id = i.id();
    this.type = e;
    this.serviceIdentifier = n;
    this.name = new a.QueryableString(t || "");
    this.metadata = new Array();
    var c = null;
    if ("string" === typeof s) {
      c = new o.Metadata(r.NAMED_TAG, s);
    } else {
      if (s instanceof o.Metadata) {
        c = s;
      }
    }
    if (null !== c) {
      this.metadata.push(c);
    }
  }
  e.prototype.hasTag = function (e) {
    for (var t = 0, n = this.metadata; t < n.length; t++) {
      if (n[t].key === e) {
        return !0;
      }
    }
    return !1;
  };
  e.prototype.isArray = function () {
    return this.hasTag(r.MULTI_INJECT_TAG);
  };
  e.prototype.matchesArray = function (e) {
    return this.matchesTag(r.MULTI_INJECT_TAG)(e);
  };
  e.prototype.isNamed = function () {
    return this.hasTag(r.NAMED_TAG);
  };
  e.prototype.isTagged = function () {
    return this.metadata.some(function (e) {
      return r.NON_CUSTOM_TAG_KEYS.every(function (t) {
        return e.key !== t;
      });
    });
  };
  e.prototype.isOptional = function () {
    return this.matchesTag(r.OPTIONAL_TAG)(!0);
  };
  e.prototype.getNamedTag = function () {
    return this.isNamed() ? this.metadata.filter(function (e) {
      return e.key === r.NAMED_TAG;
    })[0] : null;
  };
  e.prototype.getCustomTags = function () {
    return this.isTagged() ? this.metadata.filter(function (e) {
      return r.NON_CUSTOM_TAG_KEYS.every(function (t) {
        return e.key !== t;
      });
    }) : null;
  };
  e.prototype.matchesNamedTag = function (e) {
    return this.matchesTag(r.NAMED_TAG)(e);
  };
  e.prototype.matchesTag = function (e) {
    var t = this;
    return function (n) {
      for (var r = 0, i = t.metadata; r < i.length; r++) {
        var o = i[r];
        if (o.key === e && o.value === n) {
          return !0;
        }
      }
      return !1;
    };
  };
  return e;
}();
export { s as Target };