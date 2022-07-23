"use strict";
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HeaderBrand = exports.Header = void 0;
/* eslint-disable react/display-name */
var react_1 = __importDefault(require("react"));
var styled_components_1 = __importDefault(require("styled-components"));
var __1 = require("../..");
var menu_1 = require("./menu");
var Header = function (_a) {
    var children = _a.children;
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("header", null,
            react_1.default.createElement(__1.Block, { color: "primary", marginBottom: "1.5", tagName: "div" },
                react_1.default.createElement(Container, null, children))),
        react_1.default.createElement("div", null, "Content that follows the header")));
};
exports.Header = Header;
var Container = styled_components_1.default.nav(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    display: flex;\n    padding: ", " ", ";\n\n    .header-brand {\n        display: flex;\n        align-items: center;\n        white-space: nowrap;\n\n        * {\n            margin-right: ", ";\n        }\n    }\n"], ["\n    display: flex;\n    padding: ", " ", ";\n\n    .header-brand {\n        display: flex;\n        align-items: center;\n        white-space: nowrap;\n\n        * {\n            margin-right: ", ";\n        }\n    }\n"])), (0, __1.block)(1), (0, __1.block)(3), (0, __1.block)(2));
var HeaderBrand = function (props) {
    return react_1.default.createElement("a", __assign({ className: "header-brand" }, props));
};
exports.HeaderBrand = HeaderBrand;
exports.Header.Brand = exports.HeaderBrand;
exports.Header.NavContainer = menu_1.HeaderNavContainer;
exports.Header.Menu = menu_1.HeaderMenu;
exports.Header.MenuItem = menu_1.HeaderMenuItem;
var templateObject_1;
