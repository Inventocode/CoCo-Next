"use strict";

var r = require("./1117").MissingRef;
module.exports = function e(t, n, i) {
  var o = this;
  if ("function" != typeof this._opts.loadSchema) {
    throw new Error("options.loadSchema should be a function");
  }
  if ("function" == typeof n) {
    i = n;
    n = void 0;
  }
  var a = s(t).then(function () {
    var e = o._addSchema(t, void 0, n);
    return e.validate || function e(t) {
      try {
        return o._compile(t);
      } catch (a) {
        if (a instanceof r) {
          return i(a);
        }
        throw a;
      }
      function i(r) {
        var i = r.missingSchema;
        if (u(i)) {
          throw new Error("Schema " + i + " is loaded but " + r.missingRef + " cannot be resolved");
        }
        var a = o._loadingSchemas[i];
        if (!a) {
          (a = o._loadingSchemas[i] = o._opts.loadSchema(i)).then(c, c);
        }
        return a.then(function (e) {
          if (!u(i)) {
            return s(e).then(function () {
              if (!u(i)) {
                o.addSchema(e, i, void 0, n);
              }
            });
          }
        }).then(function () {
          return e(t);
        });
        function c() {
          delete o._loadingSchemas[i];
        }
        function u(e) {
          return o._refs[e] || o._schemas[e];
        }
      }
    }(e);
  });
  if (i) {
    a.then(function (e) {
      i(null, e);
    }, i);
  }
  return a;
  function s(t) {
    var n = t.$schema;
    return n && !o.getSchema(n) ? e.call(o, {
      $ref: n
    }, !0) : Promise.resolve();
  }
};