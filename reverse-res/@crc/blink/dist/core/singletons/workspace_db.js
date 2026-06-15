"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WorkspaceDB = void 0;
var tslib_1 = require("tslib");
var inversify_1 = require("inversify");
var WorkspaceDB = /** @class */ (function () {
    function WorkspaceDB() {
        this.db = new Map();
    }
    WorkspaceDB.prototype.add = function (workspace) {
        this.db.set(workspace.id, workspace);
    };
    WorkspaceDB.prototype.remove = function (workspace) {
        return this.db.delete(workspace.id);
    };
    WorkspaceDB.prototype.get = function (id) {
        return this.db.get(id);
    };
    WorkspaceDB = (0, tslib_1.__decorate)([
        (0, inversify_1.injectable)()
    ], WorkspaceDB);
    return WorkspaceDB;
}());
exports.WorkspaceDB = WorkspaceDB;
