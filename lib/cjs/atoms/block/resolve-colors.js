"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.resolveColors = void 0;
var colors_1 = require("../colors");
function resolveColors(theme, config) {
    var c = {
        backgroundColor: 'inherit',
        backgroundColorHover: undefined,
        color: 'inherit',
        colorHover: undefined,
    };
    if (!config) {
        return c;
    }
    if (config.color) {
        c.backgroundColor = (0, colors_1.resolveColorValue)(theme.backgroundColor[config.color], config.tint);
        c.color = (0, colors_1.resolveColorValue)(theme.backgroundTextColor[config.color]);
    }
    if (config.textColor) {
        c.color = (0, colors_1.resolveColorValue)(theme.textColor[config.textColor], config.textColorTint);
    }
    if (config.colorHover) {
        c.backgroundColorHover = (0, colors_1.resolveColorValue)(theme.backgroundColor[config.colorHover], config.tintHover);
        c.colorHover = (0, colors_1.resolveColorValue)(theme.backgroundTextColor[config.colorHover]);
    }
    return c;
}
exports.resolveColors = resolveColors;
