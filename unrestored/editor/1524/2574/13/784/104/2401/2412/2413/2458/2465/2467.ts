import * as r from "../../2468/2470/1400/1401/index";
import * as i from "../../../../../../../254/2503/2504/2505/2506/1140/index";
import * as o from "../../../446";
import * as a from "../../../../../../../254/2503/2504/2509/2517/1141";
import * as s from "../../../2471/762/1143";
import * as c from "../../2468/979";
module.exports = function (e, t, n) {
  for (var u = -1, l = (t = r(t, e)).length, f = !1; ++u < l;) {
    var h = c(t[u]);
    if (!(f = null != e && n(e, h))) {
      break;
    }
    e = e[h];
  }
  return f || ++u != l ? f : !!(l = null == e ? 0 : e.length) && s(l) && a(h, l) && (o(e) || i(e));
};