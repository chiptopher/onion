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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import React from 'react';
import { faBars, faX } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';
import { block, Button, useTheme } from '../..';
import { isLessThan } from '../../atoms/media';
import { HeaderContext, MenuContentContext } from './context';
export var HeaderMenu = function (_a) {
    var children = _a.children, rest = __rest(_a, ["children"]);
    var breakpoints = useTheme().breakpoints;
    var _b = React.useState(false), hamburgerOpen = _b[0], setHamburgerOpen = _b[1];
    var _c = React.useContext(MenuContentContext), setContent = _c.setContent, setVisible = _c.setVisible;
    React.useEffect(function () {
        setContent(children);
    }, []);
    React.useEffect(function () {
        setVisible(hamburgerOpen);
    }, [hamburgerOpen]);
    return (React.createElement(Container, __assign({}, rest, { breakpoints: breakpoints }),
        children,
        React.createElement("a", { "aria-expanded": "false", "aria-label": "menu", className: "navbar-burger", "data-target": "navbarBasicExample", onClick: function () { return setHamburgerOpen(!hamburgerOpen); }, role: "button" }, hamburgerOpen ? (React.createElement(FontAwesomeIcon, { icon: faX })) : (React.createElement(FontAwesomeIcon, { icon: faBars })))));
};
HeaderMenu.displayName = 'Header.Menu';
var Container = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    width: 100%;\n\n    .navbar-burger {\n        display: none;\n        ", " {\n            display: block;\n        }\n    }\n\n    ", " {\n        justify-content: flex-end;\n\n        .header-menu-start,\n        .header-menu-end {\n            display: none;\n        }\n    }\n\n    .header-menu-end {\n        .menu-item {\n            margin-left: ", ";\n        }\n    }\n"], ["\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    width: 100%;\n\n    .navbar-burger {\n        display: none;\n        ", " {\n            display: block;\n        }\n    }\n\n    ", " {\n        justify-content: flex-end;\n\n        .header-menu-start,\n        .header-menu-end {\n            display: none;\n        }\n    }\n\n    .header-menu-end {\n        .menu-item {\n            margin-left: ", ";\n        }\n    }\n"])), function (p) { return isLessThan(p.breakpoints.tablet.upper); }, function (p) { return isLessThan(p.breakpoints.tablet.upper); }, block(2));
export var HeaderNavContainer = function (_a) {
    var side = _a.side, children = _a.children, rest = __rest(_a, ["side", "children"]);
    return (React.createElement("div", __assign({ className: "header-menu-".concat(side) }, rest), side === 'start'
        ? children
        : React.Children.toArray(children).map(function (child, index, array) {
            return React.cloneElement(child, {
                cta: index === array.length - 1,
            });
        })));
};
HeaderNavContainer.displayName = 'Header.NavContainer';
export var HeaderMenuItem = function (_a) {
    var _b = _a.contrasting, contrasting = _b === void 0 ? false : _b, cta = _a.cta, rest = __rest(_a, ["contrasting", "cta"]);
    var inverted = React.useContext(HeaderContext).inverted;
    var color;
    switch (true) {
        case inverted && !cta:
            color = 'text';
            break;
        case contrasting:
            color = 'light';
            break;
        case !contrasting:
            color = 'primary';
            break;
        default:
            color = undefined;
            break;
    }
    return (React.createElement("span", { className: "menu-item" },
        React.createElement(Button, __assign({ color: color }, rest))));
};
HeaderMenuItem.displayName = 'Header.MenuItem';
var templateObject_1;
