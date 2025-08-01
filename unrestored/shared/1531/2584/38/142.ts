"use strict";

exports.a = {
  getItem: function (e) {
    return localStorage.getItem(e);
  },
  setItem: function (e, t) {
    return localStorage.setItem(e, t);
  },
  removeItem: function (e) {
    return localStorage.removeItem(e);
  },
  multiSet: function (e) {
    e.forEach(function (e) {
      localStorage.setItem(e[0], e[1]);
    });
  },
  getAllKeys: function () {
    return Object.keys(localStorage);
  },
  multiRemove: function (e) {
    e.forEach(function (e) {
      localStorage.removeItem(e);
    });
  }
};