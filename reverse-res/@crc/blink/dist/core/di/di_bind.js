"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bind_di_modules = void 0;
// events
var block_1 = require("../events/block");
var events_1 = require("../events");
// flyout
var flyout_button_1 = require("../flyout/flyout_button");
var flyout_vertical_1 = require("../flyout/flyout_vertical");
// gesture
var block_dragger_1 = require("../gesture/block_dragger");
var flyout_dragger_1 = require("../gesture/flyout_dragger");
var gesture_1 = require("../gesture/gesture");
var workspace_comment_dragger_1 = require("../gesture/workspace_comment_dragger");
var workspace_dragger_1 = require("../gesture/workspace_dragger");
// singletons
var blink_1 = require("../singletons/blink");
var block_animations_1 = require("../singletons/block_animations");
var context_menu_1 = require("../singletons/context_menu");
var css_1 = require("../singletons/css");
var dragged_connection_manager_1 = require("../singletons/dragged_connection_manager");
var insertion_marker_manager_1 = require("../singletons/insertion_marker_manager");
var events_2 = require("../singletons/events");
var extensions_1 = require("../singletons/extensions");
var json_1 = require("../singletons/json");
var registry_1 = require("../singletons/registry");
var runtime_data_1 = require("../singletons/runtime_data");
var theme_1 = require("../singletons/theme");
var tooltip_1 = require("../singletons/tooltip");
var touch_manager_1 = require("../singletons/touch_manager");
var utils_1 = require("../singletons/utils");
var widgetdiv_1 = require("../singletons/widgetdiv");
var workspace_db_1 = require("../singletons/workspace_db");
var xml_1 = require("../singletons/xml");
var slider_controller_1 = require("../singletons/controller/slider_controller");
var angle_controller_1 = require("../singletons/controller/angle_controller");
var workspace_comment_simplified_bubble_1 = require("../singletons/workspace_comment_simplified_bubble");
var color_controller_1 = require("../singletons/controller/color_controller");
// toolbox
var toolbox_1 = require("../toolbox");
// workspace
var block_drag_surface_1 = require("../workspace/block_drag_surface");
var connection_db_1 = require("../workspace/connection_db");
var grid_1 = require("../workspace/grid");
var workspace_audio_1 = require("../workspace/workspace_audio");
var workspace_drag_surface_svg_1 = require("../workspace/workspace_drag_surface_svg");
var workspace_svg_1 = require("../workspace/workspace_svg");
// workspace element
var workspace_element_1 = require("../workspace_element/workspace_element");
// workspace element - block - input - fields
var field_button_1 = require("../workspace_element/block/input/fields/field_button");
var field_colour_1 = require("../workspace_element/block/input/fields/field_colour");
var field_dropdown_1 = require("../workspace_element/block/input/fields/field_dropdown");
var field_icon_1 = require("../workspace_element/block/input/fields/field_icon");
var field_image_1 = require("../workspace_element/block/input/fields/field_image");
var field_label_serializable_1 = require("../workspace_element/block/input/fields/field_label_serializable");
var field_label_1 = require("../workspace_element/block/input/fields/field_label");
var field_multiline_input_1 = require("../workspace_element/block/input/fields/field_multiline_input");
var field_mutation_1 = require("../workspace_element/block/input/fields/field_mutation");
var field_number_1 = require("../workspace_element/block/input/fields/field_number");
var field_textdropdown_1 = require("../workspace_element/block/input/fields/field_textdropdown");
var field_textinput_1 = require("../workspace_element/block/input/fields/field_textinput");
var field_default_value_1 = require("../workspace_element/block/input/fields/field_default_value");
// workspace element - block - input
var input_1 = require("../workspace_element/block/input/input");
// workspace element - block
var block_render_svg_1 = require("../workspace_element/block/renderers/block_render_svg");
var block_group_1 = require("../workspace_element/block/block_group");
var block_svg_1 = require("../workspace_element/block/block_svg");
var rendered_connection_1 = require("../workspace_element/block/rendered_connection");
//  workspace element - comment
var workspace_comment_1 = require("../workspace_element/workspace_comment/workspace_comment");
var workspace_comment_simplified_1 = require("../workspace_element/workspace_comment/workspace_comment_simplified");
// 不太好分类所以散落在外面的方法们
var options_1 = require("../options");
var scrollbar_1 = require("../scrollbar");
var css_temp_1 = require("../styles/css.temp");
var messages_1 = require("../messages");
var base_1 = require("../utils/base");
var di_symbols_1 = require("./di_symbols");
function bind_di_modules(cont) {
    // events
    cont.bind(di_symbols_1.BINDING.ChangeEvent).toFunction(function (k, o) {
        var is_valid_o = function (o) { return o.block instanceof workspace_element_1.WorkspaceElement; };
        if (!is_valid_o(o) || typeof k !== 'string') {
            throw new Error("\n        Trying to create invalid change event with event " + k + " and param " + o + ".\n        It may caused by wrong custom change event subtype registry.\n        Note that options of any change event should include [block], [old_value] and [new_value].\n        Check https://codemao.yuque.com/milktea/blink/zy9tlg for more information.\n      ");
        }
        return new block_1.ChangeEvent(k, o);
    });
    cont.bind(di_symbols_1.BINDING.CreateEvent).toFunction(function (o) { return new block_1.CreateEvent(o); });
    cont.bind(di_symbols_1.BINDING.DeleteEvent).toFunction(function (o) { return new block_1.DeleteEvent(o); });
    cont.bind(di_symbols_1.BINDING.DragAreaChangeEvent)
        .toFunction(function (o) { return new block_1.DragAreaChangeEvent(o); });
    cont.bind(di_symbols_1.BINDING.EndDragEvent).toFunction(function (o) { return new block_1.EndDragEvent(o); });
    cont.bind(di_symbols_1.BINDING.MoveEvent).toFunction(function (o) { return new block_1.MoveEvent(o); });
    cont.bind(di_symbols_1.BINDING.StartDragEvent).toFunction(function (o) { return new block_1.StartDragEvent(o); });
    cont.bind(di_symbols_1.BINDING.ContextMenuOptionEvent)
        .toFunction(function (o) { return new events_1.ContextMenuOptionEvent(o); });
    cont.bind(di_symbols_1.BINDING.GroupEvent).toFunction(function (o) { return new events_1.GroupEvent(o); });
    cont.bind(di_symbols_1.BINDING.UIEvent).toFunction(function (o) { return new events_1.UIEvent(o); });
    // flyout
    cont.bind(di_symbols_1.BINDING.FlyoutButton).toFunction(function (o) { return new flyout_button_1.FlyoutButton(o); });
    cont.bind(di_symbols_1.BINDING.VerticalFlyout).toFunction(function (o) { return new flyout_vertical_1.VerticalFlyout(o); });
    // gesture
    cont.bind(di_symbols_1.BINDING.WorkspaceElementDragger).toFunction(function (o) {
        if ((0, base_1.is_block_svg)(o.target)) {
            return new block_dragger_1.BlockDragger({ target: o.target, workspace: o.workspace });
        }
        if ((0, base_1.is_workspace_comment)(o.target)) {
            return new workspace_comment_dragger_1.WorkspaceCommentDragger({ target: o.target, workspace: o.workspace });
        }
        throw Error('Trying to drag invalid element');
    });
    cont.bind(di_symbols_1.BINDING.WorkspaceDragger).toFunction(function (target) {
        if ((0, base_1.is_workspace)(target)) {
            return new workspace_dragger_1.WorkspaceDragger(target);
        }
        return new flyout_dragger_1.FlyoutDragger(target);
    });
    cont.bind(di_symbols_1.BINDING.Gesture).toFunction(function (o) { return new gesture_1.Gesture(o); });
    // singletons 单例，全局唯一，可以直接从container中取到实例。
    // 一般以下划线+小写格式命名，Blink这个名字是技术负债，不敢动。
    // 下面绑定过程以字母顺序排序，对应 interfaces/singletons中的文件顺序。
    cont.bind(di_symbols_1.BINDING.Blink).to(blink_1.Blink).inSingletonScope();
    cont.bind(di_symbols_1.BINDING.block_animations).to(block_animations_1.BlockAnimations).inSingletonScope();
    cont.bind(di_symbols_1.BINDING.context_menu).to(context_menu_1.ContextMenu).inSingletonScope();
    cont.bind(di_symbols_1.BINDING.css).to(css_1.Css).inSingletonScope();
    cont.bind(di_symbols_1.BINDING.dragged_connection_manager).to(dragged_connection_manager_1.DraggedConnectionManager).inSingletonScope();
    cont.bind(di_symbols_1.BINDING.insertion_marker_manager).to(insertion_marker_manager_1.InsertionMarkerManager).inSingletonScope();
    cont.bind(di_symbols_1.BINDING.events).to(events_2.Events).inSingletonScope();
    cont.bind(di_symbols_1.BINDING.extensions).to(extensions_1.Extensions).inSingletonScope();
    cont.bind(di_symbols_1.BINDING.json).to(json_1.Json).inSingletonScope();
    cont.bind(di_symbols_1.BINDING.registry).to(registry_1.Registry).inSingletonScope();
    cont.bind(di_symbols_1.BINDING.runtime_data).to(runtime_data_1.RuntimeData).inSingletonScope();
    cont.bind(di_symbols_1.BINDING.theme).to(theme_1.Theme).inSingletonScope();
    cont.bind(di_symbols_1.BINDING.tooltip).to(tooltip_1.Tooltip).inSingletonScope();
    cont.bind(di_symbols_1.BINDING.touch_manager).to(touch_manager_1.TouchManager).inSingletonScope();
    cont.bind(di_symbols_1.BINDING.utils).to(utils_1.Utils).inSingletonScope();
    cont.bind(di_symbols_1.BINDING.widget_div).to(widgetdiv_1.WidgetDiv).inSingletonScope();
    cont.bind(di_symbols_1.BINDING.workspace_db).to(workspace_db_1.WorkspaceDB).inSingletonScope();
    cont.bind(di_symbols_1.BINDING.xml).to(xml_1.Xml).inSingletonScope();
    cont.bind(di_symbols_1.BINDING.slider_controller).to(slider_controller_1.SliderController).inSingletonScope();
    cont.bind(di_symbols_1.BINDING.angle_controller).to(angle_controller_1.AngleController).inSingletonScope();
    cont.bind(di_symbols_1.BINDING.color_controller).to(color_controller_1.ColorController).inSingletonScope();
    // toolbox
    cont.bind(di_symbols_1.BINDING.Toolbox).toFunction(function (o) { return new toolbox_1.Toolbox(o); });
    // TODO Treenode?
    // workspace
    cont.bind(di_symbols_1.BINDING.BlockDragSurfaceSvg).toFunction(function (cont) { return new block_drag_surface_1.BlockDragSurfaceSvg(cont); });
    cont.bind(di_symbols_1.BINDING.ConnectionDB).toFunction(function () { return new connection_db_1.ConnectionDB(); });
    cont.bind(di_symbols_1.BINDING.Grid).toFunction(function (o) { return new grid_1.Grid(o); });
    cont.bind(di_symbols_1.BINDING.WorkspaceAudio).toFunction(function (ws) { return new workspace_audio_1.WorkspaceAudio(ws); });
    cont.bind(di_symbols_1.BINDING.WorkspaceDragSurfaceSvg).toFunction(function (cont, ref) { return new workspace_drag_surface_svg_1.WorkspaceDragSurfaceSvg(cont, ref); });
    cont.bind(di_symbols_1.BINDING.WorkspaceSvg).toFunction(function (options, opt_block_drag_surface, opt_ws_drag_surface, opt_injection_div) { return new workspace_svg_1.WorkspaceSvg(options, opt_block_drag_surface, opt_ws_drag_surface, opt_injection_div); });
    // workspace element
    // block
    // fields
    cont.bind(di_symbols_1.BINDING.FieldButton).toFunction(function (o) { return new field_button_1.FieldButton(o); });
    cont.bind(di_symbols_1.BINDING.FieldColour).toFunction(function (o) { return new field_colour_1.FieldColour(o); });
    cont.bind(di_symbols_1.BINDING.FieldDropdown).toFunction(function (o) { return new field_dropdown_1.FieldDropdown(o); });
    cont.bind(di_symbols_1.BINDING.FieldIcon).toFunction(function (o) { return new field_icon_1.FieldIcon(o); });
    cont.bind(di_symbols_1.BINDING.FieldImage).toFunction(function (o) { return new field_image_1.FieldImage(o); });
    cont.bind(di_symbols_1.BINDING.FieldLabel).toFunction(function (o) { return new field_label_1.FieldLabel(o); });
    cont.bind(di_symbols_1.BINDING.FieldLabelSerializable).toFunction(function (o) { return new field_label_serializable_1.FieldLabelSerializable(o); });
    cont.bind(di_symbols_1.BINDING.FieldMultilineInput)
        .toFunction(function (o) { return new field_multiline_input_1.FieldMultilineInput(o); });
    cont.bind(di_symbols_1.BINDING.MutationAddButton).toFunction(function () { return new field_mutation_1.MutationAddButton(); });
    cont.bind(di_symbols_1.BINDING.MutationRemoveButton).toFunction(function (i) { return new field_mutation_1.MutationRemoveButton(i); });
    cont.bind(di_symbols_1.BINDING.FieldNumber).toFunction(function (o) { return new field_number_1.FieldNumber(o); });
    cont.bind(di_symbols_1.BINDING.FieldTextDropdown).toFunction(function (o) { return new field_textdropdown_1.FieldTextDropdown(o); });
    cont.bind(di_symbols_1.BINDING.FieldTextInput).toFunction(function (o) { return new field_textinput_1.FieldTextInput(o); });
    cont.bind(di_symbols_1.BINDING.FieldDefaultValue).toFunction(function (o) { return new field_default_value_1.FieldDefaultValue(o); });
    // icons 目前不用，略
    cont.bind(di_symbols_1.BINDING.Input).toFunction(function (o) { return new input_1.Input(o); });
    cont.bind(di_symbols_1.BINDING.RenderedConnection).toFunction(function (o) { return new rendered_connection_1.RenderedConnection(o); });
    cont.bind(di_symbols_1.BINDING.BlockSvg).toFunction(function (o) {
        var DecoratedBlockSvg = (0, block_render_svg_1.block_render_svg)(block_svg_1.BlockSvg);
        return new DecoratedBlockSvg(o);
    });
    cont.bind(di_symbols_1.BINDING.BlockGroup).toFunction(function (o) {
        var DecoratedBlockGroup = (0, block_render_svg_1.block_render_svg)(block_group_1.BlockGroup);
        return new DecoratedBlockGroup(o);
    });
    cont.bind(di_symbols_1.BINDING.SimplifiedCommentBubble).to(workspace_comment_simplified_bubble_1.SimplifiedCommentBubble).inSingletonScope();
    // ws comment
    cont.bind(di_symbols_1.BINDING.WorkspaceComment)
        .toFunction(function (o) {
        if (o.type === 'simplified') {
            return new workspace_comment_simplified_1.SimplifiedWorkspaceComment(o.workspace, o.parent_block, o.position, o.opt_id);
        }
        return new workspace_comment_1.WorkspaceComment(o.workspace, o.parent_block, o.position, o.opt_id);
    });
    cont.bind(di_symbols_1.BINDING.Options).toFunction(function (inject_options) { return new options_1.Options(inject_options); });
    cont.bind(di_symbols_1.BINDING.Scrollbar).toFunction(function (w, h, p, c, v) { return new scrollbar_1.Scrollbar(w, h, p, c, v); });
    cont.bind(di_symbols_1.BINDING.ScrollbarPair).toFunction(function (w, v) { return new scrollbar_1.ScrollbarPair(w, v); });
    // 定值，全局唯一，可以直接从container中取到实例。
    cont.bind(di_symbols_1.BINDING.Msg).toConstantValue(messages_1.Msg);
    cont.bind(di_symbols_1.BINDING.css_content).toConstantValue(css_temp_1.BLINK_CSS_CONTENT);
}
exports.bind_di_modules = bind_di_modules;
