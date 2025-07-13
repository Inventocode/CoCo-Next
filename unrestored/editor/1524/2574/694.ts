"use strict";

module.exports = function (e, t, n, r, o, i, a, s) {
  if (!e) {
    var c;
    if (void 0 === t) {
      c = new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");
    } else {
      var l = [n, r, o, i, a, s];
      var u = 0;
      (c = new Error(t.replace(/%s/g, function () {
        return l[u++];
      }))).name = "Invariant Violation";
    }
    throw c.framesToPop = 1, c;
  }
};