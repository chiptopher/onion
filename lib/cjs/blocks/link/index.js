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
exports.Link = void 0;
var react_1 = __importDefault(require("react"));
var styled_components_1 = __importDefault(require("styled-components"));
var colors_1 = require("../../atoms/colors");
var theme_1 = require("../../theme");
var Link = function (_a) {
    var _b = _a.tagName, tagName = _b === void 0 ? 'a' : _b, _c = _a.color, color = _c === void 0 ? 'primary' : _c, rest = __rest(_a, ["tagName", "color"]);
    var textColor = (0, theme_1.useTextColor)(color);
    return (react_1.default.createElement(StyledTag, __assign({ as: tagName, color: (0, colors_1.resolveColorValue)(textColor) }, rest)));
};
exports.Link = Link;
var StyledTag = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    text-decoration: underline;\n    border: none;\n    background-color: transparent;\n    padding: 0;\n    color: ", ";\n    cursor: pointer;\n"], ["\n    text-decoration: underline;\n    border: none;\n    background-color: transparent;\n    padding: 0;\n    color: ", ";\n    cursor: pointer;\n"])), function (props) { return props.color; });
var templateObject_1;
