var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import React from 'react';
import styled from 'styled-components';
import { block } from '../..';
import { resolveColorValue } from '../../atoms/colors';
import { useTheme } from '../../theme';
import { FooterCopyright } from './copyright';
import { FooterFlavor } from './favor';
import { FooterItem } from './item';
import { NavContainer } from './nav-container';
import { FooterTitle } from './title';
export var Footer = function (_a) {
    var children = _a.children;
    var theme = useTheme();
    return (React.createElement(Container, { bc: resolveColorValue(theme.base.grey, 'light') }, children));
};
var Container = styled.footer(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    background-color: ", ";\n    padding: ", " 0 ", ";\n    text-align: center;\n"], ["\n    background-color: ", ";\n    padding: ", " 0 ", ";\n    text-align: center;\n"])), function (props) { return props.bc; }, block(6), block(3));
Footer.Item = FooterItem;
Footer.Flavor = FooterFlavor;
Footer.Copyright = FooterCopyright;
Footer.Title = FooterTitle;
// eslint-disable-next-line react/display-name
Footer.Nav = function (props) { return React.createElement(NavContainer, __assign({}, props)); };
var templateObject_1;
