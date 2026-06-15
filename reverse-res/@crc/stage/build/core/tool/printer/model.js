var PrinterManager = /** @class */ (function () {
    function PrinterManager(app) {
        var _this = this;
        this.is_running = false;
        this.tasks = [];
        this.on_tick = function () {
            if (!_this.cur_task) {
                return;
            }
            if (_this.cur_task.printer.text.length >= _this.cur_task.content.length) {
                _this.stop();
                return;
            }
            var text = _this.cur_task.content.substring(0, Math.min(Math.ceil(_this.index), _this.cur_task.content.length));
            _this.cur_task.printer.text = text;
            // 打字速度，继承theatre原版规定速度：每一帧增加ticker.elapsedMS / 50
            _this.index += _this.app.get_app().ticker.elapsedMS / 50;
            _this.cur_task.on_update && _this.cur_task.on_update();
        };
        this.app = app;
        this.index = 1;
    }
    PrinterManager.prototype.add_task = function (task) {
        if (!this.is_running) {
            this.cur_task = task;
            this.execute();
            return;
        }
        this.tasks.push(task);
    };
    PrinterManager.prototype.release = function () {
        this.is_running = false;
        this.cur_task = this.tasks.shift();
        if (!this.cur_task) {
            return;
        }
        this.execute();
    };
    PrinterManager.prototype.clear = function () {
        this.tasks = [];
        this.cur_task = undefined;
        this.is_running = false;
    };
    PrinterManager.prototype.execute = function () {
        this.is_running = true;
        this.index = 1;
        if (!this.cur_task) {
            return;
        }
        this.app.get_app().ticker.add(this.on_tick);
        this.cur_task.on_start && this.cur_task.on_start();
    };
    PrinterManager.prototype.stop = function () {
        if (!this.cur_task) {
            return;
        }
        this.app.get_app().ticker.remove(this.on_tick);
        this.cur_task.on_complete && this.cur_task.on_complete();
    };
    PrinterManager.prototype.finish = function () {
        if (!this.cur_task) {
            return;
        }
        this.cur_task.printer.text = this.cur_task.content;
        this.stop();
    };
    return PrinterManager;
}());
export { PrinterManager };
//# sourceMappingURL=model.js.map