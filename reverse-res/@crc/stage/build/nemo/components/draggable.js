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
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
import { Container, Graphics, Text, Sprite, SCALE_MODES, } from '../../core/pixi';
import { BaseDraggable } from '../../core/tool/draggable/model';
var ACTOR_NAME_TEXT_STYLE = {
    fontSize: '21px',
    lineHeight: 18,
    fontFamily: 'PingFangSC-Medium',
    fill: '#B14C00',
    fontWeight: '500',
};
var VARIABLE_NAME_TEXT_STYLE = {
    fontSize: '21px',
    lineHeight: 21,
    fontFamily: 'PingFangSC-Medium',
    fill: '#624026',
    fontWeight: '500',
};
var VALUE_TEXT_STYLE = {
    fontSize: '24px',
    lineHeight: 24,
    fontFamily: 'PingFangSC-Medium',
    fill: '#45372E',
    fontWeight: '500',
};
var TIME_TEXT_STYLE = {
    fontSize: '44px',
    lineHeight: 44,
    fontFamily: 'PingFangSC-Semibold',
    fill: '#43372E',
    fontWeight: '600',
};
var DraggableContainer = /** @class */ (function (_super) {
    __extends(DraggableContainer, _super);
    function DraggableContainer(source, app, events) {
        var _this = _super.call(this) || this;
        _this.cache = new Map();
        _this.app = app;
        _this.events = events;
        _this.source = source;
        _this.variable_list_container = new Container();
        _this.timer_container = new Container();
        _this.setParent(_this.app.get_app().stage);
        _this.addChildAt(_this.variable_list_container, 0);
        _this.addChildAt(_this.timer_container, 1);
        return _this;
    }
    DraggableContainer.prototype.load_variable = function (opt) {
        var new_variable = new ListOrVariable(opt.id, 'variable', opt.variable_name, this.variable_list_container, this.app, this.events, this.cache, this.source.cloud_public_icon, this.source.cloud_private_icon, opt.actor_name, opt.cloud_type);
        new_variable.set_value(opt.value);
        return new_variable;
    };
    DraggableContainer.prototype.load_list = function (opt) {
        return new ListOrVariable(opt.id, 'list', opt.list_name, this.variable_list_container, this.app, this.events, this.cache, this.source.cloud_public_icon, this.source.cloud_private_icon, opt.actor_name);
    };
    DraggableContainer.prototype.get_variable = function (id) {
        var e_1, _a;
        var variable = this.cache.get(id);
        if (variable) {
            return variable;
        }
        var variable_list_container_children = this.variable_list_container.children;
        try {
            for (var variable_list_container_children_1 = __values(variable_list_container_children), variable_list_container_children_1_1 = variable_list_container_children_1.next(); !variable_list_container_children_1_1.done; variable_list_container_children_1_1 = variable_list_container_children_1.next()) {
                var target = variable_list_container_children_1_1.value;
                if (this.is_variable(target) && target.id === id) {
                    this.cache.set(id, target);
                    return target;
                }
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (variable_list_container_children_1_1 && !variable_list_container_children_1_1.done && (_a = variable_list_container_children_1.return)) _a.call(variable_list_container_children_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
        return;
    };
    DraggableContainer.prototype.get_list = function (id) {
        var e_2, _a;
        var list = this.cache.get(id);
        if (list) {
            return list;
        }
        var variable_list_container_children = this.variable_list_container.children;
        try {
            for (var variable_list_container_children_2 = __values(variable_list_container_children), variable_list_container_children_2_1 = variable_list_container_children_2.next(); !variable_list_container_children_2_1.done; variable_list_container_children_2_1 = variable_list_container_children_2.next()) {
                var target = variable_list_container_children_2_1.value;
                if (this.is_list(target) && target.id === id) {
                    this.cache.set(id, target);
                    return target;
                }
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (variable_list_container_children_2_1 && !variable_list_container_children_2_1.done && (_a = variable_list_container_children_2.return)) _a.call(variable_list_container_children_2);
            }
            finally { if (e_2) throw e_2.error; }
        }
        return;
    };
    DraggableContainer.prototype.get_timer = function () {
        if (!this.timer) {
            this.timer = new Timer(this.timer_container, this.app, this.events, this.source.timer_bg);
            return this.timer;
        }
        return this.timer;
    };
    DraggableContainer.prototype.get_variable_ids = function () {
        var _this = this;
        var variable_ids = [];
        this.variable_list_container.children.forEach(function (cmpts) {
            if (_this.is_variable(cmpts)) {
                variable_ids.push(cmpts.id);
            }
        });
        return variable_ids;
    };
    DraggableContainer.prototype.get_list_ids = function () {
        var _this = this;
        var list_ids = [];
        this.variable_list_container.children.forEach(function (cmpts) {
            if (_this.is_list(cmpts)) {
                list_ids.push(cmpts.id);
            }
        });
        return list_ids;
    };
    DraggableContainer.prototype.get_variable_list_ids = function () {
        var _this = this;
        var variable_list_ids = [];
        this.variable_list_container.children.forEach(function (cmpts) {
            (_this.is_variable(cmpts) || _this.is_list(cmpts)) && variable_list_ids.push(cmpts.id);
        });
        return variable_list_ids;
    };
    DraggableContainer.prototype.destroy_all_variables_lists = function () {
        var _this = this;
        var children = this.variable_list_container.removeChildren();
        children.forEach(function (child) {
            if (_this.is_variable(child) || _this.is_list(child)) {
                child.destroy();
            }
        });
    };
    DraggableContainer.prototype.set_visible = function (visible) {
        this.visible = visible;
    };
    DraggableContainer.prototype.is_variable = function (obj) {
        return obj && obj.type === 'variable';
    };
    DraggableContainer.prototype.is_list = function (obj) {
        return obj && obj.type === 'list';
    };
    DraggableContainer.prototype.destroy = function () {
        _super.prototype.destroy.call(this, { children: true, texture: true });
    };
    return DraggableContainer;
}(Container));
export { DraggableContainer };
var ListOrVariable = /** @class */ (function (_super) {
    __extends(ListOrVariable, _super);
    function ListOrVariable(id, type, variable_name, parent, app, events, cache, public_icon, private_icon, actor_name, cloud_type) {
        var _this = _super.call(this, id, parent, app, events) || this;
        _this.pointer_down_time = 0;
        _this.CLOUD_ICON_SIZE = 24;
        _this.BG_HEIGHT = 54;
        _this.BG_RADIUS = 27;
        _this.VALUE_BG_HEIGHT = 42;
        _this.MIN_VALUE_BG_WIDTH = 69;
        _this.VALUE_BG_RADIUS = 23;
        _this.VALUE_TEXT_MARGIN = 12;
        _this.VARIABLE_NAME_TEXT_MARGIN = 18;
        _this.ACTOR_NAME_MARGIN_RIGHT = 6;
        _this.LIST_ICON_MARGIN_RIGHT = 12;
        _this.LIST_ICON_MARGIN_TOP = 21;
        _this.cloud_ICON_MARGIN_RIGHT = 6;
        _this.on_pointer_down = function () {
            _this.pointer_down_time = new Date().getTime();
        };
        _this.on_pointer_up = function () {
            if (_this.type === 'list' && (new Date().getTime() - _this.pointer_down_time < 300)) {
                _this.events.fire('list:click', { target_id: _this.id });
            }
        };
        _this.cache = cache;
        _this.type = type;
        _this.cloud_type = cloud_type;
        _this.background = new Sprite();
        _this.addChild(_this.background);
        _this.graphics = new Graphics();
        _this.variable_name = new Text('', VARIABLE_NAME_TEXT_STYLE);
        if (_this.cloud_type) {
            var private_icon_texture = _this.load_texture(private_icon);
            var public_icon_texture = _this.load_texture(public_icon);
            Promise.all([private_icon_texture, public_icon_texture])
                .then(function (_a) {
                var _b = __read(_a, 2), private_texture = _b[0], public_texture = _b[1];
                _this.cloud_icon = new Sprite();
                _this.cloud_icon.texture = _this.cloud_type === 'private' ? private_texture : public_texture;
                _this.cloud_icon.width = _this.CLOUD_ICON_SIZE;
                _this.cloud_icon.height = _this.CLOUD_ICON_SIZE;
                _this.background.addChildAt(_this.cloud_icon, 0);
                _this.resize();
                _this.app.render();
            }).catch(function (e) { console.warn(e); });
        }
        if (actor_name) {
            _this.actor_name = new Text('', ACTOR_NAME_TEXT_STYLE);
            _this.background.addChild(_this.actor_name);
            _this.actor_name.text = actor_name + " \u00B7";
        }
        _this.background.addChild(_this.variable_name);
        _this.variable_name.text = variable_name;
        switch (_this.type) {
            case 'variable':
                _this.value_sprite = new Sprite();
                _this.value_sprite.anchor.set(0.5);
                _this.value = new Text('', VALUE_TEXT_STYLE);
                _this.value.anchor.set(0.5);
                _this.background.addChild(_this.value_sprite);
                _this.value_sprite.addChild(_this.value);
                break;
            case 'list':
                // 画列表小三角icon
                _this.list_icon = new Graphics();
                _this.list_icon.beginFill(0x673F20);
                _this.list_icon.moveTo(0, 0);
                _this.list_icon.lineTo(10, 0);
                _this.list_icon.lineTo(5, 7.5);
                _this.list_icon.endFill();
                _this.background.addChild(_this.list_icon);
                break;
        }
        _this.resize();
        _this.add_listener('drag_end', function () {
            _this.events.fire('variables_and_lists:drag_end', {
                target_id: _this.id,
                data: {
                    position: {
                        x: _this.get_position().x,
                        y: _this.get_position().y,
                    },
                },
            });
        });
        _this.addListener('mousedown', _this.on_pointer_down);
        _this.addListener('mouseup', _this.on_pointer_up);
        _this.addListener('mouseupoutside', _this.on_pointer_up);
        _this.addListener('touchstart', _this.on_pointer_down);
        _this.addListener('touchend', _this.on_pointer_up);
        _this.addListener('touchendoutside', _this.on_pointer_up);
        return _this;
    }
    ListOrVariable.prototype.set_position_x = function (x) {
        this.position.set(x, this.position.y);
    };
    ListOrVariable.prototype.set_position_y = function (y) {
        this.position.set(this.position.x, -y);
    };
    ListOrVariable.prototype.set_actor_name = function (name) {
        if (!this.actor_name) {
            return;
        }
        var old_width = this.actor_name.width;
        this.actor_name.text = name + " \u00B7";
        if (old_width !== this.actor_name.width) {
            this.resize();
        }
    };
    ListOrVariable.prototype.set_variable_name = function (name) {
        var old_width = this.variable_name.width;
        this.variable_name.text = name;
        if (old_width !== this.variable_name.width) {
            this.resize();
        }
    };
    ListOrVariable.prototype.set_value = function (value) {
        if (!this.value) {
            return;
        }
        var old_width = this.value.width;
        this.value.text = value;
        var should_resize = old_width !== this.value.width &&
            (this.value.width + this.VALUE_TEXT_MARGIN * 2 > this.MIN_VALUE_BG_WIDTH || old_width + this.VALUE_TEXT_MARGIN * 2 > this.MIN_VALUE_BG_WIDTH);
        should_resize && this.resize();
    };
    ListOrVariable.prototype.get_position = function () {
        return {
            x: this.position.x,
            y: -this.position.y,
        };
    };
    ListOrVariable.prototype.get_actor_name = function () {
        if (!this.actor_name) {
            return;
        }
        // 需把变量名后缀 [ ·] 过滤掉
        return this.actor_name.text.substring(0, this.actor_name.text.length - 2);
    };
    ListOrVariable.prototype.get_variable_name = function () {
        return this.variable_name.text;
    };
    ListOrVariable.prototype.get_value = function () {
        if (!this.value) {
            return;
        }
        return this.value.text;
    };
    ListOrVariable.prototype.destroy = function () {
        this.cache.delete(this.id);
        _super.prototype.destroy.call(this, { children: true, texture: true });
    };
    /**
     * 重绘整个组件的背景，并且重置每个子组件所在的位置
     * 只需要在组件的宽度需要改变的时候调用
     * 此方法开销较大，调用需谨慎。一键半永久重绘会被我打
     */
    ListOrVariable.prototype.resize = function () {
        this.draw_value_bg();
        this.draw_bg();
        if (this.cloud_icon) {
            this.cloud_icon.position.set(this.VARIABLE_NAME_TEXT_MARGIN, this.BG_HEIGHT / 4);
        }
        // 云变量icon占位宽度，需考虑其宽度以及margin
        var cloud_icon_width = (this.cloud_icon && this.cloud_icon.width + this.cloud_ICON_MARGIN_RIGHT) || 0;
        if (this.actor_name) {
            this.actor_name.position.set(this.VARIABLE_NAME_TEXT_MARGIN + cloud_icon_width, this.BG_HEIGHT / 4);
        }
        // 角色名占位宽度，需考虑其宽度以及margin
        var actor_name_width = (this.actor_name && this.actor_name.width + this.ACTOR_NAME_MARGIN_RIGHT) || 0;
        this.variable_name.position.set(this.VARIABLE_NAME_TEXT_MARGIN + cloud_icon_width + actor_name_width, this.BG_HEIGHT / 4);
        if (this.value_sprite) {
            // value_sprite的(0, 0)点在其质心，因此y轴位置设为高度一半，x轴占位计算需考虑其宽度
            this.value_sprite.position.set(this.variable_name.position.x + this.variable_name.width + this.value_sprite.width / 2 + this.VALUE_TEXT_MARGIN, this.BG_HEIGHT / 2);
        }
        if (this.list_icon) {
            /**
             * list icon是列表带的小三角
             * value sprite是显示变量值的地方
             * 二者一定不共存，此处不需要考虑value sprite占位所带来的的影响
             */
            this.list_icon.position.set(this.variable_name.position.x + this.variable_name.width + this.LIST_ICON_MARGIN_RIGHT, this.LIST_ICON_MARGIN_TOP);
        }
    };
    ListOrVariable.prototype.draw_value_bg = function () {
        if (this.type === 'variable' && this.value_sprite && this.value) {
            var value_bg_width = Math.max(this.MIN_VALUE_BG_WIDTH, this.value.width + this.VALUE_TEXT_MARGIN * 2);
            this.graphics.clear();
            this.graphics.beginFill(0XFFFFFF);
            this.graphics.drawRoundedRect(0, 0, value_bg_width, this.VALUE_BG_HEIGHT, this.VALUE_BG_RADIUS);
            this.graphics.endFill();
            this.graphics.lineStyle(1.5, 0xF28926);
            this.graphics.drawRoundedRect(0, 0, value_bg_width, this.VALUE_BG_HEIGHT, this.VALUE_BG_RADIUS);
            this.graphics.endFill();
            this.value_sprite.texture.destroy(true);
            // TODO:待验证效果
            var value_bg = this.app.get_app().renderer.generateTexture(this.graphics, SCALE_MODES.NEAREST, 1);
            this.value_sprite.texture = value_bg;
        }
    };
    ListOrVariable.prototype.draw_bg = function () {
        var bg_color_shadow = this.type === 'variable' ? 0xF28926 : 0xFDC330;
        var bg_color = this.type === 'variable' ? 0XFF9834 : 0xFFDA3F;
        /**
         * 计算整个背景的宽度
         * 需考虑所有子组件的可能宽度以及其margin
         */
        var bg_width = this.variable_name.width + this.VARIABLE_NAME_TEXT_MARGIN * 2 +
            ((this.cloud_icon && this.cloud_icon.width + this.cloud_ICON_MARGIN_RIGHT) || 0) +
            ((this.actor_name && this.actor_name.width + this.ACTOR_NAME_MARGIN_RIGHT) || 0) +
            ((this.value_sprite && this.value_sprite.width) || 0) +
            ((this.list_icon && this.list_icon.width + this.LIST_ICON_MARGIN_RIGHT) || 0);
        this.graphics.clear();
        this.graphics.beginFill(0x000000, 0.2);
        this.graphics.drawRoundedRect(4, 4, bg_width, this.BG_HEIGHT, this.BG_RADIUS);
        this.graphics.endFill();
        this.graphics.beginFill(bg_color_shadow);
        this.graphics.drawRoundedRect(2, 2, bg_width, this.BG_HEIGHT, this.BG_RADIUS);
        this.graphics.endFill();
        this.graphics.beginFill(bg_color);
        this.graphics.drawRoundedRect(0, 0, bg_width, this.BG_HEIGHT, this.BG_RADIUS);
        this.graphics.endFill();
        this.background.texture.destroy(true);
        var texture = this.app.get_app().renderer.generateTexture(this.graphics, SCALE_MODES.NEAREST, 1);
        this.background.texture = texture;
    };
    return ListOrVariable;
}(BaseDraggable));
var Timer = /** @class */ (function (_super) {
    __extends(Timer, _super);
    function Timer(parent, app, events, timer_bg) {
        var _this = _super.call(this, 'timer', parent, app, events) || this;
        _this.background = new Sprite();
        _this.addChild(_this.background);
        _this.background.width = 164;
        _this.background.height = 108;
        _this.load_texture(timer_bg).then(function (timer_bg_texture) {
            _this.background.texture = timer_bg_texture;
            _this.app.render();
        }).catch(function (e) { console.warn(e); });
        _this.time = new Text('00:00', TIME_TEXT_STYLE);
        _this.time.anchor.set(0.5);
        _this.time.position.set(_this.background.width / 2, _this.background.height / 2 + 7);
        _this.visible = false;
        _this.addChild(_this.time);
        _this.add_listener('drag_end', function () {
            _this.events.fire('timer:drag_end', {
                position: {
                    x: _this.get_position().x,
                    y: _this.get_position().y,
                },
            });
        });
        return _this;
    }
    Timer.prototype.set_time = function (time) {
        this.time.text = time;
    };
    Timer.prototype.set_position_x = function (x) {
        this.position.set(x, this.position.y);
    };
    Timer.prototype.set_position_y = function (y) {
        this.position.set(this.position.x, -y);
    };
    Timer.prototype.get_position = function () {
        return {
            x: this.position.x,
            y: -this.position.y,
        };
    };
    return Timer;
}(BaseDraggable));
//# sourceMappingURL=draggable.js.map