"use strict";

Object.defineProperty(exports, "__esModule", {
  value: !0
});
exports.DeleteEvent = void 0;
var r = require("tslib");
var i = require("inversify");
var o = require("../../../125/195/index");
var a = require("../../../4/127");
var s = (0, r.__importStar)(require("../../497/index"));
var c = function (e) {
  function t(t) {
    var n = e.call(this, t.block) || this;
    n.type = o.BlockEventType.DELETE;
    n.ids = [];
    n.is_shadow = !1;
    var r = t.block;
    if (s.base.is_block_svg(r) && r.get_parent()) {
      console.error("Connected blocks cannot be deleted.");
      return n;
    }
    var i = r.get_workspace();
    if (void 0 != i && i.rendered) {
      n.old_xml = n.xml.workspace_element_to_dom_with_xy(r);
    } else {
      n.old_xml = n.xml.workspace_element_to_dom(r);
    }
    n.ids = [r.id];
    if (s.base.is_block_svg(r)) {
      n.ids = r.get_descendant_ids();
      n.is_shadow = r.is_shadow();
    }
    return n;
  }
  (0, r.__extends)(t, e);
  t.prototype.run = function (e) {
    var t = this._get_event_workspace();
    if (e) {
      for (var n = 0; n < this.ids.length; n++) {
        var r = this.ids[n];
        if (o = t.get_element_from_db(r)) {
          o.dispose(!1, !1);
        } else {
          if (!(r !== this._block_id || this.is_shadow)) {
            console.warn("Can't delete non-existent block: " + r);
          }
        }
      }
    } else {
      var i = this.old_xml.getAttribute("id");
      if (i) {
        var o;
        if (void 0 != (o = t.get_element_from_db(i))) {
          o.dispose(!1, !1);
        }
        var a = s.dom.create_dom("xml");
        a.appendChild(this.old_xml);
        this.xml.dom_to_workspace(a, t);
      }
    }
  };
  t.prototype.serialize = function () {
    return {
      id: this._block_id,
      all_ids: this.ids,
      group: this._group
    };
  };
  (0, r.__decorate)([(0, a.lazy_inject)(a.BINDING.xml)], t.prototype, "xml", void 0);
  (0, r.__decorate)([(0, a.lazy_inject)(a.BINDING.events)], t.prototype, "events", void 0);
  (0, r.__decorate)([(0, a.lazy_inject)(a.BINDING.Blink)], t.prototype, "Blink", void 0);
  return t = (0, r.__decorate)([(0, i.injectable)()], t);
}(require("./643").BlockEvent);
exports.DeleteEvent = c;