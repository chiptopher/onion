"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SectionHeader = void 0;
var react_1 = __importDefault(require("react"));
var styled_components_1 = __importDefault(require("styled-components"));
var __1 = require("../../");
var SectionHeader = function (_a) {
    var children = _a.children;
    return react_1.default.createElement(Container, null, children);
};
exports.SectionHeader = SectionHeader;
var Container = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n\n    h1,\n    h2,\n    h3,\n    h4,\n    h5,\n    h6 {\n        margin-bottom: 0;\n    }\n\n    margin-bottom: ", ";\n"], ["\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n\n    h1,\n    h2,\n    h3,\n    h4,\n    h5,\n    h6 {\n        margin-bottom: 0;\n    }\n\n    margin-bottom: ", ";\n"])), (0, __1.block)(2));
var templateObject_1;
