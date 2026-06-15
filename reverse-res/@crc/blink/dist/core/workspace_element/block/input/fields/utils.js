"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.draw_arrow = exports.position_dropdown = void 0;
var gl_matrix_1 = require("@kitten-team/gl-matrix");
var dom_1 = require("../../../../utils/dom");
var style_1 = require("../../../../utils/style");
function position_dropdown(menu, field) {
    var field_group = field.get_svg_root();
    if (!field.source_block || !field_group)
        return gl_matrix_1.vec2.create();
    var window_size = (0, dom_1.get_viewport_size)();
    var scroll_offset = (0, style_1.get_viewport_page_offset)(document);
    var xy = field.source_block.is_shadow()
        ? (0, dom_1.get_page_offset)(field.source_block.get_svg_root())
        : (0, dom_1.get_page_offset)(field.border_rect || field_group);
    var block_scale = field.source_block.get_workspace().get_scale();
    var border_bbox = field.source_block.is_shadow()
        ? {
            width: field.source_block.width * block_scale,
            height: field.source_block.height * block_scale,
        }
        : {
            width: field.get_size().width * block_scale,
            height: field.get_size().height * block_scale,
        };
    var position_block = field.source_block.is_shadow() ? field.source_block.parent_block : field.source_block;
    if (!position_block)
        return gl_matrix_1.vec2.create();
    var dropdown_option = field.source_block.workspace.options.dropdown;
    var scale = dropdown_option.menu.scalable ? Math.max(block_scale, 1) : 1;
    if (menu.parentElement) {
        menu.parentElement.style.transform = "scale(" + scale + ")";
        menu.parentElement.style.transformOrigin = 'left top';
    }
    var menu_size = (0, style_1.get_size)(menu); // 菜单可视区域宽高
    var triangle = document.createElement('div');
    triangle.classList.add('dropdown-triangle');
    var parent_input = position_block.inputList.find(function (input) { return input.fieldRow.indexOf(field) > -1; });
    var block_height = (((parent_input === null || parent_input === void 0 ? void 0 : parent_input.height) || position_block.first_row_height) + 2 /* 上下stroke的宽度 */) * block_scale;
    var field_padding = (block_height - border_bbox.height) / 2;
    // 确定纵向位置
    // field左上角位置 在屏幕上半部分时，在下方显示菜单；反之在上方显示
    if (xy[1] <= window_size.height / 2 + scroll_offset[1]) {
        xy[1] += border_bbox.height + field_padding;
        menu.classList.add('lower');
        triangle.classList.add('lower');
    }
    else {
        xy[1] -= menu_size.height + field_padding;
        menu.classList.add('upper');
        triangle.classList.add('upper');
        triangle.style.top = menu_size.height + "px";
    }
    (0, dom_1.insert_before)(triangle, menu);
    // 确定横向位置
    if (dropdown_option.menu.align === 'first') { // 下拉菜单的第一个字需要和field中的第一个文字或图片对齐
        /** 下拉按钮中第一个字符与左边缘的距离（scale之前） */
        var dropdown_btn_first_el_offset = field.image_element ? Number(field.image_element.getAttribute('x')) :
            field.text_element ? Number(field.text_element.getAttribute('x')) :
                NaN;
        dropdown_btn_first_el_offset = isNaN(dropdown_btn_first_el_offset) ? dropdown_option.padding : dropdown_btn_first_el_offset;
        /** 下拉菜单首个选项中第一个字符与左边缘的距离（scale之前） */
        var menu_first_el_offset = menu.firstElementChild
            ? parseFloat((0, style_1.get_computed_style)(menu.firstElementChild, 'padding-left'))
            : -dropdown_btn_first_el_offset * block_scale;
        xy[0] = xy[0] + dropdown_btn_first_el_offset * block_scale - menu_first_el_offset * scale;
        // 不要超出屏幕右侧
        xy[0] = Math.min(xy[0], window_size.width + scroll_offset[0] - menu_size.width);
    }
    else if (dropdown_option.menu.align === 'center') {
        menu.parentElement && (menu.parentElement.style.transform = "scale(" + scale + ") translateX(-50%)");
        xy[0] += border_bbox.width / 2;
        // 不要超出屏幕右侧
        xy[0] = Math.min(xy[0], window_size.width + scroll_offset[0] - menu_size.width / 2);
        // 不要超出屏幕左侧
        xy[0] = Math.max(xy[0], scroll_offset[0] + menu_size.width / 2);
    }
    else if (dropdown_option.menu.align === 'left') {
        // 不要超出屏幕右侧
        xy[0] = Math.min(xy[0], window_size.width + scroll_offset[0] - menu_size.width);
    }
    return xy;
}
exports.position_dropdown = position_dropdown;
function draw_arrow(arrow_type) {
    if (arrow_type === void 0) { arrow_type = 'triangle'; }
    var arrow = (0, dom_1.create_svg_element)('g', {
        'class': 'blocklyDropdownArrow',
    });
    if (arrow_type === 'line') {
        (0, dom_1.create_svg_element)('path', {
            'd': 'M5.99695526,7.90416306 L9.03751442,4.8636039 C9.38898628,4.51213203 9.95883476,4.51213203 10.3103066,4.8636039 C10.6617785,5.21507576 10.6617785,5.78492424 10.3103066,6.1363961 L6.63335137,9.81335137 C6.2818795,10.1648232 5.71203102,10.1648232 5.36055916,9.81335137 L1.6836039,6.1363961 C1.33213203,5.78492424 1.33213203,5.21507576 1.6836039,4.8636039 C2.03507576,4.51213203 2.60492424,4.51213203 2.9563961,4.8636039 L5.99695526,7.90416306 Z',
        }, arrow);
    }
    else {
        (0, dom_1.create_svg_element)('path', {
            'd': 'M2.49351315,4 L9.50652922,4 C9.77906561,4 10,4.24184373 10,4.54017309 C10,4.65100154 9.96885725,4.75914782 9.91079624,4.84994202 L6.4042882,9.76954945 C6.24799884,10.0139504 5.94030478,10.0733882 5.71703428,9.90230757 C5.66983808,9.86614356 5.62879151,9.82121232 5.59575417,9.76954945 L2.08924613,4.84994202 C1.93295678,4.60554109 1.98725573,4.26872671 2.21052624,4.09764605 C2.29347055,4.03409011 2.39226671,4 2.49351315,4 Z',
        }, arrow);
    }
    return arrow;
}
exports.draw_arrow = draw_arrow;
