"use strict";

export { o as a };
import * as r from "./0/index";
var i = r.createContext(void 0);
var o = function (e) {
  var t = e.children;
  var n = e.size;
  return r.createElement(i.Consumer, null, function (e) {
    return r.createElement(i.Provider, {
      value: n || e
    }, t);
  });
};
export { i as b };