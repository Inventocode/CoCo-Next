"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var inversify_1 = require("inversify");
var block_provider_1 = require("./block_provider");
var di_symbols_1 = require("./di_symbols");
var RegistryImpl = /** @class */ (function () {
    function RegistryImpl(ohno) {
        this.ohno = ohno;
        // Source of truth
        this.domain_function = {};
        this.domain_function_index = {};
        this.domain_function_list = [];
        this.domain_function_types = [];
        this.respond = {};
        this.lifetime_respond = {};
        this.linter = [];
        this.action_types = {};
        this.meta_finish_out_of_run_group = {};
        this.meta_is_if_dropdown = {};
        this.meta_never_causes_yield = {};
        this.meta_pure = {};
        this.meta_restart_when_finished = {};
    }
    RegistryImpl.prototype.has_responder_type = function (ns_responder_id) {
        return this.respond[ns_responder_id] != undefined;
    };
    RegistryImpl.prototype.has_lifetime_responder_type = function (ns_responder_id) {
        return this.lifetime_respond[ns_responder_id] != undefined;
    };
    RegistryImpl.prototype.has_if_dropdown_type = function (ns_id) {
        return this.meta_is_if_dropdown[ns_id] !== undefined;
    };
    RegistryImpl.prototype.get_responder_info = function (ns_responder_id) {
        var responder = this.respond[ns_responder_id];
        if (responder == undefined) {
            return this.lifetime_respond[ns_responder_id];
        }
        var a_ids = responder.to_action;
        var action_ns_id = block_provider_1.namespaced_id(a_ids.namespace, a_ids.id);
        var action_type = this.action_types[action_ns_id];
        if (action_type == undefined) {
            return undefined;
        }
        return {
            responder_spec: responder,
            action_spec: action_type,
        };
    };
    RegistryImpl.prototype.get_domain_functions = function () {
        return this.domain_function;
    };
    RegistryImpl.prototype.get_domain_function_index = function (ns_id) {
        return this.domain_function_index[ns_id];
    };
    RegistryImpl.prototype.get_domain_function_list = function () {
        return this.domain_function_list;
    };
    RegistryImpl.prototype.get_domain_function_types = function () {
        return this.domain_function_types;
    };
    RegistryImpl.prototype.block_restart_when_finished = function (ns_id) {
        return this.meta_restart_when_finished[ns_id] != undefined;
    };
    RegistryImpl.prototype.block_finish_out_of_run_group = function (ns_id) {
        return this.meta_finish_out_of_run_group[ns_id] != undefined;
    };
    RegistryImpl.prototype.block_pure = function (ns_id) {
        return this.meta_pure[ns_id] != undefined;
    };
    RegistryImpl.prototype.block_never_causes_yield = function (ns_id) {
        return this.meta_never_causes_yield[ns_id] != undefined;
    };
    RegistryImpl.prototype.register = function (spec) {
        var id = spec.id, namespace = spec.namespace, domain_function = spec.domain_function, respond = spec.respond, lifetime_respond = spec.lifetime_respond, metadata = spec.metadata;
        var ns_id = block_provider_1.namespaced_id(namespace, id);
        if (domain_function != undefined) {
            if (this.domain_function_index[ns_id] == undefined) {
                this.domain_function_index[ns_id] = this.domain_function_list.length;
            }
            var n = this.domain_function_index[ns_id];
            var fun = domain_function.bind(this.domain_function);
            this.domain_function_list[n] = fun;
            this.domain_function_types[n] = ns_id;
            this.domain_function[ns_id] = fun;
        }
        if (respond != undefined) {
            this.respond[ns_id] = respond;
        }
        if (lifetime_respond != undefined) {
            this.lifetime_respond[ns_id] = lifetime_respond;
        }
        if (metadata != undefined) {
            if (metadata.restart_when_finished) {
                this.meta_restart_when_finished[ns_id] = true;
            }
            if (metadata.finish_out_of_run_group) {
                this.meta_finish_out_of_run_group[ns_id] = true;
            }
            if (metadata.pure) {
                this.meta_pure[ns_id] = true;
            }
            if (metadata.never_causes_yield) {
                this.meta_never_causes_yield[ns_id] = true;
            }
            if (metadata.is_if_dropdown) {
                this.meta_is_if_dropdown[ns_id] = true;
            }
        }
    };
    RegistryImpl.prototype.register_linter = function (linter) {
        this.linter.push(linter);
    };
    RegistryImpl.prototype.register_action_type = function (spec) {
        var namespace = spec.namespace, id = spec.id;
        var ns_id = block_provider_1.namespaced_id(namespace, id);
        this.action_types[ns_id] = spec;
    };
    RegistryImpl.prototype.misconfigurations = function () {
        var res = [];
        // * Only Non-Dynamic responders must not have domain functions
        for (var ns_id in this.respond) {
            var responder = this.respond[ns_id];
            var non_dynamic = responder.type != block_provider_1.ResponderType.Dynamic;
            var has_domain_function = this.domain_function[ns_id] != undefined;
            if (non_dynamic && has_domain_function) {
                res.push(this.ohno.client.registry_misconfiguration({
                    misconfiguration: "Registered a non-Dynamic responder with a domain function. Only Dynamic Responders use domain functions.",
                    ns_id: ns_id,
                }));
            }
        }
        // * Constructor / Destructor should not have:
        //   * domain_function
        //   * responder
        //   * metadata
        for (var ns_id in this.lifetime_respond) {
            if (this.domain_function[ns_id] != undefined) {
                res.push(this.ohno.client.registry_misconfiguration({
                    misconfiguration: "Registered a Lifetime Responder with a domain function. The domain function will never be used.",
                    ns_id: ns_id,
                }));
            }
            if (this.respond[ns_id] != undefined) {
                res.push(this.ohno.client.registry_misconfiguration({
                    misconfiguration: "Registered both a Lifetime Responder and a Responder with the same nsid.",
                    ns_id: ns_id,
                }));
            }
            var m1 = this.meta_finish_out_of_run_group[ns_id] != undefined;
            var m2 = this.meta_never_causes_yield[ns_id] != undefined;
            var m3 = this.meta_pure[ns_id] != undefined;
            var m4 = this.meta_restart_when_finished[ns_id] != undefined;
            var m5 = this.meta_is_if_dropdown[ns_id] != undefined;
            if (m1 || m2 || m3 || m4 || m5) {
                res.push(this.ohno.client.registry_misconfiguration({
                    misconfiguration: "Registered metadata for a Lifetime Responder. This metadata will never be used.",
                    ns_id: ns_id,
                }));
            }
        }
        // TODO add tests for the if_dropdown misconfigurations
        for (var ns_id in this.meta_is_if_dropdown) {
            if (this.domain_function[ns_id]) {
                res.push(this.ohno.client.registry_misconfiguration({
                    misconfiguration: "Registered a domain function for an if_dropdown. Will not be used.",
                    ns_id: ns_id,
                }));
            }
            if (this.respond[ns_id]) {
                res.push(this.ohno.client.registry_misconfiguration({
                    misconfiguration: "Registered a responder as an if_dropdown.",
                    ns_id: ns_id,
                }));
            }
            var m1 = this.meta_finish_out_of_run_group[ns_id] != undefined;
            var m2 = this.meta_never_causes_yield[ns_id] != undefined;
            var m3 = this.meta_pure[ns_id] != undefined;
            var m4 = this.meta_restart_when_finished[ns_id] != undefined;
            if (m1 || m2 || m3 || m4) {
                res.push(this.ohno.client.registry_misconfiguration({
                    misconfiguration: "Registered other metadata for an if_dropdown. Does not make sense.",
                    ns_id: ns_id,
                }));
            }
        }
        // TODO Add more Registry::misconfiguration checks
        return res;
    };
    RegistryImpl.prototype.get_ast_linters = function () {
        return this.linter;
    };
    RegistryImpl.prototype.get_action_type = function (ns_id) {
        return this.action_types[ns_id];
    };
    RegistryImpl = tslib_1.__decorate([
        inversify_1.injectable(),
        tslib_1.__param(0, inversify_1.inject(di_symbols_1.BINDING.Ohno)),
        tslib_1.__metadata("design:paramtypes", [Object])
    ], RegistryImpl);
    return RegistryImpl;
}());
exports.RegistryImpl = RegistryImpl;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVnaXN0cnkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvcmVnaXN0cnkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQ0EsdUNBQStDO0FBRS9DLG1EQUswQjtBQWdCMUIsMkNBQXVDO0FBSXZDO0lBRUUsc0JBQ2tDLElBQVM7UUFBVCxTQUFJLEdBQUosSUFBSSxDQUFLO1FBRzNDLGtCQUFrQjtRQUNWLG9CQUFlLEdBQTBCLEVBQUUsQ0FBQztRQUM1QywwQkFBcUIsR0FBa0IsRUFBRSxDQUFDO1FBQzFDLHlCQUFvQixHQUFvQixFQUFFLENBQUM7UUFDM0MsMEJBQXFCLEdBQVksRUFBRSxDQUFDO1FBQ3BDLFlBQU8sR0FBd0IsRUFBRSxDQUFDO1FBQ2xDLHFCQUFnQixHQUEyQixFQUFFLENBQUM7UUFDOUMsV0FBTSxHQUFZLEVBQUUsQ0FBQztRQUNyQixpQkFBWSxHQUFxQixFQUFFLENBQUM7UUFFcEMsaUNBQTRCLEdBQWdCLEVBQUUsQ0FBQztRQUMvQyx3QkFBbUIsR0FBZ0IsRUFBRSxDQUFDO1FBQ3RDLDRCQUF1QixHQUFnQixFQUFFLENBQUM7UUFDMUMsY0FBUyxHQUFnQixFQUFFLENBQUM7UUFDNUIsK0JBQTBCLEdBQWdCLEVBQUUsQ0FBQztJQWhCbEQsQ0FBQztJQWtCRyx5Q0FBa0IsR0FBekIsVUFBMEIsZUFBc0I7UUFDOUMsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLGVBQWUsQ0FBQyxJQUFJLFNBQVMsQ0FBQztJQUNwRCxDQUFDO0lBRU0sa0RBQTJCLEdBQWxDLFVBQW1DLGVBQXNCO1FBQ3ZELE9BQU8sSUFBSSxDQUFDLGdCQUFnQixDQUFDLGVBQWUsQ0FBQyxJQUFJLFNBQVMsQ0FBQztJQUM3RCxDQUFDO0lBRU0sMkNBQW9CLEdBQTNCLFVBQTRCLEtBQVk7UUFDdEMsT0FBTyxJQUFJLENBQUMsbUJBQW1CLENBQUMsS0FBSyxDQUFDLEtBQUssU0FBUyxDQUFDO0lBQ3ZELENBQUM7SUFFTSx5Q0FBa0IsR0FBekIs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