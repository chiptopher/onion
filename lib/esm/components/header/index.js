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
/* eslint-disable react/display-name */
import React from 'react';
import styled from 'styled-components';
import { block } from '../..';
import { ColoredBlock } from '../../blocks/colored-block';
import { HeaderMenu, HeaderMenuItem, HeaderNavContainer, } from './menu';
export var Header = function (_a) {
    var children = _a.children;
    return (React.createElement("header", null,
        React.createElement(ColoredBlock, { color: "primary", tagName: "div" },
            React.createElement(Container, null, children))));
};
var Container = styled.nav(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    display: flex;\n    padding: ", " ", ";\n\n    .header-brand {\n        display: flex;\n        align-items: center;\n        white-space: nowrap;\n\n        * {\n            margin-right: ", ";\n        }\n    }\n"], ["\n    display: flex;\n    padding: ", " ", ";\n\n    .header-brand {\n        display: flex;\n        align-items: center;\n        white-space: nowrap;\n\n        * {\n            margin-right: ", ";\n        }\n    }\n"])), block(1), block(3), block(2));
export var HeaderBrand = function (props) {
    return React.createElement("a", __assign({ className: "header-brand" }, props));
};
Header.Brand = HeaderBrand;
Header.NavContainer = HeaderNavContainer;
Header.Menu = HeaderMenu;
Header.MenuItem = HeaderMenuItem;
var templateObject_1;
