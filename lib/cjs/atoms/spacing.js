"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.block = exports.spacingBaseSizeInRems = void 0;
exports.spacingBaseSizeInRems = 0.5;
/*
 * @deprecated
 */
var block = function (input) {
    if (typeof input === 'string') {
        return "".concat(parseInt(input) * exports.spacingBaseSizeInRems, "rem");
    }
    return "".concat(input * exports.spacingBaseSizeInRems, "rem");
};
exports.block = block;
