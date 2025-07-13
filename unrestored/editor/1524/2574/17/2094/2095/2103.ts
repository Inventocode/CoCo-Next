"use strict";

import * as r from "../../../1000/93";
import * as i from "../../../1000/134/index";
import * as o from "../../../125/195/index";
var a = function (e) {
  function t(t) {
    var n = e.call(this, t.block) || this;
    n.type = o.BlockEventType.DRAG_AREA_CHANGE;
    n._record_undo = !1;
    n.block = t.block;
    n.area = t.area;
    n.is_in = t.is_in;
    return n;
  }
  (0, r.__extends)(t, e);
  return t = (0, r.__decorate)([(0, i.injectable)()], t);
}(require("./643").BlockEvent);
export { a as DragAreaChangeEvent };