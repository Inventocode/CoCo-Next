import { get_container } from '../../core/di/container';
import { TYPES as STAGE_TYPES } from '../../core/di/symbols';
import { Components } from '../components/model';
import { NemoStage } from '../stage/model';
import { TYPES } from './symbols';
var container = get_container();
container.bind(TYPES.Components).toFactory(function (context) {
    var events = context.container.get(STAGE_TYPES.Events);
    var components_factory = function (app, data) { return new Components(app, data, events); };
    return components_factory;
});
container.bind(TYPES.NemoStage).to(NemoStage);
export function get_module(module) {
    return container.get(module);
}
//# sourceMappingURL=container.js.map