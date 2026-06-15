var __values = (this && this.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
import { EdgeBinary } from '../di/interfaces/const';
import { ActorBody } from './actor_body';
import { concatenate_ids, convert_pixel_to_meter, DEFAULT_GRAVITY, DELTA_TIME, EDGE_DENSITY, EDGE_HALF_LENGTH, POSITION_ITERATIONS, VELOCITY_ITERATIONS, } from './utils';
var SceneWorld = /** @class */ (function () {
    function SceneWorld(app, data, scene, box2d, gravity) {
        var _this = this;
        this.app = app;
        this.data = data;
        this.scene = scene;
        this.box2d = box2d;
        this.body_list = new Map();
        this.collision_list = new Set();
        this.edge_list = new Map();
        this.update_callbacks = new Set();
        this.update = function () {
            _this.world.Step(DELTA_TIME, VELOCITY_ITERATIONS, POSITION_ITERATIONS);
            _this.update_callbacks.forEach(function (cb) { return cb(); });
        };
        this.on_scene_destroy = function () { return _this.destroy(); };
        this.world = new box2d.World(new box2d.Vec2(0, gravity || DEFAULT_GRAVITY));
        // 粒子系统
        var particle_system_def = new this.box2d.ParticleSystemDef();
        particle_system_def.radius = 1.2; // TODO: 也许应该设置成可调整的数值，每次调整后所有粒子组需要销毁重建
        this.world.CreateParticleSystem(particle_system_def);
        // 物理世界的碰撞监听
        var contact_listener = new box2d.ContactListener();
        // 两物理模型开始接触
        var begin_contact = function (actor_1_id, actor_2_id) {
            if (!actor_1_id || !actor_2_id || actor_1_id === actor_2_id)
                return;
            var id1_id2_str = concatenate_ids(actor_1_id, actor_2_id);
            var id2_id1_str = concatenate_ids(actor_2_id, actor_1_id);
            _this.collision_list.add(id1_id2_str);
            _this.collision_list.add(id2_id1_str);
        };
        contact_listener.BeginContact = function (contact) { return begin_contact(contact.GetFixtureA().GetBody().GetId(), contact.GetFixtureB().GetBody().GetId()); };
        contact_listener.BeginContactBodyParticleGroup = function (system, contact) { var _a; return begin_contact(contact.body.GetId(), ((_a = system.m_groupBuffer[contact.index]) === null || _a === void 0 ? void 0 : _a.id) || ''); };
        contact_listener.BeginContactParticleGroupParticleGroup = function (system, contact) {
            var _a, _b;
            return begin_contact(((_a = system.m_groupBuffer[contact.GetIndexA()]) === null || _a === void 0 ? void 0 : _a.id) || '', ((_b = system.m_groupBuffer[contact.GetIndexB()]) === null || _b === void 0 ? void 0 : _b.id) || '');
        };
        // 两物理模型结束接触
        var end_contact = function (actor_1_id, actor_2_id) {
            if (!actor_1_id || !actor_2_id || actor_1_id === actor_2_id)
                return;
            var id1_id2_str = concatenate_ids(actor_1_id, actor_2_id);
            var id2_id1_str = concatenate_ids(actor_2_id, actor_1_id);
            _this.collision_list.delete(id1_id2_str);
            _this.collision_list.delete(id2_id1_str);
        };
        contact_listener.EndContact = function (contact) { return end_contact(contact.GetFixtureA().GetBody().GetId(), contact.GetFixtureB().GetBody().GetId()); };
        contact_listener.EndContactBodyParticleGroup = function (system, contact) { var _a; return end_contact(contact.body.GetId(), ((_a = system.m_groupBuffer[contact.index]) === null || _a === void 0 ? void 0 : _a.id) || ''); };
        contact_listener.EndContactParticleGroupParticleGroup = function (system, contact) {
            var _a, _b;
            return end_contact(((_a = system.m_groupBuffer[contact.GetIndexA()]) === null || _a === void 0 ? void 0 : _a.id) || '', ((_b = system.m_groupBuffer[contact.GetIndexB()]) === null || _b === void 0 ? void 0 : _b.id) || '');
        };
        // 物理世界的碰撞过滤
        var should_collide_actors = function (actor_1_id, actor_2_id) {
            var body_1 = _this.body_list.get(actor_1_id);
            var body_2 = _this.body_list.get(actor_2_id);
            if ((body_1 === null || body_1 === void 0 ? void 0 : body_1.get_collision_filter().has(actor_2_id)) || (body_2 === null || body_2 === void 0 ? void 0 : body_2.get_collision_filter().has(actor_1_id))) {
                return false;
            }
            return true;
        };
        var contact_filter = new box2d.ContactFilter();
        contact_filter.ShouldCollide = function (fixture_1, fixture_2) {
            return should_collide_actors(fixture_1.GetBody().GetId(), fixture_2.GetBody().GetId());
        };
        contact_filter.ShouldCollideFixtureParticle = function (fixture, system, index) { var _a; return should_collide_actors(fixture.GetBody().GetId(), ((_a = system.m_groupBuffer[index]) === null || _a === void 0 ? void 0 : _a.id) || ''); };
        contact_filter.ShouldCollideParticleParticle = function (system, index_a, index_b) { var _a, _b; return should_collide_actors(((_a = system.m_groupBuffer[index_a]) === null || _a === void 0 ? void 0 : _a.id) || '', ((_b = system.m_groupBuffer[index_b]) === null || _b === void 0 ? void 0 : _b.id) || ''); };
        this.world.SetContactListener(contact_listener);
        this.world.SetContactFilter(contact_filter);
        this.scene.add_listener('destroy', this.on_scene_destroy);
        this.mouse_joint_dummy_body = this.world.CreateBody();
        this.app.get_app().ticker.add(this.update);
    }
    SceneWorld.prototype.create_body = function (options) {
        var _this = this;
        var actor = this.data.get_internal_actor(options.actor_id);
        if (!actor) {
            return;
        }
        var density = options.density, friction = options.friction, restitution = options.restitution, strength = options.strength;
        var actor_body = new ActorBody(this.app, this.data, this.box2d, this, {
            on_destroy: function () { _this.body_list.delete(options.actor_id); },
            actor: actor,
            mouse_joint_dummy_body: this.mouse_joint_dummy_body,
            collidable: !!options.collidable,
            forceable: !!options.forceable,
            elastic: !!options.elastic,
            density: density,
            friction: friction,
            restitution: restitution,
            strength: strength,
        });
        this.body_list.set(options.actor_id, actor_body);
        return actor_body;
    };
    SceneWorld.prototype.create_edges = function (edges) {
        var e_1, _a;
        if (edges.length === 0) {
            return;
        }
        // 舞台右上顶点的Pixi坐标对应的物理世界的坐标
        var _b = this.app.get_app().view, width = _b.width, height = _b.height;
        var physics_world_coord = {
            x: convert_pixel_to_meter(width) / 2,
            y: convert_pixel_to_meter(height) / 2,
        };
        try {
            for (var edges_1 = __values(edges), edges_1_1 = edges_1.next(); !edges_1_1.done; edges_1_1 = edges_1.next()) {
                var edge = edges_1_1.value;
                if (this.edge_list.get(edge)) {
                    continue;
                }
                var x = 0;
                var y = 0;
                switch (edge) {
                    case EdgeBinary.TOP:
                        y = -physics_world_coord.y - EDGE_HALF_LENGTH;
                        break;
                    case EdgeBinary.BOTTOM:
                        y = physics_world_coord.y + EDGE_HALF_LENGTH;
                        break;
                    case EdgeBinary.LEFT:
                        x = -physics_world_coord.x - EDGE_HALF_LENGTH;
                        break;
                    case EdgeBinary.RIGHT:
                        x = physics_world_coord.x + EDGE_HALF_LENGTH;
                        break;
                    default:
                        return;
                }
                var body = this.world.CreateBody({ id: edge.toString() });
                var shape = new this.box2d.PolygonShape();
                shape.SetAsBox(EDGE_HALF_LENGTH, EDGE_HALF_LENGTH);
                body.CreateFixture(shape, EDGE_DENSITY);
                body.SetPositionXY(x, y);
                this.edge_list.set(edge, body);
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (edges_1_1 && !edges_1_1.done && (_a = edges_1.return)) _a.call(edges_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
    };
    SceneWorld.prototype.destroy_edges = function (edges) {
        var e_2, _a;
        if (edges.length === 0 || this.edge_list.size === 0) {
            return;
        }
        try {
            for (var edges_2 = __values(edges), edges_2_1 = edges_2.next(); !edges_2_1.done; edges_2_1 = edges_2.next()) {
                var edge = edges_2_1.value;
                var edge_body = this.edge_list.get(edge);
                if (edge_body) {
                    edge_body.GetWorld().DestroyBody(edge_body);
                    this.edge_list.delete(edge);
                }
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (edges_2_1 && !edges_2_1.done && (_a = edges_2.return)) _a.call(edges_2);
            }
            finally { if (e_2) throw e_2.error; }
        }
    };
    SceneWorld.prototype.destroy_body = function (actor_id) {
        var body = this.body_list.get(actor_id);
        body && body.destroy();
    };
    SceneWorld.prototype.destroy = function () {
        this.app.get_app().ticker.remove(this.update);
        this.scene.remove_listener('destroy', this.on_scene_destroy);
        this.body_list.forEach(function (body) {
            body.destroy();
        });
        this.edge_list.forEach(function (edge) {
            edge.GetWorld().DestroyBody(edge);
        });
        this.body_list.clear();
        this.edge_list.clear();
        this.collision_list.clear();
    };
    SceneWorld.prototype.get_body = function (actor_id) {
        return this.body_list.get(actor_id);
    };
    SceneWorld.prototype.set_gravity = function (x, y) {
        this.world.SetGravity(new this.box2d.Vec2(x, -y));
    };
    SceneWorld.prototype.check_bumped = function (actor_1_id, actor_2_id) {
        // 任意角色离开舞台皆视为没有碰撞
        var actor_1 = this.data.get_internal_actor(actor_1_id);
        var actor_2 = this.data.get_internal_actor(actor_2_id);
        if (!actor_1 || actor_1.has_left_stage() || !actor_2 || actor_2.has_left_stage()) {
            return false;
        }
        // 任意角色没有物理模型或任意物理模型没有激活视为没有碰撞
        var actor_1_body = this.get_body(actor_1_id);
        var actor_2_body = this.get_body(actor_2_id);
        if (!actor_1_body || !actor_1_body.is_enabled() || !actor_2_body || !actor_2_body.is_enabled()) {
            return false;
        }
        var id1_id2_str = concatenate_ids(actor_1_id, actor_2_id);
        var id2_id1_str = concatenate_ids(actor_2_id, actor_1_id);
        return this.collision_list.has(id1_id2_str) || this.collision_list.has(id2_id1_str);
    };
    SceneWorld.prototype.check_collision_with_edge = function (actor_id, edge) {
        var e_3, _a;
        var actor = this.data.get_internal_actor(actor_id);
        // 角色离开舞台皆视为没有碰撞
        if (!actor || actor.has_left_stage()) {
            return false;
        }
        var actor_body = this.get_body(actor_id);
        // 角色没有物理模型或物理模型没有激活视为没有碰撞
        if (!actor_body || !actor_body.is_enabled()) {
            return false;
        }
        var edges = !edge ? [EdgeBinary.TOP, EdgeBinary.BOTTOM, EdgeBinary.LEFT, EdgeBinary.RIGHT] : [edge];
        try {
            for (var edges_3 = __values(edges), edges_3_1 = edges_3.next(); !edges_3_1.done; edges_3_1 = edges_3.next()) {
                var edge_1 = edges_3_1.value;
                var edge_body = this.edge_list.get(edge_1);
                if (edge_body) {
                    var edge_body_id = edge_body.GetId();
                    var id1_id2_str = concatenate_ids(actor_id, edge_body_id);
                    var id2_id1_str = concatenate_ids(edge_body_id, actor_id);
                    if (this.collision_list.has(id1_id2_str) || this.collision_list.has(id2_id1_str)) {
                        return true;
                    }
                }
            }
        }
        catch (e_3_1) { e_3 = { error: e_3_1 }; }
        finally {
            try {
                if (edges_3_1 && !edges_3_1.done && (_a = edges_3.return)) _a.call(edges_3);
            }
            finally { if (e_3) throw e_3.error; }
        }
        return false;
    };
    return SceneWorld;
}());
export { SceneWorld };
//# sourceMappingURL=scene_world.js.map