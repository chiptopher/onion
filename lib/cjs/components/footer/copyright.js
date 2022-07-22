"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FooterCopyright = void 0;
var react_1 = __importDefault(require("react"));
var styled_components_1 = __importDefault(require("styled-components"));
var __1 = require("../..");
var FooterCopyright = function (_a) {
    var children = _a.children;
    return (react_1.default.createElement(Container, null,
        "\u00A9 ",
        new Date().getFullYear(),
        " ",
        children));
};
exports.FooterCopyright = FooterCopyright;
var Container = (0, styled_components_1.default)(__1.Caption)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    margin-bottom: ", ";\n"], ["\n    margin-bottom: ", ";\n"])), (0, __1.block)(1.5));
var templateObject_1;
