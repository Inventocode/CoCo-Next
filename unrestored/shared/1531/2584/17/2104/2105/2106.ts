"use strict";

Object.defineProperty(exports, "__esModule", {
  value: !0
});
exports.CreateEvent = void 0;
var r = require("tslib");
var i = require("inversify");
var o = require("../../../125/195/index");
var a = (0, r.__importStar)(require("../../497/index"));
var s = require("../../../4/127");
var c = function (e) {
  function t(t) {
    var n = e.call(this, t.block) || this;
    n.type = o.BlockEventType.CREATE;
    n.ids = [];
    n.is_shadow = !1;
    n.source = t.source || "other";
    var r = t.block;
    var i = r.get_workspace();
    if (void 0 != i && i.rendered) {
      n._xml = n.xml.workspace_element_to_dom_with_xy(r);
    } else {
      n._xml = n.xml.workspace_element_to_dom(r);
    }
    if (a.base.is_block_svg(r)) {
      n.ids = r.get_descendant_ids();
      n.is_shadow = r.is_shadow();
      n._element_json = n.json.block_to_json(r);
    } else {
      if (!a.base.is_workspace_comment(r)) {
        throw new Error("Trying to fire create event for unsupported workspace element.");
      }
      n.ids = [r.id];
      n._element_json = {
        blocks: {},
        comments: {},
        connections: {}
      };
      n._element_json.comments[r.id] = n.json.comment_to_json(r);
    }
    return n;
  }
  (0, r.__extends)(t, e);
  t.prototype.run = function (e) {
    var t = this._get_event_workspace();
    if (e) {
      var n = a.dom.create_dom("xml");
      n.appendChild(this._xml);
      return void this.xml.dom_to_workspace(n, t);
    }
    for (var r = 0; r < this.ids.length; r++) {
      var i = this.ids[r];
      var o = t.get_element_from_db(i);
      if (o) {
        o.dispose(!1, !1);
      } else {
        if (i == this._block_id) {
          this.is_shadow;
        }
      }
    }
  };
  t.prototype.get_element_json = function () {
    return this._element_json;
  };
  t.prototype.serialize = function () {
    if (this._element_json) {
      return {
        group: this._group,
        blocks: this._element_json.blocks,
        comments: this._element_json.comments,
        connections: this._element_json.connections
      };
    }
  };
  (0, r.__decorate)([(0, s.lazy_inject)(s.BINDING.events)], t.prototype, "events", void 0);
  (0, r.__decorate)([(0, s.lazy_inject)(s.BINDING.xml)], t.prototype, "xml", void 0);
  return t = (0, r.__decorate)([(0, i.injectable)()], t);
}(require("./643").BlockEvent);
exports.CreateEvent = c;