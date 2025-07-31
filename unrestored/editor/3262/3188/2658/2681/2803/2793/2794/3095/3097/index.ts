"use strict";

var r = require("./3098/index").browsers;
var i = require("./3100/index").browserVersions;
var a = require("./3102");
function s(e) {
  return Object.keys(e).reduce(function (t, n) {
    t[i[n]] = e[n];
    return t;
  }, {});
}
module.exports.agents = Object.keys(a).reduce(function (e, t) {
  var n = a[t];
  e[r[t]] = Object.keys(n).reduce(function (e, t) {
    if ("A" === t) {
      e.usage_global = s(n[t]);
    } else {
      if ("C" === t) {
        e.versions = n[t].reduce(function (e, t) {
          if ("" === t) {
            e.push(null);
          } else {
            e.push(i[t]);
          }
          return e;
        }, []);
      } else {
        if ("D" === t) {
          e.prefix_exceptions = s(n[t]);
        } else {
          if ("E" === t) {
            e.browser = n[t];
          } else {
            if ("F" === t) {
              e.release_date = Object.keys(n[t]).reduce(function (e, r) {
                e[i[r]] = n[t][r];
                return e;
              }, {});
            } else {
              e.prefix = n[t];
            }
          }
        }
      }
    }
    return e;
  }, {});
  return e;
}, {});