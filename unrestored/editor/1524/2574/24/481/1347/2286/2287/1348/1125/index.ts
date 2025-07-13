import * as r from "./2288";
import * as i from "../2289/1126";
module.exports = function (e) {
  var t = e.xdomain;
  var n = e.xscheme;
  var o = e.enablesXDR;
  try {
    if ("undefined" !== typeof XMLHttpRequest && (!t || r)) {
      return new XMLHttpRequest();
    }
  } catch (a) {}
  try {
    if ("undefined" !== typeof XDomainRequest && !n && o) {
      return new XDomainRequest();
    }
  } catch (a) {}
  if (!t) {
    try {
      return new i[["Active"].concat("Object").join("X")]("Microsoft.XMLHTTP");
    } catch (a) {}
  }
};