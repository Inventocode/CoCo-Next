"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var _includes = require("lodash/includes");
var _isString = require("lodash/isString");
var _some = require("lodash/some");
var inversify_1 = require("inversify");
var di_symbols_1 = require("./di_symbols");
// Only pure functions with no state allowed in this file.
var BlockUtilImpl = /** @class */ (function () {
    function BlockUtilImpl(is, ohno, log) {
        this.is = is;
        this.ohno = ohno;
        this.log = log;
    }
    BlockUtilImpl.prototype.get_first_ancestor_satisfying = function (block, assert) {
        if (block == undefined) {
            return undefined;
        }
        if (!block.parent_block) {
            return undefined;
        }
        if (assert(block.parent_block)) {
            return block.parent_block;
        }
        return this.get_first_ancestor_satisfying(block.parent_block, assert);
    };
    BlockUtilImpl.prototype.has_block_of_types = function (cws, block_types) {
        var _this = this;
        if (_isString(block_types)) {
            // Seems like TypeScript sometimes thinks giving a string
            // to a function that expects string[] is ok. Thanks.
            block_types = [block_types];
        }
        if (cws.length == 0) {
            return false;
        }
        if (block_types.length == 0) {
            return false;
        }
        var find_in_json = function (cb) {
            var found = false;
            _this.ast_for_each(cb, function (b) {
                var block_matches = _includes(block_types, b.type);
                if (block_matches) {
                    found = true;
                    return false; // stop iterating
                }
                return; // keep iterating
            });
            return found;
        };
        return _some(cws, function (cw) {
            var found_in_procs = _some(cw.procedures, find_in_json);
            if (cw.compiled_block_map) {
                return found_in_procs || _some(cw.compiled_block_map, find_in_json);
            }
            return found_in_procs;
        });
    };
    /**
     * Call a function on every block in the subtree. This includes:
     *  - parameter blocks (not parameter values)
     *  - blocks making up conditionals
     *  - child blocks
     *  - next blocks
     *
     *  Attempts to traverse the AST in evaluation order.
     *
     * @param {CompiledBlock} block f is called on this block
     * @param {Function} f called with each block, if it returns `false`, iteration stops
     */
    BlockUtilImpl.prototype.ast_for_each = function (block, f) {
        var _this = this;
        var must_stop = false;
        var iterate = function (b, p) {
            if (must_stop) {
                return;
            }
            if (!b) {
                // This sometimes happens for child_blocks that are set to null for conditionals
                return;
            }
            var r = f(b, p);
            if (r === false) {
                must_stop = true;
                return;
            }
            for (var p_id in b.params) {
                var param = b.params[p_id];
                if (_this.is.compiled_block(param)) {
                    iterate(param, b);
                }
            }
            if (_this.is.cond_block(b)) {
                for (var i = 0; i < b.conditions.length; i++) {
                    var condition = b.conditions[i];
                    if (condition == undefined) {
                        continue;
                    }
                    iterate(condition, b);
                }
            }
            for (var i = 0; i < b.child_block.length; i++) {
                var child = b.child_block[i];
                if (child == undefined) {
                    continue;
                }
                iterate(child, b);
            }
            if (b.next_block) {
                iterate(b.next_block, p);
            }
        };
        iterate(block);
    };
    BlockUtilImpl.prototype.ast_map = function (b, f) {
        var param_res = {};
        for (var p_id in b.params) {
            var param = b.params[p_id];
            if (this.is.compiled_block(param)) {
                param_res[p_id] = this.ast_map(param, f);
            }
        }
        var cond_res = [];
        if (this.is.cond_block(b)) {
            for (var i = 0; i < b.conditions.length; i++) {
                var condition = b.conditions[i];
                if (condition == undefined) {
                    continue;
                }
                cond_res.push(this.ast_map(condition, f));
            }
        }
        var child_res = [];
        for (var i = 0; i < b.child_block.length; i++) {
            var child = b.child_block[i];
            if (!child) {
                continue;
            }
            child_res.push(this.ast_map(child, f));
        }
        var next_res;
        if (b.next_block) {
            next_res = this.ast_map(b.next_block, f);
        }
        return f(b, param_res, cond_res, child_res, next_res);
    };
    BlockUtilImpl.prototype.ast_merkle_tree = function (tree, hasher) {
        var self = this;
        function merkle_node(block, params, conditions, children, next) {
            var is_leaf = Object.keys(params).length == 0
                && conditions.length == 0
                && children.length == 0
                && next == undefined;
            var id_prefix = [];
            var param_types = [];
            var param_vals = [];
            var condition_vals = conditions.map(function (b) { return b.hash; });
            var child_vals = children.map(function (b) { return b.hash; });
            var next_val = [];
            if (next) {
                next_val.push(next.hash);
            }
            // We make sure to mark every node as either a LEAF or an INNER node
            // in order to invalidate most Second Preimage Attacks (see
            // https://www.wikiwand.com/en/Merkle_tree#/Second_preimage_attack )
            id_prefix.push(is_leaf ? 'LEAF' : 'INNER');
            // Deterministic order of parameters is necessary
            // for hashes to stay consistent.
            var param_keys = Object.keys(block.params);
            param_keys = param_keys.sort();
            for (var i = 0; i < param_keys.length; i++) {
                var key = param_keys[i];
                var recursive_result = params[key];
                if (recursive_result != undefined) {
                    // Param was another block, already hashed
                    param_types.push('expr');
                    param_vals.push(recursive_result.hash);
                    continue;
                }
                // Param was string|number|boolean|undefined
                var block_param_val = block.params[key];
                if (block_param_val == undefined) {
                    continue;
                }
                param_types.push(typeof block_param_val);
                param_vals.push(block_param_val.toString());
            }
            // Each block lists the type and number of its constituents.
            // Constituents are sub-nodes or parameter values which contribute,
            // in order, to the hash input string. If we don't do this, we may
            // end up with colissions (e.g. a child statement looking the same
            // as a conditional expression).
            var constituent_declarations = [];
            var procedure_to_call_name = [];
            if (self.is.procedures_callnoreturn(block) || self.is.procedures_callreturn(block)) {
                constituent_declarations.push('F1');
                procedure_to_call_name.push(block.procedure_name);
            }
            if (param_types.length != 0) {
                constituent_declarations.push('P');
                constituent_declarations.push(param_types.length.toString());
            }
            if (conditions.length != 0) {
                constituent_declarations.push('I');
                constituent_declarations.push(conditions.length.toString());
            }
            if (children.length != 0) {
                constituent_declarations.push('C');
                constituent_declarations.push(children.length.toString());
            }
            if (next) {
                constituent_declarations.push('N1');
            }
            var block_declaration = [];
            block_declaration.push(id_prefix); // LEAF or INNER
            block_declaration.push(block.type); // block.type
            if (constituent_declarations.length != 0) {
                // order and number of children / data, on form FxPxIxCxNx
                // this must be kept backwards compatible. For this reason,
                // the letter and number is omitted for x=0
                // F - name of procedure to call if this is a procedure call block
                // P - parameter expressions
                // I - conditional expressions for if-blocks
                // C - child statements
                // N - next statement
                block_declaration.push(constituent_declarations.join(''));
            }
            block_declaration = block_declaration.concat(param_types);
            var hash_input = ["[" + block_declaration.join('::') + "]"]
                .concat(procedure_to_call_name)
                .concat(param_vals)
                .concat(condition_vals)
                .concat(child_vals)
                .concat(next_val)
                .join('__');
            var hash = hasher("(" + hash_input + ")");
            return {
                block_id: block.id,
                hash: hash,
                params: params,
                conditions: conditions,
                children: children,
                next: next,
            };
        }
        return this.ast_map(tree, merkle_node);
    };
    BlockUtilImpl.prototype.ast_flat_map = function (block, f) {
        var res = [];
        this.ast_for_each(block, function (b, p) {
            res.push(f(b, p));
        });
        return res;
    };
    BlockUtilImpl.prototype.ast_block_ids = function (block) {
        return this.ast_flat_map(block, function (b) { return b.id; });
    };
    BlockUtilImpl = tslib_1.__decorate([
        inversify_1.injectable(),
        tslib_1.__param(0, inversify_1.inject(di_symbols_1.BINDING.BlockPredicates)),
        tslib_1.__param(1, inversify_1.inject(di_symbols_1.BINDING.Ohno)),
        tslib_1.__param(2, inversify_1.inject(di_symbols_1.BINDING.Log)),
        tslib_1.__metadata("design:paramtypes", [Object, Object, Object])
    ], BlockUtilImpl);
    return BlockUtilImpl;
}());
exports.BlockUtilImpl = BlockUtilImpl;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmxvY2tfdXRpbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NyYy9ibG9ja191dGlsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLDJDQUE4QztBQUM5QywyQ0FBOEM7QUFDOUMsbUNBQXNDO0FBQ3RDLHVDQUErQztBQUUvQywyQ0FBdUM7QUFzQnZDLDBEQUEwRDtBQUcxRDtJQUVFLHVCQUM0QyxFQUFrQixFQUM1QixJQUFTLEVBQ1YsR0FBVTtRQUZDLE9BQUUsR0FBRixFQUFFLENBQWdCO1FBQzVCLFNBQUksR0FBSixJQUFJLENBQUs7UUFDVixRQUFHLEdBQUgsR0FBRyxDQUFPO0lBQ3hDLENBQUM7SUFFRyxxREFBNkIsR0FBcEMsVUFDSSxLQUFzQyxFQUN0QyxNQUFpRDtRQUVuRCxJQUFJLEtBQUssSUFBSSxTQUFTLEVBQUU7WUFBRSxPQUFPLFNBQVMsQ0FBQztTQUFFO1FBQzdDLElBQUksQ0FBQyxLQUFLLENBQUMsWUFBWSxFQUFFO1lBQUUsT0FBTyxTQUFTLENBQUM7U0FBRTtRQUM5QyxJQUFJLE1BQU0sQ0FBQyxLQUFLLENBQUMsWUFBWSxDQUFDLEVBQUU7WUFDOUIsT0FBTyxLQUFLLENBQUMsWUFBWSxDQUFDO1NBQzNCO1FBQ0QsT0FBTyxJQUFJLENBQUMsNkJBQTZCLENBQUMsS0FBSyxDQUFDLFlBQVksRUFBRSxNQUFNLENBQUMsQ0FBQztJQUN4RSxDQUFDO0lBRU0sMENBQWtCLEdBQXpCLFVBQ0ksR0FBeUIsRUFDekIsV0FBMkI7UUFGL0IsaUJBZ0NDO1FBNUJDLElBQUksU0FBUyxDQUFDLFdBQVcsQ0FBQyxFQUFFO1lBQzFCLHlEQUF5RDtZQUN6RCxxREFBcUQ7WUFDckQsV0FBVyxHQUFHLENBQUMsV0FBVyxDQUFDLENBQUM7U0FDN0I7UUFDRCxJQUFJLEdBQUcsQ0FBQyxNQUFNLElBQUksQ0FBQyxFQUFFO1lBQUUsT0FBTyxLQUFLLENBQUM7U0FBRTtRQUN0QyxJQUFJLFdBQVcsQ0FBQyxNQUFNLElBQUksQ0FB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