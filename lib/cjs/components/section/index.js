"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Section = void 0;
var react_1 = __importDefault(require("react"));
var styled_components_1 = __importDefault(require("styled-components"));
var action_1 = require("./action");
var header_1 = require("./header");
var Section = function (_a) {
    var children = _a.children;
    return react_1.default.createElement(Container, null, children);
};
exports.Section = Section;
exports.Section.Header = header_1.SectionHeader;
exports.Section.Action = action_1.SectionAction;
var Container = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    margin-bottom: 3rem;\n"], ["\n    margin-bottom: 3rem;\n"])));
var templateObject_1;
