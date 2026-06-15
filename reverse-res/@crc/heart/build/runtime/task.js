"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var _filter = require("lodash/filter");
var _includes = require("lodash/includes");
var _remove = require("lodash/remove");
var inversify_1 = require("inversify");
var di_symbols_1 = require("../di_symbols");
var H = require("../di_interfaces");
var TaskManagerImpl = /** @class */ (function () {
    function TaskManagerImpl(runtime_data, clock, u) {
        this.runtime_data = runtime_data;
        this.clock = clock;
        this.u = u;
        this.tasks = [];
        this.tasks_needing_dispose = [];
        this.interpreter_n_blockers_lookup = {};
    }
    TaskManagerImpl.prototype.clear = function () {
        this.tasks = [];
        this.tasks_needing_dispose = [];
        this.interpreter_n_blockers_lookup = {};
    };
    TaskManagerImpl.prototype.update_dispose = function () {
        var _this = this;
        // Dispose of finished tasks and tasks belonging to sprites/groups disposed above
        var removed_tasks = _remove(this.tasks, function (t) { return _includes(_this.tasks_needing_dispose, t.id); });
        for (var i = 0; i < removed_tasks.length; i++) {
            var t = removed_tasks[i];
            var interpreter_id = t.interpreter_id;
            if (t.blocking && this.interpreter_n_blockers_lookup[interpreter_id] != undefined) {
                this.interpreter_n_blockers_lookup[interpreter_id]--;
                if (this.interpreter_n_blockers_lookup[interpreter_id] < 1) {
                    delete (this.interpreter_n_blockers_lookup[interpreter_id]);
                }
            }
        }
        this.tasks_needing_dispose = [];
    };
    TaskManagerImpl.prototype.update = function () {
        if (this.runtime_data.is_stopped()) {
            this.clear();
            return;
        }
        for (var i = 0; i < this.tasks.length; i++) {
            this.task_update(this.tasks[i]);
        }
    };
    /**
     * Adds a task that will run for some amount of time.
     *
     * This function may ONLY be called via the RuntimeManager::add_task
     * function, otherwise RuntimeManager's cached value
     * `running_interpreter_was_blocked` becomes invalid, and interpreters may
     * misbehave.
     *
     * @param {ID} id An id that uniquely identifies the task
     * @param {Task} t A spec for the task to be started
     * @return {TaskHandle} A handle with a function that terminates the task
     */
    TaskManagerImpl.prototype.add_task = function (id, t) {
        var _this = this;
        var task = t;
        task.id = id;
        this.tasks.push(task);
        if (task.blocking) {
            var interpreter_id = t.interpreter_id;
            this.interpreter_n_blockers_lookup[interpreter_id] = this.interpreter_n_blockers_lookup[interpreter_id] || 0;
            this.interpreter_n_blockers_lookup[interpreter_id]++;
        }
        return {
            stop: function () { return _this.dispose_task(task.id); },
        };
    };
    TaskManagerImpl.prototype.is_blocking = function (interpreter_id) {
        return this.interpreter_n_blockers_lookup[interpreter_id] != undefined;
    };
    TaskManagerImpl.prototype.dispose_task = function (task_id) {
        this.tasks_needing_dispose.push(task_id);
    };
    TaskManagerImpl.prototype.dispose_tasks_given = function (match) {
        var dispose_tasks = _filter(this.tasks, match);
        var dispose_ids = [];
        for (var i = 0; i < dispose_tasks.length; i++) {
            dispose_ids.push(dispose_tasks[i].id);
        }
        this.tasks_needing_dispose = this.tasks_needing_dispose.concat(dispose_ids);
    };
    TaskManagerImpl.prototype.task_update = function (t) {
        var now = this.clock.now();
        if (t.start_tick == undefined || t.previous_tick == undefined) {
            // First tick
            t.start_tick = now;
            t.previous_tick = now;
            if (t.on_start) {
                t.on_start();
            }
            return;
        }
        var time_delta_ms = now - t.previous_tick;
        if (t.lifetime == undefined) {
            // Infinite tasks are handled here
            if (t.on_tick) {
                t.on_tick(time_delta_ms);
            }
            t.previous_tick = now;
            return;
        }
        var amount_done = (now - t.start_tick) / t.lifetime;
        if (t.lifetime <= now - t.start_tick) {
            // Last tick
            if (t.on_end) {
                t.on_end(time_delta_ms);
            }
            this.dispose_task(t.id);
            return;
        }
        // Intermediate ticks
        if (t.on_tick) {
            t.on_tick(time_delta_ms, amount_done);
        }
        t.previous_tick = now;
    };
    TaskManagerImpl = tslib_1.__decorate([
        inversify_1.injectable(),
        tslib_1.__param(0, inversify_1.inject(di_symbols_1.BINDING.RuntimeData)),
        tslib_1.__param(1, inversify_1.inject(di_symbols_1.BINDING.Clock)),
        tslib_1.__param(2, inversify_1.inject(di_symbols_1.BINDING.Util)),
        tslib_1.__metadata("design:paramtypes", [Object, Object, Object])
    ], TaskManagerImpl);
    return TaskManagerImpl;
}());
exports.TaskManagerImpl = TaskManagerImpl;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFzay5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ydW50aW1lL3Rhc2sudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsdUNBQTBDO0FBQzFDLDJDQUE4QztBQUM5Qyx1Q0FBMEM7QUFDMUMsdUNBQStDO0FBRS9DLDRDQUF3QztBQUN4QyxvQ0FBc0M7QUFRdEM7SUFPRSx5QkFDeUMsWUFBMEIsRUFDaEMsS0FBYSxFQUNkLENBQVE7UUFGRCxpQkFBWSxHQUFaLFlBQVksQ0FBYztRQUNoQyxVQUFLLEdBQUwsS0FBSyxDQUFRO1FBQ2QsTUFBQyxHQUFELENBQUMsQ0FBTztRQVJsQyxVQUFLLEdBQW1CLEVBQUUsQ0FBQztRQUMzQiwwQkFBcUIsR0FBUSxFQUFFLENBQUM7UUFFaEMsa0NBQTZCLEdBQW9DLEVBQUUsQ0FBQztJQU14RSxDQUFDO0lBRUUsK0JBQUssR0FBWjtRQUNFLElBQUksQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDO1FBQ2hCLElBQUksQ0FBQyxxQkFBcUIsR0FBRyxFQUFFLENBQUM7UUFDaEMsSUFBSSxDQUFDLDZCQUE2QixHQUFHLEVBQUUsQ0FBQztJQUMxQyxDQUFDO0lBRU0sd0NBQWMsR0FBckI7UUFBQSxpQkFpQkM7UUFoQkMsaUZBQWlGO1FBQ2pGLElBQU0sYUFBYSxHQUFHLE9BQU8sQ0FDM0IsSUFBSSxDQUFDLEtBQUssRUFDVixVQUFDLENBQUMsSUFBSyxPQUFBLFNBQVMsQ0FBQyxLQUFJLENBQUMscUJBQXFCLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUEzQyxDQUEyQyxDQUNuRCxDQUFDO1FBQ0YsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLGFBQWEsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDN0MsSUFBTSxDQUFDLEdBQUcsYUFBYSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQzNCLElBQU0sY0FBYyxHQUFHLENBQUMsQ0FBQyxjQUFjLENBQUM7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