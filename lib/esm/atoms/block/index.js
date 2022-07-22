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
import { resolvePadding } from './resolve-padding';
export var Block = function (_a) {
    var _b = _a.tagName, tagName = _b === void 0 ? 'div' : _b, color = _a.color, padding = _a.padding, borderRadius = _a.borderRadius, rest = __rest(_a, ["tagName", "color", "padding", "borderRadius"]);
    var theme = useTheme();
    return (React.createElement(Container, __assign({ as: tagName, borderRadius: borderRadius ? 4 : 0, padding: resolvePadding(padding) }, resolveColors(theme, color), rest)));
};
var Container = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    background-color: ", ";\n    color: ", ";\n    padding: ", ";\n\n    margin-bottom: 1rem;\n\n    border-radius: ", "px;\n"], ["\n    background-color: ", ";\n    color: ", ";\n    padding: ", ";\n\n    margin-bottom: 1rem;\n\n    border-radius: ", "px;\n"])), function (props) { return props.backgroundColor; }, function (props) { return props.color; }, function (p) { return p.padding; }, function (p) { return p.borderRadius; });
var templateObject_1;
