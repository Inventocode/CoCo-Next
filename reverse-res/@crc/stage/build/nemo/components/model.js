import { ActorEditor } from './actor_editor';
import { Grid } from './grid';
import { Pivot } from './pivot';
import { ActorDialogManager } from './actor_dialog';
import { PrintDialog, SelectDialog } from './stage_dialog';
import { DraggableContainer } from './draggable';
var Components = /** @class */ (function () {
    function Components(app, data, events) {
        this.app = app;
        this.data = data;
        this.events = events;
    }
    Components.prototype.init = function (components) {
        if (!this.actor_editor && components.editor) {
            this.actor_editor = new ActorEditor(components.editor, this.app, this.data, this.events);
        }
        if (!this.grid && components.grid) {
            this.grid = new Grid(components.grid, this.app, this.data, this.events);
        }
        if (!this.pivot && components.pivot) {
            this.pivot = new Pivot(this.app, this.data, this.events);
        }
        if (!this.actor_dialog_manager && components.actor_dialog_manager) {
            this.actor_dialog_manager = new ActorDialogManager(this.app, this.data);
        }
        if (!this.draggable_container && components.draggable_container) {
            this.draggable_container = new DraggableContainer(components.draggable_container, this.app, this.events);
        }
        if (!this.print_dialog && components.print_dialog) {
            this.print_dialog = new PrintDialog(components.print_dialog, this.app, this.data, this.events);
        }
        if (!this.select_dialog && components.select_dialog) {
            this.select_dialog = new SelectDialog(components.select_dialog, this.app, this.data, this.events);
        }
    };
    ;
    Components.prototype.destroy = function (components) {
        if (this.actor_editor && components.editor) {
            this.actor_editor.destroy();
            this.actor_editor = undefined;
        }
        if (this.grid && components.grid) {
            this.grid.destroy();
            this.grid = undefined;
        }
        if (this.pivot && components.pivot) {
            this.pivot.destroy();
            this.pivot = undefined;
        }
        if (this.actor_dialog_manager && components.actor_dialog_manager) {
            this.actor_dialog_manager.destroy();
            this.actor_dialog_manager = undefined;
        }
        if (this.draggable_container && components.draggable_container) {
            this.draggable_container.destroy();
            this.draggable_container = undefined;
        }
        if (this.print_dialog && components.print_dialog) {
            this.print_dialog.destroy();
            this.print_dialog = undefined;
        }
        if (this.select_dialog && components.select_dialog) {
            this.select_dialog.destroy();
            this.select_dialog = undefined;
        }
    };
    Components.prototype.get_actor_editor = function () {
        return this.actor_editor;
    };
    Components.prototype.get_grid = function () {
        return this.grid;
    };
    Components.prototype.get_pivot = function () {
        return this.pivot;
    };
    Components.prototype.get_actor_dialog_manager = function () {
        return this.actor_dialog_manager;
    };
    Components.prototype.get_draggable_container = function () {
        return this.draggable_container;
    };
    Components.prototype.get_print_dialog = function () {
        return this.print_dialog;
    };
    Components.prototype.get_select_dialog = function () {
        return this.select_dialog;
    };
    return Components;
}());
export { Components };
//# sourceMappingURL=model.js.map