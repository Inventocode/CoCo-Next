"use strict";

export { r as clientOp };
export { o as serverOp };
export { g as blinkOTAdapter };
export { _ as procedurePlugin };
var r = {};
Object.defineProperty(r, "getCurrentScreenWorkspaceData", {
  get: function () {
    return u;
  }
});
Object.defineProperty(r, "applyIdeToOp", {
  get: function () {
    return d;
  }
});
Object.defineProperty(r, "addWorkspace", {
  get: function () {
    return p;
  }
});
var o = {};
Object.defineProperty(o, "applyServerOp", {
  get: function () {
    return m;
  }
});
var i = require("./776/index");
var a = require("./728/index");
var s = require("../../1035/32/index");
var c = require("../../24/index");
var l = require("../../43");
function u() {
  var e = Object(l.a)();
  var t = c.a.getDoc();
  if (e) {
    var n = null === t || void 0 === t ? void 0 : t.blockly[e].workspaceJson;
    if (n) {
      return n;
    }
  }
  return {
    blocks: {},
    connections: {},
    comments: {}
  };
}
function d(e) {
  var t = Object(l.a)();
  if (t) {
    e.forEach(function (e) {
      if (!(null === e || void 0 === e)) {
        e.unshift("workspaceJson");
      }
      if (!(null === e || void 0 === e)) {
        e.unshift(t);
      }
      if (!(null === e || void 0 === e)) {
        e.unshift("blockly");
      }
      c.a.applyClient(e);
    });
  }
}
function p(e, t) {
  if (t) {
    var n = Object(s.insertOp)(["blockly", e], t);
    c.a.applyClient(n);
  }
}
var f = require("../../26/index");
var h = require("../244");
function m(e) {
  var t = c.a.getDoc();
  var n = Object(l.a)();
  if (e && t) {
    if (3 === e.length && "blockly" === e[0]) {
      if (!Object(h.g)(e[2])) {
        if (Object(h.e)(e[2])) {
          (function (e) {
            f.z.addWorkspaceData(e[2].i);
          })(e);
        }
      }
    } else {
      var r;
      var o = e[1];
      if (o === n) {
        try {
          g.decompose_and_transform_op(e);
        } catch (s) {
          window.confirm("\u534f\u4f5c\u5f02\u5e38\uff0c\u8bf7\u5237\u65b0\u9875\u9762\uff1f");
        }
      }
      var i = null === (r = f.z.getWorkspaceDataByScreenId(o)) || void 0 === r ? void 0 : r.getProcedureManager();
      var a = t.blockly[o];
      if (i && a.workspaceJson) {
        _.analyze_op_and_update(e, a.workspaceJson, i);
        f.z.setWorkspaceDataByScreenId(o, a);
        f.z.refreshProcedureToolbox();
      }
    }
  }
}
var g = new i.OTAdapter(u, d);
var _ = new a.ProcedurePlugin();
g.register_plugins([_]);