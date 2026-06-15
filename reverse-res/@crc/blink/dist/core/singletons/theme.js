"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DARK_THEME_CONFIG = exports.DEFAULT_THEME_CONFIG = exports.RendererParams = exports.Theme = void 0;
var tslib_1 = require("tslib");
var inversify_1 = require("inversify");
var di_1 = require("../di");
var base_1 = require("../utils/base");
var color_1 = require("../utils/color");
/**
 * For blink theming.
 */
var Theme = /** @class */ (function () {
    function Theme() {
        this.current_theme = '';
        this.theme_list = {};
        this.register(DEFAULT_THEME, _DEFAULT_THEME_CONFIG);
        this.register(THEME, _DARK_THEME_CONFIG);
        this._apply(DEFAULT_THEME);
    }
    Theme.prototype.get_color = function (color_key) {
        var matcher = color_key.match(/^%\{(BKY_)?([^}]+)\}$/);
        color_key = (matcher === null || matcher === void 0 ? void 0 : matcher[2]) || color_key;
        return this.block_color[color_key];
    };
    Theme.prototype.register = function (theme_name, config) {
        var complete_config = (0, base_1.merge_deep)(_DEFAULT_THEME_CONFIG, config);
        this.normalize_config(complete_config);
        if (this.theme_list[theme_name]) {
            console.warn("Theme " + theme_name + " already exists and would be replaced.");
        }
        this.theme_list[theme_name] = complete_config;
    };
    Theme.prototype.apply = function (theme_name) {
        this._apply(theme_name);
        // 选择主题也可能发生在inject workspace之前，workspace还不存在
        if (this.Blink.mainWorkspace) {
            // 如果存在workspace，重新加载积木
            this.Blink.events.disable();
            var current_xml = this.Blink.xml.workspace_to_dom(this.Blink.mainWorkspace);
            this.Blink.mainWorkspace.clear();
            this.Blink.xml.dom_to_workspace(current_xml, this.Blink.mainWorkspace);
            this.Blink.events.enable();
            // 清除flyout中缓存的积木
            var toolbox = this.Blink.mainWorkspace.get_toolbox();
            if (toolbox) {
                toolbox.flyout.hide();
                toolbox.flyout.clear_cached_blocks();
            }
        }
    };
    Theme.prototype._apply = function (theme_name) {
        if (this.current_theme === theme_name) {
            return;
        }
        var theme = this.theme_list[theme_name];
        if (!theme) {
            console.error("Theme " + theme_name + " not found.");
            return;
        }
        this.current_theme = theme_name;
        Object.assign(this, theme);
    };
    /**
     * 对主题配置进行normalize.
     */
    Theme.prototype.normalize_config = function (config) {
        if (!config.font.SIZE.match(/^\d*\.?\d+\s*[Pp][Tt]$/)) {
            console.warn("Font size " + config.font.SIZE + " replaced by default");
            config.font.SIZE = _DEFAULT_THEME_CONFIG.font.SIZE;
        }
        config.flyout.BACKGROUND_COLOR = new color_1.Color(config.flyout.BACKGROUND_COLOR, _DEFAULT_THEME_CONFIG.flyout.BACKGROUND_COLOR, "Flyout background color " + config.flyout.BACKGROUND_COLOR + " replaced by default");
        config.insertion_marker.COLOR = new color_1.Color(config.insertion_marker.COLOR, _DEFAULT_THEME_CONFIG.insertion_marker.COLOR, "Insertion marker color " + config.insertion_marker.COLOR + " replaced by default");
        if (config.insertion_marker.OPACITY < 0 || config.insertion_marker.OPACITY > 1) {
            console.warn("Insertion marker opacity " + config.insertion_marker.OPACITY + " replaced by default");
            config.insertion_marker.OPACITY = _DEFAULT_THEME_CONFIG.insertion_marker.OPACITY;
        }
        config.shadow_style.SHADOW_COLOR = new color_1.Color(config.shadow_style.SHADOW_COLOR, _DEFAULT_THEME_CONFIG.shadow_style.SHADOW_COLOR, "Shadow color " + config.shadow_style.SHADOW_COLOR + " replaced by default");
        config.shadow_style.EMPTY_COLOR = new color_1.Color(config.shadow_style.EMPTY_COLOR, _DEFAULT_THEME_CONFIG.shadow_style.EMPTY_COLOR, "Invalid empty shadow color " + config.shadow_style.EMPTY_COLOR + " replaced by default");
        if (!config.shadow_style.BORDER.match(/^\d*\.?\d+\s*[Pp][Xx]$/)) {
            console.warn("Invalid shadow border " + config.shadow_style.BORDER + " replaced by default");
            config.shadow_style.BORDER = _DEFAULT_THEME_CONFIG.shadow_style.BORDER;
        }
        if (config.shadow_style.NO_BORDER !== '0') {
            console.warn("Invalid shadow no_border " + config.shadow_style.NO_BORDER + " replaced by default");
            config.shadow_style.NO_BORDER = _DEFAULT_THEME_CONFIG.shadow_style.NO_BORDER;
        }
        for (var property in config.block_group_color) {
            var key = property;
            config.block_group_color[key] = new color_1.Color(config.block_group_color[key], _DEFAULT_THEME_CONFIG.block_group_color[key], "Block group " + property + " replaced by default");
        }
        for (var color_name in config.block_color) {
            var fill = new color_1.Color();
            var border = new color_1.Color();
            if (!fill.set(config.block_color[color_name].fill) ||
                !border.set(config.block_color[color_name].border)) {
                console.warn("Block color " + color_name + " and all its related colors deleted.");
                delete config.block_color[color_name];
                continue;
            }
            config.block_color[color_name].fill = fill;
            config.block_color[color_name].border = border;
            if (config.block_color[color_name].layer) {
                var layer = new color_1.Color();
                if (!layer.set(config.block_color[color_name].layer)) {
                    console.warn("Illegal layer color " + config.block_color[color_name].layer + " of " + color_name + " deleted.");
                    delete config.block_color[color_name].layer;
                }
            }
        }
        config.disabled_color.fill = new color_1.Color(config.disabled_color.fill, _DEFAULT_THEME_CONFIG.disabled_color.fill, "Block disabled fill color " + config.disabled_color.fill + " replaced by default");
        config.disabled_color.border = new color_1.Color(config.disabled_color.border, _DEFAULT_THEME_CONFIG.disabled_color.border, "Block disabled border color " + config.disabled_color.border + " replaced by default");
    };
    (0, tslib_1.__decorate)([
        (0, di_1.lazy_inject)(di_1.BINDING.Blink)
    ], Theme.prototype, "Blink", void 0);
    Theme = (0, tslib_1.__decorate)([
        (0, inversify_1.injectable)()
    ], Theme);
    return Theme;
}());
exports.Theme = Theme;
var RendererParams = /** @class */ (function () {
    function RendererParams() {
        this.BLOCK_LEFT_TOP = [0, 0];
        // Block
        this.MIN_WIDTH = 110;
        this.MIN_WIDTH_OUTPUT = 40;
        this.MIN_WIDTH_SHADOW = this.MIN_WIDTH_OUTPUT;
        this.MIN_WIDTH_SHADOW_HEXAGONAL = 54;
        this.BLOCK_EDGE_WIDTH = 20;
        this.BLOCK_EDGE_WIDTH_OUTPUT = 18;
        this.BLOCK_EDGE_WIDTH_OUTPUT_HEXAGONAL = 12;
        this.BLOCK_EDGE_WIDTH_SHADOW = 15;
        this.BLOCK_EDGE_WIDTH_SHADOW_ROUND = 15;
        this.BLOCK_EDGE_WIDTH_SHADOW_HEXAGONAL = 9;
        this.MIN_HEIGHT = 40;
        this.MIN_HEIGHT_OUTPUT = 36;
        this.MIN_HEIGHT_SHADOW = 30;
        this.HEAD_ICON_WRAP_WIDTH = 48;
        this.HEAD_ICON_WIDTH = 38;
        this.SEP_SPACE_X = 8;
        this.CORNER_RADIUS = 2;
        this.C_BLOCK_INNER_CORNOR_RADIUS = 2;
        this.CORNER_RADIUS_END_BLOCK_WITHOUD_NOTCH = 12;
        // HEXAGONAL Output Block
        this.HEX_TOP_BOTTOM_CORNER_RADIUS = 3;
        this.HEX_CENTER_CORNER_RADIUS = 2;
        this.CORNER_OFFSET_X = 2;
        this.CORNER_OFFSET_Y = 1;
        this.CENTER_CORNER_OFFSET = 2;
        // C口积木
        this.C_BLOCK_INNER_CORNOR_LEFT_TOP = "a " + this.C_BLOCK_INNER_CORNOR_RADIUS + " " + this.C_BLOCK_INNER_CORNOR_RADIUS + " 0 0 0 -" + this.C_BLOCK_INNER_CORNOR_RADIUS + " " + this.C_BLOCK_INNER_CORNOR_RADIUS;
        this.C_BLOCK_INNER_CORNOR_LEFT_BOTTOM = "a " + this.C_BLOCK_INNER_CORNOR_RADIUS + " " + this.C_BLOCK_INNER_CORNOR_RADIUS + " 0 0 0 " + this.C_BLOCK_INNER_CORNOR_RADIUS + " " + this.C_BLOCK_INNER_CORNOR_RADIUS;
        // Comment
        this.COMMENT_PADDING_RIGHT = 8;
        // Notch
        this.NTOCH_START_PADDING = 13;
        this.NOTCH_HEIGHT = 4;
        this.NOTCH_WIDTH = 20;
        this.NOTCH_WIDTH_SHORT = 6;
        this.NOTCH_CORNOR_RADIUS = 3;
        this.NOTCH_WIDTH_SIDE = (this.NOTCH_WIDTH - this.NOTCH_WIDTH_SHORT - 2 * this.NOTCH_CORNOR_RADIUS) / 2;
        this.NOTCH_OFFSET_BETWEEN_PADDING_AND_ROUND_CORNER = 2;
        this.offset = this.NOTCH_OFFSET_BETWEEN_PADDING_AND_ROUND_CORNER;
        // Notch 1
        this.NOTCH_CORNOR_LEFT_TOP_1 = "a " + this.NOTCH_CORNOR_RADIUS + "," + this.NOTCH_CORNOR_RADIUS + " 0 0 1 " + this.offset + ",1";
        this.NOTCH_CORNOR_LEFT_BOTTOM_1 = "a " + this.NOTCH_CORNOR_RADIUS + "," + this.NOTCH_CORNOR_RADIUS + " 0 0 0 " + this.offset + ",1";
        this.NOTCH_CORNOR_RIGHT_TOP_1 = "a " + this.NOTCH_CORNOR_RADIUS + "," + this.NOTCH_CORNOR_RADIUS + " 0 0 1 " + this.offset + ",-1";
        this.NOTCH_CORNOR_RIGHT_BOTTOM_1 = "a " + this.NOTCH_CORNOR_RADIUS + "," + this.NOTCH_CORNOR_RADIUS + " 0 0 0 " + this.offset + ",-1";
        this.NOTCH_PATH_LEFT = this.NOTCH_CORNOR_LEFT_TOP_1 + " l " + this.NOTCH_WIDTH_SIDE + "," + this.NOTCH_HEIGHT + " " + this.NOTCH_CORNOR_LEFT_BOTTOM_1 + " h " + this.NOTCH_WIDTH_SHORT + " " + this.NOTCH_CORNOR_RIGHT_BOTTOM_1 + " l " + this.NOTCH_WIDTH_SIDE + ",-" + this.NOTCH_HEIGHT + " " + this.NOTCH_CORNOR_RIGHT_TOP_1;
        // Notch 2
        this.NOTCH_CORNOR_LEFT_TOP_2 = "a " + this.NOTCH_CORNOR_RADIUS + "," + this.NOTCH_CORNOR_RADIUS + " 0 0 0 -" + this.offset + ",-1";
        this.NOTCH_CORNOR_LEFT_BOTTOM_2 = "a " + this.NOTCH_CORNOR_RADIUS + "," + this.NOTCH_CORNOR_RADIUS + " 0 0 1 -" + this.offset + ",-1";
        this.NOTCH_CORNOR_RIGHT_TOP_2 = "a " + this.NOTCH_CORNOR_RADIUS + "," + this.NOTCH_CORNOR_RADIUS + " 0 0 0 -" + this.offset + ",1";
        this.NOTCH_CORNOR_RIGHT_BOTTOM_2 = "a " + this.NOTCH_CORNOR_RADIUS + "," + this.NOTCH_CORNOR_RADIUS + " 0 0 1 -" + this.offset + ",1";
        this.NOTCH_PATH_RIGHT = this.NOTCH_CORNOR_RIGHT_TOP_2 + " l -" + this.NOTCH_WIDTH_SIDE + "," + this.NOTCH_HEIGHT + " " + this.NOTCH_CORNOR_RIGHT_BOTTOM_2 + " h -" + this.NOTCH_WIDTH_SHORT + " " + this.NOTCH_CORNOR_LEFT_BOTTOM_2 + " l -" + this.NOTCH_WIDTH_SIDE + ",-" + this.NOTCH_HEIGHT + " " + this.NOTCH_CORNOR_LEFT_TOP_2;
        // ROW
        this.ROW_PADDING = 16;
        this.ROW_PADDING_OUTPUT = this.BLOCK_EDGE_WIDTH_OUTPUT;
        this.ROW_PADDING_OUTPUT_WITH_INPUT = 16;
        this.ROW_PADDING_OUTPUT_WITH_TEXT = 16;
        this.ROW_PADDING_OUTPUT_NON_TEXT = 0;
        this.ROW_PADDING_SHADOW = this.BLOCK_EDGE_WIDTH_SHADOW;
        this.ROW_PADDING_HEAD = this.HEAD_ICON_WIDTH / 2;
        this.STATEMENT_ROW_PADDING_Y_TO_FIELD = 5;
        this.STATEMENT_ROW_PADDING_Y_TO_VALUE_BLOCK = 4;
        this.STATEMENT_ROW_PADDING_Y_TO_STATEMENT_BLOCK = 0;
        this.OUTPUT_ROW_PADDING_Y_TO_FIELD = 3;
        this.OUTPUT_ROW_PADDING_Y_TO_VALUE_BLOCK = 2;
        this.SHADOW_ROW_PADDING_Y_TO_FIELD = 0;
        this.FIELD_HEIGHT = 30;
        this.SHADOW_FIELD_HEIGHT = 17.5;
        // INPUT
        this.INPUT_MIN_HEIGHT_STATEMENT = 20;
        this.INPUT_EXTRA_ROW_WIDTH = 86;
        this.INPUT_EXTRA_ROW_HEIGHT = 20;
        this.VALUE_SHAPE_WIDTH = 54;
        this.VALUE_SHAPE_EDGE_WIDTH = this.BLOCK_EDGE_WIDTH_SHADOW;
        this.VALUE_SHAPE_HEIGHT = 30;
        this.INPUT_SHAPE_ROUND_WIDTH = 36;
        this.INPUT_SHAPE_HEXAGONAL_WIDTH = 54;
        this.INPUT_SHAPE_HEIGHT = 28;
        this.INLINE_PADDING_Y = 2;
        this.VALUE_SHAPE_HEXAGONAL = "M " + this.VALUE_SHAPE_EDGE_WIDTH + ",0 " +
            (" H " + (this.VALUE_SHAPE_WIDTH - this.VALUE_SHAPE_EDGE_WIDTH) + " L " + this.VALUE_SHAPE_WIDTH + "," + 4 * this.VALUE_SHAPE_HEIGHT / 2 + " l " + -this.VALUE_SHAPE_EDGE_WIDTH + "," + 4 * this.VALUE_SHAPE_HEIGHT / 2 + " H " + this.VALUE_SHAPE_EDGE_WIDTH + " L " + +'0,' + this.VALUE_SHAPE_HEIGHT / 2 + " L " + this.VALUE_SHAPE_EDGE_WIDTH + "," + 0 + " z");
        this.VALUE_SHAPE_ROUND = "M " + this.VALUE_SHAPE_EDGE_WIDTH + ",0" +
            (" H " + (this.VALUE_SHAPE_WIDTH - this.VALUE_SHAPE_EDGE_WIDTH) + " a " + this.VALUE_SHAPE_EDGE_WIDTH + " " + this.VALUE_SHAPE_HEIGHT / 2 + " 0 0 1 0 " + this.VALUE_SHAPE_HEIGHT + " H " + this.VALUE_SHAPE_EDGE_WIDTH + " a " + this.VALUE_SHAPE_EDGE_WIDTH + " " + this.VALUE_SHAPE_HEIGHT / 2 + " 0 0 1 0 -" + this.VALUE_SHAPE_HEIGHT + " z");
        // STATEMENT
        this.STATEMENT_FIRST_ROW_MIN_WIDTH = 110;
        this.STATEMENT_OTHER_ROW_MIN_WIDTH = 86;
        this.STATEMENT_MIN_WIDTH = 16;
        // FLYOUT
        this.FLYOUT_CORNER_RADIUS = 0;
        // COLLAPSED
        this.COLLAPSED_PATH = 'l 8,0 0,4 8,4 -16,8 8,4';
        this.COLLAPSED_HEIGHT = 20;
        this.GROUP_RIGHT_EXTENDED_WIDTH = 16;
        this.GROUP_RIGHT_EDGE_WIDTH = this.GROUP_RIGHT_EXTENDED_WIDTH + 8;
        this.OUTPUT_GROUP_DECORATION_PADDING = 14;
        this.OUTPUT_GROUP_DECORATION_OFFSET = 6;
        this.EXECUTION_GROUP_DECORATION_WIDTH = 124;
        this.EXECUTION_GROUP_DECORATION_RIGHT_MARGIN = 8;
        // 执行积木分组结构
        this.GROUP_TOP_RIGHT_PATH = 'a 4 4 0 0 1 3.7 5.5';
        this.GROUP_BOTTOM_RIGHT_PATH = 'a 4 4 0 0 1 -3.7 3.5';
        this.GROUP_EXTRA_ROW_RIGHT = "\n    h " + (96 - this.STATEMENT_MIN_WIDTH - 12 - 7) + "\n    a 4 4 0 0 1 3.5 1.7\n    l 7 12\n    a 4 4 0 0 1 -3.5 6.3\n  ";
        this.TEXT_PADDING_IN_FIELD = 8;
        this.TEXT_MIN_WIDTH_IN_FIELD = 20;
    }
    return RendererParams;
}());
exports.RendererParams = RendererParams;
var BlinkParams = /** @class */ (function () {
    function BlinkParams() {
        this.DRAG_RADIUS = 5;
        this.FLYOUT_DRAG_RADIUS = 10;
        this.SNAP_RADIUS = 48;
        this.CONNECTING_SNAP_RADIUS = 68;
        this.CURRENT_CONNECTION_PREFERENCE = 20;
        this.BUMP_DELAY = 250;
        this.COLLAPSE_CHARS = 30;
        this.LONGPRESS = 750;
        this.SOUND_LIMIT = 100;
    }
    return BlinkParams;
}());
var blockColor = {
    INCOMPATIBLE_HUE: {
        fill: '#c7c7c7',
        border: '#c7c7c7',
    },
    EVENTS_HUE: {
        fill: '#608FEE',
        border: '#496EB8',
    },
    CONTROL_HUE: {
        fill: '#68CDFF',
        border: '#53A2C9',
    },
    ACTIONS_HUE: {
        fill: '#F46767',
        border: '#BF5050',
    },
    APPEARANCE_HUE: {
        fill: '#E76CEA',
        border: '#B353B5',
    },
    SOUND_HUE: {
        fill: '#A073FF',
        border: '#7E5BC9',
    },
    PEN_HUE: {
        fill: '#2BC9A7',
        border: '#1F947B',
    },
    SENSING_HUE: {
        fill: '#77D657',
        border: '#5AA142',
        layer: '#61BA41',
    },
    LOGIC_HUE: {
        fill: '#FEAE8A',
        border: '#C98A6D',
        layer: '#EDA380',
    },
    MATH_HUE: {
        fill: '#FEAE8A',
        border: '#C98A6D',
    },
    TEXTS_HUE: {
        fill: '#FEAE8A',
        border: '#C98A6D',
    },
    VARIABLES_HUE: {
        fill: '#FFBB55',
        border: '#C99342',
    },
    LISTS_HUE: {
        fill: '#F9CC37',
        border: '#C4A12B',
        layer: '#DEB738',
    },
    PROCEDURES_HUE: {
        fill: '#F88767',
        border: '#C26A51',
    },
    PROCEDURES_PARAM_HUE: {
        fill: '#FF7E2E',
        border: '#C26A51',
    },
    PHYSICS_HUE: {
        fill: '#E04852',
        border: '#AB373E',
    },
    CAMERA_HUE: {
        fill: '#C769FF',
        border: '#9E53C9',
    },
    CAMERA_QRCODE_HUE: {
        fill: '#C769FF',
        border: '#9E53C9',
    },
    VIDEO_HUE: {
        fill: '#A073FF',
        border: '#7E5BC9',
    },
    CLOUD_HUE: {
        fill: '#FFBB55',
        border: '#C99342',
    },
    CLOUD_LIST_HUE: {
        fill: '#F9CC37',
        border: '#C4A12B',
    },
    AI_HUE: {
        fill: '#5574F8',
        border: '#4259C2',
    },
    AI_GAME_HUE: {
        fill: '#8647F3',
        border: '#6837BD',
    },
    AI_COGNITIVE_HUE: {
        fill: '#C769FF',
        border: '#9E53C9',
    },
    ADVANCED_HUE: {
        fill: '#14B390',
        border: '#0E7D65',
    },
    HARDWARE_HUE: {
        fill: '#007E8C',
        border: '#007E8C',
    },
};
var DEFAULT_THEME = 'default';
var lightBlockColor = {
    BLUE_1: {
        fill: '#68CDFF',
        layer: '#60BEED',
        border: '#53A2C9',
    },
    BLUE_2: {
        fill: '#64B5F6',
        border: '#4E8CBF',
    },
    BLUE_3: {
        fill: '#608FEE',
        border: '#496EB8',
    },
    BLUE_4: {
        fill: '#5574F8',
        border: '#4259C2',
    },
    BLUE_5: {
        fill: '#3FA1EF',
        border: '#307CBA',
    },
    BLUE_6: {
        fill: '#00AFC3',
        border: '#007E8C',
    },
    PURPLE_1: {
        fill: '#E76CEA',
        layer: '#D858D8',
        border: '#B353B5',
    },
    PURPLE_2: {
        fill: '#C769FF',
        border: '#9E53C9',
    },
    PURPLE_3: {
        fill: '#A073FF',
        border: '#7E5BC9',
    },
    PURPLE_4: {
        fill: '#7D68F1',
        border: '#6151BD',
    },
    PURPLE_5: {
        fill: '#8647F3',
        border: '#6837BD',
    },
    PURPLE_6: {
        fill: '#9D47E0',
        border: '#7937AB',
    },
    RED_1: {
        fill: '#FF895F',
        border: '#C96C4B',
    },
    RED_2: {
        fill: '#F46767',
        border: '#BF5050',
    },
    RED_3: {
        fill: '#E65D2D',
        border: '#B04923',
    },
    RED_4: {
        fill: '#E04852',
        border: '#AB373E',
    },
    RED_5: {
        fill: '#E94585',
        border: '#B33665',
    },
    RED_6: {
        fill: '#FF6795',
        border: '#C95175',
    },
    ORANGE_1: {
        fill: '#F9CC37',
        layer: '#EDBE24',
        border: '#E2B51F',
    },
    ORANGE_2: {
        fill: '#FFBB55',
        border: '#C99342',
    },
    ORANGE_3: {
        fill: '#FEAE8A',
        layer: '#EC9972',
        border: '#E58B63',
    },
    ORANGE_4: {
        fill: '#F88767',
        layer: '#FF7E2E',
        border: '#C26A51',
    },
    ORANGE_5: {
        fill: '#FC942C',
        border: '#C77422',
    },
    ORANGE_6: {
        fill: '#EE8F13',
        border: '#B86E0F',
    },
    ORANGE_7: {
        fill: '#FF7E2E',
        border: '#C26A51',
    },
    GREEN_1: {
        fill: '#C9D926',
        border: '#98A31D',
    },
    GREEN_2: {
        fill: '#A3DE2B',
        border: '#7BA820',
    },
    GREEN_3: {
        fill: '#77D657',
        layer: '#54BE2F',
        border: '#51AD2F',
    },
    GREEN_4: {
        fill: '#57B937',
        border: '#3F8528',
    },
    GREEN_5: {
        fill: '#14B390',
        border: '#0E7D65',
    },
    GREEN_6: {
        fill: '#2BC9A7',
        border: '#1F947B',
    },
    BLACK_1: {
        fill: '#999999',
        border: '#636363',
    },
    BLACK_2: {
        fill: '#4A4A4A',
        border: '#141414',
    },
};
var _DEFAULT_THEME_CONFIG = {
    font: {
        SIZE: '12pt',
    },
    flyout: {
        BACKGROUND_COLOR: 'rgba(255, 255, 255, 1)',
    },
    insertion_marker: {
        COLOR: '#c7c7c7',
        OPACITY: 0.2,
    },
    shadow_style: {
        SHADOW_COLOR: '#FFF',
        EMPTY_COLOR: 'rgba(0, 0, 0, 0.1)',
        BORDER: '1px',
        NO_BORDER: '0',
    },
    block_group_color: {
        OUTPUT_GROUP_FILL_COLOUR: '#5C559A',
        OUTPUT_GROUP_STROKE_COLOUR: '#423B82',
        EXECUTION_GROUP_FILL_COLOUR: '#5C559A',
        EXECUTION_GROUP_STROKE_COLOUR: '#423B82',
    },
    block_color: (0, tslib_1.__assign)((0, tslib_1.__assign)({ DEFAULT: {
            fill: '#CCCCCC',
            border: 'rgba(0, 0, 0, 0.15)',
        } }, blockColor), lightBlockColor),
    disabled_color: {
        fill: '#ABAFB6',
        border: '#9399A4',
    },
    renderer: new RendererParams(),
    blink_params: new BlinkParams(),
};
var THEME = 'dark';
var darkBlockColor = {
    BLUE_1: {
        fill: '#2DB3E3',
        layer: '#29A6D4',
        border: '#348DAD',
    },
    BLUE_2: {
        fill: '#3290E6',
        border: '#3876B0',
    },
    BLUE_3: {
        fill: '#3567E6',
        border: '#284FB0',
    },
    BLUE_4: {
        fill: '#384CE8',
        border: '#2B3BB3',
    },
    BLUE_5: {
        fill: '#1E97D1',
        border: '#16719C',
    },
    BLUE_6: {
        fill: '#00A9BD',
        border: '#007A87',
    },
    PURPLE_1: {
        fill: '#D158D0',
        layer: '#BD43BC',
        border: '#9C419C',
    },
    PURPLE_2: {
        fill: '#BB62F0',
        border: '#924CBA',
    },
    PURPLE_3: {
        fill: '#893BE3',
        border: '#692DAD',
    },
    PURPLE_4: {
        fill: '#624AE8',
        border: '#4B39B3',
    },
    PURPLE_5: {
        fill: '#6924E3',
        border: '#511CAD',
    },
    PURPLE_6: {
        fill: '#872AD1',
        border: '#661F9C',
    },
    RED_1: {
        fill: '#FA865D',
        border: '#C46A49',
    },
    RED_2: {
        fill: '#E64545',
        border: '#B04646',
    },
    RED_3: {
        fill: '#E6521E',
        border: '#B04017',
    },
    RED_4: {
        fill: '#C23D3A',
        border: '#8C2C2A',
    },
    RED_5: {
        fill: '#E34382',
        border: '#AD3463',
    },
    RED_6: {
        fill: '#FA6592',
        border: '#C44F72',
    },
    ORANGE_1: {
        fill: '#E8C552',
        layer: '#D9B337',
        border: '#B3973E',
    },
    ORANGE_2: {
        fill: '#EDB157',
        border: '#B88944',
    },
    ORANGE_3: {
        fill: '#F09972',
        layer: '#E6875D',
        border: '#BA7859',
    },
    ORANGE_4: {
        fill: '#F28465',
        layer: '#FF7824',
        border: '#BD674F',
    },
    ORANGE_5: {
        fill: '#F7912B',
        border: '#C27121',
    },
    ORANGE_6: {
        fill: '#E08103',
        border: '#AB6202',
    },
    ORANGE_7: {
        fill: '#FF7824',
        border: '#BD674F',
    },
    GREEN_1: {
        fill: '#B0C200',
        border: '#8D990C',
    },
    GREEN_2: {
        fill: '#8CC714',
        border: '#739E1E',
    },
    GREEN_3: {
        fill: '#63C243',
        border: '#488C31',
    },
    GREEN_4: {
        fill: '#53B034',
        border: '#3A7A25',
    },
    GREEN_5: {
        fill: '#13AD8B',
        border: '#0C6E59',
    },
    GREEN_6: {
        fill: '#28BA9B',
        border: '#1C856E',
    },
    BLACK_1: {
        fill: '#9A9A9A',
        border: '#636363',
    },
    BLACK_2: {
        fill: '#4A4A4A',
        border: '#141414',
    },
};
var _DARK_THEME_CONFIG = {
    font: {
        SIZE: '12pt',
    },
    flyout: {
        BACKGROUND_COLOR: 'rgba(255, 255, 255, 1)',
    },
    insertion_marker: {
        COLOR: '#c7c7c7',
        OPACITY: 0.2,
    },
    shadow_style: {
        SHADOW_COLOR: '#FFF',
        EMPTY_COLOR: 'rgba(0, 0, 0, 0.1)',
        BORDER: '1px',
        NO_BORDER: '0',
    },
    block_group_color: {
        OUTPUT_GROUP_FILL_COLOUR: '#5C559A',
        OUTPUT_GROUP_STROKE_COLOUR: '#423B82',
        EXECUTION_GROUP_FILL_COLOUR: '#5C559A',
        EXECUTION_GROUP_STROKE_COLOUR: '#423B82',
    },
    block_color: (0, tslib_1.__assign)((0, tslib_1.__assign)({ DEFAULT: {
            fill: '#CCCCCC',
            border: 'rgba(0, 0, 0, 0.15)',
        } }, blockColor), darkBlockColor),
    disabled_color: {
        fill: '#ACADAE',
        border: '#818388',
    },
    renderer: new RendererParams(),
    blink_params: new BlinkParams(),
};
/**
 * 默认主题配置。（浅色）
 */
exports.DEFAULT_THEME_CONFIG = (0, base_1.clone_deep)(_DEFAULT_THEME_CONFIG);
/**
 * 深色主题配置。
 */
exports.DARK_THEME_CONFIG = (0, base_1.clone_deep)(_DARK_THEME_CONFIG);
