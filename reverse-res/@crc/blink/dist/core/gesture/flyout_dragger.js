"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FlyoutDragger = void 0;
var tslib_1 = require("tslib");
var inversify_1 = require("inversify");
var workspace_dragger_1 = require("./workspace_dragger");
var FlyoutDragger = /** @class */ (function (_super) {
    (0, tslib_1.__extends)(FlyoutDragger, _super);
    function FlyoutDragger(flyout) {
        var _this = _super.call(this, flyout.get_workspace()) || this;
        /**
         * Whether the flyout scrolls horizontally.  If false, the flyout scrolls
         * vertically.
         */
        _this.horizontal_layout = false;
        _this.scrollbar_ = flyout.get_scrollbar();
        _this.horizontal_layout = flyout.is_horizontal();
        return _this;
    }
    /**
     * Move the appropriate scrollbar to drag the flyout.
     * Since flyouts only scroll in one direction at a time, this will discard one
     * of the calculated values.
     * x and y are in pixels.
     * @param x The new x position to move the scrollbar to.
     * @param y The new y position to move the scrollbar to.
     */
    FlyoutDragger.prototype.update_scroll = function (xy) {
        // Move the scrollbar and the flyout will scroll automatically.
        if (this.horizontal_layout) {
            this.scrollbar_.set(xy[0]);
        }
        else {
            this.scrollbar_.set(xy[1]);
        }
    };
    FlyoutDragger = (0, tslib_1.__decorate)([
        (0, inversify_1.injectable)()
    ], FlyoutDragger);
    return FlyoutDragger;
}(workspace_dragger_1.WorkspaceDragger));
exports.FlyoutDragger = FlyoutDragger;
