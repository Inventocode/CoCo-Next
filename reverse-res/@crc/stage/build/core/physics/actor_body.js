import { Point } from '../pixi';
import { PhysicsBodyTypes } from '../di/interfaces/physics';
import { get_actor_center, is_mouse_in_stage, make_rotate, mod_rotation, RESIZE_THROTTLE, throttle, radian_to_angle, } from '../utils';
import { convert_meter_to_pixel, convert_pixel_to_meter, MASS_MULTIPLIER, STIFFNESS, DAMPING, DELTA_TIME, } from './utils';
import { ElasticBody } from './physics_body/elastic_body';
import { NormalBody } from './physics_body/normal_body';
var ActorBody = /** @class */ (function () {
    function ActorBody(app, data, box2d, scene_world, options) {
        var _this = this;
        var _a;
        this.app = app;
        this.data = data;
        this.box2d = box2d;
        this.scene_world = scene_world;
        this.force_handler_cache = new Set();
        this.collision_filter = new Set();
        this.bodies_cache = [];
        /**
         * 物理模型由非激活状态转为激活状态时是否需要重建物理模型
         */
        this.should_recreate_body = false;
        this.on_actor_change = function (e) {
            var _a;
            if (e.texture || e.scale || e.pivot) {
                if (!_this.is_enabled()) {
                    _this.should_recreate_body = true;
                    return;
                }
                _this.physics_body.init(_this.convert_pixi_to_physics_position(_this.actor.position), (_a = _this.actor.get_current_style()) === null || _a === void 0 ? void 0 : _a.texture_id);
            }
        };
        this.on_actor_destroy = function () { return _this.destroy(); };
        this.set_strength = function (strength) {
            _this.group_strength = strength;
            var maybe_elastic_body = _this.bodies_cache[PhysicsBodyTypes.ELASTIC];
            if (maybe_elastic_body === null || maybe_elastic_body === void 0 ? void 0 : maybe_elastic_body.particle_group) {
                maybe_elastic_body.particle_group.m_strength = _this.group_strength;
            }
        };
        this.get_strength = function () { return _this.group_strength; };
        this.physics_set_pixi_position = function (x, y) {
            /**
             * 角色的普通拖拽监听里会调用set_pixi_position去修改角色位置。
             * 在开启物理引擎后，角色绑定了物理拖拽监听，此时普通拖拽监听还在。
             * 普通拖拽监听会在物理拖拽监听前触发，让is_dragging变为true。
             * 这里添加了下面这个判断，确保物理引擎下角色的位置只通过上面的handler去设置，
             * 而不是通过普通拖拽监听里调用set_pixi_position。
             */
            if (_this.actor.is_dragging() && _this.is_enabled()) {
                return;
            }
            // 转换Pixi的坐标为物理世界的坐标
            var physics_pos = _this.convert_pixi_to_physics_position(new Point(x, y));
            _this.bodies_cache.forEach(function (b) { return b.set_position(physics_pos); });
            /**
             * 开启物理引擎时，set_pixi_position 仅设置角色物理模型的位置，
             * 角色的 pixi_position 数据是通过handler在下一帧进行更新。
             * 这种更新方式导致了一个问题：对于一个在一帧内完成执行的瞬时积木组合来说，
             * 如果该组合内某块积木的执行依赖于上一块积木设置的 pixi_position 数据，那么计算会出错。
             * 因此，在该方法中还需要再调用一次 this.fork_set_pixi_position，确保数据的实时准确性。
             */
            _this.fork_set_pixi_position(x, y);
        };
        this.physics_set_pixi_rotation = function (rotation) {
            _this.bodies_cache.forEach(function (b) { return b.set_rotation(rotation); });
            /**
             * 这里调用 this.fork_set_pixi_rotation 的理由参考上面的 set_pixi_position。
             */
            _this.fork_set_pixi_rotation(rotation);
        };
        this.handler = function () {
            if (_this.is_enabled()) {
                var rotation = _this.physics_body.get_rotation();
                var _a = _this.physics_body.get_position(), x = _a.x, y = _a.y;
                var pixi_pos = _this.convert_physics_to_pixi_position(x, y, rotation);
                _this.fork_set_pixi_rotation(rotation);
                _this.fork_set_pixi_position(pixi_pos.x, pixi_pos.y);
                _this.actor.set_rotation_value(_this.convert_to_rotation_value(rotation));
            }
            // 若一帧内多次重复设置enabled或sensor的状态在FindNewContact时候tree node会抛错
            // 而我们无法控制对外接口 set_visible, set_collidable, set_forceable 的调用次数和时机
            // 因此Enabled状态和Sensor状态跟随每一帧更新
            _this.update_body_state();
            _this.physics_body.on_tick();
            if (_this.force_handler_cache.size) {
                _this.force_handler_cache.forEach(function (handler) { return handler(); });
            }
        };
        this.drag_start = function (e) {
            if ((!_this.collidable && !_this.forceable) || !_this.actor.get_draggable()) {
                return;
            }
            if (_this.mouse_joint) {
                _this.scene_world.world.DestroyJoint(_this.mouse_joint);
            }
            var pixi_mouse_pos = e.data.getLocalPosition(_this.actor.parent);
            var physics_mouse_pos = {
                x: convert_pixel_to_meter(pixi_mouse_pos.x),
                y: convert_pixel_to_meter(pixi_mouse_pos.y),
            };
            var body_b = _this.physics_body.get_dragged_body(physics_mouse_pos);
            var mouse_joint_def = new _this.box2d.MouseJointDef();
            mouse_joint_def.bodyA = _this.mouse_joint_dummy_body;
            mouse_joint_def.bodyB = body_b;
            mouse_joint_def.target.Set(physics_mouse_pos.x, physics_mouse_pos.y);
            mouse_joint_def.maxForce = MASS_MULTIPLIER * body_b.m_mass;
            mouse_joint_def.stiffness = STIFFNESS;
            mouse_joint_def.damping = DAMPING;
            _this.mouse_joint = _this.scene_world.world.CreateJoint(mouse_joint_def);
            body_b.SetAwake(true);
        };
        this.drag_move = throttle(function (e) {
            if ((!_this.collidable && !_this.forceable) ||
                !_this.actor.is_dragging() ||
                !_this.mouse_joint)
                return;
            var _a = _this.app.get_app().view, width = _a.width, height = _a.height;
            var pixi_mouse_pos = e.data.getLocalPosition(_this.actor.parent);
            if (!is_mouse_in_stage(pixi_mouse_pos, { width: width, height: height })) {
                return;
            }
            var physics_mouse_pos = {
                x: convert_pixel_to_meter(pixi_mouse_pos.x),
                y: convert_pixel_to_meter(pixi_mouse_pos.y),
            };
            _this.mouse_joint.GetTarget().Set(physics_mouse_pos.x, physics_mouse_pos.y);
            // drag_move的时候若鼠标长时间不动，物体也会进入睡眠，因此这里需要唤醒
            _this.mouse_joint.GetBodyB().SetAwake(true);
        }, RESIZE_THROTTLE);
        this.drag_end = function () {
            if ((!_this.collidable && !_this.forceable) || !_this.mouse_joint) {
                return;
            }
            _this.scene_world.world.DestroyJoint(_this.mouse_joint);
            _this.mouse_joint = undefined;
            _this.physics_body.on_end_drag();
        };
        this.on_destroy = options.on_destroy;
        this.actor = options.actor;
        this.actor_id = options.actor.id;
        this.mouse_joint_dummy_body = options.mouse_joint_dummy_body;
        this.collidable = options.collidable;
        this.forceable = options.forceable;
        this.elastic = options.elastic;
        this.group_strength = options.strength || 1;
        // 无论是否为弹性角色，都要初始化normal body以接收物理属性的设置。
        var density = options.density, friction = options.friction, restitution = options.restitution;
        this.physics_body = this.get_normal_body(density, friction, restitution);
        if (this.elastic) {
            this.physics_body = this.get_elastic_body();
        }
        var current_texture_id = (_a = this.actor.get_current_style()) === null || _a === void 0 ? void 0 : _a.texture_id;
        // 转换Pixi的坐标为物理世界的坐标
        var physics_pos = this.convert_pixi_to_physics_position(this.actor.position);
        this.bodies_cache.forEach(function (b) { return b.init(physics_pos, current_texture_id); });
        // 根据collidable和forceable的值在初始化物理模型时设置它的激活状态，确保首帧运行时状态的准确性。
        this.update_body_state();
        this.app.get_app().ticker.add(this.handler);
        this.fork_set_pixi_position = this.actor.set_pixi_position.bind(this.actor);
        this.actor.set_pixi_position = this.physics_set_pixi_position.bind(this);
        this.fork_set_pixi_rotation = this.actor.set_pixi_rotation.bind(this.actor);
        this.actor.set_pixi_rotation = this.physics_set_pixi_rotation.bind(this);
        this.actor.add_listener('change', this.on_actor_change);
        this.actor.add_listener('destroy', this.on_actor_destroy);
        this.actor.addListener('mousedown', this.drag_start);
        this.actor.addListener('mousemove', this.drag_move);
        this.actor.addListener('mouseup', this.drag_end);
        this.actor.addListener('mouseupoutside', this.drag_end);
        this.actor.addListener('touchstart', this.drag_start);
        this.actor.addListener('touchmove', this.drag_move);
        this.actor.addListener('touchend', this.drag_end);
        this.actor.addListener('touchendoutside', this.drag_end);
    }
    /**
     * 根据pixi中图像的属性、用户设置等，更新physics body的属性。
     *
     * 属性优先级：
     * 1. enabled - 优先级最高，如果为false，则角色完全变成背景，其他属性都无法生效。
     * 2. elastic - 高于forceable，如果为弹性材质，则默认一定可以受力，此时若手动设置forceable，仅记录属性值，不影响实际表现。
     * 3. forceable (对应dynamic)
     * 4. sensor
     */
    ActorBody.prototype.update_body_state = function () {
        var _a;
        var current_is_enable = this.is_enabled();
        this.physics_body.set_enabled(current_is_enable);
        if (!current_is_enable) {
            return;
        }
        if (this.should_recreate_body) {
            this.physics_body.init(this.convert_pixi_to_physics_position(this.actor.position), (_a = this.actor.get_current_style()) === null || _a === void 0 ? void 0 : _a.texture_id);
            this.should_recreate_body = false;
        }
        this.physics_body.set_dynamic(this.forceable);
        var current_is_sensor = this.forceable && !this.collidable;
        this.physics_body.set_sensor(current_is_sensor);
    };
    ActorBody.prototype.get_elastic_body = function () {
        if (this.bodies_cache[PhysicsBodyTypes.ELASTIC]) {
            return this.bodies_cache[PhysicsBodyTypes.ELASTIC];
        }
        var elastic_body = new ElasticBody(this.app, this.data, this.box2d, this.scene_world, this.actor, this.get_strength);
        this.bodies_cache[PhysicsBodyTypes.ELASTIC] = elastic_body;
        return elastic_body;
    };
    ActorBody.prototype.get_normal_body = function (density, friction, restitution) {
        if (this.bodies_cache[PhysicsBodyTypes.NORMAL]) {
            return this.bodies_cache[PhysicsBodyTypes.NORMAL];
        }
        var normal_body = new NormalBody(this.data, this.box2d, this.scene_world, this.actor, density, friction, restitution);
        this.bodies_cache[PhysicsBodyTypes.NORMAL] = normal_body;
        return normal_body;
    };
    ActorBody.prototype.convert_pixi_to_physics_position = function (position) {
        var center = get_actor_center(this.actor, position);
        return {
            x: convert_pixel_to_meter(center.x),
            y: convert_pixel_to_meter(center.y),
        };
    };
    ActorBody.prototype.convert_physics_to_pixi_position = function (x, y, rotation) {
        var pixi_pos = {
            x: convert_meter_to_pixel(x),
            y: convert_meter_to_pixel(y),
        };
        var center = {
            x: pixi_pos.x + this.actor.pivot.x * this.actor.scale.x,
            y: pixi_pos.y + this.actor.pivot.y * this.actor.scale.y,
        };
        // 在物理世界中，旋转锚点永远 = 质心
        // 此时渲染引擎中的旋转锚点功能失效
        // 因此旋转弧度需要转换为：中心点位置围绕质心旋转后的位移
        return make_rotate(center, pixi_pos, rotation);
    };
    ActorBody.prototype.add_ids_to_collision_filter = function (ids) {
        var _this = this;
        if (ids.length === 0) {
            return;
        }
        var should_refilter = false;
        ids.forEach(function (id) {
            if (!_this.collision_filter.has(id)) {
                _this.collision_filter.add(id);
                !should_refilter && (should_refilter = true);
            }
        });
        /**
         * 如果新增了某对象与本物理模型不碰撞，则需要做一遍重新过滤，因为此时两者间可能已经存在了碰撞。
         * fixture.Refilter 会检测该 fixture 所属 body 的碰撞链表，将碰撞链表中所有和自己有关的碰撞的 m_filterFlag 设置为 true。
         * 当 m_filterFlag 为 true 时，box2D 会在下一次 Step 的时候根据 ShouldCollide 里的规则重新对碰撞进行一遍过滤。
         */
        if (should_refilter) {
            this.physics_body.refilter();
        }
    };
    ActorBody.prototype.remove_ids_from_collision_filter = function (ids) {
        var _this = this;
        ids.forEach(function (id) {
            _this.collision_filter.has(id) && _this.collision_filter.delete(id);
        });
    };
    ActorBody.prototype.prevent_collision_with_actors = function (actor_ids) {
        this.add_ids_to_collision_filter(actor_ids);
    };
    ActorBody.prototype.prevent_collision_with_edges = function (edges) {
        var edge_ids = [];
        edges.forEach(function (edge) {
            edge_ids.push(edge.toString());
        });
        this.add_ids_to_collision_filter(edge_ids);
    };
    ActorBody.prototype.enable_collision_with_actors = function (actor_ids) {
        this.remove_ids_from_collision_filter(actor_ids);
    };
    ActorBody.prototype.enable_collision_with_edges = function (edges) {
        var edge_ids = [];
        edges.forEach(function (edge) {
            edge_ids.push(edge.toString());
        });
        this.remove_ids_from_collision_filter(edge_ids);
    };
    ActorBody.prototype.set_collidable = function (collidable) {
        this.collidable = collidable;
    };
    ActorBody.prototype.set_forceable = function (forceable) {
        this.forceable = forceable;
    };
    ActorBody.prototype.is_enabled = function () {
        return this.actor.visible && (this.collidable || this.forceable);
    };
    ActorBody.prototype.is_dynamic = function () {
        return this.forceable;
    };
    ActorBody.prototype.set_fixed_rotation = function (fixed) {
        this.bodies_cache.forEach(function (b) { return b.set_fixed_rotation(fixed); });
    };
    ActorBody.prototype.get_collision_filter = function () {
        return this.collision_filter;
    };
    // 物理性质
    ActorBody.prototype.set_mass = function (mass) {
        this.get_normal_body().set_mass(mass);
    };
    ActorBody.prototype.get_mass = function () {
        return this.get_normal_body().get_mass();
    };
    ActorBody.prototype.set_density = function (density) {
        this.get_normal_body().set_density(density);
    };
    ActorBody.prototype.get_density = function () {
        return this.get_normal_body().get_density();
    };
    ActorBody.prototype.set_friction = function (friction) {
        this.get_normal_body().set_friction(friction);
    };
    ActorBody.prototype.get_friction = function () {
        return this.get_normal_body().get_friction();
    };
    ActorBody.prototype.set_restitution = function (restitution) {
        this.get_normal_body().set_restitution(restitution);
    };
    ActorBody.prototype.get_restitution = function () {
        return this.get_normal_body().get_restitution();
    };
    ActorBody.prototype.set_elastic = function (elastic) {
        var _a;
        if (elastic === this.elastic)
            return;
        /**
         * 发生材质切换时，需要将当前材质模型的旋转角度、位置、速度和激活状态同步到新材质模型上。
         */
        var rotation = this.physics_body.get_rotation();
        var position = this.physics_body.get_position();
        var velocity = this.physics_body.get_linear_velocity();
        var is_enabled = this.is_enabled();
        this.physics_body.set_enabled(false);
        this.physics_body = elastic ? this.get_elastic_body() : this.get_normal_body();
        /**
         * 从柔软材质切换到坚硬材质时，需要重新构建坚硬材质的模型，因为在柔软材质时角色的造型、缩放比例可能已经发生了改变。
         *（坚硬切到柔软不会有这个问题，因为每次切换柔软材质时都会重构粒子组）。
         */
        if (this.physics_body.type === PhysicsBodyTypes.NORMAL) {
            this.physics_body.init(this.convert_pixi_to_physics_position(this.actor.position), (_a = this.actor.get_current_style()) === null || _a === void 0 ? void 0 : _a.texture_id);
        }
        this.physics_body.set_enabled(is_enabled);
        this.physics_body.set_rotation(rotation);
        this.physics_body.set_position(position);
        this.physics_body.set_linear_velocity(velocity.x, velocity.y);
        this.elastic = elastic;
    };
    ActorBody.prototype.get_linear_velocity = function () {
        return this.physics_body.get_linear_velocity();
    };
    ActorBody.prototype.set_linear_velocity = function (x, y) {
        this.physics_body.set_linear_velocity(x, y);
    };
    ActorBody.prototype.apply_force = function (x, y) {
        var f = new this.box2d.Vec2(x, -y);
        this.physics_body.apply_force(f);
    };
    ActorBody.prototype.apply_force_in_time = function (options) {
        var _this = this;
        var time = options.time, x = options.x, y = options.y, on_complete = options.on_complete;
        var total_count = Math.round(time / DELTA_TIME);
        var current_count = 1;
        var handler = function () {
            if (current_count > total_count) {
                _this.force_handler_cache.delete(handler);
                on_complete();
                return;
            }
            ;
            _this.apply_force(x, y);
            current_count++;
        };
        this.force_handler_cache.add(handler);
    };
    ActorBody.prototype.destroy = function () {
        this.app.get_app().ticker.remove(this.handler);
        this.actor.removeListener('mousedown', this.drag_start);
        this.actor.removeListener('mousemove', this.drag_move);
        this.actor.removeListener('mouseup', this.drag_end);
        this.actor.removeListener('mouseupoutside', this.drag_end);
        this.actor.removeListener('touchstart', this.drag_start);
        this.actor.removeListener('touchmove', this.drag_move);
        this.actor.removeListener('touchend', this.drag_end);
        this.actor.removeListener('touchendoutside', this.drag_end);
        this.actor.remove_listener('change', this.on_actor_change);
        this.actor.remove_listener('destroy', this.on_actor_destroy);
        this.mouse_joint && this.scene_world.world.DestroyJoint(this.mouse_joint);
        this.bodies_cache.forEach(function (b) { return b.destroy(); });
        this.actor.set_pixi_position = this.fork_set_pixi_position;
        this.actor.set_pixi_rotation = this.fork_set_pixi_rotation;
        this.on_destroy();
    };
    /**
     * 物理世界的弧度换算为真实世界的rotation value
     * 需要经过取模和取反的运算
     * @param rotation 旋转弧度
     * @returns rotation value
     */
    ActorBody.prototype.convert_to_rotation_value = function (rotation) {
        var new_rotation = mod_rotation(-rotation);
        return this.actor.is_rotation_flipped
            ? mod_rotation(new_rotation + Math.PI)
            : new_rotation;
    };
    ActorBody.prototype.get_velocity_direction = function () {
        var velocity = this.physics_body.get_linear_velocity();
        return radian_to_angle(Math.atan2(velocity.y, velocity.x));
    };
    ActorBody.prototype.get_current_physics_body = function () {
        return this.physics_body;
    };
    return ActorBody;
}());
export { ActorBody };
//# sourceMappingURL=actor_body.js.map