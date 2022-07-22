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
import { block } from '../../atoms/spacing';
import { useBackground, useBackgroundColor } from '../../theme';
import { Label } from '../typography/label';
export var Button = function (_a) {
    var type = _a.type, _b = _a.color, color = _b === void 0 ? 'primary' : _b, _c = _a.size, size = _c === void 0 ? 'regular' : _c, children = _a.children, rest = __rest(_a, ["type", "color", "size", "children"]);
    var textColor = useBackground(color).color;
    var unresolvedBackgroundColor = useBackgroundColor(color);
    var padding = buttonPadding[size];
    return (React.createElement(Container, __assign({ backgroundColor: resolveColorValue(unresolvedBackgroundColor, 'regular'), color: textColor, hoverBackgroundColor: resolveColorValue(unresolvedBackgroundColor, 'dark'), padding: padding, type: type || 'button' }, rest),
        React.createElement(Label, null, children)));
};
export var Container = styled.button(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    background-color: ", ";\n    border-radius: 4px;\n    border: none;\n    color: ", ";\n    padding: ", ";\n\n    cursor: pointer;\n\n    &:hover {\n        background-color: ", ";\n    }\n"], ["\n    background-color: ", ";\n    border-radius: 4px;\n    border: none;\n    color: ", ";\n    padding: ", ";\n\n    cursor: pointer;\n\n    &:hover {\n        background-color: ", ";\n    }\n"])), function (props) { return props.backgroundColor; }, function (props) { return props.color; }, function (props) { return props.padding; }, function (props) { return props.hoverBackgroundColor; });
var buttonPadding = {
    large: "".concat(block(2), " ").concat(block(3)),
    regular: "".concat(block(1.5), " ").concat(block(2)),
    small: "".concat(block(1), " ").concat(block(2)),
};
var templateObject_1;
