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
import React from 'react';
import styled from 'styled-components';
import { useTheme } from '../../theme';
import { resolveColors } from './resolve-colors';
import { resolveBorderSpacing } from './resolve-padding';
export var Block = function (_a) {
    var _b = _a.tagName, tagName = _b === void 0 ? 'div' : _b, color = _a.color, colorTint = _a.colorTint, borderRadius = _a.borderRadius, padding = _a.padding, paddingTop = _a.paddingTop, paddingBottom = _a.paddingBottom, paddingRight = _a.paddingRight, paddingLeft = _a.paddingLeft, paddingTopHover = _a.paddingTopHover, paddingBottomHover = _a.paddingBottomHover, paddingRightHover = _a.paddingRightHover, paddingLeftHover = _a.paddingLeftHover, marginHover = _a.marginHover, marginTopHover = _a.marginTopHover, marginBottomHover = _a.marginBottomHover, marginRightHover = _a.marginRightHover, marginLeftHover = _a.marginLeftHover, margin = _a.margin, marginTop = _a.marginTop, marginBottom = _a.marginBottom, marginRight = _a.marginRight, marginLeft = _a.marginLeft, colorHover = _a.colorHover, colorTintHover = _a.colorTintHover, alignItems = _a.alignItems, textColor = _a.textColor, textColorTint = _a.textColorTint, rest = __rest(_a, ["tagName", "color", "colorTint", "borderRadius", "padding", "paddingTop", "paddingBottom", "paddingRight", "paddingLeft", "paddingTopHover", "paddingBottomHover", "paddingRightHover", "paddingLeftHover", "marginHover", "marginTopHover", "marginBottomHover", "marginRightHover", "marginLeftHover", "margin", "marginTop", "marginBottom", "marginRight", "marginLeft", "colorHover", "colorTintHover", "alignItems", "textColor", "textColorTint"]);
    var theme = useTheme();
    return (React.createElement(Container, __assign({ alignItems: alignItems, as: tagName, borderRadius: borderRadius ? 4 : 0, margin: resolveBorderSpacing({
            all: margin,
            bottom: marginBottom,
            left: marginLeft,
            right: marginRight,
            top: marginTop,
        }), padding: resolveBorderSpacing({
            all: padding,
            bottom: paddingBottom,
            left: paddingLeft,
            right: paddingRight,
            top: paddingTop,
        }) }, resolveColors(theme, {
        color: color,
        colorHover: colorHover,
        textColor: textColor,
        textColorTint: textColorTint,
        tint: colorTint,
        tintHover: colorTintHover,
    }), rest)));
};
var Container = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    background-color: ", ";\n    color: ", ";\n    padding: ", ";\n    margin: ", ";\n\n    border-radius: ", "px;\n\n    font-size: inherit;\n\n    ", "\n    ", "\n    ", "\n    ", "\n\n    ", "\n    ", "\n    ", "\n    ", "\n    ", "\n    ", "\n    ", "\n    ", "\n    ", "\n    ", "\n    ", "\n\n    &:hover {\n        ", "\n    }\n\n    &:last-child {\n        ", "\n        ", "\n        ", "\n        ", "\n    }\n"], ["\n    background-color: ", ";\n    color: ", ";\n    padding: ", ";\n    margin: ", ";\n\n    border-radius: ", "px;\n\n    font-size: inherit;\n\n    ", "\n    ", "\n    ", "\n    ", "\n\n    ", "\n    ", "\n    ", "\n    ", "\n    ", "\n    ", "\n    ", "\n    ", "\n    ", "\n    ", "\n    ", "\n\n    &:hover {\n        ", "\n    }\n\n    &:last-child {\n        ", "\n        ", "\n        ", "\n        ", "\n    }\n"])), function (props) { return props.backgroundColor; }, function (props) { return props.color; }, function (p) { return p.padding; }, function (p) { return p.margin; }, function (p) { return p.borderRadius; }, function (p) { return p.display && "display: ".concat(p.display, ";"); }, function (p) { return p.justifyContent && "justify-content: ".concat(p.justifyContent, ";"); }, function (p) { return p.alignItems && "align-items: ".concat(p.alignItems, ";"); }, function (p) { return p.flexDirection && "flex-direction: ".concat(p.flexDirection, ";"); }, function (p) { return p.border && "border: ".concat(p.border, ";"); }, function (p) { return p.borderTop && "border-top: ".concat(p.borderTop, ";"); }, function (p) { return p.borderRight && "border-right: ".concat(p.borderRight, ";"); }, function (p) { return p.borderBottom && "border-bottom: ".concat(p.borderBottom, ";"); }, function (p) { return p.borderLeft && "border-left: ".concat(p.borderLeft, ";"); }, function (p) { return p.textDecoration && "text-decoration: ".concat(p.textDecoration, ";"); }, function (p) { return p.listStyleType && "list-style-type: ".concat(p.listStyleType, ";"); }, function (p) { return p.cursor && "cursor: ".concat(p.cursor, ";"); }, function (p) { return p.width && "width: ".concat(p.width, ";"); }, function (p) { return p.textAlign && "text-align: ".concat(p.textAlign, ";"); }, function (p) { return p.verticalAlign && "vertical-align: ".concat(p.verticalAlign, ";"); }, function (p) {
    return p.backgroundColorHover &&
        "background-color: ".concat(p.backgroundColorHover, ";");
}, function (p) { return p.borderTopLastChild && "border-top: ".concat(p.borderTopLastChild, ";"); }, function (p) {
    return p.borderBottomLastChild &&
        "border-bottom: ".concat(p.borderBottomLastChild, ";");
}, function (p) {
    return p.borderLeftLastChild && "border-left: ".concat(p.borderLeftLastChild, ";");
}, function (p) {
    return p.borderRightLastChild &&
        "border-right: ".concat(p.borderRightLastChild, ";");
});
var templateObject_1;
