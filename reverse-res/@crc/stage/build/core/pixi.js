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
/**
 * @fileoverview
 * 该文件为实现模块化引用pixi而存在。
 * 为了支持非WebGL环境下的渲染 ，Stage使用的是pixi.js-legacy（该版本相较于pixi.js提供了CanvasRenderer的切换作为WebGL的降级处理）。
 * 但pixi.js-legacy在处理模块引用时导入了pixi.js的所有模块(https://github.com/pixijs/pixijs/blob/dev/bundles/pixi.js-legacy/src/index.ts)，
 * 这其中很多是Stage没有使用到的，所以给Stage包增加了很多不必要的体积。
 * 这个文件负责引入和导出Stage中使用到的pixi模块，剔除不需要的模块，并处理了Renderer、CanvasRenderer、Loader和Application的插件注册。
 * 其他文件中如需使用到pixi相关模块，统一从该文件引入。
 */
import '@pixi/polyfill';
import * as utils from '@pixi/utils';
import { InteractionManager } from '@pixi/interaction';
import { Application } from '@pixi/app';
import { Renderer, BatchRenderer, FilterSystem, FilterState, } from '@pixi/core';
import { Extract } from '@pixi/extract';
import { Loader, AppLoaderPlugin } from '@pixi/loaders';
import { SpritesheetLoader } from '@pixi/spritesheet';
import { TilingSpriteRenderer } from '@pixi/sprite-tiling';
import { TickerPlugin } from '@pixi/ticker';
import { Point, Rectangle, Matrix } from '@pixi/math';
import '@pixi/mixin-cache-as-bitmap';
import '@pixi/mixin-get-child-by-name';
import '@pixi/mixin-get-global-position';
/**
 * 用于像素点的计算。
 * 是Point的子类，可以替代Point使用。
 * 在创建时，如果传入了x/y，会将对应数值转化为整数。
 */
var PixelPoint = /** @class */ (function (_super) {
    __extends(PixelPoint, _super);
    function PixelPoint(x, y) {
        return _super.call(this, x ? Math.floor(x) : x, y ? Math.floor(y) : y) || this;
    }
    PixelPoint.prototype.clone = function () {
        return new PixelPoint(this.x, this.y);
    };
    PixelPoint.prototype.set = function (x, y) {
        return _super.prototype.set.call(this, x ? Math.floor(x) : x, y ? Math.floor(y) : y);
    };
    return PixelPoint;
}(Point));
export { PixelPoint };
/**
 * CanvasRenderer插件
 */
import { CanvasRenderer } from '@pixi/canvas-renderer';
import { CanvasGraphicsRenderer } from '@pixi/canvas-graphics';
import { CanvasSpriteRenderer } from '@pixi/canvas-sprite';
import { CanvasExtract } from '@pixi/canvas-extract';
import '@pixi/canvas-sprite-tiling';
import '@pixi/canvas-display';
import '@pixi/canvas-text';
CanvasRenderer.registerPlugin('extract', CanvasExtract);
CanvasRenderer.registerPlugin('graphics', CanvasGraphicsRenderer);
CanvasRenderer.registerPlugin('interaction', InteractionManager);
CanvasRenderer.registerPlugin('sprite', CanvasSpriteRenderer);
/**
 * WebGLRenderer插件
 */
Renderer.registerPlugin('extract', Extract);
Renderer.registerPlugin('interaction', InteractionManager);
Renderer.registerPlugin('tilingSprite', TilingSpriteRenderer);
Renderer.registerPlugin('batch', BatchRenderer);
// Loader插件
Loader.registerPlugin(SpritesheetLoader);
// Application插件
Application.registerPlugin(TickerPlugin);
Application.registerPlugin(AppLoaderPlugin);
// 仅导出Stage中使用到的pixi模块
export * from '@pixi/constants';
export * from '@pixi/app';
export * from '@pixi/core';
export * from '@pixi/display';
export * from '@pixi/extract';
export * from '@pixi/graphics';
export * from '@pixi/loaders';
export * from '@pixi/interaction';
export * from '@pixi/math';
export * from '@pixi/sprite';
export * from '@pixi/spritesheet';
export * from '@pixi/sprite-animated';
export * from '@pixi/sprite-tiling';
export * from '@pixi/text';
export * from '@pixi/runner';
export * from '@pixi/settings';
export * from '@pixi/canvas-renderer';
export * from '@pixi/canvas-extract';
export * from '@pixi/canvas-graphics';
export * from '@pixi/canvas-sprite';
// pixi特效滤镜模块
export * from '@pixi/filter-color-matrix';
export * from '@pixi/filter-displacement';
export * from '@pixi/filter-drop-shadow';
export * from '@pixi/filter-pixelate';
export * from '@pixi/filter-twist';
export * from '@pixi/filter-ascii';
export * from './filters/soft';
export { utils };
var tempMatrix = new Matrix();
/**
 * Pushes a set of filters to be applied later to the system. This will redirect further rendering into an
 * input render-texture for the rest of the filtering pipeline.
 *
 * @param target - The target of the filter to render.
 * @param filters - The filters to apply.
 */
FilterSystem.prototype.push = function (target, filters) {
    var renderer = this.renderer;
    var filterStack = this.defaultFilterStack;
    var state = this.statePool.pop() || new FilterState();
    var renderTextureSystem = this.renderer.renderTexture;
    var resolution = filters[0].resolution;
    var padding = filters[0].padding;
    var autoFit = filters[0].autoFit;
    var legacy = filters[0].legacy;
    for (var i = 1; i < filters.length; i++) {
        var filter = filters[i];
        // lets use the lowest resolution..
        resolution = Math.min(resolution, filter.resolution);
        // figure out the padding required for filters
        /** Override 1 Start: Use maximum instead of sum of paddings **/
        padding = Math.max(padding, filter.padding);
        /** Override 1 End **/
        // only auto fit if all filters are autofit
        autoFit = autoFit && filter.autoFit;
        legacy = legacy || filter.legacy;
    }
    if (filterStack.length === 1) {
        this.defaultFilterStack[0].renderTexture = renderTextureSystem.current;
    }
    filterStack.push(state);
    state.resolution = resolution;
    state.legacy = legacy;
    state.target = target;
    state.sourceFrame.copyFrom(target.filterArea || target.getBounds(true));
    state.sourceFrame.pad(padding);
    if (autoFit) {
        /** Override 2 Start: Expand source frame **/
        var sourceFrameProjected = new Rectangle(renderTextureSystem.sourceFrame.x - renderTextureSystem.sourceFrame.width / 2, renderTextureSystem.sourceFrame.y - renderTextureSystem.sourceFrame.height / 2, renderTextureSystem.sourceFrame.width * 2, renderTextureSystem.sourceFrame.height * 2);
        /** Override 2 End **/
        // Project source frame into world space (if projection is applied)
        if (renderer.projection.transform) {
            this.transformAABB(tempMatrix.copyFrom(renderer.projection.transform).invert(), sourceFrameProjected);
        }
        state.sourceFrame.fit(sourceFrameProjected);
    }
    // Round sourceFrame in screen space based on render-texture.
    this.roundFrame(state.sourceFrame, renderTextureSystem.current ? renderTextureSystem.current.resolution : renderer.resolution, renderTextureSystem.sourceFrame, renderTextureSystem.destinationFrame, renderer.projection.transform);
    state.renderTexture = this.getOptimalFilterTexture(state.sourceFrame.width, state.sourceFrame.height, resolution);
    state.filters = filters;
    state.destinationFrame.width = state.renderTexture.width;
    state.destinationFrame.height = state.renderTexture.height;
    var destinationFrame = new Rectangle(0, 0, state.sourceFrame.width, state.sourceFrame.height);
    state.renderTexture.filterFrame = state.sourceFrame;
    state.bindingSourceFrame.copyFrom(renderTextureSystem.sourceFrame);
    state.bindingDestinationFrame.copyFrom(renderTextureSystem.destinationFrame);
    state.transform = renderer.projection.transform;
    renderer.projection.transform = null;
    renderTextureSystem.bind(state.renderTexture, state.sourceFrame, destinationFrame);
    renderer.framebuffer.clear(0, 0, 0, 0);
};
//# sourceMappingURL=pixi.js.map