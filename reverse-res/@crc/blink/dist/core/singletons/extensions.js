"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Extensions = void 0;
var tslib_1 = require("tslib");
var inversify_1 = require("inversify");
var di_1 = require("../di");
var interfaces_1 = require("../interfaces");
var string_1 = require("../utils/string");
var base_1 = require("../utils/base");
var Extensions = /** @class */ (function () {
    function Extensions() {
        /**
         * The set of all registered extensions, keyed by extension name/id.
         */
        this.extensions = {};
        /**
         * The set of all registered mutators, keyed by extension name/id.
         */
        this.mutators = {};
        /**
         * The set of properties on a block that may only be set by a mutator.
         */
        this.MUTATOR_PROPERTIES_ = [
            'domToMutation',
            'mutationToDom',
        ];
    }
    Extensions.prototype.register = function (name, init_fn) {
        if ((0, string_1.string_is_empty_or_whitespace)(name)) {
            throw new Error("Error when registering extension \"" + name + "\": invalid extension name. ");
        }
        if (this.extensions[name]) {
            console.error("Error when registering extension \"" + name + "\": extension existed.");
            return;
        }
        this.extensions[name] = init_fn;
    };
    Extensions.prototype.register_mixin = function (name, mixin_obj) {
        var present_prop = this.check_existed_mutator_property(mixin_obj);
        if (present_prop) {
            throw Error("Error when registering extension \"" + name + "\": Trying to register mixin with mutator property: " + present_prop + ". ");
        }
        this.register(name, function () {
            this.mixin(mixin_obj);
        });
    };
    Extensions.prototype.unregister = function (name) {
        if (name in this.extensions) {
            delete this.extensions[name];
        }
    };
    Extensions.prototype.register_mutator = function (name, mixin_obj, opt_helper_fn) {
        // Sanity check the mixin object before registering it.
        for (var i = 0; i < this.MUTATOR_PROPERTIES_.length; i++) {
            var property_name = this.MUTATOR_PROPERTIES_[i];
            if (!mixin_obj.hasOwnProperty(property_name)) {
                throw new Error("Error when registering mutator \"" + name + "\": missing required property \"" + property_name + "\". ");
            }
            else if (!(0, base_1.is_func)(mixin_obj[property_name])) {
                throw new Error("Error when registering mutator \"" + name + "\": required property \"" + property_name + "\" must be a function. ");
            }
        }
        // Sanity checks passed.
        this.mutators[name] = function () {
            // Mixin the object.
            this.mixin(mixin_obj);
            if (opt_helper_fn) {
                opt_helper_fn.apply(this);
            }
        };
    };
    Extensions.prototype.unregister_mutator = function (name) {
        if (name in this.mutators) {
            delete this.mutators[name];
        }
    };
    Extensions.prototype.apply = function (name, block) {
        var error_prefix = "Error when applying extension \"" + name + "\": ";
        var extension_fn = this.extensions[name];
        if (!(0, base_1.is_func)(extension_fn)) {
            throw new Error(error_prefix + "extension not found.");
        }
        // Record the old properties so we can make sure they don't change after
        // applying the extension.
        var mutator_properties = this.get_mutator_properties(block);
        extension_fn.apply(block);
        if (!this.mutator_properties_match(mutator_properties, block)) {
            throw new Error(error_prefix + "mutation properties changed when applying a non-mutator extension.");
        }
    };
    Extensions.prototype.apply_mutator = function (name, block) {
        var error_prefix = "Error when applying mutator \"" + name + "\": ";
        var mutator_fn = this.mutators[name];
        if (!(0, base_1.is_func)(mutator_fn)) {
            throw new Error(error_prefix + "mutator not found.");
        }
        // Fail early if the block already has mutation properties.
        var present_prop = this.check_existed_mutator_property(block);
        if (present_prop) {
            throw Error(error_prefix + "mutation property " + present_prop + " already existed on block " + block);
        }
        mutator_fn.apply(block);
        var absent_prop = this.check_absent_mutator_property(block);
        if (absent_prop) {
            throw new Error(error_prefix + "applied a mutator didn't add \"" + absent_prop + "\"");
        }
    };
    /**
     * Check that the given object does not have any of the four mutator properties
     * defined on it.  This function should be called before applying a mutator
     * extension to a block, or when registering a mixin, to make sure we are not
     * overwriting properties.
     * @param obj The object to check.
     * @throws if any of the properties already exist on the block.
     */
    Extensions.prototype.check_existed_mutator_property = function (obj) {
        for (var i = 0; i < this.MUTATOR_PROPERTIES_.length; i++) {
            var property_name = this.MUTATOR_PROPERTIES_[i];
            if (obj.hasOwnProperty(property_name)) {
                return property_name;
            }
        }
        return undefined;
    };
    /**
     * Check that the given object has required mutator properties.  This should be called
     * after applying a mutation extension, or registering a mutator.
     * @param obj The obj to inspect.
     */
    Extensions.prototype.check_absent_mutator_property = function (obj) {
        for (var i = 0; i < this.MUTATOR_PROPERTIES_.length; i++) {
            var property_name = this.MUTATOR_PROPERTIES_[i];
            if (!obj.hasOwnProperty(property_name)) {
                return property_name;
            }
        }
        return undefined;
    };
    /**
     * Get a list of values of mutator properties on the given block.
     * @param block The block to inspect.
     * @return a list with all of the properties, which should be
     *     functions or undefined, but are not guaranteed to be.
     */
    Extensions.prototype.get_mutator_properties = function (block) {
        var result = [];
        for (var i = 0; i < this.MUTATOR_PROPERTIES_.length; i++) {
            result.push(block[this.MUTATOR_PROPERTIES_[i]]);
        }
        return result;
    };
    /**
     * Check that the current mutator properties match a list of old mutator
     * properties.  This should be called after applying a non-mutator extension,
     * to verify that the extension didn't change properties it shouldn't.
     * @param old_properties The old values to compare to.
     * @param block The block to inspect for new values.
     * @return True if the property lists match.
     */
    Extensions.prototype.mutator_properties_match = function (old_properties, block) {
        var new_properties = this.get_mutator_properties(block);
        if (new_properties.length != old_properties.length) {
            return false;
        }
        for (var i = 0; i < new_properties.length; i++) {
            if (old_properties[i] != new_properties[i]) {
                return false;
            }
        }
        return true;
    };
    Extensions.prototype.build_tooltip_for_dropdown = function (dropdown_name, lookup_table) {
        var _this = this;
        // List of block types already validated, to minimize duplicate warnings.
        var block_types_checked = [];
        // Check the tooltip string messages for invalid references.
        // Wait for load, in case Blockly.Msg is not yet populated.
        // run_after_page_load() does not run in a Node.js environment due to lack of
        // document object, in which case skip the validation.
        if (document) { // Relies on document.readyState
            this.utils.run_after_page_load(function () {
                for (var key in lookup_table) {
                    // Will print warnings is reference is missing.
                    _this.utils.check_message_references(lookup_table[key]);
                }
            });
        }
        var extension = this;
        /**
         * The actual extension.
         */
        var extension_fn = function () {
            var _this = this;
            if (this.type && block_types_checked.indexOf(this.type) === -1) {
                extension.check_dropdown_options_in_table(this, dropdown_name, lookup_table);
                block_types_checked.push(this.type);
            }
            this.set_tooltip(function () {
                var value = _this.get_field_value(dropdown_name);
                var tooltip = value ? lookup_table[value] : undefined;
                if (tooltip == undefined) {
                    if (block_types_checked.indexOf(_this.type) === -1) {
                        // Warn for missing values on generated tooltips
                        var warning = "No tooltip mapping for value " + value + " of field " + dropdown_name;
                        if (_this.type != undefined) {
                            warning += (" of block type " + _this.type);
                        }
                        console.warn(warning + ".");
                    }
                }
                else {
                    tooltip = extension.utils.replace_message_references(tooltip);
                }
                return tooltip || '';
            });
        };
        return extension_fn;
    };
    /**
     * Checks all options keys are present in the provided string lookup table.
     * Emits console warnings when they are not.
     * @param block The block containing the dropdown
     * @param dropdown_name The name of the dropdown
     * @param lookup_table The string lookup table
     */
    Extensions.prototype.check_dropdown_options_in_table = function (block, dropdown_name, lookup_table) {
        // Validate all dropdown options have values.
        var dropdown = block.get_field(dropdown_name);
        if (!dropdown || !(0, base_1.is_func)(dropdown.is_dynamic) || dropdown.is_dynamic()) {
            return;
        }
        var options = dropdown.get_options();
        for (var i = 0; i < options.length; ++i) {
            var option_key = options[i][interfaces_1.OptionTypes.VALUE];
            if (option_key == undefined || lookup_table[option_key] == undefined) {
                console.warn("No tooltip mapping for value " + option_key + " of field " + dropdown_name + " of block type " + block.type);
            }
        }
    };
    (0, tslib_1.__decorate)([
        (0, di_1.lazy_inject)(di_1.BINDING.utils)
    ], Extensions.prototype, "utils", void 0);
    Extensions = (0, tslib_1.__decorate)([
        (0, inversify_1.injectable)()
    ], Extensions);
    return Extensions;
}());
exports.Extensions = Extensions;
