"use strict";

function r(e, t) {
  return {
    range: [e, e],
    text: t
  };
}
var i = Object.freeze({
  insertTextAfter: function (e, t) {
    return this.insertTextAfterRange(e.range, t);
  },
  insertTextAfterRange: function (e, t) {
    return r(e[1], t);
  },
  insertTextBefore: function (e, t) {
    return this.insertTextBeforeRange(e.range, t);
  },
  insertTextBeforeRange: function (e, t) {
    return r(e[0], t);
  },
  replaceText: function (e, t) {
    return this.replaceTextRange(e.range, t);
  },
  replaceTextRange: function (e, t) {
    return {
      range: e,
      text: t
    };
  },
  remove: function (e) {
    return this.removeRange(e.range);
  },
  removeRange: function (e) {
    return {
      range: e,
      text: ""
    };
  }
});
module.exports = i;