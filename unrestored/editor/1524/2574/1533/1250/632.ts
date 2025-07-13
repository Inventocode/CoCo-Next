import * as r from "../1727/439";
module.exports = function (e, t, n) {
  if (r(e), void 0 === t) {
    return e;
  }
  switch (n) {
    case 0:
      return function () {
        return e.call(t);
      };
    case 1:
      return function (n) {
        return e.call(t, n);
      };
    case 2:
      return function (n, r) {
        return e.call(t, n, r);
      };
    case 3:
      return function (n, r, o) {
        return e.call(t, n, r, o);
      };
  }
  return function () {
    return e.apply(t, arguments);
  };
};