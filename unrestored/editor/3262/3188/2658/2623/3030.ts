"use strict";

export default (function (e) {
  return (0, r.isImportDefaultSpecifier)(e) || (0, r.isIdentifier)(e.imported || e.exported, {
    name: "default"
  });
});
import * as r from "./2626";