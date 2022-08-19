"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListItem = void 0;
var react_1 = __importDefault(require("react"));
var styled_components_1 = __importDefault(require("styled-components"));
var __1 = require("../..");
var colors_1 = require("../../atoms/colors");
var theme_1 = require("../../theme");
var ListItem = function (_a) {
    var children = _a.children;
    var theme = (0, theme_1.useTheme)();
    return (react_1.default.createElement(Container, { c: (0, colors_1.resolveColorValue)(theme.base.grey, 'regular') }, children));
};
exports.ListItem = ListItem;
var Container = styled_components_1.default.li(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    padding: ", " ", ";\n\n    &:nth-child(odd) {\n        background-color: ", ";\n    }\n"], ["\n    padding: ", " ", ";\n\n    &:nth-child(odd) {\n        background-color: ", ";\n    }\n"])), (0, __1.block)(0.5), (0, __1.block)(1), function (p) { return p.c; });
var templateObject_1;
