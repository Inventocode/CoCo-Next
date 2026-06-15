import { Container } from 'inversify';
import { App } from '../app/model';
import { Data } from '../data/model';
import { Events } from '../events/model';
import { Textures } from '../textures/model';
import { Transition } from '../scenes/transition';
import { Scene } from '../scenes/scene';
import { Scenes } from '../scenes/model';
import { Actor } from '../actors/actor';
import { Actors } from '../actors/model';
import { Stage } from '../stage/model';
import { StageAnimation } from '../stage_animation/model';
import { Physics } from '../physics/model';
import { TYPES } from './symbols';
var container = new Container();
container.bind(TYPES.Events).to(Events).inSingletonScope();
container.bind(TYPES.App).to(App);
container.bind(TYPES.Data).toFactory(function () {
    var data_factory = function (app) { return new Data(app); };
    return data_factory;
});
container.bind(TYPES.Textures).toFactory(function () {
    var textures_factory = function (data) { return new Textures(data); };
    return textures_factory;
});
container.bind(TYPES.Transition).toFactory(function () {
    var transition_factory = function (app) { return new Transition(app); };
    return transition_factory;
});
container.bind(TYPES.StageAnimation).toFactory(function () {
    var stage_animation_factory = function (data) { return new StageAnimation(data); };
    return stage_animation_factory;
});
container.bind(TYPES.Physics).toFactory(function () {
    var physics_animation_factory = function (app, data) { return new Physics(app, data); };
    return physics_animation_factory;
});
container.bind(TYPES.Scene).toFactory(function (context) {
    var events = context.container.get(TYPES.Events);
    var scene_factory = function (scene_id, texture, texture_id, data, app) { return new Scene(scene_id, texture, texture_id, data, app, events); };
    return scene_factory;
});
container.bind(TYPES.Scenes).toFactory(function (context) {
    var events = context.container.get(TYPES.Events);
    var transition_factory = context.container.get(TYPES.Transition);
    var scene_factory = context.container.get(TYPES.Scene);
    var scenes_factory = function (app, data) { return new Scenes(app, data, transition_factory, scene_factory, events); };
    return scenes_factory;
});
container.bind(TYPES.Actor).toFactory(function (context) {
    var actor_factory = function (data) {
        var events = context.container.get(TYPES.Events);
        var options = Object.assign({}, data, { events: events });
        return new Actor(options);
    };
    return actor_factory;
});
container.bind(TYPES.Actors).toFactory(function (context) {
    var actor_factory = context.container.get(TYPES.Actor);
    var actors_factory = function (app, data) { return new Actors(app, data, actor_factory); };
    return actors_factory;
});
container.bind(TYPES.Stage).to(Stage);
export function get_module(module) {
    return container.get(module);
}
export function get_container() {
    return container;
}
//# sourceMappingURL=container.js.map