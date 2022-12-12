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
import { Block, block, Gutter } from '../..';
import { HeaderContext, MenuContentContext } from './context';
import { HeaderMenu, HeaderMenuItem, HeaderNavContainer, } from './menu';
export var Header = function (_a) {
    var children = _a.children, inverted = _a.inverted;
    var _b = React.useState(), content = _b[0], setContent = _b[1];
    var _c = React.useState(), visible = _c[0], setVisible = _c[1];
    return (React.createElement(MenuContentContext.Provider, { value: { content: content, setContent: setContent, setVisible: setVisible, visible: visible } },
        React.createElement(HeaderContext.Provider, { value: { inverted: Boolean(inverted) } },
            React.createElement(Block, { marginBottom: "1.5", tagName: "header" }, children))));
};
export var HeaderPrimaryNav = function (_a) {
    var children = _a.children, gutter = _a.gutter;
    var inverted = React.useContext(HeaderContext).inverted;
    var _b = React.useContext(MenuContentContext), content = _b.content, visible = _b.visible;
    return (React.createElement(Block, { color: inverted ? 'white' : 'primary', tagName: "div" },
        gutter ? (React.createElement(Gutter, null,
            React.createElement(Container, null, children))) : (React.createElement(Container, null, children)),
        content && (React.createElement(Block, { display: visible ? undefined : 'none', paddingBottom: "1" },
            React.createElement(MobileNavContainer, { className: "mobile-header-menu" }, content)))));
};
HeaderPrimaryNav.displayName = 'Header.PrimaryNav';
var MobileNavContainer = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    .header-menu-start,\n    .header-menu-end {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n    }\n"], ["\n    .header-menu-start,\n    .header-menu-end {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n    }\n"])));
var Container = styled.nav(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n    display: flex;\n    min-height: ", ";\n\n    .header-brand {\n        display: flex;\n        align-items: center;\n        white-space: nowrap;\n\n        * {\n            margin-right: ", ";\n        }\n    }\n"], ["\n    display: flex;\n    min-height: ", ";\n\n    .header-brand {\n        display: flex;\n        align-items: center;\n        white-space: nowrap;\n\n        * {\n            margin-right: ", ";\n        }\n    }\n"])), block(8), block(2));
export var HeaderMessage = function (_a) {
    var children = _a.children, color = _a.color;
    return (React.createElement(Block, { color: color, colorTint: "light", paddingBottom: "0.5", paddingLeft: "1.5", paddingRight: "1.5", paddingTop: "0.5" }, children));
};
HeaderMessage.displayName = 'Header.Message';
export var HeaderBrand = function (props) { return React.createElement("span", __assign({ className: "header-brand" }, props)); };
HeaderBrand.displayName = 'Header.Brand';
Header.Brand = HeaderBrand;
Header.NavContainer = HeaderNavContainer;
Header.Menu = HeaderMenu;
Header.MenuItem = HeaderMenuItem;
Header.PrimaryNav = HeaderPrimaryNav;
Header.Message = HeaderMessage;
var templateObject_1, templateObject_2;
