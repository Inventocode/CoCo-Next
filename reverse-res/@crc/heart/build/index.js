"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var r = require("resul-ts");
var catastrophic_1 = require("catastrophic");
exports.Catastrophe = catastrophic_1.Catastrophe;
var event_bus_1 = require("./event/event_bus");
var container_1 = require("./container");
var di_symbols_1 = require("./di_symbols");
var P = require("./public_interfaces");
exports.interfaces = P;
var block_provider = require("./block_provider");
exports.block_provider = block_provider;
var event_types = require("./event/public_types");
exports.event_types = event_types;
var basic_types = require("./basic_types");
exports.basic_types = basic_types;
var block_types = require("./block_types");
exports.block_types = block_types;
var Heart = /** @class */ (function () {
    function Heart(spec) {
        var _this = this;
        this.spec = spec;
        /**
         * An externally defined linter should use this function to construct the
         * errors it returns.
         *
         * @param {basic_types.ClientErrorProperties} error_properties A description of the error your linter found
         * @return {Catastrophe} An error object that your linter should return
         */
        this.create_ast_linter_error = function (error_properties) {
            var util = _this.container.get(di_symbols_1.BINDING.Util);
            var annotation = {
                client_annotation: error_properties,
            };
            if (error_properties.native_error != undefined) {
                return util.ohno.client.ast_linter_error(error_properties.native_error, annotation);
            }
            return util.ohno.client.ast_linter_error(annotation);
        };
        this.create_ast_linter_warning = function (error_properties) {
            var util = _this.container.get(di_symbols_1.BINDING.Util);
            var annotation = {
                client_annotation: error_properties,
            };
            if (error_properties.native_error != undefined) {
                return util.ohno.client.ast_linter_warning(error_properties.native_error, annotation);
            }
            return util.ohno.client.ast_linter_warning(annotation);
        };
        var basic_blocks_requirements = spec.basic_blocks_requirements, compiler_requirements = spec.compiler_requirements, configuration = spec.configuration, logger = spec.logger;
        var logger_ = logger;
        if (logger_ == undefined) {
            var cwarn = console.warn.bind(console);
            var cerr = console.error.bind(console);
            var clog = console.log.bind(console);
            logger_ = {
                fatal: cerr,
                error: cerr,
                warn: cwarn,
                info: clog,
                debug: clog,
                trace: clog,
            };
        }
        var conf = configuration || {};
        if (!!conf.deterministic && conf.warp_interpreter_millisecond_time_limit !== undefined) {
            throw new Error("Configuration error! Can't use warp_interpreter_millisecond_time_limit in deterministic mode");
        }
        this.container = container_1.get_instance({
            configuration: conf,
            basic_blocks_requirements: basic_blocks_requirements,
            compiler_requirements: compiler_requirements,
            logger: logger_,
        });
    }
    Heart.prototype.get_event_bus = function () {
        if (this.event_bus == undefined) {
            this.event_bus = event_bus_1.as_public_event_bus(this.container.get(di_symbols_1.BINDING.EventBus));
        }
        return this.event_bus;
    };
    Heart.prototype.get_compiler = function () {
        if (this.compiler == undefined) {
            if (this.spec.compiler_requirements == undefined) {
                return r.fail('Heart compiler requirements unfulfilled, cannot get compiler');
            }
            this.compiler = this.container.get(di_symbols_1.BINDING.Compiler);
        }
        return r.success(this.compiler);
    };
    Heart.prototype.get_util = function () {
        if (this.util == undefined) {
            this.util = this.container.get(di_symbols_1.BINDING.Util);
        }
        return this.util;
    };
    Heart.prototype.get_runtime_data = function () {
        if (this.runtime_data == undefined) {
            this.runtime_data = this.container.get(di_symbols_1.BINDING.RuntimeData);
        }
        return this.runtime_data;
    };
    Heart.prototype.get_registry = function () {
        if (this.registry == undefined) {
            this.registry = this.container.get(di_symbols_1.BINDING.Registry);
        }
        return this.registry;
    };
    Heart.prototype.get_runtime_manager = function () {
        if (this.runtime_manager == undefined) {
            this.runtime_manager = this.container.get(di_symbols_1.BINDING.RuntimeManagerFacade);
        }
        return this.runtime_manager;
    };
    /**
     * Returns an object with some functions that let you load Heart's essential
     * basic blocks into Heart.
     *
     * * load_domain_functions: Make it possible to *run* User Code that used these blocks
     *
     * * load_linters: Ensure Heart has loaded its Basic linters. Must be called if using the
     *   load_domain_functions function instead of loading the full BlockProvider
     *
     * * init: Get an object that lets you use the test blocks with Blockly
     *   * get_block_provider: Get a legacy BlockProvider for the test blocks
     *   * get_block_xml: Get the xml defined for these blocks. Also a legacy interface
     */
    Heart.prototype.basic_blocks = function () {
        if (this.basic_block_provider_factory == undefined) {
            this.basic_block_provider_factory =
                this.container.get(di_symbols_1.BINDING.BasicBlockProviderFactory);
        }
        var bbpf = this.basic_block_provider_factory;
        return {
            // Asking Heart to load the RuntimeProvider for Basic Blocks has no
            // requirements, so can be done here. This will be called by non-IDE
            // environments.
            load_domain_functions: function () {
                bbpf.load_domain_functions();
            },
            load_linters: function () {
                bbpf.load_linters();
            },
        };
    };
    /**
     * An externally defined DomainFunction is allowed to throw errors.
     * It should use this function to construct the errors it throws.
     *
     * Heart will catch any errors thrown by your DomainFunction, but throwing
     * errors created by this function makes it easy for you to define and respond
     * to specific errors so that you can give more useful messages to your users.
     *
     * It is **strongly** recommended that you use this to give your errors unique
     * IDs, so that you can easily translate / internationalize the presentation
     * of those errors.
     *
     * See the doc/create_block.remarkup file for more information.
     *
     * @param {basic_types.ClientErrorProperties} error_properties A description of the error
     * @return {Catastrophe} An error object that your DomainFunction can throw
     */
    Heart.prototype.create_domain_function_error = function (error_properties) {
        var util = this.container.get(di_symbols_1.BINDING.Util);
        var annotation = {
            client_annotation: error_properties,
        };
        if (error_properties.native_error != undefined) {
            return util.ohno.client.domain_function_error(error_properties.native_error, annotation);
        }
        return util.ohno.client.domain_function_error(annotation);
    };
    /**
     * This function changes Heart's configuration to any values
     * specified. Heart tries its best to apply the new configuration
     * values immediately. Some changes may require you to `stop` and
     * `run` the RuntimeManager again, if it was running.
     *
     * @param {H.PartialHeartConfig} config New configuration values
     */
    Heart.prototype.set_config = function (config) {
        this.container.get(di_symbols_1.BINDING.Config).set(config);
    };
    /**
     * Detects FATAL errors in User Code. Don't be confused by the name `lint`, if
     * any error is found, you must not run the User Code.
     *
     * Before loading compiled User Code into the {@link P.RuntimeManager}, you must
     * pass it through this function to make sure it doesn't have any errors.
     *
     * @param {CompiledEntity[]} compiled_entities The entities who's code you want to check
     * @return {LinterResult} errors and warnings catched by linter
     */
    Heart.prototype.lint = function (compiled_entities, extra_linters) {
        if (extra_linters === void 0) { extra_linters = []; }
        var errors = [];
        var warnings = [];
        var block_util = this.container.get(di_symbols_1.BINDING.BlockUtil);
        var registry = this.container.get(di_symbols_1.BINDING.Registry);
        var linters = registry.get_ast_linters().concat(extra_linters);
        for (var i = 0; i < linters.length; i++) {
            var linter = linters[i];
            var result = linter(compiled_entities, block_util, this.create_ast_linter_error, this.create_ast_linter_warning);
            for (var _i = 0, result_1 = result; _i < result_1.length; _i++) {
                var item = result_1[_i];
                var is_built_in_warning = item.category.unique_code == 'HEART.WARNING';
                var is_client_defined_warning = item.category.unique_code == 'HEART.CLIENT' && item.error.unique_number == 7;
                if (is_built_in_warning || is_client_defined_warning) {
                    warnings.push(item);
                }
                else {
                    errors.push(item);
                }
            }
        }
        return {
            warnings: warnings,
            errors: errors,
        };
    };
    Heart.prototype.get_statistics = function () {
        if (this.real_runtime_manager == undefined) {
            this.real_runtime_manager = this.container.get(di_symbols_1.BINDING.RuntimeManager);
        }
        var n_entities = this.real_runtime_manager.get_n_entities();
        var n_interpreters = this.real_runtime_manager.get_n_interpreters();
        return {
            n_entities: n_entities,
            n_interpreters: n_interpreters,
        };
    };
    return Heart;
}());
exports.Heart = Heart;
/**
 * Call this function to get an instance of Heart.
 * Each time this is called, a separate instance is created.
 * You may run multiple copies of Heart at the same time, if
 * you want to.
 */
function new_heart(spec) {
    // Migrating heart spec can happen here
    // TODO consider if we will return different
    // types or if we will be backwards compatible
    // always
    return new Heart(spec);
}
exports.new_heart = new_heart;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSw0QkFBOEI7QUFDOUIsNkNBQTJDO0FBcUJ6QyxzQkFyQk8sMEJBQVcsQ0FxQlA7QUFqQmIsK0NBQXdEO0FBRXhELHlDQUEyQztBQUMzQywyQ0FBdUM7QUFJdkMsdUNBQXlDO0FBZWxDLHVCQUFVO0FBYmpCLGlEQUFtRDtBQVVqRCx3Q0FBYztBQVRoQixrREFBb0Q7QUFXbEQsa0NBQVc7QUFWYiwyQ0FBNkM7QUFPM0Msa0NBQVc7QUFOYiwyQ0FBNkM7QUFRM0Msa0NBQVc7QUFzRWI7SUFpQkUsZUFBMkIsSUFBZTtRQUExQyxpQkErQkM7UUEvQjBCLFNBQUksR0FBSixJQUFJLENBQVc7UUErSTFDOzs7Ozs7V0FNRztRQUNJLDRCQUF1QixHQUFHLFVBQUMsZ0JBQWtEO1lBQ2xGLElBQU0sSUFBSSxHQUFHLEtBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFTLG9CQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDdEQsSUFBTSxVQUFVLEdBQUc7Z0JBQ2pCLGlCQUFpQixFQUFFLGdCQUFnQjthQUNwQyxDQUFDO1lBQ0YsSUFBSSxnQkFBZ0IsQ0FBQyxZQUFZLElBQUksU0FBUyxFQUFFO2dCQUM5QyxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLGdCQUFnQixDQUN0QyxnQkFBZ0IsQ0FBQyxZQUFZLEVBQzdCLFVBQVUsQ0FDWCxDQUFDO2FBQ0g7WUFDRCxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLGdCQUFnQixDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQ3ZELENBQUMsQ0FBQTtRQUVNLDhCQUF5QixHQUFHLFVBQUMsZ0JBQWtEO1lBQ3BGLElBQU0sSUFBSSxHQUFHLEtBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFTLG9CQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDdEQsSUFBTSxV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