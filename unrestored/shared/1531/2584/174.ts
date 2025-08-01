"use strict";

var r = require("./1/index");
var o = function __importDefault(module) {
  var defaultExport = module && module.__esModule ? function () {
    return module.default;
  } : function () {
    return module;
  };
  Object.defineProperty(defaultExport, "a", {
    enumerable: true,
    get: defaultExport
  });
  return defaultExport;
}(r);
var i = require("./7");
var a = require("./27");
var s = require("./40");
var c = function () {
  function e() {
    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "appCraft";
    Object(a.a)(this, e);
    this._dbs = void 0;
    this._databaseName = void 0;
    this._tableName = "grid";
    this._version = 1;
    this._dbs = {};
    this._databaseName = t;
    this.open(this._databaseName, this._version);
  }
  Object(s.a)(e, [{
    key: "open",
    value: function (e, t) {
      var n = this;
      return new Promise(function (r, o) {
        if (n._dbs[e + t]) {
          r(n._dbs[e + t]);
        } else {
          var i = indexedDB.open(e, t);
          i.onupgradeneeded = function (e) {
            var t = e.target.result;
            if (!1 === t.objectStoreNames.contains(n._tableName)) {
              var o = t.createObjectStore(n._tableName, {
                keyPath: "id"
              });
              o.createIndex("id", "id", {
                unique: !0
              });
              o.createIndex("name", "name");
              o.createIndex("header", "header");
              o.createIndex("data", "data");
            }
            r(t);
          };
          i.onsuccess = function (o) {
            var i = o.target.result;
            n._dbs[e + t] = i;
            r(i);
          };
          i.onerror = function (e) {
            o(e);
            console.error("IndexedDB", e);
          };
        }
      });
    }
  }, {
    key: "_getTransaction",
    value: function () {
      var e = Object(i.a)(o.a.mark(function e(t) {
        var n;
        return o.a.wrap(function (e) {
          for (;;) {
            switch (e.prev = e.next) {
              case 0:
                if (!this._dbs[this._databaseName + t]) {
                  e.next = 4;
                  break;
                }
                n = this._dbs[this._databaseName + t];
                e.next = 7;
                break;
              case 4:
                e.next = 6;
                return this.open(this._databaseName, t);
              case 6:
                n = e.sent;
              case 7:
                return e.abrupt("return", n.transaction([this._tableName], "readwrite"));
              case 8:
              case "end":
                return e.stop();
            }
          }
        }, e, this);
      }));
      return function (t) {
        return e.apply(this, arguments);
      };
    }()
  }, {
    key: "_getObjectStore",
    value: function () {
      var e = Object(i.a)(o.a.mark(function e() {
        var t;
        return o.a.wrap(function (e) {
          for (;;) {
            switch (e.prev = e.next) {
              case 0:
                e.next = 2;
                return this._getTransaction(this._version);
              case 2:
                t = e.sent;
                return e.abrupt("return", t.objectStore(this._tableName));
              case 4:
              case "end":
                return e.stop();
            }
          }
        }, e, this);
      }));
      return function () {
        return e.apply(this, arguments);
      };
    }()
  }, {
    key: "get",
    value: function (e) {
      var t = this;
      return new Promise(function (n, r) {
        t._getObjectStore().then(function (t) {
          var o = t.get(e);
          o.onsuccess = function (e) {
            n(e.target.result);
          };
          o.onerror = function (e) {
            r(e);
          };
        });
      });
    }
  }, {
    key: "getAll",
    value: function () {
      var e = this;
      return new Promise(function (t, n) {
        e._getObjectStore().then(function (e) {
          try {
            var r = e.getAll();
            r.onsuccess = function (e) {
              t(e.target.result);
            };
            r.onerror = function (e) {
              n(e);
            };
          } catch (o) {
            n(o);
          }
        });
      });
    }
  }, {
    key: "add",
    value: function (e) {
      var t = this;
      return new Promise(function (n, r) {
        t._getObjectStore().then(function (t) {
          var o = t.add(e);
          o.onsuccess = function (e) {
            n(e.target.result);
          };
          o.onerror = function (e) {
            r(e);
          };
        });
      });
    }
  }, {
    key: "delete",
    value: function (e) {
      var t = this;
      return new Promise(function (n, r) {
        t._getObjectStore().then(function (t) {
          var o = t.delete(e);
          o.onsuccess = function (e) {
            n(e.target.result);
          };
          o.onerror = function (e) {
            r(e);
          };
        });
      });
    }
  }, {
    key: "put",
    value: function (e) {
      var t = this;
      return new Promise(function (n, r) {
        t._getObjectStore().then(function (t) {
          var o = t.put(e);
          o.onsuccess = function (e) {
            n(e.target.result);
          };
          o.onerror = function (e) {
            r(e);
          };
        });
      });
    }
  }, {
    key: "clear",
    value: function () {
      var e = this;
      return new Promise(function (t, n) {
        e._getObjectStore().then(function (r) {
          var o = r.clear(e._tableName);
          o.onsuccess = function (e) {
            t(e.target.result);
          };
          o.onerror = function (e) {
            n(e);
          };
        });
      });
    }
  }]);
  return e;
}();
var l = window.location.search.split("?")[1];
var u = new URLSearchParams(l).get("archiveId");
var d = u ? new c(u) : new c();
export { d as a };
export default d;