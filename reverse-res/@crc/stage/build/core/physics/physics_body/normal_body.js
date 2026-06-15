import { PhysicsBodyTypes } from '../../di/interfaces/physics';
import { collision_opti_scaled_to_origin_point, } from '../../utils';
import { convert_pixel_to_meter, DEFAULT_DENSITY, DEFAULT_FRICTION, DEFAULT_RESTITUTION, } from '../utils';
var NormalBody = /** @class */ (function () {
    function NormalBody(data, box2d, scene_world, actor, density, friction, restitution) {
        this.data = data;
        this.box2d = box2d;
        this.scene_world = scene_world;
        this.actor = actor;
        this.type = PhysicsBodyTypes.NORMAL;
        var body_def = new this.box2d.BodyDef();
        body_def.type = this.box2d.BodyType.b2_staticBody;
        body_def.enabled = false;
        body_def.fixedRotation = true;
        body_def.id = this.actor.id;
        this.body = this.scene_world.world.CreateBody(body_def);
        // 角色的默认Fixture定义
        this.fixture_def = new this.box2d.FixtureDef();
        this.fixture_def.density = density || DEFAULT_DENSITY;
        this.fixture_def.friction = friction || DEFAULT_FRICTION;
        this.fixture_def.restitution = restitution || DEFAULT_RESTITUTION;
    }
    NormalBody.prototype.set_enabled = function (enabled) {
        this.body.SetEnabled(enabled);
    };
    NormalBody.prototype.set_dynamic = function (flag) {
        this.body.SetType(flag ? this.box2d.BodyType.b2_dynamicBody : this.box2d.BodyType.b2_staticBody);
    };
    NormalBody.prototype.set_fixed_rotation = function (fixed) {
        this.body.SetFixedRotation(fixed);
    };
    NormalBody.prototype.set_sensor = function (flag) {
        var fixture_list = this.body.GetFixtureList();
        if (flag !== (fixture_list === null || fixture_list === void 0 ? void 0 : fixture_list.IsSensor())) {
            while (fixture_list) {
                fixture_list.SetSensor(flag);
                fixture_list = fixture_list.m_next;
            }
        }
    };
    NormalBody.prototype.set_mass = function (mass) {
        /**
         * 用body.SetMassData更新质量时并不会更新密度
         * 设置质量并不改变物理模型的形状
         * 根据计算公式 面积 = 质量 / 密度，
         * 要在物理模型面积不变的情况下改变质量，只能通过设置密度来实现（设置密度后会重新计算质量）
         */
        var current_mass = this.get_mass();
        /** 理论上不会触发这一步，box2D中动态刚体mass永远大于0，由于下面用作除数，加个容错处理 */
        if (current_mass === 0) {
            current_mass = 1;
        }
        this.set_density(this.get_density() * mass / current_mass);
    };
    NormalBody.prototype.get_mass = function () {
        return this.body.GetMass();
    };
    NormalBody.prototype.set_density = function (density) {
        this.set_physics_property(0 /* DENSITY */, density);
        this.body.ResetMassData();
        this.fixture_def.density = density;
    };
    NormalBody.prototype.get_density = function () {
        var fixture_list = this.body.GetFixtureList();
        return fixture_list ? fixture_list.GetDensity() : 0;
    };
    NormalBody.prototype.set_friction = function (friction) {
        this.set_physics_property(1 /* FRICTION */, friction);
    };
    NormalBody.prototype.get_friction = function () {
        var fixture_list = this.body.GetFixtureList();
        return fixture_list ? fixture_list.GetFriction() : 0;
    };
    NormalBody.prototype.set_restitution = function (restitution) {
        this.set_physics_property(2 /* RESTITUTION */, restitution);
    };
    NormalBody.prototype.get_restitution = function () {
        var fixture_list = this.body.GetFixtureList();
        return fixture_list ? fixture_list.GetRestitution() : 0;
    };
    NormalBody.prototype.get_linear_velocity = function () {
        var _a = this.body.GetLinearVelocity(), x = _a.x, y = _a.y;
        return new this.box2d.Vec2(x, -y);
    };
    NormalBody.prototype.set_linear_velocity = function (x, y) {
        this.body.SetLinearVelocity(new this.box2d.Vec2(x, -y));
    };
    NormalBody.prototype.get_rotation = function () {
        return this.body.GetAngle();
    };
    NormalBody.prototype.set_rotation = function (rotation) {
        this.body.SetAngle(rotation);
        this.body.SetAwake(true);
    };
    NormalBody.prototype.get_position = function () {
        return this.body.GetPosition();
    };
    NormalBody.prototype.set_position = function (position) {
        this.body.SetPosition(position);
        this.body.SetAwake(true);
    };
    NormalBody.prototype.init = function (physics_pos, texture_id) {
        var fixture_list = this.body.GetFixtureList();
        while (fixture_list) {
            this.body.DestroyFixture(fixture_list);
            fixture_list = this.body.GetFixtureList();
        }
        this.body.SetPositionXY(physics_pos.x, physics_pos.y);
        this.body.SetAngle(this.actor.rotation);
        texture_id && this.create_fixture(texture_id);
    };
    NormalBody.prototype.destroy = function () {
        this.scene_world.world.DestroyBody(this.body);
    };
    NormalBody.prototype.on_tick = function () { };
    NormalBody.prototype.apply_force = function (f) {
        this.body.ApplyForceToCenter(f, true);
    };
    NormalBody.prototype.create_fixture = function (texture_id) {
        var _this = this;
        if (!this.body || !texture_id)
            return;
        var groups = this.data.get_texture_convex_groups(texture_id);
        var texture = this.data.get_texture(texture_id);
        if (!groups || !texture)
            return;
        groups.forEach(function (group) {
            var _a;
            var shape = new _this.box2d.PolygonShape();
            var vertices = [];
            group.forEach(function (p) {
                var origin_point = collision_opti_scaled_to_origin_point(p);
                vertices.push(new _this.box2d.Vec2(convert_pixel_to_meter(origin_point.x - texture.width / 2) * _this.actor.scale.x, convert_pixel_to_meter(origin_point.y - texture.height / 2) * _this.actor.scale.y));
            });
            shape.Set(vertices);
            _this.fixture_def.shape = shape;
            (_a = _this.body) === null || _a === void 0 ? void 0 : _a.CreateFixture(_this.fixture_def);
        });
    };
    NormalBody.prototype.set_physics_property = function (property, value) {
        var fixture_list = this.body.GetFixtureList();
        while (fixture_list) {
            switch (property) {
                case 0 /* DENSITY */:
                    fixture_list.SetDensity(value);
                    break;
                case 1 /* FRICTION */:
                    fixture_list.SetFriction(value);
                    break;
                case 2 /* RESTITUTION */:
                    fixture_list.SetRestitution(value);
                    break;
                default:
                    return;
            }
            fixture_list = fixture_list.m_next;
        }
    };
    NormalBody.prototype.refilter = function () {
        var fixture = this.body.GetFixtureList();
        while (fixture) {
            fixture.Refilter();
            fixture = fixture.m_next;
        }
    };
    NormalBody.prototype.get_dragged_body = function () {
        return this.body;
    };
    NormalBody.prototype.on_end_drag = function () { };
    return NormalBody;
}());
export { NormalBody };
//# sourceMappingURL=normal_body.js.map