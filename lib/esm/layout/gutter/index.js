var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import React from 'react';
import styled from 'styled-components';
import { block } from '../..';
import { isLessThan } from '../../atoms/media';
import { useTheme } from '../../theme';
export var Gutter = function (_a) {
    var children = _a.children;
    var theme = useTheme();
    return (React.createElement(Container, { breakpoints: theme.breakpoints },
        React.createElement("div", { className: "inner-gutter" }, children)));
};
var Container = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    margin: 0 auto;\n    width: 1024px;\n\n    ", " {\n        width: 100%;\n\n        .inner-gutter {\n            padding: 0 ", ";\n        }\n    }\n"], ["\n    margin: 0 auto;\n    width: 1024px;\n\n    ", " {\n        width: 100%;\n\n        .inner-gutter {\n            padding: 0 ", ";\n        }\n    }\n"])), function (p) { return isLessThan(p.breakpoints.desktop.upper); }, block(2));
var templateObject_1;
