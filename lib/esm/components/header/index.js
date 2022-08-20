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
import { Block, block } from '../..';
import { HeaderContext } from './context';
import { HeaderMenu, HeaderMenuItem, HeaderNavContainer, } from './menu';
export var Header = function (_a) {
    var children = _a.children, inverted = _a.inverted;
    return (React.createElement(HeaderContext.Provider, { value: { inverted: Boolean(inverted) } },
        React.createElement(Block, { marginBottom: "1.5", tagName: "header" }, children)));
};
export var HeaderPrimaryNav = function (_a) {
    var children = _a.children;
    var inverted = React.useContext(HeaderContext).inverted;
    return (React.createElement(Block, { color: inverted ? undefined : 'primary', tagName: "div" },
        React.createElement(Container, null, children)));
};
HeaderPrimaryNav.displayName = 'Header.PrimaryNav';
var Container = styled.nav(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    display: flex;\n    padding: ", " ", ";\n\n    .header-brand {\n        display: flex;\n        align-items: center;\n        white-space: nowrap;\n\n        * {\n            margin-right: ", ";\n        }\n    }\n"], ["\n    display: flex;\n    padding: ", " ", ";\n\n    .header-brand {\n        display: flex;\n        align-items: center;\n        white-space: nowrap;\n\n        * {\n            margin-right: ", ";\n        }\n    }\n"])), block(1), block(3), block(2));
export var HeaderMessage = function (_a) {
    var children = _a.children, color = _a.color;
    return (React.createElement(Block, { color: color, colorTint: "light", paddingBottom: "0.5", paddingLeft: "1.5", paddingRight: "1.5", paddingTop: "0.5" }, children));
};
HeaderMessage.displayName = 'Header.Message';
export var HeaderBrand = function (props) { return React.createElement("a", __assign({ className: "header-brand" }, props)); };
HeaderBrand.displayName = 'Header.Brand';
Header.Brand = HeaderBrand;
Header.NavContainer = HeaderNavContainer;
Header.Menu = HeaderMenu;
Header.MenuItem = HeaderMenuItem;
Header.PrimaryNav = HeaderPrimaryNav;
Header.Message = HeaderMessage;
var templateObject_1;
