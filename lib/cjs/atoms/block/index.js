"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Block = void 0;
var react_1 = __importDefault(require("react"));
var styled_components_1 = __importDefault(require("styled-components"));
var theme_1 = require("../../theme");
var resolve_colors_1 = require("./resolve-colors");
var resolve_padding_1 = require("./resolve-padding");
var Block = function (_a) {
    var _b = _a.tagName, tagName = _b === void 0 ? 'div' : _b, color = _a.color, padding = _a.padding, borderRadius = _a.borderRadius, rest = __rest(_a, ["tagName", "color", "padding", "borderRadius"]);
    var theme = (0, theme_1.useTheme)();
    return (react_1.default.createElement(Container, __assign({ as: tagName, borderRadius: borderRadius ? 4 : 0, padding: (0, resolve_padding_1.resolvePadding)(padding) }, (0, resolve_colors_1.resolveColors)(theme, color), rest)));
};
exports.Block = Block;
var Container = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    background-color: ", ";\n    color: ", ";\n    padding: ", ";\n\n    margin-bottom: 1rem;\n\n    border-radius: ", "px;\n"], ["\n    background-color: ", ";\n    color: ", ";\n    padding: ", ";\n\n    margin-bottom: 1rem;\n\n    border-radius: ", "px;\n"])), function (props) { return props.backgroundColor; }, function (props) { return props.color; }, function (p) { return p.padding; }, function (p) { return p.borderRadius; });
var templateObject_1;
