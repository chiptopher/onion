"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Gutter = void 0;
var react_1 = __importDefault(require("react"));
var styled_components_1 = __importDefault(require("styled-components"));
var __1 = require("../..");
var media_1 = require("../../atoms/media");
var theme_1 = require("../../theme");
var Gutter = function (_a) {
    var children = _a.children;
    var theme = (0, theme_1.useTheme)();
    return (react_1.default.createElement(Container, { breakpoints: theme.breakpoints },
        react_1.default.createElement("div", { className: "inner-gutter" }, children)));
};
exports.Gutter = Gutter;
var Container = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    margin: 0 auto;\n    width: 60%;\n\n    .inner-gutter {\n    }\n\n    ", " {\n        width: 100%;\n\n        .inner-gutter {\n            padding: 0 ", ";\n        }\n    }\n"], ["\n    margin: 0 auto;\n    width: 60%;\n\n    .inner-gutter {\n    }\n\n    ", " {\n        width: 100%;\n\n        .inner-gutter {\n            padding: 0 ", ";\n        }\n    }\n"])), function (p) { return (0, media_1.isLessThan)(p.breakpoints.mobile.upper); }, (0, __1.block)(2));
var templateObject_1;
