var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import React from 'react';
import styled from 'styled-components';
import { block } from '../..';
import { resolveColorValue } from '../../atoms/colors';
import { useTheme } from '../../theme';
import { FooterCopyright } from './copyright';
import { FooterFlavor } from './favor';
import { FooterItem } from './item';
import { FooterTitle } from './title';
export var Footer = function (_a) {
    var children = _a.children;
    var theme = useTheme();
    return (React.createElement(Container, { bc: resolveColorValue(theme.base.grey, 'light') }, children));
};
var Container = styled.footer(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    background-color: ", ";\n    padding: ", " 0 ", ";\n    text-align: center;\n"], ["\n    background-color: ", ";\n    padding: ", " 0 ", ";\n    text-align: center;\n"])), function (props) { return props.bc; }, block(6), block(3));
var NavContainer = styled.nav(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n    margin-bottom: ", ";\n\n    ol {\n        list-style-type: none;\n        margin: 0;\n        padding: 0;\n    }\n"], ["\n    margin-bottom: ", ";\n\n    ol {\n        list-style-type: none;\n        margin: 0;\n        padding: 0;\n    }\n"])), block(4));
Footer.Item = FooterItem;
Footer.Flavor = FooterFlavor;
Footer.Copyright = FooterCopyright;
Footer.Title = FooterTitle;
// eslint-disable-next-line react/display-name
Footer.Nav = function (_a) {
    var children = _a.children;
    return (React.createElement(NavContainer, null,
        React.createElement("ol", null, children)));
};
var templateObject_1, templateObject_2;
