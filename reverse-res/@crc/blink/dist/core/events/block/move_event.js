"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MoveEvent = void 0;
var tslib_1 = require("tslib");
var gl_matrix_1 = require("@kitten-team/gl-matrix");
var inversify_1 = require("inversify");
var interfaces_1 = require("../../interfaces");
var base_1 = require("../../utils/base");
var block_event_1 = require("./block_event");
var MoveEvent = /** @class */ (function (_super) {
    (0, tslib_1.__extends)(MoveEvent, _super);
    function MoveEvent(options) {
        var _this = _super.call(this, options.block) || this;
        _this.type = interfaces_1.BlockEventType.MOVE;
        var location = _this._current_location();
        _this.old_parent_id = location.parent_id;
        _this.old_input_name = location.input_name;
        _this.old_coordinate = location.coordinate;
        return _this;
    }
    MoveEvent.prototype.get_new_loc = function () {
        return {
            parent_id: this.new_parent_id,
            input_name: this.new_input_name,
            coordinate: this.new_coordinate,
        };
    };
    /**
     * Returns the parentId and input if the block is connected,
     * or the XY location if disconnected.
     */
    MoveEvent.prototype._current_location = function () {
        var workspace = this.workspace_db.get(this._workspace_id);
        if (workspace == undefined) {
            console.error('Event has no workspace.');
            return {};
        }
        var block = workspace.get_element_from_db(this._block_id);
        if (block == undefined) {
            console.error('Event has no block.');
            return {};
        }
        var location = {};
        if ((0, base_1.is_block_svg)(block)) {
            var parent_1 = block.get_parent();
            if (parent_1) { // 拼接事件
                location.parent_id = parent_1.id;
                var input = parent_1.get_input_with_block(block);
                if (input) {
                    location.input_name = input.name;
                }
            }
            else { // 移动事件
                location.coordinate = block.get_relative_to_surface_xy();
            }
        }
        else if ((0, base_1.is_workspace_comment)(block)) {
            location.coordinate = (0, base_1.clone_deep)(block.get_relative_position());
        }
        return location;
    };
    MoveEvent.prototype.record_new = function () {
        var location = this._current_location();
        this.new_parent_id = location.parent_id;
        this.new_input_name = location.input_name;
        this.new_coordinate = location.coordinate;
    };
    MoveEvent.prototype.is_null = function () {
        return this.old_parent_id === this.new_parent_id &&
            this.old_input_name === this.new_input_name &&
            ((this.old_coordinate == undefined &&
                this.new_coordinate == undefined) ||
                (this.old_coordinate != undefined &&
                    this.new_coordinate != undefined &&
                    gl_matrix_1.vec2.equals(this.old_coordinate, this.new_coordinate)));
    };
    MoveEvent.prototype.run = function (is_forward) {
        var _this = this;
        var workspace = this._get_event_workspace();
        var block = workspace.get_element_from_db(this._block_id);
        if (block == undefined) {
            // shadow block需要记录move事件以在撤销时连接回原积木。
            // 但重做时，其他block的连接会自动导致shadow block被删除，因此在重做到shadow的move事件时，
            // 可能存在block为空的情况。只需要在撤销时给出warning。
            if (!is_forward) {
                console.warn("Can't move non-existent block: " + this._block_id);
            }
            return;
        }
        /**
         * 移动事件的撤销/重做
         */
        var handle_move = function () {
            var _a;
            var coordinate = is_forward ? (0, base_1.clone_deep)(_this.new_coordinate) : (0, base_1.clone_deep)(_this.old_coordinate);
            if (coordinate) {
                var xy = block.get_relative_to_surface_xy();
                if ((0, base_1.is_workspace_comment)(block)) {
                    // 积木注释的移动事件中记录的是相对于积木的位置，在移动前需要进行转换
                    var parent_position = (_a = block.get_parent_block()) === null || _a === void 0 ? void 0 : _a.get_relative_to_surface_xy();
                    if (parent_position) {
                        gl_matrix_1.vec2.add(coordinate, parent_position, coordinate);
                    }
                }
                block.move_by(gl_matrix_1.vec2.sub(xy, coordinate, xy));
            }
        };
        /**
         * 拼接事件的撤销/重做
         *
         * 只有block有拼接事件，且拼接事件的主体积木（即事件中被记录的积木） **一定是子积木**
         * 拼接事件的记录可查看 rendered_connection
         */
        var handle_connection_change = function () {
            if (!(0, base_1.is_block_svg)(block)) {
                return;
            }
            var parent_id = is_forward ? _this.new_parent_id : _this.old_parent_id;
            // 没有目标parent_id, 即断开连接
            if (!parent_id) {
                block.unplug();
                return;
            }
            // 存在目标parent_id，需要重新连接回该积木的指定位置
            // 查找相关位置
            var parent_block = workspace.get_block_by_id(parent_id);
            if (!parent_block) {
                throw Error("Trying to re-connect to non-existent block. Event: " + _this);
            }
            var target_connection;
            var block_connection = block.output_connection || block.previous_connection;
            if (!block_connection) {
                throw Error('没有对外连接记录个的连接事件');
            }
            var input_name = is_forward ? _this.new_input_name : _this.old_input_name;
            if (input_name) {
                // output connection / 头积木的 DO/STACK 都会走这里
                var target_input = parent_block.get_input(input_name);
                target_connection = target_input && target_input.connection;
            }
            else if (block_connection.type === interfaces_1.CONNECTION_TYPE.PREVIOUS_STATEMENT) {
                // 旧有逻辑，应该是一种容错处理，next_connection不一定有姓名
                target_connection = parent_block.next_connection;
            }
            if (target_connection != undefined) {
                // 先手动把需要重新连接的积木从当前stack中断开，避免connect时触发额外操作引发bug。
                // ref 【【撤销/重做】重复撤销/重做操作，积木区重复执行积木出现异常】https://www.tapd.cn/61080891/bugtrace/bugs/view?bug_id=1161080891001032103
                block.unplug();
                block_connection.connect(target_connection, true);
                return;
            }
            // 这个dispose的操作看起来是针对shadow的
            // TODO: 暂时没发现会有走到这里的情况，先留着，直到下个版本没有发现报错就删除
            console.warn("Can't connect to non-existent input: " + input_name + ", so dispose this blockConnection");
            if (block_connection) {
                _this.events.disable();
                block_connection.source_block.dispose();
                _this.events.enable();
            }
        };
        // 记录时移动和拼接事件被分开记录，但执行时 event.filter 会将相邻的同组同目标 move事件进行合并，
        // 因此，移动事件的判断结束后不能直接返回，还需要继续检查是否需要执行拼接事件。
        // redo/undo期间需要保持事件的触发（只是不做记录），以保证某些extension的正确运行。
        // （比如在某些特定连接后置灰积木）
        handle_connection_change();
        handle_move();
    };
    MoveEvent.prototype.set_old_coord = function (coord) {
        this.old_coordinate = coord;
    };
    MoveEvent.prototype.get_old_loc = function () {
        return {
            parent_id: this.old_parent_id,
            input_name: this.old_input_name,
            coordinate: this.old_coordinate,
        };
    };
    MoveEvent.prototype.serialize = function () {
        var old_coordinate = this.old_coordinate ?
            [this.old_coordinate[0], this.old_coordinate[1]] : undefined;
        var new_coordinate = this.new_coordinate ?
            [this.new_coordinate[0], this.new_coordinate[1]] : undefined;
        return {
            id: this._block_id,
            group: this._group,
            old_parent_id: this.old_parent_id,
            old_input_name: this.old_input_name,
            old_coordinate: old_coordinate,
            new_parent_id: this.new_parent_id,
            new_input_name: this.new_input_name,
            new_coordinate: new_coordinate,
        };
    };
    MoveEvent.prototype.deserialize = function (info) {
        this._block_id = info.id;
        this.old_parent_id = info.old_parent_id;
        this.old_input_name = info.old_input_name;
        this.old_coordinate = info.old_coordinate
            && gl_matrix_1.vec2.fromValues(info.old_coordinate[0], info.old_coordinate[1]);
        this.new_parent_id = info.new_parent_id;
        this.new_input_name = info.new_input_name;
        this.new_coordinate = info.new_coordinate
            && gl_matrix_1.vec2.fromValues(info.new_coordinate[0], info.new_coordinate[1]);
    };
    MoveEvent.prototype.update_new_loc = function (new_loc) {
        this.new_parent_id = new_loc.parent_id;
        this.new_input_name = new_loc.input_name;
        this.new_coordinate = new_loc.coordinate;
    };
    MoveEvent = (0, tslib_1.__decorate)([
        (0, inversify_1.injectable)()
    ], MoveEvent);
    return MoveEvent;
}(block_event_1.BlockEvent));
exports.MoveEvent = MoveEvent;
