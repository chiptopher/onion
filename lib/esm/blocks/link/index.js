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
import { resolveColorValue } from '../../atoms/colors';
import { useTextColor } from '../../theme';
export var Link = function (_a) {
    var _b = _a.tagName, tagName = _b === void 0 ? 'a' : _b, _c = _a.color, color = _c === void 0 ? 'primary' : _c, rest = __rest(_a, ["tagName", "color"]);
    var textColor = useTextColor(color);
    return (React.createElement(StyledTag, __assign({ as: tagName, color: resolveColorValue(textColor) }, rest)));
};
var StyledTag = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    text-decoration: underline;\n    border: none;\n    background-color: transparent;\n    padding: 0;\n    color: ", ";\n    cursor: pointer;\n"], ["\n    text-decoration: underline;\n    border: none;\n    background-color: transparent;\n    padding: 0;\n    color: ", ";\n    cursor: pointer;\n"])), function (props) { return props.color; });
var templateObject_1;
