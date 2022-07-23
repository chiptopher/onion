var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import React from 'react';
import styled from 'styled-components';
import { resolveColorValue } from '../../atoms/colors';
import { useTheme } from '../../theme';
import { TableHeaderCell } from './header-cell';
export var TableHeader = function (_a) {
    var children = _a.children;
    var theme = useTheme();
    return (React.createElement(Container, { color: resolveColorValue(theme.base.grey) },
        React.createElement("tr", null, children)));
};
TableHeader.displayName = 'Table.Header';
var Container = styled.thead(templateObject_1 || (templateObject_1 = __makeTemplateObject([""], [""])));
TableHeader.Cell = TableHeaderCell;
var templateObject_1;
