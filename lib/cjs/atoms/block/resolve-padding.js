"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.resolvePadding = void 0;
function resolvePadding(padding) {
    if (padding) {
        return "".concat(padding, "rem");
    }
    return '0rem';
}
exports.resolvePadding = resolvePadding;
