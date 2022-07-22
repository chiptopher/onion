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
exports.Container = exports.Button = void 0;
var react_1 = __importDefault(require("react"));
var styled_components_1 = __importDefault(require("styled-components"));
var colors_1 = require("../../atoms/colors");
var spacing_1 = require("../../atoms/spacing");
var theme_1 = require("../../theme");
var label_1 = require("../typography/label");
var Button = function (_a) {
    var type = _a.type, _b = _a.color, color = _b === void 0 ? 'primary' : _b, _c = _a.size, size = _c === void 0 ? 'regular' : _c, children = _a.children, rest = __rest(_a, ["type", "color", "size", "children"]);
    var textColor = (0, theme_1.useBackground)(color).color;
    var unresolvedBackgroundColor = (0, theme_1.useBackgroundColor)(color);
    var padding = buttonPadding[size];
    return (react_1.default.createElement(exports.Container, __assign({ backgroundColor: (0, colors_1.resolveColorValue)(unresolvedBackgroundColor, 'regular'), color: textColor, hoverBackgroundColor: (0, colors_1.resolveColorValue)(unresolvedBackgroundColor, 'dark'), padding: padding, type: type || 'button' }, rest),
        react_1.default.createElement(label_1.Label, null, children)));
};
exports.Button = Button;
exports.Container = styled_components_1.default.button(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    background-color: ", ";\n    border-radius: 4px;\n    border: none;\n    color: ", ";\n    padding: ", ";\n\n    cursor: pointer;\n\n    &:hover {\n        background-color: ", ";\n    }\n"], ["\n    background-color: ", ";\n    border-radius: 4px;\n    border: none;\n    color: ", ";\n    padding: ", ";\n\n    cursor: pointer;\n\n    &:hover {\n        background-color: ", ";\n    }\n"])), function (props) { return props.backgroundColor; }, function (props) { return props.color; }, function (props) { return props.padding; }, function (props) { return props.hoverBackgroundColor; });
var buttonPadding = {
    large: "".concat((0, spacing_1.block)(2), " ").concat((0, spacing_1.block)(3)),
    regular: "".concat((0, spacing_1.block)(1.5), " ").concat((0, spacing_1.block)(2)),
    small: "".concat((0, spacing_1.block)(1), " ").concat((0, spacing_1.block)(1.5)),
};
var templateObject_1;
