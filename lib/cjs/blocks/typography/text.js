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
exports.Text2 = void 0;
var react_1 = __importDefault(require("react"));
var styled_components_1 = __importDefault(require("styled-components"));
var __1 = require("../..");
var colors_1 = require("../../atoms/colors");
var theme_1 = require("../../theme");
// TODO move to atoms folder
var Text2 = function (_a) {
    var color = _a.color, tagName = _a.tagName, underlined = _a.underlined, style = _a.style, colorTint = _a.colorTint, rest = __rest(_a, ["color", "tagName", "underlined", "style", "colorTint"]);
    var textColor = (0, theme_1.useTextColor)(color);
    var props = __assign({ as: tagName, color: (0, colors_1.resolveColorValue)(textColor, colorTint) }, rest);
    switch (style) {
        case 'title':
            return react_1.default.createElement(TitleStyleTag, __assign({}, props));
        case 'body':
            return react_1.default.createElement(BodyStyleTag, __assign({}, props));
        case 'caption':
            return react_1.default.createElement(CaptionStyleTag, __assign({}, props));
        case 'header':
            return react_1.default.createElement(HeaderStyleTag, __assign({}, props));
        case 'subheader':
            return react_1.default.createElement(SubheaderStlyeTag, __assign({}, props));
        case 'label':
            return react_1.default.createElement(LabelStyleTag, __assign({}, props));
    }
};
exports.Text2 = Text2;
var Container = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    color: ", ";\n    ", ";\n    font-family: 'Nunito', sans-serif;\n    margin: 0;\n    padding: 0;\n    ", "\n    cursor: inherit;\n"], ["\n    color: ", ";\n    ", ";\n    font-family: 'Nunito', sans-serif;\n    margin: 0;\n    padding: 0;\n    ", "\n    cursor: inherit;\n"])), function (props) { return props.color; }, function (props) { return props.marginBottom && "margin-bottom: ".concat((0, __1.block)(1.5)); }, function (props) { return props.underlined && 'text-decoration: underline'; });
var TitleStyleTag = (0, styled_components_1.default)(Container)(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n    font-size: 2.75rem;\n    font-weight: bold;\n"], ["\n    font-size: 2.75rem;\n    font-weight: bold;\n"])));
var BodyStyleTag = (0, styled_components_1.default)(Container)(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n    font-size: 1rem;\n"], ["\n    font-size: 1rem;\n"])));
var CaptionStyleTag = (0, styled_components_1.default)(Container)(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n    font-size: 0.8rem;\n"], ["\n    font-size: 0.8rem;\n"])));
var HeaderStyleTag = (0, styled_components_1.default)(Container)(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n    font-size: 1.75rem;\n    font-weight: bold;\n"], ["\n    font-size: 1.75rem;\n    font-weight: bold;\n"])));
var SubheaderStlyeTag = (0, styled_components_1.default)(Container)(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n    font-size: 1.5rem;\n    margin-bottom: ", ";\n"], ["\n    font-size: 1.5rem;\n    margin-bottom: ", ";\n"])), (0, __1.block)(1.5));
var LabelStyleTag = (0, styled_components_1.default)(Container)(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n    font-weight: bold;\n    margin-bottom: ", ";\n    font-size: 1rem;\n"], ["\n    font-weight: bold;\n    margin-bottom: ", ";\n    font-size: 1rem;\n"])), (0, __1.block)(1));
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7;
