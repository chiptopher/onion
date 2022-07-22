var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import React from 'react';
import styled from 'styled-components';
import { block, Caption } from '../..';
export var FooterCopyright = function (_a) {
    var children = _a.children;
    return (React.createElement(Container, null,
        "\u00A9 ",
        new Date().getFullYear(),
        " ",
        children));
};
var Container = styled(Caption)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    margin-bottom: ", ";\n"], ["\n    margin-bottom: ", ";\n"])), block(1.5));
var templateObject_1;
