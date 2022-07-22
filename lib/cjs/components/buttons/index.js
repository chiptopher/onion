"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Buttons = void 0;
var react_1 = __importDefault(require("react"));
var styled_components_1 = __importDefault(require("styled-components"));
var block_1 = require("../../atoms/block");
var spacing_1 = require("../../atoms/spacing");
var Buttons = function (_a) {
    var children = _a.children;
    return (react_1.default.createElement(block_1.Block, { marginBottom: "1" },
        react_1.default.createElement(Container, null, children)));
};
exports.Buttons = Buttons;
var Container = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    button {\n        margin-right: ", ";\n    }\n"], ["\n    button {\n        margin-right: ", ";\n    }\n"])), (0, spacing_1.block)(1));
var templateObject_1;
