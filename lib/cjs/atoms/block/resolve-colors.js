"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.resolveColors = void 0;
var colors_1 = require("../colors");
function resolveColors(theme, config) {
    if (config && config.color) {
        return {
            backgroundColor: (0, colors_1.resolveColorValue)(theme.backgroundColor[config.color], config.tint),
            color: (0, colors_1.resolveColorValue)(theme.backgroundTextColor[config.color]),
        };
    }
    return {
        backgroundColor: 'inherit',
        color: 'inherit',
    };
}
exports.resolveColors = resolveColors;
