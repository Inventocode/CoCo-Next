"use strict";

export { i as a };
import r = require("../80/907");
function i(e, t) {
  if (e) {
    if ("string" === typeof e) {
      return r.a(e, t);
    }
    var n = Object.prototype.toString.call(e).slice(8, -1);
    if ("Object" === n && e.constructor) {
      n = e.constructor.name;
    }
    return "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? r.a(e, t) : undefined;
  }
}
export default i;