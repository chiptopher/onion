var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import React from 'react';
import styled from 'styled-components';
import { Block } from '../../atoms/block';
import { TableBody } from './body';
import { TableHeader } from './header';
export var Table = function (_a) {
    var children = _a.children;
    return (React.createElement(Container, null,
        React.createElement(Block, { tagName: "table" }, children)));
};
var Container = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    table {\n        border-collapse: collapse;\n        table-layout: fixed;\n        width: 100%;\n\n        tbody {\n            // TODO figure out how to do this in Block\n            tr:last-child {\n                td {\n                    border-style: none;\n                }\n            }\n        }\n    }\n"], ["\n    table {\n        border-collapse: collapse;\n        table-layout: fixed;\n        width: 100%;\n\n        tbody {\n            // TODO figure out how to do this in Block\n            tr:last-child {\n                td {\n                    border-style: none;\n                }\n            }\n        }\n    }\n"])));
Table.Header = TableHeader;
Table.Body = TableBody;
var templateObject_1;
