var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import React from 'react';
import styled from 'styled-components';
import { Block } from '../../atoms/block';
import { block } from '../../atoms/spacing';
export var Buttons = function (_a) {
    var children = _a.children;
    return (React.createElement(Block, { marginBottom: "1" },
        React.createElement(Container, null, children)));
};
var Container = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    button {\n        margin-right: ", ";\n    }\n"], ["\n    button {\n        margin-right: ", ";\n    }\n"])), block(1));
var templateObject_1;
