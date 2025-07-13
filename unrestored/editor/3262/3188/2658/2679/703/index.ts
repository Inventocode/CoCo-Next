import * as r from "./2183";
function i(t, n, o) {
  if ("undefined" !== typeof Reflect && Reflect.get) {
    module.exports = i = Reflect.get;
  } else {
    module.exports = i = function (e, t, n) {
      var i = r(e, t);
      if (i) {
        var o = Object.getOwnPropertyDescriptor(i, t);
        return o.get ? o.get.call(n) : o.value;
      }
    };
  }
  return i(t, n, o || t);
}
module.exports = i;