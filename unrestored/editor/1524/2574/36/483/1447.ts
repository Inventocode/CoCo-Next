"use strict";

export { a };
import * as r from "../../0/index";
import * as i from "../../0/index";
import * as o from "../../242/index";
function a(e) {
  var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
  var n = [];
  i.a.Children.forEach(e, function (e) {
    if (void 0 !== e && null !== e || t.keepEmpty) {
      if (Array.isArray(e)) {
        n = n.concat(a(e));
      } else {
        if (Object(o.isFragment)(e) && e.props) {
          n = n.concat(a(e.props.children, t));
        } else {
          n.push(e);
        }
      }
    }
  });
  return n;
}