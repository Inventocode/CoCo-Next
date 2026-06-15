import * as StageUtils from '../core/utils';
import { get_module } from './di/container';
import { TYPES } from './di/symbols';
import * as StageInterfaces from './interface';
var CUR_VERSION = require('../../package.json').version;
console.log("%cWelcome to \u2764 Codemao Stage - v" + CUR_VERSION + " \u2764 for Nemo o(*\uFFE3\u25BD\uFFE3*)\u30D6", "\n  color: #7374BA;\n  text-shadow: 0 1px 0 #404182;");
export { StageInterfaces };
export { StageUtils };
export { RotationType, HammerDirection, TweenVariation, ObjectType, EdgeBinary, } from '../core/di/interfaces/const';
export function create_stage() {
    return get_module(TYPES.NemoStage);
}
export { ActorEditorName, ActorDialogType, } from './di/interfaces/const';
//# sourceMappingURL=index.js.map