var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import React from 'react';
import styled from 'styled-components';
import { block } from '../..';
import { resolveColorValue } from '../../atoms/colors';
import { useTheme } from '../../theme';
import { TableBody } from './body';
import { TableHeader } from './header';
export var Table = function (_a) {
    var children = _a.children;
    var theme = useTheme();
    return (React.createElement(Container, { oddRowBackgroundColor: resolveColorValue(theme.base.grey) }, children));
};
var Container = styled.table(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    border-collapse: collapse;\n    table-layout: fixed;\n    width: 100%;\n\n    thead {\n        th {\n            border-bottom: solid 1px black;\n            margin-right: ", ";\n        }\n    }\n\n    tbody {\n        vertical-align: top;\n\n        // override border on last row in table\n        tr:last-child {\n            td {\n                border-style: none;\n            }\n        }\n    }\n"], ["\n    border-collapse: collapse;\n    table-layout: fixed;\n    width: 100%;\n\n    thead {\n        th {\n            border-bottom: solid 1px black;\n            margin-right: ", ";\n        }\n    }\n\n    tbody {\n        vertical-align: top;\n\n        // override border on last row in table\n        tr:last-child {\n            td {\n                border-style: none;\n            }\n        }\n    }\n"])), block(3));
Table.Header = TableHeader;
Table.Body = TableBody;
var templateObject_1;
