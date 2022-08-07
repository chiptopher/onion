"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.resolveBorderSpacing = void 0;
var types_1 = require("./types");
function resolveBorderSpacing(value) {
    var topValue = value.all || '0';
    var bottom = value.all || '0';
    var left = value.all || '0';
    var right = value.all || '0';
    if (value.top) {
        topValue = value.top;
    }
    if (value.bottom) {
        bottom = value.bottom;
    }
    if (value.left) {
        left = value.left;
    }
    if (value.right) {
        right = value.right;
    }
    return "".concat(determineValue(topValue), " ").concat(determineValue(right), " ").concat(determineValue(bottom), " ").concat(determineValue(left));
}
exports.resolveBorderSpacing = resolveBorderSpacing;
function determineValue(value) {
    if (types_1.spacingNonNumberValues.includes(value)) {
        return value;
    }
    else {
        return "".concat(value, "rem");
    }
}
