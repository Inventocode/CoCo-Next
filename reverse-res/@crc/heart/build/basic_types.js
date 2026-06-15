"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var EntityState;
(function (EntityState) {
    EntityState[EntityState["Unknown"] = 0] = "Unknown";
    EntityState[EntityState["Known"] = 1] = "Known";
    EntityState[EntityState["Destructing"] = 2] = "Destructing";
    EntityState[EntityState["Disposed"] = 3] = "Disposed";
})(EntityState = exports.EntityState || (exports.EntityState = {}));
var VariableScope;
(function (VariableScope) {
    VariableScope[VariableScope["global"] = 0] = "global";
    VariableScope[VariableScope["entity"] = 1] = "entity";
})(VariableScope = exports.VariableScope || (exports.VariableScope = {}));
var StepResult;
(function (StepResult) {
    StepResult[StepResult["yielding"] = 0] = "yielding";
    StepResult[StepResult["finished"] = 1] = "finished";
})(StepResult = exports.StepResult || (exports.StepResult = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFzaWNfdHlwZXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvYmFzaWNfdHlwZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUE4RkEsSUFBWSxXQUtYO0FBTEQsV0FBWSxXQUFXO0lBQ3JCLG1EQUFPLENBQUE7SUFDUCwrQ0FBSyxDQUFBO0lBQ0wsMkRBQVcsQ0FBQTtJQUNYLHFEQUFRLENBQUE7QUFDVixDQUFDLEVBTFcsV0FBVyxHQUFYLG1CQUFXLEtBQVgsbUJBQVcsUUFLdEI7QUF3Q0QsSUFBWSxhQUdYO0FBSEQsV0FBWSxhQUFhO0lBQ3ZCLHFEQUFNLENBQUE7SUFDTixxREFBTSxDQUFBO0FBQ1IsQ0FBQyxFQUhXLGFBQWEsR0FBYixxQkFBYSxLQUFiLHFCQUFhLFFBR3hCO0FBY0QsSUFBWSxVQUdYO0FBSEQsV0FBWSxVQUFVO0lBQ3BCLG1EQUFRLENBQUE7SUFDUixtREFBUSxDQUFBO0FBQ1YsQ0FBQyxFQUhXLFVBQVUsR0FBVixrQkFBVSxLQUFWLGtCQUFVLFFBR3JCIn0=