declare module "*.avif" {
  const src: string
  export default src
}

declare module "*.bmp" {
  const src: string
  export default src
}

declare module "*.gif" {
  const src: string
  export default src
}

declare module "*.jpg" {
  const src: string
  export default src
}

declare module "*.jpeg" {
  const src: string
  export default src
}

declare module "*.png" {
  const src: string
  export default src
}

declare module "*.webp" {
  const src: string
  export default src
}

declare module "*.text" {
  const content: string
  export default content
}

declare module "*.md" {
  const content: string
  export default content
}

declare module "@dragdroptouch/drag-drop-touch" {

  type DragDropTouchConfiguration = {
    // A flag that determines whether to allow scrolling
    // when a drag reaches the edges of the screen.
    allowDragScroll: boolean;

    // The number of milliseconds we'll wait before we
    // trigger a context menu event on long press.
    contextMenuDelayMS: number;

    // How see-through should the "drag placeholder",
    // that's attached to the cursor while dragging, be?
    dragImageOpacity: number;

    // The size of the "hot region" at the edge of the
    // screen on which scrolling will be allowed, if
    // the allowDragScroll flag is true (the default).
    dragScrollPercentage: number;

    // The number of pixels to scroll if a drag event
    // occurs within a scrolling hot region.
    dragScrollSpeed: number;

    // How much do we need to touchmove before the code
    // switches to drag mode rather than click mode?
    dragThresholdPixels: number;

    // The flag that tells us whether a long-press should
    // count as a user signal to "pick up an item" for
    // drag and drop purposes.
    isPressHoldMode: boolean;

    // A flag that determines whether the code should ignore
    // the navigator.maxTouchPoints value, which normally
    // tells us whether to expect touch events or not.
    forceListen: boolean;

    // The number of milliseconds we'll wait before we
    // consider an active press to be a "long press".
    pressHoldDelayMS: number;

    // The number of pixels we allow a touch event to
    // drift over the course of a long press start.
    pressHoldMargin: number;

    // The drift in pixels that determines whether a
    // long press starts a long press, or a touch-drag.
    pressHoldThresholdPixels: number;
  };

  export function enableDragDropTouch(
    dragRoot?: Document | Element,
    dropRoot?: Document | Element,
    options?: Partial<DragDropTouchConfiguration>
  ): void
}

declare module "@babel/preset-react" {
  import { PluginItem } from "@babel/core"
  var index: PluginItem
  export default index
}
