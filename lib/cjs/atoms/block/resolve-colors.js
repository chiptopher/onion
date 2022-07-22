"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.resolveColors = void 0;
var colors_1 = require("../colors");
function resolveColors(theme, config) {
    if (config) {
        return {
            backgroundColor: (0, colors_1.resolveColorValue)(theme.backgroundColor[config]),
            color: (0, colors_1.resolveColorValue)(theme.backgroundTextColor[config]),
        };
    }
    return {
        backgroundColor: 'inherit',
        color: 'inherit',
    };
}
exports.resolveColors = resolveColors;
