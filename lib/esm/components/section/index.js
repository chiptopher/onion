var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import React from 'react';
import styled from 'styled-components';
import { SectionAction } from './action';
import { SectionHeader } from './header';
export var Section = function (_a) {
    var children = _a.children;
    return React.createElement(Container, null, children);
};
Section.Header = SectionHeader;
Section.Action = SectionAction;
var Container = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    margin-bottom: 3rem;\n"], ["\n    margin-bottom: 3rem;\n"])));
var templateObject_1;
