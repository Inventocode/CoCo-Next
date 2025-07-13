"use strict";

import * as r from "../../../../../1000/93";
var i = (0, r.__importStar)(require("../../../../../17/533"));
import * as o from "../../../../../17/640/index";
import * as a from "../../../../../17/642";
var s = function (e) {
  function t() {
    return null !== e && e.apply(this, arguments) || this;
  }
  (0, r.__extends)(t, e);
  t.prototype.before_handle_event_group = function (e) {
    for (var t = new Map(), n = 0; n < e.length;) {
      var r = e[n];
      if (r.type !== i.BlockEventType.CREATE) {
        if (r.type === i.BlockEventType.CHANGE) {
          var o = r.get_new_value();
          if ("comment_expand" !== r.element || "boolean" !== typeof o) {
            n++;
            continue;
          }
          c = r.get_block_id();
          var a = t.get(c);
          if (void 0 !== a) {
            (s = e[a].get_element_json()).comments[c].pinned = o;
            e.splice(n, 1);
            continue;
          }
        }
        n++;
      } else {
        var s;
        var c = r.get_block_id();
        if ((s = r.get_element_json()).comments[c] && null === s.comments[c].parent_id) {
          t.set(c, n);
        }
        n++;
      }
    }
  };
  (0, r.__decorate)([(0, o.lazy_inject)(a.BINDING.json)], t.prototype, "json", void 0);
  return t;
}(require("../../../728/1132").BasePlugin);
export { s as GlobalCommentPlugin };