import * as r from "./2796";
function i() {}
module.exports = {
  loadQueries: function () {
    throw new r("Sharable configs are not supported in client-side build of Browserslist");
  },
  getStat: function (e) {
    return e.stats;
  },
  loadConfig: function (e) {
    if (e.config) {
      throw new r("Browserslist config are not supported in client-side build");
    }
  },
  loadCountry: function () {
    throw new r("Country statistics are not supported in client-side build of Browserslist");
  },
  loadFeature: function () {
    throw new r("Supports queries are not available in client-side build of Browserslist");
  },
  currentNode: function (e, t) {
    return e(["maintained node versions"], t)[0];
  },
  parseConfig: i,
  readConfig: i,
  findConfig: i,
  clearCaches: i,
  oldDataWarning: i
};