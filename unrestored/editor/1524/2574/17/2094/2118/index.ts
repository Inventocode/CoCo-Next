"use strict";

Object.defineProperty(exports, "__esModule", {
  value: !0
});
exports.Blink = void 0;
var r = require("../../../1000/93");
var i = require("../../../1000/134/index");
var o = require("../../../1176/1312");
var a = require("../2133/1313");
var s = require("./2119/index");
var c = require("../../640/index");
var u = require("../../../4/127");
var l = function () {
  function e() {
    this.Blocks = Object.create(null);
    this.blocks_xml = {};
    this.version = require("../../1315").version;
    this.inject = s.Inject.bind(this);
    Object.assign(this.Msg, a.zh_hans);
    (0, o.init_shadows)(this);
  }
  Object.defineProperty(e.prototype, "mainWorkspace", {
    get: function () {
      return this.workspace_db.current;
    },
    set: function (e) {
      this.workspace_db.current = e;
    },
    enumerable: !1,
    configurable: !0
  });
  Object.defineProperty(e.prototype, "di_container", {
    get: function () {
      return (0, c.get_instance)();
    },
    enumerable: !1,
    configurable: !0
  });
  e.prototype.define_blocks_with_json_array = function (e) {
    for (var t = 0; t < e.length; t++) {
      var n = e[t];
      if (n) {
        var r = n.type;
        if (r) {
          if (this.Blocks[r]) {
            console.warn("Block definition #" + t + ' in JSON array overwrites prior definition of "' + r + '".');
          }
          this.Blocks[r] = {
            init: function (e) {
              return function () {
                this.jsonInit(e);
              };
            }(n)
          };
        } else {
          console.warn("Block definition #" + t + " in JSON array is missing a type attribute. Skipping.");
        }
      } else {
        console.warn("Block definition #" + t + " in JSON array not exist. Skipping.");
      }
    }
  };
  e.prototype.define_block_with_object = function (e, t) {
    if (this.Blocks[e]) {
      console.warn('Block definition overwrites prior definition of "' + e + '".');
    }
    this.Blocks[e] = t;
  };
  (0, r.__decorate)([(0, u.lazy_inject)(u.BINDING.context_menu)], e.prototype, "context_menu", void 0);
  (0, r.__decorate)([(0, u.lazy_inject)(u.BINDING.events)], e.prototype, "events", void 0);
  (0, r.__decorate)([(0, u.lazy_inject)(u.BINDING.extensions)], e.prototype, "extensions", void 0);
  (0, r.__decorate)([(0, u.lazy_inject)(u.BINDING.Msg)], e.prototype, "Msg", void 0);
  (0, r.__decorate)([(0, u.lazy_inject)(u.BINDING.registry)], e.prototype, "registry", void 0);
  (0, r.__decorate)([(0, u.lazy_inject)(u.BINDING.runtime_data)], e.prototype, "runtime_data", void 0);
  (0, r.__decorate)([(0, u.lazy_inject)(u.BINDING.theme)], e.prototype, "theme", void 0);
  (0, r.__decorate)([(0, u.lazy_inject)(u.BINDING.tooltip)], e.prototype, "tooltip", void 0);
  (0, r.__decorate)([(0, u.lazy_inject)(u.BINDING.widget_div)], e.prototype, "widget_div", void 0);
  (0, r.__decorate)([(0, u.lazy_inject)(u.BINDING.workspace_db)], e.prototype, "workspace_db", void 0);
  (0, r.__decorate)([(0, u.lazy_inject)(u.BINDING.xml)], e.prototype, "xml", void 0);
  (0, r.__decorate)([(0, u.lazy_inject)(u.BINDING.json)], e.prototype, "json", void 0);
  (0, r.__decorate)([(0, u.lazy_inject)(u.BINDING.utils)], e.prototype, "utils", void 0);
  return e = (0, r.__decorate)([(0, i.injectable)()], e);
}();
exports.Blink = l;