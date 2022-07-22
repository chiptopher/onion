var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import React from 'react';
import styled from 'styled-components';
import { block } from '../..';
import { resolveColorValue } from '../../atoms/colors';
import { useTheme } from '../../theme';
export var ListItem = function (_a) {
    var children = _a.children;
    var theme = useTheme();
    return (React.createElement(Container, { c: resolveColorValue(theme.base.grey, 'regular') }, children));
};
var Container = styled.li(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    padding: ", " ", ";\n\n    &:nth-child(odd) {\n        background-color: ", ";\n    }\n"], ["\n    padding: ", " ", ";\n\n    &:nth-child(odd) {\n        background-color: ", ";\n    }\n"])), block(0.5), block(1), function (p) { return p.c; });
var templateObject_1;
