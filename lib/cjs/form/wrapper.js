"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HelpText = exports.Wrapper = void 0;
var react_1 = __importDefault(require("react"));
var styled_components_1 = __importDefault(require("styled-components"));
var __1 = require("..");
var colors_1 = require("../atoms/colors");
var caption_1 = require("../blocks/typography/caption");
var label_1 = require("../blocks/typography/label");
var theme_1 = require("../theme");
var Wrapper = function (_a) {
    var children = _a.children, htmlFor = _a.htmlFor, label = _a.label, help = _a.help;
    var theme = (0, theme_1.useTheme)();
    return (react_1.default.createElement(Container, { borderColor: (0, colors_1.resolveColorValue)(theme.base.grey, 'regular') },
        label && react_1.default.createElement(label_1.Label, { htmlFor: htmlFor }, label),
        react_1.default.createElement("div", null, children),
        react_1.default.createElement(exports.HelpText, { help: help })));
};
exports.Wrapper = Wrapper;
var Container = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    margin-bottom: ", ";\n\n    input,\n    textarea {\n        border-radius: 4px;\n        width: 100%;\n        border: solid 1px ", ";\n        font-size: 1rem;\n        padding: 0.25rem 0.25rem;\n    }\n"], ["\n    margin-bottom: ", ";\n\n    input,\n    textarea {\n        border-radius: 4px;\n        width: 100%;\n        border: solid 1px ", ";\n        font-size: 1rem;\n        padding: 0.25rem 0.25rem;\n    }\n"])), (0, __1.block)(1), function (p) { return p.borderColor; });
var HelpText = function (_a) {
    var help = _a.help;
    if (!help) {
        return react_1.default.createElement(react_1.default.Fragment, null);
    }
    if (typeof help === 'string') {
        return react_1.default.createElement(caption_1.Caption, null, help);
    }
    else {
        return react_1.default.createElement(caption_1.Caption, { color: help.color }, help.text);
    }
};
exports.HelpText = HelpText;
var templateObject_1;
