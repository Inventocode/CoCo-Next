"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DragArea = exports.BlockEventType = void 0;
var BlockEventType;
(function (BlockEventType) {
    /**
     * Name of event that creates a block. Will be deprecated for BLOCK_CREATE.
     */
    BlockEventType["CREATE"] = "create";
    /**
     * Name of event that deletes a block. Will be deprecated for BLOCK_DELETE.
     */
    BlockEventType["DELETE"] = "delete";
    /**
     * Name of event that changes a block. Will be deprecated for BLOCK_CHANGE.
     */
    BlockEventType["CHANGE"] = "change";
    /**
     * Name of event that moves a block. Will be deprecated for BLOCK_MOVE.
     */
    BlockEventType["MOVE"] = "move";
    /**
     * Name of event that drags a block outside of or into the blocks workspace
     */
    BlockEventType["DRAG_AREA_CHANGE"] = "drag_area_change";
    /**
     * Name of event that ends a block drag
     */
    BlockEventType["END_DRAG"] = "end_drag";
    /**
     * Name of event that starts a block drag
     */
    BlockEventType["START_DRAG"] = "start_drag";
    /**
     * Name of event that records a UI change.
     */
    BlockEventType["UI"] = "ui";
    /**
     * Name of event that records a UI change.
     */
    BlockEventType["CONTEXT_MENU_OPTION"] = "context_menu_option";
})(BlockEventType = exports.BlockEventType || (exports.BlockEventType = {}));
var DragArea;
(function (DragArea) {
    /**
     * Any area inside which block would be deleted when drag end in.
     */
    DragArea["DELETE_AREA"] = "delete_area";
    /**
     * Blocks area, includes workspace, flyout, toolbox **and any other delete area**.
     */
    DragArea["INJECTION_DIV"] = "injection_div";
    /**
     * Rectangle area of workspace.
     */
    DragArea["WORKSPACE"] = "workspace";
})(DragArea = exports.DragArea || (exports.DragArea = {}));
