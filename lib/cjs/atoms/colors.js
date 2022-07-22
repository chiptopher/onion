"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.resolveColorValue = void 0;
function resolveColorValue(value, option) {
    if (option === void 0) { option = 'regular'; }
    if (typeof value === 'string') {
        return value;
    }
    else {
        return value[option];
    }
}
exports.resolveColorValue = resolveColorValue;
