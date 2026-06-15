var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import { Point } from '../../pixi';
import { PhysicsBodyTypes } from '../../di/interfaces/physics';
import { make_rotate, collision_opti_scaled_to_origin_point, get_actor_center, } from '../../utils';
import { SoftFilter } from '../../filters/soft';
import { concave_to_convex } from '../../utils/convace_to_convex';
import { convert_meter_to_pixel, convert_pixel_to_meter, } from '../utils';
var ElasticBody = /** @class */ (function () {
    function ElasticBody(app, data, box2d, scene_world, actor, get_strength) {
        this.app = app;
        this.data = data;
        this.box2d = box2d;
        this.scene_world = scene_world;
        this.actor = actor;
        this.get_strength = get_strength;
        this.type = PhysicsBodyTypes.ELASTIC;
        this.position_cache = new this.box2d.Vec2();
        this.particle_system = this.scene_world.world.m_particleSystemList;
        this.start_rotation = this.actor.rotation;
        if (!this.particle_system) {
            throw Error('Trying to init elastic body before particle system initialized. ');
        }
    }
    /** 获取当前浏览器下，最大的形变滤镜控制点数量。 */
    ElasticBody.get_max_anchors = function () {
        if (this._max_anchors)
            return this._max_anchors;
        // 根据浏览器情况确定shader最大取点数量
        var canvas = document.createElement('canvas');
        var gl = canvas.getContext('webgl');
        if (!gl) {
            throw Error('[Elastic Body]: WebGL not supported');
        }
        var max_uniforms = gl.getParameter(gl.MAX_FRAGMENT_UNIFORM_VECTORS);
        // const max_uniforms = 224; // ios14以下uniforms上限
        var max_triads = Math.floor(max_uniforms / 5);
        // http://web.ntnu.edu.tw/~algo/Triangulation.html
        // 在DT中，有 三角形数量t <= 2 * 顶点数量v + 1
        this._max_anchors = Math.floor((max_triads - 1) / 2);
        return this._max_anchors;
    };
    ElasticBody.prototype.set_enabled = function (enabled) {
        var _a;
        if (enabled && !this.particle_group) {
            var center = get_actor_center(this.actor, this.actor.position);
            this.init({
                x: convert_pixel_to_meter(center.x),
                y: convert_pixel_to_meter(center.y),
            }, (_a = this.actor.current_style) === null || _a === void 0 ? void 0 : _a.texture_id);
        }
        else if (!enabled && this.particle_group) {
            this.clear();
        }
    };
    ElasticBody.prototype.set_dynamic = function () { };
    ElasticBody.prototype.set_fixed_rotation = function (fixed) {
        // fixed rotation作用于【允许/不允许倾倒】。
        // 不允许倾倒的功能与粒子系统理念冲突，在elastic body中不生效。
    };
    ElasticBody.prototype.set_sensor = function (flag) { };
    ElasticBody.prototype.set_mass = function (mass) {
        // mass根据粒子总重量计算得出，如果修改粒子重量会影响到所有相关粒子组
        // 应该是无法生效
    };
    ElasticBody.prototype.get_linear_velocity = function () {
        if (this.particle_group) {
            var velocity = this.particle_group.GetLinearVelocity();
            return new this.box2d.Vec2(velocity.x, -velocity.y);
        }
        return this.box2d.Vec2_zero;
    };
    ElasticBody.prototype.set_linear_velocity = function (x, y) {
        if (!this.particle_group)
            return;
        for (var i = this.particle_group.m_firstIndex; i < this.particle_group.m_lastIndex; i++) {
            this.particle_system.m_velocityBuffer.data[i].Set(x, -y);
        }
    };
    ElasticBody.prototype.get_particle_group_rotation = function () {
        if (!this.particle_group)
            return 0;
        if (!this.particle_group_start_rotation)
            return this.particle_group.GetAngle();
        var first_particle_pos = this.particle_system.m_positionBuffer.data[this.particle_group.m_firstIndex];
        var anchor_pos = this.particle_group.GetAnchorPosition();
        var curr_dir = new this.box2d.Vec2();
        this.box2d.Vec2.SubVV(first_particle_pos, anchor_pos, curr_dir);
        curr_dir.SelfNormalize();
        return this.box2d.Atan2(curr_dir.y, curr_dir.x) - this.box2d.Atan2(this.particle_group_start_rotation.y, this.particle_group_start_rotation.x);
    };
    ElasticBody.prototype.get_rotation = function () {
        if (!this.particle_group)
            return this.start_rotation;
        return this.start_rotation + this.get_particle_group_rotation();
    };
    ElasticBody.prototype.set_rotation = function (rotation) {
        if (!this.particle_group) {
            this.start_rotation = rotation;
            return;
        }
        var rotation_offset = rotation - this.get_rotation();
        var rotation_center = this.get_position();
        for (var i = this.particle_group.m_firstIndex; i < this.particle_group.m_lastIndex; i++) {
            var xy = make_rotate(this.particle_system.m_positionBuffer.data[i], rotation_center, rotation_offset);
            this.particle_system.m_positionBuffer.data[i] = new this.box2d.Vec2(xy.x, xy.y);
        }
    };
    ElasticBody.prototype.get_position = function () {
        if (!this.particle_group || !this.particle_group_anchor_offset)
            return this.position_cache;
        var anchor_position = this.particle_group.GetAnchorPosition();
        var rotation = this.get_particle_group_rotation();
        var curr_offset = make_rotate(this.particle_group_anchor_offset, { x: 0, y: 0 }, rotation);
        return new this.box2d.Vec2(anchor_position.x - curr_offset.x, anchor_position.y - curr_offset.y);
    };
    ElasticBody.prototype.set_position = function (position) {
        if (!this.particle_group)
            return;
        var current_position = this.get_position();
        var offset_x = position.x - current_position.x;
        var offset_y = position.y - current_position.y;
        for (var i = this.particle_group.m_firstIndex; i < this.particle_group.m_lastIndex; i++) {
            this.particle_system.m_positionBuffer.data[i].SelfAddXY(offset_x, offset_y);
        }
    };
    ElasticBody.prototype.scale_points = function (points, scale, center) {
        if (!center) {
            var min_x = Infinity;
            var min_y = Infinity;
            var max_x = -Infinity;
            var max_y = -Infinity;
            for (var i = 0; i < points.length; i++) {
                min_x = Math.min(min_x, points[i].x);
                min_y = Math.min(min_y, points[i].y);
                max_x = Math.max(max_x, points[i].x);
                max_y = Math.max(max_y, points[i].y);
            }
            center = {
                x: (max_x + min_x) / 2,
                y: (max_y + min_y) / 2,
            };
        }
        var res = [];
        var expanded_r = 1;
        for (var i = 0; i < points.length; i++) {
            var p = { x: points[i].x, y: points[i].y };
            var x_offset = p.x - center.x;
            if (x_offset > 0) {
                p.x = Math.ceil(x_offset * scale + center.x) + expanded_r;
            }
            else {
                p.x = Math.floor(x_offset * scale + center.x) - expanded_r;
            }
            var y_offset = p.y - center.y;
            if (y_offset > 0) {
                p.y = Math.ceil(y_offset * scale + center.y) + expanded_r;
            }
            else {
                p.y = Math.floor(y_offset * scale + center.y) - expanded_r;
            }
            res.push(p);
        }
        return res;
    };
    ElasticBody.prototype.init = function (physics_pos, texture_id) {
        if (!texture_id)
            return;
        var position_data = this.generate_position_data(texture_id);
        if (!position_data)
            return;
        this.clear();
        var points = position_data.points, triangles = position_data.triangles;
        var pd = new this.box2d.ParticleGroupDef();
        pd.positionData = points;
        pd.flags = this.box2d.ParticleFlag.b2_elasticParticle |
            this.box2d.ParticleFlag.b2_waterParticle |
            this.box2d.ParticleFlag.b2_particleContactListenerParticle |
            this.box2d.ParticleFlag.b2_particleContactFilterParticle |
            this.box2d.ParticleFlag.b2_fixtureContactListenerParticle |
            this.box2d.ParticleFlag.b2_fixtureContactFilterParticle;
        pd.groupFlags = this.box2d.ParticleGroupFlag.b2_solidParticleGroup;
        pd.color.SetRGBA(255, 255, 255, 0.5);
        pd.strength = this.get_strength();
        pd.position.Set(physics_pos.x, physics_pos.y);
        pd.angle = this.actor.rotation;
        pd.id = this.actor.id;
        this.particle_group = this.particle_system.CreateParticleGroup(pd);
        this.start_rotation = this.actor.rotation;
        // 计算锚点（中位粒子）相对于角色质心的偏移量（用于将粒子模型和图像对齐）
        var anchor_pos = this.particle_group.GetAnchorPosition();
        this.particle_group_anchor_offset = new this.box2d.Vec2();
        this.box2d.Vec2.SubVV(anchor_pos, physics_pos, this.particle_group_anchor_offset);
        // 计算锚点到左上角（首个粒子）的方向向量（用于计算整体旋转角度）
        var first_particle_pos = this.particle_system.m_positionBuffer.data[this.particle_group.m_firstIndex];
        this.particle_group_start_rotation = new this.box2d.Vec2();
        this.box2d.Vec2.SubVV(first_particle_pos, anchor_pos, this.particle_group_start_rotation);
        this.particle_group_start_rotation.SelfNormalize();
        // 计算组内的每个粒子相对于锚点的相对位置（用于计算位置的偏移）
        var particles_count = this.particle_group.GetParticleCount();
        // 新建变形滤镜，并取消其他所有滤镜
        var first_idx = this.particle_group.m_firstIndex;
        // 使用粒子组的三角形
        if (!triangles.length) {
            for (var i = 0; i < this.particle_system.GetTriadCount(); i++) {
                var _a = this.particle_system.GetTriads()[i], indexA = _a.indexA, indexB = _a.indexB, indexC = _a.indexC;
                if (this.particle_group.ContainsParticle(indexA) &&
                    this.particle_group.ContainsParticle(indexB) &&
                    this.particle_group.ContainsParticle(indexC)) {
                    triangles.push([indexA - first_idx, indexC - first_idx, indexB - first_idx]);
                }
            }
        }
        this.soft_filter = new SoftFilter({
            max_num_anchors: particles_count,
            triangles: triangles,
        });
        this.soft_filter.enabled = true;
        this.filters_cache = this.actor.filters;
        this.actor.filters = [this.soft_filter];
    };
    ElasticBody.prototype.clear = function () {
        this.position_cache = this.get_position();
        if (!this.particle_group)
            return;
        this.particle_group.DestroyParticles(false);
        this.particle_system.DestroyParticleGroup(this.particle_group);
        this.particle_group = undefined;
        this.particle_group_anchor_offset = undefined;
        this.particle_group_start_rotation = undefined;
        this.soft_filter = undefined;
        this.actor.filters = this.filters_cache || [];
        this.filters_cache = undefined;
    };
    ElasticBody.prototype.destroy = function () {
        this.clear();
    };
    ElasticBody.prototype.on_tick = function () {
        if (!this.soft_filter || !this.particle_group)
            return;
        var rotation = this.get_particle_group_rotation();
        var movements = [];
        var anchor_position = this.particle_group.GetAnchorPosition();
        // 变形之前（只发生了位移+旋转），所有粒子的位置
        for (var i = 0; i < this.particle_group.GetParticleCount(); i++) {
            var rp = this.particle_group.relativePositions[i];
            // 如果未旋转，当前处理的点此时所处的绝对位置
            var curr_absolute_pos = {
                x: anchor_position.x + rp.x,
                y: anchor_position.y + rp.y,
            };
            // 旋转后，当前处理的点所处的绝对位置
            curr_absolute_pos = make_rotate(curr_absolute_pos, anchor_position, rotation);
            var target_pos = this.particle_system.m_positionBuffer.data[i + this.particle_group.m_firstIndex];
            movements.push([
                this.map_physics_coord_to_pixi(curr_absolute_pos),
                this.map_physics_coord_to_pixi(target_pos),
            ]);
        }
        var _a = this.app.get_app().view, width = _a.width, height = _a.height;
        this.soft_filter.set_anchors(movements, width, height);
    };
    ElasticBody.prototype.apply_force = function (f) {
        var _a;
        (_a = this.particle_group) === null || _a === void 0 ? void 0 : _a.ApplyForce(f);
    };
    ElasticBody.prototype.generate_position_data = function (texture_id) {
        var _this = this;
        var texture = this.data.get_texture(texture_id);
        var bounds = this.data.get_texture_bounds_points(texture_id);
        if (!bounds || !texture)
            return;
        var actor_scale = this.actor.get_scale();
        var r = this.particle_system.GetRadius() * Math.SQRT2;
        var w = convert_pixel_to_meter(texture.width * actor_scale.x);
        var h = convert_pixel_to_meter(texture.height * actor_scale.y);
        var expand_scale = Math.sqrt(Math.pow(w + r, 2) + Math.pow(h + r, 2)) / Math.sqrt(Math.pow(w, 2) + Math.pow(h, 2));
        var physics_bounds = this.scale_points(bounds, expand_scale).map(function (p) {
            // 此时origin_point的位置与原图（未缩放）相同，坐标参照点为图片左上角
            var origin_point = collision_opti_scaled_to_origin_point(new Point(p.x, p.y));
            // 把坐标原点移动到中心 && 完成缩放 && 转换成物理坐标单位
            return new Point(convert_pixel_to_meter((origin_point.x - texture.width / 2) * _this.actor.scale.x), convert_pixel_to_meter((origin_point.y - texture.height / 2) * _this.actor.scale.y));
        });
        var convexes = [];
        physics_bounds && concave_to_convex(physics_bounds, convexes);
        var shape = new this.box2d.ParticleSystem_CompositeShape(convexes.map(function (c) {
            var s = new _this.box2d.PolygonShape();
            s.Set(c);
            return s;
        }));
        /**
         * 根据素材的轮廓点和形状进行粒子填充和形变三角的选取。
         */
        var points = [];
        var indexes_to_form_triangle = new Set();
        var stride = this.particle_system.GetParticleStride();
        // 在内部进行填充
        // 计算取点精度。
        var area = w * h;
        /**
         * 最大内部填充粒子数量。需要留一部分容量给边缘填充。
         */
        var max_fill_num = ElasticBody.get_max_anchors() * 0.5;
        /**
         * 在粒子中取点组成三角的精度。当粒子过多时，每interval个点取一次。
         */
        var interval = Math.max(Math.ceil(Math.sqrt(area / max_fill_num) / stride), 1);
        var identity = this.box2d.Transform.IDENTITY;
        var aabb = new this.box2d.AABB();
        shape.ComputeAABB(aabb, identity, 0);
        while (!indexes_to_form_triangle.size) {
            var y_count = 0;
            for (var y = Math.floor(aabb.lowerBound.y / stride) * stride; y < aabb.upperBound.y; y += stride) {
                if (indexes_to_form_triangle.size > 0) {
                    y_count++;
                }
                var should_catch_y = y_count % interval === 0 || y + stride >= aabb.upperBound.y;
                var found_first = false;
                var x = Math.floor(aabb.lowerBound.x / stride) * stride;
                var x_count = 0;
                while (x < aabb.upperBound.x) {
                    if (found_first) {
                        x_count++;
                    }
                    var should_catch_x = x_count % interval === 0;
                    var p = new this.box2d.Vec2(x, y);
                    var p_index = points.length;
                    if (shape.TestPoint(identity, p)) {
                        if (!found_first) { // 本行第一个点
                            x += stride / 2;
                            p.Set(x, y);
                        }
                        if (should_catch_y && should_catch_x) {
                            indexes_to_form_triangle.add(p_index);
                        }
                        points.push(p);
                        found_first = true;
                    }
                    if (!found_first) {
                        x++;
                    }
                    else {
                        x += stride;
                    }
                }
                // 记录本行最后的点
                if (should_catch_y && found_first) {
                    indexes_to_form_triangle.add(points.length - 1);
                }
            }
            if (indexes_to_form_triangle.size > max_fill_num) {
                // 取多了，增大interval重来
                interval++;
                points.length = 0;
                indexes_to_form_triangle.clear();
            }
        }
        var points_len = points.length;
        // 沿着边界增加一圈粒子
        var max_bounds_num = ElasticBody.get_max_anchors() - max_fill_num;
        var step = Math.floor(physics_bounds.length / max_bounds_num);
        var indexes_to_form_bounds = new Set();
        while (indexes_to_form_triangle.size < ElasticBody.get_max_anchors()) {
            var _loop_1 = function (n) {
                var v = physics_bounds[n];
                if (points.every(function (p) { return _this.box2d.Vec2.DistanceVV(p, v) >= _this.particle_system.GetRadius(); })) {
                    indexes_to_form_bounds.add(points.length);
                    points.push(new this_1.box2d.Vec2(v.x, v.y));
                }
            };
            var this_1 = this;
            for (var n = 0; n < physics_bounds.length; n += step) {
                _loop_1(n);
            }
            if (indexes_to_form_triangle.size + indexes_to_form_bounds.size <= ElasticBody.get_max_anchors()) {
                break;
            }
            // 取多了，增大step重来
            points.length = points_len;
            indexes_to_form_bounds.clear();
            step++;
        }
        if (indexes_to_form_triangle.size === points.length) {
            return { points: points, triangles: [] };
        }
        var triangles = [];
        var diagram = new this.box2d.VoronoiDiagram(indexes_to_form_triangle.size + indexes_to_form_bounds.size);
        indexes_to_form_triangle.forEach(function (idx) {
            diagram.AddGenerator(points[idx], idx, true);
        });
        indexes_to_form_bounds.forEach(function (idx) {
            diagram.AddGenerator(points[idx], idx, true);
        });
        diagram.Generate(stride / 2, stride * 2);
        diagram.GetNodes(function (a, b, c) {
            triangles.push([a, b, c]);
        });
        return { points: points, triangles: triangles };
    };
    ElasticBody.prototype.map_physics_coord_to_pixi = function (xy) {
        var x_to_left_top = convert_meter_to_pixel(xy.x);
        var y_to_left_top = convert_meter_to_pixel(xy.y);
        var _a = this.app.get_app().view, width = _a.width, height = _a.height;
        return {
            x: x_to_left_top + width / 2,
            y: y_to_left_top + height / 2,
        };
    };
    ElasticBody.prototype.get_dragged_body = function (physics_mouse_pos) {
        var _this = this;
        var shape = new this.box2d.CircleShape();
        shape.m_p.Copy(physics_mouse_pos);
        shape.m_radius = 2 * this.particle_system.GetRadius();
        var bd = new this.box2d.BodyDef();
        bd.type = this.box2d.BodyType.b2_dynamicBody;
        bd.position.Copy(physics_mouse_pos);
        bd.id = 'ParticleJoint';
        bd.fixedRotation = false;
        var body_b = this.scene_world.world.CreateBody(bd);
        var mass_data = new this.box2d.MassData();
        var affected_particles = [];
        var aabb = new this.box2d.AABB();
        shape.ComputeAABB(aabb, this.box2d.Transform.IDENTITY, 0);
        var ParticleCallback = /** @class */ (function (_super) {
            __extends(ParticleCallback, _super);
            function ParticleCallback(ReportParticle) {
                var _this = _super.call(this) || this;
                _this.ReportParticle = ReportParticle;
                return _this;
            }
            ParticleCallback.prototype.ReportFixture = function (fixture) {
                return false;
            };
            return ParticleCallback;
        }(this.box2d.QueryCallback));
        this.scene_world.world.QueryAABB(new ParticleCallback(function (ps, i) {
            affected_particles.push({
                index: i,
                offset: _this.box2d.Vec2.SubVV(ps.m_positionBuffer.data[i], physics_mouse_pos, new _this.box2d.Vec2()),
            });
            return true;
        }), aabb);
        for (var i = 0; i < affected_particles.length; i++) {
            mass_data.mass = this.particle_system.m_groupBuffer[affected_particles[i].index].GetMass();
        }
        body_b.SetMassData(mass_data);
        if (this.update_callback && this.scene_world.update_callbacks.has(this.update_callback)) {
            this.scene_world.update_callbacks.delete(this.update_callback);
        }
        this.update_callback = function () {
            var body_v = body_b.GetLinearVelocity();
            var body_p = body_b.GetPosition();
            affected_particles.forEach(function (particle) {
                var index = particle.index, offset = particle.offset;
                _this.particle_system.GetVelocityBuffer()[index].Copy(body_v);
                var p = _this.box2d.Vec2.AddVV(body_p, offset, new _this.box2d.Vec2());
                _this.particle_system.m_positionConstraintBuffer[index] = [p, p];
            });
        };
        this.scene_world.update_callbacks.add(this.update_callback);
        return body_b;
    };
    ElasticBody.prototype.on_end_drag = function () {
        if (this.update_callback) {
            this.scene_world.update_callbacks.delete(this.update_callback);
            this.update_callback = undefined;
        }
    };
    ElasticBody.prototype.refilter = function () {
        // 粒子每一帧都会重新检测碰撞和豁免情况，不需要手动修改flag。
    };
    return ElasticBody;
}());
export { ElasticBody };
//# sourceMappingURL=elastic_body.js.map