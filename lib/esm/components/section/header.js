var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import React from 'react';
import styled from 'styled-components';
import { block } from '../../';
export var SectionHeader = function (_a) {
    var children = _a.children;
    return React.createElement(Container, null, children);
};
var Container = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n\n    h1,\n    h2,\n    h3,\n    h4,\n    h5,\n    h6 {\n        margin-bottom: 0;\n    }\n\n    margin-bottom: ", ";\n"], ["\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n\n    h1,\n    h2,\n    h3,\n    h4,\n    h5,\n    h6 {\n        margin-bottom: 0;\n    }\n\n    margin-bottom: ", ";\n"])), block(2));
SectionHeader.displayName = 'Section.Header';
var templateObject_1;
